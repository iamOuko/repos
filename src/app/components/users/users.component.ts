import { Component, OnInit } from '@angular/core';
import { FreeapiService } from 'src/app/service/freeapi.service';
import { User } from 'src/app/classes/user';
import { Repos } from 'src/app/classes/repos';
import { environment } from '../../../environments/environment'


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    name: null,
    avatarUrl: null
  };

  repo: Repos[] = []


  constructor(private apiService: FreeapiService) { }

  ngOnInit(): void {

  }



  userInfo(username) {


    let url = 'https://api.github.com/users/' + username

    this.apiService.getData(url).subscribe(
      (response) => {
        this.user.name = response.login
        this.user.avatarUrl = response.avatar_url
        console.log(response)


      },
      (error) => {
        alert(error)
      }
    )

  }
  getRepo(username) {
    this.repo = []
    let url = "https://api.github.com/users/" + username + "/repos?access_token=" + environment.accessToken

    this.apiService.getData(url).subscribe(
      (response) => {



        for (var res of response) {
          this.repo.push(
            {
              name: res.name,
              createdAt: res.created_at
            }
          )

        }
        console.log(this.repo)
      },
      (error) => {
        alert(error)
      }
    )
  }

  onSubmit(gitForm) {
    //get username/fullname from gitform
    let fullname = gitForm.value.fullname

    this.userInfo(fullname)


    this.getRepo(fullname)


  }
}


