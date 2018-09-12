export class Task {
  id: number;
  name: string;
  description: string;
  executor: string;
  priority = 1;
  stageId: number;
  previousId: number;
  nextId: number;

  constructor(title: string, description: string, executor: string, priority: number, stageId: number) {
    this.name = title;
    this.description = description;
    this.executor = executor;
    this.priority = priority;
    this.stageId = stageId;
  }
}
