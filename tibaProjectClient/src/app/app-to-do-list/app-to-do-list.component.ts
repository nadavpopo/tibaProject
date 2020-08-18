import { Component, OnInit } from '@angular/core';
import { Task } from "../task";
import { doApi } from '../api/apiService';
import { localizedString } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-app-to-do-list',
  templateUrl: './app-to-do-list.component.html',
  styleUrls: ['./app-to-do-list.component.css']
})

export class AppToDoListComponent implements OnInit
{
   // myUrl: string = "http://localhost:3000/task";
  myUrl: string = "https://tibe-project.herokuapp.com/task";
  arrList: Task [] = [];
  infoWindow: string;
  catWindow: string;
  idWindow: string;

  constructor(private _doApi: doApi) {}

  ngOnInit(): void
  {
    this.getList();
  }

  getList()
  {
    this._doApi.getListTask(this.myUrl)
    .subscribe(data =>
    {        
      this.arrList = data;
    })
  }

  addTask(_newTask)
  {
    if(_newTask.info.length > 1 && _newTask.cat != "")
    {
      this._doApi.postTask(this.myUrl+"/add",_newTask)
      .subscribe(data =>
      {
        this.arrList = data;
      })
    }
  }

  delAllTask()
  {
    var answer = window.confirm("You're sure you want to delete all data?")
    if (answer)
    {
      this._doApi.postTask(this.myUrl+"/delAll" , {})
      .subscribe(data =>
      {
        this.arrList = [];
      })
    }
  }

  delTask(_id)
  {
    this._doApi.postTask(this.myUrl+"/del", {del:_id})
    .subscribe(data =>
    {
      this.arrList = data;
    })
  }

  editTask(_newTask)
  {
    document.getElementById('id_dark').className="dark container-fluid center";
    this.infoWindow = _newTask.info;
    this.catWindow = _newTask.cat;
    this.idWindow = _newTask.id;
  }

  editTaskApi(_obj)
  {

    let _newTask = {id: this.idWindow , info: _obj.info , cat: _obj.cat};
    console.log(_newTask);
    
    this._doApi.postTask(this.myUrl+"/edit", _newTask)
    .subscribe(data =>
    {      
      this.arrList = data;
    })
    this.closeWindow();
  }

  closeWindow()
  {
    document.getElementById('id_dark').className="d-none"
  }

  sortList(_type)
  {
    this._doApi.postTask(this.myUrl+"/sort", {sort:_type})
    .subscribe(data =>
    {  
      this.arrList = data;
    })
  }
}
