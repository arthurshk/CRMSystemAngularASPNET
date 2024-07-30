import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountListComponent } from './account-list/account-list.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { ListAccountsComponent } from './list-accounts/list-accounts.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountListComponent,
    CreateAccountComponent,
    UpdateAccountComponent,
    DeleteAccountComponent,
    ListAccountsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
