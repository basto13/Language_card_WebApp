import { Router } from 'express';
import testController from '../controllers/tests.controller';
import authController from '../controllers/auth.controller';

const router = Router()

router.get('/', testController.getTests)
router.post('/auth', authController.authenticate)

export default router
