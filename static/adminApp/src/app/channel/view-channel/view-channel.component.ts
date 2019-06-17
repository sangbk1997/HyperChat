// import {Component, OnInit, Input, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {EventEmitter} from 'protractor';
// // import { ChatService } from '../chat.service';
//
// declare var $bean;
//
// @Component({
//   selector: 'admin-view-channel',
//   templateUrl: './view-channel.component.html',
//   styleUrls: ['./view-channel.component.css']
// })
// export class ViewChannelComponent implements OnInit {
//
//   listChannel = [];
//   channelSelected: any;
//   url = 'http://localhost/channels';
//   constructor(private http: HttpClient) {
//   }
//
//   ngOnInit() {
//     this.getListChannel();
//   }
//
//   changeChannel(channel) {
//     alert('Bạn vừa chuyển sang Channel ' + "'" + channel.title + "'");
//     // this.chatService.setChannelId(channel.id);
//   }
//
//   getListChannel() {
//     this.http.get(this.url).subscribe((data: any) => {
//       if ($bean.isNotNil(data)) {
//         this.listChannel = $bean.isNil(data) ? [] : data;
//         if ($bean.isNotNil(this.listChannel)) {
//           this.channelSelected = this.listChannel[0];
//         }
//       }
//     }, error => {
//       console.log("Something went wrong ", error);
//     });
//   }
//
//   viewDetail(channel) {
//     this.channelSelected = channel;
//     document.getElementById('channelId').style.display = 'block';
//   }
//
//   addChannel() {
//     this.channelSelected = null;
//     document.getElementById('channelId').style.display = 'block';
//   }
//
//   deleteChannel(channel) {
//     let isDelete = confirm('Bạn muốn xóa channel ' + channel.title);
//     if (isDelete) {
//       let $this = this;
//       let deleteUrl = this.url + '/' + channel.id;
//       console.log(deleteUrl);
//       this.http.delete(deleteUrl).subscribe(function (data) {
//         if ($bean.isNotNil(data)) {
//           alert('Delete channel ' + channel.title + ' successfully !');
//           if ($bean.isNotEmpty($this.listChannel) && $bean.isNotNil(channel.id)) {
//             for (let i = 0; i < $this.listChannel.length; i++) {
//               if ($this.listChannel[i].id == channel.id) {
//                 $this.listChannel.splice(i, 1);
//               }
//             }
//           }
//         }
//       })
//     }
//   }
// }

import {Component} from '@angular/core';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'admin-view-channels',
  templateUrl: './view-channel.component.html',
  styleUrls: ['./view-channel.component.css']
})
export class ViewChannelComponent {
  itemsArray = [
    {
      id: 1,
      name: 'Basic Examples',
      description: 'On this page you will find examples of Angular Tables',
      link: '/tables/basic'
    },
    {
      id: 2,
      name: 'Additional Examples',
      description: 'On this page you will find examples of Angular Additional Tables',
      link: '/tables/styles'
    },
    {
      id: 3,
      name: 'Editable',
      description: 'On this page you will find examples of Angular Editable Tables',
      link: '/tables/editable'
    },
    {
      id: 4,
      name: 'Pagination',
      description: 'On this page you will find examples of Angular Pagination Tables',
      link: '/tables/pagination'
    },
    {
      id: 5,
      name: 'Responsive',
      description: 'On this page you will find examples of Angular Responsive Tables',
      link: '/tables/responsive'
    },
    {
      id: 6,
      name: 'Search',
      description: 'On this page you will find examples of Angular Search Tables',
      link: '/tables/search'
    },
    {
      id: 7,
      name: 'Sort',
      description: 'On this page you will find examples of Angular Sort Tables',
      link: '/tables/sort'
    },

  ];

  constructor(private router: Router) {
  }

}
