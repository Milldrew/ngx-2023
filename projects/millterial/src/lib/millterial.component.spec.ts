import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MillterialComponent } from './millterial.component';

describe('MillterialComponent', () => {
  let component: MillterialComponent;
  let fixture: ComponentFixture<MillterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MillterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MillterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
