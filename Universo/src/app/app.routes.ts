import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ViaLacteaComponent } from './via-lactea/via-lactea.component';
import { AndromedaComponent } from './andromeda/andromeda.component';
import { GalaxiaTrianguloComponent } from './galaxia-triangulo/galaxia-triangulo.component';
import { UniversoComponent } from './universo/universo.component';
import { GaseosoComponent } from './gaseoso/gaseoso.component';
import { RocosoComponent } from './rocoso/rocoso.component';
import { FormComponent } from './rocoso/form.component';
import { Form2Component } from './gaseoso/form2.component';

export const routes: Routes = [
    {path: '', redirectTo:'/universo', pathMatch:'full'},
    {path:'header', component:HeaderComponent},
    {path:'footer', component:FooterComponent},
    {path:'via lactea', component:ViaLacteaComponent},
    {path:'andromeda', component:AndromedaComponent},
    {path:'galaxia triangulo', component:GalaxiaTrianguloComponent},
    {path:'universo', component:UniversoComponent},
    {path:'rocosos/form', component:FormComponent},
    {path:'rocosos/form/:id', component:FormComponent},
    {path:'gaseosos/form', component:Form2Component},
    {path:'gaseosos/form/:id', component:Form2Component},
    {path:'gaseosos', component:GaseosoComponent},
    {path:'rocosos', component:RocosoComponent}
];
