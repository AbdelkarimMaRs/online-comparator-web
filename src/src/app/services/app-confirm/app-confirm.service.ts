
import { Injectable } from '@angular/core';

import { AppComfirmComponent } from './app-confirm.component';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Observable} from 'rxjs/internal/Observable';

@Injectable()
export class AppConfirmService {

  constructor(private dialog: MatDialog) { }

  public confirm(title: string, message: string): Observable<boolean> {
    let dialogRef: MatDialogRef<AppComfirmComponent>;
    dialogRef = this.dialog.open(AppComfirmComponent, {
      width: '380px',
      disableClose: true,
      data: {title, message}
    });
    return dialogRef.afterClosed();
  }
}
