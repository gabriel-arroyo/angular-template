import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from '@modules/home/home.component';
import { CustomLayoutComponent } from './layout/custom-layout/custom-layout.component';
import { NavbarComponent } from './layout/navbar/navbar.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		NavbarComponent,
		HomeComponent,
		CustomLayoutComponent,
	],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
/** Módulo padre */
export class AppModule {}
