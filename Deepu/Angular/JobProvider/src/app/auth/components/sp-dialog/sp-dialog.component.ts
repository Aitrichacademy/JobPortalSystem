import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sp-dialog',
  templateUrl: './sp-dialog.component.html',
  styleUrls: ['./sp-dialog.component.css']
})
export class SpDialogComponent {


  constructor(
    private dialogRef: MatDialogRef<SpDialogComponent>,
    private router: Router,
   
  ) {}
  redirectToLogin(): void {
    this.dialogRef.close();
    this.router.navigate(['/Login-Register']); // Redirect to login page
  }


}
