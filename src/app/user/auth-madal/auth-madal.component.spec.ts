import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthMadalComponent } from './auth-madal.component';

describe('AuthMadalComponent', () => {
  let component: AuthMadalComponent;
  let fixture: ComponentFixture<AuthMadalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthMadalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthMadalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
