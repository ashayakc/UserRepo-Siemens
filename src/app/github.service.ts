import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repository } from './repository/repository';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getRepos(userName: string) : Observable<Repository[]> {
    return this.http.get<Repository[]>("https://api.github.com/users/"+ userName + "/repos");
  }

  //https://api.github.com/users/%7BUSERNAME%7D/repos
}
