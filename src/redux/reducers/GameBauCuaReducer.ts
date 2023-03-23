import { DAT_CUOC, PLAY_AGAIN, PLAY_GAME } from "../types/GameBauCuaType";
export interface IQuanCuoc {
    id: string;
    img: string;
    diemCuoc: number;
}
interface IXucXac {
    id: string;
    img: string;
}
export interface InitialState {
    danhSachCuoc: IQuanCuoc[],
    tongDiem: number,
    mangXucXac: IXucXac[],
    }
const initialState :InitialState = {
    danhSachCuoc: [
        { id: 'ga', img: './img/ga.png', diemCuoc: 0 },
        { id: 'bau', img: './img/bau.png', diemCuoc: 0 },
        { id: 'nai', img: './img/nai.png', diemCuoc: 0 },
        { id: 'ca', img: './img/ca.png', diemCuoc: 0 },
        { id: 'cua', img: './img/cua.png', diemCuoc: 0 },
        { id: 'tom', img: './img/tom.png', diemCuoc: 0 },
    ],
    tongDiem: 1000,
    mangXucXac: [
        { id: 'ga', img: './img/ga.png' },
        { id: 'bau', img: './img/bau.png' },
        { id: 'nai', img: './img/nai.png' },
    ],
}
interface ActionProps { type: any; quanCuoc: { id: string; }; value: number; end: any; }
const GameBauCuaReducer = (state = initialState, action: ActionProps) => {
    
    switch (action.type) {

        case DAT_CUOC: {
            const danhSachCuoc = [...state.danhSachCuoc];
            const index = danhSachCuoc.findIndex(quanCuoc => quanCuoc.id === action.quanCuoc.id);
            if (index !== -1) {
                if ((danhSachCuoc[index].diemCuoc === 0 && action.value === -100) || (action.value === 100 && state.tongDiem === 0)) {
                    return { ...state }
                }
                danhSachCuoc[index].diemCuoc += action.value;
            }
            state.tongDiem = state.tongDiem -= action.value;
            state.danhSachCuoc = [...danhSachCuoc];
            return { ...state }
        }

        case PLAY_GAME: {
            const mangXuxXacNgauNhien = Array.from({ length: 3 }, () => {
                const numberRandom = Math.floor(Math.random() * 6);
                return state.danhSachCuoc[numberRandom];
            });
            state.mangXucXac = [...mangXuxXacNgauNhien];

            // xử lí trả thưởng
            // action.end là boolean type
            if (action.end) {
                // duyệt mảng xuc xac ngau nhien khi xoc
                mangXuxXacNgauNhien.forEach((xucXacNgauNhien, index) => {
                    // tim vi tri cua quan cuoc khi xoc trong danh sach tat ca 6 quan cuoc
                    let indexDSC = state.danhSachCuoc.findIndex(quanCuoc => quanCuoc.id === xucXacNgauNhien.id);
                    // neu qan cuoc khi xoc co trong danh sach
                    if (indexDSC !== -1) {
                        // lay so diem cuoc + vao tong diem
                        state.tongDiem += state.danhSachCuoc[indexDSC].diemCuoc;
                    }
                })
                // xử lí hoàn tiền 
                state.danhSachCuoc.forEach((quanCuoc, index) => {
                    let arr_result = mangXuxXacNgauNhien.filter((xucxacnn: IQuanCuoc) => xucxacnn.id === quanCuoc.id);
                    console.log(arr_result);
                    if (arr_result.length == 2) {
                        state.tongDiem += quanCuoc.diemCuoc * 2;
                    } else if (arr_result.length == 3) {
                        state.tongDiem += quanCuoc.diemCuoc * 3;
                    }
                    else if(arr_result.length == 1) {
                        state.tongDiem += quanCuoc.diemCuoc;
                    }
                })
                
                // reset đặt cược
                state.danhSachCuoc = state.danhSachCuoc.map((quanCuoc, index) => {
                    return { ...quanCuoc, diemCuoc: 0 }
                })
            }

            return { ...state };
        }

        case PLAY_AGAIN: {
            // reset điểm cược
            state.tongDiem = 1000;
            // reset đặt cược
            state.danhSachCuoc = state.danhSachCuoc.map((quanCuoc, index) => {
                return { ...quanCuoc, diemCuoc: 0 }
            });
            return { ...state }
        }


        default:
            return state
    }
}

export default GameBauCuaReducer;