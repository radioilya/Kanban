export class Task {
  title: string;
  priority = 1;
  description: string;
  parent_id: number;

  constructor(title: string, description: string, priority: number, parent_id: number) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.parent_id = parent_id;
  }
}
