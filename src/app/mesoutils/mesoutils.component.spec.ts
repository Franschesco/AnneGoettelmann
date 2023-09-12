import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesoutilsComponent } from './mesoutils.component';

describe('MesoutilsComponent', () => {
  let component: MesoutilsComponent;
  let fixture: ComponentFixture<MesoutilsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesoutilsComponent]
    });
    fixture = TestBed.createComponent(MesoutilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
