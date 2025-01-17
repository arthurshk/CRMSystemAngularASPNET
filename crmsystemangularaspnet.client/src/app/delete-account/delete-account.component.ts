import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
import { Account } from '../Models/Account';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent {
  @Input() account!: Account;

  constructor(private accountService: AccountService, private router: Router) { }

  deleteAccount(id: number) {
    this.accountService.deleteAccount(id).subscribe(() => {
      console.log('Account deleted');
      this.router.navigate(['/list-accounts']);
    });
  }

  public navigateToList() {
    this.router.navigate(['/list-accounts']);
  }
}
