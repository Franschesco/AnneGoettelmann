import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsContainerComponent } from './maps-container.component';

describe('MapsContainerComponent', () => {
  let component: MapsContainerComponent;
  let fixture: ComponentFixture<MapsContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapsContainerComponent]
    });
    fixture = TestBed.createComponent(MapsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
