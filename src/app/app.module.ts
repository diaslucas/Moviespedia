import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { MenuComponent } from "./menu/menu.component";
import { BannerComponent } from "./banner/banner.component";
import { FooterComponent } from "./footer/footer.component";
import { DetailsComponent } from "./details/details.component";
import { routing } from "./app.routes"


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    MenuComponent,
    BannerComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule, BsDropdownModule.forRoot(), routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
