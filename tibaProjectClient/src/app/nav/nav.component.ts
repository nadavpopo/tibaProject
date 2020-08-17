import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from "../task";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit
{
  info: string = "";
  cat: string = "";
  @Output() add = new EventEmitter();
  @Output() delAllTask = new EventEmitter();
  @Output() sortList = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  addTask()
  {
    if(this.info !== "" && this.cat !== "")
    {
      let newTask: Task = 
      {
        info: this.info,
        cat: this.cat
      };

    this.add.emit(newTask);
    this.info = "";
    this.cat = "";
    }
    else
    {
      if(this.info == "")
      {
        alert("You must enter 2 letters or more");
      }
      if(this.cat == "")
      {
        alert("You must to select category");

      }
    }
  }

  sort(_sortBox)
  {
    this.sortList.emit(_sortBox.value);
  }
}
