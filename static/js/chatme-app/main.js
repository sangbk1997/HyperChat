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
/* harmony import */ var _channel_view_chats_channel_view_chats_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./channel/view-chats/channel-view-chats.component */ "./src/app/channel/view-chats/channel-view-chats.component.ts");
/* harmony import */ var _channel_view_contacts_channel_view_contacts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./channel/view-contacts/channel-view-contacts.component */ "./src/app/channel/view-contacts/channel-view-contacts.component.ts");
/* harmony import */ var _channel_search_view_all_channel_search_view_all_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./channel/search-view-all/channel-search-view-all.component */ "./src/app/channel/search-view-all/channel-search-view-all.component.ts");
/* harmony import */ var _channel_search_view_people_channel_search_view_people_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./channel/search-view-people/channel-search-view-people.component */ "./src/app/channel/search-view-people/channel-search-view-people.component.ts");
/* harmony import */ var _channel_search_view_group_channel_search_view_group_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./channel/search-view-group/channel-search-view-group.component */ "./src/app/channel/search-view-group/channel-search-view-group.component.ts");








var routes = [
    {
        path: "", component: _channel_view_chats_channel_view_chats_component__WEBPACK_IMPORTED_MODULE_3__["ChannelViewChatsComponent"]
    },
    {
        path: "contacts", component: _channel_view_contacts_channel_view_contacts_component__WEBPACK_IMPORTED_MODULE_4__["ChannelViewContactsComponent"]
    },
    {
        path: "search?filter=all", component: _channel_search_view_all_channel_search_view_all_component__WEBPACK_IMPORTED_MODULE_5__["ChannelSearchViewAllComponent"]
    },
    {
        path: "search?filter=people", component: _channel_search_view_people_channel_search_view_people_component__WEBPACK_IMPORTED_MODULE_6__["ChannelSearchViewPeopleComponent"]
    },
    {
        path: "search?filter=groups", component: _channel_search_view_group_channel_search_view_group_component__WEBPACK_IMPORTED_MODULE_7__["ChannelSearchViewGroupComponent"]
    },
    { path: "**", component: _channel_view_chats_channel_view_chats_component__WEBPACK_IMPORTED_MODULE_3__["ChannelViewChatsComponent"] },
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

module.exports = "\r\nbody {\r\n  height: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n.sidebar-header {\r\n  height: 30vh;\r\n  width: 350px;\r\n  position: fixed;\r\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\r\n  z-index: 10005;\r\n  background-color: #fff;\r\n  padding: 1.5rem;\r\n  padding-top: 0;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.sidebar-view-channels {\r\n  overflow: auto;\r\n  width: 350px;\r\n  position: fixed;\r\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\r\n  z-index: 1004;\r\n  background-color: #fff;\r\n  padding: 1.5rem;\r\n  padding-top: 33vh;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 5px;\r\n}\r\n\r\n.view-messages {\r\n  overflow: auto;\r\n  height: 90vh;\r\n  position: fixed;\r\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\r\n  z-index: 1003;\r\n  background-color: #fff;\r\n  padding: 1.5rem;\r\n  padding-top: 20vh;\r\n  right: 5px;\r\n  left: 350px;\r\n  bottom: 100px;\r\n}\r\n\r\n.send-message-box {\r\n  margin: auto;\r\n  text-align: center;\r\n  position: fixed;\r\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\r\n  z-index: 1003;\r\n  background-color: #fff;\r\n  left: 370px;\r\n  padding: 10px;\r\n  bottom: 20px;\r\n  right: 20px;\r\n}\r\n\r\n.message {\r\n  padding: 10px;\r\n  margin-left: 50px;\r\n  border-radius: 2px;\r\n  background-color: orange;\r\n  color: #0b2e13;\r\n}\r\n\r\n.message-file {\r\n  display: inline-block;\r\n  position: relative;\r\n  border-radius: 20px;\r\n  background: #17a3a9;\r\n  padding: 10px;\r\n  width: 200px;\r\n  height: 160px;\r\n  opacity: 0.8;\r\n}\r\n\r\n.message-file .item-download {\r\n  font-weight: bolder;\r\n  color: black;\r\n}\r\n\r\n.message-title {\r\n  font-weight: bold;\r\n  white-space: nowrap;\r\n  width: 150px;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.message-file:hover {\r\n  opacity: 1;\r\n  cursor: pointer;\r\n}\r\n\r\n.icon:hover {\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n}\r\n\r\n.message-img {\r\n  border-radius: 20px;\r\n  opacity: 0.8;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.message-img:hover {\r\n  cursor: pointer;\r\n  opacity: 0.6;\r\n}\r\n\r\n.upload-item-pending {\r\n  display: inline-block;\r\n  border-radius: 20px;\r\n  background-color: gainsboro;\r\n  position: relative;\r\n  opacity: 0.8;\r\n  padding: 10px;\r\n  margin: 5px;\r\n  width: 100px;\r\n  height: 150px;\r\n}\r\n\r\n.upload-item-pending .message-title {\r\n  font-weight: bold;\r\n  white-space: nowrap;\r\n  width: 70px;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.upload-item-pending:hover {\r\n  cursor: pointer;\r\n  opacity: 0.6;\r\n}\r\n\r\n.upload-item-pending .icon {\r\n  position: absolute;\r\n  top: 2px;\r\n  right: 2px;\r\n  z-index: 10;\r\n}\r\n\r\n.add-item-upload {\r\n  background-color: black;\r\n  border-radius: 20px;\r\n  position: relative;\r\n  color: white;\r\n  opacity: 0.8;\r\n  padding: 10px;\r\n  margin: 5px;\r\n  width: 50px;\r\n  height: 150px;\r\n}\r\n\r\n.add-item-upload:hover {\r\n  cursor: pointer;\r\n  opacity: 0.6;\r\n}\r\n\r\n.box-emojis-react-message {\r\n  display: inline-block;\r\n  background-color: ghostwhite;\r\n  border: 1px solid gainsboro;\r\n  border-radius: 20px;\r\n  padding: 7px;\r\n  font-size: 16px;\r\n  width: 400px;\r\n  height: auto;\r\n}\r\n\r\n.box-emojis-react-message .emoji:hover {\r\n  font-weight: bold;\r\n  font-size: 18px;\r\n  cursor: pointer;\r\n}\r\n\r\n.box-message-activities {\r\n  display: inline-block;\r\n  border-radius: 7px;\r\n  background-color: ghostwhite;\r\n  border: 1px solid gainsboro;\r\n  width: 150px;\r\n  height: auto;\r\n}\r\n\r\n.box-message-activities .action {\r\n  padding: 7px 7px 7px 20px;\r\n}\r\n\r\n.box-message-activities .action:hover {\r\n  background-color: #9ae1e2;\r\n  cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUVmLDZFQUE2RTtFQUM3RSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixjQUFjO0VBQ2QsTUFBTTtFQUNOLE9BQU87QUFDVDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osZUFBZTtFQUVmLDZFQUE2RTtFQUM3RSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0FBQ2I7O0FBR0E7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGVBQWU7RUFFZiw2RUFBNkU7RUFDN0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBRWYsNkVBQTZFO0VBQzdFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUdBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxRQUFRO0VBQ1IsT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVc7RUFDWCxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuYm9keSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zaWRlYmFyLWhlYWRlciB7XHJcbiAgaGVpZ2h0OiAzMHZoO1xyXG4gIHdpZHRoOiAzNTBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICB6LWluZGV4OiAxMDAwNTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxuICBwYWRkaW5nLXRvcDogMDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuLnNpZGViYXItdmlldy1jaGFubmVscyB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIHotaW5kZXg6IDEwMDQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgcGFkZGluZy10b3A6IDMzdmg7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcblxyXG4udmlldy1tZXNzYWdlcyB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgaGVpZ2h0OiA5MHZoO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIHotaW5kZXg6IDEwMDM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgcGFkZGluZy10b3A6IDIwdmg7XHJcbiAgcmlnaHQ6IDVweDtcclxuICBsZWZ0OiAzNTBweDtcclxuICBib3R0b206IDEwMHB4O1xyXG59XHJcblxyXG4uc2VuZC1tZXNzYWdlLWJveCB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICB6LWluZGV4OiAxMDAzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgbGVmdDogMzcwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3R0b206IDIwcHg7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcblxyXG4ubWVzc2FnZSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG4gIGNvbG9yOiAjMGIyZTEzO1xyXG59XHJcblxyXG4ubWVzc2FnZS1maWxlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogIzE3YTNhOTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDE2MHB4O1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLm1lc3NhZ2UtZmlsZSAuaXRlbS1kb3dubG9hZCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5tZXNzYWdlLXRpdGxlIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4ubWVzc2FnZS1maWxlOmhvdmVyIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmljb246aG92ZXIge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm1lc3NhZ2UtaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIG9wYWNpdHk6IDAuODtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm1lc3NhZ2UtaW1nOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3BhY2l0eTogMC42O1xyXG59XHJcblxyXG4udXBsb2FkLWl0ZW0tcGVuZGluZyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvcGFjaXR5OiAwLjg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IDVweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxufVxyXG5cclxuLnVwbG9hZC1pdGVtLXBlbmRpbmcgLm1lc3NhZ2UtdGl0bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLnVwbG9hZC1pdGVtLXBlbmRpbmc6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvcGFjaXR5OiAwLjY7XHJcbn1cclxuXHJcbi51cGxvYWQtaXRlbS1wZW5kaW5nIC5pY29uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAycHg7XHJcbiAgcmlnaHQ6IDJweDtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLmFkZC1pdGVtLXVwbG9hZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG9wYWNpdHk6IDAuODtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbn1cclxuXHJcbi5hZGQtaXRlbS11cGxvYWQ6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvcGFjaXR5OiAwLjY7XHJcbn1cclxuXHJcbi5ib3gtZW1vamlzLXJlYWN0LW1lc3NhZ2Uge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnaG9zdHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdhaW5zYm9ybztcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDdweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmJveC1lbW9qaXMtcmVhY3QtbWVzc2FnZSAuZW1vamk6aG92ZXIge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5ib3gtbWVzc2FnZS1hY3Rpdml0aWVzIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdob3N0d2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ2FpbnNib3JvO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5ib3gtbWVzc2FnZS1hY3Rpdml0aWVzIC5hY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDdweCA3cHggN3B4IDIwcHg7XHJcbn1cclxuXHJcbi5ib3gtbWVzc2FnZS1hY3Rpdml0aWVzIC5hY3Rpb246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5YWUxZTI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-app\">\n  <div class=\"sidebar\">\n    <side-bar-view></side-bar-view>\n    <div class=\"sidebar-content\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n  <div class=\"main-content\">\n    <div class=\"header-channel p-3\">\n        <span class=\"info-channel float-left\" *ngIf=\"!firstAccess\">\n          <div class=\"title-channel\">\n            <h3 class=\"link\" *ngIf=\"selectedChat.role == ROLE_IS_CHANNEL\"\n                (click)=\"showInfoChannel()\">{{selectedChat.title}}</h3>\n            <h3 class=\"link\" *ngIf=\"selectedChat.role == ROLE_IS_USER\"\n                (click)=\"showInfoChannel()\">{{selectedChat.username}}</h3>\n          </div>\n          <div class=\"attached-info-channel row small font-weight-bold\">\n            <div class=\"extra-info-channel mx-2\">\n              <span class=\"symbol-link m-1\"><i class=\"fas fa-circle\"></i></span>\n              <span class=\"link\" (click)=\"showInfoChannel()\"\n                    *ngIf=\"selectedChat.role == ROLE_IS_USER\">Truy cập gần đây {{selectedChat.lastLogon}}</span>\n              <span class=\"link\" (click)=\"showInfoChannel()\"\n                    *ngIf=\"selectedChat.role == ROLE_IS_CHANNEL\">{{countMembers}}\n                thành viên</span>\n              <!--<h2>Channel view contacts </h2>-->\n            </div>\n            <span class=\"icon-line mr-2\">|</span>\n            <div class=\"extra-info-channel mr-2\">\n              <span class=\"symbol-link m-1\"><i class=\"fas fa-book\"></i></span>\n              <span class=\"link\" (click)=\"showGalleryBox()\">Gallery</span>\n            </div>\n            <span class=\"icon-line mr-2\">|</span>\n            <div class=\"extra-info-channel mr-2\">\n              <span class=\"symbol-link m-1\"><i class=\"\tfas fa-search\"></i></span>\n              <span class=\"link\">Find</span>\n            </div>\n          </div>\n        </span>\n      <span class=\"feature-support float-right\" *ngIf=\"!firstAccess\">\n          <span class=\"feature-item symbol-link  hvr-pulse hvr-grow-shadow\"><i class=\"fas fa-video\"></i></span>\n          <span class=\"feature-item symbol-link  hvr-pulse hvr-grow-shadow\"><i class=\"fas fa-phone\"></i></span>\n          <span class=\"feature-item symbol-link  hvr-pulse hvr-grow-shadow\" (click)=\"addMoreUser()\"><i\n            class=\"fas fa-user-plus\"></i></span>\n        </span>\n\n      <div class=\"row m-auto text-center\" *ngIf=\"firstAccess\">\n        <h3 class=\"link\">Welcome to Hyperlogy Chat App ... !</h3>\n      </div>\n    </div>\n\n    <div id=\"container-messenger\" class=\"content-message-container p-3\" (drop)=\"dropIntoBoxMessage($event)\"\n         (dragover)=\"allowDrop($event, false)\" (scroll)=\"loadPreviousMessenger(20)\"\n         *ngIf=\"!firstAccess\">\n      <div class=\"text-center\">\n        <mdb-card class=\"mx-auto w-50\"\n                  *ngIf=\"connectionStatus.isCheck && connectionStatus.status == CONNECTION_STATUS_NOT_CONNECT\">\n          <mdb-card-body>\n            <mdb-card-title>\n              <h4>Thông tin</h4>\n            </mdb-card-title>\n            <mdb-card-text *ngIf=\"selectedChat.role == ROLE_IS_USER\"> Bạn chưa kết nối đến\n              <b>{{selectedChat.username}}</b></mdb-card-text>\n            <mdb-card-text *ngIf=\"selectedChat.role == ROLE_IS_CHANNEL\"> Bạn chưa kết nối đến\n              <b>{{selectedChat.title}}</b>\n            </mdb-card-text>\n            <div class=\"flex-row\">\n              <button class=\"waves-light btn btn-primary waves-effect\" color=\"primary\" mdbbtn=\"\" mdbwaveseffect=\"\"\n                      type=\"button\" ng-reflect-color=\"primary\" (click)=\"sendRequest()\">Gửi yêu cầu\n              </button>\n            </div>\n          </mdb-card-body>\n        </mdb-card>\n        <mdb-card class=\"mx-auto w-50\"\n                  *ngIf=\"connectionStatus.isCheck && connectionStatus.status == CONNECTION_STATUS_PENDING\">\n          <mdb-card-body>\n            <mdb-card-title>\n              <h4>Thông tin</h4>\n            </mdb-card-title>\n            <mdb-card-text *ngIf=\"userLogin.id != requestChat['triggerId']\"><b>Đang chờ thông tin phản hồi từ bạn</b>\n            </mdb-card-text>\n            <mdb-card-text *ngIf=\"(userLogin.id == requestChat['triggerId']) && (selectedChat.role == ROLE_IS_USER)\"><b>Đang\n              chờ thông tin phản hồi từ {{selectedChat.email}}</b>\n            </mdb-card-text>\n            <mdb-card-text *ngIf=\"(userLogin.id == requestChat['triggerId']) && (selectedChat.role == ROLE_IS_CHANNEL)\">\n              <b>Đang chờ thông tin phản hồi từ {{selectedChat.title}}</b>\n            </mdb-card-text>\n            <div class=\"flex-row\">\n              <button class=\"waves-light btn btn-primary waves-effect\" color=\"primary\" mdbbtn=\"\" mdbwaveseffect=\"\"\n                      type=\"button\" ng-reflect-color=\"primary\" *ngIf=\"userLogin.id != requestChat['triggerId']\"\n                      (click)=\"acceptRequest()\">Chấp nhận\n              </button>\n              <button class=\"waves-light btn btn-primary waves-effect\" color=\"warning\" mdbbtn=\"\" mdbwaveseffect=\"\"\n                      type=\"button\" ng-reflect-color=\"primary\" *ngIf=\"userLogin.id != requestChat['triggerId']\"\n                      (click)=\"rejectRequest()\">Từ chối\n              </button>\n              <button class=\"waves-light btn btn-primary waves-effect\" color=\"danger\" mdbbtn=\"\" mdbwaveseffect=\"\"\n                      type=\"button\" ng-reflect-color=\"primary\" *ngIf=\"userLogin.id == requestChat['triggerId']\"\n                      (click)=\"deleteRequest()\">Hủy\n              </button>\n            </div>\n          </mdb-card-body>\n        </mdb-card>\n      </div>\n      <div class=\"info-detail-message row mb-1\"\n           *ngFor=\"let infoMessage of listMessages; let index = index; let last = last;\">\n        <div id=\"first-message\">\n        </div>\n        <!--<div class=\"col-1 text-center\" style=\"border-right: #2e5e86 1px solid\">-->\n        <!--<img *ngIf=\"infoMessage.userId != userLogin.id\" src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg\"-->\n        <!--alt=\"IMG of Avatars\"-->\n        <!--class=\"avatar img-fluid z-depth-1-half rounded-circle\">-->\n        <!--</div>-->\n        <div class=\"col-1\"></div>\n        <div class=\"col-10 text-left\"\n             *ngIf=\"(infoMessage.userId != userLogin.id) && (infoMessage.typeRole == TYPE_ROLE_PRIMARY) && (infoMessage.type == TYPE_MESSENGER_TEXT)\">\n          <div class=\"info-message\">\n            <div class=\"extra-info small text-muted\">\n              <span class=\"username\">abc</span>\n            </div>\n            <div class=\"content-message\">\n              <div class=\"\">\n                <span [id]=\"'item-message' + '-' + index\" class=\"text message-left\">{{infoMessage.message}}</span>\n                <span class=\"text-muted small m-1\" *ngIf=\"infoMessage.status == STATUS_EDITED\"><i\n                  class=\"fas fa-pencil-alt\"></i></span>\n                <span [id]=\"'icon-smile' + '-' + index\" class=\"emotion hvr-bounce-in\"\n                      (click)=\"showBoxReactEmojis($event, 'icon-smile' + '-' + index, infoMessage)\"><i\n                  class=\"far fa-smile\"></i></span>\n              </div>\n              <box-react-messenger [reactEmojis]=\"infoMessage['userMessengers']\"></box-react-messenger>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-10 text-right\"\n             *ngIf=\"(infoMessage.userId == userLogin.id) && (infoMessage.typeRole == TYPE_ROLE_PRIMARY)&& (infoMessage.type == TYPE_MESSENGER_TEXT)\">\n          <div class=\"info-message\">\n            <div class=\"extra-info small text-muted\">\n              <span class=\"message-time-sent\">3:59 PM</span>\n            </div>\n            <div class=\"content-message\">\n              <div>\n                <span [id]=\"'item-message' + '-' + index\" class=\"text message-right\">{{infoMessage.message}}</span>\n                <span class=\"text-muted small m-1\" *ngIf=\"infoMessage.status == STATUS_EDITED\"><i\n                  class=\"fas fa-pencil-alt\"></i></span>\n              </div>\n              <box-react-messenger [reactEmojis]=\"infoMessage['userMessengers']\"></box-react-messenger>\n            </div>\n          </div>\n        </div>\n        <div [id]=\"'item-message' + '-' + index\" class=\"col-10 text-center\"\n             *ngIf=\"(infoMessage.typeRole != TYPE_ROLE_PRIMARY) && (infoMessage.type == TYPE_MESSENGER_TEXT)\">\n          <div class=\"info-message\">\n            <div class=\"small text-muted\">\n              <span class=\"text\">{{infoMessage.message}}</span> <span class=\"message-time-sent\">3:59 PM</span>\n              <span class=\"text-muted small m-1\" *ngIf=\"infoMessage.status == STATUS_EDITED\"><i\n                class=\"fas fa-pencil-alt\"></i></span>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-10 text-left\"\n             *ngIf=\"(infoMessage.userId != userLogin.id) && (infoMessage.typeRole == TYPE_ROLE_PRIMARY) && (infoMessage.type == TYPE_MESSENGER_IMAGE)\">\n          <div class=\"content-message\">\n            <div>\n              <span [id]=\"'item-message' + '-' + index\" class=\"message-file\">\n            <img\n              class=\"message-img\"\n              [src]=\"'preview' + '/' + infoMessage.path\" [alt]=\"infoMessage.message\">\n          </span>\n              <span class=\"text-muted small m-1\" *ngIf=\"infoMessage.status == STATUS_EDITED\"><i\n                class=\"fas fa-pencil-alt\"></i></span>\n              <span [id]=\"'icon-smile' + '-' + index\" class=\"emotion hvr-bounce-in\"\n                    (click)=\"showBoxReactEmojis($event, 'icon-smile' + '-' + index, infoMessage)\"><i\n                class=\"far fa-smile\"></i>\n            </span>\n            </div>\n            <box-react-messenger [reactEmojis]=\"infoMessage['userMessengers']\"></box-react-messenger>\n          </div>\n        </div>\n        <!--<div class=\"col-8 text-left icon\"><i class=\"fas fa-arrow-right\"></i></div>-->\n        <div class=\"col-10 text-left\"\n             *ngIf=\"(infoMessage.userId != userLogin.id) && (infoMessage.typeRole == TYPE_ROLE_PRIMARY) && (infoMessage.type == TYPE_MESSENGER_FILE)\">\n          <div class=\"content-message\">\n            <div>\n               <span class=\"message-file\">\n          <div class=\"message-title\">{{infoMessage.message}}</div>\n          <div class=\"text-muted small\">Size : {{infoMessage.fileSize | printData}}</div>\n          <div class=\"text-muted small\">Type : {{infoMessage.fileExtension}}</div>\n          <div class=\"file\">\n            <i class=\"fas fa-file\"></i>\n            <span class=\"m-2\">File</span>\n          </div>\n          <hr style=\"border: 1px white solid\">\n          <div class=\"text-center\"><a class=\"item-download\" [href]=\"'attachments' + '/' + infoMessage.path\"><strong>Tải xuống</strong></a></div>\n        </span>\n              <span [id]=\"'icon-smile' + '-' + index\" class=\"emotion hvr-bounce-in\"\n                    (click)=\"showBoxReactEmojis($event, 'icon-smile' + '-' + index, infoMessage)\"><i\n                class=\"far fa-smile\"></i>\n          </span>\n              <span class=\"text-muted small m-1\" *ngIf=\"infoMessage.status == STATUS_EDITED\"><i\n                class=\"fas fa-pencil-alt\"></i></span>\n            </div>\n            <box-react-messenger [reactEmojis]=\"infoMessage['userMessengers']\"></box-react-messenger>\n          </div>\n        </div>\n        <!--<div class=\"col-8 text-right  icon\"><i class=\"fas fa-arrow-right\"></i></div>-->\n        <div class=\"col-10 text-right\"\n             *ngIf=\"(infoMessage.userId == userLogin.id) && (infoMessage.typeRole == TYPE_ROLE_PRIMARY) && (infoMessage.type == TYPE_MESSENGER_IMAGE)\">\n          <div class=\"content-message\">\n            <div>\n               <span [id]=\"'item-message' + '-' + index\" class=\"message-file\">\n          <img\n            class=\"message-img\"\n            [src]=\"'preview' + '/' + infoMessage.path\" [alt]=\"infoMessage.message\">\n        </span>\n              <span class=\"text-muted small m-1\" *ngIf=\"infoMessage.status == STATUS_EDITED\"><i\n                class=\"fas fa-pencil-alt\"></i></span>\n            </div>\n            <box-react-messenger [reactEmojis]=\"infoMessage['userMessengers']\"></box-react-messenger>\n          </div>\n        </div>\n        <!--<div class=\"col-8 text-right icon\"><i class=\"fas fa-arrow-right\"></i></div>-->\n        <div class=\"col-10 text-right\"\n             *ngIf=\"(infoMessage.userId == userLogin.id) && (infoMessage.typeRole == TYPE_ROLE_PRIMARY)  && (infoMessage.type == TYPE_MESSENGER_FILE)\">\n          <div class=\"content-message\">\n            <div>\n                 <span class=\"message-file\">\n          <div class=\"message-title\">{{infoMessage.message}}</div>\n          <div class=\"text-muted small\">Size : {{infoMessage.fileSize | printData}}</div>\n               <div class=\"text-muted small\">Type : {{infoMessage.fileExtension}}</div>\n          <div class=\"file\">\n            <i class=\"fas fa-file\"></i>\n            <span class=\"m-2\">File</span>\n          </div>\n          <hr style=\"border: 1px white solid\">\n           <div class=\"text-center\"><a class=\"item-download\" [href]=\"'attachments' + '/' + infoMessage.path\"><strong>Tải xuống</strong></a></div>\n        </span>\n              <span class=\"text-muted small m-1\" *ngIf=\"infoMessage.status == STATUS_EDITED\"><i\n                class=\"fas fa-pencil-alt\"></i></span>\n            </div>\n            <box-react-messenger [reactEmojis]=\"infoMessage['userMessengers']\"></box-react-messenger>\n          </div>\n        </div>\n        <div class=\"col-1\"><span [id]=\"'icon-show-activities' + '-' + index\" class=\"icon\"\n                                 (click)=\"showBoxMessageActivities(infoMessage, 'icon-show-activities' + '-' + index, 'item-message' + '-' + index, $event)\"><i\n          class=\"fas fa-ellipsis-v\"></i></span></div>\n        <!--<span class=\"col-8 text-left icon\"><i class=\"fas fa-arrow-right\"></i></span>-->\n      </div>\n    </div>\n    <div id=\"last-message\">\n    </div>\n  </div>\n  <div class=\"row emoji text-center\">\n  </div>\n  <div class=\"send-message-box\"\n       *ngIf=\"requestChat.status == STATUS_ACCEPTED\">\n    <div class=\"list-file-upload row p-2 m-1\" *ngIf=\"processUpload\" (dragover)=\"allowDrop($event, true)\"\n         (drop)=\"dropIntoBoxSend($event)\">\n      <span class=\"upload-item-pending\" *ngFor=\"let objFile of uploadFiles\">\n        <div class=\"file-item\" *ngIf=\"objFile.type == TYPE_MESSENGER_FILE\">\n          <i class=\"fas fa-times-circle icon\" (click)=\"deleteUploadFile(objFile.id)\"></i>\n          <div><i class=\"far fa-file\"></i></div>\n          <div class=\"message-title\">{{objFile.file.name}}</div>\n          <div class=\"text-muted\">{{objFile.file.size | printData}}</div>\n        </div>\n        <div class=\"image-item\" *ngIf=\"objFile.type == TYPE_MESSENGER_IMAGE\">\n          <i class=\"fas fa-times-circle icon\" (click)=\"deleteUploadFile(objFile.id)\"></i>\n          <span><img class=\"message-img\" [src]=\"objFile.url\" alt=\"{{objFile.file.name}}\"></span>\n        </div>\n      </span>\n      <div class=\"add-item-upload text-center\" (click)=\"chooseFile()\">\n        <i class=\"fas fa-plus\"></i>\n      </div>\n    </div>\n    <hr *ngIf=\"processUpload\">\n    <div class=\"row\">\n      <div class=\"col-1\"></div>\n      <div class=\"input-group col-10\">\n        <input id=\"inputSendMessage\" type=\"text\" class=\"form-control\" placeholder=\"Send message\"\n               [(ngModel)]=\"inputValue\"\n               (keyup)=\"checkSendMessage($event)\">\n        <div class=\"input-group-append\" *ngIf=\"!processUpload\">\n          <span class=\"input-group-text symbol-link hvr-grow\"><i class=\"far fa-file-image\"></i></span>\n        </div>\n        <div class=\"input-group-append\" *ngIf=\"!processUpload\">\n          <span class=\"input-group-text symbol-link hvr-grow\" (click)=\"chooseFile()\"><i\n            class=\"far fa-file-alt\"></i></span>\n        </div>\n        <div class=\"input-group-append\" *ngIf=\"!processUpload\">\n          <span class=\"input-group-text symbol-link hvr-grow\"><i class=\"fas fa-file-video\"></i></span>\n        </div>\n        <div class=\"input-group-append\" id=\"icon-message-emojis\" *ngIf=\"!processUpload\"\n             (click)=\"showBoxMessageEmojis($event)\">\n          <span class=\"input-group-text symbol-link hvr-grow\"><i class=\"emotion far fa-smile\"></i></span>\n        </div>\n        <div class=\"input-group-append\" *ngIf=\"!processUpload\">\n          <span class=\"input-group-text symbol-link hvr-grow\"><i class=\"fas fa-map-marker-alt\"></i></span>\n        </div>\n        <div class=\"input-group-append\" *ngIf=\"!processUpload\">\n          <span class=\"input-group-text symbol-link hvr-grow\"><i class=\"fas fa-file-video\"></i></span>\n        </div>\n        <!--<ngx-emoji (emojiClick)=\"emojiClick($event)\" [emoji]=\"{id: '+1'}\" size=\"24\" set=\"native\">-->\n\n        <!--</ngx-emoji>-->\n        <div class=\"input-group-append\" *ngIf=\"!processUpload\">\n          <span class=\"input-group-text symbol-link hvr-grow\"><i class=\"far fa-thumbs-up\"></i></span>\n        </div>\n        <button class=\"btn btn-primary\" (click)=\"sendMessage()\">Send</button>\n      </div>\n      <div class=\"col-1\"></div>\n    </div>\n  </div>\n</div>\n\n<input id=\"inputFile\" type=\"file\" multiple (change)=\"doUpload($event)\" style=\"display:none\"/>\n<div class=\"box-emojis\">\n  <emoji-mart\n    set=\"native\"\n    color=\"orange\"\n    isNative=\"true\"\n    [hideRecent]=\"false\"\n    [style]=\"{'z-index': 10000, position: 'absolute', top: styleBoxMessageEmojis.top + 'px', left: styleBoxMessageEmojis.left + 'px'}\"\n    (emojiSelect)=\"handleClick($event)\"\n    emojiTooltip=\"true\"\n    title=\"Pick your emoji…\"\n    emoji='point_up'>\n  </emoji-mart>\n</div>\n\n<span class=\"box-emojis-react-message\"\n      [ngStyle]=\"{'z-index': 10000, position: 'fixed', top: styleBoxReactEmojis.top + 'px', left: styleBoxReactEmojis.left + 'px'}\">\n  <div class=\"row\">\n    <div class=\"col p-1 emoji text-center\" *ngFor=\"let emoji of listEmojis\" (click)=\"reactMessenger(emoji)\">\n    <span>{{emoji.native}}</span>\n  </div>\n  </div>\n</span>\n\n<span class=\"box-message-activities\"\n      [ngStyle]=\"{'z-index': 10000, position: 'fixed', top: styleBoxMessageActivities.top + 'px', left: styleBoxMessageActivities.left + 'px'}\">\n  <div class=\"action\" (click)=\"beginUpdateMessenger()\">\n    <span>Edit</span>\n  </div>\n  <div class=\"action\" (click)=\"copyMessenger()\">\n    <span>Copy</span>\n  </div>\n  <div class=\"action\" *ngIf=\"setUpActivitiesObj.download\">\n      <a [href]=\"'attachments' + '/' + selectedMessenger.path\"><span>Download</span></a>\n  </div>\n  <div class=\"action\">\n    <span>Forward</span>\n  </div>\n  <div class=\"action\" (click)=\"beginRemoveMessenger()\">\n    <span>Remove</span>\n  </div>\n</span>\n\n<input type=\"text\" id=\"inputCopy\">\n\n<box-react-emoji-users [emoji]=\"dataShowReactEmoji.selectedEmoji\" [users]=\"dataShowReactEmoji.users\"\n                       [triggerElementId]=\"dataShowReactEmoji.triggerElementId\"></box-react-emoji-users>\n\n<box-users-read-messenger [readUsers]=\"dataShowUsersReadMessenger.readUsers\" [triggerElementId]=\"dataShowUsersReadMessenger.triggerElementId\"></box-users-read-messenger>\n<!--</body>-->\n<modal-add-channel></modal-add-channel>\n<modal-add-user-to-chat></modal-add-user-to-chat>\n<modal-box-contact></modal-box-contact>\n<modal-box-request></modal-box-request>\n<modal-box-chat></modal-box-chat>\n<modal-update-profile></modal-update-profile>\n<modal-box-gallery></modal-box-gallery>\n<modal-box-notification></modal-box-notification>\n<modal-box-confirm-request></modal-box-confirm-request>\n"

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
        this.ENTER_KEY_CODE = 13;
        this.DEFAULT_NUMBER_REQUEST = 10;
        this.DEFAULT_NUMBER_MESSAGE = 20;
        this.DEFAULT_NUMBER_USER = 20;
        this.DEFAULT_NUMBER_CHANNEL = 20;
        this.DEFAULT_NUMBER_OFSET = 0;
        this.PREFIX_MARK_ELEMENT = 'mark-positon-';
        this.ROLE_IS_USER = 'USER';
        this.ROLE_IS_CHANNEL = 'CHANNEL';
        this.ROLE_IS_MESSENGER = 'MESSENGER';
        this.CONNECTION_STATUS_NOT_CONNECT = 'NOT_CONNECTED';
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
        this.STATUS_EDITED = 'EDITED';
        this.TYPE_REQUEST_USER_CHAT = 'REQUEST_CHAT_GROUP';
        this.TYPE_REQUEST_CHAT_USER = 'REQUEST_CHAT_USER';
        this.TYPE_CHAT_GROUP = 'CHAT_GROUP';
        this.TYPE_CHAT_CONTACT = 'CHAT_CONTACT';
        this.TYPE_ROLE_PRIMARY = 'PRIMARY';
        this.TYPE_ROLE_ATTACHED = 'ATTACHED';
        this.TYPE_ROLE_NOTIFIED = 'NOTIFIED';
        this.TYPE_NEW_MESSENGER = 'NEW_MESSENGER';
        this.TYPE_UPDATED_MESSENGER = 'UPDATED_MESSENGER';
        this.TYPE_DELETED_MESSENGER = 'DELETED_MESSENGER';
        this.TYPE_NEW_REACT = 'NEW_REACT';
        this.TYPE_UPDATED_REACT = 'UPDATED_REACT';
        this.TYPE_DELETED_REACT = 'DELETED_REACT';
        this.TYPE_NEW_USER_CHANNEL = 'NEW_USER_CHANNEL';
        this.TYPE_MESSENGER_TEXT = 'TEXT';
        this.TYPE_MESSENGER_IMAGE = 'IMAGE';
        this.TYPE_MESSENGER_LINK = 'LINK';
        this.TYPE_MESSENGER_FILE = 'FILE';
        this.STATUS_NOTIFICATION = true;
        this.STATUS_NOT_NOTIFICATION = false;
        this.ZERO_POSITION = 0;
        this.STATUS_INACTIVE = false;
        this.STATUS_ACTIVE = true;
        this.CLASS_BOX_MESSAGE_EMOJIS = 'emoji-mart';
        this.CLASS_BOX_REACT_EMOJIS = 'box-emojis-react-message';
        this.CLASS_BOX_MESSAGE_ACTIVITIES = 'box-message-activities';
        this.title = 'ChatMe';
        this.inputValue = '';
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
        this.firstAccess = true; // trang thai khi nguoi dung moi truy cap
        this.selectedChat = {};
        this.infoChannel = {};
        this.requestChat = {};
        this.listMessages = [];
        this.moreMessage = [];
        this.allChannels = [];
        // statusRequest: any;
        // Thông tin kết nối mặc định
        this.connectionStatus = {
            status: undefined,
            typeRequest: undefined,
            isCheck: false
        };
        this.listRequestByChannel = [];
        this.listSentRequest = [];
        this.listIncomeRequest = [];
        this.countMembers = 0;
        this.processUpload = false;
        this.processUpdateMessenger = false;
        this.uploadFiles = [];
        this.uploadedFiles = [];
        this.styleBoxMessageEmojis = {
            top: -1000,
            left: -1000
        };
        this.styleBoxReactEmojis = {
            top: -1000,
            left: -1000
        };
        this.styleBoxMessageActivities = {
            top: -1000,
            left: -1000
        };
        this.listEmojis = [];
        this.selectedMessenger = {};
        this.selectedMessageElementId = '';
        this.processCopyMessenger = false;
        this.setUpActivitiesObj = {
            edit: false,
            copy: false,
            download: false,
            react: false,
            forward: false,
            remove: false
        };
        this.dataShowReactEmoji = {};
        this.dataShowUsersReadMessenger = {};
    }
    AppComponent.prototype.checkClick = function (event) {
        if (event.target.classList.contains(this.CLASS_BOX_MESSAGE_EMOJIS) || $(event.target).parents("." + this.CLASS_BOX_MESSAGE_EMOJIS).length) {
        }
        else {
            this.hideBoxMessageEmojis();
        }
        this.hideBoxReactEmojis();
        this.hideBoxMessageActivities();
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pushStreamClient = new PushStream(this.settingOption);
        this.getUserLogin();
        this.globalService.accessChat.subscribe(function (res) {
            console.log('this is the current value', res);
            _this.firstAccess = false;
            _this.selectedChat = res;
            _this.listMessages = [];
            if (res['role'] == _this.ROLE_IS_CHANNEL) {
                if (_this.selectedChat['type'] == _this.TYPE_CHAT_CONTACT) {
                    _this.selectedChat = res['users'][0];
                }
            }
            _this.goCheckLinkChat();
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
        this.getEmojisDefault();
        this.globalService.changeOrderListChats.subscribe(function (res) {
            if (res) {
                _this.getAllChannels();
            }
        });
    };
    AppComponent.prototype.goCheckLinkChat = function () {
        if (this.selectedChat['role'] == this.ROLE_IS_CHANNEL) {
            this.getInfoToChannel(this.selectedChat['id']);
            this.getInfoChannel(this.selectedChat['id']);
        }
        else {
            this.getInfoToContact(this.selectedChat['id']);
        }
    };
    AppComponent.prototype.getAllChannels = function () {
        var _this = this;
        var url = this.baseUrl + 'channels/listByUser';
        var form = {
            number: null,
            offset: null
        };
        this.http.post(url, form).subscribe(function (channels) {
            console.log('All Channel');
            console.log(channels);
            _this.allChannels = channels;
            _this.globalService.myChats.next(_this.allChannels);
            _this.pushStreamClient.disconnect();
            _this.pushStreamClient.removeAllChannels();
            if ($bean.isNotEmpty(_this.allChannels)) {
                for (var i = 0; i < _this.allChannels.length; i++) {
                    _this.listenChannel(_this.allChannels[i]['id']);
                }
            }
        });
    };
    AppComponent.prototype.getUserLogin = function () {
        var _this = this;
        var url = this.baseUrl + 'userLogin';
        this.http.get(url).subscribe(function (data) {
            _this.userLogin = data;
            _this.globalService.userLogin.next(_this.userLogin);
        });
    };
    AppComponent.prototype.getInfoToChannel = function (channelId) {
        var _this = this;
        // kiểm tra liên kết user - channel
        var url = this.baseUrl + 'users/checkLinkToChannel';
        var inputChannel = {
            channelId: channelId
        };
        this.http.post(url, inputChannel).subscribe(function (userChannel) {
            if ($bean.isNotEmpty(userChannel)) {
                //  Đã có liên kết
                //  Nếu chưa được chấp nhận thì hiển thị request đang chờ
                //  Nếu đã là thành viên thì request lấy dữ liệu
                _this.requestChat = userChannel;
                console.log('RequestChat');
                console.log(_this.requestChat);
                if (userChannel['status'] == _this.STATUS_ACCEPTED) {
                    _this.setConnectionStatus({
                        status: _this.CONNECTION_STATUS_CONNECTED,
                        isCheck: true
                    });
                    _this.loadMessageByChannel(channelId, _this.DEFAULT_NUMBER_MESSAGE, userChannel['position']);
                }
                else {
                    _this.setConnectionStatus({
                        status: _this.CONNECTION_STATUS_PENDING,
                        isCheck: true
                    });
                }
            }
            else {
                //  Nếu không là thành viên hiển thị box request to chat
                _this.setConnectionStatus({
                    status: _this.CONNECTION_STATUS_NOT_CONNECT,
                    isCheck: true
                });
            }
        });
    };
    AppComponent.prototype.getInfoToContact = function (contactId) {
        var _this = this;
        //  Nếu đã có contact thì chuyển load messenger
        var url = this.baseUrl + "users/checkLinkToContact";
        var form = {
            contactId: contactId
        };
        this.http.post(url, form).subscribe(function (userChannel) {
            if ($bean.isNotEmpty(userChannel)) {
                console.log('Link user - channel !');
                console.log(userChannel);
                console.log('UserLogin');
                console.log(_this.userLogin);
                _this.requestChat = userChannel;
                // //  Get lấy link contact - channel để kiểm tra kết quả
                // let url = this.baseUrl + 'users/checkLinkUserChannel';
                // let inputChannel = {
                //   userId: contactId,
                //   channelId: userChannel['channelId']
                // }
                // this.http.post(url, form).subscribe(contactChannel => {
                //   this.setConnectionStatus({
                //     status: userChannel['status'],
                //     isCheck: true
                //   });
                //   if (contactChannel['status'] == this.STATUS_ACCEPT) {
                //     this.loadMessageByChannel(userChannel['channelId'], this.DEFAULT_NUMBER_MESSAGE, userChannel['position']);
                //   }
                // })
                //  Lấy thông tin xem channel đã được active hay chưa 
                var url_1 = _this.baseUrl + 'channels/' + userChannel['channelId'];
                _this.http.get(url_1).subscribe(function (channel) {
                    if (channel['status'] == _this.STATUS_ACTIVE) {
                        _this.setConnectionStatus({
                            status: _this.CONNECTION_STATUS_CONNECTED,
                            isCheck: true
                        });
                        _this.loadMessageByChannel(userChannel['channelId'], _this.DEFAULT_NUMBER_MESSAGE, userChannel['position']);
                    }
                    else {
                        _this.setConnectionStatus({
                            status: _this.CONNECTION_STATUS_PENDING,
                            isCheck: true
                        });
                    }
                });
            }
            else {
                _this.setConnectionStatus({
                    status: _this.CONNECTION_STATUS_NOT_CONNECT,
                    isCheck: true
                });
            }
        });
    };
    AppComponent.prototype.loadMessageByChannel = function (channelId, number, offset) {
        var _this = this;
        var url = this.baseUrl + 'messengers/byChannel';
        var form = {
            channelId: channelId,
            number: number,
            offset: offset
        };
        this.http.post(url, form).subscribe(function (data) {
            if ($bean.isNotEmpty(data)) {
                console.log('Messenger By channel');
                console.log(data);
                var moreMessage = [];
                moreMessage = data;
                for (var i = (moreMessage.length - 1); i >= 0; i--) {
                    _this.listMessages.push(moreMessage[i]);
                }
            }
        });
    };
    AppComponent.prototype.setConnectionStatus = function (obj) {
        if ($bean.isNotEmpty(obj)) {
            for (var key in obj) {
                if (key in this.connectionStatus) {
                    this.connectionStatus[key] = obj[key];
                }
            }
        }
    };
    AppComponent.prototype.getListRequestByChannel = function (channelId) {
        var _this = this;
        var url = this.baseUrl + 'user/listRequestChannel';
        var form = {
            channelId: channelId
        };
        this.http.post(url, form).subscribe(function (data) {
            _this.listRequestByChannel = data;
            console.log('List Request !');
            console.log(data);
        });
    };
    AppComponent.prototype.getListSentRequest = function (number, offset) {
        var _this = this;
        var url = this.baseUrl + 'users/listSentRequest';
        var form = {
            number: number,
            offset: offset
        };
        this.http.post(url, form).subscribe(function (data) {
            _this.listSentRequest = data;
            console.log('List Request !');
            console.log(data);
        });
    };
    AppComponent.prototype.getListIncomeRequest = function (number, offset) {
        var _this = this;
        var url = this.baseUrl + 'users/listIncomeRequest';
        var form = {
            number: number,
            offset: offset
        };
        this.http.post(url, form).subscribe(function (data) {
            _this.listIncomeRequest = data;
            console.log('List Request !');
            console.log(data);
        });
    };
    AppComponent.prototype.sendRequest = function () {
        if (this.selectedChat['role'] == this.ROLE_IS_CHANNEL) {
            this.requestToChat();
        }
        else {
            this.addContact();
        }
    };
    AppComponent.prototype.requestToChat = function () {
        var _this = this;
        var url = this.baseUrl + 'users/requestToChat';
        var form = {
            channelId: this.selectedChat.id
        };
        this.http.post(url, form).subscribe(function (data) {
            console.log('Success request Chat !');
            console.log(data);
            _this.requestChat = data;
            _this.getInfoToChannel(_this.requestChat['channelId']);
        });
    };
    AppComponent.prototype.addContact = function () {
        var _this = this;
        var url = this.baseUrl + 'channels/addContact';
        var form = {
            members: [this.selectedChat.id]
        };
        this.http.post(url, form).subscribe(function (data) {
            console.log('Success request to Contact !');
            console.log(data);
            // Thay đổi danh sách kênh kết nối
            _this.globalService.changeOrderListChats.next(true);
            _this.getInfoToContact(_this.selectedChat['id']);
        });
    };
    AppComponent.prototype.acceptRequest = function () {
        var _this = this;
        if ($bean.isNotEmpty(this.requestChat)) {
            var url = this.baseUrl + 'users/acceptRequest';
            var form = {
                requestId: this.requestChat['id']
            };
            this.http.post(url, form).subscribe(function (data) {
                console.log('Accept chat');
                console.log(data);
                _this.requestChat = data;
                _this.getInfoToChannel(_this.requestChat['channelId']);
            });
        }
    };
    AppComponent.prototype.rejectRequest = function () {
        var _this = this;
        if ($bean.isNotEmpty(this.requestChat)) {
            var url = this.baseUrl + 'users/rejectRequest';
            var form = {
                requestId: this.requestChat['id']
            };
            this.http.post(url, form).subscribe(function (data) {
                console.log('Reject Chat');
                console.log(data);
                _this.requestChat = data;
                _this.firstAccess = true;
                _this.globalService.changeOrderListChats.next(true);
            });
        }
    };
    AppComponent.prototype.deleteRequest = function () {
        var _this = this;
        if ($bean.isNotEmpty(this.requestChat)) {
            var url = this.baseUrl + 'users/deleteRequest';
            var form = {
                requestId: this.requestChat['id']
            };
            this.http.post(url, form).subscribe(function (data) {
                console.log('Delete chat');
                console.log(data);
                _this.firstAccess = true;
                _this.globalService.changeOrderListChats.next(true);
            });
        }
    };
    // // Lấy danh sách người dùng hệ thống
    // getListUser() {
    //   const url = this.baseUrl + 'users';
    //   this.http.get(url).subscribe(data => {
    //     if ($bean.isNotNil(data)) {
    //       this.listUser = data;
    //     } else {
    //       console.log('Empty users');
    //     }
    //   });
    // }
    //
    // // Truy cập vào channel
    // selectChannel(channel) {
    //   if ($bean.isNotEmpty(channel) && channel.id !== this.selectedChat.id) {
    //     this.selectedChat = channel;
    //     this.listMessageByChannel = [];
    //     this.accessChannel(this.selectedChat.id);
    //   }
    // }
    // // Lấy những message đầu tiên và bắt đầu lắng nghe kênh
    // accessChannel(channelId) {
    //   this.getFirstListMessage(channelId, this.DEFAULT_NUMBER_MESSAGE, this.DEFAULT_NUMBER_OFSET);
    //   this.listenChannel(channelId);
    // }
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
    //  connect Pushstream server
    AppComponent.prototype.initConnectPushStream = function () {
        this.pushStreamClient.onmessage = this.messageReceived.bind(this);
        this.pushStreamClient.connect();
    };
    // subcribe channel
    AppComponent.prototype.subChannel = function (channelId) {
        this.pushStreamClient.disconnect();
        var option = null;
        console.log(this.pushStreamClient.channels);
        this.pushStreamClient.addChannel(channelId, option);
        this.pushStreamClient.onmessage = this.messageReceived.bind(this);
        this.pushStreamClient.connect();
        console.log('Count sub channel : ' + this.pushStreamClient.channelsCount);
    };
    AppComponent.prototype.removeAllChannel = function () {
        this.pushStreamClient.removeAllChannels();
        console.log('Count sub channel : ' + this.pushStreamClient.channelsCount);
    };
    // Unsubcribe channel
    AppComponent.prototype.unSubChannel = function (channelId) {
        this.pushStreamClient.removeChannel(channelId);
        console.log('Count sub channel : ' + this.pushStreamClient.channelsCount);
    };
    AppComponent.prototype.addUserToChat = function () {
        $('#modalDetailAddUserToChat').modal('show');
        // reset lại giá trị của đối tượng newChannel
        this.globalService.addUserToChat.next({ channelId: this.requestChat['channelId'] });
    };
    AppComponent.prototype.addNewChannel = function () {
        $('#modalInitAddChannel').modal('show');
        // reset lại giá trị của đối tượng newChannel
        this.globalService.newChannel.next({ members: [this.selectedChat['id']] });
    };
    AppComponent.prototype.addMoreUser = function () {
        if (this.selectedChat['role'] == this.ROLE_IS_CHANNEL) {
            this.addUserToChat();
        }
        else {
            this.addNewChannel();
        }
    };
    AppComponent.prototype.getInfoChannel = function (channelId) {
        var _this = this;
        var url = this.baseUrl + 'channels/infoChannel';
        var form = {
            channelId: channelId
        };
        this.http.post(url, form).subscribe(function (channel) {
            if ($bean.isNotEmpty(channel)) {
                _this.infoChannel = channel;
                if ($bean.isNotEmpty(_this.infoChannel['users'])) {
                    _this.countMembers = _this.infoChannel['users'].length;
                }
            }
        });
    };
    AppComponent.prototype.getInfoDetailChannel = function () {
        $('#modalBoxChat').modal('show');
        // reset lại giá trị của đối tượng newChannel
        this.globalService.infoChat.next({ infoChat: this.infoChannel, linkUserChannel: this.requestChat });
    };
    AppComponent.prototype.getInfoDetailContact = function () {
        $('#modalBoxContact').modal('show');
        // reset lại giá trị của đối tượng newChannel
        this.globalService.infoContact.next({ infoContact: this.selectedChat, linkUserChannel: this.requestChat });
    };
    AppComponent.prototype.showInfoChannel = function () {
        if (this.selectedChat['role'] == this.ROLE_IS_CHANNEL) {
            this.getInfoDetailChannel();
        }
        else {
            this.getInfoDetailContact();
        }
    };
    // Handler xử lý message lắng nghe từ PushStream khi có message mới
    AppComponent.prototype.messageReceived = function (text, id, channelId) {
        this.dataFromPushstream = JSON.parse(text);
        console.log("Messenger Recieve :");
        console.log(this.dataFromPushstream);
        if ($bean.isNotEmpty(this.dataFromPushstream) && (channelId == this.requestChat['channelId'])) {
            switch (this.dataFromPushstream['type']) {
                case this.TYPE_NEW_MESSENGER: {
                    // Kiểm tra nếu người dùng mới Accept và channel thì sẽ lấy lại dữ liệu message
                    this.listMessages.push(this.dataFromPushstream['value']);
                    this.moveToLastMessage();
                    break;
                }
                case this.TYPE_UPDATED_MESSENGER: {
                    if ($bean.isNotEmpty(this.listMessages)) {
                        for (var i = 0; i < this.listMessages.length; i++) {
                            if (this.listMessages[i].id == this.dataFromPushstream['value'].id) {
                                this.listMessages[i] = this.dataFromPushstream['value'];
                                break;
                            }
                        }
                    }
                    break;
                }
                case this.TYPE_DELETED_MESSENGER: {
                    if ($bean.isNotEmpty(this.listMessages)) {
                        for (var i = 0; i < this.listMessages.length; i++) {
                            if (this.listMessages[i].id == this.dataFromPushstream['value'].id) {
                                this.listMessages.splice(i, 1);
                                break;
                            }
                        }
                    }
                    break;
                }
                case this.TYPE_NEW_REACT: {
                    if ($bean.isNotEmpty(this.listMessages)) {
                        for (var i = 0; i < this.listMessages.length; i++) {
                            if (this.listMessages[i].id == this.dataFromPushstream.messengerId) {
                                if ($bean.isEmpty(this.listMessages[i]['userMessengers'])) {
                                    this.listMessages[i]['userMessengers'] = [];
                                }
                                this.listMessages[i]['userMessengers'].push(this.dataFromPushstream.value);
                                this.listMessages[i]['userMessengers'] = this.refreshReactMessenger(this.listMessages[i]['userMessengers']);
                                break;
                            }
                        }
                    }
                    break;
                }
                case this.TYPE_DELETED_REACT: {
                    if ($bean.isNotEmpty(this.listMessages)) {
                        for (var i = 0; i < this.listMessages.length; i++) {
                            if (this.listMessages[i].id == this.dataFromPushstream.messengerId) {
                                if ($bean.isNotEmpty(this.listMessages[i]['userMessengers'])) {
                                    for (var j = 0; j < this.listMessages[i]['userMessengers'].length; j++) {
                                        if (this.listMessages[i]['userMessengers'][j].id == this.dataFromPushstream.value.id) {
                                            this.listMessages[i]['userMessengers'].splice(j, 1);
                                            this.listMessages[i]['userMessengers'] = this.refreshReactMessenger(this.listMessages[i]['userMessengers']);
                                            break;
                                        }
                                    }
                                }
                                break;
                            }
                        }
                    }
                    break;
                }
                default: {
                    //statements; 
                    break;
                }
            }
        }
    };
    // // Lấy danh sách những message đầu tiên
    // getFirstListMessage(channelId, number, offset) {
    //   const formData = {
    //     channelId,
    //     number: this.getNumber(number, 'message'),
    //     offset: this.getOffset(offset)
    //   };
    //   const url = this.baseUrl + 'messengerByNumber';
    //   this.http.post(url, formData).subscribe(data => {
    //     if ($bean.isNotNil(data)) {
    //       this.listMessageByChannel = data;
    //       // Reverse data
    //       this.listMessageByChannel.reverse();
    //       this.moveToLastMessage();
    //     }
    //   }, error => {
    //     console.log('Something went wrong ', error);
    //   });
    // }
    // Gửi mesage trên channel đang truy cập
    AppComponent.prototype.sendMessage = function () {
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
    AppComponent.prototype.sendText = function () {
        var _this = this;
        if ($bean.isNotEmpty(this.inputValue)) {
            var message = {
                channelId: this.requestChat['channelId'],
                message: this.inputValue
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
                    _this.moveToLastMessage();
                }
            }, function (error) {
                console.log('Something went wrong ', error);
            });
        }
    };
    // Scroll xuống message cuối cùng trên kênh
    AppComponent.prototype.moveToLastMessage = function () {
        this.scrollToElement('last-message');
    };
    // Scroll xuống vị trí được chỉ định
    AppComponent.prototype.scrollToElement = function (idElement) {
        var element = document.getElementById(idElement);
        if ($bean.isNotNil(element)) {
            element.scrollIntoView(false);
        }
    };
    // Lấy các messenger cũ
    AppComponent.prototype.loadPreviousMessenger = function (numberMessage) {
        var _this = this;
        var a = 0;
        var containerMessenger = document.getElementById('container-messenger');
        if (containerMessenger.scrollTop === 0) {
            a++;
            console.log(a);
            var formData = {
                channelId: this.requestChat['channelId'],
                number: 20,
                offset: this.listMessages.length
            };
            var url = this.baseUrl + 'messengers/byChannel';
            this.http.post(url, formData).subscribe(function (data) {
                if ($bean.isNotNil(data)) {
                    _this.moreMessage = data;
                    if ($bean.isNotEmpty(_this.moreMessage)) {
                        console.log(_this.moreMessage);
                        // Mark phần tử để scroll xuống sau khi load thêm dữ liệu
                        _this.moreMessage[0].isMark = _this.PREFIX_MARK_ELEMENT + '-' + _this.listMessages.length;
                        _this.currentMarkPosition = _this.PREFIX_MARK_ELEMENT + '-' + _this.listMessages.length;
                        for (var _i = 0, _a = _this.moreMessage; _i < _a.length; _i++) {
                            var message = _a[_i];
                            _this.listMessages.splice(0, 0, message);
                        }
                        if ($bean.isNotEmpty(_this.currentMarkPosition)) {
                            _this.scrollToElement(_this.currentMarkPosition);
                        }
                    }
                }
            }, function (error) {
                console.log('Something went wrong ', error);
            });
        }
    };
    // Bắt sự kiện người dùng enter gửi dữ liệu
    AppComponent.prototype.checkSendMessage = function (event) {
        if (event.keyCode === this.ENTER_KEY_CODE) {
            this.sendMessage();
        }
    };
    AppComponent.prototype.updateMessenger = function () {
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
    AppComponent.prototype.deleteMessenger = function (messengerId) {
        var url = this.baseUrl + 'messengers/delete';
        var form = {
            messengerId: messengerId
        };
        this.http.post(url, form).subscribe(function (data) {
            console.log('Deleted messenger');
            console.log(data);
        });
    };
    AppComponent.prototype.showGalleryBox = function () {
        $('#galleryModalBox').modal('show');
    };
    AppComponent.prototype.deleteUploadFile = function (idFile) {
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
    AppComponent.prototype.cancelUploadFile = function () {
        this.processUpload = false;
        this.uploadFiles = [];
    };
    AppComponent.prototype.doUpload = function (event) {
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
    AppComponent.prototype.addFileToUpload = function (file) {
        var _this = this;
        if (file) {
            var typeFile_1 = (file.type.includes('image')) ? this.TYPE_MESSENGER_IMAGE : this.TYPE_MESSENGER_FILE;
            var url_2 = undefined;
            if (typeFile_1 == this.TYPE_MESSENGER_IMAGE) {
                console.log('preview image');
                var reader = new FileReader();
                reader.readAsDataURL(file); // read file as data url
                reader.onload = function (event) {
                    url_2 = event.target['result'];
                    var objFile = {
                        id: $bean.genRandomID(16),
                        type: typeFile_1,
                        file: file,
                        url: url_2
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
    AppComponent.prototype.upload = function () {
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
    AppComponent.prototype.finishUploadFiles = function () {
        this.processUpload = false;
        this.uploadFiles = [];
        this.inputValue = '';
    };
    AppComponent.prototype.chooseFile = function () {
        $('input[type="file"]').val('');
        $('#inputFile').trigger('click');
    };
    AppComponent.prototype.allowDrop = function (ev, showBorder) {
        ev.preventDefault();
        if (showBorder) {
            event.target['style'].border = "4px dotted green";
        }
    };
    AppComponent.prototype.dropIntoBoxSend = function (ev) {
        ev.preventDefault();
        var files = ev.dataTransfer.files;
        if ($bean.isNotEmpty(files)) {
            for (var i = 0; i < files.length; i++) {
                this.addFileToUpload(files[i]);
            }
        }
        event.target['style'].border = "none";
    };
    AppComponent.prototype.dropIntoBoxMessage = function (ev) {
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
        event.target['style'].border = "none";
    };
    AppComponent.prototype.handleClick = function (evt) {
        console.log(evt.emoji);
        var selectedEmoji = evt.emoji;
        this.inputValue += selectedEmoji.native;
    };
    AppComponent.prototype.emojiClick = function (evt) {
        console.log(evt.emoji);
        console.log(evt.$event);
    };
    AppComponent.prototype.showBoxEmojis = function (event, triggerId, classBoxEmoji) {
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
    AppComponent.prototype.showBoxMessageEmojis = function (event) {
        this.showBoxEmojis(event, 'icon-message-emojis', this.CLASS_BOX_MESSAGE_EMOJIS);
    };
    AppComponent.prototype.hideBoxMessageEmojis = function () {
        this.styleBoxMessageEmojis.top = -1000;
        this.styleBoxMessageEmojis.left = -1000;
    };
    AppComponent.prototype.getEmojisDefault = function () {
        var _this = this;
        var url = this.baseUrl + 'emojis';
        this.http.get(url).subscribe(function (emojis) {
            _this.listEmojis = emojis;
        });
    };
    AppComponent.prototype.showBoxReactEmojis = function (event, triggerId, messenger) {
        this.showBoxEmojis(event, triggerId, this.CLASS_BOX_REACT_EMOJIS);
        this.selectedMessenger = messenger;
    };
    AppComponent.prototype.hideBoxReactEmojis = function () {
        this.styleBoxReactEmojis.top = -1000;
        this.styleBoxReactEmojis.left = -1000;
    };
    AppComponent.prototype.reactMessenger = function (emoji) {
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
    AppComponent.prototype.newReactMessenger = function (emoji) {
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
    AppComponent.prototype.deleteReactMessenger = function (react) {
        var url = this.baseUrl + 'userMessengers/deleteReact';
        var form = {
            userMessengerId: react.id
        };
        this.http.post(url, form).subscribe(function (data) {
            console.log('Delete react ');
            console.log(data);
        });
    };
    AppComponent.prototype.showBoxMessageActivities = function (messenger, triggerId, elementTagId, event) {
        this.selectedMessenger = messenger;
        console.log('Selected messenger');
        console.log(this.selectedMessenger);
        this.setUpActivites(messenger);
        var triggerElement = $('#' + triggerId);
        var triggerTop = triggerElement.offset().top;
        var triggerLeft = triggerElement.offset().left;
        var outerWidthTrigger = triggerElement.outerWidth();
        var outerHeightTrigger = triggerElement.outerHeight();
        var activitiesMessageBox = $('.' + this.CLASS_BOX_MESSAGE_ACTIVITIES);
        var outerWidthActivitiesMessageBox = activitiesMessageBox.outerWidth();
        var outerHeightActivitiesMessageBox = activitiesMessageBox.outerHeight();
        var activitiesMessageBoxTop = triggerTop - outerHeightActivitiesMessageBox / 2;
        var activitiesMessageBoxLeft = triggerLeft - outerWidthTrigger - outerWidthActivitiesMessageBox - 10;
        this.styleBoxMessageActivities.top = activitiesMessageBoxTop;
        this.styleBoxMessageActivities.left = activitiesMessageBoxLeft;
        this.selectedMessageElementId = elementTagId;
        console.log(this.styleBoxMessageActivities);
        event.stopPropagation();
    };
    AppComponent.prototype.hideBoxMessageActivities = function () {
        this.styleBoxMessageActivities.top = -1000;
        this.styleBoxMessageActivities.left = -1000;
    };
    AppComponent.prototype.setUpActivites = function (messenger) {
        if ($bean.isNotNil(messenger.path)) {
            this.setUpActivitiesObj.download = true;
        }
    };
    AppComponent.prototype.beginUpdateMessenger = function () {
        this.processUpdateMessenger = true;
        this.inputValue = this.selectedMessenger.message;
    };
    AppComponent.prototype.copyMessenger = function () {
        this.processCopyMessenger = true;
        if ($bean.isNotEmpty(this.selectedMessageElementId)) {
            $('#inputCopy').val($('#' + this.selectedMessageElementId).html());
            $('#inputCopy').select();
            document.execCommand("copy");
            alert("Copied the text: " + $('#inputCopy').val());
            this.processCopyMessenger = false;
        }
        else {
            alert('Ban chua chon message !');
        }
    };
    // downloadFile() {
    //   let url = this.baseUrl + 'attachments/' + this.selectedMessenger.path;
    //   this.http.get(url).subscribe(data => {
    //     console.log('Download');
    //     console.log(data);
    //   })
    // }
    AppComponent.prototype.beginForwardMessenger = function () {
    };
    AppComponent.prototype.beginRemoveMessenger = function () {
        this.removeMessenger();
    };
    AppComponent.prototype.removeMessenger = function () {
        var url = this.baseUrl + 'messengers/delete';
        var form = {
            messengerId: this.selectedMessenger.id
        };
        this.http.post(url, form).subscribe(function (data) {
            console.log('Delete messenger');
            console.log(data);
        });
    };
    AppComponent.prototype.refreshReactMessenger = function (reacts) {
        var cloneReacts = $bean.clone(reacts);
        return cloneReacts;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppComponent.prototype, "checkClick", null);
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
/* harmony import */ var _channel_view_chats_channel_view_chats_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./channel/view-chats/channel-view-chats.component */ "./src/app/channel/view-chats/channel-view-chats.component.ts");
/* harmony import */ var _channel_view_contacts_channel_view_contacts_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./channel/view-contacts/channel-view-contacts.component */ "./src/app/channel/view-contacts/channel-view-contacts.component.ts");
/* harmony import */ var _channel_search_view_group_channel_search_view_group_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./channel/search-view-group/channel-search-view-group.component */ "./src/app/channel/search-view-group/channel-search-view-group.component.ts");
/* harmony import */ var _channel_search_view_all_channel_search_view_all_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./channel/search-view-all/channel-search-view-all.component */ "./src/app/channel/search-view-all/channel-search-view-all.component.ts");
/* harmony import */ var _channel_search_view_people_channel_search_view_people_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./channel/search-view-people/channel-search-view-people.component */ "./src/app/channel/search-view-people/channel-search-view-people.component.ts");
/* harmony import */ var _sidebar_side_bar_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sidebar/side-bar-view.component */ "./src/app/sidebar/side-bar-view.component.ts");
/* harmony import */ var _modal_modal_add_channel_modal_add_channel_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modal/modal-add-channel/modal-add-channel.component */ "./src/app/modal/modal-add-channel/modal-add-channel.component.ts");
/* harmony import */ var _modal_modal_box_gallery_modal_box_gallery_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modal/modal-box-gallery/modal-box-gallery.component */ "./src/app/modal/modal-box-gallery/modal-box-gallery.component.ts");
/* harmony import */ var _modal_modal_update_profile_modal_update_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modal/modal-update-profile/modal-update-profile.component */ "./src/app/modal/modal-update-profile/modal-update-profile.component.ts");
/* harmony import */ var _modal_modal_box_notification_modal_box_notification_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modal/modal-box-notification/modal-box-notification.component */ "./src/app/modal/modal-box-notification/modal-box-notification.component.ts");
/* harmony import */ var _modal_modal_box_chat_modal_box_chat_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modal/modal-box-chat/modal-box-chat.component */ "./src/app/modal/modal-box-chat/modal-box-chat.component.ts");
/* harmony import */ var _modal_modal_box_members_modal_box_members_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modal/modal-box-members/modal-box-members.component */ "./src/app/modal/modal-box-members/modal-box-members.component.ts");
/* harmony import */ var _modal_modal_confirm_logout_modal_confirm_logout_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modal/modal-confirm-logout/modal-confirm-logout.component */ "./src/app/modal/modal-confirm-logout/modal-confirm-logout.component.ts");
/* harmony import */ var _modal_modal_info_summary_modal_info_summary_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modal/modal-info-summary/modal-info-summary.component */ "./src/app/modal/modal-info-summary/modal-info-summary.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _modal_modal_box_confirm_request_modal_box_confirm_request_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./modal/modal-box-confirm-request/modal-box-confirm-request.component */ "./src/app/modal/modal-box-confirm-request/modal-box-confirm-request.component.ts");
/* harmony import */ var _modal_modal_add_user_to_chat_modal_add_user_to_chat_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./modal/modal-add-user-to-chat/modal-add-user-to-chat.component */ "./src/app/modal/modal-add-user-to-chat/modal-add-user-to-chat.component.ts");
/* harmony import */ var _modal_modal_box_contact_modal_box_contact_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./modal/modal-box-contact/modal-box-contact.component */ "./src/app/modal/modal-box-contact/modal-box-contact.component.ts");
/* harmony import */ var _modal_modal_box_request_modal_box_request_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./modal/modal-box-request/modal-box-request.component */ "./src/app/modal/modal-box-request/modal-box-request.component.ts");
/* harmony import */ var _hyd_base_print_data_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../hyd/base/print-data.pipe */ "./src/hyd/base/print-data.pipe.ts");
/* harmony import */ var _box_box_react_messenger_box_react_messenger_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./box/box-react-messenger/box-react-messenger.component */ "./src/app/box/box-react-messenger/box-react-messenger.component.ts");
/* harmony import */ var _box_box_react_emoji_users_box_react_emoji_users_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./box/box-react-emoji-users/box-react-emoji-users.component */ "./src/app/box/box-react-emoji-users/box-react-emoji-users.component.ts");
/* harmony import */ var _box_box_users_read_messenger_box_users_read_messenger_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./box/box-users-read-messenger/box-users-read-messenger.component */ "./src/app/box/box-users-read-messenger/box-users-read-messenger.component.ts");
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _channel_view_chats_channel_view_chats_component__WEBPACK_IMPORTED_MODULE_9__["ChannelViewChatsComponent"],
                _channel_view_contacts_channel_view_contacts_component__WEBPACK_IMPORTED_MODULE_10__["ChannelViewContactsComponent"],
                _channel_search_view_group_channel_search_view_group_component__WEBPACK_IMPORTED_MODULE_11__["ChannelSearchViewGroupComponent"],
                _channel_search_view_all_channel_search_view_all_component__WEBPACK_IMPORTED_MODULE_12__["ChannelSearchViewAllComponent"],
                _channel_search_view_people_channel_search_view_people_component__WEBPACK_IMPORTED_MODULE_13__["ChannelSearchViewPeopleComponent"],
                _sidebar_side_bar_view_component__WEBPACK_IMPORTED_MODULE_14__["SideBarViewComponent"],
                _modal_modal_add_channel_modal_add_channel_component__WEBPACK_IMPORTED_MODULE_15__["ModalAddChannelComponent"],
                _modal_modal_add_user_to_chat_modal_add_user_to_chat_component__WEBPACK_IMPORTED_MODULE_25__["ModalAddUserToChatComponent"],
                _modal_modal_box_gallery_modal_box_gallery_component__WEBPACK_IMPORTED_MODULE_16__["ModalBoxGalleryComponent"],
                _modal_modal_update_profile_modal_update_profile_component__WEBPACK_IMPORTED_MODULE_17__["ModalUpdateProfileComponent"],
                _modal_modal_box_notification_modal_box_notification_component__WEBPACK_IMPORTED_MODULE_18__["ModalBoxNotificationComponent"],
                _modal_modal_box_chat_modal_box_chat_component__WEBPACK_IMPORTED_MODULE_19__["ModalBoxChatComponent"],
                _modal_modal_box_request_modal_box_request_component__WEBPACK_IMPORTED_MODULE_27__["ModalBoxRequestComponent"],
                _modal_modal_box_contact_modal_box_contact_component__WEBPACK_IMPORTED_MODULE_26__["ModalBoxContactComponent"],
                _modal_modal_box_members_modal_box_members_component__WEBPACK_IMPORTED_MODULE_20__["ModalBoxMembersComponent"],
                _modal_modal_confirm_logout_modal_confirm_logout_component__WEBPACK_IMPORTED_MODULE_21__["ModalConfirmLogoutComponent"],
                _modal_modal_info_summary_modal_info_summary_component__WEBPACK_IMPORTED_MODULE_22__["ModalInfoSummaryComponent"],
                _modal_modal_box_confirm_request_modal_box_confirm_request_component__WEBPACK_IMPORTED_MODULE_24__["ModalBoxConfirmRequestComponent"],
                _box_box_react_messenger_box_react_messenger_component__WEBPACK_IMPORTED_MODULE_29__["BoxReactMessengerComponent"],
                _box_box_react_emoji_users_box_react_emoji_users_component__WEBPACK_IMPORTED_MODULE_30__["BoxReactEmojiUsersComponent"],
                _box_box_users_read_messenger_box_users_read_messenger_component__WEBPACK_IMPORTED_MODULE_31__["BoxUsersReadMessengerComponent"],
                _hyd_base_print_data_pipe__WEBPACK_IMPORTED_MODULE_28__["PrintDataPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _app_routing_component__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_3__["PickerModule"],
                _ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_4__["EmojiModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_23__["MDBBootstrapModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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

/***/ "./src/app/channel/search-view-all/channel-search-view-all.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/channel/search-view-all/channel-search-view-all.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW5uZWwvc2VhcmNoLXZpZXctYWxsL2NoYW5uZWwtc2VhcmNoLXZpZXctYWxsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/channel/search-view-all/channel-search-view-all.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/channel/search-view-all/channel-search-view-all.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"bg-light link p-2\" *ngIf=\"bean.isNotEmpty(listPeople)\">People</h3>\r\n<div class=\"people-container\" style=\"overflow: auto\"></div>\r\n<div class=\"row mb-2 chat-row\" *ngFor=\"let person of listPeople\" (click)=\"choosePerson(person)\">\r\n  <div class=\"w-25 text-center\">\r\n    <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg\" alt=\"IMG of Avatars\"\r\n         class=\"avatar img-fluid z-depth-1-half rounded-circle\">\r\n  </div>\r\n  <div class=\"w-75 pr-2 pt-3\">\r\n    <b>{{person.username}}</b>\r\n  </div>\r\n</div>\r\n<div class=\"row text-right p-2\">\r\n  <span class=\"bold link\" *ngIf=\"bean.isNotEmpty(listPeople)\" (click)=\"loadMorePeople()\">More</span>\r\n</div>\r\n<hr>\r\n<h3 class=\"bg-light p-2 link\" *ngIf=\"bean.isNotEmpty(listChats)\">Group Chat</h3>\r\n<div class=\"group-container\" style=\"overflow:auto;\">\r\n  <div class=\"row mb-2 chat-row\" *ngFor=\"let chat of listChats\" (click)=\"chooseChat(chat)\">\r\n    <div class=\"w-25 text-center\">\r\n      <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg\" alt=\"IMG of Avatars\"\r\n           class=\"avatar img-fluid z-depth-1-half rounded-circle\">\r\n    </div>\r\n    <div class=\"w-50\">\r\n      <b>{{chat.title}}</b>\r\n      <div class=\"small text-muted\">\r\n        {{chat.slogan}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row text-right p-2\">\r\n  <span class=\"bold link\" *ngIf=\"bean.isNotEmpty(listChats)\" (click)=\"loadMoreChat()\">More</span>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/channel/search-view-all/channel-search-view-all.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/channel/search-view-all/channel-search-view-all.component.ts ***!
  \******************************************************************************/
/*! exports provided: ChannelSearchViewAllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelSearchViewAllComponent", function() { return ChannelSearchViewAllComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/global.service */ "./src/app/common/services/global.service.ts");





var ChannelSearchViewAllComponent = /** @class */ (function () {
    function ChannelSearchViewAllComponent(http, globalService, router) {
        this.http = http;
        this.globalService = globalService;
        this.router = router;
        this.LOCATION_SEARCH_ALL = 'SEARCH_ALL';
        this.DEFAUTL_NUMBER_CHAT = 10;
        this.DEFAULT_NUMBER_OFFSET = 0;
        // baseUrl = "https://chat.hyper.com:9999/";
        this.baseUrl = "http://chat.hyper.com:9000/";
        this.listPeople = [];
        this.listChats = [];
        this.searchChatsAndContacts = {
            listChats: [],
            listContacts: []
        };
        this.searchValue = '';
        this.bean = $bean;
        this.searchPeopleChats(this.DEFAUTL_NUMBER_CHAT, this.DEFAULT_NUMBER_OFFSET);
    }
    ChannelSearchViewAllComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.globalService.searchValue.subscribe(function (res) {
            if ($bean.isNotEmpty(res) && res['location'] == _this.LOCATION_SEARCH_ALL) {
                _this.searchValue = res.value;
                _this.searchPeopleChats(_this.DEFAUTL_NUMBER_CHAT, _this.DEFAULT_NUMBER_OFFSET);
            }
        });
    };
    ChannelSearchViewAllComponent.prototype.chooseChat = function (chat) {
        this.globalService.accessChat.next(chat);
    };
    ChannelSearchViewAllComponent.prototype.searchPeopleChats = function (number, offset) {
        var _this = this;
        var url = this.baseUrl + 'users/searchAll';
        var inputBound = {
            value: this.searchValue,
            number: number,
            offset: offset
        };
        this.http.post(url, inputBound).subscribe(function (data) {
            if ($bean.isNotEmpty(data)) {
                if ($bean.isNotEmpty(data)) {
                    _this.searchChatsAndContacts.listChats = data[0];
                    _this.searchChatsAndContacts.listContacts = data[1];
                }
            }
            else {
                _this.searchChatsAndContacts.listContacts = [];
                _this.searchChatsAndContacts.listChats = [];
            }
        });
    };
    ChannelSearchViewAllComponent.prototype.getMoreChats = function () {
        this.router.navigate(['/search?filter=groups']);
    };
    ChannelSearchViewAllComponent.prototype.getMoreContacts = function () {
        this.router.navigate(['/search?filter=people']);
    };
    ChannelSearchViewAllComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'channel-search-view-all',
            template: __webpack_require__(/*! ./channel-search-view-all.component.html */ "./src/app/channel/search-view-all/channel-search-view-all.component.html"),
            styles: [__webpack_require__(/*! ./channel-search-view-all.component.css */ "./src/app/channel/search-view-all/channel-search-view-all.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ChannelSearchViewAllComponent);
    return ChannelSearchViewAllComponent;
}());



/***/ }),

