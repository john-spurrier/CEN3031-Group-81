import { Component } from '@angular/core';
import { User } from '../setup';

@Component({
  selector: 'app-account-setup',
  templateUrl: './account-setup.component.html',
  styleUrls: ['./account-setup.component.css']
})
export class AccountSetupComponent {

    user: User = {
      firstName: '',
      lastName: '',
      address: ''
    };

}
