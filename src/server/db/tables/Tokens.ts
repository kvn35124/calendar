import {Query} from '../index';


const insert = (userid: number) => Query(`insert into tokens (userid) value (?)`, [[userid]]);

const update = (id: number, token: string) => Query(`update tokens set token = ? where id = ?`, [token, id]);

const find = (id: number, token: string) => Query(`select * from tokens where id = ? and token = ?`, [id, token]);

export default {
    insert,
    update,
    find
}