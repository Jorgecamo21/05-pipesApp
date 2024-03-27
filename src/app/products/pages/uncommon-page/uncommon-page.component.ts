import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  //i18Select
public name:string = 'jorge';
public gender:'male'| 'female' = 'male';
public invitationMap = {
  'male': 'invitarlo',
  'female': 'invitarla',
}

changeClient():void{
  this.name = 'manoli';
  this.gender = 'female';
}

//i18Plural

public clientes:string[] = ['Manolo','Jorge','Alejandro','Angela','Sofia','Andrea','Patri','Sara','Maria'];
public clientsMap = {
  '=0': 'Actuamlente no tenemos clientes esperando.',
  '=1' : 'Actuamlente tenemos un cliente esperando.',
  'other' : 'Actuamlente tenemos # clientes esperando.'
}

deleteClient():void{
  this.clientes.shift();
}

//keyvaluepipe
public person ={
  name: 'jorge',
  age : 20,
  address: 'Aldaia España'
}
//asyncpipe
public myObservableTimer:Observable<number> = interval(2000).pipe(
  tap(value => console.log('tap', value)
  )
);

public promiseValue:Promise<string> = new Promise((resolve, reject) => {
  setTimeout(
    () => {
      resolve('Tenemos data en la promesa.');
    },3500);
})

}
