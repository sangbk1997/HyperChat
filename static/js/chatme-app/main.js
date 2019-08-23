(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.component.ts":
/*!******************************************!*\
  !*** ./src/app/app-routing.component.ts ***!
  \******************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");




var routes = [
    { path: "**", component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    enableTracing: false
                })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-app\">\n  <div class=\"sidebar\">\n    <box-side-bar [userLogin]=\"userLogin\"></box-side-bar>\n  </div>\n  <div class=\"main-content\">\n    <box-header-chat [userLogin]=\"userLogin\"></box-header-chat>\n    <box-list-messenger [userLogin]=\"userLogin\"></box-list-messenger>\n  </div>\n  <box-send-messenger></box-send-messenger>\n</div>\n<!--</body>-->\n<modal-add-channel></modal-add-channel>\n<modal-add-user-to-chat></modal-add-user-to-chat>\n<modal-forward-messenger></modal-forward-messenger>\n<modal-box-contact></modal-box-contact>\n<!--<modal-box-request></modal-box-request>-->\n<modal-box-chat></modal-box-chat>\n<!--<modal-update-profile></modal-update-profile>-->\n<modal-box-gallery></modal-box-gallery>\n<!--<modal-box-notification></modal-box-notification>-->\n<!--<modal-box-confirm-request></modal-box-confirm-request>-->\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/services/global.service */ "./src/app/common/services/global.service.ts");





var AppComponent = /** @class */ (function () {
    // setUpActivitiesObj = {
    //   edit: false,
    //   copy: false,
    //   download: false,
    //   react: false,
    //   forward: false,
    //   remove: false
    // };
    // focusUpload: boolean = false;
    // URL_UPLOAD_FILE = this.baseUrl + '/upload';
    // uploader: FileUploader = new FileUploader({url: this.URL_UPLOAD_FILE});
    // hasBaseDropZoneOver: boolean = false;
    // hasAnotherDropZoneOver: boolean = false;
    function AppComponent(http, globalService, router) {
        this.http = http;
        this.globalService = globalService;
        this.router = router;
        this.PUSH_STREAM_SERVER = '172.20.30.107';
        // ENTER_KEY_CODE = 13;
        this.DEFAULT_NUMBER_REQUEST = 10;
        // DEFAULT_NUMBER_MESSAGE = 20;
        this.DEFAULT_NUMBER_USER = 20;
        this.DEFAULT_NUMBER_CHANNEL = 20;
        // DEFAULT_NUMBER_OFSET = 0;
        this.PREFIX_MARK_ELEMENT = 'mark-positon-';
        // ROLE_IS_USER = 'USER';
        // ROLE_IS_CHANNEL = 'CHANNEL';
        // ROLE_IS_MESSENGER = 'MESSENGER';
        // CONNECTION_STATUS_NOT_CONNECT = 'NOT_CONNECTED';
        this.CONNECTION_STATUS_PENDING = 'PENDING';
        this.CONNECTION_STATUS_CONNECTED = 'CONNECTED';
        this.IS_ADMIN = true;
        this.IS_NOT_ADMIN = false;
        this.STATUS_SUBCRIBE = true;
        this.STATUS_UNSUBCRIBE = false;
        this.STATUS_PENDING = 'PENDING';
        this.STATUS_ACCEPTED = 'ACCEPTED';
        this.STATUS_DISCARDED = 'DISCARDED';
        this.STATUS_REJECTED = 'REJECTED';
        this.STATUS_DISABLED = 'DISABLED';
        this.STATUS_DELETED = 'DELETED';
        this.ACTION_UNREAD = 'UNREAD';
        this.ACTION_READED = 'READED';
        this.STATUS_ORIGINAL = 'ORIGINAL';
        // STATUS_EDITED = 'EDITED';
        this.TYPE_REQUEST_USER_CHAT = 'REQUEST_CHAT_GROUP';
        this.TYPE_REQUEST_CHAT_USER = 'REQUEST_CHAT_USER';
        this.TYPE_CHAT_GROUP = 'CHAT_GROUP';
        // TYPE_CHAT_CONTACT = 'CHAT_CONTACT';
        // TYPE_ROLE_PRIMARY = 'PRIMARY';
        this.TYPE_ROLE_ATTACHED = 'ATTACHED';
        this.TYPE_ROLE_NOTIFIED = 'NOTIFIED';
        this.TYPE_NEW_MESSENGER = 'NEW_MESSENGER';
        this.TYPE_UPDATED_MESSENGER = 'UPDATED_MESSENGER';
        this.TYPE_DELETED_MESSENGER = 'DELETED_MESSENGER';
        this.TYPE_NEW_REACT = 'NEW_REACT';
        this.TYPE_UPDATED_REACT = 'UPDATED_REACT';
        this.TYPE_DELETED_REACT = 'DELETED_REACT';
        this.TYPE_NEW_USER_CHANNEL = 'NEW_USER_CHANNEL';
        this.TYPE_UPDATED_USER_CHANNEL = 'UPDATED_USER_CHANNEL';
        this.TYPE_DELETED_USER_CHANNEL = 'DELETED_USER_CHANNEL';
        this.TYPE_NEW_CHANNEL = 'NEW_CHANNEL';
        this.TYPE_UPDATED_CHANNEL = 'UPDATED_CHANNEL';
        this.TYPE_DELETED_CHANNEL = 'DELETED_CHANNEL';
        // TYPE_MESSENGER_TEXT = 'TEXT';
        // TYPE_MESSENGER_IMAGE = 'IMAGE';
        // TYPE_MESSENGER_LINK = 'LINK';
        // TYPE_MESSENGER_FILE = 'FILE';
        this.STATUS_NOTIFICATION = true;
        this.STATUS_NOT_NOTIFICATION = false;
        this.ZERO_POSITION = 0;
        this.STATUS_INACTIVE = false;
        this.STATUS_ACTIVE = true;
        // CLASS_BOX_MESSAGE_EMOJIS = 'emoji-mart';
        // CLASS_BOX_REACT_EMOJIS = 'box-emojis-react-message';
        // CLASS_BOX_MESSAGE_ACTIVITIES = 'box-message-activities';
        this.title = 'ChatMe';
        // inputValue = '';
        this.userLogin = {};
        // baseUrl = "https://chat.hyper.com:9999/";
        this.baseUrl = "http://chat.hyper.com:9000/";
        this.bean = $bean;
        this.settingOption = {
            host: this.PUSH_STREAM_SERVER,
            modes: 'websocket',
            port: 80,
            // useSSL: true,
            channelsByArgument: true,
            channelsArgument: 'channels'
        };
        this.currentMarkPosition = '';
        // firstAccess = true; // trang thai khi nguoi dung moi truy cap
        // selectedChat: any = {};
        this.infoChannel = {};
        // requestChat: any = {};
        // listMessages: any = [];
        // moreMessage: any = [];
        this.linkToChannels = [];
        // linkUsersChat: any = [];
        // statusRequest: any;
        // Thông tin kết nối mặc định
        // connectionStatus = {
        //   status: undefined,
        //   typeRequest: undefined,
        //   isCheck: false
        // };
        this.listRequestByChannel = [];
        this.listSentRequest = [];
        this.listIncomeRequest = [];
        this.countMembers = 0;
        this.processUpload = false;
        // processUpdateMessenger: boolean = false;
        // uploadFiles: any = [];
        this.uploadedFiles = [];
        // styleBoxMessageEmojis = {
        //   top: -1000,
        //   left: -1000
        // };
        // styleBoxReactEmojis = {
        //   top: -1000,
        //   left: -1000
        // };
        // styleBoxMessageActivities = {
        //   top: -1000,
        //   left: -1000
        // };
        this.listEmojis = [];
        // selectedMessenger: any = {};
        // selectedMessageElementId: any = '';
        this.processCopyMessenger = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.pushStreamClient = new PushStream(this.settingOption);
        this.getUserLogin();
        this.getLinkChannels();
    };
    AppComponent.prototype.getUserLogin = function () {
        var _this = this;
        var url = this.baseUrl + 'userLogin';
        this.http.get(url).subscribe(function (data) {
            _this.userLogin = data;
            _this.globalService.userLogin.next(_this.userLogin);
        });
    };
    AppComponent.prototype.getLinkChannels = function () {
        var _this = this;
        var url = this.baseUrl + 'userChannels/listByUser';
        var form = {};
        this.http.post(url, form).subscribe(function (data) {
            console.log('All Link  Channel');
            console.log(data);
            _this.linkToChannels = data;
            _this.pushStreamClient.disconnect();
            _this.pushStreamClient.removeAllChannels();
            if ($bean.isNotEmpty(_this.linkToChannels)) {
                for (var i = 0; i < _this.linkToChannels.length; i++) {
                    _this.listenChannel(_this.linkToChannels[i]['channelId']);
                }
            }
        });
    };
    // Lắng nghe kênh channel
    AppComponent.prototype.listenChannel = function (channelId) {
        var _this = this;
        var url = this.baseUrl + 'subChannel';
        var formData = {
            channelId: channelId
        };
        this.http.post(url, formData).subscribe(function (data) {
            if ($bean.isNotEmpty(data) && data['notification'] == _this.STATUS_NOTIFICATION) {
                _this.subChannel(data['channelId']);
            }
        }, function (error) {
            console.log('Something went wrong ', error);
        });
    };
    // subcribe channel
    AppComponent.prototype.subChannel = function (channelId) {
        console.log('Subcribe');
        console.log('Count sub channel : ' + this.pushStreamClient.channelsCount);
        this.pushStreamClient.disconnect();
        var option = null;
        console.log(this.pushStreamClient.channels);
        // this.removeAllChannel();
        // this.pushStreamClient.addChannel("hyper", option);
        this.pushStreamClient.addChannel(channelId, option);
        this.pushStreamClient.onmessage = this.messageReceived.bind(this);
        this.pushStreamClient.connect();
        console.log('Request Client');
        console.log(this.pushStreamClient.connect());
        console.log('Count sub channel : ' + this.pushStreamClient.channelsCount);
        // var ws = new WebSocket('ws://172.20.30.107/ws?channels=' + channelId)
        // ws.onopen = () => {
        //   // connection opened
        //   console.log('Connected');
        //   console.log('ws://172.20.30.107/ws?channels=' + channelId);
        //   ws.send('something'); // send a message
        // };
        //
        // ws.onmessage = (e) => {
        //   // a message was received
        //   console.log("Recive message from server");
        //   console.log(e);
        //   console.log('Data');
        //   console.log(e.data);
        // };
        //
        // ws.onerror = (e) => {
        //   // an error occurred
        //   console.log('WS');
        //   console.log(e);
        // };
        //
        // ws.onclose = (e) => {
        //   // connection closed
        //   console.log('WS');
        //   console.log(e.code, e.reason);
        // };
    };
    AppComponent.prototype.removeAllChannel = function () {
        this.pushStreamClient.removeAllChannels();
        console.log('Count sub channel : ' + this.pushStreamClient.channelsCount);
    };
    // Unsubcribe channel
    AppComponent.prototype.unSubChannel = function (channelId) {
        console.log('Count sub channel : ' + this.pushStreamClient.channelsCount);
        console.log('Unsubcribe channel');
        this.pushStreamClient.disconnect();
        this.pushStreamClient.removeChannel(channelId);
        this.pushStreamClient.connect();
        console.log('Count sub channel : ' + this.pushStreamClient.channelsCount);
    };
    // Handler xử lý message lắng nghe từ PushStream khi có message mới
    AppComponent.prototype.messageReceived = function (text, id, channelId) {
        this.dataFromPushstream = JSON.parse(text);
        console.log("Messenger Recieve :");
        console.log(this.dataFromPushstream);
        if ($bean.isNotEmpty(this.dataFromPushstream)) {
            switch (this.dataFromPushstream['type']) {
                case this.TYPE_NEW_MESSENGER: {
                    this.globalService.hasNewMessenger.next(this.dataFromPushstream);
                    break;
                }
                case this.TYPE_UPDATED_MESSENGER: {
                    this.globalService.hasUpdatedMessenger.next(this.dataFromPushstream);
                    break;
                }
                case this.TYPE_DELETED_MESSENGER: {
                    this.globalService.hasDeletedMessenger.next(this.dataFromPushstream);
                    break;
                }
                case this.TYPE_NEW_REACT: {
                    this.globalService.hasNewReact.next(this.dataFromPushstream);
                    break;
                }
                case this.TYPE_DELETED_REACT: {
                    this.globalService.hasDeletedReact.next(this.dataFromPushstream);
                    break;
                }
                case this.TYPE_NEW_USER_CHANNEL: {
                    this.globalService.hasNewUserChannel.next(this.dataFromPushstream);
                    var data = this.dataFromPushstream;
                    if ($bean.isNotEmpty(data)) {
                        if (data['value']['userId'] == this.userLogin.id) {
                            this.subChannel(data['value']['channelId']);
                        }
                    }
                    break;
                }
                case this.TYPE_UPDATED_USER_CHANNEL: {
                    this.globalService.hasUpdatedUserChannel.next(this.dataFromPushstream);
                    break;
                }
                case this.TYPE_DELETED_USER_CHANNEL: {
                    this.globalService.hasDeletedUserChannel.next(this.dataFromPushstream);
                    var data = this.dataFromPushstream;
                    if ($bean.isNotEmpty(data)) {
                        if (data['value']['userId'] == this.userLogin.id) {
                            this.unSubChannel(data['value']['channelId']);
                        }
                    }
                    break;
                }
                case this.TYPE_NEW_CHANNEL: {
                    this.globalService.hasNewChannel.next(this.dataFromPushstream);
                    break;
                }
                case this.TYPE_UPDATED_CHANNEL: {
                    this.globalService.hasUpdatedChannel.next(this.dataFromPushstream);
                    break;
                }
                case this.TYPE_DELETED_CHANNEL: {
                    this.globalService.hasDeletedChannel.next(this.dataFromPushstream);
                    break;
                }
                default: {
                    break;
                }
            }
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'chatme-app',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ctrl/ngx-emoji-mart */ "./node_modules/@ctrl/ngx-emoji-mart/fesm5/ctrl-ngx-emoji-mart.js");
/* harmony import */ var _ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ctrl/ngx-emoji-mart/ngx-emoji */ "./node_modules/@ctrl/ngx-emoji-mart/ngx-emoji/fesm5/ctrl-ngx-emoji-mart-ngx-emoji.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.component */ "./src/app/app-routing.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _modal_modal_add_channel_modal_add_channel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modal/modal-add-channel/modal-add-channel.component */ "./src/app/modal/modal-add-channel/modal-add-channel.component.ts");
/* harmony import */ var _modal_modal_box_gallery_modal_box_gallery_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modal/modal-box-gallery/modal-box-gallery.component */ "./src/app/modal/modal-box-gallery/modal-box-gallery.component.ts");
/* harmony import */ var _modal_modal_update_profile_modal_update_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modal/modal-update-profile/modal-update-profile.component */ "./src/app/modal/modal-update-profile/modal-update-profile.component.ts");
/* harmony import */ var _modal_modal_box_chat_modal_box_chat_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modal/modal-box-chat/modal-box-chat.component */ "./src/app/modal/modal-box-chat/modal-box-chat.component.ts");
/* harmony import */ var _modal_modal_box_members_modal_box_members_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modal/modal-box-members/modal-box-members.component */ "./src/app/modal/modal-box-members/modal-box-members.component.ts");
/* harmony import */ var _modal_modal_confirm_logout_modal_confirm_logout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modal/modal-confirm-logout/modal-confirm-logout.component */ "./src/app/modal/modal-confirm-logout/modal-confirm-logout.component.ts");
/* harmony import */ var _modal_modal_info_summary_modal_info_summary_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modal/modal-info-summary/modal-info-summary.component */ "./src/app/modal/modal-info-summary/modal-info-summary.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _modal_modal_add_user_to_chat_modal_add_user_to_chat_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modal/modal-add-user-to-chat/modal-add-user-to-chat.component */ "./src/app/modal/modal-add-user-to-chat/modal-add-user-to-chat.component.ts");
/* harmony import */ var _modal_modal_box_contact_modal_box_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modal/modal-box-contact/modal-box-contact.component */ "./src/app/modal/modal-box-contact/modal-box-contact.component.ts");
/* harmony import */ var _hyd_base_print_data_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../hyd/base/print-data.pipe */ "./src/hyd/base/print-data.pipe.ts");
/* harmony import */ var _box_box_react_messenger_box_react_messenger_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./box/box-react-messenger/box-react-messenger.component */ "./src/app/box/box-react-messenger/box-react-messenger.component.ts");
/* harmony import */ var _box_box_react_emoji_users_box_react_emoji_users_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./box/box-react-emoji-users/box-react-emoji-users.component */ "./src/app/box/box-react-emoji-users/box-react-emoji-users.component.ts");
/* harmony import */ var _box_box_users_read_messenger_box_users_read_messenger_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./box/box-users-read-messenger/box-users-read-messenger.component */ "./src/app/box/box-users-read-messenger/box-users-read-messenger.component.ts");
/* harmony import */ var _box_box_input_send_messenger_box_input_send_messenger_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./box/box-input-send-messenger/box-input-send-messenger.component */ "./src/app/box/box-input-send-messenger/box-input-send-messenger.component.ts");
/* harmony import */ var _box_box_info_chat_box_info_chat_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./box/box-info-chat/box-info-chat.component */ "./src/app/box/box-info-chat/box-info-chat.component.ts");
/* harmony import */ var _box_box_info_user_box_info_user_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./box/box-info-user/box-info-user.component */ "./src/app/box/box-info-user/box-info-user.component.ts");
/* harmony import */ var _box_box_activities_messenger_box_activities_messenger_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./box/box-activities-messenger/box-activities-messenger.component */ "./src/app/box/box-activities-messenger/box-activities-messenger.component.ts");
/* harmony import */ var _box_box_emojis_box_emojis_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./box/box-emojis/box-emojis.component */ "./src/app/box/box-emojis/box-emojis.component.ts");
/* harmony import */ var _box_box_emojis_react_messenger_box_emojis_react_messenger_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./box/box-emojis-react-messenger/box-emojis-react-messenger.component */ "./src/app/box/box-emojis-react-messenger/box-emojis-react-messenger.component.ts");
/* harmony import */ var _box_box_header_chat_box_header_chat_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./box/box-header-chat/box-header-chat.component */ "./src/app/box/box-header-chat/box-header-chat.component.ts");
/* harmony import */ var _box_box_list_messenger_box_list_messenger_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./box/box-list-messenger/box-list-messenger.component */ "./src/app/box/box-list-messenger/box-list-messenger.component.ts");
/* harmony import */ var _box_box_send_messenger_box_send_messenger_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./box/box-send-messenger/box-send-messenger.component */ "./src/app/box/box-send-messenger/box-send-messenger.component.ts");
/* harmony import */ var _box_box_side_bar_box_side_bar_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./box/box-side-bar/box-side-bar.component */ "./src/app/box/box-side-bar/box-side-bar.component.ts");
/* harmony import */ var _box_box_view_chats_box_view_chats_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./box/box-view-chats/box-view-chats.component */ "./src/app/box/box-view-chats/box-view-chats.component.ts");
/* harmony import */ var _box_box_view_contacts_box_view_contacts_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./box/box-view-contacts/box-view-contacts.component */ "./src/app/box/box-view-contacts/box-view-contacts.component.ts");
/* harmony import */ var _box_box_view_notifications_box_view_notifications_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./box/box-view-notifications/box-view-notifications.component */ "./src/app/box/box-view-notifications/box-view-notifications.component.ts");
/* harmony import */ var _box_box_read_messenger_box_read_messenger_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./box/box-read-messenger/box-read-messenger.component */ "./src/app/box/box-read-messenger/box-read-messenger.component.ts");
/* harmony import */ var _box_box_input_search_box_input_search_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./box/box-input-search/box-input-search.component */ "./src/app/box/box-input-search/box-input-search.component.ts");
/* harmony import */ var _modal_modal_forward_messenger_modal_forward_messenger__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./modal/modal-forward-messenger/modal-forward-messenger */ "./src/app/modal/modal-forward-messenger/modal-forward-messenger.ts");









// import {ChannelViewChatsComponent} from "./channel/view-chats/channel-view-chats.component";
// import {ChannelViewContactsComponent} from "./channel/view-contacts/channel-view-contacts.component";
// import {ChannelSearchViewGroupComponent} from "./channel/search-view-group/channel-search-view-group.component";
// import {ChannelSearchViewAllComponent} from "./channel/search-view-all/channel-search-view-all.component";
// import {ChannelSearchViewPeopleComponent} from "./channel/search-view-people/channel-search-view-people.component";
// import {SideBarViewComponent} from "./sidebar/side-bar-view.component";



// import {ModalBoxNotificationComponent} from "./modal/modal-box-notification/modal-box-notification.component";





// import {ModalBoxConfirmRequestComponent} from "./modal/modal-box-confirm-request/modal-box-confirm-request.component";


// import {ModalBoxRequestComponent} from "./modal/modal-box-request/modal-box-request.component";







// import {ChannelViewNotificationsComponent} from "./channel/view-notifications/channel-view-notifications.component";













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                // ChannelViewChatsComponent,
                // ChannelViewContactsComponent,
                // ChannelViewNotificationsComponent,
                // ChannelSearchViewGroupComponent,
                // ChannelSearchViewAllComponent,
                // ChannelSearchViewPeopleComponent,
                // SideBarViewComponent,
                _box_box_activities_messenger_box_activities_messenger_component__WEBPACK_IMPORTED_MODULE_26__["BoxActivitiesMessengerComponent"],
                _box_box_emojis_box_emojis_component__WEBPACK_IMPORTED_MODULE_27__["BoxEmojisComponent"],
                _box_box_emojis_react_messenger_box_emojis_react_messenger_component__WEBPACK_IMPORTED_MODULE_28__["BoxEmojisReactMessengerComponent"],
                _box_box_header_chat_box_header_chat_component__WEBPACK_IMPORTED_MODULE_29__["BoxHeaderChatComponent"],
                _box_box_info_chat_box_info_chat_component__WEBPACK_IMPORTED_MODULE_24__["BoxInfoChatComponent"],
                _box_box_info_user_box_info_user_component__WEBPACK_IMPORTED_MODULE_25__["BoxInfoUserComponent"],
                _box_box_input_send_messenger_box_input_send_messenger_component__WEBPACK_IMPORTED_MODULE_23__["BoxInputSendMessengerComponent"],
                _box_box_list_messenger_box_list_messenger_component__WEBPACK_IMPORTED_MODULE_30__["BoxListMessengerComponent"],
                _box_box_react_emoji_users_box_react_emoji_users_component__WEBPACK_IMPORTED_MODULE_21__["BoxReactEmojiUsersComponent"],
                _box_box_react_messenger_box_react_messenger_component__WEBPACK_IMPORTED_MODULE_20__["BoxReactMessengerComponent"],
                _box_box_read_messenger_box_read_messenger_component__WEBPACK_IMPORTED_MODULE_36__["BoxReadMessengerComponent"],
                _box_box_send_messenger_box_send_messenger_component__WEBPACK_IMPORTED_MODULE_31__["BoxSendMessengerComponent"],
                _box_box_users_read_messenger_box_users_read_messenger_component__WEBPACK_IMPORTED_MODULE_22__["BoxUsersReadMessengerComponent"],
                _box_box_side_bar_box_side_bar_component__WEBPACK_IMPORTED_MODULE_32__["BoxSideBarComponent"],
                _box_box_view_chats_box_view_chats_component__WEBPACK_IMPORTED_MODULE_33__["BoxViewChatsComponent"],
                _box_box_view_contacts_box_view_contacts_component__WEBPACK_IMPORTED_MODULE_34__["BoxViewContactsComponent"],
                _box_box_view_notifications_box_view_notifications_component__WEBPACK_IMPORTED_MODULE_35__["BoxViewNotificationsComponent"],
                _box_box_input_search_box_input_search_component__WEBPACK_IMPORTED_MODULE_37__["BoxInputSearchComponent"],
                _modal_modal_add_channel_modal_add_channel_component__WEBPACK_IMPORTED_MODULE_9__["ModalAddChannelComponent"],
                _modal_modal_add_user_to_chat_modal_add_user_to_chat_component__WEBPACK_IMPORTED_MODULE_17__["ModalAddUserToChatComponent"],
                _modal_modal_box_gallery_modal_box_gallery_component__WEBPACK_IMPORTED_MODULE_10__["ModalBoxGalleryComponent"],
                _modal_modal_update_profile_modal_update_profile_component__WEBPACK_IMPORTED_MODULE_11__["ModalUpdateProfileComponent"],
                _modal_modal_box_chat_modal_box_chat_component__WEBPACK_IMPORTED_MODULE_12__["ModalBoxChatComponent"],
                _modal_modal_box_contact_modal_box_contact_component__WEBPACK_IMPORTED_MODULE_18__["ModalBoxContactComponent"],
                _modal_modal_box_members_modal_box_members_component__WEBPACK_IMPORTED_MODULE_13__["ModalBoxMembersComponent"],
                _modal_modal_confirm_logout_modal_confirm_logout_component__WEBPACK_IMPORTED_MODULE_14__["ModalConfirmLogoutComponent"],
                _modal_modal_info_summary_modal_info_summary_component__WEBPACK_IMPORTED_MODULE_15__["ModalInfoSummaryComponent"],
                _modal_modal_forward_messenger_modal_forward_messenger__WEBPACK_IMPORTED_MODULE_38__["ModalForwardMessenger"],
                _hyd_base_print_data_pipe__WEBPACK_IMPORTED_MODULE_19__["PrintDataPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _app_routing_component__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_3__["PickerModule"],
                _ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_4__["EmojiModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_16__["MDBBootstrapModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/box/box-activities-messenger/box-activities-messenger.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/box/box-activities-messenger/box-activities-messenger.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JveC9ib3gtYWN0aXZpdGllcy1tZXNzZW5nZXIvYm94LWFjdGl2aXRpZXMtbWVzc2VuZ2VyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/box/box-activities-messenger/box-activities-messenger.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/box/box-activities-messenger/box-activities-messenger.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"box-activities-messenger\"\r\n      [ngStyle]=\"{'z-index': 10000, position: 'fixed', top: styleBoxMessageActivities.top + 'px', left: styleBoxMessageActivities.left + 'px'}\">\r\n  <div class=\"action\" (click)=\"beginUpdateMessenger()\">\r\n    <span>Edit</span>\r\n  </div>\r\n  <div class=\"action\" (click)=\"beginCopyMessenger()\">\r\n    <span>Copy</span>\r\n  </div>\r\n   <div class=\"action\" (click)=\"beginForwardMessenger()\">\r\n    <span>Forward</span>\r\n  </div>\r\n  <div class=\"action\" *ngIf=\"setUpActivitiesObj.download\">\r\n      <a [href]=\"'attachments' + '/' + selectedMessenger.path\"><span>Download</span></a>\r\n  </div>\r\n  <div class=\"action\" (click)=\"beginRemoveMessenger()\">\r\n    <span>Remove</span>\r\n  </div>\r\n</span>\r\n\r\n"

/***/ }),

/***/ "./src/app/box/box-activities-messenger/box-activities-messenger.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/box/box-activities-messenger/box-activities-messenger.component.ts ***!
  \************************************************************************************/
/*! exports provided: BoxActivitiesMessengerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxActivitiesMessengerComponent", function() { return BoxActivitiesMessengerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BoxActivitiesMessengerComponent = /** @class */ (function () {
    function BoxActivitiesMessengerComponent(cdRef) {
        this.cdRef = cdRef;
        this.updateMessenger = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.forwardMessenger = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.copyMessenger = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.removeMessenger = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    BoxActivitiesMessengerComponent.prototype.ngOnInit = function () {
    };
    BoxActivitiesMessengerComponent.prototype.ngOnChanges = function (changes) {
    };
    BoxActivitiesMessengerComponent.prototype.beginUpdateMessenger = function () {
        this.updateMessenger.emit(this.selectedMessenger);
    };
    BoxActivitiesMessengerComponent.prototype.beginForwardMessenger = function () {
        this.forwardMessenger.emit(this.selectedMessenger);
    };
    BoxActivitiesMessengerComponent.prototype.beginCopyMessenger = function () {
        this.copyMessenger.emit(this.selectedMessenger);
    };
    BoxActivitiesMessengerComponent.prototype.beginRemoveMessenger = function () {
        this.removeMessenger.emit(this.removeMessenger);
    };
    BoxActivitiesMessengerComponent.prototype.setUpActivites = function (messenger) {
        if ($bean.isNotNil(messenger.path)) {
            this.setUpActivitiesObj.download = true;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxActivitiesMessengerComponent.prototype, "setUpActivitiesObj", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxActivitiesMessengerComponent.prototype, "selectedMessenger", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxActivitiesMessengerComponent.prototype, "styleBoxMessageActivities", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], BoxActivitiesMessengerComponent.prototype, "updateMessenger", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], BoxActivitiesMessengerComponent.prototype, "forwardMessenger", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], BoxActivitiesMessengerComponent.prototype, "copyMessenger", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], BoxActivitiesMessengerComponent.prototype, "removeMessenger", void 0);
    BoxActivitiesMessengerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'box-activities-messenger',
            template: __webpack_require__(/*! ./box-activities-messenger.component.html */ "./src/app/box/box-activities-messenger/box-activities-messenger.component.html"),
            styles: [__webpack_require__(/*! ./box-activities-messenger.component.css */ "./src/app/box/box-activities-messenger/box-activities-messenger.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], BoxActivitiesMessengerComponent);
    return BoxActivitiesMessengerComponent;
}());



/***/ }),

/***/ "./src/app/box/box-emojis-react-messenger/box-emojis-react-messenger.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/box/box-emojis-react-messenger/box-emojis-react-messenger.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box-info-chat :hover {\r\n  cursor: pointer;\r\n}\r\n.box-avatar {\r\n  padding: 5px;\r\n  width: 25%;\r\n  display: inline-block;\r\n}\r\n.info-detail {\r\n  padding: 5px;\r\n  width: 50%;\r\n  display: inline-block;\r\n}\r\n.info-item-chat {\r\n  white-space: nowrap;\r\n  width: 95%;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n.info-extra {\r\n  padding: 5px;\r\n  width: 25%;\r\n  display: inline-block;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm94L2JveC1lbW9qaXMtcmVhY3QtbWVzc2VuZ2VyL2JveC1lbW9qaXMtcmVhY3QtbWVzc2VuZ2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6QjtBQUdBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9ib3gvYm94LWVtb2ppcy1yZWFjdC1tZXNzZW5nZXIvYm94LWVtb2ppcy1yZWFjdC1tZXNzZW5nZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3gtaW5mby1jaGF0IDpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5ib3gtYXZhdGFyIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgd2lkdGg6IDI1JTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5pbmZvLWRldGFpbCB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uaW5mby1pdGVtLWNoYXQge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG5cclxuLmluZm8tZXh0cmEge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICB3aWR0aDogMjUlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/box/box-emojis-react-messenger/box-emojis-react-messenger.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/box/box-emojis-react-messenger/box-emojis-react-messenger.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"box-emojis-react-messengers\"\r\n      [ngStyle]=\"{'z-index': 10000, position: 'fixed', top: styleBoxReactEmojis.top + 'px', left: styleBoxReactEmojis.left + 'px'}\">\r\n  <div class=\"row\">\r\n    <div class=\"col p-1 emoji text-center\" *ngFor=\"let emoji of listEmojis\" (click)=\"reactMessenger(emoji)\">\r\n    <span>{{emoji.native}}</span>\r\n  </div>\r\n  </div>\r\n</span>\r\n"

/***/ }),

/***/ "./src/app/box/box-emojis-react-messenger/box-emojis-react-messenger.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/box/box-emojis-react-messenger/box-emojis-react-messenger.component.ts ***!
  \****************************************************************************************/
/*! exports provided: BoxEmojisReactMessengerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxEmojisReactMessengerComponent", function() { return BoxEmojisReactMessengerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BoxEmojisReactMessengerComponent = /** @class */ (function () {
    function BoxEmojisReactMessengerComponent(cdRef) {
        this.cdRef = cdRef;
        this.react = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    BoxEmojisReactMessengerComponent.prototype.ngOnInit = function () {
    };
    BoxEmojisReactMessengerComponent.prototype.ngOnChanges = function (changes) {
    };
    BoxEmojisReactMessengerComponent.prototype.reactMessenger = function (emoji) {
        this.react.emit(emoji);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxEmojisReactMessengerComponent.prototype, "styleBoxReactEmojis", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxEmojisReactMessengerComponent.prototype, "listEmojis", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], BoxEmojisReactMessengerComponent.prototype, "react", void 0);
    BoxEmojisReactMessengerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'box-emojis-react-messenger',
            template: __webpack_require__(/*! ./box-emojis-react-messenger.component.html */ "./src/app/box/box-emojis-react-messenger/box-emojis-react-messenger.component.html"),
            styles: [__webpack_require__(/*! ./box-emojis-react-messenger.component.css */ "./src/app/box/box-emojis-react-messenger/box-emojis-react-messenger.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], BoxEmojisReactMessengerComponent);
    return BoxEmojisReactMessengerComponent;
}());



/***/ }),

/***/ "./src/app/box/box-emojis/box-emojis.component.css":
/*!*********************************************************!*\
  !*** ./src/app/box/box-emojis/box-emojis.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box-info-chat :hover {\r\n  cursor: pointer;\r\n}\r\n.box-avatar {\r\n  padding: 5px;\r\n  width: 25%;\r\n  display: inline-block;\r\n}\r\n.info-detail {\r\n  padding: 5px;\r\n  width: 50%;\r\n  display: inline-block;\r\n}\r\n.info-item-chat {\r\n  white-space: nowrap;\r\n  width: 95%;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n.info-extra {\r\n  padding: 5px;\r\n  width: 25%;\r\n  display: inline-block;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm94L2JveC1lbW9qaXMvYm94LWVtb2ppcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7QUFHQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvYm94L2JveC1lbW9qaXMvYm94LWVtb2ppcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveC1pbmZvLWNoYXQgOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmJveC1hdmF0YXIge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICB3aWR0aDogMjUlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmluZm8tZGV0YWlsIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5pbmZvLWl0ZW0tY2hhdCB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB3aWR0aDogOTUlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcblxyXG4uaW5mby1leHRyYSB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/box/box-emojis/box-emojis.component.html":
/*!**********************************************************!*\
  !*** ./src/app/box/box-emojis/box-emojis.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box-emojis\">\r\n  <emoji-mart\r\n    set=\"native\"\r\n    color=\"orange\"\r\n    isNative=\"true\"\r\n    [hideRecent]=\"false\"\r\n    [style]=\"{'z-index': 10000, position: 'absolute', top: styleBoxMessageEmojis.top + 'px', left: styleBoxMessageEmojis.left + 'px'}\"\r\n    (emojiSelect)=\"handleClick($event)\"\r\n    emojiTooltip=\"true\"\r\n    title=\"Pick your emoji…\"\r\n    emoji='point_up'>\r\n  </emoji-mart>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/box/box-emojis/box-emojis.component.ts":
/*!********************************************************!*\
  !*** ./src/app/box/box-emojis/box-emojis.component.ts ***!
  \********************************************************/
/*! exports provided: BoxEmojisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxEmojisComponent", function() { return BoxEmojisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BoxEmojisComponent = /** @class */ (function () {
    function BoxEmojisComponent(cdRef) {
        this.cdRef = cdRef;
        this.chooseEmoji = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    BoxEmojisComponent.prototype.ngOnInit = function () {
    };
    BoxEmojisComponent.prototype.ngOnChanges = function (changes) {
    };
    BoxEmojisComponent.prototype.handleClick = function (evt) {
        console.log(evt.emoji);
        var selectedEmoji = evt.emoji;
        this.chooseEmoji.emit(selectedEmoji.native);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxEmojisComponent.prototype, "styleBoxMessageEmojis", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], BoxEmojisComponent.prototype, "chooseEmoji", void 0);
    BoxEmojisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'box-emojis',
            template: __webpack_require__(/*! ./box-emojis.component.html */ "./src/app/box/box-emojis/box-emojis.component.html"),
            styles: [__webpack_require__(/*! ./box-emojis.component.css */ "./src/app/box/box-emojis/box-emojis.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], BoxEmojisComponent);
    return BoxEmojisComponent;
}());



/***/ }),

/***/ "./src/app/box/box-header-chat/box-header-chat.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/box/box-header-chat/box-header-chat.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JveC9ib3gtaGVhZGVyLWNoYXQvYm94LWhlYWRlci1jaGF0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/box/box-header-chat/box-header-chat.component.html":
/*!********************************************************************!*\
  !*** ./src/app/box/box-header-chat/box-header-chat.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box-header-chat p-3\" *ngIf=\"bean.isNotEmpty(requestChat)\">\r\n        <span class=\"info-channel float-left\">\r\n          <div class=\"title-channel\">\r\n            <h3 class=\"link\" *ngIf=\"selectedChat.role == ROLE_IS_CHANNEL\"\r\n                (click)=\"showInfoChat()\">{{selectedChat.title}}</h3>\r\n            <h3 class=\"link\" *ngIf=\"selectedChat.role == ROLE_IS_USER\"\r\n                (click)=\"showInfoChat()\">{{selectedChat.username}}</h3>\r\n          </div>\r\n          <div class=\"attached-info-channel row small font-weight-bold\">\r\n            <div class=\"extra-info-channel mx-2\">\r\n              <span class=\"symbol-link m-1\"><i class=\"fas fa-circle\"></i></span>\r\n              <span class=\"link\" (click)=\"showInfoChat()\"\r\n                    *ngIf=\"selectedChat.role == ROLE_IS_USER\">Truy cập gần đây {{selectedChat.lastlogon}}</span>\r\n              <span class=\"link\" (click)=\"showInfoChat()\"\r\n                    *ngIf=\"selectedChat.role == ROLE_IS_CHANNEL\">{{countMembers}}\r\n                thành viên</span>\r\n              <!--<h2>Channel view contacts </h2>-->\r\n            </div>\r\n            <span class=\"icon-line mr-2\">|</span>\r\n            <div class=\"extra-info-channel mr-2\">\r\n              <span class=\"symbol-link m-1\"><i class=\"fas fa-book\"></i></span>\r\n              <span class=\"link\" (click)=\"showGalleryBox()\">Gallery</span>\r\n            </div>\r\n            <span class=\"icon-line mr-2\">|</span>\r\n            <div class=\"extra-info-channel mr-2\">\r\n              <span class=\"symbol-link m-1\"><i class=\"\tfas fa-search\"></i></span>\r\n              <span class=\"link\">Find</span>\r\n            </div>\r\n          </div>\r\n        </span>\r\n  <span class=\"feature-support float-right\">\r\n          <span class=\"feature-item symbol-link  hvr-pulse hvr-grow-shadow\"><i class=\"fas fa-video\"></i></span>\r\n          <span class=\"feature-item symbol-link  hvr-pulse hvr-grow-shadow\"><i class=\"fas fa-phone\"></i></span>\r\n          <span class=\"feature-item symbol-link  hvr-pulse hvr-grow-shadow\" (click)=\"addMoreUser()\"><i\r\n            class=\"fas fa-user-plus\"></i></span>\r\n        </span>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/box/box-header-chat/box-header-chat.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/box/box-header-chat/box-header-chat.component.ts ***!
  \******************************************************************/
/*! exports provided: BoxHeaderChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxHeaderChatComponent", function() { return BoxHeaderChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/global.service */ "./src/app/common/services/global.service.ts");





var BoxHeaderChatComponent = /** @class */ (function () {
    function BoxHeaderChatComponent(cdRef, http, globalService, router) {
        this.cdRef = cdRef;
        this.http = http;
        this.globalService = globalService;
        this.router = router;
        this.selectedChat = {};
        this.requestChat = {};
        // baseUrl = "https://chat.hyper.com:9999/";
        this.baseUrl = "http://chat.hyper.com:9000/";
        this.ROLE_IS_CHANNEL = 'CHANNEL';
        this.ROLE_IS_USER = 'USER';
        this.countMembers = 0;
        this.infoChat = {};
        this.bean = $bean;
    }
    BoxHeaderChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.globalService.changeFocusChat.subscribe(function (res) {
            if ($bean.isNotEmpty(res)) {
                _this.selectedChat = res['selectedChat'];
                _this.requestChat = res['requestChat'];
                if (_this.selectedChat['role'] == _this.ROLE_IS_CHANNEL) {
                    _this.getNumberMembers(_this.requestChat['channelId']);
                }
            }
            else {
                _this.selectedChat = {};
                _this.requestChat = {};
            }
        });
        this.globalService.hasNewUserChannel.subscribe(function (res) {
            _this.notifiedNewUserChannel(res);
        });
        this.globalService.hasDeletedUserChannel.subscribe(function (res) {
            _this.notifiedDeleteUserChannel(res);
        });
    };
    BoxHeaderChatComponent.prototype.ngOnChanges = function (changes) {
    };
    BoxHeaderChatComponent.prototype.showInfoChat = function () {
        if (this.selectedChat['role'] == this.ROLE_IS_CHANNEL) {
            this.getInfoDetailChannel();
        }
        else {
            this.getInfoDetailContact();
        }
    };
    BoxHeaderChatComponent.prototype.showGalleryBox = function () {
        $('#galleryModalBox').modal('show');
    };
    BoxHeaderChatComponent.prototype.addMoreUser = function () {
        if (this.selectedChat['role'] == this.ROLE_IS_CHANNEL) {
            this.addUserToChat();
        }
        else {
            this.addNewChannel();
        }
    };
    BoxHeaderChatComponent.prototype.addUserToChat = function () {
        $('#modalDetailAddUserToChat').modal('show');
        // reset lại giá trị của đối tượng newChannel
        this.globalService.addUserToChat.next({ channelId: this.requestChat['channelId'] });
    };
    BoxHeaderChatComponent.prototype.addNewChannel = function () {
        $('#modalInitAddChannel').modal('show');
        // reset lại giá trị của đối tượng newChannel
        this.globalService.addChannel.next({ members: [this.selectedChat['id']] });
    };
    BoxHeaderChatComponent.prototype.getInfoDetailChannel = function () {
        $('#modalBoxChat').modal('show');
        this.getInfoChat(this.requestChat['channelId']);
    };
    BoxHeaderChatComponent.prototype.getInfoDetailContact = function () {
        $('#modalBoxContact').modal('show');
        // reset lại giá trị của đối tượng newChannel
        this.globalService.infoContact.next({ infoContact: this.selectedChat, linkUserChannel: this.requestChat });
    };
    BoxHeaderChatComponent.prototype.getInfoChat = function (channelId) {
        var _this = this;
        var url = this.baseUrl + 'channels/infoChannel';
        var form = {
            channelId: channelId
        };
        this.http.post(url, form).subscribe(function (channel) {
            if ($bean.isNotEmpty(channel)) {
                _this.infoChat = channel;
                if ($bean.isNotEmpty(channel['users'])) {
                    _this.countMembers = channel['users'].length;
                }
                _this.globalService.infoChat.next({ infoChat: _this.infoChat, linkUserChannel: _this.requestChat });
            }
        });
    };
    BoxHeaderChatComponent.prototype.getNumberMembers = function (channelId) {
        var _this = this;
        var url = this.baseUrl + 'channels/infoChannel';
        var form = {
            channelId: channelId
        };
        this.http.post(url, form).subscribe(function (channel) {
            if ($bean.isNotEmpty(channel)) {
                if ($bean.isNotEmpty(channel['users'])) {
                    _this.countMembers = channel['users'].length;
                }
            }
        });
    };
    BoxHeaderChatComponent.prototype.showInfoChannel = function () {
        if (this.selectedChat['role'] == this.ROLE_IS_CHANNEL) {
            this.getInfoDetailChannel();
        }
        else {
            this.getInfoDetailContact();
        }
    };
    BoxHeaderChatComponent.prototype.notifiedNewUserChannel = function (data) {
        if ($bean.isNotEmpty(data) && (data['value']['channelId'] == this.requestChat['channelId'])) {
            this.countMembers++;
        }
    };
    BoxHeaderChatComponent.prototype.notifiedDeleteUserChannel = function (data) {
        if ($bean.isNotEmpty(data) && (data['channelId'] == this.requestChat['channelId']) && (data['value']['userId'] == this.requestChat['userId'])) {
            this.requestChat = {};
        }
        else if ($bean.isNotEmpty(data) && (data['value']['channelId'] == this.requestChat['channelId'])) {
            this.countMembers--;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxHeaderChatComponent.prototype, "userLogin", void 0);
    BoxHeaderChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'box-header-chat',
            template: __webpack_require__(/*! ./box-header-chat.component.html */ "./src/app/box/box-header-chat/box-header-chat.component.html"),
            styles: [__webpack_require__(/*! ./box-header-chat.component.css */ "./src/app/box/box-header-chat/box-header-chat.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], BoxHeaderChatComponent);
    return BoxHeaderChatComponent;
}());



/***/ }),

/***/ "./src/app/box/box-info-chat/box-info-chat.component.css":
/*!***************************************************************!*\
  !*** ./src/app/box/box-info-chat/box-info-chat.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box-info-chat :hover {\r\n  cursor: pointer;\r\n}\r\n.box-avatar {\r\n  padding: 5px;\r\n  width: 25%;\r\n  display: inline-block;\r\n}\r\n.info-detail {\r\n  padding: 5px;\r\n  width: 50%;\r\n  display: inline-block;\r\n}\r\n.info-item-chat {\r\n  white-space: nowrap;\r\n  width: 95%;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n.info-extra {\r\n  padding: 5px;\r\n  width: 25%;\r\n  display: inline-block;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm94L2JveC1pbmZvLWNoYXQvYm94LWluZm8tY2hhdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7QUFHQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvYm94L2JveC1pbmZvLWNoYXQvYm94LWluZm8tY2hhdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveC1pbmZvLWNoYXQgOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmJveC1hdmF0YXIge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICB3aWR0aDogMjUlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmluZm8tZGV0YWlsIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5pbmZvLWl0ZW0tY2hhdCB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB3aWR0aDogOTUlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcblxyXG4uaW5mby1leHRyYSB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/box/box-info-chat/box-info-chat.component.html":
/*!****************************************************************!*\
  !*** ./src/app/box/box-info-chat/box-info-chat.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box-info-chat\" (click)=\"chooseChat()\">\r\n  <div class=\"box-avatar text-center\">\r\n    <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg\" alt=\"IMG of Avatars\"\r\n         class=\"avatar img-fluid z-depth-1-half rounded-circle\">\r\n  </div>\r\n  <div class=\"info-detail\">\r\n    <h4 class=\"info-item-chat\" [ngClass]=\"{'text-primary bold': (unReadMessengers > 0) ? true : false}\">{{chat.title}}</h4>\r\n    <div class=\"info-item-chat small text-muted text-left\">\r\n      {{chat.lastMessage}}\r\n    </div>\r\n  </div>\r\n  <div class=\"info-extra\">\r\n    <div class=\"info-item-chat small text-center\">{{chat.lastWorkingDate | date: chat.dateFormat}}</div>\r\n    <div class=\"info-item-chat text-right\">\r\n      <span class=\"badge badge-pill badge-dark\" *ngIf=\"unReadMessengers > 0\">{{unReadMessengers}}</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/box/box-info-chat/box-info-chat.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/box/box-info-chat/box-info-chat.component.ts ***!
  \**************************************************************/
/*! exports provided: BoxInfoChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxInfoChatComponent", function() { return BoxInfoChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BoxInfoChatComponent = /** @class */ (function () {
    function BoxInfoChatComponent(cdRef) {
        this.cdRef = cdRef;
        this.callBack = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    BoxInfoChatComponent.prototype.ngOnInit = function () {
        if ($bean.isNil(this.chat)) {
            this.chat = {};
        }
        if ($bean.isNil(this.unReadMessengers)) {
            this.unReadMessengers = 0;
        }
    };
    BoxInfoChatComponent.prototype.ngOnChanges = function (changes) {
    };
    BoxInfoChatComponent.prototype.chooseChat = function () {
        this.callBack.emit(this.chat);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxInfoChatComponent.prototype, "chat", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], BoxInfoChatComponent.prototype, "unReadMessengers", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], BoxInfoChatComponent.prototype, "callBack", void 0);
    BoxInfoChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'box-info-chat',
            template: __webpack_require__(/*! ./box-info-chat.component.html */ "./src/app/box/box-info-chat/box-info-chat.component.html"),
            styles: [__webpack_require__(/*! ./box-info-chat.component.css */ "./src/app/box/box-info-chat/box-info-chat.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], BoxInfoChatComponent);
    return BoxInfoChatComponent;
}());



/***/ }),

/***/ "./src/app/box/box-info-user/box-info-user.component.css":
/*!***************************************************************!*\
  !*** ./src/app/box/box-info-user/box-info-user.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.box-info-user :hover {\r\n  cursor: pointer;\r\n}\r\n.box-avatar {\r\n  padding: 5px;\r\n  width: 25%;\r\n  display: inline-block;\r\n}\r\n.info-detail {\r\n  padding: 5px;\r\n  width: 75%;\r\n  display: inline-block;\r\n}\r\n.info-item-chat {\r\n  white-space: nowrap;\r\n  width: 95%;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm94L2JveC1pbmZvLXVzZXIvYm94LWluZm8tdXNlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvYm94L2JveC1pbmZvLXVzZXIvYm94LWluZm8tdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5ib3gtaW5mby11c2VyIDpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5ib3gtYXZhdGFyIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgd2lkdGg6IDI1JTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5pbmZvLWRldGFpbCB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uaW5mby1pdGVtLWNoYXQge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/box/box-info-user/box-info-user.component.html":
/*!****************************************************************!*\
  !*** ./src/app/box/box-info-user/box-info-user.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box-info-user\" (click)=\"chooseUser()\">\r\n  <div class=\"box-avatar text-center\">\r\n    <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg\" alt=\"IMG of Avatars\"\r\n         class=\"avatar img-fluid z-depth-1-half rounded-circle\">\r\n  </div>\r\n  <div class=\"info-detail\">\r\n    <b class=\"info-item-chat\">{{user.username}}</b>\r\n    <div class=\"info-item-chat small text-muted\">\r\n      ( {{user.email}} )\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/box/box-info-user/box-info-user.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/box/box-info-user/box-info-user.component.ts ***!
  \**************************************************************/
/*! exports provided: BoxInfoUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxInfoUserComponent", function() { return BoxInfoUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BoxInfoUserComponent = /** @class */ (function () {
    function BoxInfoUserComponent(cdRef) {
        this.cdRef = cdRef;
        this.callBack = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    BoxInfoUserComponent.prototype.ngOnInit = function () {
        if ($bean.isNil(this.user)) {
            this.user = {};
        }
    };
    BoxInfoUserComponent.prototype.ngOnChanges = function (changes) {
    };
    BoxInfoUserComponent.prototype.chooseUser = function () {
        this.callBack.emit(this.user);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxInfoUserComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], BoxInfoUserComponent.prototype, "callBack", void 0);
    BoxInfoUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'box-info-user',
            template: __webpack_require__(/*! ./box-info-user.component.html */ "./src/app/box/box-info-user/box-info-user.component.html"),
            styles: [__webpack_require__(/*! ./box-info-user.component.css */ "./src/app/box/box-info-user/box-info-user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], BoxInfoUserComponent);
    return BoxInfoUserComponent;
}());



/***/ }),

/***/ "./src/app/box/box-input-search/box-input-search.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/box/box-input-search/box-input-search.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.box-unfocus-search {\r\n  padding: 10px;\r\n  border-radius: 10px;\r\n  border: 1px lightgray solid;\r\n  color: gray;\r\n  background-color: whitesmoke;\r\n}\r\n\r\n.box-unfocus-search:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.box-focus-search {\r\n  background-color: #0b51c5;\r\n  color: white;\r\n}\r\n\r\n.btn-close {\r\n  color: white;\r\n  display: inline-block;\r\n  text-align: center;\r\n  font-size: 25px;\r\n  width: 25%;\r\n}\r\n\r\n.inputSearch {\r\n  display: inline-block;\r\n  width: 75%;\r\n  border: 1px solid gray;\r\n}\r\n\r\n.inputSearch input {\r\n  width: 100%;\r\n  padding: 10px;\r\n  color: white;\r\n  background-color: #0b51c5;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.btn-close:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm94L2JveC1pbnB1dC1zZWFyY2gvYm94LWlucHV0LXNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2JveC9ib3gtaW5wdXQtc2VhcmNoL2JveC1pbnB1dC1zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYm94LXVuZm9jdXMtc2VhcmNoIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggbGlnaHRncmF5IHNvbGlkO1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbi5ib3gtdW5mb2N1cy1zZWFyY2g6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJveC1mb2N1cy1zZWFyY2gge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYjUxYzU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYnRuLWNsb3NlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxuLmlucHV0U2VhcmNoIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG59XHJcblxyXG4uaW5wdXRTZWFyY2ggaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYjUxYzU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5idG4tY2xvc2U6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/box/box-input-search/box-input-search.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/box/box-input-search/box-input-search.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isFocusSearch\" class=\"box-unfocus-search\" (click)=\"triggerSearch()\">\r\n  <span><i class=\"fas fa-search\"></i></span>\r\n  <span>{{unFocusPlaceholder}}</span>\r\n</div>\r\n<div *ngIf=\"isFocusSearch\" class=\"box-focus-search\">\r\n  <div class=\"inputSearch\"><input [id]=\"idInputSearch\" type=\"text\" [placeholder]=\"focusPlaceholder\" (keyup)=\"search()\"\r\n                            [(ngModel)]=\"searchValue\"></div>\r\n  <div class=\"btn-close\" (click)=\"closeSearch()\"><i class=\"fas fa-times\"></i></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/box/box-input-search/box-input-search.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/box/box-input-search/box-input-search.component.ts ***!
  \********************************************************************/
/*! exports provided: BoxInputSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxInputSearchComponent", function() { return BoxInputSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BoxInputSearchComponent = /** @class */ (function () {
    function BoxInputSearchComponent() {
        this.callBack = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFocusSearch = false;
        this.idInputSearch = 'input-search-' + $bean.genRandomID(16);
    }
    BoxInputSearchComponent.prototype.ngOnInit = function () {
        if ($bean.isNil(this.unFocusPlaceholder)) {
            this.unFocusPlaceholder = 'Tìm kiếm thông tin';
        }
        if ($bean.isNil(this.focusPlaceholder)) {
            this.focusPlaceholder = 'Tìm kiếm';
        }
    };
    BoxInputSearchComponent.prototype.closeSearch = function () {
        this.isFocusSearch = false;
        this.searchValue = '';
    };
    BoxInputSearchComponent.prototype.triggerSearch = function () {
        this.isFocusSearch = true;
        $('#' + this.idInputSearch).focus();
    };
    BoxInputSearchComponent.prototype.search = function () {
        this.callBack.emit(this.searchValue);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BoxInputSearchComponent.prototype, "unFocusPlaceholder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BoxInputSearchComponent.prototype, "focusPlaceholder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], BoxInputSearchComponent.prototype, "callBack", void 0);
    BoxInputSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'box-input-search',
            template: __webpack_require__(/*! ./box-input-search.component.html */ "./src/app/box/box-input-search/box-input-search.component.html"),
            styles: [__webpack_require__(/*! ./box-input-search.component.css */ "./src/app/box/box-input-search/box-input-search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BoxInputSearchComponent);
    return BoxInputSearchComponent;
}());



/***/ }),

/***/ "./src/app/box/box-input-send-messenger/box-input-send-messenger.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/box/box-input-send-messenger/box-input-send-messenger.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.box-send-message {\r\n  background-color: white;\r\n}\r\n\r\n.class-box-suggest-items {\r\n  display: inline-block;\r\n  width: 300px;\r\n  border-radius: 10px;\r\n  z-index: 10000;\r\n  position: fixed;\r\n  top: 100px;\r\n  left: 100px;\r\n  background-color: whitesmoke;\r\n  max-width: 400px;\r\n  max-height: 500px;\r\n  overflow: auto;\r\n}\r\n\r\n.hd-suggest-item:hover {\r\n  background-color: #1724ee;\r\n  color: white;\r\n}\r\n\r\n.content-message {\r\n  display: inline-block;\r\n  text-align: left;\r\n  padding: 5px;\r\n  width: 100%;\r\n  margin: 10px 5px;\r\n  height: auto;\r\n  border: 0px;\r\n  outline: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm94L2JveC1pbnB1dC1zZW5kLW1lc3Nlbmdlci9ib3gtaW5wdXQtc2VuZC1tZXNzZW5nZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZUFBZTtFQUNmLFVBQVU7RUFDVixXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvYm94L2JveC1pbnB1dC1zZW5kLW1lc3Nlbmdlci9ib3gtaW5wdXQtc2VuZC1tZXNzZW5nZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYm94LXNlbmQtbWVzc2FnZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jbGFzcy1ib3gtc3VnZ2VzdC1pdGVtcyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHotaW5kZXg6IDEwMDAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDEwMHB4O1xyXG4gIGxlZnQ6IDEwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmhkLXN1Z2dlc3QtaXRlbTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MjRlZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jb250ZW50LW1lc3NhZ2Uge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDEwcHggNXB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBib3JkZXI6IDBweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/box/box-input-send-messenger/box-input-send-messenger.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/box/box-input-send-messenger/box-input-send-messenger.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box-input-send-messenger\">\r\n  <div [id]=\"idElementEditable\" class=\"content-message content-editable\" contenteditable=\"true\"\r\n       [innerHTML]=\"value\" (keydown)=\"onKeydown($event)\" (keyup)=\"onKeyup($event)\"\r\n       (click)=\"getSearchText()\"></div>\r\n  <div #suggestBlock class=\"class-box-suggest-items\" [hidden]=\"hideSuggestBox\">\r\n    <div *ngFor=\"let item of cloneModifiedDSource\"\r\n         class=\"hd-suggest-item\"\r\n         [ngClass]=\"{'active' : tempSearchText == item[fieldTitle]}\">\r\n      <span class=\"w-25 text-center\">\r\n      <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg\" alt=\"IMG of Avatars\"\r\n           class=\"avatar img-fluid z-depth-1-half rounded-circle\">\r\n    </span>\r\n      <span class=\"w-75 text-left p-2\">{{item[fieldTitle]}}</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/box/box-input-send-messenger/box-input-send-messenger.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/box/box-input-send-messenger/box-input-send-messenger.component.ts ***!
  \************************************************************************************/
/*! exports provided: BoxInputSendMessengerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxInputSendMessengerComponent", function() { return BoxInputSendMessengerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Created by ihcmtest01_vdi on 10/31/2018.
 */

