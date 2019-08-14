import { Injectable } from '@angular/core';
import Contact from 'src/app/models/Contact';
import { getMaxListeners } from 'cluster';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser = new Contact('oren', 'orenlibane@gmail.com', '502520325', 1000);

  constructor() {}
}
