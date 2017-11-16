import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { MenuComponent } from "./menu/menu.component";
import { BannerComponent } from "./banner/banner.component";
import { FooterComponent } from "./footer/footer.component";
import { DetailsComponent } from "./details/details.component";
import { MovieComponent } from "./movie/movie.component";
import { RouteChange } from "./route.change.component";
import { routing } from "./app.routes"


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    MenuComponent,
    BannerComponent,
    FooterComponent,
    MovieComponent,
    RouteChange
  ],
  imports: [
    BrowserModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
