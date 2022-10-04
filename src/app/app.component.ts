import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  nombre: string = 'mI noMbre';
  valor: number = 1000;
  objeto = {
    valor: "objeto"
  };

  cambiarNombre() {
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.objeto);
  }
}
