import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VillageComponent } from './village.component';
import { VillageService } from "./village.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    VillageComponent
  ],
  exports: [
    VillageComponent
],
  providers: [VillageService]
})
export class VillageModule { }
