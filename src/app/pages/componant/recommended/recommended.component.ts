import { Component, OnInit } from '@angular/core';
import { JopService } from '../../service/jop.service';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss']
})
export class RecommendedComponent{
  jopRecommendations:any
  constructor(private _jop: JopService){
  }
  getrecommendationsJop(){
    this._jop.recommendationsJop().subscribe((res) => {
          this.jopRecommendations = res;
       console.log(res) },
    )};
}
