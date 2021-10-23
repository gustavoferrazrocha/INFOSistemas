import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  showFiller = false;
  constructor(private router: Router) { }

  goAddForm(){
    this.router.navigate(['addvehicle'])
  }
  ngOnInit(): void {
  }

}
