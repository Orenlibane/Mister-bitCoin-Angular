import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/services/Contact.service';
import Contact from 'src/app/models/Contact';

@Component({
  selector: 'app-contents-details',
  templateUrl: './contents-details.component.html',
  styleUrls: ['./contents-details.component.scss']
})
export class ContentsDetailsComponent implements OnInit {
  currentContact: any = null;

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
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.ContactService.getContactById(id).subscribe(contact => {
        this.currentContact = contact;
      });
    });
  }
}
