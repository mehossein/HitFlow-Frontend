import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BaseHttpService {
  constructor(private readonly _http: HttpClient) {}
}

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
