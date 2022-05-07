import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FlatService {
  uri: string = environment.URI_API + '/flats';

  constructor(private http: HttpClient) {}

  changePassword(body: any) {
    return this.http.patch(this.uri, body);
  }
}
