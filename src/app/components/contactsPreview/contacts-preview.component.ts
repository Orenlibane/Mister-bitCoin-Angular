import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import Contact from '../../models/Contact';

@Component({
  selector: 'app-contacts-preview',
  templateUrl: './contacts-preview.component.html',
  styleUrls: ['./contacts-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsPreviewComponent {
  @Input() contact: Contact = null;

  constructor() {}

  get userImg() {
    return 'https://robohash.org/' + this.contact.name;
  }
}
