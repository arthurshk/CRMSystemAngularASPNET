import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../account.service';
import { Account } from '../Models/Account';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {
  account: Account;

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.accountService.getAccountById(id).subscribe(account => {
      this.account = account;
    });
  }

  onSubmit() {
    this.accountService.updateAccount(this.account).subscribe(
      () => {
        console.log('Account updated');
      },
      error => {
        console.error('Error updating account:', error);
      }
    );
  }
}
