import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  toDoList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getToDoList() {
    this.toDoList = this.firebase.list('titles');
    return this.toDoList;
  }

  addTitle(title: string) {
    this.toDoList.push({
      title,
      isChecked: false
    });
  }

  checkOrUnCheckTitle(id: string, flag: boolean) {
    this.toDoList.update(id, {
      isChecked: flag
    });
  }

  removeTitle(id: string) {
    this.toDoList.remove(id);
  }
}
