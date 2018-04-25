import { RouterModule, Routes } from '@angular/router';

import { PortafolioComponent, AboutComponent, PortfolioItemComponent } from './componentes/paginas.index';

const routes: Routes = [
    { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'producto', component: PortfolioItemComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APPROUTING = RouterModule.forRoot(routes);
