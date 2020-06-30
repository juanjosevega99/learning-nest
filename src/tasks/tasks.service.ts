import { Injectable } from '@nestjs/common';

import { Task } from './interfaces/Task'

@Injectable()
export class TasksService {

  tasks = [
    {
      id: 1,
      title: "Testings",
      description: 'testing description',
      done: true
    },
    {
      id: 2,
      title: "Testings 2",
      description: 'testing description',
      done: true
    },
    {
      id: 3,
      title: "Testings 3",
      description: 'testing description',
      done: true
    }
  ]

  getTasks(): Task[] {
    return this.tasks
  }
  getTask(id: number): Task {
    return this.tasks.find(task => task.id === id)
  }
}
