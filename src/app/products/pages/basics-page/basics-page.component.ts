import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.scss']
})
export class BasicsPageComponent {
  public nameLower : string ='Carlos'
  public nameUpper : string ='CARLOS'
  public fullName : string ='CaRlOs JeSuS';

}
