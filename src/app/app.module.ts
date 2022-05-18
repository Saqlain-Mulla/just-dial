import { NgModule } from '@angular/core';
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
    ContactUsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
