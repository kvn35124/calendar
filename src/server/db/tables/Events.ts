import {Query} from '../index';


const insertEvent = (name: string, description: string, categoryId: number, date: Date) => Query(`insert into events (name, description, categoryId, date) values (?)`, [[name, description, categoryId, date]]);

const getAllEvents = () => Query(`Select * from events`);

const getOneEvent = (id: number) => Query(`Select events.*, category.category from events join category on events.categoryId = category.id where events.id = ?`, [id]);

const destroy = (id: number) => Query(`delete from events where id = ?`, [id]);

const update = (name: string, description: string, categoryId: number, id: number) => Query(`update events set name = ?, description = ?, categoryId = ? where id = ?`, [name, description, categoryId, id]);


export default {
    insertEvent,
    getAllEvents,
    getOneEvent,
    destroy,
    update
}