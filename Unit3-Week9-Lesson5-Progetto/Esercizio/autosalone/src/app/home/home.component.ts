import { Component } from '@angular/core';
import { Car } from '../interfaces/car.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
cars: Car[] = [
  {
      "brand": "Fiat",
      "brandLogo": "2016/02/Logo-Fiat-600x338.png",
      "model": "500L",
      "modelImage": "06/aut-51-iz0284-01p.jpg",
      "year": 2015,
      "price": 7500,
      "available": false
  },
  {
      "brand": "Fiat",
      "brandLogo": "2016/02/Logo-Fiat-600x338.png",
      "model": "500 Abarth",
      "modelImage": "06/aut-51-iz0271-01p.jpg",
      "year": 2010,
      "price": 3500,
      "available": true
  },
  {
      "brand": "Ford",
      "brandLogo": "2016/03/Ford-Logo-600x338.png",
      "model": "Taurus",
      "modelImage": "01/aut-15-iz0614-01p.jpg",
      "year": 2009,
      "price": 5200,
      "available": false
  },
  {
      "brand": "Ford",
      "brandLogo": "2016/03/Ford-Logo-600x338.png",
      "model": "Focus",
      "modelImage": "06/aut-50-iz1081-01p.jpg",
      "year": 2014,
      "price": 9700,
      "available": true
  },
  {
      "brand": "Audi",
      "brandLogo": "2015/10/Audi-Logo-600x338.png",
      "model": "A3",
      "modelImage": "05/aut-46-iz0055-01p.jpg",
      "year": 2012,
      "price": 4300,
      "available": true
  },
  {
      "brand": "Audi",
      "brandLogo": "2015/10/Audi-Logo-600x338.png",
      "model": "Q7",
      "modelImage": "06/aut-51-iz0124-01p.jpg",
      "year": 2020,
      "price": 41700,
      "available": false
  }
];
selectedCars: Car[] = [];
brands: string[] = [];

getBrands (cars: Car[]) {
  this.brands = [];
  cars.forEach((element:Car) => {
    if (!this.brands.includes(element.brandLogo)) {
      this.brands.push(element.brandLogo)
    }
  })
}

getRandomCars (cars: Car[]) {
  this.selectedCars = [];
  const firstIndex = Math.floor(Math.random() * cars.length);
  let secondIndex = Math.floor(Math.random() * cars.length);
  while (firstIndex === secondIndex) {
    secondIndex = Math.floor(Math.random() * cars.length);
  }
  this.selectedCars.push(cars[firstIndex]);
  this.selectedCars.push(cars[secondIndex]);
}

constructor () {
  this.getBrands(this.cars)
  this.getRandomCars(this.cars)
}
}
