import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { roots } from 'src/app/shared/configs/endPoints';
import { keys } from 'src/app/shared/configs/localstorage-key';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JopService {
apiUrl = environment?.apiUrl;
  langkey: any = window.localStorage.getItem(keys.language);

  constructor(private http: HttpClient) { }
  newEducation(data: any): Observable<any> {
    return this.http?.post<any>(this.apiUrl + roots?.jops?.jobsNew, data);
  }
  jop(id:string): Observable<any> {
    return this.http?.get<any>(this.apiUrl + roots?.jops?.jobs +'64e50fa354abd63b6e349912'  );
   }
  getalljops(): Observable<any> {
    return this.http?.get<any>(this.apiUrl + roots?.jops?.all );
   }
   recommendationsJop(): Observable<any> {
    return this.http?.get<any>(this.apiUrl + roots?.jops?.recommendation +'64e50fa354abd63b6e349912');
   }
   applicantsjops(): Observable<any> {
    return this.http?.get<any>(this.apiUrl + roots?.jops?.jobApplicants +'64e50fa354abd63b6e349912');
   }

}