/***/ "./src/app/channel/search-view-group/channel-search-view-group.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/channel/search-view-group/channel-search-view-group.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW5uZWwvc2VhcmNoLXZpZXctZ3JvdXAvY2hhbm5lbC1zZWFyY2gtdmlldy1ncm91cC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/channel/search-view-group/channel-search-view-group.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/channel/search-view-group/channel-search-view-group.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"bg-light p-2\">Group Chat</h3>\r\n<div class=\"row link mb-2 chat-row\" *ngFor=\"let chat of searchChats\" (click)=\"chooseChat(chat)\">\r\n  <div class=\"w-25 text-center\">\r\n    <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg\" alt=\"IMG of Avatars\"\r\n         class=\"avatar img-fluid z-depth-1-half rounded-circle\">\r\n  </div>\r\n  <div class=\"w-50 mr-2\">\r\n    <b>{{chat.title}}</b>\r\n    <div class=\"small text-muted\">\r\n      {{chat.slogan}}\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row p-2\">\r\n  <div class=\"bold link text-right\" *ngIf=\"bean.isNotEmpty(searchChats)\"\r\n       (click)=\"moreSearchChats()\">More\r\n  </div>\r\n</div>\r\n<hr>\r\n"

/***/ }),

/***/ "./src/app/channel/search-view-group/channel-search-view-group.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/channel/search-view-group/channel-search-view-group.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ChannelSearchViewGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelSearchViewGroupComponent", function() { return ChannelSearchViewGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/services/global.service */ "./src/app/common/services/global.service.ts");




