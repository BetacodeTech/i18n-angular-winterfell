import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class I18nAngularWinterfellLibService {

  token: '';
  site: '';
  page: '';
  language: '';
  content_list = [];
  loadingState = new Subject();

  constructor(private http: HttpClient) {
  }

  setConfigurations(key, site_id) {
    this.token = key;
    this.site = site_id;
  }

  setLanguage(lang) {
    this.language = lang;
    this.getContentList();
  }

  setPage(page) {
    this.page = page;
    this.getContentList();
  }

  getAuthHeader() {
    let header = new HttpHeaders();
    if (this.token != null) {
      header = header.set('Authorization', this.token);
    } else {
      console.log('Key value is null');
    }
    return header;
  }

  async getContentList() {
    const headers = this.getAuthHeader();
    let loading = false;
    await this.http.get('https://winterfell.api.betacode.tech/api/auth/content/' + this.site + '/' + this.page + '/' + this.language, {headers}).subscribe(res => {
      loading = true;
      this.loadingState.next(loading);
      if (res['status'] === 'success') {
        this.content_list = res['data'];
      } else {
        console.log(res['data']);
      }
      loading = false;
      this.loadingState.next(loading);
    });
  }

  message(key: string) {
    for (let i in this.content_list) {
      if (this.content_list[i]['key'] === key) {
        return this.content_list[i]['value'];
      }
    }
    console.log('no content with key:' + key);
  }
}

