import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { DataService, PhotoData } from '../data.service'


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(
    public dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.dataService.getGallery().subscribe(data => {
      this.dataService.photosData.next(data.slice(0, 10));
    })
  }

  /**
   * navigate to the details page of each image in the gallery
   * @param {number} i the id of each image
   */
  imageDetails(i: number): void {
    this.router.navigate(['/gallery', i + 1])
  }

}