var BoxInputSendMessengerComponent = /** @class */ (function () {
    function BoxInputSendMessengerComponent(elementRef, render) {
        this.elementRef = elementRef;
        this.render = render;
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.CLASS_BOX_SUGGEST_ITEMS = 'class-box-suggest-items';
        this.bean = $bean;
        this.modifiedDSource = [];
        this.cloneModifiedDSource = [];
        this.searchText = '';
        this.tempSearchText = '';
        this.indexFocusItems = 0;
        this.hideSuggestBox = true;
        this.processSearchItems = false;
        this.itemSelected = {};
        this.positionCursor = 0;
        this.idElementEditable = 'input-messenger';
        this.value = 'Xin chào mình là' + '<a href="/users/' + 'abc' + '">' + 'abc' + '</a>' + '@SangTigo ' + ' Rất vui được gặp bạn !';
        this.callBack = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    BoxInputSendMessengerComponent.prototype.ngOnInit = function () {
        this.fieldTitle = 'username';
        this.fieldValue = 'id';
        this.dSource = [
            { id: 11, username: 'Mr. Nice' },
            { id: 12, username: 'Narco' },
            { id: 13, username: 'Bombasto' },
            { id: 14, username: 'Celeritas' },
            { id: 15, username: 'Magneta' },
            { id: 16, username: 'RubberMan' },
            { id: 17, username: 'Dynama' },
            { id: 18, username: 'Dr IQ' },
            { id: 19, username: 'Magma' },
            { id: 20, username: 'Tornado' }
        ];
        for (var i = 0; i < this.dSource.length; i++) {
            var obj = this.dSource[i];
            obj[this.fieldTitle] = '@' + this.dSource[i][this.fieldTitle];
            this.modifiedDSource.push(obj);
        }
        this.cloneModifiedDSource = $bean.clone(this.modifiedDSource);
    };
    BoxInputSendMessengerComponent.prototype.ngOnChanges = function (changes) {
    };
    BoxInputSendMessengerComponent.prototype.hideSuggestItemsBlock = function (event) {
        if (event.target.classList.contains(this.CLASS_BOX_SUGGEST_ITEMS) || $(event.target).parents("." + this.CLASS_BOX_SUGGEST_ITEMS).length) {
        }
        else {
            this.hideSuggestItems(true);
        }
    };
    BoxInputSendMessengerComponent.prototype.chooseItem = function (item) {
        //  append link vào message
        var currentValue = $('#' + this.idElementEditable).html();
        console.log('Pos');
        console.log(this.positionCursor);
        console.log('SearchText');
        console.log(this.searchText.length);
        var leftSideValue = currentValue.substring(0, this.positionCursor - this.searchText.length);
        var rightSideValue = currentValue.substring(this.positionCursor, currentValue.length);
        console.log('Left value');
        console.log(leftSideValue);
        console.log('Right value');
        console.log(rightSideValue);
        var newValue = leftSideValue;
        newValue += '<a href="/users/' + item[this.fieldValue] + ' ' + '">' + item[this.fieldTitle] + '</a>';
        newValue += rightSideValue;
        this.value = newValue;
        this.placeCaretAtEnd(this.idElementEditable);
        this.toggleProcessSearchItems(false);
    };
    // getCaretPosition(editableId) {
    //   let element = $('#' + 'abc')[0];
    //   var caretPos = 0, sel, range;
    //   if ($bean.isNotEmpty(element)) {
    //     if (window.getSelection) {
    //       sel = window.getSelection();
    //       if (sel.rangeCount) {
    //         range = sel.getRangeAt(0);
    //         if (range.commonAncestorContainer.parentNode == element) {
    //           caretPos = range.endOffset;
    //         }
    //       }
    //     } else if (document['selection'] && document['selection'].createRange) {
    //       range = document['selection'].createRange();
    //       if (range.parentElement() == element) {
    //         var tempEl = document.createElement("div");
    //         element.insertBefore(tempEl, element.firstChild);
    //         var tempRange = range.duplicate();
    //         tempRange.moveToElementText(tempEl);
    //         tempRange.setEndPoint("EndToEnd", range);
    //         caretPos = tempRange.text.length;
    //       }
    //     }
    //   }
    //   return caretPos;
    // }
    BoxInputSendMessengerComponent.prototype.placeCaretAtEnd = function (idElement) {
        var el = $('#' + idElement)[0];
        if (typeof el.selectionStart == "number") {
            el.selectionStart = el.selectionEnd = el.value.length;
        }
        else if (typeof el.createTextRange != "undefined") {
            el.focus();
            var range = el.createTextRange();
            range.collapse(false);
            range.select();
        }
    };
    BoxInputSendMessengerComponent.prototype.getCaretCharacterOffsetWithin = function (elementId) {
        var element = $('#' + elementId)[0];
        var caretOffset = 0;
        if ($bean.isNotEmpty(element) && element != undefined) {
            var doc = element.ownerDocument || element.document;
            var win = doc.defaultView || doc.parentWindow;
            var sel;
            if (typeof win.getSelection != "undefined") {
                sel = win.getSelection();
                if (sel.rangeCount > 0) {
                    var range = win.getSelection().getRangeAt(0);
                    var preCaretRange = range.cloneRange();
                    preCaretRange.selectNodeContents(element);
                    preCaretRange.setEnd(range.endContainer, range.endOffset);
                    caretOffset = preCaretRange.toString().length;
                }
            }
            else if ((sel = doc.selection) && sel.type != "Control") {
                var textRange = sel.createRange();
                var preCaretTextRange = doc.body.createTextRange();
                preCaretTextRange.moveToElementText(element);
                preCaretTextRange.setEndPoint("EndToEnd", textRange);
                caretOffset = preCaretTextRange.text.length;
            }
        }
        return caretOffset;
    };
    BoxInputSendMessengerComponent.prototype.sendMessage = function () {
        var value = $('#' + this.idElementEditable).html();
        // let valueIsSent = $('#' + this.idElementEditable)[0].innerHTML;
        // this.model[this.property] = valueIsSent;
        // this.callBack.emit(this.model[this.value]);
        this.callBack.emit(value);
    };
    BoxInputSendMessengerComponent.prototype.getSearchText = function () {
        var elementId = this.idElementEditable;
        this.positionCursor = this.getCaretCharacterOffsetWithin(elementId);
        var innerText = $('#' + this.idElementEditable).text();
        console.log('InnerText');
        console.log(innerText);
        if ($bean.isNotEmpty(innerText) && (this.positionCursor > 0) && (this.positionCursor <= innerText.length)) {
            console.log('Position');
            console.log(this.positionCursor);
            var firstSubMessage = innerText.substring(0, this.positionCursor);
            console.log('FirstSub');
            console.log(firstSubMessage);
            var lastIndexSpace = firstSubMessage.lastIndexOf(" ");
            console.log('Last Index');
            console.log(lastIndexSpace);
            if (lastIndexSpace != -1) {
                this.searchText = firstSubMessage.substring(lastIndexSpace + 1, this.positionCursor);
            }
            else {
                this.searchText = firstSubMessage;
            }
        }
        else {
            this.searchText = '';
        }
    };
    BoxInputSendMessengerComponent.prototype.changeSearchText = function () {
        this.tempSearchText = this.searchText;
        $bean.resetEmpty(this.cloneModifiedDSource);
        var len = this.modifiedDSource.length;
        for (var i = 0; i < len; i++) {
            if ($bean.textContains(this.modifiedDSource[i][this.fieldTitle], this.searchText, true)) {
                this.cloneModifiedDSource.push(this.modifiedDSource[i]);
            }
        }
    };
    BoxInputSendMessengerComponent.prototype.hideSuggestItems = function (status) {
        var triggerSuggest = status;
        if (triggerSuggest) {
            this.hideSuggestBox = triggerSuggest;
        }
        else {
            this.hideSuggestBox = false;
        }
    };
    BoxInputSendMessengerComponent.prototype.toggleProcessSearchItems = function (value) {
        if (value) {
            this.processSearchItems = true;
            this.hideSuggestBox = false;
        }
        else {
            this.processSearchItems = false;
            this.hideSuggestBox = true;
        }
    };
    BoxInputSendMessengerComponent.prototype.onKeyup = function (e) {
        console.log('On keyup');
        this.getSearchText();
        if (this.searchText.length <= 1) {
            if (this.searchText.substr(0, 1) == '@') {
                this.toggleProcessSearchItems(true);
            }
            else {
                this.toggleProcessSearchItems(false);
            }
        }
        else {
            this.toggleProcessSearchItems(true);
        }
        if (e.keyCode == $bean.KEY_CODE_ENTER && !this.processSearchItems) {
            this.sendMessage();
        }
        else {
            if ((this.processSearchItems) && !((e.keyCode == $bean.KEY_CODE_UP) || (e.keyCode == $bean.KEY_CODE_DOWN))) {
                console.log('Change search text');
                console.log(this.searchText);
                this.changeSearchText();
            }
        }
    };
    BoxInputSendMessengerComponent.prototype.onKeydown = function (e) {
        console.log('On key down');
        if (this.processSearchItems) {
            // Hoạt động với search box modifiedDSource
            if ((e.keyCode == $bean.KEY_CODE_TAB) || (e.keyCode == $bean.KEY_CODE_ESC)) {
                this.hideSuggestItems(true);
            }
            else if (e.keyCode == $bean.KEY_CODE_UP) {
                if ($bean.isEmpty(this.cloneModifiedDSource)) {
                    return;
                }
                this.indexFocusItems--;
                if (this.indexFocusItems < 0) {
                    this.indexFocusItems = this.cloneModifiedDSource.length - 1;
                }
                var item = this.cloneModifiedDSource[this.indexFocusItems];
                if (item) {
                    this.tempSearchText = item[this.fieldTitle];
                }
                $bean.scrollToElem($(this.suggestBlock.nativeElement.children[this.indexFocusItems]), $(this.suggestBlock.nativeElement));
            }
            else if (e.keyCode == $bean.KEY_CODE_DOWN) {
                if ($bean.isEmpty(this.cloneModifiedDSource)) {
                    return;
                }
                this.indexFocusItems++;
                if (this.indexFocusItems == this.cloneModifiedDSource.length) {
                    this.indexFocusItems = 0;
                }
                var item = this.cloneModifiedDSource[this.indexFocusItems];
                if (item) {
                    this.tempSearchText = item[this.fieldTitle];
                }
                $bean.scrollToElem($(this.suggestBlock.nativeElement.children[this.indexFocusItems]), $(this.suggestBlock.nativeElement));
            }
            else if (e.keyCode == $bean.KEY_CODE_ENTER) {
                this.itemSelected = {};
                this.itemSelected[this.fieldTitle] = this.tempSearchText;
                this.itemSelected = $bean.getObjFromCollection(this.modifiedDSource, this.itemSelected);
                if ($bean.isNotEmpty(this.itemSelected)) {
                    this.indexFocusItems = -1;
                    this.chooseItem(this.itemSelected);
                }
            }
            if ((e.keyCode == $bean.KEY_CODE_UP) || (e.keyCode == $bean.KEY_CODE_DOWN) || (e.keyCode == $bean.KEY_CODE_ENTER)) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxInputSendMessengerComponent.prototype, "model", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BoxInputSendMessengerComponent.prototype, "property", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxInputSendMessengerComponent.prototype, "dSource", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BoxInputSendMessengerComponent.prototype, "fieldValue", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BoxInputSendMessengerComponent.prototype, "fieldTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BoxInputSendMessengerComponent.prototype, "emptyPlaceholder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxInputSendMessengerComponent.prototype, "emptyValue", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["Type"])
    ], BoxInputSendMessengerComponent.prototype, "component", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], BoxInputSendMessengerComponent.prototype, "onChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], BoxInputSendMessengerComponent.prototype, "callBack", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('suggestBlock'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], BoxInputSendMessengerComponent.prototype, "suggestBlock", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document: click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], BoxInputSendMessengerComponent.prototype, "hideSuggestItemsBlock", null);
    BoxInputSendMessengerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'box-input-send-messenger',
            template: __webpack_require__(/*! ./box-input-send-messenger.component.html */ "./src/app/box/box-input-send-messenger/box-input-send-messenger.component.html"),
            styles: [__webpack_require__(/*! ./box-input-send-messenger.component.css */ "./src/app/box/box-input-send-messenger/box-input-send-messenger.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], BoxInputSendMessengerComponent);
    return BoxInputSendMessengerComponent;
}());



/***/ }),

/***/ "./src/app/box/box-list-messenger/box-list-messenger.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/box/box-list-messenger/box-list-messenger.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.box-messengers-container .row {\r\n  margin: 0px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm94L2JveC1saXN0LW1lc3Nlbmdlci9ib3gtbGlzdC1tZXNzZW5nZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9ib3gvYm94LWxpc3QtbWVzc2VuZ2VyL2JveC1saXN0LW1lc3Nlbmdlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5ib3gtbWVzc2VuZ2Vycy1jb250YWluZXIgLnJvdyB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/box/box-list-messenger/box-list-messenger.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/box/box-list-messenger/box-list-messenger.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"firstAccess\">Welcome to Hyperlogy !</div>\r\n\r\n<div id=\"box-list-messenger\" class=\"box-list-messenger\" (drop)=\"dropIntoBoxMessage($event)\"\r\n     (dragover)=\"allowDrop($event, false)\" (scroll)=\"checkScrollMessengers()\"\r\n     *ngIf=\"!firstAccess\">\r\n  <div class=\"text-center\">\r\n    <mdb-card class=\"mx-auto w-50\"\r\n              *ngIf=\"connectionStatus.status == CONNECTION_STATUS_NOT_CONNECT\">\r\n      <mdb-card-body>\r\n        <mdb-card-title>\r\n          <h4>Thông tin</h4>\r\n        </mdb-card-title>\r\n        <mdb-card-text *ngIf=\"selectedChat.role == ROLE_IS_USER\"> Bạn chưa kết nối đến\r\n          <b>{{selectedChat.username}}</b></mdb-card-text>\r\n        <div class=\"flex-row\">\r\n          <button class=\"waves-light btn btn-primary waves-effect\" color=\"primary\" mdbbtn=\"\" mdbwaveseffect=\"\"\r\n                  type=\"button\" ng-reflect-color=\"primary\" (click)=\"sendRequest()\">Gửi yêu cầu\r\n          </button>\r\n        </div>\r\n      </mdb-card-body>\r\n    </mdb-card>\r\n  </div>\r\n  <div class=\"box-messengers-container p-1\">\r\n    <div class=\"row pb-2\" *ngFor=\"let infoMessenger of listMessengers; let index = index; let last = last;\"\r\n         [id]=\"infoMessenger.id\">\r\n      <!--<div class=\"col-1\">-->\r\n      <!--<div class=\"box-avatar text-center\">-->\r\n      <!--<img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg\" alt=\"IMG of Avatars\"-->\r\n      <!--class=\"avatar img-fluid z-depth-1-half rounded-circle\">-->\r\n      <!--</div>-->\r\n      <!--</div>-->\r\n      <div class=\"col-1 text-center\">\r\n        <div *ngIf=\"infoMessenger.userId != userLogin.id\" class=\"avatar-user\">\r\n          <span\r\n            *ngIf=\"(index == 0) || ((index > 0) && ((infoMessenger.userId != listMessengers[index -1].userId) || (isSeperateMessenger(listMessengers[index].createdAt, listMessengers[index-1].createdAt))))\">\r\n          <img\r\n            src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg\"\r\n            alt=\"IMG of Avatars\"\r\n            class=\"avatar img-fluid z-depth-1-half rounded-circle\">\r\n        </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-10\">\r\n        <div class=\"text-center text-muted\"\r\n             *ngIf=\"(index == 0) || ((index >0) && (isSepearteDate(infoMessenger.createdAt, listMessengers[index-1].createdAt)))\">{{infoMessenger.createdAt | date:'fullDate'}}</div>\r\n        <div class=\"text-left\"\r\n             *ngIf=\"(infoMessenger.userId != userLogin.id) && (infoMessenger.typeRole == TYPE_ROLE_PRIMARY) && (infoMessenger.type == TYPE_MESSENGER_TEXT)\">\r\n          <div class=\"info-message\">\r\n            <div class=\"extra-info small text-muted\"\r\n                 *ngIf=\"(index == 0) || ((index > 0) && ((infoMessenger.userId != listMessengers[index -1].userId) || (isSeperateMessenger(listMessengers[index].createdAt, listMessengers[index-1].createdAt))))\">\r\n              <span class=\"username\">{{infoMessenger['user'].username}}</span>\r\n              <span>, &nbsp;</span>\r\n              <span>{{infoMessenger.createdAt | date:'shortTime'}}</span>\r\n            </div>\r\n            <div class=\"content-message\">\r\n              <div>\r\n            <span [id]=\"'item-message' + '-' + infoMessenger.id\"\r\n                  class=\"text message-left\">{{infoMessenger.message}}</span>\r\n                <span class=\"text-muted small m-1\" *ngIf=\"infoMessenger.status == STATUS_EDITED\"><i\r\n                  class=\"fas fa-pencil-alt\"></i></span>\r\n                <span [id]=\"'icon-smile' + '-' + infoMessenger.id\" class=\"emotion hvr-bounce-in\"\r\n                      (click)=\"showBoxReactEmojis($event, 'icon-smile' + '-' + infoMessenger.id, infoMessenger)\"><i\r\n                  class=\"far fa-smile\"></i></span>\r\n              </div>\r\n              <box-react-messenger [reactEmojis]=\"infoMessenger['userMessengers']\"></box-react-messenger>\r\n              <box-read-messenger [messengerId]=\"infoMessenger.id\" [userChannels]=\"linkUsersChat\"></box-read-messenger>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"text-right\"\r\n             *ngIf=\"(infoMessenger.userId == userLogin.id) && (infoMessenger.typeRole == TYPE_ROLE_PRIMARY)&& (infoMessenger.type == TYPE_MESSENGER_TEXT)\">\r\n          <div class=\"info-message\">\r\n            <div class=\"extra-info small text-muted\"\r\n                 *ngIf=\"(index == 0) || ((index > 0) && (isSeperateMessenger(infoMessenger.createdAt, listMessengers[index-1].createdAt)))\">\r\n              <span class=\"message-time-sent\">{{infoMessenger.createdAt | date:'shortTime'}}</span>\r\n            </div>\r\n            <div class=\"content-message\">\r\n              <div>\r\n            <span [id]=\"'item-message' + '-' + infoMessenger.id\"\r\n                  class=\"text message-right\">{{infoMessenger.message}}</span>\r\n                <span class=\"text-muted small m-1\" *ngIf=\"infoMessenger.status == STATUS_EDITED\"><i\r\n                  class=\"fas fa-pencil-alt\"></i></span>\r\n              </div>\r\n              <box-react-messenger [reactEmojis]=\"infoMessenger['userMessengers']\"></box-react-messenger>\r\n              <box-read-messenger [messengerId]=\"infoMessenger.id\" [userChannels]=\"linkUsersChat\"></box-read-messenger>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div [id]=\"'item-message' + '-' + infoMessenger.id\" class=\"col-10 text-center\"\r\n             *ngIf=\"(infoMessenger.typeRole != TYPE_ROLE_PRIMARY) && (infoMessenger.type == TYPE_MESSENGER_TEXT)\">\r\n          <div class=\"info-message\">\r\n            <div class=\"small text-muted\">\r\n              <span class=\"text\">{{infoMessenger.message}}</span> <span\r\n              class=\"message-time-sent\">{{infoMessenger.createdAt | date: 'shortTime'}}</span>\r\n              <span class=\"text-muted small m-1\" *ngIf=\"infoMessenger.status == STATUS_EDITED\"><i\r\n                class=\"fas fa-pencil-alt\"></i></span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"text-left\"\r\n             *ngIf=\"(infoMessenger.userId != userLogin.id) && (infoMessenger.typeRole == TYPE_ROLE_PRIMARY) && (infoMessenger.type == TYPE_MESSENGER_IMAGE)\">\r\n          <div class=\"content-message\">\r\n            <div>\r\n              <span [id]=\"'item-message' + '-' + infoMessenger.id\" class=\"message-file\" (click)=\"linkExternalFile('preview' + '/' + infoMessenger.path)\">\r\n            <img\r\n              class=\"message-img\"\r\n              [src]=\"'preview' + '/' + infoMessenger.path\" [alt]=\"infoMessenger.message\">\r\n          </span>\r\n              <span class=\"text-muted small m-1\" *ngIf=\"infoMessenger.status == STATUS_EDITED\"><i\r\n                class=\"fas fa-pencil-alt\"></i></span>\r\n              <span [id]=\"'icon-smile' + '-' + infoMessenger.id\" class=\"emotion hvr-bounce-in\"\r\n                    (click)=\"showBoxReactEmojis($event, 'icon-smile' + '-' + infoMessenger.id, infoMessenger)\"><i\r\n                class=\"far fa-smile\"></i>\r\n            </span>\r\n            </div>\r\n            <box-react-messenger [reactEmojis]=\"infoMessenger['userMessengers']\"></box-react-messenger>\r\n            <box-read-messenger [messengerId]=\"infoMessenger.id\" [userChannels]=\"linkUsersChat\"></box-read-messenger>\r\n          </div>\r\n        </div>\r\n        <!--<div class=\"col-8 text-left icon\"><i class=\"fas fa-arrow-right\"></i></div>-->\r\n        <div class=\"text-left\"\r\n             *ngIf=\"(infoMessenger.userId != userLogin.id) && (infoMessenger.typeRole == TYPE_ROLE_PRIMARY) && (infoMessenger.type == TYPE_MESSENGER_FILE)\">\r\n          <div class=\"content-message\">\r\n            <div>\r\n               <span [id]=\"'item-message' + '-' + infoMessenger.id\" class=\"message-file\" (click)=\"linkExternalFile('preview' + '/' + infoMessenger.path)\">\r\n          <div class=\"message-title\">{{infoMessenger.message}}</div>\r\n          <div class=\"text-muted small\">Size : {{infoMessenger.fileSize | printData}}</div>\r\n          <div class=\"text-muted small\">Type : {{infoMessenger.fileExtension}}</div>\r\n          <div class=\"file\">\r\n            <i class=\"fas fa-file\"></i>\r\n            <span class=\"m-2\">File</span>\r\n          </div>\r\n          <hr style=\"border: 1px white solid\">\r\n          <div class=\"text-center\"><a class=\"item-download\" [href]=\"'attachments' + '/' + infoMessenger.path\"><strong>Tải xuống</strong></a></div>\r\n        </span>\r\n              <span [id]=\"'icon-smile' + '-' + infoMessenger.id\" class=\"emotion hvr-bounce-in\"\r\n                    (click)=\"showBoxReactEmojis($event, 'icon-smile' + '-' + infoMessenger.id, infoMessenger)\"><i\r\n                class=\"far fa-smile\"></i>\r\n          </span>\r\n              <span class=\"text-muted small m-1\" *ngIf=\"infoMessenger.status == STATUS_EDITED\"><i\r\n                class=\"fas fa-pencil-alt\"></i></span>\r\n            </div>\r\n            <box-react-messenger [reactEmojis]=\"infoMessenger['userMessengers']\"></box-react-messenger>\r\n            <box-read-messenger [messengerId]=\"infoMessenger.id\" [userChannels]=\"linkUsersChat\"></box-read-messenger>\r\n          </div>\r\n        </div>\r\n        <!--<div class=\"col-8 text-right  icon\"><i class=\"fas fa-arrow-right\"></i></div>-->\r\n        <div class=\"text-right\"\r\n             *ngIf=\"(infoMessenger.userId == userLogin.id) && (infoMessenger.typeRole == TYPE_ROLE_PRIMARY) && (infoMessenger.type == TYPE_MESSENGER_IMAGE)\">\r\n          <div class=\"content-message\">\r\n            <div>\r\n               <span [id]=\"'item-message' + '-' + infoMessenger.id\" class=\"message-file\" (click)=\"linkExternalFile('preview' + '/' + infoMessenger.path)\">\r\n          <img\r\n            class=\"message-img\"\r\n            [src]=\"'preview' + '/' + infoMessenger.path\" [alt]=\"infoMessenger.message\">\r\n        </span>\r\n              <span class=\"text-muted small m-1\" *ngIf=\"infoMessenger.status == STATUS_EDITED\"><i\r\n                class=\"fas fa-pencil-alt\"></i></span>\r\n            </div>\r\n            <box-react-messenger [reactEmojis]=\"infoMessenger['userMessengers']\"></box-react-messenger>\r\n            <box-read-messenger [messengerId]=\"infoMessenger.id\" [userChannels]=\"linkUsersChat\"></box-read-messenger>\r\n          </div>\r\n        </div>\r\n        <!--<div class=\"col-8 text-right icon\"><i class=\"fas fa-arrow-right\"></i></div>-->\r\n        <div class=\"text-right\"\r\n             *ngIf=\"(infoMessenger.userId == userLogin.id) && (infoMessenger.typeRole == TYPE_ROLE_PRIMARY)  && (infoMessenger.type == TYPE_MESSENGER_FILE)\">\r\n          <div class=\"content-message\">\r\n            <div>\r\n                 <span [id]=\"'item-message' + '-' + infoMessenger.id\" class=\"message-file\" (click)=\"linkExternalFile('preview' + '/' + infoMessenger.path)\">\r\n          <div class=\"message-title\">{{infoMessenger.message}}</div>\r\n          <div class=\"text-muted small\">Size : {{infoMessenger.fileSize | printData}}</div>\r\n               <div class=\"text-muted small\">Type : {{infoMessenger.fileExtension}}</div>\r\n          <div class=\"file\">\r\n            <i class=\"fas fa-file\"></i>\r\n            <span class=\"m-2\">File</span>\r\n          </div>\r\n          <hr style=\"border: 1px white solid\">\r\n           <div class=\"text-center\"><a class=\"item-download\" [href]=\"'attachments' + '/' + infoMessenger.path\"><strong>Tải xuống</strong></a></div>\r\n        </span>\r\n              <span class=\"text-muted small m-1\" *ngIf=\"infoMessenger.status == STATUS_EDITED\"><i\r\n                class=\"fas fa-pencil-alt\"></i></span>\r\n            </div>\r\n            <box-react-messenger [reactEmojis]=\"infoMessenger['userMessengers']\"></box-react-messenger>\r\n            <box-read-messenger [messengerId]=\"infoMessenger.id\" [userChannels]=\"linkUsersChat\"></box-read-messenger>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-1\"><span [id]=\"'icon-show-activities' + '-' + infoMessenger.id\" class=\"icon\"\r\n                               (click)=\"showBoxMessageActivities(infoMessenger, 'icon-show-activities' + '-' + infoMessenger.id, $event)\"><i\r\n        class=\"fas fa-ellipsis-v\"></i></span></div>\r\n      <!--<span class=\"col-8 text-left icon\"><i class=\"fas fa-arrow-right\"></i></span>-->\r\n    </div>\r\n  </div>\r\n</div>\r\n<input type=\"text\" id=\"inputCopy\" style=\"position: fixed; bottom: -1000px;\">\r\n<box-activities-messenger [styleBoxMessageActivities]=\"styleBoxMessageActivities\"\r\n                          [selectedMessenger]=\"selectedMessenger\" [setUpActivitiesObj]=\"setUpActivitiesObj\"\r\n                          (copyMessenger)=\"copyMessenger()\" (removeMessenger)=\"removeMessenger()\"\r\n                          (updateMessenger)=\"updateMessenger()\" (forwardMessenger)=\"forwardMessenger()\"></box-activities-messenger>\r\n<box-emojis-react-messenger [styleBoxReactEmojis]=\"styleBoxReactEmojis\" [listEmojis]=\"listEmojis\"\r\n                            (react)=\"reactMessenger($event)\"></box-emojis-react-messenger>\r\n\r\n<box-react-emoji-users [emoji]=\"dataShowReactEmoji.selectedEmoji\" [users]=\"dataShowReactEmoji.users\"\r\n                       [triggerElementId]=\"dataShowReactEmoji.triggerElementId\"></box-react-emoji-users>\r\n\r\n<box-users-read-messenger [readUsers]=\"dataShowUsersReadMessenger.readUsers\"\r\n                          [triggerElementId]=\"dataShowUsersReadMessenger.triggerElementId\"></box-users-read-messenger>\r\n"

/***/ }),

/***/ "./src/app/box/box-list-messenger/box-list-messenger.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/box/box-list-messenger/box-list-messenger.component.ts ***!
  \************************************************************************/
/*! exports provided: BoxListMessengerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxListMessengerComponent", function() { return BoxListMessengerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/global.service */ "./src/app/common/services/global.service.ts");





