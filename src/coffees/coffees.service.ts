import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { Coffee } from './entities/coffee.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Roast',
      brand: 'Buddy Brew',
      flavors: ['Chocolate', 'vanilla'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    const coffee = this.coffees.find((item) => item.id === +id);
    if (!coffee) {
      throw new HttpException(`Coffee # ${id} not found`, HttpStatus.NOT_FOUND);
    }
    return coffee;
  }

  create(createCoffeDto: any) {
    this.coffees.push(createCoffeDto);
  }

  update(id: string, updateCoffeDto: any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
    this.coffees.splice(coffeeIndex, 1);
  }
}
