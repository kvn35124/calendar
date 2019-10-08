import {Query} from "../index";

const getAll = () => Query(`select * from category`);

const getOne = (id: number) => Query(`select * from category where id = ?`, [id]);




export default {
    getAll,
    getOne
}