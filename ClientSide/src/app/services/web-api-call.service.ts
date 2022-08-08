import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataSharingService } from './data-sharing.service';

@Injectable({
  providedIn: 'root'
})
export class WebApiCallService {
  domainUrl: string = '';
  uri: string = '';

  constructor(private httpClient: HttpClient, private dataShare: DataSharingService) {
  }

  post(data: any = null) {
    let response = this.httpClient.post(`${this.domainUrl + this.uri}`, data, { responseType: 'text' });
    response.subscribe(res => {
      this.dataShare.updateResponseFromDjango(res);
    });
  }
}
