import {Task} from './task';

export class Stage {
  id: number;
  name: string;
  description: string;
  boardId: number;
  tasks: Task[] = [];

  constructor(name: string, description: string, boardId:number) {
    this.name = name;
    this.description = description;
    this.boardId = boardId;
  }
}
