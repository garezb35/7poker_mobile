import {Component, Input, OnInit , OnChanges, SimpleChanges, SimpleChange} from '@angular/core';
import * as $ from 'jquery';
import { AuthService } from 'app/shared/services/auth/auth.service';
import {LoginComponent} from 'app/main/user/login.component';
import {GameStartComponent} from 'app/main/game-start/game-start.component';
import {MatDialog} from '@angular/material/dialog';
import {PostService} from '../../shared/services/post/post.service';
import {ProfileService} from '../../shared/services/profile.service';
import {ActivatedRoute, Router} from '@angular/router';
import { AppConstants } from 'app/shared/constants';
@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnChanges {

  slideConfig = {'slidesToShow': 1, 'slidesToScroll': 1, dots: false, autoplay: true,centerMode: true ,responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ],"nextArrow": "<div class='nav-btn next-slide'></div>","prevArrow": "<div class='nav-btn prev-slide'></div>"};
  games = [
      {img: '/assets/images/banner/1.png', alias: '윈조이플러스 오픈', link: 'https://poker.winjoygame.com/poker?gameEname=baccarat'},
      {img: '/assets/images/banner/1.png', alias: '윈조이플러스 오픈', link: 'https://poker.winjoygame.com/poker?gameEname=baccarat'},
      {img: '/assets/images/banner/1.png', alias: '윈조이플러스 오픈', link: 'https://poker.winjoygame.com/poker?gameEname=baccarat'},
      {img: '/assets/images/banner/1.png', alias: '윈조이플러스 오픈', link: 'https://poker.winjoygame.com/poker?gameEname=baccarat'}
  ];
    loading = true;
    dialogRef: any;
    dialogRef_gameStart: any;
    token : any;
    isSupported: boolean;
    @Input() isLoggedIn: boolean;
    @Input() user: any;
    constructor(
        private authService: AuthService,
        private _matDialog: MatDialog
    ) {
    }

  ngOnInit(): void {

  }

    ngOnChanges(changes: SimpleChanges) {
        for (const property in changes) {
            if (property === 'isLoggedIn') {
                this.isLoggedIn = changes[property].currentValue;
            }
            if (property === 'user') {
                this.user = changes[property].currentValue;
            }
        }
    }

    // tslint:disable-next-line:typedef
    clickPanel(event: any) {
        window.location.href = '/assets/game/mobile/game.apk';
    }

}
