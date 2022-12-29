import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMilld3Component } from './ngx-milld3.component';

describe('NgxMilld3Component', () => {
  let component: NgxMilld3Component;
  let fixture: ComponentFixture<NgxMilld3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxMilld3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxMilld3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