var BoxListMessengerComponent = /** @class */ (function () {
    function BoxListMessengerComponent(cdRef, http, globalService, router) {
        this.cdRef = cdRef;
        this.http = http;
        this.globalService = globalService;
        this.router = router;
        this.CONNECTION_STATUS_NOT_CONNECT = 'NOT_CONNECTED';
        this.CONNECTION_STATUS_CONNECT = 'CONNECTED';
        this.TYPE_MESSENGER_TEXT = 'TEXT';
        this.TYPE_MESSENGER_IMAGE = 'IMAGE';
        this.TYPE_MESSENGER_LINK = 'LINK';
        this.TYPE_MESSENGER_FILE = 'FILE';
        this.TYPE_ROLE_PRIMARY = 'PRIMARY';
        this.STATUS_EDITED = 'EDITED';
        this.ROLE_IS_USER = 'USER';
        this.ROLE_IS_CHANNEL = 'CHANNEL';
        this.ROLE_IS_MESSENGER = 'MESSENGER';
        this.TYPE_CHAT_CONTACT = 'CHAT_CONTACT';
        this.CLASS_BOX_ACTIVITIES_MESSENGER = 'box-activities-messenger';
        // CLASS_BOX_REACT_EMOJIS = 'box-emojis-react-message';
        this.CLASS_BOX_REACT_EMOJIS = 'box-emojis-react-messengers';
        this.CLASS_BOX_MESSAGE_EMOJIS = 'emoji-mart';
        this.DEFAULT_NUMBER_MESSAGE = 50;
        this.DEFAULT_OLD_NUMBER_MESSAGE = 5;
        this.DEFAULT_NUMBER_OFSET = 0;
        this.selectedChat = {};
        this.requestChat = {};
        this.connectionStatus = { status: this.CONNECTION_STATUS_CONNECT };
        this.countPreviousMessengers = 0;
        this.moreMessage = [];
        this.linkUsersChat = [];
        this.selectedMessenger = {};
        this.listEmojis = [];
        this.setUpActivitiesObj = {
            edit: false,
            copy: false,
            download: false,
            react: false,
            forward: false,
            remove: false
        };
        this.styleBoxMessageActivities = {
            top: -1000,
            left: -1000
        };
        this.styleBoxReactEmojis = {
            top: -1000,
            left: -1000
        };
        this.styleBoxMessageEmojis = {
            top: -1000,
            left: -1000
        };
        this.selectedMessageElementId = '';
        this.dataShowReactEmoji = {};
        this.dataShowUsersReadMessenger = {};
        this.toastr = toastr;
        // baseUrl = "https://chat.hyper.com:9999/";
        this.baseUrl = "http://chat.hyper.com:9000/";
    }
    BoxListMessengerComponent.prototype.checkClick = function (event) {
        this.hideBoxReactEmojis();
        this.hideBoxMessageActivities();
    };
    BoxListMessengerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firstAccess = true;
        this.getEmojisDefault();
        this.globalService.cloneSuggestedChatsubscribe(function (res) {
            console.log('this is the current value', res);
            _this.firstAccess = false;
            _this.selectedChat = res;
            _this.listMessengers = [];
            if (res['role'] == _this.ROLE_IS_CHANNEL) {
                if (_this.selectedChat['type'] == _this.TYPE_CHAT_CONTACT) {
                    _this.selectedChat = res['userPartner'];
                }
            }
            _this.goCheckLinkChat();
        });
        this.globalService.hasNewMessenger.subscribe(function (res) {
            _this.notifiedNewMessenger(res);
        });
        this.globalService.hasUpdatedMessenger.subscribe(function (res) {
            _this.notifiedUpdateMessenger(res);
        });
        this.globalService.hasDeletedMessenger.subscribe(function (res) {
            _this.notifiedDeleteMessenger(res);
        });
        this.globalService.hasNewUserChannel.subscribe(function (res) {
            _this.notifiedNewUserChannel(res);
        });
        this.globalService.hasUpdatedUserChannel.subscribe(function (res) {
            _this.notifiedUpdateUserChannel(res);
        });
        this.globalService.hasDeletedUserChannel.subscribe(function (res) {
            _this.notifiedDeleteUserChannel(res);
        });
        this.globalService.hasNewReact.subscribe(function (res) {
            _this.notifiedNewReact(res);
        });
        this.globalService.hasDeletedReact.subscribe(function (res) {
            _this.notifiedDeleteReact(res);
        });
        this.globalService.dataShowReactEmoji.subscribe(function (res) {
            if ($bean.isNotEmpty(res)) {
                _this.dataShowReactEmoji = res;
            }
            else {
                _this.dataShowReactEmoji = {};
            }
        });
        this.globalService.dataShowUsersReadMessenger.subscribe(function (res) {
            if ($bean.isNotEmpty(res)) {
                _this.dataShowUsersReadMessenger = res;
            }
            else {
                _this.dataShowUsersReadMessenger = {};
            }
        });
    };
    BoxListMessengerComponent.prototype.ngOnChanges = function (changes) {
    };
    BoxListMessengerComponent.prototype.getEmojisDefault = function () {
        var _this = this;
        var url = this.baseUrl + 'emojis';
        this.http.get(url).subscribe(function (emojis) {
            _this.listEmojis = emojis;
        });
    };
    BoxListMessengerComponent.prototype.goCheckLinkChat = function () {
        if (this.selectedChat['role'] == this.ROLE_IS_CHANNEL) {
            this.getInfoToChannel(this.selectedChat['id']);
        }
        else {
            this.getInfoToContact(this.selectedChat['id']);
        }
    };
    BoxListMessengerComponent.prototype.getInfoToChannel = function (channelId) {
        var _this = this;
        // kiểm tra liên kết user - channel
        var url = this.baseUrl + 'users/checkLinkToChannel';
        var inputChannel = {
            channelId: channelId
        };
        this.http.post(url, inputChannel).subscribe(function (userChannel) {
            if ($bean.isNotEmpty(userChannel)) {
                _this.connectionStatus.status = _this.CONNECTION_STATUS_CONNECT;
                _this.requestChat = userChannel;
                _this.loadExampleMessengers(channelId, _this.DEFAULT_OLD_NUMBER_MESSAGE, _this.DEFAULT_NUMBER_MESSAGE, userChannel['position']);
                _this.getLinkUsersByChat(_this.requestChat['channelId']);
            }
            else {
                _this.requestChat = {};
            }
            _this.changeFocusChat();
        });
    };
    BoxListMessengerComponent.prototype.getInfoToContact = function (contactId) {
        var _this = this;
        var url = this.baseUrl + "users/checkLinkToContact";
        var form = {
            contactId: contactId
        };
        this.http.post(url, form).subscribe(function (userChannel) {
            if ($bean.isNotEmpty(userChannel)) {
                _this.connectionStatus.status = _this.CONNECTION_STATUS_CONNECT;
                _this.requestChat = userChannel;
                _this.loadExampleMessengers(userChannel['channelId'], _this.DEFAULT_OLD_NUMBER_MESSAGE, _this.DEFAULT_NUMBER_MESSAGE, userChannel['position']);
                _this.getLinkUsersByChat(_this.requestChat['channelId']);
            }
            else {
                _this.requestChat = {};
                _this.connectionStatus = {
                    status: _this.CONNECTION_STATUS_NOT_CONNECT,
                };
            }
            _this.changeFocusChat();
        });
    };
    BoxListMessengerComponent.prototype.changeFocusChat = function () {
        var dataChat = {
            requestChat: this.requestChat,
            selectedChat: this.selectedChat
        };
        this.globalService.changeFocusChat.next(dataChat);
    };
    BoxListMessengerComponent.prototype.getLinkUsersByChat = function (channelId) {
        var _this = this;
        var url = this.baseUrl + 'userChannels/extraInfoUserByChannel';
        var form = {
            channelId: channelId
        };
        this.http.post(url, form).subscribe(function (data) {
            _this.linkUsersChat = data;
        });
    };
    BoxListMessengerComponent.prototype.loadExampleMessengers = function (channelId, oldMessengers, newMessengers, offset) {
        var _this = this;
        var url = this.baseUrl + 'messengers/exampleMessengers';
        var form = {
            channelId: channelId,
            oldMessengers: oldMessengers,
            newMessengers: newMessengers,
            offset: offset
        };
        this.http.post(url, form).subscribe(function (data) {
            _this.listMessengers = [];
            if ($bean.isNotEmpty(data)) {
                if ($bean.isNotEmpty(data['oldMessengers'])) {
                    _this.listMessengers = data['oldMessengers'];
                    _this.countPreviousMessengers = data['oldMessengers'].length;
                }
                if ($bean.isNotEmpty(data['newMessengers'])) {
                    if ($bean.isEmpty(_this.listMessengers)) {
                        _this.listMessengers = data['newMessengers'];
                    }
                    else {
                        for (var i = 0; i < data['newMessengers'].length; i++) {
                            _this.listMessengers.push(data['newMessengers'][i]);
                        }
                    }
                    //  Cập nhật request Chat
                    _this.requestChat['position'] += data['newMessengers'].length;
                    _this.requestChat['lastMessengerId'] = _this.listMessengers[_this.listMessengers.length - 1].id;
                    _this.updateStatusUserChat();
                }
            }
        });
    };
    BoxListMessengerComponent.prototype.checkLoadMessengers = function () {
        var _this = this;
        var url = this.baseUrl + 'users/checkLoadMessengers';
        var form = {
            channelId: this.requestChat['channelId']
        };
        this.http.post(url, form).subscribe(function (data) {
            if ($bean.isNotEmpty(data)) {
                if (data['countMessengers'] > data['position']) {
                    var loadNumber = (data['countMessengers']) - data['position'];
                    _this.loadMoreMessenger(loadNumber, data['position']);
                }
            }
        });
    };
    BoxListMessengerComponent.prototype.dropIntoBoxMessage = function (ev) {
        ev.preventDefault();
        var files = ev.dataTransfer.files;
        if ($bean.isNotEmpty(files)) {
            var url = this.baseUrl + 'upload';
            for (var i = 0; i < files.length; i++) {
                var formData = new FormData();
                formData.append('channelId', this.requestChat['channelId']);
                formData.append('fileId', $bean.genRandomID(16));
                formData.append('file', files[i]);
                this.http.post(url, formData).subscribe(function (data) {
                    console.log(data);
                });
            }
        }
    };
    BoxListMessengerComponent.prototype.checkScrollMessengers = function () {
        var containerMessenger = document.getElementById('box-list-messenger');
        var y = containerMessenger.scrollTop;
        var innerHeight = containerMessenger.clientHeight;
        var scrollHeight = containerMessenger.scrollHeight;
        if (y == 0) {
            this.loadPreviousMessenger(this.DEFAULT_NUMBER_MESSAGE, this.requestChat['position'] - this.countPreviousMessengers);
        }
        if ((y + innerHeight) == (scrollHeight)) {
            this.loadMoreMessenger(this.DEFAULT_NUMBER_MESSAGE, this.requestChat['position']);
        }
    };
    BoxListMessengerComponent.prototype.loadPreviousMessenger = function (number, offset) {
        var _this = this;
        var formData = {
            channelId: this.requestChat['channelId'],
            number: number,
            offset: offset
        };
        var url = this.baseUrl + 'messengers/previousMessengers';
        this.http.post(url, formData).subscribe(function (data) {
            if ($bean.isNotNil(data)) {
                _this.moreMessage = data;
                if ($bean.isNotEmpty(_this.moreMessage)) {
                    console.log(_this.moreMessage);
                    _this.countPreviousMessengers += _this.moreMessage.length;
                    // Mark phần tử để scroll xuống sau khi load thêm dữ liệu
                    for (var _i = 0, _a = _this.moreMessage; _i < _a.length; _i++) {
                        var message = _a[_i];
                        _this.listMessengers.splice(0, 0, message);
                    }
                    _this.scrollToElement(_this.listMessengers[_this.listMessengers.length - _this.moreMessage.length].id);
                }
            }
        }, function (error) {
            console.log('Something went wrong ', error);
        });
    };
    BoxListMessengerComponent.prototype.loadMoreMessenger = function (number, offset) {
        var _this = this;
        var formData = {
            channelId: this.requestChat['channelId'],
            number: number,
            offset: offset
        };
        var url = this.baseUrl + 'messengers/moreMessengers';
        this.http.post(url, formData).subscribe(function (data) {
            if ($bean.isNotNil(data)) {
                _this.moreMessage = data;
                if ($bean.isNotEmpty(_this.moreMessage)) {
                    console.log(_this.moreMessage);
                    for (var _i = 0, _a = _this.moreMessage; _i < _a.length; _i++) {
                        var message = _a[_i];
                        _this.listMessengers.push(message);
                    }
                    _this.moveToLastMessage();
                    //  Cập nhật request Chat
                    _this.requestChat['position'] += _this.moreMessage.length;
                    _this.requestChat['lastMessengerId'] = _this.moreMessage[_this.moreMessage.length - 1].id;
                    _this.updateStatusUserChat();
                }
            }
        }, function (error) {
            console.log('Something went wrong ', error);
        });
    };
    // Scroll xuống message cuối cùng trên kênh
    BoxListMessengerComponent.prototype.moveToLastMessage = function () {
        this.scrollToElement(this.listMessengers[this.listMessengers.length - 1].id);
    };
    // Scroll xuống vị trí được chỉ định
    BoxListMessengerComponent.prototype.scrollToElement = function (idElement) {
        var element = document.getElementById(idElement);
        if ($bean.isNotNil(element)) {
            element.scrollIntoView(false);
        }
    };
    BoxListMessengerComponent.prototype.allowDrop = function (ev, showBorder) {
        ev.preventDefault();
        if (showBorder) {
            event.target['style'].border = "4px dotted green";
        }
    };
    BoxListMessengerComponent.prototype.sendRequest = function () {
        if (this.selectedChat['role'] == this.ROLE_IS_USER) {
            this.addContact();
        }
    };
    BoxListMessengerComponent.prototype.addContact = function () {
        var _this = this;
        var url = this.baseUrl + 'channels/addContact';
        var form = {
            members: [this.selectedChat.id]
        };
        this.http.post(url, form).subscribe(function (data) {
            _this.connectionStatus.status = _this.CONNECTION_STATUS_CONNECT;
            _this.getInfoToChannel(data['id']);
        });
    };
    BoxListMessengerComponent.prototype.showBoxMessageActivities = function (messenger, triggerId, event) {
        this.selectedMessenger = messenger;
        console.log('Selected messenger');
        console.log(this.selectedMessenger);
        this.setUpActivites(messenger);
        var triggerElement = $('#' + triggerId);
        var triggerTop = triggerElement.offset().top;
        var triggerLeft = triggerElement.offset().left;
        var outerWidthTrigger = triggerElement.outerWidth();
        var outerHeightTrigger = triggerElement.outerHeight();
        var activitiesMessageBox = $('.' + this.CLASS_BOX_ACTIVITIES_MESSENGER);
        var outerWidthActivitiesMessageBox = activitiesMessageBox.outerWidth();
        var outerHeightActivitiesMessageBox = activitiesMessageBox.outerHeight();
        var activitiesMessageBoxTop = triggerTop - outerHeightActivitiesMessageBox / 2;
        var activitiesMessageBoxLeft = triggerLeft - outerWidthTrigger - outerWidthActivitiesMessageBox - 10;
        this.styleBoxMessageActivities.top = activitiesMessageBoxTop;
        this.styleBoxMessageActivities.left = activitiesMessageBoxLeft;
        console.log(this.styleBoxMessageActivities);
        event.stopPropagation();
    };
    BoxListMessengerComponent.prototype.setUpActivites = function (messenger) {
        if ($bean.isNotNil(messenger.path)) {
            this.setUpActivitiesObj.download = true;
        }
    };
    BoxListMessengerComponent.prototype.showBoxReactEmojis = function (event, triggerId, messenger) {
        this.showBoxEmojis(event, triggerId, this.CLASS_BOX_REACT_EMOJIS);
        this.selectedMessenger = messenger;
    };
    BoxListMessengerComponent.prototype.showBoxEmojis = function (event, triggerId, classBoxEmoji) {
        var triggerElement = $('#' + triggerId);
        var triggerTop = triggerElement.offset().top;
        var triggerLeft = triggerElement.offset().left;
        var outerWidthTrigger = triggerElement.outerWidth();
        var outerHeightTrigger = triggerElement.outerHeight();
        var emojisBox = $('.' + classBoxEmoji);
        var outerWidthEmojisBox = emojisBox.outerWidth();
        var outerHeightEmojisBox = emojisBox.outerHeight();
        var emojisBoxTop = triggerTop - 10 - outerHeightEmojisBox;
        var emojesBoxLeft = triggerLeft + outerWidthTrigger / 2 - outerWidthEmojisBox / 2;
        if (classBoxEmoji == this.CLASS_BOX_MESSAGE_EMOJIS) {
            this.styleBoxMessageEmojis.top = emojisBoxTop;
            this.styleBoxMessageEmojis.left = emojesBoxLeft;
            console.log(this.styleBoxMessageEmojis);
        }
        else {
            this.styleBoxReactEmojis.top = emojisBoxTop;
            this.styleBoxReactEmojis.left = emojesBoxLeft;
            console.log(this.styleBoxReactEmojis);
        }
        event.stopPropagation();
    };
    BoxListMessengerComponent.prototype.hideBoxMessageEmojis = function () {
        this.styleBoxMessageEmojis.top = -1000;
        this.styleBoxMessageEmojis.left = -1000;
    };
    BoxListMessengerComponent.prototype.hideBoxReactEmojis = function () {
        this.styleBoxReactEmojis.top = -1000;
        this.styleBoxReactEmojis.left = -1000;
    };
    BoxListMessengerComponent.prototype.hideBoxMessageActivities = function () {
        this.styleBoxMessageActivities.top = -1000;
        this.styleBoxMessageActivities.left = -1000;
    };
    BoxListMessengerComponent.prototype.updateMessenger = function () {
        this.globalService.userUpdateMessenger.next(this.selectedMessenger);
    };
    BoxListMessengerComponent.prototype.forwardMessenger = function () {
        this.globalService.hasForwardMessenger.next(this.selectedMessenger);
        $('#modalBoxForward').modal('show');
    };
    BoxListMessengerComponent.prototype.copyMessenger = function () {
        this.selectedMessageElementId = 'item-message' + '-' + this.selectedMessenger.id;
        if ($bean.isNotEmpty(this.selectedMessageElementId)) {
            $('#inputCopy').val($('#' + this.selectedMessageElementId).html());
            $('#inputCopy').select();
            document.execCommand("copy");
            alert("Copied the text: " + $('#inputCopy').val());
        }
        else {
            alert('Ban chua chon message !');
        }
    };
    BoxListMessengerComponent.prototype.removeMessenger = function () {
        var url = this.baseUrl + 'messengers/delete';
        var form = {
            messengerId: this.selectedMessenger.id
        };
        this.http.post(url, form).subscribe(function (data) {
            console.log('Delete messenger');
            console.log(data);
        });
    };
    BoxListMessengerComponent.prototype.refreshReactMessenger = function (reacts) {
        var cloneReacts = $bean.clone(reacts);
        return cloneReacts;
    };
    BoxListMessengerComponent.prototype.reactMessenger = function (emoji) {
        if ($bean.isNotEmpty(this.selectedMessenger['userMessengers'])) {
            var reactMessengers = this.selectedMessenger['userMessengers'];
            var found = false;
            for (var i = 0; i < reactMessengers.length; i++) {
                if ((reactMessengers[i].userId == this.userLogin.id) && (reactMessengers[i].emoji == emoji.native)) {
                    this.deleteReactMessenger(reactMessengers[i]);
                    found = true;
                    break;
                }
            }
            if (!found) {
                this.newReactMessenger(emoji);
            }
        }
        else {
            this.newReactMessenger(emoji);
        }
    };
    BoxListMessengerComponent.prototype.newReactMessenger = function (emoji) {
        console.log(emoji);
        var url = this.baseUrl + 'userMessengers/reactMessenger';
        var form = {
            userId: this.userLogin.id,
            messengerId: this.selectedMessenger.id,
            channelId: this.selectedMessenger.channelId,
            emoji: emoji.native
        };
        this.http.post(url, form).subscribe(function (data) {
            console.log('React message ');
            console.log(data);
        });
    };
    BoxListMessengerComponent.prototype.deleteReactMessenger = function (react) {
        var url = this.baseUrl + 'userMessengers/deleteReact';
        var form = {
            userMessengerId: react.id
        };
        this.http.post(url, form).subscribe(function (data) {
            console.log('Delete react ');
            console.log(data);
        });
    };
    BoxListMessengerComponent.prototype.updateLinkUserChannel = function (userChannel) {
        if ($bean.isNotEmpty(this.linkUsersChat)) {
            for (var i = 0; i < this.linkUsersChat.length; i++) {
                if (this.linkUsersChat['id'] == userChannel.id) {
                    this.linkUsersChat[i] = userChannel;
                }
            }
        }
    };
    BoxListMessengerComponent.prototype.deleteLinkUserChannel = function (id) {
        if ($bean.isNotEmpty(this.linkUsersChat)) {
            for (var i = 0; i < this.linkUsersChat.length; i++) {
                if (this.linkUsersChat['id'] == id) {
                    this.linkUsersChat.splice(i, 1);
                }
            }
        }
    };
    BoxListMessengerComponent.prototype.addLinkUserChannel = function (userChannel) {
        if ($bean.isNotEmpty(this.linkUsersChat)) {
            this.linkUsersChat.push(userChannel);
        }
        else {
            this.linkUsersChat = [];
            this.linkUsersChat.push(userChannel);
        }
    };
    BoxListMessengerComponent.prototype.notifiedNewMessenger = function (data) {
        if ($bean.isNotEmpty(data)) {
            if (data['channelId'] == this.requestChat['channelId']) {
                if (data['value']['oldCountMessengers'] == this.requestChat['position']) {
                    this.listMessengers.push(data['value']);
                    this.requestChat['position']++;
                    this.requestChat['lastMessengerId'] = data['value'].id;
                    this.updateStatusUserChat();
                }
                else {
                    this.loadMoreMessenger(data['value']['oldCountMessengers'] + 1 - this.requestChat['position'], this.requestChat['position']);
                }
            }
            else {
                if ($bean.isNotEmpty(data['value'].channelTitle)) {
                    toastr.info(data['value'].message, data['value']['user'].username);
                }
                else {
                    toastr.info(data['value'].message, data['value']['user'].username + ' - ' + data['value']['channelTitle']);
                }
            }
        }
    };
    BoxListMessengerComponent.prototype.notifiedUpdateMessenger = function (data) {
        if ($bean.isNotEmpty(data) && (data['channelId'] == this.requestChat['channelId']) && $bean.isNotEmpty(this.listMessengers)) {
            for (var i = 0; i < this.listMessengers.length; i++) {
                if (this.listMessengers[i].id == data['value'].id) {
                    this.listMessengers[i] = data['value'];
                    break;
                }
            }
        }
    };
    BoxListMessengerComponent.prototype.notifiedDeleteMessenger = function (data) {
        if ($bean.isNotEmpty(data) && (data['channelId'] == this.requestChat['channelId']) && $bean.isNotEmpty(this.listMessengers)) {
            for (var i = 0; i < this.listMessengers.length; i++) {
                if (this.listMessengers[i].id == data['value'].id) {
                    this.listMessengers.splice(i, 1);
                    break;
                }
            }
        }
    };
    BoxListMessengerComponent.prototype.notifiedNewReact = function (data) {
        if ($bean.isNotEmpty(data)) {
            if ((data['channelId'] == this.requestChat['channelId']) && $bean.isNotEmpty(this.listMessengers)) {
                for (var i = 0; i < this.listMessengers.length; i++) {
                    if (this.listMessengers[i].id == data.messengerId) {
                        if ($bean.isEmpty(this.listMessengers[i]['userMessengers'])) {
                            this.listMessengers[i]['userMessengers'] = [];
                        }
                        this.listMessengers[i]['userMessengers'].push(data.value);
                        this.listMessengers[i]['userMessengers'] = this.refreshReactMessenger(this.listMessengers[i]['userMessengers']);
                        break;
                    }
                }
            }
            else {
                alert(data['value']);
            }
        }
    };
    BoxListMessengerComponent.prototype.notifiedDeleteReact = function (data) {
        if ($bean.isNotEmpty(data)) {
            if ((data['channelId'] == this.requestChat['channelId']) && $bean.isNotEmpty(this.listMessengers)) {
                for (var i = 0; i < this.listMessengers.length; i++) {
                    if (this.listMessengers[i].id == data.messengerId) {
                        if ($bean.isNotEmpty(this.listMessengers[i]['userMessengers'])) {
                            for (var j = 0; j < this.listMessengers[i]['userMessengers'].length; j++) {
                                if (this.listMessengers[i]['userMessengers'][j].id == data.value.id) {
                                    this.listMessengers[i]['userMessengers'].splice(j, 1);
                                    this.listMessengers[i]['userMessengers'] = this.refreshReactMessenger(this.listMessengers[i]['userMessengers']);
                                    break;
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    BoxListMessengerComponent.prototype.notifiedNewUserChannel = function (data) {
        if ($bean.isNotEmpty(data)) {
            if ((data['value']['channelId'] == this.requestChat['channelId'])) {
                this.linkUsersChat.push(data['value']);
                this.linkUsersChat = this.refreshObj(this.linkUsersChat);
            }
        }
    };
    BoxListMessengerComponent.prototype.notifiedUpdateUserChannel = function (data) {
        if ($bean.isNotEmpty(data)) {
            if ((data['channelId'] == this.requestChat['channelId']) && ($bean.isNotEmpty(this.linkUsersChat))) {
                for (var i = 0; i < this.linkUsersChat.length; i++) {
                    if (this.linkUsersChat[i].id == data['value']['id']) {
                        // this.linkUsersChat[i] = data['value'];
                        for (var key in data['value']) {
                            this.linkUsersChat[i][key] = data['value'][key];
                        }
                        this.linkUsersChat = this.refreshObj(this.linkUsersChat);
                    }
                }
            }
        }
    };
    BoxListMessengerComponent.prototype.notifiedDeleteUserChannel = function (data) {
        if ($bean.isNotEmpty(data)) {
            if (this.requestChat.id != data['value'].id) {
                if ((data['channelId'] == this.requestChat['channelId']) && ($bean.isNotEmpty(this.linkUsersChat))) {
                    for (var i = 0; i < this.linkUsersChat.length; i++) {
                        if (this.linkUsersChat[i].id == data['value']['id']) {
                            this.linkUsersChat.splice(i, 1);
                            this.linkUsersChat = this.refreshObj(this.linkUsersChat);
                        }
                    }
                }
            }
            else {
                this.firstAccess = true;
            }
        }
    };
    BoxListMessengerComponent.prototype.isSeperateMessenger = function (preDate, nextDate) {
        var fiveMininutes = 5 * 60 * 1000;
        var preDateTimes = new Date(preDate).getTime();
        var nextDateTimes = new Date(nextDate).getTime();
        if ((nextDateTimes - preDateTimes) > fiveMininutes) {
            return true;
        }
        return false;
    };
    BoxListMessengerComponent.prototype.isSepearteDate = function (date, otherDate) {
        var preDate = new Date(date);
        var nextDate = new Date(otherDate);
        if ((preDate.getFullYear() == nextDate.getFullYear()) && (preDate.getMonth() == nextDate.getMonth()) && (preDate.getDate() == nextDate.getDate())) {
            return false;
        }
        return true;
    };
    BoxListMessengerComponent.prototype.updateStatusUserChat = function () {
        var url = this.baseUrl + 'userChannels/updateViewMessengers';
        var form = this.requestChat;
        this.http.post(url, form).subscribe(function (data) {
            if ($bean.isNotEmpty(data)) {
                console.log('Update Status User Chat');
                console.log(data);
            }
        });
    };
    BoxListMessengerComponent.prototype.linkExternalFile = function (path) {
        var url = this.baseUrl + path;
        window.open(url, "_blank");
    };
    BoxListMessengerComponent.prototype.refreshObj = function (obj) {
        var newObj = $bean.clone(obj);
        return newObj;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxListMessengerComponent.prototype, "userLogin", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], BoxListMessengerComponent.prototype, "checkClick", null);
    BoxListMessengerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'box-list-messenger',
            template: __webpack_require__(/*! ./box-list-messenger.component.html */ "./src/app/box/box-list-messenger/box-list-messenger.component.html"),
            styles: [__webpack_require__(/*! ./box-list-messenger.component.css */ "./src/app/box/box-list-messenger/box-list-messenger.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], BoxListMessengerComponent);
    return BoxListMessengerComponent;
}());



/***/ }),

/***/ "./src/app/box/box-react-emoji-users/box-react-emoji-users.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/box/box-react-emoji-users/box-react-emoji-users.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.box-react-emoji-users {\r\n  display: inline-block;\r\n  width: 200px;\r\n  background-color: black;\r\n  border-radius: 20px;\r\n  color: white;\r\n  z-index: 10000;\r\n  position: fixed;\r\n  padding: 10px;\r\n  max-width: 400px;\r\n  max-height: 500px;\r\n  overflow: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm94L2JveC1yZWFjdC1lbW9qaS11c2Vycy9ib3gtcmVhY3QtZW1vamktdXNlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2JveC9ib3gtcmVhY3QtZW1vamktdXNlcnMvYm94LXJlYWN0LWVtb2ppLXVzZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmJveC1yZWFjdC1lbW9qaS11c2VycyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB6LWluZGV4OiAxMDAwMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/box/box-react-emoji-users/box-react-emoji-users.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/box/box-react-emoji-users/box-react-emoji-users.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (mouseover)=\"checkShowBox()\" class=\"{{CLASS_BOX_REACT_EMOJI_USERS}}\" [ngStyle]=\"{top: styleBoxReactEmojiUsers.top + 'px', left: styleBoxReactEmojiUsers.left + 'px'}\">\r\n  <h2 class=\"text-center\">{{emoji}}</h2>\r\n  <div class=\"react-emoji-user m-1\" *ngFor=\"let user of users\">\r\n    <span class=\"w-25 text-center\">\r\n      <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg\" alt=\"IMG of Avatars\"\r\n           class=\"avatar img-fluid z-depth-1-half rounded-circle\">\r\n    </span>\r\n    <span class=\"w-75 text-left p-2\">{{user.username}}</span>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/box/box-react-emoji-users/box-react-emoji-users.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/box/box-react-emoji-users/box-react-emoji-users.component.ts ***!
  \******************************************************************************/
/*! exports provided: BoxReactEmojiUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxReactEmojiUsersComponent", function() { return BoxReactEmojiUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BoxReactEmojiUsersComponent = /** @class */ (function () {
    function BoxReactEmojiUsersComponent(cdRef) {
        this.cdRef = cdRef;
        this.CLASS_BOX_REACT_EMOJI_USERS = 'box-react-emoji-users';
        this.styleBoxReactEmojiUsers = {
            top: -1000,
            left: -1000
        };
    }
    BoxReactEmojiUsersComponent.prototype.ngOnInit = function () {
        if ($bean.isNil(this.emoji)) {
            this.emoji = '';
        }
        if ($bean.isNil(this.users)) {
            this.users = [];
        }
        if ($bean.isNil(this.triggerElementId)) {
            this.triggerElementId = '';
        }
        this.checkShowBox();
    };
    BoxReactEmojiUsersComponent.prototype.ngOnChanges = function (changes) {
        this.checkShowBox();
    };
    BoxReactEmojiUsersComponent.prototype.checkShowBox = function () {
        if (($bean.isNotEmpty(this.emoji)) && ($bean.isNotEmpty(this.users)) && ($bean.isNotEmpty(this.triggerElementId))) {
            this.setUpPosition();
        }
        else {
            this.hideBox();
        }
    };
    BoxReactEmojiUsersComponent.prototype.setUpPosition = function () {
        this.cdRef.detectChanges();
        var triggerElement = $("#" + this.triggerElementId);
        var triggerTop = triggerElement.offset().top;
        var triggerLeft = triggerElement.offset().left;
        var outerWidthTrigger = triggerElement.outerWidth();
        var outerHeightTrigger = triggerElement.outerHeight();
        var boxReactEmojiUsers = $('.' + this.CLASS_BOX_REACT_EMOJI_USERS);
        var outerWidthBoxReactEmojiUsers = boxReactEmojiUsers.outerWidth();
        var outerHeightBoxReactEmojiUsers = boxReactEmojiUsers.outerHeight();
        var boxReactEmojiUsersTop = triggerTop - 5 - outerHeightBoxReactEmojiUsers;
        var boxReactEmojiUsersLeft = triggerLeft + outerWidthTrigger / 2 - outerWidthBoxReactEmojiUsers / 2;
        this.styleBoxReactEmojiUsers.top = boxReactEmojiUsersTop;
        this.styleBoxReactEmojiUsers.left = boxReactEmojiUsersLeft;
        console.log(this.styleBoxReactEmojiUsers);
        event.stopPropagation();
    };
    BoxReactEmojiUsersComponent.prototype.hideBox = function () {
        this.styleBoxReactEmojiUsers.top = -1000;
        this.styleBoxReactEmojiUsers.left = -1000;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxReactEmojiUsersComponent.prototype, "emoji", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxReactEmojiUsersComponent.prototype, "users", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxReactEmojiUsersComponent.prototype, "triggerElementId", void 0);
    BoxReactEmojiUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'box-react-emoji-users',
            template: __webpack_require__(/*! ./box-react-emoji-users.component.html */ "./src/app/box/box-react-emoji-users/box-react-emoji-users.component.html"),
            styles: [__webpack_require__(/*! ./box-react-emoji-users.component.css */ "./src/app/box/box-react-emoji-users/box-react-emoji-users.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], BoxReactEmojiUsersComponent);
    return BoxReactEmojiUsersComponent;
}());



/***/ }),

/***/ "./src/app/box/box-react-messenger/box-react-messenger.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/box/box-react-messenger/box-react-messenger.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.box-react-emojis {\r\n  display: inline-block;\r\n  position: relative;\r\n  top: -10px;\r\n  left: 0;\r\n  border-radius: 10px;\r\n  font-size: 16px;\r\n  width: 400px;\r\n  height: auto;\r\n}\r\n\r\n.box-react-emojis .item-emoji {\r\n  padding: 5px;\r\n  border: 1px solid gainsboro;\r\n  border-radius: 10px;\r\n  background-color: white;\r\n  margin: 5px;\r\n}\r\n\r\n.box-react-emojis .item-emoji:hover {\r\n  cursor: pointer;\r\n  opacity: 0.8;\r\n}\r\n\r\n.item-emoji {\r\n  display: inline-block;\r\n  padding: 5px;\r\n}\r\n\r\n.box-user-read-message:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.item-user {\r\n  display: inline-block;\r\n  padding: 5px;\r\n}\r\n\r\n.avatar-user-read{\r\n  width: 30px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm94L2JveC1yZWFjdC1tZXNzZW5nZXIvYm94LXJlYWN0LW1lc3Nlbmdlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLE9BQU87RUFDUCxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFHQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFHQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2JveC9ib3gtcmVhY3QtbWVzc2VuZ2VyL2JveC1yZWFjdC1tZXNzZW5nZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYm94LXJlYWN0LWVtb2ppcyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0xMHB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmJveC1yZWFjdC1lbW9qaXMgLml0ZW0tZW1vamkge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBnYWluc2Jvcm87XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW46IDVweDtcclxufVxyXG5cclxuLmJveC1yZWFjdC1lbW9qaXMgLml0ZW0tZW1vamk6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcblxyXG4uaXRlbS1lbW9qaSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmJveC11c2VyLXJlYWQtbWVzc2FnZTpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaXRlbS11c2VyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG5cclxuLmF2YXRhci11c2VyLXJlYWR7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/box/box-react-messenger/box-react-messenger.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/box/box-react-messenger/box-react-messenger.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box-react-emojis\" *ngIf=\"isShowBoxReactEmojis\">\r\n  <div class=\"item-emoji\" *ngFor=\"let emoji of listEmojis; let index = index;\"\r\n       [id]=\"'item-emoji' + '-' + randomeId + '-' + index\"\r\n       (mouseover)=\"showReactUsers(emoji, 'item-emoji' + '-' + randomeId + '-' + index)\"\r\n       (mouseout)=\"hideReactUsers(emoji)\">\r\n    <span>{{emoji}}</span>\r\n    <span *ngIf=\"(objEmojis[emoji].length > 1)\">{{objEmojis[emoji].length}}</span>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"isViewUsersRead\" class=\"box-user-read-message text-right\">\r\n  <div class=\"item-user\" *ngFor=\"let user of listUserReadSample; let index = index;\">\r\n     <span [id]=\"'user' + '-' + index + '-' + randomeId\"\r\n           (click)=\"showBoxUsersRead( $event, 'user' + '-' + index + '-' + randomeId)\">\r\n      <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg\" alt=\"IMG of Avatars\"\r\n           class=\"avatar-user-read img-fluid z-depth-1-half rounded-circle\">\r\n    </span>\r\n  </div>\r\n  <span *ngIf=\"listUserRead.length > listUserReadSample.length\"\r\n        class=\"text-muted small\" [id]=\"'more-user' + '-' + randomeId\"\r\n        (click)=\"showBoxUsersRead($event, 'more-user' + '-' + randomeId)\"> + {{listUserRead.length - listUserReadSample.length}}</span>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/box/box-react-messenger/box-react-messenger.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/box/box-react-messenger/box-react-messenger.component.ts ***!
  \**************************************************************************/
/*! exports provided: BoxReactMessengerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxReactMessengerComponent", function() { return BoxReactMessengerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/services/global.service */ "./src/app/common/services/global.service.ts");



var BoxReactMessengerComponent = /** @class */ (function () {
    function BoxReactMessengerComponent(globalService, cdRef) {
        this.globalService = globalService;
        this.cdRef = cdRef;
        this.ACTION_UNREAD = 'UNREAD';
        this.ACTION_READED = 'READED';
        this.ACTION_REACTED = 'REACTED';
        this.LENGTH_SHOW_USER_SAMPLE = 3;
        this.isShowBoxReactEmojis = false;
        this.objEmojis = {};
        this.listEmojis = [];
        this.listUserRead = [];
        this.listUserReadSample = [];
        this.randomeId = $bean.genRandomID(16);
    }
    BoxReactMessengerComponent.prototype.ngOnChanges = function (changes) {
        this.setUpBox();
    };
    BoxReactMessengerComponent.prototype.ngOnInit = function () {
        // this.setUpBox();
        if ($bean.isNil(this.reactEmojis)) {
            this.reactEmojis = [];
        }
        if ($bean.isNil(this.isViewUsersRead)) {
            // this.isViewUsersRead = true;
            this.isViewUsersRead = false;
        }
    };
    BoxReactMessengerComponent.prototype.resetData = function () {
        this.isShowBoxReactEmojis = false;
        this.listEmojis = [];
        this.objEmojis = {};
    };
    BoxReactMessengerComponent.prototype.setUpBox = function () {
        // this.cdRef.detectChanges();
        this.resetData();
        if ($bean.isNil(this.reactEmojis)) {
            this.reactEmojis = [];
        }
        for (var i = 0; i < this.reactEmojis.length; i++) {
            if ((this.reactEmojis[i].action == this.ACTION_REACTED)) {
                if ((this.reactEmojis[i].emoji in this.objEmojis)) {
                    this.objEmojis[this.reactEmojis[i].emoji].push(this.reactEmojis[i].user);
                }
                else {
                    this.objEmojis[this.reactEmojis[i].emoji] = [this.reactEmojis[i].user];
                }
            }
            else {
                if (this.reactEmojis[i].action = this.ACTION_UNREAD) {
                    var objUser = this.reactEmojis[i].user;
                    objUser['readDate'] = this.reactEmojis[i].readDate;
                    this.listUserRead.push(objUser);
                }
            }
        }
        for (var key in this.objEmojis) {
            this.listEmojis.push(key);
        }
        if ($bean.isNotEmpty(this.listUserRead)) {
            var lengthSampleUser = this.LENGTH_SHOW_USER_SAMPLE;
            if (this.listUserRead.length < this.LENGTH_SHOW_USER_SAMPLE) {
                lengthSampleUser = this.listUserRead.length;
            }
            for (var i = 0; i < lengthSampleUser; i++) {
                this.listUserReadSample.push(this.listUserRead[i]);
            }
        }
        if ($bean.isNotEmpty(this.listEmojis)) {
            this.isShowBoxReactEmojis = true;
        }
        else {
            this.isShowBoxReactEmojis = false;
        }
    };
    BoxReactMessengerComponent.prototype.showReactUsers = function (emoji, triggerElementId) {
        this.globalService.dataShowReactEmoji.next({
            selectedEmoji: emoji,
            users: this.objEmojis[emoji],
            triggerElementId: triggerElementId
        });
    };
    BoxReactMessengerComponent.prototype.showBoxUsersRead = function (event, triggerElementId) {
        var cloneListUserRead = $bean.clone(this.listUserRead);
        this.globalService.dataShowUsersReadMessenger.next({
            readUsers: cloneListUserRead,
            triggerElementId: triggerElementId
        });
        event.stopPropagation();
    };
    BoxReactMessengerComponent.prototype.hideReactUsers = function (emoji) {
        this.globalService.dataShowReactEmoji.next(null);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxReactMessengerComponent.prototype, "reactEmojis", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], BoxReactMessengerComponent.prototype, "isViewUsersRead", void 0);
    BoxReactMessengerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'box-react-messenger',
            template: __webpack_require__(/*! ./box-react-messenger.component.html */ "./src/app/box/box-react-messenger/box-react-messenger.component.html"),
            styles: [__webpack_require__(/*! ./box-react-messenger.component.css */ "./src/app/box/box-react-messenger/box-react-messenger.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], BoxReactMessengerComponent);
    return BoxReactMessengerComponent;
}());



/***/ }),

/***/ "./src/app/box/box-read-messenger/box-read-messenger.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/box/box-read-messenger/box-read-messenger.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.box-react-emojis {\r\n  display: inline-block;\r\n  position: relative;\r\n  top: -10px;\r\n  left: 0;\r\n  border-radius: 10px;\r\n  font-size: 16px;\r\n  width: 400px;\r\n  height: auto;\r\n}\r\n\r\n.box-react-emojis .item-emoji {\r\n  padding: 5px;\r\n  border: 1px solid gainsboro;\r\n  border-radius: 10px;\r\n  background-color: white;\r\n  margin: 5px;\r\n}\r\n\r\n.box-react-emojis .item-emoji:hover {\r\n  cursor: pointer;\r\n  opacity: 0.8;\r\n}\r\n\r\n.item-emoji {\r\n  display: inline-block;\r\n  padding: 5px;\r\n}\r\n\r\n.box-user-read-message:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.item-user {\r\n  display: inline-block;\r\n  padding: 5px;\r\n}\r\n\r\n.avatar-user-read{\r\n  width: 30px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm94L2JveC1yZWFkLW1lc3Nlbmdlci9ib3gtcmVhZC1tZXNzZW5nZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixPQUFPO0VBQ1AsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBR0E7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBR0E7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9ib3gvYm94LXJlYWQtbWVzc2VuZ2VyL2JveC1yZWFkLW1lc3Nlbmdlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5ib3gtcmVhY3QtZW1vamlzIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTEwcHg7XHJcbiAgbGVmdDogMDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uYm94LXJlYWN0LWVtb2ppcyAuaXRlbS1lbW9qaSB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdhaW5zYm9ybztcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4uYm94LXJlYWN0LWVtb2ppcyAuaXRlbS1lbW9qaTpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuXHJcbi5pdGVtLWVtb2ppIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uYm94LXVzZXItcmVhZC1tZXNzYWdlOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5pdGVtLXVzZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcblxyXG4uYXZhdGFyLXVzZXItcmVhZHtcclxuICB3aWR0aDogMzBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/box/box-read-messenger/box-read-messenger.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/box/box-read-messenger/box-read-messenger.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box-user-read-message text-right\">\r\n  <div class=\"item-user\" *ngFor=\"let user of listUserReadSample; let index = index;\">\r\n     <span [id]=\"'user' + '-' + index + '-' + randomeId\"\r\n           (click)=\"showBoxUsersRead( $event, 'user' + '-' + index + '-' + randomeId)\">\r\n      <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg\" alt=\"IMG of Avatars\"\r\n           class=\"avatar-user-read img-fluid z-depth-1-half rounded-circle\">\r\n    </span>\r\n  </div>\r\n  <span *ngIf=\"listUserRead.length > listUserReadSample.length\"\r\n        class=\"text-muted small\" [id]=\"'more-user' + '-' + randomeId\"\r\n        (click)=\"showBoxUsersRead($event, 'more-user' + '-' + randomeId)\"> + {{listUserRead.length - listUserReadSample.length}}</span>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/box/box-read-messenger/box-read-messenger.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/box/box-read-messenger/box-read-messenger.component.ts ***!
  \************************************************************************/
/*! exports provided: BoxReadMessengerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxReadMessengerComponent", function() { return BoxReadMessengerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/services/global.service */ "./src/app/common/services/global.service.ts");



var BoxReadMessengerComponent = /** @class */ (function () {
    function BoxReadMessengerComponent(globalService, cdRef) {
        this.globalService = globalService;
        this.cdRef = cdRef;
        this.LENGTH_SHOW_USER_SAMPLE = 3;
        this.listUserRead = [];
        this.listUserReadSample = [];
        this.randomeId = $bean.genRandomID(16);
    }
    BoxReadMessengerComponent.prototype.ngOnChanges = function (changes) {
        this.setUpBox();
    };
    BoxReadMessengerComponent.prototype.ngOnInit = function () {
        if ($bean.isNil(this.userChannels)) {
            this.userChannels = [];
        }
        if ($bean.isNil(this.messengerId)) {
            this.messengerId = '';
        }
        if ($bean.isNil(this.isViewUsersRead)) {
            this.isViewUsersRead = true;
        }
        this.setUpBox();
    };
    BoxReadMessengerComponent.prototype.setUpBox = function () {
        this.listUserRead = [];
        this.listUserReadSample = [];
        for (var i = 0; i < this.userChannels.length; i++) {
            if (this.userChannels[i].lastMessengerId == this.messengerId) {
                this.listUserRead.push(this.userChannels[i]);
            }
        }
        if ($bean.isNotEmpty(this.listUserRead)) {
            var lengthSampleUser = this.LENGTH_SHOW_USER_SAMPLE;
            if (this.listUserRead.length < this.LENGTH_SHOW_USER_SAMPLE) {
                lengthSampleUser = this.listUserRead.length;
            }
            for (var i = 0; i < lengthSampleUser; i++) {
                this.listUserReadSample.push(this.listUserRead[i]);
            }
        }
    };
    BoxReadMessengerComponent.prototype.showBoxUsersRead = function (event, triggerElementId) {
        if ($bean.isNotEmpty(this.listUserRead)) {
            var usersRead = [];
            for (var i = 0; i < this.listUserRead.length; i++) {
                usersRead.push(this.listUserRead[i]['user']);
            }
            if ($bean.isNotEmpty(usersRead)) {
                this.globalService.dataShowUsersReadMessenger.next({
                    readUsers: usersRead,
                    triggerElementId: triggerElementId
                });
                event.stopPropagation();
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxReadMessengerComponent.prototype, "userChannels", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxReadMessengerComponent.prototype, "messengerId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxReadMessengerComponent.prototype, "isViewUsersRead", void 0);
    BoxReadMessengerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'box-read-messenger',
            template: __webpack_require__(/*! ./box-read-messenger.component.html */ "./src/app/box/box-read-messenger/box-read-messenger.component.html"),
            styles: [__webpack_require__(/*! ./box-read-messenger.component.css */ "./src/app/box/box-read-messenger/box-read-messenger.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], BoxReadMessengerComponent);
    return BoxReadMessengerComponent;
}());



/***/ }),

/***/ "./src/app/box/box-send-messenger/box-send-messenger.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/box/box-send-messenger/box-send-messenger.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.box-send-messenger {\r\n  margin: auto;\r\n  text-align: center;\r\n  position: fixed;\r\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\r\n  z-index: 1003;\r\n  background-color: whitesmoke;\r\n  left: 370px;\r\n  padding: 10px;\r\n  bottom: 20px;\r\n  right: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm94L2JveC1zZW5kLW1lc3Nlbmdlci9ib3gtc2VuZC1tZXNzZW5nZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFFZiw2RUFBNkU7RUFDN0UsYUFBYTtFQUNiLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9ib3gvYm94LXNlbmQtbWVzc2VuZ2VyL2JveC1zZW5kLW1lc3Nlbmdlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5ib3gtc2VuZC1tZXNzZW5nZXIge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgei1pbmRleDogMTAwMztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIGxlZnQ6IDM3MHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm90dG9tOiAyMHB4O1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/box/box-send-messenger/box-send-messenger.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/box/box-send-messenger/box-send-messenger.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box-send-messenger\"\r\n     *ngIf=\"bean.isNotEmpty(requestChat)\">\r\n  <div class=\"list-file-upload row p-2 m-1\" *ngIf=\"processUpload\" (dragover)=\"allowDrop($event, true)\"\r\n       (drop)=\"dropIntoBoxSend($event)\">\r\n      <span class=\"upload-item-pending\" *ngFor=\"let objFile of uploadFiles\">\r\n        <div class=\"file-item\" *ngIf=\"objFile.type == TYPE_MESSENGER_FILE\">\r\n          <i class=\"fas fa-times-circle icon\" (click)=\"deleteUploadFile(objFile.id)\"></i>\r\n          <div><i class=\"far fa-file\"></i></div>\r\n          <div class=\"message-title\">{{objFile.file.name}}</div>\r\n          <div class=\"text-muted\">{{objFile.file.size | printData}}</div>\r\n        </div>\r\n        <div class=\"image-item\" *ngIf=\"objFile.type == TYPE_MESSENGER_IMAGE\">\r\n          <i class=\"fas fa-times-circle icon\" (click)=\"deleteUploadFile(objFile.id)\"></i>\r\n          <span><img class=\"message-img\" [src]=\"objFile.url\" alt=\"{{objFile.file.name}}\"></span>\r\n        </div>\r\n      </span>\r\n    <div class=\"add-item-upload text-center\" (click)=\"chooseFile()\">\r\n      <i class=\"fas fa-plus\"></i>\r\n    </div>\r\n  </div>\r\n  <hr *ngIf=\"processUpload\">\r\n  <div class=\"row\">\r\n    <div class=\"col-6\">\r\n      <!--<input id=\"inputSendMessage\" type=\"text\" class=\"form-control\" placeholder=\"Send message\"-->\r\n             <!--[(ngModel)]=\"inputValue\"-->\r\n             <!--(keyup)=\"checkSendMessage($event)\">-->\r\n      <box-input-send-messenger (callBack)=\"sendMessage()\"></box-input-send-messenger>\r\n    </div>\r\n    <div class=\"input-group col-6\">\r\n      <div class=\"input-group-append\" *ngIf=\"!processUpload\">\r\n        <span class=\"input-group-text symbol-link hvr-grow\"><i class=\"far fa-file-image\"></i></span>\r\n      </div>\r\n      <div class=\"input-group-append\" *ngIf=\"!processUpload\">\r\n          <span class=\"input-group-text symbol-link hvr-grow\" (click)=\"chooseFile()\"><i\r\n            class=\"far fa-file-alt\"></i></span>\r\n      </div>\r\n      <div class=\"input-group-append\" *ngIf=\"!processUpload\">\r\n        <span class=\"input-group-text symbol-link hvr-grow\"><i class=\"fas fa-file-video\"></i></span>\r\n      </div>\r\n      <div class=\"input-group-append\" id=\"icon-message-emojis\" *ngIf=\"!processUpload\"\r\n           (click)=\"showBoxMessageEmojis($event)\">\r\n        <span class=\"input-group-text symbol-link hvr-grow\"><i class=\"emotion far fa-smile\"></i></span>\r\n      </div>\r\n      <div class=\"input-group-append\" *ngIf=\"!processUpload\">\r\n        <span class=\"input-group-text symbol-link hvr-grow\"><i class=\"fas fa-map-marker-alt\"></i></span>\r\n      </div>\r\n      <div class=\"input-group-append\" *ngIf=\"!processUpload\">\r\n        <span class=\"input-group-text symbol-link hvr-grow\"><i class=\"fas fa-file-video\"></i></span>\r\n      </div>\r\n      <!--<ngx-emoji (emojiClick)=\"emojiClick($event)\" [emoji]=\"{id: '+1'}\" size=\"24\" set=\"native\">-->\r\n\r\n      <!--</ngx-emoji>-->\r\n      <div class=\"input-group-append\" *ngIf=\"!processUpload\">\r\n        <span class=\"input-group-text symbol-link hvr-grow\"><i class=\"far fa-thumbs-up\"></i></span>\r\n      </div>\r\n      <button class=\"btn btn-primary\" (click)=\"sendMessage()\">Send</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Info message -->\r\n<!--<a class=\"btn btn-info\" (click)=\"toastr.info('Hi! I am info message.');\">Info message</a>-->\r\n<!-- Warning message -->\r\n<!--<a class=\"btn btn-warning\" (click)=\"toastr.warning('Hi! I am warning message.');\">Warning message</a>-->\r\n<!-- Success message -->\r\n<!--<a class=\"btn btn-success\" (click)=\"toastr.success('Hi! I am success message.');\">Success message</a>-->\r\n<!-- Error message -->\r\n<!--<a class=\"btn btn-danger\" (click)=\"toastr.error('Hi! I am error message.');\">Error message</a>-->\r\n\r\n<input id=\"inputFile\" type=\"file\" multiple (change)=\"doUpload($event)\" style=\"display:none\"/>\r\n\r\n<box-emojis [styleBoxMessageEmojis]=\"styleBoxMessageEmojis\" (chooseEmoji)=\"handleClick($event)\"></box-emojis>\r\n"

/***/ }),

/***/ "./src/app/box/box-send-messenger/box-send-messenger.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/box/box-send-messenger/box-send-messenger.component.ts ***!
  \************************************************************************/
/*! exports provided: BoxSendMessengerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxSendMessengerComponent", function() { return BoxSendMessengerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/services/global.service */ "./src/app/common/services/global.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

/**
 * Created by ihcmtest01_vdi on 10/31/2018.
 */




var BoxSendMessengerComponent = /** @class */ (function () {
    function BoxSendMessengerComponent(http, globalService, router) {
        this.http = http;
        this.globalService = globalService;
        this.router = router;
        this.STATUS_ACCEPTED = 'ACCEPTED';
        this.ENTER_KEY_CODE = 13;
        this.TYPE_MESSENGER_TEXT = 'TEXT';
        this.TYPE_MESSENGER_IMAGE = 'IMAGE';
        this.TYPE_MESSENGER_LINK = 'LINK';
        this.TYPE_MESSENGER_FILE = 'FILE';
        this.CLASS_BOX_MESSAGE_EMOJIS = 'emoji-mart';
        this.CLASS_BOX_REACT_EMOJIS = 'box-emojis-react-messengers';
        this.processUpdateMessenger = false;
        this.processUpload = false;
        this.selectedMessenger = {};
        this.requestChat = {};
        this.uploadFiles = [];
        this.inputValue = '';
        this.baseUrl = "http://chat.hyper.com:9000/";
        this.bean = $bean;
        this.styleBoxReactEmojis = {
            top: -1000,
            left: -1000
        };
        this.styleBoxMessageEmojis = {
            top: -1000,
            left: -1000
        };
    }
    BoxSendMessengerComponent.prototype.checkClick = function (event) {
        if (event.target.classList.contains(this.CLASS_BOX_MESSAGE_EMOJIS) || $(event.target).parents("." + this.CLASS_BOX_MESSAGE_EMOJIS).length) {
        }
        else {
            this.hideBoxMessageEmojis();
        }
    };
    BoxSendMessengerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.globalService.changeFocusChat.subscribe(function (res) {
            if ($bean.isNotEmpty(res)) {
                _this.requestChat = res['requestChat'];
            }
            else {
                _this.requestChat = {};
            }
        });
        this.globalService.userUpdateMessenger.subscribe(function (res) {
            if ($bean.isNotEmpty(res)) {
                _this.selectedMessenger = res;
                _this.processUpdateMessenger = true;
                _this.inputValue = _this.selectedMessenger['message'];
            }
        });
    };
    BoxSendMessengerComponent.prototype.ngOnChanges = function (changes) {
    };
    BoxSendMessengerComponent.prototype.hideBoxMessageEmojis = function () {
        this.styleBoxMessageEmojis.top = -1000;
        this.styleBoxMessageEmojis.left = -1000;
    };
    BoxSendMessengerComponent.prototype.allowDrop = function (ev, showBorder) {
        ev.preventDefault();
        if (showBorder) {
            event.target['style'].border = "4px dotted green";
        }
    };
    BoxSendMessengerComponent.prototype.deleteUploadFile = function (idFile) {
        if ($bean.isNotEmpty(this.uploadFiles)) {
            for (var i = 0; i < this.uploadFiles.length; i++) {
                if (this.uploadFiles[i].id == idFile) {
                    this.uploadFiles.splice(i, 1);
                }
            }
        }
        if ($bean.isEmpty(this.uploadFiles)) {
            this.processUpload = false;
        }
    };
    BoxSendMessengerComponent.prototype.chooseFile = function () {
        $('input[type="file"]').val('');
        $('#inputFile').trigger('click');
    };
    BoxSendMessengerComponent.prototype.sendMessage = function () {
        if (this.processUpload) {
            this.upload();
        }
        else {
            if (!this.processUpdateMessenger) {
                this.sendText();
            }
            else {
                this.updateMessenger();
            }
        }
    };
    BoxSendMessengerComponent.prototype.updateMessenger = function () {
        var _this = this;
        if ($bean.isNotEmpty(this.inputValue)) {
            var updateMessenger = {
                id: this.selectedMessenger.id,
                message: this.inputValue
            };
            var url = this.baseUrl + 'messengers/update';
            this.http.post(url, updateMessenger).subscribe(function (data) {
                console.log('Updated Messenger');
                console.log(data);
                _this.inputValue = '';
                _this.processUpdateMessenger = false;
            });
        }
    };
    BoxSendMessengerComponent.prototype.sendText = function () {
        var _this = this;
        var value = $('#' + 'input-messenger')[0].innerHTML;
        console.log(value);
        if ($bean.isNotEmpty(value)) {
            var message = {
                channelId: this.requestChat['channelId'],
                message: value
            };
            var channelIdentifier = 'channel' + '_' + this.requestChat['channelId'];
            // const url = this.baseUrl + 'pub?id=' + channelIdentifier;
            var url = this.baseUrl + 'messengers/insert';
            // let url = this.baseUrl + 'users/sendMesssage'
            this.http.post(url, message).subscribe(function (data) {
                if ($bean.isNotNil(data)) {
                    console.log(data);
                    _this.inputValue = '';
                    // cursor to the lastest messeage
                    // this.moveToLastMessage();
                }
            }, function (error) {
                console.log('Something went wrong ', error);
            });
        }
    };
    BoxSendMessengerComponent.prototype.doUpload = function (event) {
        console.log(event);
        event.stopPropagation();
        event.preventDefault();
        var files = event.target.files;
        if ($bean.isNotEmpty(files)) {
            for (var i = 0; i < files.length; i++) {
                this.addFileToUpload(files[i]);
            }
        }
        if ($bean.isNotEmpty(this.uploadFiles)) {
            this.processUpload = true;
        }
        // $('input[type="file"]').val('');
        // this.upload(this.uploadFiles);
    };
    BoxSendMessengerComponent.prototype.upload = function () {
        var uploadFilesClone = $bean.clone(this.uploadFiles);
        var attachMessage = this.inputValue;
        this.finishUploadFiles();
        if ($bean.isNotEmpty(uploadFilesClone)) {
            var url = this.baseUrl + 'upload';
            for (var i = 0; i < uploadFilesClone.length; i++) {
                var formData = new FormData();
                formData.append('channelId', this.requestChat['channelId']);
                formData.append('fileId', uploadFilesClone[i].id);
                formData.append('file', uploadFilesClone[i].file);
                if ($bean.isNotEmpty(attachMessage) && (i == (uploadFilesClone.length - 1))) {
                    formData.append('message', attachMessage);
                }
                this.http.post(url, formData).subscribe(function (data) {
                    console.log(data);
                });
            }
        }
    };
    BoxSendMessengerComponent.prototype.finishUploadFiles = function () {
        this.processUpload = false;
        this.uploadFiles = [];
        this.inputValue = '';
    };
    BoxSendMessengerComponent.prototype.addFileToUpload = function (file) {
        var _this = this;
        if (file) {
            var typeFile_1 = (file.type.includes('image')) ? this.TYPE_MESSENGER_IMAGE : this.TYPE_MESSENGER_FILE;
            var url_1 = undefined;
            if (typeFile_1 == this.TYPE_MESSENGER_IMAGE) {
                console.log('preview image');
                var reader = new FileReader();
                reader.readAsDataURL(file); // read file as data url
                reader.onload = function (event) {
                    url_1 = event.target['result'];
                    var objFile = {
                        id: $bean.genRandomID(16),
                        type: typeFile_1,
                        file: file,
                        url: url_1
                    };
                    _this.uploadFiles.push(objFile);
                    if ($bean.isNotEmpty(_this.uploadFiles)) {
                        _this.processUpload = true;
                    }
                };
            }
            else {
                var objFile = {
                    id: $bean.genRandomID(16),
                    type: typeFile_1,
                    file: file
                };
                this.uploadFiles.push(objFile);
            }
        }
    };
    BoxSendMessengerComponent.prototype.dropIntoBoxSend = function (ev) {
        ev.preventDefault();
        var files = ev.dataTransfer.files;
        if ($bean.isNotEmpty(files)) {
            for (var i = 0; i < files.length; i++) {
                this.addFileToUpload(files[i]);
            }
        }
        event.target['style'].border = "none";
    };
    BoxSendMessengerComponent.prototype.showBoxMessageEmojis = function (event) {
        this.showBoxEmojis(event, 'icon-message-emojis', this.CLASS_BOX_MESSAGE_EMOJIS);
    };
    BoxSendMessengerComponent.prototype.showBoxEmojis = function (event, triggerId, classBoxEmoji) {
        var triggerElement = $('#' + triggerId);
        var triggerTop = triggerElement.offset().top;
        var triggerLeft = triggerElement.offset().left;
        var outerWidthTrigger = triggerElement.outerWidth();
        var outerHeightTrigger = triggerElement.outerHeight();
        var emojisBox = $('.' + classBoxEmoji);
        var outerWidthEmojisBox = emojisBox.outerWidth();
        var outerHeightEmojisBox = emojisBox.outerHeight();
        var emojisBoxTop = triggerTop - 10 - outerHeightEmojisBox;
        var emojesBoxLeft = triggerLeft + outerWidthTrigger / 2 - outerWidthEmojisBox / 2;
        if (classBoxEmoji == this.CLASS_BOX_MESSAGE_EMOJIS) {
            this.styleBoxMessageEmojis.top = emojisBoxTop;
            this.styleBoxMessageEmojis.left = emojesBoxLeft;
            console.log(this.styleBoxMessageEmojis);
        }
        else {
            this.styleBoxReactEmojis.top = emojisBoxTop;
            this.styleBoxReactEmojis.left = emojesBoxLeft;
            console.log(this.styleBoxReactEmojis);
        }
        event.stopPropagation();
    };
    BoxSendMessengerComponent.prototype.handleClick = function (emoji) {
        this.inputValue += emoji;
    };
    BoxSendMessengerComponent.prototype.emojiClick = function (evt) {
        console.log(evt.emoji);
        console.log(evt.$event);
    };
    BoxSendMessengerComponent.prototype.cancelUploadFile = function () {
        this.processUpload = false;
        this.uploadFiles = [];
    };
    // Bắt sự kiện người dùng enter gửi dữ liệu
    BoxSendMessengerComponent.prototype.checkSendMessage = function (event) {
        if (event.keyCode === this.ENTER_KEY_CODE) {
            this.sendMessage();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], BoxSendMessengerComponent.prototype, "checkClick", null);
    BoxSendMessengerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'box-send-messenger',
            template: __webpack_require__(/*! ./box-send-messenger.component.html */ "./src/app/box/box-send-messenger/box-send-messenger.component.html"),
            styles: [__webpack_require__(/*! ./box-send-messenger.component.css */ "./src/app/box/box-send-messenger/box-send-messenger.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _common_services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], BoxSendMessengerComponent);
    return BoxSendMessengerComponent;
}());



/***/ }),

/***/ "./src/app/box/box-side-bar/box-side-bar.component.css":
/*!*************************************************************!*\
  !*** ./src/app/box/box-side-bar/box-side-bar.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JveC9ib3gtc2lkZS1iYXIvYm94LXNpZGUtYmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/box/box-side-bar/box-side-bar.component.html":
/*!**************************************************************!*\
  !*** ./src/app/box/box-side-bar/box-side-bar.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-header\">\r\n  <div class=\"info-user row\">\r\n    <div class=\"col-10 row\">\r\n      <div class=\"col-4 text-center dropdown p-2\" id=\"avatarUser\" data-toggle=\"dropdown\">\r\n        <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg\" alt=\"IMG of Avatars\"\r\n             class=\"avatar img-fluid z-depth-1-half rounded-circle\">\r\n      </div>\r\n      <div class=\"info-detail col-8 pt-3 small\" id=\"infoUser\" data-toggle=\"dropdown\">\r\n        <div class=\"link\">\r\n          {{userLogin.username}}\r\n        </div>\r\n        <div>\r\n          <span class=\"link\">Let's smile every day</span>\r\n          <span class=\"emotion hvr-bounce-in\"><i class=\"far fa-smile\"></i></span>\r\n        </div>\r\n      </div>\r\n      <div class=\"dropdown-menu p-4\" style=\"width: 320px; z-index: 2000\">\r\n        <div class=\"row\">\r\n          <h3 class=\"col-8 text-primary\">Thông tin</h3>\r\n          <div class=\"col-4 text-right small link\" (click)=\"logout()\">Sign Out</div>\r\n        </div>\r\n        <hr>\r\n        <div class=\"row\">\r\n          <div class=\"col-4\">\r\n            <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg\" alt=\"IMG of Avatars\"\r\n                 class=\"avatar img-fluid z-depth-1-half rounded-circle\">\r\n          </div>\r\n          <div class=\"col-8\">\r\n            <h4 class=\"link\" (click)=\"viewChatmeProfile()\">Sang Tigo</h4>\r\n            <div class=\"small\"><b>( {{userLogin.email}} )</b></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row mt-2\">\r\n          <div class=\"col-4\">\r\n            <input type=\"radio\" checked>\r\n          </div>\r\n          <div class=\"col-8\">\r\n            <span>Đang hoạt động</span>\r\n          </div>\r\n        </div>\r\n        <hr>\r\n        <div class=\"list-group\">\r\n          <button class=\"list-group-item py-1 active waves-light white-text\"> Quản lý</button>\r\n          <div class=\"list-group-item py-1 list-group-item-action waves-light\">\r\n            <div class=\"row\">\r\n              <div class=\"col-2 link\"><i class=\"fas fa-file-alt\"></i></div>\r\n              <div class=\"col-10 link\">Cá nhân</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"list-group-item py-1 list-group-item-action waves-light\">\r\n            <div class=\"row\">\r\n              <div class=\"col-2 link\"><i class=\"fas fa-cog\"></i></div>\r\n              <div class=\"col-10 link\">Cài đặt</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-2 icon text-right\">\r\n      <i class='fas fa-ellipsis-h' data-toggle=\"dropdown\"></i>\r\n      <div class=\"dropdown-menu\">\r\n        <div class=\"dropdown-item\" data-toggle=\"modal\" (click)=\"showProfile()\">Setting</div>\r\n        <hr>\r\n        <div class=\"dropdown-item\" data-toggle=\"modal\" (click)=\"logout()\">Logout</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"box-search-channel row p-2 text-center\">\r\n    <div class=\"input-group input-group-sm\">\r\n      <div class=\"input-group-prepend\" (click)=\"searchChannels(DEFAULT_NUMBER_CHAT, searchValue)\">\r\n        <span class=\"input-group-text hvr-grow icon\"> <i class=\"fas fa-search\"></i></span>\r\n      </div>\r\n      <input (focus)=\"changeActivity()\" type=\"text\" class=\"form-control\" placeholder=\"Search here\"\r\n             [(ngModel)]=\"searchValue\">\r\n      <div class=\"input-group-append\" *ngIf=\"isSearching\">\r\n        <span class=\"input-group-text hvr-grow icon\" (click)=\"closeSearch()\"><i class=\"fas fa-times\"></i></span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"menu-search-item text-center row p-2\">\r\n    <div class=\"col text-center\" (click)=\"goToChats()\"\r\n         [ngClass]=\"(location == LOCATION_CHATS) ? 'text-primary': 'text-muted'\">\r\n      <div class=\"symbol-link  hvr-pulse hvr-grow-shadow\">\r\n        <i class=\"fab fa-rocketchat\"></i> <span class=\"badge badge-danger ml-2\"\r\n                                                *ngIf=\"unreadChats != 0\">{{unreadChats}}</span>\r\n      </div>\r\n      <div>\r\n        <strong><a class=\"title-item\">\r\n          Chats\r\n        </a></strong>\r\n      </div>\r\n    </div>\r\n    <div class=\"col text-center\" (click)=\"goToContacts()\"\r\n         [ngClass]=\"(location == LOCATION_CONTACTS) ? 'text-primary': 'text-muted'\">\r\n      <div class=\"symbol-link  hvr-pulse hvr-grow-shadow\">\r\n        <i class=\"fas fa-address-card\"></i>\r\n      </div>\r\n      <div>\r\n        <strong><a class=\"title-item\">\r\n          Contacts\r\n        </a></strong>\r\n      </div>\r\n    </div>\r\n    <div class=\"col text-center\" (click)=\"goToNotifications()\"\r\n         [ngClass]=\"(location == LOCATION_HOME_NOTIFICATIONS) ? 'text-primary': 'text-muted'\">\r\n      <div class=\"symbol-link  hvr-pulse hvr-grow-shadow\">\r\n        <i class=\"fas fa-bell\"></i>\r\n      </div>\r\n      <div>\r\n        <strong><a class=\"title-item\">\r\n          Notifications\r\n        </a></strong>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"header-by-item row small\">\r\n    <div class=\"title col\">\r\n      RECENT CHATS\r\n      <span class=\"fas fa-angle-down icon\"></span>\r\n    </div>\r\n    <div class=\"col text-right\">\r\n      <!-- Basic dropdown -->\r\n      <button type=\"button\" class=\"btn btn-info btn-rounded btn-sm\" data-toggle=\"dropdown\">Chat<i\r\n        class=\"fas fa-plus ml-2\" aria-hidden=\"true\"></i></button>\r\n      <div class=\"dropdown-menu\">\r\n        <div class=\"dropdown-item\" data-toggle=\"modal\" (click)=\"showModalInitAddChannel()\">New chat</div>\r\n        <div class=\"dropdown-item\" data-toggle=\"modal\" (click)=\"showModalInitAddChannel()\">New group chat</div>\r\n      </div>\r\n      <!-- Basic dropdown -->\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"sidebar-content\">\r\n  <box-view-contacts [suggestedContacts]=\"suggestedContacts\" [availbleContacts]=\"availbleContacts\"\r\n                     (moreContacts)=\"getMoreContacts()\"\r\n                     *ngIf=\"location == LOCATION_CONTACTS\"></box-view-contacts>\r\n  <box-view-chats [suggestedChats]=\"suggestedChats\" [availbleChats]=\"availbleChats\"\r\n                  [statusUserChannels]=\"statusUserChannels\" (moreChats)=\"getMoreChats()\"\r\n                  *ngIf=\"location == LOCATION_CHATS\"></box-view-chats>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/box/box-side-bar/box-side-bar.component.ts":
/*!************************************************************!*\
  !*** ./src/app/box/box-side-bar/box-side-bar.component.ts ***!
  \************************************************************/
/*! exports provided: BoxSideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxSideBarComponent", function() { return BoxSideBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/global.service */ "./src/app/common/services/global.service.ts");





var BoxSideBarComponent = /** @class */ (function () {
    function BoxSideBarComponent(http, globalService, router) {
        this.http = http;
        this.globalService = globalService;
        this.router = router;
        this.LOCATION_CHATS = 'LOCATION_CHATS';
        this.LOCATION_CONTACTS = 'LOCATION_CONTACTS';
        this.LOCATION_HOME_NOTIFICATIONS = 'LOCATION_HOME_NOTIFICATIONS';
        this.DEFAULT_NUMBER_USER = 20;
        this.DEFAULT_NUMBER_CHAT = 5;
        this.DEFAULT_NUMBER_OFSET = 0;
        // Common
        // baseUrl = "https://chat.hyper.com:9999/";
        this.baseUrl = "http://chat.hyper.com:9000/";
        this.searchValue = '';
        this.isSearching = false;
        this.location = this.LOCATION_CHATS;
        // Contacts
        this.suggestedContacts = [];
        this.availbleContacts = 0;
        // Chats
        this.suggestedChats = [];
        this.availbleChats = 0;
        this.modifiedChats = [];
        this.statusUserChannels = {};
        this.unreadChats = 0;
        this.numberLoadUserChat = 0;
        this.isArrangeChat = false;
        this.requestChat = {};
    }
    BoxSideBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.location = this.LOCATION_CHATS;
        this.getChannels(this.DEFAULT_NUMBER_CHAT);
        this.globalService.changeFocusChat.subscribe(function (res) {
            if ($bean.isNotEmpty(res)) {
                _this.requestChat = res['requestChat'];
            }
            else {
                _this.requestChat = {};
            }
        });
        this.globalService.getMoreChats.subscribe(function (res) {
            _this.getMoreChats();
        });
        this.globalService.hasNewMessenger.subscribe(function (res) {
            _this.notifiedNewMessenger(res);
        });
        this.globalService.hasUpdatedMessenger.subscribe(function (res) {
            _this.notifiedUpdateMessenger(res);
        });
        this.globalService.hasDeletedMessenger.subscribe(function (res) {
            _this.notifiedDeleteMessenger(res);
        });
        this.globalService.hasNewUserChannel.subscribe(function (res) {
            _this.notifiedNewUserChannel(res);
        });
        this.globalService.hasUpdatedUserChannel.subscribe(function (res) {
            _this.notifiedUpdateUserChannel(res);
        });
        this.globalService.hasDeletedUserChannel.subscribe(function (res) {
            _this.notifiedDeleteUserChannel(res);
        });
    };
    BoxSideBarComponent.prototype.goToChats = function () {
        if (this.location == this.LOCATION_CONTACTS) {
            this.location = this.LOCATION_CHATS;
            this.resetViewChat();
            this.getChannels(this.DEFAULT_NUMBER_CHAT);
        }
    };
    BoxSideBarComponent.prototype.goToContacts = function () {
        if (this.location == this.LOCATION_CHATS) {
            this.location = this.LOCATION_CONTACTS;
            this.listContacts(this.DEFAULT_NUMBER_USER, this.DEFAULT_NUMBER_OFSET);
        }
    };
    BoxSideBarComponent.prototype.goToNotifications = function () {
        this.location = this.LOCATION_HOME_NOTIFICATIONS;
    };
    BoxSideBarComponent.prototype.showModalInitAddChannel = function () {
        $('#modalInitAddChannel').modal('show');
        // reset lại giá trị của đối tượng newChannel
        this.globalService.addChannel.next({});
    };
    BoxSideBarComponent.prototype.changeActivity = function () {
        this.isSearching = true;
    };
    BoxSideBarComponent.prototype.closeSearch = function () {
        this.isSearching = false;
        this.searchValue = '';
        this.getChannels(this.DEFAULT_NUMBER_CHAT);
    };
    BoxSideBarComponent.prototype.logout = function () {
        var _this = this;
        var url = this.baseUrl + 'logout';
        this.http.get(url).subscribe(function (data) {
            document.location.href = _this.baseUrl;
        });
    };
    BoxSideBarComponent.prototype.showProfile = function () {
        $('#modalViewChatmeProfile').modal('show');
    };
    BoxSideBarComponent.prototype.viewChatmeProfile = function () {
    };
    //  Làm chức năng thực thi với Chats
    BoxSideBarComponent.prototype.resetViewChat = function () {
        this.suggestedChats = [];
        this.unreadChats = 0;
        this.statusUserChannels = {};
        this.numberLoadUserChat = 0;
        this.modifiedChats = [];
    };
    BoxSideBarComponent.prototype.getChannels = function (number) {
        var _this = this;
        var url = this.baseUrl + 'channels/listByUser';
        var form = {
            number: number
        };
        this.http.post(url, form).subscribe(function (data) {
            _this.resetViewChat();
            if ($bean.isNotEmpty(data)) {
                _this.suggestedChats = data['channels'];
                _this.availbleChats = data['availbleNumber'];
                console.log('My Channels');
                console.log(_this.suggestedChats);
                if ($bean.isNotEmpty(_this.suggestedChats)) {
                    _this.modifiedChats = [];
                    for (var i = 0; i < _this.suggestedChats.length; i++) {
                        var objModified = _this.modifiedViewChannel(_this.suggestedChats[i]);
                        _this.modifiedChats.push(objModified);
                        _this.getStatusUserChat(_this.suggestedChats[i].id);
                    }
                    _this.sortChatsByTimeWorking(_this.modifiedChats);
                    _this.suggestedChats = _this.modifiedChats;
                    _this.changeSuggestedChats();
                }
            }
        });
    };
    BoxSideBarComponent.prototype.searchChannels = function (number, value) {
        var _this = this;
        var url = this.baseUrl + 'channels/searchChannels';
        var form = {
            number: number,
            value: value
        };
        this.http.post(url, form).subscribe(function (data) {
            _this.resetViewChat();
            if ($bean.isNotEmpty(data)) {
                _this.suggestedChats = data['channels'];
                _this.availbleChats = data['availbleNumber'];
                console.log('My Channels');
                console.log(_this.suggestedChats);
                if ($bean.isNotEmpty(_this.suggestedChats)) {
                    _this.modifiedChats = [];
                    for (var i = 0; i < _this.suggestedChats.length; i++) {
                        var objModified = _this.modifiedViewChannel(_this.suggestedChats[i]);
                        _this.modifiedChats.push(objModified);
                        _this.getStatusUserChat(_this.suggestedChats[i].id);
                    }
                    _this.sortChatsByTimeWorking(_this.modifiedChats);
                    _this.suggestedChats = _this.modifiedChats;
                    _this.changeSuggestedChats();
                }
            }
        });
    };
    BoxSideBarComponent.prototype.moreChannels = function () {
        this.getChannels(this.suggestedChats.length + this.DEFAULT_NUMBER_CHAT);
    };
    BoxSideBarComponent.prototype.searchMore = function () {
        this.searchChannels(this.suggestedChats.length + this.DEFAULT_NUMBER_CHAT, this.searchValue);
    };
    BoxSideBarComponent.prototype.modifiedViewChannel = function (viewChannel) {
        var objModified = $bean.clone(viewChannel);
        if ($bean.isNil(objModified['title'])) {
            objModified['title'] = viewChannel['users'][0].username;
        }
        objModified['userPartner'] = viewChannel['users'][0];
        delete objModified['users'];
        objModified['lastMessengerId'] = viewChannel['messengers'][0].id;
        objModified['lastMessage'] = viewChannel['messengers'][0].message;
        objModified['lastWorkingDate'] = new Date(viewChannel['messengers'][0].updatedAt).getTime();
        objModified['dateFormat'] = this.getFormateDate(new Date(viewChannel['messengers'][0].updatedAt).getTime());
        return objModified;
    };
    BoxSideBarComponent.prototype.sortChatsByTimeWorking = function (chats) {
        if ($bean.isNotEmpty(chats)) {
            chats.sort(function (a, b) {
                return b['lastWorkingDate'] - a['lastWorkingDate'];
            });
            console.log('Chats after sort');
            console.log(chats);
        }
    };
    BoxSideBarComponent.prototype.getFormateDate = function (inputTimes) {
        var inputDate = new Date(inputTimes);
        var today = new Date();
        if ((inputDate.getFullYear() == today.getFullYear()) && (inputDate.getMonth() == today.getMonth()) && (inputDate.getDate() == today.getDate())) {
            return 'shortTime';
        }
        else {
            return 'mediumDate';
        }
    };
    BoxSideBarComponent.prototype.getMoreChats = function () {
        if ($bean.isNotEmpty(this.searchValue)) {
            this.searchMore();
        }
        else {
            this.moreChannels();
        }
    };
    BoxSideBarComponent.prototype.getChat = function (channelId) {
        var _this = this;
        var url = this.baseUrl + 'channels/viewChannel';
        var form = {
            channelId: channelId
        };
        this.http.post(url, form).subscribe(function (data) {
            if ($bean.isNotEmpty(data)) {
                var found = false;
                data = _this.modifiedViewChannel(data);
                if ($bean.isNotEmpty(_this.suggestedChats)) {
                    for (var i = 0; i < _this.suggestedChats.length; i++) {
                        if (_this.suggestedChats[i].id == data['id']) {
                            found = true;
                            _this.suggestedChats[i] = data;
                            break;
                        }
                    }
                }
                else {
                    _this.suggestedChats = [];
                }
                if (!found) {
                    _this.suggestedChats.splice(0, 0, data);
                }
                _this.getStatusUserChat(data['id']);
                _this.changeSuggestedChats();
            }
        });
    };
    BoxSideBarComponent.prototype.getStatusUserChat = function (channelId) {
        var _this = this;
        var url = this.baseUrl + 'channels/statusUserChannel';
        var form = {
            channelId: channelId
        };
        this.http.post(url, form).subscribe(function (data) {
            if ($bean.isNotEmpty(data)) {
                _this.statusUserChannels[data['channelId']] = data['unReadMessengers'];
                if (_this.numberLoadUserChat < _this.suggestedChats.length) {
                    _this.numberLoadUserChat++;
                }
                if (_this.numberLoadUserChat >= _this.suggestedChats.length) {
                    _this.countUnreadChats();
                }
            }
        });
    };
    BoxSideBarComponent.prototype.countUnreadChats = function () {
        this.unreadChats = 0;
        if ($bean.isNotEmpty(this.statusUserChannels)) {
            for (var key in this.statusUserChannels) {
                var unReadMessengers = this.statusUserChannels[key];
                if ((unReadMessengers) > 0) {
                    this.unreadChats++;
                }
            }
        }
    };
    //  Các chức năng thực thi với Contacts
    // countAllUsers() {
    //   let url = this.baseUrl + 'users/countAll';
    //   let form = {};
    //   this.http.post(url, form).subscribe(data => {
    //     this.totalContacts = data['count'];
    //   })
    // }
    BoxSideBarComponent.prototype.listContacts = function (number, offset) {
        var _this = this;
        var url = this.baseUrl + 'users/suggested';
        var form = {
            number: number,
            offset: offset
        };
        this.http.post(url, form).subscribe(function (data) {
            if ($bean.isNotEmpty(data)) {
                _this.suggestedContacts = data;
            }
        });
    };
    BoxSideBarComponent.prototype.getMoreContacts = function (number, offset) {
        var _this = this;
        var url = this.baseUrl + 'users/suggested';
        var form = {
            number: number,
            offset: offset
        };
        this.http.post(url, form).subscribe(function (data) {
            if ($bean.isNotEmpty(data)) {
                var tempData = [];
                tempData = data;
                for (var i = 0; i < tempData.length; i++) {
                    _this.suggestedContacts.push(tempData[i]);
                }
            }
        });
    };
    BoxSideBarComponent.prototype.notifiedNewMessenger = function (data) {
        if ($bean.isNotEmpty(data)) {
            var found = false;
            if ($bean.isNotEmpty(this.suggestedChats)) {
                for (var i = 0; i < this.suggestedChats.length; i++) {
                    if (this.suggestedChats[i].id == data['channelId']) {
                        found = true;
                        this.isArrangeChat = true;
                        this.suggestedChats[i]['lastMessengerId'] = data.value.id;
                        this.suggestedChats[i]['lastMessage'] = data.value.message;
                        this.suggestedChats[i]['lastWorkingDate'] = new Date(data.value.createdAt).getTime();
                        this.suggestedChats[i]['dateFormat'] = this.getFormateDate(new Date(data.value.createdAt).getTime());
                        this.statusUserChannels[data['channelId']]++;
                        if ($bean.isNotEmpty(this.requestChat) && (data['channelId'] != this.requestChat.channelId) && (i != 0)) {
                            var infoChat = this.suggestedChats[i];
                            this.suggestedChats.splice(i, 1);
                            this.suggestedChats.splice(0, 0, infoChat);
                        }
                        this.countUnreadChats();
                        break;
                    }
                }
            }
            if (!found) {
                this.getChat(data['channelId']);
            }
        }
    };
    BoxSideBarComponent.prototype.notifiedUpdateMessenger = function (data) {
        if ($bean.isNotEmpty(data) && $bean.isNotEmpty(this.suggestedChats)) {
            for (var i = 0; i < this.suggestedChats.length; i++) {
                if (this.suggestedChats[i].id == data['channelId']) {
                    if (this.suggestedChats[i]['lastMessengerId'] == data['value'].id) {
                        this.suggestedChats[i]['lastMessage'] = data.value.message;
                        this.suggestedChats[i]['lastWorkingDate'] = new Date(data.value.createdAt).getTime();
                        this.suggestedChats[i]['dateFormat'] = this.getFormateDate(new Date(data.value.createdAt).getTime());
                        break;
                    }
                }
            }
        }
    };
    BoxSideBarComponent.prototype.notifiedDeleteMessenger = function (data) {
        if ($bean.isNotEmpty(data) && $bean.isNotEmpty(this.suggestedChats)) {
            for (var i = 0; i < this.suggestedChats.length; i++) {
                if (this.suggestedChats[i].id == data['channelId']) {
                    if (this.suggestedChats[i]['lastMessengerId'] == data['value'].id) {
                        // Load lại thông tin kênh chat
                        this.getChat(this.suggestedChats[i].id);
                        break;
                    }
                }
            }
        }
    };
    BoxSideBarComponent.prototype.notifiedNewUserChannel = function (data) {
        if ($bean.isNotEmpty(data) && (data['value'].userId == this.userLogin['id'])) {
            this.getChat(data['value']['channelId']);
        }
    };
    BoxSideBarComponent.prototype.notifiedUpdateUserChannel = function (data) {
        if ($bean.isNotEmpty(data) && (data['value'].userId == this.userLogin['id'])) {
            if (this.statusUserChannels.hasOwnProperty(data['channelId'])) {
                this.statusUserChannels[data['channelId']] = data['value']['unReadMessengers'];
                this.countUnreadChats();
            }
        }
    };
    BoxSideBarComponent.prototype.notifiedDeleteUserChannel = function (data) {
        if ($bean.isNotEmpty(data) && (data['value'].userId == this.userLogin['id']) && ($bean.isNotEmpty(this.suggestedChats))) {
            for (var i = 0; i < this.suggestedChats.length; i++) {
                if (this.suggestedChats[i].id == data['value']['channelId']) {
                    this.suggestedChats.splice(i, 1);
                    delete this.statusUserChannels[data['value']['channelId']];
                    this.countUnreadChats();
                    this.changeSuggestedChats();
                    break;
                }
            }
        }
    };
    BoxSideBarComponent.prototype.changeSuggestedChats = function () {
        this.globalService.suggestedChats.next({ availbleChats: this.availbleChats, suggestedChats: this.suggestedChats });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxSideBarComponent.prototype, "userLogin", void 0);
    BoxSideBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'box-side-bar',
            template: __webpack_require__(/*! ./box-side-bar.component.html */ "./src/app/box/box-side-bar/box-side-bar.component.html"),
            styles: [__webpack_require__(/*! ./box-side-bar.component.css */ "./src/app/box/box-side-bar/box-side-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], BoxSideBarComponent);
    return BoxSideBarComponent;
}());



/***/ }),

/***/ "./src/app/box/box-users-read-messenger/box-users-read-messenger.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/box/box-users-read-messenger/box-users-read-messenger.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.box-users-read-messenger {\r\n  display: inline-block;\r\n  width: 300px;\r\n  background-color: black;\r\n  border-radius: 20px;\r\n  color: white;\r\n  z-index: 10000;\r\n  position: fixed;\r\n  padding: 10px;\r\n  max-width: 400px;\r\n  max-height: 500px;\r\n  overflow: auto;\r\n}\r\n\r\n.box-users-read-messenger:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm94L2JveC11c2Vycy1yZWFkLW1lc3Nlbmdlci9ib3gtdXNlcnMtcmVhZC1tZXNzZW5nZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9ib3gvYm94LXVzZXJzLXJlYWQtbWVzc2VuZ2VyL2JveC11c2Vycy1yZWFkLW1lc3Nlbmdlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5ib3gtdXNlcnMtcmVhZC1tZXNzZW5nZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgei1pbmRleDogMTAwMDA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmJveC11c2Vycy1yZWFkLW1lc3Nlbmdlcjpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/box/box-users-read-messenger/box-users-read-messenger.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/box/box-users-read-messenger/box-users-read-messenger.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"{{CLASS_BOX_USERS_READ_MESSENGER}}\"\r\n     [ngStyle]=\"{top: styleBoxUsersReadMessenger.top + 'px', left: styleBoxUsersReadMessenger.left + 'px'}\">\r\n  <h2 class=\"text-center\">Số lượng {{readUsers.length}}</h2>\r\n  <div class=\"react-emoji-user m-1\" *ngFor=\"let readUser of readUsers\" (click)=\"detailUser(readUsers.id)\" >\r\n    <span class=\"w-25 text-center\">\r\n      <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg\" alt=\"IMG of Avatars\"\r\n           class=\"avatar img-fluid z-depth-1-half rounded-circle\">\r\n    </span>\r\n    <span class=\"w-75 text-left p-2\">{{readUser.username}}</span>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/box/box-users-read-messenger/box-users-read-messenger.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/box/box-users-read-messenger/box-users-read-messenger.component.ts ***!
  \************************************************************************************/
/*! exports provided: BoxUsersReadMessengerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxUsersReadMessengerComponent", function() { return BoxUsersReadMessengerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BoxUsersReadMessengerComponent = /** @class */ (function () {
    function BoxUsersReadMessengerComponent(cdRef) {
        this.cdRef = cdRef;
        this.CLASS_BOX_USERS_READ_MESSENGER = 'box-users-read-messenger';
        this.styleBoxUsersReadMessenger = {
            top: -1000,
            left: -1000
        };
    }
    BoxUsersReadMessengerComponent.prototype.checkClick = function (event) {
        if (event.target.classList.contains(this.CLASS_BOX_USERS_READ_MESSENGER) || $(event.target).parents("." + this.CLASS_BOX_USERS_READ_MESSENGER).length) {
        }
        else {
            this.hideBox();
        }
    };
    BoxUsersReadMessengerComponent.prototype.ngOnInit = function () {
        if ($bean.isNil(this.readUsers)) {
            this.readUsers = [];
        }
        if ($bean.isNil(this.triggerElementId)) {
            this.triggerElementId = '';
        }
        this.checkShowBox();
    };
    BoxUsersReadMessengerComponent.prototype.ngOnChanges = function (changes) {
        this.checkShowBox();
    };
    BoxUsersReadMessengerComponent.prototype.checkShowBox = function () {
        if (($bean.isNotEmpty(this.readUsers)) && ($bean.isNotEmpty(this.triggerElementId))) {
            this.setUpPosition();
        }
        else {
            this.hideBox();
        }
    };
    BoxUsersReadMessengerComponent.prototype.setUpPosition = function () {
        this.cdRef.detectChanges();
        var triggerElement = $("#" + this.triggerElementId);
        var triggerTop = triggerElement.offset().top;
        var triggerLeft = triggerElement.offset().left;
        var outerWidthTrigger = triggerElement.outerWidth();
        var outerHeightTrigger = triggerElement.outerHeight();
        var boxUsersReadMessenger = $('.' + this.CLASS_BOX_USERS_READ_MESSENGER);
        var outerWidthBoxUsersReadMessenger = boxUsersReadMessenger.outerWidth();
        var outerHeightBoxUsersReadMessenger = boxUsersReadMessenger.outerHeight();
        var boxUsersReadMessengerTop = triggerTop - 10 - outerHeightBoxUsersReadMessenger;
        var boxUsersReadMessengerLeft = triggerLeft + outerWidthTrigger / 2 - outerWidthBoxUsersReadMessenger;
        this.styleBoxUsersReadMessenger.top = boxUsersReadMessengerTop;
        this.styleBoxUsersReadMessenger.left = boxUsersReadMessengerLeft;
        console.log(this.styleBoxUsersReadMessenger);
    };
    BoxUsersReadMessengerComponent.prototype.hideBox = function () {
        this.styleBoxUsersReadMessenger.top = -1000;
        this.styleBoxUsersReadMessenger.left = -1000;
    };
    BoxUsersReadMessengerComponent.prototype.detailUser = function (userId) {
        this.hideBox();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxUsersReadMessengerComponent.prototype, "readUsers", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxUsersReadMessengerComponent.prototype, "triggerElementId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], BoxUsersReadMessengerComponent.prototype, "checkClick", null);
    BoxUsersReadMessengerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'box-users-read-messenger',
            template: __webpack_require__(/*! ./box-users-read-messenger.component.html */ "./src/app/box/box-users-read-messenger/box-users-read-messenger.component.html"),
            styles: [__webpack_require__(/*! ./box-users-read-messenger.component.css */ "./src/app/box/box-users-read-messenger/box-users-read-messenger.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], BoxUsersReadMessengerComponent);
    return BoxUsersReadMessengerComponent;
}());



/***/ }),

/***/ "./src/app/box/box-view-chats/box-view-chats.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/box/box-view-chats/box-view-chats.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JveC9ib3gtdmlldy1jaGF0cy9ib3gtdmlldy1jaGF0cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/box/box-view-chats/box-view-chats.component.html":
/*!******************************************************************!*\
  !*** ./src/app/box/box-view-chats/box-view-chats.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-row\" *ngFor=\"let chat of suggestedChats\">\r\n  <box-info-chat [chat]=\"chat\" (callBack)=\"chooseChat($event)\"\r\n                 [unReadMessengers]=\"statusUserChannels[chat.id]\"></box-info-chat>\r\n</div>\r\n<div class=\"text-right\" *ngIf=\"suggestedChats.length < availbleChats\">\r\n  <button class=\"btn btn-outline-blue\" (click)=\"getMoreChats()\">More</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/box/box-view-chats/box-view-chats.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/box/box-view-chats/box-view-chats.component.ts ***!
  \****************************************************************/
/*! exports provided: BoxViewChatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxViewChatsComponent", function() { return BoxViewChatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/global.service */ "./src/app/common/services/global.service.ts");





var BoxViewChatsComponent = /** @class */ (function () {
    function BoxViewChatsComponent(http, globalService, router) {
        this.http = http;
        this.globalService = globalService;
        this.router = router;
        this.bean = $bean;
        this.moreChats = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    BoxViewChatsComponent.prototype.ngOnInit = function () {
        if ($bean.isNil(this.suggestedChats)) {
            this.suggestedChats = [];
        }
        if ($bean.isNil(this.statusUserChannels)) {
            this.statusUserChannels = {};
        }
        if ($bean.isNil(this.availbleChats)) {
            this.availbleChats = 0;
        }
    };
    BoxViewChatsComponent.prototype.chooseChat = function (chat) {
        this.globalService.accessChat.next(chat);
    };
    BoxViewChatsComponent.prototype.getMoreChats = function () {
        this.moreChats.emit(null);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxViewChatsComponent.prototype, "suggestedChats", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxViewChatsComponent.prototype, "availbleChats", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxViewChatsComponent.prototype, "statusUserChannels", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], BoxViewChatsComponent.prototype, "moreChats", void 0);
    BoxViewChatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'box-view-chats',
            template: __webpack_require__(/*! ./box-view-chats.component.html */ "./src/app/box/box-view-chats/box-view-chats.component.html"),
            styles: [__webpack_require__(/*! ./box-view-chats.component.css */ "./src/app/box/box-view-chats/box-view-chats.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], BoxViewChatsComponent);
    return BoxViewChatsComponent;
}());



/***/ }),

/***/ "./src/app/box/box-view-contacts/box-view-contacts.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/box/box-view-contacts/box-view-contacts.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JveC9ib3gtdmlldy1jb250YWN0cy9ib3gtdmlldy1jb250YWN0cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/box/box-view-contacts/box-view-contacts.component.html":
/*!************************************************************************!*\
  !*** ./src/app/box/box-view-contacts/box-view-contacts.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-row\" *ngFor=\"let contact of suggestedContacts\">\r\n  <box-info-user [user]=\"contact\" (callBack)=\"chooseContact($event)\"></box-info-user>\r\n</div>\r\n<div class=\"row text-right\" *ngIf=\"suggestedContacts.length < (availbleContacts)\"\r\n     (click)=\"getMoreContacts()\"><b>More</b>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/box/box-view-contacts/box-view-contacts.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/box/box-view-contacts/box-view-contacts.component.ts ***!
  \**********************************************************************/
/*! exports provided: BoxViewContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxViewContactsComponent", function() { return BoxViewContactsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/global.service */ "./src/app/common/services/global.service.ts");





