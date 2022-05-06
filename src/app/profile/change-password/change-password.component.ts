import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { FlatService } from 'src/app/services/flat.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
  providers: [MessageService]
})
export class ChangePasswordComponent implements OnInit {

  flats!: any[];
  form!: FormGroup;
  constructor(private fb: FormBuilder, private flatService: FlatService, private messageService: MessageService) {
    this.form = fb.group({
      flat: [null, [Validators.required]],
      oldPassword: [null, [Validators.required]],
      password1: [null, [Validators.required]],
      password2: [null, [Validators.required]]
    })
  }

  ngOnInit(): void {
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
  }

  get flat() {
    return this.form.get('flat')
  }
  get oldPassword() {
    return this.form.get('oldPassword')
  }
  get password1() {
    return this.form.get('password1')
  }
  get password2() {
    return this.form.get('password2')
  }

  confirm() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.flatService.changePassword(this.form.value).subscribe({
      next: (el: any) => {
        if (el.error) {
          this.messageService.add({severity:'error', summary: 'Error', detail: el.error})
        } else {
          this.messageService.add({severity:'success', summary: 'Éxito', detail: "Se ha cambiado la contraseña correctamente"})
        }
      },
      error: () => {
        this.messageService.add({severity:'error', summary: 'Error', detail: 'Ocurrió un error al intentar cambiar la contraseña'})
      }
    })
  }
}
