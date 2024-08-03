import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ListAccountsComponent } from './list-accounts/list-accounts.component';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  { path: '', component: UserDashboardComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'list-accounts', component: ListAccountsComponent },
  { path: 'update-account/:id', component: UpdateAccountComponent },
  { path: 'delete-account/:id', component: DeleteAccountComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    ListAccountsComponent,
    UpdateAccountComponent,
    DeleteAccountComponent,
    UserDashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
