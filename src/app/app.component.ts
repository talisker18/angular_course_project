import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_course_project';

  loadedFeature = 'recipe';

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
