import { IQuanCuoc } from "../reducers/GameBauCuaReducer";
import { DAT_CUOC, PLAY_AGAIN, PLAY_GAME } from "../types/GameBauCuaType";
// quanCuoc : {diemCuoc: 200, id: "ga", img: "./img/ga.png"}
const datCuoc = (quanCuoc: IQuanCuoc, value: number) => ({
    type: DAT_CUOC,
    quanCuoc,
    value,
});

const playGame = (end: boolean) => ({
    type: PLAY_GAME,
    end,
});

const playAgain = () => ({
    type: PLAY_AGAIN,

});

export {
    datCuoc,
    playGame,
    playAgain,
}