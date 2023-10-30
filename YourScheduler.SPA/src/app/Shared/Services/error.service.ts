import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  public registerError$ = new Subject<string>();
  public authError$ = new Subject<string>();
  constructor() { }
}
