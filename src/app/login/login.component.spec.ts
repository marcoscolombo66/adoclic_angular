import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs'; // Asegúrate de importar 'of' para simular observables
import LoginComponent from './login.component'; // Asegúrate de importar el componente correcto

describe('DashboardComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LoginComponent], // Usa 'imports' para componentes standalone
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { params: of({}) }, // Simulación de parámetros de ruta
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Asegúrate de que se detecten los cambios
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
