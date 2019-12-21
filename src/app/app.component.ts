import { Component } from '@angular/core';
import { ApiService } from './services/services.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dropdown';

  dato1 : any = null;
  options1 : any[] = [];

  constructor(
    private _apiService : ApiService
  ) {}

  ngOnInit() {
    this._apiService.getAll()
      .then(options => {
        this.options1 = options.map(x => ({
          id : x.id,
          name : x.title
        }));
        console.log(this.options1);
      })
      .catch(err => {
        alert(err);
      })
  }
}
