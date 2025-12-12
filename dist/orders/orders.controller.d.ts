import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    findAll(): {
        id: string;
        itemName: string;
        quantity: number;
        status?: string;
    }[];
    findOne(id: string): {
        id: string;
        itemName: string;
        quantity: number;
        status?: string;
    };
    create(dto: CreateOrderDto): {
        id: string;
        itemName: string;
        quantity: number;
        status?: string;
    };
}
//# sourceMappingURL=orders.controller.d.ts.map