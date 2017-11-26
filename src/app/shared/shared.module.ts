import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelService } from './services/travel.service'

import { NgbDateParserFormatter, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import { CustomNgbDateParserFormatter } from './custom-ngbdate-i18n';
import { I18n, CustomDatepickerI18n } from './custom-ngbdateparserformatter';

export function dateFormat () {
  return new CustomNgbDateParserFormatter('dd/MM/yyyy');
}

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    TravelService,
    I18n,
    {
      provide: NgbDateParserFormatter,
      useFactory: dateFormat
    },
    {
      provide: NgbDatepickerI18n,
      useClass: CustomDatepickerI18n
    }
  ]
})
export class SharedModule { }
