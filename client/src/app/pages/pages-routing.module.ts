import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AreaComponent } from "./area/area.component";
import { ColaboradorComponent } from "./colaborador/colaborador.component";
import { InboxderiComponent } from "./inboxderi/inboxderi.component";
import { InboxemitComponent } from "./inboxemit/inboxemit.component";
import { InboxrechComponent } from "./inboxrech/inboxrech.component";
import { InboxresuComponent } from "./inboxresu/inboxresu.component";
import { UsuarioComponent } from "./usuario/usuario.component";
import { LayoutComponent } from "./_layout/layout.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "dashboard",
        loadChildren: () =>
          import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
      },
      {
        path: "colaborador", // <= Page URL
        component: ColaboradorComponent, // <= Page component registration
      },
      {
        path: "area", // <= Page URL
        component: AreaComponent, // <= Page component registration
      },
      {
        path: "usuario", // <= Page URL
        component: UsuarioComponent, // <= Page component registration
      },
      {
        path: "emitidos", // <= Page URL
        component: InboxemitComponent, // <= Page component registration
      },
      {
        path: "derivados", // <= Page URL
        component: InboxderiComponent, // <= Page component registration
      },
      {
        path: "resueltos", // <= Page URL
        component: InboxresuComponent, // <= Page component registration
      },
      {
        path: "rechazados", // <= Page URL
        component: InboxrechComponent, // <= Page component registration
      },
      // {
      //   path: 'builder',
      //   loadChildren: () =>
      //     import('./builder/builder.module').then((m) => m.BuilderModule),
      // },
      // {
      //   path: 'ecommerce',
      //   loadChildren: () =>
      //     import('../modules/e-commerce/e-commerce.module').then(
      //       (m) => m.ECommerceModule
      //     ),
      // },
      // {
      //   path: 'user-management',
      //   loadChildren: () =>
      //     import('../modules/user-management/user-management.module').then(
      //       (m) => m.UserManagementModule
      //     ),
      // },
      // {
      //   path: 'user-profile',
      //   loadChildren: () =>
      //     import('../modules/user-profile/user-profile.module').then(
      //       (m) => m.UserProfileModule
      //     ),
      // },
      // {
      //   path: 'ngbootstrap',
      //   loadChildren: () =>
      //     import('../modules/ngbootstrap/ngbootstrap.module').then(
      //       (m) => m.NgbootstrapModule
      //     ),
      // },
      // {
      //   path: 'wizards',
      //   loadChildren: () =>
      //     import('../modules/wizards/wizards.module').then(
      //       (m) => m.WizardsModule
      //     ),
      // },
      // {
      //   path: 'material',
      //   loadChildren: () =>
      //     import('../modules/material/material.module').then(
      //       (m) => m.MaterialModule
      //     ),
      // },
      {
        path: "",
        redirectTo: "/dashboard",
        pathMatch: "full",
      },
      {
        path: "**",
        redirectTo: "error/404",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
