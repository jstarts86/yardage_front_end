import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CalculationTransferService {
  private yardageSource = new BehaviorSubject<any>({});
  currentYardage = this.yardageSource.asObservable();
  constructor() {}
  changeYardage(calculation: any) {
    this.yardageSource.next(calculation);
  }
}
