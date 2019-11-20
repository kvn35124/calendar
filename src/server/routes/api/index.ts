
import * as express from 'express';
import eventsRouter from './Events';
import {tokenCheckpoint} from '../../middlewares/authCheckpoints';
import tokenRouter from './Tokens'
import commentsRouter from './Comments';



const router = express.Router();

router.use(tokenCheckpoint);
router.use('/events', eventsRouter);
router.use('/tokens', tokenRouter);
router.use('/comments', commentsRouter);



export default router;