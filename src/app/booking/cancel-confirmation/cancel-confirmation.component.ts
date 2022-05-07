import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-cancel-confirmation',
  templateUrl: './cancel-confirmation.component.html',
  styleUrls: ['./cancel-confirmation.component.scss'],
})
export class CancelConfirmationComponent implements OnInit {
  @Input() id!: string;
  form!: FormGroup;
  booking!: any;
  start!: Date;
  isLoading: boolean = true;
  isPast!: boolean;
  @Output() onCancel: EventEmitter<boolean> = new EventEmitter();
  @Output() onConfirm: EventEmitter<any> = new EventEmitter();

  constructor(private bookingService: BookingService, private fb: FormBuilder) {
    this.form = fb.group({
      day: [null, [Validators.required]],
      hour: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.bookingService.getBookingById(this.id).subscribe((el) => {
      this.booking = el[0];
      let start = new Date(el[0].start);
      start.setHours(
        start.getHours() + start.getTimezoneOffset() / 60,
        0,
        0,
        0
      );
      this.start = new Date(start);
      this.form.controls['day'].setValue(start.toISOString().substring(0, 10));
      this.form.controls['hour'].setValue(el[0].hour);
      if (this.start.getTime() < Date.now()) {
        this.isPast = true;
        this.isLoading = false;
      } else {
        this.isPast = false;
        this.isLoading = false;
      }
    });
  }

  getHeight(): number {
    return window.innerHeight;
  }

  toggleCancel() {
    this.onCancel.emit(true);
  }

  toggleConfirm() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    let body = this.form.value;
    body.id = this.id;
    this.onConfirm.emit(body);
  }
}
