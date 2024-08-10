import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
import { Account } from '../Models/Account';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  createAccountForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private router: Router
  ) {
    this.createAccountForm = this.fb.group({
      name: ['', Validators.required],
      industry: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.createAccountForm.valid) {
      const newAccount: Account = this.createAccountForm.value;
      this.accountService.createAccount(newAccount).subscribe(
        () => {
          this.router.navigate(['/list-accounts']);
        },
        error => {
          console.error('Error creating account:', error);
        }
      );
    }
  }
}
