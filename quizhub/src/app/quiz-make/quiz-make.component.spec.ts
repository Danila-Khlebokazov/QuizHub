import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizMakeComponent } from './quiz-make.component';

describe('QuizMakeComponent', () => {
  let component: QuizMakeComponent;
  let fixture: ComponentFixture<QuizMakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizMakeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizMakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
