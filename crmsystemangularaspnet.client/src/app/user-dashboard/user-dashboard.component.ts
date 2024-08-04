import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {
  constructor(private router: Router) { }

  public navigateToCreate() {
    this.router.navigate(['/create-account']);
  }

  public navigateToList() {
    this.router.navigate(['/list-accounts']);
  }

  public navigateToEdit(id: number) {
    this.router.navigate([`/edit-account/${id}`]);
  }

  public navigateToDelete(id: number) {
    this.router.navigate([`/delete-account/${id}`]);
  }
}
