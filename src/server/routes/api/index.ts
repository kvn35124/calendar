
import * as express from 'express';
// import categoryRouter from './Categories';
import eventsRouter from './Events';
import {tokenCheckpoint} from '../../middlewares/authCheckpoints';
import tokenRouter from './Tokens'



const router = express.Router();

router.use(tokenCheckpoint);
// router.use('/category', categoryRouter);
router.use('/events', eventsRouter);
router.use('/tokens', tokenRouter);



export default router;