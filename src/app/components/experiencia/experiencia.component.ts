import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
    
  experiencias = [
    { empresa: 'Corporación Primax S.A.', cargo: 'Jefe de Ventas Marino', fecha: 'Febrero 2022 - Presente', ubicacion: 'Lima, Perú' },
    { empresa: 'Renner Coatings Perú SAC', cargo: 'Ejecutivo Comercial', fecha: 'Mayo 2021 - Febrero 2022', ubicacion: 'Lima, Perú' },
    { empresa: 'Comercial del Acero S.A. (COMASA)', cargo: 'Ejecutivo Comercial', fecha: 'Enero 2020 - Diciembre 2020', ubicacion: 'Lima, Perú' },
    { empresa: 'Codelpa Perú SAC', cargo: 'Ejecutivo Comercial', fecha: 'Octubre 2018 - Enero 2020', ubicacion: 'Lima, Perú' },
    { empresa: 'Chemifabrik Perú SAC', cargo: 'Ejecutivo Técnico Comercial', fecha: 'Abril 2016 - Septiembre 2017', ubicacion: 'Lima, Perú' },
    { empresa: 'Técnicas Metálicas Ingenieros SAC', cargo: 'Supervisor', fecha: 'Octubre 2015 - Febrero 2016', ubicacion: 'Lima, Perú' },
    { empresa: 'Corporación Mara S.A.', cargo: 'Ejecutivo Comercial', fecha: 'Marzo 2015 - Octubre 2015', ubicacion: 'Lima, Perú' },
    { empresa: 'Asesor Técnico / Ejecutivo Comercial', cargo: 'Asesor Técnico / Ejecutivo Comercial', fecha: 'Noviembre 2006 - Febrero 2015', ubicacion: 'Lima, Perú' }
  ];
}
