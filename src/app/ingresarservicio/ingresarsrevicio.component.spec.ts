import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IngresarsrevicioComponent } from './ingresarsrevicio.component';

describe('IngresarsrevicioComponent', () => {
  let component: IngresarsrevicioComponent;
  let fixture: ComponentFixture<IngresarsrevicioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresarsrevicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarsrevicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
