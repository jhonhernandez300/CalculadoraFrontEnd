import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ServicioSettings } from '../data/servicio-settings';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  postServicioSettingsForm(servicioSettings: ServicioSettings): Observable<any> {
    return this.http.post('https://localhost:44309/api/Servicio/PostServicio', servicioSettings);
  }

  getServicioSettingsForm(servicioSettings: ServicioSettings): Observable<any> {
    //return this.http.get('https://localhost:44309/api/Servicio/GetServicio', servicioSettings);
    return this.http.get<ServicioSettings>('https://localhost:44309/api/Servicio/GetServicio' +  "/" + servicioSettings.tecnico + "/" + servicioSettings.semanaDelAno);
  }

}