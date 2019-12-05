import { Injectable } from '@angular/core';
import { Task } from '../model/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private _list: Array<Task> = [];
  private currentId = 0;

  constructor() {this.create('Lavar', 'Lavar ropa', 'Poner la lavadora en el programa 6 en frio');
                 this.create('Lavar', 'Lavar vajilla', 'Poner el lavavajillas en el programa 3');
                 this.create('Fregar', 'Fregar suelo', 'Fregar con la fregona el suelo, la fregona que se encuentra en la terraza');
                 this.create('Lavar', 'Lavar ropa', 'Poner la lavadora en el programa 6 en frio');
}



  public create(name: string, type: string, description: string) {
    this._list.push(new Task (this.currentId++, type, name, description));
  }
  get list() {
    return this._list;
  }
// service.update(324, {prop: 'description', val: 'holiiii'}, {prop: 'name', val:'mi tarea'})
// id = 324
// args = [{prop: 'description', val: 'holiiiii'}, {prop: 'name', val: 'mi tarea'}]

  public update(id: number, ...args: [{ prop: string, val: string }]) {
    
    for (const task of this._list) {
      if (task.id === id) {
        for (const propToEdit of args) {
          if (propToEdit.prop in task) {
            task[propToEdit.prop] = propToEdit.val;
          }
        }
        break;
      }
    }
  }
  public delete(id: number) {
    for (let i = 0; i < this._list.length; i++) {
      if (this._list[i].id === id) {
        this._list.splice(i, 1);
        break;
      }
    }
  }

  public getById(id: number){

    for (let i = 0; i < this._list.length; i++) {
      if (this._list[i].id === id) {
        return this._list[i];
      }
  }
}
}
