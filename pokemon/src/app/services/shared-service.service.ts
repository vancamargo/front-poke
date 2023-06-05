import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private dataSetComments: BehaviorSubject<string> =
    new BehaviorSubject<string>('');
  data: Observable<string> = this.dataSetComments.asObservable();

  setData(setDataComments: string) {
    this.dataSetComments.next(setDataComments);
  }
}
