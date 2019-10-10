
import * as express from 'express';
import categoryRouter from './Categories';
import eventsRouter from './Events';


const router = express.Router();

router.use('/category', categoryRouter);
router.use('/events', eventsRouter);


export default router;