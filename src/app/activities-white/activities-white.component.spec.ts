import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesWhiteComponent } from './activities-white.component';

describe('ActivitiesWhiteComponent', () => {
  let component: ActivitiesWhiteComponent;
  let fixture: ComponentFixture<ActivitiesWhiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitiesWhiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesWhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
