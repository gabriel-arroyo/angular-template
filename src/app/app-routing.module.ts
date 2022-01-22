import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@modules/home/home.component';
import { CustomLayoutComponent } from './layout/custom-layout/custom-layout.component';

const routes: Routes = [
	{
		path: '',
		component: CustomLayoutComponent,
		children: [
			{
				path: 'home',
				component: HomeComponent,
			},
		],
		// canActivate: [NoAuthGuard], // Should be replaced with actual auth guard
		// {
		//   path: 'about',
		//   loadChildren: () =>
		//     import('./modules/about/about.module').then(m => m.AboutModule)
		// },
		// {
		//   path: 'contact',
		//   loadChildren: () =>
		//     import('./modules/contact/contact.module').then(m => m.ContactModule)
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
