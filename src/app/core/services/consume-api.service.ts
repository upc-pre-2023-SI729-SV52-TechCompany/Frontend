import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'URL_DE_TU_API';

  constructor(private http: HttpClient) {}

  getDatos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
