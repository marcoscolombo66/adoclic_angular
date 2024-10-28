import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs'; // Asegúrate de importar 'of' para simular observables
import DashboardComponent  from './dashboard.component'; // Cambia a la ruta correcta de tu componente

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DashboardComponent], // Agrega el componente aquí
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}), // Simula los parámetros de la ruta
            snapshot: { data: {} }, // Simula los datos que puede necesitar el componente
            // Puedes agregar más propiedades simuladas según sea necesario
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Detecta cambios después de crear el componente
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
