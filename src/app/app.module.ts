import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { PieComponent } from './componentes/pie/pie.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { EquipoComponent } from './paginas/equipo/equipo.component';
import { ServiciosComponent } from './paginas/servicios/servicios.component';
import { NosotrosComponent } from './paginas/nosotros/nosotros.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { SinicioComponent } from './componentes/sinicio/sinicio.component';
import { SnosotrosComponent } from './componentes/snosotros/snosotros.component';
import { SequipoComponent } from './componentes/sequipo/sequipo.component';
import { SserviciosComponent } from './componentes/sservicios/sservicios.component';
import { ScontactoComponent } from './componentes/scontacto/scontacto.component';
import { FormularioContactenosComponent } from './componentes/formulario-contactenos/formulario-contactenos.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    MenuComponent,
    PieComponent,
    InicioComponent,
    EquipoComponent,
    ServiciosComponent,
    NosotrosComponent,
    ContactoComponent,
    SinicioComponent,
    SnosotrosComponent,
    SequipoComponent,
    SserviciosComponent,
    ScontactoComponent,
    FormularioContactenosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
