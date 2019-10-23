import * as express from 'express';
import db from '../../db';


const router = express.Router();


router.get('/:token', async (req, res) => {
    try {
        let results = await db.Tokens.findUser(req.body.token);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.status(500).json("Code not working");
    }
})


export default router;