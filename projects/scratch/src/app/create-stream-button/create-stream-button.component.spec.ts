import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStreamButtonComponent } from './create-stream-button.component';

describe('CreateStreamButtonComponent', () => {
  let buttonInstance: CreateStreamButtonComponent;
  let fixture: ComponentFixture<CreateStreamButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateStreamButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateStreamButtonComponent);
    buttonInstance = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(buttonInstance).toBeTruthy();
  });
  it('Handle Click returns undefined', () => {
    expect(buttonInstance.handleClick()).toBeUndefined();
  });
});
