import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServicoPestado } from './servico-prestado/servicoPrestado';
import { Observable } from 'rxjs';
import {environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  apiURL: string = environment.apiURLBase + '/api/servicos-prestados';

  constructor(private http: HttpClient) {}

    
  salvar(servicoPrestado: ServicoPestado) : Observable<ServicoPestado>{
    return this.http.post<ServicoPestado>(this.apiURL, servicoPrestado);
  }
}