var BoxViewContactsComponent = /** @class */ (function () {
    function BoxViewContactsComponent(http, globalService, router) {
        this.http = http;
        this.globalService = globalService;
        this.router = router;
        // baseUrl = "https://chat.hyper.com:9999/";
        this.baseUrl = "http://chat.hyper.com:9000/";
        this.moreContacts = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    BoxViewContactsComponent.prototype.ngOnInit = function () {
        if ($bean.isNil(this.suggestedContacts)) {
            this.suggestedContacts = [];
        }
        if ($bean.isNil(this.availbleContacts)) {
            this.availbleContacts = 0;
        }
    };
    BoxViewContactsComponent.prototype.chooseContact = function (contact) {
        this.globalService.accessChat.next(contact);
    };
    BoxViewContactsComponent.prototype.getMoreContacts = function () {
        this.moreContacts.emit(null);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxViewContactsComponent.prototype, "suggestedContacts", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoxViewContactsComponent.prototype, "availbleContacts", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], BoxViewContactsComponent.prototype, "moreContacts", void 0);
    BoxViewContactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'box-view-contacts',
            template: __webpack_require__(/*! ./box-view-contacts.component.html */ "./src/app/box/box-view-contacts/box-view-contacts.component.html"),
            styles: [__webpack_require__(/*! ./box-view-contacts.component.css */ "./src/app/box/box-view-contacts/box-view-contacts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], BoxViewContactsComponent);
    return BoxViewContactsComponent;
}());



/***/ }),

