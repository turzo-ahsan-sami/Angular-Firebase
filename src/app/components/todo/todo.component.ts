import { Component, OnInit } from '@angular/core';
import { TodoService } from './../../shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [] 
})
export class TodoComponent implements OnInit {

  toDoListArray: any[];

  constructor(private toDoService: TodoService) { }

  ngOnInit() {

    this.toDoService.getToDoList().snapshotChanges()
    .subscribe( item =>{
      this.toDoListArray = [];
      item.forEach(element=> {
        var x = element.payload.toJSON();
        x["$key"] = element.key;
        this.toDoListArray.push(x);
      });

      this.toDoListArray.sort((a,b) => {return a.isChecked - b.isChecked});
      
    });
  }

  onAdd(itemTitle){
    if(!itemTitle.value) return;
    this.toDoService.addTitle(itemTitle.value);
    itemTitle.value = null;
  }

  onChangeTitleState(item){
    item.isChecked = !item.isChecked;
    this.toDoService.changeTitleState(item.$key,item.isChecked);
  }

  onDelete($key : string){
    this.toDoService.removeTitle($key);
  }

}
