export type TaskStatus = 'todo' | 'in-progress' | 'in-review' | 'done';

export type TaskPriority = 'low' | 'default' | 'high' | 'highest';

export type Task = {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  createdAt: string;
  updatedAt: string;
};

export type CreateTaskInput = {
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
};

export type UpdateTaskInput = Partial<CreateTaskInput>;

export type TaskFilter = 'all' | TaskStatus;
