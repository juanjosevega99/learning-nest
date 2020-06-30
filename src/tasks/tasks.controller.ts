import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
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
  @Put(':id')
  updatingTask(@Body() task: CreateTaskDto, @Param('id') id): string {
    return 'Updating task'
  }
  @Delete(':id')
  deletingTask(@Param('id') id): string {
    return `Deleting task ${id}`
  }
}
