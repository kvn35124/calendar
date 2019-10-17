import {Query} from "../index";


const findUserById = (id: number) => Query(`select * from users where id = ?`, [id]);

const findUserByEmail = (email: string) => Query(`select * from users where email = ?`, [email]);

const insertUser = (name: string, username: string, password: string, role: string, email?: string ) => Query(`insert into users (name, email, username, password, role) values (?)`, [[name, email, username, password, role]]);


export default {
    findUserById,
    findUserByEmail,
    insertUser
}