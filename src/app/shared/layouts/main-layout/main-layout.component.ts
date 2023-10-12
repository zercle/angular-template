import { AfterViewInit, booleanAttribute, ChangeDetectorRef, Component, inject, Input, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import {
    NavigationCancel,
    NavigationEnd,
    NavigationError,
    NavigationStart,
    Router,
    RouterOutlet
} from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, withLatestFrom } from 'rxjs/operators';
import { Menu } from "../../models/menu.model";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { ThemeSwitcherComponent } from "../../components/theme-switcher/theme-switcher.component";
import { AsyncPipe, NgClass, NgIf } from "@angular/common";
import { NavDrawerComponent } from "../../components/nav-drawer/nav-drawer.component";
import { TopBarComponent } from "../../components/top-bar/top-bar.component";
import { NavRailComponent } from "../../components/nav-rail/nav-rail.component";

@Component({
    selector: 'app-main-layout',
    standalone: true,
    imports: [
        MatButtonModule,
        MatIconModule,
        ThemeSwitcherComponent,
        MatSidenavModule,
        AsyncPipe,
        NavDrawerComponent,
        TopBarComponent,
        RouterOutlet,
        NavRailComponent,
        NgIf,
        NgClass
    ],
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements AfterViewInit {

    #breakpointObserver = inject(BreakpointObserver);
    #router = inject(Router);
    #changeDetectorRef = inject(ChangeDetectorRef);

    @ViewChild('drawer', {static: false}) drawer?: MatSidenav;

    @Input() showUserProfile = false;
    @Input() showSidebar = true;
    @Input() nav_rail_menus: Menu[] = [];
    @Input() menus: Menu[] = [];

    @Input({transform: booleanAttribute}) showSearchBar = false;
    @Input({transform: booleanAttribute}) hideAppLogoInNavbar = false;

    loading: boolean = false;
    isHandset$: Observable<boolean> = this.#breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall])
        .pipe(
            map(result => result.matches)
        );


    constructor() {
        this.#router.events.pipe(map(event => {
            switch (true) {
                case event instanceof NavigationStart: {
                    return true;
                }
                case event instanceof NavigationEnd:
                case event instanceof NavigationCancel:
                case event instanceof NavigationError: {
                    return false;
                }
                default: {
                    return false;
                }
            }
        })).subscribe(value => {
            this.loading = value;
        });
    }

    ngAfterViewInit(): void {
        this.#router.events.pipe(
            withLatestFrom(this.isHandset$),
            filter(([a, b]) => b && a instanceof NavigationEnd)
        ).subscribe(_ => this.drawer?.close());
    }
}
