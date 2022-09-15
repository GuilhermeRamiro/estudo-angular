import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, take, tap } from 'rxjs';

import { Cursos } from './../model/cursos';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = '/assets/cursos.json'

  constructor(private httpClirnt: HttpClient) { }

  list() {
    return this.httpClirnt.get<Cursos[]>(this.API)
    .pipe(
      take(1),
      delay(500),
      tap(cursos => console.log(cursos))
    );
  }
 }

