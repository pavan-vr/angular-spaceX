import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private http: HttpClient) { }

  getItems(): Observable<any> {
    return this.http.get('https:api.spaceXdata.com/v3/launches?limit=100');
  }
}
