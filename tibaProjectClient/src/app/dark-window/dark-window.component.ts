import { Component, OnInit, Input, EventEmitter, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-dark-window',
  templateUrl: './dark-window.component.html',
  styleUrls: ['./dark-window.component.css']
})
export class DarkWindowComponent implements OnInit
{
  @Input() infoWindow : any;
  @Input() catWindow : any;
  @Input() idWindow : any;
  @Output() editTaskApi = new EventEmitter();
  @Output() closeWindow = new EventEmitter();
  info: string = "";
  cat: string = "";

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges)
  {
    this.info = this.infoWindow;
    this.cat = this.catWindow;
  }

  editApi()
  {
    this.editTaskApi.emit({info: this.info, cat: this.cat});  
  }

  cencel()
  {
    this.closeWindow.emit();
  }
}
