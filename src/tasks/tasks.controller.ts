import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  
  @Get()
  getTasks(): string {
    return 'Retrieving tasks'
  }

  @Post()
  createTask(): string {
    return 'Creating task'
  }
  @Put()
  updatingTask(): string {
    return 'Updating task'
  }
  @Delete()
  deletingTask(): string {
    return 'Deleting task'
  }
}
