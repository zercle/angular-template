import { Component, inject } from '@angular/core';
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { NgIf } from "@angular/common";
import { MatMenuModule } from "@angular/material/menu";
import { MatExpansionModule } from "@angular/material/expansion";
import { UiService } from "../../services/ui/ui.service";

@Component({
    selector: 'app-search',
    standalone: true,
    imports: [
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        NgIf,
        MatMenuModule,
        MatExpansionModule
    ],
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  isHandset = inject(UiService).isHandset;

}
