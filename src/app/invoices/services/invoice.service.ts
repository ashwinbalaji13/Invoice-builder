import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Invoice, InvoicePaginationRsp } from "../models/invoice";

const BASE_URL = "http://localhost:3000/api";
@Injectable()
export class InvoiceService {
  constructor(private httpClient: HttpClient) { }
  getInvoices(data): Observable<InvoicePaginationRsp> {
    // debugger;
    let query = `${BASE_URL}/invoices?page=${data.page + 1}&limit=${data.perPage}`;
    if (data.sortItem && data.sortDirection) {
      query += `&sortItem=${data.sortItem}&sortOrder=${data.sortDirection}`;
    }
    if (data.filterText) {
      query += `&filter=${data.filterText}`;
    }
    return this.httpClient.get<InvoicePaginationRsp>(query);
  }
  filterInvoices(data): Observable<InvoicePaginationRsp> {
    // debugger;
    let query = `${BASE_URL}/invoices?`;
    if (data.sortItem && data.sortDirection) {
      query += `&sortItem=${data.sortItem}&sortOrder=${data.sortDirection}`;
    }
    if (data.filterText) {
      query += `&filter=${data.filterText}`;
    }
    return this.httpClient.get<InvoicePaginationRsp>(query);
  }
  postInvoices(invoice): Observable<Invoice> {
    return this.httpClient.post<Invoice>(`${BASE_URL}/invoices`, invoice);
  }
  deleteInvoice(id): Observable<Invoice> {
    return this.httpClient.delete<Invoice>(`${BASE_URL}/invoices/${id}`);
  }
  getInvoiceById(id): Observable<Invoice> {
    return this.httpClient.get<Invoice>(`${BASE_URL}/invoices/${id}`);
  }
  updateInvoiceById(id, body: Invoice): Observable<Invoice> {
    // debugger;
    return this.httpClient.put<Invoice>(`${BASE_URL}/invoices/${id}`, body);
  }
}
