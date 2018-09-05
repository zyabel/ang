import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Header } from './components/header/header.component';
import { TodoComponent } from './components/todo/todo.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { JsonplaceholderService } from './services/jsonplaceholder.service';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    Header,
    TodoComponent,
    HomeComponent,
    FormComponent,
    ListComponent,
    ListItemComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [JsonplaceholderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
