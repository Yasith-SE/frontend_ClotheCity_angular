import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

type StoreProduct = {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  imageFit: 'cover' | 'contain';
};

@Component({
  selector: 'app-clothes-store',
  standalone: true,
  imports: [CommonModule, NavbarComponent, SidebarComponent],
  templateUrl: './clothes-store.html',
  styleUrls: ['./clothes-store.css']
})
export class ClothesStoreComponent {
  readonly products: StoreProduct[] = [
    {
      id: 1,
      name: 'Black Jacket',
      category: 'Outerwear',
      price: '$129.99',
      image: 'images/black-jacket.jpg',
      imageFit: 'cover'
    },
    {
      id: 2,
      name: 'Ruby Dress',
      category: 'Evening wear',
      price: '$149.99',
      image: 'images/red-dress.jpg',
      imageFit: 'contain'
    },
    {
      id: 3,
      name: 'Midnight Jacket',
      category: 'Streetwear',
      price: '$136.50',
      image: 'images/black-jacket.jpg',
      imageFit: 'cover'
    },
    {
      id: 4,
      name: 'Velvet Dress',
      category: 'Party wear',
      price: '$159.99',
      image: 'images/red-dress.jpg',
      imageFit: 'contain'
    },
    {
      id: 5,
      name: 'Black Jacket',
      category: 'Outerwear',
      price: '$129.99',
      image: 'images/black-jacket.jpg',
      imageFit: 'cover'
    },
    {
      id: 6,
      name: 'Crimson Dress',
      category: 'Formal wear',
      price: '$154.90',
      image: 'images/red-dress.jpg',
      imageFit: 'contain'
    },
    {
      id: 7,
      name: 'Urban Jacket',
      category: 'Outerwear',
      price: '$138.25',
      image: 'images/black-jacket.jpg',
      imageFit: 'cover'
    },
    {
      id: 8,
      name: 'Ruby Dress',
      category: 'Evening wear',
      price: '$149.99',
      image: 'images/red-dress.jpg',
      imageFit: 'contain'
    },
    {
      id: 9,
      name: 'Midnight Jacket',
      category: 'Streetwear',
      price: '$136.50',
      image: 'images/black-jacket.jpg',
      imageFit: 'cover'
    },
    {
      id: 10,
      name: 'Velvet Dress',
      category: 'Party wear',
      price: '$159.99',
      image: 'images/red-dress.jpg',
      imageFit: 'contain'
    }
  ];
}
