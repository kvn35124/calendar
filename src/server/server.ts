import * as express from 'express';
import * as path from 'path';
import * as helmet from 'helmet';
import * as cors from 'cors';
import * as morgan from 'morgan';
import * as compression from 'compression';
import routes from './routes';
import { hashPassword } from './utilities/security/passwords';
import * as passport from 'passport';
import "./middlewares/localstrategy";
import "./middlewares/bearerstrategy";
import * as SocketIO from 'socket.io';


const app = express();
const server = require('http').createServer(app);

// const io = require('socket.io').listen(server);
// users = [];
// connections = [];


app.use(passport.initialize());
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(morgan('dev'));
app.use(routes);
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/index.html'));
});

// io.socket.on('connection', socket => {
	
// })



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
