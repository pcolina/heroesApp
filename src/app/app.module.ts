import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HijoComponent } from './pages/hijo/hijo.component';
import { CommonModule } from '@angular/common';
import { BasicoComponent } from './pages/basico/basico.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from './pages/login/login.module';
import { HeroesModule } from './pages/heroes/heroes.module';
import { LoginComponent } from './pages/login/login.component';
import { MyInterceptors } from './shared/interceptors/myIncerceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    BasicoComponent,
    HeaderComponent,
    SidebarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    HttpClientModule,
    CommonModule,
    LoginModule,
    HeroesModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: MyInterceptors,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
