import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftPanelControlsComponent } from './left-panel-controls.component';

describe('LeftPanelControlsComponent', () => {
  let component: LeftPanelControlsComponent;
  let fixture: ComponentFixture<LeftPanelControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftPanelControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftPanelControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
