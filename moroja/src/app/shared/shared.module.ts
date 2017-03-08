import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ConstantsService} from "./services/constants.service";
import {StorageService} from './services/storage.service';
import {TimeService} from "./services/time.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent],
  providers: [ConstantsService, StorageService, TimeService]
})
export class SharedModule {
}
