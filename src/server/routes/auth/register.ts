import * as express from 'express';
import db from '../../db';
import { hashPassword } from '../../utilities/security/passwords';
import { createToken } from '../../utilities/security/tokens';

const router = express.Router();

router.post('/', async (req, res) => {
	try {
		const user = { ...req.body };
		user.password = hashPassword(req.body.password);
		let { insertId }: any = await db.Users.insertUser(user.name, user.username, user.password, user.role, user.email);
		let token = await createToken({ userid: insertId });
		res.json({
			token,
			userid: insertId,
			role: 'guest'
		});
	} catch (error) {
		console.log(error);
		res.status(500).json('This code does not work');
	}
});

export default router;
