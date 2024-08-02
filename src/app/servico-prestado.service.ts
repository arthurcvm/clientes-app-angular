import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServicoPestado } from './servico-prestado/servicoPrestado';
import { Observable } from 'rxjs';
import {environment} from '../environments/environment'
import { ServicoPestadoBusca } from './servico-prestado/servico-prestado-lista/servicoPrestadoBusca';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  apiURL: string = environment.apiURLBase + '/api/servicos-prestados';

  constructor(private http: HttpClient) {}

    
  salvar(servicoPrestado: ServicoPestado) : Observable<ServicoPestado>{
    return this.http.post<ServicoPestado>(this.apiURL, servicoPrestado);
  }

  buscar(nome: string = "", mes: number) : Observable<ServicoPestadoBusca[]>{

    const httpParams = new HttpParams()
    .set("nome", nome)
    .set("mes", mes ? mes.toString() : '');

    const url = this.apiURL + "?" + httpParams.toString();
    return this.http.get<any>(url)
  }
}
