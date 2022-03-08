import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
logoimg:any =["assets/banner/banner1.jpg","assets/banner/banner2.jpg","assets/banner/banner3.jpg"]

tit1:string = "gold";
tit2:string = "sliver";
tit3:string = "diamond";
tit4:string = "platinum";

firstcard:any = [[],[{'card2':"card2 f element"},{'card2':"card2 s element"},{'card2':"card2 t element"}],[{'card3':"card3 f element"},{'card3':"card3 s element"},{'card3':"card3 t element"}],[{'card4':"card4 f element"},{'card4':"card4 s element"},{'card4':"card4 t element"}]];

getData(){
  alert("clicked me");
}

  constructor() { }

  ngOnInit(): void {
  }

}
