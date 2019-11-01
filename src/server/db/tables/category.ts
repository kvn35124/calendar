import {Query} from "../index";

const getAll = () => Query(`select category.*, event_tags.* from category join event_tags on category.id = event_tags.tagid`);

const getOne = (id: number) => Query(`select category.*, event_tags.* from category join event_tags on category.id = event_tags.tagid where id = ?`, [id]);






export default {
    getAll,
    getOne
}