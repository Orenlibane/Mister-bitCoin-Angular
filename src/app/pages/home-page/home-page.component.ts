import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/services/user.service';
import Contact from 'src/app/models/Contact';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  user: Contact;
  subscription: Subscription;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.subscription = this.userService.currentUser.subscribe(
      user => {
        this.user = user;
      },
      err => {
        alert(err);
      }
    );
    this.userService.loadUser();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
