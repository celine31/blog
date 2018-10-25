import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts=[
    {
      title: 'premier post',
      content:'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.',
      loveIts: 1,
      lastUpdate:new Date(), 
    },
    {
      title: 'deuxième post',
      content:'Le Lorem Ipsum est le faux texte standard',
      loveIts:-1,
      lastUpdate:new Date(),
    },
    {
      title: 'troisième post',
      content:'quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.',
      loveIts: 0,
      lastUpdate:new Date(),
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
