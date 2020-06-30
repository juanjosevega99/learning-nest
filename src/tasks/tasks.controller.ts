import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

import { CreateTaskDto } from './dto/create-task.dto'
import { Task } from './interfaces/Task'
import { TasksService } from './tasks.service'

@Controller('tasks')
export class TasksController {

  constructor(private taskService: TasksService) {}
  
  @Get()
  getTasks(): Task[] {
    return this.taskService.getTasks()
  }
  

  @Post()
  createTask(@Body() task: CreateTaskDto): string {
    return 'Creating task'
  }
  @Put(':id')
  updatingTask(@Body() task: CreateTaskDto, @Param('id') id): string {
    return 'Updating task'
  }
  @Delete(':id')
  deletingTask(@Param('id') id): string {
    return `Deleting task ${id}`
  }
}
