import * as express from 'express';
import db from '../../db';
import { isGuest, isAdmin } from '../../middlewares/authCheckpoints';

const router = express.Router();


router.get('/', isGuest, async (req, res) => {
    try {
        let results = await db.Events.getAllEvents();
        res.json(results);
    } catch (error) {
        console.log(error);
        res.status(500).json("The code ain't working");
    }
})

router.get('/:id', async (req, res) => {
    try {
        let results = await db.Events.getOneEvent(req.params.id);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.status(500).json("The code ain't working");
    }
})

router.put('/:id', async (req, res) => {
    try {
        let results = await db.Events.update(req.body.name, req.body.description, req.body.categoryId, req.params.id);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.status(500).json("The code ain't working");
    }
})

router.post('/', isAdmin, async (req, res) => {
    try {
        let results = await db.Events.insertEvent(req.body.name, req.body.description, req.body.categoryId, req.body.date);
        res.json(results)
    } catch (error) {
        console.log(error);
        res.status(500).json("The code ain't working");
    }
})

router.delete('/:id', async (req, res) => {
    try {
        let results = await db.Events.destroy(req.params.id);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.status(500).json("The code ain't working");
    }
})

export default router;