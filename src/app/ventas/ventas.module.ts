import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../modules/prime-ng/prime-ng.module';

import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';

import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { VuelaPipe } from './pipes/vuela.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';

const importExport = [
  NumerosComponent,
  NoComunesComponent,
  BasicosComponent,
  OrdenarComponent,
];

@NgModule({
  declarations: [importExport, MayusculasPipe, VuelaPipe, OrdenarPipe],
  imports: [CommonModule, PrimeNgModule],
  exports: [importExport],
})
export class VentasModule {}
