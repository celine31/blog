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
    this.loveIts = this.loveIts+ 1;
    console.log(this.loveIts);
  }
  dontLoveIt(){
    this.loveIts = this.loveIts -1;
    console.log(this.loveIts);
  }
  getColor(){
    if(this.loveIts>=0){
      return 'green';
    }else return 'red';
  }
}
