import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { local } from "../model/local";

@Injectable()
export class MapsService{
    constructor(private http: HttpClient) { }
    getMaps() : Observable<local[]>{
        return this.http.get<local[]>(
            `http://www.mocky.io/v2/5c05b95f3300005e01e81337`);
    }
}