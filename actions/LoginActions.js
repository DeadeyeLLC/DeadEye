import {ADD_UID, ADD_DB_INFO} from '../types';

export const addUid = uid => (
    {
        type: ADD_UID,
        payload: uid,
    }
);

export const addDbInfo = dbInfo => (
    {
        type: ADD_DB_INFO,
        payload: dbInfo,
    }
);