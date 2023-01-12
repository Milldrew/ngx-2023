import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStreamButtonComponent } from './create-stream-button.component';

describe('CreateStreamButtonComponent', () => {
  let component: CreateStreamButtonComponent;
  let fixture: ComponentFixture<CreateStreamButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStreamButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStreamButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
