import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, mapTo, tap, toArray } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

type booking = {
  _id: string;
  day: string;
  hour: string;
  flat: string;
  __v: number;
};

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  uri: string = environment.URI_API_BOOKS;

  constructor(private http: HttpClient) {}

  getBookings() {
    return this.http.get(this.uri).pipe(
      map((bookings: any) => {
        return bookings.map((b: any) => {
          return this.convertToEvent(b);
        });
      })
    );
  }

  //returns an array to know wich hours have been already booked ['day','night']
  getBookingsByDate(id: string) {
    return this.http.get(this.uri + '/' + id).pipe(
      map((bookings: any) => {
        return bookings.map((b: any) => {
          return b.hour;
        });
      })
    );
  }

  postBooking(body: any) {
    return this.http.post(this.uri, body).pipe(
      map((b: any) => {
        return this.convertToEvent(b);
      })
    );
  }

  convertToEvent(b: any) {
    let day = b.day.substring(0, 10);
    if (b.hour == 'day') {
      return {
        id: b._id,
        title: b.flat.flat,
        start: day + 'T10:00:00.000Z',
        end: day + 'T12:00:00.000Z',
        backgroundColor: '#20c75d',
        editable: false,
      };
    } else if (b.hour == 'night') {
      return {
        id: b._id,
        title: b.flat.flat,
        start: day + 'T15:00:00.000Z',
        end: day + 'T17:00:00.000Z',
        backgroundColor: '#222eab',
        editable: false,
      };
    } else {
      return undefined;
    }
  }
}
