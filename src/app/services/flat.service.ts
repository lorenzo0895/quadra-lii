import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlatService {
  uri: string = '/api/flats';

  constructor(private http: HttpClient) {}

  changePassword(body: any) {
    return this.http.patch(this.uri, body);
  }
}
