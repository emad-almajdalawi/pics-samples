import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


export interface PostData {
  userId?: number,
  id?: number,
  title?: string,
  body?: string
}

export interface PhotoData {
  albumId?: number,
  id?: number,
  title?: string,
  url?: string,
  thumbnailUrl?: string
}

export interface UserAddress {
  street?: string,
  suite?: string,
  city?: string,
  zipcode?: string,
  geo?: object
}

export interface UseraCompany {
  name?: string,
  catchPhrase?: string,
  bs?: string
}

export interface UserData {
  id?: number,
  name?: string,
  username?: string,
  email?: string,
  address?: UserAddress,
  phone?: string,
  website?: string,
  company?: UseraCompany
}

export interface ReqBody {
  title?: string,
  body?: object,
}


@Injectable({
  providedIn: 'root'
})
export class DataService {

  usersUrl: string = 'https://jsonplaceholder.typicode.com/users'
  postsUrl: string = 'https://jsonplaceholder.typicode.com/posts'
  galleryUrl: string = 'https://jsonplaceholder.typicode.com/photos'
  postedId: any

  photosData: BehaviorSubject<PhotoData[]> = new BehaviorSubject([{}]);


  constructor(
    private http: HttpClient
  ) { }

  /**
   * Fetch the uses data from the API
   */
  getUsers(): Observable<UserData[]> {
    return this.http.get<UserData[]>(this.usersUrl);
  }

  /**
  * Fetch the posts data from the API
  */
  getPosts(): Observable<PostData[]> {
    return this.http.get<PostData[]>(this.postsUrl);
  }

  /**
  * Fetch the gallery data from the API
  */
  getGallery(): Observable<PhotoData[]> {
    return this.http.get<PhotoData[]>(this.galleryUrl);
  }

  /**
   * Post new post to the API
   * @param {ReqBody} body an object that contains the headers, the method, and the submitted data
   */
  addPosts(body: ReqBody) {
    this.http.post<any>('https://jsonplaceholder.typicode.com/posts', body)
      .subscribe(
        data => this.postedId = data.id,
        err => console.log('HTTP Error', err),
        () => console.log('HTTP request completed.')
      );
  }
}

//////////// catch post error, gallery deatails [id]
