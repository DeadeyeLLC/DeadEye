import {ADD_UID, ADD_DB_INFO} from '../types';

const initialState = {
    database: {},
    uid: 0,
  };

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_UID:
            const newState = Object.assign({}, state, {uid: action.payload});
            //state.uid = action.payload;
            return newState;
        case ADD_DB_INFO: 
            const newStateDb = Object.assign({}, state, {database: action.payload});
            //state.database = action.payload;
            return newStateDb;
        default:
            return state
    }
};

export default loginReducer;