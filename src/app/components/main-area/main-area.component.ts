import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CollectionComponent } from '../announce-area/collection/collection.component';
import { CollectionBannerComponent } from '../announce-area/collection-banner/collection-banner.component';


@Component({
  selector: 'app-main-area',
  standalone: true,
  imports: [CollectionComponent, CollectionBannerComponent],
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
