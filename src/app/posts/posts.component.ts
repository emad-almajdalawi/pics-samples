import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataService, PostData, ReqBody } from '../data.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, AfterViewInit {

  @ViewChild('submittForm')
  submittForm?: ElementRef
  submittFormEl: any

  postsData: BehaviorSubject<PostData[]> = new BehaviorSubject([{}]);
  theReqBody: ReqBody = {}

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.getPosts().subscribe(data => {
      this.postsData.next(data);
    })
  }

  ngAfterViewInit(): void {
    this.submittFormEl = this.submittForm?.nativeElement
  }

  /**
  * Post a new post to the API
  * @param {any} e Evenet
  */
  submittPost(e: any) {
    e.preventDefault();
    this.theReqBody = { title: e.target.title.value, body: e.target.body.value }
    this.dataService.addPosts(this.theReqBody)
    console.log(this.theReqBody);
    this.submittFormEl.reset();
  }
}