var ChannelSearchViewGroupComponent = /** @class */ (function () {
    function ChannelSearchViewGroupComponent(http, globalService) {
        this.http = http;
        this.globalService = globalService;
        this.LOCATION_SEARCH_GROUPS = 'SEARCH_GROUPS';
        this.DEFAULT_NUMBER_GROUP = 10;
        this.DEFAULT_NUMBER_OFFSET = 0;
        // baseUrl = "https://chat.hyper.com:9999/";
        this.baseUrl = "http://chat.hyper.com:9000/";
        this.searchChats = [];
        this.searchValue = '';
        this.bean = $bean;
        this.searchChannels(this.DEFAULT_NUMBER_GROUP, this.DEFAULT_NUMBER_OFFSET);
    }
    ChannelSearchViewGroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.globalService.searchValue.subscribe(function (res) {
            if ($bean.isNotEmpty(res) && res['location'] == _this.LOCATION_SEARCH_GROUPS) {
                _this.searchValue = res.value;
                _this.searchChannels(_this.DEFAULT_NUMBER_GROUP, _this.DEFAULT_NUMBER_OFFSET);
            }
        });
    };
    ChannelSearchViewGroupComponent.prototype.chooseChat = function (chat) {
        this.globalService.accessChat.next(chat);
    };
    ChannelSearchViewGroupComponent.prototype.searchChannels = function (number, offset) {
        var _this = this;
        var url = this.baseUrl + 'channels/searchByUser';
        var input = {
            value: this.searchValue,
            number: number,
            offset: offset
        };
        this.http.post(url, input).subscribe(function (data) {
            if ($bean.isNotEmpty(data)) {
                _this.searchChats = data;
            }
            else {
                _this.searchChats = [];
            }
        });
    };
    ChannelSearchViewGroupComponent.prototype.getMoreSearchChats = function (number, offset) {
        var _this = this;
        var url = this.baseUrl + 'channels/searchByUser';
        var input = {
            value: this.searchValue,
            number: number,
            offset: offset
        };
        this.http.post(url, input).subscribe(function (data) {
            if ($bean.isNotEmpty(data)) {
                var tempData = [];
                tempData = data;
                for (var i = 0; i < tempData.length; i++) {
                    _this.searchChats.push(tempData[i]);
                }
            }
        });
    };
    ChannelSearchViewGroupComponent.prototype.moreSearchChats = function () {
        this.getMoreSearchChats(this.DEFAULT_NUMBER_GROUP, this.searchChats.length);
    };
    ChannelSearchViewGroupComponent.prototype.getNumberGroups = function () {
    };
    ChannelSearchViewGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'channel-search-view-group',
            template: __webpack_require__(/*! ./channel-search-view-group.component.html */ "./src/app/channel/search-view-group/channel-search-view-group.component.html"),
            styles: [__webpack_require__(/*! ./channel-search-view-group.component.css */ "./src/app/channel/search-view-group/channel-search-view-group.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _common_services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
    ], ChannelSearchViewGroupComponent);
    return ChannelSearchViewGroupComponent;
}());



