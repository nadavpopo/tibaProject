import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkWindowComponent } from './dark-window.component';

describe('DarkWindowComponent', () => {
  let component: DarkWindowComponent;
  let fixture: ComponentFixture<DarkWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
