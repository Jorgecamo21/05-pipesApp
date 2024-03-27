import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
public nameLower:string = 'jorge';
public nameUpper:string = 'JORGE';
public fullName:string = 'JorGe cAnDoN';
public customDate:Date = new Date();
}
