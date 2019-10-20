import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportFireComponent } from './report-fire.component';

describe('ReportFireComponent', () => {
  let component: ReportFireComponent;
  let fixture: ComponentFixture<ReportFireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportFireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportFireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
