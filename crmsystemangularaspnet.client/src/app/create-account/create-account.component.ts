import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
import { Account } from '../Models/Account';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  createAccountForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createAccountForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(1)]],
      address: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log('Form submitted:', this.createAccountForm.value);
    if (this.createAccountForm.valid) {
      const newAccount: Account = this.createAccountForm.value;
      this.accountService.createAccount(newAccount).subscribe(
        () => {
          console.log('Account created successfully');
          this.router.navigate(['/list-accounts']);
        },
        error => {
          console.error('Error creating account:', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
