// import { combineReducers } from "redux";
// import GameBauCuaReducer from "./GameBauCuaReducer";

// const rootReducer = combineReducers({
//     GameBauCuaReducer,
// });

// export default rootReducer;

import { combineReducers } from 'redux';
import GameBauCuaReducer from './GameBauCuaReducer';

export interface RootState {
  GameBauCuaReducer: ReturnType<typeof GameBauCuaReducer>;
}

const rootReducer = combineReducers<RootState>({
GameBauCuaReducer,
});


export default rootReducer;