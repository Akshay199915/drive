import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindarideComponent } from './findaride.component';

describe('FindarideComponent', () => {
  let component: FindarideComponent;
  let fixture: ComponentFixture<FindarideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindarideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindarideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
