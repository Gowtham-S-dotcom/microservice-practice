import { CreateOrderDto } from './dto/create-order.dto';
type Order = {
    id: string;
    itemName: string;
    quantity: number;
    status?: string;
};
export declare class OrdersService {
    private orders;
    private nextId;
    findAll(): Order[];
    findOne(id: string): Order | undefined;
    create(dto: CreateOrderDto): Order;
}
export {};
//# sourceMappingURL=orders.service.d.ts.map