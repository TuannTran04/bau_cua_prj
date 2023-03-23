import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { playGame } from '../redux/actions/GameBauCuaAction';
import XucXac from './XucXac';
import { RootState } from '../redux/reducers/rootReducer';

export default function DanhSachXucXac() {

    const mangXucXac = useSelector((state:RootState) => state.GameBauCuaReducer.mangXucXac);

    const dispatch = useDispatch();
    const handleXocXucXac = () => {
        let count = 0;
        const playGameInterval = setInterval(() => {
            count++;
            dispatch(playGame(count === 50));
            if (count === 50) {
                clearInterval(playGameInterval);
            }
        }, 20);
    }
    return (
        <div className="mt-5 pt-5 text-center">
            <div className="text-center" style={{ width: 330, height: 330 }}>
                <div className="bg-white" style={{ width: 330, height: 330, borderRadius: '50%' }}>
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="mt-5 pl-5 pb-5 pr-5 pt-4">
                                <XucXac xucXac={mangXucXac[0]} />
                            </div>
                        </div>
                        <div className="col-6 text-center">
                            <div className="ml-5">
                                <XucXac xucXac={mangXucXac[1]} />
                            </div>
                        </div>
                        <div className="col-6 text-center">
                            <div className="mr-5">
                                <XucXac xucXac={mangXucXac[2]} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <button className="btn btn-danger pl-5 pr-5" style={{ fontSize: 30 }}
                        onClick={() => 
                            handleXocXucXac()
                        }>
                        Xốc
                    </button>
                </div>
            </div>
        </div>
    )
}
