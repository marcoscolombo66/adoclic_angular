import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import type { Product } from '../interfaces/req-response';
import { delay, map, tap } from 'rxjs';
import { UrlConfigService } from '../services/url-config.service'; 
interface State {
  heroes: Product[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root',
})

export class ProductosService {
  private http = inject(HttpClient);
  private urlConfig = inject(UrlConfigService);

  #state = signal<State>({
    loading: true,
    heroes: [],
  });

  public heroes = computed(() => this.#state().heroes);
  public loading = computed(() => this.#state().loading);
   

  constructor() {
    this.loadHeroes();
  }

  private loadHeroes() {
    this.http
      .get<Product[]>(this.urlConfig.getBaseUrl())
      .pipe(delay(1500))
      .subscribe({
        next: (res) => {
          this.#state.update((state) => ({
            ...state,
            loading: false,
            heroes: res,
          }));
        },
        error: (error) => {
          console.error('Error loading heroes:', error);
          this.#state.update((state) => ({
            ...state,
            loading: false,
          }));
        },
      });
  }

  getHeroeById(id: string) {
    return this.http.get<Product>(`${this.urlConfig.getBaseUrl()}/${id}`).pipe(
      delay(1500),
      map((resp) => resp)
    );
  }

  deleteHeroe(id: any) {
    return this.http.delete<Product>(`${this.urlConfig.getBaseUrl()}/${id}`).pipe(
      delay(1500),
      tap(() => {
        this.#state.update((state) => ({
          ...state,
          heroes: state.heroes.filter((hero) => hero.id !== id),
        }));
      })
    );
  }

  editHero(id: any, updatedHero: Partial<Product>) {
    return this.http
      .put<Product>(`${this.urlConfig.getBaseUrl()}/${id}`, updatedHero)
      .pipe(
        delay(1500),
        tap((updatedHero) => {
          this.#state.update((state) => ({
            ...state,
            heroes: state.heroes.map((hero) =>
              hero.id === id ? updatedHero : hero
            ),
          }));
        }),
        map((resp) => resp)
      );
  }

  createHero(newHero: Partial<Product>) {
    return this.http.post<Product>(this.urlConfig.getBaseUrl(), newHero).pipe(
      delay(1500),
      tap((createdHero) => {
        this.#state.update((state) => ({
          ...state,
          heroes: [...state.heroes, createdHero],
        }));
      }),
      map((resp) => resp)
    );
  }
}
