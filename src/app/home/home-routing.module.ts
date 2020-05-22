import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'products',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/products/products.module').then(m => m.ProductsPageModule),
              canLoad: [AuthGuard]
          },

          {  path: 'new',
            loadChildren: () => import('../pages/new/new.module').then( m => m.NewPageModule)
          },

         {  path: 'phone/:id',
            loadChildren: () => import('../pages/product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
          },

          {  path: 'edit/:id',
            loadChildren: () => import('../pages/edit/edit.module').then( m => m.EditPageModule)
          }

        ]

      },

      {
        path: 'offers',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/offers/offers.module').then(m => m.OffersPageModule),
              canLoad: [AuthGuard]
          }
        ]

      },

      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/profile/profile.module').then(m => m.ProfilePageModule),
              canLoad: [AuthGuard]
          }
        ]

      },

      {
        path: '',
        redirectTo: '/tabs/products',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/products',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
