import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InlineSVGModule } from "ng-inline-svg";
import { PagesRoutingModule } from "./pages-routing.module";
import {
  NgbDropdownModule,
  NgbProgressbarModule,
} from "@ng-bootstrap/ng-bootstrap";
import { TranslationModule } from "../modules/i18n/translation.module";
import { CRUDTableModule } from "../_metronic/shared/crud-table";

import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { LayoutComponent } from "./_layout/layout.component";
import { ScriptsInitComponent } from "./_layout/init/scipts-init/scripts-init.component";
import { HeaderMobileComponent } from "./_layout/components/header-mobile/header-mobile.component";
import { AsideComponent } from "./_layout/components/aside/aside.component";
import { FooterComponent } from "./_layout/components/footer/footer.component";
import { HeaderComponent } from "./_layout/components/header/header.component";
import { HeaderMenuComponent } from "./_layout/components/header/header-menu/header-menu.component";
import { TopbarComponent } from "./_layout/components/topbar/topbar.component";
import { ExtrasModule } from "../_metronic/partials/layout/extras/extras.module";
import { LanguageSelectorComponent } from "./_layout/components/topbar/language-selector/language-selector.component";
import { CoreModule } from "../_metronic/core";
import { SubheaderModule } from "../_metronic/partials/layout/subheader/subheader.module";
import { AsideDynamicComponent } from "./_layout/components/aside-dynamic/aside-dynamic.component";
import { HeaderMenuDynamicComponent } from "./_layout/components/header/header-menu-dynamic/header-menu-dynamic.component";
import { ColaboradorComponent } from "./colaborador/colaborador.component";
import { AreaComponent } from "./area/area.component";
import { UsuarioComponent } from "./usuario/usuario.component";
import { PublicfutComponent } from "./external/publicfut/publicfut.component";
import { PublicseguimientoComponent } from "./external/publicseguimiento/publicseguimiento.component";
import { PublicbusquedaComponent } from "./external/publicbusqueda/publicbusqueda.component";
import { InboxemitComponent } from './inboxemit/inboxemit.component';
import { InboxderiComponent } from './inboxderi/inboxderi.component';
import { InboxresuComponent } from './inboxresu/inboxresu.component';
import { InboxrechComponent } from './inboxrech/inboxrech.component';

@NgModule({
  declarations: [
    LayoutComponent,
    ScriptsInitComponent,
    HeaderMobileComponent,
    AsideComponent,
    FooterComponent,
    HeaderComponent,
    HeaderMenuComponent,
    TopbarComponent,
    LanguageSelectorComponent,
    AsideDynamicComponent,
    HeaderMenuDynamicComponent,
    ColaboradorComponent,
    AreaComponent,
    UsuarioComponent,
    PublicfutComponent,
    PublicseguimientoComponent,
    PublicbusquedaComponent,
    InboxemitComponent,
    InboxderiComponent,
    InboxresuComponent,
    InboxrechComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    TranslationModule,
    InlineSVGModule,
    ExtrasModule,
    NgbDropdownModule,
    NgbProgressbarModule,
    CoreModule,
    SubheaderModule,
    FormsModule,
    ReactiveFormsModule,
    CRUDTableModule,
  ],
})
export class LayoutModule {}
