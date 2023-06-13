import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { Load, LoadsService } from '../loads.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnDestroy {
  destroy$ = new Subject;
  @Output() loads = new EventEmitter<Load[]>;
  @Output() loadNumbers = new EventEmitter<string[]>;

  constructor(private readonly service: LoadsService) {}

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  getLoads() {
    this.service.getLoads().pipe(takeUntil(this.destroy$)).subscribe(data => this.loads.emit(data));
  }

  getLoadNumbers() {
    this.service.getLoadNumbers().pipe(takeUntil(this.destroy$)).subscribe(data => this.loadNumbers.emit(data));
  }
}
