import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {
  
  response = "";
  constructor(private dataShare : DataSharingService) { 
  }

  ngOnInit(): void {
     this.dataShare.getResponseFromDjango().subscribe(data => this.response = data);
  }

}
