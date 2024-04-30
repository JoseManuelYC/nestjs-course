import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private task = [];

  createTasks(data: CreateTaskDto) {
    this.task.push({
      ...data,
      id: this.task.length + 1,
    });
    return data;
  }

  getTasks() {
    return this.task;
  }

  getTask(id: number) {
    return (
      this.task.find((task) => task.id === id) ??
      new NotFoundException(`No se encuentra la tarea con el id: ${id}`)
    );
  }
}
