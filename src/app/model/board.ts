import {Stage} from "./Stage";

export class Board {
  id: number;
  name: string;
  stage: Stage[] = [];

  constructor(name: string) {
    this.name = name;
    }
}
