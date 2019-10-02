import {Query} from "../index";


const findUserById = (id: number) => Query(`select * from users where id = ?`, [id]);

const findUserByEmail = (email: string) => Query(`select * from users where email = ?`, [email]);

const insertUser = (name: string, username: string, password: string, email?: string ) => Query(`insert into users (name, email, username, password) values (?)`, [[name, email, username, password]]);


export default {
    findUserById,
    findUserByEmail,
    insertUser
}