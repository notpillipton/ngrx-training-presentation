import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftPanelMonitorComponent } from './left-panel-monitor.component';

describe('LeftPanelMonitorComponent', () => {
  let component: LeftPanelMonitorComponent;
  let fixture: ComponentFixture<LeftPanelMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftPanelMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftPanelMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
