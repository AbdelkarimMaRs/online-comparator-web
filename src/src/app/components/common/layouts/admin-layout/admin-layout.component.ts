import { Component, OnInit, ViewChild } from '@angular/core';
import {
  Router,
  NavigationEnd,
  RouteConfigLoadStart,
  RouteConfigLoadEnd,
  ResolveStart,
  ResolveEnd
} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { ThemeService } from '../../../../services/theme/theme.service';
import * as Ps from 'perfect-scrollbar';
import * as domHelper from '../../../../helpers/dom.helper';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.template.html'
})
export class AdminLayoutComponent implements OnInit {
  private isMobile;
  isSidenavOpen: Boolean = false;
  isModuleLoading: Boolean = false;
  moduleLoaderSub: Subscription;
  @ViewChild(MatSidenav) private sideNave: MatSidenav;

  constructor(
    private router: Router,
    public translate: TranslateService,
    public themeService: ThemeService,
  ) {
    // Close sidenav after route change in mobile
    router.events.filter(event => event instanceof NavigationEnd).subscribe((routeChange: NavigationEnd) => {
      if(this.isNavOver()) {
      //  this.sideNave.toggle()
      }
    });

    // Translator init
    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }
  ngOnInit() {
    // Initialize Perfect scrollbar for sidenav
    let navigationHold = document.getElementById('scroll-area');
    Ps.initialize(navigationHold, {
      suppressScrollX: true
    });

    // FOR MODULE LOADER FLAG
    this.moduleLoaderSub = this.router.events.subscribe(event => {
      if(event instanceof RouteConfigLoadStart || event instanceof ResolveStart) {
        this.isModuleLoading = true;
      }
      if(event instanceof RouteConfigLoadEnd || event instanceof ResolveEnd) {
        this.isModuleLoading = false;
      }
    });
  }
  ngOnDestroy() {
    this.moduleLoaderSub.unsubscribe();
  }
  isNavOver() {
    return window.matchMedia(`(max-width: 960px)`).matches;
  }
}
