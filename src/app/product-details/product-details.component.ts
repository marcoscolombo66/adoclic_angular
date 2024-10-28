import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-details',
  standalone: true,
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  imports: [CommonModule, MatDialogModule,
    MatIconModule, 
    MatButtonModule, 
  ],
})
export class ProductDetailsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
