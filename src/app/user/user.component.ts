import { Component, OnInit, Output } from '@angular/core';
import { GithubService } from '../github.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  text: string = "";
  constructor(private router: Router) { }

  ngOnInit() {
  }

  OnChange(event: any) {
    this.text = event.target.value;
  }

  public onClick(event: Event){
    this.router.navigate(['/repo', this.text]);
  }

}
