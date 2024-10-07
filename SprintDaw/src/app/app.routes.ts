import { Routes } from '@angular/router';
import { ErrorComponent } from './component/error/error.component';
import { InicioComponent } from './component/inicio/inicio.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
    },
    {
       path: 'inicio',
       component: InicioComponent
    },

    {
        path: '**',
        component: ErrorComponent,
        pathMatch: 'full'
    }

];
