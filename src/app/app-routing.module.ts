import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContentsPageComponent } from './pages/contents-page/contents-page.component';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'contacts', component: ContentsPageComponent },
  { path: 'statistics', component: StatisticsPageComponent },
  { path: 'contact/edit', component: ContactEditComponent },
  { path: 'contact/:id', component: ContactDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
