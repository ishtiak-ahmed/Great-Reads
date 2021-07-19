export const ADD_TO_READING_LIST = 'ADD_TO_READING_LIST';

export const REMOVE_FROM_READING_LIST = 'REMOVE_FROM_READING_LIST';

export type id = number | string;

export const addToReadingList = (id : id) => ({
    type: ADD_TO_READING_LIST,
    id,
});

export const removeFromReadingList = (id: id) => ({
    type: REMOVE_FROM_READING_LIST,
    id,
})