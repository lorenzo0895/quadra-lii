import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking-confirmation',
  templateUrl: './booking-confirmation.component.html',
  styleUrls: ['./booking-confirmation.component.scss'],
})
export class BookingConfirmationComponent implements OnInit {
  form!: FormGroup;
  flats!: any[];
  selectedCity1!: any;
  error: string = '';
  isPast: boolean = false;
  @Input() date!: string;
  @Input() hourBooked!: string[];
  @Output() onConfirm: EventEmitter<any> = new EventEmitter();
  @Output() onCancel: EventEmitter<boolean> = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      day: [null, [Validators.required]],
      hour: [null, [Validators.required]],
      flat: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  ngOnInit() {
    this.isPastFunction();
    this.flats = [
      {
        floor: '1º',
        dptos: [
          '1º A',
          '1º B',
          '1º C',
          '1º D',
        ]
      },
      {
        floor: '2º',
        dptos: [
          '2º A',
          '2º B',
          '2º C',
          '2º D',
        ]
      },
      {
        floor: '3º',
        dptos: [
          '3º A',
          '3º B',
          '3º C',
          '3º D',
        ]
      },
      {
        floor: '4º',
        dptos: [
          '4º A',
          '4º B',
          '4º C',
          '4º D',
        ]
      },
      {
        floor: '5º',
        dptos: [
          '5º A',
          '5º B',
          '5º C',
          '5º D',
        ]
      },
      {
        floor: '6º',
        dptos: [
          '6º A',
          '6º B',
          '6º C',
          '6º D',
        ]
      },
    ];
    this.form.controls['day'].setValue(this.date);
  }

  get flat() {
    return this.form.get('flat');
  }

  get hour() {
    return this.form.get('hour');
  }
  
  get password() {
    return this.form.get('password');
  }

  isPastFunction () {
    let now = new Date();
    let today = new Date(now.toISOString().substring(0,10)).getTime();
    let todayWithDate = new Date(this.date).getTime();
    if (todayWithDate < today) {
      this.isPast = true;
    }
  }

  getHeight(): number {
    return window.innerHeight;
  }

  toogleCancel() {
    this.onCancel.emit(false);
  }

  toggleConfirm() {
    if (this.form.invalid) {
      this.form.markAllAsTouched()
      return;
    }
    this.onConfirm.emit(this.form.value);
  }

}
