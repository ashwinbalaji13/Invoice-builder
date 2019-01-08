export class Invoice {
    _id:number;
    item:string;
    qty:number;
    date:Date;
    due:DataCue;
    tax:number;
    rate:number;
}
export class InvoicePaginationRsp{
    docs:Invoice[];
    total:number;
    pages:number;
    page:number;
    limit:number;
}