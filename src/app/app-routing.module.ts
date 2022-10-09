import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'restaurante',
    loadChildren: () => import('./pages/restaurante/restaurante.module').then( m => m.RestaurantePageModule)
  },
  {
    path: 'restauranteinfo',
    loadChildren: () => import('./pages/restauranteinfo/restauranteinfo.module').then( m => m.RestauranteinfoPageModule)
  },
  {
    path: 'food',
    loadChildren: () => import('./pages/food/food.module').then( m => m.FoodPageModule)
  },
  {
    path: 'platillos',
    loadChildren: () => import('./pages/platillos/platillos.module').then( m => m.PlatillosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'addplatillo',
    loadChildren: () => import('./pages/addplatillo/addplatillo.module').then( m => m.AddplatilloPageModule)
  },
  {
    path: 'addrestaurante',
    loadChildren: () => import('./admin/addrestaurante/addrestaurante.module').then( m => m.AddrestaurantePageModule)
  },
  {
    path: 'addupdaterestaurante',
    loadChildren: () => import('./admin/addupdaterestaurante/addupdaterestaurante.module').then( m => m.AddupdaterestaurantePageModule)
  },
  {
    path: 'listuser',
    loadChildren: () => import('./admin/listuser/listuser.module').then( m => m.ListuserPageModule)
  },
  {
    path: 'adduser',
    loadChildren: () => import('./admin/adduser/adduser.module').then( m => m.AdduserPageModule)
  },
  {
    path: 'informacionregister',
    loadChildren: () => import('./admin/informacionregister/informacionregister.module').then( m => m.InformacionregisterPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./admin/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'usuarers',
    loadChildren: () => import('./admin/usuarers/usuarers.module').then( m => m.UsuarersPageModule)
  },
  {
    path: 'restauranteslist',
    loadChildren: () => import('./admin/restauranteslist/restauranteslist.module').then( m => m.RestauranteslistPageModule)
  },
  {
    path: 'ciudadlist',
    loadChildren: () => import('./ciudad/ciudadlist/ciudadlist.module').then( m => m.CiudadlistPageModule)
  },
  {
    path: 'ciudadadd',
    loadChildren: () => import('./ciudad/ciudadadd/ciudadadd.module').then( m => m.CiudadaddPageModule)
  },
  {
    path: 'estadolist',
    loadChildren: () => import('./estado/estadolist/estadolist.module').then( m => m.EstadolistPageModule)
  },
  {
    path: 'paislist',
    loadChildren: () => import('./pais/paislist/paislist.module').then( m => m.PaislistPageModule)
  },
  {
    path: 'paisadd',
    loadChildren: () => import('./pais/paisadd/paisadd.module').then( m => m.PaisaddPageModule)
  },
  {
    path: 'estadoadd',
    loadChildren: () => import('./estado/estadoadd/estadoadd.module').then( m => m.EstadoaddPageModule)
  },
  {
    path: 'categorialist',
    loadChildren: () => import('./categoria/categorialist/categorialist.module').then( m => m.CategorialistPageModule)
  },
  {
    path: 'categoriaadd',
    loadChildren: () => import('./categoria/categoriaadd/categoriaadd.module').then( m => m.CategoriaaddPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
