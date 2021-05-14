import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService{

  constructor(private httpClient: HttpClient) { }

  getData(){
    return this.httpClient.get(`http://127.0.0.1:8000/api/topicality`);
  }

  addData(data:any){
    // @ts-ignore
    return this.httpClient.post(`http://127.0.0.1:8000/api/topicality`, data);
  }

  deleteData(id:any){
    return this.httpClient.delete(`http://127.0.0.1:8000/api/topicality/`+id);
  }
}
