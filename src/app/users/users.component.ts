import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataService, UserData } from '../data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersData: BehaviorSubject<UserData[]> = new BehaviorSubject([{}]);

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.getUsers().subscribe(data => {
      this.usersData.next(data);
      console.log(data);

    })
  }

}
