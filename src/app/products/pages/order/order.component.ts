import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent implements OnInit {
  public isUpperCase:boolean = true;
  public orederBy:keyof Hero | '' = '';
  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          {
              label: 'Update',
              icon: 'pi pi-refresh'
          },
          {
              label: 'Delete',
              icon: 'pi pi-times'
          }
      ];
  }
  public heroes:Hero[] = [
    {
      name:'Superman',
      canFly:true,
      color:Color.blue
    },
    {
      name:'Spiderman',
      canFly:false,
      color:Color.red
    },
    {
      name:'Hulk',
      canFly:false,
      color:Color.green
    },
    {
      name:'Ironman',
      canFly:true,
      color:Color.red
    },
    {
      name:'Thor',
      canFly:false,
      color:Color.black
    },
  ]
  toggleUpperCase():void{
    this.isUpperCase = !this.isUpperCase;

  }

  changeOrder (value:keyof Hero){
    this.orederBy = value;
  }
}
