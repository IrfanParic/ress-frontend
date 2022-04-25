import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header-welcome/header.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainComponent } from './main/main.component';

import { HeaderUserComponent } from './header-user/header-user.component';
import {MatIconModule} from "@angular/material/icon";
import { FavoriteComponent } from './favorite/favorite.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { AboutUsComponent } from './about-us/about-us.component';
import {ReactiveFormsModule} from "@angular/forms";
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {RestaurantServices} from "./services/restaurant.services";
import {RestaurantResolver} from "./resolvers/restaurant.resolver";


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FooterComponent,
    HeaderComponent,
    LogInComponent,
    SignUpComponent,
    PageNotFoundComponent,
    MainComponent,
    HeaderUserComponent,
    FavoriteComponent,
    ProfileComponent,
    LogoutComponent,
    AboutUsComponent,
    UserDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    RestaurantServices,
    RestaurantResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
