import { Component } from '@angular/core';
import { Universo } from '../universo/universo';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-via-lactea',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './via-lactea.component.html',
  styleUrl: './via-lactea.component.css'
})
export class ViaLacteaComponent {
  rocosos1: Universo[]=[
    {
      id: 1,
      nombre: 'Mercurio',
      diametro: '4879 KM',
      distancia_sol: '57900000 KM',
      lunas: 0,
      tipo: 'Rocoso',
      url: "https://starwalk.space/gallery/images/facts-about-mercury/1140x641.jpg",
    }
  ]
}
