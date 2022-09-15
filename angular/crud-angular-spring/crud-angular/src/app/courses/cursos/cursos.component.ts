import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { Cursos } from '../model/cursos';
import { CursosService } from './../services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  courses$: Observable <Cursos[]>;
  displayedColumns = ['name', 'category'];

  constructor(
    private cursosService: CursosService,
    public dialog: MatDialog) {

    this.courses$ = this.cursosService.list()
    .pipe(
      catchError(erro => {
        this.onError('Erro ao carregar cursos.');
      return of([]);
      })
    );
  }

  onError(ErrorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: ErrorMsg,
    });
  }

  ngOnInit(): void {
  }

}
