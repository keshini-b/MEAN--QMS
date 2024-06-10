import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home1Component } from './pages/home1/home1.component';
import { AlogComponent } from './pages/alog/alog.component';
import { UlogComponent } from './pages/ulog/ulog.component';
import { AsignComponent } from './pages/asign/asign.component';
import { UsignComponent } from './pages/usign/usign.component';
import { AhomeComponent } from './pages/ahome/ahome.component';
import { UhomeComponent } from './pages/uhome/uhome.component';
import { AprofComponent } from './pages/aprof/aprof.component';

import { AboutComponent } from './pages/about/about.component';
import { ReviewComponent } from './pages/review/review.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';

import { AchangeComponent } from './pages/achange/achange.component';
import { UchangeComponent } from './pages/uchange/uchange.component';
import { RemoveComponent } from './pages/remove/remove.component';

import { U1homeComponent } from './pages/u1home/u1home.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: "home1", pathMatch: 'full' },
    { path: 'home1', component: Home1Component },
    { path: 'alog', component: AlogComponent },
    { path: 'ulog', component: UlogComponent },
    { path: 'asign', component: AsignComponent },
    { path: 'usign', component: UsignComponent },
    { path: 'ahome', component: AhomeComponent },
    { path: 'uhome', component: UhomeComponent },
    { path: 'aprof', component: AprofComponent },
    { path: 'about', component: AboutComponent },
    
    {path: 'review',component:ReviewComponent},
    {path: 'playlist',component:PlaylistComponent},
    
  
    {path: 'achange',component:AchangeComponent},
    {path: 'uchange',component:UchangeComponent},
    {path: 'remove',component:RemoveComponent},
    
    { path: 'u1home', component: U1homeComponent },
    { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
