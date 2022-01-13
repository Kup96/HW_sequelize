import express from 'express';
import {
  createTask,
  getTask,
  deleteTask,
} from '../controllers/task';

const taskRouter = express.Router();

taskRouter.post('/tasks/addtask', createTask);

taskRouter.get('/tasks/:taskId', getTask);

taskRouter.delete('/tasks/:taskId', deleteTask);

export default taskRouter;
