import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { doApi } from './api/apiService';
import { AppToDoListComponent } from './app-to-do-list/app-to-do-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { DarkWindowComponent } from './dark-window/dark-window.component';
import { EmptyComponent } from './empty/empty.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    MainComponent,
    AppToDoListComponent,
    TaskItemComponent,
    DarkWindowComponent,
    EmptyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [doApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
