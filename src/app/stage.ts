import {Task} from './task';

export class Stage {
  name: string;
  id = 1;
  tasks: Task[] = [];

  constructor(name: string, id: number) {
    this.name = name;
    this.id =  id;
  }
}

export const Stages: Stage[] = [new Stage('План', 0), new Stage('В работе', 1), new Stage('Готово', 2)];
