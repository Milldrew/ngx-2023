import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  TestBed,
  fakeAsync,
  ComponentFixture,
  tick,
} from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CreateStreamButtonComponent } from './create-stream-button/create-stream-button.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        BrowserModule,
        MatButtonModule,
        MatIconModule,
        MatExpansionModule,
        MatTooltipModule,
        MatCardModule,
      ],
      declarations: [AppComponent, CreateStreamButtonComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    fixture.componentInstance.streamHeader = 'stream header';
  });

  it('should create the app', () => {
    fakeAsync(() => {
      tick(5000);
    });

    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
