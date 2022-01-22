import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './modules/test/test.component';
import { LayoutComponent } from './modules/layout/layout.component';
import { AppCustomeLayoutComponent } from './layout/app-custome-layout/app-custome-layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './src/app/modules/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LayoutComponent,
    AppCustomeLayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
