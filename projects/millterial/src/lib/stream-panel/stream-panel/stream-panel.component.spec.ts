import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamPanelComponent } from './stream-panel.component';

describe('StreamPanelComponent', () => {
  let component: StreamPanelComponent;
  let fixture: ComponentFixture<StreamPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreamPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
