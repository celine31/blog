import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() title:string;
  @Input() content : string;
  @Input() loveIts: number;
  @Input() lastUpdate: Date; 
  

  constructor() { }

  ngOnInit() {
  }
   onLoveIt(){
    this.loveIts = this.loveIts+ 1;
    this.lastUpdate=new Date();
    console.log(this.loveIts);
  }
  dontLoveIt(){
    this.loveIts = this.loveIts -1;
    this.lastUpdate=new Date();
    console.log(this.loveIts);
  }
  getColor(){
    if(this.loveIts>=0){
      return 'greenyellow';
    }else return 'tomato';
  }
}
