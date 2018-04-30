
import { RouterModule, Routes } from '@angular/router';

import { PortafolioComponent, AboutComponent, PortfolioItemComponent, SearchComponent } from './componentes/paginas.index';

const routes: Routes = [
    { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'producto/:prod', component: PortfolioItemComponent },
    { path: 'buscar/:termino', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APPROUTING = RouterModule.forRoot(routes);
