import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Account } from '../Models/Account';

@Component({
  selector: 'app-list-accounts',
  templateUrl: './list-accounts.component.html',
  styleUrls: ['./list-accounts.component.css']
})
export class ListAccountsComponent implements OnInit {
  accounts!: Account[];

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.getAccounts().subscribe(accounts => {
      this.accounts = accounts;
    });
  }
}
