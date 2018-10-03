import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassingDataService {

  emitChange$: Subject<boolean> = new BehaviorSubject<boolean>(null);
  constructor() { }
  emit(value: boolean) {
    this.emitChange$.next(value);
  }
  get emitChange(): BehaviorSubject<boolean> {
    return (this.emitChange$ as BehaviorSubject<boolean>);
  }
}
