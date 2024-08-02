import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../account.service';
import { Account } from '../Models/Account';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {
  editAccountForm!: FormGroup;
  accountId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.accountId = +this.route.snapshot.paramMap.get('id')!;
    this.editAccountForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(1)]],
      address: ['', Validators.required]
    });

    this.accountService.getAccountById(this.accountId).subscribe((account: Account) => {
      this.editAccountForm.patchValue(account);
    });
  }

  onSubmit(): void {
    if (this.editAccountForm.valid) {
      this.accountService.updateAccount(this.accountId, this.editAccountForm.value).subscribe(() => {
        console.log('Account Updated');
        this.router.navigate(['/list-accounts']);
      });
    }
  }
}
