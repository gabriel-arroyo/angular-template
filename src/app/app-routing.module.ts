import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	// {
	// path: '',
	// component: ContentLayoutComponent,
	// canActivate: [NoAuthGuard], // Should be replaced with actual auth guard
	// children: [
	// {
	//   path: 'dashboard',
	//   loadChildren: () =>
	//     import('./modules/home/home.module').then(m => m.HomeModule)
	// },
	// {
	//   path: 'about',
	//   loadChildren: () =>
	//     import('./modules/about/about.module').then(m => m.AboutModule)
	// },
	// {
	//   path: 'contact',
	//   loadChildren: () =>
	//     import('./modules/contact/contact.module').then(m => m.ContactModule)
	// }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