/***/ "./src/app/box/box-view-notifications/box-view-notifications.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/box/box-view-notifications/box-view-notifications.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JveC9ib3gtdmlldy1ub3RpZmljYXRpb25zL2JveC12aWV3LW5vdGlmaWNhdGlvbnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/box/box-view-notifications/box-view-notifications.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/box/box-view-notifications/box-view-notifications.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-row\" *ngFor=\"let contact of suggestContacts\">\r\n  <box-info-user [user]=\"contact\" (callBack)=\"chooseContact($event)\"></box-info-user>\r\n</div>\r\n<div class=\"row text-right\" *ngIf=\"suggestContacts.length < (totalContacts -1)\" (click)=\"moreContacts()\"><b>More</b>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/box/box-view-notifications/box-view-notifications.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/box/box-view-notifications/box-view-notifications.component.ts ***!
  \********************************************************************************/
/*! exports provided: BoxViewNotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxViewNotificationsComponent", function() { return BoxViewNotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/global.service */ "./src/app/common/services/global.service.ts");





var BoxViewNotificationsComponent = /** @class */ (function () {
    function BoxViewNotificationsComponent(http, globalService, router) {
        this.http = http;
        this.globalService = globalService;
        this.router = router;
        // baseUrl = "https://chat.hyper.com:9999/";
        this.baseUrl = "http://chat.hyper.com:9000/";
        this.suggestContacts = [];
        this.totalContacts = 0;
        this.bean = $bean;
        this.DEFAULT_NUMBER_CONTACTS = 10;
        this.DEFAULT_OFFSET_CONTACT = 0;
    }
    BoxViewNotificationsComponent.prototype.ngOnInit = function () {
        this.listContacts(this.DEFAULT_NUMBER_CONTACTS, this.DEFAULT_OFFSET_CONTACT);
        this.countAllUsers();
    };
    BoxViewNotificationsComponent.prototype.countAllUsers = function () {
        var _this = this;
        var url = this.baseUrl + 'users/countAll';
        var form = {};
        this.http.post(url, form).subscribe(function (data) {
            _this.totalContacts = data['count'];
        });
    };
    BoxViewNotificationsComponent.prototype.chooseContact = function (contact) {
        this.globalService.accessChat.next(contact);
    };
    BoxViewNotificationsComponent.prototype.listContacts = function (number, offset) {
        var _this = this;
        var url = this.baseUrl + 'users/suggested';
        var form = {
            number: number,
            offset: offset
        };
        this.http.post(url, form).subscribe(function (data) {
            if ($bean.isNotEmpty(data)) {
                _this.suggestContacts = data;
            }
        });
    };
    BoxViewNotificationsComponent.prototype.getMoreContacts = function (number, offset) {
        var _this = this;
        var url = this.baseUrl + 'users/suggested';
        var form = {
            number: number,
            offset: offset
        };
        this.http.post(url, form).subscribe(function (data) {
            if ($bean.isNotEmpty(data)) {
                var tempData = [];
                tempData = data;
                for (var i = 0; i < tempData.length; i++) {
                    _this.suggestContacts.push(tempData[i]);
                }
            }
        });
    };
    BoxViewNotificationsComponent.prototype.moreContacts = function () {
        this.getMoreContacts(this.DEFAULT_NUMBER_CONTACTS, this.suggestContacts.length);
    };
    BoxViewNotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'box-view-notifications',
            template: __webpack_require__(/*! ./box-view-notifications.component.html */ "./src/app/box/box-view-notifications/box-view-notifications.component.html"),
            styles: [__webpack_require__(/*! ./box-view-notifications.component.css */ "./src/app/box/box-view-notifications/box-view-notifications.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], BoxViewNotificationsComponent);
    return BoxViewNotificationsComponent;
}());



/***/ }),

