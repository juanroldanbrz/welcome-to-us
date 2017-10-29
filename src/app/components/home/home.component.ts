import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sliders = [{
    id: 0,
    title: 'bluggie',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
    image: ''
  }, {
    id: 1,
    title: 'bluggie 2',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
    image: ''
  }, {
    id: 2,
    title: 'bluggie 3',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
    image: ''
  },
  ];

  sliderActive = 0;

  constructor() { }

  ngOnInit() {
  }

  activateSlider(id) {
    this.sliderActive = id;
    console.log(id);
  }

}
