import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyQuizzesPageComponent } from './my-quizzes-page.component';

describe('MyQuizzesPageComponent', () => {
  let component: MyQuizzesPageComponent;
  let fixture: ComponentFixture<MyQuizzesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyQuizzesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyQuizzesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
