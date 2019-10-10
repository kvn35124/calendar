import * as express from 'express';
import db from '../../db';


const router = express.Router();


router.get('/', async (req, res) => {
    try {
        let results = await db.Category.getAll();
        res.json(results);
    } catch (error) {
        console.log(error);
        res.status(500).json("Code not working");
    }
})

router.get('/:id', async (req, res) => {
    try {
        let results = await db.Category.getOne(req.params.id);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.status(500).json("The code ain't working");
    }
    
})

export default router;