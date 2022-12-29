import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedoListComponent } from './redo-list.component';

describe('RedoListComponent', () => {
  let component: RedoListComponent;
  let fixture: ComponentFixture<RedoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
