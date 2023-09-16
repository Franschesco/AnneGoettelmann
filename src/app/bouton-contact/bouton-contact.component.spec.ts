import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonContactComponent } from './bouton-contact.component';

describe('BoutonContactComponent', () => {
  let component: BoutonContactComponent;
  let fixture: ComponentFixture<BoutonContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoutonContactComponent]
    });
    fixture = TestBed.createComponent(BoutonContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
