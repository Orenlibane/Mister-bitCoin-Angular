import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentsDetailsComponent } from './contents-details.component';

describe('ContentsDetailsComponent', () => {
  let component: ContentsDetailsComponent;
  let fixture: ComponentFixture<ContentsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
