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
  created_at:Date;
  postStatus='loveIt';

  constructor() { }

  ngOnInit() {
  }
  getPostStatus(){
    return this.postStatus;
  }
  onLoveIt(){
    console.log("loveIt");
  }
  dontLoveIt(){
    console.log("don't love it");
  }
  getColor(){
    if(this.loveIts>=0){
      return 'green';
    }else return 'red';
  }
}
