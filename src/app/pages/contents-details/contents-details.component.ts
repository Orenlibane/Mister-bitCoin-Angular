import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/services/Contact.service';
import Contact from 'src/app/models/Contact';

@Component({
  selector: 'app-contents-details',
  templateUrl: './contents-details.component.html',
  styleUrls: ['./contents-details.component.scss']
})
export class ContentsDetailsComponent implements OnInit {
  currentContact: any = null;
  // @Output() updateUser = new EventEmitter<Contact>();

  constructor(
    private route: ActivatedRoute,
    private ContactService: ContactService
  ) {}

  ngOnInit() {
    this.currentContact = this.ContactService.getContactById(
      this.route.params.value.id
    );
    console.log(this.currentContact);
  }
}
