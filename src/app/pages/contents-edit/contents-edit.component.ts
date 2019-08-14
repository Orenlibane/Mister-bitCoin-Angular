import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/services/Contact.service';

@Component({
  selector: 'app-contents-edit',
  templateUrl: './contents-edit.component.html',
  styleUrls: ['./contents-edit.component.scss']
})
export class ContentsEditComponent implements OnInit {
  currentContact: any = null;

  constructor(
    private route: ActivatedRoute,
    private ContactService: ContactService
  ) {}

  updateContact() {
    this.ContactService.saveContact(this.currentContact);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params.id;
      if (id) {
        this.ContactService.getContactById(id).subscribe(contact => {
          this.currentContact = { ...contact };
        });
      }
    });
  }
}
