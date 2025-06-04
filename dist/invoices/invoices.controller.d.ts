import { InvoicesService } from './invoices.service';
import { Response } from 'express';
export declare class InvoicesController {
    private readonly invoicesService;
    constructor(invoicesService: InvoicesService);
    getInvoice(orderId: number, res: Response): Promise<void>;
}
