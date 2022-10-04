import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../modules/prime-ng/prime-ng.module';

import { MenuComponent } from './menu/menu.component';

const importExport = [MenuComponent];

@NgModule({
  declarations: [importExport],
  imports: [CommonModule, PrimeNgModule],
  exports: [importExport],
})
export class SharedModule {}
