import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() postName:string;
  
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
}
