import React from 'react';
import QuanCuoc from './QuanCuoc';
import { useSelector } from 'react-redux';
import { IQuanCuoc } from '../redux/reducers/GameBauCuaReducer';
import { RootState } from '../redux/reducers/rootReducer';

export default function DanhSachCuoc() {

    // const danhSachCuoc = useSelector(state => state.GameBauCuaReducer.danhSachCuoc);
    const danhSachCuoc = useSelector((state: RootState) => state.GameBauCuaReducer.danhSachCuoc);
    const renderDanhSachCuoc = () => {
        return danhSachCuoc.map((quanCuoc: IQuanCuoc, index: React.Key | null | undefined) => {
            return <div className="col-4" key={index}>
                <QuanCuoc quanCuoc={quanCuoc}/>
            </div>
        })
    }

    return (
        <div className="row pl-5 pr-5">
            {renderDanhSachCuoc()}
        </div>
    )
}
