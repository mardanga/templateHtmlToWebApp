import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';

import { APPROUTING } from './app.routes';
import { InfoService } from './providers/info.service';
import { ProductosService } from './providers/productos.service';
import { PortafolioComponent, AboutComponent, PortfolioItemComponent, SearchComponent } from './componentes/paginas.index';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    PortfolioItemComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    APPROUTING,
    HttpModule,
    FormsModule
  ],
  providers: [
    InfoService,
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
