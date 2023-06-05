import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  // send_data = new Subject<any>();
  // public data$ = this.send_data.asObservable();
  dataSetComments: BehaviorSubject<string> = new BehaviorSubject<string>('');
  data: Observable<string> = this.dataSetComments.asObservable();

  private dataSetEdit: BehaviorSubject<string> = new BehaviorSubject<string>(
    ''
  );
  dataEditComments: Observable<string> = this.dataSetEdit.asObservable();

  msg$ = new Subject<string>();
  setData(setDataComments: string, id?: number) {
    this.dataSetComments.next(setDataComments);
  }

  editData(editComments: string) {
    this.dataSetEdit.next(editComments);
  }

  setResponse(data: any, name: string) {
    this.msg$.next(data);
  }

  getResponse() {
    return this.msg$;
  }
}