/***/ }),

/***/ "./src/app/channel/search-view-people/channel-search-view-people.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/channel/search-view-people/channel-search-view-people.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW5uZWwvc2VhcmNoLXZpZXctcGVvcGxlL2NoYW5uZWwtc2VhcmNoLXZpZXctcGVvcGxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/channel/search-view-people/channel-search-view-people.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/channel/search-view-people/channel-search-view-people.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"bg-light p-2\">People</h3>\r\n<div class=\"row link mb-2 chat-row\" *ngFor=\"let person of searchPeople\" (click)=\"choosePerson(person)\">\r\n  <div class=\"w-25 text-center\">\r\n    <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg\" alt=\"IMG of Avatars\"\r\n         class=\"avatar img-fluid z-depth-1-half rounded-circle\">\r\n  </div>\r\n  <div class=\"w-75 pr-2 pt-3\">\r\n    <b>{{person.username}}</b>\r\n    <p>( {{person.email}} )</p>\r\n  </div>\r\n</div>\r\n<div class=\"row link text-right p-2\">\r\n  <span class=\"bold link\" *ngIf=\"searchPeople.length < countSearch\"\r\n        (click)=\"moreSearchPeople()\">More</span>\r\n</div>\r\n<hr>\r\n"

/***/ }),

/***/ "./src/app/channel/search-view-people/channel-search-view-people.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/channel/search-view-people/channel-search-view-people.component.ts ***!
  \************************************************************************************/
/*! exports provided: ChannelSearchViewPeopleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelSearchViewPeopleComponent", function() { return ChannelSearchViewPeopleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/global.service */ "./src/app/common/services/global.service.ts");





var ChannelSearchViewPeopleComponent = /** @class */ (function () {
    function ChannelSearchViewPeopleComponent(http, globalService, router) {
        this.http = http;
        this.globalService = globalService;
        this.router = router;
        this.LOCATION_SEARCH_PEOPLE = 'SEARCH_PEOPLE';
        this.DEFAULT_NUMBER_PEOPLE = 10;
        this.DEFAULT_NUMBER_OFFSET = 0;
        // baseUrl = "https://chat.hyper.com:9999/";
        this.baseUrl = "http://chat.hyper.com:9000/";
        this.searchPeople = [];
        this.countSearch = 0;
        this.bean = $bean;
        this.searchValue = '';
        this.searchListPeople(this.DEFAULT_NUMBER_PEOPLE, this.DEFAULT_NUMBER_OFFSET);
        this.getCountSearch();
    }
    ChannelSearchViewPeopleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.globalService.searchValue.subscribe(function (res) {
            if ($bean.isNotEmpty(res) && (res['location'] == _this.LOCATION_SEARCH_PEOPLE)) {
                _this.searchValue = res.value;
                _this.getCountSearch();
                _this.searchListPeople(_this.DEFAULT_NUMBER_PEOPLE, _this.DEFAULT_NUMBER_OFFSET);
            }
        });
    };
    ChannelSearchViewPeopleComponent.prototype.getCountSearch = function () {
        var _this = this;
        var url = this.baseUrl + 'users/countSearch';
        var input = {
            value: this.searchValue
        };
        this.http.post(url, input).subscribe(function (data) {
            if ($bean.isNotEmpty(data)) {
                _this.countSearch = data['count'];
            }
        });
    };
    ChannelSearchViewPeopleComponent.prototype.choosePerson = function (person) {
        this.globalService.accessChat.next(person);
    };
    ChannelSearchViewPeopleComponent.prototype.searchListPeople = function (number, offset) {
        var _this = this;
        var url = this.baseUrl + 'users/searchAll';
        var input = {
            value: this.searchValue,
            number: number,
            offset: offset
        };
        this.http.post(url, input).subscribe(function (data) {
            if ($bean.isNotEmpty(data)) {
                _this.searchPeople = data;
            }
            else {
                _this.searchPeople = [];
            }
        });
    };
    ChannelSearchViewPeopleComponent.prototype.getMoreSearchPeople = function (number, offset) {
        var _this = this;
        var url = this.baseUrl + 'users/searchAll';
        var input = {
            value: this.searchValue,
            number: number,
            offset: offset
        };
        this.http.post(url, input).subscribe(function (data) {
            if ($bean.isNotEmpty(data)) {
                var tempData = [];
                tempData = data;
                for (var i = 0; i < tempData.length; i++) {
                    _this.searchPeople.push(tempData[i]);
                }
            }
        });
    };
    ChannelSearchViewPeopleComponent.prototype.moreSearchPeople = function () {
        this.getMoreSearchPeople(this.DEFAULT_NUMBER_PEOPLE, this.searchPeople.length);
    };
    ChannelSearchViewPeopleComponent.prototype.getNumberOfPeople = function () {
    };
    ChannelSearchViewPeopleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'channel-search-view-people',
            template: __webpack_require__(/*! ./channel-search-view-people.component.html */ "./src/app/channel/search-view-people/channel-search-view-people.component.html"),
            styles: [__webpack_require__(/*! ./channel-search-view-people.component.css */ "./src/app/channel/search-view-people/channel-search-view-people.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ChannelSearchViewPeopleComponent);
    return ChannelSearchViewPeopleComponent;
}());



/***/ }),

/***/ "./src/app/channel/view-chats/channel-view-chats.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/channel/view-chats/channel-view-chats.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW5uZWwvdmlldy1jaGF0cy9jaGFubmVsLXZpZXctY2hhdHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/channel/view-chats/channel-view-chats.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/channel/view-chats/channel-view-chats.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-2 link chat-row\" *ngFor=\"let channel of myChats\" (click)=\"chooseChat(channel)\">\r\n  <div class=\"w-25 text-center\">\r\n    <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg\" alt=\"IMG of Avatars\"\r\n         class=\"avatar img-fluid z-depth-1-half rounded-circle\">\r\n  </div>\r\n  <div class=\"w-50\">\r\n    <b *ngIf=\"channel.type == TYPE_CHAT_GROUP\">{{channel.title}}</b>\r\n    <b *ngIf=\"channel.type == TYPE_CHAT_CONTACT\">{{channel['users'][0].username}}</b>\r\n    <div class=\"small text-muted text-left\" style=\"width: 80%; overflow: hidden\">\r\n      {{channel['messengers'][0].message}}\r\n    </div>\r\n  </div>\r\n  <div class=\"w-25 pr-3\">\r\n    <div class=\"small text-center\">11:20 AM</div>\r\n    <div class=\"text-right\">\r\n      <span class=\"badge badge-pill badge-dark\">Dark</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--<div class=\"row text-right\" *ngIf=\"bean.isNotEmpty(myChats)\" (click)=\"moreChat()\"><b>More</b></div>-->\r\n\r\n"

/***/ }),

/***/ "./src/app/channel/view-chats/channel-view-chats.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/channel/view-chats/channel-view-chats.component.ts ***!
  \********************************************************************/
/*! exports provided: ChannelViewChatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelViewChatsComponent", function() { return ChannelViewChatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/global.service */ "./src/app/common/services/global.service.ts");





