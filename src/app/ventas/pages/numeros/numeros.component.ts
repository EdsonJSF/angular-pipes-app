import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [],
})
export class NumerosComponent implements OnInit {
  ventasNetas: number = 25824395.987654;
  porcentaje: number = 0.4632;

  constructor() {}

  ngOnInit(): void {}
}
