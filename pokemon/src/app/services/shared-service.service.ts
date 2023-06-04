import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  // send_data = new Subject<any>();
  // public data$ = this.send_data.asObservable();
  private data: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  data$: Observable<any> = this.data.asObservable();

  constructor() {}

  // getData(): Observable<any> {
  //   return this.send_data.asObservable();
  // }

  setData(newData: any) {
    this.data.next(newData);
  }
}