/***/ "./src/app/common/services/global.service.ts":
/*!***************************************************!*\
  !*** ./src/app/common/services/global.service.ts ***!
  \***************************************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var GlobalService = /** @class */ (function () {
    function GlobalService(http) {
        this.http = http;
        // baseUrl = "https://chat.hyper.com:9999/";
        // baseUrl = "http://chat.hyper.com:9000/";
        this.userLogin = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // public searchAll = new Subject<any>();
        // public searchGroup = new Subject<any>();
        // public searchChannels = new Subject<any>();
        // public searchValue = new Subject<any>();
        // public myChats = new Subject<any>();
        this.suggestContacts = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.suggestedChats = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.getMoreChats = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // public searchChatsAndContacts = new Subject<any>();
        this.infoContact = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.infoChat = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // public listSentRequest = new Subject<any>();
        // public listIncomeRequest = new Subject<any>();
        // public searchChats = new Subject<any>();
        // public searchPeople = new Subject<any>();
        // public notifications = new Subject<any>();
        this.newChannel = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.addChannel = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // public selectedRequest = new Subject<any>();
        // public changeOrderListChats = new Subject<Boolean>();
        this.addUserToChat = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dataShowReactEmoji = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dataShowUsersReadMessenger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // public activitiesUser = new Subject<any>();
        this.hasNewChannel = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.hasUpdatedChannel = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.hasDeletedChannel = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.hasNewMessenger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.hasUpdatedMessenger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.hasDeletedMessenger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.hasNewUserChannel = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.hasUpdatedUserChannel = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.hasDeletedUserChannel = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.hasNewReact = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.hasDeletedReact = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.accessChat = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.changeFocusChat = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.userUpdateMessenger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.hasForwardMessenger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    GlobalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], GlobalService);
    return GlobalService;
}());



/***/ }),

/***/ "./src/app/modal/modal-add-channel/modal-add-channel.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/modal/modal-add-channel/modal-add-channel.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsL21vZGFsLWFkZC1jaGFubmVsL21vZGFsLWFkZC1jaGFubmVsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modal/modal-add-channel/modal-add-channel.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modal/modal-add-channel/modal-add-channel.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"modalInitAddChannel\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n     aria-hidden=\"true\">\r\n  <div class=\"modal-dialog cascading-modal modal-avatar modal-sm\" role=\"document\">\r\n    <!--Content-->\r\n    <div class=\"modal-content\">\r\n\r\n      <!--Header-->\r\n      <div class=\"modal-header\">\r\n        <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20%281%29.jpg\" alt=\"avatar\"\r\n             class=\"avatar rounded-circle img-responsive\">\r\n      </div>\r\n      <!--Body-->\r\n      <div class=\"modal-body text-center mb-1\">\r\n\r\n        <h5 class=\"mt-1 mb-2\">Ảnh đại diện</h5>\r\n\r\n        <div class=\"md-form ml-0 mr-0\">\r\n          <input type=\"text\" [(ngModel)]=\"newChannel['title']\" type=\"text\" id=\"form29\"\r\n                 class=\"form-control form-control-sm validate ml-0\">\r\n          <label data-error=\"wrong\" data-success=\"right\" for=\"form29\" class=\"ml-0\">Nhập tên Chat</label>\r\n        </div>\r\n\r\n        <div class=\"text-center mt-4\">\r\n          <button class=\"btn btn-cyan mt-1\" (click)=\"showModalDetailAddChannel()\"> Chuyển tiếp <i\r\n            class=\"fas fa-sign-in ml-1\"></i></button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <!--/.Content-->\r\n  </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"modalDetailAddChannel\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n     aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-scrollable modal-notify modal-info\" role=\"document\" style=\"height: 500px\">\r\n    <!--Content-->\r\n    <div class=\"modal-content\">\r\n      <!--Header-->\r\n      <div class=\"modal-header\">\r\n        <p class=\"heading lead\">Thêm người dùng</p>\r\n\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\" class=\"white-text\">&times;</span>\r\n        </button>\r\n      </div>\r\n\r\n      <!--Body-->\r\n      <div class=\"modal-body\">\r\n        <!-- Large input -->\r\n        <div class=\"md-form form-lg\">\r\n          <input type=\"text\" class=\"form-control form-control-lg\">\r\n          <label>Tìm kiếm</label>\r\n        </div>\r\n        <hr>\r\n        <div>Người dùng đã chọn</div>\r\n        <div class=\"row small text-muted\" style=\"overflow: auto\">\r\n           <span *ngFor=\"let user of listUserSelected\" class=\"item-user\">\r\n             <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg\" alt=\"IMG of Avatars\"\r\n                  class=\"avatar img-fluid z-depth-1-half rounded-circle\">\r\n            <div style=\"height: 10px\"></div>\r\n             <p class=\"title mb-0\">{{user.email}}</p>\r\n           </span>\r\n        </div>\r\n        <hr>\r\n        <div>Danh sách người dùng</div>\r\n        <div *ngIf=\"bean.isNotEmpty(myContacts)\">Gợi ý</div>\r\n        <div class=\"row small text-muted\" *ngFor=\"let user of myContacts\">\r\n          <div class=\"col-2 text-center\">\r\n            <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg\" alt=\"IMG of Avatars\"\r\n                 class=\"avatar img-fluid z-depth-1-half rounded-circle\">\r\n            <div style=\"height: 10px\"></div>\r\n            <!--<p class=\"title mb-0\">{{user.email}}</p>-->\r\n            <!--<p class=\"text-muted \" style=\"font-size: 13px\">( {{user.userName}} )</p>-->\r\n          </div>\r\n\r\n          <div class=\"col-8 mt-3\">\r\n            <p>{{user.email}}</p>\r\n            <!--<p class=\"card-text\"><strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</strong></p>-->\r\n          </div>\r\n          <div class=\"col-2\">\r\n            <input type=\"checkbox\" (click)=\"toggleUser(user)\" [checked]=\"checkUserSelected(user)\">\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"bean.isNotEmpty(suggestPeople)\">Giới thiệu</div>\r\n        <div class=\"row small text-muted\" *ngFor=\"let user of suggestPeople\">\r\n          <div class=\"col-2 text-center\">\r\n            <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg\" alt=\"IMG of Avatars\"\r\n                 class=\"avatar img-fluid z-depth-1-half rounded-circle\">\r\n            <div style=\"height: 10px\"></div>\r\n            <!--<p class=\"title mb-0\">{{user.email}}</p>-->\r\n            <!--<p class=\"text-muted \" style=\"font-size: 13px\">( {{user.userName}} )</p>-->\r\n          </div>\r\n          <div class=\"col-8 mt-3\">\r\n            <p>{{user.email}}</p>\r\n            <!--<p class=\"card-text\"><strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</strong></p>-->\r\n          </div>\r\n          <div class=\"col-2\">\r\n            <input type=\"checkbox\" (click)=\"toggleUser(user)\" [checked]=\"checkUserSelected(user)\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--Footer-->\r\n      <div class=\"modal-footer justify-content-center\">\r\n        <a type=\"button\" class=\"btn btn-primary\" (click)=\"addChannel()\">Tạo Chat</a>\r\n        <a type=\"button\" class=\"btn btn-outline-primary waves-effect\" data-dismiss=\"modal\">Close</a>\r\n      </div>\r\n    </div>\r\n    <!--/.Content-->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modal/modal-add-channel/modal-add-channel.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modal/modal-add-channel/modal-add-channel.component.ts ***!
  \************************************************************************/
/*! exports provided: ModalAddChannelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalAddChannelComponent", function() { return ModalAddChannelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/global.service */ "./src/app/common/services/global.service.ts");





var ModalAddChannelComponent = /** @class */ (function () {
    function ModalAddChannelComponent(http, globalService, router) {
        this.http = http;
        this.globalService = globalService;
        this.router = router;
        this.DEFAULT_NUMBER_SUGESST = 20;
        this.DEFAULT_NUMBER_OFFSET = 0;
        // baseUrl = "https://chat.hyper.com:9999/";
        this.baseUrl = "http://chat.hyper.com:9000/";
        this.bean = $bean;
        this.listUserSelected = [];
        this.myContacts = [];
        this.suggestPeople = [];
        this.newChannel = {};
    }
    ModalAddChannelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.globalService.addChannel.subscribe(function (res) {
            _this.newChannel = res;
            _this.listUserSelected = [];
            if ($bean.isNotEmpty(res['members'])) {
                _this.getListUsersDefault(res['members']);
            }
            _this.listUserSuggest();
            _this.listContacts();
        });
    };
    ModalAddChannelComponent.prototype.getListUsersDefault = function (userIds) {
        var _this = this;
        if ($bean.isNotEmpty(userIds)) {
            for (var i = 0; i < userIds.length; i++) {
                var url = this.baseUrl + 'users/' + userIds[i];
                this.http.get(url).subscribe(function (user) {
                    if ($bean.isNotEmpty(user)) {
                        _this.listUserSelected.push(user);
                    }
                });
            }
        }
    };
    ModalAddChannelComponent.prototype.listMyContact = function () {
        var _this = this;
        var url = this.baseUrl + 'users/listMyContacts';
        // let url = this.baseUrl + 'users';
        var form = {
            number: this.DEFAULT_NUMBER_SUGESST,
            offset: this.DEFAULT_NUMBER_OFFSET
        };
        this.http.post(url, form).subscribe(function (data) {
            _this.myContacts = data;
        });
    };
    ModalAddChannelComponent.prototype.listUserSuggest = function () {
        var _this = this;
        var url = this.baseUrl + 'users/suggested';
        // let url = this.baseUrl + 'users';
        var form = {
            number: this.DEFAULT_NUMBER_SUGESST,
            offset: this.DEFAULT_NUMBER_OFFSET
        };
        this.http.post(url, form).subscribe(function (data) {
            if ($bean.isNotEmpty(data)) {
                _this.suggestPeople = data;
            }
        });
    };
    // Thêm người hoặc xóa người khi mới thêm kênh
    ModalAddChannelComponent.prototype.toggleUser = function (user) {
        if ($bean.isNotEmpty(this.listUserSelected)) {
            var index = this.listUserSelected.indexOf(user);
            if (index !== -1) {
                this.listUserSelected.splice(index, 1);
            }
            else {
                this.listUserSelected.push(user);
            }
        }
        else {
            this.listUserSelected.push(user);
        }
    };
    ModalAddChannelComponent.prototype.checkUserSelected = function (user) {
        var result = false;
        for (var i = 0; i < this.listUserSelected.length; i++) {
            if (user.id == this.listUserSelected[i]) {
                result = true;
                return result;
            }
        }
        return result;
    };
    // Tạo kênh
    ModalAddChannelComponent.prototype.addChannel = function () {
        var _this = this;
        $('#modalDetailAddChannel').modal('hide');
        this.newChannel['members'] = [];
        if ($bean.isNotEmpty(this.listUserSelected)) {
            for (var i = 0; i < this.listUserSelected.length; i++) {
                this.newChannel['members'].push(this.listUserSelected[i].id);
            }
        }
        var url = this.baseUrl + 'channels/addChat';
        var form = {
            title: this.newChannel.title,
            members: this.newChannel['members']
        };
        this.http.post(url, form).subscribe(function (data) {
            console.log('Add channel success ');
            console.log(data);
            // back home
            _this.globalService.newChannel.next(true);
        });
    };
    ModalAddChannelComponent.prototype.showModalDetailAddChannel = function () {
        $('#modalInitAddChannel').modal('hide');
        $('#modalDetailAddChannel').modal('show');
    };
    ModalAddChannelComponent.prototype.listContacts = function () {
        var _this = this;
        var url = this.baseUrl + 'users/suggested';
        var form = {
            number: this.DEFAULT_NUMBER_SUGESST,
            offset: this.DEFAULT_NUMBER_OFFSET
        };
        this.http.post(url, form).subscribe(function (data) {
            if ($bean.isNotEmpty(data)) {
                _this.myContacts = data;
            }
        });
    };
    ModalAddChannelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'modal-add-channel',
            template: __webpack_require__(/*! ./modal-add-channel.component.html */ "./src/app/modal/modal-add-channel/modal-add-channel.component.html"),
            styles: [__webpack_require__(/*! ./modal-add-channel.component.css */ "./src/app/modal/modal-add-channel/modal-add-channel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ModalAddChannelComponent);
    return ModalAddChannelComponent;
}());



/***/ }),

/***/ "./src/app/modal/modal-add-user-to-chat/modal-add-user-to-chat.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/modal/modal-add-user-to-chat/modal-add-user-to-chat.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsL21vZGFsLWFkZC11c2VyLXRvLWNoYXQvbW9kYWwtYWRkLXVzZXItdG8tY2hhdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modal/modal-add-user-to-chat/modal-add-user-to-chat.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/modal/modal-add-user-to-chat/modal-add-user-to-chat.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"modalDetailAddUserToChat\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n     aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-scrollable modal-notify modal-info\" role=\"document\" style=\"height: 500px\">\r\n    <!--Content-->\r\n    <div class=\"modal-content\">\r\n      <!--Header-->\r\n      <div class=\"modal-header\">\r\n        <p class=\"heading lead\">Thêm người dùng</p>\r\n\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\" class=\"white-text\">&times;</span>\r\n        </button>\r\n      </div>\r\n\r\n      <!--Body-->\r\n      <div class=\"modal-body\">\r\n        <!-- Large input -->\r\n        <div class=\"md-form form-lg\">\r\n          <input type=\"text\" class=\"form-control form-control-lg\">\r\n          <label>Tìm kiếm</label>\r\n        </div>\r\n        <hr>\r\n        <div>Người dùng đã chọn</div>\r\n        <div class=\"row small text-muted\" style=\"overflow: auto\">\r\n           <span *ngFor=\"let user of listUserSelected\" class=\"item-user\">\r\n             <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg\" alt=\"IMG of Avatars\"\r\n                  class=\"avatar img-fluid z-depth-1-half rounded-circle\">\r\n            <div style=\"height: 10px\"></div>\r\n             <!--<p class=\"title mb-0\">{{user.email}}</p>-->\r\n           </span>\r\n        </div>\r\n        <hr>\r\n        <div>Danh sách người dùng</div>\r\n        <div *ngIf=\"bean.isNotEmpty(suggestPeople)\">Giới thiệu</div>\r\n        <div class=\"row small text-muted\" *ngFor=\"let user of suggestPeople\">\r\n          <div class=\"col-2 text-center\">\r\n            <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg\" alt=\"IMG of Avatars\"\r\n                 class=\"avatar img-fluid z-depth-1-half rounded-circle\">\r\n            <div style=\"height: 10px\"></div>\r\n            <!--<p class=\"title mb-0\">{{user.email}}</p>-->\r\n            <!--<p class=\"text-muted \" style=\"font-size: 13px\">( {{user.userName}} )</p>-->\r\n          </div>\r\n          <div class=\"col-8 mt-3\">\r\n            <p>{{user.email}}</p>\r\n            <!--<p class=\"card-text\"><strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</strong></p>-->\r\n          </div>\r\n          <div class=\"col-2\">\r\n            <input type=\"checkbox\" (click)=\"toggleUser(user)\" [checked]=\"checkUserSelected(user)\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--Footer-->\r\n      <div class=\"modal-footer justify-content-center\">\r\n        <a type=\"button\" class=\"btn btn-primary\" (click)=\"addUser()\">Tạo Chat</a>\r\n        <a type=\"button\" class=\"btn btn-outline-primary waves-effect\" data-dismiss=\"modal\">Close</a>\r\n      </div>\r\n    </div>\r\n    <!--/.Content-->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modal/modal-add-user-to-chat/modal-add-user-to-chat.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modal/modal-add-user-to-chat/modal-add-user-to-chat.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ModalAddUserToChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalAddUserToChatComponent", function() { return ModalAddUserToChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/global.service */ "./src/app/common/services/global.service.ts");





var ModalAddUserToChatComponent = /** @class */ (function () {
    function ModalAddUserToChatComponent(http, globalService, router) {
        this.http = http;
        this.globalService = globalService;
        this.router = router;
        this.DEFAULT_NUMBER_SUGESST = 20;
        this.DEFAULT_NUMBER_OFFSET = 0;
        // baseUrl = "https://chat.hyper.com:9999/";
        this.baseUrl = "http://chat.hyper.com:9000/";
        this.channelId = '';
        this.bean = $bean;
        this.listUserSelected = [];
        this.suggestPeople = [];
    }
    ModalAddUserToChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.globalService.addUserToChat.subscribe(function (res) {
            if ($bean.isNotEmpty(res)) {
                _this.channelId = res['channelId'];
                _this.listUserSuggest();
            }
        });
    };
    ModalAddUserToChatComponent.prototype.listUserSuggest = function () {
        var _this = this;
        var url = this.baseUrl + 'users/suggestedByChannel';
        // let url = this.baseUrl + 'users';
        var form = {
            channelId: this.channelId,
            number: this.DEFAULT_NUMBER_SUGESST,
            offset: this.DEFAULT_NUMBER_OFFSET
        };
        this.http.post(url, form).subscribe(function (data) {
            if ($bean.isNotEmpty(data)) {
                _this.suggestPeople = data;
            }
        });
    };
    // Thêm người hoặc xóa người khi mới thêm kênh
    ModalAddUserToChatComponent.prototype.toggleUser = function (user) {
        if ($bean.isNotEmpty(this.listUserSelected)) {
            var index = this.listUserSelected.indexOf(user);
            if (index !== -1) {
                this.listUserSelected.splice(index, 1);
            }
            else {
                this.listUserSelected.push(user);
            }
        }
        else {
            this.listUserSelected.push(user);
        }
    };
    ModalAddUserToChatComponent.prototype.checkUserSelected = function (user) {
        var result = false;
        for (var i = 0; i < this.listUserSelected.length; i++) {
            if (user.id == this.listUserSelected[i]) {
                result = true;
                return result;
            }
        }
        return result;
    };
    // Tạo kênh
    ModalAddUserToChatComponent.prototype.addUser = function () {
        $('#modalDetailAddUserToChat').modal('hide');
        var url = this.baseUrl + 'users/addUsersToChat';
        if ($bean.isNotEmpty(this.listUserSelected)) {
            var userIds = [];
            for (var i = 0; i < this.listUserSelected.length; i++) {
                userIds.push(this.listUserSelected[i].id);
            }
            var form = {
                channelId: this.channelId,
                userIds: userIds
            };
            this.http.post(url, form).subscribe(function (data) {
                console.log('Add user to chat success ');
                console.log(data);
            });
        }
    };
    ModalAddUserToChatComponent.prototype.showmodalDetailAddUserToChat = function () {
        $('#modalInitAddChannel').modal('hide');
        $('#modalDetailAddUserToChat').modal('show');
        this.listUserSelected = [];
    };
    ModalAddUserToChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'modal-add-user-to-chat',
            template: __webpack_require__(/*! ./modal-add-user-to-chat.component.html */ "./src/app/modal/modal-add-user-to-chat/modal-add-user-to-chat.component.html"),
            styles: [__webpack_require__(/*! ./modal-add-user-to-chat.component.css */ "./src/app/modal/modal-add-user-to-chat/modal-add-user-to-chat.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ModalAddUserToChatComponent);
    return ModalAddUserToChatComponent;
}());



/***/ }),

/***/ "./src/app/modal/modal-box-chat/modal-box-chat.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/modal/modal-box-chat/modal-box-chat.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsL21vZGFsLWJveC1jaGF0L21vZGFsLWJveC1jaGF0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modal/modal-box-chat/modal-box-chat.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modal/modal-box-chat/modal-box-chat.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"modalBoxChat\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n     aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-scrollable modal-notify modal-info\" role=\"document\" style=\"height: 500px\">\r\n    <!--Content-->\r\n    <div class=\"modal-content\">\r\n      <!--Header-->\r\n      <div class=\"modal-header\">\r\n        <div class=\"heading lead\" (click)=\"text-center\">Thông tin</div>\r\n\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\" class=\"white-text\">&times;</span>\r\n        </button>\r\n      </div>\r\n\r\n      <!--Body-->\r\n      <div class=\"modal-body\">\r\n        <!--Header-->\r\n        <div class=\"text-center\">\r\n          <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20%281%29.jpg\" alt=\"avatar\"\r\n               class=\"avatar rounded-circle img-responsive\">\r\n        </div>\r\n        <div class=\"text-center\">\r\n          <!--<div class=\"md-form form-lg\">-->\r\n            <!--<input type=\"text\" class=\"form-control form-control-lg\" [(ngModel)]=\"cloneInfoChat.title\">-->\r\n            <!--<label *ngIf=\"bean.isNotEmpty(cloneInfoChat.title)\">Tên nhóm chat</label>-->\r\n          <!--</div>-->\r\n          <h3 class=\"text-primary\">{{cloneInfoChat.title}}</h3>\r\n          <span class=\"text-muted small\"> Được tạo bởi <span class=\"text-primary\">{{userCreatedChat.username}}</span> vào ngày {{cloneInfoChat.createdAt | date:'fullDate'}}</span>\r\n        </div>\r\n        <h4 class=\"row text-primary\">Thông tin về {{infoChat.title}}</h4>\r\n        <div class=\"infoDetail\">\r\n          <div class=\"info-item\" (click)=\"sendMessage()\">\r\n            <i class=\"far fa-comment-alt mr-3\"></i>\r\n            <span>Gửi tin nhắn</span>\r\n          </div>\r\n          <h4 class=\"row text-primary mt-2\">\r\n            Thành viên {{bean.isNotEmpty(members) ? (members.length + 1) : 1}}\r\n          </h4>\r\n          <div class=\"info-item\" (click)=\"addUserToChat()\">\r\n            <i class=\"fas fa-user-plus mr-3\"></i>\r\n            <span>Thêm thành viên</span>\r\n          </div>\r\n          <div class=\"row link chat-row\" *ngFor=\"let user of members\">\r\n            <div class=\"w-25 text-center\" *ngIf=\"userLogin.id != user.id\">\r\n              <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg\" alt=\"IMG of Avatars\"\r\n                   class=\"avatar img-fluid z-depth-1-half rounded-circle\">\r\n            </div>\r\n            <div class=\"w-75\">\r\n              <div class=\"info-item row\">\r\n                <span class=\"col text-muted\">{{user.username}}</span>\r\n                <div class=\"col text-right\" *ngIf=\"userLogin.id == userCreatedChat.id\">\r\n                  <button class=\"btn btn-danger btn-sm\" (click)=\"confirmRemoveUser(user)\">Xóa</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"info-item row\" (click)=\"toggleNotification()\">\r\n            <i class=\"fas fa-bell mr-3\"></i>\r\n            <div class=\"col text-muted\">Thông báo</div>\r\n            <div class=\"text-danger col text-right\">\r\n              <input type=\"checkbox\" [checked]=\"linkUserChannel['notification']\">\r\n            </div>\r\n          </div>\r\n          <div class=\"info-item\" (click)=\"confirmLeaveChat()\">\r\n            <i class=\"fas fa-user-times mr-3\"></i>\r\n            <span class=\"text-danger\">Rời khỏi nhóm</span>\r\n          </div>\r\n          <div class=\"info-item\" *ngIf=\"userLogin.id == userCreatedChat.id\" (click)=\"confirmDeleteChat()\">\r\n            <i class=\"fas fa-trash-alt mr-3\"></i>\r\n            <span class=\"text-danger\">Xóa cuộc trò chuyện</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--Footer-->\r\n      <div class=\"modal-footer justify-content-center\">\r\n        <a type=\"button\" class=\"btn btn-primary\" (click)=\"updateChat()\">Cập nhật</a>\r\n        <a type=\"button\" class=\"btn btn-outline-primary waves-effect\" data-dismiss=\"modal\">Đóng</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--Modal: modalConfirmDelete-->\r\n<div class=\"modal fade\" id=\"modalConfirmInChat\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n     aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm modal-danger\" role=\"document\">\r\n    <!--Content-->\r\n    <div class=\"modal-content text-center\">\r\n      <!--Header-->\r\n      <div class=\"modal-header d-flex justify-content-center\">\r\n        <p class=\"heading\">{{contentBoxConfirm.title}}</p>\r\n      </div>\r\n\r\n      <!--&lt;!&ndash;Body&ndash;&gt;-->\r\n      <!--<div class=\"modal-body\">-->\r\n\r\n        <!--<i class=\"fas fa-times fa-4x animated rotateIn\"></i>-->\r\n\r\n      <!--</div>-->\r\n\r\n      <!--Footer-->\r\n      <div class=\"modal-footer justify-content-center\">\r\n        <a class=\"btn  btn-outline-danger\" (click)=\"acceptConfirm()\">Đồng ý</a>\r\n        <a type=\"button\" class=\"btn  btn-danger waves-effect\" data-dismiss=\"modal\">Đóng</a>\r\n      </div>\r\n    </div>\r\n    <!--/.Content-->\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/modal/modal-box-chat/modal-box-chat.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modal/modal-box-chat/modal-box-chat.component.ts ***!
  \******************************************************************/
/*! exports provided: ModalBoxChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBoxChatComponent", function() { return ModalBoxChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/global.service */ "./src/app/common/services/global.service.ts");





var ModalBoxChatComponent = /** @class */ (function () {
    function ModalBoxChatComponent(http, globalService, router) {
        this.http = http;
        this.globalService = globalService;
        this.router = router;
        // baseUrl = "https://chat.hyper.com:9999/";
        this.baseUrl = "http://chat.hyper.com:9000/";
        this.userLogin = {};
        this.infoChat = {};
        this.cloneInfoChat = {};
        this.linkUserChannel = {};
        this.members = [];
        this.countMembers = 0;
        this.userCreatedChat = {};
        this.selectedUser = {};
        this.contentBoxConfirm = {};
        this.DELETE_CHAT = 'DELETE_CHAT';
        this.LEAVE_CHAT = 'LEAVE_CHAT';
        this.REMOVE_USER = 'REMOVE_USER';
        this.bean = $bean;
    }
    ModalBoxChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.globalService.infoChat.subscribe(function (res) {
            _this.infoChat = res['infoChat'];
            _this.cloneInfoChat = $bean.clone(_this.infoChat);
            _this.linkUserChannel = res['linkUserChannel'];
            _this.members = _this.infoChat['users'];
            if ($bean.isNotEmpty(_this.members)) {
                _this.countMembers = _this.members.length;
            }
            if ($bean.isNotEmpty(_this.infoChat) && $bean.isNotEmpty(_this.infoChat['users'])) {
                _this.getUserCreatedChat(_this.infoChat['createdBy']);
            }
        });
        this.globalService.userLogin.subscribe(function (res) {
            _this.userLogin = res;
        });
    };
    ModalBoxChatComponent.prototype.getUserCreatedChat = function (userId) {
        for (var i = 0; i < this.members.length; i++) {
            if (userId == this.members[i].id) {
                this.userCreatedChat = $bean.clone(this.members[i]);
                this.members.splice(i, 1);
            }
        }
    };
    ModalBoxChatComponent.prototype.removeUser = function (user) {
        var _this = this;
        var url = this.baseUrl + 'users/removeUser';
        var form = {
            userId: user.id,
            channelId: this.infoChat['id']
        };
        this.http.post(url, form).subscribe(function (data) {
            if ($bean.isNotEmpty(data)) {
                console.log('Remove user from chat success !');
                console.log(data);
                for (var i = 0; i < _this.members.length; i++) {
                    if (_this.members[i].id = data['userId']) {
                        _this.members.splice(i, 1);
                        break;
                    }
                }
            }
        });
    };
    ModalBoxChatComponent.prototype.leaveChat = function () {
        $('#modalBoxChat').modal('hide');
        var url = this.baseUrl + 'users/leaveChannel';
        var form = {
            channelId: this.infoChat['id']
        };
        this.http.post(url, form).subscribe(function (data) {
            if ($bean.isNotEmpty(data)) {
                console.log('Leave chat success !');
                console.log(data);
            }
        });
    };
    ModalBoxChatComponent.prototype.deleteChat = function () {
        $('#modalBoxChat').modal('hide');
        var url = this.baseUrl + 'users/deleteChannel';
        var form = {
            channelId: this.infoChat['id']
        };
        this.http.post(url, form).subscribe(function (data) {
            if ($bean.isNotEmpty(data)) {
                console.log('Delete chat success !');
                console.log(data);
            }
        });
    };
    ModalBoxChatComponent.prototype.addUserToChat = function () {
        $('#modalBoxChat').modal('hide');
        $('#modalDetailAddUserToChat').modal('show');
        // reset lại giá trị của đối tượng newChannel
        this.globalService.addUserToChat.next({ channelId: this.infoChat['id'] });
    };
    ModalBoxChatComponent.prototype.updateChat = function () {
        var url = this.baseUrl + 'channels/update';
        var updateChannel = {
            id: this.cloneInfoChat['id'],
            title: this.cloneInfoChat['title']
        };
        var form = {
            channel: updateChannel
        };
        this.http.post(url, form).subscribe(function (data) {
            if ($bean.isNotEmpty(data)) {
                $('#modalBoxChat').modal('hide');
                console.log('Update chat success !');
                console.log(data);
            }
        });
    };
    ModalBoxChatComponent.prototype.turnOnNotification = function () {
        var _this = this;
        var url = this.baseUrl + 'users/turnOnNotification';
        var form = {
            channelId: this.infoChat['id']
        };
        this.http.post(url, form).subscribe(function (data) {
            if ($bean.isNotEmpty(data)) {
                console.log('Delete chat success !');
                _this.linkUserChannel = data;
                console.log(data);
                //  Listen lại channel
            }
        });
    };
    ModalBoxChatComponent.prototype.turnOffNotification = function () {
        var _this = this;
        var url = this.baseUrl + 'users/turnOffNotification';
        var form = {
            channelId: this.infoChat['id']
        };
        this.http.post(url, form).subscribe(function (data) {
            if ($bean.isNotEmpty(data)) {
                console.log('Delete chat success !');
                _this.linkUserChannel = data;
                console.log(data);
                //  Listen lại channel
            }
        });
    };
    ModalBoxChatComponent.prototype.toggleNotification = function () {
        if (this.linkUserChannel['notification']) {
            this.turnOffNotification();
        }
        else {
            this.turnOnNotification();
        }
    };
    ModalBoxChatComponent.prototype.sendMessage = function () {
        $('#modalBoxChat').modal('hide');
        $('#inputSendMessage').focus();
    };
    ModalBoxChatComponent.prototype.acceptConfirm = function () {
        switch (this.contentBoxConfirm.action) {
            case this.DELETE_CHAT:
                this.deleteChat();
                break;
            case this.LEAVE_CHAT:
                this.leaveChat();
                break;
            case this.REMOVE_USER:
                this.removeUser(this.selectedUser);
                break;
            default:
                console.log('Finish confirm !');
        }
        $('#modalConfirmInChat').modal('hide');
    };
    ModalBoxChatComponent.prototype.confirmLeaveChat = function () {
        $('#modalConfirmInChat').modal('show');
        this.contentBoxConfirm = {};
        this.contentBoxConfirm = {
            title: 'Bạn muốn rời khỏi nhóm ?',
            action: this.LEAVE_CHAT
        };
    };
    ModalBoxChatComponent.prototype.confirmDeleteChat = function () {
        $('#modalConfirmInChat').modal('show');
        this.contentBoxConfirm = {};
        this.contentBoxConfirm = {
            title: 'Bạn muốn xóa nhóm chat ?',
            action: this.DELETE_CHAT
        };
    };
    ModalBoxChatComponent.prototype.confirmRemoveUser = function (user) {
        $('#modalConfirmInChat').modal('show');
        this.contentBoxConfirm = {};
        this.selectedUser = user;
        this.contentBoxConfirm = {
            title: 'Bạn muốn xóa ' + user.username + ' ra khỏi nhóm ?',
            action: this.REMOVE_USER
        };
    };
    ModalBoxChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'modal-box-chat',
            template: __webpack_require__(/*! ./modal-box-chat.component.html */ "./src/app/modal/modal-box-chat/modal-box-chat.component.html"),
            styles: [__webpack_require__(/*! ./modal-box-chat.component.css */ "./src/app/modal/modal-box-chat/modal-box-chat.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ModalBoxChatComponent);
    return ModalBoxChatComponent;
}());



/***/ }),

