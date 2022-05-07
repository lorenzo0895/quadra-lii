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
  uri: string = environment.URI_API + '/books';

  constructor(private http: HttpClient) {}

  getBookings() {
    return this.http.get(this.uri).pipe(
      map((bookings: any) => {
        if (bookings.error) {
          return bookings;
        } else {
          return bookings.map((b: any) => {
            return this.convertToEvent(b);
          });
        }
      })
    );
  }

  getBookingById(id: string) {
    return this.http.get(this.uri + '/searchid/' + id).pipe(
      map((bookings: any) => {
        if (bookings.error) {
          return bookings;
        } else {
          return bookings.map((b: any) => {
            return this.convertToEvent(b);
          });
        }
      })
    );
  }

  //returns an array to know wich hours have been already booked ['day','night']
  getBookingsByDate(date: string) {
    return this.http.get(this.uri + '/searchdate/' + date).pipe(
      map((bookings: any) => {
        if (bookings.error) {
          return bookings;
        } else {
          return bookings.map((b: any) => {
            return b.hour;
          });
        }
      })
    );
  }

  postBooking(body: any) {
    return this.http.post(this.uri, body).pipe(
      map((b: any) => {
        if (b.error) {
          return b;
        } else {
          return this.convertToEvent(b);
        }
      })
    );
  }

  deleteBooking(body: any) {
    return this.http.delete(this.uri, {body});
  }

  convertToEvent(b: any) {
    let day = b.day.substring(0, 10);
    if (b.hour == 'day') {
      return {
        id: b._id,
        title: b.flat.flat,
        start: day + 'T11:00:00.000Z',
        end: day + 'T15:00:00.000Z',
        backgroundColor: '#20c75d',
        editable: false,
        hour: b.hour
      };
    } else if (b.hour == 'night') {
      return {
        id: b._id,
        title: b.flat.flat,
        start: day + 'T20:00:00.000Z',
        end: day + 'T11:59:00.000Z',
        backgroundColor: '#222eab',
        editable: false,
        hour: b.hour
      };
    } else {
      return undefined;
    }
  }
}
