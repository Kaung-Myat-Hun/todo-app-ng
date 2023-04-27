import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'angualr-todo-app';
  subtitle: string = 'Write something to do in the form'
  userInput:string ='';
  todoList: string[] = []

  constructor() {}

  onAdd():void {
    if (this.userInput !== "") {
      console.log(this.userInput)
    this.todoList = this.todoList.concat(this.userInput)
    this.userInput=""
    }else{
      alert("sorry please enter field")
    }
  }

  onDelete(itemToDelete: string){
    this.todoList= this.todoList.filter(item=> item !== itemToDelete)
  }
}
