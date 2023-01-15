import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStreamButtonComponent } from './create-stream-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CreateStreamButtonComponent', () => {
  let buttonInstance: CreateStreamButtonComponent;
  let fixture: ComponentFixture<CreateStreamButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        BrowserModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        MatCardModule,
      ],
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
