import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contents-details',
  templateUrl: './contents-details.component.html',
  styleUrls: ['./contents-details.component.scss']
})
export class ContentsDetailsComponent implements OnInit {
  @Input() currentContact: any = null;
  // @Output() updateUser = new EventEmitter<Contact>();

  constructor() {}

  ngOnInit() {}
}
