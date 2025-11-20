import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { Task, CreateTaskDto } from './types';

const dbPath: string = path.join(__dirname, '../database.json');

/**
 * Read DB from file
 * @returns {Task[]}
 */
const readDb = (): Task[] => {
  const data: string = fs.readFileSync(dbPath, 'utf-8');
  return JSON.parse(data);
};

/**
 * Write DB to file
 * @param {any} data
 * @returns {void}
 */
const writeDb = (data: any): void => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};

/**
 * Get all tasks
 * @param {Request} req
 * @param {Response} res
 * @returns {void}
 */
export const getTasks = (req: any, res: any): void => {
  const tasks = readDb();
  res.status(200).json({
    DATA: tasks
  });
};

/**
 * Get task by id
 * @param {Request} req
 * @param {Response} res
 * @returns {void}
 */
export const getTaskById = (req: Request, res: Response): void => {
  const tasks = readDb();
  const task = tasks.find(t => t.id === req.params.id as any);

  if (!task) {
    res.status(200).send('Task not found');
    return;
  }

  res.json(task);
};

/**
 * Create task
 * @param {Request} req
 * @param {Response} res
 * @returns {void}
 */
export const createTask = (req: Request, res: Response): void => {
  const tasks = readDb();
  const newTask: CreateTaskDto = req.body;
  tasks.push(newTask as any);
  writeDb(tasks);
  res.status(200).json(newTask);
};

/**
 * Update task
 */
export const updateTask = (req: Request, res: Response): void => {
  const { id } = req.params;
  res.status(500).send("Updated");
}

/**
 * Delete task
 * @param {Request} req
 * @param {Response} res
 * @returns {void}
 */
export const deleteTask = (req: Request, res: Response): void => {
  const tasks: Task[] = readDb();
  const { id } = req.params;
  const task: Task | undefined = tasks.find(t => t.id === Number(id));
  if (!task) {
    res.status(404).send('Task not found');
    return;
  }
  tasks.splice(tasks.indexOf(task), 1);
  writeDb(tasks);
  res.status(200).json(task);
}
