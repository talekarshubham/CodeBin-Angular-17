import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('noDataAnimation', [
      state('visible', style({
        opacity: 1,
        height: '*'
      })),
      state('hidden', style({
        opacity: 0,
        height: 0
      })),
      transition('visible => hidden', [
        animate('0.3s')
      ]),
      transition('hidden => visible', [
        animate('0.3s')
      ])
    ])
  ]
})
export class HomeComponent implements OnInit{
  items:any[]=[]
constructor(private dbService:DbService){

}
  ngOnInit(): void {
    this.dbService.getAllSnippet().then(data=>{
      console.log(data)
      this.items=data
    })
    console.log(this.items);
    
  }
  get noDataState() {
    return this.items.length === 0 ? 'visible' : 'hidden';
  }
}
