import { Component, OnInit, Input } from '@angular/core';
import { Repository } from './repository';
import { GithubService } from '../github.service';
import { Observable, from } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  repository: Repository;
  userName: string;
  repos: Repository[];
  constructor(private githubService: GithubService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params);
      this.userName = params.get("text");
    })

    this.githubService.getRepos(this.userName)
                    .subscribe((data) => this.repos = data);
  }

}
