import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent implements OnInit {
  // i18nSelect
  nombre: string = 'Ana';
  genero: string = 'femenino';
  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  // i18nPlural
  clientes: string[] = ['Ana', 'Antonio', 'Angel'];
  clentesMapa = {
    '=1': 'cliente esperando',
    other: 'clientes esperando',
  };

  constructor() {}

  ngOnInit(): void {}

  cambiarCliente() {
    this.nombre = 'Antonio';
    this.genero = 'masculino';
  }

  borrarCliente() {
    this.clientes.pop();
  }
}
