import { Router } from 'express';
import { getTasks, getTaskById, createTask } from './controller';

/**
 * Router for tasks
 */
const router = Router();

router.get('/tasks', getTasks);
router.get('/tasks/:id', getTaskById);
router.post('/tasks', createTask);

export default router;
