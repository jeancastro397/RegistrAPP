import { Injectable } from '@angular/core';
import { BehaviorSubject, } from 'rxjs';
import { Usuarios } from 'src/models/Usuarios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private usuarioActivo: BehaviorSubject< Usuarios | null> = new BehaviorSubject<Usuarios | null> (null);

  public $usuarioActivo = this.usuarioActivo.asObservable();

  constructor() { }
}
