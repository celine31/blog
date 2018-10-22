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
      loveIts: 5,
    },
    {
      title: 'deuxième post',
      content:'Le Lorem Ipsum est le faux texte standard',
      loveIts: -5,
    },
    {
      title: 'troisième post',
      content:'quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.',
      loveIts: 2,
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
