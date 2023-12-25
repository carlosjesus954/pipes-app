import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  menuItems : MenuItem[] = [];

  ngOnInit(): void {
    this.menuItems = [
      {label:'Home', icon:'pi pi-desktop', items:[
        {
          label:'Textos y fechas',
          icon: 'pi pi-align-left',
          routerLink: ['']
          
        },
        {
          label:'Números',
          icon: 'pi pi-dollar',
          routerLink: ['/numbers']
        },
        {
          label:'No comunes',
          icon: 'pi pi-globe',
          routerLink: ['/uncommon']
        },
      ]},
      {label:'Pipes personalizados', icon:'pi pi-cog', items:[
        {
          label:'Otro elemento',
          icon:'pi pi-cog'
        }
      ]},
    ]
  }
 
  
}
