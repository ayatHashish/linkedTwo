import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JopService } from '../../service/jop.service';

@Component({
  selector: 'app-jop-details',
  templateUrl: './jop-details.component.html',
  styleUrls: ['./jop-details.component.scss']
})
export class JopDetailsComponent {

  id: any
  data: any
  constructor(
    private _ActivatedRoute: ActivatedRoute, private _jop:JopService  ) {

this.getJop('')

     }

  getJop(id:string) {
     this.id = this._ActivatedRoute.snapshot.params['id'];
     console.log(this.id)
    this._jop.jop(id).subscribe(res => {
      this.data = res
      console.log(this.data)
    })
}
}
