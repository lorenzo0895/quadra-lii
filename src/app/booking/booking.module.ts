import { NgModule } from '@angular/core';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { BookingConfirmationComponent } from './booking-confirmation/booking-confirmation.component';
import { SharedModule } from '../shared/shared.module';
import { ToastModule } from 'primeng/toast';
import { CancelConfirmationComponent } from './cancel-confirmation/cancel-confirmation.component';

FullCalendarModule.registerPlugins([
  // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
]);

@NgModule({
  declarations: [
    BookingComponent,
    BookingConfirmationComponent,
    CancelConfirmationComponent,
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    FullCalendarModule,
    FormsModule,
    DialogModule,
    InputTextModule,
    CalendarModule,
    CheckboxModule,
    ButtonModule,
    TabViewModule,
    RadioButtonModule,
    ReactiveFormsModule,
    FormsModule,
    CascadeSelectModule,
    SharedModule,
    ToastModule,
  ],
})
export class BookingModule {}
