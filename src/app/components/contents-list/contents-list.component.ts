import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/services/Contact.service';
import Contact from '../../models/Contact';

@Component({
  selector: 'app-contents-list',
  templateUrl: './contents-list.component.html',
  styleUrls: ['./contents-list.component.scss']
})
export class ContentsListComponent implements OnInit {
  Contacts: Contact[];
  currentContact: any = null;
  filterBy: any = { term: null };
  constructor(private ContactService: ContactService) {}

  contactChange(choosedContact) {
    this.currentContact = choosedContact;
  }

  filterlist() {
    this.ContactService.getContacts(this.filterBy);
  }

  ngOnInit() {
    this.ContactService.getContacts();
    this.ContactService.contactsSubject.subscribe(contacts => {
      this.Contacts = contacts;
    });
  }
}
