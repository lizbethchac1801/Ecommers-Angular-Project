import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  constructor(){}
filterPost = '';
 post = [
  {
    'id': 1,
    'producto': 'Computadora Portatil',
    'precio': '$23,000',
    'marca' : 'HP',
    'descuento': '20%'
  },
  {
    'id': 2,
    'producto': 'Moto Semiautomatica',
    'precio': '$23,000',
    'marca' : 'Italica',
    'descuento': '10%'
  },
  {
    'id': 3,
    'producto': 'Computadora Portatil',
    'precio': '$26,000',
    'marca' : 'Huawei',
    'descuento': '25%'
  },
  {
    'id': 4,
    'producto': 'Camisa Rayas',
    'precio': '$1000',
    'marca' : 'Zara',
    'descuento': '10%'
  },
  {
    'id': 5,
    'producto': 'Pantalon',
    'Precio': '$700',
    'Marca' : 'Zara',
    'Descuento': '20%'
  }

 ]
 ngOnInit() {
 
}

}
