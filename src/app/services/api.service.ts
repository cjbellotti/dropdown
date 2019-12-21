import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn : 'root'
})
export class ApiService {

    constructor (
        private _httpClient : HttpClient
    ) {}

    getAll() : Promise<any[]> {
        return this._httpClient.get<any[]>('https://jsonplaceholder.typicode.com/todos').toPromise();
    }
}