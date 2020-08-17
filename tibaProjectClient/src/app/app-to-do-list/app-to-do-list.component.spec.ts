import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppToDoListComponent } from './app-to-do-list.component';
import { doApi } from '../api/apiService';

describe('AppToDoListComponent', () => {
  let component: AppToDoListComponent;
  let fixture: ComponentFixture<AppToDoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppToDoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
