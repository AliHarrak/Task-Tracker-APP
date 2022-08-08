import { Component, OnInit } from '@angular/core';
import { Router , Event, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  isAboutRoute = false
  constructor(private router: Router) {
    this.router.events.subscribe( (event: Event) => {
    if (event  instanceof NavigationEnd ){
      this.isAboutRoute= window.location.href.indexOf("about")> -1;
    }
    }

    
    )
    console.log(this.isAboutRoute);
    
   }

  ngOnInit(): void {
    this.isAboutRoute= window.location.href.indexOf("about")> -1;
  }

}
