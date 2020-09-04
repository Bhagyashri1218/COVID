import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-national',
  templateUrl: './national.component.html',
  styleUrls: ['./national.component.css']
})
export class NationalComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  
}
