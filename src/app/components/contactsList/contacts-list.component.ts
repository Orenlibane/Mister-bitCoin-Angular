import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactService } from 'src/services/Contact.service';
import Contact from '../../models/Contact';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class contactsListComponent implements OnInit, OnDestroy {
  contacts: Contact[];
  currentContact: Contact = null;
  filterBy: FilterModel = { term: null };
  subs: Subscription;

  constructor(private contactService: ContactService) {}

  filterlist() {
    this.contactService.getContacts(this.filterBy);
  }

  ngOnInit() {
    this.subs = this.contactService.contactsObservable.subscribe(contacts => {
      this.contacts = contacts;
    });
    this.contactService.getContacts();
    console.log(this.contacts);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
