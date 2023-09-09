import {Component} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title: string = 'Friends Of Mine'

  onTitleClick(): void {
    console.log('Botão para tela inicial clicado')
  }
}
