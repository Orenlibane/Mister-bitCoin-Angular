import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentsFilterComponent } from './contents-filter.component';

describe('ContentsFilterComponent', () => {
  let component: ContentsFilterComponent;
  let fixture: ComponentFixture<ContentsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
