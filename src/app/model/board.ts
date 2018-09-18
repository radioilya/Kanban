import {Stage} from "./Stage";

export class Board {
  id: number;
  name: string;
  stage: Stage[] = [];

  constructor(id:number, name: string) {
    this.id = id;
    this.name = name;
  }
}
