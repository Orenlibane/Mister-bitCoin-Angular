import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/services/Contact.service';
import Contact from 'src/app/models/Contact';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {
  currentContact: Contact = null;

  get userImg() {
    if (this.currentContact.name) {
      return 'https://robohash.org/' + this.currentContact.name;
    } else return 'https://robohash.org/' + Math.random();
  }

  constructor(
    private route: ActivatedRoute,
    private ContactService: ContactService,
    private router: Router
  ) {}

  updateContact() {
    this.ContactService.saveContact(this.currentContact);
    this.router.navigate(['/contacts']);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params.id;
      if (id) {
        this.ContactService.getContactById(id).subscribe(contact => {
          this.currentContact = { ...contact };
        });
      } else {
        this.currentContact = new Contact();
      }
    });
  }
}
