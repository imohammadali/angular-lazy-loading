import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from "./pages/pages.component";
import {NgModule} from "@angular/core";
import {MetaResolverService} from "./resolvers/meta-resolver.service";
import {CustomPreloadStrategy} from "./services/custom-preload-strategy";

export const routes: Routes = [
  // After login : this resolve guaranty that this routes load after loading meta service load
  {
    path: '',
    component: PagesComponent,
    resolve: {
      meta: MetaResolverService
    },
    children: [
      {
        path: 'about',
        loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule),
      },
      {
        path: 'contact',
        loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'faq',
        loadChildren: () => import('./pages/faq/faq.module').then(m => m.FaqModule),
        data: {preload: true}
      }
    ]
  }
//   Before login
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: CustomPreloadStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
