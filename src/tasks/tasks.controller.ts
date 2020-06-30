import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

import { CreateTaskDto } from './dto/create-task.dto'

import { Task } from './interfaces/Task'
import { TasksService } from './tasks.service'

@Controller('tasks')
export class TasksController {

  constructor(private taskService: TasksService) {}
  
  @Get()
  getTasks(): Promise<Task[]> {
    return this.taskService.getTasks()
  }
  
  @Get(':taskId')
  getTask(@Param('taskId') taskId: string) {
    return this.taskService.getTask(taskId)
  }

  @Post()
  createTask(@Body() task: CreateTaskDto): Promise<Task> {
    return this.taskService.createTask(task)
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
