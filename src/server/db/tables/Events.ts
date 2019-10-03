import {Query} from '../index';


const insertEvent = (id: number, name: string, description?: string) => Query(`insert into events (id, name, description) values (?)`, [[id, name, description]]);


export default {
    insertEvent
}