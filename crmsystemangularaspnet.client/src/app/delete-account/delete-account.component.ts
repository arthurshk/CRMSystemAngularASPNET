import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Account } from '../Models/Account';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent implements OnInit {
  accounts: Account[];

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.getAccounts().subscribe(accounts => {
      this.accounts = accounts;
    });
  }

  deleteAccount(id: number) {
    this.accountService.deleteAccount(id).subscribe(
      () => {
        this.accounts = this.accounts.filter(account => account.id !== id);
        console.log('Account deleted');
      },
      error => {
        console.error('Error deleting account:', error);
      }
    );
  }
}
