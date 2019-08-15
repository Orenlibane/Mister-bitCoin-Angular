import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { contactsListComponent } from './contacts-list.component';

describe('ContentsListComponent', () => {
  let component: contactsListComponent;
  let fixture: ComponentFixture<contactsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [contactsListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(contactsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
