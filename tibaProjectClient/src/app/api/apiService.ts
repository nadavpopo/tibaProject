import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../task';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

export class doApi
{
    getListTask(_url): Observable<Task[]>
    {     
        return this.HttpClient.get<Task[]>(_url)
    }
    
    postTask(_url,_body): Observable<Task[]>
    {     
        return this.HttpClient.post<Task[]>(_url,_body)
    }
    
    constructor(private HttpClient: HttpClient){};
}