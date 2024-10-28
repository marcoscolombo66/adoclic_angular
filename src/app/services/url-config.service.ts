import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UrlConfigService {
  private baseUrls = {
    primary: 'https://fakestoreapi.com/products',
    fallback: 'https://fakestoreapi.com/products',
  };

  private currentBaseUrl = this.baseUrls.primary;

  getBaseUrl(): string {
    return this.currentBaseUrl;
  }

  setFallbackUrl(): void {
    this.currentBaseUrl = this.baseUrls.fallback;
  }

  getFullUrl(endpoint: string = ''): string {
    return `${this.currentBaseUrl}${endpoint}`;
  }
}
