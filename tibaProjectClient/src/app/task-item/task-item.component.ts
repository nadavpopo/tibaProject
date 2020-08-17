import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit
{
  @Input() item : any;
  @Output() edit = new EventEmitter();
  @Output() del = new EventEmitter();
  
  constructor() { }
  
  ngOnInit(): void{}

  editor()
  {
    this.edit.emit({id: this.item._id , info: this.item.info , cat: this.item.cat});  
  }

  delete()
  {
    this.del.emit(this.item._id);
  }
}
