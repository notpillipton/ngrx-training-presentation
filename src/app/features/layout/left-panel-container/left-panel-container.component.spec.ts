import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftPanelContainerComponent } from './left-panel-container.component';

describe('LeftPanelContainerComponent', () => {
  let component: LeftPanelContainerComponent;
  let fixture: ComponentFixture<LeftPanelContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftPanelContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftPanelContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
