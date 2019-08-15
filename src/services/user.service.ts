import { Injectable } from '@angular/core';
import Contact from 'src/app/models/Contact';
import { BehaviorSubject } from 'rxjs';
import { HttpBackend } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser = new BehaviorSubject<Contact>(null);

  loadUser() {
    // this.http.get('user').subscribe((user)=>{
    //   this.currentUser.next(contact);
    // })
    this.currentUser.next(
      new Contact('oren', 'orenlibane@gmail.com', '502520325', 1000)
    );
  }

  constructor() {}
}
