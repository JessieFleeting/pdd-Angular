/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HorizotionGridComponent } from './horizotion-grid.component';

describe('HorizotionGridComponent', () => {
  let component: HorizotionGridComponent;
  let fixture: ComponentFixture<HorizotionGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizotionGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizotionGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
