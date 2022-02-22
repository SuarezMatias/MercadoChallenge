import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/components/header.component';
import { BrowseComponent } from './modules/browse/components/browse.component';
import { ListComponent } from './modules/list/list.component';
import { CategoriesBarComponent } from './modules/categories-bar/categories-bar.component';
import { LandingComponent } from './modules/landing/landing.component';
import { DetailComponent } from './modules/detail/detail.component';

import { DetailDataResolver } from './modules/detail/services/detail.resolver';
import { DescriptionDataResolver } from './modules/detail/services/description.resolver';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    BrowseComponent,
    HeaderComponent,
    CategoriesBarComponent,
    LandingComponent,
    DetailComponent,    
  ],
  imports: [
    NgbModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    DetailDataResolver,
    DescriptionDataResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
