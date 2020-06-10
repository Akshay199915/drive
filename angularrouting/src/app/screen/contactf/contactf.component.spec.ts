import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactfComponent } from './contactf.component';

describe('ContactfComponent', () => {
  let component: ContactfComponent;
  let fixture: ComponentFixture<ContactfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
