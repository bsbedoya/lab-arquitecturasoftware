import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Universo } from '../universo/universo';
import { UniversoService } from '../universo/universo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rocoso',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './rocoso.component.html',
  styleUrl: './rocoso.component.css'
})
export class RocosoComponent implements OnInit {

  rocosos1: Universo[];

  constructor(private universoService: UniversoService){

  }
  
  ngOnInit(): void {
    this.universoService.getUniversos().subscribe(
      rocosos => this.rocosos1 = rocosos.filter(r => r.tipo && r.tipo.toLowerCase() === 'rocoso')
    )
  }

  //invocando el método de eliminar
  delete(rocoso:Universo):void{
    Swal.fire({
      title: "Esta segur@?",
      text: `Seguro deseas eliminar la Tarea: ${rocoso.id} !`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.universoService.delete(rocoso.id).subscribe(
          response=>{
            this.rocosos1 = this.rocosos1.filter(FF15=> FF15 !== rocoso)
            Swal.fire({
              title: "Borrada!",
              text: `Tu Tarea ha sido eliminada: ${rocoso.id}`,
              icon: "success"
            });
          }
        )
      }
    });
  }

}
