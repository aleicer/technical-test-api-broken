
/**
 * Task interface
 */
export interface Task {
  id: number;
  title: string;
  completed: string;
}

/**
 * Create Task interface
 */
export interface CreateTaskDto {
  title: any;
  completed: any;
}
