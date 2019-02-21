import {NgModule} from '@angular/core';
import {I18nAngularWinterfellLibComponent} from './i18n-angular-winterfell-lib.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    I18nAngularWinterfellLibComponent,
  ],
  imports: [
    HttpClientModule
  ],
  exports: [I18nAngularWinterfellLibComponent]
})
export class I18nAngularWinterfellLibModule {
}
