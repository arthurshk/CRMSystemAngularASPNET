import { Component, Input } from '@angular/core';
import { AccountService } from '../account.service';
import { Account } from '../Models/Account';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent {
  @Input() account: Account = { id: 0, name: '', industry: '', email: '' };

  constructor(private accountService: AccountService) { }

  deleteAccount(id: number) {
    this.accountService.deleteAccount(id).subscribe(() => {
      console.log('Account deleted');
    });
  }
}
