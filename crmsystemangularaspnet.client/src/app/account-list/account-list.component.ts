import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Account } from '../Models/Account'; 

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  Accounts: Account[];

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe(accounts => {
      this.Accounts = accounts;
    });
  }
}
