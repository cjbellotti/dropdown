import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientoItemComponent } from './movimiento-item.component';

describe('MovimientoItemComponent', () => {
  let component: MovimientoItemComponent;
  let fixture: ComponentFixture<MovimientoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimientoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimientoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
