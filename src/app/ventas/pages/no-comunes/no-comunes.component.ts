import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

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

  // KeyValue Pipe
  persona = {
    nombre: 'Angel',
    edad: 50,
    direccion: 'Venezuela',
  };

  // KeyValue Pipe
  heroes = [
    {
      nombre: 'Super Man',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Acua Man',
      vuela: false,
    },
  ];

  // Asyn Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos date de promesa');
    }, 3500);
  });

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
