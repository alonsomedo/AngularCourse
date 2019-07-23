import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: '', pathMatch: 'full', redirectTo:'home' },
    { path: '**', pathMatch: 'full', redirectTo:'home' },

];

// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
// })
// export class FeatureRoutingModule { }

