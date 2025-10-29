import { Component } from '@angular/core';
import { Universo } from '../universo/universo';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UniversoService } from '../universo/universo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gaseoso',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './gaseoso.component.html',
  styleUrl: './gaseoso.component.css'
})
export class GaseosoComponent {

  gaseosos1: Universo[];
  
    constructor(private universoService: UniversoService){
  
    }
    
    ngOnInit(): void {
      this.universoService.getUniversos().subscribe(
        gaseosos => this.gaseosos1 = gaseosos.filter(r => r.tipo && r.tipo.toLowerCase() === 'gaseoso')
      )
    }
  
    //invocando el método de eliminar
    delete(gaseoso:Universo):void{
      Swal.fire({
        title: "Esta segur@?",
        text: `Seguro deseas eliminar la Tarea: ${gaseoso.id} !`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Eliminar!"
      }).then((result) => {
        if (result.isConfirmed) {
          this.universoService.delete(gaseoso.id).subscribe(
            response=>{
              this.gaseosos1 = this.gaseosos1.filter(FF15=> FF15 !== gaseoso)
              Swal.fire({
                title: "Borrada!",
                text: `Tu Tarea ha sido eliminada: ${gaseoso.id}`,
                icon: "success"
              });
            }
          )
        }
      });
    }

}
