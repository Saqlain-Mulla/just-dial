import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeadMenuComponent } from './head-menu/head-menu.component';
import { FooterComponent } from './footer/footer.component';
import { FooterMenuComponent } from './footer-menu/footer-menu.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { ItemsComponent } from './items/items.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LearnRXComponent } from './learn-rx/learn-rx.component';

const routerconfig : Routes = [
  {
    path:'list',
    component : ListItemsComponent
  },

  {
    path:'homepath',
    component :HomeComponentComponent
  },

  {
    path:'RX',
    component : LearnRXComponent
  }




 
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeadMenuComponent,
    FooterComponent,
    FooterMenuComponent,
    MainContainerComponent,
    ListItemsComponent,
    ItemsComponent,
    AboutUsComponent,
    ContactUsComponent,
    HomeComponentComponent,
    LearnRXComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routerconfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
