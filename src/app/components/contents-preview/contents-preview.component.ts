import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import Contact from '../../models/Contact';

@Component({
  selector: 'app-contents-preview',
  templateUrl: './contents-preview.component.html',
  styleUrls: ['./contents-preview.component.scss']
})
export class ContentsPreviewComponent implements OnInit {
  @Input() contact: any = null;
  @Output() updateUser = new EventEmitter<Contact>();

  constructor() {}
  contactDet() {
    this.updateUser.emit(this.contact);
    console.log(this.contact);
  }
  ngOnInit() {}
}
