import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
const OK = 'Okay';
const TRY_AGAIN_LATER = 'Please try again later or contact our support.';
@Injectable({ providedIn: 'root' })
export class ErroHandlerService {
  constructor(private snackBar: MatSnackBar) {}

  handleError(response: HttpErrorResponse) {
    switch (response.status) {
      case 404:
        this.openSnackBar(`😞 ${response.error[0].message as string}`, OK);
        break;
      case 500:
        this.openSnackBar(`⚠️ An error occurred while fetching the weather data. ${TRY_AGAIN_LATER}`, OK);
        break;
      default:
        this.openSnackBar(`⚠️ ${response.statusText}. ${TRY_AGAIN_LATER} `, OK);
        break;
    }
  }

  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }
}
