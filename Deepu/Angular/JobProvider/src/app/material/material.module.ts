import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTabsModule} from '@angular/material/tabs';
// import { MatSidenav } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';


import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';

const materialArray=[
  MatInputModule,MatFormFieldModule,MatTabsModule,MatProgressSpinnerModule,NgFor,MatSelectModule,MatDialogModule, MatTableModule,MatExpansionModule,MatIconModule,MatButtonModule,MatToolbarModule,MatSidenavModule,MatDividerModule,MatMenuModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,materialArray],
    exports:[materialArray]
})
export class MaterialModule { }
