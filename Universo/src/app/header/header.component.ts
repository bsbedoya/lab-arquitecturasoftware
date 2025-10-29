import { Component, Renderer2 } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  titulo = "Universos"
  
  //constructor(private router: Router, private renderer: Renderer2) {}

  //ngOnInit() {
    // Escuchar cambios de ruta
    //this.router.events.subscribe(() => {
      //const collapseElement = document.getElementById('navbarToggleExternalContent');
      
      //if (collapseElement?.classList.contains('show')) {
        //this.renderer.removeClass(collapseElement, 'show');
      //}});}
}
