import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCustomeLayoutComponent } from './app-custome-layout.component';

describe('AppCustomeLayoutComponent', () => {
  let component: AppCustomeLayoutComponent;
  let fixture: ComponentFixture<AppCustomeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCustomeLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCustomeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
