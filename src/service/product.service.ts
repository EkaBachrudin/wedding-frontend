import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  createProduct(products: { pName: string; desc: string; price: string }) {
    const headers = new HttpHeaders({ myHeader: 'pro' });
    return this.httpClient.post<{ name: string }>(
      'http://angularexample',
      products,
      {
        headers: headers,
      }
    );
  }

  getUser() {
    return this.httpClient.get<any>(
      'https://jsonplaceholder.typicode.com/users/1'
    );
  }
}
