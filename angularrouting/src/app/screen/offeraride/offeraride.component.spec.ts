import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferarideComponent } from './offeraride.component';

describe('OfferarideComponent', () => {
  let component: OfferarideComponent;
  let fixture: ComponentFixture<OfferarideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferarideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferarideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
