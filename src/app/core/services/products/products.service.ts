import { Injectable } from '@angular/core';

import { Product } from './../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [
    {
      id: '1',
      image: './../../../../assets/images/thumb-1.jpg',
      title: 'Thumb',
      price: 5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: '2',
      image: './../../../../assets/images/thumb-2.jpg',
      title: 'Thumb 2',
      price: 5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: '3',
      image: './../../../../assets/images/thumb-4.jpg',
      title: 'Thumb 3',
      price: 5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: '4',
      image: './../../../../assets/images/thumb-5.jpg',
      title: 'Thumb 4',
      price: 5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: '5',
      image: './../../../../assets/images/thumb-11.jpg',
      title: 'Thumb 5',
      price: 5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: '6',
      image: './../../../../assets/images/thumb-12.jpg',
      title: 'Thumb 6',
      price: 5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: '7',
      image: './../../../../assets/images/thumb-14.jpg',
      title: 'Thumb 7',
      price: 5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: '8',
      image: './../../../../assets/images/thumb-17.jpg',
      title: 'Thumb 8',
      price: 5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
  ];

  constructor() { }

  getAllProducts() {
    return this.products;
  }

  getProduct(id: string) {
    return this.products.find(item => id === item.id);
  }
}
