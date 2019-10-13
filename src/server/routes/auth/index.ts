
import * as express from 'express';


const router = express.Router();

router.use('/users', userRouter);
router.use('/tokens', tokensRouter);


export default router;