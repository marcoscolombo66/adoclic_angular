import { TestBed } from '@angular/core/testing';

import { AuthService } from '../services/auth.service';
import { AuthGuard } from '../auth.guard';
const authServiceMock = {
  isAuthenticated: jasmine.createSpy('isAuthenticated').and.returnValue(true),
};
describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AuthService, useValue: authServiceMock },
        AuthGuard,
      ],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
