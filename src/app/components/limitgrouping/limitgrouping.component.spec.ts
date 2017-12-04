import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitgroupingComponent } from './limitgrouping.component';

describe('LimitgroupingComponent', () => {
  let component: LimitgroupingComponent;
  let fixture: ComponentFixture<LimitgroupingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimitgroupingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimitgroupingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
