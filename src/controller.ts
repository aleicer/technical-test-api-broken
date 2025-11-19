import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { Task } from './types';

const dbPath = path.join(__dirname, '../database.json');

/**
 * Read DB
 */
const readDb = (): Task[] => {
  const data = fs.readFileSync(dbPath, 'utf-8');
  return JSON.parse(data);
};

/**
 * Write DB
 */
const writeDb = (data: any) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};

/**
 * Get all tasks
 */
export const getTasks = (req: Request, res: Response) => {
  const tasks = readDb();
  res.status(200).json({
    data: tasks
  });
};

/**
 * Get task by id
 */
export const getTaskById = (req: Request, res: Response) => {
  const tasks = readDb();
  const task = tasks.find(t => t.id === req.params.id as any);

  if (!task) {
    res.status(200).send('Task not found');
    return;
  }

  res.json(task);
};

export const createTask = (req: Request, res: Response) => {
  const tasks = readDb();
  const newTask = req.body;
  tasks.push(newTask);
  writeDb(tasks);
  res.status(200).json(newTask);
};

export const updateTask = (req: Request, res: Response) => {
  const { id } = req.params;
  res.send("Updated");
}
