import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItDepartementComponent } from './it-departement.component';

describe('ItDepartementComponent', () => {
  let component: ItDepartementComponent;
  let fixture: ComponentFixture<ItDepartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItDepartementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
