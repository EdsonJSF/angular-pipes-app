import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit {
  nombreLower: string = 'mi nombre';
  nombreUpper: string = 'MI NOMBRE';
  nombreCompleto: string = 'mI noMbRe cOmpleTo';

  fecha: Date = new Date();

  constructor() {}

  ngOnInit(): void {}
}
