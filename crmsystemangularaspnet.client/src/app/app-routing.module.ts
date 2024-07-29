import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { ListAccountsComponent } from './list-accounts/list-accounts.component';

const routes: Routes = [
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'update-account/:id', component: UpdateAccountComponent },
  { path: 'delete-account', component: DeleteAccountComponent },
  { path: 'list-accounts', component: ListAccountsComponent },
  { path: '', redirectTo: '/list-accounts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
