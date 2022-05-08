import express, { Router } from 'express';
import { login, checkAuth } from '../controllers';
// import { userAuth } from '../middlewares/auth';

const router: Router = express.Router();

router.post('/login', login);
router.get('/api/checkAuth', checkAuth);

export default router;
