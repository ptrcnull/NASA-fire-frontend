import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireListComponent } from './fire-list.component';

describe('FireListComponent', () => {
  let component: FireListComponent;
  let fixture: ComponentFixture<FireListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
