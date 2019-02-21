import {Component, OnInit} from '@angular/core';
import {I18nAngularWinterfellLibService} from '../../projects/i18n-angular-winterfell-lib/src/lib/i18n-angular-winterfell-lib.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'i18n-angular-winterfell';

  constructor(private service: I18nAngularWinterfellLibService) {
  }


  message(key: string) {
    return this.service.message(key);
  }

  ngOnInit(): void {
    this.service.setConfigurations(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNmVhYTk0M2M2ODdhMjUyODBhOWE4ZSIsImlhdCI6MTU1MDc1NjU5MX0.qMu8V8ZBtIFN4dmkWIOVodmUMOej5_RzSEN0C4h2JCk',
      '5c6eaa943c687a25280a9a8f'
    );
    this.service.getContentList('home', 'gb');
  }

}
