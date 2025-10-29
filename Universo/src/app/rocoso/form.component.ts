import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Universo } from '../universo/universo';
import { ActivatedRoute, Router } from '@angular/router';
import { UniversoService } from '../universo/universo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{

  public rocosos2: Universo = new Universo();

  titulo:string = "Formulario de Ingreso de Planetas";

  constructor(
    private universoService: UniversoService,
    private router: Router,
    private activatedRouted: ActivatedRoute
  ){}

  ngOnInit(){
    this.cargarRocoso();
    // Si no hay id, es creación => forzar tipo = 'Rocoso'
    this.activatedRouted.params.subscribe(params => {
      if (!params['id']) {
        this.rocosos2.tipo = 'Rocoso';
      }
    });
  }

  //cargar la planeta actual
  cargarRocoso(): void{
    this.activatedRouted.params.subscribe(params => {
      let id = params['id'];
      if(id){
        this.universoService.getUniverso(id).subscribe( (universo) => {
          this.rocosos2 = universo;
          // En caso de editar, asegurar que tipo tenga valor (si es null)
          if(!this.rocosos2.tipo){
            this.rocosos2.tipo = 'Rocoso';
          }
        });
      }
    })
  }

  //actualizar planeta
  update():void{
    this.universoService.update(this.rocosos2).subscribe(universo=> {
      this.router.navigate(['/rocosos']);
      Swal.fire('Nuevo Planeta Actualizado', `Planeta: ${universo.id} Actualizada con éxito!`, 'success');
    });
  }

  //crear planeta 
  public create():void{
    // Antes de crear, aseguramos que tipo sea 'Rocoso' (por si acaso)
    this.rocosos2.tipo = 'Rocoso';

    this.universoService.create(this.rocosos2).subscribe(universo => {
      this.router.navigate(['/rocosos']);
      Swal.fire('Nuevo Planeta añadido', `Planeta: ${universo.id} creado con éxito`, 'success');
    });
  }
}
