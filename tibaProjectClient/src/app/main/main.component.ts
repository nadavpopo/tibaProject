import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit
{
  @Input() arrList = new EventEmitter(); 
  @Output() delTask = new EventEmitter();
  @Output() editTask = new EventEmitter();
  
  constructor(){}

  ngOnInit(): void {}
  
  edit(_newTask)
  {
    this.editTask.emit(_newTask);
  }

  del(_id)
  {
    this.delTask.emit(_id);
  }
}