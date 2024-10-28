import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog'; // Asegúrate de importar el módulo necesario

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProductListComponent, MatDialogModule], // Cambia a 'imports'
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} }, // Proveer datos para el diálogo si es necesario
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
