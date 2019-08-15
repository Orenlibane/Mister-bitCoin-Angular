import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentsPageComponent } from './pages/contents-page/contents-page.component';
import { contactsListComponent } from './components/contactsList/contacts-list.component';
import { ContactsPreviewComponent } from './components/contactsPreview/contacts-preview.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';
import { ChartComponent } from './components/chart/chart.component';
import { GoogleChartsModule } from 'angular-google-charts';

@NgModule({
  declarations: [
    AppComponent,
    ContentsPageComponent,
    contactsListComponent,
    ContactsPreviewComponent,
    ContactDetailsComponent,
    HomePageComponent,
    ContactEditComponent,
    NavbarComponent,
    StatisticsPageComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
