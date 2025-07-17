import { customAlphabet } from 'nanoid';

export const createNanoId = (length: number) => 
    customAlphabet('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', length);

export const nanoid = createNanoId(21);

export { v4 as uuid } from 'uuid';
