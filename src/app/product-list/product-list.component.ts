import { Component, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { Product } from '../interfaces/req-response';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router'; 
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  animations: [
    trigger('transitionMessages', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ])
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatSelectModule,
    MatIconModule,
    MatPaginatorModule,
    FormsModule
  ]
})
export class ProductListComponent {
  selectedCategory: string = '';
  pageSize: number = 10; 
  displayedColumns: string[] = ['id', 'title', 'category', 'price', 'actions'];
  dataSource = new MatTableDataSource<Product>();
  categories: string[] = [];
  pageSizeOptions = [5, 10, 20];
  isLoggedIn = true; 

  private http = inject(HttpClient);
  private dialog = inject(MatDialog);
  private router = inject(Router); 

  @ViewChild(MatPaginator) paginator!: MatPaginator; 
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    if (!this.isLoggedIn) {
      alert("Por favor, inicia sesión.");
      return;
    }
    this.fetchProducts();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  fetchProducts() {
    this.http.get<Product[]>('https://fakestoreapi.com/products').subscribe(products => {
      this.dataSource.data = products;
      this.categories = [...new Set(products.map(product => product.category))];
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyCategoryFilter() {
    this.dataSource.filter = this.selectedCategory.trim().toLowerCase();
  }

  openProductDetails(product: Product) {
    this.dialog.open(ProductDetailsComponent, {
      data: product,
      width: '500px'
    });
  }

  logout() {
    this.isLoggedIn = false;
    alert("Sesión cerrada correctamente.");
    this.router.navigate(['/login']); 
  }

  onPageSizeChange(size: number) {
    this.pageSize = size;
    this.paginator.pageSize = size;
    this.dataSource.paginator = this.paginator; 
  }
}
