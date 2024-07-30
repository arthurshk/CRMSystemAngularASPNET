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
  account: Account | undefined;
  id: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    if (this.id !== null) {
      this.accountService.getAccountById(this.id).subscribe(account => {
        this.account = account;
      });
    }
  }

  onSubmit() {
    if (this.account && this.id !== null) {
      this.accountService.updateAccount(this.id, this.account).subscribe(
        () => {
          console.log('Account updated');
        },
        error => {
          console.error('Error updating account:', error);
        }
      );
    } else {
      console.error('Account is not defined');
    }
  }
}
