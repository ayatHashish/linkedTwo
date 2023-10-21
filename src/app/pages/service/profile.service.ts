import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { roots } from 'src/app/shared/configs/endPoints';
import { keys } from 'src/app/shared/configs/localstorage-key';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  apiUrl = environment?.apiUrl;
  langkey: any = window.localStorage.getItem(keys.language);

  constructor(private http: HttpClient) { }

  newEducation(data: any): Observable<any> {
    return this.http?.post<any>(this.apiUrl + roots?.profile?.newEducation + '64dcea18096fea30267de3f9', data);
  }
  newCertification(data: any): Observable<any> {
    return this.http?.post<any>(this.apiUrl + roots?.profile?.newCertification + '64dcea18096fea30267de3f9', data);
  }

  newExperience(data: any): Observable<any> {
    return this.http?.post<any>(this.apiUrl + roots?.profile?.newExperience + '64dcea18096fea30267de3f9', data);
  }
  newLanguage(data: any): Observable<any> {
    return this.http?.post<any>(this.apiUrl + roots?.profile?.newLanguage + '64dcea18096fea30267de3f9', data);
  }


  getUserprofile(_id: string): Observable<any> {
    // return this.http?.get<any>(this.apiUrl + roots?.profile?.getProfile +`${_id}`);
    // return this.http?.get<any>(this.apiUrl + roots?.profile?.getProfile +'_id');
    return this.http?.get<any>(this.apiUrl + roots?.profile?.getProfile + '64dcea18096fea30267de3f9');
  }
}
