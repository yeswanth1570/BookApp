import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpAndLoginComponent } from './sign-up-and-login.component';

describe('SignUpAndLoginComponent', () => {
  let component: SignUpAndLoginComponent;
  let fixture: ComponentFixture<SignUpAndLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpAndLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpAndLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
