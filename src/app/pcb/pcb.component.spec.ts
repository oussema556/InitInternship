import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PCBComponent } from './pcb.component';

describe('PCBComponent', () => {
  let component: PCBComponent;
  let fixture: ComponentFixture<PCBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PCBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PCBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