var ChannelViewChatsComponent = /** @class */ (function () {
    function ChannelViewChatsComponent(http, globalService, router) {
        this.http = http;
        this.globalService = globalService;
        this.router = router;
        this.bean = $bean;
        // baseUrl = "https://chat.hyper.com:9999/";
        this.baseUrl = "http://chat.hyper.com:9000/";
        this.searchChats = [];
        this.myChats = [];
        this.countMyChannels = {};
        this.DEFAULT_NUMBER_CHAT = 10;
        this.DEFAULT_OFFSET_CHAT = 0;
        this.TYPE_CHAT_GROUP = 'CHAT_GROUP';
        this.TYPE_CHAT_CONTACT = 'CHAT_CONTACT';
    }
    ChannelViewChatsComponent.prototype.ngOnInit = function () {
        // this.listChats(this.DEFAULT_NUMBER_CHAT, this.DEFAULT_OFFSET_CHAT);
        // // this.getCountMyChannels();
        // this.globalService.changeOrderListChats.subscribe(res => {
        //   if (res) {
        //     this.listChats(this.DEFAULT_NUMBER_CHAT, this.DEFAULT_OFFSET_CHAT);
        //   }
        // })
        var _this = this;
        this.globalService.myChats.subscribe(function (res) {
            _this.myChats = res;
        });
        //
        // if ($bean.isEmpty(this.myChats)) {
        //   this.getAllChannels();
        // }
        this.globalService.changeOrderListChats.next(true);
    };
    ChannelViewChatsComponent.prototype.getAllChannels = function () {
        var _this = this;
        var url = this.baseUrl + 'channels/listByUser';
        var form = {
            number: null,
            offset: null
        };
        this.http.post(url, form).subscribe(function (channels) {
            _this.myChats = channels;
        });
    };
    ChannelViewChatsComponent.prototype.getCountMyChannels = function () {
        var _this = this;
        var url = this.baseUrl + 'userChannels/countByNotRejected';
        var form = {};
        this.http.post(url, form).subscribe(function (data) {
            console.log('Count UserChannels ');
            console.log(data);
            _this.countMyChannels = data;
        });
    };
    ChannelViewChatsComponent.prototype.chooseChat = function (chat) {
        this.globalService.accessChat.next(chat);
    };
    // Danh sách channel người dùng có liên kết đến << Mặc định lấy 20 channel đầu tiên >>
    ChannelViewChatsComponent.prototype.listChats = function (number, offset) {
        var _this = this;
        var url = this.baseUrl + 'channels/listByUser';
        var form = {
            number: number,
            offset: offset
        };
        this.http.post(url, form).subscribe(function (data) {
            if ($bean.isNotEmpty(data)) {
                console.log('List Channel: ');
                console.log(data);
                _this.myChats = data;
            }
        });
    };
    ChannelViewChatsComponent.prototype.getMoreChats = function (number, offset) {
        var _this = this;
        var url = this.baseUrl + 'channels/listByUser';
        var form = {
            number: number,
            offset: offset
        };
        this.http.post(url, form).subscribe(function (data) {
            if ($bean.isNotEmpty(data)) {
                var tempData = [];
                tempData = data;
                console.log('List Channel: ');
                console.log(data);
                for (var i = 0; i < tempData.length; i++) {
                    _this.myChats.push(tempData[i]);
                }
            }
        });
    };
    ChannelViewChatsComponent.prototype.moreChat = function () {
        this.getMoreChats(this.DEFAULT_NUMBER_CHAT, this.myChats.length);
    };
    // Lấy tổng số chats để xem có hiển thị nút more
    ChannelViewChatsComponent.prototype.getAllNumberOfChat = function () {
    };
    ChannelViewChatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'channel-view-chats',
            template: __webpack_require__(/*! ./channel-view-chats.component.html */ "./src/app/channel/view-chats/channel-view-chats.component.html"),
            styles: [__webpack_require__(/*! ./channel-view-chats.component.css */ "./src/app/channel/view-chats/channel-view-chats.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ChannelViewChatsComponent);
    return ChannelViewChatsComponent;
}());



/***/ }),

/***/ "./src/app/channel/view-contacts/channel-view-contacts.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/channel/view-contacts/channel-view-contacts.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW5uZWwvdmlldy1jb250YWN0cy9jaGFubmVsLXZpZXctY29udGFjdHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/channel/view-contacts/channel-view-contacts.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/channel/view-contacts/channel-view-contacts.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-2 link chat-row\" *ngFor=\"let contact of suggestContacts\" (click)=\"chooseContact(contact)\">\r\n  <div class=\"w-25 text-center\">\r\n    <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg\" alt=\"IMG of Avatars\"\r\n         class=\"avatar img-fluid z-depth-1-half rounded-circle\">\r\n  </div>\r\n  <div class=\"w-75\">\r\n    <b>{{contact.username}}</b>\r\n    <div class=\"small text-muted\">\r\n      ( {{contact.email}} )\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row text-right\" *ngIf=\"suggestContacts.length < numberAbleContacts\" (click)=\"moreContacts()\"><b>More</b>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/channel/view-contacts/channel-view-contacts.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/channel/view-contacts/channel-view-contacts.component.ts ***!
  \**************************************************************************/
/*! exports provided: ChannelViewContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelViewContactsComponent", function() { return ChannelViewContactsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/global.service */ "./src/app/common/services/global.service.ts");





