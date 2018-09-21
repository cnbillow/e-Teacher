import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesClassComponent } from './courses-class.component';

describe('CoursesClassComponent', () => {
  let component: CoursesClassComponent;
  let fixture: ComponentFixture<CoursesClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
