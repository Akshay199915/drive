import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportboxComponent } from './reportbox.component';

describe('ReportboxComponent', () => {
  let component: ReportboxComponent;
  let fixture: ComponentFixture<ReportboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
