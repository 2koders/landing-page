import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ErrorNotFoundComponent } from './pages/error-not-found/error-not-found.component';
import { SliderComponent } from './components/slider/slider.component';
import { CardsComponent } from './components/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent,
    ContactsComponent,
    AboutUsComponent,
    ErrorNotFoundComponent,
    SliderComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
