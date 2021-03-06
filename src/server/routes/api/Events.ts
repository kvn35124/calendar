import * as express from 'express';
import db from '../../db';
import { isGuest, isAdmin } from '../../middlewares/authCheckpoints';

const router = express.Router();


router.get('/', async (req, res) => {
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
        let results = await db.Events.update(req.body.event_name, req.body.description, req.params.id);
        res.json("event saved");
    } catch (error) {
        console.log(error);
        res.status(500).json("The code ain't working");
    }
})

router.post('/', isGuest, async (req, res) => {
    try {
        let results = await db.Events.insertEvent(req.body.event_name, req.body.description, req.body.date);
        res.json("event saved")
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