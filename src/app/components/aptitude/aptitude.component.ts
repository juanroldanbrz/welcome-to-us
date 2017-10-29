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
    name: 'Graphics Design',
    icon: '',
    img: '',
    shortDescription: 'There are many variations of passages of Lorm avariable, bu in some form'
  }, {
    id: '1',
    name: 'Marketing Online',
    icon: '',
    img: '',
    shortDescription: 'There are many variations of passages of Lorm avariable, bu in some form'
  }, {
    id: '2',
    name: 'Branding Design',
    icon: '',
    img: '',
    shortDescription: 'There are many variations of passages of Lorm avariable, bu in some form'
  }
  ];

  aptitudeActived = 0;

  ngOnInit() { }

  activeAptitude(id) {
    this.aptitudeActived = id;
  }

}
