import {registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import {DEFAULT_CURRENCY_CODE, NgModule, LOCALE_ID} from '@angular/core';
import {MAT_DATE_LOCALE} from '@angular/material/core';

registerLocaleData(localeRu);


@NgModule({
  "providers": [
    {
      "provide": DEFAULT_CURRENCY_CODE,
      "useValue": 'RUB'
    },
    {
      "provide": MAT_DATE_LOCALE,
      "useValue": 'ru-RU'
    },
    {
      "provide": LOCALE_ID,
      "useValue": 'ru-RU',
    },
  ],
})
export class AppLocaleModule {
}
