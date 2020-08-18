import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPanelContainerComponent } from './detail-panel-container.component';

describe('DetailPanelContainerComponent', () => {
  let component: DetailPanelContainerComponent;
  let fixture: ComponentFixture<DetailPanelContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPanelContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPanelContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
