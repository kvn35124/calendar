import {Query} from '../index';

const getAll = (event_id: number) => Query('select comments.*, users.id, users.user_name from comments join users on comments.user_id = users.id where comments.event_id = ?', [event_id]);

const insertComment = (event_id: number, _comment: string, user_id: number) => Query(`insert into comments (event_id, _comment, user_id) values (?)`, [[event_id, _comment, user_id]]);

export default {
    getAll,
    insertComment
}