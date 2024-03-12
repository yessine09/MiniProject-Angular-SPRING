import { Component, OnInit } from '@angular/core';
import { user } from '../model/user';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  users: any[] = [{ name: 'ahmed' }, { name: 'yessine' }];
  userFilter: any = { name: '' };

  
  constructor() { }

  ngOnInit(): void {
  }

}
