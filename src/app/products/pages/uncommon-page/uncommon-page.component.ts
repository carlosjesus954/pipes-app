import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.scss']
})
export class UncommonPageComponent {
  //i18n Select
  public name : string = 'Carlos'
  public gender : 'male' | 'female' = 'male'
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }
  public changeCliente (){
    this.name='Melissa'
    this.gender='female'
  }

  // i18nPlural

  public clients : string[] = ['Maria','Joselu','Yolanda','Carlos','Eduardo','Melissa']
  public clientsMap = {
    '=0':'no tenemos ningún cliente esperando.',
    '=1':'tenemos un cliente esperando.',
    'other':'Tenemos # clientes esperando.',
  }
  public deleteClient (){
    this.clients.shift()
  }

  // KeyValue Pipe
  public person = {
    name: 'Carlos',
    age: 23,
    address: 'Puerto real, Cádiz'
  }
  // Async Pipe
  public myObservableTimer = interval(2000).pipe(
    tap(value => console.log('coco', value))
  );
   public promiseValue:Promise<string> = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('Tenemos datos.')
      this.person.name='Otro nombre'
    },3000)
   })
}
