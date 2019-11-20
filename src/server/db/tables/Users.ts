import {Query} from "../index";


const findUserById = (id: number) => Query(`select * from users where id = ?`, [id]);

const findUserByUsername = (username: string) => Query(`select * from users where username = ?`, [username]);

const insertUser = (user_name: string, username: string, password: string, role: string, email?: string ) => Query(`insert into users (user_name, email, username, password, role) values (?)`, [[user_name, email, username, password, role]]);


export default {
    findUserById,
    findUserByUsername,
    insertUser
}