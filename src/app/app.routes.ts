import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component"
import { DetailsComponent } from "./details/details.component"
import { MovieComponent } from "./movie/movie.component"

const appRoutes: Routes = [
  
  { path: '', component: HomeComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'movies', component: MovieComponent },
  { path: '**', component: HomeComponent },

];

export const routing = RouterModule.forRoot(appRoutes);