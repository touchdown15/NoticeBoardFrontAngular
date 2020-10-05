import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notice } from '../model/notice-board-model';
import { ResponsePageable } from '../model/responsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  apiUrl= 'http://localhost:8080/api/notices';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  public getNoticesCurrent(numberPage:number): Observable<ResponsePageable>{
    return this.httpClient.get<ResponsePageable>(this.apiUrl + "?page=" + numberPage);

  }

  public getNotice(id): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.get<any>(url);
  }

  public addNotice (notice: any): Observable<Notice> {
    return this.httpClient.post<Notice>(this.apiUrl, notice, this.httpOptions);
  }

  public updateNotice(id, Notice): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.put(url, Notice, this.httpOptions);
  }

  public deleteNotice (id): Observable<Notice> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.delete<Notice>(url, this.httpOptions);
  }

}
