import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { DataService, PhotoData } from '../data.service';

@Component({
  selector: 'app-gallery-details',
  templateUrl: './gallery-details.component.html',
  styleUrls: ['./gallery-details.component.css']
})
export class GalleryDetailsComponent implements OnInit {

  id: any = 0;

  constructor(
    public dataService: DataService,
    private activRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.activRoute.snapshot.paramMap.get('id');
    console.log(this.id);

  }
}
