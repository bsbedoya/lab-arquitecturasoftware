import { Component } from '@angular/core';
import { UniversoService } from '../universo/universo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Universo } from '../universo/universo';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form2',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form2.component.html',
  styleUrl: './form2.component.css'
})
export class Form2Component {

  public rocosos2: Universo = new Universo();
  
  titulo: string = "Formulario de Ingreso de Planetas";
  
  constructor(
    private universoService: UniversoService, 
    private router: Router,
    private activatedRouted: ActivatedRoute
  ){}

  ngOnInit(){
    this.cargarRocoso();

    // Si no hay id (nuevo planeta), asignar tipo 'Rocoso'
    this.activatedRouted.params.subscribe(params => {
      if (!params['id']) {
        this.rocosos2.tipo = 'Gaseoso';
      }
    });
  }

  // Cargar planeta actual para edición
  cargarRocoso(): void {
    this.activatedRouted.params.subscribe(params => {
      let id = params['id'];
      if(id){
        this.universoService.getUniverso(id).subscribe(universo => {
          this.rocosos2 = universo;
          // Si el tipo viene null, forzamos 'Rocoso'
          if (!this.rocosos2.tipo) {
            this.rocosos2.tipo = 'Gaseoso';
          }
        });
      }
    });
  }

  // Actualizar planeta
  update(): void {
    this.universoService.update(this.rocosos2).subscribe(universo => {
      this.router.navigate(['/rocosos']);
      Swal.fire('Nuevo Planeta Actualizado', `Planeta: ${universo.id} Actualizada con éxito!`, 'success');
    });
  }

  // Crear planeta
  public create(): void {
    // Antes de crear, aseguramos que tipo sea 'Rocoso'
    this.rocosos2.tipo = 'Rocoso';

    this.universoService.create(this.rocosos2).subscribe(universo => {
      this.router.navigate(['/rocosos']);
      Swal.fire('Nuevo Planeta añadido', `Planeta: ${universo.id} creado con éxito`, 'success');
    });
  }
}
