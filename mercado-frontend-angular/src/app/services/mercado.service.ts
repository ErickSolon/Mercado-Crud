import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mercado } from '../models/mercado.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MercadoService {
  baseURL = 'http://127.0.0.1:8080/api/mercado/';
  
  constructor(private httpclient: HttpClient) { }

  create(mercadoEstoque: Mercado): Observable<Mercado> {
    return this.httpclient.post<Mercado>(this.baseURL, mercadoEstoque);
  }

  getAll(page: number, size: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.httpclient.get<any>(this.baseURL, { params });
  }

  getById(id: string): Observable<Mercado> {
    return this.httpclient.get<Mercado>(this.baseURL + id);
  }

  updateById(id: string, mercadoEstoque: Mercado): Observable<Mercado> {
    return this.httpclient.put<Mercado>(this.baseURL + id, mercadoEstoque);
  }

  deleteById(id: string): Observable<Mercado> {
    return this.httpclient.delete<Mercado>(this.baseURL + id);
  }
}
