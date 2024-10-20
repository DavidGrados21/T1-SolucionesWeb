import { Routes } from '@angular/router';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { ProductoListaComponent } from './producto-lista/producto-lista.component';

export const routes: Routes = [
    { path: '', component: ProductoListaComponent },
    { path: 'producto/:id', component: ProductoDetalleComponent},
];
