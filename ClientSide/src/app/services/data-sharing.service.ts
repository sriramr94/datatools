import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  private responseFromDjango = new BehaviorSubject<string>('');
  constructor() { 

  }
  updateResponseFromDjango(response :string)
  {
    this.responseFromDjango.next(response);
  }
  getResponseFromDjango()
  {
    return this.responseFromDjango;
  }
}
