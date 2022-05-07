import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'quadra-lii';
  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Quadra LII',
        items: [
          { label: 'Reglamento Interno', routerLink: '/info/procedure' },
          { label: 'Novedades', routerLink: '/info/news' },
        ],
      },
      {
        label: 'Perfil',
        items: [
          { label: 'Cambiar contraseña', routerLink: '/profile/password' },
        ],
      },
      {
        label: 'Reservas',
        items: [
          { label: 'Ver calendario', routerLink: 'booking' },
          // { label: 'Buscar/Cancelar Reservas', routerLink: 'booking' },
        ],
      },
    ];
  }
}
