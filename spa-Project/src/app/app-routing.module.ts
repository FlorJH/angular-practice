import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './about/about.component';
import { HeroesComponent } from './heroes/heroes.component';



const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'heroes', component:HeroesComponent}
  // {path: '**', pathMatch:'full', readirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
