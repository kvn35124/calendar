export default {

    mysql: {

        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_DATABASE,
        password: process.env.DB_PASSWORD
    },

    auth: {
        secret: process.env.SECRET
    }
}