import * as express from 'express';
import db from '../../db';

const router = express.Router();

router.get(`/:id`, async (req, res) => {
    try {
        let results = await db.Comments.getAll(req.params.id);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.status(500).json("The code ain't working");
    }
})

router.post('/:id', async (req, res) => {
    try {
        let results = await db.Comments.insertComment(req.params.id, req.body._comment, req.body.user_id);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.status(500).json('This code does not work');
    }
})



export default router;


