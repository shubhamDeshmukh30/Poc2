import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelcomponentComponent } from './delcomponent.component';

describe('DelcomponentComponent', () => {
  let component: DelcomponentComponent;
  let fixture: ComponentFixture<DelcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
