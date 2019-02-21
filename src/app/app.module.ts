import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { I18nAngularWinterfellLibModule } from '../../projects/i18n-angular-winterfell-lib/src/lib/i18n-angular-winterfell-lib.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    I18nAngularWinterfellLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
