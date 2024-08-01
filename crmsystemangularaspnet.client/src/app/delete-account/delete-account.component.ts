import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Account } from '../Models/Account';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent implements OnInit {
  accounts: Account[] = [];

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.getAccounts().subscribe(accounts => {
      this.accounts = accounts;
    });
  }

  deleteAccount(id: number | undefined) {
    if (id === undefined) {
      console.error('Account ID is undefined');
      return;
    }

    this.accountService.deleteAccount(id).subscribe(() => {
      console.log('Account deleted');
      this.accounts = this.accounts.filter(account => account.id !== id);
    });
  }
}
