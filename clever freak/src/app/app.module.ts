import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
;
import { TopNavComponent } from './components/top-nav/top-nav.component';

import { AboutComponent } from './pages/about/about.component';
import { AchangeComponent } from './pages/achange/achange.component';

import { AhomeComponent } from './pages/ahome/ahome.component';
import { AlogComponent } from './pages/alog/alog.component';
import { AprofComponent } from './pages/aprof/aprof.component';
import { AsignComponent } from './pages/asign/asign.component';
import { AviewComponent } from './pages/aview/aview.component';
import { Home1Component } from './pages/home1/home1.component';

import { PlaylistComponent } from './pages/playlist/playlist.component';
import { RemoveComponent } from './pages/remove/remove.component';
import { ReviewComponent } from './pages/review/review.component';

import { U1homeComponent } from './pages/u1home/u1home.component';
import { UchangeComponent } from './pages/uchange/uchange.component';
import { UhomeComponent } from './pages/uhome/uhome.component';
import { UlogComponent } from './pages/ulog/ulog.component';
import { UprofComponent } from './pages/uprof/uprof.component';
import { UsignComponent } from './pages/usign/usign.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NodeutilityService } from './nodeutility.service';
import { PageVisibilityService } from './services/PageVisibilityService';

import { UviewComponent } from './pages/uview/uview.component';
import { ServiceComponent } from './pages/service/service.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    
    TopNavComponent,
    
    AboutComponent,
    
    AchangeComponent,
    
    AhomeComponent,
    AlogComponent,
    AprofComponent,
    AsignComponent,
    AviewComponent,
    Home1Component,
   
    PlaylistComponent,
    RemoveComponent,
    ReviewComponent,
   
    U1homeComponent,
    UchangeComponent,
    UhomeComponent,
    UlogComponent,
    UprofComponent,
    UsignComponent,
    
    UviewComponent,
    ServiceComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [NodeutilityService,
    PageVisibilityService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