var ChannelViewContactsComponent = /** @class */ (function () {
    function ChannelViewContactsComponent(http, globalService, router) {
        this.http = http;
        this.globalService = globalService;
        this.router = router;
        // baseUrl = "https://chat.hyper.com:9999/";
        this.baseUrl = "http://chat.hyper.com:9000/";
        this.suggestContacts = [];
        this.numberAbleContacts = 0;
        this.bean = $bean;
        this.DEFAULT_NUMBER_CONTACTS = 10;
        this.DEFAULT_OFFSET_CONTACT = 0;
    }
    ChannelViewContactsComponent.prototype.ngOnInit = function () {
        this.listContacts(this.DEFAULT_NUMBER_CONTACTS, this.DEFAULT_OFFSET_CONTACT);
        this.countAllUsers();
    };
    ChannelViewContactsComponent.prototype.countAllUsers = function () {
        var _this = this;
        var url = this.baseUrl + 'users/countAll';
        var form = {};
        this.http.post(url, form).subscribe(function (data) {
            if (data['count'] >= 1) {
                _this.numberAbleContacts = data['count'] - 1;
            }
            console.log('Count users');
            console.log(data);
        });
    };
    ChannelViewContactsComponent.prototype.chooseContact = function (contact) {
        this.globalService.accessChat.next(contact);
    };
    ChannelViewContactsComponent.prototype.listContacts = function (number, offset) {
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
    ChannelViewContactsComponent.prototype.getMoreContacts = function (number, offset) {
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
    ChannelViewContactsComponent.prototype.moreContacts = function () {
        this.getMoreContacts(this.DEFAULT_NUMBER_CONTACTS, this.suggestContacts.length);
    };
    ChannelViewContactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'channel-view-contacts',
            template: __webpack_require__(/*! ./channel-view-contacts.component.html */ "./src/app/channel/view-contacts/channel-view-contacts.component.html"),
            styles: [__webpack_require__(/*! ./channel-view-contacts.component.css */ "./src/app/channel/view-contacts/channel-view-contacts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ChannelViewContactsComponent);
    return ChannelViewContactsComponent;
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
        this.baseUrl = "http://chat.hyper.com:9000/";
        this.userLogin = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchGroup = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchChannels = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchValue = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.myChats = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.suggestContacts = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchChatsAndContacts = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.infoContact = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.infoChat = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.listSentRequest = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.listIncomeRequest = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchChats = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchPeople = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.notifications = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.newChannel = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.accessChat = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.selectedRequest = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.changeOrderListChats = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.addUserToChat = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dataShowReactEmoji = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dataShowUsersReadMessenger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.activitiesUser = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
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

module.exports = "<div class=\"modal fade\" id=\"modalInitAddChannel\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n     aria-hidden=\"true\">\r\n  <div class=\"modal-dialog cascading-modal modal-avatar modal-sm\" role=\"document\">\r\n    <!--Content-->\r\n    <div class=\"modal-content\">\r\n\r\n      <!--Header-->\r\n      <div class=\"modal-header\">\r\n        <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20%281%29.jpg\" alt=\"avatar\"\r\n             class=\"avatar rounded-circle img-responsive\">\r\n      </div>\r\n      <!--Body-->\r\n      <div class=\"modal-body text-center mb-1\">\r\n\r\n        <h5 class=\"mt-1 mb-2\">Ảnh đại diện</h5>\r\n\r\n        <div class=\"md-form ml-0 mr-0\">\r\n          <input type=\"text\" [(ngModel)]=\"newChannel['title']\" type=\"text\" id=\"form29\"\r\n                 class=\"form-control form-control-sm validate ml-0\">\r\n          <label data-error=\"wrong\" data-success=\"right\" for=\"form29\" class=\"ml-0\">Nhập tên Chat</label>\r\n        </div>\r\n\r\n        <div class=\"text-center mt-4\">\r\n          <button class=\"btn btn-cyan mt-1\" (click)=\"showModalDetailAddChannel()\"> Chuyển tiếp <i\r\n            class=\"fas fa-sign-in ml-1\"></i></button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <!--/.Content-->\r\n  </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"modalDetailAddChannel\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n     aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-scrollable modal-notify modal-info\" role=\"document\" style=\"height: 500px\">\r\n    <!--Content-->\r\n    <div class=\"modal-content\">\r\n      <!--Header-->\r\n      <div class=\"modal-header\">\r\n        <p class=\"heading lead\">Thêm người dùng</p>\r\n\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\" class=\"white-text\">&times;</span>\r\n        </button>\r\n      </div>\r\n\r\n      <!--Body-->\r\n      <div class=\"modal-body\">\r\n        <!-- Large input -->\r\n        <div class=\"md-form form-lg\">\r\n          <input type=\"text\" class=\"form-control form-control-lg\">\r\n          <label>Tìm kiếm</label>\r\n        </div>\r\n        <hr>\r\n        <div>Người dùng đã chọn</div>\r\n        <div class=\"row small text-muted\" style=\"overflow: auto\">\r\n           <span *ngFor=\"let user of listUserSelected\" class=\"item-user\">\r\n             <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg\" alt=\"IMG of Avatars\"\r\n                  class=\"avatar img-fluid z-depth-1-half rounded-circle\">\r\n            <div style=\"height: 10px\"></div>\r\n             <p class=\"title mb-0\">{{user.email}}</p>\r\n           </span>\r\n        </div>\r\n        <hr>\r\n        <div>Danh sách người dùng</div>\r\n        <div *ngIf=\"bean.isNotEmpty(myContacts)\">Gợi ý</div>\r\n        <div class=\"row small text-muted\" *ngFor=\"let user of myContacts\">\r\n          <div class=\"col-2 text-center\">\r\n            <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg\" alt=\"IMG of Avatars\"\r\n                 class=\"avatar img-fluid z-depth-1-half rounded-circle\">\r\n            <div style=\"height: 10px\"></div>\r\n            <!--<p class=\"title mb-0\">{{user.email}}</p>-->\r\n            <!--<p class=\"text-muted \" style=\"font-size: 13px\">( {{user.userName}} )</p>-->\r\n          </div>\r\n\r\n          <div class=\"col-8 mt-3\">\r\n            <p>{{user.email}}</p>\r\n            <!--<p class=\"card-text\"><strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</strong></p>-->\r\n          </div>\r\n          <div class=\"col-2\">\r\n            <input type=\"checkbox\" (click)=\"toggleUser(user)\" [checked]=\"checkUserSelected(user)\">\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"bean.isNotEmpty(suggestPeople)\">Giới thiệu</div>\r\n        <div class=\"row small text-muted\" *ngFor=\"let user of suggestPeople\">\r\n          <div class=\"col-2 text-center\">\r\n            <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg\" alt=\"IMG of Avatars\"\r\n                 class=\"avatar img-fluid z-depth-1-half rounded-circle\">\r\n            <div style=\"height: 10px\"></div>\r\n            <!--<p class=\"title mb-0\">{{user.email}}</p>-->\r\n            <!--<p class=\"text-muted \" style=\"font-size: 13px\">( {{user.userName}} )</p>-->\r\n          </div>\r\n          <div class=\"col-8 mt-3\">\r\n            <p>{{user.email}}</p>\r\n            <!--<p class=\"card-text\"><strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</strong></p>-->\r\n          </div>\r\n          <div class=\"col-2\">\r\n            <input type=\"checkbox\" (click)=\"toggleUser(user)\" [checked]=\"checkUserSelected(user)\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--Footer-->\r\n      <div class=\"modal-footer justify-content-center\">\r\n        <a type=\"button\" class=\"btn btn-primary\" (click)=\"addChannel()\">Tạo Chat<i\r\n          class=\"far fa-gem ml-1 text-white\"></i></a>\r\n        <a type=\"button\" class=\"btn btn-outline-primary waves-effect\" data-dismiss=\"modal\">Close</a>\r\n      </div>\r\n    </div>\r\n    <!--/.Content-->\r\n  </div>\r\n</div>\r\n"

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
        this.globalService.newChannel.subscribe(function (res) {
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
            _this.globalService.changeOrderListChats.next(true);
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

module.exports = "<div class=\"modal fade\" id=\"modalDetailAddUserToChat\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n     aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-scrollable modal-notify modal-info\" role=\"document\" style=\"height: 500px\">\r\n    <!--Content-->\r\n    <div class=\"modal-content\">\r\n      <!--Header-->\r\n      <div class=\"modal-header\">\r\n        <p class=\"heading lead\">Thêm người dùng</p>\r\n\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\" class=\"white-text\">&times;</span>\r\n        </button>\r\n      </div>\r\n\r\n      <!--Body-->\r\n      <div class=\"modal-body\">\r\n        <!-- Large input -->\r\n        <div class=\"md-form form-lg\">\r\n          <input type=\"text\" class=\"form-control form-control-lg\">\r\n          <label>Tìm kiếm</label>\r\n        </div>\r\n        <hr>\r\n        <div>Người dùng đã chọn</div>\r\n        <div class=\"row small text-muted\" style=\"overflow: auto\">\r\n           <span *ngFor=\"let user of listUserSelected\" class=\"item-user\">\r\n             <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg\" alt=\"IMG of Avatars\"\r\n                  class=\"avatar img-fluid z-depth-1-half rounded-circle\">\r\n            <div style=\"height: 10px\"></div>\r\n             <!--<p class=\"title mb-0\">{{user.email}}</p>-->\r\n           </span>\r\n        </div>\r\n        <hr>\r\n        <div>Danh sách người dùng</div>\r\n        <div *ngIf=\"bean.isNotEmpty(suggestPeople)\">Giới thiệu</div>\r\n        <div class=\"row small text-muted\" *ngFor=\"let user of suggestPeople\">\r\n          <div class=\"col-2 text-center\">\r\n            <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg\" alt=\"IMG of Avatars\"\r\n                 class=\"avatar img-fluid z-depth-1-half rounded-circle\">\r\n            <div style=\"height: 10px\"></div>\r\n            <!--<p class=\"title mb-0\">{{user.email}}</p>-->\r\n            <!--<p class=\"text-muted \" style=\"font-size: 13px\">( {{user.userName}} )</p>-->\r\n          </div>\r\n          <div class=\"col-8 mt-3\">\r\n            <p>{{user.email}}</p>\r\n            <!--<p class=\"card-text\"><strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</strong></p>-->\r\n          </div>\r\n          <div class=\"col-2\">\r\n            <input type=\"checkbox\" (click)=\"toggleUser(user)\" [checked]=\"checkUserSelected(user)\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--Footer-->\r\n      <div class=\"modal-footer justify-content-center\">\r\n        <a type=\"button\" class=\"btn btn-primary\" (click)=\"addUser()\">Tạo Chat<i\r\n          class=\"far fa-gem ml-1 text-white\"></i></a>\r\n        <a type=\"button\" class=\"btn btn-outline-primary waves-effect\" data-dismiss=\"modal\">Close</a>\r\n      </div>\r\n    </div>\r\n    <!--/.Content-->\r\n  </div>\r\n</div>\r\n"

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

module.exports = "<div class=\"modal fade\" id=\"modalBoxChat\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n     aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-scrollable modal-notify modal-info\" role=\"document\" style=\"height: 500px\">\r\n    <!--Content-->\r\n    <div class=\"modal-content\">\r\n      <!--Header-->\r\n      <div class=\"modal-header\">\r\n        <div class=\"heading lead\" (click)=\"text-center\">Thông tin</div>\r\n\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\" class=\"white-text\">&times;</span>\r\n        </button>\r\n      </div>\r\n\r\n      <!--Body-->\r\n      <div class=\"modal-body\">\r\n        <!--Header-->\r\n        <div class=\"text-center\">\r\n          <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20%281%29.jpg\" alt=\"avatar\"\r\n               class=\"avatar rounded-circle img-responsive\">\r\n        </div>\r\n        <div class=\"text-center\">\r\n          <!--<div class=\"md-form form-lg\">-->\r\n            <!--<input type=\"text\" class=\"form-control form-control-lg\" [(ngModel)]=\"cloneInfoChat.title\">-->\r\n            <!--<label *ngIf=\"bean.isNotEmpty(cloneInfoChat.title)\">Tên nhóm chat</label>-->\r\n          <!--</div>-->\r\n          <h3 class=\"text-primary\">{{cloneInfoChat.title}}</h3>\r\n          <span>{{cloneInfoChat.title}} được tạo bởi {{userCreatedChat.username}}</span>\r\n        </div>\r\n        <div class=\"row text-primary\">Thông tin về {{infoChat.title}}</div>\r\n        <div class=\"infoDetail\">\r\n          <div class=\"info-item\" (click)=\"sendMessage()\">\r\n            <i class=\"far fa-comment-alt mr-3\"></i>\r\n            <span>Gửi tin nhắn</span>\r\n          </div>\r\n          <div class=\"row text-muted mt-2\">\r\n            Thành viên {{bean.isNotEmpty(members) ? members.length : 0}}\r\n          </div>\r\n          <div class=\"info-item\" (click)=\"addUserToChat()\">\r\n            <i class=\"fas fa-user-plus mr-3\"></i>\r\n            <span>Thêm thành viên</span>\r\n          </div>\r\n          <div class=\"row link chat-row\" *ngFor=\"let user of members\">\r\n            <div class=\"w-25 text-center\" *ngIf=\"userLogin.id != user.id\">\r\n              <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg\" alt=\"IMG of Avatars\"\r\n                   class=\"avatar img-fluid z-depth-1-half rounded-circle\">\r\n            </div>\r\n            <div class=\"w-75\" *ngIf=\"userLogin.id != user.id\">\r\n              <div class=\"info-item row\">\r\n                <span class=\"col text-muted\">{{user.username}}</span>\r\n                <div class=\"col text-right\" *ngIf=\"userLogin.id == userCreatedChat.id\">\r\n                  <button class=\"btn btn-danger btn-sm\" (click)=\"confirmRemoveUser(user)\">Xóa</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"info-item row\" (click)=\"toggleNotification()\">\r\n            <i class=\"fas fa-bell mr-3\"></i>\r\n            <div class=\"col text-muted\">Thông báo</div>\r\n            <div class=\"text-danger col text-right\">\r\n              <input type=\"checkbox\" [checked]=\"linkUserChannel['notification']\">\r\n            </div>\r\n          </div>\r\n          <div class=\"info-item\" (click)=\"confirmLeaveChat()\">\r\n            <i class=\"fas fa-user-times mr-3\"></i>\r\n            <span class=\"text-danger\">Rời khỏi nhóm</span>\r\n          </div>\r\n          <div class=\"info-item\" *ngIf=\"userLogin.id == userCreatedChat.id\" (click)=\"confirmDeleteChat()\">\r\n            <i class=\"fas fa-trash-alt mr-3\"></i>\r\n            <span class=\"text-danger\">Xóa cuộc trò chuyện</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--Footer-->\r\n      <div class=\"modal-footer justify-content-center\">\r\n        <a type=\"button\" class=\"btn btn-primary\" (click)=\"updateChat()\">Cập nhật<i\r\n          class=\"far fa-gem ml-1 text-white\"></i></a>\r\n        <a type=\"button\" class=\"btn btn-outline-primary waves-effect\" data-dismiss=\"modal\">Đóng</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--Modal: modalConfirmDelete-->\r\n<div class=\"modal fade\" id=\"modalConfirmInChat\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n     aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm modal-danger\" role=\"document\">\r\n    <!--Content-->\r\n    <div class=\"modal-content text-center\">\r\n      <!--Header-->\r\n      <div class=\"modal-header d-flex justify-content-center\">\r\n        <p class=\"heading\">{{contentBoxConfirm.title}}</p>\r\n      </div>\r\n\r\n      <!--&lt;!&ndash;Body&ndash;&gt;-->\r\n      <!--<div class=\"modal-body\">-->\r\n\r\n        <!--<i class=\"fas fa-times fa-4x animated rotateIn\"></i>-->\r\n\r\n      <!--</div>-->\r\n\r\n      <!--Footer-->\r\n      <div class=\"modal-footer justify-content-center\">\r\n        <a href=\"\" class=\"btn  btn-outline-danger\" (click)=\"acceptConfirm()\">Đồng ý</a>\r\n        <a type=\"button\" class=\"btn  btn-danger waves-effect\" data-dismiss=\"modal\">Đóng</a>\r\n      </div>\r\n    </div>\r\n    <!--/.Content-->\r\n  </div>\r\n</div>\r\n\r\n"

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
        for (var i = 0; i < this.infoChat['users'].length; i++) {
            if (userId == this.infoChat['users'][i].id) {
                this.userCreatedChat = this.infoChat['users'][i];
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
        var _this = this;
        $('#modalBoxChat').modal('hide');
        var url = this.baseUrl + 'users/leaveChannel';
        var form = {
            channelId: this.infoChat['id']
        };
        this.http.post(url, form).subscribe(function (data) {
            if ($bean.isNotEmpty(data)) {
                console.log('Leave chat success !');
                console.log(data);
                _this.globalService.changeOrderListChats.next(true);
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

/***/ "./src/app/modal/modal-box-confirm-request/modal-box-confirm-request.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/modal/modal-box-confirm-request/modal-box-confirm-request.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsL21vZGFsLWJveC1jb25maXJtLXJlcXVlc3QvbW9kYWwtYm94LWNvbmZpcm0tcmVxdWVzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modal/modal-box-confirm-request/modal-box-confirm-request.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modal/modal-box-confirm-request/modal-box-confirm-request.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"modalConfirmRequest\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myBasicModalLabel\"\r\n     aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title w-100\" id=\"myModalLabel\">Xác nhận yêu cầu</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <button type=\"button\" mdbBtn color=\"primary\" class=\"relative waves-light\" mdbWavesEffect\r\n                  (click)=\"acceptRequest()\">Chấp nhận\r\n          </button>\r\n          <!--<button type=\"button\" mdbBtn color=\"warning\" class=\"relative waves-light\" mdbWavesEffect-->\r\n                  <!--(click)=\"discardRequest()\">Bỏ qua-->\r\n          <!--</button>-->\r\n          <button type=\"button\" mdbBtn color=\"danger\" class=\"relative waves-light\" mdbWavesEffect\r\n                  (click)=\"rejectRequest()\">Từ chối\r\n          </button>\r\n        </div>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modal/modal-box-confirm-request/modal-box-confirm-request.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modal/modal-box-confirm-request/modal-box-confirm-request.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ModalBoxConfirmRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBoxConfirmRequestComponent", function() { return ModalBoxConfirmRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/global.service */ "./src/app/common/services/global.service.ts");





var ModalBoxConfirmRequestComponent = /** @class */ (function () {
    function ModalBoxConfirmRequestComponent(http, globalService, router) {
        this.http = http;
        this.globalService = globalService;
        this.router = router;
        // baseUrl = "https://chat.hyper.com:9999/";
        this.baseUrl = "http://chat.hyper.com:9000/";
        this.selectedRequest = {};
    }
    ModalBoxConfirmRequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.globalService.selectedRequest.subscribe(function (res) {
            _this.selectedRequest = res;
        });
    };
    ModalBoxConfirmRequestComponent.prototype.acceptRequest = function () {
        $('#modalConfirmRequest').modal('hide');
        var url = this.baseUrl + 'users/acceptRequest';
        var form = {
            requestId: this.selectedRequest.id
        };
        this.http.post(url, form).subscribe(function (data) {
            alert('Yêu cầu đã được chấp nhận !');
        }, function (err) {
            alert('Đã có lỗi xảy ra khi chấp nhận yêu cầu !');
        });
    };
    // discardRequest() {
    //   $('#modalConfirmRequest').modal('hide');
    //   let url = this.baseUrl + 'user/discardRequest';
    //   let form = {
    //     requestId: this.selectedRequest.id
    //   }
    //   this.http.post(url, form).subscribe(data => {
    //     alert('Bạn vừa từ chối yêu cầu !');
    //   }, err => {
    //     alert('Đã có lỗi xảy ra khi từ chối yêu cầu !');
    //   })
    // }
    ModalBoxConfirmRequestComponent.prototype.rejectRequest = function () {
        $('#modalConfirmRequest').modal('hide');
        var url = this.baseUrl + 'users/rejectRequest';
        var form = {
            requestId: this.selectedRequest.id
        };
        this.http.post(url, form).subscribe(function (data) {
            alert('Bạn vừa xóa yêu cầu !');
        }, function (err) {
            alert('Đã có lỗi xảy ra khi xóa yêu cầu !');
        });
    };
    ModalBoxConfirmRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'modal-box-confirm-request',
            template: __webpack_require__(/*! ./modal-box-confirm-request.component.html */ "./src/app/modal/modal-box-confirm-request/modal-box-confirm-request.component.html"),
            styles: [__webpack_require__(/*! ./modal-box-confirm-request.component.css */ "./src/app/modal/modal-box-confirm-request/modal-box-confirm-request.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ModalBoxConfirmRequestComponent);
    return ModalBoxConfirmRequestComponent;
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

module.exports = "<div class=\"modal fade\" id=\"modalBoxContact\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n     aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-scrollable modal-notify modal-info\" role=\"document\" style=\"height: 500px\">\r\n    <!--Content-->\r\n    <div class=\"modal-content\">\r\n      <!--Header-->\r\n      <div class=\"modal-header\">\r\n        <div class=\"heading lead\" (click)=\"text-center\">Thông tin</div>\r\n\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\" class=\"white-text\">&times;</span>\r\n        </button>\r\n      </div>\r\n\r\n      <!--Body-->\r\n      <div class=\"modal-body\">\r\n        <!--Header-->\r\n        <div class=\"text-center\">\r\n          <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20%281%29.jpg\" alt=\"avatar\"\r\n               class=\"avatar rounded-circle img-responsive\">\r\n        </div>\r\n        <div class=\"text-center\">\r\n          <h3>{{infoContact.username}}</h3>\r\n        </div>\r\n        <div class=\"row text-primary\">Thông tin về {{infoContact.username}}</div>\r\n        <div class=\"infoDetail\">\r\n          <div class=\"info-item\" (click)=\"sendMessage()\">\r\n            <i class=\"far fa-comment-alt mr-3\"></i>\r\n            <span>Gửi tin nhắn</span>\r\n          </div>\r\n          <div class=\"info-item\" (click)=\"addNewGroup()\">\r\n            <i class=\"fas fa-users mr-3\"></i>\r\n            <span>Tạo nhóm mới với {{infoContact.username}}</span>\r\n          </div>\r\n          <div class=\"info-item\" (click)=\"blockContact(infoContact.id)\">\r\n            <i class=\"fas fa-ban mr-3\"></i>\r\n            <span class=\"text-danger\">Chặn {{infoContact.username}}</span>\r\n          </div>\r\n          <div class=\"info-item\" *ngIf=\"linkUserChannel['isAdmin']\" (click)=\"deleteChat()\">\r\n            <i class=\"fas fa-trash-alt mr-3\"></i>\r\n            <span class=\"text-danger\">Xóa cuộc trò chuyện</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!--Modal: modalConfirmDelete-->\r\n<div class=\"modal fade\" id=\"modalConfirmInContact\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n     aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm modal-danger\" role=\"document\">\r\n    <!--Content-->\r\n    <div class=\"modal-content text-center\">\r\n      <!--Header-->\r\n      <div class=\"modal-header d-flex justify-content-center\">\r\n        <p class=\"heading\">{{contentBoxConfirm.title}}</p>\r\n      </div>\r\n\r\n      <!--&lt;!&ndash;Body&ndash;&gt;-->\r\n      <!--<div class=\"modal-body\">-->\r\n\r\n      <!--<i class=\"fas fa-times fa-4x animated rotateIn\"></i>-->\r\n\r\n      <!--</div>-->\r\n\r\n      <!--Footer-->\r\n      <div class=\"modal-footer justify-content-center\">\r\n        <a href=\"\" class=\"btn  btn-outline-danger\" (click)=\"acceptConfirm()\">Đồng ý</a>\r\n        <a type=\"button\" class=\"btn  btn-danger waves-effect\" data-dismiss=\"modal\">Đóng</a>\r\n      </div>\r\n    </div>\r\n    <!--/.Content-->\r\n  </div>\r\n</div>\r\n\r\n"

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
                _this.globalService.changeOrderListChats.next(true);
                console.log(data);
            }
        });
    };
    ModalBoxContactComponent.prototype.addNewGroup = function () {
        $('#modalBoxContact').modal('hide');
        $('#modalInitAddChannel').modal('show');
        // reset lại giá trị của đối tượng newChannel
        this.globalService.newChannel.next({ members: [this.infoContact['id']] });
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

/***/ "./src/app/modal/modal-box-notification/modal-box-notification.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/modal/modal-box-notification/modal-box-notification.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsL21vZGFsLWJveC1ub3RpZmljYXRpb24vbW9kYWwtYm94LW5vdGlmaWNhdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modal/modal-box-notification/modal-box-notification.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/modal/modal-box-notification/modal-box-notification.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Modal: modalPoll -->\r\n<div class=\"modal fade left\" id=\"modalBoxNotifications\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n     aria-hidden=\"true\" data-backdrop=\"false\" style=\"background-color: rgb(192,192,192, 0.5);\">\r\n  <div class=\"modal-dialog modal-full-height modal-left modal-notify modal-info\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <!--Header-->\r\n      <div class=\"modal-header\">\r\n        <p class=\"heading lead\">Thông báo\r\n        </p>\r\n\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\" class=\"white-text\">×</span>\r\n        </button>\r\n      </div>\r\n\r\n      <!--Body-->\r\n      <div class=\"modal-body\">\r\n        <div class=\"text-left\">\r\n          <div class=\"row\">\r\n            <div class=\"col-2 p-2\"><span><i class=\"fas fa-child fa-2x ml-2\"></i></span></div>\r\n            <div class=\"col-10 p-2\"><strong>Yêu cầu</strong></div>\r\n          </div>\r\n          <div class=\"row link\" *ngFor=\"let incomeRequest of listIncomeRequest\" (click)=\"chooseRequest(incomeRequest)\">\r\n            <p>{{incomeRequest.recieverMessage}}</p>\r\n          </div>\r\n        </div>\r\n        <hr>\r\n        <!--<div class=\"text-left\">-->\r\n          <!--<div class=\"row\">-->\r\n            <!--<div class=\"col-2 p-2\"><span><i class=\"fas fa-bell fa-2x ml-2\"></i></span></div>-->\r\n            <!--<div class=\"col-10 p-2\"><strong>Thông báo</strong></div>-->\r\n          <!--</div>-->\r\n          <!--<div class=\"row link\" *ngFor=\"let inform of listInform\" (click)=\"goToDetailInform(inform)\">-->\r\n            <!--<p>{{inform.description}}</p>-->\r\n          <!--</div>-->\r\n        <!--</div>-->\r\n        <hr>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/modal/modal-box-notification/modal-box-notification.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modal/modal-box-notification/modal-box-notification.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ModalBoxNotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBoxNotificationComponent", function() { return ModalBoxNotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/global.service */ "./src/app/common/services/global.service.ts");





var ModalBoxNotificationComponent = /** @class */ (function () {
    function ModalBoxNotificationComponent(http, globalService, router) {
        this.http = http;
        this.globalService = globalService;
        this.router = router;
        this.listIncomeRequest = [];
        // baseUrl = "https://chat.hyper.com:9999/";
        this.baseUrl = "http://chat.hyper.com:9000/";
        this.bean = $bean;
        this.isConfirm = false;
    }
    ModalBoxNotificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.globalService.notifications.subscribe(res => {
        //   if ($bean.isNotEmpty(res)) {
        //     this.listRequest = res['listRequest'];
        //     this.listInform = res['listInform'];
        //   }
        // })
        this.globalService.listIncomeRequest.subscribe(function (res) {
            if ($bean.isNotEmpty(res)) {
                _this.listIncomeRequest = res;
            }
        });
    };
    ModalBoxNotificationComponent.prototype.chooseRequest = function (request) {
        this.selectedRequest = request;
        this.globalService.selectedRequest.next(this.selectedRequest);
        this.isConfirm = false;
        $('#modalBoxNotifications').modal('hide');
        $('#modalConfirmRequest').modal('show');
    };
    // closeConfirmBox() {
    //
    //   if (this.isConfirm) {
    //     let index = this.listRequest.indexOf(this.selectedRequest);
    //     if (index != -1) {
    //       this.listRequest.splice(index, 1);
    //     }
    //   }
    // }
    ModalBoxNotificationComponent.prototype.goToDetailInform = function (inform) {
        //   Đi tới vị trí của tin nhắn trong nhóm chat
    };
    ModalBoxNotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'modal-box-notification',
            template: __webpack_require__(/*! ./modal-box-notification.component.html */ "./src/app/modal/modal-box-notification/modal-box-notification.component.html"),
            styles: [__webpack_require__(/*! ./modal-box-notification.component.css */ "./src/app/modal/modal-box-notification/modal-box-notification.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ModalBoxNotificationComponent);
    return ModalBoxNotificationComponent;
}());



/***/ }),

/***/ "./src/app/modal/modal-box-request/modal-box-request.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/modal/modal-box-request/modal-box-request.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsL21vZGFsLWJveC1yZXF1ZXN0L21vZGFsLWJveC1yZXF1ZXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modal/modal-box-request/modal-box-request.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modal/modal-box-request/modal-box-request.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"modalBoxRequest\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n     aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-scrollable modal-notify modal-info\" role=\"document\" style=\"height: 500px\">\r\n    <!--Content-->\r\n    <div class=\"modal-content\">\r\n      <!--Header-->\r\n      <div class=\"modal-header\">\r\n        <div class=\"heading lead\" (click)=\"text-center\">{{title}}</div>\r\n\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\" class=\"white-text\">&times;</span>\r\n        </button>\r\n      </div>\r\n\r\n      <!--Body-->\r\n      <div class=\"modal-body\">\r\n\r\n        <h3 class=\"text-primary text-center\" *ngIf=\"bean.isNotEmpty(listRequest)\">Thông tin kết nối</h3>\r\n        <h3 class=\"text-primary text-center\" *ngIf=\"bean.isEmpty(listRequest)\">Bạn không có kết nối nào</h3>\r\n        <div class=\"infoDetail\">\r\n          <div class=\"info-request\" *ngFor=\"let request of listRequest\">\r\n            <div class=\"row\">\r\n              <div class=\"col-1\"><i class=\"fas fa-child fa-2x ml-2 text-center\"></i></div>\r\n              <div class=\" col-11 link\"\r\n                   *ngIf=\"typeRequest == TYPE_INCOME_REQUEST\">{{request.recieverMessage}}</div>\r\n              <div class=\"col-11 link\"\r\n                   *ngIf=\"typeRequest == TYPE_SENT_REQUEST\">{{request.triggerMessage}}</div>\r\n            </div>\r\n            <div class=\"text-center\">\r\n              <button class=\"btn btn-primary btn-sm m-1\" *ngIf=\"typeRequest == TYPE_INCOME_REQUEST\"\r\n                      (click)=\"acceptRequest(request)\">Chấp nhận\r\n              </button>\r\n              <button class=\"btn btn-danger btn-sm m-1\" *ngIf=\"typeRequest == TYPE_INCOME_REQUEST\"\r\n                      (click)=\"rejectRequest(request)\">Từ chối\r\n              </button>\r\n              <button class=\"btn btn-danger btn-sm m-1\" *ngIf=\"typeRequest == TYPE_SENT_REQUEST\"\r\n                      (click)=\"deleteRequest(request)\">Xóa\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--Footer-->\r\n      <div class=\"modal-footer justify-content-center\">\r\n        <a type=\"button\" class=\"btn btn-outline-primary waves-effect\" data-dismiss=\"modal\">Đóng</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modal/modal-box-request/modal-box-request.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modal/modal-box-request/modal-box-request.component.ts ***!
  \************************************************************************/
/*! exports provided: ModalBoxRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBoxRequestComponent", function() { return ModalBoxRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/global.service */ "./src/app/common/services/global.service.ts");





var ModalBoxRequestComponent = /** @class */ (function () {
    function ModalBoxRequestComponent(http, globalService, router) {
        this.http = http;
        this.globalService = globalService;
        this.router = router;
        // baseUrl = "https://chat.hyper.com:9999/";
        this.baseUrl = "http://chat.hyper.com:9000/";
        this.TYPE_INCOME_REQUEST = 'INCOME_REQUEST';
        this.TYPE_SENT_REQUEST = 'SENT_REQUEST';
        this.title = '';
        this.typeRequest = [];
        this.listRequest = [];
        this.selectedRequest = {};
        this.bean = $bean;
    }
    ModalBoxRequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.globalService.listIncomeRequest.subscribe(function (res) {
            _this.listRequest = [];
            _this.listRequest = res;
            _this.typeRequest = _this.TYPE_INCOME_REQUEST;
            _this.title = 'Danh sách yêu cầu kết nối';
        });
        this.globalService.listSentRequest.subscribe(function (res) {
            _this.listRequest = [];
            _this.listRequest = res;
            _this.typeRequest = _this.TYPE_SENT_REQUEST;
            _this.title = 'Danh sách kết nối đã gửi';
        });
    };
    ModalBoxRequestComponent.prototype.acceptRequest = function (request) {
        var _this = this;
        this.selectedRequest = request;
        if ($bean.isNotEmpty(this.selectedRequest)) {
            var url = this.baseUrl + 'users/acceptRequest';
            var form = {
                requestId: this.selectedRequest['id']
            };
            this.http.post(url, form).subscribe(function (data) {
                console.log('Accept chat');
                console.log(data);
                _this.selectedRequest = data;
                _this.removeSelectedRequest();
            });
        }
    };
    ModalBoxRequestComponent.prototype.rejectRequest = function (request) {
        var _this = this;
        this.selectedRequest = request;
        if ($bean.isNotEmpty(this.selectedRequest)) {
            var url = this.baseUrl + 'users/rejectRequest';
            var form = {
                requestId: this.selectedRequest['id']
            };
            this.http.post(url, form).subscribe(function (data) {
                console.log('Reject Chat');
                console.log(data);
                _this.selectedRequest = data;
                _this.removeSelectedRequest();
            });
        }
    };
    ModalBoxRequestComponent.prototype.deleteRequest = function (request) {
        var _this = this;
        this.selectedRequest = request;
        if ($bean.isNotEmpty(this.selectedRequest)) {
            var url = this.baseUrl + 'users/deleteRequest';
            var form = {
                requestId: this.selectedRequest['id']
            };
            this.http.post(url, form).subscribe(function (data) {
                console.log('Delete chat');
                console.log(data);
                _this.removeSelectedRequest();
            });
        }
    };
    ModalBoxRequestComponent.prototype.removeSelectedRequest = function () {
        for (var i = 0; i < this.listRequest.length; i++) {
            if (this.listRequest[i].id == this.selectedRequest.id) {
                this.listRequest.splice(i, 1);
                break;
            }
        }
    };
    ModalBoxRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'modal-box-request',
            template: __webpack_require__(/*! ./modal-box-request.component.html */ "./src/app/modal/modal-box-request/modal-box-request.component.html"),
            styles: [__webpack_require__(/*! ./modal-box-request.component.css */ "./src/app/modal/modal-box-request/modal-box-request.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ModalBoxRequestComponent);
    return ModalBoxRequestComponent;
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

/***/ "./src/app/sidebar/side-bar-view.component.css":
/*!*****************************************************!*\
  !*** ./src/app/sidebar/side-bar-view.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZS1iYXItdmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/sidebar/side-bar-view.component.html":
/*!******************************************************!*\
  !*** ./src/app/sidebar/side-bar-view.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-header\">\r\n  <div class=\"info-user row\">\r\n    <div class=\"col-10 row\">\r\n      <div class=\"col-4 text-center dropdown p-2\" id=\"avatarUser\" data-toggle=\"dropdown\">\r\n        <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg\" alt=\"IMG of Avatars\"\r\n             class=\"avatar img-fluid z-depth-1-half rounded-circle\">\r\n      </div>\r\n      <div class=\"info-detail col-8 pt-3 small\" id=\"infoUser\" data-toggle=\"dropdown\">\r\n        <div class=\"link\">\r\n          {{userLogin.username}}\r\n        </div>\r\n        <div>\r\n          <span class=\"link\">Let's smile every day</span>\r\n          <span class=\"emotion hvr-bounce-in\"><i class=\"far fa-smile\"></i></span>\r\n        </div>\r\n      </div>\r\n      <div class=\"dropdown-menu p-4\" style=\"width: 320px; z-index: 2000\">\r\n        <div class=\"row\">\r\n          <h3 class=\"col-8 text-primary\">Thông tin</h3>\r\n          <div class=\"col-4 text-right small link\" (click)=\"logout()\">Sign Out</div>\r\n        </div>\r\n        <hr>\r\n        <div class=\"row\">\r\n          <div class=\"col-4\">\r\n            <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg\" alt=\"IMG of Avatars\"\r\n                 class=\"avatar img-fluid z-depth-1-half rounded-circle\">\r\n          </div>\r\n          <div class=\"col-8\">\r\n            <h4 class=\"link\" (click)=\"viewChatmeProfile()\">Sang Tigo</h4>\r\n            <div class=\"small\"><b>( {{userLogin.email}} )</b></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row mt-2\">\r\n          <div class=\"col-4\">\r\n            <input type=\"radio\" checked>\r\n          </div>\r\n          <div class=\"col-8\">\r\n            <span>Đang hoạt động</span>\r\n          </div>\r\n        </div>\r\n        <hr>\r\n        <div class=\"list-group\">\r\n          <button class=\"list-group-item py-1 active waves-light white-text\"> Quản lý</button>\r\n          <div class=\"list-group-item py-1 list-group-item-action waves-light\">\r\n            <div class=\"row\">\r\n              <div class=\"col-2 link\"><i class=\"fas fa-file-alt\"></i></div>\r\n              <div class=\"col-10 link\">Cá nhân</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"list-group-item py-1 list-group-item-action waves-light\">\r\n            <div class=\"row\" (click)=\"showSentRequest()\">\r\n              <div class=\"col-2 link\"><i class=\"fas fa-wifi\"></i></div>\r\n              <div class=\"col-10 link\">Kết nối chờ</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"list-group-item py-1 list-group-item-action waves-light\">\r\n            <div class=\"row\">\r\n              <div class=\"col-2 link\"><i class=\"fas fa-cog\"></i></div>\r\n              <div class=\"col-10 link\">Cài đặt</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-2 icon text-right\">\r\n      <i class='fas fa-ellipsis-h' data-toggle=\"dropdown\"></i>\r\n      <div class=\"dropdown-menu\">\r\n        <div class=\"dropdown-item\" data-toggle=\"modal\" (click)=\"showProfile()\">Setting</div>\r\n        <hr>\r\n        <div class=\"dropdown-item\" data-toggle=\"modal\" (click)=\"logout()\">Logout</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"box-search-channel row p-2 text-center\">\r\n    <div class=\"input-group input-group-sm\">\r\n      <div class=\"input-group-prepend\" (click)=\"search()\">\r\n        <span class=\"input-group-text hvr-grow icon\"> <i class=\"fas fa-search\"></i></span>\r\n      </div>\r\n      <input (focus)=\"changeActivity()\" type=\"text\" class=\"form-control\" placeholder=\"Search here\"\r\n             [(ngModel)]=\"searchValue\">\r\n      <div class=\"input-group-append\" *ngIf=\"activitiesUser.isSearching\">\r\n        <span class=\"input-group-text hvr-grow icon\" (click)=\"backHome()\"><i class=\"fas fa-times\"></i></span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"menu-search-item text-center row p-2\" *ngIf=\"!activitiesUser.isSearching\">\r\n    <div class=\"col text-center\" (click)=\"goToChats()\" routerLink=\"/\"\r\n         [ngClass]=\"(activitiesUser.location == LOCATION_HOME_CHAT) ? 'text-primary': 'text-muted'\">\r\n      <div class=\"symbol-link  hvr-pulse hvr-grow-shadow\">\r\n        <i class=\"fab fa-rocketchat\"></i>\r\n      </div>\r\n      <div>\r\n        <strong><a class=\"title-item\">\r\n          Chats\r\n        </a></strong>\r\n      </div>\r\n    </div>\r\n    <div class=\"col text-center\" (click)=\"goToContacts()\" routerLink=\"/contacts\"\r\n         [ngClass]=\"(activitiesUser.location == LOCATION_HOME_CONTACTS) ? 'text-primary': 'text-muted'\">\r\n      <div class=\"symbol-link  hvr-pulse hvr-grow-shadow\">\r\n        <i class=\"fas fa-address-card\"></i>\r\n      </div>\r\n      <div>\r\n        <strong><a class=\"title-item\">\r\n          Contacts\r\n        </a></strong>\r\n      </div>\r\n    </div>\r\n    <div class=\"col text-center\"\r\n         [ngClass]=\"(activitiesUser.location == LOCATION_HOME_INCOME_REQUEST) ? 'text-primary': 'text-muted'\"\r\n         (click)=\"goToIncomeRequest()\">\r\n      <div class=\"symbol-link  hvr-pulse hvr-grow-shadow\">\r\n        <i class=\"fas fa-child\"></i>\r\n      </div>\r\n      <div>\r\n        <strong><a class=\"title-item\">\r\n          Requests\r\n        </a></strong>\r\n      </div>\r\n    </div>\r\n    <!--<div class=\"col text-center\" routerLink=\"/contacts\"-->\r\n    <!--[ngClass]=\"(activitiesUser.location == LOCATION_HOME_NOTIFICATIONS) ? 'text-primary': 'text-muted'\"-->\r\n    <!--(click)=\"showBoxNotifications()\">-->\r\n    <!--<div class=\"symbol-link  hvr-pulse hvr-grow-shadow\">-->\r\n    <!--<i class=\"fas fa-bell\"></i>-->\r\n    <!--</div>-->\r\n    <!--<div>-->\r\n    <!--<strong><a class=\"title-item\">-->\r\n    <!--Notifications-->\r\n    <!--</a></strong>-->\r\n    <!--</div>-->\r\n    <!--</div>-->\r\n  </div>\r\n  <div class=\"menu-search-item text-center row p-2\" *ngIf=\"activitiesUser.isSearching\">\r\n    <div class=\"col text-center\" (click)=\"goToSearchAll()\" routerLink=\"/search?filter=all\"\r\n         [ngClass]=\"(activitiesUser.location == LOCATION_SEARCH_ALL) ? 'text-primary': 'text-muted'\">\r\n      <div class=\"symbol-link  hvr-pulse hvr-grow-shadow\">\r\n        <i class=\"fab fa-rocketchat\"></i>\r\n      </div>\r\n      <div>\r\n        <strong><a class=\"title-item\">\r\n          All\r\n        </a></strong>\r\n      </div>\r\n    </div>\r\n    <div class=\"col text-center\" (click)=\"goToSearchPeople()\" routerLink=\"/search?filter=people\"\r\n         [ngClass]=\"(activitiesUser.location == LOCATION_SEARCH_PEOPLE) ? 'text-primary': 'text-muted'\">\r\n      <div class=\"symbol-link  hvr-pulse hvr-grow-shadow\">\r\n        <i class=\"fas fa-address-card\"></i>\r\n      </div>\r\n      <div>\r\n        <strong><a class=\"title-item\">\r\n          People\r\n        </a></strong>\r\n      </div>\r\n    </div>\r\n    <div class=\"col text-center\" (click)=\"goToSearchGroup()\" routerLink=\"/search?filter=groups\"\r\n         [ngClass]=\"(activitiesUser.location == LOCATION_SEARCH_GROUPS) ? 'text-primary': 'text-muted'\">\r\n      <div class=\"symbol-link  hvr-pulse hvr-grow-shadow\">\r\n        <i class=\"fas fa-users\"></i>\r\n      </div>\r\n      <div>\r\n        <strong><a class=\"title-item\">\r\n          Groups\r\n        </a></strong>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"header-by-item row small\">\r\n    <div class=\"title col\">\r\n      RECENT CHATS\r\n      <span class=\"fas fa-angle-down icon\"></span>\r\n    </div>\r\n    <div class=\"col text-right\">\r\n      <!-- Basic dropdown -->\r\n      <button type=\"button\" class=\"btn btn-info btn-rounded btn-sm\" data-toggle=\"dropdown\">Chat<i\r\n        class=\"fas fa-plus ml-2\" aria-hidden=\"true\"></i></button>\r\n      <div class=\"dropdown-menu\">\r\n        <div class=\"dropdown-item\" data-toggle=\"modal\" (click)=\"showModalInitAddChannel()\">New chat</div>\r\n        <div class=\"dropdown-item\" data-toggle=\"modal\" (click)=\"showModalInitAddChannel()\">New group chat</div>\r\n      </div>\r\n      <!-- Basic dropdown -->\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sidebar/side-bar-view.component.ts":
/*!****************************************************!*\
  !*** ./src/app/sidebar/side-bar-view.component.ts ***!
  \****************************************************/
/*! exports provided: SideBarViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarViewComponent", function() { return SideBarViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/services/global.service */ "./src/app/common/services/global.service.ts");





var SideBarViewComponent = /** @class */ (function () {
    function SideBarViewComponent(http, globalService, router) {
        this.http = http;
        this.globalService = globalService;
        this.router = router;
        this.LOCATION_DEFAULT = 'HOME_CHAT';
        this.LOCATION_HOME_CHAT = 'HOME_CHAT';
        this.LOCATION_HOME_CONTACTS = 'HOME_CONTACTS';
        this.LOCATION_HOME_NOTIFICATIONS = 'HOME_NOTIFICATIONS';
        this.LOCATION_HOME_INCOME_REQUEST = 'HOME_INCOME_REQUEST';
        this.LOCATION_SEARCH_ALL = 'SEARCH_ALL';
        this.LOCATION_SEARCH_PEOPLE = 'SEARCH_PEOPLE';
        this.LOCATION_SEARCH_GROUPS = 'SEARCH_GROUPS';
        this.DEFAULT_NUMBER_CHAT = 10;
        this.DEFAULT_OFFSET = 0;
        // baseUrl = "https://chat.hyper.com:9999/";
        this.baseUrl = "http://chat.hyper.com:9000/";
        this.userLogin = {};
        this.suggestContacts = [];
        this.searchValue = '';
        this.activitiesUser = {
            isSearching: false,
            value: '',
            location: this.LOCATION_DEFAULT
        };
        this.numberNotifications = 0;
        this.listNotifications = [];
    }
    SideBarViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.globalService.userLogin.subscribe(function (data) {
            _this.userLogin = data;
        });
    };
    SideBarViewComponent.prototype.search = function () {
        this.activitiesUser.value = this.searchValue;
        this.globalService.searchValue.next(this.activitiesUser);
    };
    SideBarViewComponent.prototype.goToChats = function () {
        this.activitiesUser.location = this.LOCATION_HOME_CHAT;
    };
    //
    SideBarViewComponent.prototype.goToContacts = function () {
        this.activitiesUser.location = this.LOCATION_HOME_CONTACTS;
    };
    //
    SideBarViewComponent.prototype.goToSearchAll = function () {
        this.activitiesUser.location = this.LOCATION_SEARCH_ALL;
    };
    //
    SideBarViewComponent.prototype.goToSearchPeople = function () {
        this.activitiesUser.location = this.LOCATION_SEARCH_PEOPLE;
    };
    //
    SideBarViewComponent.prototype.goToSearchGroup = function () {
        this.activitiesUser.location = this.LOCATION_SEARCH_GROUPS;
    };
    SideBarViewComponent.prototype.goToIncomeRequest = function () {
        this.activitiesUser.location = this.LOCATION_HOME_INCOME_REQUEST;
        this.showIncomeRequest();
    };
    SideBarViewComponent.prototype.getNumberNotify = function () {
        var _this = this;
        var url = this.baseUrl + 'user/numberNotifications';
        this.http.get(url).subscribe(function (result) {
            if ($bean.isNotEmpty(result)) {
                _this.numberNotifications = result['value'];
            }
        });
    };
    SideBarViewComponent.prototype.loadNotifications = function () {
        var _this = this;
        var url = this.baseUrl + 'users/listNotifications';
        this.http.get(url).subscribe(function (data) {
            if ($bean.isNotEmpty(data)) {
                _this.globalService.notifications.next(data);
            }
        });
    };
    SideBarViewComponent.prototype.showIncomeRequest = function () {
        var _this = this;
        var url = this.baseUrl + 'users/listIncomeRequest';
        var form = {
            number: null,
            offset: null
        };
        this.http.post(url, form).subscribe(function (data) {
            $('#modalBoxRequest').modal('show');
            _this.globalService.listIncomeRequest.next(data);
        });
    };
    SideBarViewComponent.prototype.showSentRequest = function () {
        var _this = this;
        var url = this.baseUrl + 'users/listSentRequest';
        var form = {
            number: null,
            offset: null
        };
        this.http.post(url, form).subscribe(function (data) {
            $('#modalBoxRequest').modal('show');
            _this.globalService.listSentRequest.next(data);
        });
    };
    SideBarViewComponent.prototype.showBoxNotifications = function () {
        $('#modalBoxNotifications').modal('show');
        this.loadNotifications();
    };
    SideBarViewComponent.prototype.showModalInitAddChannel = function () {
        $('#modalInitAddChannel').modal('show');
        // reset lại giá trị của đối tượng newChannel
        this.globalService.newChannel.next({});
    };
    SideBarViewComponent.prototype.changeActivity = function () {
        if (!this.activitiesUser.isSearching) {
            this.router.navigate(['/search?filter=all']);
            this.activitiesUser.isSearching = true;
            this.activitiesUser.location = this.LOCATION_SEARCH_ALL;
        }
    };
    SideBarViewComponent.prototype.backHome = function () {
        this.activitiesUser.isSearching = false;
        this.router.navigate(['/']);
        this.activitiesUser.location = this.LOCATION_HOME_CHAT;
    };
    SideBarViewComponent.prototype.logout = function () {
        var _this = this;
        var url = this.baseUrl + 'logout';
        this.http.get(url).subscribe(function (data) {
            document.location.href = _this.baseUrl;
        });
    };
    SideBarViewComponent.prototype.showProfile = function () {
        $('#modalViewChatmeProfile').modal('show');
    };
    SideBarViewComponent.prototype.viewChatmeProfile = function () {
    };
    SideBarViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'side-bar-view',
            template: __webpack_require__(/*! ./side-bar-view.component.html */ "./src/app/sidebar/side-bar-view.component.html"),
            styles: [__webpack_require__(/*! ./side-bar-view.component.css */ "./src/app/sidebar/side-bar-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _common_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SideBarViewComponent);
    return SideBarViewComponent;
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