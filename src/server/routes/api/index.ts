
import * as express from 'express';
import categoryRouter from './Categories';
import eventsRouter from './Events';
import {tokenCheckpoint} from '../../middlewares/authCheckpoints';



const router = express.Router();

router.use(tokenCheckpoint);
router.use('/category', categoryRouter);
router.use('/events', eventsRouter);



export default router;