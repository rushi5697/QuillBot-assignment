import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MovieComponent } from './movie/movie.component';
import {Ng2SearchPipeModule} from "ng2-search-filter"
import {FormsModule} from "@angular/forms"

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
