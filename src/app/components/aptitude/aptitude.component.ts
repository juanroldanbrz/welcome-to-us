import { Component, OnInit } from '@angular/core';
import { Aptitude } from "../../model/aptitude/aptitude";
@Component({
  selector: 'app-aptitude',
  templateUrl: './aptitude.component.html',
  styleUrls: ['./aptitude.component.scss']
})
export class AptitudeComponent implements OnInit {

  aptitudes = [{
    id: '0',
    name: 'Desarrollo Web',
    icon: '',
    img: 'assets/thumbnail_web.jpg',
    shortDescription: 'There are many variations of passages of Lorm avariable, bu in some form'
  }, {
    id: '1',
    name: 'Optimización Web',
    icon: '',
    img: 'assets/thumbnail_optimization.jpg',
    shortDescription: 'There are many variations of passages of Lorm avariable, bu in some form'
  }, {
    id: '2',
    name: 'Bots',
    icon: '',
    img: 'assets/thumbnail_bots.jpg',
    shortDescription: 'There are many variations of passages of Lorm avariable, bu in some form'
  }
  ];

  aptitudeActived = 0;

  ngOnInit() { }

  activeAptitude(id) {
    this.aptitudeActived = id;
  }

}
