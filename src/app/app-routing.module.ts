import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ErrorNotFoundComponent } from './pages/error-not-found/error-not-found.component';

const routes: Routes = [
  {
    path: '', component: LandingComponent
  },
  {
    path: 'contacts', component: ContactsComponent
  },
  {
    path: 'about', component: AboutUsComponent
  },
  {
    path: '404error', component: ErrorNotFoundComponent
  },
  {
    path: '', redirectTo: '/', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: '404error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
