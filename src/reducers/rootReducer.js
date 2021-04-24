import addReducer from './addReducer';
import deleteReducer from './deleteReducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({ deleteReducer,addReducer});
export default rootReducer




