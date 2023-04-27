import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'Angualr Todo Application';
  subtitle: string = 'Write some todos in the form'
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
