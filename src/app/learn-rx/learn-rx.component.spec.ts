import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnRXComponent } from './learn-rx.component';

describe('LearnRXComponent', () => {
  let component: LearnRXComponent;
  let fixture: ComponentFixture<LearnRXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnRXComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnRXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
