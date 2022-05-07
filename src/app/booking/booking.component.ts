import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import esLocale from '@fullcalendar/core/locales/es';
import { BookingService } from '../services/booking.service';
// import { FullCalendarModule } from '@fullcalendar/angular';
import { EventInput, FullCalendarComponent } from '@fullcalendar/angular';
// import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
// import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import { CalendarOptions } from '@fullcalendar/angular';
import { BookingConfirmationComponent } from './booking-confirmation/booking-confirmation.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
  providers: [MessageService]
})
export class BookingComponent implements OnInit {
  isDialogShown: boolean = false;
  isCancelShown: boolean = false
  options!: CalendarOptions;
  date!: string;
  id! : string;
  @ViewChild('bc') bookingConfirmationComponent!: BookingConfirmationComponent;

  constructor(private bookingService: BookingService, private messageService: MessageService) {}

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
        this.isDialogShown = true;
        this.date = e.date.toISOString().substring(0, 10);
      },
      eventClick: (e) => {
        this.id = e.event.id;
        this.isCancelShown = true;
      },
    };
    this.bookingService.getBookings().subscribe((res: any) => {
      this.options = { ...this.options, events: res };
    });
  }
  book(body: any) {
    console.log(body)
    this.bookingService.postBooking(body).subscribe({
      next: (el: any) => {
        if (el?.error) {
          this.bookingConfirmationComponent.error = el.error;
          this.messageService.add({severity: 'error', summary: 'Error', detail: 'No se pudo realizar la reserva'})
        } else {
          this.options = {...this.options, events: [...<EventInput[]>this.options?.events, el]}
          this.messageService.add({severity: 'success', summary: 'Éxito', detail: 'Turno reservado con éxito'})
          this.isDialogShown = false;
        }
      },
      error: (error) => {
        this.bookingConfirmationComponent.error = error;
        this.messageService.add({severity: 'error', summary: 'Error', detail: 'No se pudo realizar la reserva'})
      },
    });
  }
  cancelTurn(body: any) {
    this.bookingService.deleteBooking(body).subscribe({
      next: (res:any) => {
        if(res.success) {
          this.options = {...this.options, events: (<EventInput[]>this.options?.events).filter(el => el.id != body.id)}
          this.messageService.add({severity: 'success', summary: 'Éxito', detail: 'Reserva cancelada con éxito'})
          this.isCancelShown = false;
        } else {
          this.messageService.add({severity: 'error', summary: 'Error', detail: res.error})
        }
      },
      error: (error) => {
        this.messageService.add({severity: 'error', summary: 'Error', detail: 'No pudo cancelarse la reserva'})
      }
    })
  }

}
