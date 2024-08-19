import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AccountService } from './account.service';
import { Account } from './Models/Account';  

describe('AccountService', () => {
  let service: AccountService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AccountService]
    });
    service = TestBed.inject(AccountService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should send a POST request with the correct data', () => {
    const mockAccount: Account = {
        id: 1,
        name: 'Test Account',
        email: 'test@example.com',
        industry: ''
    };

    service.createAccount(mockAccount).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne('https://localhost:5001/api/accounts');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockAccount);  
    req.flush(mockAccount);  
  });
});
