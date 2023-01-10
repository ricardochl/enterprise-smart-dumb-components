import { Component, OnDestroy } from "@angular/core";
import { Subject, takeUntil } from "rxjs";

@Component({
  template: ''
})
export abstract class SmartComponent implements OnDestroy {

  private readonly unsubscribe$ = new Subject<void>();

  private readonly subClassNgOnDestroy: Function;

  constructor() {
     this.subClassNgOnDestroy = this.ngOnDestroy;
     this.ngOnDestroy = () => {
        this.subClassNgOnDestroy();
        this.unsunscribe();
     };
  }

  ngOnDestroy() { }

  protected untilComponentDestroy() {
    return takeUntil(this.unsubscribe$);
  }

  private unsunscribe() {
    if (this.unsubscribe$.closed) {
      return;
    }
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
