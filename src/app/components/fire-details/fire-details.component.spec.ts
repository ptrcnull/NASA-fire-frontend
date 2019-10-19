import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireDetailsComponent } from './fire-details.component';

describe('FireDetailsComponent', () => {
  let component: FireDetailsComponent;
  let fixture: ComponentFixture<FireDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
