import { Component, OnInit } from '@angular/core';
import { GetUserProfileUseCase } from 'src/domain/usecases/get-user-profile.usecase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public getUserProfileUseCase: GetUserProfileUseCase) {}
  title = 'wedding-frontend';

  ngOnInit() {
    this.getUserProfileUseCase.execute().subscribe({});
  }
}
