import {ADD_USER_ID, ADD_DB_INFO} from '../types';

export const addUserId = uid => (
    {
        type: ADD_USER_ID,
        payload: uid,
    }
);

export const addDbInfo = dbInfo => (
    {
        type: ADD_DB_INFO,
        payload: dbInfo,
    }
);