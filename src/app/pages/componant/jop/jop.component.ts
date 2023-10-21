import { Component, OnInit } from '@angular/core';
import { JopService } from '../../service/jop.service';

@Component({
  selector: 'app-jop',
  templateUrl: './jop.component.html',
  styleUrls: ['./jop.component.scss']
})
export class JopComponent  {
  id: any
  alljop: any
  constructor(private _jop:JopService) {this.getAllJop()}

  getAllJop(){
    this._jop.getalljops().subscribe((res) => {
      this.alljop=res.jobs
       console.log(this.alljop) },
    )};

    test(){
      this._jop.getalljops().subscribe((res) => {
        // this.alljop=res.jobs
        this.alljop=res.jops

         console.log(this.alljop) },
      )};


}
