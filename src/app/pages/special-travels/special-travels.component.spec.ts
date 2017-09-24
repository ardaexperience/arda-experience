import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialTravelsComponent } from './special-travels.component';

describe('SpecialTravelsComponent', () => {
  let component: SpecialTravelsComponent;
  let fixture: ComponentFixture<SpecialTravelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialTravelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialTravelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
