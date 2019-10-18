
import * as express from 'express';
import categoryRouter from './Categories';
import eventsRouter from './Events';
import {tokenCheckpoint, isGuest} from '../../middlewares/authCheckpoints';



const router = express.Router();

router.use(tokenCheckpoint);
router.use('/category', categoryRouter);
router.use('/events', eventsRouter);

router.get('/test', isGuest, (req, res) => {
    res.status(200).json('it worked');
});

export default router;