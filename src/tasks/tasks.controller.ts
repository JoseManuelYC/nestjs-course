import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('/tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  @Get()
  getTasks() {
    return this.tasksService.getTasks();
  }

  @Get('/:id')
  getTask(@Param('id') id: string) {
    return this.tasksService.getTask(parseInt(id));
  }

  @Post()
  createTask(@Body() data: CreateTaskDto) {
    return this.tasksService.createTasks(data);
  }

  @Put()
  updateTasks(@Body() data: UpdateTaskDto) {
    return data;
  }

  @Delete()
  deleteTasks() {
    return 'Eliminando tareas';
  }
  @Patch()
  updateTaskStatus() {
    return 'Actualizando status';
  }
}
