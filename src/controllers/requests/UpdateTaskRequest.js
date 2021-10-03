export interface UpdateTaskRequest {
  id: number;
  title?: string;
  description?: string;
  completed?: false;
}