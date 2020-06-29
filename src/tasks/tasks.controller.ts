import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto'

@Controller('tasks')
export class TasksController {
  
  @Get()
  getTasks(): {name: string} {
    return {'name': 'clean shoes'}
  }

  @Post()
  createTask(@Body() task: CreateTaskDto): string {
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
