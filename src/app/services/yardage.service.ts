import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Yardage } from '../models/yardage.model';

const baseUrl = 'http://localhost:8080/api/yardages';

@Injectable({
  providedIn: 'root',
})
export class YardageService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Yardage[]> {
    return this.http.get<Yardage[]>(baseUrl);
  }
  get(id: any): Observable<Yardage> {
    return this.http.get<Yardage>('${baseUrl}/${id}');
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put('${baseUrl}/${id}', data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete('${baseUrl}/${id}');
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  findByTitle(title: any): Observable<Yardage[]> {
    return this.http.get<Yardage[]>(`${baseUrl}?title=${title}`);
  }
}
