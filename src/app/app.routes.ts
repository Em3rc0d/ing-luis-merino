import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent }, // Página principal
  { path: 'about', component: AboutComponent }, // Sección Sobre mí
  { path: 'experiencia', component: ExperienciaComponent }, // Sección Experiencia
  { path: 'services', component: ServicesComponent }, // Sección Servicios (si decides usarla)
  { path: 'blog', component: BlogComponent }, // Sección Blog
  { path: 'contact', component: ContactComponent }, // Sección Contacto
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirección para rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
