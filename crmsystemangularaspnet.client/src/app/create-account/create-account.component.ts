import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { Account } from '../Models/Account';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  account: Account = { name: '', industry: '', email: '' }; 

  constructor(private accountService: AccountService) { }

  createAccount() {
    this.accountService.createAccount(this.account).subscribe(() => {
      console.log('Account created');
    });
  }
}
