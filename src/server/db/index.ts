import * as mysql from 'mysql';
import config from '../config';

import Users from './tables/Users';
import Events from './tables/Events';
import Category from './tables/category';
import Tokens from './tables/Tokens';

export const connection = mysql.createPool(config.mysql);


export const Query = (query: string, values?: any) => {
    return new Promise((resolve, reject) => {
        connection.query(query, values, (err, results) => {
            if (err) reject(err);
            return resolve(results);
        })
    })
}



export default {
    Users,
    Events,
    Category,
    Tokens
}