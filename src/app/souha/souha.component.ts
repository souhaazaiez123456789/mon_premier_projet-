import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-souha',
  templateUrl: './souha.component.html',
  styleUrls: ['./souha.component.css']
})
export class SouhaComponent implements OnInit {

  souhaage='26ans'
  constructor(private router: Router) { 
     }

  ngOnInit(): void {
  }

}