/***/ "./src/app/modal/modal-box-contact/modal-box-contact.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/modal/modal-box-contact/modal-box-contact.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsL21vZGFsLWJveC1jb250YWN0L21vZGFsLWJveC1jb250YWN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modal/modal-box-contact/modal-box-contact.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modal/modal-box-contact/modal-box-contact.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"modalBoxContact\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n     aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-scrollable modal-notify modal-info\" role=\"document\" style=\"height: 500px\">\r\n    <!--Content-->\r\n    <div class=\"modal-content\">\r\n      <!--Header-->\r\n      <div class=\"modal-header\">\r\n        <div class=\"heading lead\" (click)=\"text-center\">Thông tin</div>\r\n\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\" class=\"white-text\">&times;</span>\r\n        </button>\r\n      </div>\r\n\r\n      <!--Body-->\r\n      <div class=\"modal-body\">\r\n        <!--Header-->\r\n        <div class=\"text-center\">\r\n          <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20%281%29.jpg\" alt=\"avatar\"\r\n               class=\"avatar rounded-circle img-responsive\">\r\n        </div>\r\n        <div class=\"text-center\">\r\n          <h3>{{infoContact.username}}</h3>\r\n        </div>\r\n        <div class=\"row text-primary\">Thông tin về {{infoContact.username}}</div>\r\n        <div class=\"infoDetail\">\r\n          <div class=\"info-item\" (click)=\"sendMessage()\">\r\n            <i class=\"far fa-comment-alt mr-3\"></i>\r\n            <span>Gửi tin nhắn</span>\r\n          </div>\r\n          <div class=\"info-item\" (click)=\"addNewGroup()\">\r\n            <i class=\"fas fa-users mr-3\"></i>\r\n            <span>Tạo nhóm mới với {{infoContact.username}}</span>\r\n          </div>\r\n          <div class=\"info-item\" (click)=\"blockContact(infoContact.id)\">\r\n            <i class=\"fas fa-ban mr-3\"></i>\r\n            <span class=\"text-danger\">Chặn {{infoContact.username}}</span>\r\n          </div>\r\n          <div class=\"info-item\" *ngIf=\"linkUserChannel['isAdmin']\" (click)=\"deleteChat()\">\r\n            <i class=\"fas fa-trash-alt mr-3\"></i>\r\n            <span class=\"text-danger\">Xóa cuộc trò chuyện</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!--Modal: modalConfirmDelete-->\r\n<div class=\"modal fade\" id=\"modalConfirmInContact\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n     aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm modal-danger\" role=\"document\">\r\n    <!--Content-->\r\n    <div class=\"modal-content text-center\">\r\n      <!--Header-->\r\n      <div class=\"modal-header d-flex justify-content-center\">\r\n        <p class=\"heading\">{{contentBoxConfirm.title}}</p>\r\n      </div>\r\n\r\n      <!--&lt;!&ndash;Body&ndash;&gt;-->\r\n      <!--<div class=\"modal-body\">-->\r\n\r\n      <!--<i class=\"fas fa-times fa-4x animated rotateIn\"></i>-->\r\n\r\n      <!--</div>-->\r\n\r\n      <!--Footer-->\r\n      <div class=\"modal-footer justify-content-center\">\r\n        <a class=\"btn  btn-outline-danger\" (click)=\"acceptConfirm()\">Đồng ý</a>\r\n        <a type=\"button\" class=\"btn  btn-danger waves-effect\" data-dismiss=\"modal\">Đóng</a>\r\n      </div>\r\n    </div>\r\n    <!--/.Content-->\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/modal/modal-box-contact/modal-box-contact.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modal/modal-box-contact/modal-box-contact.component.ts ***!
  \************************************************************************/
/*! exports provided: ModalBoxContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBoxContactComponent", function() { return ModalBoxContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/global.service */ "./src/app/common/services/global.service.ts");





var ModalBoxContactComponent = /** @class */ (function () {
    function ModalBoxContactComponent(http, globalService, router) {
        this.http = http;
        this.globalService = globalService;
        this.router = router;
        // baseUrl = "https://chat.hyper.com:9999/";
        this.baseUrl = "http://chat.hyper.com:9000/";
        this.infoContact = {};
        this.contentBoxConfirm = {};
        this.linkUserChannel = {};
        this.ACTION_BLOCK_USER = 'ACTION_BLOCK_USER';
        this.ACTION_DELETE_CHAT = 'ACTION_DELETE_CHAT';
        this.bean = $bean;
    }
    ModalBoxContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.globalService.infoContact.subscribe(function (res) {
            _this.infoContact = res['infoContact'];
            _this.linkUserChannel = res['linkUserChannel'];
        });
    };
    ModalBoxContactComponent.prototype.blockContact = function (userId) {
        $('#modalBoxContact').modal('hide');
        var url = this.baseUrl + 'users/blockContact';
        var form = {
            userId: userId
        };
        // this.http.post(url, form).subscribe(data => {
        //   if ($bean.isNotEmpty(data)) {
        //     console.log('Remove user from chat success !');
        //     console.log(data);
        //   }
        // })
    };
    ModalBoxContactComponent.prototype.deleteChat = function () {
        var _this = this;
        $('#modalBoxContact').modal('hide');
        var url = this.baseUrl + 'users/deleteChannel';
        var form = {
            channelId: this.linkUserChannel['channelId']
        };
        this.http.post(url, form).subscribe(function (data) {
            if ($bean.isNotEmpty(data)) {
                console.log('Delete chat success !');
                _this.globalService.newChannel.next(true);
                console.log(data);
            }
        });
    };
    ModalBoxContactComponent.prototype.addNewGroup = function () {
        $('#modalBoxContact').modal('hide');
        $('#modalInitAddChannel').modal('show');
        // reset lại giá trị của đối tượng newChannel
        this.globalService.addChannel.next({ members: [this.infoContact['id']] });
    };
    ModalBoxContactComponent.prototype.sendMessage = function () {
        $('#modalBoxContact').modal('hide');
        $('#inputSendMessage').focus();
    };
    ModalBoxContactComponent.prototype.acceptConfirm = function () {
        switch (this.contentBoxConfirm.action) {
            case this.ACTION_DELETE_CHAT:
                this.deleteChat();
                break;
            case this.ACTION_BLOCK_USER:
                this.blockContact(this.infoContact['id']);
                break;
            default:
                console.log('Finish confirm !');
        }
        $('#modalConfirmInContact').modal('hide');
    };
    ModalBoxContactComponent.prototype.confirmBlockUser = function () {
        $('#modalConfirmInContact').modal('show');
        this.contentBoxConfirm = {};
        this.contentBoxConfirm = {
            title: 'Bạn muốn chặn ' + this.infoContact.username,
            action: this.ACTION_BLOCK_USER
        };
    };
    ModalBoxContactComponent.prototype.confirmDeleteChat = function () {
        $('#modalConfirmInContact').modal('show');
        this.contentBoxConfirm = {};
        this.contentBoxConfirm = {
            title: 'Bạn muốn xóa cuộc trò chuyện ?',
            action: this.ACTION_DELETE_CHAT
        };
    };
    ModalBoxContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'modal-box-contact',
            template: __webpack_require__(/*! ./modal-box-contact.component.html */ "./src/app/modal/modal-box-contact/modal-box-contact.component.html"),
            styles: [__webpack_require__(/*! ./modal-box-contact.component.css */ "./src/app/modal/modal-box-contact/modal-box-contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ModalBoxContactComponent);
    return ModalBoxContactComponent;
}());



/***/ }),

/***/ "./src/app/modal/modal-box-gallery/modal-box-gallery.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/modal/modal-box-gallery/modal-box-gallery.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsL21vZGFsLWJveC1nYWxsZXJ5L21vZGFsLWJveC1nYWxsZXJ5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modal/modal-box-gallery/modal-box-gallery.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modal/modal-box-gallery/modal-box-gallery.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade right\" id=\"galleryModalBox\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n     aria-hidden=\"true\" data-backdrop=\"false\" style=\"background-color: rgb(192,192,192, 0.5);\">\r\n  <div class=\"modal-dialog modal-full-height modal-right modal-notify modal-info\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <!--Header-->\r\n      <div class=\"modal-header\">\r\n        <p class=\"heading lead\">Tệp đính kèm\r\n        </p>\r\n\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\" class=\"white-text\">×</span>\r\n        </button>\r\n      </div>\r\n\r\n      <!--Body-->\r\n      <div class=\"modal-body\">\r\n        <div class=\"text-center\">\r\n          <i class=\"far fa-file-alt fa-4x link mb-3 animated rotateIn\"></i>\r\n          <p>\r\n            <strong>Thêm tài liệu</strong>\r\n          </p>\r\n        </div>\r\n        <div class=\"row md-form ml-0 mr-0\">\r\n          <input type=\"text\" type=\"text\" id=\"form29\"\r\n                 class=\"col-8 form-control form-control-sm validate ml-0\">\r\n          <label data-error=\"wrong\" data-success=\"right\" for=\"form29\" class=\"ml-0\">Tìm kiếm</label>\r\n          <span class=\"fa-2x link\"><i class=\"fas fa-search text-primary\"></i></span>\r\n        </div>\r\n        <hr>\r\n        <p class=\"text-center\">\r\n          <strong>Danh sách</strong>\r\n        </p>\r\n        <div class=\"row\" *ngFor=\"let file of listFile\">\r\n          <div class=\"row text-left m-2\">\r\n            <div class=\"gallery-file\">Thông tin về link Thông tin về linkThông tin về linkThông tin về linkThông tin về\r\n              linkThông tin về\r\n              linkThông tin về linkThông tin về linkThông tin về linkThông tin về linkThông tin về linkThông tin về\r\n              linkThông tin về link\r\n              <a href=\"#\">Link</a></div>\r\n          </div>\r\n          <div class=\"row text-left m-2\">\r\n            <div class=\"gallery-file\">Thông tin về link Thông tin</div>\r\n            <div class=\"col-2\"><i class=\"link fas fa-file-download\"></i></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modal/modal-box-gallery/modal-box-gallery.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modal/modal-box-gallery/modal-box-gallery.component.ts ***!
  \************************************************************************/
/*! exports provided: ModalBoxGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBoxGalleryComponent", function() { return ModalBoxGalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/global.service */ "./src/app/common/services/global.service.ts");





var ModalBoxGalleryComponent = /** @class */ (function () {
    function ModalBoxGalleryComponent(http, globalService, router) {
        this.http = http;
        this.globalService = globalService;
        this.router = router;
        this.bean = $bean;
        this.listFile = [];
    }
    ModalBoxGalleryComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < 20; i++) {
            this.listFile.push(i);
        }
    };
    ModalBoxGalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'modal-box-gallery',
            template: __webpack_require__(/*! ./modal-box-gallery.component.html */ "./src/app/modal/modal-box-gallery/modal-box-gallery.component.html"),
            styles: [__webpack_require__(/*! ./modal-box-gallery.component.css */ "./src/app/modal/modal-box-gallery/modal-box-gallery.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ModalBoxGalleryComponent);
    return ModalBoxGalleryComponent;
}());



/***/ }),

/***/ "./src/app/modal/modal-box-members/modal-box-members.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/modal/modal-box-members/modal-box-members.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsL21vZGFsLWJveC1tZW1iZXJzL21vZGFsLWJveC1tZW1iZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modal/modal-box-members/modal-box-members.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modal/modal-box-members/modal-box-members.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modal/modal-box-members/modal-box-members.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modal/modal-box-members/modal-box-members.component.ts ***!
  \************************************************************************/
/*! exports provided: ModalBoxMembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBoxMembersComponent", function() { return ModalBoxMembersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/global.service */ "./src/app/common/services/global.service.ts");





var ModalBoxMembersComponent = /** @class */ (function () {
    function ModalBoxMembersComponent(http, globalService, router) {
        this.http = http;
        this.globalService = globalService;
        this.router = router;
        // baseUrl = "https://chat.hyper.com:9999/";
        this.baseUrl = "http://chat.hyper.com:9000/";
        this.bean = $bean;
    }
    ModalBoxMembersComponent.prototype.ngOnInit = function () {
    };
    ModalBoxMembersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'modal-box-members',
            template: __webpack_require__(/*! ./modal-box-members.component.html */ "./src/app/modal/modal-box-members/modal-box-members.component.html"),
            styles: [__webpack_require__(/*! ./modal-box-members.component.css */ "./src/app/modal/modal-box-members/modal-box-members.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ModalBoxMembersComponent);
    return ModalBoxMembersComponent;
}());



/***/ }),

/***/ "./src/app/modal/modal-confirm-logout/modal-confirm-logout.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/modal/modal-confirm-logout/modal-confirm-logout.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsL21vZGFsLWNvbmZpcm0tbG9nb3V0L21vZGFsLWNvbmZpcm0tbG9nb3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modal/modal-confirm-logout/modal-confirm-logout.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/modal/modal-confirm-logout/modal-confirm-logout.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modal/modal-confirm-logout/modal-confirm-logout.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modal/modal-confirm-logout/modal-confirm-logout.component.ts ***!
  \******************************************************************************/
/*! exports provided: ModalConfirmLogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalConfirmLogoutComponent", function() { return ModalConfirmLogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/global.service */ "./src/app/common/services/global.service.ts");





var ModalConfirmLogoutComponent = /** @class */ (function () {
    function ModalConfirmLogoutComponent(http, globalService, router) {
        this.http = http;
        this.globalService = globalService;
        this.router = router;
        // baseUrl = "https://chat.hyper.com:9999/";
        this.baseUrl = "http://chat.hyper.com:9000/";
    }
    ModalConfirmLogoutComponent.prototype.ngOnInit = function () {
    };
    ModalConfirmLogoutComponent.prototype.logout = function () {
        var _this = this;
        var url = this.baseUrl + 'logout';
        this.http.get(url).subscribe(function (res) {
            location.href = _this.baseUrl;
        });
    };
    ModalConfirmLogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'modal-confirm-logout',
            template: __webpack_require__(/*! ./modal-confirm-logout.component.html */ "./src/app/modal/modal-confirm-logout/modal-confirm-logout.component.html"),
            styles: [__webpack_require__(/*! ./modal-confirm-logout.component.css */ "./src/app/modal/modal-confirm-logout/modal-confirm-logout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ModalConfirmLogoutComponent);
    return ModalConfirmLogoutComponent;
}());



/***/ }),

/***/ "./src/app/modal/modal-forward-messenger/modal-forward-messenger.css":
/*!***************************************************************************!*\
  !*** ./src/app/modal/modal-forward-messenger/modal-forward-messenger.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".forward-messenger-container {\r\n  padding: 10px;\r\n  border: #0b51c5 1px solid;\r\n  border-radius: 20px;\r\n  background-color: lightgray;\r\n}\r\n\r\n.message-file {\r\n  display: inline-block;\r\n  position: relative;\r\n  border-radius: 20px;\r\n  background: #17a3a9;\r\n  padding: 10px;\r\n  width: 200px;\r\n  height: 160px;\r\n  opacity: 0.8;\r\n}\r\n\r\n.attach-messenger input {\r\n  overflow: visible;\r\n  padding: 10px;\r\n  width: 100%;\r\n  border-radius: 10px;\r\n  outline: none;\r\n  border: none;\r\n  background-color: lightgray;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWwvbW9kYWwtZm9yd2FyZC1tZXNzZW5nZXIvbW9kYWwtZm9yd2FyZC1tZXNzZW5nZXIuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFHQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsWUFBWTtFQUNaLDJCQUEyQjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL21vZGFsL21vZGFsLWZvcndhcmQtbWVzc2VuZ2VyL21vZGFsLWZvcndhcmQtbWVzc2VuZ2VyLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3J3YXJkLW1lc3Nlbmdlci1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAjMGI1MWM1IDFweCBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxufVxyXG5cclxuLm1lc3NhZ2UtZmlsZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6ICMxN2EzYTk7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAxNjBweDtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcblxyXG4uYXR0YWNoLW1lc3NlbmdlciBpbnB1dCB7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/modal/modal-forward-messenger/modal-forward-messenger.html":
/*!****************************************************************************!*\
  !*** ./src/app/modal/modal-forward-messenger/modal-forward-messenger.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"modalBoxForward\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n     aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-scrollable modal-notify modal-info\" role=\"document\" style=\"height: 500px\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <div class=\"heading lead text-center\">Chuyển tiếp tin nhắn</div>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\" class=\"white-text\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"forward-messenger-container\">\r\n          <div class=\"box-messenger\">\r\n            <div class=\"text-center\">\r\n              <div class=\"info-message\">\r\n                <div class=\"extra-info small text-muted\">\r\n                  <span class=\"username\">{{user.username}}</span>\r\n                  <span>, &nbsp;</span>\r\n                  <span>{{messenger.createdAt | date:'shortTime'}}</span>\r\n                </div>\r\n                <div class=\"content-message\">\r\n                  <div *ngIf=\"(messenger.type == TYPE_MESSENGER_TEXT)\" [id]=\"'item-message' + '-' + messenger.id\"\r\n                       class=\"text message-left\">{{messenger.message}}\r\n                  </div>\r\n                  <div *ngIf=\"(messenger.type == TYPE_MESSENGER_IMAGE)\" [id]=\"'item-message' + '-' + messenger.id\"\r\n                       class=\"message-file\" (click)=\"linkExternalFile('preview' + '/' + messenger.path)\">\r\n                    <img class=\"message-img\" [src]=\"'preview' + '/' + messenger.path\"\r\n                         [alt]=\"messenger.message\">\r\n                  </div>\r\n                  <div *ngIf=\"(messenger.type == TYPE_MESSENGER_FILE)\" [id]=\"'item-message' + '-' + messenger.id\"\r\n                       class=\"message-file\"\r\n                       (click)=\"linkExternalFile('preview' + '/' + messenger.path)\">\r\n                    <div class=\"message-title\">{{messenger.message}}</div>\r\n                    <div class=\"text-muted small\">Size : {{messenger.fileSize | printData}}</div>\r\n                    <div class=\"text-muted small\">Type : {{messenger.fileExtension}}</div>\r\n                    <div class=\"file\">\r\n                      <i class=\"fas fa-file\"></i>\r\n                      <span class=\"m-2\">File</span>\r\n                    </div>\r\n                    <hr style=\"border: 1px white solid\">\r\n                    <div class=\"text-center\"><a class=\"item-download\"\r\n                                                [href]=\"'attachments' + '/' + messenger.path\"><strong>Tải\r\n                      xuống</strong></a></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <hr>\r\n          <div class=\"attach-messenger\">\r\n            <input type=\"text\" [(ngModel)]=\"noteAttached\" placeholder=\"Nhập tin nhắn gửi kèm\">\r\n          </div>\r\n        </div>\r\n        <box-input-search class=\"input-search-chats pt-2\" (callBack)=\"searchChats($event)\"></box-input-search>\r\n        <h4 class=\"pt-2\">Suggested Chats</h4>\r\n        <div class=\"row link chat-row\" *ngFor=\"let chat of cloneSuggestedChats\">\r\n          <div class=\"w-25 text-center\">\r\n            <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg\" alt=\"IMG of Avatars\"\r\n                 class=\"avatar img-fluid z-depth-1-half rounded-circle\">\r\n          </div>\r\n          <div class=\"w-75\">\r\n            <div class=\"info-item row\">\r\n              <span class=\"col text-muted\">{{chat.title}}</span>\r\n              <div class=\"col text-right\">\r\n                <button *ngIf=\"bean.isEmpty(chat['isSent'])\" class=\"btn btn-primary btn-sm\"\r\n                        (click)=\"sendMessenger(messenger, chat.id)\">\r\n                  Gửi\r\n                </button>\r\n                <button *ngIf=\"bean.isNotEmpty(chat['isSent'])\" class=\"btn btn-primary btn-sm\">\r\n                  Đã gửi\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"text-right\" *ngIf=\"cloneSuggestedChats.length < availbleChats\">\r\n          <button class=\"btn btn-outline-blue\" (click)=\"moreChats()\">More</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer justify-content-center\">\r\n        <a type=\"button\" class=\"btn btn-primary\">Cập nhật</a>\r\n        <a type=\"button\" class=\"btn btn-outline-primary waves-effect\" data-dismiss=\"modal\">Đóng</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modal/modal-forward-messenger/modal-forward-messenger.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modal/modal-forward-messenger/modal-forward-messenger.ts ***!
  \**************************************************************************/
/*! exports provided: ModalForwardMessenger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalForwardMessenger", function() { return ModalForwardMessenger; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/global.service */ "./src/app/common/services/global.service.ts");





var ModalForwardMessenger = /** @class */ (function () {
    function ModalForwardMessenger(http, globalService, router) {
        this.http = http;
        this.globalService = globalService;
        this.router = router;
        // baseUrl = "https://chat.hyper.com:9999/";
        this.baseUrl = "http://chat.hyper.com:9000/";
        this.TYPE_MESSENGER_TEXT = 'TEXT';
        this.TYPE_MESSENGER_IMAGE = 'IMAGE';
        this.TYPE_MESSENGER_LINK = 'LINK';
        this.TYPE_MESSENGER_FILE = 'FILE';
        this.suggestedChats = [];
        this.availbleChats = 0;
        this.cloneSuggestedChats = [];
        this.messenger = [];
        this.user = {};
        this.noteAttached = '';
        this.searchValue = '';
        this.bean = $bean;
    }
    ModalForwardMessenger.prototype.ngOnInit = function () {
        var _this = this;
        this.globalService.hasForwardMessenger.subscribe(function (res) {
            if ($bean.isNotEmpty(res)) {
                _this.messenger = res;
                _this.user = _this.messenger['user'];
                _this.noteAttached = '';
                _this.searchValue = '';
                _this.cloneSuggestedChats = $bean.clone(_this.suggestedChats);
            }
        });
        this.globalService.suggestedChats.subscribe(function (res) {
            if ($bean.isNotEmpty(res)) {
                _this.suggestedChats = res['suggestedChats'];
                _this.availbleChats = res['availbleChats'];
                _this.searchChats(_this.searchValue);
            }
        });
    };
    ModalForwardMessenger.prototype.sendMessenger = function (messenger, channelId) {
        var _this = this;
        var cloneMessenger = $bean.clone(messenger);
        var $this = this;
        delete cloneMessenger['id'];
        var url = this.baseUrl + 'messengers/insert';
        cloneMessenger['channelId'] = channelId;
        this.http.post(url, cloneMessenger).subscribe(function (data) {
            if ($bean.isNotEmpty(data) && $bean.isNotEmpty(_this.cloneSuggestedChats)) {
                for (var i = 0; i < _this.cloneSuggestedChats.length; i++) {
                    if (data['channelId'] == _this.cloneSuggestedChats[i].id) {
                        _this.cloneSuggestedChats[i]['isSent'] = true;
                        $this.sendAttachedMessenger(channelId);
                    }
                }
            }
        });
    };
    ModalForwardMessenger.prototype.sendAttachedMessenger = function (channelId) {
        if ($bean.isNotEmpty(this.noteAttached)) {
            var url = this.baseUrl + 'messengers/insert';
            var attachedMessenger = {
                message: this.noteAttached,
                channelId: channelId
            };
            this.http.post(url, attachedMessenger).subscribe(function (data) {
                console.log('Insert Attached');
                console.log(data);
            });
        }
    };
    ModalForwardMessenger.prototype.linkExternalFile = function (path) {
        var url = this.baseUrl + path;
        window.open(url, "_blank");
    };
    ModalForwardMessenger.prototype.searchChats = function (value) {
        this.cloneSuggestedChats = [];
        this.searchValue = value;
        if ($bean.isNotEmpty(this.suggestedChats)) {
            for (var i = 0; i < this.suggestedChats.length; i++) {
                if ($bean.textContains(this.suggestedChats[i]['title'], this.searchValue, true)) {
                    this.cloneSuggestedChats.push(this.suggestedChats[i]);
                }
            }
        }
    };
    ModalForwardMessenger.prototype.moreChats = function () {
        this.globalService.getMoreChats.next(true);
    };
    ModalForwardMessenger = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'modal-forward-messenger',
            template: __webpack_require__(/*! ./modal-forward-messenger.html */ "./src/app/modal/modal-forward-messenger/modal-forward-messenger.html"),
            styles: [__webpack_require__(/*! ./modal-forward-messenger.css */ "./src/app/modal/modal-forward-messenger/modal-forward-messenger.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ModalForwardMessenger);
    return ModalForwardMessenger;
}());



/***/ }),

/***/ "./src/app/modal/modal-info-summary/modal-info-summary.compoent.css":
/*!**************************************************************************!*\
  !*** ./src/app/modal/modal-info-summary/modal-info-summary.compoent.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsL21vZGFsLWluZm8tc3VtbWFyeS9tb2RhbC1pbmZvLXN1bW1hcnkuY29tcG9lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modal/modal-info-summary/modal-info-summary.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modal/modal-info-summary/modal-info-summary.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modal/modal-info-summary/modal-info-summary.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modal/modal-info-summary/modal-info-summary.component.ts ***!
  \**************************************************************************/
/*! exports provided: ModalInfoSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalInfoSummaryComponent", function() { return ModalInfoSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/global.service */ "./src/app/common/services/global.service.ts");





var ModalInfoSummaryComponent = /** @class */ (function () {
    function ModalInfoSummaryComponent(http, globalService, router) {
        this.http = http;
        this.globalService = globalService;
        this.router = router;
        this.userLogin = {};
    }
    ModalInfoSummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.globalService.userLogin.subscribe(function (res) {
            _this.userLogin = res;
        });
    };
    ModalInfoSummaryComponent.prototype.showProfile = function () {
    };
    ModalInfoSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'modal-info-summary',
            template: __webpack_require__(/*! ./modal-info-summary.component.html */ "./src/app/modal/modal-info-summary/modal-info-summary.component.html"),
            styles: [__webpack_require__(/*! ./modal-info-summary.compoent.css */ "./src/app/modal/modal-info-summary/modal-info-summary.compoent.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ModalInfoSummaryComponent);
    return ModalInfoSummaryComponent;
}());



/***/ }),

/***/ "./src/app/modal/modal-update-profile/modal-update-profile.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/modal/modal-update-profile/modal-update-profile.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsL21vZGFsLXVwZGF0ZS1wcm9maWxlL21vZGFsLXVwZGF0ZS1wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modal/modal-update-profile/modal-update-profile.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/modal/modal-update-profile/modal-update-profile.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"modalViewChatmeProfile\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n     aria-hidden=\"true\" style=\"height: 400px; overflow: auto\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <!--Header-->\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Thông tin</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">×</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body mb-1\">\r\n        <div class=\"md-form form-sm mb-5\">\r\n          <i class=\"fas fa-envelope prefix\"></i>\r\n          <input type=\"text\" id=\"firstName\" [(ngModel)]=\"userLogin['firstName']\"\r\n                 class=\"form-control form-control-sm validate\">\r\n          <label data-error=\"wrong\" data-success=\"right\" for=\"firstName\"\r\n                 *ngIf=\"bean.isNil(userLogin['firstName'])\">Your firstName</label>\r\n        </div>\r\n\r\n        <div class=\"md-form form-sm mb-4\">\r\n          <i class=\"fas fa-lock prefix\"></i>\r\n          <input type=\"text\" id=\"lastName\" [(ngModel)]=\"userLogin['lastName']\"\r\n                 class=\"form-control form-control-sm validate\">\r\n          <label data-error=\"wrong\" data-success=\"right\" for=\"lastName\" *ngIf=\"bean.isNil(userLogin['lastName'])\">Your\r\n            lastName</label>\r\n        </div>\r\n        <div class=\"md-form form-sm mb-5\">\r\n          <i class=\"fas fa-envelope prefix\"></i>\r\n          <input type=\"email\" id=\"email\" [(ngModel)]=\"userLogin['email']\"\r\n                 class=\"form-control form-control-sm validate\">\r\n          <label data-error=\"wrong\" data-success=\"right\" for=\"email\" *ngIf=\"bean.isNil(userLogin['email'])\">Your\r\n            email</label>\r\n        </div>\r\n\r\n        <div class=\"md-form form-sm mb-4\">\r\n          <i class=\"fas fa-lock prefix\"></i>\r\n          <input type=\"text\" id=\"phone\" [(ngModel)]=\"userLogin['phone']\"\r\n                 class=\"form-control form-control-sm validate\">\r\n          <label data-error=\"wrong\" data-success=\"right\" for=\"phone\" *ngIf=\"bean.isNil(userLogin['phone'])\">Your\r\n            phone</label>\r\n        </div>\r\n        <div class=\"md-form form-sm mb-4\">\r\n          <i class=\"fas fa-lock prefix\"></i>\r\n          <input type=\"text\" id=\"location\" [(ngModel)]=\"userLogin['location']\"\r\n                 class=\"form-control form-control-sm validate\">\r\n          <label data-error=\"wrong\" data-success=\"right\" for=\"location\" *ngIf=\"bean.isNil(userLogin['location'])\">Your\r\n            location</label>\r\n        </div>\r\n      </div>\r\n      <!--Footer-->\r\n      <div class=\"modal-footer text-center\">\r\n        <!--<button type=\"button\" class=\"btn btn-outline-primary\" data-dismiss=\"modal\">Close</button>-->\r\n        <button class=\"btn btn-primary\" (click)=\"updateProfile()\">Update</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modal/modal-update-profile/modal-update-profile.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modal/modal-update-profile/modal-update-profile.component.ts ***!
  \******************************************************************************/
/*! exports provided: ModalUpdateProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalUpdateProfileComponent", function() { return ModalUpdateProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/global.service */ "./src/app/common/services/global.service.ts");





var ModalUpdateProfileComponent = /** @class */ (function () {
    function ModalUpdateProfileComponent(http, globalService, router) {
        this.http = http;
        this.globalService = globalService;
        this.router = router;
        // baseUrl = "https://chat.hyper.com:9999/";
        this.baseUrl = "http://chat.hyper.com:9000/";
        this.userLogin = {};
        this.userLoginClone = {};
        this.bean = $bean;
    }
    ModalUpdateProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.globalService.userLogin.subscribe(function (data) {
            _this.userLogin = data;
        });
    };
    ModalUpdateProfileComponent.prototype.updateProfile = function () {
        var _this = this;
        var url = this.baseUrl + 'user/updateProfile';
        var form = this.userLoginClone;
        this.http.post(url, form).subscribe(function (data) {
            console.log('Update Profile success !');
            console.log(data);
            _this.userLogin = data;
            _this.globalService.userLogin.next(data);
        });
    };
    ModalUpdateProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'modal-update-profile',
            template: __webpack_require__(/*! ./modal-update-profile.component.html */ "./src/app/modal/modal-update-profile/modal-update-profile.component.html"),
            styles: [__webpack_require__(/*! ./modal-update-profile.component.css */ "./src/app/modal/modal-update-profile/modal-update-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ModalUpdateProfileComponent);
    return ModalUpdateProfileComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/hyd/base/print-data.pipe.ts":
/*!*****************************************!*\
  !*** ./src/hyd/base/print-data.pipe.ts ***!
  \*****************************************/
/*! exports provided: PrintDataPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintDataPipe", function() { return PrintDataPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PrintDataPipe = /** @class */ (function () {
    function PrintDataPipe() {
    }
    PrintDataPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if ($bean.isNotNil(value) && $bean.isNumber(value)) {
            return $bean.getShortBytes(value, 2);
        }
        else {
            return value;
        }
    };
    PrintDataPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'printData'
        })
    ], PrintDataPipe);
    return PrintDataPipe;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Tigo\finalExame\static\appClient\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
