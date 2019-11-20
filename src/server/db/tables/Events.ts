import {Query} from '../index';


const insertEvent = (event_name: string, description: string, date: Date) => Query(`insert into events (event_name, description, date) values (?)`, [[event_name, description, date]]);

const getAllEvents = () => Query(`Select * from events order by date asc`);

const getOneEvent = (id: number) => Query(`Select * from events where id = ?`, [id]);

const destroy = (id: number) => Query(`delete from events where id = ?`, [id]);

const update = (event_name: string, description: string, id: number) => Query(`update events set event_name = ?, description = ? where id = ?`, [event_name, description, id]);


export default {
    insertEvent,
    getAllEvents,
    getOneEvent,
    destroy,
    update
}