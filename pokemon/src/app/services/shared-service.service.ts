import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  // send_data = new Subject<any>();
  // public data$ = this.send_data.asObservable();
  private dataSetComments: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );
  data: Observable<any> = this.dataSetComments.asObservable();

  private dataSetEdit: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  dataEditComments: Observable<any> = this.dataSetEdit.asObservable();

  constructor() {}

  // getData(): Observable<any> {
  //   return this.send_data.asObservable();
  // }

  setData(setDataComments: any) {
    this.dataSetComments.next(setDataComments);
  }

  editData(editComments: string) {
    this.dataSetEdit.next(editComments);
  }
}
