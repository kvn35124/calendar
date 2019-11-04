import {Query} from '../index';


const insertEvent = (name: string, description: string, date: Date) => Query(`insert into events (name, description, date) values (?)`, [[name, description, date]]);

// const getAllEvents = () => Query(`Select events.*, event_tags.tagid from events join event_tags on events.id = event_tags.eventid`);

const getAllEvents = () => Query(`Select * from events`);

// const getOneEvent = (id: number) => Query(`Select events.*, category.name from events join category on events.categoryId = category.id where events.id = ?`, [id]);

const getOneEvent = (id: number) => Query(`Select * from events where id = ?`, [id]);

const destroy = (id: number) => Query(`delete from events where id = ?`, [id]);

const update = (name: string, description: string, id: number) => Query(`update events set name = ?, description = ? where id = ?`, [name, description, id]);


export default {
    insertEvent,
    getAllEvents,
    getOneEvent,
    destroy,
    update
}