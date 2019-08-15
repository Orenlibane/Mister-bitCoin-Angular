import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/services/Contact.service';
import Contact from 'src/app/models/Contact';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit, OnDestroy {
  currentContact: Contact = null;
  subs: Subscription;

  constructor(
    private route: ActivatedRoute,
    private ContactService: ContactService,
    private router: Router
  ) {}

  deleteContact() {
    this.ContactService.deleteContact(this.currentContact._id);
    this.router.navigate(['/contacts']);
  }

  ngOnInit() {
    this.subs = this.route.params.subscribe(params => {
      const id = params['id'];
      this.ContactService.getContactById(id).subscribe(contact => {
        this.currentContact = contact;
      });
    });
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
