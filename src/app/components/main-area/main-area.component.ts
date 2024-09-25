import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CollectionComponent } from '../announce-area/collection/collection.component';
import { CollectionBannerComponent } from '../announce-area/collection-banner/collection-banner.component';
import { MercurialBannerComponent } from '../announce-area/mercurial-banner/mercurial-banner.component';
import { CombinationBannerComponent } from '../announce-area/combination-banner/combination-banner.component';
import { IconAreaComponent } from '../icon-area/icon-area.component';
import { NikeAppComponent } from '../nike-app/nike-app.component';
import { NikeMembershipComponent } from '../nike-membership/nike-membership.component';


@Component({
  selector: 'app-main-area',
  standalone: true,
  imports: [CollectionComponent, CollectionBannerComponent, MercurialBannerComponent, CombinationBannerComponent, IconAreaComponent, NikeAppComponent, NikeMembershipComponent],
  templateUrl: './main-area.component.html',
  styleUrl: './main-area.component.scss'
})
export class MainAreaComponent implements AfterViewInit{
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    const video = this.videoElement.nativeElement;
    video.muted = true;
    video.play(); 
  }
}
