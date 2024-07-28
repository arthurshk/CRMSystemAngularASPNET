import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { Account } from '../Models/Account';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  account: Account = { name: '', industry: '' };
  constructor(private accountService: AccountService) { }

  onSubmit() {
    this.accountService.createAccount(this.account).subscribe(
      createdAccount => {
        console.log('Account created:', createdAccount);
      },
      error => {
        console.error('Error creating account:', error);
      }
    );
  }
}
