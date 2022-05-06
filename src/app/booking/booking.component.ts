import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import esLocale from '@fullcalendar/core/locales/es';
import { BookingService } from '../services/booking.service';
// import { FullCalendarModule } from '@fullcalendar/angular';
import { EventInput, FullCalendarComponent } from '@fullcalendar/angular';
// import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
// import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import { CalendarOptions } from '@fullcalendar/angular';
import { BookingConfirmationComponent } from './booking-confirmation/booking-confirmation.component';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  isDialogShown: boolean = false;
  date: string = '';
  hourBooked!: any[];
  options!: CalendarOptions;
  @ViewChild('bc') bookingConfirmationComponent!: BookingConfirmationComponent;

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.options = {
      initialView: 'dayGridMonth',
      height: 'auto',
      headerToolbar: {
        left: 'title',
        right: 'prev,next',
      },
      firstDay: 1,
      locale: esLocale,
      displayEventTime: false,
      dateClick: (e) => {
        this.date = e.date.toISOString().substring(0, 10);
        this.bookingService.getBookingsByDate(this.date).subscribe((el) => {
          this.isDialogShown = true;
          this.hourBooked = el;
        });
      },
      eventClick: (e) => {
        console.log(e.event.id);
      },
    };
    this.bookingService.getBookings().subscribe((res: any) => {
      this.options = { ...this.options, events: res };
    });
  }

  closeDialog() {
    this.isDialogShown = false;
  }

  book(body: any) {
    this.bookingService.postBooking(body).subscribe({
      next: (el: any) => {
        if (el?.error) {
          this.bookingConfirmationComponent.error = el.error;
        } else {
          this.options = {...this.options, events: [...<EventInput[]>this.options?.events, el]}
          this.closeDialog();
        }
      },
      error: () => {
        this.bookingConfirmationComponent.error = 'Ocurrió un error';
      },
    });
  }

}
