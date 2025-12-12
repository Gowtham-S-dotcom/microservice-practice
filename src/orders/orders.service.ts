import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';

type Order = {
  id: string;
  itemName: string;
  quantity: number;
  status?: string;
};

@Injectable()
export class OrdersService {
  private orders: Order[] = [];
  private nextId = 1;

  findAll(): Order[] {
    return this.orders;
  }

  findOne(id: string): Order | undefined {
    return this.orders.find((o) => o.id === id);
  }

  create(dto: CreateOrderDto): Order {
    const order: Order = {
      id: String(this.nextId++),
      itemName: dto.itemName,
      quantity: dto.quantity,
      status: dto.status || 'pending',
    };
    this.orders.push(order);
    return order;
  }
}
