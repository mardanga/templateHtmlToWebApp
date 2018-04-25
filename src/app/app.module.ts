import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PortafolioComponent, AboutComponent, PortfolioItemComponent } from './componentes/paginas.index';
import { APPROUTING } from './app.routes';
import { InfoService } from './providers/info.service';
import { ProductosService } from './providers/productos.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    PortfolioItemComponent
  ],
  imports: [
    BrowserModule,
    APPROUTING,
    HttpModule
  ],
  providers: [
    InfoService,
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
