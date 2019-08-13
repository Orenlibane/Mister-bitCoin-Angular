import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentsPageComponent } from './pages/contents-page/contents-page.component';
import { ContentsListComponent } from './components/contents-list/contents-list.component';
import { ContentsPreviewComponent } from './components/contents-preview/contents-preview.component';
import { ContentsFilterComponent } from './components/contents-filter/contents-filter.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContentsEditComponent } from './pages/contents-edit/contents-edit.component';
import { ContentsDetailsComponent } from './pages/contents-details/contents-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentsPageComponent,
    ContentsListComponent,
    ContentsPreviewComponent,
    ContentsFilterComponent,
    ContentsDetailsComponent,
    HomePageComponent,
    ContentsEditComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
