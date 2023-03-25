'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;
  if (!css || typeof document === 'undefined') {
    return;
  }
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$2 = ".alice-carousel .animated {\n  animation-fill-mode: both;\n}\n\n.alice-carousel .animated-out {\n  z-index: 1;\n}\n\n.alice-carousel .fadeOut {\n  animation-name: fadeOut;\n}\n\n@keyframes fadeOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    visibility: hidden;\n  }\n}\n\n.alice-carousel {\n  position: relative;\n  width: 100%;\n  margin: auto;\n  direction: ltr;\n}\n\n.alice-carousel__wrapper {\n  position: relative;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  box-sizing: border-box;\n  width: 100%;\n  height: auto;\n}\n\n.alice-carousel__stage {\n  position: relative;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  white-space: nowrap;\n  transform-style: flat;\n  -webkit-transform-style: flat;\n  backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n}\n\n.alice-carousel__stage-item {\n  position: relative;\n  display: inline-block;\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  vertical-align: top;\n  white-space: normal;\n  line-height: 0;\n}\n\n.alice-carousel__stage-item * {\n  line-height: initial;\n}\n\n.alice-carousel__stage-item.__hidden {\n  opacity: 0;\n  overflow: hidden;\n}\n\n.alice-carousel__prev-btn,\n.alice-carousel__next-btn {\n  display: inline-block;\n  box-sizing: border-box;\n  width: 50%;\n  padding: 10px 5px;\n}\n\n.alice-carousel__prev-btn [data-area]::after,\n.alice-carousel__next-btn [data-area]::after {\n  position: relative;\n  content: attr(data-area);\n  text-transform: capitalize;\n}\n\n.alice-carousel__prev-btn {\n  text-align: right;\n}\n\n.alice-carousel__prev-btn-item,\n.alice-carousel__next-btn-item {\n  display: inline-block;\n  cursor: pointer;\n  padding: 5px;\n  margin: 0;\n  color: #465798;\n}\n\n.alice-carousel__prev-btn-item:hover,\n.alice-carousel__next-btn-item:hover {\n  color: darkred;\n}\n\n.alice-carousel__prev-btn-item.__inactive,\n.alice-carousel__next-btn-item.__inactive {\n  opacity: 0.4;\n  pointer-events: none;\n}\n\n.alice-carousel__play-btn {\n  position: absolute;\n  top: 30px;\n  left: 20px;\n  display: inline-block;\n}\n\n.alice-carousel__play-btn:hover {\n  cursor: pointer;\n}\n\n.alice-carousel__play-btn-wrapper {\n  position: relative;\n  width: 32px;\n  height: 32px;\n  padding: 10px;\n  border-radius: 50%;\n  background-color: #fff;\n}\n\n.alice-carousel__play-btn-item {\n  position: absolute;\n  width: 32px;\n  height: 32px;\n  cursor: pointer;\n  border: 0;\n  outline: none;\n  background: transparent;\n}\n\n.alice-carousel__play-btn-item::before, .alice-carousel__play-btn-item::after {\n  position: absolute;\n  pointer-events: none;\n  display: block;\n  width: 0;\n  height: 0;\n  content: \"\";\n  transition: all 0.4s linear;\n  border-width: 8px 0 8px 15px;\n  border-style: solid;\n  border-color: transparent;\n  border-left-color: #465798;\n}\n\n.alice-carousel__play-btn-item::before {\n  left: 5px;\n  height: 14px;\n}\n\n.alice-carousel__play-btn-item::after {\n  top: 7px;\n  left: 18px;\n}\n\n.alice-carousel__play-btn-item.__pause::before, .alice-carousel__play-btn-item.__pause::after {\n  height: 30px;\n  border-width: 0 0 0 10px;\n}\n\n.alice-carousel__play-btn-item.__pause::after {\n  top: 0;\n  left: 18px;\n}\n\n.alice-carousel__dots {\n  margin: 30px 3px 5px;\n  padding: 0;\n  list-style: none;\n  text-align: center;\n}\n\n.alice-carousel__dots > li {\n  display: inline-block;\n}\n\n.alice-carousel__dots-item:not(.__custom) {\n  width: 8px;\n  height: 8px;\n  cursor: pointer;\n  border-radius: 50%;\n  background-color: #e0e4fb;\n}\n\n.alice-carousel__dots-item:not(.__custom):not(:last-child) {\n  margin-right: 20px;\n}\n\n.alice-carousel__dots-item:not(.__custom):hover, .alice-carousel__dots-item:not(.__custom).__active {\n  background-color: #6e7ebc;\n}\n\n.alice-carousel__slide-info {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  display: inline-block;\n  padding: 5px 10px;\n  color: #465798;\n  border-radius: 5px;\n  background-color: rgba(224, 228, 251, 0.6);\n}\n\n.alice-carousel__slide-info-item {\n  vertical-align: middle;\n  line-height: 0;\n}\n\n.multi-carousel__container .alice-carousel__prev-btn, \n.multi-carousel__container .alice-carousel__next-btn {\n    position: absolute !important;\n    top: 0;\n    height: calc(100% - 30px) !important;\n    padding: 0px !important;\n}\n\n.multi-carousel__no-dots .alice-carousel__prev-btn,\n.multi-carousel__no-dots .alice-carousel__next-btn {\n    height: 100% !important;\n}\n\n.multi-carousel__container .alice-carousel__prev-btn-item span::after,\n.multi-carousel__container .alice-carousel__next-btn-item span::after {\n    font-family: monospace;\n}\n\n.multi-carousel__container .alice-carousel__dots {\n    margin: 10px !important;\n}\n\n.multi-carousel__item {\n    margin-right: 10px;\n    border: 1px solid #efecec;\n    border-radius: 4px;\n    overflow: hidden;\n}\n\n.multi-carousel__active {\n    border:2px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvYWxpY2UtY2Fyb3VzZWwuY3NzIiwiTXVsdGlDYXJvdXNlbC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtJQUNWLGtCQUFrQjtFQUNwQjtBQUNGOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7RUFDVCxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQiw2QkFBNkI7RUFDN0IsMkJBQTJCO0VBQzNCLG1DQUFtQztBQUNyQzs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFlBQVk7RUFDWixTQUFTO0VBQ1QsY0FBYztBQUNoQjs7QUFDQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUNBOztFQUVFLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsU0FBUztFQUNULGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxRQUFRO0VBQ1IsU0FBUztFQUNULFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsMEJBQTBCO0FBQzVCOztBQUNBO0VBQ0UsU0FBUztFQUNULFlBQVk7QUFDZDs7QUFDQTtFQUNFLFFBQVE7RUFDUixVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osd0JBQXdCO0FBQzFCOztBQUNBO0VBQ0UsTUFBTTtFQUNOLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsMENBQTBDO0FBQzVDOztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FDck1BOztJQUVJLDZCQUE2QjtJQUM3QixNQUFNO0lBQ04sb0NBQW9DO0lBQ3BDLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSx1QkFBdUI7QUFDM0I7O0FBRUE7O0lBRUksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCIiwiZmlsZSI6Ik11bHRpQ2Fyb3VzZWwuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsaWNlLWNhcm91c2VsIC5hbmltYXRlZCB7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cbi5hbGljZS1jYXJvdXNlbCAuYW5pbWF0ZWQtb3V0IHtcbiAgei1pbmRleDogMTtcbn1cblxuLmFsaWNlLWNhcm91c2VsIC5mYWRlT3V0IHtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXQ7XG59XG5cbkBrZXlmcmFtZXMgZmFkZU91dCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG59XG4uYWxpY2UtY2Fyb3VzZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG4gIGRpcmVjdGlvbjogbHRyO1xufVxuXG4uYWxpY2UtY2Fyb3VzZWxfX3dyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uYWxpY2UtY2Fyb3VzZWxfX3N0YWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRyYW5zZm9ybS1zdHlsZTogZmxhdDtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IGZsYXQ7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG4uYWxpY2UtY2Fyb3VzZWxfX3N0YWdlLWl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMDtcbn1cbi5hbGljZS1jYXJvdXNlbF9fc3RhZ2UtaXRlbSAqIHtcbiAgbGluZS1oZWlnaHQ6IGluaXRpYWw7XG59XG4uYWxpY2UtY2Fyb3VzZWxfX3N0YWdlLWl0ZW0uX19oaWRkZW4ge1xuICBvcGFjaXR5OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYWxpY2UtY2Fyb3VzZWxfX3ByZXYtYnRuLFxuLmFsaWNlLWNhcm91c2VsX19uZXh0LWJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogMTBweCA1cHg7XG59XG4uYWxpY2UtY2Fyb3VzZWxfX3ByZXYtYnRuIFtkYXRhLWFyZWFdOjphZnRlcixcbi5hbGljZS1jYXJvdXNlbF9fbmV4dC1idG4gW2RhdGEtYXJlYV06OmFmdGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb250ZW50OiBhdHRyKGRhdGEtYXJlYSk7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uYWxpY2UtY2Fyb3VzZWxfX3ByZXYtYnRuIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5hbGljZS1jYXJvdXNlbF9fcHJldi1idG4taXRlbSxcbi5hbGljZS1jYXJvdXNlbF9fbmV4dC1idG4taXRlbSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICM0NjU3OTg7XG59XG4uYWxpY2UtY2Fyb3VzZWxfX3ByZXYtYnRuLWl0ZW06aG92ZXIsXG4uYWxpY2UtY2Fyb3VzZWxfX25leHQtYnRuLWl0ZW06aG92ZXIge1xuICBjb2xvcjogZGFya3JlZDtcbn1cbi5hbGljZS1jYXJvdXNlbF9fcHJldi1idG4taXRlbS5fX2luYWN0aXZlLFxuLmFsaWNlLWNhcm91c2VsX19uZXh0LWJ0bi1pdGVtLl9faW5hY3RpdmUge1xuICBvcGFjaXR5OiAwLjQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYWxpY2UtY2Fyb3VzZWxfX3BsYXktYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwcHg7XG4gIGxlZnQ6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5hbGljZS1jYXJvdXNlbF9fcGxheS1idG46aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYWxpY2UtY2Fyb3VzZWxfX3BsYXktYnRuLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmFsaWNlLWNhcm91c2VsX19wbGF5LWJ0bi1pdGVtIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uYWxpY2UtY2Fyb3VzZWxfX3BsYXktYnRuLWl0ZW06OmJlZm9yZSwgLmFsaWNlLWNhcm91c2VsX19wbGF5LWJ0bi1pdGVtOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBjb250ZW50OiBcIlwiO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBsaW5lYXI7XG4gIGJvcmRlci13aWR0aDogOHB4IDAgOHB4IDE1cHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjNDY1Nzk4O1xufVxuLmFsaWNlLWNhcm91c2VsX19wbGF5LWJ0bi1pdGVtOjpiZWZvcmUge1xuICBsZWZ0OiA1cHg7XG4gIGhlaWdodDogMTRweDtcbn1cbi5hbGljZS1jYXJvdXNlbF9fcGxheS1idG4taXRlbTo6YWZ0ZXIge1xuICB0b3A6IDdweDtcbiAgbGVmdDogMThweDtcbn1cbi5hbGljZS1jYXJvdXNlbF9fcGxheS1idG4taXRlbS5fX3BhdXNlOjpiZWZvcmUsIC5hbGljZS1jYXJvdXNlbF9fcGxheS1idG4taXRlbS5fX3BhdXNlOjphZnRlciB7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXdpZHRoOiAwIDAgMCAxMHB4O1xufVxuLmFsaWNlLWNhcm91c2VsX19wbGF5LWJ0bi1pdGVtLl9fcGF1c2U6OmFmdGVyIHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAxOHB4O1xufVxuXG4uYWxpY2UtY2Fyb3VzZWxfX2RvdHMge1xuICBtYXJnaW46IDMwcHggM3B4IDVweDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmFsaWNlLWNhcm91c2VsX19kb3RzID4gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uYWxpY2UtY2Fyb3VzZWxfX2RvdHMtaXRlbTpub3QoLl9fY3VzdG9tKSB7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTRmYjtcbn1cbi5hbGljZS1jYXJvdXNlbF9fZG90cy1pdGVtOm5vdCguX19jdXN0b20pOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4uYWxpY2UtY2Fyb3VzZWxfX2RvdHMtaXRlbTpub3QoLl9fY3VzdG9tKTpob3ZlciwgLmFsaWNlLWNhcm91c2VsX19kb3RzLWl0ZW06bm90KC5fX2N1c3RvbSkuX19hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmU3ZWJjO1xufVxuXG4uYWxpY2UtY2Fyb3VzZWxfX3NsaWRlLWluZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGNvbG9yOiAjNDY1Nzk4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI0LCAyMjgsIDI1MSwgMC42KTtcbn1cbi5hbGljZS1jYXJvdXNlbF9fc2xpZGUtaW5mby1pdGVtIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbGluZS1oZWlnaHQ6IDA7XG59IiwiQGltcG9ydCBcInJlYWN0LWFsaWNlLWNhcm91c2VsL2xpYi9hbGljZS1jYXJvdXNlbC5jc3NcIjtcblxuLm11bHRpLWNhcm91c2VsX19jb250YWluZXIgLmFsaWNlLWNhcm91c2VsX19wcmV2LWJ0biwgXG4ubXVsdGktY2Fyb3VzZWxfX2NvbnRhaW5lciAuYWxpY2UtY2Fyb3VzZWxfX25leHQtYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgICB0b3A6IDA7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMHB4KSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubXVsdGktY2Fyb3VzZWxfX25vLWRvdHMgLmFsaWNlLWNhcm91c2VsX19wcmV2LWJ0bixcbi5tdWx0aS1jYXJvdXNlbF9fbm8tZG90cyAuYWxpY2UtY2Fyb3VzZWxfX25leHQtYnRuIHtcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLm11bHRpLWNhcm91c2VsX19jb250YWluZXIgLmFsaWNlLWNhcm91c2VsX19wcmV2LWJ0bi1pdGVtIHNwYW46OmFmdGVyLFxuLm11bHRpLWNhcm91c2VsX19jb250YWluZXIgLmFsaWNlLWNhcm91c2VsX19uZXh0LWJ0bi1pdGVtIHNwYW46OmFmdGVyIHtcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xufVxuXG4ubXVsdGktY2Fyb3VzZWxfX2NvbnRhaW5lciAuYWxpY2UtY2Fyb3VzZWxfX2RvdHMge1xuICAgIG1hcmdpbjogMTBweCAhaW1wb3J0YW50O1xufVxuXG4ubXVsdGktY2Fyb3VzZWxfX2l0ZW0ge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWZlY2VjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubXVsdGktY2Fyb3VzZWxfX2FjdGl2ZSB7XG4gICAgYm9yZGVyOjJweCBzb2xpZCByZWQ7XG59Il19 */";
var stylesheet=".alice-carousel .animated {\n  animation-fill-mode: both;\n}\n\n.alice-carousel .animated-out {\n  z-index: 1;\n}\n\n.alice-carousel .fadeOut {\n  animation-name: fadeOut;\n}\n\n@keyframes fadeOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    visibility: hidden;\n  }\n}\n\n.alice-carousel {\n  position: relative;\n  width: 100%;\n  margin: auto;\n  direction: ltr;\n}\n\n.alice-carousel__wrapper {\n  position: relative;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  box-sizing: border-box;\n  width: 100%;\n  height: auto;\n}\n\n.alice-carousel__stage {\n  position: relative;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  white-space: nowrap;\n  transform-style: flat;\n  -webkit-transform-style: flat;\n  backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n}\n\n.alice-carousel__stage-item {\n  position: relative;\n  display: inline-block;\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  vertical-align: top;\n  white-space: normal;\n  line-height: 0;\n}\n\n.alice-carousel__stage-item * {\n  line-height: initial;\n}\n\n.alice-carousel__stage-item.__hidden {\n  opacity: 0;\n  overflow: hidden;\n}\n\n.alice-carousel__prev-btn,\n.alice-carousel__next-btn {\n  display: inline-block;\n  box-sizing: border-box;\n  width: 50%;\n  padding: 10px 5px;\n}\n\n.alice-carousel__prev-btn [data-area]::after,\n.alice-carousel__next-btn [data-area]::after {\n  position: relative;\n  content: attr(data-area);\n  text-transform: capitalize;\n}\n\n.alice-carousel__prev-btn {\n  text-align: right;\n}\n\n.alice-carousel__prev-btn-item,\n.alice-carousel__next-btn-item {\n  display: inline-block;\n  cursor: pointer;\n  padding: 5px;\n  margin: 0;\n  color: #465798;\n}\n\n.alice-carousel__prev-btn-item:hover,\n.alice-carousel__next-btn-item:hover {\n  color: darkred;\n}\n\n.alice-carousel__prev-btn-item.__inactive,\n.alice-carousel__next-btn-item.__inactive {\n  opacity: 0.4;\n  pointer-events: none;\n}\n\n.alice-carousel__play-btn {\n  position: absolute;\n  top: 30px;\n  left: 20px;\n  display: inline-block;\n}\n\n.alice-carousel__play-btn:hover {\n  cursor: pointer;\n}\n\n.alice-carousel__play-btn-wrapper {\n  position: relative;\n  width: 32px;\n  height: 32px;\n  padding: 10px;\n  border-radius: 50%;\n  background-color: #fff;\n}\n\n.alice-carousel__play-btn-item {\n  position: absolute;\n  width: 32px;\n  height: 32px;\n  cursor: pointer;\n  border: 0;\n  outline: none;\n  background: transparent;\n}\n\n.alice-carousel__play-btn-item::before, .alice-carousel__play-btn-item::after {\n  position: absolute;\n  pointer-events: none;\n  display: block;\n  width: 0;\n  height: 0;\n  content: \"\";\n  transition: all 0.4s linear;\n  border-width: 8px 0 8px 15px;\n  border-style: solid;\n  border-color: transparent;\n  border-left-color: #465798;\n}\n\n.alice-carousel__play-btn-item::before {\n  left: 5px;\n  height: 14px;\n}\n\n.alice-carousel__play-btn-item::after {\n  top: 7px;\n  left: 18px;\n}\n\n.alice-carousel__play-btn-item.__pause::before, .alice-carousel__play-btn-item.__pause::after {\n  height: 30px;\n  border-width: 0 0 0 10px;\n}\n\n.alice-carousel__play-btn-item.__pause::after {\n  top: 0;\n  left: 18px;\n}\n\n.alice-carousel__dots {\n  margin: 30px 3px 5px;\n  padding: 0;\n  list-style: none;\n  text-align: center;\n}\n\n.alice-carousel__dots > li {\n  display: inline-block;\n}\n\n.alice-carousel__dots-item:not(.__custom) {\n  width: 8px;\n  height: 8px;\n  cursor: pointer;\n  border-radius: 50%;\n  background-color: #e0e4fb;\n}\n\n.alice-carousel__dots-item:not(.__custom):not(:last-child) {\n  margin-right: 20px;\n}\n\n.alice-carousel__dots-item:not(.__custom):hover, .alice-carousel__dots-item:not(.__custom).__active {\n  background-color: #6e7ebc;\n}\n\n.alice-carousel__slide-info {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  display: inline-block;\n  padding: 5px 10px;\n  color: #465798;\n  border-radius: 5px;\n  background-color: rgba(224, 228, 251, 0.6);\n}\n\n.alice-carousel__slide-info-item {\n  vertical-align: middle;\n  line-height: 0;\n}\n\n.multi-carousel__container .alice-carousel__prev-btn, \n.multi-carousel__container .alice-carousel__next-btn {\n    position: absolute !important;\n    top: 0;\n    height: calc(100% - 30px) !important;\n    padding: 0px !important;\n}\n\n.multi-carousel__no-dots .alice-carousel__prev-btn,\n.multi-carousel__no-dots .alice-carousel__next-btn {\n    height: 100% !important;\n}\n\n.multi-carousel__container .alice-carousel__prev-btn-item span::after,\n.multi-carousel__container .alice-carousel__next-btn-item span::after {\n    font-family: monospace;\n}\n\n.multi-carousel__container .alice-carousel__dots {\n    margin: 10px !important;\n}\n\n.multi-carousel__item {\n    margin-right: 10px;\n    border: 1px solid #efecec;\n    border-radius: 4px;\n    overflow: hidden;\n}\n\n.multi-carousel__active {\n    border:2px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvYWxpY2UtY2Fyb3VzZWwuY3NzIiwiTXVsdGlDYXJvdXNlbC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtJQUNWLGtCQUFrQjtFQUNwQjtBQUNGOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7RUFDVCxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQiw2QkFBNkI7RUFDN0IsMkJBQTJCO0VBQzNCLG1DQUFtQztBQUNyQzs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFlBQVk7RUFDWixTQUFTO0VBQ1QsY0FBYztBQUNoQjs7QUFDQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUNBOztFQUVFLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsU0FBUztFQUNULGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxRQUFRO0VBQ1IsU0FBUztFQUNULFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsMEJBQTBCO0FBQzVCOztBQUNBO0VBQ0UsU0FBUztFQUNULFlBQVk7QUFDZDs7QUFDQTtFQUNFLFFBQVE7RUFDUixVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osd0JBQXdCO0FBQzFCOztBQUNBO0VBQ0UsTUFBTTtFQUNOLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsMENBQTBDO0FBQzVDOztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FDck1BOztJQUVJLDZCQUE2QjtJQUM3QixNQUFNO0lBQ04sb0NBQW9DO0lBQ3BDLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSx1QkFBdUI7QUFDM0I7O0FBRUE7O0lBRUksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCIiwiZmlsZSI6Ik11bHRpQ2Fyb3VzZWwuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsaWNlLWNhcm91c2VsIC5hbmltYXRlZCB7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cbi5hbGljZS1jYXJvdXNlbCAuYW5pbWF0ZWQtb3V0IHtcbiAgei1pbmRleDogMTtcbn1cblxuLmFsaWNlLWNhcm91c2VsIC5mYWRlT3V0IHtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXQ7XG59XG5cbkBrZXlmcmFtZXMgZmFkZU91dCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG59XG4uYWxpY2UtY2Fyb3VzZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG4gIGRpcmVjdGlvbjogbHRyO1xufVxuXG4uYWxpY2UtY2Fyb3VzZWxfX3dyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uYWxpY2UtY2Fyb3VzZWxfX3N0YWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRyYW5zZm9ybS1zdHlsZTogZmxhdDtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IGZsYXQ7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG4uYWxpY2UtY2Fyb3VzZWxfX3N0YWdlLWl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMDtcbn1cbi5hbGljZS1jYXJvdXNlbF9fc3RhZ2UtaXRlbSAqIHtcbiAgbGluZS1oZWlnaHQ6IGluaXRpYWw7XG59XG4uYWxpY2UtY2Fyb3VzZWxfX3N0YWdlLWl0ZW0uX19oaWRkZW4ge1xuICBvcGFjaXR5OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYWxpY2UtY2Fyb3VzZWxfX3ByZXYtYnRuLFxuLmFsaWNlLWNhcm91c2VsX19uZXh0LWJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogMTBweCA1cHg7XG59XG4uYWxpY2UtY2Fyb3VzZWxfX3ByZXYtYnRuIFtkYXRhLWFyZWFdOjphZnRlcixcbi5hbGljZS1jYXJvdXNlbF9fbmV4dC1idG4gW2RhdGEtYXJlYV06OmFmdGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb250ZW50OiBhdHRyKGRhdGEtYXJlYSk7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uYWxpY2UtY2Fyb3VzZWxfX3ByZXYtYnRuIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5hbGljZS1jYXJvdXNlbF9fcHJldi1idG4taXRlbSxcbi5hbGljZS1jYXJvdXNlbF9fbmV4dC1idG4taXRlbSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICM0NjU3OTg7XG59XG4uYWxpY2UtY2Fyb3VzZWxfX3ByZXYtYnRuLWl0ZW06aG92ZXIsXG4uYWxpY2UtY2Fyb3VzZWxfX25leHQtYnRuLWl0ZW06aG92ZXIge1xuICBjb2xvcjogZGFya3JlZDtcbn1cbi5hbGljZS1jYXJvdXNlbF9fcHJldi1idG4taXRlbS5fX2luYWN0aXZlLFxuLmFsaWNlLWNhcm91c2VsX19uZXh0LWJ0bi1pdGVtLl9faW5hY3RpdmUge1xuICBvcGFjaXR5OiAwLjQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYWxpY2UtY2Fyb3VzZWxfX3BsYXktYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwcHg7XG4gIGxlZnQ6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5hbGljZS1jYXJvdXNlbF9fcGxheS1idG46aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYWxpY2UtY2Fyb3VzZWxfX3BsYXktYnRuLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmFsaWNlLWNhcm91c2VsX19wbGF5LWJ0bi1pdGVtIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uYWxpY2UtY2Fyb3VzZWxfX3BsYXktYnRuLWl0ZW06OmJlZm9yZSwgLmFsaWNlLWNhcm91c2VsX19wbGF5LWJ0bi1pdGVtOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBjb250ZW50OiBcIlwiO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBsaW5lYXI7XG4gIGJvcmRlci13aWR0aDogOHB4IDAgOHB4IDE1cHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjNDY1Nzk4O1xufVxuLmFsaWNlLWNhcm91c2VsX19wbGF5LWJ0bi1pdGVtOjpiZWZvcmUge1xuICBsZWZ0OiA1cHg7XG4gIGhlaWdodDogMTRweDtcbn1cbi5hbGljZS1jYXJvdXNlbF9fcGxheS1idG4taXRlbTo6YWZ0ZXIge1xuICB0b3A6IDdweDtcbiAgbGVmdDogMThweDtcbn1cbi5hbGljZS1jYXJvdXNlbF9fcGxheS1idG4taXRlbS5fX3BhdXNlOjpiZWZvcmUsIC5hbGljZS1jYXJvdXNlbF9fcGxheS1idG4taXRlbS5fX3BhdXNlOjphZnRlciB7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXdpZHRoOiAwIDAgMCAxMHB4O1xufVxuLmFsaWNlLWNhcm91c2VsX19wbGF5LWJ0bi1pdGVtLl9fcGF1c2U6OmFmdGVyIHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAxOHB4O1xufVxuXG4uYWxpY2UtY2Fyb3VzZWxfX2RvdHMge1xuICBtYXJnaW46IDMwcHggM3B4IDVweDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmFsaWNlLWNhcm91c2VsX19kb3RzID4gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uYWxpY2UtY2Fyb3VzZWxfX2RvdHMtaXRlbTpub3QoLl9fY3VzdG9tKSB7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTRmYjtcbn1cbi5hbGljZS1jYXJvdXNlbF9fZG90cy1pdGVtOm5vdCguX19jdXN0b20pOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4uYWxpY2UtY2Fyb3VzZWxfX2RvdHMtaXRlbTpub3QoLl9fY3VzdG9tKTpob3ZlciwgLmFsaWNlLWNhcm91c2VsX19kb3RzLWl0ZW06bm90KC5fX2N1c3RvbSkuX19hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmU3ZWJjO1xufVxuXG4uYWxpY2UtY2Fyb3VzZWxfX3NsaWRlLWluZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGNvbG9yOiAjNDY1Nzk4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI0LCAyMjgsIDI1MSwgMC42KTtcbn1cbi5hbGljZS1jYXJvdXNlbF9fc2xpZGUtaW5mby1pdGVtIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbGluZS1oZWlnaHQ6IDA7XG59IiwiQGltcG9ydCBcInJlYWN0LWFsaWNlLWNhcm91c2VsL2xpYi9hbGljZS1jYXJvdXNlbC5jc3NcIjtcblxuLm11bHRpLWNhcm91c2VsX19jb250YWluZXIgLmFsaWNlLWNhcm91c2VsX19wcmV2LWJ0biwgXG4ubXVsdGktY2Fyb3VzZWxfX2NvbnRhaW5lciAuYWxpY2UtY2Fyb3VzZWxfX25leHQtYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgICB0b3A6IDA7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMHB4KSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubXVsdGktY2Fyb3VzZWxfX25vLWRvdHMgLmFsaWNlLWNhcm91c2VsX19wcmV2LWJ0bixcbi5tdWx0aS1jYXJvdXNlbF9fbm8tZG90cyAuYWxpY2UtY2Fyb3VzZWxfX25leHQtYnRuIHtcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLm11bHRpLWNhcm91c2VsX19jb250YWluZXIgLmFsaWNlLWNhcm91c2VsX19wcmV2LWJ0bi1pdGVtIHNwYW46OmFmdGVyLFxuLm11bHRpLWNhcm91c2VsX19jb250YWluZXIgLmFsaWNlLWNhcm91c2VsX19uZXh0LWJ0bi1pdGVtIHNwYW46OmFmdGVyIHtcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xufVxuXG4ubXVsdGktY2Fyb3VzZWxfX2NvbnRhaW5lciAuYWxpY2UtY2Fyb3VzZWxfX2RvdHMge1xuICAgIG1hcmdpbjogMTBweCAhaW1wb3J0YW50O1xufVxuXG4ubXVsdGktY2Fyb3VzZWxfX2l0ZW0ge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWZlY2VjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubXVsdGktY2Fyb3VzZWxfX2FjdGl2ZSB7XG4gICAgYm9yZGVyOjJweCBzb2xpZCByZWQ7XG59Il19 */";
styleInject(css_248z$2);

var MultiCarousel = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': css_248z$2,
	stylesheet: stylesheet
});

var require$$0 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(MultiCarousel);

var css_248z$1 = ".normal-carousel__container .alice-carousel__wrapper {\n  clip-path: inset(0px 10px 0px 0px) !important;\n}\n.normal-carousel__container .alice-carousel__prev-btn,\n.normal-carousel__container .alice-carousel__next-btn {\n  width: unset !important;\n}\n.normal-carousel__container .alice-carousel__prev-btn .alice-carousel__next-btn-wrapper,\n.normal-carousel__container .alice-carousel__prev-btn .alice-carousel__prev-btn-wrapper,\n.normal-carousel__container .alice-carousel__next-btn .alice-carousel__next-btn-wrapper,\n.normal-carousel__container .alice-carousel__next-btn .alice-carousel__prev-btn-wrapper {\n  height: 100% !important;\n  padding: 0;\n  width: 20px;\n}\n.normal-carousel__container .alice-carousel__prev-btn .alice-carousel__next-btn-wrapper .alice-carousel__prev-btn-item,\n.normal-carousel__container .alice-carousel__prev-btn .alice-carousel__next-btn-wrapper .alice-carousel__next-btn-item,\n.normal-carousel__container .alice-carousel__prev-btn .alice-carousel__prev-btn-wrapper .alice-carousel__prev-btn-item,\n.normal-carousel__container .alice-carousel__prev-btn .alice-carousel__prev-btn-wrapper .alice-carousel__next-btn-item,\n.normal-carousel__container .alice-carousel__next-btn .alice-carousel__next-btn-wrapper .alice-carousel__prev-btn-item,\n.normal-carousel__container .alice-carousel__next-btn .alice-carousel__next-btn-wrapper .alice-carousel__next-btn-item,\n.normal-carousel__container .alice-carousel__next-btn .alice-carousel__prev-btn-wrapper .alice-carousel__prev-btn-item,\n.normal-carousel__container .alice-carousel__next-btn .alice-carousel__prev-btn-wrapper .alice-carousel__next-btn-item {\n  font-size: 20px;\n  color: #fff !important;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  padding: 0px !important;\n}\n.normal-carousel__container .alice-carousel__prev-btn {\n  left: 0;\n  border-radius: 5px 0 0 5px;\n  background: linear-gradient(90deg, rgba(149, 149, 149, 0.2) 10%, rgba(255, 255, 255, 0) 100%);\n}\n.normal-carousel__container .alice-carousel__prev-btn:hover {\n  background: linear-gradient(90deg, rgba(149, 149, 149, 0.2) 40%, rgba(255, 255, 255, 0) 100%);\n}\n.normal-carousel__container .alice-carousel__next-btn {\n  right: 0;\n  margin: 0 10px;\n  border-radius: 0 5px 5px 0;\n  background: linear-gradient(270deg, rgba(149, 149, 149, 0.2) 10%, rgba(255, 255, 255, 0) 100%);\n}\n.normal-carousel__container .alice-carousel__next-btn:hover {\n  background: linear-gradient(270deg, rgba(149, 149, 149, 0.2) 40%, rgba(255, 255, 255, 0) 100%);\n}\n/*# sourceMappingURL=inline */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vQzovVXNlcnMvYWR3ZWlkYXIvRGVza3RvcC9Gb2xkZXJzL215JTIwYXZlcnRyYSUyMHdvcmsvbXVsdGktY2Fyb3VzZWwvc3JjL3VpL05vcm1hbENhcm91c2VsLnNjc3MiLCJOb3JtYWxDYXJvdXNlbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksNkNBQUE7QUNBUjtBREdJOztFQUVJLHVCQUFBO0FDRFI7QURHUTs7OztFQUVJLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNDWjtBRENZOzs7Ozs7OztFQUVJLGVBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ09oQjtBREZJO0VBQ0ksT0FBQTtFQUNBLDBCQUFBO0VBQ0EsNkZBQUE7QUNJUjtBREZRO0VBQ0ksNkZBQUE7QUNJWjtBREFJO0VBQ0ksUUFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLDhGQUFBO0FDRVI7QURBUTtFQUNJLDhGQUFBO0FDRVo7QUFFQSw2QkFBNkIiLCJmaWxlIjoiTm9ybWFsQ2Fyb3VzZWwuc2NzcyJ9 */";
styleInject(css_248z$1);

var css_248z = ".active-click-carousel__with-btn {\n  margin: 0 50px 0 60px;\n}\n\n.active-click-carousel__container .alice-carousel__prev-btn,\n.active-click-carousel__container .alice-carousel__next-btn {\n  width: 50px !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.active-click-carousel__container .alice-carousel__prev-btn .alice-carousel__prev-btn-wrapper,\n.active-click-carousel__container .alice-carousel__prev-btn .alice-carousel__next-btn-wrapper,\n.active-click-carousel__container .alice-carousel__next-btn .alice-carousel__prev-btn-wrapper,\n.active-click-carousel__container .alice-carousel__next-btn .alice-carousel__next-btn-wrapper {\n  width: 100%;\n  border: 1px solid #efecec;\n  cursor: pointer;\n  border-radius: 5px;\n  background-color: #fff;\n}\n\n.active-click-carousel__container .alice-carousel__prev-btn .alice-carousel__prev-btn-wrapper .alice-carousel__prev-btn-item,\n.active-click-carousel__container .alice-carousel__prev-btn .alice-carousel__prev-btn-wrapper .alice-carousel__next-btn-item,\n.active-click-carousel__container .alice-carousel__prev-btn .alice-carousel__next-btn-wrapper .alice-carousel__prev-btn-item,\n.active-click-carousel__container .alice-carousel__prev-btn .alice-carousel__next-btn-wrapper .alice-carousel__next-btn-item,\n.active-click-carousel__container .alice-carousel__next-btn .alice-carousel__prev-btn-wrapper .alice-carousel__prev-btn-item,\n.active-click-carousel__container .alice-carousel__next-btn .alice-carousel__prev-btn-wrapper .alice-carousel__next-btn-item,\n.active-click-carousel__container .alice-carousel__next-btn .alice-carousel__next-btn-wrapper .alice-carousel__prev-btn-item,\n.active-click-carousel__container .alice-carousel__next-btn .alice-carousel__next-btn-wrapper .alice-carousel__next-btn-item {\n  font-size: 20px;\n  padding: 0 5px !important;\n  width: 100% !important;\n  text-align: center;\n}\n\n.active-click-carousel__container .alice-carousel__prev-btn {\n  left: -60px;\n}\n\n.active-click-carousel__container .alice-carousel__next-btn {\n  right: -50px;\n}\n\n.active-click-carousel__container .active-click-carousel__item {\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=inline */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vQzovVXNlcnMvYWR3ZWlkYXIvRGVza3RvcC9Gb2xkZXJzL215JTIwYXZlcnRyYSUyMHdvcmsvbXVsdGktY2Fyb3VzZWwvc3JjL3VpL0FjdGl2ZUNsaWNrQ2Fyb3VzZWwuc2NzcyIsIkFjdGl2ZUNsaWNrQ2Fyb3VzZWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FDQ0o7O0FER0k7O0VBRUksc0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0FSOztBREVROzs7O0VBRUksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNFWjs7QURBWTs7Ozs7Ozs7RUFFSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDUWhCOztBREhJO0VBQ0ksV0FBQTtBQ0tSOztBREZJO0VBQ0ksWUFBQTtBQ0lSOztBRERJO0VBQ0ksZUFBQTtBQ0dSOztBQUVBLDZCQUE2QiIsImZpbGUiOiJBY3RpdmVDbGlja0Nhcm91c2VsLnNjc3MifQ== */";
styleInject(css_248z);

var reactAliceCarousel = {};

var lib = {};

var utils$1 = {};

var calculateDirection$1 = {};

var types$1 = {};

Object.defineProperty(types$1, "__esModule", {
  value: true
});
types$1.TraceDirectionKey = types$1.Direction = types$1.Axis = void 0;
var TraceDirectionKey;
types$1.TraceDirectionKey = TraceDirectionKey;
(function (TraceDirectionKey) {
  TraceDirectionKey["NEGATIVE"] = "NEGATIVE";
  TraceDirectionKey["POSITIVE"] = "POSITIVE";
  TraceDirectionKey["NONE"] = "NONE";
})(TraceDirectionKey || (types$1.TraceDirectionKey = TraceDirectionKey = {}));
var Direction;
types$1.Direction = Direction;
(function (Direction) {
  Direction["TOP"] = "TOP";
  Direction["LEFT"] = "LEFT";
  Direction["RIGHT"] = "RIGHT";
  Direction["BOTTOM"] = "BOTTOM";
  Direction["NONE"] = "NONE";
})(Direction || (types$1.Direction = Direction = {}));
var Axis;
types$1.Axis = Axis;
(function (Axis) {
  Axis["X"] = "x";
  Axis["Y"] = "y";
})(Axis || (types$1.Axis = Axis = {}));

Object.defineProperty(calculateDirection$1, "__esModule", {
  value: true
});
calculateDirection$1.calculateDirection = calculateDirection;
var _types$5 = types$1;
function calculateDirection(trace) {
  var direction;
  var negative = _types$5.TraceDirectionKey.NEGATIVE;
  var positive = _types$5.TraceDirectionKey.POSITIVE;
  var current = trace[trace.length - 1];
  var previous = trace[trace.length - 2] || 0;
  if (trace.every(function (i) {
    return i === 0;
  })) {
    return _types$5.TraceDirectionKey.NONE;
  }
  direction = current > previous ? positive : negative;
  if (current === 0) {
    direction = previous < 0 ? positive : negative;
  }
  return direction;
}

var calculateDirectionDelta$1 = {};

var common$1 = {};

Object.defineProperty(common$1, "__esModule", {
  value: true
});
common$1.resolveAxisDirection = common$1.getDirectionValue = common$1.getDirectionKey = common$1.getDifference = void 0;
var _types$4 = types$1;
var getDirectionKey = function getDirectionKey() {
  var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var key = Object.keys(object).toString();
  switch (key) {
    case _types$4.TraceDirectionKey.POSITIVE:
      return _types$4.TraceDirectionKey.POSITIVE;
    case _types$4.TraceDirectionKey.NEGATIVE:
      return _types$4.TraceDirectionKey.NEGATIVE;
    default:
      return _types$4.TraceDirectionKey.NONE;
  }
};
common$1.getDirectionKey = getDirectionKey;
var getDirectionValue = function getDirectionValue() {
  var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return values[values.length - 1] || 0;
};
common$1.getDirectionValue = getDirectionValue;
var getDifference = function getDifference() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return Math.abs(x - y);
};
common$1.getDifference = getDifference;
var resolveAxisDirection = function resolveAxisDirection(axis, key) {
  var negative = _types$4.Direction.LEFT;
  var positive = _types$4.Direction.RIGHT;
  var direction = _types$4.Direction.NONE;
  if (axis === _types$4.Axis.Y) {
    negative = _types$4.Direction.BOTTOM;
    positive = _types$4.Direction.TOP;
  }
  if (key === _types$4.TraceDirectionKey.NEGATIVE) {
    direction = negative;
  }
  if (key === _types$4.TraceDirectionKey.POSITIVE) {
    direction = positive;
  }
  return direction;
};
common$1.resolveAxisDirection = resolveAxisDirection;

Object.defineProperty(calculateDirectionDelta$1, "__esModule", {
  value: true
});
calculateDirectionDelta$1.calculateDirectionDelta = calculateDirectionDelta;
var _types$3 = types$1;
var _common$1 = common$1;
function calculateDirectionDelta(traceDirections) {
  var delta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var length = traceDirections.length;
  var i = length - 1;
  var direction = _types$3.TraceDirectionKey.NONE;
  for (; i >= 0; i--) {
    var current = traceDirections[i];
    var currentKey = (0, _common$1.getDirectionKey)(current);
    var currentValue = (0, _common$1.getDirectionValue)(current[currentKey]);
    var prev = traceDirections[i - 1] || {};
    var prevKey = (0, _common$1.getDirectionKey)(prev);
    var prevValue = (0, _common$1.getDirectionValue)(prev[prevKey]);
    var difference = (0, _common$1.getDifference)(currentValue, prevValue);
    if (difference >= delta) {
      direction = currentKey;
      break;
    } else {
      direction = prevKey;
    }
  }
  return direction;
}

var calculateDuration$1 = {};

Object.defineProperty(calculateDuration$1, "__esModule", {
  value: true
});
calculateDuration$1.calculateDuration = calculateDuration;
function calculateDuration() {
  var prevTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var nextTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return prevTime ? nextTime - prevTime : 0;
}

var calculateMovingPosition$1 = {};

Object.defineProperty(calculateMovingPosition$1, "__esModule", {
  value: true
});
calculateMovingPosition$1.calculateMovingPosition = calculateMovingPosition;
function calculateMovingPosition(e) {
  if ('changedTouches' in e) {
    var touches = e.changedTouches && e.changedTouches[0];
    return {
      x: touches && touches.clientX,
      y: touches && touches.clientY
    };
  }
  return {
    x: e.clientX,
    y: e.clientY
  };
}

var calculatePosition$1 = {};

var updateTrace$1 = {};

Object.defineProperty(updateTrace$1, "__esModule", {
  value: true
});
updateTrace$1.updateTrace = updateTrace;
function updateTrace(trace, value) {
  var last = trace[trace.length - 1];
  if (last !== value) {
    trace.push(value);
  }
  return trace;
}

var resolveDirection$1 = {};

var calculateTraceDirections$1 = {};

Object.defineProperty(calculateTraceDirections$1, "__esModule", {
  value: true
});
calculateTraceDirections$1.calculateTraceDirections = calculateTraceDirections;
var _types$2 = types$1;
function _defineProperty$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function calculateTraceDirections() {
  var trace = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var ticks = [];
  var positive = _types$2.TraceDirectionKey.POSITIVE;
  var negative = _types$2.TraceDirectionKey.NEGATIVE;
  var i = 0;
  var tick = [];
  var direction = _types$2.TraceDirectionKey.NONE;
  for (; i < trace.length; i++) {
    var current = trace[i];
    var prev = trace[i - 1];
    if (tick.length) {
      var currentDirection = current > prev ? positive : negative;
      if (direction === _types$2.TraceDirectionKey.NONE) {
        direction = currentDirection;
      }
      if (currentDirection === direction) {
        tick.push(current);
      } else {
        ticks.push(_defineProperty$2({}, direction, tick.slice()));
        tick = [];
        tick.push(current);
        direction = currentDirection;
      }
    } else {
      if (current !== 0) {
        direction = current > 0 ? positive : negative;
      }
      tick.push(current);
    }
  }
  if (tick.length) {
    ticks.push(_defineProperty$2({}, direction, tick));
  }
  return ticks;
}

Object.defineProperty(resolveDirection$1, "__esModule", {
  value: true
});
resolveDirection$1.resolveDirection = resolveDirection;
var _calculateDirection = calculateDirection$1;
var _calculateTraceDirections = calculateTraceDirections$1;
var _calculateDirectionDelta = calculateDirectionDelta$1;
var _common = common$1;
var _types$1 = types$1;
function resolveDirection(trace) {
  var axis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _types$1.Axis.X;
  var directionDelta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  if (directionDelta) {
    var directions = (0, _calculateTraceDirections.calculateTraceDirections)(trace);
    var _direction = (0, _calculateDirectionDelta.calculateDirectionDelta)(directions, directionDelta);
    return (0, _common.resolveAxisDirection)(axis, _direction);
  }
  var direction = (0, _calculateDirection.calculateDirection)(trace);
  return (0, _common.resolveAxisDirection)(axis, direction);
}

var calculateVelocity$1 = {};

Object.defineProperty(calculateVelocity$1, "__esModule", {
  value: true
});
calculateVelocity$1.calculateVelocity = calculateVelocity;
function calculateVelocity(x, y, time) {
  var magnitude = Math.sqrt(x * x + y * y);
  return magnitude / (time || 1);
}

Object.defineProperty(calculatePosition$1, "__esModule", {
  value: true
});
calculatePosition$1.calculatePosition = calculatePosition;
var _updateTrace = updateTrace$1;
var _resolveDirection = resolveDirection$1;
var _calculateDuration = calculateDuration$1;
var _calculateVelocity = calculateVelocity$1;
var _types = types$1;
function calculatePosition(state, options) {
  var start = state.start,
    x = state.x,
    y = state.y,
    traceX = state.traceX,
    traceY = state.traceY;
  var rotatePosition = options.rotatePosition,
    directionDelta = options.directionDelta;
  var deltaX = rotatePosition.x - x;
  var deltaY = y - rotatePosition.y;
  var absX = Math.abs(deltaX);
  var absY = Math.abs(deltaY);
  (0, _updateTrace.updateTrace)(traceX, deltaX);
  (0, _updateTrace.updateTrace)(traceY, deltaY);
  var directionX = (0, _resolveDirection.resolveDirection)(traceX, _types.Axis.X, directionDelta);
  var directionY = (0, _resolveDirection.resolveDirection)(traceY, _types.Axis.Y, directionDelta);
  var duration = (0, _calculateDuration.calculateDuration)(start, Date.now());
  var velocity = (0, _calculateVelocity.calculateVelocity)(absX, absY, duration);
  return {
    absX: absX,
    absY: absY,
    deltaX: deltaX,
    deltaY: deltaY,
    directionX: directionX,
    directionY: directionY,
    duration: duration,
    positionX: rotatePosition.x,
    positionY: rotatePosition.y,
    velocity: velocity
  };
}

var checkIsMoreThanSingleTouches$1 = {};

Object.defineProperty(checkIsMoreThanSingleTouches$1, "__esModule", {
  value: true
});
checkIsMoreThanSingleTouches$1.checkIsMoreThanSingleTouches = void 0;
var checkIsMoreThanSingleTouches = function checkIsMoreThanSingleTouches(e) {
  return Boolean(e.touches && e.touches.length > 1);
};
checkIsMoreThanSingleTouches$1.checkIsMoreThanSingleTouches = checkIsMoreThanSingleTouches;

var checkIsPassiveSupported$1 = {};

var createOptions$1 = {};

Object.defineProperty(createOptions$1, "__esModule", {
  value: true
});
createOptions$1.createOptions = createOptions;
function createOptions() {
  var proxy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  Object.defineProperty(proxy, 'passive', {
    get: function get() {
      this.isPassiveSupported = true;
      return true;
    },
    enumerable: true
  });
  return proxy;
}

Object.defineProperty(checkIsPassiveSupported$1, "__esModule", {
  value: true
});
checkIsPassiveSupported$1.checkIsPassiveSupported = checkIsPassiveSupported;
checkIsPassiveSupported$1.noop = void 0;
var _createOptions = createOptions$1;
function checkIsPassiveSupported(isPassiveSupported) {
  if (typeof isPassiveSupported === 'boolean') {
    return isPassiveSupported;
  }
  var proxy = {
    isPassiveSupported: isPassiveSupported
  };
  try {
    var options = (0, _createOptions.createOptions)(proxy);
    window.addEventListener('checkIsPassiveSupported', noop, options);
    window.removeEventListener('checkIsPassiveSupported', noop, options);
  } catch (err) {}
  return proxy.isPassiveSupported;
}
var noop = function noop() {};
checkIsPassiveSupported$1.noop = noop;

var checkIsTouchEventsSupported$1 = {};

Object.defineProperty(checkIsTouchEventsSupported$1, "__esModule", {
  value: true
});
checkIsTouchEventsSupported$1.checkIsTouchEventsSupported = void 0;
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
var checkIsTouchEventsSupported = function checkIsTouchEventsSupported() {
  return (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && ('ontouchstart' in window || Boolean(window.navigator.maxTouchPoints));
};
checkIsTouchEventsSupported$1.checkIsTouchEventsSupported = checkIsTouchEventsSupported;

var getInitialState$1 = {};

Object.defineProperty(getInitialState$1, "__esModule", {
  value: true
});
getInitialState$1.getInitialState = void 0;
function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) {
      _defineProperty$1(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var getInitialState = function getInitialState() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _objectSpread$1({
    x: 0,
    y: 0,
    start: 0,
    isSwiping: false,
    traceX: [],
    traceY: []
  }, options);
};
getInitialState$1.getInitialState = getInitialState;

var getInitialProps$1 = {};

Object.defineProperty(getInitialProps$1, "__esModule", {
  value: true
});
getInitialProps$1.getInitialProps = void 0;
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var getInitialProps = function getInitialProps() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _objectSpread({
    element: null,
    target: null,
    delta: 10,
    directionDelta: 0,
    rotationAngle: 0,
    mouseTrackingEnabled: false,
    touchTrackingEnabled: true,
    preventDefaultTouchmoveEvent: false,
    preventTrackingOnMouseleave: false
  }, props);
};
getInitialProps$1.getInitialProps = getInitialProps;

var getOptions$1 = {};

Object.defineProperty(getOptions$1, "__esModule", {
  value: true
});
getOptions$1.getOptions = getOptions;
function getOptions() {
  var isPassiveSupported = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  if (isPassiveSupported) {
    return {
      passive: false
    };
  }
  return {};
}

var rotateByAngle$1 = {};

Object.defineProperty(rotateByAngle$1, "__esModule", {
  value: true
});
rotateByAngle$1.rotateByAngle = rotateByAngle;
function rotateByAngle(position) {
  var angle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  if (angle === 0) {
    return position;
  }
  var x = position.x,
    y = position.y;
  var angleInRadians = Math.PI / 180 * angle;
  var rotatedX = x * Math.cos(angleInRadians) + y * Math.sin(angleInRadians);
  var rotatedY = y * Math.cos(angleInRadians) - x * Math.sin(angleInRadians);
  return {
    x: rotatedX,
    y: rotatedY
  };
}

(function (exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _calculateDirection = calculateDirection$1;
	Object.keys(_calculateDirection).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (key in exports && exports[key] === _calculateDirection[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _calculateDirection[key];
	    }
	  });
	});
	var _calculateDirectionDelta = calculateDirectionDelta$1;
	Object.keys(_calculateDirectionDelta).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (key in exports && exports[key] === _calculateDirectionDelta[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _calculateDirectionDelta[key];
	    }
	  });
	});
	var _calculateDuration = calculateDuration$1;
	Object.keys(_calculateDuration).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (key in exports && exports[key] === _calculateDuration[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _calculateDuration[key];
	    }
	  });
	});
	var _calculateMovingPosition = calculateMovingPosition$1;
	Object.keys(_calculateMovingPosition).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (key in exports && exports[key] === _calculateMovingPosition[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _calculateMovingPosition[key];
	    }
	  });
	});
	var _calculatePosition = calculatePosition$1;
	Object.keys(_calculatePosition).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (key in exports && exports[key] === _calculatePosition[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _calculatePosition[key];
	    }
	  });
	});
	var _calculateTraceDirections = calculateTraceDirections$1;
	Object.keys(_calculateTraceDirections).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (key in exports && exports[key] === _calculateTraceDirections[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _calculateTraceDirections[key];
	    }
	  });
	});
	var _calculateVelocity = calculateVelocity$1;
	Object.keys(_calculateVelocity).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (key in exports && exports[key] === _calculateVelocity[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _calculateVelocity[key];
	    }
	  });
	});
	var _checkIsMoreThanSingleTouches = checkIsMoreThanSingleTouches$1;
	Object.keys(_checkIsMoreThanSingleTouches).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (key in exports && exports[key] === _checkIsMoreThanSingleTouches[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _checkIsMoreThanSingleTouches[key];
	    }
	  });
	});
	var _checkIsPassiveSupported = checkIsPassiveSupported$1;
	Object.keys(_checkIsPassiveSupported).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (key in exports && exports[key] === _checkIsPassiveSupported[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _checkIsPassiveSupported[key];
	    }
	  });
	});
	var _checkIsTouchEventsSupported = checkIsTouchEventsSupported$1;
	Object.keys(_checkIsTouchEventsSupported).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (key in exports && exports[key] === _checkIsTouchEventsSupported[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _checkIsTouchEventsSupported[key];
	    }
	  });
	});
	var _common = common$1;
	Object.keys(_common).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (key in exports && exports[key] === _common[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _common[key];
	    }
	  });
	});
	var _createOptions = createOptions$1;
	Object.keys(_createOptions).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (key in exports && exports[key] === _createOptions[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _createOptions[key];
	    }
	  });
	});
	var _getInitialState = getInitialState$1;
	Object.keys(_getInitialState).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (key in exports && exports[key] === _getInitialState[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _getInitialState[key];
	    }
	  });
	});
	var _getInitialProps = getInitialProps$1;
	Object.keys(_getInitialProps).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (key in exports && exports[key] === _getInitialProps[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _getInitialProps[key];
	    }
	  });
	});
	var _getOptions = getOptions$1;
	Object.keys(_getOptions).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (key in exports && exports[key] === _getOptions[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _getOptions[key];
	    }
	  });
	});
	var _resolveDirection = resolveDirection$1;
	Object.keys(_resolveDirection).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (key in exports && exports[key] === _resolveDirection[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _resolveDirection[key];
	    }
	  });
	});
	var _rotateByAngle = rotateByAngle$1;
	Object.keys(_rotateByAngle).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (key in exports && exports[key] === _rotateByAngle[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _rotateByAngle[key];
	    }
	  });
	});
	var _updateTrace = updateTrace$1;
	Object.keys(_updateTrace).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (key in exports && exports[key] === _updateTrace[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _updateTrace[key];
	    }
	  });
	});
} (utils$1));

(function (exports) {

	function _typeof(obj) {
	  "@babel/helpers - typeof";

	  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	  }, _typeof(obj);
	}
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _exportNames = {};
	exports["default"] = void 0;
	var Utils = _interopRequireWildcard(utils$1);
	var _types = types$1;
	Object.keys(_types).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
	  if (key in exports && exports[key] === _types[key]) return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _types[key];
	    }
	  });
	});
	function _getRequireWildcardCache(nodeInterop) {
	  if (typeof WeakMap !== "function") return null;
	  var cacheBabelInterop = new WeakMap();
	  var cacheNodeInterop = new WeakMap();
	  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
	    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
	  })(nodeInterop);
	}
	function _interopRequireWildcard(obj, nodeInterop) {
	  if (!nodeInterop && obj && obj.__esModule) {
	    return obj;
	  }
	  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
	    return {
	      "default": obj
	    };
	  }
	  var cache = _getRequireWildcardCache(nodeInterop);
	  if (cache && cache.has(obj)) {
	    return cache.get(obj);
	  }
	  var newObj = {};
	  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
	  for (var key in obj) {
	    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
	      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
	      if (desc && (desc.get || desc.set)) {
	        Object.defineProperty(newObj, key, desc);
	      } else {
	        newObj[key] = obj[key];
	      }
	    }
	  }
	  newObj["default"] = obj;
	  if (cache) {
	    cache.set(obj, newObj);
	  }
	  return newObj;
	}
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}
	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  Object.defineProperty(Constructor, "prototype", {
	    writable: false
	  });
	  return Constructor;
	}
	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	  return obj;
	}
	var VanillaSwipe = /*#__PURE__*/function () {
	  function VanillaSwipe(props) {
	    _classCallCheck(this, VanillaSwipe);
	    _defineProperty(this, "state", void 0);
	    _defineProperty(this, "props", void 0);
	    this.state = Utils.getInitialState();
	    this.props = Utils.getInitialProps(props);
	    this.handleSwipeStart = this.handleSwipeStart.bind(this);
	    this.handleSwipeMove = this.handleSwipeMove.bind(this);
	    this.handleSwipeEnd = this.handleSwipeEnd.bind(this);
	    this.handleMouseDown = this.handleMouseDown.bind(this);
	    this.handleMouseMove = this.handleMouseMove.bind(this);
	    this.handleMouseUp = this.handleMouseUp.bind(this);
	    this.handleMouseLeave = this.handleMouseLeave.bind(this);
	  }
	  _createClass(VanillaSwipe, [{
	    key: "init",
	    value: function init() {
	      this.setupTouchListeners();
	      this.setupMouseListeners();
	    }
	  }, {
	    key: "update",
	    value: function update(props) {
	      var prevProps = this.props;
	      var nextProps = Object.assign({}, prevProps, props);
	      if (prevProps.element !== nextProps.element || prevProps.target !== nextProps.target) {
	        this.destroy();
	        this.props = nextProps;
	        this.init();
	        return;
	      }
	      this.props = nextProps;
	      if (prevProps.mouseTrackingEnabled !== nextProps.mouseTrackingEnabled || prevProps.preventTrackingOnMouseleave !== nextProps.preventTrackingOnMouseleave) {
	        this.cleanupMouseListeners();
	        nextProps.mouseTrackingEnabled ? this.setupMouseListeners() : this.cleanupMouseListeners();
	      }
	      if (prevProps.touchTrackingEnabled !== nextProps.touchTrackingEnabled) {
	        this.cleanupTouchListeners();
	        nextProps.touchTrackingEnabled ? this.setupTouchListeners() : this.cleanupTouchListeners();
	      }
	    }
	  }, {
	    key: "destroy",
	    value: function destroy() {
	      this.cleanupMouseListeners();
	      this.cleanupTouchListeners();
	      this.state = Utils.getInitialState();
	      this.props = Utils.getInitialProps();
	    }
	  }, {
	    key: "setupTouchListeners",
	    value: function setupTouchListeners() {
	      var _this$props = this.props,
	        element = _this$props.element,
	        target = _this$props.target,
	        touchTrackingEnabled = _this$props.touchTrackingEnabled;
	      if (element && touchTrackingEnabled) {
	        var listener = target || element;
	        var isPassiveSupported = Utils.checkIsPassiveSupported();
	        var options = Utils.getOptions(isPassiveSupported);
	        listener.addEventListener('touchstart', this.handleSwipeStart, options);
	        listener.addEventListener('touchmove', this.handleSwipeMove, options);
	        listener.addEventListener('touchend', this.handleSwipeEnd, options);
	      }
	    }
	  }, {
	    key: "cleanupTouchListeners",
	    value: function cleanupTouchListeners() {
	      var _this$props2 = this.props,
	        element = _this$props2.element,
	        target = _this$props2.target;
	      var listener = target || element;
	      if (listener) {
	        listener.removeEventListener('touchstart', this.handleSwipeStart);
	        listener.removeEventListener('touchmove', this.handleSwipeMove);
	        listener.removeEventListener('touchend', this.handleSwipeEnd);
	      }
	    }
	  }, {
	    key: "setupMouseListeners",
	    value: function setupMouseListeners() {
	      var _this$props3 = this.props,
	        element = _this$props3.element,
	        mouseTrackingEnabled = _this$props3.mouseTrackingEnabled,
	        preventTrackingOnMouseleave = _this$props3.preventTrackingOnMouseleave;
	      if (mouseTrackingEnabled && element) {
	        element.addEventListener('mousedown', this.handleMouseDown);
	        element.addEventListener('mousemove', this.handleMouseMove);
	        element.addEventListener('mouseup', this.handleMouseUp);
	        if (preventTrackingOnMouseleave) {
	          element.addEventListener('mouseleave', this.handleMouseLeave);
	        }
	      }
	    }
	  }, {
	    key: "cleanupMouseListeners",
	    value: function cleanupMouseListeners() {
	      var element = this.props.element;
	      if (element) {
	        element.removeEventListener('mousedown', this.handleMouseDown);
	        element.removeEventListener('mousemove', this.handleMouseMove);
	        element.removeEventListener('mouseup', this.handleMouseUp);
	        element.removeEventListener('mouseleave', this.handleMouseLeave);
	      }
	    }
	  }, {
	    key: "getEventData",
	    value: function getEventData(e) {
	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
	        directionDelta: 0
	      };
	      var rotationAngle = this.props.rotationAngle;
	      var directionDelta = options.directionDelta;
	      var movingPosition = Utils.calculateMovingPosition(e);
	      var rotatePosition = Utils.rotateByAngle(movingPosition, rotationAngle);
	      return Utils.calculatePosition(this.state, {
	        rotatePosition: rotatePosition,
	        directionDelta: directionDelta
	      });
	    }
	  }, {
	    key: "handleSwipeStart",
	    value: function handleSwipeStart(e) {
	      if (Utils.checkIsMoreThanSingleTouches(e)) return;
	      var rotationAngle = this.props.rotationAngle;
	      var movingPosition = Utils.calculateMovingPosition(e);
	      var _Utils$rotateByAngle = Utils.rotateByAngle(movingPosition, rotationAngle),
	        x = _Utils$rotateByAngle.x,
	        y = _Utils$rotateByAngle.y;
	      this.state = Utils.getInitialState({
	        isSwiping: false,
	        start: Date.now(),
	        x: x,
	        y: y
	      });
	    }
	  }, {
	    key: "handleSwipeMove",
	    value: function handleSwipeMove(e) {
	      var _this$state = this.state,
	        x = _this$state.x,
	        y = _this$state.y,
	        isSwiping = _this$state.isSwiping;
	      if (!x || !y || Utils.checkIsMoreThanSingleTouches(e)) return;
	      var directionDelta = this.props.directionDelta || 0;
	      var _this$getEventData = this.getEventData(e, {
	          directionDelta: directionDelta
	        }),
	        absX = _this$getEventData.absX,
	        absY = _this$getEventData.absY,
	        deltaX = _this$getEventData.deltaX,
	        deltaY = _this$getEventData.deltaY,
	        directionX = _this$getEventData.directionX,
	        directionY = _this$getEventData.directionY,
	        duration = _this$getEventData.duration,
	        velocity = _this$getEventData.velocity;
	      var _this$props4 = this.props,
	        delta = _this$props4.delta,
	        preventDefaultTouchmoveEvent = _this$props4.preventDefaultTouchmoveEvent,
	        onSwipeStart = _this$props4.onSwipeStart,
	        onSwiping = _this$props4.onSwiping;
	      if (e.cancelable && preventDefaultTouchmoveEvent) e.preventDefault();
	      if (absX < Number(delta) && absY < Number(delta) && !isSwiping) return;
	      if (onSwipeStart && !isSwiping) {
	        onSwipeStart(e, {
	          deltaX: deltaX,
	          deltaY: deltaY,
	          absX: absX,
	          absY: absY,
	          directionX: directionX,
	          directionY: directionY,
	          duration: duration,
	          velocity: velocity
	        });
	      }
	      this.state.isSwiping = true;
	      if (onSwiping) {
	        onSwiping(e, {
	          deltaX: deltaX,
	          deltaY: deltaY,
	          absX: absX,
	          absY: absY,
	          directionX: directionX,
	          directionY: directionY,
	          duration: duration,
	          velocity: velocity
	        });
	      }
	    }
	  }, {
	    key: "handleSwipeEnd",
	    value: function handleSwipeEnd(e) {
	      var _this$props5 = this.props,
	        onSwiped = _this$props5.onSwiped,
	        onTap = _this$props5.onTap;
	      if (this.state.isSwiping) {
	        var directionDelta = this.props.directionDelta || 0;
	        var position = this.getEventData(e, {
	          directionDelta: directionDelta
	        });
	        onSwiped && onSwiped(e, position);
	      } else {
	        var _position = this.getEventData(e);
	        onTap && onTap(e, _position);
	      }
	      this.state = Utils.getInitialState();
	    }
	  }, {
	    key: "handleMouseDown",
	    value: function handleMouseDown(e) {
	      var target = this.props.target;
	      if (target) {
	        if (target === e.target) {
	          this.handleSwipeStart(e);
	        }
	      } else {
	        this.handleSwipeStart(e);
	      }
	    }
	  }, {
	    key: "handleMouseMove",
	    value: function handleMouseMove(e) {
	      this.handleSwipeMove(e);
	    }
	  }, {
	    key: "handleMouseUp",
	    value: function handleMouseUp(e) {
	      var isSwiping = this.state.isSwiping;
	      var target = this.props.target;
	      if (target) {
	        if (target === e.target || isSwiping) {
	          this.handleSwipeEnd(e);
	        }
	      } else {
	        this.handleSwipeEnd(e);
	      }
	    }
	  }, {
	    key: "handleMouseLeave",
	    value: function handleMouseLeave(e) {
	      var isSwiping = this.state.isSwiping;
	      if (isSwiping) {
	        this.handleSwipeEnd(e);
	      }
	    }
	  }], [{
	    key: "isTouchEventsSupported",
	    value: function isTouchEventsSupported() {
	      return Utils.checkIsTouchEventsSupported();
	    }
	  }]);
	  return VanillaSwipe;
	}();
	exports["default"] = VanillaSwipe;
} (lib));

var defaultProps = {};

var types = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	  value: !0
	}), exports.Modifiers = exports.Classnames = exports.AutoplayDirection = exports.ControlsStrategy = exports.AutoPlayStrategy = exports.AnimationType = exports.EventType = void 0, function (e) {
	  e.ACTION = "action", e.INIT = "init", e.RESIZE = "resize", e.UPDATE = "update";
	}(exports.EventType || (exports.EventType = {})), function (e) {
	  e.FADEOUT = "fadeout", e.SLIDE = "slide";
	}(exports.AnimationType || (exports.AnimationType = {})), function (e) {
	  e.DEFAULT = "default", e.ALL = "all", e.ACTION = "action", e.NONE = "none";
	}(exports.AutoPlayStrategy || (exports.AutoPlayStrategy = {})), function (e) {
	  e.DEFAULT = "default", e.ALTERNATE = "alternate", e.RESPONSIVE = "responsive";
	}(exports.ControlsStrategy || (exports.ControlsStrategy = {})), function (e) {
	  e.RTL = "rtl", e.LTR = "ltr";
	}(exports.AutoplayDirection || (exports.AutoplayDirection = {})), function (e) {
	  e.ANIMATED = "animated animated-out fadeOut", e.ROOT = "alice-carousel", e.WRAPPER = "alice-carousel__wrapper", e.STAGE = "alice-carousel__stage", e.STAGE_ITEM = "alice-carousel__stage-item", e.DOTS = "alice-carousel__dots", e.DOTS_ITEM = "alice-carousel__dots-item", e.PLAY_BTN = "alice-carousel__play-btn", e.PLAY_BTN_ITEM = "alice-carousel__play-btn-item", e.PLAY_BTN_WRAPPER = "alice-carousel__play-btn-wrapper", e.SLIDE_INFO = "alice-carousel__slide-info", e.SLIDE_INFO_ITEM = "alice-carousel__slide-info-item", e.BUTTON_PREV = "alice-carousel__prev-btn", e.BUTTON_PREV_WRAPPER = "alice-carousel__prev-btn-wrapper", e.BUTTON_PREV_ITEM = "alice-carousel__prev-btn-item", e.BUTTON_NEXT = "alice-carousel__next-btn", e.BUTTON_NEXT_WRAPPER = "alice-carousel__next-btn-wrapper", e.BUTTON_NEXT_ITEM = "alice-carousel__next-btn-item";
	}(exports.Classnames || (exports.Classnames = {})), function (e) {
	  e.ACTIVE = "__active", e.INACTIVE = "__inactive", e.CLONED = "__cloned", e.CUSTOM = "__custom", e.PAUSE = "__pause", e.SEPARATOR = "__separator", e.SSR = "__ssr", e.TARGET = "__target";
	}(exports.Modifiers || (exports.Modifiers = {}));
} (types));

(function (exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	}), exports.defaultProps = void 0;
	var types_1 = types;
	exports.defaultProps = {
	  activeIndex: 0,
	  animationDuration: 400,
	  animationEasingFunction: "ease",
	  animationType: types_1.AnimationType.SLIDE,
	  autoHeight: !1,
	  autoWidth: !1,
	  autoPlay: !1,
	  autoPlayControls: !1,
	  autoPlayDirection: types_1.AutoplayDirection.LTR,
	  autoPlayInterval: 400,
	  autoPlayStrategy: types_1.AutoPlayStrategy.DEFAULT,
	  children: void 0,
	  controlsStrategy: types_1.ControlsStrategy.DEFAULT,
	  disableButtonsControls: !1,
	  disableDotsControls: !1,
	  disableSlideInfo: !0,
	  infinite: !1,
	  innerWidth: void 0,
	  items: void 0,
	  keyboardNavigation: !1,
	  mouseTracking: !1,
	  name: "",
	  paddingLeft: 0,
	  paddingRight: 0,
	  responsive: void 0,
	  swipeDelta: 20,
	  swipeExtraPadding: 200,
	  ssrSilentMode: !0,
	  touchTracking: !0,
	  touchMoveDefaultEvents: !0,
	  onInitialized: function () {},
	  onResized: function () {},
	  onResizeEvent: void 0,
	  onSlideChange: function () {},
	  onSlideChanged: function () {}
	};
} (defaultProps));

var views = {};

var SlideInfo = {};

var utils = {};

var common = {};

var elements = {};

var mappers = {};

(function (exports) {

	var __assign = function () {
	    return (__assign = Object.assign || function (o) {
	      for (var t, r = 1, i = arguments.length; r < i; r++) for (var s in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, s) && (o[s] = t[s]);
	      return o;
	    }).apply(this, arguments);
	  },
	  mapPartialCoords = (Object.defineProperty(exports, "__esModule", {
	    value: !0
	  }), exports.mapPositionCoords = exports.mapPartialCoords = void 0, function (o) {
	    return o.map(function (o) {
	      return {
	        width: o.width,
	        position: 0
	      };
	    });
	  }),
	  mapPositionCoords = (exports.mapPartialCoords = mapPartialCoords, function (o, t) {
	    return void 0 === t && (t = 0), o.map(function (o) {
	      return o.position > t ? __assign(__assign({}, o), {
	        position: t
	      }) : o;
	    });
	  });
	exports.mapPositionCoords = mapPositionCoords;
} (mappers));

var math = {};

(function (exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	}), exports.isVerticalTouchmoveDetected = exports.getFadeoutAnimationPosition = exports.getFadeoutAnimationIndex = exports.getSwipeTouchendIndex = exports.getSwipeTouchendPosition = exports.getSwipeTransformationCursor = exports.getTransformationItemIndex = exports.getSwipeShiftValue = exports.getItemCoords = exports.getIsLeftDirection = exports.shouldRecalculateSwipePosition = exports.getSwipeLimitMax = exports.getSwipeLimitMin = exports.shouldCancelSlideAnimation = exports.shouldRecalculateSlideIndex = exports.getUpdateSlidePositionIndex = exports.getActiveIndex = exports.getStartIndex = exports.getShiftIndex = void 0;
	var getShiftIndex = function (e, t) {
	    return (e = void 0 === e ? 0 : e) + (t = void 0 === t ? 0 : t);
	  },
	  getStartIndex = (exports.getShiftIndex = getShiftIndex, function (e, t) {
	    if (void 0 === e && (e = 0), t = void 0 === t ? 0 : t) {
	      if (t <= e) return t - 1;
	      if (0 < e) return e;
	    }
	    return 0;
	  }),
	  getActiveIndex = (exports.getStartIndex = getStartIndex, function (e) {
	    var t = e.startIndex,
	      t = void 0 === t ? 0 : t,
	      i = e.itemsCount,
	      e = e.infinite;
	    return void 0 !== e && e ? t : (0, exports.getStartIndex)(t, void 0 === i ? 0 : i);
	  }),
	  getUpdateSlidePositionIndex = (exports.getActiveIndex = getActiveIndex, function (e, t) {
	    return e < 0 ? t - 1 : t <= e ? 0 : e;
	  }),
	  shouldRecalculateSlideIndex = (exports.getUpdateSlidePositionIndex = getUpdateSlidePositionIndex, function (e, t) {
	    return e < 0 || t <= e;
	  }),
	  shouldCancelSlideAnimation = (exports.shouldRecalculateSlideIndex = shouldRecalculateSlideIndex, function (e, t) {
	    return e < 0 || t <= e;
	  }),
	  getSwipeLimitMin = (exports.shouldCancelSlideAnimation = shouldCancelSlideAnimation, function (e, t) {
	    var i = e.itemsOffset,
	      e = e.transformationSet,
	      e = void 0 === e ? [] : e,
	      o = t.infinite,
	      t = t.swipeExtraPadding;
	    return o ? (e[void 0 === i ? 0 : i] || {}).position : (o = (e[0] || {}).width, Math.min(void 0 === t ? 0 : t, void 0 === o ? 0 : o));
	  }),
	  getSwipeLimitMax = (exports.getSwipeLimitMin = getSwipeLimitMin, function (e, t) {
	    var i = t.infinite,
	      t = t.swipeExtraPadding,
	      t = void 0 === t ? 0 : t,
	      o = e.itemsCount,
	      n = e.itemsOffset,
	      r = e.itemsInSlide,
	      r = void 0 === r ? 1 : r,
	      e = e.transformationSet,
	      e = void 0 === e ? [] : e;
	    return i ? (e[(void 0 === o ? 1 : o) + (0, exports.getShiftIndex)(r, void 0 === n ? 0 : n)] || {}).position || 0 : (0, exports.getItemCoords)(-r, e).position + t;
	  }),
	  shouldRecalculateSwipePosition = (exports.getSwipeLimitMax = getSwipeLimitMax, function (e, t, i) {
	    return -t <= e || Math.abs(e) >= i;
	  }),
	  getIsLeftDirection = (exports.shouldRecalculateSwipePosition = shouldRecalculateSwipePosition, function (e) {
	    return (e = void 0 === e ? 0 : e) < 0;
	  }),
	  getItemCoords = (exports.getIsLeftDirection = getIsLeftDirection, function (e, t) {
	    return (t = void 0 === t ? [] : t).slice(e = void 0 === e ? 0 : e)[0] || {
	      position: 0,
	      width: 0
	    };
	  }),
	  getSwipeShiftValue = (exports.getItemCoords = getItemCoords, function (e, t) {
	    return void 0 === e && (e = 0), void 0 === t && (t = []), (0, exports.getItemCoords)(e, t).position;
	  }),
	  getTransformationItemIndex = (exports.getSwipeShiftValue = getSwipeShiftValue, function (e, t) {
	    return void 0 === t && (t = 0), (e = void 0 === e ? [] : e).findIndex(function (e) {
	      return e.position >= Math.abs(t);
	    });
	  }),
	  getSwipeTransformationCursor = (exports.getTransformationItemIndex = getTransformationItemIndex, function (e, t, i) {
	    void 0 === e && (e = []), void 0 === t && (t = 0), void 0 === i && (i = 0);
	    e = (0, exports.getTransformationItemIndex)(e, t);
	    return (0, exports.getIsLeftDirection)(i) ? e : e - 1;
	  }),
	  getSwipeTouchendPosition = (exports.getSwipeTransformationCursor = getSwipeTransformationCursor, function (e, t, i) {
	    void 0 === i && (i = 0);
	    var o = e.infinite,
	      n = e.autoWidth,
	      r = e.isStageContentPartial,
	      s = e.swipeAllowedPositionMax,
	      e = e.transformationSet,
	      i = (0, exports.getSwipeTransformationCursor)(e, i, t),
	      t = (0, exports.getItemCoords)(i, e).position;
	    if (!o) {
	      if (n && r) return 0;
	      if (s < t) return -s;
	    }
	    return -t;
	  }),
	  getSwipeTouchendIndex = (exports.getSwipeTouchendPosition = getSwipeTouchendPosition, function (e, t) {
	    var i = t.transformationSet,
	      o = t.itemsInSlide,
	      n = t.itemsOffset,
	      r = t.itemsCount,
	      s = t.infinite,
	      d = t.isStageContentPartial,
	      a = t.activeIndex,
	      t = t.translate3d;
	    return s || !d && t !== Math.abs(e) ? (d = (0, exports.getTransformationItemIndex)(i, e), s ? d < (t = (0, exports.getShiftIndex)(o, n)) ? r - o - n + d : t + r <= d ? d - (t + r) : d - t : d) : a;
	  }),
	  getFadeoutAnimationIndex = (exports.getSwipeTouchendIndex = getSwipeTouchendIndex, function (e) {
	    var t = e.infinite,
	      i = e.activeIndex,
	      e = e.itemsInSlide;
	    return t ? i + e : i;
	  }),
	  getFadeoutAnimationPosition = (exports.getFadeoutAnimationIndex = getFadeoutAnimationIndex, function (e, t) {
	    var i = t.activeIndex,
	      t = t.stageWidth;
	    return e < i ? (i - e) * -t || 0 : (e - i) * t || 0;
	  }),
	  isVerticalTouchmoveDetected = (exports.getFadeoutAnimationPosition = getFadeoutAnimationPosition, function (e, t, i) {
	    return e < (i = void 0 === i ? 0 : i) || e < .1 * t;
	  });
	exports.isVerticalTouchmoveDetected = isVerticalTouchmoveDetected;
} (math));

var hasRequiredElements;

function requireElements () {
	if (hasRequiredElements) return elements;
	hasRequiredElements = 1;
	(function (exports) {

		var __assign = function () {
		    return (__assign = Object.assign || function (t) {
		      for (var e, r = 1, n = arguments.length; r < n; r++) for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
		      return t;
		    }).apply(this, arguments);
		  },
		  common_1 = (Object.defineProperty(exports, "__esModule", {
		    value: !0
		  }), exports.getTransformMatrix = exports.getTranslateXProperty = exports.getTouchmoveTranslatePosition = exports.getTranslate3dProperty = exports.getRenderStageItemStyles = exports.getRenderStageStyles = exports.getTransitionProperty = exports.getRenderWrapperStyles = exports.animate = exports.shouldHandleResizeEvent = exports.getElementFirstChild = exports.getElementCursor = exports.getAutoheightProperty = exports.getElementDimensions = exports.getItemWidth = exports.createDefaultTransformationSet = exports.createAutowidthTransformationSet = exports.isElement = exports.createClones = exports.getItemsOffset = exports.getItemsCount = exports.getSlides = void 0, requireCommon()),
		  mappers_1 = mappers,
		  math_1 = math,
		  getSlides = function (t) {
		    var e = t.children,
		      t = t.items;
		    return e ? e.length ? e : [e] : void 0 === t ? [] : t;
		  },
		  getItemsCount = (exports.getSlides = getSlides, function (t) {
		    return (0, exports.getSlides)(t).length;
		  }),
		  getItemsOffset = (exports.getItemsCount = getItemsCount, function (t) {
		    var e = t.infinite,
		      r = t.paddingRight,
		      t = t.paddingLeft;
		    return e && (t || r) ? 1 : 0;
		  }),
		  createClones = (exports.getItemsOffset = getItemsOffset, function (t) {
		    var e,
		      r,
		      n,
		      o,
		      i = (0, exports.getSlides)(t);
		    return t.infinite ? (e = (0, exports.getItemsCount)(t), o = (0, exports.getItemsOffset)(t), t = (0, common_1.getItemsInSlide)(e, t), n = Math.min(t, e) + o, r = i.slice(0, n), n = i.slice(-n), o && t === e && (o = i[0], t = i.slice(-1)[0], n.unshift(t), r.push(o)), n.concat(i, r)) : i;
		  }),
		  isElement = (exports.createClones = createClones, function (t) {
		    try {
		      return t instanceof Element || t instanceof HTMLDocument;
		    } catch (t) {
		      return !1;
		    }
		  }),
		  createAutowidthTransformationSet = (exports.isElement = isElement, function (t, i, e) {
		    void 0 === i && (i = 0), void 0 === e && (e = !1);
		    var s = 0,
		      a = !0,
		      r = [];
		    return (0, exports.isElement)(t) && (r = Array.from((null == t ? void 0 : t.children) || []).reduce(function (t, e, r) {
		      var n = 0,
		        r = r - 1,
		        o = t[r],
		        e = getElementDimensions(null == e ? void 0 : e.firstChild).width,
		        e = void 0 === e ? 0 : e;
		      return a = (s += e) <= i, o && (n = 0 == r ? o.width : o.width + o.position), t.push({
		        position: n,
		        width: e
		      }), t;
		    }, []), e || (r = a ? (0, mappers_1.mapPartialCoords)(r) : (t = s - i, (0, mappers_1.mapPositionCoords)(r, t)))), {
		      coords: r,
		      content: s,
		      partial: a
		    };
		  }),
		  createDefaultTransformationSet = (exports.createAutowidthTransformationSet = createAutowidthTransformationSet, function (t, o, e, r) {
		    void 0 === r && (r = !1);
		    var i = 0,
		      s = !0,
		      n = [],
		      a = (0, exports.getItemWidth)(o, e);
		    return n = t.reduce(function (t, e, r) {
		      var n = 0,
		        r = t[r - 1];
		      return s = (i += a) <= o, r && (n = a + r.position || 0), t.push({
		        width: a,
		        position: n
		      }), t;
		    }, []), {
		      coords: n = r ? n : s ? (0, mappers_1.mapPartialCoords)(n) : (e = i - o, (0, mappers_1.mapPositionCoords)(n, e)),
		      content: i,
		      partial: s
		    };
		  }),
		  getItemWidth = (exports.createDefaultTransformationSet = createDefaultTransformationSet, function (t, e) {
		    return 0 < e ? t / e : t;
		  });
		function getElementDimensions(t) {
		  return t && t.getBoundingClientRect ? {
		    width: (t = t.getBoundingClientRect()).width,
		    height: t.height
		  } : {
		    width: 0,
		    height: 0
		  };
		}
		exports.getItemWidth = getItemWidth, exports.getElementDimensions = getElementDimensions;
		var getAutoheightProperty = function (t, e, r) {
		    var e = (0, exports.getElementCursor)(e, r),
		      r = (0, exports.getElementFirstChild)(t, e);
		    if ((0, exports.isElement)(r)) return t = window.getComputedStyle(r), e = parseFloat(t.marginTop), t = parseFloat(t.marginBottom), Math.ceil(r.offsetHeight + e + t);
		  },
		  getElementCursor = (exports.getAutoheightProperty = getAutoheightProperty, function (t, e) {
		    var r = e.activeIndex,
		      e = e.itemsInSlide;
		    return t.infinite ? r + e + (0, exports.getItemsOffset)(t) : r;
		  }),
		  getElementFirstChild = (exports.getElementCursor = getElementCursor, function (t, e) {
		    t = t && t.children || [];
		    return t[e] && t[e].firstChild || null;
		  });
		function shouldHandleResizeEvent(t, e, r) {
		  return (e = void 0 === e ? {} : e).width !== (r = void 0 === r ? {} : r).width;
		}
		function animate(t, e) {
		  var e = e || {},
		    r = e.position,
		    r = void 0 === r ? 0 : r,
		    n = e.animationDuration,
		    n = void 0 === n ? 0 : n,
		    e = e.animationEasingFunction,
		    e = void 0 === e ? "ease" : e;
		  return t && (0, exports.isElement)(t) && (t.style.transition = "transform ".concat(n, "ms ").concat(e, " 0ms"), t.style.transform = "translate3d(".concat(r, "px, 0, 0)")), t;
		}
		exports.getElementFirstChild = getElementFirstChild, exports.shouldHandleResizeEvent = shouldHandleResizeEvent, exports.animate = animate;
		var getRenderWrapperStyles = function (t, e, r) {
		    var n = t || {},
		      o = n.paddingLeft,
		      i = n.paddingRight,
		      s = n.autoHeight,
		      n = n.animationDuration,
		      s = s ? (0, exports.getAutoheightProperty)(r, t, e) : void 0;
		    return {
		      height: s,
		      transition: s ? "height ".concat(n, "ms") : void 0,
		      paddingLeft: "".concat(o, "px"),
		      paddingRight: "".concat(i, "px")
		    };
		  },
		  getTransitionProperty = (exports.getRenderWrapperStyles = getRenderWrapperStyles, function (t) {
		    var t = t || {},
		      e = t.animationDuration,
		      t = t.animationEasingFunction,
		      t = void 0 === t ? "ease" : t;
		    return "transform ".concat(void 0 === e ? 0 : e, "ms ").concat(t, " 0ms");
		  }),
		  getRenderStageStyles = (exports.getTransitionProperty = getTransitionProperty, function (t, e) {
		    t = (t || {}).translate3d, t = "translate3d(".concat(-(void 0 === t ? 0 : t), "px, 0, 0)");
		    return __assign(__assign({}, e), {
		      transform: t
		    });
		  }),
		  getRenderStageItemStyles = (exports.getRenderStageStyles = getRenderStageStyles, function (t, e) {
		    var r = e.transformationSet,
		      n = e.fadeoutAnimationIndex,
		      o = e.fadeoutAnimationPosition,
		      i = e.fadeoutAnimationProcessing,
		      e = e.animationDuration,
		      r = (r[t] || {}).width;
		    return i && n === t ? {
		      transform: "translateX(".concat(o, "px)"),
		      animationDuration: "".concat(e, "ms"),
		      width: "".concat(r, "px")
		    } : {
		      width: r
		    };
		  }),
		  getTranslate3dProperty = (exports.getRenderStageItemStyles = getRenderStageItemStyles, function (t, e) {
		    var r = t,
		      n = e.infinite,
		      o = e.itemsOffset,
		      i = e.itemsInSlide,
		      e = e.transformationSet;
		    return ((void 0 === e ? [] : e)[r = n ? t + (0, math_1.getShiftIndex)(void 0 === i ? 0 : i, void 0 === o ? 0 : o) : r] || {}).position || 0;
		  }),
		  getTouchmoveTranslatePosition = (exports.getTranslate3dProperty = getTranslate3dProperty, function (t, e) {
		    return -(e - Math.floor(t));
		  });
		function getTranslateXProperty(t) {
		  t = getTransformMatrix(t), t = t && t[4] || "";
		  return Number(t);
		}
		function getTransformMatrix(t) {
		  return t && (0, exports.isElement)(t) && window.getComputedStyle(t).transform.match(/(-?[0-9.]+)/g) || [];
		}
		exports.getTouchmoveTranslatePosition = getTouchmoveTranslatePosition, exports.getTranslateXProperty = getTranslateXProperty, exports.getTransformMatrix = getTransformMatrix;
} (elements));
	return elements;
}

var hasRequiredCommon;

function requireCommon () {
	if (hasRequiredCommon) return common;
	hasRequiredCommon = 1;
	(function (exports) {

		Object.defineProperty(exports, "__esModule", {
		  value: !0
		}), exports.calculateInitialState = exports.getItemsInSlide = exports.getIsStageContentPartial = exports.concatClassnames = exports.canUseDOM = void 0;
		var elements_1 = requireElements(),
		  math_1 = math,
		  canUseDOM = function () {
		    var t;
		    try {
		      return Boolean(null == (t = null === window || void 0 === window ? void 0 : window.document) ? void 0 : t.createElement);
		    } catch (t) {
		      return !1;
		    }
		  },
		  concatClassnames = (exports.canUseDOM = canUseDOM, function () {
		    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
		    return t.filter(Boolean).join(" ");
		  }),
		  getIsStageContentPartial = (exports.concatClassnames = concatClassnames, function (t, e, n) {
		    return void 0 === e && (e = 0), void 0 === n && (n = 0), !(t = void 0 !== t && t) && n <= e;
		  }),
		  getItemsInSlide = (exports.getIsStageContentPartial = getIsStageContentPartial, function (n, t) {
		    var i,
		      a = 1,
		      o = t.responsive,
		      e = t.autoWidth,
		      s = t.infinite,
		      t = t.innerWidth;
		    return void 0 !== e && e ? void 0 !== s && s ? n : a : (o && (e = Object.keys(o)).length && (t || (0, exports.canUseDOM)()) && (i = void 0 === t ? window.innerWidth : t, e.forEach(function (t) {
		      var e;
		      Number(t) <= i && (e = (t = o[t]).items, t = t.itemsFit, a = "contain" === (void 0 === t ? "fill" : t) ? e : Math.min(e, n));
		    })), a || 1);
		  }),
		  calculateInitialState = (exports.getItemsInSlide = getItemsInSlide, function (t, e, n) {
		    void 0 === n && (n = !1);
		    var i,
		      a,
		      o = t.animationDuration,
		      o = void 0 === o ? 0 : o,
		      s = t.infinite,
		      s = void 0 !== s && s,
		      r = t.autoPlay,
		      r = void 0 !== r && r,
		      l = t.autoWidth,
		      l = void 0 !== l && l,
		      m = (0, elements_1.createClones)(t),
		      d = (0, elements_1.getTransitionProperty)(),
		      c = (0, elements_1.getItemsCount)(t),
		      u = (0, elements_1.getItemsOffset)(t),
		      f = (0, exports.getItemsInSlide)(c, t),
		      g = (0, math_1.getStartIndex)(t.activeIndex, c),
		      g = (0, math_1.getActiveIndex)({
		        startIndex: g,
		        itemsCount: c,
		        infinite: s
		      }),
		      I = (0, elements_1.getElementDimensions)(e).width,
		      S = (a = (e = (l ? (i = (e = (0, elements_1.createAutowidthTransformationSet)(e, I, s)).coords, a = e.content, e) : (i = (e = (0, elements_1.createDefaultTransformationSet)(m, I, f, s)).coords, a = e.content, e)).partial, a), (0, math_1.getItemCoords)(-f, i = i).position),
		      p = (0, math_1.getSwipeLimitMin)({
		        itemsOffset: u,
		        transformationSet: i
		      }, t),
		      t = (0, math_1.getSwipeLimitMax)({
		        itemsCount: c,
		        itemsOffset: u,
		        itemsInSlide: f,
		        transformationSet: i
		      }, t),
		      v = (0, math_1.getSwipeShiftValue)(c, i);
		    return {
		      activeIndex: g,
		      autoWidth: l,
		      animationDuration: o,
		      clones: m,
		      infinite: s,
		      itemsCount: c,
		      itemsInSlide: f,
		      itemsOffset: u,
		      translate3d: (0, elements_1.getTranslate3dProperty)(g, {
		        itemsInSlide: f,
		        itemsOffset: u,
		        transformationSet: i,
		        autoWidth: l,
		        infinite: s
		      }),
		      stageWidth: I,
		      stageContentWidth: a,
		      initialStageHeight: 0,
		      isStageContentPartial: e,
		      isAutoPlaying: Boolean(r),
		      isAutoPlayCanceledOnAction: !1,
		      transformationSet: i,
		      transition: d,
		      fadeoutAnimationIndex: null,
		      fadeoutAnimationPosition: null,
		      fadeoutAnimationProcessing: !1,
		      swipeLimitMin: p,
		      swipeLimitMax: t,
		      swipeAllowedPositionMax: S,
		      swipeShiftValue: v,
		      canUseDom: n || (0, exports.canUseDOM)()
		    };
		  });
		exports.calculateInitialState = calculateInitialState;
} (common));
	return common;
}

var classnames = {};

(function (exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	}), exports.isClonedItem = exports.isTargetItem = exports.isActiveItem = exports.getRenderStageItemClasses = void 0;
	var types_1 = types,
	  common_1 = requireCommon(),
	  math_1 = math,
	  getRenderStageItemClasses = function (e, t) {
	    void 0 === e && (e = 0);
	    var s = t.fadeoutAnimationIndex,
	      i = (0, exports.isActiveItem)(e, t) ? types_1.Modifiers.ACTIVE : "",
	      n = (0, exports.isClonedItem)(e, t) ? types_1.Modifiers.CLONED : "",
	      t = (0, exports.isTargetItem)(e, t) ? types_1.Modifiers.TARGET : "",
	      e = e === s ? types_1.Classnames.ANIMATED : "";
	    return (0, common_1.concatClassnames)(types_1.Classnames.STAGE_ITEM, i, n, t, e);
	  },
	  isActiveItem = (exports.getRenderStageItemClasses = getRenderStageItemClasses, function (e, t) {
	    void 0 === e && (e = 0);
	    var s = t.activeIndex,
	      i = t.itemsInSlide,
	      n = t.itemsOffset,
	      r = t.infinite,
	      t = t.autoWidth,
	      o = (0, math_1.getShiftIndex)(i, n);
	    return t && r ? e - o === s + n : (t = s + o, r ? t <= e && e < t + i : s <= e && e < t);
	  }),
	  isTargetItem = (exports.isActiveItem = isActiveItem, function (e, t) {
	    void 0 === e && (e = 0);
	    var s = t.activeIndex,
	      i = t.itemsInSlide,
	      n = t.itemsOffset,
	      r = t.infinite,
	      t = t.autoWidth,
	      i = (0, math_1.getShiftIndex)(i, n);
	    return r ? t && r ? e - i === s + n : e === s + i : e === s;
	  }),
	  isClonedItem = (exports.isTargetItem = isTargetItem, function (e, t) {
	    void 0 === e && (e = 0);
	    var s = t.itemsInSlide,
	      i = t.itemsOffset,
	      n = t.itemsCount,
	      r = t.infinite,
	      t = t.autoWidth;
	    return !!r && (t && r ? e < s || n - 1 + s < e : e < (t = (0, math_1.getShiftIndex)(s, i)) || n - 1 + t < e);
	  });
	exports.isClonedItem = isClonedItem;
} (classnames));

var timers = {};

(function (exports) {

	function debounce(n, i) {
	  void 0 === i && (i = 0);
	  function u() {
	    d && (clearTimeout(d), d = void 0);
	  }
	  var d = void 0;
	  return [function () {
	    for (var e = this, o = [], t = 0; t < arguments.length; t++) o[t] = arguments[t];
	    u(), d = window.setTimeout(function () {
	      n.apply(e, o), d = void 0;
	    }, i);
	  }, u];
	}
	Object.defineProperty(exports, "__esModule", {
	  value: !0
	}), exports.debounce = void 0, exports.debounce = debounce;
} (timers));

var debug = {};

(function (exports) {

	function debug() {
	  for (var e = [], o = 0; o < arguments.length; o++) e[o] = arguments[o];
	  console.debug.apply(console, e);
	}
	Object.defineProperty(exports, "__esModule", {
	  value: !0
	}), exports.debug = void 0, exports.debug = debug;
} (debug));

var render = {};

(function (exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	}), exports.getSlideItemInfo = exports.getSlideInfo = exports.getSlideIndexForMultipleItems = exports.getSlideIndexForNonMultipleItems = exports.getActiveSlideDotsLength = exports.getActiveSlideIndex = void 0;
	var getActiveSlideIndex = function (e, t) {
	    var t = t || {},
	      i = t.activeIndex,
	      o = t.itemsInSlide,
	      t = t.itemsCount,
	      i = i + o;
	    return 1 === o ? (0, exports.getSlideIndexForNonMultipleItems)(i, o, t) : (0, exports.getSlideIndexForMultipleItems)(i, o, t, e);
	  },
	  getActiveSlideDotsLength = (exports.getActiveSlideIndex = getActiveSlideIndex, function (e, t) {
	    var i;
	    return void 0 === t && (t = 1), (e = void 0 === e ? 0 : e) && t ? (i = Math.floor(e / t), e % t == 0 ? i - 1 : i) : 0;
	  }),
	  getSlideIndexForNonMultipleItems = (exports.getActiveSlideDotsLength = getActiveSlideDotsLength, function (e, t, i) {
	    return e < t ? i - t : i < e ? 0 : e - 1;
	  }),
	  getSlideIndexForMultipleItems = (exports.getSlideIndexForNonMultipleItems = getSlideIndexForNonMultipleItems, function (e, t, i, o) {
	    var l = (0, exports.getActiveSlideDotsLength)(i, t);
	    return e === i + t ? 0 : o || e < t && 0 !== e ? l : 0 === e ? i % t == 0 ? l : l - 1 : 0 < t ? Math.floor(e / t) - 1 : 0;
	  }),
	  getSlideInfo = (exports.getSlideIndexForMultipleItems = getSlideIndexForMultipleItems, function (e, t) {
	    void 0 === t && (t = 0);
	    e = (e = void 0 === e ? 0 : e) + 1;
	    return e < 1 ? e = t : t < e && (e = 1), {
	      item: e,
	      itemsCount: t
	    };
	  }),
	  getSlideItemInfo = (exports.getSlideInfo = getSlideInfo, function (e) {
	    var e = e || {},
	      t = e.itemsInSlide,
	      i = e.activeIndex,
	      o = e.infinite,
	      l = e.itemsCount;
	    return e.isStageContentPartial ? {
	      isPrevSlideDisabled: !0,
	      isNextSlideDisabled: !0
	    } : {
	      isPrevSlideDisabled: !1 === o && 0 === i,
	      isNextSlideDisabled: !1 === o && l - t <= i
	    };
	  });
	exports.getSlideItemInfo = getSlideItemInfo;
} (render));

var controls = {};

(function (exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	}), exports.shouldCancelAutoPlayOnHover = exports.shouldCancelAutoPlayOnAction = exports.getItemIndexForDotNavigation = exports.checkIsTheLastDotIndex = exports.getDotsNavigationLength = exports.hasDotForEachSlide = exports.isStrategy = exports.shouldDisableButtons = exports.shouldDisableDots = exports.shouldDisableControls = void 0;
	var types_1 = types;
	function shouldDisableControls(t, o) {
	  var t = (t || {}).controlsStrategy,
	    o = o || {},
	    e = o.itemsInSlide,
	    s = o.itemsCount,
	    o = o.autoWidth;
	  if ((0, exports.isStrategy)(t, types_1.ControlsStrategy.RESPONSIVE)) return !o && e === s;
	}
	function shouldDisableDots(t, o) {
	  return t.disableDotsControls || shouldDisableControls(t, o);
	}
	function shouldDisableButtons(t, o) {
	  return t.disableButtonsControls || !t.infinite && shouldDisableControls(t, o);
	}
	exports.shouldDisableControls = shouldDisableControls, exports.shouldDisableDots = shouldDisableDots, exports.shouldDisableButtons = shouldDisableButtons;
	var isStrategy = function (t, o) {
	    return void 0 === t && (t = ""), void 0 === o && (o = ""), Boolean(t && t.includes(o));
	  },
	  hasDotForEachSlide = (exports.isStrategy = isStrategy, function (t, o) {
	    return t || (0, exports.isStrategy)(o, types_1.ControlsStrategy.ALTERNATE);
	  }),
	  getDotsNavigationLength = (exports.hasDotForEachSlide = hasDotForEachSlide, function (t, o, e) {
	    return void 0 === t && (t = 0), void 0 === o && (o = 1), (e = void 0 !== e && e) ? t : 0 !== Number(o) && Math.ceil(t / o) || 0;
	  }),
	  checkIsTheLastDotIndex = (exports.getDotsNavigationLength = getDotsNavigationLength, function (t, o, e) {
	    return !o && t === e - 1;
	  }),
	  getItemIndexForDotNavigation = (exports.checkIsTheLastDotIndex = checkIsTheLastDotIndex, function (t, o, e, s) {
	    return (o ? e - s : t * s) || 0;
	  }),
	  shouldCancelAutoPlayOnAction = (exports.getItemIndexForDotNavigation = getItemIndexForDotNavigation, function (t) {
	    return (t = void 0 === t ? "" : t) === types_1.AutoPlayStrategy.ACTION || t === types_1.AutoPlayStrategy.ALL;
	  }),
	  shouldCancelAutoPlayOnHover = (exports.shouldCancelAutoPlayOnAction = shouldCancelAutoPlayOnAction, function (t) {
	    return (t = void 0 === t ? "" : t) === types_1.AutoPlayStrategy.DEFAULT || t === types_1.AutoPlayStrategy.ALL;
	  });
	exports.shouldCancelAutoPlayOnHover = shouldCancelAutoPlayOnHover;
} (controls));

(function (exports) {

	var __createBinding = Object.create ? function (e, r, t, o) {
	    void 0 === o && (o = t);
	    var p = Object.getOwnPropertyDescriptor(r, t);
	    p && ("get" in p ? r.__esModule : !p.writable && !p.configurable) || (p = {
	      enumerable: !0,
	      get: function () {
	        return r[t];
	      }
	    }), Object.defineProperty(e, o, p);
	  } : function (e, r, t, o) {
	    e[o = void 0 === o ? t : o] = r[t];
	  },
	  __exportStar = function (e, r) {
	    for (var t in e) "default" === t || Object.prototype.hasOwnProperty.call(r, t) || __createBinding(r, e, t);
	  };
	Object.defineProperty(exports, "__esModule", {
	  value: !0
	}), __exportStar(requireCommon(), exports), __exportStar(requireElements(), exports), __exportStar(classnames, exports), __exportStar(timers, exports), __exportStar(math, exports), __exportStar(debug, exports), __exportStar(render, exports), __exportStar(controls, exports), __exportStar(mappers, exports);
} (utils));

(function (exports) {

	var __importDefault = function (e) {
	    return e && e.__esModule ? e : {
	      default: e
	    };
	  },
	  react_1 = (Object.defineProperty(exports, "__esModule", {
	    value: !0
	  }), exports.SlideInfo = void 0, __importDefault(require("react"))),
	  types_1 = types,
	  utils_1 = utils,
	  SlideInfo = function (e) {
	    var t = e.activeIndex,
	      s = e.itemsCount,
	      e = e.renderSlideInfo,
	      t = (0, utils_1.getSlideInfo)(t, s).item;
	    return "function" == typeof e ? react_1.default.createElement("div", {
	      className: types_1.Classnames.SLIDE_INFO
	    }, e({
	      item: t,
	      itemsCount: s
	    })) : (e = (0, utils_1.concatClassnames)(types_1.Classnames.SLIDE_INFO_ITEM, types_1.Modifiers.SEPARATOR), react_1.default.createElement("div", {
	      className: types_1.Classnames.SLIDE_INFO
	    }, react_1.default.createElement("span", {
	      className: types_1.Classnames.SLIDE_INFO_ITEM
	    }, t), react_1.default.createElement("span", {
	      className: e
	    }, "/"), react_1.default.createElement("span", {
	      className: types_1.Classnames.SLIDE_INFO_ITEM
	    }, s)));
	  };
	exports.SlideInfo = SlideInfo;
} (SlideInfo));

var StageItem = {};

(function (exports) {

	var __importDefault = function (e) {
	    return e && e.__esModule ? e : {
	      default: e
	    };
	  },
	  react_1 = (Object.defineProperty(exports, "__esModule", {
	    value: !0
	  }), exports.StageItem = void 0, __importDefault(require("react"))),
	  StageItem = function (e) {
	    var t = e.item,
	      r = e.className,
	      e = e.styles;
	    return react_1.default.createElement("li", {
	      style: e,
	      className: r
	    }, t);
	  };
	exports.StageItem = StageItem;
} (StageItem));

var DotsNavigation = {};

(function (exports) {

	var __importDefault = function (e) {
	    return e && e.__esModule ? e : {
	      default: e
	    };
	  },
	  react_1 = (Object.defineProperty(exports, "__esModule", {
	    value: !0
	  }), exports.DotsNavigation = void 0, __importDefault(require("react"))),
	  types_1 = types,
	  utils_1 = utils,
	  DotsNavigation = function (e) {
	    var a = e.state,
	      n = e.onClick,
	      r = e.onMouseEnter,
	      l = e.onMouseLeave,
	      t = e.controlsStrategy,
	      u = e.renderDotsItem,
	      c = a.itemsCount,
	      _ = a.itemsInSlide,
	      d = a.infinite,
	      e = a.autoWidth,
	      m = a.activeIndex,
	      v = (0, utils_1.getSlideItemInfo)(a).isNextSlideDisabled,
	      f = (0, utils_1.hasDotForEachSlide)(e, t),
	      D = (0, utils_1.getDotsNavigationLength)(c, _, f);
	    return react_1.default.createElement("ul", {
	      className: types_1.Classnames.DOTS
	    }, Array.from({
	      length: c
	    }).map(function (e, t) {
	      var i, s, o;
	      if (t < D) return s = (0, utils_1.checkIsTheLastDotIndex)(t, Boolean(d), D), i = (0, utils_1.getItemIndexForDotNavigation)(t, s, c, _), s = (0, utils_1.getActiveSlideIndex)(v, a), f && ((s = m) < 0 ? s = c - 1 : c <= m && (s = 0), i = t), s = s === t ? types_1.Modifiers.ACTIVE : "", o = u ? types_1.Modifiers.CUSTOM : "", o = (0, utils_1.concatClassnames)(types_1.Classnames.DOTS_ITEM, s, o), react_1.default.createElement("li", {
	        key: "dot-item-".concat(t),
	        onMouseEnter: r,
	        onMouseLeave: l,
	        onClick: function () {
	          return n(i);
	        },
	        className: o
	      }, u && u({
	        isActive: Boolean(s),
	        activeIndex: t
	      }));
	    }));
	  };
	exports.DotsNavigation = DotsNavigation;
} (DotsNavigation));

var PlayPauseButton = {};

(function (exports) {

	var __importDefault = function (e) {
	    return e && e.__esModule ? e : {
	      default: e
	    };
	  },
	  react_1 = (Object.defineProperty(exports, "__esModule", {
	    value: !0
	  }), exports.PlayPauseButton = void 0, __importDefault(require("react"))),
	  types_1 = types,
	  utils_1 = utils,
	  PlayPauseButton = function (e) {
	    var t = e.isPlaying,
	      a = e.onClick,
	      e = e.renderPlayPauseButton;
	    return "function" == typeof e ? react_1.default.createElement("div", {
	      className: types_1.Classnames.PLAY_BTN,
	      onClick: a
	    }, e({
	      isPlaying: t
	    })) : (e = t ? types_1.Modifiers.PAUSE : "", t = (0, utils_1.concatClassnames)(types_1.Classnames.PLAY_BTN_ITEM, e), react_1.default.createElement("div", {
	      className: types_1.Classnames.PLAY_BTN
	    }, react_1.default.createElement("div", {
	      className: types_1.Classnames.PLAY_BTN_WRAPPER
	    }, react_1.default.createElement("div", {
	      onClick: a,
	      className: t
	    }))));
	  };
	exports.PlayPauseButton = PlayPauseButton;
} (PlayPauseButton));

var PrevNextButton = {};

(function (exports) {

	var __importDefault = function (e) {
	    return e && e.__esModule ? e : {
	      default: e
	    };
	  },
	  react_1 = (Object.defineProperty(exports, "__esModule", {
	    value: !0
	  }), exports.PrevNextButton = void 0, __importDefault(require("react"))),
	  types_1 = types,
	  utils_1 = utils,
	  PrevNextButton = function (e) {
	    var t,
	      s = e.name,
	      a = e.isDisabled,
	      r = e.onClick,
	      n = e.renderPrevButton,
	      e = e.renderNextButton;
	    return "function" == typeof n ? react_1.default.createElement("div", {
	      className: types_1.Classnames.BUTTON_PREV,
	      onClick: r
	    }, n({
	      isDisabled: a
	    })) : "function" == typeof e ? react_1.default.createElement("div", {
	      className: types_1.Classnames.BUTTON_NEXT,
	      onClick: r
	    }, e({
	      isDisabled: a
	    })) : (e = (n = "prev" === s) ? "<" : ">", s = n ? types_1.Classnames.BUTTON_PREV : types_1.Classnames.BUTTON_NEXT, t = n ? types_1.Classnames.BUTTON_PREV_WRAPPER : types_1.Classnames.BUTTON_NEXT_WRAPPER, n = n ? types_1.Classnames.BUTTON_PREV_ITEM : types_1.Classnames.BUTTON_NEXT_ITEM, a = a ? types_1.Modifiers.INACTIVE : "", n = (0, utils_1.concatClassnames)(n, a), react_1.default.createElement("div", {
	      className: s
	    }, react_1.default.createElement("div", {
	      className: t
	    }, react_1.default.createElement("p", {
	      className: n,
	      onClick: function (e) {
	        return r(e);
	      }
	    }, react_1.default.createElement("span", {
	      "data-area": e
	    })))));
	  };
	exports.PrevNextButton = PrevNextButton;
} (PrevNextButton));

(function (exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	}), exports.PrevNextButton = exports.PlayPauseButton = exports.DotsNavigation = exports.StageItem = exports.SlideInfo = void 0;
	var SlideInfo_1 = SlideInfo,
	  StageItem_1 = (Object.defineProperty(exports, "SlideInfo", {
	    enumerable: !0,
	    get: function () {
	      return SlideInfo_1.SlideInfo;
	    }
	  }), StageItem),
	  DotsNavigation_1 = (Object.defineProperty(exports, "StageItem", {
	    enumerable: !0,
	    get: function () {
	      return StageItem_1.StageItem;
	    }
	  }), DotsNavigation),
	  PlayPauseButton_1 = (Object.defineProperty(exports, "DotsNavigation", {
	    enumerable: !0,
	    get: function () {
	      return DotsNavigation_1.DotsNavigation;
	    }
	  }), PlayPauseButton),
	  PrevNextButton_1 = (Object.defineProperty(exports, "PlayPauseButton", {
	    enumerable: !0,
	    get: function () {
	      return PlayPauseButton_1.PlayPauseButton;
	    }
	  }), PrevNextButton);
	Object.defineProperty(exports, "PrevNextButton", {
	  enumerable: !0,
	  get: function () {
	    return PrevNextButton_1.PrevNextButton;
	  }
	});
} (views));

(function (exports) {

	var __extends = function () {
	    var n = function (t, e) {
	      return (n = Object.setPrototypeOf || ({
	        __proto__: []
	      } instanceof Array ? function (t, e) {
	        t.__proto__ = e;
	      } : function (t, e) {
	        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
	      }))(t, e);
	    };
	    return function (t, e) {
	      if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
	      function i() {
	        this.constructor = t;
	      }
	      n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
	    };
	  }(),
	  __assign = function () {
	    return (__assign = Object.assign || function (t) {
	      for (var e, i = 1, n = arguments.length; i < n; i++) for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
	      return t;
	    }).apply(this, arguments);
	  },
	  __createBinding = Object.create ? function (t, e, i, n) {
	    void 0 === n && (n = i);
	    var o = Object.getOwnPropertyDescriptor(e, i);
	    o && ("get" in o ? e.__esModule : !o.writable && !o.configurable) || (o = {
	      enumerable: !0,
	      get: function () {
	        return e[i];
	      }
	    }), Object.defineProperty(t, n, o);
	  } : function (t, e, i, n) {
	    t[n = void 0 === n ? i : n] = e[i];
	  },
	  __setModuleDefault = Object.create ? function (t, e) {
	    Object.defineProperty(t, "default", {
	      enumerable: !0,
	      value: e
	    });
	  } : function (t, e) {
	    t.default = e;
	  },
	  __importStar = function (t) {
	    if (t && t.__esModule) return t;
	    var e = {};
	    if (null != t) for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && __createBinding(e, t, i);
	    return __setModuleDefault(e, t), e;
	  },
	  __exportStar = function (t, e) {
	    for (var i in t) "default" === i || Object.prototype.hasOwnProperty.call(e, i) || __createBinding(e, t, i);
	  },
	  __awaiter = function (t, a, r, l) {
	    return new (r = r || Promise)(function (i, e) {
	      function n(t) {
	        try {
	          s(l.next(t));
	        } catch (t) {
	          e(t);
	        }
	      }
	      function o(t) {
	        try {
	          s(l.throw(t));
	        } catch (t) {
	          e(t);
	        }
	      }
	      function s(t) {
	        var e;
	        t.done ? i(t.value) : ((e = t.value) instanceof r ? e : new r(function (t) {
	          t(e);
	        })).then(n, o);
	      }
	      s((l = l.apply(t, a || [])).next());
	    });
	  },
	  __generator = function (n, o) {
	    var s,
	      a,
	      r,
	      l = {
	        label: 0,
	        sent: function () {
	          if (1 & r[0]) throw r[1];
	          return r[1];
	        },
	        trys: [],
	        ops: []
	      },
	      t = {
	        next: e(0),
	        throw: e(1),
	        return: e(2)
	      };
	    return "function" == typeof Symbol && (t[Symbol.iterator] = function () {
	      return this;
	    }), t;
	    function e(i) {
	      return function (t) {
	        var e = [i, t];
	        if (s) throw new TypeError("Generator is already executing.");
	        for (; l;) try {
	          if (s = 1, a && (r = 2 & e[0] ? a.return : e[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, e[1])).done) return r;
	          switch (a = 0, (e = r ? [2 & e[0], r.value] : e)[0]) {
	            case 0:
	            case 1:
	              r = e;
	              break;
	            case 4:
	              return l.label++, {
	                value: e[1],
	                done: !1
	              };
	            case 5:
	              l.label++, a = e[1], e = [0];
	              continue;
	            case 7:
	              e = l.ops.pop(), l.trys.pop();
	              continue;
	            default:
	              if (!(r = 0 < (r = l.trys).length && r[r.length - 1]) && (6 === e[0] || 2 === e[0])) {
	                l = 0;
	                continue;
	              }
	              if (3 === e[0] && (!r || e[1] > r[0] && e[1] < r[3])) l.label = e[1];else if (6 === e[0] && l.label < r[1]) l.label = r[1], r = e;else {
	                if (!(r && l.label < r[2])) {
	                  r[2] && l.ops.pop(), l.trys.pop();
	                  continue;
	                }
	                l.label = r[2], l.ops.push(e);
	              }
	          }
	          e = o.call(n, l);
	        } catch (t) {
	          e = [6, t], a = 0;
	        } finally {
	          s = r = 0;
	        }
	        if (5 & e[0]) throw e[1];
	        return {
	          value: e[0] ? e[1] : void 0,
	          done: !0
	        };
	      };
	    }
	  },
	  __importDefault = function (t) {
	    return t && t.__esModule ? t : {
	      default: t
	    };
	  },
	  react_1 = (Object.defineProperty(exports, "__esModule", {
	    value: !0
	  }), __importDefault(require("react"))),
	  vanilla_swipe_1 = __importDefault(lib),
	  defaultProps_1 = defaultProps,
	  Views = __importStar(views),
	  Utils = __importStar(utils),
	  types_1 = types,
	  AliceCarousel = (__exportStar(types, exports), function (e) {
	    function t(t) {
	      var s = e.call(this, t) || this;
	      return s.swipeListener = null, s._handleKeyboardEvents = function (t) {
	        switch (t.code) {
	          case "Space":
	            return s.props.autoPlay && s._handlePlayPauseToggle();
	          case "ArrowLeft":
	            return s.slidePrev(t);
	          case "ArrowRight":
	            return s.slideNext(t);
	        }
	      }, s._handleBeforeSlideEnd = function (o) {
	        return __awaiter(s, void 0, void 0, function () {
	          var e, i, n;
	          return __generator(this, function (t) {
	            switch (t.label) {
	              case 0:
	                return (i = this.state, n = i.activeIndex, e = i.itemsCount, i = i.fadeoutAnimationProcessing, Utils.shouldRecalculateSlideIndex(n, e)) ? (n = Utils.getUpdateSlidePositionIndex(n, e), [4, this._handleUpdateSlidePosition(n)]) : [3, 2];
	              case 1:
	                return t.sent(), [3, 4];
	              case 2:
	                return i ? [4, this.setState({
	                  fadeoutAnimationIndex: null,
	                  fadeoutAnimationPosition: null,
	                  fadeoutAnimationProcessing: !1
	                })] : [3, 4];
	              case 3:
	                t.sent(), t.label = 4;
	              case 4:
	                return this._handleSlideChanged(o), [2];
	            }
	          });
	        });
	      }, s._handleMouseEnter = function () {
	        var t = s.props.autoPlayStrategy;
	        Utils.shouldCancelAutoPlayOnHover(t) && s.state.isAutoPlaying && (s.isHovered = !0, s._handlePause());
	      }, s._handleMouseLeave = function () {
	        s.state.isAutoPlaying && (s.isHovered = !1, s._handlePlay());
	      }, s._handlePause = function () {
	        s._clearAutoPlayTimeout();
	      }, s._handlePlayPauseToggle = function () {
	        return __awaiter(s, void 0, void 0, function () {
	          var e;
	          return __generator(this, function (t) {
	            switch (t.label) {
	              case 0:
	                return e = this.state.isAutoPlaying, this.hasUserAction = !0, [4, this.setState({
	                  isAutoPlaying: !e,
	                  isAutoPlayCanceledOnAction: !0
	                })];
	              case 1:
	                return t.sent(), e ? this._handlePause() : this._handlePlay(), [2];
	            }
	          });
	        });
	      }, s._setRootComponentRef = function (t) {
	        return s.rootElement = t;
	      }, s._setStageComponentRef = function (t) {
	        return s.stageComponent = t;
	      }, s._renderStageItem = function (t, e) {
	        var i = Utils.getRenderStageItemStyles(e, s.state),
	          n = Utils.getRenderStageItemClasses(e, s.state);
	        return react_1.default.createElement(Views.StageItem, {
	          styles: i,
	          className: n,
	          key: "stage-item-".concat(e),
	          item: t
	        });
	      }, s._renderSlideInfo = function () {
	        var t = s.props.renderSlideInfo,
	          e = s.state,
	          i = e.activeIndex,
	          e = e.itemsCount;
	        return react_1.default.createElement(Views.SlideInfo, {
	          itemsCount: e,
	          activeIndex: i,
	          renderSlideInfo: t
	        });
	      }, s.state = Utils.calculateInitialState(t, null), s.isHovered = !1, s.isAnimationDisabled = !1, s.isTouchMoveProcessStarted = !1, s.cancelTouchAnimations = !1, s.hasUserAction = !1, s.rootElement = null, s.rootComponentDimensions = {}, s.stageComponent = null, s.startTouchmovePosition = void 0, s.slideTo = s.slideTo.bind(s), s.slidePrev = s.slidePrev.bind(s), s.slideNext = s.slideNext.bind(s), s._handleTouchmove = s._handleTouchmove.bind(s), s._handleTouchend = s._handleTouchend.bind(s), s._handleDotClick = s._handleDotClick.bind(s), s._handleResize = s._handleResize.bind(s), t = Utils.debounce(s._handleResize, 100), s._handleResizeDebounced = t[0], s._cancelResizeDebounced = t[1], s;
	    }
	    return __extends(t, e), t.prototype.componentDidMount = function () {
	      return __awaiter(this, void 0, void 0, function () {
	        return __generator(this, function (t) {
	          switch (t.label) {
	            case 0:
	              return [4, this._setInitialState()];
	            case 1:
	              return t.sent(), this._addEventListeners(), this._setupSwipeHandlers(), this.props.autoPlay && this._handlePlay(), [2];
	          }
	        });
	      });
	    }, t.prototype.componentDidUpdate = function (t, e) {
	      var i = this.props,
	        n = i.activeIndex,
	        o = i.animationDuration,
	        s = i.autoWidth,
	        a = i.children,
	        r = i.infinite,
	        l = i.items,
	        u = i.paddingLeft,
	        d = i.paddingRight,
	        c = i.responsive,
	        h = i.swipeExtraPadding,
	        p = i.mouseTracking,
	        _ = i.swipeDelta,
	        m = i.touchTracking,
	        i = i.touchMoveDefaultEvents;
	      a && t.children !== a ? (a = e.activeIndex, e = __assign(__assign({}, this.props), {
	        activeIndex: a
	      }), this._updateComponent(e)) : t.autoWidth !== s || t.infinite !== r || t.items !== l || t.paddingLeft !== u || t.paddingRight !== d || t.responsive !== c || t.swipeExtraPadding !== h ? this._updateComponent() : (t.animationDuration !== o && this.setState({
	        animationDuration: o
	      }), t.activeIndex !== n && this.slideTo(n, types_1.EventType.UPDATE)), t.swipeDelta === _ && t.mouseTracking === p && t.touchTracking === m && t.touchMoveDefaultEvents === i || this._updateSwipeProps(), this.props.keyboardNavigation !== t.keyboardNavigation && this._updateEventListeners();
	    }, t.prototype.componentWillUnmount = function () {
	      this._cancelResizeDebounced(), this._cancelTimeoutAnimations(), this._removeEventListeners();
	    }, Object.defineProperty(t.prototype, "eventObject", {
	      get: function () {
	        var t = this.state,
	          e = t.itemsInSlide,
	          t = t.activeIndex,
	          i = Utils.getSlideItemInfo(this.state),
	          n = i.isNextSlideDisabled,
	          i = i.isPrevSlideDisabled;
	        return {
	          item: t,
	          slide: Utils.getActiveSlideIndex(n, this.state),
	          itemsInSlide: e,
	          isNextSlideDisabled: n,
	          isPrevSlideDisabled: i,
	          type: types_1.EventType.ACTION
	        };
	      },
	      enumerable: !1,
	      configurable: !0
	    }), Object.defineProperty(t.prototype, "isFadeoutAnimationAllowed", {
	      get: function () {
	        var t = this.state.itemsInSlide,
	          e = this.props,
	          i = e.animationType,
	          n = e.paddingLeft,
	          o = e.paddingRight,
	          e = e.autoWidth;
	        return 1 === t && i === types_1.AnimationType.FADEOUT && !(n || o || e);
	      },
	      enumerable: !1,
	      configurable: !0
	    }), Object.defineProperty(t.prototype, "touchmovePosition", {
	      get: function () {
	        return void 0 !== this.startTouchmovePosition ? this.startTouchmovePosition : this.state.translate3d;
	      },
	      enumerable: !1,
	      configurable: !0
	    }), t.prototype.slideTo = function (t, e) {
	      var i, n, o;
	      void 0 === t && (t = 0), this._handlePause(), this.isFadeoutAnimationAllowed ? (i = Utils.getUpdateSlidePositionIndex(t, this.state.itemsCount), n = Utils.getFadeoutAnimationPosition(i, this.state), o = Utils.getFadeoutAnimationIndex(this.state), this._handleSlideTo({
	        activeIndex: i,
	        fadeoutAnimationIndex: o,
	        fadeoutAnimationPosition: n,
	        eventType: e
	      })) : this._handleSlideTo({
	        activeIndex: t,
	        eventType: e
	      });
	    }, t.prototype.slidePrev = function (t) {
	      this._handlePause(), t && t.isTrusted && (this.hasUserAction = !0);
	      var e,
	        i,
	        t = this.state.activeIndex - 1;
	      this.isFadeoutAnimationAllowed ? (e = -this.state.stageWidth, i = Utils.getFadeoutAnimationIndex(this.state), this._handleSlideTo({
	        activeIndex: t,
	        fadeoutAnimationIndex: i,
	        fadeoutAnimationPosition: e
	      })) : this._handleSlideTo({
	        activeIndex: t
	      });
	    }, t.prototype.slideNext = function (t) {
	      this._handlePause(), t && t.isTrusted && (this.hasUserAction = !0);
	      var e,
	        i,
	        t = this.state.activeIndex + 1;
	      this.isFadeoutAnimationAllowed ? (e = this.state.stageWidth, i = Utils.getFadeoutAnimationIndex(this.state), this._handleSlideTo({
	        activeIndex: t,
	        fadeoutAnimationIndex: i,
	        fadeoutAnimationPosition: e
	      })) : this._handleSlideTo({
	        activeIndex: t
	      });
	    }, t.prototype._addEventListeners = function () {
	      window.addEventListener("resize", this._handleResizeDebounced), this.props.keyboardNavigation && window.addEventListener("keyup", this._handleKeyboardEvents);
	    }, t.prototype._removeEventListeners = function () {
	      this.swipeListener && this.swipeListener.destroy(), window.removeEventListener("resize", this._handleResizeDebounced), window.removeEventListener("keyup", this._handleKeyboardEvents);
	    }, t.prototype._updateEventListeners = function () {
	      this.props.keyboardNavigation ? window.addEventListener("keyup", this._handleKeyboardEvents) : window.removeEventListener("keyup", this._handleKeyboardEvents);
	    }, t.prototype._handleResize = function (o) {
	      return __awaiter(this, void 0, void 0, function () {
	        var e, i, n;
	        return __generator(this, function (t) {
	          switch (t.label) {
	            case 0:
	              return (i = this.props.onResizeEvent, n = Utils.getElementDimensions(this.rootElement), (i || Utils.shouldHandleResizeEvent)(o, this.rootComponentDimensions, n)) ? (this._cancelTimeoutAnimations(), this.rootComponentDimensions = n, i = this.state, n = i.itemsCount, e = i.isAutoPlaying, i = Utils.getUpdateSlidePositionIndex(this.state.activeIndex, n), n = Utils.calculateInitialState(__assign(__assign({}, this.props), {
	                activeIndex: i
	              }), this.stageComponent), i = Utils.getTranslate3dProperty(n.activeIndex, n), n = __assign(__assign({}, n), {
	                translate3d: i,
	                isAutoPlaying: e
	              }), Utils.animate(this.stageComponent, {
	                position: -i
	              }), [4, this.setState(n)]) : [3, 2];
	            case 1:
	              t.sent(), this._handleResized(), this.isAnimationDisabled = !1, e && this._handlePlay(), t.label = 2;
	            case 2:
	              return [2];
	          }
	        });
	      });
	    }, t.prototype._handleTouchmove = function (t, e) {
	      var i = e.absY,
	        n = e.absX,
	        o = e.deltaX,
	        e = this.props.swipeDelta,
	        s = this.state,
	        a = s.swipeShiftValue,
	        r = s.swipeLimitMin,
	        l = s.swipeLimitMax,
	        u = s.infinite,
	        s = s.fadeoutAnimationProcessing;
	      if (this.hasUserAction = !0, !(s || !this.isTouchMoveProcessStarted && Utils.isVerticalTouchmoveDetected(n, i, e))) {
	        this.isTouchMoveProcessStarted || (this._cancelTimeoutAnimations(), this._setTouchmovePosition(), this.isAnimationDisabled = !0, this.isTouchMoveProcessStarted = !0, this._handleSlideChange());
	        var d = Utils.getTouchmoveTranslatePosition(o, this.touchmovePosition);
	        if (!1 === u) return r < d || d < -l ? void 0 : void Utils.animate(this.stageComponent, {
	          position: d
	        });
	        if (Utils.shouldRecalculateSwipePosition(d, r, l)) try {
	          !function t() {
	            Utils.getIsLeftDirection(o) ? d += a : d += -a;
	            Utils.shouldRecalculateSwipePosition(d, r, l) && t();
	          }();
	        } catch (t) {
	          Utils.debug(t);
	        }
	        Utils.animate(this.stageComponent, {
	          position: d
	        });
	      }
	    }, t.prototype._handleTouchend = function (t, e) {
	      var i,
	        n,
	        o,
	        e = e.deltaX;
	      this._clearTouchmovePosition(), this.isTouchMoveProcessStarted && (this.isTouchMoveProcessStarted = !1, i = this.state.animationDuration, n = this.props.animationEasingFunction, o = Utils.getTranslateXProperty(this.stageComponent), e = Utils.getSwipeTouchendPosition(this.state, e, o), Utils.animate(this.stageComponent, {
	        position: e,
	        animationDuration: i,
	        animationEasingFunction: n
	      }), this._handleBeforeTouchEnd(e));
	    }, t.prototype._handleBeforeTouchEnd = function (s) {
	      var t = this,
	        e = this.state.animationDuration;
	      this.touchEndTimeoutId = window.setTimeout(function () {
	        return __awaiter(t, void 0, void 0, function () {
	          var e,
	            i,
	            n,
	            o = this;
	          return __generator(this, function (t) {
	            switch (t.label) {
	              case 0:
	                return e = Utils.getSwipeTouchendIndex(s, this.state), i = Utils.getTranslate3dProperty(e, this.state), Utils.animate(this.stageComponent, {
	                  position: -i
	                }), n = Utils.getTransitionProperty(), [4, this.setState({
	                  activeIndex: e,
	                  translate3d: i,
	                  transition: n
	                })];
	              case 1:
	                return t.sent(), requestAnimationFrame(function () {
	                  return o._handleSlideChanged();
	                }), [2];
	            }
	          });
	        });
	      }, e);
	    }, t.prototype._handleSlideTo = function (t) {
	      var e = t.activeIndex,
	        a = void 0 === e ? 0 : e,
	        e = t.fadeoutAnimationIndex,
	        r = void 0 === e ? null : e,
	        e = t.fadeoutAnimationPosition,
	        l = void 0 === e ? null : e,
	        u = t.eventType;
	      return __awaiter(this, void 0, void 0, function () {
	        var e,
	          i,
	          n,
	          o,
	          s = this;
	        return __generator(this, function (t) {
	          switch (t.label) {
	            case 0:
	              return (i = this.props, n = i.infinite, i = i.animationEasingFunction, e = this.state, o = e.itemsCount, e = e.animationDuration, this.isAnimationDisabled || this.state.activeIndex === a || !n && Utils.shouldCancelSlideAnimation(a, o)) ? [2] : (this.isAnimationDisabled = !0, this._cancelTimeoutAnimations(), this._handleSlideChange(u), n = !1, o = Utils.getTranslate3dProperty(a, this.state), i = null !== r && null !== l ? (n = !0, Utils.getTransitionProperty()) : Utils.getTransitionProperty({
	                animationDuration: e,
	                animationEasingFunction: i
	              }), [4, this.setState({
	                activeIndex: a,
	                transition: i,
	                translate3d: o,
	                animationDuration: e,
	                fadeoutAnimationIndex: r,
	                fadeoutAnimationPosition: l,
	                fadeoutAnimationProcessing: n
	              })]);
	            case 1:
	              return t.sent(), this.slideEndTimeoutId = window.setTimeout(function () {
	                return s._handleBeforeSlideEnd(u);
	              }, e), [2];
	          }
	        });
	      });
	    }, t.prototype._handleUpdateSlidePosition = function (o) {
	      return __awaiter(this, void 0, void 0, function () {
	        var e, i, n;
	        return __generator(this, function (t) {
	          switch (t.label) {
	            case 0:
	              return e = this.state.animationDuration, i = Utils.getTranslate3dProperty(o, this.state), n = Utils.getTransitionProperty({
	                animationDuration: 0
	              }), [4, this.setState({
	                activeIndex: o,
	                translate3d: i,
	                transition: n,
	                animationDuration: e,
	                fadeoutAnimationIndex: null,
	                fadeoutAnimationPosition: null,
	                fadeoutAnimationProcessing: !1
	              })];
	            case 1:
	              return t.sent(), [2];
	          }
	        });
	      });
	    }, t.prototype._handleResized = function () {
	      this.props.onResized && this.props.onResized(__assign(__assign({}, this.eventObject), {
	        type: types_1.EventType.RESIZE
	      }));
	    }, t.prototype._handleSlideChange = function (t) {
	      this.props.onSlideChange && (t = t ? __assign(__assign({}, this.eventObject), {
	        type: t
	      }) : this.eventObject, this.props.onSlideChange(t));
	    }, t.prototype._handleSlideChanged = function (s) {
	      return __awaiter(this, void 0, void 0, function () {
	        var e, i, n, o;
	        return __generator(this, function (t) {
	          switch (t.label) {
	            case 0:
	              return (i = this.state, e = i.isAutoPlaying, i = i.isAutoPlayCanceledOnAction, n = this.props, o = n.autoPlayStrategy, n = n.onSlideChanged, Utils.shouldCancelAutoPlayOnAction(o) && this.hasUserAction && !i) ? [4, this.setState({
	                isAutoPlayCanceledOnAction: !0,
	                isAutoPlaying: !1
	              })] : [3, 2];
	            case 1:
	              return t.sent(), [3, 3];
	            case 2:
	              e && this._handlePlay(), t.label = 3;
	            case 3:
	              return this.isAnimationDisabled = !1, n && (o = s ? __assign(__assign({}, this.eventObject), {
	                type: s
	              }) : this.eventObject, n(o)), [2];
	          }
	        });
	      });
	    }, t.prototype._handleDotClick = function (t) {
	      this.hasUserAction = !0, this.slideTo(t);
	    }, t.prototype._handlePlay = function () {
	      this._setAutoPlayInterval();
	    }, t.prototype._cancelTimeoutAnimations = function () {
	      this._clearAutoPlayTimeout(), this._clearSlideEndTimeout(), this.clearTouchendTimeout();
	    }, t.prototype._clearAutoPlayTimeout = function () {
	      window.clearTimeout(this.autoPlayTimeoutId), this.autoPlayTimeoutId = void 0;
	    }, t.prototype._clearSlideEndTimeout = function () {
	      clearTimeout(this.slideEndTimeoutId), this.slideEndTimeoutId = void 0;
	    }, t.prototype.clearTouchendTimeout = function () {
	      clearTimeout(this.touchEndTimeoutId), this.touchEndTimeoutId = void 0;
	    }, t.prototype._clearTouchmovePosition = function () {
	      this.startTouchmovePosition = void 0;
	    }, t.prototype._setTouchmovePosition = function () {
	      var t = Utils.getTranslateXProperty(this.stageComponent);
	      this.startTouchmovePosition = -t;
	    }, t.prototype._setInitialState = function () {
	      return __awaiter(this, void 0, void 0, function () {
	        var e;
	        return __generator(this, function (t) {
	          switch (t.label) {
	            case 0:
	              return e = Utils.calculateInitialState(this.props, this.stageComponent), this.rootComponentDimensions = Utils.getElementDimensions(this.rootElement), [4, this.setState(e)];
	            case 1:
	              return t.sent(), this.props.onInitialized && this.props.onInitialized(__assign(__assign({}, this.eventObject), {
	                type: types_1.EventType.INIT
	              })), [2];
	          }
	        });
	      });
	    }, t.prototype._setAutoPlayInterval = function () {
	      var t = this,
	        e = this.props,
	        i = e.autoPlayDirection,
	        e = e.autoPlayInterval;
	      this.autoPlayTimeoutId = window.setTimeout(function () {
	        t.isHovered || (i === types_1.AutoplayDirection.RTL ? t.slidePrev() : t.slideNext());
	      }, e);
	    }, t.prototype._setupSwipeHandlers = function () {
	      this.swipeListener = new vanilla_swipe_1.default({
	        element: this.rootElement,
	        delta: this.props.swipeDelta,
	        onSwiping: this._handleTouchmove,
	        onSwiped: this._handleTouchend,
	        rotationAngle: 5,
	        mouseTrackingEnabled: this.props.mouseTracking,
	        touchTrackingEnabled: this.props.touchTracking,
	        preventDefaultTouchmoveEvent: !this.props.touchMoveDefaultEvents,
	        preventTrackingOnMouseleave: !0
	      }), this.swipeListener.init();
	    }, t.prototype._updateComponent = function (t) {
	      var e = this;
	      void 0 === t && (t = this.props), this._cancelTimeoutAnimations(), this.isAnimationDisabled = !1, this.state.isAutoPlaying && this._handlePlay(), this.setState({
	        clones: Utils.createClones(t)
	      }), requestAnimationFrame(function () {
	        e.setState(Utils.calculateInitialState(t, e.stageComponent));
	      });
	    }, t.prototype._updateSwipeProps = function () {
	      this.swipeListener && this.swipeListener.update({
	        delta: this.props.swipeDelta,
	        mouseTrackingEnabled: this.props.mouseTracking,
	        touchTrackingEnabled: this.props.touchTracking,
	        preventDefaultTouchmoveEvent: !this.props.touchMoveDefaultEvents
	      });
	    }, t.prototype._renderDotsNavigation = function () {
	      var t = this.props,
	        e = t.renderDotsItem,
	        t = t.controlsStrategy;
	      return react_1.default.createElement(Views.DotsNavigation, {
	        state: this.state,
	        onClick: this._handleDotClick,
	        renderDotsItem: e,
	        controlsStrategy: t
	      });
	    }, t.prototype._renderPrevButton = function () {
	      var t = this.props.renderPrevButton,
	        e = Utils.getSlideItemInfo(this.state).isPrevSlideDisabled;
	      return react_1.default.createElement(Views.PrevNextButton, {
	        name: "prev",
	        onClick: this.slidePrev,
	        isDisabled: e,
	        renderPrevButton: t
	      });
	    }, t.prototype._renderNextButton = function () {
	      var t = this.props.renderNextButton,
	        e = Utils.getSlideItemInfo(this.state).isNextSlideDisabled;
	      return react_1.default.createElement(Views.PrevNextButton, {
	        name: "next",
	        onClick: this.slideNext,
	        isDisabled: e,
	        renderNextButton: t
	      });
	    }, t.prototype._renderPlayPauseButton = function () {
	      var t = this.props.renderPlayPauseButton,
	        e = this.state.isAutoPlaying;
	      return react_1.default.createElement(Views.PlayPauseButton, {
	        isPlaying: e,
	        onClick: this._handlePlayPauseToggle,
	        renderPlayPauseButton: t
	      });
	    }, t.prototype.render = function () {
	      var t = this.state,
	        e = t.translate3d,
	        i = t.clones,
	        n = t.transition,
	        t = t.canUseDom,
	        o = Utils.shouldDisableDots(this.props, this.state),
	        s = Utils.shouldDisableButtons(this.props, this.state),
	        a = Utils.getRenderWrapperStyles(this.props, this.state, this.stageComponent),
	        e = Utils.getRenderStageStyles({
	          translate3d: e
	        }, {
	          transition: n
	        }),
	        n = this.props.ssrSilentMode || t ? "" : types_1.Modifiers.SSR,
	        t = Utils.concatClassnames(types_1.Classnames.ROOT, n);
	      return react_1.default.createElement("div", {
	        className: t
	      }, react_1.default.createElement("div", {
	        ref: this._setRootComponentRef
	      }, react_1.default.createElement("div", {
	        style: a,
	        className: types_1.Classnames.WRAPPER,
	        onMouseEnter: this._handleMouseEnter,
	        onMouseLeave: this._handleMouseLeave
	      }, react_1.default.createElement("ul", {
	        style: e,
	        className: types_1.Classnames.STAGE,
	        ref: this._setStageComponentRef
	      }, i.map(this._renderStageItem)))), o ? null : this._renderDotsNavigation(), s ? null : this._renderPrevButton(), s ? null : this._renderNextButton(), this.props.disableSlideInfo ? null : this._renderSlideInfo(), this.props.autoPlayControls ? this._renderPlayPauseButton() : null);
	    }, t.defaultProps = defaultProps_1.defaultProps, t;
	  }(react_1.default.PureComponent));
	exports.default = AliceCarousel;
} (reactAliceCarousel));

var AliceCarousel = /*@__PURE__*/getDefaultExportFromCjs(reactAliceCarousel);

// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }
  return getRandomValues(rnds8);
}

var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function validate(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function parse(uuid) {
  if (!validate(uuid)) {
    throw TypeError('Invalid UUID');
  }
  let v;
  const arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  const bytes = [];
  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }
  return bytes;
}
const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
function v35(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    var _namespace;
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }
    if (typeof namespace === 'string') {
      namespace = parse(namespace);
    }
    if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`

    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;
    if (buf) {
      offset = offset || 0;
      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }
      return buf;
    }
    return unsafeStringify(bytes);
  } // Function#name is not settable on some platforms (#270)

  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support

  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}

/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);
    for (let i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }
  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */

function md5ToHexEncodedArray(input) {
  const output = [];
  const length32 = input.length * 32;
  const hexTab = '0123456789abcdef';
  for (let i = 0; i < length32; i += 8) {
    const x = input[i >> 5] >>> i % 32 & 0xff;
    const hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }
  return output;
}
/**
 * Calculate output length with padding and bit length
 */

function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */

function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  let a = 1732584193;
  let b = -271733879;
  let c = -1732584194;
  let d = 271733878;
  for (let i = 0; i < x.length; i += 16) {
    const olda = a;
    const oldb = b;
    const oldc = c;
    const oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }
  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */

function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }
  const length8 = input.length * 8;
  const output = new Uint32Array(getOutputLength(length8));
  for (let i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }
  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */

function safeAdd(x, y) {
  const lsw = (x & 0xffff) + (y & 0xffff);
  const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */

function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */

function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}
function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}
function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}
function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

v35('v3', 0x30, md5);

const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native = {
  randomUUID
};

function v4(options, buf, offset) {
  if (native.randomUUID && !buf && !options) {
    return native.randomUUID();
  }
  options = options || {};
  const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;
    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}

// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;
    case 1:
      return x ^ y ^ z;
    case 2:
      return x & y ^ x & z ^ y & z;
    case 3:
      return x ^ y ^ z;
  }
}
function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}
function sha1(bytes) {
  const K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  const H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];
  if (typeof bytes === 'string') {
    const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];
    for (let i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }
  bytes.push(0x80);
  const l = bytes.length / 4 + 2;
  const N = Math.ceil(l / 16);
  const M = new Array(N);
  for (let i = 0; i < N; ++i) {
    const arr = new Uint32Array(16);
    for (let j = 0; j < 16; ++j) {
      arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
    }
    M[i] = arr;
  }
  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;
  for (let i = 0; i < N; ++i) {
    const W = new Uint32Array(80);
    for (let t = 0; t < 16; ++t) {
      W[t] = M[i][t];
    }
    for (let t = 16; t < 80; ++t) {
      W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
    }
    let a = H[0];
    let b = H[1];
    let c = H[2];
    let d = H[3];
    let e = H[4];
    for (let t = 0; t < 80; ++t) {
      const s = Math.floor(t / 20);
      const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }
    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }
  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

v35('v5', 0x50, sha1);

/*
 default undefined - The key is the breakpoint
 (default is the result of: () => window.innerWidth or innerWidth property if the last presented).
*/
const defaultResponsive = {
  0: {
    items: 1
  },
  620: {
    items: 2
  },
  1024: {
    items: 3
  },
  1200: {
    items: 4
  },
  1700: {
    items: 5
  },
  2250: {
    items: 6
  }
};

/*
 rebuilt responsive object depending on the container width
 using the ratio of the width of the box to the width of the window
*/
const getNewResponsiveValues = rate => {
  let newResponsive = {};
  let keys = Object.keys(defaultResponsive);
  keys.forEach(key => {
    let newValue = Math.round(defaultResponsive[key].items / rate);
    newResponsive[key] = {
      items: Math.max(newValue, 1)
    };
  });
  return newResponsive;
};
const classesAction = {
  add: "add",
  remove: "remove"
};
const commonClasses = {
  multi_container: "multi-carousel__container",
  multi_empty_container: "multi-carousel__empty-container",
  item: "multi-carousel__item",
  active: "multi-carousel__active",
  no_dots: "multi-carousel__no-dots"
};
const normalCarouselClasses = {
  normal_container: "normal-carousel__container",
  normal_item: "normal-carousel__item"
};
const activeClickClasses = {
  active_click_container: "active-click-carousel__container",
  active_click_item: "active-click-carousel__item",
  active_click_with_btn: "active-click-carousel__with-btn"
};

function NormalCarousel(props) {
  const carouselParent = react.useRef();
  const [carousel_items, set_carousel_items] = react.useState([]);
  const [responsive, setResponsive] = react.useState({
    ...defaultResponsive
  });
  const [uniqueClass, setUniqueClass] = react.useState("");

  /*
      this method built to handle if the carousel has been rendered inside a container
      that is not covering the window's full width
  */
  const setNewResponsive = () => {
    let rate = window.innerWidth / carouselParent.current.clientWidth;
    if (rate > 1.35) {
      let newResponsive = getNewResponsiveValues(rate);
      setResponsive({
        ...newResponsive
      });
    } else {
      setResponsive({
        ...defaultResponsive
      });
    }
  };
  const addOrRemoveClassName = (node, action) => {
    if (action === classesAction.remove) {
      node.classList.remove(commonClasses.active);
    } else {
      node.classList.add(commonClasses.active);
    }
  };

  /*
      in case of "infinite" carousel the node will be node list "Array"
      because the carousel create a copy of all the items
      that why we need change the active class on both nodes - the carousel render both -
  */
  const changeActiveClass = (node, action) => {
    if (node?.length) {
      node.forEach(item => {
        addOrRemoveClassName(item, action);
      });
    } else if (node) {
      addOrRemoveClassName(node, action);
    }
  };

  /*
      idx-"" is the common unique class between original item and the cloned one
  */
  const getIdxClassName = e => {
    let clickedItem = e.target;

    // in case of clicking element inside the item we need the main div with "idx-" class name
    while (clickedItem) {
      if (clickedItem.classList.contains(commonClasses.item)) break;
      clickedItem = clickedItem.parentNode;
    }
    let classNames = clickedItem.className.split(" ");
    return classNames?.filter(item => item.includes("idx"))?.[0];
  };
  const onCardClicked = (e, action) => {
    if (action?.canExecute) action.execute();

    // remove active class from original and cloned item
    let activeNode = document.querySelector(`.${uniqueClass}`)?.querySelectorAll(`.${commonClasses.active}`);
    changeActiveClass(activeNode, classesAction.remove);
    let idxClass = getIdxClassName(e);

    // add active class for both original and cloned item
    let itemToSetActive = document.querySelector(`.${uniqueClass}`)?.querySelectorAll(`.${idxClass}`);
    changeActiveClass(itemToSetActive, classesAction.add);
  };

  /*
    set the active item after the carousel has already been initialized
  */
  const onInitialized = () => {
    if (props.carouselType === "active") {
      let itemToSetActive = document.querySelector(`.${uniqueClass}`)?.querySelectorAll(".idx-0");
      changeActiveClass(itemToSetActive, classesAction.add);
    }
  };
  react.useEffect(() => {
    // set a unique class in case of using two different carousel instances in the same document
    setUniqueClass("a-" + v4());
    if (!carouselParent.current) return;

    // handle resize window or carousel container
    const resizeObserver = new ResizeObserver(() => {
      setNewResponsive();
    });
    resizeObserver.observe(carouselParent.current);
    return () => resizeObserver.disconnect();
  }, []);
  react.useEffect(() => {
    if (props.data?.status === "available" && !carousel_items?.length) {
      set_carousel_items(props.data.items.map((item, i) => react.createElement("div", {
        key: i,
        onClick: props.carouselType === "active" ? e => onCardClicked(e, props.action?.get(item)) : undefined,
        className: `${commonClasses.item} idx-${i} ${props.carouselType === "active" ? activeClickClasses.active_click_clickable_item : normalCarouselClasses.normal_item}`
      }, props.content.get(item))));
    }
  }, [props.data]);
  return react.createElement("div", {
    className: [commonClasses.multi_container, uniqueClass, props.carouselType === "active" ? activeClickClasses.active_click_container : normalCarouselClasses.normal_container, props.disableDotsControls ? commonClasses.no_dots : "", !props.disableButtonsControls && props.carouselType === "active" ? activeClickClasses.active_click_with_btn : ""].join(" "),
    ref: carouselParent
  }, carousel_items?.length ? react.createElement(AliceCarousel, {
    items: carousel_items,
    responsive: responsive,
    infinite: props.infinite,
    autoPlay: props.autoPlay,
    autoPlayDirection: props.autoPlayDirection,
    autoPlayControls: props.autoPlayControls,
    disableButtonsControls: props.disableButtonsControls,
    disableDotsControls: props.disableDotsControls,
    animationDuration: props.animationDuration,
    animationType: props.animationType,
    keyboardNavigation: props.keyboardNavigation,
    mouseTracking: props.mouseTracking,
    touchTracking: props.touchTracking,
    onInitialized: onInitialized
  }) : react.createElement("div", {
    className: commonClasses.multi_empty_container
  }));
}

function preview() {
  return react.createElement(NormalCarousel, null);
}
function getPreviewCss() {
  return require$$0;
}

exports.getPreviewCss = getPreviewCss;
exports.preview = preview;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVsdGlDYXJvdXNlbC5lZGl0b3JQcmV2aWV3LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtaW5qZWN0L2Rpc3Qvc3R5bGUtaW5qZWN0LmVzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3R5cGVzL2luZGV4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL2NhbGN1bGF0ZURpcmVjdGlvbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXN3aXBlL2xpYi91dGlscy9jb21tb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvY2FsY3VsYXRlRGlyZWN0aW9uRGVsdGEuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvY2FsY3VsYXRlRHVyYXRpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvY2FsY3VsYXRlTW92aW5nUG9zaXRpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvdXBkYXRlVHJhY2UuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvY2FsY3VsYXRlVHJhY2VEaXJlY3Rpb25zLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL3Jlc29sdmVEaXJlY3Rpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvY2FsY3VsYXRlVmVsb2NpdHkuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvY2FsY3VsYXRlUG9zaXRpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvY2hlY2tJc01vcmVUaGFuU2luZ2xlVG91Y2hlcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXN3aXBlL2xpYi91dGlscy9jcmVhdGVPcHRpb25zLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL2NoZWNrSXNQYXNzaXZlU3VwcG9ydGVkLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL2NoZWNrSXNUb3VjaEV2ZW50c1N1cHBvcnRlZC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXN3aXBlL2xpYi91dGlscy9nZXRJbml0aWFsU3RhdGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvZ2V0SW5pdGlhbFByb3BzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL2dldE9wdGlvbnMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvcm90YXRlQnlBbmdsZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXN3aXBlL2xpYi91dGlscy9pbmRleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXN3aXBlL2xpYi9pbmRleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdHlwZXMvaW5kZXguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL2RlZmF1bHRQcm9wcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdXRpbHMvbWFwcGVycy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdXRpbHMvbWF0aC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdXRpbHMvZWxlbWVudHMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL3V0aWxzL2NvbW1vbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdXRpbHMvY2xhc3NuYW1lcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdXRpbHMvdGltZXJzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWFsaWNlLWNhcm91c2VsL2xpYi91dGlscy9kZWJ1Zy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdXRpbHMvcmVuZGVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWFsaWNlLWNhcm91c2VsL2xpYi91dGlscy9jb250cm9scy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdXRpbHMvaW5kZXguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL3ZpZXdzL1NsaWRlSW5mby5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdmlld3MvU3RhZ2VJdGVtLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWFsaWNlLWNhcm91c2VsL2xpYi92aWV3cy9Eb3RzTmF2aWdhdGlvbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdmlld3MvUGxheVBhdXNlQnV0dG9uLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWFsaWNlLWNhcm91c2VsL2xpYi92aWV3cy9QcmV2TmV4dEJ1dHRvbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdmlld3MvaW5kZXguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL3JlYWN0LWFsaWNlLWNhcm91c2VsLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9wYXJzZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjM1LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9tZDUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3YzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zaGExLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NS5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2hlbHBlci5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL05vcm1hbENhcm91c2VsLmpzeCIsIi4uLy4uLy4uL3NyYy9NdWx0aUNhcm91c2VsLmVkaXRvclByZXZpZXcuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHN0eWxlSW5qZWN0KGNzcywgcmVmKSB7XG4gIGlmICggcmVmID09PSB2b2lkIDAgKSByZWYgPSB7fTtcbiAgdmFyIGluc2VydEF0ID0gcmVmLmluc2VydEF0O1xuXG4gIGlmICghY3NzIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuOyB9XG5cbiAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuXG4gIGlmIChpbnNlcnRBdCA9PT0gJ3RvcCcpIHtcbiAgICBpZiAoaGVhZC5maXJzdENoaWxkKSB7XG4gICAgICBoZWFkLmluc2VydEJlZm9yZShzdHlsZSwgaGVhZC5maXJzdENoaWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVJbmplY3Q7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuVHJhY2VEaXJlY3Rpb25LZXkgPSBleHBvcnRzLkRpcmVjdGlvbiA9IGV4cG9ydHMuQXhpcyA9IHZvaWQgMDtcbnZhciBUcmFjZURpcmVjdGlvbktleTtcbmV4cG9ydHMuVHJhY2VEaXJlY3Rpb25LZXkgPSBUcmFjZURpcmVjdGlvbktleTtcblxuKGZ1bmN0aW9uIChUcmFjZURpcmVjdGlvbktleSkge1xuICBUcmFjZURpcmVjdGlvbktleVtcIk5FR0FUSVZFXCJdID0gXCJORUdBVElWRVwiO1xuICBUcmFjZURpcmVjdGlvbktleVtcIlBPU0lUSVZFXCJdID0gXCJQT1NJVElWRVwiO1xuICBUcmFjZURpcmVjdGlvbktleVtcIk5PTkVcIl0gPSBcIk5PTkVcIjtcbn0pKFRyYWNlRGlyZWN0aW9uS2V5IHx8IChleHBvcnRzLlRyYWNlRGlyZWN0aW9uS2V5ID0gVHJhY2VEaXJlY3Rpb25LZXkgPSB7fSkpO1xuXG52YXIgRGlyZWN0aW9uO1xuZXhwb3J0cy5EaXJlY3Rpb24gPSBEaXJlY3Rpb247XG5cbihmdW5jdGlvbiAoRGlyZWN0aW9uKSB7XG4gIERpcmVjdGlvbltcIlRPUFwiXSA9IFwiVE9QXCI7XG4gIERpcmVjdGlvbltcIkxFRlRcIl0gPSBcIkxFRlRcIjtcbiAgRGlyZWN0aW9uW1wiUklHSFRcIl0gPSBcIlJJR0hUXCI7XG4gIERpcmVjdGlvbltcIkJPVFRPTVwiXSA9IFwiQk9UVE9NXCI7XG4gIERpcmVjdGlvbltcIk5PTkVcIl0gPSBcIk5PTkVcIjtcbn0pKERpcmVjdGlvbiB8fCAoZXhwb3J0cy5EaXJlY3Rpb24gPSBEaXJlY3Rpb24gPSB7fSkpO1xuXG52YXIgQXhpcztcbmV4cG9ydHMuQXhpcyA9IEF4aXM7XG5cbihmdW5jdGlvbiAoQXhpcykge1xuICBBeGlzW1wiWFwiXSA9IFwieFwiO1xuICBBeGlzW1wiWVwiXSA9IFwieVwiO1xufSkoQXhpcyB8fCAoZXhwb3J0cy5BeGlzID0gQXhpcyA9IHt9KSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNhbGN1bGF0ZURpcmVjdGlvbiA9IGNhbGN1bGF0ZURpcmVjdGlvbjtcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi90eXBlc1wiKTtcblxuZnVuY3Rpb24gY2FsY3VsYXRlRGlyZWN0aW9uKHRyYWNlKSB7XG4gIHZhciBkaXJlY3Rpb247XG4gIHZhciBuZWdhdGl2ZSA9IF90eXBlcy5UcmFjZURpcmVjdGlvbktleS5ORUdBVElWRTtcbiAgdmFyIHBvc2l0aXZlID0gX3R5cGVzLlRyYWNlRGlyZWN0aW9uS2V5LlBPU0lUSVZFO1xuICB2YXIgY3VycmVudCA9IHRyYWNlW3RyYWNlLmxlbmd0aCAtIDFdO1xuICB2YXIgcHJldmlvdXMgPSB0cmFjZVt0cmFjZS5sZW5ndGggLSAyXSB8fCAwO1xuXG4gIGlmICh0cmFjZS5ldmVyeShmdW5jdGlvbiAoaSkge1xuICAgIHJldHVybiBpID09PSAwO1xuICB9KSkge1xuICAgIHJldHVybiBfdHlwZXMuVHJhY2VEaXJlY3Rpb25LZXkuTk9ORTtcbiAgfVxuXG4gIGRpcmVjdGlvbiA9IGN1cnJlbnQgPiBwcmV2aW91cyA/IHBvc2l0aXZlIDogbmVnYXRpdmU7XG5cbiAgaWYgKGN1cnJlbnQgPT09IDApIHtcbiAgICBkaXJlY3Rpb24gPSBwcmV2aW91cyA8IDAgPyBwb3NpdGl2ZSA6IG5lZ2F0aXZlO1xuICB9XG5cbiAgcmV0dXJuIGRpcmVjdGlvbjtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVzb2x2ZUF4aXNEaXJlY3Rpb24gPSBleHBvcnRzLmdldERpcmVjdGlvblZhbHVlID0gZXhwb3J0cy5nZXREaXJlY3Rpb25LZXkgPSBleHBvcnRzLmdldERpZmZlcmVuY2UgPSB2b2lkIDA7XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vdHlwZXNcIik7XG5cbnZhciBnZXREaXJlY3Rpb25LZXkgPSBmdW5jdGlvbiBnZXREaXJlY3Rpb25LZXkoKSB7XG4gIHZhciBvYmplY3QgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICB2YXIga2V5ID0gT2JqZWN0LmtleXMob2JqZWN0KS50b1N0cmluZygpO1xuXG4gIHN3aXRjaCAoa2V5KSB7XG4gICAgY2FzZSBfdHlwZXMuVHJhY2VEaXJlY3Rpb25LZXkuUE9TSVRJVkU6XG4gICAgICByZXR1cm4gX3R5cGVzLlRyYWNlRGlyZWN0aW9uS2V5LlBPU0lUSVZFO1xuXG4gICAgY2FzZSBfdHlwZXMuVHJhY2VEaXJlY3Rpb25LZXkuTkVHQVRJVkU6XG4gICAgICByZXR1cm4gX3R5cGVzLlRyYWNlRGlyZWN0aW9uS2V5Lk5FR0FUSVZFO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBfdHlwZXMuVHJhY2VEaXJlY3Rpb25LZXkuTk9ORTtcbiAgfVxufTtcblxuZXhwb3J0cy5nZXREaXJlY3Rpb25LZXkgPSBnZXREaXJlY3Rpb25LZXk7XG5cbnZhciBnZXREaXJlY3Rpb25WYWx1ZSA9IGZ1bmN0aW9uIGdldERpcmVjdGlvblZhbHVlKCkge1xuICB2YXIgdmFsdWVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBbXTtcbiAgcmV0dXJuIHZhbHVlc1t2YWx1ZXMubGVuZ3RoIC0gMV0gfHwgMDtcbn07XG5cbmV4cG9ydHMuZ2V0RGlyZWN0aW9uVmFsdWUgPSBnZXREaXJlY3Rpb25WYWx1ZTtcblxudmFyIGdldERpZmZlcmVuY2UgPSBmdW5jdGlvbiBnZXREaWZmZXJlbmNlKCkge1xuICB2YXIgeCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgdmFyIHkgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gIHJldHVybiBNYXRoLmFicyh4IC0geSk7XG59O1xuXG5leHBvcnRzLmdldERpZmZlcmVuY2UgPSBnZXREaWZmZXJlbmNlO1xuXG52YXIgcmVzb2x2ZUF4aXNEaXJlY3Rpb24gPSBmdW5jdGlvbiByZXNvbHZlQXhpc0RpcmVjdGlvbihheGlzLCBrZXkpIHtcbiAgdmFyIG5lZ2F0aXZlID0gX3R5cGVzLkRpcmVjdGlvbi5MRUZUO1xuICB2YXIgcG9zaXRpdmUgPSBfdHlwZXMuRGlyZWN0aW9uLlJJR0hUO1xuICB2YXIgZGlyZWN0aW9uID0gX3R5cGVzLkRpcmVjdGlvbi5OT05FO1xuXG4gIGlmIChheGlzID09PSBfdHlwZXMuQXhpcy5ZKSB7XG4gICAgbmVnYXRpdmUgPSBfdHlwZXMuRGlyZWN0aW9uLkJPVFRPTTtcbiAgICBwb3NpdGl2ZSA9IF90eXBlcy5EaXJlY3Rpb24uVE9QO1xuICB9XG5cbiAgaWYgKGtleSA9PT0gX3R5cGVzLlRyYWNlRGlyZWN0aW9uS2V5Lk5FR0FUSVZFKSB7XG4gICAgZGlyZWN0aW9uID0gbmVnYXRpdmU7XG4gIH1cblxuICBpZiAoa2V5ID09PSBfdHlwZXMuVHJhY2VEaXJlY3Rpb25LZXkuUE9TSVRJVkUpIHtcbiAgICBkaXJlY3Rpb24gPSBwb3NpdGl2ZTtcbiAgfVxuXG4gIHJldHVybiBkaXJlY3Rpb247XG59O1xuXG5leHBvcnRzLnJlc29sdmVBeGlzRGlyZWN0aW9uID0gcmVzb2x2ZUF4aXNEaXJlY3Rpb247IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNhbGN1bGF0ZURpcmVjdGlvbkRlbHRhID0gY2FsY3VsYXRlRGlyZWN0aW9uRGVsdGE7XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vdHlwZXNcIik7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVEaXJlY3Rpb25EZWx0YSh0cmFjZURpcmVjdGlvbnMpIHtcbiAgdmFyIGRlbHRhID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICB2YXIgbGVuZ3RoID0gdHJhY2VEaXJlY3Rpb25zLmxlbmd0aDtcbiAgdmFyIGkgPSBsZW5ndGggLSAxO1xuICB2YXIgZGlyZWN0aW9uID0gX3R5cGVzLlRyYWNlRGlyZWN0aW9uS2V5Lk5PTkU7XG5cbiAgZm9yICg7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIGN1cnJlbnQgPSB0cmFjZURpcmVjdGlvbnNbaV07XG4gICAgdmFyIGN1cnJlbnRLZXkgPSAoMCwgX2NvbW1vbi5nZXREaXJlY3Rpb25LZXkpKGN1cnJlbnQpO1xuICAgIHZhciBjdXJyZW50VmFsdWUgPSAoMCwgX2NvbW1vbi5nZXREaXJlY3Rpb25WYWx1ZSkoY3VycmVudFtjdXJyZW50S2V5XSk7XG4gICAgdmFyIHByZXYgPSB0cmFjZURpcmVjdGlvbnNbaSAtIDFdIHx8IHt9O1xuICAgIHZhciBwcmV2S2V5ID0gKDAsIF9jb21tb24uZ2V0RGlyZWN0aW9uS2V5KShwcmV2KTtcbiAgICB2YXIgcHJldlZhbHVlID0gKDAsIF9jb21tb24uZ2V0RGlyZWN0aW9uVmFsdWUpKHByZXZbcHJldktleV0pO1xuICAgIHZhciBkaWZmZXJlbmNlID0gKDAsIF9jb21tb24uZ2V0RGlmZmVyZW5jZSkoY3VycmVudFZhbHVlLCBwcmV2VmFsdWUpO1xuXG4gICAgaWYgKGRpZmZlcmVuY2UgPj0gZGVsdGEpIHtcbiAgICAgIGRpcmVjdGlvbiA9IGN1cnJlbnRLZXk7XG4gICAgICBicmVhaztcbiAgICB9IGVsc2Uge1xuICAgICAgZGlyZWN0aW9uID0gcHJldktleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlyZWN0aW9uO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jYWxjdWxhdGVEdXJhdGlvbiA9IGNhbGN1bGF0ZUR1cmF0aW9uO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVEdXJhdGlvbigpIHtcbiAgdmFyIHByZXZUaW1lID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICB2YXIgbmV4dFRpbWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gIHJldHVybiBwcmV2VGltZSA/IG5leHRUaW1lIC0gcHJldlRpbWUgOiAwO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jYWxjdWxhdGVNb3ZpbmdQb3NpdGlvbiA9IGNhbGN1bGF0ZU1vdmluZ1Bvc2l0aW9uO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVNb3ZpbmdQb3NpdGlvbihlKSB7XG4gIGlmICgnY2hhbmdlZFRvdWNoZXMnIGluIGUpIHtcbiAgICB2YXIgdG91Y2hlcyA9IGUuY2hhbmdlZFRvdWNoZXMgJiYgZS5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICByZXR1cm4ge1xuICAgICAgeDogdG91Y2hlcyAmJiB0b3VjaGVzLmNsaWVudFgsXG4gICAgICB5OiB0b3VjaGVzICYmIHRvdWNoZXMuY2xpZW50WVxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IGUuY2xpZW50WCxcbiAgICB5OiBlLmNsaWVudFlcbiAgfTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudXBkYXRlVHJhY2UgPSB1cGRhdGVUcmFjZTtcblxuZnVuY3Rpb24gdXBkYXRlVHJhY2UodHJhY2UsIHZhbHVlKSB7XG4gIHZhciBsYXN0ID0gdHJhY2VbdHJhY2UubGVuZ3RoIC0gMV07XG5cbiAgaWYgKGxhc3QgIT09IHZhbHVlKSB7XG4gICAgdHJhY2UucHVzaCh2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gdHJhY2U7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNhbGN1bGF0ZVRyYWNlRGlyZWN0aW9ucyA9IGNhbGN1bGF0ZVRyYWNlRGlyZWN0aW9ucztcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi90eXBlc1wiKTtcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gY2FsY3VsYXRlVHJhY2VEaXJlY3Rpb25zKCkge1xuICB2YXIgdHJhY2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFtdO1xuICB2YXIgdGlja3MgPSBbXTtcbiAgdmFyIHBvc2l0aXZlID0gX3R5cGVzLlRyYWNlRGlyZWN0aW9uS2V5LlBPU0lUSVZFO1xuICB2YXIgbmVnYXRpdmUgPSBfdHlwZXMuVHJhY2VEaXJlY3Rpb25LZXkuTkVHQVRJVkU7XG4gIHZhciBpID0gMDtcbiAgdmFyIHRpY2sgPSBbXTtcbiAgdmFyIGRpcmVjdGlvbiA9IF90eXBlcy5UcmFjZURpcmVjdGlvbktleS5OT05FO1xuXG4gIGZvciAoOyBpIDwgdHJhY2UubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgY3VycmVudCA9IHRyYWNlW2ldO1xuICAgIHZhciBwcmV2ID0gdHJhY2VbaSAtIDFdO1xuXG4gICAgaWYgKHRpY2subGVuZ3RoKSB7XG4gICAgICB2YXIgY3VycmVudERpcmVjdGlvbiA9IGN1cnJlbnQgPiBwcmV2ID8gcG9zaXRpdmUgOiBuZWdhdGl2ZTtcblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gX3R5cGVzLlRyYWNlRGlyZWN0aW9uS2V5Lk5PTkUpIHtcbiAgICAgICAgZGlyZWN0aW9uID0gY3VycmVudERpcmVjdGlvbjtcbiAgICAgIH1cblxuICAgICAgaWYgKGN1cnJlbnREaXJlY3Rpb24gPT09IGRpcmVjdGlvbikge1xuICAgICAgICB0aWNrLnB1c2goY3VycmVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aWNrcy5wdXNoKF9kZWZpbmVQcm9wZXJ0eSh7fSwgZGlyZWN0aW9uLCB0aWNrLnNsaWNlKCkpKTtcbiAgICAgICAgdGljayA9IFtdO1xuICAgICAgICB0aWNrLnB1c2goY3VycmVudCk7XG4gICAgICAgIGRpcmVjdGlvbiA9IGN1cnJlbnREaXJlY3Rpb247XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjdXJyZW50ICE9PSAwKSB7XG4gICAgICAgIGRpcmVjdGlvbiA9IGN1cnJlbnQgPiAwID8gcG9zaXRpdmUgOiBuZWdhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgdGljay5wdXNoKGN1cnJlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aWNrLmxlbmd0aCkge1xuICAgIHRpY2tzLnB1c2goX2RlZmluZVByb3BlcnR5KHt9LCBkaXJlY3Rpb24sIHRpY2spKTtcbiAgfVxuXG4gIHJldHVybiB0aWNrcztcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVzb2x2ZURpcmVjdGlvbiA9IHJlc29sdmVEaXJlY3Rpb247XG5cbnZhciBfY2FsY3VsYXRlRGlyZWN0aW9uID0gcmVxdWlyZShcIi4vY2FsY3VsYXRlRGlyZWN0aW9uXCIpO1xuXG52YXIgX2NhbGN1bGF0ZVRyYWNlRGlyZWN0aW9ucyA9IHJlcXVpcmUoXCIuL2NhbGN1bGF0ZVRyYWNlRGlyZWN0aW9uc1wiKTtcblxudmFyIF9jYWxjdWxhdGVEaXJlY3Rpb25EZWx0YSA9IHJlcXVpcmUoXCIuL2NhbGN1bGF0ZURpcmVjdGlvbkRlbHRhXCIpO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi90eXBlc1wiKTtcblxuZnVuY3Rpb24gcmVzb2x2ZURpcmVjdGlvbih0cmFjZSkge1xuICB2YXIgYXhpcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogX3R5cGVzLkF4aXMuWDtcbiAgdmFyIGRpcmVjdGlvbkRlbHRhID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAwO1xuXG4gIGlmIChkaXJlY3Rpb25EZWx0YSkge1xuICAgIHZhciBkaXJlY3Rpb25zID0gKDAsIF9jYWxjdWxhdGVUcmFjZURpcmVjdGlvbnMuY2FsY3VsYXRlVHJhY2VEaXJlY3Rpb25zKSh0cmFjZSk7XG5cbiAgICB2YXIgX2RpcmVjdGlvbiA9ICgwLCBfY2FsY3VsYXRlRGlyZWN0aW9uRGVsdGEuY2FsY3VsYXRlRGlyZWN0aW9uRGVsdGEpKGRpcmVjdGlvbnMsIGRpcmVjdGlvbkRlbHRhKTtcblxuICAgIHJldHVybiAoMCwgX2NvbW1vbi5yZXNvbHZlQXhpc0RpcmVjdGlvbikoYXhpcywgX2RpcmVjdGlvbik7XG4gIH1cblxuICB2YXIgZGlyZWN0aW9uID0gKDAsIF9jYWxjdWxhdGVEaXJlY3Rpb24uY2FsY3VsYXRlRGlyZWN0aW9uKSh0cmFjZSk7XG4gIHJldHVybiAoMCwgX2NvbW1vbi5yZXNvbHZlQXhpc0RpcmVjdGlvbikoYXhpcywgZGlyZWN0aW9uKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY2FsY3VsYXRlVmVsb2NpdHkgPSBjYWxjdWxhdGVWZWxvY2l0eTtcblxuZnVuY3Rpb24gY2FsY3VsYXRlVmVsb2NpdHkoeCwgeSwgdGltZSkge1xuICB2YXIgbWFnbml0dWRlID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xuICByZXR1cm4gbWFnbml0dWRlIC8gKHRpbWUgfHwgMSk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNhbGN1bGF0ZVBvc2l0aW9uID0gY2FsY3VsYXRlUG9zaXRpb247XG5cbnZhciBfdXBkYXRlVHJhY2UgPSByZXF1aXJlKFwiLi91cGRhdGVUcmFjZVwiKTtcblxudmFyIF9yZXNvbHZlRGlyZWN0aW9uID0gcmVxdWlyZShcIi4vcmVzb2x2ZURpcmVjdGlvblwiKTtcblxudmFyIF9jYWxjdWxhdGVEdXJhdGlvbiA9IHJlcXVpcmUoXCIuL2NhbGN1bGF0ZUR1cmF0aW9uXCIpO1xuXG52YXIgX2NhbGN1bGF0ZVZlbG9jaXR5ID0gcmVxdWlyZShcIi4vY2FsY3VsYXRlVmVsb2NpdHlcIik7XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vdHlwZXNcIik7XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZVBvc2l0aW9uKHN0YXRlLCBvcHRpb25zKSB7XG4gIHZhciBzdGFydCA9IHN0YXRlLnN0YXJ0LFxuICAgICAgeCA9IHN0YXRlLngsXG4gICAgICB5ID0gc3RhdGUueSxcbiAgICAgIHRyYWNlWCA9IHN0YXRlLnRyYWNlWCxcbiAgICAgIHRyYWNlWSA9IHN0YXRlLnRyYWNlWTtcbiAgdmFyIHJvdGF0ZVBvc2l0aW9uID0gb3B0aW9ucy5yb3RhdGVQb3NpdGlvbixcbiAgICAgIGRpcmVjdGlvbkRlbHRhID0gb3B0aW9ucy5kaXJlY3Rpb25EZWx0YTtcbiAgdmFyIGRlbHRhWCA9IHJvdGF0ZVBvc2l0aW9uLnggLSB4O1xuICB2YXIgZGVsdGFZID0geSAtIHJvdGF0ZVBvc2l0aW9uLnk7XG4gIHZhciBhYnNYID0gTWF0aC5hYnMoZGVsdGFYKTtcbiAgdmFyIGFic1kgPSBNYXRoLmFicyhkZWx0YVkpO1xuICAoMCwgX3VwZGF0ZVRyYWNlLnVwZGF0ZVRyYWNlKSh0cmFjZVgsIGRlbHRhWCk7XG4gICgwLCBfdXBkYXRlVHJhY2UudXBkYXRlVHJhY2UpKHRyYWNlWSwgZGVsdGFZKTtcbiAgdmFyIGRpcmVjdGlvblggPSAoMCwgX3Jlc29sdmVEaXJlY3Rpb24ucmVzb2x2ZURpcmVjdGlvbikodHJhY2VYLCBfdHlwZXMuQXhpcy5YLCBkaXJlY3Rpb25EZWx0YSk7XG4gIHZhciBkaXJlY3Rpb25ZID0gKDAsIF9yZXNvbHZlRGlyZWN0aW9uLnJlc29sdmVEaXJlY3Rpb24pKHRyYWNlWSwgX3R5cGVzLkF4aXMuWSwgZGlyZWN0aW9uRGVsdGEpO1xuICB2YXIgZHVyYXRpb24gPSAoMCwgX2NhbGN1bGF0ZUR1cmF0aW9uLmNhbGN1bGF0ZUR1cmF0aW9uKShzdGFydCwgRGF0ZS5ub3coKSk7XG4gIHZhciB2ZWxvY2l0eSA9ICgwLCBfY2FsY3VsYXRlVmVsb2NpdHkuY2FsY3VsYXRlVmVsb2NpdHkpKGFic1gsIGFic1ksIGR1cmF0aW9uKTtcbiAgcmV0dXJuIHtcbiAgICBhYnNYOiBhYnNYLFxuICAgIGFic1k6IGFic1ksXG4gICAgZGVsdGFYOiBkZWx0YVgsXG4gICAgZGVsdGFZOiBkZWx0YVksXG4gICAgZGlyZWN0aW9uWDogZGlyZWN0aW9uWCxcbiAgICBkaXJlY3Rpb25ZOiBkaXJlY3Rpb25ZLFxuICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICBwb3NpdGlvblg6IHJvdGF0ZVBvc2l0aW9uLngsXG4gICAgcG9zaXRpb25ZOiByb3RhdGVQb3NpdGlvbi55LFxuICAgIHZlbG9jaXR5OiB2ZWxvY2l0eVxuICB9O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jaGVja0lzTW9yZVRoYW5TaW5nbGVUb3VjaGVzID0gdm9pZCAwO1xuXG52YXIgY2hlY2tJc01vcmVUaGFuU2luZ2xlVG91Y2hlcyA9IGZ1bmN0aW9uIGNoZWNrSXNNb3JlVGhhblNpbmdsZVRvdWNoZXMoZSkge1xuICByZXR1cm4gQm9vbGVhbihlLnRvdWNoZXMgJiYgZS50b3VjaGVzLmxlbmd0aCA+IDEpO1xufTtcblxuZXhwb3J0cy5jaGVja0lzTW9yZVRoYW5TaW5nbGVUb3VjaGVzID0gY2hlY2tJc01vcmVUaGFuU2luZ2xlVG91Y2hlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY3JlYXRlT3B0aW9ucyA9IGNyZWF0ZU9wdGlvbnM7XG5cbmZ1bmN0aW9uIGNyZWF0ZU9wdGlvbnMoKSB7XG4gIHZhciBwcm94eSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm94eSwgJ3Bhc3NpdmUnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB0aGlzLmlzUGFzc2l2ZVN1cHBvcnRlZCA9IHRydWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIGVudW1lcmFibGU6IHRydWVcbiAgfSk7XG4gIHJldHVybiBwcm94eTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY2hlY2tJc1Bhc3NpdmVTdXBwb3J0ZWQgPSBjaGVja0lzUGFzc2l2ZVN1cHBvcnRlZDtcbmV4cG9ydHMubm9vcCA9IHZvaWQgMDtcblxudmFyIF9jcmVhdGVPcHRpb25zID0gcmVxdWlyZShcIi4vY3JlYXRlT3B0aW9uc1wiKTtcblxuZnVuY3Rpb24gY2hlY2tJc1Bhc3NpdmVTdXBwb3J0ZWQoaXNQYXNzaXZlU3VwcG9ydGVkKSB7XG4gIGlmICh0eXBlb2YgaXNQYXNzaXZlU3VwcG9ydGVkID09PSAnYm9vbGVhbicpIHtcbiAgICByZXR1cm4gaXNQYXNzaXZlU3VwcG9ydGVkO1xuICB9XG5cbiAgdmFyIHByb3h5ID0ge1xuICAgIGlzUGFzc2l2ZVN1cHBvcnRlZDogaXNQYXNzaXZlU3VwcG9ydGVkXG4gIH07XG5cbiAgdHJ5IHtcbiAgICB2YXIgb3B0aW9ucyA9ICgwLCBfY3JlYXRlT3B0aW9ucy5jcmVhdGVPcHRpb25zKShwcm94eSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NoZWNrSXNQYXNzaXZlU3VwcG9ydGVkJywgbm9vcCwgb3B0aW9ucyk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoZWNrSXNQYXNzaXZlU3VwcG9ydGVkJywgbm9vcCwgb3B0aW9ucyk7XG4gIH0gY2F0Y2ggKGVycikge31cblxuICByZXR1cm4gcHJveHkuaXNQYXNzaXZlU3VwcG9ydGVkO1xufVxuXG52YXIgbm9vcCA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcblxuZXhwb3J0cy5ub29wID0gbm9vcDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY2hlY2tJc1RvdWNoRXZlbnRzU3VwcG9ydGVkID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSwgX3R5cGVvZihvYmopOyB9XG5cbnZhciBjaGVja0lzVG91Y2hFdmVudHNTdXBwb3J0ZWQgPSBmdW5jdGlvbiBjaGVja0lzVG91Y2hFdmVudHNTdXBwb3J0ZWQoKSB7XG4gIHJldHVybiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKHdpbmRvdykpID09PSAnb2JqZWN0JyAmJiAoJ29udG91Y2hzdGFydCcgaW4gd2luZG93IHx8IEJvb2xlYW4od2luZG93Lm5hdmlnYXRvci5tYXhUb3VjaFBvaW50cykpO1xufTtcblxuZXhwb3J0cy5jaGVja0lzVG91Y2hFdmVudHNTdXBwb3J0ZWQgPSBjaGVja0lzVG91Y2hFdmVudHNTdXBwb3J0ZWQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldEluaXRpYWxTdGF0ZSA9IHZvaWQgMDtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307IGkgJSAyID8gb3duS2V5cyhPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIGdldEluaXRpYWxTdGF0ZSA9IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICByZXR1cm4gX29iamVjdFNwcmVhZCh7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIHN0YXJ0OiAwLFxuICAgIGlzU3dpcGluZzogZmFsc2UsXG4gICAgdHJhY2VYOiBbXSxcbiAgICB0cmFjZVk6IFtdXG4gIH0sIG9wdGlvbnMpO1xufTtcblxuZXhwb3J0cy5nZXRJbml0aWFsU3RhdGUgPSBnZXRJbml0aWFsU3RhdGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldEluaXRpYWxQcm9wcyA9IHZvaWQgMDtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307IGkgJSAyID8gb3duS2V5cyhPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIGdldEluaXRpYWxQcm9wcyA9IGZ1bmN0aW9uIGdldEluaXRpYWxQcm9wcygpIHtcbiAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe1xuICAgIGVsZW1lbnQ6IG51bGwsXG4gICAgdGFyZ2V0OiBudWxsLFxuICAgIGRlbHRhOiAxMCxcbiAgICBkaXJlY3Rpb25EZWx0YTogMCxcbiAgICByb3RhdGlvbkFuZ2xlOiAwLFxuICAgIG1vdXNlVHJhY2tpbmdFbmFibGVkOiBmYWxzZSxcbiAgICB0b3VjaFRyYWNraW5nRW5hYmxlZDogdHJ1ZSxcbiAgICBwcmV2ZW50RGVmYXVsdFRvdWNobW92ZUV2ZW50OiBmYWxzZSxcbiAgICBwcmV2ZW50VHJhY2tpbmdPbk1vdXNlbGVhdmU6IGZhbHNlXG4gIH0sIHByb3BzKTtcbn07XG5cbmV4cG9ydHMuZ2V0SW5pdGlhbFByb3BzID0gZ2V0SW5pdGlhbFByb3BzOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXRPcHRpb25zID0gZ2V0T3B0aW9ucztcblxuZnVuY3Rpb24gZ2V0T3B0aW9ucygpIHtcbiAgdmFyIGlzUGFzc2l2ZVN1cHBvcnRlZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZmFsc2U7XG5cbiAgaWYgKGlzUGFzc2l2ZVN1cHBvcnRlZCkge1xuICAgIHJldHVybiB7XG4gICAgICBwYXNzaXZlOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge307XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJvdGF0ZUJ5QW5nbGUgPSByb3RhdGVCeUFuZ2xlO1xuXG5mdW5jdGlvbiByb3RhdGVCeUFuZ2xlKHBvc2l0aW9uKSB7XG4gIHZhciBhbmdsZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcblxuICBpZiAoYW5nbGUgPT09IDApIHtcbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cblxuICB2YXIgeCA9IHBvc2l0aW9uLngsXG4gICAgICB5ID0gcG9zaXRpb24ueTtcbiAgdmFyIGFuZ2xlSW5SYWRpYW5zID0gTWF0aC5QSSAvIDE4MCAqIGFuZ2xlO1xuICB2YXIgcm90YXRlZFggPSB4ICogTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpICsgeSAqIE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcbiAgdmFyIHJvdGF0ZWRZID0geSAqIE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKSAtIHggKiBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG4gIHJldHVybiB7XG4gICAgeDogcm90YXRlZFgsXG4gICAgeTogcm90YXRlZFlcbiAgfTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jYWxjdWxhdGVEaXJlY3Rpb24gPSByZXF1aXJlKFwiLi9jYWxjdWxhdGVEaXJlY3Rpb25cIik7XG5cbk9iamVjdC5rZXlzKF9jYWxjdWxhdGVEaXJlY3Rpb24pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9jYWxjdWxhdGVEaXJlY3Rpb25ba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfY2FsY3VsYXRlRGlyZWN0aW9uW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX2NhbGN1bGF0ZURpcmVjdGlvbkRlbHRhID0gcmVxdWlyZShcIi4vY2FsY3VsYXRlRGlyZWN0aW9uRGVsdGFcIik7XG5cbk9iamVjdC5rZXlzKF9jYWxjdWxhdGVEaXJlY3Rpb25EZWx0YSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX2NhbGN1bGF0ZURpcmVjdGlvbkRlbHRhW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2NhbGN1bGF0ZURpcmVjdGlvbkRlbHRhW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX2NhbGN1bGF0ZUR1cmF0aW9uID0gcmVxdWlyZShcIi4vY2FsY3VsYXRlRHVyYXRpb25cIik7XG5cbk9iamVjdC5rZXlzKF9jYWxjdWxhdGVEdXJhdGlvbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX2NhbGN1bGF0ZUR1cmF0aW9uW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2NhbGN1bGF0ZUR1cmF0aW9uW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX2NhbGN1bGF0ZU1vdmluZ1Bvc2l0aW9uID0gcmVxdWlyZShcIi4vY2FsY3VsYXRlTW92aW5nUG9zaXRpb25cIik7XG5cbk9iamVjdC5rZXlzKF9jYWxjdWxhdGVNb3ZpbmdQb3NpdGlvbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX2NhbGN1bGF0ZU1vdmluZ1Bvc2l0aW9uW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2NhbGN1bGF0ZU1vdmluZ1Bvc2l0aW9uW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX2NhbGN1bGF0ZVBvc2l0aW9uID0gcmVxdWlyZShcIi4vY2FsY3VsYXRlUG9zaXRpb25cIik7XG5cbk9iamVjdC5rZXlzKF9jYWxjdWxhdGVQb3NpdGlvbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX2NhbGN1bGF0ZVBvc2l0aW9uW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2NhbGN1bGF0ZVBvc2l0aW9uW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX2NhbGN1bGF0ZVRyYWNlRGlyZWN0aW9ucyA9IHJlcXVpcmUoXCIuL2NhbGN1bGF0ZVRyYWNlRGlyZWN0aW9uc1wiKTtcblxuT2JqZWN0LmtleXMoX2NhbGN1bGF0ZVRyYWNlRGlyZWN0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX2NhbGN1bGF0ZVRyYWNlRGlyZWN0aW9uc1trZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9jYWxjdWxhdGVUcmFjZURpcmVjdGlvbnNba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfY2FsY3VsYXRlVmVsb2NpdHkgPSByZXF1aXJlKFwiLi9jYWxjdWxhdGVWZWxvY2l0eVwiKTtcblxuT2JqZWN0LmtleXMoX2NhbGN1bGF0ZVZlbG9jaXR5KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfY2FsY3VsYXRlVmVsb2NpdHlba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfY2FsY3VsYXRlVmVsb2NpdHlba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfY2hlY2tJc01vcmVUaGFuU2luZ2xlVG91Y2hlcyA9IHJlcXVpcmUoXCIuL2NoZWNrSXNNb3JlVGhhblNpbmdsZVRvdWNoZXNcIik7XG5cbk9iamVjdC5rZXlzKF9jaGVja0lzTW9yZVRoYW5TaW5nbGVUb3VjaGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfY2hlY2tJc01vcmVUaGFuU2luZ2xlVG91Y2hlc1trZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9jaGVja0lzTW9yZVRoYW5TaW5nbGVUb3VjaGVzW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX2NoZWNrSXNQYXNzaXZlU3VwcG9ydGVkID0gcmVxdWlyZShcIi4vY2hlY2tJc1Bhc3NpdmVTdXBwb3J0ZWRcIik7XG5cbk9iamVjdC5rZXlzKF9jaGVja0lzUGFzc2l2ZVN1cHBvcnRlZCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX2NoZWNrSXNQYXNzaXZlU3VwcG9ydGVkW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2NoZWNrSXNQYXNzaXZlU3VwcG9ydGVkW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX2NoZWNrSXNUb3VjaEV2ZW50c1N1cHBvcnRlZCA9IHJlcXVpcmUoXCIuL2NoZWNrSXNUb3VjaEV2ZW50c1N1cHBvcnRlZFwiKTtcblxuT2JqZWN0LmtleXMoX2NoZWNrSXNUb3VjaEV2ZW50c1N1cHBvcnRlZCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX2NoZWNrSXNUb3VjaEV2ZW50c1N1cHBvcnRlZFtrZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9jaGVja0lzVG91Y2hFdmVudHNTdXBwb3J0ZWRba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG5PYmplY3Qua2V5cyhfY29tbW9uKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfY29tbW9uW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2NvbW1vbltrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF9jcmVhdGVPcHRpb25zID0gcmVxdWlyZShcIi4vY3JlYXRlT3B0aW9uc1wiKTtcblxuT2JqZWN0LmtleXMoX2NyZWF0ZU9wdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9jcmVhdGVPcHRpb25zW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2NyZWF0ZU9wdGlvbnNba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfZ2V0SW5pdGlhbFN0YXRlID0gcmVxdWlyZShcIi4vZ2V0SW5pdGlhbFN0YXRlXCIpO1xuXG5PYmplY3Qua2V5cyhfZ2V0SW5pdGlhbFN0YXRlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfZ2V0SW5pdGlhbFN0YXRlW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2dldEluaXRpYWxTdGF0ZVtrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF9nZXRJbml0aWFsUHJvcHMgPSByZXF1aXJlKFwiLi9nZXRJbml0aWFsUHJvcHNcIik7XG5cbk9iamVjdC5rZXlzKF9nZXRJbml0aWFsUHJvcHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9nZXRJbml0aWFsUHJvcHNba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfZ2V0SW5pdGlhbFByb3BzW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX2dldE9wdGlvbnMgPSByZXF1aXJlKFwiLi9nZXRPcHRpb25zXCIpO1xuXG5PYmplY3Qua2V5cyhfZ2V0T3B0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX2dldE9wdGlvbnNba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfZ2V0T3B0aW9uc1trZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF9yZXNvbHZlRGlyZWN0aW9uID0gcmVxdWlyZShcIi4vcmVzb2x2ZURpcmVjdGlvblwiKTtcblxuT2JqZWN0LmtleXMoX3Jlc29sdmVEaXJlY3Rpb24pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9yZXNvbHZlRGlyZWN0aW9uW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX3Jlc29sdmVEaXJlY3Rpb25ba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfcm90YXRlQnlBbmdsZSA9IHJlcXVpcmUoXCIuL3JvdGF0ZUJ5QW5nbGVcIik7XG5cbk9iamVjdC5rZXlzKF9yb3RhdGVCeUFuZ2xlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfcm90YXRlQnlBbmdsZVtrZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9yb3RhdGVCeUFuZ2xlW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX3VwZGF0ZVRyYWNlID0gcmVxdWlyZShcIi4vdXBkYXRlVHJhY2VcIik7XG5cbk9iamVjdC5rZXlzKF91cGRhdGVUcmFjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX3VwZGF0ZVRyYWNlW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX3VwZGF0ZVRyYWNlW2tleV07XG4gICAgfVxuICB9KTtcbn0pOyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSwgX3R5cGVvZihvYmopOyB9XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgX2V4cG9ydE5hbWVzID0ge307XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIFV0aWxzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vdXRpbHNcIikpO1xuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XG5cbk9iamVjdC5rZXlzKF90eXBlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfZXhwb3J0TmFtZXMsIGtleSkpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX3R5cGVzW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX3R5cGVzW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGVCYWJlbEludGVyb3AgPSBuZXcgV2Vha01hcCgpOyB2YXIgY2FjaGVOb2RlSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7IHJldHVybiAoX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKSB7IHJldHVybiBub2RlSW50ZXJvcCA/IGNhY2hlTm9kZUludGVyb3AgOiBjYWNoZUJhYmVsSW50ZXJvcDsgfSkobm9kZUludGVyb3ApOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaiwgbm9kZUludGVyb3ApIHsgaWYgKCFub2RlSW50ZXJvcCAmJiBvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKGtleSAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIFZhbmlsbGFTd2lwZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFZhbmlsbGFTd2lwZShwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBWYW5pbGxhU3dpcGUpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwic3RhdGVcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInByb3BzXCIsIHZvaWQgMCk7XG5cbiAgICB0aGlzLnN0YXRlID0gVXRpbHMuZ2V0SW5pdGlhbFN0YXRlKCk7XG4gICAgdGhpcy5wcm9wcyA9IFV0aWxzLmdldEluaXRpYWxQcm9wcyhwcm9wcyk7XG4gICAgdGhpcy5oYW5kbGVTd2lwZVN0YXJ0ID0gdGhpcy5oYW5kbGVTd2lwZVN0YXJ0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTd2lwZU1vdmUgPSB0aGlzLmhhbmRsZVN3aXBlTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU3dpcGVFbmQgPSB0aGlzLmhhbmRsZVN3aXBlRW5kLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVNb3VzZURvd24gPSB0aGlzLmhhbmRsZU1vdXNlRG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlTW91c2VNb3ZlID0gdGhpcy5oYW5kbGVNb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZU1vdXNlVXAgPSB0aGlzLmhhbmRsZU1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZU1vdXNlTGVhdmUgPSB0aGlzLmhhbmRsZU1vdXNlTGVhdmUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhWYW5pbGxhU3dpcGUsIFt7XG4gICAga2V5OiBcImluaXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgIHRoaXMuc2V0dXBUb3VjaExpc3RlbmVycygpO1xuICAgICAgdGhpcy5zZXR1cE1vdXNlTGlzdGVuZXJzKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGUocHJvcHMpIHtcbiAgICAgIHZhciBwcmV2UHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIG5leHRQcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHByZXZQcm9wcywgcHJvcHMpO1xuXG4gICAgICBpZiAocHJldlByb3BzLmVsZW1lbnQgIT09IG5leHRQcm9wcy5lbGVtZW50IHx8IHByZXZQcm9wcy50YXJnZXQgIT09IG5leHRQcm9wcy50YXJnZXQpIHtcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMucHJvcHMgPSBuZXh0UHJvcHM7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMucHJvcHMgPSBuZXh0UHJvcHM7XG5cbiAgICAgIGlmIChwcmV2UHJvcHMubW91c2VUcmFja2luZ0VuYWJsZWQgIT09IG5leHRQcm9wcy5tb3VzZVRyYWNraW5nRW5hYmxlZCB8fCBwcmV2UHJvcHMucHJldmVudFRyYWNraW5nT25Nb3VzZWxlYXZlICE9PSBuZXh0UHJvcHMucHJldmVudFRyYWNraW5nT25Nb3VzZWxlYXZlKSB7XG4gICAgICAgIHRoaXMuY2xlYW51cE1vdXNlTGlzdGVuZXJzKCk7XG4gICAgICAgIG5leHRQcm9wcy5tb3VzZVRyYWNraW5nRW5hYmxlZCA/IHRoaXMuc2V0dXBNb3VzZUxpc3RlbmVycygpIDogdGhpcy5jbGVhbnVwTW91c2VMaXN0ZW5lcnMoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByZXZQcm9wcy50b3VjaFRyYWNraW5nRW5hYmxlZCAhPT0gbmV4dFByb3BzLnRvdWNoVHJhY2tpbmdFbmFibGVkKSB7XG4gICAgICAgIHRoaXMuY2xlYW51cFRvdWNoTGlzdGVuZXJzKCk7XG4gICAgICAgIG5leHRQcm9wcy50b3VjaFRyYWNraW5nRW5hYmxlZCA/IHRoaXMuc2V0dXBUb3VjaExpc3RlbmVycygpIDogdGhpcy5jbGVhbnVwVG91Y2hMaXN0ZW5lcnMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGVzdHJveVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgdGhpcy5jbGVhbnVwTW91c2VMaXN0ZW5lcnMoKTtcbiAgICAgIHRoaXMuY2xlYW51cFRvdWNoTGlzdGVuZXJzKCk7XG4gICAgICB0aGlzLnN0YXRlID0gVXRpbHMuZ2V0SW5pdGlhbFN0YXRlKCk7XG4gICAgICB0aGlzLnByb3BzID0gVXRpbHMuZ2V0SW5pdGlhbFByb3BzKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldHVwVG91Y2hMaXN0ZW5lcnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0dXBUb3VjaExpc3RlbmVycygpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZWxlbWVudCA9IF90aGlzJHByb3BzLmVsZW1lbnQsXG4gICAgICAgICAgdGFyZ2V0ID0gX3RoaXMkcHJvcHMudGFyZ2V0LFxuICAgICAgICAgIHRvdWNoVHJhY2tpbmdFbmFibGVkID0gX3RoaXMkcHJvcHMudG91Y2hUcmFja2luZ0VuYWJsZWQ7XG5cbiAgICAgIGlmIChlbGVtZW50ICYmIHRvdWNoVHJhY2tpbmdFbmFibGVkKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRhcmdldCB8fCBlbGVtZW50O1xuICAgICAgICB2YXIgaXNQYXNzaXZlU3VwcG9ydGVkID0gVXRpbHMuY2hlY2tJc1Bhc3NpdmVTdXBwb3J0ZWQoKTtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBVdGlscy5nZXRPcHRpb25zKGlzUGFzc2l2ZVN1cHBvcnRlZCk7XG4gICAgICAgIGxpc3RlbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLmhhbmRsZVN3aXBlU3RhcnQsIG9wdGlvbnMpO1xuICAgICAgICBsaXN0ZW5lci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmhhbmRsZVN3aXBlTW92ZSwgb3B0aW9ucyk7XG4gICAgICAgIGxpc3RlbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5oYW5kbGVTd2lwZUVuZCwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNsZWFudXBUb3VjaExpc3RlbmVyc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbGVhbnVwVG91Y2hMaXN0ZW5lcnMoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBlbGVtZW50ID0gX3RoaXMkcHJvcHMyLmVsZW1lbnQsXG4gICAgICAgICAgdGFyZ2V0ID0gX3RoaXMkcHJvcHMyLnRhcmdldDtcbiAgICAgIHZhciBsaXN0ZW5lciA9IHRhcmdldCB8fCBlbGVtZW50O1xuXG4gICAgICBpZiAobGlzdGVuZXIpIHtcbiAgICAgICAgbGlzdGVuZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuaGFuZGxlU3dpcGVTdGFydCk7XG4gICAgICAgIGxpc3RlbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuaGFuZGxlU3dpcGVNb3ZlKTtcbiAgICAgICAgbGlzdGVuZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLmhhbmRsZVN3aXBlRW5kKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0dXBNb3VzZUxpc3RlbmVyc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXR1cE1vdXNlTGlzdGVuZXJzKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZWxlbWVudCA9IF90aGlzJHByb3BzMy5lbGVtZW50LFxuICAgICAgICAgIG1vdXNlVHJhY2tpbmdFbmFibGVkID0gX3RoaXMkcHJvcHMzLm1vdXNlVHJhY2tpbmdFbmFibGVkLFxuICAgICAgICAgIHByZXZlbnRUcmFja2luZ09uTW91c2VsZWF2ZSA9IF90aGlzJHByb3BzMy5wcmV2ZW50VHJhY2tpbmdPbk1vdXNlbGVhdmU7XG5cbiAgICAgIGlmIChtb3VzZVRyYWNraW5nRW5hYmxlZCAmJiBlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVNb3VzZURvd24pO1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuaGFuZGxlTW91c2VNb3ZlKTtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5oYW5kbGVNb3VzZVVwKTtcblxuICAgICAgICBpZiAocHJldmVudFRyYWNraW5nT25Nb3VzZWxlYXZlKSB7XG4gICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5oYW5kbGVNb3VzZUxlYXZlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjbGVhbnVwTW91c2VMaXN0ZW5lcnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xlYW51cE1vdXNlTGlzdGVuZXJzKCkge1xuICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLnByb3BzLmVsZW1lbnQ7XG5cbiAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVNb3VzZURvd24pO1xuICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuaGFuZGxlTW91c2VNb3ZlKTtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5oYW5kbGVNb3VzZVVwKTtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5oYW5kbGVNb3VzZUxlYXZlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0RXZlbnREYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEV2ZW50RGF0YShlKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge1xuICAgICAgICBkaXJlY3Rpb25EZWx0YTogMFxuICAgICAgfTtcbiAgICAgIHZhciByb3RhdGlvbkFuZ2xlID0gdGhpcy5wcm9wcy5yb3RhdGlvbkFuZ2xlO1xuICAgICAgdmFyIGRpcmVjdGlvbkRlbHRhID0gb3B0aW9ucy5kaXJlY3Rpb25EZWx0YTtcbiAgICAgIHZhciBtb3ZpbmdQb3NpdGlvbiA9IFV0aWxzLmNhbGN1bGF0ZU1vdmluZ1Bvc2l0aW9uKGUpO1xuICAgICAgdmFyIHJvdGF0ZVBvc2l0aW9uID0gVXRpbHMucm90YXRlQnlBbmdsZShtb3ZpbmdQb3NpdGlvbiwgcm90YXRpb25BbmdsZSk7XG4gICAgICByZXR1cm4gVXRpbHMuY2FsY3VsYXRlUG9zaXRpb24odGhpcy5zdGF0ZSwge1xuICAgICAgICByb3RhdGVQb3NpdGlvbjogcm90YXRlUG9zaXRpb24sXG4gICAgICAgIGRpcmVjdGlvbkRlbHRhOiBkaXJlY3Rpb25EZWx0YVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhhbmRsZVN3aXBlU3RhcnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlU3dpcGVTdGFydChlKSB7XG4gICAgICBpZiAoVXRpbHMuY2hlY2tJc01vcmVUaGFuU2luZ2xlVG91Y2hlcyhlKSkgcmV0dXJuO1xuICAgICAgdmFyIHJvdGF0aW9uQW5nbGUgPSB0aGlzLnByb3BzLnJvdGF0aW9uQW5nbGU7XG4gICAgICB2YXIgbW92aW5nUG9zaXRpb24gPSBVdGlscy5jYWxjdWxhdGVNb3ZpbmdQb3NpdGlvbihlKTtcblxuICAgICAgdmFyIF9VdGlscyRyb3RhdGVCeUFuZ2xlID0gVXRpbHMucm90YXRlQnlBbmdsZShtb3ZpbmdQb3NpdGlvbiwgcm90YXRpb25BbmdsZSksXG4gICAgICAgICAgeCA9IF9VdGlscyRyb3RhdGVCeUFuZ2xlLngsXG4gICAgICAgICAgeSA9IF9VdGlscyRyb3RhdGVCeUFuZ2xlLnk7XG5cbiAgICAgIHRoaXMuc3RhdGUgPSBVdGlscy5nZXRJbml0aWFsU3RhdGUoe1xuICAgICAgICBpc1N3aXBpbmc6IGZhbHNlLFxuICAgICAgICBzdGFydDogRGF0ZS5ub3coKSxcbiAgICAgICAgeDogeCxcbiAgICAgICAgeTogeVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhhbmRsZVN3aXBlTW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVTd2lwZU1vdmUoZSkge1xuICAgICAgdmFyIF90aGlzJHN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICB4ID0gX3RoaXMkc3RhdGUueCxcbiAgICAgICAgICB5ID0gX3RoaXMkc3RhdGUueSxcbiAgICAgICAgICBpc1N3aXBpbmcgPSBfdGhpcyRzdGF0ZS5pc1N3aXBpbmc7XG4gICAgICBpZiAoIXggfHwgIXkgfHwgVXRpbHMuY2hlY2tJc01vcmVUaGFuU2luZ2xlVG91Y2hlcyhlKSkgcmV0dXJuO1xuICAgICAgdmFyIGRpcmVjdGlvbkRlbHRhID0gdGhpcy5wcm9wcy5kaXJlY3Rpb25EZWx0YSB8fCAwO1xuXG4gICAgICB2YXIgX3RoaXMkZ2V0RXZlbnREYXRhID0gdGhpcy5nZXRFdmVudERhdGEoZSwge1xuICAgICAgICBkaXJlY3Rpb25EZWx0YTogZGlyZWN0aW9uRGVsdGFcbiAgICAgIH0pLFxuICAgICAgICAgIGFic1ggPSBfdGhpcyRnZXRFdmVudERhdGEuYWJzWCxcbiAgICAgICAgICBhYnNZID0gX3RoaXMkZ2V0RXZlbnREYXRhLmFic1ksXG4gICAgICAgICAgZGVsdGFYID0gX3RoaXMkZ2V0RXZlbnREYXRhLmRlbHRhWCxcbiAgICAgICAgICBkZWx0YVkgPSBfdGhpcyRnZXRFdmVudERhdGEuZGVsdGFZLFxuICAgICAgICAgIGRpcmVjdGlvblggPSBfdGhpcyRnZXRFdmVudERhdGEuZGlyZWN0aW9uWCxcbiAgICAgICAgICBkaXJlY3Rpb25ZID0gX3RoaXMkZ2V0RXZlbnREYXRhLmRpcmVjdGlvblksXG4gICAgICAgICAgZHVyYXRpb24gPSBfdGhpcyRnZXRFdmVudERhdGEuZHVyYXRpb24sXG4gICAgICAgICAgdmVsb2NpdHkgPSBfdGhpcyRnZXRFdmVudERhdGEudmVsb2NpdHk7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wczQgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGRlbHRhID0gX3RoaXMkcHJvcHM0LmRlbHRhLFxuICAgICAgICAgIHByZXZlbnREZWZhdWx0VG91Y2htb3ZlRXZlbnQgPSBfdGhpcyRwcm9wczQucHJldmVudERlZmF1bHRUb3VjaG1vdmVFdmVudCxcbiAgICAgICAgICBvblN3aXBlU3RhcnQgPSBfdGhpcyRwcm9wczQub25Td2lwZVN0YXJ0LFxuICAgICAgICAgIG9uU3dpcGluZyA9IF90aGlzJHByb3BzNC5vblN3aXBpbmc7XG4gICAgICBpZiAoZS5jYW5jZWxhYmxlICYmIHByZXZlbnREZWZhdWx0VG91Y2htb3ZlRXZlbnQpIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChhYnNYIDwgTnVtYmVyKGRlbHRhKSAmJiBhYnNZIDwgTnVtYmVyKGRlbHRhKSAmJiAhaXNTd2lwaW5nKSByZXR1cm47XG5cbiAgICAgIGlmIChvblN3aXBlU3RhcnQgJiYgIWlzU3dpcGluZykge1xuICAgICAgICBvblN3aXBlU3RhcnQoZSwge1xuICAgICAgICAgIGRlbHRhWDogZGVsdGFYLFxuICAgICAgICAgIGRlbHRhWTogZGVsdGFZLFxuICAgICAgICAgIGFic1g6IGFic1gsXG4gICAgICAgICAgYWJzWTogYWJzWSxcbiAgICAgICAgICBkaXJlY3Rpb25YOiBkaXJlY3Rpb25YLFxuICAgICAgICAgIGRpcmVjdGlvblk6IGRpcmVjdGlvblksXG4gICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgIHZlbG9jaXR5OiB2ZWxvY2l0eVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zdGF0ZS5pc1N3aXBpbmcgPSB0cnVlO1xuXG4gICAgICBpZiAob25Td2lwaW5nKSB7XG4gICAgICAgIG9uU3dpcGluZyhlLCB7XG4gICAgICAgICAgZGVsdGFYOiBkZWx0YVgsXG4gICAgICAgICAgZGVsdGFZOiBkZWx0YVksXG4gICAgICAgICAgYWJzWDogYWJzWCxcbiAgICAgICAgICBhYnNZOiBhYnNZLFxuICAgICAgICAgIGRpcmVjdGlvblg6IGRpcmVjdGlvblgsXG4gICAgICAgICAgZGlyZWN0aW9uWTogZGlyZWN0aW9uWSxcbiAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgdmVsb2NpdHk6IHZlbG9jaXR5XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYW5kbGVTd2lwZUVuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVTd2lwZUVuZChlKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM1ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBvblN3aXBlZCA9IF90aGlzJHByb3BzNS5vblN3aXBlZCxcbiAgICAgICAgICBvblRhcCA9IF90aGlzJHByb3BzNS5vblRhcDtcblxuICAgICAgaWYgKHRoaXMuc3RhdGUuaXNTd2lwaW5nKSB7XG4gICAgICAgIHZhciBkaXJlY3Rpb25EZWx0YSA9IHRoaXMucHJvcHMuZGlyZWN0aW9uRGVsdGEgfHwgMDtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gdGhpcy5nZXRFdmVudERhdGEoZSwge1xuICAgICAgICAgIGRpcmVjdGlvbkRlbHRhOiBkaXJlY3Rpb25EZWx0YVxuICAgICAgICB9KTtcbiAgICAgICAgb25Td2lwZWQgJiYgb25Td2lwZWQoZSwgcG9zaXRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIF9wb3NpdGlvbiA9IHRoaXMuZ2V0RXZlbnREYXRhKGUpO1xuXG4gICAgICAgIG9uVGFwICYmIG9uVGFwKGUsIF9wb3NpdGlvbik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3RhdGUgPSBVdGlscy5nZXRJbml0aWFsU3RhdGUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlTW91c2VEb3duXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bihlKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gdGhpcy5wcm9wcy50YXJnZXQ7XG5cbiAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gZS50YXJnZXQpIHtcbiAgICAgICAgICB0aGlzLmhhbmRsZVN3aXBlU3RhcnQoZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGFuZGxlU3dpcGVTdGFydChlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlTW91c2VNb3ZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZShlKSB7XG4gICAgICB0aGlzLmhhbmRsZVN3aXBlTW92ZShlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlTW91c2VVcFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVNb3VzZVVwKGUpIHtcbiAgICAgIHZhciBpc1N3aXBpbmcgPSB0aGlzLnN0YXRlLmlzU3dpcGluZztcbiAgICAgIHZhciB0YXJnZXQgPSB0aGlzLnByb3BzLnRhcmdldDtcblxuICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICBpZiAodGFyZ2V0ID09PSBlLnRhcmdldCB8fCBpc1N3aXBpbmcpIHtcbiAgICAgICAgICB0aGlzLmhhbmRsZVN3aXBlRW5kKGUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmhhbmRsZVN3aXBlRW5kKGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYW5kbGVNb3VzZUxlYXZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlTGVhdmUoZSkge1xuICAgICAgdmFyIGlzU3dpcGluZyA9IHRoaXMuc3RhdGUuaXNTd2lwaW5nO1xuXG4gICAgICBpZiAoaXNTd2lwaW5nKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlU3dpcGVFbmQoZSk7XG4gICAgICB9XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiaXNUb3VjaEV2ZW50c1N1cHBvcnRlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc1RvdWNoRXZlbnRzU3VwcG9ydGVkKCkge1xuICAgICAgcmV0dXJuIFV0aWxzLmNoZWNrSXNUb3VjaEV2ZW50c1N1cHBvcnRlZCgpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBWYW5pbGxhU3dpcGU7XG59KCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gVmFuaWxsYVN3aXBlOyIsIlwidXNlIHN0cmljdFwiO3ZhciBFdmVudFR5cGUsQW5pbWF0aW9uVHlwZSxBdXRvUGxheVN0cmF0ZWd5LENvbnRyb2xzU3RyYXRlZ3ksQXV0b3BsYXlEaXJlY3Rpb24sQ2xhc3NuYW1lcyxNb2RpZmllcnM7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZXhwb3J0cy5Nb2RpZmllcnM9ZXhwb3J0cy5DbGFzc25hbWVzPWV4cG9ydHMuQXV0b3BsYXlEaXJlY3Rpb249ZXhwb3J0cy5Db250cm9sc1N0cmF0ZWd5PWV4cG9ydHMuQXV0b1BsYXlTdHJhdGVneT1leHBvcnRzLkFuaW1hdGlvblR5cGU9ZXhwb3J0cy5FdmVudFR5cGU9dm9pZCAwLGZ1bmN0aW9uKGUpe2UuQUNUSU9OPVwiYWN0aW9uXCIsZS5JTklUPVwiaW5pdFwiLGUuUkVTSVpFPVwicmVzaXplXCIsZS5VUERBVEU9XCJ1cGRhdGVcIn0oRXZlbnRUeXBlPWV4cG9ydHMuRXZlbnRUeXBlfHwoZXhwb3J0cy5FdmVudFR5cGU9e30pKSxmdW5jdGlvbihlKXtlLkZBREVPVVQ9XCJmYWRlb3V0XCIsZS5TTElERT1cInNsaWRlXCJ9KEFuaW1hdGlvblR5cGU9ZXhwb3J0cy5BbmltYXRpb25UeXBlfHwoZXhwb3J0cy5BbmltYXRpb25UeXBlPXt9KSksZnVuY3Rpb24oZSl7ZS5ERUZBVUxUPVwiZGVmYXVsdFwiLGUuQUxMPVwiYWxsXCIsZS5BQ1RJT049XCJhY3Rpb25cIixlLk5PTkU9XCJub25lXCJ9KEF1dG9QbGF5U3RyYXRlZ3k9ZXhwb3J0cy5BdXRvUGxheVN0cmF0ZWd5fHwoZXhwb3J0cy5BdXRvUGxheVN0cmF0ZWd5PXt9KSksZnVuY3Rpb24oZSl7ZS5ERUZBVUxUPVwiZGVmYXVsdFwiLGUuQUxURVJOQVRFPVwiYWx0ZXJuYXRlXCIsZS5SRVNQT05TSVZFPVwicmVzcG9uc2l2ZVwifShDb250cm9sc1N0cmF0ZWd5PWV4cG9ydHMuQ29udHJvbHNTdHJhdGVneXx8KGV4cG9ydHMuQ29udHJvbHNTdHJhdGVneT17fSkpLGZ1bmN0aW9uKGUpe2UuUlRMPVwicnRsXCIsZS5MVFI9XCJsdHJcIn0oQXV0b3BsYXlEaXJlY3Rpb249ZXhwb3J0cy5BdXRvcGxheURpcmVjdGlvbnx8KGV4cG9ydHMuQXV0b3BsYXlEaXJlY3Rpb249e30pKSxmdW5jdGlvbihlKXtlLkFOSU1BVEVEPVwiYW5pbWF0ZWQgYW5pbWF0ZWQtb3V0IGZhZGVPdXRcIixlLlJPT1Q9XCJhbGljZS1jYXJvdXNlbFwiLGUuV1JBUFBFUj1cImFsaWNlLWNhcm91c2VsX193cmFwcGVyXCIsZS5TVEFHRT1cImFsaWNlLWNhcm91c2VsX19zdGFnZVwiLGUuU1RBR0VfSVRFTT1cImFsaWNlLWNhcm91c2VsX19zdGFnZS1pdGVtXCIsZS5ET1RTPVwiYWxpY2UtY2Fyb3VzZWxfX2RvdHNcIixlLkRPVFNfSVRFTT1cImFsaWNlLWNhcm91c2VsX19kb3RzLWl0ZW1cIixlLlBMQVlfQlROPVwiYWxpY2UtY2Fyb3VzZWxfX3BsYXktYnRuXCIsZS5QTEFZX0JUTl9JVEVNPVwiYWxpY2UtY2Fyb3VzZWxfX3BsYXktYnRuLWl0ZW1cIixlLlBMQVlfQlROX1dSQVBQRVI9XCJhbGljZS1jYXJvdXNlbF9fcGxheS1idG4td3JhcHBlclwiLGUuU0xJREVfSU5GTz1cImFsaWNlLWNhcm91c2VsX19zbGlkZS1pbmZvXCIsZS5TTElERV9JTkZPX0lURU09XCJhbGljZS1jYXJvdXNlbF9fc2xpZGUtaW5mby1pdGVtXCIsZS5CVVRUT05fUFJFVj1cImFsaWNlLWNhcm91c2VsX19wcmV2LWJ0blwiLGUuQlVUVE9OX1BSRVZfV1JBUFBFUj1cImFsaWNlLWNhcm91c2VsX19wcmV2LWJ0bi13cmFwcGVyXCIsZS5CVVRUT05fUFJFVl9JVEVNPVwiYWxpY2UtY2Fyb3VzZWxfX3ByZXYtYnRuLWl0ZW1cIixlLkJVVFRPTl9ORVhUPVwiYWxpY2UtY2Fyb3VzZWxfX25leHQtYnRuXCIsZS5CVVRUT05fTkVYVF9XUkFQUEVSPVwiYWxpY2UtY2Fyb3VzZWxfX25leHQtYnRuLXdyYXBwZXJcIixlLkJVVFRPTl9ORVhUX0lURU09XCJhbGljZS1jYXJvdXNlbF9fbmV4dC1idG4taXRlbVwifShDbGFzc25hbWVzPWV4cG9ydHMuQ2xhc3NuYW1lc3x8KGV4cG9ydHMuQ2xhc3NuYW1lcz17fSkpLGZ1bmN0aW9uKGUpe2UuQUNUSVZFPVwiX19hY3RpdmVcIixlLklOQUNUSVZFPVwiX19pbmFjdGl2ZVwiLGUuQ0xPTkVEPVwiX19jbG9uZWRcIixlLkNVU1RPTT1cIl9fY3VzdG9tXCIsZS5QQVVTRT1cIl9fcGF1c2VcIixlLlNFUEFSQVRPUj1cIl9fc2VwYXJhdG9yXCIsZS5TU1I9XCJfX3NzclwiLGUuVEFSR0VUPVwiX190YXJnZXRcIn0oTW9kaWZpZXJzPWV4cG9ydHMuTW9kaWZpZXJzfHwoZXhwb3J0cy5Nb2RpZmllcnM9e30pKTsiLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLmRlZmF1bHRQcm9wcz12b2lkIDA7dmFyIHR5cGVzXzE9cmVxdWlyZShcIi4vdHlwZXNcIik7ZXhwb3J0cy5kZWZhdWx0UHJvcHM9e2FjdGl2ZUluZGV4OjAsYW5pbWF0aW9uRHVyYXRpb246NDAwLGFuaW1hdGlvbkVhc2luZ0Z1bmN0aW9uOlwiZWFzZVwiLGFuaW1hdGlvblR5cGU6dHlwZXNfMS5BbmltYXRpb25UeXBlLlNMSURFLGF1dG9IZWlnaHQ6ITEsYXV0b1dpZHRoOiExLGF1dG9QbGF5OiExLGF1dG9QbGF5Q29udHJvbHM6ITEsYXV0b1BsYXlEaXJlY3Rpb246dHlwZXNfMS5BdXRvcGxheURpcmVjdGlvbi5MVFIsYXV0b1BsYXlJbnRlcnZhbDo0MDAsYXV0b1BsYXlTdHJhdGVneTp0eXBlc18xLkF1dG9QbGF5U3RyYXRlZ3kuREVGQVVMVCxjaGlsZHJlbjp2b2lkIDAsY29udHJvbHNTdHJhdGVneTp0eXBlc18xLkNvbnRyb2xzU3RyYXRlZ3kuREVGQVVMVCxkaXNhYmxlQnV0dG9uc0NvbnRyb2xzOiExLGRpc2FibGVEb3RzQ29udHJvbHM6ITEsZGlzYWJsZVNsaWRlSW5mbzohMCxpbmZpbml0ZTohMSxpbm5lcldpZHRoOnZvaWQgMCxpdGVtczp2b2lkIDAsa2V5Ym9hcmROYXZpZ2F0aW9uOiExLG1vdXNlVHJhY2tpbmc6ITEsbmFtZTpcIlwiLHBhZGRpbmdMZWZ0OjAscGFkZGluZ1JpZ2h0OjAscmVzcG9uc2l2ZTp2b2lkIDAsc3dpcGVEZWx0YToyMCxzd2lwZUV4dHJhUGFkZGluZzoyMDAsc3NyU2lsZW50TW9kZTohMCx0b3VjaFRyYWNraW5nOiEwLHRvdWNoTW92ZURlZmF1bHRFdmVudHM6ITAsb25Jbml0aWFsaXplZDpmdW5jdGlvbigpe30sb25SZXNpemVkOmZ1bmN0aW9uKCl7fSxvblJlc2l6ZUV2ZW50OnZvaWQgMCxvblNsaWRlQ2hhbmdlOmZ1bmN0aW9uKCl7fSxvblNsaWRlQ2hhbmdlZDpmdW5jdGlvbigpe319OyIsIlwidXNlIHN0cmljdFwiO3ZhciBfX2Fzc2lnbj1mdW5jdGlvbigpe3JldHVybihfX2Fzc2lnbj1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihvKXtmb3IodmFyIHQscj0xLGk9YXJndW1lbnRzLmxlbmd0aDtyPGk7cisrKWZvcih2YXIgcyBpbiB0PWFyZ3VtZW50c1tyXSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxzKSYmKG9bc109dFtzXSk7cmV0dXJuIG99KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LG1hcFBhcnRpYWxDb29yZHM9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGV4cG9ydHMubWFwUG9zaXRpb25Db29yZHM9ZXhwb3J0cy5tYXBQYXJ0aWFsQ29vcmRzPXZvaWQgMCxmdW5jdGlvbihvKXtyZXR1cm4gby5tYXAoZnVuY3Rpb24obyl7cmV0dXJue3dpZHRoOm8ud2lkdGgscG9zaXRpb246MH19KX0pLG1hcFBvc2l0aW9uQ29vcmRzPShleHBvcnRzLm1hcFBhcnRpYWxDb29yZHM9bWFwUGFydGlhbENvb3JkcyxmdW5jdGlvbihvLHQpe3JldHVybiB2b2lkIDA9PT10JiYodD0wKSxvLm1hcChmdW5jdGlvbihvKXtyZXR1cm4gby5wb3NpdGlvbj50P19fYXNzaWduKF9fYXNzaWduKHt9LG8pLHtwb3NpdGlvbjp0fSk6b30pfSk7ZXhwb3J0cy5tYXBQb3NpdGlvbkNvb3Jkcz1tYXBQb3NpdGlvbkNvb3JkczsiLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLmlzVmVydGljYWxUb3VjaG1vdmVEZXRlY3RlZD1leHBvcnRzLmdldEZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbj1leHBvcnRzLmdldEZhZGVvdXRBbmltYXRpb25JbmRleD1leHBvcnRzLmdldFN3aXBlVG91Y2hlbmRJbmRleD1leHBvcnRzLmdldFN3aXBlVG91Y2hlbmRQb3NpdGlvbj1leHBvcnRzLmdldFN3aXBlVHJhbnNmb3JtYXRpb25DdXJzb3I9ZXhwb3J0cy5nZXRUcmFuc2Zvcm1hdGlvbkl0ZW1JbmRleD1leHBvcnRzLmdldFN3aXBlU2hpZnRWYWx1ZT1leHBvcnRzLmdldEl0ZW1Db29yZHM9ZXhwb3J0cy5nZXRJc0xlZnREaXJlY3Rpb249ZXhwb3J0cy5zaG91bGRSZWNhbGN1bGF0ZVN3aXBlUG9zaXRpb249ZXhwb3J0cy5nZXRTd2lwZUxpbWl0TWF4PWV4cG9ydHMuZ2V0U3dpcGVMaW1pdE1pbj1leHBvcnRzLnNob3VsZENhbmNlbFNsaWRlQW5pbWF0aW9uPWV4cG9ydHMuc2hvdWxkUmVjYWxjdWxhdGVTbGlkZUluZGV4PWV4cG9ydHMuZ2V0VXBkYXRlU2xpZGVQb3NpdGlvbkluZGV4PWV4cG9ydHMuZ2V0QWN0aXZlSW5kZXg9ZXhwb3J0cy5nZXRTdGFydEluZGV4PWV4cG9ydHMuZ2V0U2hpZnRJbmRleD12b2lkIDA7dmFyIGdldFNoaWZ0SW5kZXg9ZnVuY3Rpb24oZSx0KXtyZXR1cm4oZT12b2lkIDA9PT1lPzA6ZSkrKHQ9dm9pZCAwPT09dD8wOnQpfSxnZXRTdGFydEluZGV4PShleHBvcnRzLmdldFNoaWZ0SW5kZXg9Z2V0U2hpZnRJbmRleCxmdW5jdGlvbihlLHQpe2lmKHZvaWQgMD09PWUmJihlPTApLHQ9dm9pZCAwPT09dD8wOnQpe2lmKHQ8PWUpcmV0dXJuIHQtMTtpZigwPGUpcmV0dXJuIGV9cmV0dXJuIDB9KSxnZXRBY3RpdmVJbmRleD0oZXhwb3J0cy5nZXRTdGFydEluZGV4PWdldFN0YXJ0SW5kZXgsZnVuY3Rpb24oZSl7dmFyIHQ9ZS5zdGFydEluZGV4LHQ9dm9pZCAwPT09dD8wOnQsaT1lLml0ZW1zQ291bnQsZT1lLmluZmluaXRlO3JldHVybiB2b2lkIDAhPT1lJiZlP3Q6KDAsZXhwb3J0cy5nZXRTdGFydEluZGV4KSh0LHZvaWQgMD09PWk/MDppKX0pLGdldFVwZGF0ZVNsaWRlUG9zaXRpb25JbmRleD0oZXhwb3J0cy5nZXRBY3RpdmVJbmRleD1nZXRBY3RpdmVJbmRleCxmdW5jdGlvbihlLHQpe3JldHVybiBlPDA/dC0xOnQ8PWU/MDplfSksc2hvdWxkUmVjYWxjdWxhdGVTbGlkZUluZGV4PShleHBvcnRzLmdldFVwZGF0ZVNsaWRlUG9zaXRpb25JbmRleD1nZXRVcGRhdGVTbGlkZVBvc2l0aW9uSW5kZXgsZnVuY3Rpb24oZSx0KXtyZXR1cm4gZTwwfHx0PD1lfSksc2hvdWxkQ2FuY2VsU2xpZGVBbmltYXRpb249KGV4cG9ydHMuc2hvdWxkUmVjYWxjdWxhdGVTbGlkZUluZGV4PXNob3VsZFJlY2FsY3VsYXRlU2xpZGVJbmRleCxmdW5jdGlvbihlLHQpe3JldHVybiBlPDB8fHQ8PWV9KSxnZXRTd2lwZUxpbWl0TWluPShleHBvcnRzLnNob3VsZENhbmNlbFNsaWRlQW5pbWF0aW9uPXNob3VsZENhbmNlbFNsaWRlQW5pbWF0aW9uLGZ1bmN0aW9uKGUsdCl7dmFyIGk9ZS5pdGVtc09mZnNldCxlPWUudHJhbnNmb3JtYXRpb25TZXQsZT12b2lkIDA9PT1lP1tdOmUsbz10LmluZmluaXRlLHQ9dC5zd2lwZUV4dHJhUGFkZGluZztyZXR1cm4gbz8oZVt2b2lkIDA9PT1pPzA6aV18fHt9KS5wb3NpdGlvbjoobz0oZVswXXx8e30pLndpZHRoLE1hdGgubWluKHZvaWQgMD09PXQ/MDp0LHZvaWQgMD09PW8/MDpvKSl9KSxnZXRTd2lwZUxpbWl0TWF4PShleHBvcnRzLmdldFN3aXBlTGltaXRNaW49Z2V0U3dpcGVMaW1pdE1pbixmdW5jdGlvbihlLHQpe3ZhciBpPXQuaW5maW5pdGUsdD10LnN3aXBlRXh0cmFQYWRkaW5nLHQ9dm9pZCAwPT09dD8wOnQsbz1lLml0ZW1zQ291bnQsbj1lLml0ZW1zT2Zmc2V0LHI9ZS5pdGVtc0luU2xpZGUscj12b2lkIDA9PT1yPzE6cixlPWUudHJhbnNmb3JtYXRpb25TZXQsZT12b2lkIDA9PT1lP1tdOmU7cmV0dXJuIGk/KGVbKHZvaWQgMD09PW8/MTpvKSsoMCxleHBvcnRzLmdldFNoaWZ0SW5kZXgpKHIsdm9pZCAwPT09bj8wOm4pXXx8e30pLnBvc2l0aW9ufHwwOigwLGV4cG9ydHMuZ2V0SXRlbUNvb3JkcykoLXIsZSkucG9zaXRpb24rdH0pLHNob3VsZFJlY2FsY3VsYXRlU3dpcGVQb3NpdGlvbj0oZXhwb3J0cy5nZXRTd2lwZUxpbWl0TWF4PWdldFN3aXBlTGltaXRNYXgsZnVuY3Rpb24oZSx0LGkpe3JldHVybi10PD1lfHxNYXRoLmFicyhlKT49aX0pLGdldElzTGVmdERpcmVjdGlvbj0oZXhwb3J0cy5zaG91bGRSZWNhbGN1bGF0ZVN3aXBlUG9zaXRpb249c2hvdWxkUmVjYWxjdWxhdGVTd2lwZVBvc2l0aW9uLGZ1bmN0aW9uKGUpe3JldHVybihlPXZvaWQgMD09PWU/MDplKTwwfSksZ2V0SXRlbUNvb3Jkcz0oZXhwb3J0cy5nZXRJc0xlZnREaXJlY3Rpb249Z2V0SXNMZWZ0RGlyZWN0aW9uLGZ1bmN0aW9uKGUsdCl7cmV0dXJuKHQ9dm9pZCAwPT09dD9bXTp0KS5zbGljZShlPXZvaWQgMD09PWU/MDplKVswXXx8e3Bvc2l0aW9uOjAsd2lkdGg6MH19KSxnZXRTd2lwZVNoaWZ0VmFsdWU9KGV4cG9ydHMuZ2V0SXRlbUNvb3Jkcz1nZXRJdGVtQ29vcmRzLGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHZvaWQgMD09PWUmJihlPTApLHZvaWQgMD09PXQmJih0PVtdKSwoMCxleHBvcnRzLmdldEl0ZW1Db29yZHMpKGUsdCkucG9zaXRpb259KSxnZXRUcmFuc2Zvcm1hdGlvbkl0ZW1JbmRleD0oZXhwb3J0cy5nZXRTd2lwZVNoaWZ0VmFsdWU9Z2V0U3dpcGVTaGlmdFZhbHVlLGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHZvaWQgMD09PXQmJih0PTApLChlPXZvaWQgMD09PWU/W106ZSkuZmluZEluZGV4KGZ1bmN0aW9uKGUpe3JldHVybiBlLnBvc2l0aW9uPj1NYXRoLmFicyh0KX0pfSksZ2V0U3dpcGVUcmFuc2Zvcm1hdGlvbkN1cnNvcj0oZXhwb3J0cy5nZXRUcmFuc2Zvcm1hdGlvbkl0ZW1JbmRleD1nZXRUcmFuc2Zvcm1hdGlvbkl0ZW1JbmRleCxmdW5jdGlvbihlLHQsaSl7dm9pZCAwPT09ZSYmKGU9W10pLHZvaWQgMD09PXQmJih0PTApLHZvaWQgMD09PWkmJihpPTApO2U9KDAsZXhwb3J0cy5nZXRUcmFuc2Zvcm1hdGlvbkl0ZW1JbmRleCkoZSx0KTtyZXR1cm4oMCxleHBvcnRzLmdldElzTGVmdERpcmVjdGlvbikoaSk/ZTplLTF9KSxnZXRTd2lwZVRvdWNoZW5kUG9zaXRpb249KGV4cG9ydHMuZ2V0U3dpcGVUcmFuc2Zvcm1hdGlvbkN1cnNvcj1nZXRTd2lwZVRyYW5zZm9ybWF0aW9uQ3Vyc29yLGZ1bmN0aW9uKGUsdCxpKXt2b2lkIDA9PT1pJiYoaT0wKTt2YXIgbz1lLmluZmluaXRlLG49ZS5hdXRvV2lkdGgscj1lLmlzU3RhZ2VDb250ZW50UGFydGlhbCxzPWUuc3dpcGVBbGxvd2VkUG9zaXRpb25NYXgsZT1lLnRyYW5zZm9ybWF0aW9uU2V0LGk9KDAsZXhwb3J0cy5nZXRTd2lwZVRyYW5zZm9ybWF0aW9uQ3Vyc29yKShlLGksdCksdD0oMCxleHBvcnRzLmdldEl0ZW1Db29yZHMpKGksZSkucG9zaXRpb247aWYoIW8pe2lmKG4mJnIpcmV0dXJuIDA7aWYoczx0KXJldHVybi1zfXJldHVybi10fSksZ2V0U3dpcGVUb3VjaGVuZEluZGV4PShleHBvcnRzLmdldFN3aXBlVG91Y2hlbmRQb3NpdGlvbj1nZXRTd2lwZVRvdWNoZW5kUG9zaXRpb24sZnVuY3Rpb24oZSx0KXt2YXIgaT10LnRyYW5zZm9ybWF0aW9uU2V0LG89dC5pdGVtc0luU2xpZGUsbj10Lml0ZW1zT2Zmc2V0LHI9dC5pdGVtc0NvdW50LHM9dC5pbmZpbml0ZSxkPXQuaXNTdGFnZUNvbnRlbnRQYXJ0aWFsLGE9dC5hY3RpdmVJbmRleCx0PXQudHJhbnNsYXRlM2Q7cmV0dXJuIHN8fCFkJiZ0IT09TWF0aC5hYnMoZSk/KGQ9KDAsZXhwb3J0cy5nZXRUcmFuc2Zvcm1hdGlvbkl0ZW1JbmRleCkoaSxlKSxzP2Q8KHQ9KDAsZXhwb3J0cy5nZXRTaGlmdEluZGV4KShvLG4pKT9yLW8tbitkOnQrcjw9ZD9kLSh0K3IpOmQtdDpkKTphfSksZ2V0RmFkZW91dEFuaW1hdGlvbkluZGV4PShleHBvcnRzLmdldFN3aXBlVG91Y2hlbmRJbmRleD1nZXRTd2lwZVRvdWNoZW5kSW5kZXgsZnVuY3Rpb24oZSl7dmFyIHQ9ZS5pbmZpbml0ZSxpPWUuYWN0aXZlSW5kZXgsZT1lLml0ZW1zSW5TbGlkZTtyZXR1cm4gdD9pK2U6aX0pLGdldEZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbj0oZXhwb3J0cy5nZXRGYWRlb3V0QW5pbWF0aW9uSW5kZXg9Z2V0RmFkZW91dEFuaW1hdGlvbkluZGV4LGZ1bmN0aW9uKGUsdCl7dmFyIGk9dC5hY3RpdmVJbmRleCx0PXQuc3RhZ2VXaWR0aDtyZXR1cm4gZTxpPyhpLWUpKi10fHwwOihlLWkpKnR8fDB9KSxpc1ZlcnRpY2FsVG91Y2htb3ZlRGV0ZWN0ZWQ9KGV4cG9ydHMuZ2V0RmFkZW91dEFuaW1hdGlvblBvc2l0aW9uPWdldEZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbixmdW5jdGlvbihlLHQsaSl7cmV0dXJuIGU8KGk9dm9pZCAwPT09aT8wOmkpfHxlPC4xKnR9KTtleHBvcnRzLmlzVmVydGljYWxUb3VjaG1vdmVEZXRlY3RlZD1pc1ZlcnRpY2FsVG91Y2htb3ZlRGV0ZWN0ZWQ7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9fYXNzaWduPWZ1bmN0aW9uKCl7cmV0dXJuKF9fYXNzaWduPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHQpe2Zvcih2YXIgZSxyPTEsbj1hcmd1bWVudHMubGVuZ3RoO3I8bjtyKyspZm9yKHZhciBvIGluIGU9YXJndW1lbnRzW3JdKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLG8pJiYodFtvXT1lW29dKTtyZXR1cm4gdH0pLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sY29tbW9uXzE9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGV4cG9ydHMuZ2V0VHJhbnNmb3JtTWF0cml4PWV4cG9ydHMuZ2V0VHJhbnNsYXRlWFByb3BlcnR5PWV4cG9ydHMuZ2V0VG91Y2htb3ZlVHJhbnNsYXRlUG9zaXRpb249ZXhwb3J0cy5nZXRUcmFuc2xhdGUzZFByb3BlcnR5PWV4cG9ydHMuZ2V0UmVuZGVyU3RhZ2VJdGVtU3R5bGVzPWV4cG9ydHMuZ2V0UmVuZGVyU3RhZ2VTdHlsZXM9ZXhwb3J0cy5nZXRUcmFuc2l0aW9uUHJvcGVydHk9ZXhwb3J0cy5nZXRSZW5kZXJXcmFwcGVyU3R5bGVzPWV4cG9ydHMuYW5pbWF0ZT1leHBvcnRzLnNob3VsZEhhbmRsZVJlc2l6ZUV2ZW50PWV4cG9ydHMuZ2V0RWxlbWVudEZpcnN0Q2hpbGQ9ZXhwb3J0cy5nZXRFbGVtZW50Q3Vyc29yPWV4cG9ydHMuZ2V0QXV0b2hlaWdodFByb3BlcnR5PWV4cG9ydHMuZ2V0RWxlbWVudERpbWVuc2lvbnM9ZXhwb3J0cy5nZXRJdGVtV2lkdGg9ZXhwb3J0cy5jcmVhdGVEZWZhdWx0VHJhbnNmb3JtYXRpb25TZXQ9ZXhwb3J0cy5jcmVhdGVBdXRvd2lkdGhUcmFuc2Zvcm1hdGlvblNldD1leHBvcnRzLmlzRWxlbWVudD1leHBvcnRzLmNyZWF0ZUNsb25lcz1leHBvcnRzLmdldEl0ZW1zT2Zmc2V0PWV4cG9ydHMuZ2V0SXRlbXNDb3VudD1leHBvcnRzLmdldFNsaWRlcz12b2lkIDAscmVxdWlyZShcIi4vY29tbW9uXCIpKSxtYXBwZXJzXzE9cmVxdWlyZShcIi4vbWFwcGVyc1wiKSxtYXRoXzE9cmVxdWlyZShcIi4vbWF0aFwiKSxnZXRTbGlkZXM9ZnVuY3Rpb24odCl7dmFyIGU9dC5jaGlsZHJlbix0PXQuaXRlbXM7cmV0dXJuIGU/ZS5sZW5ndGg/ZTpbZV06dm9pZCAwPT09dD9bXTp0fSxnZXRJdGVtc0NvdW50PShleHBvcnRzLmdldFNsaWRlcz1nZXRTbGlkZXMsZnVuY3Rpb24odCl7cmV0dXJuKDAsZXhwb3J0cy5nZXRTbGlkZXMpKHQpLmxlbmd0aH0pLGdldEl0ZW1zT2Zmc2V0PShleHBvcnRzLmdldEl0ZW1zQ291bnQ9Z2V0SXRlbXNDb3VudCxmdW5jdGlvbih0KXt2YXIgZT10LmluZmluaXRlLHI9dC5wYWRkaW5nUmlnaHQsdD10LnBhZGRpbmdMZWZ0O3JldHVybiBlJiYodHx8cik/MTowfSksY3JlYXRlQ2xvbmVzPShleHBvcnRzLmdldEl0ZW1zT2Zmc2V0PWdldEl0ZW1zT2Zmc2V0LGZ1bmN0aW9uKHQpe3ZhciBlLHIsbixvLGk9KDAsZXhwb3J0cy5nZXRTbGlkZXMpKHQpO3JldHVybiB0LmluZmluaXRlPyhlPSgwLGV4cG9ydHMuZ2V0SXRlbXNDb3VudCkodCksbz0oMCxleHBvcnRzLmdldEl0ZW1zT2Zmc2V0KSh0KSx0PSgwLGNvbW1vbl8xLmdldEl0ZW1zSW5TbGlkZSkoZSx0KSxuPU1hdGgubWluKHQsZSkrbyxyPWkuc2xpY2UoMCxuKSxuPWkuc2xpY2UoLW4pLG8mJnQ9PT1lJiYobz1pWzBdLHQ9aS5zbGljZSgtMSlbMF0sbi51bnNoaWZ0KHQpLHIucHVzaChvKSksbi5jb25jYXQoaSxyKSk6aX0pLGlzRWxlbWVudD0oZXhwb3J0cy5jcmVhdGVDbG9uZXM9Y3JlYXRlQ2xvbmVzLGZ1bmN0aW9uKHQpe3RyeXtyZXR1cm4gdCBpbnN0YW5jZW9mIEVsZW1lbnR8fHQgaW5zdGFuY2VvZiBIVE1MRG9jdW1lbnR9Y2F0Y2godCl7cmV0dXJuITF9fSksY3JlYXRlQXV0b3dpZHRoVHJhbnNmb3JtYXRpb25TZXQ9KGV4cG9ydHMuaXNFbGVtZW50PWlzRWxlbWVudCxmdW5jdGlvbih0LGksZSl7dm9pZCAwPT09aSYmKGk9MCksdm9pZCAwPT09ZSYmKGU9ITEpO3ZhciBzPTAsYT0hMCxyPVtdO3JldHVybigwLGV4cG9ydHMuaXNFbGVtZW50KSh0KSYmKHI9QXJyYXkuZnJvbSgobnVsbD09dD92b2lkIDA6dC5jaGlsZHJlbil8fFtdKS5yZWR1Y2UoZnVuY3Rpb24odCxlLHIpe3ZhciBuPTAscj1yLTEsbz10W3JdLGU9Z2V0RWxlbWVudERpbWVuc2lvbnMobnVsbD09ZT92b2lkIDA6ZS5maXJzdENoaWxkKS53aWR0aCxlPXZvaWQgMD09PWU/MDplO3JldHVybiBhPShzKz1lKTw9aSxvJiYobj0wPT1yP28ud2lkdGg6by53aWR0aCtvLnBvc2l0aW9uKSx0LnB1c2goe3Bvc2l0aW9uOm4sd2lkdGg6ZX0pLHR9LFtdKSxlfHwocj1hPygwLG1hcHBlcnNfMS5tYXBQYXJ0aWFsQ29vcmRzKShyKToodD1zLWksKDAsbWFwcGVyc18xLm1hcFBvc2l0aW9uQ29vcmRzKShyLHQpKSkpLHtjb29yZHM6cixjb250ZW50OnMscGFydGlhbDphfX0pLGNyZWF0ZURlZmF1bHRUcmFuc2Zvcm1hdGlvblNldD0oZXhwb3J0cy5jcmVhdGVBdXRvd2lkdGhUcmFuc2Zvcm1hdGlvblNldD1jcmVhdGVBdXRvd2lkdGhUcmFuc2Zvcm1hdGlvblNldCxmdW5jdGlvbih0LG8sZSxyKXt2b2lkIDA9PT1yJiYocj0hMSk7dmFyIGk9MCxzPSEwLG49W10sYT0oMCxleHBvcnRzLmdldEl0ZW1XaWR0aCkobyxlKTtyZXR1cm4gbj10LnJlZHVjZShmdW5jdGlvbih0LGUscil7dmFyIG49MCxyPXRbci0xXTtyZXR1cm4gcz0oaSs9YSk8PW8sciYmKG49YStyLnBvc2l0aW9ufHwwKSx0LnB1c2goe3dpZHRoOmEscG9zaXRpb246bn0pLHR9LFtdKSx7Y29vcmRzOm49cj9uOnM/KDAsbWFwcGVyc18xLm1hcFBhcnRpYWxDb29yZHMpKG4pOihlPWktbywoMCxtYXBwZXJzXzEubWFwUG9zaXRpb25Db29yZHMpKG4sZSkpLGNvbnRlbnQ6aSxwYXJ0aWFsOnN9fSksZ2V0SXRlbVdpZHRoPShleHBvcnRzLmNyZWF0ZURlZmF1bHRUcmFuc2Zvcm1hdGlvblNldD1jcmVhdGVEZWZhdWx0VHJhbnNmb3JtYXRpb25TZXQsZnVuY3Rpb24odCxlKXtyZXR1cm4gMDxlP3QvZTp0fSk7ZnVuY3Rpb24gZ2V0RWxlbWVudERpbWVuc2lvbnModCl7cmV0dXJuIHQmJnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0P3t3aWR0aDoodD10LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKS53aWR0aCxoZWlnaHQ6dC5oZWlnaHR9Ont3aWR0aDowLGhlaWdodDowfX1leHBvcnRzLmdldEl0ZW1XaWR0aD1nZXRJdGVtV2lkdGgsZXhwb3J0cy5nZXRFbGVtZW50RGltZW5zaW9ucz1nZXRFbGVtZW50RGltZW5zaW9uczt2YXIgZ2V0QXV0b2hlaWdodFByb3BlcnR5PWZ1bmN0aW9uKHQsZSxyKXt2YXIgZT0oMCxleHBvcnRzLmdldEVsZW1lbnRDdXJzb3IpKGUscikscj0oMCxleHBvcnRzLmdldEVsZW1lbnRGaXJzdENoaWxkKSh0LGUpO2lmKCgwLGV4cG9ydHMuaXNFbGVtZW50KShyKSlyZXR1cm4gdD13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShyKSxlPXBhcnNlRmxvYXQodC5tYXJnaW5Ub3ApLHQ9cGFyc2VGbG9hdCh0Lm1hcmdpbkJvdHRvbSksTWF0aC5jZWlsKHIub2Zmc2V0SGVpZ2h0K2UrdCl9LGdldEVsZW1lbnRDdXJzb3I9KGV4cG9ydHMuZ2V0QXV0b2hlaWdodFByb3BlcnR5PWdldEF1dG9oZWlnaHRQcm9wZXJ0eSxmdW5jdGlvbih0LGUpe3ZhciByPWUuYWN0aXZlSW5kZXgsZT1lLml0ZW1zSW5TbGlkZTtyZXR1cm4gdC5pbmZpbml0ZT9yK2UrKDAsZXhwb3J0cy5nZXRJdGVtc09mZnNldCkodCk6cn0pLGdldEVsZW1lbnRGaXJzdENoaWxkPShleHBvcnRzLmdldEVsZW1lbnRDdXJzb3I9Z2V0RWxlbWVudEN1cnNvcixmdW5jdGlvbih0LGUpe3Q9dCYmdC5jaGlsZHJlbnx8W107cmV0dXJuIHRbZV0mJnRbZV0uZmlyc3RDaGlsZHx8bnVsbH0pO2Z1bmN0aW9uIHNob3VsZEhhbmRsZVJlc2l6ZUV2ZW50KHQsZSxyKXtyZXR1cm4oZT12b2lkIDA9PT1lP3t9OmUpLndpZHRoIT09KHI9dm9pZCAwPT09cj97fTpyKS53aWR0aH1mdW5jdGlvbiBhbmltYXRlKHQsZSl7dmFyIGU9ZXx8e30scj1lLnBvc2l0aW9uLHI9dm9pZCAwPT09cj8wOnIsbj1lLmFuaW1hdGlvbkR1cmF0aW9uLG49dm9pZCAwPT09bj8wOm4sZT1lLmFuaW1hdGlvbkVhc2luZ0Z1bmN0aW9uLGU9dm9pZCAwPT09ZT9cImVhc2VcIjplO3JldHVybiB0JiYoMCxleHBvcnRzLmlzRWxlbWVudCkodCkmJih0LnN0eWxlLnRyYW5zaXRpb249XCJ0cmFuc2Zvcm0gXCIuY29uY2F0KG4sXCJtcyBcIikuY29uY2F0KGUsXCIgMG1zXCIpLHQuc3R5bGUudHJhbnNmb3JtPVwidHJhbnNsYXRlM2QoXCIuY29uY2F0KHIsXCJweCwgMCwgMClcIikpLHR9ZXhwb3J0cy5nZXRFbGVtZW50Rmlyc3RDaGlsZD1nZXRFbGVtZW50Rmlyc3RDaGlsZCxleHBvcnRzLnNob3VsZEhhbmRsZVJlc2l6ZUV2ZW50PXNob3VsZEhhbmRsZVJlc2l6ZUV2ZW50LGV4cG9ydHMuYW5pbWF0ZT1hbmltYXRlO3ZhciBnZXRSZW5kZXJXcmFwcGVyU3R5bGVzPWZ1bmN0aW9uKHQsZSxyKXt2YXIgbj10fHx7fSxvPW4ucGFkZGluZ0xlZnQsaT1uLnBhZGRpbmdSaWdodCxzPW4uYXV0b0hlaWdodCxuPW4uYW5pbWF0aW9uRHVyYXRpb24scz1zPygwLGV4cG9ydHMuZ2V0QXV0b2hlaWdodFByb3BlcnR5KShyLHQsZSk6dm9pZCAwO3JldHVybntoZWlnaHQ6cyx0cmFuc2l0aW9uOnM/XCJoZWlnaHQgXCIuY29uY2F0KG4sXCJtc1wiKTp2b2lkIDAscGFkZGluZ0xlZnQ6XCJcIi5jb25jYXQobyxcInB4XCIpLHBhZGRpbmdSaWdodDpcIlwiLmNvbmNhdChpLFwicHhcIil9fSxnZXRUcmFuc2l0aW9uUHJvcGVydHk9KGV4cG9ydHMuZ2V0UmVuZGVyV3JhcHBlclN0eWxlcz1nZXRSZW5kZXJXcmFwcGVyU3R5bGVzLGZ1bmN0aW9uKHQpe3ZhciB0PXR8fHt9LGU9dC5hbmltYXRpb25EdXJhdGlvbix0PXQuYW5pbWF0aW9uRWFzaW5nRnVuY3Rpb24sdD12b2lkIDA9PT10P1wiZWFzZVwiOnQ7cmV0dXJuXCJ0cmFuc2Zvcm0gXCIuY29uY2F0KHZvaWQgMD09PWU/MDplLFwibXMgXCIpLmNvbmNhdCh0LFwiIDBtc1wiKX0pLGdldFJlbmRlclN0YWdlU3R5bGVzPShleHBvcnRzLmdldFRyYW5zaXRpb25Qcm9wZXJ0eT1nZXRUcmFuc2l0aW9uUHJvcGVydHksZnVuY3Rpb24odCxlKXt0PSh0fHx7fSkudHJhbnNsYXRlM2QsdD1cInRyYW5zbGF0ZTNkKFwiLmNvbmNhdCgtKHZvaWQgMD09PXQ/MDp0KSxcInB4LCAwLCAwKVwiKTtyZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sZSkse3RyYW5zZm9ybTp0fSl9KSxnZXRSZW5kZXJTdGFnZUl0ZW1TdHlsZXM9KGV4cG9ydHMuZ2V0UmVuZGVyU3RhZ2VTdHlsZXM9Z2V0UmVuZGVyU3RhZ2VTdHlsZXMsZnVuY3Rpb24odCxlKXt2YXIgcj1lLnRyYW5zZm9ybWF0aW9uU2V0LG49ZS5mYWRlb3V0QW5pbWF0aW9uSW5kZXgsbz1lLmZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbixpPWUuZmFkZW91dEFuaW1hdGlvblByb2Nlc3NpbmcsZT1lLmFuaW1hdGlvbkR1cmF0aW9uLHI9KHJbdF18fHt9KS53aWR0aDtyZXR1cm4gaSYmbj09PXQ/e3RyYW5zZm9ybTpcInRyYW5zbGF0ZVgoXCIuY29uY2F0KG8sXCJweClcIiksYW5pbWF0aW9uRHVyYXRpb246XCJcIi5jb25jYXQoZSxcIm1zXCIpLHdpZHRoOlwiXCIuY29uY2F0KHIsXCJweFwiKX06e3dpZHRoOnJ9fSksZ2V0VHJhbnNsYXRlM2RQcm9wZXJ0eT0oZXhwb3J0cy5nZXRSZW5kZXJTdGFnZUl0ZW1TdHlsZXM9Z2V0UmVuZGVyU3RhZ2VJdGVtU3R5bGVzLGZ1bmN0aW9uKHQsZSl7dmFyIHI9dCxuPWUuaW5maW5pdGUsbz1lLml0ZW1zT2Zmc2V0LGk9ZS5pdGVtc0luU2xpZGUsZT1lLnRyYW5zZm9ybWF0aW9uU2V0O3JldHVybigodm9pZCAwPT09ZT9bXTplKVtyPW4/dCsoMCxtYXRoXzEuZ2V0U2hpZnRJbmRleCkodm9pZCAwPT09aT8wOmksdm9pZCAwPT09bz8wOm8pOnJdfHx7fSkucG9zaXRpb258fDB9KSxnZXRUb3VjaG1vdmVUcmFuc2xhdGVQb3NpdGlvbj0oZXhwb3J0cy5nZXRUcmFuc2xhdGUzZFByb3BlcnR5PWdldFRyYW5zbGF0ZTNkUHJvcGVydHksZnVuY3Rpb24odCxlKXtyZXR1cm4tKGUtTWF0aC5mbG9vcih0KSl9KTtmdW5jdGlvbiBnZXRUcmFuc2xhdGVYUHJvcGVydHkodCl7dD1nZXRUcmFuc2Zvcm1NYXRyaXgodCksdD10JiZ0WzRdfHxcIlwiO3JldHVybiBOdW1iZXIodCl9ZnVuY3Rpb24gZ2V0VHJhbnNmb3JtTWF0cml4KHQpe3JldHVybiB0JiYoMCxleHBvcnRzLmlzRWxlbWVudCkodCkmJndpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHQpLnRyYW5zZm9ybS5tYXRjaCgvKC0/WzAtOS5dKykvZyl8fFtdfWV4cG9ydHMuZ2V0VG91Y2htb3ZlVHJhbnNsYXRlUG9zaXRpb249Z2V0VG91Y2htb3ZlVHJhbnNsYXRlUG9zaXRpb24sZXhwb3J0cy5nZXRUcmFuc2xhdGVYUHJvcGVydHk9Z2V0VHJhbnNsYXRlWFByb3BlcnR5LGV4cG9ydHMuZ2V0VHJhbnNmb3JtTWF0cml4PWdldFRyYW5zZm9ybU1hdHJpeDsiLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLmNhbGN1bGF0ZUluaXRpYWxTdGF0ZT1leHBvcnRzLmdldEl0ZW1zSW5TbGlkZT1leHBvcnRzLmdldElzU3RhZ2VDb250ZW50UGFydGlhbD1leHBvcnRzLmNvbmNhdENsYXNzbmFtZXM9ZXhwb3J0cy5jYW5Vc2VET009dm9pZCAwO3ZhciBlbGVtZW50c18xPXJlcXVpcmUoXCIuL2VsZW1lbnRzXCIpLG1hdGhfMT1yZXF1aXJlKFwiLi9tYXRoXCIpLGNhblVzZURPTT1mdW5jdGlvbigpe3ZhciB0O3RyeXtyZXR1cm4gQm9vbGVhbihudWxsPT0odD1udWxsPT09d2luZG93fHx2b2lkIDA9PT13aW5kb3c/dm9pZCAwOndpbmRvdy5kb2N1bWVudCk/dm9pZCAwOnQuY3JlYXRlRWxlbWVudCl9Y2F0Y2godCl7cmV0dXJuITF9fSxjb25jYXRDbGFzc25hbWVzPShleHBvcnRzLmNhblVzZURPTT1jYW5Vc2VET00sZnVuY3Rpb24oKXtmb3IodmFyIHQ9W10sZT0wO2U8YXJndW1lbnRzLmxlbmd0aDtlKyspdFtlXT1hcmd1bWVudHNbZV07cmV0dXJuIHQuZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpfSksZ2V0SXNTdGFnZUNvbnRlbnRQYXJ0aWFsPShleHBvcnRzLmNvbmNhdENsYXNzbmFtZXM9Y29uY2F0Q2xhc3NuYW1lcyxmdW5jdGlvbih0LGUsbil7cmV0dXJuIHZvaWQgMD09PWUmJihlPTApLHZvaWQgMD09PW4mJihuPTApLCEodD12b2lkIDAhPT10JiZ0KSYmbjw9ZX0pLGdldEl0ZW1zSW5TbGlkZT0oZXhwb3J0cy5nZXRJc1N0YWdlQ29udGVudFBhcnRpYWw9Z2V0SXNTdGFnZUNvbnRlbnRQYXJ0aWFsLGZ1bmN0aW9uKG4sdCl7dmFyIGksYT0xLG89dC5yZXNwb25zaXZlLGU9dC5hdXRvV2lkdGgscz10LmluZmluaXRlLHQ9dC5pbm5lcldpZHRoO3JldHVybiB2b2lkIDAhPT1lJiZlP3ZvaWQgMCE9PXMmJnM/bjphOihvJiYoZT1PYmplY3Qua2V5cyhvKSkubGVuZ3RoJiYodHx8KDAsZXhwb3J0cy5jYW5Vc2VET00pKCkpJiYoaT12b2lkIDA9PT10P3dpbmRvdy5pbm5lcldpZHRoOnQsZS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3ZhciBlO051bWJlcih0KTw9aSYmKGU9KHQ9b1t0XSkuaXRlbXMsdD10Lml0ZW1zRml0LGE9XCJjb250YWluXCI9PT0odm9pZCAwPT09dD9cImZpbGxcIjp0KT9lOk1hdGgubWluKGUsbikpfSkpLGF8fDEpfSksY2FsY3VsYXRlSW5pdGlhbFN0YXRlPShleHBvcnRzLmdldEl0ZW1zSW5TbGlkZT1nZXRJdGVtc0luU2xpZGUsZnVuY3Rpb24odCxlLG4pe3ZvaWQgMD09PW4mJihuPSExKTt2YXIgaSxhLG89dC5hbmltYXRpb25EdXJhdGlvbixvPXZvaWQgMD09PW8/MDpvLHM9dC5pbmZpbml0ZSxzPXZvaWQgMCE9PXMmJnMscj10LmF1dG9QbGF5LHI9dm9pZCAwIT09ciYmcixsPXQuYXV0b1dpZHRoLGw9dm9pZCAwIT09bCYmbCxtPSgwLGVsZW1lbnRzXzEuY3JlYXRlQ2xvbmVzKSh0KSxkPSgwLGVsZW1lbnRzXzEuZ2V0VHJhbnNpdGlvblByb3BlcnR5KSgpLGM9KDAsZWxlbWVudHNfMS5nZXRJdGVtc0NvdW50KSh0KSx1PSgwLGVsZW1lbnRzXzEuZ2V0SXRlbXNPZmZzZXQpKHQpLGY9KDAsZXhwb3J0cy5nZXRJdGVtc0luU2xpZGUpKGMsdCksZz0oMCxtYXRoXzEuZ2V0U3RhcnRJbmRleCkodC5hY3RpdmVJbmRleCxjKSxnPSgwLG1hdGhfMS5nZXRBY3RpdmVJbmRleCkoe3N0YXJ0SW5kZXg6ZyxpdGVtc0NvdW50OmMsaW5maW5pdGU6c30pLEk9KDAsZWxlbWVudHNfMS5nZXRFbGVtZW50RGltZW5zaW9ucykoZSkud2lkdGgsUz0oYT0oZT0obD8oaT0oZT0oMCxlbGVtZW50c18xLmNyZWF0ZUF1dG93aWR0aFRyYW5zZm9ybWF0aW9uU2V0KShlLEkscykpLmNvb3JkcyxhPWUuY29udGVudCxlKTooaT0oZT0oMCxlbGVtZW50c18xLmNyZWF0ZURlZmF1bHRUcmFuc2Zvcm1hdGlvblNldCkobSxJLGYscykpLmNvb3JkcyxhPWUuY29udGVudCxlKSkucGFydGlhbCxhKSwoMCxtYXRoXzEuZ2V0SXRlbUNvb3JkcykoLWYsaT1pKS5wb3NpdGlvbikscD0oMCxtYXRoXzEuZ2V0U3dpcGVMaW1pdE1pbikoe2l0ZW1zT2Zmc2V0OnUsdHJhbnNmb3JtYXRpb25TZXQ6aX0sdCksdD0oMCxtYXRoXzEuZ2V0U3dpcGVMaW1pdE1heCkoe2l0ZW1zQ291bnQ6YyxpdGVtc09mZnNldDp1LGl0ZW1zSW5TbGlkZTpmLHRyYW5zZm9ybWF0aW9uU2V0Oml9LHQpLHY9KDAsbWF0aF8xLmdldFN3aXBlU2hpZnRWYWx1ZSkoYyxpKTtyZXR1cm57YWN0aXZlSW5kZXg6ZyxhdXRvV2lkdGg6bCxhbmltYXRpb25EdXJhdGlvbjpvLGNsb25lczptLGluZmluaXRlOnMsaXRlbXNDb3VudDpjLGl0ZW1zSW5TbGlkZTpmLGl0ZW1zT2Zmc2V0OnUsdHJhbnNsYXRlM2Q6KDAsZWxlbWVudHNfMS5nZXRUcmFuc2xhdGUzZFByb3BlcnR5KShnLHtpdGVtc0luU2xpZGU6ZixpdGVtc09mZnNldDp1LHRyYW5zZm9ybWF0aW9uU2V0OmksYXV0b1dpZHRoOmwsaW5maW5pdGU6c30pLHN0YWdlV2lkdGg6SSxzdGFnZUNvbnRlbnRXaWR0aDphLGluaXRpYWxTdGFnZUhlaWdodDowLGlzU3RhZ2VDb250ZW50UGFydGlhbDplLGlzQXV0b1BsYXlpbmc6Qm9vbGVhbihyKSxpc0F1dG9QbGF5Q2FuY2VsZWRPbkFjdGlvbjohMSx0cmFuc2Zvcm1hdGlvblNldDppLHRyYW5zaXRpb246ZCxmYWRlb3V0QW5pbWF0aW9uSW5kZXg6bnVsbCxmYWRlb3V0QW5pbWF0aW9uUG9zaXRpb246bnVsbCxmYWRlb3V0QW5pbWF0aW9uUHJvY2Vzc2luZzohMSxzd2lwZUxpbWl0TWluOnAsc3dpcGVMaW1pdE1heDp0LHN3aXBlQWxsb3dlZFBvc2l0aW9uTWF4OlMsc3dpcGVTaGlmdFZhbHVlOnYsY2FuVXNlRG9tOm58fCgwLGV4cG9ydHMuY2FuVXNlRE9NKSgpfX0pO2V4cG9ydHMuY2FsY3VsYXRlSW5pdGlhbFN0YXRlPWNhbGN1bGF0ZUluaXRpYWxTdGF0ZTsiLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLmlzQ2xvbmVkSXRlbT1leHBvcnRzLmlzVGFyZ2V0SXRlbT1leHBvcnRzLmlzQWN0aXZlSXRlbT1leHBvcnRzLmdldFJlbmRlclN0YWdlSXRlbUNsYXNzZXM9dm9pZCAwO3ZhciB0eXBlc18xPXJlcXVpcmUoXCIuLi90eXBlc1wiKSxjb21tb25fMT1yZXF1aXJlKFwiLi9jb21tb25cIiksbWF0aF8xPXJlcXVpcmUoXCIuL21hdGhcIiksZ2V0UmVuZGVyU3RhZ2VJdGVtQ2xhc3Nlcz1mdW5jdGlvbihlLHQpe3ZvaWQgMD09PWUmJihlPTApO3ZhciBzPXQuZmFkZW91dEFuaW1hdGlvbkluZGV4LGk9KDAsZXhwb3J0cy5pc0FjdGl2ZUl0ZW0pKGUsdCk/dHlwZXNfMS5Nb2RpZmllcnMuQUNUSVZFOlwiXCIsbj0oMCxleHBvcnRzLmlzQ2xvbmVkSXRlbSkoZSx0KT90eXBlc18xLk1vZGlmaWVycy5DTE9ORUQ6XCJcIix0PSgwLGV4cG9ydHMuaXNUYXJnZXRJdGVtKShlLHQpP3R5cGVzXzEuTW9kaWZpZXJzLlRBUkdFVDpcIlwiLGU9ZT09PXM/dHlwZXNfMS5DbGFzc25hbWVzLkFOSU1BVEVEOlwiXCI7cmV0dXJuKDAsY29tbW9uXzEuY29uY2F0Q2xhc3NuYW1lcykodHlwZXNfMS5DbGFzc25hbWVzLlNUQUdFX0lURU0saSxuLHQsZSl9LGlzQWN0aXZlSXRlbT0oZXhwb3J0cy5nZXRSZW5kZXJTdGFnZUl0ZW1DbGFzc2VzPWdldFJlbmRlclN0YWdlSXRlbUNsYXNzZXMsZnVuY3Rpb24oZSx0KXt2b2lkIDA9PT1lJiYoZT0wKTt2YXIgcz10LmFjdGl2ZUluZGV4LGk9dC5pdGVtc0luU2xpZGUsbj10Lml0ZW1zT2Zmc2V0LHI9dC5pbmZpbml0ZSx0PXQuYXV0b1dpZHRoLG89KDAsbWF0aF8xLmdldFNoaWZ0SW5kZXgpKGksbik7cmV0dXJuIHQmJnI/ZS1vPT09cytuOih0PXMrbyxyP3Q8PWUmJmU8dCtpOnM8PWUmJmU8dCl9KSxpc1RhcmdldEl0ZW09KGV4cG9ydHMuaXNBY3RpdmVJdGVtPWlzQWN0aXZlSXRlbSxmdW5jdGlvbihlLHQpe3ZvaWQgMD09PWUmJihlPTApO3ZhciBzPXQuYWN0aXZlSW5kZXgsaT10Lml0ZW1zSW5TbGlkZSxuPXQuaXRlbXNPZmZzZXQscj10LmluZmluaXRlLHQ9dC5hdXRvV2lkdGgsaT0oMCxtYXRoXzEuZ2V0U2hpZnRJbmRleCkoaSxuKTtyZXR1cm4gcj90JiZyP2UtaT09PXMrbjplPT09cytpOmU9PT1zfSksaXNDbG9uZWRJdGVtPShleHBvcnRzLmlzVGFyZ2V0SXRlbT1pc1RhcmdldEl0ZW0sZnVuY3Rpb24oZSx0KXt2b2lkIDA9PT1lJiYoZT0wKTt2YXIgcz10Lml0ZW1zSW5TbGlkZSxpPXQuaXRlbXNPZmZzZXQsbj10Lml0ZW1zQ291bnQscj10LmluZmluaXRlLHQ9dC5hdXRvV2lkdGg7cmV0dXJuISFyJiYodCYmcj9lPHN8fG4tMStzPGU6ZTwodD0oMCxtYXRoXzEuZ2V0U2hpZnRJbmRleCkocyxpKSl8fG4tMSt0PGUpfSk7ZXhwb3J0cy5pc0Nsb25lZEl0ZW09aXNDbG9uZWRJdGVtOyIsIlwidXNlIHN0cmljdFwiO2Z1bmN0aW9uIGRlYm91bmNlKG4saSl7dm9pZCAwPT09aSYmKGk9MCk7ZnVuY3Rpb24gdSgpe2QmJihjbGVhclRpbWVvdXQoZCksZD12b2lkIDApfXZhciBkPXZvaWQgMDtyZXR1cm5bZnVuY3Rpb24oKXtmb3IodmFyIGU9dGhpcyxvPVtdLHQ9MDt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKW9bdF09YXJndW1lbnRzW3RdO3UoKSxkPXdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bi5hcHBseShlLG8pLGQ9dm9pZCAwfSxpKX0sdV19T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZXhwb3J0cy5kZWJvdW5jZT12b2lkIDAsZXhwb3J0cy5kZWJvdW5jZT1kZWJvdW5jZTsiLCJcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBkZWJ1Zygpe2Zvcih2YXIgZT1bXSxvPTA7bzxhcmd1bWVudHMubGVuZ3RoO28rKyllW29dPWFyZ3VtZW50c1tvXTtcImRldmVsb3BtZW50XCI9PT1wcm9jZXNzLmVudi5OT0RFX0VOViYmY29uc29sZS5kZWJ1Zy5hcHBseShjb25zb2xlLGUpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGV4cG9ydHMuZGVidWc9dm9pZCAwLGV4cG9ydHMuZGVidWc9ZGVidWc7IiwiXCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZXhwb3J0cy5nZXRTbGlkZUl0ZW1JbmZvPWV4cG9ydHMuZ2V0U2xpZGVJbmZvPWV4cG9ydHMuZ2V0U2xpZGVJbmRleEZvck11bHRpcGxlSXRlbXM9ZXhwb3J0cy5nZXRTbGlkZUluZGV4Rm9yTm9uTXVsdGlwbGVJdGVtcz1leHBvcnRzLmdldEFjdGl2ZVNsaWRlRG90c0xlbmd0aD1leHBvcnRzLmdldEFjdGl2ZVNsaWRlSW5kZXg9dm9pZCAwO3ZhciBnZXRBY3RpdmVTbGlkZUluZGV4PWZ1bmN0aW9uKGUsdCl7dmFyIHQ9dHx8e30saT10LmFjdGl2ZUluZGV4LG89dC5pdGVtc0luU2xpZGUsdD10Lml0ZW1zQ291bnQsaT1pK287cmV0dXJuIDE9PT1vPygwLGV4cG9ydHMuZ2V0U2xpZGVJbmRleEZvck5vbk11bHRpcGxlSXRlbXMpKGksbyx0KTooMCxleHBvcnRzLmdldFNsaWRlSW5kZXhGb3JNdWx0aXBsZUl0ZW1zKShpLG8sdCxlKX0sZ2V0QWN0aXZlU2xpZGVEb3RzTGVuZ3RoPShleHBvcnRzLmdldEFjdGl2ZVNsaWRlSW5kZXg9Z2V0QWN0aXZlU2xpZGVJbmRleCxmdW5jdGlvbihlLHQpe3ZhciBpO3JldHVybiB2b2lkIDA9PT10JiYodD0xKSwoZT12b2lkIDA9PT1lPzA6ZSkmJnQ/KGk9TWF0aC5mbG9vcihlL3QpLGUldD09MD9pLTE6aSk6MH0pLGdldFNsaWRlSW5kZXhGb3JOb25NdWx0aXBsZUl0ZW1zPShleHBvcnRzLmdldEFjdGl2ZVNsaWRlRG90c0xlbmd0aD1nZXRBY3RpdmVTbGlkZURvdHNMZW5ndGgsZnVuY3Rpb24oZSx0LGkpe3JldHVybiBlPHQ/aS10Omk8ZT8wOmUtMX0pLGdldFNsaWRlSW5kZXhGb3JNdWx0aXBsZUl0ZW1zPShleHBvcnRzLmdldFNsaWRlSW5kZXhGb3JOb25NdWx0aXBsZUl0ZW1zPWdldFNsaWRlSW5kZXhGb3JOb25NdWx0aXBsZUl0ZW1zLGZ1bmN0aW9uKGUsdCxpLG8pe3ZhciBsPSgwLGV4cG9ydHMuZ2V0QWN0aXZlU2xpZGVEb3RzTGVuZ3RoKShpLHQpO3JldHVybiBlPT09aSt0PzA6b3x8ZTx0JiYwIT09ZT9sOjA9PT1lP2kldD09MD9sOmwtMTowPHQ/TWF0aC5mbG9vcihlL3QpLTE6MH0pLGdldFNsaWRlSW5mbz0oZXhwb3J0cy5nZXRTbGlkZUluZGV4Rm9yTXVsdGlwbGVJdGVtcz1nZXRTbGlkZUluZGV4Rm9yTXVsdGlwbGVJdGVtcyxmdW5jdGlvbihlLHQpe3ZvaWQgMD09PXQmJih0PTApO2U9KGU9dm9pZCAwPT09ZT8wOmUpKzE7cmV0dXJuIGU8MT9lPXQ6dDxlJiYoZT0xKSx7aXRlbTplLGl0ZW1zQ291bnQ6dH19KSxnZXRTbGlkZUl0ZW1JbmZvPShleHBvcnRzLmdldFNsaWRlSW5mbz1nZXRTbGlkZUluZm8sZnVuY3Rpb24oZSl7dmFyIGU9ZXx8e30sdD1lLml0ZW1zSW5TbGlkZSxpPWUuYWN0aXZlSW5kZXgsbz1lLmluZmluaXRlLGw9ZS5pdGVtc0NvdW50O3JldHVybiBlLmlzU3RhZ2VDb250ZW50UGFydGlhbD97aXNQcmV2U2xpZGVEaXNhYmxlZDohMCxpc05leHRTbGlkZURpc2FibGVkOiEwfTp7aXNQcmV2U2xpZGVEaXNhYmxlZDohMT09PW8mJjA9PT1pLGlzTmV4dFNsaWRlRGlzYWJsZWQ6ITE9PT1vJiZsLXQ8PWl9fSk7ZXhwb3J0cy5nZXRTbGlkZUl0ZW1JbmZvPWdldFNsaWRlSXRlbUluZm87IiwiXCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZXhwb3J0cy5zaG91bGRDYW5jZWxBdXRvUGxheU9uSG92ZXI9ZXhwb3J0cy5zaG91bGRDYW5jZWxBdXRvUGxheU9uQWN0aW9uPWV4cG9ydHMuZ2V0SXRlbUluZGV4Rm9yRG90TmF2aWdhdGlvbj1leHBvcnRzLmNoZWNrSXNUaGVMYXN0RG90SW5kZXg9ZXhwb3J0cy5nZXREb3RzTmF2aWdhdGlvbkxlbmd0aD1leHBvcnRzLmhhc0RvdEZvckVhY2hTbGlkZT1leHBvcnRzLmlzU3RyYXRlZ3k9ZXhwb3J0cy5zaG91bGREaXNhYmxlQnV0dG9ucz1leHBvcnRzLnNob3VsZERpc2FibGVEb3RzPWV4cG9ydHMuc2hvdWxkRGlzYWJsZUNvbnRyb2xzPXZvaWQgMDt2YXIgdHlwZXNfMT1yZXF1aXJlKFwiLi4vdHlwZXNcIik7ZnVuY3Rpb24gc2hvdWxkRGlzYWJsZUNvbnRyb2xzKHQsbyl7dmFyIHQ9KHR8fHt9KS5jb250cm9sc1N0cmF0ZWd5LG89b3x8e30sZT1vLml0ZW1zSW5TbGlkZSxzPW8uaXRlbXNDb3VudCxvPW8uYXV0b1dpZHRoO2lmKCgwLGV4cG9ydHMuaXNTdHJhdGVneSkodCx0eXBlc18xLkNvbnRyb2xzU3RyYXRlZ3kuUkVTUE9OU0lWRSkpcmV0dXJuIW8mJmU9PT1zfWZ1bmN0aW9uIHNob3VsZERpc2FibGVEb3RzKHQsbyl7cmV0dXJuIHQuZGlzYWJsZURvdHNDb250cm9sc3x8c2hvdWxkRGlzYWJsZUNvbnRyb2xzKHQsbyl9ZnVuY3Rpb24gc2hvdWxkRGlzYWJsZUJ1dHRvbnModCxvKXtyZXR1cm4gdC5kaXNhYmxlQnV0dG9uc0NvbnRyb2xzfHwhdC5pbmZpbml0ZSYmc2hvdWxkRGlzYWJsZUNvbnRyb2xzKHQsbyl9ZXhwb3J0cy5zaG91bGREaXNhYmxlQ29udHJvbHM9c2hvdWxkRGlzYWJsZUNvbnRyb2xzLGV4cG9ydHMuc2hvdWxkRGlzYWJsZURvdHM9c2hvdWxkRGlzYWJsZURvdHMsZXhwb3J0cy5zaG91bGREaXNhYmxlQnV0dG9ucz1zaG91bGREaXNhYmxlQnV0dG9uczt2YXIgaXNTdHJhdGVneT1mdW5jdGlvbih0LG8pe3JldHVybiB2b2lkIDA9PT10JiYodD1cIlwiKSx2b2lkIDA9PT1vJiYobz1cIlwiKSxCb29sZWFuKHQmJnQuaW5jbHVkZXMobykpfSxoYXNEb3RGb3JFYWNoU2xpZGU9KGV4cG9ydHMuaXNTdHJhdGVneT1pc1N0cmF0ZWd5LGZ1bmN0aW9uKHQsbyl7cmV0dXJuIHR8fCgwLGV4cG9ydHMuaXNTdHJhdGVneSkobyx0eXBlc18xLkNvbnRyb2xzU3RyYXRlZ3kuQUxURVJOQVRFKX0pLGdldERvdHNOYXZpZ2F0aW9uTGVuZ3RoPShleHBvcnRzLmhhc0RvdEZvckVhY2hTbGlkZT1oYXNEb3RGb3JFYWNoU2xpZGUsZnVuY3Rpb24odCxvLGUpe3JldHVybiB2b2lkIDA9PT10JiYodD0wKSx2b2lkIDA9PT1vJiYobz0xKSwoZT12b2lkIDAhPT1lJiZlKT90OjAhPT1OdW1iZXIobykmJk1hdGguY2VpbCh0L28pfHwwfSksY2hlY2tJc1RoZUxhc3REb3RJbmRleD0oZXhwb3J0cy5nZXREb3RzTmF2aWdhdGlvbkxlbmd0aD1nZXREb3RzTmF2aWdhdGlvbkxlbmd0aCxmdW5jdGlvbih0LG8sZSl7cmV0dXJuIW8mJnQ9PT1lLTF9KSxnZXRJdGVtSW5kZXhGb3JEb3ROYXZpZ2F0aW9uPShleHBvcnRzLmNoZWNrSXNUaGVMYXN0RG90SW5kZXg9Y2hlY2tJc1RoZUxhc3REb3RJbmRleCxmdW5jdGlvbih0LG8sZSxzKXtyZXR1cm4obz9lLXM6dCpzKXx8MH0pLHNob3VsZENhbmNlbEF1dG9QbGF5T25BY3Rpb249KGV4cG9ydHMuZ2V0SXRlbUluZGV4Rm9yRG90TmF2aWdhdGlvbj1nZXRJdGVtSW5kZXhGb3JEb3ROYXZpZ2F0aW9uLGZ1bmN0aW9uKHQpe3JldHVybih0PXZvaWQgMD09PXQ/XCJcIjp0KT09PXR5cGVzXzEuQXV0b1BsYXlTdHJhdGVneS5BQ1RJT058fHQ9PT10eXBlc18xLkF1dG9QbGF5U3RyYXRlZ3kuQUxMfSksc2hvdWxkQ2FuY2VsQXV0b1BsYXlPbkhvdmVyPShleHBvcnRzLnNob3VsZENhbmNlbEF1dG9QbGF5T25BY3Rpb249c2hvdWxkQ2FuY2VsQXV0b1BsYXlPbkFjdGlvbixmdW5jdGlvbih0KXtyZXR1cm4odD12b2lkIDA9PT10P1wiXCI6dCk9PT10eXBlc18xLkF1dG9QbGF5U3RyYXRlZ3kuREVGQVVMVHx8dD09PXR5cGVzXzEuQXV0b1BsYXlTdHJhdGVneS5BTEx9KTtleHBvcnRzLnNob3VsZENhbmNlbEF1dG9QbGF5T25Ib3Zlcj1zaG91bGRDYW5jZWxBdXRvUGxheU9uSG92ZXI7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9fY3JlYXRlQmluZGluZz1PYmplY3QuY3JlYXRlP2Z1bmN0aW9uKGUscix0LG8pe3ZvaWQgMD09PW8mJihvPXQpO3ZhciBwPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iocix0KTtwJiYoXCJnZXRcImluIHA/ci5fX2VzTW9kdWxlOiFwLndyaXRhYmxlJiYhcC5jb25maWd1cmFibGUpfHwocD17ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gclt0XX19KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxvLHApfTpmdW5jdGlvbihlLHIsdCxvKXtlW289dm9pZCAwPT09bz90Om9dPXJbdF19LF9fZXhwb3J0U3Rhcj1mdW5jdGlvbihlLHIpe2Zvcih2YXIgdCBpbiBlKVwiZGVmYXVsdFwiPT09dHx8T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHIsdCl8fF9fY3JlYXRlQmluZGluZyhyLGUsdCl9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLF9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9jb21tb25cIiksZXhwb3J0cyksX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2VsZW1lbnRzXCIpLGV4cG9ydHMpLF9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9jbGFzc25hbWVzXCIpLGV4cG9ydHMpLF9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi90aW1lcnNcIiksZXhwb3J0cyksX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL21hdGhcIiksZXhwb3J0cyksX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2RlYnVnXCIpLGV4cG9ydHMpLF9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9yZW5kZXJcIiksZXhwb3J0cyksX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2NvbnRyb2xzXCIpLGV4cG9ydHMpLF9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9tYXBwZXJzXCIpLGV4cG9ydHMpOyIsIlwidXNlIHN0cmljdFwiO3ZhciBfX2ltcG9ydERlZmF1bHQ9ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fSxyZWFjdF8xPShPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLlNsaWRlSW5mbz12b2lkIDAsX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSkpLHR5cGVzXzE9cmVxdWlyZShcIi4uL3R5cGVzXCIpLHV0aWxzXzE9cmVxdWlyZShcIi4uL3V0aWxzXCIpLFNsaWRlSW5mbz1mdW5jdGlvbihlKXt2YXIgdD1lLmFjdGl2ZUluZGV4LHM9ZS5pdGVtc0NvdW50LGU9ZS5yZW5kZXJTbGlkZUluZm8sdD0oMCx1dGlsc18xLmdldFNsaWRlSW5mbykodCxzKS5pdGVtO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGU/cmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOnR5cGVzXzEuQ2xhc3NuYW1lcy5TTElERV9JTkZPfSxlKHtpdGVtOnQsaXRlbXNDb3VudDpzfSkpOihlPSgwLHV0aWxzXzEuY29uY2F0Q2xhc3NuYW1lcykodHlwZXNfMS5DbGFzc25hbWVzLlNMSURFX0lORk9fSVRFTSx0eXBlc18xLk1vZGlmaWVycy5TRVBBUkFUT1IpLHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTp0eXBlc18xLkNsYXNzbmFtZXMuU0xJREVfSU5GT30scmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIse2NsYXNzTmFtZTp0eXBlc18xLkNsYXNzbmFtZXMuU0xJREVfSU5GT19JVEVNfSx0KSxyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNwYW5cIix7Y2xhc3NOYW1lOmV9LFwiL1wiKSxyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNwYW5cIix7Y2xhc3NOYW1lOnR5cGVzXzEuQ2xhc3NuYW1lcy5TTElERV9JTkZPX0lURU19LHMpKSl9O2V4cG9ydHMuU2xpZGVJbmZvPVNsaWRlSW5mbzsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX19pbXBvcnREZWZhdWx0PWZ1bmN0aW9uKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX0scmVhY3RfMT0oT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZXhwb3J0cy5TdGFnZUl0ZW09dm9pZCAwLF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpKSxTdGFnZUl0ZW09ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5pdGVtLHI9ZS5jbGFzc05hbWUsZT1lLnN0eWxlcztyZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLHtzdHlsZTplLGNsYXNzTmFtZTpyfSx0KX07ZXhwb3J0cy5TdGFnZUl0ZW09U3RhZ2VJdGVtOyIsIlwidXNlIHN0cmljdFwiO3ZhciBfX2ltcG9ydERlZmF1bHQ9ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fSxyZWFjdF8xPShPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLkRvdHNOYXZpZ2F0aW9uPXZvaWQgMCxfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKSksdHlwZXNfMT1yZXF1aXJlKFwiLi4vdHlwZXNcIiksdXRpbHNfMT1yZXF1aXJlKFwiLi4vdXRpbHNcIiksRG90c05hdmlnYXRpb249ZnVuY3Rpb24oZSl7dmFyIGE9ZS5zdGF0ZSxuPWUub25DbGljayxyPWUub25Nb3VzZUVudGVyLGw9ZS5vbk1vdXNlTGVhdmUsdD1lLmNvbnRyb2xzU3RyYXRlZ3ksdT1lLnJlbmRlckRvdHNJdGVtLGM9YS5pdGVtc0NvdW50LF89YS5pdGVtc0luU2xpZGUsZD1hLmluZmluaXRlLGU9YS5hdXRvV2lkdGgsbT1hLmFjdGl2ZUluZGV4LHY9KDAsdXRpbHNfMS5nZXRTbGlkZUl0ZW1JbmZvKShhKS5pc05leHRTbGlkZURpc2FibGVkLGY9KDAsdXRpbHNfMS5oYXNEb3RGb3JFYWNoU2xpZGUpKGUsdCksRD0oMCx1dGlsc18xLmdldERvdHNOYXZpZ2F0aW9uTGVuZ3RoKShjLF8sZik7cmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwidWxcIix7Y2xhc3NOYW1lOnR5cGVzXzEuQ2xhc3NuYW1lcy5ET1RTfSxBcnJheS5mcm9tKHtsZW5ndGg6Y30pLm1hcChmdW5jdGlvbihlLHQpe3ZhciBpLHMsbztpZih0PEQpcmV0dXJuIHM9KDAsdXRpbHNfMS5jaGVja0lzVGhlTGFzdERvdEluZGV4KSh0LEJvb2xlYW4oZCksRCksaT0oMCx1dGlsc18xLmdldEl0ZW1JbmRleEZvckRvdE5hdmlnYXRpb24pKHQscyxjLF8pLHM9KDAsdXRpbHNfMS5nZXRBY3RpdmVTbGlkZUluZGV4KSh2LGEpLGYmJigocz1tKTwwP3M9Yy0xOmM8PW0mJihzPTApLGk9dCkscz1zPT09dD90eXBlc18xLk1vZGlmaWVycy5BQ1RJVkU6XCJcIixvPXU/dHlwZXNfMS5Nb2RpZmllcnMuQ1VTVE9NOlwiXCIsbz0oMCx1dGlsc18xLmNvbmNhdENsYXNzbmFtZXMpKHR5cGVzXzEuQ2xhc3NuYW1lcy5ET1RTX0lURU0scyxvKSxyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpXCIse2tleTpcImRvdC1pdGVtLVwiLmNvbmNhdCh0KSxvbk1vdXNlRW50ZXI6cixvbk1vdXNlTGVhdmU6bCxvbkNsaWNrOmZ1bmN0aW9uKCl7cmV0dXJuIG4oaSl9LGNsYXNzTmFtZTpvfSx1JiZ1KHtpc0FjdGl2ZTpCb29sZWFuKHMpLGFjdGl2ZUluZGV4OnR9KSl9KSl9O2V4cG9ydHMuRG90c05hdmlnYXRpb249RG90c05hdmlnYXRpb247IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9faW1wb3J0RGVmYXVsdD1mdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19LHJlYWN0XzE9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGV4cG9ydHMuUGxheVBhdXNlQnV0dG9uPXZvaWQgMCxfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKSksdHlwZXNfMT1yZXF1aXJlKFwiLi4vdHlwZXNcIiksdXRpbHNfMT1yZXF1aXJlKFwiLi4vdXRpbHNcIiksUGxheVBhdXNlQnV0dG9uPWZ1bmN0aW9uKGUpe3ZhciB0PWUuaXNQbGF5aW5nLGE9ZS5vbkNsaWNrLGU9ZS5yZW5kZXJQbGF5UGF1c2VCdXR0b247cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgZT9yZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6dHlwZXNfMS5DbGFzc25hbWVzLlBMQVlfQlROLG9uQ2xpY2s6YX0sZSh7aXNQbGF5aW5nOnR9KSk6KGU9dD90eXBlc18xLk1vZGlmaWVycy5QQVVTRTpcIlwiLHQ9KDAsdXRpbHNfMS5jb25jYXRDbGFzc25hbWVzKSh0eXBlc18xLkNsYXNzbmFtZXMuUExBWV9CVE5fSVRFTSxlKSxyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6dHlwZXNfMS5DbGFzc25hbWVzLlBMQVlfQlROfSxyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6dHlwZXNfMS5DbGFzc25hbWVzLlBMQVlfQlROX1dSQVBQRVJ9LHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse29uQ2xpY2s6YSxjbGFzc05hbWU6dH0pKSkpfTtleHBvcnRzLlBsYXlQYXVzZUJ1dHRvbj1QbGF5UGF1c2VCdXR0b247IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9faW1wb3J0RGVmYXVsdD1mdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19LHJlYWN0XzE9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGV4cG9ydHMuUHJldk5leHRCdXR0b249dm9pZCAwLF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpKSx0eXBlc18xPXJlcXVpcmUoXCIuLi90eXBlc1wiKSx1dGlsc18xPXJlcXVpcmUoXCIuLi91dGlsc1wiKSxQcmV2TmV4dEJ1dHRvbj1mdW5jdGlvbihlKXt2YXIgdCxzPWUubmFtZSxhPWUuaXNEaXNhYmxlZCxyPWUub25DbGljayxuPWUucmVuZGVyUHJldkJ1dHRvbixlPWUucmVuZGVyTmV4dEJ1dHRvbjtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuP3JlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTp0eXBlc18xLkNsYXNzbmFtZXMuQlVUVE9OX1BSRVYsb25DbGljazpyfSxuKHtpc0Rpc2FibGVkOmF9KSk6XCJmdW5jdGlvblwiPT10eXBlb2YgZT9yZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6dHlwZXNfMS5DbGFzc25hbWVzLkJVVFRPTl9ORVhULG9uQ2xpY2s6cn0sZSh7aXNEaXNhYmxlZDphfSkpOihlPShuPVwicHJldlwiPT09cyk/XCI8XCI6XCI+XCIscz1uP3R5cGVzXzEuQ2xhc3NuYW1lcy5CVVRUT05fUFJFVjp0eXBlc18xLkNsYXNzbmFtZXMuQlVUVE9OX05FWFQsdD1uP3R5cGVzXzEuQ2xhc3NuYW1lcy5CVVRUT05fUFJFVl9XUkFQUEVSOnR5cGVzXzEuQ2xhc3NuYW1lcy5CVVRUT05fTkVYVF9XUkFQUEVSLG49bj90eXBlc18xLkNsYXNzbmFtZXMuQlVUVE9OX1BSRVZfSVRFTTp0eXBlc18xLkNsYXNzbmFtZXMuQlVUVE9OX05FWFRfSVRFTSxhPWE/dHlwZXNfMS5Nb2RpZmllcnMuSU5BQ1RJVkU6XCJcIixuPSgwLHV0aWxzXzEuY29uY2F0Q2xhc3NuYW1lcykobixhKSxyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6c30scmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOnR9LHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicFwiLHtjbGFzc05hbWU6bixvbkNsaWNrOmZ1bmN0aW9uKGUpe3JldHVybiByKGUpfX0scmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIse1wiZGF0YS1hcmVhXCI6ZX0pKSkpKX07ZXhwb3J0cy5QcmV2TmV4dEJ1dHRvbj1QcmV2TmV4dEJ1dHRvbjsiLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLlByZXZOZXh0QnV0dG9uPWV4cG9ydHMuUGxheVBhdXNlQnV0dG9uPWV4cG9ydHMuRG90c05hdmlnYXRpb249ZXhwb3J0cy5TdGFnZUl0ZW09ZXhwb3J0cy5TbGlkZUluZm89dm9pZCAwO3ZhciBTbGlkZUluZm9fMT1yZXF1aXJlKFwiLi9TbGlkZUluZm9cIiksU3RhZ2VJdGVtXzE9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiU2xpZGVJbmZvXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIFNsaWRlSW5mb18xLlNsaWRlSW5mb319KSxyZXF1aXJlKFwiLi9TdGFnZUl0ZW1cIikpLERvdHNOYXZpZ2F0aW9uXzE9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiU3RhZ2VJdGVtXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIFN0YWdlSXRlbV8xLlN0YWdlSXRlbX19KSxyZXF1aXJlKFwiLi9Eb3RzTmF2aWdhdGlvblwiKSksUGxheVBhdXNlQnV0dG9uXzE9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiRG90c05hdmlnYXRpb25cIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gRG90c05hdmlnYXRpb25fMS5Eb3RzTmF2aWdhdGlvbn19KSxyZXF1aXJlKFwiLi9QbGF5UGF1c2VCdXR0b25cIikpLFByZXZOZXh0QnV0dG9uXzE9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiUGxheVBhdXNlQnV0dG9uXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIFBsYXlQYXVzZUJ1dHRvbl8xLlBsYXlQYXVzZUJ1dHRvbn19KSxyZXF1aXJlKFwiLi9QcmV2TmV4dEJ1dHRvblwiKSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJQcmV2TmV4dEJ1dHRvblwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBQcmV2TmV4dEJ1dHRvbl8xLlByZXZOZXh0QnV0dG9ufX0pOyIsIlwidXNlIHN0cmljdFwiO3ZhciBfX2V4dGVuZHM9ZnVuY3Rpb24oKXt2YXIgbj1mdW5jdGlvbih0LGUpe3JldHVybihuPU9iamVjdC5zZXRQcm90b3R5cGVPZnx8KHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheT9mdW5jdGlvbih0LGUpe3QuX19wcm90b19fPWV9OmZ1bmN0aW9uKHQsZSl7Zm9yKHZhciBpIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsaSkmJih0W2ldPWVbaV0pfSkpKHQsZSl9O3JldHVybiBmdW5jdGlvbih0LGUpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUmJm51bGwhPT1lKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiK1N0cmluZyhlKStcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO2Z1bmN0aW9uIGkoKXt0aGlzLmNvbnN0cnVjdG9yPXR9bih0LGUpLHQucHJvdG90eXBlPW51bGw9PT1lP09iamVjdC5jcmVhdGUoZSk6KGkucHJvdG90eXBlPWUucHJvdG90eXBlLG5ldyBpKX19KCksX19hc3NpZ249ZnVuY3Rpb24oKXtyZXR1cm4oX19hc3NpZ249T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24odCl7Zm9yKHZhciBlLGk9MSxuPWFyZ3VtZW50cy5sZW5ndGg7aTxuO2krKylmb3IodmFyIG8gaW4gZT1hcmd1bWVudHNbaV0pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsbykmJih0W29dPWVbb10pO3JldHVybiB0fSkuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxfX2NyZWF0ZUJpbmRpbmc9T2JqZWN0LmNyZWF0ZT9mdW5jdGlvbih0LGUsaSxuKXt2b2lkIDA9PT1uJiYobj1pKTt2YXIgbz1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsaSk7byYmKFwiZ2V0XCJpbiBvP2UuX19lc01vZHVsZTohby53cml0YWJsZSYmIW8uY29uZmlndXJhYmxlKXx8KG89e2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGVbaV19fSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsbixvKX06ZnVuY3Rpb24odCxlLGksbil7dFtuPXZvaWQgMD09PW4/aTpuXT1lW2ldfSxfX3NldE1vZHVsZURlZmF1bHQ9T2JqZWN0LmNyZWF0ZT9mdW5jdGlvbih0LGUpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOmV9KX06ZnVuY3Rpb24odCxlKXt0LmRlZmF1bHQ9ZX0sX19pbXBvcnRTdGFyPWZ1bmN0aW9uKHQpe2lmKHQmJnQuX19lc01vZHVsZSlyZXR1cm4gdDt2YXIgZT17fTtpZihudWxsIT10KWZvcih2YXIgaSBpbiB0KVwiZGVmYXVsdFwiIT09aSYmT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsaSkmJl9fY3JlYXRlQmluZGluZyhlLHQsaSk7cmV0dXJuIF9fc2V0TW9kdWxlRGVmYXVsdChlLHQpLGV9LF9fZXhwb3J0U3Rhcj1mdW5jdGlvbih0LGUpe2Zvcih2YXIgaSBpbiB0KVwiZGVmYXVsdFwiPT09aXx8T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsaSl8fF9fY3JlYXRlQmluZGluZyhlLHQsaSl9LF9fYXdhaXRlcj1mdW5jdGlvbih0LGEscixsKXtyZXR1cm4gbmV3KHI9cnx8UHJvbWlzZSkoZnVuY3Rpb24oaSxlKXtmdW5jdGlvbiBuKHQpe3RyeXtzKGwubmV4dCh0KSl9Y2F0Y2godCl7ZSh0KX19ZnVuY3Rpb24gbyh0KXt0cnl7cyhsLnRocm93KHQpKX1jYXRjaCh0KXtlKHQpfX1mdW5jdGlvbiBzKHQpe3ZhciBlO3QuZG9uZT9pKHQudmFsdWUpOigoZT10LnZhbHVlKWluc3RhbmNlb2Ygcj9lOm5ldyByKGZ1bmN0aW9uKHQpe3QoZSl9KSkudGhlbihuLG8pfXMoKGw9bC5hcHBseSh0LGF8fFtdKSkubmV4dCgpKX0pfSxfX2dlbmVyYXRvcj1mdW5jdGlvbihuLG8pe3ZhciBzLGEscixsPXtsYWJlbDowLHNlbnQ6ZnVuY3Rpb24oKXtpZigxJnJbMF0pdGhyb3cgclsxXTtyZXR1cm4gclsxXX0sdHJ5czpbXSxvcHM6W119LHQ9e25leHQ6ZSgwKSx0aHJvdzplKDEpLHJldHVybjplKDIpfTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJih0W1N5bWJvbC5pdGVyYXRvcl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30pLHQ7ZnVuY3Rpb24gZShpKXtyZXR1cm4gZnVuY3Rpb24odCl7dmFyIGU9W2ksdF07aWYocyl0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtmb3IoO2w7KXRyeXtpZihzPTEsYSYmKHI9MiZlWzBdP2EucmV0dXJuOmVbMF0/YS50aHJvd3x8KChyPWEucmV0dXJuKSYmci5jYWxsKGEpLDApOmEubmV4dCkmJiEocj1yLmNhbGwoYSxlWzFdKSkuZG9uZSlyZXR1cm4gcjtzd2l0Y2goYT0wLChlPXI/WzImZVswXSxyLnZhbHVlXTplKVswXSl7Y2FzZSAwOmNhc2UgMTpyPWU7YnJlYWs7Y2FzZSA0OnJldHVybiBsLmxhYmVsKysse3ZhbHVlOmVbMV0sZG9uZTohMX07Y2FzZSA1OmwubGFiZWwrKyxhPWVbMV0sZT1bMF07Y29udGludWU7Y2FzZSA3OmU9bC5vcHMucG9wKCksbC50cnlzLnBvcCgpO2NvbnRpbnVlO2RlZmF1bHQ6aWYoIShyPTA8KHI9bC50cnlzKS5sZW5ndGgmJnJbci5sZW5ndGgtMV0pJiYoNj09PWVbMF18fDI9PT1lWzBdKSl7bD0wO2NvbnRpbnVlfWlmKDM9PT1lWzBdJiYoIXJ8fGVbMV0+clswXSYmZVsxXTxyWzNdKSlsLmxhYmVsPWVbMV07ZWxzZSBpZig2PT09ZVswXSYmbC5sYWJlbDxyWzFdKWwubGFiZWw9clsxXSxyPWU7ZWxzZXtpZighKHImJmwubGFiZWw8clsyXSkpe3JbMl0mJmwub3BzLnBvcCgpLGwudHJ5cy5wb3AoKTtjb250aW51ZX1sLmxhYmVsPXJbMl0sbC5vcHMucHVzaChlKX19ZT1vLmNhbGwobixsKX1jYXRjaCh0KXtlPVs2LHRdLGE9MH1maW5hbGx5e3M9cj0wfWlmKDUmZVswXSl0aHJvdyBlWzFdO3JldHVybnt2YWx1ZTplWzBdP2VbMV06dm9pZCAwLGRvbmU6ITB9fX19LF9faW1wb3J0RGVmYXVsdD1mdW5jdGlvbih0KXtyZXR1cm4gdCYmdC5fX2VzTW9kdWxlP3Q6e2RlZmF1bHQ6dH19LHJlYWN0XzE9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpKSx2YW5pbGxhX3N3aXBlXzE9X19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJ2YW5pbGxhLXN3aXBlXCIpKSxkZWZhdWx0UHJvcHNfMT1yZXF1aXJlKFwiLi9kZWZhdWx0UHJvcHNcIiksVmlld3M9X19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL3ZpZXdzXCIpKSxVdGlscz1fX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vdXRpbHNcIikpLHR5cGVzXzE9cmVxdWlyZShcIi4vdHlwZXNcIiksQWxpY2VDYXJvdXNlbD0oX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3R5cGVzXCIpLGV4cG9ydHMpLGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQodCl7dmFyIHM9ZS5jYWxsKHRoaXMsdCl8fHRoaXM7cmV0dXJuIHMuc3dpcGVMaXN0ZW5lcj1udWxsLHMuX2hhbmRsZUtleWJvYXJkRXZlbnRzPWZ1bmN0aW9uKHQpe3N3aXRjaCh0LmNvZGUpe2Nhc2VcIlNwYWNlXCI6cmV0dXJuIHMucHJvcHMuYXV0b1BsYXkmJnMuX2hhbmRsZVBsYXlQYXVzZVRvZ2dsZSgpO2Nhc2VcIkFycm93TGVmdFwiOnJldHVybiBzLnNsaWRlUHJldih0KTtjYXNlXCJBcnJvd1JpZ2h0XCI6cmV0dXJuIHMuc2xpZGVOZXh0KHQpfX0scy5faGFuZGxlQmVmb3JlU2xpZGVFbmQ9ZnVuY3Rpb24obyl7cmV0dXJuIF9fYXdhaXRlcihzLHZvaWQgMCx2b2lkIDAsZnVuY3Rpb24oKXt2YXIgZSxpLG47cmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsZnVuY3Rpb24odCl7c3dpdGNoKHQubGFiZWwpe2Nhc2UgMDpyZXR1cm4oaT10aGlzLnN0YXRlLG49aS5hY3RpdmVJbmRleCxlPWkuaXRlbXNDb3VudCxpPWkuZmFkZW91dEFuaW1hdGlvblByb2Nlc3NpbmcsVXRpbHMuc2hvdWxkUmVjYWxjdWxhdGVTbGlkZUluZGV4KG4sZSkpPyhuPVV0aWxzLmdldFVwZGF0ZVNsaWRlUG9zaXRpb25JbmRleChuLGUpLFs0LHRoaXMuX2hhbmRsZVVwZGF0ZVNsaWRlUG9zaXRpb24obildKTpbMywyXTtjYXNlIDE6cmV0dXJuIHQuc2VudCgpLFszLDRdO2Nhc2UgMjpyZXR1cm4gaT9bNCx0aGlzLnNldFN0YXRlKHtmYWRlb3V0QW5pbWF0aW9uSW5kZXg6bnVsbCxmYWRlb3V0QW5pbWF0aW9uUG9zaXRpb246bnVsbCxmYWRlb3V0QW5pbWF0aW9uUHJvY2Vzc2luZzohMX0pXTpbMyw0XTtjYXNlIDM6dC5zZW50KCksdC5sYWJlbD00O2Nhc2UgNDpyZXR1cm4gdGhpcy5faGFuZGxlU2xpZGVDaGFuZ2VkKG8pLFsyXX19KX0pfSxzLl9oYW5kbGVNb3VzZUVudGVyPWZ1bmN0aW9uKCl7dmFyIHQ9cy5wcm9wcy5hdXRvUGxheVN0cmF0ZWd5O1V0aWxzLnNob3VsZENhbmNlbEF1dG9QbGF5T25Ib3Zlcih0KSYmcy5zdGF0ZS5pc0F1dG9QbGF5aW5nJiYocy5pc0hvdmVyZWQ9ITAscy5faGFuZGxlUGF1c2UoKSl9LHMuX2hhbmRsZU1vdXNlTGVhdmU9ZnVuY3Rpb24oKXtzLnN0YXRlLmlzQXV0b1BsYXlpbmcmJihzLmlzSG92ZXJlZD0hMSxzLl9oYW5kbGVQbGF5KCkpfSxzLl9oYW5kbGVQYXVzZT1mdW5jdGlvbigpe3MuX2NsZWFyQXV0b1BsYXlUaW1lb3V0KCl9LHMuX2hhbmRsZVBsYXlQYXVzZVRvZ2dsZT1mdW5jdGlvbigpe3JldHVybiBfX2F3YWl0ZXIocyx2b2lkIDAsdm9pZCAwLGZ1bmN0aW9uKCl7dmFyIGU7cmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsZnVuY3Rpb24odCl7c3dpdGNoKHQubGFiZWwpe2Nhc2UgMDpyZXR1cm4gZT10aGlzLnN0YXRlLmlzQXV0b1BsYXlpbmcsdGhpcy5oYXNVc2VyQWN0aW9uPSEwLFs0LHRoaXMuc2V0U3RhdGUoe2lzQXV0b1BsYXlpbmc6IWUsaXNBdXRvUGxheUNhbmNlbGVkT25BY3Rpb246ITB9KV07Y2FzZSAxOnJldHVybiB0LnNlbnQoKSxlP3RoaXMuX2hhbmRsZVBhdXNlKCk6dGhpcy5faGFuZGxlUGxheSgpLFsyXX19KX0pfSxzLl9zZXRSb290Q29tcG9uZW50UmVmPWZ1bmN0aW9uKHQpe3JldHVybiBzLnJvb3RFbGVtZW50PXR9LHMuX3NldFN0YWdlQ29tcG9uZW50UmVmPWZ1bmN0aW9uKHQpe3JldHVybiBzLnN0YWdlQ29tcG9uZW50PXR9LHMuX3JlbmRlclN0YWdlSXRlbT1mdW5jdGlvbih0LGUpe3ZhciBpPVV0aWxzLmdldFJlbmRlclN0YWdlSXRlbVN0eWxlcyhlLHMuc3RhdGUpLG49VXRpbHMuZ2V0UmVuZGVyU3RhZ2VJdGVtQ2xhc3NlcyhlLHMuc3RhdGUpO3JldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChWaWV3cy5TdGFnZUl0ZW0se3N0eWxlczppLGNsYXNzTmFtZTpuLGtleTpcInN0YWdlLWl0ZW0tXCIuY29uY2F0KGUpLGl0ZW06dH0pfSxzLl9yZW5kZXJTbGlkZUluZm89ZnVuY3Rpb24oKXt2YXIgdD1zLnByb3BzLnJlbmRlclNsaWRlSW5mbyxlPXMuc3RhdGUsaT1lLmFjdGl2ZUluZGV4LGU9ZS5pdGVtc0NvdW50O3JldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChWaWV3cy5TbGlkZUluZm8se2l0ZW1zQ291bnQ6ZSxhY3RpdmVJbmRleDppLHJlbmRlclNsaWRlSW5mbzp0fSl9LHMuc3RhdGU9VXRpbHMuY2FsY3VsYXRlSW5pdGlhbFN0YXRlKHQsbnVsbCkscy5pc0hvdmVyZWQ9ITEscy5pc0FuaW1hdGlvbkRpc2FibGVkPSExLHMuaXNUb3VjaE1vdmVQcm9jZXNzU3RhcnRlZD0hMSxzLmNhbmNlbFRvdWNoQW5pbWF0aW9ucz0hMSxzLmhhc1VzZXJBY3Rpb249ITEscy5yb290RWxlbWVudD1udWxsLHMucm9vdENvbXBvbmVudERpbWVuc2lvbnM9e30scy5zdGFnZUNvbXBvbmVudD1udWxsLHMuc3RhcnRUb3VjaG1vdmVQb3NpdGlvbj12b2lkIDAscy5zbGlkZVRvPXMuc2xpZGVUby5iaW5kKHMpLHMuc2xpZGVQcmV2PXMuc2xpZGVQcmV2LmJpbmQocykscy5zbGlkZU5leHQ9cy5zbGlkZU5leHQuYmluZChzKSxzLl9oYW5kbGVUb3VjaG1vdmU9cy5faGFuZGxlVG91Y2htb3ZlLmJpbmQocykscy5faGFuZGxlVG91Y2hlbmQ9cy5faGFuZGxlVG91Y2hlbmQuYmluZChzKSxzLl9oYW5kbGVEb3RDbGljaz1zLl9oYW5kbGVEb3RDbGljay5iaW5kKHMpLHMuX2hhbmRsZVJlc2l6ZT1zLl9oYW5kbGVSZXNpemUuYmluZChzKSx0PVV0aWxzLmRlYm91bmNlKHMuX2hhbmRsZVJlc2l6ZSwxMDApLHMuX2hhbmRsZVJlc2l6ZURlYm91bmNlZD10WzBdLHMuX2NhbmNlbFJlc2l6ZURlYm91bmNlZD10WzFdLHN9cmV0dXJuIF9fZXh0ZW5kcyh0LGUpLHQucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50PWZ1bmN0aW9uKCl7cmV0dXJuIF9fYXdhaXRlcih0aGlzLHZvaWQgMCx2b2lkIDAsZnVuY3Rpb24oKXtyZXR1cm4gX19nZW5lcmF0b3IodGhpcyxmdW5jdGlvbih0KXtzd2l0Y2godC5sYWJlbCl7Y2FzZSAwOnJldHVybls0LHRoaXMuX3NldEluaXRpYWxTdGF0ZSgpXTtjYXNlIDE6cmV0dXJuIHQuc2VudCgpLHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCksdGhpcy5fc2V0dXBTd2lwZUhhbmRsZXJzKCksdGhpcy5wcm9wcy5hdXRvUGxheSYmdGhpcy5faGFuZGxlUGxheSgpLFsyXX19KX0pfSx0LnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGU9ZnVuY3Rpb24odCxlKXt2YXIgaT10aGlzLnByb3BzLG49aS5hY3RpdmVJbmRleCxvPWkuYW5pbWF0aW9uRHVyYXRpb24scz1pLmF1dG9XaWR0aCxhPWkuY2hpbGRyZW4scj1pLmluZmluaXRlLGw9aS5pdGVtcyx1PWkucGFkZGluZ0xlZnQsZD1pLnBhZGRpbmdSaWdodCxjPWkucmVzcG9uc2l2ZSxoPWkuc3dpcGVFeHRyYVBhZGRpbmcscD1pLm1vdXNlVHJhY2tpbmcsXz1pLnN3aXBlRGVsdGEsbT1pLnRvdWNoVHJhY2tpbmcsaT1pLnRvdWNoTW92ZURlZmF1bHRFdmVudHM7YSYmdC5jaGlsZHJlbiE9PWE/KGE9ZS5hY3RpdmVJbmRleCxlPV9fYXNzaWduKF9fYXNzaWduKHt9LHRoaXMucHJvcHMpLHthY3RpdmVJbmRleDphfSksdGhpcy5fdXBkYXRlQ29tcG9uZW50KGUpKTp0LmF1dG9XaWR0aCE9PXN8fHQuaW5maW5pdGUhPT1yfHx0Lml0ZW1zIT09bHx8dC5wYWRkaW5nTGVmdCE9PXV8fHQucGFkZGluZ1JpZ2h0IT09ZHx8dC5yZXNwb25zaXZlIT09Y3x8dC5zd2lwZUV4dHJhUGFkZGluZyE9PWg/dGhpcy5fdXBkYXRlQ29tcG9uZW50KCk6KHQuYW5pbWF0aW9uRHVyYXRpb24hPT1vJiZ0aGlzLnNldFN0YXRlKHthbmltYXRpb25EdXJhdGlvbjpvfSksdC5hY3RpdmVJbmRleCE9PW4mJnRoaXMuc2xpZGVUbyhuLHR5cGVzXzEuRXZlbnRUeXBlLlVQREFURSkpLHQuc3dpcGVEZWx0YT09PV8mJnQubW91c2VUcmFja2luZz09PXAmJnQudG91Y2hUcmFja2luZz09PW0mJnQudG91Y2hNb3ZlRGVmYXVsdEV2ZW50cz09PWl8fHRoaXMuX3VwZGF0ZVN3aXBlUHJvcHMoKSx0aGlzLnByb3BzLmtleWJvYXJkTmF2aWdhdGlvbiE9PXQua2V5Ym9hcmROYXZpZ2F0aW9uJiZ0aGlzLl91cGRhdGVFdmVudExpc3RlbmVycygpfSx0LnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3RoaXMuX2NhbmNlbFJlc2l6ZURlYm91bmNlZCgpLHRoaXMuX2NhbmNlbFRpbWVvdXRBbmltYXRpb25zKCksdGhpcy5fcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKX0sT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwiZXZlbnRPYmplY3RcIix7Z2V0OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5zdGF0ZSxlPXQuaXRlbXNJblNsaWRlLHQ9dC5hY3RpdmVJbmRleCxpPVV0aWxzLmdldFNsaWRlSXRlbUluZm8odGhpcy5zdGF0ZSksbj1pLmlzTmV4dFNsaWRlRGlzYWJsZWQsaT1pLmlzUHJldlNsaWRlRGlzYWJsZWQ7cmV0dXJue2l0ZW06dCxzbGlkZTpVdGlscy5nZXRBY3RpdmVTbGlkZUluZGV4KG4sdGhpcy5zdGF0ZSksaXRlbXNJblNsaWRlOmUsaXNOZXh0U2xpZGVEaXNhYmxlZDpuLGlzUHJldlNsaWRlRGlzYWJsZWQ6aSx0eXBlOnR5cGVzXzEuRXZlbnRUeXBlLkFDVElPTn19LGVudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwiaXNGYWRlb3V0QW5pbWF0aW9uQWxsb3dlZFwiLHtnZXQ6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnN0YXRlLml0ZW1zSW5TbGlkZSxlPXRoaXMucHJvcHMsaT1lLmFuaW1hdGlvblR5cGUsbj1lLnBhZGRpbmdMZWZ0LG89ZS5wYWRkaW5nUmlnaHQsZT1lLmF1dG9XaWR0aDtyZXR1cm4gMT09PXQmJmk9PT10eXBlc18xLkFuaW1hdGlvblR5cGUuRkFERU9VVCYmIShufHxvfHxlKX0sZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJ0b3VjaG1vdmVQb3NpdGlvblwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdm9pZCAwIT09dGhpcy5zdGFydFRvdWNobW92ZVBvc2l0aW9uP3RoaXMuc3RhcnRUb3VjaG1vdmVQb3NpdGlvbjp0aGlzLnN0YXRlLnRyYW5zbGF0ZTNkfSxlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMH0pLHQucHJvdG90eXBlLnNsaWRlVG89ZnVuY3Rpb24odCxlKXt2YXIgaSxuLG87dm9pZCAwPT09dCYmKHQ9MCksdGhpcy5faGFuZGxlUGF1c2UoKSx0aGlzLmlzRmFkZW91dEFuaW1hdGlvbkFsbG93ZWQ/KGk9VXRpbHMuZ2V0VXBkYXRlU2xpZGVQb3NpdGlvbkluZGV4KHQsdGhpcy5zdGF0ZS5pdGVtc0NvdW50KSxuPVV0aWxzLmdldEZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbihpLHRoaXMuc3RhdGUpLG89VXRpbHMuZ2V0RmFkZW91dEFuaW1hdGlvbkluZGV4KHRoaXMuc3RhdGUpLHRoaXMuX2hhbmRsZVNsaWRlVG8oe2FjdGl2ZUluZGV4OmksZmFkZW91dEFuaW1hdGlvbkluZGV4Om8sZmFkZW91dEFuaW1hdGlvblBvc2l0aW9uOm4sZXZlbnRUeXBlOmV9KSk6dGhpcy5faGFuZGxlU2xpZGVUbyh7YWN0aXZlSW5kZXg6dCxldmVudFR5cGU6ZX0pfSx0LnByb3RvdHlwZS5zbGlkZVByZXY9ZnVuY3Rpb24odCl7dGhpcy5faGFuZGxlUGF1c2UoKSx0JiZ0LmlzVHJ1c3RlZCYmKHRoaXMuaGFzVXNlckFjdGlvbj0hMCk7dmFyIGUsaSx0PXRoaXMuc3RhdGUuYWN0aXZlSW5kZXgtMTt0aGlzLmlzRmFkZW91dEFuaW1hdGlvbkFsbG93ZWQ/KGU9LXRoaXMuc3RhdGUuc3RhZ2VXaWR0aCxpPVV0aWxzLmdldEZhZGVvdXRBbmltYXRpb25JbmRleCh0aGlzLnN0YXRlKSx0aGlzLl9oYW5kbGVTbGlkZVRvKHthY3RpdmVJbmRleDp0LGZhZGVvdXRBbmltYXRpb25JbmRleDppLGZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbjplfSkpOnRoaXMuX2hhbmRsZVNsaWRlVG8oe2FjdGl2ZUluZGV4OnR9KX0sdC5wcm90b3R5cGUuc2xpZGVOZXh0PWZ1bmN0aW9uKHQpe3RoaXMuX2hhbmRsZVBhdXNlKCksdCYmdC5pc1RydXN0ZWQmJih0aGlzLmhhc1VzZXJBY3Rpb249ITApO3ZhciBlLGksdD10aGlzLnN0YXRlLmFjdGl2ZUluZGV4KzE7dGhpcy5pc0ZhZGVvdXRBbmltYXRpb25BbGxvd2VkPyhlPXRoaXMuc3RhdGUuc3RhZ2VXaWR0aCxpPVV0aWxzLmdldEZhZGVvdXRBbmltYXRpb25JbmRleCh0aGlzLnN0YXRlKSx0aGlzLl9oYW5kbGVTbGlkZVRvKHthY3RpdmVJbmRleDp0LGZhZGVvdXRBbmltYXRpb25JbmRleDppLGZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbjplfSkpOnRoaXMuX2hhbmRsZVNsaWRlVG8oe2FjdGl2ZUluZGV4OnR9KX0sdC5wcm90b3R5cGUuX2FkZEV2ZW50TGlzdGVuZXJzPWZ1bmN0aW9uKCl7d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzLl9oYW5kbGVSZXNpemVEZWJvdW5jZWQpLHRoaXMucHJvcHMua2V5Ym9hcmROYXZpZ2F0aW9uJiZ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsdGhpcy5faGFuZGxlS2V5Ym9hcmRFdmVudHMpfSx0LnByb3RvdHlwZS5fcmVtb3ZlRXZlbnRMaXN0ZW5lcnM9ZnVuY3Rpb24oKXt0aGlzLnN3aXBlTGlzdGVuZXImJnRoaXMuc3dpcGVMaXN0ZW5lci5kZXN0cm95KCksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzLl9oYW5kbGVSZXNpemVEZWJvdW5jZWQpLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIix0aGlzLl9oYW5kbGVLZXlib2FyZEV2ZW50cyl9LHQucHJvdG90eXBlLl91cGRhdGVFdmVudExpc3RlbmVycz1mdW5jdGlvbigpe3RoaXMucHJvcHMua2V5Ym9hcmROYXZpZ2F0aW9uP3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIix0aGlzLl9oYW5kbGVLZXlib2FyZEV2ZW50cyk6d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLHRoaXMuX2hhbmRsZUtleWJvYXJkRXZlbnRzKX0sdC5wcm90b3R5cGUuX2hhbmRsZVJlc2l6ZT1mdW5jdGlvbihvKXtyZXR1cm4gX19hd2FpdGVyKHRoaXMsdm9pZCAwLHZvaWQgMCxmdW5jdGlvbigpe3ZhciBlLGksbjtyZXR1cm4gX19nZW5lcmF0b3IodGhpcyxmdW5jdGlvbih0KXtzd2l0Y2godC5sYWJlbCl7Y2FzZSAwOnJldHVybihpPXRoaXMucHJvcHMub25SZXNpemVFdmVudCxuPVV0aWxzLmdldEVsZW1lbnREaW1lbnNpb25zKHRoaXMucm9vdEVsZW1lbnQpLChpfHxVdGlscy5zaG91bGRIYW5kbGVSZXNpemVFdmVudCkobyx0aGlzLnJvb3RDb21wb25lbnREaW1lbnNpb25zLG4pKT8odGhpcy5fY2FuY2VsVGltZW91dEFuaW1hdGlvbnMoKSx0aGlzLnJvb3RDb21wb25lbnREaW1lbnNpb25zPW4saT10aGlzLnN0YXRlLG49aS5pdGVtc0NvdW50LGU9aS5pc0F1dG9QbGF5aW5nLGk9VXRpbHMuZ2V0VXBkYXRlU2xpZGVQb3NpdGlvbkluZGV4KHRoaXMuc3RhdGUuYWN0aXZlSW5kZXgsbiksbj1VdGlscy5jYWxjdWxhdGVJbml0aWFsU3RhdGUoX19hc3NpZ24oX19hc3NpZ24oe30sdGhpcy5wcm9wcykse2FjdGl2ZUluZGV4Oml9KSx0aGlzLnN0YWdlQ29tcG9uZW50KSxpPVV0aWxzLmdldFRyYW5zbGF0ZTNkUHJvcGVydHkobi5hY3RpdmVJbmRleCxuKSxuPV9fYXNzaWduKF9fYXNzaWduKHt9LG4pLHt0cmFuc2xhdGUzZDppLGlzQXV0b1BsYXlpbmc6ZX0pLFV0aWxzLmFuaW1hdGUodGhpcy5zdGFnZUNvbXBvbmVudCx7cG9zaXRpb246LWl9KSxbNCx0aGlzLnNldFN0YXRlKG4pXSk6WzMsMl07Y2FzZSAxOnQuc2VudCgpLHRoaXMuX2hhbmRsZVJlc2l6ZWQoKSx0aGlzLmlzQW5pbWF0aW9uRGlzYWJsZWQ9ITEsZSYmdGhpcy5faGFuZGxlUGxheSgpLHQubGFiZWw9MjtjYXNlIDI6cmV0dXJuWzJdfX0pfSl9LHQucHJvdG90eXBlLl9oYW5kbGVUb3VjaG1vdmU9ZnVuY3Rpb24odCxlKXt2YXIgaT1lLmFic1ksbj1lLmFic1gsbz1lLmRlbHRhWCxlPXRoaXMucHJvcHMuc3dpcGVEZWx0YSxzPXRoaXMuc3RhdGUsYT1zLnN3aXBlU2hpZnRWYWx1ZSxyPXMuc3dpcGVMaW1pdE1pbixsPXMuc3dpcGVMaW1pdE1heCx1PXMuaW5maW5pdGUscz1zLmZhZGVvdXRBbmltYXRpb25Qcm9jZXNzaW5nO2lmKHRoaXMuaGFzVXNlckFjdGlvbj0hMCwhKHN8fCF0aGlzLmlzVG91Y2hNb3ZlUHJvY2Vzc1N0YXJ0ZWQmJlV0aWxzLmlzVmVydGljYWxUb3VjaG1vdmVEZXRlY3RlZChuLGksZSkpKXt0aGlzLmlzVG91Y2hNb3ZlUHJvY2Vzc1N0YXJ0ZWR8fCh0aGlzLl9jYW5jZWxUaW1lb3V0QW5pbWF0aW9ucygpLHRoaXMuX3NldFRvdWNobW92ZVBvc2l0aW9uKCksdGhpcy5pc0FuaW1hdGlvbkRpc2FibGVkPSEwLHRoaXMuaXNUb3VjaE1vdmVQcm9jZXNzU3RhcnRlZD0hMCx0aGlzLl9oYW5kbGVTbGlkZUNoYW5nZSgpKTt2YXIgZD1VdGlscy5nZXRUb3VjaG1vdmVUcmFuc2xhdGVQb3NpdGlvbihvLHRoaXMudG91Y2htb3ZlUG9zaXRpb24pO2lmKCExPT09dSlyZXR1cm4gcjxkfHxkPC1sP3ZvaWQgMDp2b2lkIFV0aWxzLmFuaW1hdGUodGhpcy5zdGFnZUNvbXBvbmVudCx7cG9zaXRpb246ZH0pO2lmKFV0aWxzLnNob3VsZFJlY2FsY3VsYXRlU3dpcGVQb3NpdGlvbihkLHIsbCkpdHJ5eyFmdW5jdGlvbiB0KCl7VXRpbHMuZ2V0SXNMZWZ0RGlyZWN0aW9uKG8pP2QrPWE6ZCs9LWE7VXRpbHMuc2hvdWxkUmVjYWxjdWxhdGVTd2lwZVBvc2l0aW9uKGQscixsKSYmdCgpfSgpfWNhdGNoKHQpe1V0aWxzLmRlYnVnKHQpfVV0aWxzLmFuaW1hdGUodGhpcy5zdGFnZUNvbXBvbmVudCx7cG9zaXRpb246ZH0pfX0sdC5wcm90b3R5cGUuX2hhbmRsZVRvdWNoZW5kPWZ1bmN0aW9uKHQsZSl7dmFyIGksbixvLGU9ZS5kZWx0YVg7dGhpcy5fY2xlYXJUb3VjaG1vdmVQb3NpdGlvbigpLHRoaXMuaXNUb3VjaE1vdmVQcm9jZXNzU3RhcnRlZCYmKHRoaXMuaXNUb3VjaE1vdmVQcm9jZXNzU3RhcnRlZD0hMSxpPXRoaXMuc3RhdGUuYW5pbWF0aW9uRHVyYXRpb24sbj10aGlzLnByb3BzLmFuaW1hdGlvbkVhc2luZ0Z1bmN0aW9uLG89VXRpbHMuZ2V0VHJhbnNsYXRlWFByb3BlcnR5KHRoaXMuc3RhZ2VDb21wb25lbnQpLGU9VXRpbHMuZ2V0U3dpcGVUb3VjaGVuZFBvc2l0aW9uKHRoaXMuc3RhdGUsZSxvKSxVdGlscy5hbmltYXRlKHRoaXMuc3RhZ2VDb21wb25lbnQse3Bvc2l0aW9uOmUsYW5pbWF0aW9uRHVyYXRpb246aSxhbmltYXRpb25FYXNpbmdGdW5jdGlvbjpufSksdGhpcy5faGFuZGxlQmVmb3JlVG91Y2hFbmQoZSkpfSx0LnByb3RvdHlwZS5faGFuZGxlQmVmb3JlVG91Y2hFbmQ9ZnVuY3Rpb24ocyl7dmFyIHQ9dGhpcyxlPXRoaXMuc3RhdGUuYW5pbWF0aW9uRHVyYXRpb247dGhpcy50b3VjaEVuZFRpbWVvdXRJZD13aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe3JldHVybiBfX2F3YWl0ZXIodCx2b2lkIDAsdm9pZCAwLGZ1bmN0aW9uKCl7dmFyIGUsaSxuLG89dGhpcztyZXR1cm4gX19nZW5lcmF0b3IodGhpcyxmdW5jdGlvbih0KXtzd2l0Y2godC5sYWJlbCl7Y2FzZSAwOnJldHVybiBlPVV0aWxzLmdldFN3aXBlVG91Y2hlbmRJbmRleChzLHRoaXMuc3RhdGUpLGk9VXRpbHMuZ2V0VHJhbnNsYXRlM2RQcm9wZXJ0eShlLHRoaXMuc3RhdGUpLFV0aWxzLmFuaW1hdGUodGhpcy5zdGFnZUNvbXBvbmVudCx7cG9zaXRpb246LWl9KSxuPVV0aWxzLmdldFRyYW5zaXRpb25Qcm9wZXJ0eSgpLFs0LHRoaXMuc2V0U3RhdGUoe2FjdGl2ZUluZGV4OmUsdHJhbnNsYXRlM2Q6aSx0cmFuc2l0aW9uOm59KV07Y2FzZSAxOnJldHVybiB0LnNlbnQoKSxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtyZXR1cm4gby5faGFuZGxlU2xpZGVDaGFuZ2VkKCl9KSxbMl19fSl9KX0sZSl9LHQucHJvdG90eXBlLl9oYW5kbGVTbGlkZVRvPWZ1bmN0aW9uKHQpe3ZhciBlPXQuYWN0aXZlSW5kZXgsYT12b2lkIDA9PT1lPzA6ZSxlPXQuZmFkZW91dEFuaW1hdGlvbkluZGV4LHI9dm9pZCAwPT09ZT9udWxsOmUsZT10LmZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbixsPXZvaWQgMD09PWU/bnVsbDplLHU9dC5ldmVudFR5cGU7cmV0dXJuIF9fYXdhaXRlcih0aGlzLHZvaWQgMCx2b2lkIDAsZnVuY3Rpb24oKXt2YXIgZSxpLG4sbyxzPXRoaXM7cmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsZnVuY3Rpb24odCl7c3dpdGNoKHQubGFiZWwpe2Nhc2UgMDpyZXR1cm4oaT10aGlzLnByb3BzLG49aS5pbmZpbml0ZSxpPWkuYW5pbWF0aW9uRWFzaW5nRnVuY3Rpb24sZT10aGlzLnN0YXRlLG89ZS5pdGVtc0NvdW50LGU9ZS5hbmltYXRpb25EdXJhdGlvbix0aGlzLmlzQW5pbWF0aW9uRGlzYWJsZWR8fHRoaXMuc3RhdGUuYWN0aXZlSW5kZXg9PT1hfHwhbiYmVXRpbHMuc2hvdWxkQ2FuY2VsU2xpZGVBbmltYXRpb24oYSxvKSk/WzJdOih0aGlzLmlzQW5pbWF0aW9uRGlzYWJsZWQ9ITAsdGhpcy5fY2FuY2VsVGltZW91dEFuaW1hdGlvbnMoKSx0aGlzLl9oYW5kbGVTbGlkZUNoYW5nZSh1KSxuPSExLG89VXRpbHMuZ2V0VHJhbnNsYXRlM2RQcm9wZXJ0eShhLHRoaXMuc3RhdGUpLGk9bnVsbCE9PXImJm51bGwhPT1sPyhuPSEwLFV0aWxzLmdldFRyYW5zaXRpb25Qcm9wZXJ0eSgpKTpVdGlscy5nZXRUcmFuc2l0aW9uUHJvcGVydHkoe2FuaW1hdGlvbkR1cmF0aW9uOmUsYW5pbWF0aW9uRWFzaW5nRnVuY3Rpb246aX0pLFs0LHRoaXMuc2V0U3RhdGUoe2FjdGl2ZUluZGV4OmEsdHJhbnNpdGlvbjppLHRyYW5zbGF0ZTNkOm8sYW5pbWF0aW9uRHVyYXRpb246ZSxmYWRlb3V0QW5pbWF0aW9uSW5kZXg6cixmYWRlb3V0QW5pbWF0aW9uUG9zaXRpb246bCxmYWRlb3V0QW5pbWF0aW9uUHJvY2Vzc2luZzpufSldKTtjYXNlIDE6cmV0dXJuIHQuc2VudCgpLHRoaXMuc2xpZGVFbmRUaW1lb3V0SWQ9d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtyZXR1cm4gcy5faGFuZGxlQmVmb3JlU2xpZGVFbmQodSl9LGUpLFsyXX19KX0pfSx0LnByb3RvdHlwZS5faGFuZGxlVXBkYXRlU2xpZGVQb3NpdGlvbj1mdW5jdGlvbihvKXtyZXR1cm4gX19hd2FpdGVyKHRoaXMsdm9pZCAwLHZvaWQgMCxmdW5jdGlvbigpe3ZhciBlLGksbjtyZXR1cm4gX19nZW5lcmF0b3IodGhpcyxmdW5jdGlvbih0KXtzd2l0Y2godC5sYWJlbCl7Y2FzZSAwOnJldHVybiBlPXRoaXMuc3RhdGUuYW5pbWF0aW9uRHVyYXRpb24saT1VdGlscy5nZXRUcmFuc2xhdGUzZFByb3BlcnR5KG8sdGhpcy5zdGF0ZSksbj1VdGlscy5nZXRUcmFuc2l0aW9uUHJvcGVydHkoe2FuaW1hdGlvbkR1cmF0aW9uOjB9KSxbNCx0aGlzLnNldFN0YXRlKHthY3RpdmVJbmRleDpvLHRyYW5zbGF0ZTNkOmksdHJhbnNpdGlvbjpuLGFuaW1hdGlvbkR1cmF0aW9uOmUsZmFkZW91dEFuaW1hdGlvbkluZGV4Om51bGwsZmFkZW91dEFuaW1hdGlvblBvc2l0aW9uOm51bGwsZmFkZW91dEFuaW1hdGlvblByb2Nlc3Npbmc6ITF9KV07Y2FzZSAxOnJldHVybiB0LnNlbnQoKSxbMl19fSl9KX0sdC5wcm90b3R5cGUuX2hhbmRsZVJlc2l6ZWQ9ZnVuY3Rpb24oKXt0aGlzLnByb3BzLm9uUmVzaXplZCYmdGhpcy5wcm9wcy5vblJlc2l6ZWQoX19hc3NpZ24oX19hc3NpZ24oe30sdGhpcy5ldmVudE9iamVjdCkse3R5cGU6dHlwZXNfMS5FdmVudFR5cGUuUkVTSVpFfSkpfSx0LnByb3RvdHlwZS5faGFuZGxlU2xpZGVDaGFuZ2U9ZnVuY3Rpb24odCl7dGhpcy5wcm9wcy5vblNsaWRlQ2hhbmdlJiYodD10P19fYXNzaWduKF9fYXNzaWduKHt9LHRoaXMuZXZlbnRPYmplY3QpLHt0eXBlOnR9KTp0aGlzLmV2ZW50T2JqZWN0LHRoaXMucHJvcHMub25TbGlkZUNoYW5nZSh0KSl9LHQucHJvdG90eXBlLl9oYW5kbGVTbGlkZUNoYW5nZWQ9ZnVuY3Rpb24ocyl7cmV0dXJuIF9fYXdhaXRlcih0aGlzLHZvaWQgMCx2b2lkIDAsZnVuY3Rpb24oKXt2YXIgZSxpLG4sbztyZXR1cm4gX19nZW5lcmF0b3IodGhpcyxmdW5jdGlvbih0KXtzd2l0Y2godC5sYWJlbCl7Y2FzZSAwOnJldHVybihpPXRoaXMuc3RhdGUsZT1pLmlzQXV0b1BsYXlpbmcsaT1pLmlzQXV0b1BsYXlDYW5jZWxlZE9uQWN0aW9uLG49dGhpcy5wcm9wcyxvPW4uYXV0b1BsYXlTdHJhdGVneSxuPW4ub25TbGlkZUNoYW5nZWQsVXRpbHMuc2hvdWxkQ2FuY2VsQXV0b1BsYXlPbkFjdGlvbihvKSYmdGhpcy5oYXNVc2VyQWN0aW9uJiYhaSk/WzQsdGhpcy5zZXRTdGF0ZSh7aXNBdXRvUGxheUNhbmNlbGVkT25BY3Rpb246ITAsaXNBdXRvUGxheWluZzohMX0pXTpbMywyXTtjYXNlIDE6cmV0dXJuIHQuc2VudCgpLFszLDNdO2Nhc2UgMjplJiZ0aGlzLl9oYW5kbGVQbGF5KCksdC5sYWJlbD0zO2Nhc2UgMzpyZXR1cm4gdGhpcy5pc0FuaW1hdGlvbkRpc2FibGVkPSExLG4mJihvPXM/X19hc3NpZ24oX19hc3NpZ24oe30sdGhpcy5ldmVudE9iamVjdCkse3R5cGU6c30pOnRoaXMuZXZlbnRPYmplY3QsbihvKSksWzJdfX0pfSl9LHQucHJvdG90eXBlLl9oYW5kbGVEb3RDbGljaz1mdW5jdGlvbih0KXt0aGlzLmhhc1VzZXJBY3Rpb249ITAsdGhpcy5zbGlkZVRvKHQpfSx0LnByb3RvdHlwZS5faGFuZGxlUGxheT1mdW5jdGlvbigpe3RoaXMuX3NldEF1dG9QbGF5SW50ZXJ2YWwoKX0sdC5wcm90b3R5cGUuX2NhbmNlbFRpbWVvdXRBbmltYXRpb25zPWZ1bmN0aW9uKCl7dGhpcy5fY2xlYXJBdXRvUGxheVRpbWVvdXQoKSx0aGlzLl9jbGVhclNsaWRlRW5kVGltZW91dCgpLHRoaXMuY2xlYXJUb3VjaGVuZFRpbWVvdXQoKX0sdC5wcm90b3R5cGUuX2NsZWFyQXV0b1BsYXlUaW1lb3V0PWZ1bmN0aW9uKCl7d2luZG93LmNsZWFyVGltZW91dCh0aGlzLmF1dG9QbGF5VGltZW91dElkKSx0aGlzLmF1dG9QbGF5VGltZW91dElkPXZvaWQgMH0sdC5wcm90b3R5cGUuX2NsZWFyU2xpZGVFbmRUaW1lb3V0PWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHRoaXMuc2xpZGVFbmRUaW1lb3V0SWQpLHRoaXMuc2xpZGVFbmRUaW1lb3V0SWQ9dm9pZCAwfSx0LnByb3RvdHlwZS5jbGVhclRvdWNoZW5kVGltZW91dD1mdW5jdGlvbigpe2NsZWFyVGltZW91dCh0aGlzLnRvdWNoRW5kVGltZW91dElkKSx0aGlzLnRvdWNoRW5kVGltZW91dElkPXZvaWQgMH0sdC5wcm90b3R5cGUuX2NsZWFyVG91Y2htb3ZlUG9zaXRpb249ZnVuY3Rpb24oKXt0aGlzLnN0YXJ0VG91Y2htb3ZlUG9zaXRpb249dm9pZCAwfSx0LnByb3RvdHlwZS5fc2V0VG91Y2htb3ZlUG9zaXRpb249ZnVuY3Rpb24oKXt2YXIgdD1VdGlscy5nZXRUcmFuc2xhdGVYUHJvcGVydHkodGhpcy5zdGFnZUNvbXBvbmVudCk7dGhpcy5zdGFydFRvdWNobW92ZVBvc2l0aW9uPS10fSx0LnByb3RvdHlwZS5fc2V0SW5pdGlhbFN0YXRlPWZ1bmN0aW9uKCl7cmV0dXJuIF9fYXdhaXRlcih0aGlzLHZvaWQgMCx2b2lkIDAsZnVuY3Rpb24oKXt2YXIgZTtyZXR1cm4gX19nZW5lcmF0b3IodGhpcyxmdW5jdGlvbih0KXtzd2l0Y2godC5sYWJlbCl7Y2FzZSAwOnJldHVybiBlPVV0aWxzLmNhbGN1bGF0ZUluaXRpYWxTdGF0ZSh0aGlzLnByb3BzLHRoaXMuc3RhZ2VDb21wb25lbnQpLHRoaXMucm9vdENvbXBvbmVudERpbWVuc2lvbnM9VXRpbHMuZ2V0RWxlbWVudERpbWVuc2lvbnModGhpcy5yb290RWxlbWVudCksWzQsdGhpcy5zZXRTdGF0ZShlKV07Y2FzZSAxOnJldHVybiB0LnNlbnQoKSx0aGlzLnByb3BzLm9uSW5pdGlhbGl6ZWQmJnRoaXMucHJvcHMub25Jbml0aWFsaXplZChfX2Fzc2lnbihfX2Fzc2lnbih7fSx0aGlzLmV2ZW50T2JqZWN0KSx7dHlwZTp0eXBlc18xLkV2ZW50VHlwZS5JTklUfSkpLFsyXX19KX0pfSx0LnByb3RvdHlwZS5fc2V0QXV0b1BsYXlJbnRlcnZhbD1mdW5jdGlvbigpe3ZhciB0PXRoaXMsZT10aGlzLnByb3BzLGk9ZS5hdXRvUGxheURpcmVjdGlvbixlPWUuYXV0b1BsYXlJbnRlcnZhbDt0aGlzLmF1dG9QbGF5VGltZW91dElkPXdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dC5pc0hvdmVyZWR8fChpPT09dHlwZXNfMS5BdXRvcGxheURpcmVjdGlvbi5SVEw/dC5zbGlkZVByZXYoKTp0LnNsaWRlTmV4dCgpKX0sZSl9LHQucHJvdG90eXBlLl9zZXR1cFN3aXBlSGFuZGxlcnM9ZnVuY3Rpb24oKXt0aGlzLnN3aXBlTGlzdGVuZXI9bmV3IHZhbmlsbGFfc3dpcGVfMS5kZWZhdWx0KHtlbGVtZW50OnRoaXMucm9vdEVsZW1lbnQsZGVsdGE6dGhpcy5wcm9wcy5zd2lwZURlbHRhLG9uU3dpcGluZzp0aGlzLl9oYW5kbGVUb3VjaG1vdmUsb25Td2lwZWQ6dGhpcy5faGFuZGxlVG91Y2hlbmQscm90YXRpb25BbmdsZTo1LG1vdXNlVHJhY2tpbmdFbmFibGVkOnRoaXMucHJvcHMubW91c2VUcmFja2luZyx0b3VjaFRyYWNraW5nRW5hYmxlZDp0aGlzLnByb3BzLnRvdWNoVHJhY2tpbmcscHJldmVudERlZmF1bHRUb3VjaG1vdmVFdmVudDohdGhpcy5wcm9wcy50b3VjaE1vdmVEZWZhdWx0RXZlbnRzLHByZXZlbnRUcmFja2luZ09uTW91c2VsZWF2ZTohMH0pLHRoaXMuc3dpcGVMaXN0ZW5lci5pbml0KCl9LHQucHJvdG90eXBlLl91cGRhdGVDb21wb25lbnQ9ZnVuY3Rpb24odCl7dmFyIGU9dGhpczt2b2lkIDA9PT10JiYodD10aGlzLnByb3BzKSx0aGlzLl9jYW5jZWxUaW1lb3V0QW5pbWF0aW9ucygpLHRoaXMuaXNBbmltYXRpb25EaXNhYmxlZD0hMSx0aGlzLnN0YXRlLmlzQXV0b1BsYXlpbmcmJnRoaXMuX2hhbmRsZVBsYXkoKSx0aGlzLnNldFN0YXRlKHtjbG9uZXM6VXRpbHMuY3JlYXRlQ2xvbmVzKHQpfSkscmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7ZS5zZXRTdGF0ZShVdGlscy5jYWxjdWxhdGVJbml0aWFsU3RhdGUodCxlLnN0YWdlQ29tcG9uZW50KSl9KX0sdC5wcm90b3R5cGUuX3VwZGF0ZVN3aXBlUHJvcHM9ZnVuY3Rpb24oKXt0aGlzLnN3aXBlTGlzdGVuZXImJnRoaXMuc3dpcGVMaXN0ZW5lci51cGRhdGUoe2RlbHRhOnRoaXMucHJvcHMuc3dpcGVEZWx0YSxtb3VzZVRyYWNraW5nRW5hYmxlZDp0aGlzLnByb3BzLm1vdXNlVHJhY2tpbmcsdG91Y2hUcmFja2luZ0VuYWJsZWQ6dGhpcy5wcm9wcy50b3VjaFRyYWNraW5nLHByZXZlbnREZWZhdWx0VG91Y2htb3ZlRXZlbnQ6IXRoaXMucHJvcHMudG91Y2hNb3ZlRGVmYXVsdEV2ZW50c30pfSx0LnByb3RvdHlwZS5fcmVuZGVyRG90c05hdmlnYXRpb249ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnByb3BzLGU9dC5yZW5kZXJEb3RzSXRlbSx0PXQuY29udHJvbHNTdHJhdGVneTtyZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVmlld3MuRG90c05hdmlnYXRpb24se3N0YXRlOnRoaXMuc3RhdGUsb25DbGljazp0aGlzLl9oYW5kbGVEb3RDbGljayxyZW5kZXJEb3RzSXRlbTplLGNvbnRyb2xzU3RyYXRlZ3k6dH0pfSx0LnByb3RvdHlwZS5fcmVuZGVyUHJldkJ1dHRvbj1mdW5jdGlvbigpe3ZhciB0PXRoaXMucHJvcHMucmVuZGVyUHJldkJ1dHRvbixlPVV0aWxzLmdldFNsaWRlSXRlbUluZm8odGhpcy5zdGF0ZSkuaXNQcmV2U2xpZGVEaXNhYmxlZDtyZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVmlld3MuUHJldk5leHRCdXR0b24se25hbWU6XCJwcmV2XCIsb25DbGljazp0aGlzLnNsaWRlUHJldixpc0Rpc2FibGVkOmUscmVuZGVyUHJldkJ1dHRvbjp0fSl9LHQucHJvdG90eXBlLl9yZW5kZXJOZXh0QnV0dG9uPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5wcm9wcy5yZW5kZXJOZXh0QnV0dG9uLGU9VXRpbHMuZ2V0U2xpZGVJdGVtSW5mbyh0aGlzLnN0YXRlKS5pc05leHRTbGlkZURpc2FibGVkO3JldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChWaWV3cy5QcmV2TmV4dEJ1dHRvbix7bmFtZTpcIm5leHRcIixvbkNsaWNrOnRoaXMuc2xpZGVOZXh0LGlzRGlzYWJsZWQ6ZSxyZW5kZXJOZXh0QnV0dG9uOnR9KX0sdC5wcm90b3R5cGUuX3JlbmRlclBsYXlQYXVzZUJ1dHRvbj1mdW5jdGlvbigpe3ZhciB0PXRoaXMucHJvcHMucmVuZGVyUGxheVBhdXNlQnV0dG9uLGU9dGhpcy5zdGF0ZS5pc0F1dG9QbGF5aW5nO3JldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChWaWV3cy5QbGF5UGF1c2VCdXR0b24se2lzUGxheWluZzplLG9uQ2xpY2s6dGhpcy5faGFuZGxlUGxheVBhdXNlVG9nZ2xlLHJlbmRlclBsYXlQYXVzZUJ1dHRvbjp0fSl9LHQucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbigpe3ZhciB0PXRoaXMuc3RhdGUsZT10LnRyYW5zbGF0ZTNkLGk9dC5jbG9uZXMsbj10LnRyYW5zaXRpb24sdD10LmNhblVzZURvbSxvPVV0aWxzLnNob3VsZERpc2FibGVEb3RzKHRoaXMucHJvcHMsdGhpcy5zdGF0ZSkscz1VdGlscy5zaG91bGREaXNhYmxlQnV0dG9ucyh0aGlzLnByb3BzLHRoaXMuc3RhdGUpLGE9VXRpbHMuZ2V0UmVuZGVyV3JhcHBlclN0eWxlcyh0aGlzLnByb3BzLHRoaXMuc3RhdGUsdGhpcy5zdGFnZUNvbXBvbmVudCksZT1VdGlscy5nZXRSZW5kZXJTdGFnZVN0eWxlcyh7dHJhbnNsYXRlM2Q6ZX0se3RyYW5zaXRpb246bn0pLG49dGhpcy5wcm9wcy5zc3JTaWxlbnRNb2RlfHx0P1wiXCI6dHlwZXNfMS5Nb2RpZmllcnMuU1NSLHQ9VXRpbHMuY29uY2F0Q2xhc3NuYW1lcyh0eXBlc18xLkNsYXNzbmFtZXMuUk9PVCxuKTtyZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOnR9LHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3JlZjp0aGlzLl9zZXRSb290Q29tcG9uZW50UmVmfSxyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTphLGNsYXNzTmFtZTp0eXBlc18xLkNsYXNzbmFtZXMuV1JBUFBFUixvbk1vdXNlRW50ZXI6dGhpcy5faGFuZGxlTW91c2VFbnRlcixvbk1vdXNlTGVhdmU6dGhpcy5faGFuZGxlTW91c2VMZWF2ZX0scmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLHtzdHlsZTplLGNsYXNzTmFtZTp0eXBlc18xLkNsYXNzbmFtZXMuU1RBR0UscmVmOnRoaXMuX3NldFN0YWdlQ29tcG9uZW50UmVmfSxpLm1hcCh0aGlzLl9yZW5kZXJTdGFnZUl0ZW0pKSkpLG8/bnVsbDp0aGlzLl9yZW5kZXJEb3RzTmF2aWdhdGlvbigpLHM/bnVsbDp0aGlzLl9yZW5kZXJQcmV2QnV0dG9uKCkscz9udWxsOnRoaXMuX3JlbmRlck5leHRCdXR0b24oKSx0aGlzLnByb3BzLmRpc2FibGVTbGlkZUluZm8/bnVsbDp0aGlzLl9yZW5kZXJTbGlkZUluZm8oKSx0aGlzLnByb3BzLmF1dG9QbGF5Q29udHJvbHM/dGhpcy5fcmVuZGVyUGxheVBhdXNlQnV0dG9uKCk6bnVsbCl9LHQuZGVmYXVsdFByb3BzPWRlZmF1bHRQcm9wc18xLmRlZmF1bHRQcm9wcyx0fShyZWFjdF8xLmRlZmF1bHQuUHVyZUNvbXBvbmVudCkpO2V4cG9ydHMuZGVmYXVsdD1BbGljZUNhcm91c2VsOyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxubGV0IGdldFJhbmRvbVZhbHVlcztcbmNvbnN0IHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pOyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG5jb25zdCBieXRlVG9IZXggPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG5cbmZ1bmN0aW9uIHBhcnNlKHV1aWQpIHtcbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignSW52YWxpZCBVVUlEJyk7XG4gIH1cblxuICBsZXQgdjtcbiAgY29uc3QgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMTYpOyAvLyBQYXJzZSAjIyMjIyMjIy0uLi4uLS4uLi4tLi4uLi0uLi4uLi4uLi4uLi5cblxuICBhcnJbMF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMCwgOCksIDE2KSkgPj4+IDI0O1xuICBhcnJbMV0gPSB2ID4+PiAxNiAmIDB4ZmY7XG4gIGFyclsyXSA9IHYgPj4+IDggJiAweGZmO1xuICBhcnJbM10gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tIyMjIy0uLi4uLS4uLi4tLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzRdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDksIDEzKSwgMTYpKSA+Pj4gODtcbiAgYXJyWzVdID0gdiAmIDB4ZmY7IC8vIFBhcnNlIC4uLi4uLi4uLS4uLi4tIyMjIy0uLi4uLS4uLi4uLi4uLi4uLlxuXG4gIGFycls2XSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgxNCwgMTgpLCAxNikpID4+PiA4O1xuICBhcnJbN10gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tLi4uLi0uLi4uLSMjIyMtLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzhdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDE5LCAyMyksIDE2KSkgPj4+IDg7XG4gIGFycls5XSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0uLi4uLS4uLi4tLi4uLi0jIyMjIyMjIyMjIyNcbiAgLy8gKFVzZSBcIi9cIiB0byBhdm9pZCAzMi1iaXQgdHJ1bmNhdGlvbiB3aGVuIGJpdC1zaGlmdGluZyBoaWdoLW9yZGVyIGJ5dGVzKVxuXG4gIGFyclsxMF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMjQsIDM2KSwgMTYpKSAvIDB4MTAwMDAwMDAwMDAgJiAweGZmO1xuICBhcnJbMTFdID0gdiAvIDB4MTAwMDAwMDAwICYgMHhmZjtcbiAgYXJyWzEyXSA9IHYgPj4+IDI0ICYgMHhmZjtcbiAgYXJyWzEzXSA9IHYgPj4+IDE2ICYgMHhmZjtcbiAgYXJyWzE0XSA9IHYgPj4+IDggJiAweGZmO1xuICBhcnJbMTVdID0gdiAmIDB4ZmY7XG4gIHJldHVybiBhcnI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhcnNlOyIsImltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcbmltcG9ydCBwYXJzZSBmcm9tICcuL3BhcnNlLmpzJztcblxuZnVuY3Rpb24gc3RyaW5nVG9CeXRlcyhzdHIpIHtcbiAgc3RyID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikpOyAvLyBVVEY4IGVzY2FwZVxuXG4gIGNvbnN0IGJ5dGVzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBieXRlcy5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpKTtcbiAgfVxuXG4gIHJldHVybiBieXRlcztcbn1cblxuZXhwb3J0IGNvbnN0IEROUyA9ICc2YmE3YjgxMC05ZGFkLTExZDEtODBiNC0wMGMwNGZkNDMwYzgnO1xuZXhwb3J0IGNvbnN0IFVSTCA9ICc2YmE3YjgxMS05ZGFkLTExZDEtODBiNC0wMGMwNGZkNDMwYzgnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdjM1KG5hbWUsIHZlcnNpb24sIGhhc2hmdW5jKSB7XG4gIGZ1bmN0aW9uIGdlbmVyYXRlVVVJRCh2YWx1ZSwgbmFtZXNwYWNlLCBidWYsIG9mZnNldCkge1xuICAgIHZhciBfbmFtZXNwYWNlO1xuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlID0gc3RyaW5nVG9CeXRlcyh2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBuYW1lc3BhY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICBuYW1lc3BhY2UgPSBwYXJzZShuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIGlmICgoKF9uYW1lc3BhY2UgPSBuYW1lc3BhY2UpID09PSBudWxsIHx8IF9uYW1lc3BhY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9uYW1lc3BhY2UubGVuZ3RoKSAhPT0gMTYpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcignTmFtZXNwYWNlIG11c3QgYmUgYXJyYXktbGlrZSAoMTYgaXRlcmFibGUgaW50ZWdlciB2YWx1ZXMsIDAtMjU1KScpO1xuICAgIH0gLy8gQ29tcHV0ZSBoYXNoIG9mIG5hbWVzcGFjZSBhbmQgdmFsdWUsIFBlciA0LjNcbiAgICAvLyBGdXR1cmU6IFVzZSBzcHJlYWQgc3ludGF4IHdoZW4gc3VwcG9ydGVkIG9uIGFsbCBwbGF0Zm9ybXMsIGUuZy4gYGJ5dGVzID1cbiAgICAvLyBoYXNoZnVuYyhbLi4ubmFtZXNwYWNlLCAuLi4gdmFsdWVdKWBcblxuXG4gICAgbGV0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoMTYgKyB2YWx1ZS5sZW5ndGgpO1xuICAgIGJ5dGVzLnNldChuYW1lc3BhY2UpO1xuICAgIGJ5dGVzLnNldCh2YWx1ZSwgbmFtZXNwYWNlLmxlbmd0aCk7XG4gICAgYnl0ZXMgPSBoYXNoZnVuYyhieXRlcyk7XG4gICAgYnl0ZXNbNl0gPSBieXRlc1s2XSAmIDB4MGYgfCB2ZXJzaW9uO1xuICAgIGJ5dGVzWzhdID0gYnl0ZXNbOF0gJiAweDNmIHwgMHg4MDtcblxuICAgIGlmIChidWYpIHtcbiAgICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgICAgYnVmW29mZnNldCArIGldID0gYnl0ZXNbaV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBidWY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShieXRlcyk7XG4gIH0gLy8gRnVuY3Rpb24jbmFtZSBpcyBub3Qgc2V0dGFibGUgb24gc29tZSBwbGF0Zm9ybXMgKCMyNzApXG5cblxuICB0cnkge1xuICAgIGdlbmVyYXRlVVVJRC5uYW1lID0gbmFtZTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XG4gIH0gY2F0Y2ggKGVycikge30gLy8gRm9yIENvbW1vbkpTIGRlZmF1bHQgZXhwb3J0IHN1cHBvcnRcblxuXG4gIGdlbmVyYXRlVVVJRC5ETlMgPSBETlM7XG4gIGdlbmVyYXRlVVVJRC5VUkwgPSBVUkw7XG4gIHJldHVybiBnZW5lcmF0ZVVVSUQ7XG59IiwiLypcbiAqIEJyb3dzZXItY29tcGF0aWJsZSBKYXZhU2NyaXB0IE1ENVxuICpcbiAqIE1vZGlmaWNhdGlvbiBvZiBKYXZhU2NyaXB0IE1ENVxuICogaHR0cHM6Ly9naXRodWIuY29tL2JsdWVpbXAvSmF2YVNjcmlwdC1NRDVcbiAqXG4gKiBDb3B5cmlnaHQgMjAxMSwgU2ViYXN0aWFuIFRzY2hhblxuICogaHR0cHM6Ly9ibHVlaW1wLm5ldFxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKlxuICogQmFzZWQgb25cbiAqIEEgSmF2YVNjcmlwdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgUlNBIERhdGEgU2VjdXJpdHksIEluYy4gTUQ1IE1lc3NhZ2VcbiAqIERpZ2VzdCBBbGdvcml0aG0sIGFzIGRlZmluZWQgaW4gUkZDIDEzMjEuXG4gKiBWZXJzaW9uIDIuMiBDb3B5cmlnaHQgKEMpIFBhdWwgSm9obnN0b24gMTk5OSAtIDIwMDlcbiAqIE90aGVyIGNvbnRyaWJ1dG9yczogR3JlZyBIb2x0LCBBbmRyZXcgS2VwZXJ0LCBZZG5hciwgTG9zdGluZXRcbiAqIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSBCU0QgTGljZW5zZVxuICogU2VlIGh0dHA6Ly9wYWpob21lLm9yZy51ay9jcnlwdC9tZDUgZm9yIG1vcmUgaW5mby5cbiAqL1xuZnVuY3Rpb24gbWQ1KGJ5dGVzKSB7XG4gIGlmICh0eXBlb2YgYnl0ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgbXNnID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGJ5dGVzKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgICBieXRlcyA9IG5ldyBVaW50OEFycmF5KG1zZy5sZW5ndGgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyArK2kpIHtcbiAgICAgIGJ5dGVzW2ldID0gbXNnLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1kNVRvSGV4RW5jb2RlZEFycmF5KHdvcmRzVG9NZDUoYnl0ZXNUb1dvcmRzKGJ5dGVzKSwgYnl0ZXMubGVuZ3RoICogOCkpO1xufVxuLypcbiAqIENvbnZlcnQgYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3JkcyB0byBhbiBhcnJheSBvZiBieXRlc1xuICovXG5cblxuZnVuY3Rpb24gbWQ1VG9IZXhFbmNvZGVkQXJyYXkoaW5wdXQpIHtcbiAgY29uc3Qgb3V0cHV0ID0gW107XG4gIGNvbnN0IGxlbmd0aDMyID0gaW5wdXQubGVuZ3RoICogMzI7XG4gIGNvbnN0IGhleFRhYiA9ICcwMTIzNDU2Nzg5YWJjZGVmJztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDMyOyBpICs9IDgpIHtcbiAgICBjb25zdCB4ID0gaW5wdXRbaSA+PiA1XSA+Pj4gaSAlIDMyICYgMHhmZjtcbiAgICBjb25zdCBoZXggPSBwYXJzZUludChoZXhUYWIuY2hhckF0KHggPj4+IDQgJiAweDBmKSArIGhleFRhYi5jaGFyQXQoeCAmIDB4MGYpLCAxNik7XG4gICAgb3V0cHV0LnB1c2goaGV4KTtcbiAgfVxuXG4gIHJldHVybiBvdXRwdXQ7XG59XG4vKipcbiAqIENhbGN1bGF0ZSBvdXRwdXQgbGVuZ3RoIHdpdGggcGFkZGluZyBhbmQgYml0IGxlbmd0aFxuICovXG5cblxuZnVuY3Rpb24gZ2V0T3V0cHV0TGVuZ3RoKGlucHV0TGVuZ3RoOCkge1xuICByZXR1cm4gKGlucHV0TGVuZ3RoOCArIDY0ID4+PiA5IDw8IDQpICsgMTQgKyAxO1xufVxuLypcbiAqIENhbGN1bGF0ZSB0aGUgTUQ1IG9mIGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHMsIGFuZCBhIGJpdCBsZW5ndGguXG4gKi9cblxuXG5mdW5jdGlvbiB3b3Jkc1RvTWQ1KHgsIGxlbikge1xuICAvKiBhcHBlbmQgcGFkZGluZyAqL1xuICB4W2xlbiA+PiA1XSB8PSAweDgwIDw8IGxlbiAlIDMyO1xuICB4W2dldE91dHB1dExlbmd0aChsZW4pIC0gMV0gPSBsZW47XG4gIGxldCBhID0gMTczMjU4NDE5MztcbiAgbGV0IGIgPSAtMjcxNzMzODc5O1xuICBsZXQgYyA9IC0xNzMyNTg0MTk0O1xuICBsZXQgZCA9IDI3MTczMzg3ODtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHgubGVuZ3RoOyBpICs9IDE2KSB7XG4gICAgY29uc3Qgb2xkYSA9IGE7XG4gICAgY29uc3Qgb2xkYiA9IGI7XG4gICAgY29uc3Qgb2xkYyA9IGM7XG4gICAgY29uc3Qgb2xkZCA9IGQ7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaV0sIDcsIC02ODA4NzY5MzYpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyAxXSwgMTIsIC0zODk1NjQ1ODYpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAyXSwgMTcsIDYwNjEwNTgxOSk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDNdLCAyMiwgLTEwNDQ1MjUzMzApO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyA0XSwgNywgLTE3NjQxODg5Nyk7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDVdLCAxMiwgMTIwMDA4MDQyNik7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDZdLCAxNywgLTE0NzMyMzEzNDEpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyA3XSwgMjIsIC00NTcwNTk4Myk7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDhdLCA3LCAxNzcwMDM1NDE2KTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgOV0sIDEyLCAtMTk1ODQxNDQxNyk7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDEwXSwgMTcsIC00MjA2Myk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDExXSwgMjIsIC0xOTkwNDA0MTYyKTtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgMTJdLCA3LCAxODA0NjAzNjgyKTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgMTNdLCAxMiwgLTQwMzQxMTAxKTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMTRdLCAxNywgLTE1MDIwMDIyOTApO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAxNV0sIDIyLCAxMjM2NTM1MzI5KTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgMV0sIDUsIC0xNjU3OTY1MTApO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyA2XSwgOSwgLTEwNjk1MDE2MzIpO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAxMV0sIDE0LCA2NDM3MTc3MTMpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2ldLCAyMCwgLTM3Mzg5NzMwMik7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDVdLCA1LCAtNzAxNTU4NjkxKTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMTBdLCA5LCAzODAxNjA4Myk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDE1XSwgMTQsIC02NjA0NzgzMzUpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyA0XSwgMjAsIC00MDU1Mzc4NDgpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyA5XSwgNSwgNTY4NDQ2NDM4KTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMTRdLCA5LCAtMTAxOTgwMzY5MCk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDNdLCAxNCwgLTE4NzM2Mzk2MSk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDhdLCAyMCwgMTE2MzUzMTUwMSk7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDEzXSwgNSwgLTE0NDQ2ODE0NjcpO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAyXSwgOSwgLTUxNDAzNzg0KTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgN10sIDE0LCAxNzM1MzI4NDczKTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgMTJdLCAyMCwgLTE5MjY2MDc3MzQpO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyA1XSwgNCwgLTM3ODU1OCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDhdLCAxMSwgLTIwMjI1NzQ0NjMpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAxMV0sIDE2LCAxODM5MDMwNTYyKTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMTRdLCAyMywgLTM1MzA5NTU2KTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgMV0sIDQsIC0xNTMwOTkyMDYwKTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgNF0sIDExLCAxMjcyODkzMzUzKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgN10sIDE2LCAtMTU1NDk3NjMyKTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMTBdLCAyMywgLTEwOTQ3MzA2NDApO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyAxM10sIDQsIDY4MTI3OTE3NCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaV0sIDExLCAtMzU4NTM3MjIyKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgM10sIDE2LCAtNzIyNTIxOTc5KTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgNl0sIDIzLCA3NjAyOTE4OSk7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDldLCA0LCAtNjQwMzY0NDg3KTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgMTJdLCAxMSwgLTQyMTgxNTgzNSk7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDE1XSwgMTYsIDUzMDc0MjUyMCk7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDJdLCAyMywgLTk5NTMzODY1MSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaV0sIDYsIC0xOTg2MzA4NDQpO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyA3XSwgMTAsIDExMjY4OTE0MTUpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAxNF0sIDE1LCAtMTQxNjM1NDkwNSk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDVdLCAyMSwgLTU3NDM0MDU1KTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgMTJdLCA2LCAxNzAwNDg1NTcxKTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgM10sIDEwLCAtMTg5NDk4NjYwNik7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDEwXSwgMTUsIC0xMDUxNTIzKTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgMV0sIDIxLCAtMjA1NDkyMjc5OSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDhdLCA2LCAxODczMzEzMzU5KTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgMTVdLCAxMCwgLTMwNjExNzQ0KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgNl0sIDE1LCAtMTU2MDE5ODM4MCk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDEzXSwgMjEsIDEzMDkxNTE2NDkpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyA0XSwgNiwgLTE0NTUyMzA3MCk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDExXSwgMTAsIC0xMTIwMjEwMzc5KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMl0sIDE1LCA3MTg3ODcyNTkpO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyA5XSwgMjEsIC0zNDM0ODU1NTEpO1xuICAgIGEgPSBzYWZlQWRkKGEsIG9sZGEpO1xuICAgIGIgPSBzYWZlQWRkKGIsIG9sZGIpO1xuICAgIGMgPSBzYWZlQWRkKGMsIG9sZGMpO1xuICAgIGQgPSBzYWZlQWRkKGQsIG9sZGQpO1xuICB9XG5cbiAgcmV0dXJuIFthLCBiLCBjLCBkXTtcbn1cbi8qXG4gKiBDb252ZXJ0IGFuIGFycmF5IGJ5dGVzIHRvIGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHNcbiAqIENoYXJhY3RlcnMgPjI1NSBoYXZlIHRoZWlyIGhpZ2gtYnl0ZSBzaWxlbnRseSBpZ25vcmVkLlxuICovXG5cblxuZnVuY3Rpb24gYnl0ZXNUb1dvcmRzKGlucHV0KSB7XG4gIGlmIChpbnB1dC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBjb25zdCBsZW5ndGg4ID0gaW5wdXQubGVuZ3RoICogODtcbiAgY29uc3Qgb3V0cHV0ID0gbmV3IFVpbnQzMkFycmF5KGdldE91dHB1dExlbmd0aChsZW5ndGg4KSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg4OyBpICs9IDgpIHtcbiAgICBvdXRwdXRbaSA+PiA1XSB8PSAoaW5wdXRbaSAvIDhdICYgMHhmZikgPDwgaSAlIDMyO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cbi8qXG4gKiBBZGQgaW50ZWdlcnMsIHdyYXBwaW5nIGF0IDJeMzIuIFRoaXMgdXNlcyAxNi1iaXQgb3BlcmF0aW9ucyBpbnRlcm5hbGx5XG4gKiB0byB3b3JrIGFyb3VuZCBidWdzIGluIHNvbWUgSlMgaW50ZXJwcmV0ZXJzLlxuICovXG5cblxuZnVuY3Rpb24gc2FmZUFkZCh4LCB5KSB7XG4gIGNvbnN0IGxzdyA9ICh4ICYgMHhmZmZmKSArICh5ICYgMHhmZmZmKTtcbiAgY29uc3QgbXN3ID0gKHggPj4gMTYpICsgKHkgPj4gMTYpICsgKGxzdyA+PiAxNik7XG4gIHJldHVybiBtc3cgPDwgMTYgfCBsc3cgJiAweGZmZmY7XG59XG4vKlxuICogQml0d2lzZSByb3RhdGUgYSAzMi1iaXQgbnVtYmVyIHRvIHRoZSBsZWZ0LlxuICovXG5cblxuZnVuY3Rpb24gYml0Um90YXRlTGVmdChudW0sIGNudCkge1xuICByZXR1cm4gbnVtIDw8IGNudCB8IG51bSA+Pj4gMzIgLSBjbnQ7XG59XG4vKlxuICogVGhlc2UgZnVuY3Rpb25zIGltcGxlbWVudCB0aGUgZm91ciBiYXNpYyBvcGVyYXRpb25zIHRoZSBhbGdvcml0aG0gdXNlcy5cbiAqL1xuXG5cbmZ1bmN0aW9uIG1kNWNtbihxLCBhLCBiLCB4LCBzLCB0KSB7XG4gIHJldHVybiBzYWZlQWRkKGJpdFJvdGF0ZUxlZnQoc2FmZUFkZChzYWZlQWRkKGEsIHEpLCBzYWZlQWRkKHgsIHQpKSwgcyksIGIpO1xufVxuXG5mdW5jdGlvbiBtZDVmZihhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiAmIGMgfCB+YiAmIGQsIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBtZDVnZyhhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiAmIGQgfCBjICYgfmQsIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBtZDVoaChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiBeIGMgXiBkLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZnVuY3Rpb24gbWQ1aWkoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGMgXiAoYiB8IH5kKSwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1kNTsiLCJpbXBvcnQgdjM1IGZyb20gJy4vdjM1LmpzJztcbmltcG9ydCBtZDUgZnJvbSAnLi9tZDUuanMnO1xuY29uc3QgdjMgPSB2MzUoJ3YzJywgMHgzMCwgbWQ1KTtcbmV4cG9ydCBkZWZhdWx0IHYzOyIsImNvbnN0IHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG5leHBvcnQgZGVmYXVsdCB7XG4gIHJhbmRvbVVVSURcbn07IiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgaWYgKG5hdGl2ZS5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmF0aXZlLnJhbmRvbVVVSUQoKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiLy8gQWRhcHRlZCBmcm9tIENocmlzIFZlbmVzcycgU0hBMSBjb2RlIGF0XG4vLyBodHRwOi8vd3d3Lm1vdmFibGUtdHlwZS5jby51ay9zY3JpcHRzL3NoYTEuaHRtbFxuZnVuY3Rpb24gZihzLCB4LCB5LCB6KSB7XG4gIHN3aXRjaCAocykge1xuICAgIGNhc2UgMDpcbiAgICAgIHJldHVybiB4ICYgeSBeIH54ICYgejtcblxuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiB4IF4geSBeIHo7XG5cbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4geCAmIHkgXiB4ICYgeiBeIHkgJiB6O1xuXG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIHggXiB5IF4gejtcbiAgfVxufVxuXG5mdW5jdGlvbiBST1RMKHgsIG4pIHtcbiAgcmV0dXJuIHggPDwgbiB8IHggPj4+IDMyIC0gbjtcbn1cblxuZnVuY3Rpb24gc2hhMShieXRlcykge1xuICBjb25zdCBLID0gWzB4NWE4Mjc5OTksIDB4NmVkOWViYTEsIDB4OGYxYmJjZGMsIDB4Y2E2MmMxZDZdO1xuICBjb25zdCBIID0gWzB4Njc0NTIzMDEsIDB4ZWZjZGFiODksIDB4OThiYWRjZmUsIDB4MTAzMjU0NzYsIDB4YzNkMmUxZjBdO1xuXG4gIGlmICh0eXBlb2YgYnl0ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgbXNnID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGJ5dGVzKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgICBieXRlcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyArK2kpIHtcbiAgICAgIGJ5dGVzLnB1c2gobXNnLmNoYXJDb2RlQXQoaSkpO1xuICAgIH1cbiAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheShieXRlcykpIHtcbiAgICAvLyBDb252ZXJ0IEFycmF5LWxpa2UgdG8gQXJyYXlcbiAgICBieXRlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGJ5dGVzKTtcbiAgfVxuXG4gIGJ5dGVzLnB1c2goMHg4MCk7XG4gIGNvbnN0IGwgPSBieXRlcy5sZW5ndGggLyA0ICsgMjtcbiAgY29uc3QgTiA9IE1hdGguY2VpbChsIC8gMTYpO1xuICBjb25zdCBNID0gbmV3IEFycmF5KE4pO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgTjsgKytpKSB7XG4gICAgY29uc3QgYXJyID0gbmV3IFVpbnQzMkFycmF5KDE2KTtcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTY7ICsraikge1xuICAgICAgYXJyW2pdID0gYnl0ZXNbaSAqIDY0ICsgaiAqIDRdIDw8IDI0IHwgYnl0ZXNbaSAqIDY0ICsgaiAqIDQgKyAxXSA8PCAxNiB8IGJ5dGVzW2kgKiA2NCArIGogKiA0ICsgMl0gPDwgOCB8IGJ5dGVzW2kgKiA2NCArIGogKiA0ICsgM107XG4gICAgfVxuXG4gICAgTVtpXSA9IGFycjtcbiAgfVxuXG4gIE1bTiAtIDFdWzE0XSA9IChieXRlcy5sZW5ndGggLSAxKSAqIDggLyBNYXRoLnBvdygyLCAzMik7XG4gIE1bTiAtIDFdWzE0XSA9IE1hdGguZmxvb3IoTVtOIC0gMV1bMTRdKTtcbiAgTVtOIC0gMV1bMTVdID0gKGJ5dGVzLmxlbmd0aCAtIDEpICogOCAmIDB4ZmZmZmZmZmY7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBOOyArK2kpIHtcbiAgICBjb25zdCBXID0gbmV3IFVpbnQzMkFycmF5KDgwKTtcblxuICAgIGZvciAobGV0IHQgPSAwOyB0IDwgMTY7ICsrdCkge1xuICAgICAgV1t0XSA9IE1baV1bdF07XG4gICAgfVxuXG4gICAgZm9yIChsZXQgdCA9IDE2OyB0IDwgODA7ICsrdCkge1xuICAgICAgV1t0XSA9IFJPVEwoV1t0IC0gM10gXiBXW3QgLSA4XSBeIFdbdCAtIDE0XSBeIFdbdCAtIDE2XSwgMSk7XG4gICAgfVxuXG4gICAgbGV0IGEgPSBIWzBdO1xuICAgIGxldCBiID0gSFsxXTtcbiAgICBsZXQgYyA9IEhbMl07XG4gICAgbGV0IGQgPSBIWzNdO1xuICAgIGxldCBlID0gSFs0XTtcblxuICAgIGZvciAobGV0IHQgPSAwOyB0IDwgODA7ICsrdCkge1xuICAgICAgY29uc3QgcyA9IE1hdGguZmxvb3IodCAvIDIwKTtcbiAgICAgIGNvbnN0IFQgPSBST1RMKGEsIDUpICsgZihzLCBiLCBjLCBkKSArIGUgKyBLW3NdICsgV1t0XSA+Pj4gMDtcbiAgICAgIGUgPSBkO1xuICAgICAgZCA9IGM7XG4gICAgICBjID0gUk9UTChiLCAzMCkgPj4+IDA7XG4gICAgICBiID0gYTtcbiAgICAgIGEgPSBUO1xuICAgIH1cblxuICAgIEhbMF0gPSBIWzBdICsgYSA+Pj4gMDtcbiAgICBIWzFdID0gSFsxXSArIGIgPj4+IDA7XG4gICAgSFsyXSA9IEhbMl0gKyBjID4+PiAwO1xuICAgIEhbM10gPSBIWzNdICsgZCA+Pj4gMDtcbiAgICBIWzRdID0gSFs0XSArIGUgPj4+IDA7XG4gIH1cblxuICByZXR1cm4gW0hbMF0gPj4gMjQgJiAweGZmLCBIWzBdID4+IDE2ICYgMHhmZiwgSFswXSA+PiA4ICYgMHhmZiwgSFswXSAmIDB4ZmYsIEhbMV0gPj4gMjQgJiAweGZmLCBIWzFdID4+IDE2ICYgMHhmZiwgSFsxXSA+PiA4ICYgMHhmZiwgSFsxXSAmIDB4ZmYsIEhbMl0gPj4gMjQgJiAweGZmLCBIWzJdID4+IDE2ICYgMHhmZiwgSFsyXSA+PiA4ICYgMHhmZiwgSFsyXSAmIDB4ZmYsIEhbM10gPj4gMjQgJiAweGZmLCBIWzNdID4+IDE2ICYgMHhmZiwgSFszXSA+PiA4ICYgMHhmZiwgSFszXSAmIDB4ZmYsIEhbNF0gPj4gMjQgJiAweGZmLCBIWzRdID4+IDE2ICYgMHhmZiwgSFs0XSA+PiA4ICYgMHhmZiwgSFs0XSAmIDB4ZmZdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzaGExOyIsImltcG9ydCB2MzUgZnJvbSAnLi92MzUuanMnO1xuaW1wb3J0IHNoYTEgZnJvbSAnLi9zaGExLmpzJztcbmNvbnN0IHY1ID0gdjM1KCd2NScsIDB4NTAsIHNoYTEpO1xuZXhwb3J0IGRlZmF1bHQgdjU7IiwiLypcbiBkZWZhdWx0IHVuZGVmaW5lZCAtIFRoZSBrZXkgaXMgdGhlIGJyZWFrcG9pbnRcbiAoZGVmYXVsdCBpcyB0aGUgcmVzdWx0IG9mOiAoKSA9PiB3aW5kb3cuaW5uZXJXaWR0aCBvciBpbm5lcldpZHRoIHByb3BlcnR5IGlmIHRoZSBsYXN0IHByZXNlbnRlZCkuXG4qL1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRSZXNwb25zaXZlID0ge1xuICAgIDA6IHtcbiAgICAgICAgaXRlbXM6IDFcbiAgICB9LFxuICAgIDYyMDoge1xuICAgICAgICBpdGVtczogMlxuICAgIH0sXG4gICAgMTAyNDoge1xuICAgICAgICBpdGVtczogM1xuICAgIH0sXG4gICAgMTIwMDoge1xuICAgICAgICBpdGVtczogNFxuICAgIH0sXG4gICAgMTcwMDoge1xuICAgICAgICBpdGVtczogNVxuICAgIH0sXG4gICAgMjI1MDoge1xuICAgICAgICBpdGVtczogNlxuICAgIH1cbn07XG5cbi8qXG4gcmVidWlsdCByZXNwb25zaXZlIG9iamVjdCBkZXBlbmRpbmcgb24gdGhlIGNvbnRhaW5lciB3aWR0aFxuIHVzaW5nIHRoZSByYXRpbyBvZiB0aGUgd2lkdGggb2YgdGhlIGJveCB0byB0aGUgd2lkdGggb2YgdGhlIHdpbmRvd1xuKi9cbmV4cG9ydCBjb25zdCBnZXROZXdSZXNwb25zaXZlVmFsdWVzID0gcmF0ZSA9PiB7XG4gICAgbGV0IG5ld1Jlc3BvbnNpdmUgPSB7fTtcbiAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKGRlZmF1bHRSZXNwb25zaXZlKTtcblxuICAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBsZXQgbmV3VmFsdWUgPSBNYXRoLnJvdW5kKGRlZmF1bHRSZXNwb25zaXZlW2tleV0uaXRlbXMgLyByYXRlKTtcbiAgICAgICAgbmV3UmVzcG9uc2l2ZVtrZXldID0geyBpdGVtczogTWF0aC5tYXgobmV3VmFsdWUsIDEpIH07XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3UmVzcG9uc2l2ZTtcbn07XG5cbi8qXG4gICAgQ29uc3RhbnRzXG4qL1xuZXhwb3J0IGNvbnN0IHN0YXR1c0xpc3QgPSB7XG4gICAgcmVzZXQ6IFwicmVzZXRcIixcbiAgICBnb0xhc3Q6IFwiZ29MYXN0XCIsXG4gICAgbmV4dDogXCJuZXh0XCIsXG4gICAgcHJldjogXCJwcmV2XCJcbn07XG5cbmV4cG9ydCBjb25zdCBjbGFzc2VzQWN0aW9uID0ge1xuICAgIGFkZDogXCJhZGRcIixcbiAgICByZW1vdmU6IFwicmVtb3ZlXCJcbn07XG5cbmV4cG9ydCBjb25zdCBjb21tb25DbGFzc2VzID0ge1xuICAgIG11bHRpX2NvbnRhaW5lcjogXCJtdWx0aS1jYXJvdXNlbF9fY29udGFpbmVyXCIsXG4gICAgbXVsdGlfZW1wdHlfY29udGFpbmVyOiBcIm11bHRpLWNhcm91c2VsX19lbXB0eS1jb250YWluZXJcIixcbiAgICBpdGVtOiBcIm11bHRpLWNhcm91c2VsX19pdGVtXCIsXG4gICAgYWN0aXZlOiBcIm11bHRpLWNhcm91c2VsX19hY3RpdmVcIixcbiAgICBub19kb3RzOiBcIm11bHRpLWNhcm91c2VsX19uby1kb3RzXCJcbn07XG5cbmV4cG9ydCBjb25zdCBub3JtYWxDYXJvdXNlbENsYXNzZXMgPSB7XG4gICAgbm9ybWFsX2NvbnRhaW5lcjogXCJub3JtYWwtY2Fyb3VzZWxfX2NvbnRhaW5lclwiLFxuICAgIG5vcm1hbF9pdGVtOiBcIm5vcm1hbC1jYXJvdXNlbF9faXRlbVwiXG59O1xuXG5leHBvcnQgY29uc3QgYWN0aXZlQ2xpY2tDbGFzc2VzID0ge1xuICAgIGFjdGl2ZV9jbGlja19jb250YWluZXI6IFwiYWN0aXZlLWNsaWNrLWNhcm91c2VsX19jb250YWluZXJcIixcbiAgICBhY3RpdmVfY2xpY2tfaXRlbTogXCJhY3RpdmUtY2xpY2stY2Fyb3VzZWxfX2l0ZW1cIixcbiAgICBhY3RpdmVfY2xpY2tfd2l0aF9idG46IFwiYWN0aXZlLWNsaWNrLWNhcm91c2VsX193aXRoLWJ0blwiXG59O1xuXG5leHBvcnQgY29uc3QgYWN0aXZlU2xpZGVDbGFzc2VzID0ge1xuICAgIGFjdGl2ZV9zbGlkZV9jb250YWluZXI6IFwiYWN0aXZlLXNsaWRlLWNhcm91c2VsX19jb250YWluZXJcIixcbiAgICBhY3RpdmVfc2xpZGVfd3JhcHBlcjogXCJhY3RpdmUtc2xpZGUtY2Fyb3VzZWxfX3dyYXBwZXJcIixcbiAgICBmaXJzdF9pdGVtOiBcImFjdGl2ZS1zbGlkZS1jYXJvdXNlbF9fZmlyc3QtaXRlbVwiLFxuICAgIGxhc3RfaXRlbTogXCJhY3RpdmUtc2xpZGUtY2Fyb3VzZWxfX2xhc3QtaXRlbVwiLFxuICAgIHByZXZfYnRuOiBcImFjdGl2ZS1zbGlkZS1jYXJvdXNlbF9fcHJldi1idG5cIixcbiAgICBuZXh0X2J0bjogXCJhY3RpdmUtc2xpZGUtY2Fyb3VzZWxfX25leHQtYnRuXCJcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4uL3VpL05vcm1hbENhcm91c2VsLnNjc3NcIjtcbmltcG9ydCBcIi4uL3VpL0FjdGl2ZUNsaWNrQ2Fyb3VzZWwuc2Nzc1wiO1xuaW1wb3J0IEFsaWNlQ2Fyb3VzZWwgZnJvbSBcInJlYWN0LWFsaWNlLWNhcm91c2VsXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IHtcbiAgICBkZWZhdWx0UmVzcG9uc2l2ZSxcbiAgICBnZXROZXdSZXNwb25zaXZlVmFsdWVzLFxuICAgIGNvbW1vbkNsYXNzZXMsXG4gICAgbm9ybWFsQ2Fyb3VzZWxDbGFzc2VzLFxuICAgIGFjdGl2ZUNsaWNrQ2xhc3NlcyxcbiAgICBjbGFzc2VzQWN0aW9uXG59IGZyb20gXCIuL2hlbHBlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3JtYWxDYXJvdXNlbChwcm9wcykge1xuICAgIGNvbnN0IGNhcm91c2VsUGFyZW50ID0gdXNlUmVmKCk7XG4gICAgY29uc3QgW2Nhcm91c2VsX2l0ZW1zLCBzZXRfY2Fyb3VzZWxfaXRlbXNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtyZXNwb25zaXZlLCBzZXRSZXNwb25zaXZlXSA9IHVzZVN0YXRlKHsgLi4uZGVmYXVsdFJlc3BvbnNpdmUgfSk7XG4gICAgY29uc3QgW3VuaXF1ZUNsYXNzLCBzZXRVbmlxdWVDbGFzc10gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIC8qXG4gICAgICAgIHRoaXMgbWV0aG9kIGJ1aWx0IHRvIGhhbmRsZSBpZiB0aGUgY2Fyb3VzZWwgaGFzIGJlZW4gcmVuZGVyZWQgaW5zaWRlIGEgY29udGFpbmVyXG4gICAgICAgIHRoYXQgaXMgbm90IGNvdmVyaW5nIHRoZSB3aW5kb3cncyBmdWxsIHdpZHRoXG4gICAgKi9cbiAgICBjb25zdCBzZXROZXdSZXNwb25zaXZlID0gKCkgPT4ge1xuICAgICAgICBsZXQgcmF0ZSA9IHdpbmRvdy5pbm5lcldpZHRoIC8gY2Fyb3VzZWxQYXJlbnQuY3VycmVudC5jbGllbnRXaWR0aDtcbiAgICAgICAgaWYgKHJhdGUgPiAxLjM1KSB7XG4gICAgICAgICAgICBsZXQgbmV3UmVzcG9uc2l2ZSA9IGdldE5ld1Jlc3BvbnNpdmVWYWx1ZXMocmF0ZSk7XG4gICAgICAgICAgICBzZXRSZXNwb25zaXZlKHsgLi4ubmV3UmVzcG9uc2l2ZSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFJlc3BvbnNpdmUoeyAuLi5kZWZhdWx0UmVzcG9uc2l2ZSB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBhZGRPclJlbW92ZUNsYXNzTmFtZSA9IChub2RlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gY2xhc3Nlc0FjdGlvbi5yZW1vdmUpIHtcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShjb21tb25DbGFzc2VzLmFjdGl2ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoY29tbW9uQ2xhc3Nlcy5hY3RpdmUpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgIGluIGNhc2Ugb2YgXCJpbmZpbml0ZVwiIGNhcm91c2VsIHRoZSBub2RlIHdpbGwgYmUgbm9kZSBsaXN0IFwiQXJyYXlcIlxuICAgICAgICBiZWNhdXNlIHRoZSBjYXJvdXNlbCBjcmVhdGUgYSBjb3B5IG9mIGFsbCB0aGUgaXRlbXNcbiAgICAgICAgdGhhdCB3aHkgd2UgbmVlZCBjaGFuZ2UgdGhlIGFjdGl2ZSBjbGFzcyBvbiBib3RoIG5vZGVzIC0gdGhlIGNhcm91c2VsIHJlbmRlciBib3RoIC1cbiAgICAqL1xuICAgIGNvbnN0IGNoYW5nZUFjdGl2ZUNsYXNzID0gKG5vZGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBpZiAobm9kZT8ubGVuZ3RoKSB7XG4gICAgICAgICAgICBub2RlLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgYWRkT3JSZW1vdmVDbGFzc05hbWUoaXRlbSwgYWN0aW9uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIGFkZE9yUmVtb3ZlQ2xhc3NOYW1lKG5vZGUsIGFjdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgaWR4LVwiXCIgaXMgdGhlIGNvbW1vbiB1bmlxdWUgY2xhc3MgYmV0d2VlbiBvcmlnaW5hbCBpdGVtIGFuZCB0aGUgY2xvbmVkIG9uZVxuICAgICovXG4gICAgY29uc3QgZ2V0SWR4Q2xhc3NOYW1lID0gZSA9PiB7XG4gICAgICAgIGxldCBjbGlja2VkSXRlbSA9IGUudGFyZ2V0O1xuXG4gICAgICAgIC8vIGluIGNhc2Ugb2YgY2xpY2tpbmcgZWxlbWVudCBpbnNpZGUgdGhlIGl0ZW0gd2UgbmVlZCB0aGUgbWFpbiBkaXYgd2l0aCBcImlkeC1cIiBjbGFzcyBuYW1lXG4gICAgICAgIHdoaWxlIChjbGlja2VkSXRlbSkge1xuICAgICAgICAgICAgaWYgKGNsaWNrZWRJdGVtLmNsYXNzTGlzdC5jb250YWlucyhjb21tb25DbGFzc2VzLml0ZW0pKSBicmVhaztcbiAgICAgICAgICAgIGNsaWNrZWRJdGVtID0gY2xpY2tlZEl0ZW0ucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjbGFzc05hbWVzID0gY2xpY2tlZEl0ZW0uY2xhc3NOYW1lLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZXM/LmZpbHRlcihpdGVtID0+IGl0ZW0uaW5jbHVkZXMoXCJpZHhcIikpPy5bMF07XG4gICAgfTtcblxuICAgIGNvbnN0IG9uQ2FyZENsaWNrZWQgPSAoZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIGlmIChhY3Rpb24/LmNhbkV4ZWN1dGUpIGFjdGlvbi5leGVjdXRlKCk7XG5cbiAgICAgICAgLy8gcmVtb3ZlIGFjdGl2ZSBjbGFzcyBmcm9tIG9yaWdpbmFsIGFuZCBjbG9uZWQgaXRlbVxuICAgICAgICBsZXQgYWN0aXZlTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3VuaXF1ZUNsYXNzfWApPy5xdWVyeVNlbGVjdG9yQWxsKGAuJHtjb21tb25DbGFzc2VzLmFjdGl2ZX1gKTtcbiAgICAgICAgY2hhbmdlQWN0aXZlQ2xhc3MoYWN0aXZlTm9kZSwgY2xhc3Nlc0FjdGlvbi5yZW1vdmUpO1xuXG4gICAgICAgIGxldCBpZHhDbGFzcyA9IGdldElkeENsYXNzTmFtZShlKTtcblxuICAgICAgICAvLyBhZGQgYWN0aXZlIGNsYXNzIGZvciBib3RoIG9yaWdpbmFsIGFuZCBjbG9uZWQgaXRlbVxuICAgICAgICBsZXQgaXRlbVRvU2V0QWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dW5pcXVlQ2xhc3N9YCk/LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2lkeENsYXNzfWApO1xuICAgICAgICBjaGFuZ2VBY3RpdmVDbGFzcyhpdGVtVG9TZXRBY3RpdmUsIGNsYXNzZXNBY3Rpb24uYWRkKTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgIHNldCB0aGUgYWN0aXZlIGl0ZW0gYWZ0ZXIgdGhlIGNhcm91c2VsIGhhcyBhbHJlYWR5IGJlZW4gaW5pdGlhbGl6ZWRcbiAgICAqL1xuICAgIGNvbnN0IG9uSW5pdGlhbGl6ZWQgPSAoKSA9PiB7XG4gICAgICAgIGlmIChwcm9wcy5jYXJvdXNlbFR5cGUgPT09IFwiYWN0aXZlXCIpIHtcbiAgICAgICAgICAgIGxldCBpdGVtVG9TZXRBY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt1bmlxdWVDbGFzc31gKT8ucXVlcnlTZWxlY3RvckFsbChcIi5pZHgtMFwiKTtcbiAgICAgICAgICAgIGNoYW5nZUFjdGl2ZUNsYXNzKGl0ZW1Ub1NldEFjdGl2ZSwgY2xhc3Nlc0FjdGlvbi5hZGQpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIHNldCBhIHVuaXF1ZSBjbGFzcyBpbiBjYXNlIG9mIHVzaW5nIHR3byBkaWZmZXJlbnQgY2Fyb3VzZWwgaW5zdGFuY2VzIGluIHRoZSBzYW1lIGRvY3VtZW50XG4gICAgICAgIHNldFVuaXF1ZUNsYXNzKFwiYS1cIiArIHV1aWR2NCgpKTtcblxuICAgICAgICBpZiAoIWNhcm91c2VsUGFyZW50LmN1cnJlbnQpIHJldHVybjtcblxuICAgICAgICAvLyBoYW5kbGUgcmVzaXplIHdpbmRvdyBvciBjYXJvdXNlbCBjb250YWluZXJcbiAgICAgICAgY29uc3QgcmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKCkgPT4ge1xuICAgICAgICAgICAgc2V0TmV3UmVzcG9uc2l2ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXNpemVPYnNlcnZlci5vYnNlcnZlKGNhcm91c2VsUGFyZW50LmN1cnJlbnQpO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiByZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgfSwgW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHByb3BzLmRhdGE/LnN0YXR1cyA9PT0gXCJhdmFpbGFibGVcIiAmJiAhY2Fyb3VzZWxfaXRlbXM/Lmxlbmd0aCkge1xuICAgICAgICAgICAgc2V0X2Nhcm91c2VsX2l0ZW1zKFxuICAgICAgICAgICAgICAgIHByb3BzLmRhdGEuaXRlbXMubWFwKChpdGVtLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmNhcm91c2VsVHlwZSA9PT0gXCJhY3RpdmVcIiA/IGUgPT4gb25DYXJkQ2xpY2tlZChlLCBwcm9wcy5hY3Rpb24/LmdldChpdGVtKSkgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y29tbW9uQ2xhc3Nlcy5pdGVtfSBpZHgtJHtpfSAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmNhcm91c2VsVHlwZSA9PT0gXCJhY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGFjdGl2ZUNsaWNrQ2xhc3Nlcy5hY3RpdmVfY2xpY2tfY2xpY2thYmxlX2l0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBub3JtYWxDYXJvdXNlbENsYXNzZXMubm9ybWFsX2l0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY29udGVudC5nZXQoaXRlbSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSwgW3Byb3BzLmRhdGFdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17W1xuICAgICAgICAgICAgICAgIGNvbW1vbkNsYXNzZXMubXVsdGlfY29udGFpbmVyLFxuICAgICAgICAgICAgICAgIHVuaXF1ZUNsYXNzLFxuICAgICAgICAgICAgICAgIHByb3BzLmNhcm91c2VsVHlwZSA9PT0gXCJhY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICA/IGFjdGl2ZUNsaWNrQ2xhc3Nlcy5hY3RpdmVfY2xpY2tfY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgIDogbm9ybWFsQ2Fyb3VzZWxDbGFzc2VzLm5vcm1hbF9jb250YWluZXIsXG4gICAgICAgICAgICAgICAgcHJvcHMuZGlzYWJsZURvdHNDb250cm9scyA/IGNvbW1vbkNsYXNzZXMubm9fZG90cyA6IFwiXCIsXG4gICAgICAgICAgICAgICAgIXByb3BzLmRpc2FibGVCdXR0b25zQ29udHJvbHMgJiYgcHJvcHMuY2Fyb3VzZWxUeXBlID09PSBcImFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgID8gYWN0aXZlQ2xpY2tDbGFzc2VzLmFjdGl2ZV9jbGlja193aXRoX2J0blxuICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgIF0uam9pbihcIiBcIil9XG4gICAgICAgICAgICByZWY9e2Nhcm91c2VsUGFyZW50fVxuICAgICAgICA+XG4gICAgICAgICAgICB7Y2Fyb3VzZWxfaXRlbXM/Lmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgICA8QWxpY2VDYXJvdXNlbFxuICAgICAgICAgICAgICAgICAgICBpdGVtcz17Y2Fyb3VzZWxfaXRlbXN9XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9XG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlPXtwcm9wcy5pbmZpbml0ZX1cbiAgICAgICAgICAgICAgICAgICAgYXV0b1BsYXk9e3Byb3BzLmF1dG9QbGF5fVxuICAgICAgICAgICAgICAgICAgICBhdXRvUGxheURpcmVjdGlvbj17cHJvcHMuYXV0b1BsYXlEaXJlY3Rpb259XG4gICAgICAgICAgICAgICAgICAgIGF1dG9QbGF5Q29udHJvbHM9e3Byb3BzLmF1dG9QbGF5Q29udHJvbHN9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVCdXR0b25zQ29udHJvbHM9e3Byb3BzLmRpc2FibGVCdXR0b25zQ29udHJvbHN9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVEb3RzQ29udHJvbHM9e3Byb3BzLmRpc2FibGVEb3RzQ29udHJvbHN9XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uPXtwcm9wcy5hbmltYXRpb25EdXJhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uVHlwZT17cHJvcHMuYW5pbWF0aW9uVHlwZX1cbiAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmROYXZpZ2F0aW9uPXtwcm9wcy5rZXlib2FyZE5hdmlnYXRpb259XG4gICAgICAgICAgICAgICAgICAgIG1vdXNlVHJhY2tpbmc9e3Byb3BzLm1vdXNlVHJhY2tpbmd9XG4gICAgICAgICAgICAgICAgICAgIHRvdWNoVHJhY2tpbmc9e3Byb3BzLnRvdWNoVHJhY2tpbmd9XG4gICAgICAgICAgICAgICAgICAgIG9uSW5pdGlhbGl6ZWQ9e29uSW5pdGlhbGl6ZWR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbW1vbkNsYXNzZXMubXVsdGlfZW1wdHlfY29udGFpbmVyfT48L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTm9ybWFsQ2Fyb3VzZWwgZnJvbSBcIi4vY29tcG9uZW50cy9Ob3JtYWxDYXJvdXNlbFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJldmlldygpIHtcbiAgICByZXR1cm4gPE5vcm1hbENhcm91c2VsIC8+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJldmlld0NzcygpIHtcbiAgICByZXR1cm4gcmVxdWlyZShcIi4vdWkvTXVsdGlDYXJvdXNlbC5jc3NcIik7XG59XG4iXSwibmFtZXMiOlsic3R5bGVJbmplY3QiLCJjc3MiLCJyZWYiLCJpbnNlcnRBdCIsImRvY3VtZW50IiwiaGVhZCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic3R5bGUiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImZpcnN0Q2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJhcHBlbmRDaGlsZCIsInN0eWxlU2hlZXQiLCJjc3NUZXh0IiwiY3JlYXRlVGV4dE5vZGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsInR5cGVzIiwiVHJhY2VEaXJlY3Rpb25LZXkiLCJEaXJlY3Rpb24iLCJBeGlzIiwiY2FsY3VsYXRlRGlyZWN0aW9uXzEiLCJjYWxjdWxhdGVEaXJlY3Rpb24iLCJfdHlwZXMiLCJyZXF1aXJlIiwidHJhY2UiLCJkaXJlY3Rpb24iLCJuZWdhdGl2ZSIsIk5FR0FUSVZFIiwicG9zaXRpdmUiLCJQT1NJVElWRSIsImN1cnJlbnQiLCJsZW5ndGgiLCJwcmV2aW91cyIsImV2ZXJ5IiwiaSIsIk5PTkUiLCJjb21tb24iLCJnZXREaXJlY3Rpb25LZXkiLCJvYmplY3QiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJrZXkiLCJrZXlzIiwidG9TdHJpbmciLCJnZXREaXJlY3Rpb25WYWx1ZSIsInZhbHVlcyIsImdldERpZmZlcmVuY2UiLCJ4IiwieSIsIk1hdGgiLCJhYnMiLCJyZXNvbHZlQXhpc0RpcmVjdGlvbiIsImF4aXMiLCJMRUZUIiwiUklHSFQiLCJZIiwiQk9UVE9NIiwiVE9QIiwiY2FsY3VsYXRlRGlyZWN0aW9uRGVsdGFfMSIsImNhbGN1bGF0ZURpcmVjdGlvbkRlbHRhIiwiX2NvbW1vbiIsInRyYWNlRGlyZWN0aW9ucyIsImRlbHRhIiwiY3VycmVudEtleSIsImN1cnJlbnRWYWx1ZSIsInByZXYiLCJwcmV2S2V5IiwicHJldlZhbHVlIiwiZGlmZmVyZW5jZSIsImNhbGN1bGF0ZUR1cmF0aW9uXzEiLCJjYWxjdWxhdGVEdXJhdGlvbiIsInByZXZUaW1lIiwibmV4dFRpbWUiLCJjYWxjdWxhdGVNb3ZpbmdQb3NpdGlvbl8xIiwiY2FsY3VsYXRlTW92aW5nUG9zaXRpb24iLCJlIiwidG91Y2hlcyIsImNoYW5nZWRUb3VjaGVzIiwiY2xpZW50WCIsImNsaWVudFkiLCJ1cGRhdGVUcmFjZV8xIiwidXBkYXRlVHJhY2UiLCJsYXN0IiwicHVzaCIsImNhbGN1bGF0ZVRyYWNlRGlyZWN0aW9uc18xIiwiY2FsY3VsYXRlVHJhY2VEaXJlY3Rpb25zIiwiX2RlZmluZVByb3BlcnR5Iiwib2JqIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwidGlja3MiLCJ0aWNrIiwiY3VycmVudERpcmVjdGlvbiIsInNsaWNlIiwicmVzb2x2ZURpcmVjdGlvbl8xIiwicmVzb2x2ZURpcmVjdGlvbiIsIl9jYWxjdWxhdGVEaXJlY3Rpb24iLCJfY2FsY3VsYXRlVHJhY2VEaXJlY3Rpb25zIiwiX2NhbGN1bGF0ZURpcmVjdGlvbkRlbHRhIiwiWCIsImRpcmVjdGlvbkRlbHRhIiwiZGlyZWN0aW9ucyIsIl9kaXJlY3Rpb24iLCJjYWxjdWxhdGVWZWxvY2l0eV8xIiwiY2FsY3VsYXRlVmVsb2NpdHkiLCJ0aW1lIiwibWFnbml0dWRlIiwic3FydCIsImNhbGN1bGF0ZVBvc2l0aW9uXzEiLCJjYWxjdWxhdGVQb3NpdGlvbiIsIl91cGRhdGVUcmFjZSIsIl9yZXNvbHZlRGlyZWN0aW9uIiwiX2NhbGN1bGF0ZUR1cmF0aW9uIiwiX2NhbGN1bGF0ZVZlbG9jaXR5Iiwic3RhdGUiLCJvcHRpb25zIiwic3RhcnQiLCJ0cmFjZVgiLCJ0cmFjZVkiLCJyb3RhdGVQb3NpdGlvbiIsImRlbHRhWCIsImRlbHRhWSIsImFic1giLCJhYnNZIiwiZGlyZWN0aW9uWCIsImRpcmVjdGlvblkiLCJkdXJhdGlvbiIsIkRhdGUiLCJub3ciLCJ2ZWxvY2l0eSIsInBvc2l0aW9uWCIsInBvc2l0aW9uWSIsImNoZWNrSXNNb3JlVGhhblNpbmdsZVRvdWNoZXNfMSIsImNoZWNrSXNNb3JlVGhhblNpbmdsZVRvdWNoZXMiLCJCb29sZWFuIiwiY3JlYXRlT3B0aW9uc18xIiwiY3JlYXRlT3B0aW9ucyIsInByb3h5IiwiZ2V0IiwiaXNQYXNzaXZlU3VwcG9ydGVkIiwiY2hlY2tJc1Bhc3NpdmVTdXBwb3J0ZWRfMSIsImNoZWNrSXNQYXNzaXZlU3VwcG9ydGVkIiwiX2NyZWF0ZU9wdGlvbnMiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwibm9vcCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlcnIiLCJjaGVja0lzVG91Y2hFdmVudHNTdXBwb3J0ZWRfMSIsIl90eXBlb2YiLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiY2hlY2tJc1RvdWNoRXZlbnRzU3VwcG9ydGVkIiwibmF2aWdhdG9yIiwibWF4VG91Y2hQb2ludHMiLCJnZXRJbml0aWFsU3RhdGVfMSIsIm93bktleXMiLCJlbnVtZXJhYmxlT25seSIsImdldE93blByb3BlcnR5U3ltYm9scyIsInN5bWJvbHMiLCJmaWx0ZXIiLCJzeW0iLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJhcHBseSIsIl9vYmplY3RTcHJlYWQiLCJ0YXJnZXQiLCJzb3VyY2UiLCJmb3JFYWNoIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJnZXRJbml0aWFsU3RhdGUiLCJpc1N3aXBpbmciLCJnZXRJbml0aWFsUHJvcHNfMSIsImdldEluaXRpYWxQcm9wcyIsInByb3BzIiwiZWxlbWVudCIsInJvdGF0aW9uQW5nbGUiLCJtb3VzZVRyYWNraW5nRW5hYmxlZCIsInRvdWNoVHJhY2tpbmdFbmFibGVkIiwicHJldmVudERlZmF1bHRUb3VjaG1vdmVFdmVudCIsInByZXZlbnRUcmFja2luZ09uTW91c2VsZWF2ZSIsImdldE9wdGlvbnNfMSIsImdldE9wdGlvbnMiLCJwYXNzaXZlIiwicm90YXRlQnlBbmdsZV8xIiwicm90YXRlQnlBbmdsZSIsInBvc2l0aW9uIiwiYW5nbGUiLCJhbmdsZUluUmFkaWFucyIsIlBJIiwicm90YXRlZFgiLCJjb3MiLCJzaW4iLCJyb3RhdGVkWSIsIl9jYWxjdWxhdGVNb3ZpbmdQb3NpdGlvbiIsIl9jYWxjdWxhdGVQb3NpdGlvbiIsIl9jaGVja0lzTW9yZVRoYW5TaW5nbGVUb3VjaGVzIiwiX2NoZWNrSXNQYXNzaXZlU3VwcG9ydGVkIiwiX2NoZWNrSXNUb3VjaEV2ZW50c1N1cHBvcnRlZCIsIl9nZXRJbml0aWFsU3RhdGUiLCJfZ2V0SW5pdGlhbFByb3BzIiwiX2dldE9wdGlvbnMiLCJfcm90YXRlQnlBbmdsZSIsIl9leHBvcnROYW1lcyIsIlV0aWxzIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJub2RlSW50ZXJvcCIsIldlYWtNYXAiLCJjYWNoZUJhYmVsSW50ZXJvcCIsImNhY2hlTm9kZUludGVyb3AiLCJfX2VzTW9kdWxlIiwiY2FjaGUiLCJoYXMiLCJuZXdPYmoiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3IiLCJkZXNjIiwic2V0IiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiZGVzY3JpcHRvciIsIl9jcmVhdGVDbGFzcyIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsIlZhbmlsbGFTd2lwZSIsImhhbmRsZVN3aXBlU3RhcnQiLCJiaW5kIiwiaGFuZGxlU3dpcGVNb3ZlIiwiaGFuZGxlU3dpcGVFbmQiLCJoYW5kbGVNb3VzZURvd24iLCJoYW5kbGVNb3VzZU1vdmUiLCJoYW5kbGVNb3VzZVVwIiwiaGFuZGxlTW91c2VMZWF2ZSIsImluaXQiLCJzZXR1cFRvdWNoTGlzdGVuZXJzIiwic2V0dXBNb3VzZUxpc3RlbmVycyIsInVwZGF0ZSIsInByZXZQcm9wcyIsIm5leHRQcm9wcyIsImFzc2lnbiIsImRlc3Ryb3kiLCJjbGVhbnVwTW91c2VMaXN0ZW5lcnMiLCJjbGVhbnVwVG91Y2hMaXN0ZW5lcnMiLCJfdGhpcyRwcm9wcyIsImxpc3RlbmVyIiwiX3RoaXMkcHJvcHMyIiwiX3RoaXMkcHJvcHMzIiwiZ2V0RXZlbnREYXRhIiwibW92aW5nUG9zaXRpb24iLCJfVXRpbHMkcm90YXRlQnlBbmdsZSIsIl90aGlzJHN0YXRlIiwiX3RoaXMkZ2V0RXZlbnREYXRhIiwiX3RoaXMkcHJvcHM0Iiwib25Td2lwZVN0YXJ0Iiwib25Td2lwaW5nIiwiY2FuY2VsYWJsZSIsInByZXZlbnREZWZhdWx0IiwiTnVtYmVyIiwiX3RoaXMkcHJvcHM1Iiwib25Td2lwZWQiLCJvblRhcCIsIl9wb3NpdGlvbiIsImlzVG91Y2hFdmVudHNTdXBwb3J0ZWQiLCJBQ1RJT04iLCJJTklUIiwiUkVTSVpFIiwiVVBEQVRFIiwiRXZlbnRUeXBlIiwiRkFERU9VVCIsIlNMSURFIiwiQW5pbWF0aW9uVHlwZSIsIkRFRkFVTFQiLCJBTEwiLCJBdXRvUGxheVN0cmF0ZWd5IiwiQUxURVJOQVRFIiwiUkVTUE9OU0lWRSIsIkNvbnRyb2xzU3RyYXRlZ3kiLCJSVEwiLCJMVFIiLCJBdXRvcGxheURpcmVjdGlvbiIsIkFOSU1BVEVEIiwiUk9PVCIsIldSQVBQRVIiLCJTVEFHRSIsIlNUQUdFX0lURU0iLCJET1RTIiwiRE9UU19JVEVNIiwiUExBWV9CVE4iLCJQTEFZX0JUTl9JVEVNIiwiUExBWV9CVE5fV1JBUFBFUiIsIlNMSURFX0lORk8iLCJTTElERV9JTkZPX0lURU0iLCJCVVRUT05fUFJFViIsIkJVVFRPTl9QUkVWX1dSQVBQRVIiLCJCVVRUT05fUFJFVl9JVEVNIiwiQlVUVE9OX05FWFQiLCJCVVRUT05fTkVYVF9XUkFQUEVSIiwiQlVUVE9OX05FWFRfSVRFTSIsIkNsYXNzbmFtZXMiLCJBQ1RJVkUiLCJJTkFDVElWRSIsIkNMT05FRCIsIkNVU1RPTSIsIlBBVVNFIiwiU0VQQVJBVE9SIiwiU1NSIiwiVEFSR0VUIiwiTW9kaWZpZXJzIiwidHlwZXNfMSIsImFjdGl2ZUluZGV4IiwiYW5pbWF0aW9uRHVyYXRpb24iLCJhbmltYXRpb25FYXNpbmdGdW5jdGlvbiIsImFuaW1hdGlvblR5cGUiLCJhdXRvSGVpZ2h0IiwiYXV0b1dpZHRoIiwiYXV0b1BsYXkiLCJhdXRvUGxheUNvbnRyb2xzIiwiYXV0b1BsYXlEaXJlY3Rpb24iLCJhdXRvUGxheUludGVydmFsIiwiYXV0b1BsYXlTdHJhdGVneSIsImNoaWxkcmVuIiwiY29udHJvbHNTdHJhdGVneSIsImRpc2FibGVCdXR0b25zQ29udHJvbHMiLCJkaXNhYmxlRG90c0NvbnRyb2xzIiwiZGlzYWJsZVNsaWRlSW5mbyIsImluZmluaXRlIiwiaW5uZXJXaWR0aCIsIml0ZW1zIiwia2V5Ym9hcmROYXZpZ2F0aW9uIiwibW91c2VUcmFja2luZyIsIm5hbWUiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsInJlc3BvbnNpdmUiLCJzd2lwZURlbHRhIiwic3dpcGVFeHRyYVBhZGRpbmciLCJzc3JTaWxlbnRNb2RlIiwidG91Y2hUcmFja2luZyIsInRvdWNoTW92ZURlZmF1bHRFdmVudHMiLCJvbkluaXRpYWxpemVkIiwib25SZXNpemVkIiwib25SZXNpemVFdmVudCIsIm9uU2xpZGVDaGFuZ2UiLCJvblNsaWRlQ2hhbmdlZCIsIl9fYXNzaWduIiwibyIsInQiLCJyIiwicyIsIm1hcFBhcnRpYWxDb29yZHMiLCJtYXAiLCJ3aWR0aCIsIm1hcFBvc2l0aW9uQ29vcmRzIiwiZ2V0U2hpZnRJbmRleCIsImdldFN0YXJ0SW5kZXgiLCJnZXRBY3RpdmVJbmRleCIsInN0YXJ0SW5kZXgiLCJpdGVtc0NvdW50IiwiZ2V0VXBkYXRlU2xpZGVQb3NpdGlvbkluZGV4Iiwic2hvdWxkUmVjYWxjdWxhdGVTbGlkZUluZGV4Iiwic2hvdWxkQ2FuY2VsU2xpZGVBbmltYXRpb24iLCJnZXRTd2lwZUxpbWl0TWluIiwiaXRlbXNPZmZzZXQiLCJ0cmFuc2Zvcm1hdGlvblNldCIsIm1pbiIsImdldFN3aXBlTGltaXRNYXgiLCJuIiwiaXRlbXNJblNsaWRlIiwiZ2V0SXRlbUNvb3JkcyIsInNob3VsZFJlY2FsY3VsYXRlU3dpcGVQb3NpdGlvbiIsImdldElzTGVmdERpcmVjdGlvbiIsImdldFN3aXBlU2hpZnRWYWx1ZSIsImdldFRyYW5zZm9ybWF0aW9uSXRlbUluZGV4IiwiZmluZEluZGV4IiwiZ2V0U3dpcGVUcmFuc2Zvcm1hdGlvbkN1cnNvciIsImdldFN3aXBlVG91Y2hlbmRQb3NpdGlvbiIsImlzU3RhZ2VDb250ZW50UGFydGlhbCIsInN3aXBlQWxsb3dlZFBvc2l0aW9uTWF4IiwiZ2V0U3dpcGVUb3VjaGVuZEluZGV4IiwiZCIsImEiLCJ0cmFuc2xhdGUzZCIsImdldEZhZGVvdXRBbmltYXRpb25JbmRleCIsImdldEZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbiIsInN0YWdlV2lkdGgiLCJpc1ZlcnRpY2FsVG91Y2htb3ZlRGV0ZWN0ZWQiLCJjb21tb25fMSIsIm1hcHBlcnNfMSIsIm1hdGhfMSIsImdldFNsaWRlcyIsImdldEl0ZW1zQ291bnQiLCJnZXRJdGVtc09mZnNldCIsImNyZWF0ZUNsb25lcyIsImdldEl0ZW1zSW5TbGlkZSIsInVuc2hpZnQiLCJjb25jYXQiLCJpc0VsZW1lbnQiLCJFbGVtZW50IiwiSFRNTERvY3VtZW50IiwiY3JlYXRlQXV0b3dpZHRoVHJhbnNmb3JtYXRpb25TZXQiLCJBcnJheSIsImZyb20iLCJyZWR1Y2UiLCJnZXRFbGVtZW50RGltZW5zaW9ucyIsImNvb3JkcyIsImNvbnRlbnQiLCJwYXJ0aWFsIiwiY3JlYXRlRGVmYXVsdFRyYW5zZm9ybWF0aW9uU2V0IiwiZ2V0SXRlbVdpZHRoIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0IiwiZ2V0QXV0b2hlaWdodFByb3BlcnR5IiwiZ2V0RWxlbWVudEN1cnNvciIsImdldEVsZW1lbnRGaXJzdENoaWxkIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInBhcnNlRmxvYXQiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJjZWlsIiwib2Zmc2V0SGVpZ2h0Iiwic2hvdWxkSGFuZGxlUmVzaXplRXZlbnQiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsInRyYW5zZm9ybSIsImdldFJlbmRlcldyYXBwZXJTdHlsZXMiLCJnZXRUcmFuc2l0aW9uUHJvcGVydHkiLCJnZXRSZW5kZXJTdGFnZVN0eWxlcyIsImdldFJlbmRlclN0YWdlSXRlbVN0eWxlcyIsImZhZGVvdXRBbmltYXRpb25JbmRleCIsImZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbiIsImZhZGVvdXRBbmltYXRpb25Qcm9jZXNzaW5nIiwiZ2V0VHJhbnNsYXRlM2RQcm9wZXJ0eSIsImdldFRvdWNobW92ZVRyYW5zbGF0ZVBvc2l0aW9uIiwiZmxvb3IiLCJnZXRUcmFuc2xhdGVYUHJvcGVydHkiLCJnZXRUcmFuc2Zvcm1NYXRyaXgiLCJtYXRjaCIsImVsZW1lbnRzXzEiLCJjYW5Vc2VET00iLCJjb25jYXRDbGFzc25hbWVzIiwiam9pbiIsImdldElzU3RhZ2VDb250ZW50UGFydGlhbCIsIml0ZW1zRml0IiwiY2FsY3VsYXRlSW5pdGlhbFN0YXRlIiwibCIsIm0iLCJjIiwidSIsImYiLCJnIiwiSSIsIlMiLCJwIiwidiIsImNsb25lcyIsInN0YWdlQ29udGVudFdpZHRoIiwiaW5pdGlhbFN0YWdlSGVpZ2h0IiwiaXNBdXRvUGxheWluZyIsImlzQXV0b1BsYXlDYW5jZWxlZE9uQWN0aW9uIiwic3dpcGVMaW1pdE1pbiIsInN3aXBlTGltaXRNYXgiLCJzd2lwZVNoaWZ0VmFsdWUiLCJjYW5Vc2VEb20iLCJnZXRSZW5kZXJTdGFnZUl0ZW1DbGFzc2VzIiwiaXNBY3RpdmVJdGVtIiwiaXNDbG9uZWRJdGVtIiwiaXNUYXJnZXRJdGVtIiwiZGVib3VuY2UiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZGVidWciLCJjb25zb2xlIiwiZ2V0QWN0aXZlU2xpZGVJbmRleCIsImdldFNsaWRlSW5kZXhGb3JOb25NdWx0aXBsZUl0ZW1zIiwiZ2V0U2xpZGVJbmRleEZvck11bHRpcGxlSXRlbXMiLCJnZXRBY3RpdmVTbGlkZURvdHNMZW5ndGgiLCJnZXRTbGlkZUluZm8iLCJpdGVtIiwiZ2V0U2xpZGVJdGVtSW5mbyIsImlzUHJldlNsaWRlRGlzYWJsZWQiLCJpc05leHRTbGlkZURpc2FibGVkIiwic2hvdWxkRGlzYWJsZUNvbnRyb2xzIiwiaXNTdHJhdGVneSIsInNob3VsZERpc2FibGVEb3RzIiwic2hvdWxkRGlzYWJsZUJ1dHRvbnMiLCJpbmNsdWRlcyIsImhhc0RvdEZvckVhY2hTbGlkZSIsImdldERvdHNOYXZpZ2F0aW9uTGVuZ3RoIiwiY2hlY2tJc1RoZUxhc3REb3RJbmRleCIsImdldEl0ZW1JbmRleEZvckRvdE5hdmlnYXRpb24iLCJzaG91bGRDYW5jZWxBdXRvUGxheU9uQWN0aW9uIiwic2hvdWxkQ2FuY2VsQXV0b1BsYXlPbkhvdmVyIiwiX19jcmVhdGVCaW5kaW5nIiwiY3JlYXRlIiwiX19leHBvcnRTdGFyIiwiX19pbXBvcnREZWZhdWx0IiwiZGVmYXVsdCIsInJlYWN0XzEiLCJ1dGlsc18xIiwiU2xpZGVJbmZvIiwicmVuZGVyU2xpZGVJbmZvIiwiY2xhc3NOYW1lIiwiU3RhZ2VJdGVtIiwic3R5bGVzIiwiRG90c05hdmlnYXRpb24iLCJvbkNsaWNrIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwicmVuZGVyRG90c0l0ZW0iLCJfIiwiRCIsImlzQWN0aXZlIiwiUGxheVBhdXNlQnV0dG9uIiwiaXNQbGF5aW5nIiwicmVuZGVyUGxheVBhdXNlQnV0dG9uIiwiUHJldk5leHRCdXR0b24iLCJpc0Rpc2FibGVkIiwicmVuZGVyUHJldkJ1dHRvbiIsInJlbmRlck5leHRCdXR0b24iLCJTbGlkZUluZm9fMSIsIlN0YWdlSXRlbV8xIiwiRG90c05hdmlnYXRpb25fMSIsIlBsYXlQYXVzZUJ1dHRvbl8xIiwiUHJldk5leHRCdXR0b25fMSIsIl9fZXh0ZW5kcyIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiU3RyaW5nIiwiX19zZXRNb2R1bGVEZWZhdWx0IiwiX19pbXBvcnRTdGFyIiwiX19hd2FpdGVyIiwiUHJvbWlzZSIsIm5leHQiLCJ0aHJvdyIsImRvbmUiLCJ0aGVuIiwiX19nZW5lcmF0b3IiLCJsYWJlbCIsInNlbnQiLCJ0cnlzIiwib3BzIiwicmV0dXJuIiwicG9wIiwidmFuaWxsYV9zd2lwZV8xIiwiZGVmYXVsdFByb3BzXzEiLCJWaWV3cyIsIkFsaWNlQ2Fyb3VzZWwiLCJzd2lwZUxpc3RlbmVyIiwiX2hhbmRsZUtleWJvYXJkRXZlbnRzIiwiY29kZSIsIl9oYW5kbGVQbGF5UGF1c2VUb2dnbGUiLCJzbGlkZVByZXYiLCJzbGlkZU5leHQiLCJfaGFuZGxlQmVmb3JlU2xpZGVFbmQiLCJfaGFuZGxlVXBkYXRlU2xpZGVQb3NpdGlvbiIsInNldFN0YXRlIiwiX2hhbmRsZVNsaWRlQ2hhbmdlZCIsIl9oYW5kbGVNb3VzZUVudGVyIiwiaXNIb3ZlcmVkIiwiX2hhbmRsZVBhdXNlIiwiX2hhbmRsZU1vdXNlTGVhdmUiLCJfaGFuZGxlUGxheSIsIl9jbGVhckF1dG9QbGF5VGltZW91dCIsImhhc1VzZXJBY3Rpb24iLCJfc2V0Um9vdENvbXBvbmVudFJlZiIsInJvb3RFbGVtZW50IiwiX3NldFN0YWdlQ29tcG9uZW50UmVmIiwic3RhZ2VDb21wb25lbnQiLCJfcmVuZGVyU3RhZ2VJdGVtIiwiX3JlbmRlclNsaWRlSW5mbyIsImlzQW5pbWF0aW9uRGlzYWJsZWQiLCJpc1RvdWNoTW92ZVByb2Nlc3NTdGFydGVkIiwiY2FuY2VsVG91Y2hBbmltYXRpb25zIiwicm9vdENvbXBvbmVudERpbWVuc2lvbnMiLCJzdGFydFRvdWNobW92ZVBvc2l0aW9uIiwic2xpZGVUbyIsIl9oYW5kbGVUb3VjaG1vdmUiLCJfaGFuZGxlVG91Y2hlbmQiLCJfaGFuZGxlRG90Q2xpY2siLCJfaGFuZGxlUmVzaXplIiwiX2hhbmRsZVJlc2l6ZURlYm91bmNlZCIsIl9jYW5jZWxSZXNpemVEZWJvdW5jZWQiLCJjb21wb25lbnREaWRNb3VudCIsIl9zZXRJbml0aWFsU3RhdGUiLCJfYWRkRXZlbnRMaXN0ZW5lcnMiLCJfc2V0dXBTd2lwZUhhbmRsZXJzIiwiY29tcG9uZW50RGlkVXBkYXRlIiwiaCIsIl91cGRhdGVDb21wb25lbnQiLCJfdXBkYXRlU3dpcGVQcm9wcyIsIl91cGRhdGVFdmVudExpc3RlbmVycyIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiX2NhbmNlbFRpbWVvdXRBbmltYXRpb25zIiwiX3JlbW92ZUV2ZW50TGlzdGVuZXJzIiwic2xpZGUiLCJpc0ZhZGVvdXRBbmltYXRpb25BbGxvd2VkIiwiX2hhbmRsZVNsaWRlVG8iLCJldmVudFR5cGUiLCJpc1RydXN0ZWQiLCJfaGFuZGxlUmVzaXplZCIsIl9zZXRUb3VjaG1vdmVQb3NpdGlvbiIsIl9oYW5kbGVTbGlkZUNoYW5nZSIsInRvdWNobW92ZVBvc2l0aW9uIiwiX2NsZWFyVG91Y2htb3ZlUG9zaXRpb24iLCJfaGFuZGxlQmVmb3JlVG91Y2hFbmQiLCJ0b3VjaEVuZFRpbWVvdXRJZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNsaWRlRW5kVGltZW91dElkIiwiZXZlbnRPYmplY3QiLCJfc2V0QXV0b1BsYXlJbnRlcnZhbCIsIl9jbGVhclNsaWRlRW5kVGltZW91dCIsImNsZWFyVG91Y2hlbmRUaW1lb3V0IiwiYXV0b1BsYXlUaW1lb3V0SWQiLCJfcmVuZGVyRG90c05hdmlnYXRpb24iLCJfcmVuZGVyUHJldkJ1dHRvbiIsIl9yZW5kZXJOZXh0QnV0dG9uIiwiX3JlbmRlclBsYXlQYXVzZUJ1dHRvbiIsInJlbmRlciIsImRlZmF1bHRQcm9wcyIsIlB1cmVDb21wb25lbnQiLCJnZXRSYW5kb21WYWx1ZXMiLCJybmRzOCIsIlVpbnQ4QXJyYXkiLCJybmciLCJjcnlwdG8iLCJFcnJvciIsInZhbGlkYXRlIiwidXVpZCIsIlJFR0VYIiwidGVzdCIsImJ5dGVUb0hleCIsInVuc2FmZVN0cmluZ2lmeSIsImFyciIsIm9mZnNldCIsInRvTG93ZXJDYXNlIiwicGFyc2UiLCJwYXJzZUludCIsInN0cmluZ1RvQnl0ZXMiLCJzdHIiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsImJ5dGVzIiwiY2hhckNvZGVBdCIsIkROUyIsIlVSTCIsInYzNSIsInZlcnNpb24iLCJoYXNoZnVuYyIsImdlbmVyYXRlVVVJRCIsIm5hbWVzcGFjZSIsImJ1ZiIsIl9uYW1lc3BhY2UiLCJtZDUiLCJtc2ciLCJtZDVUb0hleEVuY29kZWRBcnJheSIsIndvcmRzVG9NZDUiLCJieXRlc1RvV29yZHMiLCJpbnB1dCIsIm91dHB1dCIsImxlbmd0aDMyIiwiaGV4VGFiIiwiaGV4IiwiY2hhckF0IiwiZ2V0T3V0cHV0TGVuZ3RoIiwiaW5wdXRMZW5ndGg4IiwibGVuIiwiYiIsIm9sZGEiLCJvbGRiIiwib2xkYyIsIm9sZGQiLCJtZDVmZiIsIm1kNWdnIiwibWQ1aGgiLCJtZDVpaSIsInNhZmVBZGQiLCJsZW5ndGg4IiwiVWludDMyQXJyYXkiLCJsc3ciLCJtc3ciLCJiaXRSb3RhdGVMZWZ0IiwibnVtIiwiY250IiwibWQ1Y21uIiwicSIsInJhbmRvbVVVSUQiLCJ2NCIsIm5hdGl2ZSIsInJuZHMiLCJyYW5kb20iLCJ6IiwiUk9UTCIsInNoYTEiLCJLIiwiSCIsImlzQXJyYXkiLCJOIiwiTSIsImoiLCJwb3ciLCJXIiwiVCIsImRlZmF1bHRSZXNwb25zaXZlIiwiZ2V0TmV3UmVzcG9uc2l2ZVZhbHVlcyIsInJhdGUiLCJuZXdSZXNwb25zaXZlIiwibmV3VmFsdWUiLCJyb3VuZCIsIm1heCIsImNsYXNzZXNBY3Rpb24iLCJhZGQiLCJyZW1vdmUiLCJjb21tb25DbGFzc2VzIiwibXVsdGlfY29udGFpbmVyIiwibXVsdGlfZW1wdHlfY29udGFpbmVyIiwiYWN0aXZlIiwibm9fZG90cyIsIm5vcm1hbENhcm91c2VsQ2xhc3NlcyIsIm5vcm1hbF9jb250YWluZXIiLCJub3JtYWxfaXRlbSIsImFjdGl2ZUNsaWNrQ2xhc3NlcyIsImFjdGl2ZV9jbGlja19jb250YWluZXIiLCJhY3RpdmVfY2xpY2tfaXRlbSIsImFjdGl2ZV9jbGlja193aXRoX2J0biIsIk5vcm1hbENhcm91c2VsIiwiY2Fyb3VzZWxQYXJlbnQiLCJ1c2VSZWYiLCJjYXJvdXNlbF9pdGVtcyIsInNldF9jYXJvdXNlbF9pdGVtcyIsInVzZVN0YXRlIiwic2V0UmVzcG9uc2l2ZSIsInVuaXF1ZUNsYXNzIiwic2V0VW5pcXVlQ2xhc3MiLCJzZXROZXdSZXNwb25zaXZlIiwiY2xpZW50V2lkdGgiLCJhZGRPclJlbW92ZUNsYXNzTmFtZSIsIm5vZGUiLCJhY3Rpb24iLCJjbGFzc0xpc3QiLCJjaGFuZ2VBY3RpdmVDbGFzcyIsImdldElkeENsYXNzTmFtZSIsImNsaWNrZWRJdGVtIiwiY29udGFpbnMiLCJwYXJlbnROb2RlIiwiY2xhc3NOYW1lcyIsInNwbGl0Iiwib25DYXJkQ2xpY2tlZCIsImNhbkV4ZWN1dGUiLCJleGVjdXRlIiwiYWN0aXZlTm9kZSIsInF1ZXJ5U2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaWR4Q2xhc3MiLCJpdGVtVG9TZXRBY3RpdmUiLCJjYXJvdXNlbFR5cGUiLCJ1c2VFZmZlY3QiLCJ1dWlkdjQiLCJyZXNpemVPYnNlcnZlciIsIlJlc2l6ZU9ic2VydmVyIiwib2JzZXJ2ZSIsImRpc2Nvbm5lY3QiLCJkYXRhIiwic3RhdHVzIiwiYWN0aXZlX2NsaWNrX2NsaWNrYWJsZV9pdGVtIiwicHJldmlldyIsImdldFByZXZpZXdDc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsV0FBV0EsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7RUFDN0IsSUFBS0EsR0FBRyxLQUFLLEtBQUssQ0FBQyxFQUFHQSxHQUFHLEdBQUcsRUFBRSxDQUFBO0FBQzlCLEVBQUEsSUFBSUMsUUFBUSxHQUFHRCxHQUFHLENBQUNDLFFBQVEsQ0FBQTtBQUUzQixFQUFBLElBQUksQ0FBQ0YsR0FBRyxJQUFJLE9BQU9HLFFBQVEsS0FBSyxXQUFXLEVBQUU7QUFBRSxJQUFBLE9BQUE7QUFBUSxHQUFBO0FBRXZELEVBQUEsSUFBSUMsSUFBSSxHQUFHRCxRQUFRLENBQUNDLElBQUksSUFBSUQsUUFBUSxDQUFDRSxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUNwRSxFQUFBLElBQUlDLEtBQUssR0FBR0gsUUFBUSxDQUFDSSxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7RUFDM0NELEtBQUssQ0FBQ0UsSUFBSSxHQUFHLFVBQVUsQ0FBQTtFQUV2QixJQUFJTixRQUFRLEtBQUssS0FBSyxFQUFFO0lBQ3RCLElBQUlFLElBQUksQ0FBQ0ssVUFBVSxFQUFFO01BQ25CTCxJQUFJLENBQUNNLFlBQVksQ0FBQ0osS0FBSyxFQUFFRixJQUFJLENBQUNLLFVBQVUsQ0FBQyxDQUFBO0FBQzNDLEtBQUMsTUFBTTtBQUNMTCxNQUFBQSxJQUFJLENBQUNPLFdBQVcsQ0FBQ0wsS0FBSyxDQUFDLENBQUE7QUFDekIsS0FBQTtBQUNGLEdBQUMsTUFBTTtBQUNMRixJQUFBQSxJQUFJLENBQUNPLFdBQVcsQ0FBQ0wsS0FBSyxDQUFDLENBQUE7QUFDekIsR0FBQTtFQUVBLElBQUlBLEtBQUssQ0FBQ00sVUFBVSxFQUFFO0FBQ3BCTixJQUFBQSxLQUFLLENBQUNNLFVBQVUsQ0FBQ0MsT0FBTyxHQUFHYixHQUFHLENBQUE7QUFDaEMsR0FBQyxNQUFNO0lBQ0xNLEtBQUssQ0FBQ0ssV0FBVyxDQUFDUixRQUFRLENBQUNXLGNBQWMsQ0FBQ2QsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUNqRCxHQUFBO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQWUsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sRUFBRSxZQUFZLEVBQUU7QUFDM0NDLEVBQUFBLEtBQUssRUFBRSxJQUFBO0FBQ1QsQ0FBQyxDQUFDLENBQUE7QUFDRkQsT0FBQUEsQ0FBQUEsaUJBQXlCLEdBQW9CRSxPQUFBLENBQUEsU0FBQSxlQUFlLEdBQUcsS0FBSyxFQUFDO0FBQ3JFLElBQUlDLGlCQUFpQixDQUFBO0FBQ0lELE9BQUEsQ0FBQSxpQkFBQSxHQUFHQyxpQkFBaUIsQ0FBQTtBQUU3QyxDQUFDLFVBQVVBLGlCQUFpQixFQUFFO0FBQzVCQSxFQUFBQSxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsR0FBRyxVQUFVLENBQUE7QUFDMUNBLEVBQUFBLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxHQUFHLFVBQVUsQ0FBQTtBQUMxQ0EsRUFBQUEsaUJBQWlCLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFBO0FBQ3BDLENBQUMsRUFBRUEsaUJBQWlCLEtBQThCRCxPQUFBLENBQUEsaUJBQUEsR0FBR0MsaUJBQWlCLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQTtBQUU3RSxJQUFJQyxTQUFTLENBQUE7QUFDSUYsT0FBQSxDQUFBLFNBQUEsR0FBR0UsVUFBUztBQUU3QixDQUFDLFVBQVVBLFNBQVMsRUFBRTtBQUNwQkEsRUFBQUEsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQTtBQUN4QkEsRUFBQUEsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQTtBQUMxQkEsRUFBQUEsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLE9BQU8sQ0FBQTtBQUM1QkEsRUFBQUEsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLFFBQVEsQ0FBQTtBQUM5QkEsRUFBQUEsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQTtBQUM1QixDQUFDLEVBQUVBLFNBQVMsS0FBc0JGLE9BQUEsQ0FBQSxTQUFBLEdBQUdFLFNBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFBO0FBRXJELElBQUlDLElBQUksQ0FBQTtBQUNJSCxPQUFBLENBQUEsSUFBQSxHQUFHRyxLQUFJO0FBRW5CLENBQUMsVUFBVUEsSUFBSSxFQUFFO0FBQ2ZBLEVBQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZkEsRUFBQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNqQixDQUFDLEVBQUVBLElBQUksS0FBS0wsT0FBQUEsQ0FBQUEsSUFBWSxHQUFHSyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7O0FDOUJ0Q1AsTUFBTSxDQUFDQyxjQUFjLENBQUNDLG9CQUFPLEVBQUUsWUFBWSxFQUFFO0FBQzNDQyxFQUFBQSxLQUFLLEVBQUUsSUFBQTtBQUNULENBQUMsQ0FBQyxDQUFBO0FBQ3dCSyxvQkFBQSxDQUFBLGtCQUFBLEdBQUdDLG1CQUFrQjtBQUUvQyxJQUFJQyxRQUFNLEdBQUdDLE9BQW1CLENBQUE7QUFFaEMsU0FBU0Ysa0JBQWtCQSxDQUFDRyxLQUFLLEVBQUU7QUFDakMsRUFBQSxJQUFJQyxTQUFTLENBQUE7QUFDYixFQUFBLElBQUlDLFFBQVEsR0FBR0osUUFBTSxDQUFDTCxpQkFBaUIsQ0FBQ1UsUUFBUSxDQUFBO0FBQ2hELEVBQUEsSUFBSUMsUUFBUSxHQUFHTixRQUFNLENBQUNMLGlCQUFpQixDQUFDWSxRQUFRLENBQUE7RUFDaEQsSUFBSUMsT0FBTyxHQUFHTixLQUFLLENBQUNBLEtBQUssQ0FBQ08sTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBO0VBQ3JDLElBQUlDLFFBQVEsR0FBR1IsS0FBSyxDQUFDQSxLQUFLLENBQUNPLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUE7QUFFM0MsRUFBQSxJQUFJUCxLQUFLLENBQUNTLEtBQUssQ0FBQyxVQUFVQyxDQUFDLEVBQUU7SUFDM0IsT0FBT0EsQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUNoQixHQUFDLENBQUMsRUFBRTtBQUNGLElBQUEsT0FBT1osUUFBTSxDQUFDTCxpQkFBaUIsQ0FBQ2tCLElBQUksQ0FBQTtBQUN0QyxHQUFBO0FBRUFWLEVBQUFBLFNBQVMsR0FBR0ssT0FBTyxHQUFHRSxRQUFRLEdBQUdKLFFBQVEsR0FBR0YsUUFBUSxDQUFBO0VBRXBELElBQUlJLE9BQU8sS0FBSyxDQUFDLEVBQUU7QUFDakJMLElBQUFBLFNBQVMsR0FBR08sUUFBUSxHQUFHLENBQUMsR0FBR0osUUFBUSxHQUFHRixRQUFRLENBQUE7QUFDaEQsR0FBQTtBQUVBLEVBQUEsT0FBT0QsU0FBUyxDQUFBO0FBQ2xCOzs7Ozs7QUMzQkFiLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxRQUFPLEVBQUUsWUFBWSxFQUFFO0FBQzNDQyxFQUFBQSxLQUFLLEVBQUUsSUFBQTtBQUNULENBQUMsQ0FBQyxDQUFBO0FBQzBCcUIsUUFBQSxDQUFBLG9CQUFBLDZCQUE0QixHQUFHdEIsUUFBQUEsQ0FBQUEsZUFBdUIsR0FBd0JzQixRQUFBLENBQUEsYUFBQSxHQUFHLEtBQUssRUFBQztBQUVuSCxJQUFJZCxRQUFNLEdBQUdDLE9BQW1CLENBQUE7QUFFaEMsSUFBSWMsZUFBZSxHQUFHLFNBQVNBLGVBQWVBLEdBQUc7RUFDL0MsSUFBSUMsTUFBTSxHQUFHQyxTQUFTLENBQUNSLE1BQU0sR0FBRyxDQUFDLElBQUlRLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBS0MsU0FBUyxHQUFHRCxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFBO0VBQ25GLElBQUlFLEdBQUcsR0FBRzdCLE1BQU0sQ0FBQzhCLElBQUksQ0FBQ0osTUFBTSxDQUFDLENBQUNLLFFBQVEsRUFBRSxDQUFBO0FBRXhDLEVBQUEsUUFBUUYsR0FBRztBQUNULElBQUEsS0FBS25CLFFBQU0sQ0FBQ0wsaUJBQWlCLENBQUNZLFFBQVE7QUFDcEMsTUFBQSxPQUFPUCxRQUFNLENBQUNMLGlCQUFpQixDQUFDWSxRQUFRLENBQUE7QUFFMUMsSUFBQSxLQUFLUCxRQUFNLENBQUNMLGlCQUFpQixDQUFDVSxRQUFRO0FBQ3BDLE1BQUEsT0FBT0wsUUFBTSxDQUFDTCxpQkFBaUIsQ0FBQ1UsUUFBUSxDQUFBO0FBRTFDLElBQUE7QUFDRSxNQUFBLE9BQU9MLFFBQU0sQ0FBQ0wsaUJBQWlCLENBQUNrQixJQUFJLENBQUE7QUFBQyxHQUFBO0FBRTNDLENBQUMsQ0FBQTtBQUVzQkMsUUFBQSxDQUFBLGVBQUEsR0FBR0MsZ0JBQWU7QUFFekMsSUFBSU8saUJBQWlCLEdBQUcsU0FBU0EsaUJBQWlCQSxHQUFHO0VBQ25ELElBQUlDLE1BQU0sR0FBR04sU0FBUyxDQUFDUixNQUFNLEdBQUcsQ0FBQyxJQUFJUSxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUtDLFNBQVMsR0FBR0QsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtFQUNuRixPQUFPTSxNQUFNLENBQUNBLE1BQU0sQ0FBQ2QsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUN2QyxDQUFDLENBQUE7QUFFd0JLLFFBQUEsQ0FBQSxpQkFBQSxHQUFHUSxrQkFBaUI7QUFFN0MsSUFBSUUsYUFBYSxHQUFHLFNBQVNBLGFBQWFBLEdBQUc7RUFDM0MsSUFBSUMsQ0FBQyxHQUFHUixTQUFTLENBQUNSLE1BQU0sR0FBRyxDQUFDLElBQUlRLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBS0MsU0FBUyxHQUFHRCxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0VBQzdFLElBQUlTLENBQUMsR0FBR1QsU0FBUyxDQUFDUixNQUFNLEdBQUcsQ0FBQyxJQUFJUSxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUtDLFNBQVMsR0FBR0QsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUM3RSxFQUFBLE9BQU9VLElBQUksQ0FBQ0MsR0FBRyxDQUFDSCxDQUFDLEdBQUdDLENBQUMsQ0FBQyxDQUFBO0FBQ3hCLENBQUMsQ0FBQTtBQUVvQlosUUFBQSxDQUFBLGFBQUEsR0FBR1UsY0FBYTtBQUVyQyxJQUFJSyxvQkFBb0IsR0FBRyxTQUFTQSxvQkFBb0JBLENBQUNDLElBQUksRUFBRVgsR0FBRyxFQUFFO0FBQ2xFLEVBQUEsSUFBSWYsUUFBUSxHQUFHSixRQUFNLENBQUNKLFNBQVMsQ0FBQ21DLElBQUksQ0FBQTtBQUNwQyxFQUFBLElBQUl6QixRQUFRLEdBQUdOLFFBQU0sQ0FBQ0osU0FBUyxDQUFDb0MsS0FBSyxDQUFBO0FBQ3JDLEVBQUEsSUFBSTdCLFNBQVMsR0FBR0gsUUFBTSxDQUFDSixTQUFTLENBQUNpQixJQUFJLENBQUE7QUFFckMsRUFBQSxJQUFJaUIsSUFBSSxLQUFLOUIsUUFBTSxDQUFDSCxJQUFJLENBQUNvQyxDQUFDLEVBQUU7QUFDMUI3QixJQUFBQSxRQUFRLEdBQUdKLFFBQU0sQ0FBQ0osU0FBUyxDQUFDc0MsTUFBTSxDQUFBO0FBQ2xDNUIsSUFBQUEsUUFBUSxHQUFHTixRQUFNLENBQUNKLFNBQVMsQ0FBQ3VDLEdBQUcsQ0FBQTtBQUNqQyxHQUFBO0FBRUEsRUFBQSxJQUFJaEIsR0FBRyxLQUFLbkIsUUFBTSxDQUFDTCxpQkFBaUIsQ0FBQ1UsUUFBUSxFQUFFO0FBQzdDRixJQUFBQSxTQUFTLEdBQUdDLFFBQVEsQ0FBQTtBQUN0QixHQUFBO0FBRUEsRUFBQSxJQUFJZSxHQUFHLEtBQUtuQixRQUFNLENBQUNMLGlCQUFpQixDQUFDWSxRQUFRLEVBQUU7QUFDN0NKLElBQUFBLFNBQVMsR0FBR0csUUFBUSxDQUFBO0FBQ3RCLEdBQUE7QUFFQSxFQUFBLE9BQU9ILFNBQVMsQ0FBQTtBQUNsQixDQUFDLENBQUE7QUFFRFgsUUFBQUEsQ0FBQUEsb0JBQTRCLEdBQUdxQyxvQkFBb0I7O0FDN0RuRHZDLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyx5QkFBTyxFQUFFLFlBQVksRUFBRTtBQUMzQ0MsRUFBQUEsS0FBSyxFQUFFLElBQUE7QUFDVCxDQUFDLENBQUMsQ0FBQTtBQUM2QjJDLHlCQUFBLENBQUEsdUJBQUEsR0FBR0Msd0JBQXVCO0FBRXpELElBQUlyQyxRQUFNLEdBQUdDLE9BQW1CLENBQUE7QUFFaEMsSUFBSXFDLFNBQU8sR0FBR3JDLFFBQW1CLENBQUE7QUFFakMsU0FBU29DLHVCQUF1QkEsQ0FBQ0UsZUFBZSxFQUFFO0VBQ2hELElBQUlDLEtBQUssR0FBR3ZCLFNBQVMsQ0FBQ1IsTUFBTSxHQUFHLENBQUMsSUFBSVEsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLQyxTQUFTLEdBQUdELFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDakYsRUFBQSxJQUFJUixNQUFNLEdBQUc4QixlQUFlLENBQUM5QixNQUFNLENBQUE7QUFDbkMsRUFBQSxJQUFJRyxDQUFDLEdBQUdILE1BQU0sR0FBRyxDQUFDLENBQUE7QUFDbEIsRUFBQSxJQUFJTixTQUFTLEdBQUdILFFBQU0sQ0FBQ0wsaUJBQWlCLENBQUNrQixJQUFJLENBQUE7QUFFN0MsRUFBQSxPQUFPRCxDQUFDLElBQUksQ0FBQyxFQUFFQSxDQUFDLEVBQUUsRUFBRTtBQUNsQixJQUFBLElBQUlKLE9BQU8sR0FBRytCLGVBQWUsQ0FBQzNCLENBQUMsQ0FBQyxDQUFBO0lBQ2hDLElBQUk2QixVQUFVLEdBQUcsSUFBSUgsU0FBTyxDQUFDdkIsZUFBZSxFQUFFUCxPQUFPLENBQUMsQ0FBQTtBQUN0RCxJQUFBLElBQUlrQyxZQUFZLEdBQUcsSUFBSUosU0FBTyxDQUFDaEIsaUJBQWlCLEVBQUVkLE9BQU8sQ0FBQ2lDLFVBQVUsQ0FBQyxDQUFDLENBQUE7SUFDdEUsSUFBSUUsSUFBSSxHQUFHSixlQUFlLENBQUMzQixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ3ZDLElBQUlnQyxPQUFPLEdBQUcsSUFBSU4sU0FBTyxDQUFDdkIsZUFBZSxFQUFFNEIsSUFBSSxDQUFDLENBQUE7QUFDaEQsSUFBQSxJQUFJRSxTQUFTLEdBQUcsSUFBSVAsU0FBTyxDQUFDaEIsaUJBQWlCLEVBQUVxQixJQUFJLENBQUNDLE9BQU8sQ0FBQyxDQUFDLENBQUE7QUFDN0QsSUFBQSxJQUFJRSxVQUFVLEdBQUcsSUFBSVIsU0FBTyxDQUFDZCxhQUFhLEVBQUVrQixZQUFZLEVBQUVHLFNBQVMsQ0FBQyxDQUFBO0lBRXBFLElBQUlDLFVBQVUsSUFBSU4sS0FBSyxFQUFFO0FBQ3ZCckMsTUFBQUEsU0FBUyxHQUFHc0MsVUFBVSxDQUFBO0FBQ3RCLE1BQUEsTUFBQTtBQUNGLEtBQUMsTUFBTTtBQUNMdEMsTUFBQUEsU0FBUyxHQUFHeUMsT0FBTyxDQUFBO0FBQ3JCLEtBQUE7QUFDRixHQUFBO0FBRUEsRUFBQSxPQUFPekMsU0FBUyxDQUFBO0FBQ2xCOzs7O0FDakNBYixNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsbUJBQU8sRUFBRSxZQUFZLEVBQUU7QUFDM0NDLEVBQUFBLEtBQUssRUFBRSxJQUFBO0FBQ1QsQ0FBQyxDQUFDLENBQUE7QUFDdUJzRCxtQkFBQSxDQUFBLGlCQUFBLEdBQUdDLGtCQUFpQjtBQUU3QyxTQUFTQSxpQkFBaUJBLEdBQUc7RUFDM0IsSUFBSUMsUUFBUSxHQUFHaEMsU0FBUyxDQUFDUixNQUFNLEdBQUcsQ0FBQyxJQUFJUSxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUtDLFNBQVMsR0FBR0QsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtFQUNwRixJQUFJaUMsUUFBUSxHQUFHakMsU0FBUyxDQUFDUixNQUFNLEdBQUcsQ0FBQyxJQUFJUSxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUtDLFNBQVMsR0FBR0QsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUNwRixFQUFBLE9BQU9nQyxRQUFRLEdBQUdDLFFBQVEsR0FBR0QsUUFBUSxHQUFHLENBQUMsQ0FBQTtBQUMzQzs7OztBQ1RBM0QsTUFBTSxDQUFDQyxjQUFjLENBQUNDLHlCQUFPLEVBQUUsWUFBWSxFQUFFO0FBQzNDQyxFQUFBQSxLQUFLLEVBQUUsSUFBQTtBQUNULENBQUMsQ0FBQyxDQUFBO0FBQzZCMEQseUJBQUEsQ0FBQSx1QkFBQSxHQUFHQyx3QkFBdUI7QUFFekQsU0FBU0EsdUJBQXVCQSxDQUFDQyxDQUFDLEVBQUU7RUFDbEMsSUFBSSxnQkFBZ0IsSUFBSUEsQ0FBQyxFQUFFO0lBQ3pCLElBQUlDLE9BQU8sR0FBR0QsQ0FBQyxDQUFDRSxjQUFjLElBQUlGLENBQUMsQ0FBQ0UsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3JELE9BQU87QUFDTDlCLE1BQUFBLENBQUMsRUFBRTZCLE9BQU8sSUFBSUEsT0FBTyxDQUFDRSxPQUFPO0FBQzdCOUIsTUFBQUEsQ0FBQyxFQUFFNEIsT0FBTyxJQUFJQSxPQUFPLENBQUNHLE9BQUFBO0tBQ3ZCLENBQUE7QUFDSCxHQUFBO0VBRUEsT0FBTztJQUNMaEMsQ0FBQyxFQUFFNEIsQ0FBQyxDQUFDRyxPQUFPO0lBQ1o5QixDQUFDLEVBQUUyQixDQUFDLENBQUNJLE9BQUFBO0dBQ04sQ0FBQTtBQUNIOzs7Ozs7QUNsQkFuRSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsYUFBTyxFQUFFLFlBQVksRUFBRTtBQUMzQ0MsRUFBQUEsS0FBSyxFQUFFLElBQUE7QUFDVCxDQUFDLENBQUMsQ0FBQTtBQUNpQmlFLGFBQUEsQ0FBQSxXQUFBLEdBQUdDLFlBQVc7QUFFakMsU0FBU0EsV0FBV0EsQ0FBQ3pELEtBQUssRUFBRVQsS0FBSyxFQUFFO0VBQ2pDLElBQUltRSxJQUFJLEdBQUcxRCxLQUFLLENBQUNBLEtBQUssQ0FBQ08sTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBO0VBRWxDLElBQUltRCxJQUFJLEtBQUtuRSxLQUFLLEVBQUU7QUFDbEJTLElBQUFBLEtBQUssQ0FBQzJELElBQUksQ0FBQ3BFLEtBQUssQ0FBQyxDQUFBO0FBQ25CLEdBQUE7QUFFQSxFQUFBLE9BQU9TLEtBQUssQ0FBQTtBQUNkOzs7Ozs7QUNiQVosTUFBTSxDQUFDQyxjQUFjLENBQUNDLDBCQUFPLEVBQUUsWUFBWSxFQUFFO0FBQzNDQyxFQUFBQSxLQUFLLEVBQUUsSUFBQTtBQUNULENBQUMsQ0FBQyxDQUFBO0FBQzhCcUUsMEJBQUEsQ0FBQSx3QkFBQSxHQUFHQyx5QkFBd0I7QUFFM0QsSUFBSS9ELFFBQU0sR0FBR0MsT0FBbUIsQ0FBQTtBQUVoQyxTQUFTK0QsaUJBQWVBLENBQUNDLEdBQUcsRUFBRTlDLEdBQUcsRUFBRTFCLEtBQUssRUFBRTtFQUFFLElBQUkwQixHQUFHLElBQUk4QyxHQUFHLEVBQUU7QUFBRTNFLElBQUFBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDMEUsR0FBRyxFQUFFOUMsR0FBRyxFQUFFO0FBQUUxQixNQUFBQSxLQUFLLEVBQUVBLEtBQUs7QUFBRXlFLE1BQUFBLFVBQVUsRUFBRSxJQUFJO0FBQUVDLE1BQUFBLFlBQVksRUFBRSxJQUFJO0FBQUVDLE1BQUFBLFFBQVEsRUFBRSxJQUFBO0FBQUssS0FBQyxDQUFDLENBQUE7QUFBRSxHQUFDLE1BQU07QUFBRUgsSUFBQUEsR0FBRyxDQUFDOUMsR0FBRyxDQUFDLEdBQUcxQixLQUFLLENBQUE7QUFBRSxHQUFBO0FBQUUsRUFBQSxPQUFPd0UsR0FBRyxDQUFBO0FBQUUsQ0FBQTtBQUVoTixTQUFTRix3QkFBd0JBLEdBQUc7RUFDbEMsSUFBSTdELEtBQUssR0FBR2UsU0FBUyxDQUFDUixNQUFNLEdBQUcsQ0FBQyxJQUFJUSxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUtDLFNBQVMsR0FBR0QsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtFQUNsRixJQUFJb0QsS0FBSyxHQUFHLEVBQUUsQ0FBQTtBQUNkLEVBQUEsSUFBSS9ELFFBQVEsR0FBR04sUUFBTSxDQUFDTCxpQkFBaUIsQ0FBQ1ksUUFBUSxDQUFBO0FBQ2hELEVBQUEsSUFBSUgsUUFBUSxHQUFHSixRQUFNLENBQUNMLGlCQUFpQixDQUFDVSxRQUFRLENBQUE7RUFDaEQsSUFBSU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTtFQUNULElBQUkwRCxJQUFJLEdBQUcsRUFBRSxDQUFBO0FBQ2IsRUFBQSxJQUFJbkUsU0FBUyxHQUFHSCxRQUFNLENBQUNMLGlCQUFpQixDQUFDa0IsSUFBSSxDQUFBO0VBRTdDLE9BQU9ELENBQUMsR0FBR1YsS0FBSyxDQUFDTyxNQUFNLEVBQUVHLENBQUMsRUFBRSxFQUFFO0FBQzVCLElBQUEsSUFBSUosT0FBTyxHQUFHTixLQUFLLENBQUNVLENBQUMsQ0FBQyxDQUFBO0FBQ3RCLElBQUEsSUFBSStCLElBQUksR0FBR3pDLEtBQUssQ0FBQ1UsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0lBRXZCLElBQUkwRCxJQUFJLENBQUM3RCxNQUFNLEVBQUU7TUFDZixJQUFJOEQsZ0JBQWdCLEdBQUcvRCxPQUFPLEdBQUdtQyxJQUFJLEdBQUdyQyxRQUFRLEdBQUdGLFFBQVEsQ0FBQTtBQUUzRCxNQUFBLElBQUlELFNBQVMsS0FBS0gsUUFBTSxDQUFDTCxpQkFBaUIsQ0FBQ2tCLElBQUksRUFBRTtBQUMvQ1YsUUFBQUEsU0FBUyxHQUFHb0UsZ0JBQWdCLENBQUE7QUFDOUIsT0FBQTtNQUVBLElBQUlBLGdCQUFnQixLQUFLcEUsU0FBUyxFQUFFO0FBQ2xDbUUsUUFBQUEsSUFBSSxDQUFDVCxJQUFJLENBQUNyRCxPQUFPLENBQUMsQ0FBQTtBQUNwQixPQUFDLE1BQU07QUFDTDZELFFBQUFBLEtBQUssQ0FBQ1IsSUFBSSxDQUFDRyxpQkFBZSxDQUFDLEVBQUUsRUFBRTdELFNBQVMsRUFBRW1FLElBQUksQ0FBQ0UsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO0FBQ3hERixRQUFBQSxJQUFJLEdBQUcsRUFBRSxDQUFBO0FBQ1RBLFFBQUFBLElBQUksQ0FBQ1QsSUFBSSxDQUFDckQsT0FBTyxDQUFDLENBQUE7QUFDbEJMLFFBQUFBLFNBQVMsR0FBR29FLGdCQUFnQixDQUFBO0FBQzlCLE9BQUE7QUFDRixLQUFDLE1BQU07TUFDTCxJQUFJL0QsT0FBTyxLQUFLLENBQUMsRUFBRTtBQUNqQkwsUUFBQUEsU0FBUyxHQUFHSyxPQUFPLEdBQUcsQ0FBQyxHQUFHRixRQUFRLEdBQUdGLFFBQVEsQ0FBQTtBQUMvQyxPQUFBO0FBRUFrRSxNQUFBQSxJQUFJLENBQUNULElBQUksQ0FBQ3JELE9BQU8sQ0FBQyxDQUFBO0FBQ3BCLEtBQUE7QUFDRixHQUFBO0VBRUEsSUFBSThELElBQUksQ0FBQzdELE1BQU0sRUFBRTtBQUNmNEQsSUFBQUEsS0FBSyxDQUFDUixJQUFJLENBQUNHLGlCQUFlLENBQUMsRUFBRSxFQUFFN0QsU0FBUyxFQUFFbUUsSUFBSSxDQUFDLENBQUMsQ0FBQTtBQUNsRCxHQUFBO0FBRUEsRUFBQSxPQUFPRCxLQUFLLENBQUE7QUFDZDs7QUNuREEvRSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0Msa0JBQU8sRUFBRSxZQUFZLEVBQUU7QUFDM0NDLEVBQUFBLEtBQUssRUFBRSxJQUFBO0FBQ1QsQ0FBQyxDQUFDLENBQUE7QUFDc0JnRixrQkFBQSxDQUFBLGdCQUFBLEdBQUdDLGlCQUFnQjtBQUUzQyxJQUFJQyxtQkFBbUIsR0FBRzFFLG9CQUErQixDQUFBO0FBRXpELElBQUkyRSx5QkFBeUIsR0FBRzNFLDBCQUFxQyxDQUFBO0FBRXJFLElBQUk0RSx3QkFBd0IsR0FBRzVFLHlCQUFvQyxDQUFBO0FBRW5FLElBQUlxQyxPQUFPLEdBQUdyQyxRQUFtQixDQUFBO0FBRWpDLElBQUlELFFBQU0sR0FBR0MsT0FBbUIsQ0FBQTtBQUVoQyxTQUFTeUUsZ0JBQWdCQSxDQUFDeEUsS0FBSyxFQUFFO0VBQy9CLElBQUk0QixJQUFJLEdBQUdiLFNBQVMsQ0FBQ1IsTUFBTSxHQUFHLENBQUMsSUFBSVEsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLQyxTQUFTLEdBQUdELFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBR2pCLFFBQU0sQ0FBQ0gsSUFBSSxDQUFDaUYsQ0FBQyxDQUFBO0VBQzVGLElBQUlDLGNBQWMsR0FBRzlELFNBQVMsQ0FBQ1IsTUFBTSxHQUFHLENBQUMsSUFBSVEsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLQyxTQUFTLEdBQUdELFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7QUFFMUYsRUFBQSxJQUFJOEQsY0FBYyxFQUFFO0lBQ2xCLElBQUlDLFVBQVUsR0FBRyxJQUFJSix5QkFBeUIsQ0FBQ2Isd0JBQXdCLEVBQUU3RCxLQUFLLENBQUMsQ0FBQTtBQUUvRSxJQUFBLElBQUkrRSxVQUFVLEdBQUcsSUFBSUosd0JBQXdCLENBQUN4Qyx1QkFBdUIsRUFBRTJDLFVBQVUsRUFBRUQsY0FBYyxDQUFDLENBQUE7SUFFbEcsT0FBTyxJQUFJekMsT0FBTyxDQUFDVCxvQkFBb0IsRUFBRUMsSUFBSSxFQUFFbUQsVUFBVSxDQUFDLENBQUE7QUFDNUQsR0FBQTtFQUVBLElBQUk5RSxTQUFTLEdBQUcsSUFBSXdFLG1CQUFtQixDQUFDNUUsa0JBQWtCLEVBQUVHLEtBQUssQ0FBQyxDQUFBO0VBQ2xFLE9BQU8sSUFBSW9DLE9BQU8sQ0FBQ1Qsb0JBQW9CLEVBQUVDLElBQUksRUFBRTNCLFNBQVMsQ0FBQyxDQUFBO0FBQzNEOzs7O0FDN0JBYixNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsbUJBQU8sRUFBRSxZQUFZLEVBQUU7QUFDM0NDLEVBQUFBLEtBQUssRUFBRSxJQUFBO0FBQ1QsQ0FBQyxDQUFDLENBQUE7QUFDdUJ5RixtQkFBQSxDQUFBLGlCQUFBLEdBQUdDLGtCQUFpQjtBQUU3QyxTQUFTQSxpQkFBaUJBLENBQUMxRCxDQUFDLEVBQUVDLENBQUMsRUFBRTBELElBQUksRUFBRTtBQUNyQyxFQUFBLElBQUlDLFNBQVMsR0FBRzFELElBQUksQ0FBQzJELElBQUksQ0FBQzdELENBQUMsR0FBR0EsQ0FBQyxHQUFHQyxDQUFDLEdBQUdBLENBQUMsQ0FBQyxDQUFBO0FBQ3hDLEVBQUEsT0FBTzJELFNBQVMsSUFBSUQsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFBO0FBQ2hDOztBQ1JBOUYsTUFBTSxDQUFDQyxjQUFjLENBQUNDLG1CQUFPLEVBQUUsWUFBWSxFQUFFO0FBQzNDQyxFQUFBQSxLQUFLLEVBQUUsSUFBQTtBQUNULENBQUMsQ0FBQyxDQUFBO0FBQ3VCOEYsbUJBQUEsQ0FBQSxpQkFBQSxHQUFHQyxrQkFBaUI7QUFFN0MsSUFBSUMsWUFBWSxHQUFHeEYsYUFBd0IsQ0FBQTtBQUUzQyxJQUFJeUYsaUJBQWlCLEdBQUd6RixrQkFBNkIsQ0FBQTtBQUVyRCxJQUFJMEYsa0JBQWtCLEdBQUcxRixtQkFBOEIsQ0FBQTtBQUV2RCxJQUFJMkYsa0JBQWtCLEdBQUczRixtQkFBOEIsQ0FBQTtBQUV2RCxJQUFJRCxNQUFNLEdBQUdDLE9BQW1CLENBQUE7QUFFaEMsU0FBU3VGLGlCQUFpQkEsQ0FBQ0ssS0FBSyxFQUFFQyxPQUFPLEVBQUU7QUFDekMsRUFBQSxJQUFJQyxLQUFLLEdBQUdGLEtBQUssQ0FBQ0UsS0FBSztJQUNuQnRFLENBQUMsR0FBR29FLEtBQUssQ0FBQ3BFLENBQUM7SUFDWEMsQ0FBQyxHQUFHbUUsS0FBSyxDQUFDbkUsQ0FBQztJQUNYc0UsTUFBTSxHQUFHSCxLQUFLLENBQUNHLE1BQU07SUFDckJDLE1BQU0sR0FBR0osS0FBSyxDQUFDSSxNQUFNLENBQUE7QUFDekIsRUFBQSxJQUFJQyxjQUFjLEdBQUdKLE9BQU8sQ0FBQ0ksY0FBYztJQUN2Q25CLGNBQWMsR0FBR2UsT0FBTyxDQUFDZixjQUFjLENBQUE7QUFDM0MsRUFBQSxJQUFJb0IsTUFBTSxHQUFHRCxjQUFjLENBQUN6RSxDQUFDLEdBQUdBLENBQUMsQ0FBQTtBQUNqQyxFQUFBLElBQUkyRSxNQUFNLEdBQUcxRSxDQUFDLEdBQUd3RSxjQUFjLENBQUN4RSxDQUFDLENBQUE7QUFDakMsRUFBQSxJQUFJMkUsSUFBSSxHQUFHMUUsSUFBSSxDQUFDQyxHQUFHLENBQUN1RSxNQUFNLENBQUMsQ0FBQTtBQUMzQixFQUFBLElBQUlHLElBQUksR0FBRzNFLElBQUksQ0FBQ0MsR0FBRyxDQUFDd0UsTUFBTSxDQUFDLENBQUE7RUFDM0IsSUFBSVgsWUFBWSxDQUFDOUIsV0FBVyxFQUFFcUMsTUFBTSxFQUFFRyxNQUFNLENBQUMsQ0FBQTtFQUM3QyxJQUFJVixZQUFZLENBQUM5QixXQUFXLEVBQUVzQyxNQUFNLEVBQUVHLE1BQU0sQ0FBQyxDQUFBO0FBQzdDLEVBQUEsSUFBSUcsVUFBVSxHQUFHLElBQUliLGlCQUFpQixDQUFDaEIsZ0JBQWdCLEVBQUVzQixNQUFNLEVBQUVoRyxNQUFNLENBQUNILElBQUksQ0FBQ2lGLENBQUMsRUFBRUMsY0FBYyxDQUFDLENBQUE7QUFDL0YsRUFBQSxJQUFJeUIsVUFBVSxHQUFHLElBQUlkLGlCQUFpQixDQUFDaEIsZ0JBQWdCLEVBQUV1QixNQUFNLEVBQUVqRyxNQUFNLENBQUNILElBQUksQ0FBQ29DLENBQUMsRUFBRThDLGNBQWMsQ0FBQyxDQUFBO0FBQy9GLEVBQUEsSUFBSTBCLFFBQVEsR0FBRyxJQUFJZCxrQkFBa0IsQ0FBQzNDLGlCQUFpQixFQUFFK0MsS0FBSyxFQUFFVyxJQUFJLENBQUNDLEdBQUcsRUFBRSxDQUFDLENBQUE7QUFDM0UsRUFBQSxJQUFJQyxRQUFRLEdBQUcsSUFBSWhCLGtCQUFrQixDQUFDVCxpQkFBaUIsRUFBRWtCLElBQUksRUFBRUMsSUFBSSxFQUFFRyxRQUFRLENBQUMsQ0FBQTtFQUM5RSxPQUFPO0FBQ0xKLElBQUFBLElBQUksRUFBRUEsSUFBSTtBQUNWQyxJQUFBQSxJQUFJLEVBQUVBLElBQUk7QUFDVkgsSUFBQUEsTUFBTSxFQUFFQSxNQUFNO0FBQ2RDLElBQUFBLE1BQU0sRUFBRUEsTUFBTTtBQUNkRyxJQUFBQSxVQUFVLEVBQUVBLFVBQVU7QUFDdEJDLElBQUFBLFVBQVUsRUFBRUEsVUFBVTtBQUN0QkMsSUFBQUEsUUFBUSxFQUFFQSxRQUFRO0lBQ2xCSSxTQUFTLEVBQUVYLGNBQWMsQ0FBQ3pFLENBQUM7SUFDM0JxRixTQUFTLEVBQUVaLGNBQWMsQ0FBQ3hFLENBQUM7QUFDM0JrRixJQUFBQSxRQUFRLEVBQUVBLFFBQUFBO0dBQ1gsQ0FBQTtBQUNIOzs7O0FDN0NBdEgsTUFBTSxDQUFDQyxjQUFjLENBQUNDLDhCQUFPLEVBQUUsWUFBWSxFQUFFO0FBQzNDQyxFQUFBQSxLQUFLLEVBQUUsSUFBQTtBQUNULENBQUMsQ0FBQyxDQUFBO0FBQ2tDc0gsOEJBQUEsQ0FBQSw0QkFBQSxHQUFHLEtBQUssRUFBQztBQUU3QyxJQUFJQyw0QkFBNEIsR0FBRyxTQUFTQSw0QkFBNEJBLENBQUMzRCxDQUFDLEVBQUU7QUFDMUUsRUFBQSxPQUFPNEQsT0FBTyxDQUFDNUQsQ0FBQyxDQUFDQyxPQUFPLElBQUlELENBQUMsQ0FBQ0MsT0FBTyxDQUFDN0MsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBQ25ELENBQUMsQ0FBQTtBQUVEakIsOEJBQUFBLENBQUFBLDRCQUFvQyxHQUFHd0gsNEJBQTRCOzs7Ozs7QUNUbkUxSCxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsZUFBTyxFQUFFLFlBQVksRUFBRTtBQUMzQ0MsRUFBQUEsS0FBSyxFQUFFLElBQUE7QUFDVCxDQUFDLENBQUMsQ0FBQTtBQUNtQnlILGVBQUEsQ0FBQSxhQUFBLEdBQUdDLGNBQWE7QUFFckMsU0FBU0EsYUFBYUEsR0FBRztFQUN2QixJQUFJQyxLQUFLLEdBQUduRyxTQUFTLENBQUNSLE1BQU0sR0FBRyxDQUFDLElBQUlRLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBS0MsU0FBUyxHQUFHRCxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFBO0FBQ2xGM0IsRUFBQUEsTUFBTSxDQUFDQyxjQUFjLENBQUM2SCxLQUFLLEVBQUUsU0FBUyxFQUFFO0FBQ3RDQyxJQUFBQSxHQUFHLEVBQUUsU0FBU0EsR0FBR0EsR0FBRztNQUNsQixJQUFJLENBQUNDLGtCQUFrQixHQUFHLElBQUksQ0FBQTtBQUM5QixNQUFBLE9BQU8sSUFBSSxDQUFBO0tBQ1o7QUFDRHBELElBQUFBLFVBQVUsRUFBRSxJQUFBO0FBQ2QsR0FBQyxDQUFDLENBQUE7QUFDRixFQUFBLE9BQU9rRCxLQUFLLENBQUE7QUFDZDs7QUNmQTlILE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyx5QkFBTyxFQUFFLFlBQVksRUFBRTtBQUMzQ0MsRUFBQUEsS0FBSyxFQUFFLElBQUE7QUFDVCxDQUFDLENBQUMsQ0FBQTtBQUM2QjhILHlCQUFBLENBQUEsdUJBQUEsR0FBR0Msd0JBQXVCO0FBQzdDRCx5QkFBQSxDQUFBLElBQUEsR0FBRyxLQUFLLEVBQUM7QUFFckIsSUFBSUUsY0FBYyxHQUFHeEgsZUFBMEIsQ0FBQTtBQUUvQyxTQUFTdUgsdUJBQXVCQSxDQUFDRixrQkFBa0IsRUFBRTtBQUNuRCxFQUFBLElBQUksT0FBT0Esa0JBQWtCLEtBQUssU0FBUyxFQUFFO0FBQzNDLElBQUEsT0FBT0Esa0JBQWtCLENBQUE7QUFDM0IsR0FBQTtBQUVBLEVBQUEsSUFBSUYsS0FBSyxHQUFHO0FBQ1ZFLElBQUFBLGtCQUFrQixFQUFFQSxrQkFBQUE7R0FDckIsQ0FBQTtFQUVELElBQUk7SUFDRixJQUFJeEIsT0FBTyxHQUFHLENBQUMsQ0FBQyxFQUFFMkIsY0FBYyxDQUFDTixhQUFhLEVBQUVDLEtBQUssQ0FBQyxDQUFBO0lBQ3RETSxNQUFNLENBQUNDLGdCQUFnQixDQUFDLHlCQUF5QixFQUFFQyxJQUFJLEVBQUU5QixPQUFPLENBQUMsQ0FBQTtJQUNqRTRCLE1BQU0sQ0FBQ0csbUJBQW1CLENBQUMseUJBQXlCLEVBQUVELElBQUksRUFBRTlCLE9BQU8sQ0FBQyxDQUFBO0FBQ3RFLEdBQUMsQ0FBQyxPQUFPZ0MsR0FBRyxFQUFFLEVBQUM7RUFFZixPQUFPVixLQUFLLENBQUNFLGtCQUFrQixDQUFBO0FBQ2pDLENBQUE7QUFFQSxJQUFJTSxJQUFJLEdBQUcsU0FBU0EsSUFBSUEsR0FBRyxFQUFFLENBQUE7QUFFN0JwSSx5QkFBQUEsQ0FBQUEsSUFBWSxHQUFHb0ksSUFBSTs7OztBQzVCbkJ0SSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsNkJBQU8sRUFBRSxZQUFZLEVBQUU7QUFDM0NDLEVBQUFBLEtBQUssRUFBRSxJQUFBO0FBQ1QsQ0FBQyxDQUFDLENBQUE7QUFDaUNzSSw2QkFBQSxDQUFBLDJCQUFBLEdBQUcsS0FBSyxFQUFDO0FBRTVDLFNBQVNDLE9BQU9BLENBQUMvRCxHQUFHLEVBQUU7RUFBRSx5QkFBeUIsQ0FBQTs7QUFBRSxFQUFBLE9BQU8rRCxPQUFPLEdBQUcsVUFBVSxJQUFJLE9BQU9DLE1BQU0sSUFBSSxRQUFRLElBQUksT0FBT0EsTUFBTSxDQUFDQyxRQUFRLEdBQUcsVUFBVWpFLEdBQUcsRUFBRTtBQUFFLElBQUEsT0FBTyxPQUFPQSxHQUFHLENBQUE7R0FBRyxHQUFHLFVBQVVBLEdBQUcsRUFBRTtJQUFFLE9BQU9BLEdBQUcsSUFBSSxVQUFVLElBQUksT0FBT2dFLE1BQU0sSUFBSWhFLEdBQUcsQ0FBQ2tFLFdBQVcsS0FBS0YsTUFBTSxJQUFJaEUsR0FBRyxLQUFLZ0UsTUFBTSxDQUFDRyxTQUFTLEdBQUcsUUFBUSxHQUFHLE9BQU9uRSxHQUFHLENBQUE7QUFBRSxHQUFDLEVBQUUrRCxPQUFPLENBQUMvRCxHQUFHLENBQUMsQ0FBQTtBQUFFLENBQUE7QUFFL1UsSUFBSW9FLDJCQUEyQixHQUFHLFNBQVNBLDJCQUEyQkEsR0FBRztFQUN2RSxPQUFPLENBQUMsT0FBT1gsTUFBTSxLQUFLLFdBQVcsR0FBRyxXQUFXLEdBQUdNLE9BQU8sQ0FBQ04sTUFBTSxDQUFDLE1BQU0sUUFBUSxLQUFLLGNBQWMsSUFBSUEsTUFBTSxJQUFJVCxPQUFPLENBQUNTLE1BQU0sQ0FBQ1ksU0FBUyxDQUFDQyxjQUFjLENBQUMsQ0FBQyxDQUFBO0FBQy9KLENBQUMsQ0FBQTtBQUVEL0ksNkJBQUFBLENBQUFBLDJCQUFtQyxHQUFHNkksMkJBQTJCOzs7O0FDWGpFL0ksTUFBTSxDQUFDQyxjQUFjLENBQUNDLGlCQUFPLEVBQUUsWUFBWSxFQUFFO0FBQzNDQyxFQUFBQSxLQUFLLEVBQUUsSUFBQTtBQUNULENBQUMsQ0FBQyxDQUFBO0FBQ3FCK0ksaUJBQUEsQ0FBQSxlQUFBLEdBQUcsS0FBSyxFQUFDO0FBRWhDLFNBQVNDLFNBQU9BLENBQUN6SCxNQUFNLEVBQUUwSCxjQUFjLEVBQUU7QUFBRSxFQUFBLElBQUl0SCxJQUFJLEdBQUc5QixNQUFNLENBQUM4QixJQUFJLENBQUNKLE1BQU0sQ0FBQyxDQUFBO0VBQUUsSUFBSTFCLE1BQU0sQ0FBQ3FKLHFCQUFxQixFQUFFO0FBQUUsSUFBQSxJQUFJQyxPQUFPLEdBQUd0SixNQUFNLENBQUNxSixxQkFBcUIsQ0FBQzNILE1BQU0sQ0FBQyxDQUFBO0lBQUUwSCxjQUFjLEtBQUtFLE9BQU8sR0FBR0EsT0FBTyxDQUFDQyxNQUFNLENBQUMsVUFBVUMsR0FBRyxFQUFFO01BQUUsT0FBT3hKLE1BQU0sQ0FBQ3lKLHdCQUF3QixDQUFDL0gsTUFBTSxFQUFFOEgsR0FBRyxDQUFDLENBQUM1RSxVQUFVLENBQUE7QUFBRSxLQUFDLENBQUMsQ0FBQyxFQUFFOUMsSUFBSSxDQUFDeUMsSUFBSSxDQUFDbUYsS0FBSyxDQUFDNUgsSUFBSSxFQUFFd0gsT0FBTyxDQUFDLENBQUE7QUFBRSxHQUFBO0FBQUUsRUFBQSxPQUFPeEgsSUFBSSxDQUFBO0FBQUUsQ0FBQTtBQUVwVixTQUFTNkgsZUFBYUEsQ0FBQ0MsTUFBTSxFQUFFO0FBQUUsRUFBQSxLQUFLLElBQUl0SSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdLLFNBQVMsQ0FBQ1IsTUFBTSxFQUFFRyxDQUFDLEVBQUUsRUFBRTtBQUFFLElBQUEsSUFBSXVJLE1BQU0sR0FBRyxJQUFJLElBQUlsSSxTQUFTLENBQUNMLENBQUMsQ0FBQyxHQUFHSyxTQUFTLENBQUNMLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtBQUFFQSxJQUFBQSxDQUFDLEdBQUcsQ0FBQyxHQUFHNkgsU0FBTyxDQUFDbkosTUFBTSxDQUFDNkosTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLFVBQVVqSSxHQUFHLEVBQUU7TUFBRTZDLGlCQUFlLENBQUNrRixNQUFNLEVBQUUvSCxHQUFHLEVBQUVnSSxNQUFNLENBQUNoSSxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBQUUsS0FBQyxDQUFDLEdBQUc3QixNQUFNLENBQUMrSix5QkFBeUIsR0FBRy9KLE1BQU0sQ0FBQ2dLLGdCQUFnQixDQUFDSixNQUFNLEVBQUU1SixNQUFNLENBQUMrSix5QkFBeUIsQ0FBQ0YsTUFBTSxDQUFDLENBQUMsR0FBR1YsU0FBTyxDQUFDbkosTUFBTSxDQUFDNkosTUFBTSxDQUFDLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLFVBQVVqSSxHQUFHLEVBQUU7QUFBRTdCLE1BQUFBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDMkosTUFBTSxFQUFFL0gsR0FBRyxFQUFFN0IsTUFBTSxDQUFDeUosd0JBQXdCLENBQUNJLE1BQU0sRUFBRWhJLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFBRSxLQUFDLENBQUMsQ0FBQTtBQUFFLEdBQUE7QUFBRSxFQUFBLE9BQU8rSCxNQUFNLENBQUE7QUFBRSxDQUFBO0FBRXpmLFNBQVNsRixpQkFBZUEsQ0FBQ0MsR0FBRyxFQUFFOUMsR0FBRyxFQUFFMUIsS0FBSyxFQUFFO0VBQUUsSUFBSTBCLEdBQUcsSUFBSThDLEdBQUcsRUFBRTtBQUFFM0UsSUFBQUEsTUFBTSxDQUFDQyxjQUFjLENBQUMwRSxHQUFHLEVBQUU5QyxHQUFHLEVBQUU7QUFBRTFCLE1BQUFBLEtBQUssRUFBRUEsS0FBSztBQUFFeUUsTUFBQUEsVUFBVSxFQUFFLElBQUk7QUFBRUMsTUFBQUEsWUFBWSxFQUFFLElBQUk7QUFBRUMsTUFBQUEsUUFBUSxFQUFFLElBQUE7QUFBSyxLQUFDLENBQUMsQ0FBQTtBQUFFLEdBQUMsTUFBTTtBQUFFSCxJQUFBQSxHQUFHLENBQUM5QyxHQUFHLENBQUMsR0FBRzFCLEtBQUssQ0FBQTtBQUFFLEdBQUE7QUFBRSxFQUFBLE9BQU93RSxHQUFHLENBQUE7QUFBRSxDQUFBO0FBRWhOLElBQUlzRixlQUFlLEdBQUcsU0FBU0EsZUFBZUEsR0FBRztFQUMvQyxJQUFJekQsT0FBTyxHQUFHN0UsU0FBUyxDQUFDUixNQUFNLEdBQUcsQ0FBQyxJQUFJUSxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUtDLFNBQVMsR0FBR0QsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtBQUNwRixFQUFBLE9BQU9nSSxlQUFhLENBQUM7QUFDbkJ4SCxJQUFBQSxDQUFDLEVBQUUsQ0FBQztBQUNKQyxJQUFBQSxDQUFDLEVBQUUsQ0FBQztBQUNKcUUsSUFBQUEsS0FBSyxFQUFFLENBQUM7QUFDUnlELElBQUFBLFNBQVMsRUFBRSxLQUFLO0FBQ2hCeEQsSUFBQUEsTUFBTSxFQUFFLEVBQUU7QUFDVkMsSUFBQUEsTUFBTSxFQUFFLEVBQUE7R0FDVCxFQUFFSCxPQUFPLENBQUMsQ0FBQTtBQUNiLENBQUMsQ0FBQTtBQUVEdEcsaUJBQUFBLENBQUFBLGVBQXVCLEdBQUcrSixlQUFlOzs7O0FDdkJ6Q2pLLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxpQkFBTyxFQUFFLFlBQVksRUFBRTtBQUMzQ0MsRUFBQUEsS0FBSyxFQUFFLElBQUE7QUFDVCxDQUFDLENBQUMsQ0FBQTtBQUNxQmdLLGlCQUFBLENBQUEsZUFBQSxHQUFHLEtBQUssRUFBQztBQUVoQyxTQUFTaEIsT0FBT0EsQ0FBQ3pILE1BQU0sRUFBRTBILGNBQWMsRUFBRTtBQUFFLEVBQUEsSUFBSXRILElBQUksR0FBRzlCLE1BQU0sQ0FBQzhCLElBQUksQ0FBQ0osTUFBTSxDQUFDLENBQUE7RUFBRSxJQUFJMUIsTUFBTSxDQUFDcUoscUJBQXFCLEVBQUU7QUFBRSxJQUFBLElBQUlDLE9BQU8sR0FBR3RKLE1BQU0sQ0FBQ3FKLHFCQUFxQixDQUFDM0gsTUFBTSxDQUFDLENBQUE7SUFBRTBILGNBQWMsS0FBS0UsT0FBTyxHQUFHQSxPQUFPLENBQUNDLE1BQU0sQ0FBQyxVQUFVQyxHQUFHLEVBQUU7TUFBRSxPQUFPeEosTUFBTSxDQUFDeUosd0JBQXdCLENBQUMvSCxNQUFNLEVBQUU4SCxHQUFHLENBQUMsQ0FBQzVFLFVBQVUsQ0FBQTtBQUFFLEtBQUMsQ0FBQyxDQUFDLEVBQUU5QyxJQUFJLENBQUN5QyxJQUFJLENBQUNtRixLQUFLLENBQUM1SCxJQUFJLEVBQUV3SCxPQUFPLENBQUMsQ0FBQTtBQUFFLEdBQUE7QUFBRSxFQUFBLE9BQU94SCxJQUFJLENBQUE7QUFBRSxDQUFBO0FBRXBWLFNBQVM2SCxhQUFhQSxDQUFDQyxNQUFNLEVBQUU7QUFBRSxFQUFBLEtBQUssSUFBSXRJLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0ssU0FBUyxDQUFDUixNQUFNLEVBQUVHLENBQUMsRUFBRSxFQUFFO0FBQUUsSUFBQSxJQUFJdUksTUFBTSxHQUFHLElBQUksSUFBSWxJLFNBQVMsQ0FBQ0wsQ0FBQyxDQUFDLEdBQUdLLFNBQVMsQ0FBQ0wsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFBO0FBQUVBLElBQUFBLENBQUMsR0FBRyxDQUFDLEdBQUc2SCxPQUFPLENBQUNuSixNQUFNLENBQUM2SixNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxPQUFPLENBQUMsVUFBVWpJLEdBQUcsRUFBRTtNQUFFNkMsZUFBZSxDQUFDa0YsTUFBTSxFQUFFL0gsR0FBRyxFQUFFZ0ksTUFBTSxDQUFDaEksR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUFFLEtBQUMsQ0FBQyxHQUFHN0IsTUFBTSxDQUFDK0oseUJBQXlCLEdBQUcvSixNQUFNLENBQUNnSyxnQkFBZ0IsQ0FBQ0osTUFBTSxFQUFFNUosTUFBTSxDQUFDK0oseUJBQXlCLENBQUNGLE1BQU0sQ0FBQyxDQUFDLEdBQUdWLE9BQU8sQ0FBQ25KLE1BQU0sQ0FBQzZKLE1BQU0sQ0FBQyxDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFVakksR0FBRyxFQUFFO0FBQUU3QixNQUFBQSxNQUFNLENBQUNDLGNBQWMsQ0FBQzJKLE1BQU0sRUFBRS9ILEdBQUcsRUFBRTdCLE1BQU0sQ0FBQ3lKLHdCQUF3QixDQUFDSSxNQUFNLEVBQUVoSSxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBQUUsS0FBQyxDQUFDLENBQUE7QUFBRSxHQUFBO0FBQUUsRUFBQSxPQUFPK0gsTUFBTSxDQUFBO0FBQUUsQ0FBQTtBQUV6ZixTQUFTbEYsZUFBZUEsQ0FBQ0MsR0FBRyxFQUFFOUMsR0FBRyxFQUFFMUIsS0FBSyxFQUFFO0VBQUUsSUFBSTBCLEdBQUcsSUFBSThDLEdBQUcsRUFBRTtBQUFFM0UsSUFBQUEsTUFBTSxDQUFDQyxjQUFjLENBQUMwRSxHQUFHLEVBQUU5QyxHQUFHLEVBQUU7QUFBRTFCLE1BQUFBLEtBQUssRUFBRUEsS0FBSztBQUFFeUUsTUFBQUEsVUFBVSxFQUFFLElBQUk7QUFBRUMsTUFBQUEsWUFBWSxFQUFFLElBQUk7QUFBRUMsTUFBQUEsUUFBUSxFQUFFLElBQUE7QUFBSyxLQUFDLENBQUMsQ0FBQTtBQUFFLEdBQUMsTUFBTTtBQUFFSCxJQUFBQSxHQUFHLENBQUM5QyxHQUFHLENBQUMsR0FBRzFCLEtBQUssQ0FBQTtBQUFFLEdBQUE7QUFBRSxFQUFBLE9BQU93RSxHQUFHLENBQUE7QUFBRSxDQUFBO0FBRWhOLElBQUl5RixlQUFlLEdBQUcsU0FBU0EsZUFBZUEsR0FBRztFQUMvQyxJQUFJQyxLQUFLLEdBQUcxSSxTQUFTLENBQUNSLE1BQU0sR0FBRyxDQUFDLElBQUlRLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBS0MsU0FBUyxHQUFHRCxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFBO0FBQ2xGLEVBQUEsT0FBT2dJLGFBQWEsQ0FBQztBQUNuQlcsSUFBQUEsT0FBTyxFQUFFLElBQUk7QUFDYlYsSUFBQUEsTUFBTSxFQUFFLElBQUk7QUFDWjFHLElBQUFBLEtBQUssRUFBRSxFQUFFO0FBQ1R1QyxJQUFBQSxjQUFjLEVBQUUsQ0FBQztBQUNqQjhFLElBQUFBLGFBQWEsRUFBRSxDQUFDO0FBQ2hCQyxJQUFBQSxvQkFBb0IsRUFBRSxLQUFLO0FBQzNCQyxJQUFBQSxvQkFBb0IsRUFBRSxJQUFJO0FBQzFCQyxJQUFBQSw0QkFBNEIsRUFBRSxLQUFLO0FBQ25DQyxJQUFBQSwyQkFBMkIsRUFBRSxLQUFBO0dBQzlCLEVBQUVOLEtBQUssQ0FBQyxDQUFBO0FBQ1gsQ0FBQyxDQUFBO0FBRURuSyxpQkFBQUEsQ0FBQUEsZUFBdUIsR0FBR2tLLGVBQWU7Ozs7QUMxQnpDcEssTUFBTSxDQUFDQyxjQUFjLENBQUNDLFlBQU8sRUFBRSxZQUFZLEVBQUU7QUFDM0NDLEVBQUFBLEtBQUssRUFBRSxJQUFBO0FBQ1QsQ0FBQyxDQUFDLENBQUE7QUFDZ0J5SyxZQUFBLENBQUEsVUFBQSxHQUFHQyxXQUFVO0FBRS9CLFNBQVNBLFVBQVVBLEdBQUc7RUFDcEIsSUFBSTdDLGtCQUFrQixHQUFHckcsU0FBUyxDQUFDUixNQUFNLEdBQUcsQ0FBQyxJQUFJUSxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUtDLFNBQVMsR0FBR0QsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQTtBQUVsRyxFQUFBLElBQUlxRyxrQkFBa0IsRUFBRTtJQUN0QixPQUFPO0FBQ0w4QyxNQUFBQSxPQUFPLEVBQUUsS0FBQTtLQUNWLENBQUE7QUFDSCxHQUFBO0FBRUEsRUFBQSxPQUFPLEVBQUUsQ0FBQTtBQUNYOzs7O0FDZkE5SyxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsZUFBTyxFQUFFLFlBQVksRUFBRTtBQUMzQ0MsRUFBQUEsS0FBSyxFQUFFLElBQUE7QUFDVCxDQUFDLENBQUMsQ0FBQTtBQUNtQjRLLGVBQUEsQ0FBQSxhQUFBLEdBQUdDLGNBQWE7QUFFckMsU0FBU0EsYUFBYUEsQ0FBQ0MsUUFBUSxFQUFFO0VBQy9CLElBQUlDLEtBQUssR0FBR3ZKLFNBQVMsQ0FBQ1IsTUFBTSxHQUFHLENBQUMsSUFBSVEsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLQyxTQUFTLEdBQUdELFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7RUFFakYsSUFBSXVKLEtBQUssS0FBSyxDQUFDLEVBQUU7QUFDZixJQUFBLE9BQU9ELFFBQVEsQ0FBQTtBQUNqQixHQUFBO0FBRUEsRUFBQSxJQUFJOUksQ0FBQyxHQUFHOEksUUFBUSxDQUFDOUksQ0FBQztJQUNkQyxDQUFDLEdBQUc2SSxRQUFRLENBQUM3SSxDQUFDLENBQUE7RUFDbEIsSUFBSStJLGNBQWMsR0FBRzlJLElBQUksQ0FBQytJLEVBQUUsR0FBRyxHQUFHLEdBQUdGLEtBQUssQ0FBQTtBQUMxQyxFQUFBLElBQUlHLFFBQVEsR0FBR2xKLENBQUMsR0FBR0UsSUFBSSxDQUFDaUosR0FBRyxDQUFDSCxjQUFjLENBQUMsR0FBRy9JLENBQUMsR0FBR0MsSUFBSSxDQUFDa0osR0FBRyxDQUFDSixjQUFjLENBQUMsQ0FBQTtBQUMxRSxFQUFBLElBQUlLLFFBQVEsR0FBR3BKLENBQUMsR0FBR0MsSUFBSSxDQUFDaUosR0FBRyxDQUFDSCxjQUFjLENBQUMsR0FBR2hKLENBQUMsR0FBR0UsSUFBSSxDQUFDa0osR0FBRyxDQUFDSixjQUFjLENBQUMsQ0FBQTtFQUMxRSxPQUFPO0FBQ0xoSixJQUFBQSxDQUFDLEVBQUVrSixRQUFRO0FBQ1hqSixJQUFBQSxDQUFDLEVBQUVvSixRQUFBQTtHQUNKLENBQUE7QUFDSDs7OztBQ3JCQXhMLENBQUFBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFVLE9BQUEsRUFBQSxZQUFZLEVBQUU7R0FDM0NFLEtBQUssRUFBRSxJQUFBO0FBQ1QsRUFBQyxDQUFDLENBQUE7Q0FFRixJQUFJa0YsbUJBQW1CLEdBQUcxRSxvQkFBK0IsQ0FBQTtDQUV6RFgsTUFBTSxDQUFDOEIsSUFBSSxDQUFDdUQsbUJBQW1CLENBQUMsQ0FBQ3lFLE9BQU8sQ0FBQyxVQUFVakksR0FBRyxFQUFFO0dBQ3RELElBQUlBLEdBQUcsS0FBSyxTQUFTLElBQUlBLEdBQUcsS0FBSyxZQUFZLEVBQUUsT0FBQTtBQUMvQyxHQUFBLElBQUlBLEdBQUcsSUFBSTNCLE9BQU8sSUFBSUEsT0FBTyxDQUFDMkIsR0FBRyxDQUFDLEtBQUt3RCxtQkFBbUIsQ0FBQ3hELEdBQUcsQ0FBQyxFQUFFLE9BQUE7QUFDakU3QixHQUFBQSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFFMkIsR0FBRyxFQUFFO0tBQ2xDK0MsVUFBVSxFQUFFLElBQUk7QUFDaEJtRCxLQUFBQSxHQUFHLEVBQUUsU0FBU0EsR0FBR0EsR0FBRztPQUNsQixPQUFPMUMsbUJBQW1CLENBQUN4RCxHQUFHLENBQUMsQ0FBQTtNQUNqQztBQUNGLElBQUMsQ0FBQyxDQUFBO0FBQ0osRUFBQyxDQUFDLENBQUE7Q0FFRixJQUFJMEQsd0JBQXdCLEdBQUc1RSx5QkFBb0MsQ0FBQTtDQUVuRVgsTUFBTSxDQUFDOEIsSUFBSSxDQUFDeUQsd0JBQXdCLENBQUMsQ0FBQ3VFLE9BQU8sQ0FBQyxVQUFVakksR0FBRyxFQUFFO0dBQzNELElBQUlBLEdBQUcsS0FBSyxTQUFTLElBQUlBLEdBQUcsS0FBSyxZQUFZLEVBQUUsT0FBQTtBQUMvQyxHQUFBLElBQUlBLEdBQUcsSUFBSTNCLE9BQU8sSUFBSUEsT0FBTyxDQUFDMkIsR0FBRyxDQUFDLEtBQUswRCx3QkFBd0IsQ0FBQzFELEdBQUcsQ0FBQyxFQUFFLE9BQUE7QUFDdEU3QixHQUFBQSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFFMkIsR0FBRyxFQUFFO0tBQ2xDK0MsVUFBVSxFQUFFLElBQUk7QUFDaEJtRCxLQUFBQSxHQUFHLEVBQUUsU0FBU0EsR0FBR0EsR0FBRztPQUNsQixPQUFPeEMsd0JBQXdCLENBQUMxRCxHQUFHLENBQUMsQ0FBQTtNQUN0QztBQUNGLElBQUMsQ0FBQyxDQUFBO0FBQ0osRUFBQyxDQUFDLENBQUE7Q0FFRixJQUFJd0Usa0JBQWtCLEdBQUcxRixtQkFBOEIsQ0FBQTtDQUV2RFgsTUFBTSxDQUFDOEIsSUFBSSxDQUFDdUUsa0JBQWtCLENBQUMsQ0FBQ3lELE9BQU8sQ0FBQyxVQUFVakksR0FBRyxFQUFFO0dBQ3JELElBQUlBLEdBQUcsS0FBSyxTQUFTLElBQUlBLEdBQUcsS0FBSyxZQUFZLEVBQUUsT0FBQTtBQUMvQyxHQUFBLElBQUlBLEdBQUcsSUFBSTNCLE9BQU8sSUFBSUEsT0FBTyxDQUFDMkIsR0FBRyxDQUFDLEtBQUt3RSxrQkFBa0IsQ0FBQ3hFLEdBQUcsQ0FBQyxFQUFFLE9BQUE7QUFDaEU3QixHQUFBQSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFFMkIsR0FBRyxFQUFFO0tBQ2xDK0MsVUFBVSxFQUFFLElBQUk7QUFDaEJtRCxLQUFBQSxHQUFHLEVBQUUsU0FBU0EsR0FBR0EsR0FBRztPQUNsQixPQUFPMUIsa0JBQWtCLENBQUN4RSxHQUFHLENBQUMsQ0FBQTtNQUNoQztBQUNGLElBQUMsQ0FBQyxDQUFBO0FBQ0osRUFBQyxDQUFDLENBQUE7Q0FFRixJQUFJNEosd0JBQXdCLEdBQUc5Syx5QkFBb0MsQ0FBQTtDQUVuRVgsTUFBTSxDQUFDOEIsSUFBSSxDQUFDMkosd0JBQXdCLENBQUMsQ0FBQzNCLE9BQU8sQ0FBQyxVQUFVakksR0FBRyxFQUFFO0dBQzNELElBQUlBLEdBQUcsS0FBSyxTQUFTLElBQUlBLEdBQUcsS0FBSyxZQUFZLEVBQUUsT0FBQTtBQUMvQyxHQUFBLElBQUlBLEdBQUcsSUFBSTNCLE9BQU8sSUFBSUEsT0FBTyxDQUFDMkIsR0FBRyxDQUFDLEtBQUs0Six3QkFBd0IsQ0FBQzVKLEdBQUcsQ0FBQyxFQUFFLE9BQUE7QUFDdEU3QixHQUFBQSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFFMkIsR0FBRyxFQUFFO0tBQ2xDK0MsVUFBVSxFQUFFLElBQUk7QUFDaEJtRCxLQUFBQSxHQUFHLEVBQUUsU0FBU0EsR0FBR0EsR0FBRztPQUNsQixPQUFPMEQsd0JBQXdCLENBQUM1SixHQUFHLENBQUMsQ0FBQTtNQUN0QztBQUNGLElBQUMsQ0FBQyxDQUFBO0FBQ0osRUFBQyxDQUFDLENBQUE7Q0FFRixJQUFJNkosa0JBQWtCLEdBQUcvSyxtQkFBOEIsQ0FBQTtDQUV2RFgsTUFBTSxDQUFDOEIsSUFBSSxDQUFDNEosa0JBQWtCLENBQUMsQ0FBQzVCLE9BQU8sQ0FBQyxVQUFVakksR0FBRyxFQUFFO0dBQ3JELElBQUlBLEdBQUcsS0FBSyxTQUFTLElBQUlBLEdBQUcsS0FBSyxZQUFZLEVBQUUsT0FBQTtBQUMvQyxHQUFBLElBQUlBLEdBQUcsSUFBSTNCLE9BQU8sSUFBSUEsT0FBTyxDQUFDMkIsR0FBRyxDQUFDLEtBQUs2SixrQkFBa0IsQ0FBQzdKLEdBQUcsQ0FBQyxFQUFFLE9BQUE7QUFDaEU3QixHQUFBQSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFFMkIsR0FBRyxFQUFFO0tBQ2xDK0MsVUFBVSxFQUFFLElBQUk7QUFDaEJtRCxLQUFBQSxHQUFHLEVBQUUsU0FBU0EsR0FBR0EsR0FBRztPQUNsQixPQUFPMkQsa0JBQWtCLENBQUM3SixHQUFHLENBQUMsQ0FBQTtNQUNoQztBQUNGLElBQUMsQ0FBQyxDQUFBO0FBQ0osRUFBQyxDQUFDLENBQUE7Q0FFRixJQUFJeUQseUJBQXlCLEdBQUczRSwwQkFBcUMsQ0FBQTtDQUVyRVgsTUFBTSxDQUFDOEIsSUFBSSxDQUFDd0QseUJBQXlCLENBQUMsQ0FBQ3dFLE9BQU8sQ0FBQyxVQUFVakksR0FBRyxFQUFFO0dBQzVELElBQUlBLEdBQUcsS0FBSyxTQUFTLElBQUlBLEdBQUcsS0FBSyxZQUFZLEVBQUUsT0FBQTtBQUMvQyxHQUFBLElBQUlBLEdBQUcsSUFBSTNCLE9BQU8sSUFBSUEsT0FBTyxDQUFDMkIsR0FBRyxDQUFDLEtBQUt5RCx5QkFBeUIsQ0FBQ3pELEdBQUcsQ0FBQyxFQUFFLE9BQUE7QUFDdkU3QixHQUFBQSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFFMkIsR0FBRyxFQUFFO0tBQ2xDK0MsVUFBVSxFQUFFLElBQUk7QUFDaEJtRCxLQUFBQSxHQUFHLEVBQUUsU0FBU0EsR0FBR0EsR0FBRztPQUNsQixPQUFPekMseUJBQXlCLENBQUN6RCxHQUFHLENBQUMsQ0FBQTtNQUN2QztBQUNGLElBQUMsQ0FBQyxDQUFBO0FBQ0osRUFBQyxDQUFDLENBQUE7Q0FFRixJQUFJeUUsa0JBQWtCLEdBQUczRixtQkFBOEIsQ0FBQTtDQUV2RFgsTUFBTSxDQUFDOEIsSUFBSSxDQUFDd0Usa0JBQWtCLENBQUMsQ0FBQ3dELE9BQU8sQ0FBQyxVQUFVakksR0FBRyxFQUFFO0dBQ3JELElBQUlBLEdBQUcsS0FBSyxTQUFTLElBQUlBLEdBQUcsS0FBSyxZQUFZLEVBQUUsT0FBQTtBQUMvQyxHQUFBLElBQUlBLEdBQUcsSUFBSTNCLE9BQU8sSUFBSUEsT0FBTyxDQUFDMkIsR0FBRyxDQUFDLEtBQUt5RSxrQkFBa0IsQ0FBQ3pFLEdBQUcsQ0FBQyxFQUFFLE9BQUE7QUFDaEU3QixHQUFBQSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFFMkIsR0FBRyxFQUFFO0tBQ2xDK0MsVUFBVSxFQUFFLElBQUk7QUFDaEJtRCxLQUFBQSxHQUFHLEVBQUUsU0FBU0EsR0FBR0EsR0FBRztPQUNsQixPQUFPekIsa0JBQWtCLENBQUN6RSxHQUFHLENBQUMsQ0FBQTtNQUNoQztBQUNGLElBQUMsQ0FBQyxDQUFBO0FBQ0osRUFBQyxDQUFDLENBQUE7Q0FFRixJQUFJOEosNkJBQTZCLEdBQUdoTCw4QkFBeUMsQ0FBQTtDQUU3RVgsTUFBTSxDQUFDOEIsSUFBSSxDQUFDNkosNkJBQTZCLENBQUMsQ0FBQzdCLE9BQU8sQ0FBQyxVQUFVakksR0FBRyxFQUFFO0dBQ2hFLElBQUlBLEdBQUcsS0FBSyxTQUFTLElBQUlBLEdBQUcsS0FBSyxZQUFZLEVBQUUsT0FBQTtBQUMvQyxHQUFBLElBQUlBLEdBQUcsSUFBSTNCLE9BQU8sSUFBSUEsT0FBTyxDQUFDMkIsR0FBRyxDQUFDLEtBQUs4Siw2QkFBNkIsQ0FBQzlKLEdBQUcsQ0FBQyxFQUFFLE9BQUE7QUFDM0U3QixHQUFBQSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFFMkIsR0FBRyxFQUFFO0tBQ2xDK0MsVUFBVSxFQUFFLElBQUk7QUFDaEJtRCxLQUFBQSxHQUFHLEVBQUUsU0FBU0EsR0FBR0EsR0FBRztPQUNsQixPQUFPNEQsNkJBQTZCLENBQUM5SixHQUFHLENBQUMsQ0FBQTtNQUMzQztBQUNGLElBQUMsQ0FBQyxDQUFBO0FBQ0osRUFBQyxDQUFDLENBQUE7Q0FFRixJQUFJK0osd0JBQXdCLEdBQUdqTCx5QkFBb0MsQ0FBQTtDQUVuRVgsTUFBTSxDQUFDOEIsSUFBSSxDQUFDOEosd0JBQXdCLENBQUMsQ0FBQzlCLE9BQU8sQ0FBQyxVQUFVakksR0FBRyxFQUFFO0dBQzNELElBQUlBLEdBQUcsS0FBSyxTQUFTLElBQUlBLEdBQUcsS0FBSyxZQUFZLEVBQUUsT0FBQTtBQUMvQyxHQUFBLElBQUlBLEdBQUcsSUFBSTNCLE9BQU8sSUFBSUEsT0FBTyxDQUFDMkIsR0FBRyxDQUFDLEtBQUsrSix3QkFBd0IsQ0FBQy9KLEdBQUcsQ0FBQyxFQUFFLE9BQUE7QUFDdEU3QixHQUFBQSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFFMkIsR0FBRyxFQUFFO0tBQ2xDK0MsVUFBVSxFQUFFLElBQUk7QUFDaEJtRCxLQUFBQSxHQUFHLEVBQUUsU0FBU0EsR0FBR0EsR0FBRztPQUNsQixPQUFPNkQsd0JBQXdCLENBQUMvSixHQUFHLENBQUMsQ0FBQTtNQUN0QztBQUNGLElBQUMsQ0FBQyxDQUFBO0FBQ0osRUFBQyxDQUFDLENBQUE7Q0FFRixJQUFJZ0ssNEJBQTRCLEdBQUdsTCw2QkFBd0MsQ0FBQTtDQUUzRVgsTUFBTSxDQUFDOEIsSUFBSSxDQUFDK0osNEJBQTRCLENBQUMsQ0FBQy9CLE9BQU8sQ0FBQyxVQUFVakksR0FBRyxFQUFFO0dBQy9ELElBQUlBLEdBQUcsS0FBSyxTQUFTLElBQUlBLEdBQUcsS0FBSyxZQUFZLEVBQUUsT0FBQTtBQUMvQyxHQUFBLElBQUlBLEdBQUcsSUFBSTNCLE9BQU8sSUFBSUEsT0FBTyxDQUFDMkIsR0FBRyxDQUFDLEtBQUtnSyw0QkFBNEIsQ0FBQ2hLLEdBQUcsQ0FBQyxFQUFFLE9BQUE7QUFDMUU3QixHQUFBQSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFFMkIsR0FBRyxFQUFFO0tBQ2xDK0MsVUFBVSxFQUFFLElBQUk7QUFDaEJtRCxLQUFBQSxHQUFHLEVBQUUsU0FBU0EsR0FBR0EsR0FBRztPQUNsQixPQUFPOEQsNEJBQTRCLENBQUNoSyxHQUFHLENBQUMsQ0FBQTtNQUMxQztBQUNGLElBQUMsQ0FBQyxDQUFBO0FBQ0osRUFBQyxDQUFDLENBQUE7Q0FFRixJQUFJbUIsT0FBTyxHQUFHckMsUUFBbUIsQ0FBQTtDQUVqQ1gsTUFBTSxDQUFDOEIsSUFBSSxDQUFDa0IsT0FBTyxDQUFDLENBQUM4RyxPQUFPLENBQUMsVUFBVWpJLEdBQUcsRUFBRTtHQUMxQyxJQUFJQSxHQUFHLEtBQUssU0FBUyxJQUFJQSxHQUFHLEtBQUssWUFBWSxFQUFFLE9BQUE7QUFDL0MsR0FBQSxJQUFJQSxHQUFHLElBQUkzQixPQUFPLElBQUlBLE9BQU8sQ0FBQzJCLEdBQUcsQ0FBQyxLQUFLbUIsT0FBTyxDQUFDbkIsR0FBRyxDQUFDLEVBQUUsT0FBQTtBQUNyRDdCLEdBQUFBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLEVBQUUyQixHQUFHLEVBQUU7S0FDbEMrQyxVQUFVLEVBQUUsSUFBSTtBQUNoQm1ELEtBQUFBLEdBQUcsRUFBRSxTQUFTQSxHQUFHQSxHQUFHO09BQ2xCLE9BQU8vRSxPQUFPLENBQUNuQixHQUFHLENBQUMsQ0FBQTtNQUNyQjtBQUNGLElBQUMsQ0FBQyxDQUFBO0FBQ0osRUFBQyxDQUFDLENBQUE7Q0FFRixJQUFJc0csY0FBYyxHQUFHeEgsZUFBMEIsQ0FBQTtDQUUvQ1gsTUFBTSxDQUFDOEIsSUFBSSxDQUFDcUcsY0FBYyxDQUFDLENBQUMyQixPQUFPLENBQUMsVUFBVWpJLEdBQUcsRUFBRTtHQUNqRCxJQUFJQSxHQUFHLEtBQUssU0FBUyxJQUFJQSxHQUFHLEtBQUssWUFBWSxFQUFFLE9BQUE7QUFDL0MsR0FBQSxJQUFJQSxHQUFHLElBQUkzQixPQUFPLElBQUlBLE9BQU8sQ0FBQzJCLEdBQUcsQ0FBQyxLQUFLc0csY0FBYyxDQUFDdEcsR0FBRyxDQUFDLEVBQUUsT0FBQTtBQUM1RDdCLEdBQUFBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLEVBQUUyQixHQUFHLEVBQUU7S0FDbEMrQyxVQUFVLEVBQUUsSUFBSTtBQUNoQm1ELEtBQUFBLEdBQUcsRUFBRSxTQUFTQSxHQUFHQSxHQUFHO09BQ2xCLE9BQU9JLGNBQWMsQ0FBQ3RHLEdBQUcsQ0FBQyxDQUFBO01BQzVCO0FBQ0YsSUFBQyxDQUFDLENBQUE7QUFDSixFQUFDLENBQUMsQ0FBQTtDQUVGLElBQUlpSyxnQkFBZ0IsR0FBR25MLGlCQUE0QixDQUFBO0NBRW5EWCxNQUFNLENBQUM4QixJQUFJLENBQUNnSyxnQkFBZ0IsQ0FBQyxDQUFDaEMsT0FBTyxDQUFDLFVBQVVqSSxHQUFHLEVBQUU7R0FDbkQsSUFBSUEsR0FBRyxLQUFLLFNBQVMsSUFBSUEsR0FBRyxLQUFLLFlBQVksRUFBRSxPQUFBO0FBQy9DLEdBQUEsSUFBSUEsR0FBRyxJQUFJM0IsT0FBTyxJQUFJQSxPQUFPLENBQUMyQixHQUFHLENBQUMsS0FBS2lLLGdCQUFnQixDQUFDakssR0FBRyxDQUFDLEVBQUUsT0FBQTtBQUM5RDdCLEdBQUFBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLEVBQUUyQixHQUFHLEVBQUU7S0FDbEMrQyxVQUFVLEVBQUUsSUFBSTtBQUNoQm1ELEtBQUFBLEdBQUcsRUFBRSxTQUFTQSxHQUFHQSxHQUFHO09BQ2xCLE9BQU8rRCxnQkFBZ0IsQ0FBQ2pLLEdBQUcsQ0FBQyxDQUFBO01BQzlCO0FBQ0YsSUFBQyxDQUFDLENBQUE7QUFDSixFQUFDLENBQUMsQ0FBQTtDQUVGLElBQUlrSyxnQkFBZ0IsR0FBR3BMLGlCQUE0QixDQUFBO0NBRW5EWCxNQUFNLENBQUM4QixJQUFJLENBQUNpSyxnQkFBZ0IsQ0FBQyxDQUFDakMsT0FBTyxDQUFDLFVBQVVqSSxHQUFHLEVBQUU7R0FDbkQsSUFBSUEsR0FBRyxLQUFLLFNBQVMsSUFBSUEsR0FBRyxLQUFLLFlBQVksRUFBRSxPQUFBO0FBQy9DLEdBQUEsSUFBSUEsR0FBRyxJQUFJM0IsT0FBTyxJQUFJQSxPQUFPLENBQUMyQixHQUFHLENBQUMsS0FBS2tLLGdCQUFnQixDQUFDbEssR0FBRyxDQUFDLEVBQUUsT0FBQTtBQUM5RDdCLEdBQUFBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLEVBQUUyQixHQUFHLEVBQUU7S0FDbEMrQyxVQUFVLEVBQUUsSUFBSTtBQUNoQm1ELEtBQUFBLEdBQUcsRUFBRSxTQUFTQSxHQUFHQSxHQUFHO09BQ2xCLE9BQU9nRSxnQkFBZ0IsQ0FBQ2xLLEdBQUcsQ0FBQyxDQUFBO01BQzlCO0FBQ0YsSUFBQyxDQUFDLENBQUE7QUFDSixFQUFDLENBQUMsQ0FBQTtDQUVGLElBQUltSyxXQUFXLEdBQUdyTCxZQUF1QixDQUFBO0NBRXpDWCxNQUFNLENBQUM4QixJQUFJLENBQUNrSyxXQUFXLENBQUMsQ0FBQ2xDLE9BQU8sQ0FBQyxVQUFVakksR0FBRyxFQUFFO0dBQzlDLElBQUlBLEdBQUcsS0FBSyxTQUFTLElBQUlBLEdBQUcsS0FBSyxZQUFZLEVBQUUsT0FBQTtBQUMvQyxHQUFBLElBQUlBLEdBQUcsSUFBSTNCLE9BQU8sSUFBSUEsT0FBTyxDQUFDMkIsR0FBRyxDQUFDLEtBQUttSyxXQUFXLENBQUNuSyxHQUFHLENBQUMsRUFBRSxPQUFBO0FBQ3pEN0IsR0FBQUEsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sRUFBRTJCLEdBQUcsRUFBRTtLQUNsQytDLFVBQVUsRUFBRSxJQUFJO0FBQ2hCbUQsS0FBQUEsR0FBRyxFQUFFLFNBQVNBLEdBQUdBLEdBQUc7T0FDbEIsT0FBT2lFLFdBQVcsQ0FBQ25LLEdBQUcsQ0FBQyxDQUFBO01BQ3pCO0FBQ0YsSUFBQyxDQUFDLENBQUE7QUFDSixFQUFDLENBQUMsQ0FBQTtDQUVGLElBQUl1RSxpQkFBaUIsR0FBR3pGLGtCQUE2QixDQUFBO0NBRXJEWCxNQUFNLENBQUM4QixJQUFJLENBQUNzRSxpQkFBaUIsQ0FBQyxDQUFDMEQsT0FBTyxDQUFDLFVBQVVqSSxHQUFHLEVBQUU7R0FDcEQsSUFBSUEsR0FBRyxLQUFLLFNBQVMsSUFBSUEsR0FBRyxLQUFLLFlBQVksRUFBRSxPQUFBO0FBQy9DLEdBQUEsSUFBSUEsR0FBRyxJQUFJM0IsT0FBTyxJQUFJQSxPQUFPLENBQUMyQixHQUFHLENBQUMsS0FBS3VFLGlCQUFpQixDQUFDdkUsR0FBRyxDQUFDLEVBQUUsT0FBQTtBQUMvRDdCLEdBQUFBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLEVBQUUyQixHQUFHLEVBQUU7S0FDbEMrQyxVQUFVLEVBQUUsSUFBSTtBQUNoQm1ELEtBQUFBLEdBQUcsRUFBRSxTQUFTQSxHQUFHQSxHQUFHO09BQ2xCLE9BQU8zQixpQkFBaUIsQ0FBQ3ZFLEdBQUcsQ0FBQyxDQUFBO01BQy9CO0FBQ0YsSUFBQyxDQUFDLENBQUE7QUFDSixFQUFDLENBQUMsQ0FBQTtDQUVGLElBQUlvSyxjQUFjLEdBQUd0TCxlQUEwQixDQUFBO0NBRS9DWCxNQUFNLENBQUM4QixJQUFJLENBQUNtSyxjQUFjLENBQUMsQ0FBQ25DLE9BQU8sQ0FBQyxVQUFVakksR0FBRyxFQUFFO0dBQ2pELElBQUlBLEdBQUcsS0FBSyxTQUFTLElBQUlBLEdBQUcsS0FBSyxZQUFZLEVBQUUsT0FBQTtBQUMvQyxHQUFBLElBQUlBLEdBQUcsSUFBSTNCLE9BQU8sSUFBSUEsT0FBTyxDQUFDMkIsR0FBRyxDQUFDLEtBQUtvSyxjQUFjLENBQUNwSyxHQUFHLENBQUMsRUFBRSxPQUFBO0FBQzVEN0IsR0FBQUEsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sRUFBRTJCLEdBQUcsRUFBRTtLQUNsQytDLFVBQVUsRUFBRSxJQUFJO0FBQ2hCbUQsS0FBQUEsR0FBRyxFQUFFLFNBQVNBLEdBQUdBLEdBQUc7T0FDbEIsT0FBT2tFLGNBQWMsQ0FBQ3BLLEdBQUcsQ0FBQyxDQUFBO01BQzVCO0FBQ0YsSUFBQyxDQUFDLENBQUE7QUFDSixFQUFDLENBQUMsQ0FBQTtDQUVGLElBQUlzRSxZQUFZLEdBQUd4RixhQUF3QixDQUFBO0NBRTNDWCxNQUFNLENBQUM4QixJQUFJLENBQUNxRSxZQUFZLENBQUMsQ0FBQzJELE9BQU8sQ0FBQyxVQUFVakksR0FBRyxFQUFFO0dBQy9DLElBQUlBLEdBQUcsS0FBSyxTQUFTLElBQUlBLEdBQUcsS0FBSyxZQUFZLEVBQUUsT0FBQTtBQUMvQyxHQUFBLElBQUlBLEdBQUcsSUFBSTNCLE9BQU8sSUFBSUEsT0FBTyxDQUFDMkIsR0FBRyxDQUFDLEtBQUtzRSxZQUFZLENBQUN0RSxHQUFHLENBQUMsRUFBRSxPQUFBO0FBQzFEN0IsR0FBQUEsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sRUFBRTJCLEdBQUcsRUFBRTtLQUNsQytDLFVBQVUsRUFBRSxJQUFJO0FBQ2hCbUQsS0FBQUEsR0FBRyxFQUFFLFNBQVNBLEdBQUdBLEdBQUc7T0FDbEIsT0FBTzVCLFlBQVksQ0FBQ3RFLEdBQUcsQ0FBQyxDQUFBO01BQzFCO0FBQ0YsSUFBQyxDQUFDLENBQUE7QUFDSixFQUFDLENBQUMsQ0FBQTs7Ozs7Q0M1T0YsU0FBUzZHLE9BQU9BLENBQUMvRCxHQUFHLEVBQUU7R0FBRSx5QkFBeUIsQ0FBQTs7QUFBRSxHQUFBLE9BQU8rRCxPQUFPLEdBQUcsVUFBVSxJQUFJLE9BQU9DLE1BQU0sSUFBSSxRQUFRLElBQUksT0FBT0EsTUFBTSxDQUFDQyxRQUFRLEdBQUcsVUFBVWpFLEdBQUcsRUFBRTtLQUFFLE9BQU8sT0FBT0EsR0FBRyxDQUFBO0lBQUcsR0FBRyxVQUFVQSxHQUFHLEVBQUU7S0FBRSxPQUFPQSxHQUFHLElBQUksVUFBVSxJQUFJLE9BQU9nRSxNQUFNLElBQUloRSxHQUFHLENBQUNrRSxXQUFXLEtBQUtGLE1BQU0sSUFBSWhFLEdBQUcsS0FBS2dFLE1BQU0sQ0FBQ0csU0FBUyxHQUFHLFFBQVEsR0FBRyxPQUFPbkUsR0FBRyxDQUFBO0FBQUUsSUFBQyxFQUFFK0QsT0FBTyxDQUFDL0QsR0FBRyxDQUFDLENBQUE7RUFBRTtBQUUvVTNFLENBQUFBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFVLE9BQUEsRUFBQSxZQUFZLEVBQUU7R0FDM0NFLEtBQUssRUFBRSxJQUFBO0FBQ1QsRUFBQyxDQUFDLENBQUE7Q0FDRixJQUFJK0wsWUFBWSxHQUFHLEVBQUUsQ0FBQTtBQUNyQmhNLENBQUFBLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQTtBQUUzQixDQUFBLElBQUlpTSxLQUFLLEdBQUdDLHVCQUF1QixDQUFDekwsT0FBa0IsQ0FBQyxDQUFBO0NBRXZELElBQUlELE1BQU0sR0FBR0MsT0FBa0IsQ0FBQTtDQUUvQlgsTUFBTSxDQUFDOEIsSUFBSSxDQUFDcEIsTUFBTSxDQUFDLENBQUNvSixPQUFPLENBQUMsVUFBVWpJLEdBQUcsRUFBRTtHQUN6QyxJQUFJQSxHQUFHLEtBQUssU0FBUyxJQUFJQSxHQUFHLEtBQUssWUFBWSxFQUFFLE9BQUE7QUFDL0MsR0FBQSxJQUFJN0IsTUFBTSxDQUFDOEksU0FBUyxDQUFDdUQsY0FBYyxDQUFDQyxJQUFJLENBQUNKLFlBQVksRUFBRXJLLEdBQUcsQ0FBQyxFQUFFLE9BQUE7QUFDN0QsR0FBQSxJQUFJQSxHQUFHLElBQUkzQixPQUFPLElBQUlBLE9BQU8sQ0FBQzJCLEdBQUcsQ0FBQyxLQUFLbkIsTUFBTSxDQUFDbUIsR0FBRyxDQUFDLEVBQUUsT0FBQTtBQUNwRDdCLEdBQUFBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLEVBQUUyQixHQUFHLEVBQUU7S0FDbEMrQyxVQUFVLEVBQUUsSUFBSTtBQUNoQm1ELEtBQUFBLEdBQUcsRUFBRSxTQUFTQSxHQUFHQSxHQUFHO09BQ2xCLE9BQU9ySCxNQUFNLENBQUNtQixHQUFHLENBQUMsQ0FBQTtNQUNwQjtBQUNGLElBQUMsQ0FBQyxDQUFBO0FBQ0osRUFBQyxDQUFDLENBQUE7Q0FFRixTQUFTMEssd0JBQXdCQSxDQUFDQyxXQUFXLEVBQUU7R0FBRSxJQUFJLE9BQU9DLE9BQU8sS0FBSyxVQUFVLEVBQUUsT0FBTyxJQUFJLENBQUE7QUFBRSxHQUFBLElBQUlDLGlCQUFpQixHQUFHLElBQUlELE9BQU8sRUFBRSxDQUFBO0FBQUUsR0FBQSxJQUFJRSxnQkFBZ0IsR0FBRyxJQUFJRixPQUFPLEVBQUUsQ0FBQTtHQUFFLE9BQU8sQ0FBQ0Ysd0JBQXdCLEdBQUcsU0FBU0Esd0JBQXdCQSxDQUFDQyxXQUFXLEVBQUU7QUFBRSxLQUFBLE9BQU9BLFdBQVcsR0FBR0csZ0JBQWdCLEdBQUdELGlCQUFpQixDQUFBO0lBQUcsRUFBRUYsV0FBVyxDQUFDLENBQUE7RUFBRTtBQUU5VSxDQUFBLFNBQVNKLHVCQUF1QkEsQ0FBQ3pILEdBQUcsRUFBRTZILFdBQVcsRUFBRTtHQUFFLElBQUksQ0FBQ0EsV0FBVyxJQUFJN0gsR0FBRyxJQUFJQSxHQUFHLENBQUNpSSxVQUFVLEVBQUU7S0FBRSxPQUFPakksR0FBRyxDQUFBO0lBQUU7QUFBRSxHQUFBLElBQUlBLEdBQUcsS0FBSyxJQUFJLElBQUkrRCxPQUFPLENBQUMvRCxHQUFHLENBQUMsS0FBSyxRQUFRLElBQUksT0FBT0EsR0FBRyxLQUFLLFVBQVUsRUFBRTtLQUFFLE9BQU87T0FBRSxTQUFTLEVBQUVBLEdBQUFBO01BQUssQ0FBQTtJQUFFO0FBQUUsR0FBQSxJQUFJa0ksS0FBSyxHQUFHTix3QkFBd0IsQ0FBQ0MsV0FBVyxDQUFDLENBQUE7R0FBRSxJQUFJSyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsR0FBRyxDQUFDbkksR0FBRyxDQUFDLEVBQUU7QUFBRSxLQUFBLE9BQU9rSSxLQUFLLENBQUM5RSxHQUFHLENBQUNwRCxHQUFHLENBQUMsQ0FBQTtJQUFFO0dBQUUsSUFBSW9JLE1BQU0sR0FBRyxFQUFFLENBQUE7R0FBRSxJQUFJQyxxQkFBcUIsR0FBR2hOLE1BQU0sQ0FBQ0MsY0FBYyxJQUFJRCxNQUFNLENBQUN5Six3QkFBd0IsQ0FBQTtBQUFFLEdBQUEsS0FBSyxJQUFJNUgsR0FBRyxJQUFJOEMsR0FBRyxFQUFFO0FBQUUsS0FBQSxJQUFJOUMsR0FBRyxLQUFLLFNBQVMsSUFBSTdCLE1BQU0sQ0FBQzhJLFNBQVMsQ0FBQ3VELGNBQWMsQ0FBQ0MsSUFBSSxDQUFDM0gsR0FBRyxFQUFFOUMsR0FBRyxDQUFDLEVBQUU7QUFBRSxPQUFBLElBQUlvTCxJQUFJLEdBQUdELHFCQUFxQixHQUFHaE4sTUFBTSxDQUFDeUosd0JBQXdCLENBQUM5RSxHQUFHLEVBQUU5QyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUE7T0FBRSxJQUFJb0wsSUFBSSxLQUFLQSxJQUFJLENBQUNsRixHQUFHLElBQUlrRixJQUFJLENBQUNDLEdBQUcsQ0FBQyxFQUFFO1NBQUVsTixNQUFNLENBQUNDLGNBQWMsQ0FBQzhNLE1BQU0sRUFBRWxMLEdBQUcsRUFBRW9MLElBQUksQ0FBQyxDQUFBO0FBQUUsUUFBQyxNQUFNO1NBQUVGLE1BQU0sQ0FBQ2xMLEdBQUcsQ0FBQyxHQUFHOEMsR0FBRyxDQUFDOUMsR0FBRyxDQUFDLENBQUE7UUFBRTtNQUFFO0lBQUU7QUFBRWtMLEdBQUFBLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBR3BJLEdBQUcsQ0FBQTtHQUFFLElBQUlrSSxLQUFLLEVBQUU7S0FBRUEsS0FBSyxDQUFDSyxHQUFHLENBQUN2SSxHQUFHLEVBQUVvSSxNQUFNLENBQUMsQ0FBQTtJQUFFO0dBQUUsT0FBT0EsTUFBTSxDQUFBO0VBQUU7QUFFMXlCLENBQUEsU0FBU0ksZUFBZUEsQ0FBQ0MsUUFBUSxFQUFFQyxXQUFXLEVBQUU7QUFBRSxHQUFBLElBQUksRUFBRUQsUUFBUSxZQUFZQyxXQUFXLENBQUMsRUFBRTtBQUFFLEtBQUEsTUFBTSxJQUFJQyxTQUFTLENBQUMsbUNBQW1DLENBQUMsQ0FBQTtJQUFFO0VBQUU7QUFFeEosQ0FBQSxTQUFTQyxpQkFBaUJBLENBQUMzRCxNQUFNLEVBQUVTLEtBQUssRUFBRTtBQUFFLEdBQUEsS0FBSyxJQUFJL0ksQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHK0ksS0FBSyxDQUFDbEosTUFBTSxFQUFFRyxDQUFDLEVBQUUsRUFBRTtBQUFFLEtBQUEsSUFBSWtNLFVBQVUsR0FBR25ELEtBQUssQ0FBQy9JLENBQUMsQ0FBQyxDQUFBO0tBQUVrTSxVQUFVLENBQUM1SSxVQUFVLEdBQUc0SSxVQUFVLENBQUM1SSxVQUFVLElBQUksS0FBSyxDQUFBO0tBQUU0SSxVQUFVLENBQUMzSSxZQUFZLEdBQUcsSUFBSSxDQUFBO0tBQUUsSUFBSSxPQUFPLElBQUkySSxVQUFVLEVBQUVBLFVBQVUsQ0FBQzFJLFFBQVEsR0FBRyxJQUFJLENBQUE7S0FBRTlFLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDMkosTUFBTSxFQUFFNEQsVUFBVSxDQUFDM0wsR0FBRyxFQUFFMkwsVUFBVSxDQUFDLENBQUE7SUFBRTtFQUFFO0FBRTVULENBQUEsU0FBU0MsWUFBWUEsQ0FBQ0osV0FBVyxFQUFFSyxVQUFVLEVBQUVDLFdBQVcsRUFBRTtHQUFFLElBQUlELFVBQVUsRUFBRUgsaUJBQWlCLENBQUNGLFdBQVcsQ0FBQ3ZFLFNBQVMsRUFBRTRFLFVBQVUsQ0FBQyxDQUFBO0dBQUUsSUFBSUMsV0FBVyxFQUFFSixpQkFBaUIsQ0FBQ0YsV0FBVyxFQUFFTSxXQUFXLENBQUMsQ0FBQTtBQUFFM04sR0FBQUEsTUFBTSxDQUFDQyxjQUFjLENBQUNvTixXQUFXLEVBQUUsV0FBVyxFQUFFO0tBQUV2SSxRQUFRLEVBQUUsS0FBQTtBQUFNLElBQUMsQ0FBQyxDQUFBO0dBQUUsT0FBT3VJLFdBQVcsQ0FBQTtFQUFFO0FBRTVSLENBQUEsU0FBUzNJLGVBQWVBLENBQUNDLEdBQUcsRUFBRTlDLEdBQUcsRUFBRTFCLEtBQUssRUFBRTtHQUFFLElBQUkwQixHQUFHLElBQUk4QyxHQUFHLEVBQUU7QUFBRTNFLEtBQUFBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDMEUsR0FBRyxFQUFFOUMsR0FBRyxFQUFFO09BQUUxQixLQUFLLEVBQUVBLEtBQUs7T0FBRXlFLFVBQVUsRUFBRSxJQUFJO09BQUVDLFlBQVksRUFBRSxJQUFJO09BQUVDLFFBQVEsRUFBRSxJQUFBO0FBQUssTUFBQyxDQUFDLENBQUE7QUFBRSxJQUFDLE1BQU07QUFBRUgsS0FBQUEsR0FBRyxDQUFDOUMsR0FBRyxDQUFDLEdBQUcxQixLQUFLLENBQUE7SUFBRTtHQUFFLE9BQU93RSxHQUFHLENBQUE7RUFBRTtDQUVoTixJQUFJaUosWUFBWSxnQkFBZ0IsWUFBWTtHQUMxQyxTQUFTQSxZQUFZQSxDQUFDdkQsS0FBSyxFQUFFO0FBQzNCOEMsS0FBQUEsZUFBZSxDQUFDLElBQUksRUFBRVMsWUFBWSxDQUFDLENBQUE7S0FFbkNsSixlQUFlLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFBO0tBRXRDQSxlQUFlLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFBO0tBRXRDLElBQUksQ0FBQzZCLEtBQUssR0FBRzRGLEtBQUssQ0FBQ2xDLGVBQWUsRUFBRSxDQUFBO0tBQ3BDLElBQUksQ0FBQ0ksS0FBSyxHQUFHOEIsS0FBSyxDQUFDL0IsZUFBZSxDQUFDQyxLQUFLLENBQUMsQ0FBQTtLQUN6QyxJQUFJLENBQUN3RCxnQkFBZ0IsR0FBRyxJQUFJLENBQUNBLGdCQUFnQixDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7S0FDeEQsSUFBSSxDQUFDQyxlQUFlLEdBQUcsSUFBSSxDQUFDQSxlQUFlLENBQUNELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtLQUN0RCxJQUFJLENBQUNFLGNBQWMsR0FBRyxJQUFJLENBQUNBLGNBQWMsQ0FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0tBQ3BELElBQUksQ0FBQ0csZUFBZSxHQUFHLElBQUksQ0FBQ0EsZUFBZSxDQUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7S0FDdEQsSUFBSSxDQUFDSSxlQUFlLEdBQUcsSUFBSSxDQUFDQSxlQUFlLENBQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtLQUN0RCxJQUFJLENBQUNLLGFBQWEsR0FBRyxJQUFJLENBQUNBLGFBQWEsQ0FBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0tBQ2xELElBQUksQ0FBQ00sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDQSxnQkFBZ0IsQ0FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzFEO0dBRUFMLFlBQVksQ0FBQ0csWUFBWSxFQUFFLENBQUM7S0FDMUIvTCxHQUFHLEVBQUUsTUFBTTtBQUNYMUIsS0FBQUEsS0FBSyxFQUFFLFNBQVNrTyxJQUFJQSxHQUFHO09BQ3JCLElBQUksQ0FBQ0MsbUJBQW1CLEVBQUUsQ0FBQTtPQUMxQixJQUFJLENBQUNDLG1CQUFtQixFQUFFLENBQUE7TUFDNUI7QUFDRixJQUFDLEVBQUU7S0FDRDFNLEdBQUcsRUFBRSxRQUFRO0FBQ2IxQixLQUFBQSxLQUFLLEVBQUUsU0FBU3FPLE1BQU1BLENBQUNuRSxLQUFLLEVBQUU7QUFDNUIsT0FBQSxJQUFJb0UsU0FBUyxHQUFHLElBQUksQ0FBQ3BFLEtBQUssQ0FBQTtBQUMxQixPQUFBLElBQUlxRSxTQUFTLEdBQUcxTyxNQUFNLENBQUMyTyxNQUFNLENBQUMsRUFBRSxFQUFFRixTQUFTLEVBQUVwRSxLQUFLLENBQUMsQ0FBQTtBQUVuRCxPQUFBLElBQUlvRSxTQUFTLENBQUNuRSxPQUFPLEtBQUtvRSxTQUFTLENBQUNwRSxPQUFPLElBQUltRSxTQUFTLENBQUM3RSxNQUFNLEtBQUs4RSxTQUFTLENBQUM5RSxNQUFNLEVBQUU7U0FDcEYsSUFBSSxDQUFDZ0YsT0FBTyxFQUFFLENBQUE7U0FDZCxJQUFJLENBQUN2RSxLQUFLLEdBQUdxRSxTQUFTLENBQUE7U0FDdEIsSUFBSSxDQUFDTCxJQUFJLEVBQUUsQ0FBQTtBQUNYLFNBQUEsT0FBQTtRQUNGO09BRUEsSUFBSSxDQUFDaEUsS0FBSyxHQUFHcUUsU0FBUyxDQUFBO0FBRXRCLE9BQUEsSUFBSUQsU0FBUyxDQUFDakUsb0JBQW9CLEtBQUtrRSxTQUFTLENBQUNsRSxvQkFBb0IsSUFBSWlFLFNBQVMsQ0FBQzlELDJCQUEyQixLQUFLK0QsU0FBUyxDQUFDL0QsMkJBQTJCLEVBQUU7U0FDeEosSUFBSSxDQUFDa0UscUJBQXFCLEVBQUUsQ0FBQTtTQUM1QkgsU0FBUyxDQUFDbEUsb0JBQW9CLEdBQUcsSUFBSSxDQUFDK0QsbUJBQW1CLEVBQUUsR0FBRyxJQUFJLENBQUNNLHFCQUFxQixFQUFFLENBQUE7UUFDNUY7T0FFQSxJQUFJSixTQUFTLENBQUNoRSxvQkFBb0IsS0FBS2lFLFNBQVMsQ0FBQ2pFLG9CQUFvQixFQUFFO1NBQ3JFLElBQUksQ0FBQ3FFLHFCQUFxQixFQUFFLENBQUE7U0FDNUJKLFNBQVMsQ0FBQ2pFLG9CQUFvQixHQUFHLElBQUksQ0FBQzZELG1CQUFtQixFQUFFLEdBQUcsSUFBSSxDQUFDUSxxQkFBcUIsRUFBRSxDQUFBO1FBQzVGO01BQ0Y7QUFDRixJQUFDLEVBQUU7S0FDRGpOLEdBQUcsRUFBRSxTQUFTO0FBQ2QxQixLQUFBQSxLQUFLLEVBQUUsU0FBU3lPLE9BQU9BLEdBQUc7T0FDeEIsSUFBSSxDQUFDQyxxQkFBcUIsRUFBRSxDQUFBO09BQzVCLElBQUksQ0FBQ0MscUJBQXFCLEVBQUUsQ0FBQTtPQUM1QixJQUFJLENBQUN2SSxLQUFLLEdBQUc0RixLQUFLLENBQUNsQyxlQUFlLEVBQUUsQ0FBQTtPQUNwQyxJQUFJLENBQUNJLEtBQUssR0FBRzhCLEtBQUssQ0FBQy9CLGVBQWUsRUFBRSxDQUFBO01BQ3RDO0FBQ0YsSUFBQyxFQUFFO0tBQ0R2SSxHQUFHLEVBQUUscUJBQXFCO0FBQzFCMUIsS0FBQUEsS0FBSyxFQUFFLFNBQVNtTyxtQkFBbUJBLEdBQUc7QUFDcEMsT0FBQSxJQUFJUyxXQUFXLEdBQUcsSUFBSSxDQUFDMUUsS0FBSztTQUN4QkMsT0FBTyxHQUFHeUUsV0FBVyxDQUFDekUsT0FBTztTQUM3QlYsTUFBTSxHQUFHbUYsV0FBVyxDQUFDbkYsTUFBTTtTQUMzQmEsb0JBQW9CLEdBQUdzRSxXQUFXLENBQUN0RSxvQkFBb0IsQ0FBQTtPQUUzRCxJQUFJSCxPQUFPLElBQUlHLG9CQUFvQixFQUFFO0FBQ25DLFNBQUEsSUFBSXVFLFFBQVEsR0FBR3BGLE1BQU0sSUFBSVUsT0FBTyxDQUFBO0FBQ2hDLFNBQUEsSUFBSXRDLGtCQUFrQixHQUFHbUUsS0FBSyxDQUFDakUsdUJBQXVCLEVBQUUsQ0FBQTtTQUN4RCxJQUFJMUIsT0FBTyxHQUFHMkYsS0FBSyxDQUFDdEIsVUFBVSxDQUFDN0Msa0JBQWtCLENBQUMsQ0FBQTtTQUNsRGdILFFBQVEsQ0FBQzNHLGdCQUFnQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUN3RixnQkFBZ0IsRUFBRXJILE9BQU8sQ0FBQyxDQUFBO1NBQ3ZFd0ksUUFBUSxDQUFDM0csZ0JBQWdCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQzBGLGVBQWUsRUFBRXZILE9BQU8sQ0FBQyxDQUFBO1NBQ3JFd0ksUUFBUSxDQUFDM0csZ0JBQWdCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQzJGLGNBQWMsRUFBRXhILE9BQU8sQ0FBQyxDQUFBO1FBQ3JFO01BQ0Y7QUFDRixJQUFDLEVBQUU7S0FDRDNFLEdBQUcsRUFBRSx1QkFBdUI7QUFDNUIxQixLQUFBQSxLQUFLLEVBQUUsU0FBUzJPLHFCQUFxQkEsR0FBRztBQUN0QyxPQUFBLElBQUlHLFlBQVksR0FBRyxJQUFJLENBQUM1RSxLQUFLO1NBQ3pCQyxPQUFPLEdBQUcyRSxZQUFZLENBQUMzRSxPQUFPO1NBQzlCVixNQUFNLEdBQUdxRixZQUFZLENBQUNyRixNQUFNLENBQUE7QUFDaEMsT0FBQSxJQUFJb0YsUUFBUSxHQUFHcEYsTUFBTSxJQUFJVSxPQUFPLENBQUE7T0FFaEMsSUFBSTBFLFFBQVEsRUFBRTtTQUNaQSxRQUFRLENBQUN6RyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDc0YsZ0JBQWdCLENBQUMsQ0FBQTtTQUNqRW1CLFFBQVEsQ0FBQ3pHLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUN3RixlQUFlLENBQUMsQ0FBQTtTQUMvRGlCLFFBQVEsQ0FBQ3pHLG1CQUFtQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUN5RixjQUFjLENBQUMsQ0FBQTtRQUMvRDtNQUNGO0FBQ0YsSUFBQyxFQUFFO0tBQ0RuTSxHQUFHLEVBQUUscUJBQXFCO0FBQzFCMUIsS0FBQUEsS0FBSyxFQUFFLFNBQVNvTyxtQkFBbUJBLEdBQUc7QUFDcEMsT0FBQSxJQUFJVyxZQUFZLEdBQUcsSUFBSSxDQUFDN0UsS0FBSztTQUN6QkMsT0FBTyxHQUFHNEUsWUFBWSxDQUFDNUUsT0FBTztTQUM5QkUsb0JBQW9CLEdBQUcwRSxZQUFZLENBQUMxRSxvQkFBb0I7U0FDeERHLDJCQUEyQixHQUFHdUUsWUFBWSxDQUFDdkUsMkJBQTJCLENBQUE7T0FFMUUsSUFBSUgsb0JBQW9CLElBQUlGLE9BQU8sRUFBRTtTQUNuQ0EsT0FBTyxDQUFDakMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQzRGLGVBQWUsQ0FBQyxDQUFBO1NBQzNEM0QsT0FBTyxDQUFDakMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQzZGLGVBQWUsQ0FBQyxDQUFBO1NBQzNENUQsT0FBTyxDQUFDakMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQzhGLGFBQWEsQ0FBQyxDQUFBO1NBRXZELElBQUl4RCwyQkFBMkIsRUFBRTtXQUMvQkwsT0FBTyxDQUFDakMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQytGLGdCQUFnQixDQUFDLENBQUE7VUFDL0Q7UUFDRjtNQUNGO0FBQ0YsSUFBQyxFQUFFO0tBQ0R2TSxHQUFHLEVBQUUsdUJBQXVCO0FBQzVCMUIsS0FBQUEsS0FBSyxFQUFFLFNBQVMwTyxxQkFBcUJBLEdBQUc7T0FDdEMsSUFBSXZFLE9BQU8sR0FBRyxJQUFJLENBQUNELEtBQUssQ0FBQ0MsT0FBTyxDQUFBO09BRWhDLElBQUlBLE9BQU8sRUFBRTtTQUNYQSxPQUFPLENBQUMvQixtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDMEYsZUFBZSxDQUFDLENBQUE7U0FDOUQzRCxPQUFPLENBQUMvQixtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDMkYsZUFBZSxDQUFDLENBQUE7U0FDOUQ1RCxPQUFPLENBQUMvQixtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDNEYsYUFBYSxDQUFDLENBQUE7U0FDMUQ3RCxPQUFPLENBQUMvQixtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDNkYsZ0JBQWdCLENBQUMsQ0FBQTtRQUNsRTtNQUNGO0FBQ0YsSUFBQyxFQUFFO0tBQ0R2TSxHQUFHLEVBQUUsY0FBYztBQUNuQjFCLEtBQUFBLEtBQUssRUFBRSxTQUFTZ1AsWUFBWUEsQ0FBQ3BMLENBQUMsRUFBRTtPQUM5QixJQUFJeUMsT0FBTyxHQUFHN0UsU0FBUyxDQUFDUixNQUFNLEdBQUcsQ0FBQyxJQUFJUSxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUtDLFNBQVMsR0FBR0QsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHO1NBQ2hGOEQsY0FBYyxFQUFFLENBQUE7UUFDakIsQ0FBQTtPQUNELElBQUk4RSxhQUFhLEdBQUcsSUFBSSxDQUFDRixLQUFLLENBQUNFLGFBQWEsQ0FBQTtBQUM1QyxPQUFBLElBQUk5RSxjQUFjLEdBQUdlLE9BQU8sQ0FBQ2YsY0FBYyxDQUFBO09BQzNDLElBQUkySixjQUFjLEdBQUdqRCxLQUFLLENBQUNySSx1QkFBdUIsQ0FBQ0MsQ0FBQyxDQUFDLENBQUE7T0FDckQsSUFBSTZDLGNBQWMsR0FBR3VGLEtBQUssQ0FBQ25CLGFBQWEsQ0FBQ29FLGNBQWMsRUFBRTdFLGFBQWEsQ0FBQyxDQUFBO09BQ3ZFLE9BQU80QixLQUFLLENBQUNqRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUNLLEtBQUssRUFBRTtTQUN6Q0ssY0FBYyxFQUFFQSxjQUFjO1NBQzlCbkIsY0FBYyxFQUFFQSxjQUFBQTtBQUNsQixRQUFDLENBQUMsQ0FBQTtNQUNKO0FBQ0YsSUFBQyxFQUFFO0tBQ0Q1RCxHQUFHLEVBQUUsa0JBQWtCO0FBQ3ZCMUIsS0FBQUEsS0FBSyxFQUFFLFNBQVMwTixnQkFBZ0JBLENBQUM5SixDQUFDLEVBQUU7T0FDbEMsSUFBSW9JLEtBQUssQ0FBQ3pFLDRCQUE0QixDQUFDM0QsQ0FBQyxDQUFDLEVBQUUsT0FBQTtPQUMzQyxJQUFJd0csYUFBYSxHQUFHLElBQUksQ0FBQ0YsS0FBSyxDQUFDRSxhQUFhLENBQUE7T0FDNUMsSUFBSTZFLGNBQWMsR0FBR2pELEtBQUssQ0FBQ3JJLHVCQUF1QixDQUFDQyxDQUFDLENBQUMsQ0FBQTtPQUVyRCxJQUFJc0wsb0JBQW9CLEdBQUdsRCxLQUFLLENBQUNuQixhQUFhLENBQUNvRSxjQUFjLEVBQUU3RSxhQUFhLENBQUM7U0FDekVwSSxDQUFDLEdBQUdrTixvQkFBb0IsQ0FBQ2xOLENBQUM7U0FDMUJDLENBQUMsR0FBR2lOLG9CQUFvQixDQUFDak4sQ0FBQyxDQUFBO0FBRTlCLE9BQUEsSUFBSSxDQUFDbUUsS0FBSyxHQUFHNEYsS0FBSyxDQUFDbEMsZUFBZSxDQUFDO1NBQ2pDQyxTQUFTLEVBQUUsS0FBSztBQUNoQnpELFNBQUFBLEtBQUssRUFBRVcsSUFBSSxDQUFDQyxHQUFHLEVBQUU7U0FDakJsRixDQUFDLEVBQUVBLENBQUM7U0FDSkMsQ0FBQyxFQUFFQSxDQUFBQTtBQUNMLFFBQUMsQ0FBQyxDQUFBO01BQ0o7QUFDRixJQUFDLEVBQUU7S0FDRFAsR0FBRyxFQUFFLGlCQUFpQjtBQUN0QjFCLEtBQUFBLEtBQUssRUFBRSxTQUFTNE4sZUFBZUEsQ0FBQ2hLLENBQUMsRUFBRTtBQUNqQyxPQUFBLElBQUl1TCxXQUFXLEdBQUcsSUFBSSxDQUFDL0ksS0FBSztTQUN4QnBFLENBQUMsR0FBR21OLFdBQVcsQ0FBQ25OLENBQUM7U0FDakJDLENBQUMsR0FBR2tOLFdBQVcsQ0FBQ2xOLENBQUM7U0FDakI4SCxTQUFTLEdBQUdvRixXQUFXLENBQUNwRixTQUFTLENBQUE7QUFDckMsT0FBQSxJQUFJLENBQUMvSCxDQUFDLElBQUksQ0FBQ0MsQ0FBQyxJQUFJK0osS0FBSyxDQUFDekUsNEJBQTRCLENBQUMzRCxDQUFDLENBQUMsRUFBRSxPQUFBO09BQ3ZELElBQUkwQixjQUFjLEdBQUcsSUFBSSxDQUFDNEUsS0FBSyxDQUFDNUUsY0FBYyxJQUFJLENBQUMsQ0FBQTtPQUVuRCxJQUFJOEosa0JBQWtCLEdBQUcsSUFBSSxDQUFDSixZQUFZLENBQUNwTCxDQUFDLEVBQUU7V0FDNUMwQixjQUFjLEVBQUVBLGNBQUFBO0FBQ2xCLFVBQUMsQ0FBQztTQUNFc0IsSUFBSSxHQUFHd0ksa0JBQWtCLENBQUN4SSxJQUFJO1NBQzlCQyxJQUFJLEdBQUd1SSxrQkFBa0IsQ0FBQ3ZJLElBQUk7U0FDOUJILE1BQU0sR0FBRzBJLGtCQUFrQixDQUFDMUksTUFBTTtTQUNsQ0MsTUFBTSxHQUFHeUksa0JBQWtCLENBQUN6SSxNQUFNO1NBQ2xDRyxVQUFVLEdBQUdzSSxrQkFBa0IsQ0FBQ3RJLFVBQVU7U0FDMUNDLFVBQVUsR0FBR3FJLGtCQUFrQixDQUFDckksVUFBVTtTQUMxQ0MsUUFBUSxHQUFHb0ksa0JBQWtCLENBQUNwSSxRQUFRO1NBQ3RDRyxRQUFRLEdBQUdpSSxrQkFBa0IsQ0FBQ2pJLFFBQVEsQ0FBQTtBQUUxQyxPQUFBLElBQUlrSSxZQUFZLEdBQUcsSUFBSSxDQUFDbkYsS0FBSztTQUN6Qm5ILEtBQUssR0FBR3NNLFlBQVksQ0FBQ3RNLEtBQUs7U0FDMUJ3SCw0QkFBNEIsR0FBRzhFLFlBQVksQ0FBQzlFLDRCQUE0QjtTQUN4RStFLFlBQVksR0FBR0QsWUFBWSxDQUFDQyxZQUFZO1NBQ3hDQyxTQUFTLEdBQUdGLFlBQVksQ0FBQ0UsU0FBUyxDQUFBO09BQ3RDLElBQUkzTCxDQUFDLENBQUM0TCxVQUFVLElBQUlqRiw0QkFBNEIsRUFBRTNHLENBQUMsQ0FBQzZMLGNBQWMsRUFBRSxDQUFBO0FBQ3BFLE9BQUEsSUFBSTdJLElBQUksR0FBRzhJLE1BQU0sQ0FBQzNNLEtBQUssQ0FBQyxJQUFJOEQsSUFBSSxHQUFHNkksTUFBTSxDQUFDM00sS0FBSyxDQUFDLElBQUksQ0FBQ2dILFNBQVMsRUFBRSxPQUFBO0FBRWhFLE9BQUEsSUFBSXVGLFlBQVksSUFBSSxDQUFDdkYsU0FBUyxFQUFFO1NBQzlCdUYsWUFBWSxDQUFDMUwsQ0FBQyxFQUFFO1dBQ2Q4QyxNQUFNLEVBQUVBLE1BQU07V0FDZEMsTUFBTSxFQUFFQSxNQUFNO1dBQ2RDLElBQUksRUFBRUEsSUFBSTtXQUNWQyxJQUFJLEVBQUVBLElBQUk7V0FDVkMsVUFBVSxFQUFFQSxVQUFVO1dBQ3RCQyxVQUFVLEVBQUVBLFVBQVU7V0FDdEJDLFFBQVEsRUFBRUEsUUFBUTtXQUNsQkcsUUFBUSxFQUFFQSxRQUFBQTtBQUNaLFVBQUMsQ0FBQyxDQUFBO1FBQ0o7QUFFQSxPQUFBLElBQUksQ0FBQ2YsS0FBSyxDQUFDMkQsU0FBUyxHQUFHLElBQUksQ0FBQTtPQUUzQixJQUFJd0YsU0FBUyxFQUFFO1NBQ2JBLFNBQVMsQ0FBQzNMLENBQUMsRUFBRTtXQUNYOEMsTUFBTSxFQUFFQSxNQUFNO1dBQ2RDLE1BQU0sRUFBRUEsTUFBTTtXQUNkQyxJQUFJLEVBQUVBLElBQUk7V0FDVkMsSUFBSSxFQUFFQSxJQUFJO1dBQ1ZDLFVBQVUsRUFBRUEsVUFBVTtXQUN0QkMsVUFBVSxFQUFFQSxVQUFVO1dBQ3RCQyxRQUFRLEVBQUVBLFFBQVE7V0FDbEJHLFFBQVEsRUFBRUEsUUFBQUE7QUFDWixVQUFDLENBQUMsQ0FBQTtRQUNKO01BQ0Y7QUFDRixJQUFDLEVBQUU7S0FDRHpGLEdBQUcsRUFBRSxnQkFBZ0I7QUFDckIxQixLQUFBQSxLQUFLLEVBQUUsU0FBUzZOLGNBQWNBLENBQUNqSyxDQUFDLEVBQUU7QUFDaEMsT0FBQSxJQUFJK0wsWUFBWSxHQUFHLElBQUksQ0FBQ3pGLEtBQUs7U0FDekIwRixRQUFRLEdBQUdELFlBQVksQ0FBQ0MsUUFBUTtTQUNoQ0MsS0FBSyxHQUFHRixZQUFZLENBQUNFLEtBQUssQ0FBQTtBQUU5QixPQUFBLElBQUksSUFBSSxDQUFDekosS0FBSyxDQUFDMkQsU0FBUyxFQUFFO1NBQ3hCLElBQUl6RSxjQUFjLEdBQUcsSUFBSSxDQUFDNEUsS0FBSyxDQUFDNUUsY0FBYyxJQUFJLENBQUMsQ0FBQTtTQUNuRCxJQUFJd0YsUUFBUSxHQUFHLElBQUksQ0FBQ2tFLFlBQVksQ0FBQ3BMLENBQUMsRUFBRTtXQUNsQzBCLGNBQWMsRUFBRUEsY0FBQUE7QUFDbEIsVUFBQyxDQUFDLENBQUE7U0FDRnNLLFFBQVEsSUFBSUEsUUFBUSxDQUFDaE0sQ0FBQyxFQUFFa0gsUUFBUSxDQUFDLENBQUE7QUFDbkMsUUFBQyxNQUFNO1NBQ0wsSUFBSWdGLFNBQVMsR0FBRyxJQUFJLENBQUNkLFlBQVksQ0FBQ3BMLENBQUMsQ0FBQyxDQUFBO1NBRXBDaU0sS0FBSyxJQUFJQSxLQUFLLENBQUNqTSxDQUFDLEVBQUVrTSxTQUFTLENBQUMsQ0FBQTtRQUM5QjtPQUVBLElBQUksQ0FBQzFKLEtBQUssR0FBRzRGLEtBQUssQ0FBQ2xDLGVBQWUsRUFBRSxDQUFBO01BQ3RDO0FBQ0YsSUFBQyxFQUFFO0tBQ0RwSSxHQUFHLEVBQUUsaUJBQWlCO0FBQ3RCMUIsS0FBQUEsS0FBSyxFQUFFLFNBQVM4TixlQUFlQSxDQUFDbEssQ0FBQyxFQUFFO09BQ2pDLElBQUk2RixNQUFNLEdBQUcsSUFBSSxDQUFDUyxLQUFLLENBQUNULE1BQU0sQ0FBQTtPQUU5QixJQUFJQSxNQUFNLEVBQUU7QUFDVixTQUFBLElBQUlBLE1BQU0sS0FBSzdGLENBQUMsQ0FBQzZGLE1BQU0sRUFBRTtBQUN2QixXQUFBLElBQUksQ0FBQ2lFLGdCQUFnQixDQUFDOUosQ0FBQyxDQUFDLENBQUE7VUFDMUI7QUFDRixRQUFDLE1BQU07QUFDTCxTQUFBLElBQUksQ0FBQzhKLGdCQUFnQixDQUFDOUosQ0FBQyxDQUFDLENBQUE7UUFDMUI7TUFDRjtBQUNGLElBQUMsRUFBRTtLQUNEbEMsR0FBRyxFQUFFLGlCQUFpQjtBQUN0QjFCLEtBQUFBLEtBQUssRUFBRSxTQUFTK04sZUFBZUEsQ0FBQ25LLENBQUMsRUFBRTtBQUNqQyxPQUFBLElBQUksQ0FBQ2dLLGVBQWUsQ0FBQ2hLLENBQUMsQ0FBQyxDQUFBO01BQ3pCO0FBQ0YsSUFBQyxFQUFFO0tBQ0RsQyxHQUFHLEVBQUUsZUFBZTtBQUNwQjFCLEtBQUFBLEtBQUssRUFBRSxTQUFTZ08sYUFBYUEsQ0FBQ3BLLENBQUMsRUFBRTtPQUMvQixJQUFJbUcsU0FBUyxHQUFHLElBQUksQ0FBQzNELEtBQUssQ0FBQzJELFNBQVMsQ0FBQTtPQUNwQyxJQUFJTixNQUFNLEdBQUcsSUFBSSxDQUFDUyxLQUFLLENBQUNULE1BQU0sQ0FBQTtPQUU5QixJQUFJQSxNQUFNLEVBQUU7U0FDVixJQUFJQSxNQUFNLEtBQUs3RixDQUFDLENBQUM2RixNQUFNLElBQUlNLFNBQVMsRUFBRTtBQUNwQyxXQUFBLElBQUksQ0FBQzhELGNBQWMsQ0FBQ2pLLENBQUMsQ0FBQyxDQUFBO1VBQ3hCO0FBQ0YsUUFBQyxNQUFNO0FBQ0wsU0FBQSxJQUFJLENBQUNpSyxjQUFjLENBQUNqSyxDQUFDLENBQUMsQ0FBQTtRQUN4QjtNQUNGO0FBQ0YsSUFBQyxFQUFFO0tBQ0RsQyxHQUFHLEVBQUUsa0JBQWtCO0FBQ3ZCMUIsS0FBQUEsS0FBSyxFQUFFLFNBQVNpTyxnQkFBZ0JBLENBQUNySyxDQUFDLEVBQUU7T0FDbEMsSUFBSW1HLFNBQVMsR0FBRyxJQUFJLENBQUMzRCxLQUFLLENBQUMyRCxTQUFTLENBQUE7T0FFcEMsSUFBSUEsU0FBUyxFQUFFO0FBQ2IsU0FBQSxJQUFJLENBQUM4RCxjQUFjLENBQUNqSyxDQUFDLENBQUMsQ0FBQTtRQUN4QjtNQUNGO0lBQ0QsQ0FBQyxFQUFFLENBQUM7S0FDSGxDLEdBQUcsRUFBRSx3QkFBd0I7QUFDN0IxQixLQUFBQSxLQUFLLEVBQUUsU0FBUytQLHNCQUFzQkEsR0FBRztPQUN2QyxPQUFPL0QsS0FBSyxDQUFDcEQsMkJBQTJCLEVBQUUsQ0FBQTtNQUM1QztJQUNELENBQUMsQ0FBQyxDQUFBO0dBRUgsT0FBTzZFLFlBQVksQ0FBQTtBQUNyQixFQUFDLEVBQUUsQ0FBQTtBQUVIMU4sQ0FBQUEsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHME4sWUFBWSxDQUFBOzs7Ozs7OztBQ2hVaUY1TixDQUFBQSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFDLFlBQVksRUFBQztHQUFDQyxLQUFLLEVBQUMsQ0FBQyxDQUFBO0FBQUMsRUFBQyxDQUFDLEVBQUNELE9BQWtCQSxDQUFBQSxTQUFBQSxHQUFBQSxPQUFBQSxDQUFBQSxVQUFBQSxHQUFtQkEsNEJBQTBCQSxPQUF5QkEsQ0FBQUEsZ0JBQUFBLEdBQUFBLE9BQUFBLENBQUFBLGdCQUFBQSxHQUF5QkEsT0FBc0JBLENBQUFBLGFBQUFBLEdBQUFBLE9BQUFBLENBQUFBLFNBQUFBLEdBQWtCLEtBQUssQ0FBQyxFQUFDLFVBQVM2RCxDQUFDLEVBQUM7R0FBQ0EsQ0FBQyxDQUFDb00sTUFBTSxHQUFDLFFBQVEsRUFBQ3BNLENBQUMsQ0FBQ3FNLElBQUksR0FBQyxNQUFNLEVBQUNyTSxDQUFDLENBQUNzTSxNQUFNLEdBQUMsUUFBUSxFQUFDdE0sQ0FBQyxDQUFDdU0sTUFBTSxHQUFDLFFBQVEsQ0FBQTtBQUFBLEVBQUMsQ0FBV3BRLE9BQU8sQ0FBQ3FRLFNBQVMsS0FBR3JRLE9BQWtCLENBQUEsU0FBQSxHQUFBLEVBQUUsQ0FBQyxDQUFDLEVBQUMsVUFBUzZELENBQUMsRUFBQztHQUFDQSxDQUFDLENBQUN5TSxPQUFPLEdBQUMsU0FBUyxFQUFDek0sQ0FBQyxDQUFDME0sS0FBSyxHQUFDLE9BQU8sQ0FBQTtBQUFBLEVBQUMsQ0FBZXZRLE9BQU8sQ0FBQ3dRLGFBQWEsS0FBR3hRLE9BQXNCLENBQUEsYUFBQSxHQUFBLEVBQUUsQ0FBQyxDQUFDLEVBQUMsVUFBUzZELENBQUMsRUFBQztHQUFDQSxDQUFDLENBQUM0TSxPQUFPLEdBQUMsU0FBUyxFQUFDNU0sQ0FBQyxDQUFDNk0sR0FBRyxHQUFDLEtBQUssRUFBQzdNLENBQUMsQ0FBQ29NLE1BQU0sR0FBQyxRQUFRLEVBQUNwTSxDQUFDLENBQUN4QyxJQUFJLEdBQUMsTUFBTSxDQUFBO0FBQUEsRUFBQyxDQUFrQnJCLE9BQU8sQ0FBQzJRLGdCQUFnQixLQUFHM1EsT0FBeUIsQ0FBQSxnQkFBQSxHQUFBLEVBQUUsQ0FBQyxDQUFDLEVBQUMsVUFBUzZELENBQUMsRUFBQztBQUFDQSxHQUFBQSxDQUFDLENBQUM0TSxPQUFPLEdBQUMsU0FBUyxFQUFDNU0sQ0FBQyxDQUFDK00sU0FBUyxHQUFDLFdBQVcsRUFBQy9NLENBQUMsQ0FBQ2dOLFVBQVUsR0FBQyxZQUFZLENBQUE7QUFBQSxFQUFDLENBQWtCN1EsT0FBTyxDQUFDOFEsZ0JBQWdCLEtBQUc5USxPQUF5QixDQUFBLGdCQUFBLEdBQUEsRUFBRSxDQUFDLENBQUMsRUFBQyxVQUFTNkQsQ0FBQyxFQUFDO0dBQUNBLENBQUMsQ0FBQ2tOLEdBQUcsR0FBQyxLQUFLLEVBQUNsTixDQUFDLENBQUNtTixHQUFHLEdBQUMsS0FBSyxDQUFBO0FBQUEsRUFBQyxDQUFtQmhSLE9BQU8sQ0FBQ2lSLGlCQUFpQixLQUFHalIsT0FBMEIsQ0FBQSxpQkFBQSxHQUFBLEVBQUUsQ0FBQyxDQUFDLEVBQUMsVUFBUzZELENBQUMsRUFBQztHQUFDQSxDQUFDLENBQUNxTixRQUFRLEdBQUMsK0JBQStCLEVBQUNyTixDQUFDLENBQUNzTixJQUFJLEdBQUMsZ0JBQWdCLEVBQUN0TixDQUFDLENBQUN1TixPQUFPLEdBQUMseUJBQXlCLEVBQUN2TixDQUFDLENBQUN3TixLQUFLLEdBQUMsdUJBQXVCLEVBQUN4TixDQUFDLENBQUN5TixVQUFVLEdBQUMsNEJBQTRCLEVBQUN6TixDQUFDLENBQUMwTixJQUFJLEdBQUMsc0JBQXNCLEVBQUMxTixDQUFDLENBQUMyTixTQUFTLEdBQUMsMkJBQTJCLEVBQUMzTixDQUFDLENBQUM0TixRQUFRLEdBQUMsMEJBQTBCLEVBQUM1TixDQUFDLENBQUM2TixhQUFhLEdBQUMsK0JBQStCLEVBQUM3TixDQUFDLENBQUM4TixnQkFBZ0IsR0FBQyxrQ0FBa0MsRUFBQzlOLENBQUMsQ0FBQytOLFVBQVUsR0FBQyw0QkFBNEIsRUFBQy9OLENBQUMsQ0FBQ2dPLGVBQWUsR0FBQyxpQ0FBaUMsRUFBQ2hPLENBQUMsQ0FBQ2lPLFdBQVcsR0FBQywwQkFBMEIsRUFBQ2pPLENBQUMsQ0FBQ2tPLG1CQUFtQixHQUFDLGtDQUFrQyxFQUFDbE8sQ0FBQyxDQUFDbU8sZ0JBQWdCLEdBQUMsK0JBQStCLEVBQUNuTyxDQUFDLENBQUNvTyxXQUFXLEdBQUMsMEJBQTBCLEVBQUNwTyxDQUFDLENBQUNxTyxtQkFBbUIsR0FBQyxrQ0FBa0MsRUFBQ3JPLENBQUMsQ0FBQ3NPLGdCQUFnQixHQUFDLCtCQUErQixDQUFBO0FBQUEsRUFBQyxDQUFZblMsT0FBTyxDQUFDb1MsVUFBVSxLQUFHcFMsT0FBbUIsQ0FBQSxVQUFBLEdBQUEsRUFBRSxDQUFDLENBQUMsRUFBQyxVQUFTNkQsQ0FBQyxFQUFDO0dBQUNBLENBQUMsQ0FBQ3dPLE1BQU0sR0FBQyxVQUFVLEVBQUN4TyxDQUFDLENBQUN5TyxRQUFRLEdBQUMsWUFBWSxFQUFDek8sQ0FBQyxDQUFDME8sTUFBTSxHQUFDLFVBQVUsRUFBQzFPLENBQUMsQ0FBQzJPLE1BQU0sR0FBQyxVQUFVLEVBQUMzTyxDQUFDLENBQUM0TyxLQUFLLEdBQUMsU0FBUyxFQUFDNU8sQ0FBQyxDQUFDNk8sU0FBUyxHQUFDLGFBQWEsRUFBQzdPLENBQUMsQ0FBQzhPLEdBQUcsR0FBQyxPQUFPLEVBQUM5TyxDQUFDLENBQUMrTyxNQUFNLEdBQUMsVUFBVSxDQUFBO0VBQUMsQ0FBVzVTLE9BQU8sQ0FBQzZTLFNBQVMsS0FBRzdTLE9BQUFBLENBQUFBLFNBQUFBLEdBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUE7Ozs7O0FDQTdnRUYsQ0FBQUEsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sRUFBQyxZQUFZLEVBQUM7R0FBQ0MsS0FBSyxFQUFDLENBQUMsQ0FBQTtBQUFDLEVBQUMsQ0FBQyxFQUFDRCxPQUFxQixDQUFBLFlBQUEsR0FBQSxLQUFLLENBQUMsQ0FBQTtDQUFDLElBQUk4UyxPQUFPLEdBQUNyUyxLQUFrQixDQUFBO0NBQUNULE9BQXFCLENBQUEsWUFBQSxHQUFBO0dBQUMrUyxXQUFXLEVBQUMsQ0FBQztHQUFDQyxpQkFBaUIsRUFBQyxHQUFHO0dBQUNDLHVCQUF1QixFQUFDLE1BQU07QUFBQ0MsR0FBQUEsYUFBYSxFQUFDSixPQUFPLENBQUN0QyxhQUFhLENBQUNELEtBQUs7R0FBQzRDLFVBQVUsRUFBQyxDQUFDLENBQUM7R0FBQ0MsU0FBUyxFQUFDLENBQUMsQ0FBQztHQUFDQyxRQUFRLEVBQUMsQ0FBQyxDQUFDO0dBQUNDLGdCQUFnQixFQUFDLENBQUMsQ0FBQztBQUFDQyxHQUFBQSxpQkFBaUIsRUFBQ1QsT0FBTyxDQUFDN0IsaUJBQWlCLENBQUNELEdBQUc7R0FBQ3dDLGdCQUFnQixFQUFDLEdBQUc7QUFBQ0MsR0FBQUEsZ0JBQWdCLEVBQUNYLE9BQU8sQ0FBQ25DLGdCQUFnQixDQUFDRixPQUFPO0dBQUNpRCxRQUFRLEVBQUMsS0FBSyxDQUFDO0FBQUNDLEdBQUFBLGdCQUFnQixFQUFDYixPQUFPLENBQUNoQyxnQkFBZ0IsQ0FBQ0wsT0FBTztHQUFDbUQsc0JBQXNCLEVBQUMsQ0FBQyxDQUFDO0dBQUNDLG1CQUFtQixFQUFDLENBQUMsQ0FBQztHQUFDQyxnQkFBZ0IsRUFBQyxDQUFDLENBQUM7R0FBQ0MsUUFBUSxFQUFDLENBQUMsQ0FBQztHQUFDQyxVQUFVLEVBQUMsS0FBSyxDQUFDO0dBQUNDLEtBQUssRUFBQyxLQUFLLENBQUM7R0FBQ0Msa0JBQWtCLEVBQUMsQ0FBQyxDQUFDO0dBQUNDLGFBQWEsRUFBQyxDQUFDLENBQUM7R0FBQ0MsSUFBSSxFQUFDLEVBQUU7R0FBQ0MsV0FBVyxFQUFDLENBQUM7R0FBQ0MsWUFBWSxFQUFDLENBQUM7R0FBQ0MsVUFBVSxFQUFDLEtBQUssQ0FBQztHQUFDQyxVQUFVLEVBQUMsRUFBRTtHQUFDQyxpQkFBaUIsRUFBQyxHQUFHO0dBQUNDLGFBQWEsRUFBQyxDQUFDLENBQUM7R0FBQ0MsYUFBYSxFQUFDLENBQUMsQ0FBQztHQUFDQyxzQkFBc0IsRUFBQyxDQUFDLENBQUM7R0FBQ0MsYUFBYSxFQUFDLFlBQVUsRUFBRTtHQUFDQyxTQUFTLEVBQUMsWUFBVSxFQUFFO0dBQUNDLGFBQWEsRUFBQyxLQUFLLENBQUM7R0FBQ0MsYUFBYSxFQUFDLFlBQVUsRUFBRTtHQUFDQyxjQUFjLEVBQUMsWUFBVSxFQUFDO0VBQUUsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0NBcjVCLElBQUlDLFFBQVEsR0FBQyxZQUFVO0tBQUMsT0FBTSxDQUFDQSxRQUFRLEdBQUNwVixNQUFNLENBQUMyTyxNQUFNLElBQUUsVUFBUzBHLENBQUMsRUFBQztPQUFDLEtBQUksSUFBSUMsQ0FBQyxFQUFDQyxDQUFDLEdBQUMsQ0FBQyxFQUFDalUsQ0FBQyxHQUFDSyxTQUFTLENBQUNSLE1BQU0sRUFBQ29VLENBQUMsR0FBQ2pVLENBQUMsRUFBQ2lVLENBQUMsRUFBRSxFQUFDLEtBQUksSUFBSUMsQ0FBQyxJQUFJRixDQUFDLEdBQUMzVCxTQUFTLENBQUM0VCxDQUFDLENBQUMsRUFBQ3ZWLE1BQU0sQ0FBQzhJLFNBQVMsQ0FBQ3VELGNBQWMsQ0FBQ0MsSUFBSSxDQUFDZ0osQ0FBQyxFQUFDRSxDQUFDLENBQUMsS0FBR0gsQ0FBQyxDQUFDRyxDQUFDLENBQUMsR0FBQ0YsQ0FBQyxDQUFDRSxDQUFDLENBQUMsQ0FBQyxDQUFBO09BQUMsT0FBT0gsQ0FBQyxDQUFBO0FBQUEsTUFBQyxFQUFFM0wsS0FBSyxDQUFDLElBQUksRUFBQy9ILFNBQVMsQ0FBQyxDQUFBO0lBQUM7R0FBQzhULGdCQUFnQixJQUFFelYsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sRUFBQyxZQUFZLEVBQUM7S0FBQ0MsS0FBSyxFQUFDLENBQUMsQ0FBQTtJQUFFLENBQUMsRUFBQ0QsT0FBMEJBLENBQUFBLGlCQUFBQSxHQUFBQSxPQUFBQSxDQUFBQSxnQkFBQUEsR0FBeUIsS0FBSyxDQUFDLEVBQUMsVUFBU21WLENBQUMsRUFBQztBQUFDLEtBQUEsT0FBT0EsQ0FBQyxDQUFDSyxHQUFHLENBQUMsVUFBU0wsQ0FBQyxFQUFDO09BQUMsT0FBTTtTQUFDTSxLQUFLLEVBQUNOLENBQUMsQ0FBQ00sS0FBSztTQUFDMUssUUFBUSxFQUFDLENBQUE7UUFBRSxDQUFBO0FBQUEsTUFBQyxDQUFDLENBQUE7QUFBQSxJQUFDLENBQUM7R0FBQzJLLGlCQUFpQixJQUFFMVYsT0FBeUJ1VixDQUFBQSxnQkFBQUEsR0FBQUEsZ0JBQWdCLEVBQUMsVUFBU0osQ0FBQyxFQUFDQyxDQUFDLEVBQUM7QUFBQyxLQUFBLE9BQU8sS0FBSyxDQUFDLEtBQUdBLENBQUMsS0FBR0EsQ0FBQyxHQUFDLENBQUMsQ0FBQyxFQUFDRCxDQUFDLENBQUNLLEdBQUcsQ0FBQyxVQUFTTCxDQUFDLEVBQUM7QUFBQyxPQUFBLE9BQU9BLENBQUMsQ0FBQ3BLLFFBQVEsR0FBQ3FLLENBQUMsR0FBQ0YsUUFBUSxDQUFDQSxRQUFRLENBQUMsRUFBRSxFQUFDQyxDQUFDLENBQUMsRUFBQztTQUFDcEssUUFBUSxFQUFDcUssQ0FBQUE7UUFBRSxDQUFDLEdBQUNELENBQUMsQ0FBQTtBQUFBLE1BQUMsQ0FBQyxDQUFBO0FBQUEsSUFBQyxDQUFDLENBQUE7QUFBQ25WLENBQUFBLE9BQUFBLENBQUFBLGlCQUFBQSxHQUEwQjBWLGlCQUFpQixDQUFBOzs7Ozs7O0FDQS9vQjVWLENBQUFBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLEVBQUMsWUFBWSxFQUFDO0dBQUNDLEtBQUssRUFBQyxDQUFDLENBQUE7RUFBRSxDQUFDLEVBQUNELE9BQW9DQSxDQUFBQSwyQkFBQUEsR0FBQUEsT0FBQUEsQ0FBQUEsMkJBQUFBLEdBQW9DQSxtQ0FBaUNBLE9BQThCQSxDQUFBQSxxQkFBQUEsR0FBQUEsT0FBQUEsQ0FBQUEsd0JBQUFBLEdBQWlDQSxPQUFxQ0EsQ0FBQUEsNEJBQUFBLEdBQUFBLE9BQUFBLENBQUFBLDBCQUFBQSxHQUFtQ0EsT0FBMkJBLENBQUFBLGtCQUFBQSxHQUFBQSxPQUFBQSxDQUFBQSxhQUFBQSxHQUFzQkEsNkJBQTJCQSxPQUF1Q0EsQ0FBQUEsOEJBQUFBLEdBQUFBLE9BQUFBLENBQUFBLGdCQUFBQSxHQUF5QkEsT0FBeUJBLENBQUFBLGdCQUFBQSxHQUFBQSxPQUFBQSxDQUFBQSwwQkFBQUEsR0FBbUNBLE9BQW9DQSxDQUFBQSwyQkFBQUEsR0FBQUEsT0FBQUEsQ0FBQUEsMkJBQUFBLEdBQW9DQSx5QkFBdUJBLE9BQXNCQSxDQUFBQSxhQUFBQSxHQUFBQSxPQUFBQSxDQUFBQSxhQUFBQSxHQUFzQixLQUFLLENBQUMsQ0FBQTtBQUFDLENBQUEsSUFBSTJWLGFBQWEsR0FBQyxVQUFTOVIsQ0FBQyxFQUFDdVIsQ0FBQyxFQUFDO0tBQUMsT0FBTSxDQUFDdlIsQ0FBQyxHQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLEdBQUMsQ0FBQyxHQUFDQSxDQUFDLEtBQUd1UixDQUFDLEdBQUMsS0FBSyxDQUFDLEtBQUdBLENBQUMsR0FBQyxDQUFDLEdBQUNBLENBQUMsQ0FBQyxDQUFBO0lBQUM7R0FBQ1EsYUFBYSxJQUFFNVYsT0FBc0IyVixDQUFBQSxhQUFBQSxHQUFBQSxhQUFhLEVBQUMsVUFBUzlSLENBQUMsRUFBQ3VSLENBQUMsRUFBQztLQUFDLElBQUcsS0FBSyxDQUFDLEtBQUd2UixDQUFDLEtBQUdBLENBQUMsR0FBQyxDQUFDLENBQUMsRUFBQ3VSLENBQUMsR0FBQyxLQUFLLENBQUMsS0FBR0EsQ0FBQyxHQUFDLENBQUMsR0FBQ0EsQ0FBQyxFQUFDO09BQUMsSUFBR0EsQ0FBQyxJQUFFdlIsQ0FBQyxFQUFDLE9BQU91UixDQUFDLEdBQUMsQ0FBQyxDQUFBO0FBQUMsT0FBQSxJQUFHLENBQUMsR0FBQ3ZSLENBQUMsRUFBQyxPQUFPQSxDQUFDLENBQUE7TUFBQTtLQUFDLE9BQU8sQ0FBQyxDQUFBO0FBQUEsSUFBQyxDQUFDO0dBQUNnUyxjQUFjLElBQUU3VixPQUFBQSxDQUFBQSxhQUFBQSxHQUFzQjRWLGFBQWEsRUFBQyxVQUFTL1IsQ0FBQyxFQUFDO0FBQUMsS0FBQSxJQUFJdVIsQ0FBQyxHQUFDdlIsQ0FBQyxDQUFDaVMsVUFBVTtPQUFDVixDQUFDLEdBQUMsS0FBSyxDQUFDLEtBQUdBLENBQUMsR0FBQyxDQUFDLEdBQUNBLENBQUM7T0FBQ2hVLENBQUMsR0FBQ3lDLENBQUMsQ0FBQ2tTLFVBQVU7T0FBQ2xTLENBQUMsR0FBQ0EsQ0FBQyxDQUFDa1EsUUFBUSxDQUFBO0tBQUMsT0FBTyxLQUFLLENBQUMsS0FBR2xRLENBQUMsSUFBRUEsQ0FBQyxHQUFDdVIsQ0FBQyxHQUFDLElBQUdwVixPQUFPLENBQUM0VixhQUFhLEVBQUVSLENBQUMsRUFBQyxLQUFLLENBQUMsS0FBR2hVLENBQUMsR0FBQyxDQUFDLEdBQUNBLENBQUMsQ0FBQyxDQUFBO0FBQUEsSUFBQyxDQUFDO0dBQUM0VSwyQkFBMkIsSUFBRWhXLE9BQXVCNlYsQ0FBQUEsY0FBQUEsR0FBQUEsY0FBYyxFQUFDLFVBQVNoUyxDQUFDLEVBQUN1UixDQUFDLEVBQUM7QUFBQyxLQUFBLE9BQU92UixDQUFDLEdBQUMsQ0FBQyxHQUFDdVIsQ0FBQyxHQUFDLENBQUMsR0FBQ0EsQ0FBQyxJQUFFdlIsQ0FBQyxHQUFDLENBQUMsR0FBQ0EsQ0FBQyxDQUFBO0FBQUEsSUFBQyxDQUFDO0dBQUNvUywyQkFBMkIsSUFBRWpXLE9BQW9DZ1csQ0FBQUEsMkJBQUFBLEdBQUFBLDJCQUEyQixFQUFDLFVBQVNuUyxDQUFDLEVBQUN1UixDQUFDLEVBQUM7S0FBQyxPQUFPdlIsQ0FBQyxHQUFDLENBQUMsSUFBRXVSLENBQUMsSUFBRXZSLENBQUMsQ0FBQTtBQUFBLElBQUMsQ0FBQztHQUFDcVMsMEJBQTBCLElBQUVsVyxPQUFvQ2lXLENBQUFBLDJCQUFBQSxHQUFBQSwyQkFBMkIsRUFBQyxVQUFTcFMsQ0FBQyxFQUFDdVIsQ0FBQyxFQUFDO0tBQUMsT0FBT3ZSLENBQUMsR0FBQyxDQUFDLElBQUV1UixDQUFDLElBQUV2UixDQUFDLENBQUE7QUFBQSxJQUFDLENBQUM7R0FBQ3NTLGdCQUFnQixJQUFFblcsT0FBbUNrVyxDQUFBQSwwQkFBQUEsR0FBQUEsMEJBQTBCLEVBQUMsVUFBU3JTLENBQUMsRUFBQ3VSLENBQUMsRUFBQztBQUFDLEtBQUEsSUFBSWhVLENBQUMsR0FBQ3lDLENBQUMsQ0FBQ3VTLFdBQVc7T0FBQ3ZTLENBQUMsR0FBQ0EsQ0FBQyxDQUFDd1MsaUJBQWlCO09BQUN4UyxDQUFDLEdBQUMsS0FBSyxDQUFDLEtBQUdBLENBQUMsR0FBQyxFQUFFLEdBQUNBLENBQUM7T0FBQ3NSLENBQUMsR0FBQ0MsQ0FBQyxDQUFDckIsUUFBUTtPQUFDcUIsQ0FBQyxHQUFDQSxDQUFDLENBQUNYLGlCQUFpQixDQUFBO0tBQUMsT0FBT1UsQ0FBQyxHQUFDLENBQUN0UixDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUd6QyxDQUFDLEdBQUMsQ0FBQyxHQUFDQSxDQUFDLENBQUMsSUFBRSxFQUFFLEVBQUUySixRQUFRLElBQUVvSyxDQUFDLEdBQUMsQ0FBQ3RSLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBRSxFQUFFLEVBQUU0UixLQUFLLEVBQUN0VCxJQUFJLENBQUNtVSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUdsQixDQUFDLEdBQUMsQ0FBQyxHQUFDQSxDQUFDLEVBQUMsS0FBSyxDQUFDLEtBQUdELENBQUMsR0FBQyxDQUFDLEdBQUNBLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFBQSxJQUFDLENBQUM7R0FBQ29CLGdCQUFnQixJQUFFdlcsT0FBeUJtVyxDQUFBQSxnQkFBQUEsR0FBQUEsZ0JBQWdCLEVBQUMsVUFBU3RTLENBQUMsRUFBQ3VSLENBQUMsRUFBQztBQUFDLEtBQUEsSUFBSWhVLENBQUMsR0FBQ2dVLENBQUMsQ0FBQ3JCLFFBQVE7T0FBQ3FCLENBQUMsR0FBQ0EsQ0FBQyxDQUFDWCxpQkFBaUI7T0FBQ1csQ0FBQyxHQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLEdBQUMsQ0FBQyxHQUFDQSxDQUFDO09BQUNELENBQUMsR0FBQ3RSLENBQUMsQ0FBQ2tTLFVBQVU7T0FBQ1MsQ0FBQyxHQUFDM1MsQ0FBQyxDQUFDdVMsV0FBVztPQUFDZixDQUFDLEdBQUN4UixDQUFDLENBQUM0UyxZQUFZO09BQUNwQixDQUFDLEdBQUMsS0FBSyxDQUFDLEtBQUdBLENBQUMsR0FBQyxDQUFDLEdBQUNBLENBQUM7T0FBQ3hSLENBQUMsR0FBQ0EsQ0FBQyxDQUFDd1MsaUJBQWlCO09BQUN4UyxDQUFDLEdBQUMsS0FBSyxDQUFDLEtBQUdBLENBQUMsR0FBQyxFQUFFLEdBQUNBLENBQUMsQ0FBQTtLQUFDLE9BQU96QyxDQUFDLEdBQUMsQ0FBQ3lDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFHc1IsQ0FBQyxHQUFDLENBQUMsR0FBQ0EsQ0FBQyxJQUFFLElBQUduVixPQUFPLENBQUMyVixhQUFhLEVBQUVOLENBQUMsRUFBQyxLQUFLLENBQUMsS0FBR21CLENBQUMsR0FBQyxDQUFDLEdBQUNBLENBQUMsQ0FBQyxDQUFDLElBQUUsRUFBRSxFQUFFekwsUUFBUSxJQUFFLENBQUMsR0FBQyxJQUFHL0ssT0FBTyxDQUFDMFcsYUFBYSxFQUFFLENBQUNyQixDQUFDLEVBQUN4UixDQUFDLENBQUMsQ0FBQ2tILFFBQVEsR0FBQ3FLLENBQUMsQ0FBQTtBQUFBLElBQUMsQ0FBQztHQUFDdUIsOEJBQThCLElBQUUzVyxPQUFBQSxDQUFBQSxnQkFBQUEsR0FBeUJ1VyxnQkFBZ0IsRUFBQyxVQUFTMVMsQ0FBQyxFQUFDdVIsQ0FBQyxFQUFDaFUsQ0FBQyxFQUFDO0FBQUMsS0FBQSxPQUFNLENBQUNnVSxDQUFDLElBQUV2UixDQUFDLElBQUUxQixJQUFJLENBQUNDLEdBQUcsQ0FBQ3lCLENBQUMsQ0FBQyxJQUFFekMsQ0FBQyxDQUFBO0FBQUEsSUFBQyxDQUFDO0dBQUN3VixrQkFBa0IsSUFBRTVXLE9BQUFBLENBQUFBLDhCQUFBQSxHQUF1QzJXLDhCQUE4QixFQUFDLFVBQVM5UyxDQUFDLEVBQUM7QUFBQyxLQUFBLE9BQU0sQ0FBQ0EsQ0FBQyxHQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLEdBQUMsQ0FBQyxHQUFDQSxDQUFDLElBQUUsQ0FBQyxDQUFBO0FBQUEsSUFBQyxDQUFDO0dBQUM2UyxhQUFhLElBQUUxVyxPQUEyQjRXLENBQUFBLGtCQUFBQSxHQUFBQSxrQkFBa0IsRUFBQyxVQUFTL1MsQ0FBQyxFQUFDdVIsQ0FBQyxFQUFDO0FBQUMsS0FBQSxPQUFNLENBQUNBLENBQUMsR0FBQyxLQUFLLENBQUMsS0FBR0EsQ0FBQyxHQUFDLEVBQUUsR0FBQ0EsQ0FBQyxFQUFFcFEsS0FBSyxDQUFDbkIsQ0FBQyxHQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLEdBQUMsQ0FBQyxHQUFDQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBRTtPQUFDa0gsUUFBUSxFQUFDLENBQUM7T0FBQzBLLEtBQUssRUFBQyxDQUFBO01BQUUsQ0FBQTtBQUFBLElBQUMsQ0FBQztHQUFDb0Isa0JBQWtCLElBQUU3VyxPQUFzQjBXLENBQUFBLGFBQUFBLEdBQUFBLGFBQWEsRUFBQyxVQUFTN1MsQ0FBQyxFQUFDdVIsQ0FBQyxFQUFDO0FBQUMsS0FBQSxPQUFPLEtBQUssQ0FBQyxLQUFHdlIsQ0FBQyxLQUFHQSxDQUFDLEdBQUMsQ0FBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLEtBQUd1UixDQUFDLEtBQUdBLENBQUMsR0FBQyxFQUFFLENBQUMsRUFBQyxJQUFHcFYsT0FBTyxDQUFDMFcsYUFBYSxFQUFFN1MsQ0FBQyxFQUFDdVIsQ0FBQyxDQUFDLENBQUNySyxRQUFRLENBQUE7QUFBQSxJQUFDLENBQUM7R0FBQytMLDBCQUEwQixJQUFFOVcsT0FBMkI2VyxDQUFBQSxrQkFBQUEsR0FBQUEsa0JBQWtCLEVBQUMsVUFBU2hULENBQUMsRUFBQ3VSLENBQUMsRUFBQztLQUFDLE9BQU8sS0FBSyxDQUFDLEtBQUdBLENBQUMsS0FBR0EsQ0FBQyxHQUFDLENBQUMsQ0FBQyxFQUFDLENBQUN2UixDQUFDLEdBQUMsS0FBSyxDQUFDLEtBQUdBLENBQUMsR0FBQyxFQUFFLEdBQUNBLENBQUMsRUFBRWtULFNBQVMsQ0FBQyxVQUFTbFQsQ0FBQyxFQUFDO09BQUMsT0FBT0EsQ0FBQyxDQUFDa0gsUUFBUSxJQUFFNUksSUFBSSxDQUFDQyxHQUFHLENBQUNnVCxDQUFDLENBQUMsQ0FBQTtBQUFBLE1BQUMsQ0FBQyxDQUFBO0FBQUEsSUFBQyxDQUFDO0dBQUM0Qiw0QkFBNEIsSUFBRWhYLE9BQUFBLENBQUFBLDBCQUFBQSxHQUFtQzhXLDBCQUEwQixFQUFDLFVBQVNqVCxDQUFDLEVBQUN1UixDQUFDLEVBQUNoVSxDQUFDLEVBQUM7S0FBQyxLQUFLLENBQUMsS0FBR3lDLENBQUMsS0FBR0EsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxFQUFDLEtBQUssQ0FBQyxLQUFHdVIsQ0FBQyxLQUFHQSxDQUFDLEdBQUMsQ0FBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLEtBQUdoVSxDQUFDLEtBQUdBLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQTtLQUFDeUMsQ0FBQyxHQUFDLElBQUc3RCxPQUFPLENBQUM4VywwQkFBMEIsRUFBRWpULENBQUMsRUFBQ3VSLENBQUMsQ0FBQyxDQUFBO0FBQUMsS0FBQSxPQUFNLElBQUdwVixPQUFPLENBQUM0VyxrQkFBa0IsRUFBRXhWLENBQUMsQ0FBQyxHQUFDeUMsQ0FBQyxHQUFDQSxDQUFDLEdBQUMsQ0FBQyxDQUFBO0FBQUEsSUFBQyxDQUFDO0dBQUNvVCx3QkFBd0IsSUFBRWpYLE9BQUFBLENBQUFBLDRCQUFBQSxHQUFxQ2dYLDRCQUE0QixFQUFDLFVBQVNuVCxDQUFDLEVBQUN1UixDQUFDLEVBQUNoVSxDQUFDLEVBQUM7S0FBQyxLQUFLLENBQUMsS0FBR0EsQ0FBQyxLQUFHQSxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUE7QUFBQyxLQUFBLElBQUkrVCxDQUFDLEdBQUN0UixDQUFDLENBQUNrUSxRQUFRO09BQUN5QyxDQUFDLEdBQUMzUyxDQUFDLENBQUN1UCxTQUFTO09BQUNpQyxDQUFDLEdBQUN4UixDQUFDLENBQUNxVCxxQkFBcUI7T0FBQzVCLENBQUMsR0FBQ3pSLENBQUMsQ0FBQ3NULHVCQUF1QjtPQUFDdFQsQ0FBQyxHQUFDQSxDQUFDLENBQUN3UyxpQkFBaUI7QUFBQ2pWLE9BQUFBLENBQUMsR0FBQyxJQUFHcEIsT0FBTyxDQUFDZ1gsNEJBQTRCLEVBQUVuVCxDQUFDLEVBQUN6QyxDQUFDLEVBQUNnVSxDQUFDLENBQUM7QUFBQ0EsT0FBQUEsQ0FBQyxHQUFDLElBQUdwVixPQUFPLENBQUMwVyxhQUFhLEVBQUV0VixDQUFDLEVBQUN5QyxDQUFDLENBQUMsQ0FBQ2tILFFBQVEsQ0FBQTtLQUFDLElBQUcsQ0FBQ29LLENBQUMsRUFBQztBQUFDLE9BQUEsSUFBR3FCLENBQUMsSUFBRW5CLENBQUMsRUFBQyxPQUFPLENBQUMsQ0FBQTtPQUFDLElBQUdDLENBQUMsR0FBQ0YsQ0FBQyxFQUFDLE9BQU0sQ0FBQ0UsQ0FBQyxDQUFBO01BQUE7S0FBQyxPQUFNLENBQUNGLENBQUMsQ0FBQTtBQUFBLElBQUMsQ0FBQztHQUFDZ0MscUJBQXFCLElBQUVwWCxPQUFpQ2lYLENBQUFBLHdCQUFBQSxHQUFBQSx3QkFBd0IsRUFBQyxVQUFTcFQsQ0FBQyxFQUFDdVIsQ0FBQyxFQUFDO0FBQUMsS0FBQSxJQUFJaFUsQ0FBQyxHQUFDZ1UsQ0FBQyxDQUFDaUIsaUJBQWlCO09BQUNsQixDQUFDLEdBQUNDLENBQUMsQ0FBQ3FCLFlBQVk7T0FBQ0QsQ0FBQyxHQUFDcEIsQ0FBQyxDQUFDZ0IsV0FBVztPQUFDZixDQUFDLEdBQUNELENBQUMsQ0FBQ1csVUFBVTtPQUFDVCxDQUFDLEdBQUNGLENBQUMsQ0FBQ3JCLFFBQVE7T0FBQ3NELENBQUMsR0FBQ2pDLENBQUMsQ0FBQzhCLHFCQUFxQjtPQUFDSSxDQUFDLEdBQUNsQyxDQUFDLENBQUNyQyxXQUFXO09BQUNxQyxDQUFDLEdBQUNBLENBQUMsQ0FBQ21DLFdBQVcsQ0FBQTtBQUFDLEtBQUEsT0FBT2pDLENBQUMsSUFBRSxDQUFDK0IsQ0FBQyxJQUFFakMsQ0FBQyxLQUFHalQsSUFBSSxDQUFDQyxHQUFHLENBQUN5QixDQUFDLENBQUMsSUFBRXdULENBQUMsR0FBQyxJQUFHclgsT0FBTyxDQUFDOFcsMEJBQTBCLEVBQUUxVixDQUFDLEVBQUN5QyxDQUFDLENBQUMsRUFBQ3lSLENBQUMsR0FBQytCLENBQUMsSUFBRWpDLENBQUMsR0FBQyxJQUFHcFYsT0FBTyxDQUFDMlYsYUFBYSxFQUFFUixDQUFDLEVBQUNxQixDQUFDLENBQUMsQ0FBQyxHQUFDbkIsQ0FBQyxHQUFDRixDQUFDLEdBQUNxQixDQUFDLEdBQUNhLENBQUMsR0FBQ2pDLENBQUMsR0FBQ0MsQ0FBQyxJQUFFZ0MsQ0FBQyxHQUFDQSxDQUFDLElBQUVqQyxDQUFDLEdBQUNDLENBQUMsQ0FBQyxHQUFDZ0MsQ0FBQyxHQUFDakMsQ0FBQyxHQUFDaUMsQ0FBQyxJQUFFQyxDQUFDLENBQUE7QUFBQSxJQUFDLENBQUM7R0FBQ0Usd0JBQXdCLElBQUV4WCxPQUFBQSxDQUFBQSxxQkFBQUEsR0FBOEJvWCxxQkFBcUIsRUFBQyxVQUFTdlQsQ0FBQyxFQUFDO0FBQUMsS0FBQSxJQUFJdVIsQ0FBQyxHQUFDdlIsQ0FBQyxDQUFDa1EsUUFBUTtPQUFDM1MsQ0FBQyxHQUFDeUMsQ0FBQyxDQUFDa1AsV0FBVztPQUFDbFAsQ0FBQyxHQUFDQSxDQUFDLENBQUM0UyxZQUFZLENBQUE7S0FBQyxPQUFPckIsQ0FBQyxHQUFDaFUsQ0FBQyxHQUFDeUMsQ0FBQyxHQUFDekMsQ0FBQyxDQUFBO0FBQUEsSUFBQyxDQUFDO0dBQUNxVywyQkFBMkIsSUFBRXpYLE9BQWlDd1gsQ0FBQUEsd0JBQUFBLEdBQUFBLHdCQUF3QixFQUFDLFVBQVMzVCxDQUFDLEVBQUN1UixDQUFDLEVBQUM7QUFBQyxLQUFBLElBQUloVSxDQUFDLEdBQUNnVSxDQUFDLENBQUNyQyxXQUFXO09BQUNxQyxDQUFDLEdBQUNBLENBQUMsQ0FBQ3NDLFVBQVUsQ0FBQTtLQUFDLE9BQU83VCxDQUFDLEdBQUN6QyxDQUFDLEdBQUMsQ0FBQ0EsQ0FBQyxHQUFDeUMsQ0FBQyxJQUFFLENBQUN1UixDQUFDLElBQUUsQ0FBQyxHQUFDLENBQUN2UixDQUFDLEdBQUN6QyxDQUFDLElBQUVnVSxDQUFDLElBQUUsQ0FBQyxDQUFBO0FBQUEsSUFBQyxDQUFDO0dBQUN1QywyQkFBMkIsSUFBRTNYLE9BQUFBLENBQUFBLDJCQUFBQSxHQUFvQ3lYLDJCQUEyQixFQUFDLFVBQVM1VCxDQUFDLEVBQUN1UixDQUFDLEVBQUNoVSxDQUFDLEVBQUM7S0FBQyxPQUFPeUMsQ0FBQyxJQUFFekMsQ0FBQyxHQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLEdBQUMsQ0FBQyxHQUFDQSxDQUFDLENBQUMsSUFBRXlDLENBQUMsR0FBQyxFQUFFLEdBQUN1UixDQUFDLENBQUE7QUFBQSxJQUFDLENBQUMsQ0FBQTtBQUFDcFYsQ0FBQUEsT0FBQUEsQ0FBQUEsMkJBQUFBLEdBQW9DMlgsMkJBQTJCLENBQUE7Ozs7Ozs7Ozs7RUNBL3lJLElBQUl6QyxRQUFRLEdBQUMsWUFBVTtNQUFDLE9BQU0sQ0FBQ0EsUUFBUSxHQUFDcFYsTUFBTSxDQUFDMk8sTUFBTSxJQUFFLFVBQVMyRyxDQUFDLEVBQUM7UUFBQyxLQUFJLElBQUl2UixDQUFDLEVBQUN3UixDQUFDLEdBQUMsQ0FBQyxFQUFDbUIsQ0FBQyxHQUFDL1UsU0FBUyxDQUFDUixNQUFNLEVBQUNvVSxDQUFDLEdBQUNtQixDQUFDLEVBQUNuQixDQUFDLEVBQUUsRUFBQyxLQUFJLElBQUlGLENBQUMsSUFBSXRSLENBQUMsR0FBQ3BDLFNBQVMsQ0FBQzRULENBQUMsQ0FBQyxFQUFDdlYsTUFBTSxDQUFDOEksU0FBUyxDQUFDdUQsY0FBYyxDQUFDQyxJQUFJLENBQUN2SSxDQUFDLEVBQUNzUixDQUFDLENBQUMsS0FBR0MsQ0FBQyxDQUFDRCxDQUFDLENBQUMsR0FBQ3RSLENBQUMsQ0FBQ3NSLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFBQyxPQUFPQyxDQUFDLENBQUE7QUFBQSxPQUFDLEVBQUU1TCxLQUFLLENBQUMsSUFBSSxFQUFDL0gsU0FBUyxDQUFDLENBQUE7S0FBQztJQUFDbVcsUUFBUSxJQUFFOVgsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sRUFBQyxZQUFZLEVBQUM7TUFBQ0MsS0FBSyxFQUFDLENBQUMsQ0FBQTtLQUFFLENBQUMsRUFBQ0QsT0FBMkJBLENBQUFBLGtCQUFBQSxHQUFBQSxPQUFBQSxDQUFBQSxxQkFBQUEsR0FBOEJBLE9BQXNDQSxDQUFBQSw2QkFBQUEsR0FBQUEsT0FBQUEsQ0FBQUEsc0JBQUFBLEdBQStCQSxPQUFpQ0EsQ0FBQUEsd0JBQUFBLEdBQUFBLE9BQUFBLENBQUFBLG9CQUFBQSxHQUE2QkEsT0FBOEJBLENBQUFBLHFCQUFBQSxHQUFBQSxPQUFBQSxDQUFBQSxzQkFBQUEsR0FBK0JBLE9BQWdCQSxDQUFBQSxPQUFBQSxHQUFBQSxPQUFBQSxDQUFBQSx1QkFBQUEsR0FBZ0NBLE9BQTZCQSxDQUFBQSxvQkFBQUEsR0FBQUEsT0FBQUEsQ0FBQUEsZ0JBQUFBLEdBQXlCQSxPQUE4QkEsQ0FBQUEscUJBQUFBLEdBQUFBLE9BQUFBLENBQUFBLG9CQUFBQSxHQUE2QkEsT0FBcUJBLENBQUFBLFlBQUFBLEdBQUFBLE9BQUFBLENBQUFBLDhCQUFBQSxHQUF1Q0EsT0FBeUNBLENBQUFBLGdDQUFBQSxHQUFBQSxPQUFBQSxDQUFBQSxTQUFBQSxHQUFrQkEsT0FBcUJBLENBQUFBLFlBQUFBLEdBQUFBLE9BQUFBLENBQUFBLGNBQUFBLEdBQXVCQSxPQUFzQkEsQ0FBQUEsYUFBQUEsR0FBQUEsT0FBQUEsQ0FBQUEsU0FBQUEsR0FBa0IsS0FBSyxDQUFDLEVBQUNTLGFBQUFBLEVBQW1CLENBQUM7SUFBQ29YLFNBQVMsR0FBQ3BYLE9BQW9CO0lBQUNxWCxNQUFNLEdBQUNyWCxJQUFpQjtBQUFDc1gsSUFBQUEsU0FBUyxHQUFDLFVBQVMzQyxDQUFDLEVBQUM7QUFBQyxNQUFBLElBQUl2UixDQUFDLEdBQUN1UixDQUFDLENBQUMxQixRQUFRO1FBQUMwQixDQUFDLEdBQUNBLENBQUMsQ0FBQ25CLEtBQUssQ0FBQTtNQUFDLE9BQU9wUSxDQUFDLEdBQUNBLENBQUMsQ0FBQzVDLE1BQU0sR0FBQzRDLENBQUMsR0FBQyxDQUFDQSxDQUFDLENBQUMsR0FBQyxLQUFLLENBQUMsS0FBR3VSLENBQUMsR0FBQyxFQUFFLEdBQUNBLENBQUMsQ0FBQTtLQUFDO0lBQUM0QyxhQUFhLElBQUVoWSxPQUFBQSxDQUFBQSxTQUFBQSxHQUFrQitYLFNBQVMsRUFBQyxVQUFTM0MsQ0FBQyxFQUFDO01BQUMsT0FBTSxJQUFHcFYsT0FBTyxDQUFDK1gsU0FBUyxFQUFFM0MsQ0FBQyxDQUFDLENBQUNuVSxNQUFNLENBQUE7QUFBQSxLQUFDLENBQUM7SUFBQ2dYLGNBQWMsSUFBRWpZLE9BQUFBLENBQUFBLGFBQUFBLEdBQXNCZ1ksYUFBYSxFQUFDLFVBQVM1QyxDQUFDLEVBQUM7QUFBQyxNQUFBLElBQUl2UixDQUFDLEdBQUN1UixDQUFDLENBQUNyQixRQUFRO1FBQUNzQixDQUFDLEdBQUNELENBQUMsQ0FBQ2QsWUFBWTtRQUFDYyxDQUFDLEdBQUNBLENBQUMsQ0FBQ2YsV0FBVyxDQUFBO01BQUMsT0FBT3hRLENBQUMsS0FBR3VSLENBQUMsSUFBRUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQTtBQUFBLEtBQUMsQ0FBQztJQUFDNkMsWUFBWSxJQUFFbFksT0FBQUEsQ0FBQUEsY0FBQUEsR0FBdUJpWSxjQUFjLEVBQUMsVUFBUzdDLENBQUMsRUFBQztBQUFDLE1BQUEsSUFBSXZSLENBQUM7UUFBQ3dSLENBQUM7UUFBQ21CLENBQUM7UUFBQ3JCLENBQUM7UUFBQy9ULENBQUMsR0FBQyxJQUFHcEIsT0FBTyxDQUFDK1gsU0FBUyxFQUFFM0MsQ0FBQyxDQUFDLENBQUE7QUFBQyxNQUFBLE9BQU9BLENBQUMsQ0FBQ3JCLFFBQVEsSUFBRWxRLENBQUMsR0FBQyxJQUFHN0QsT0FBTyxDQUFDZ1ksYUFBYSxFQUFFNUMsQ0FBQyxDQUFDLEVBQUNELENBQUMsR0FBQyxJQUFHblYsT0FBTyxDQUFDaVksY0FBYyxFQUFFN0MsQ0FBQyxDQUFDLEVBQUNBLENBQUMsR0FBQyxJQUFHd0MsUUFBUSxDQUFDTyxlQUFlLEVBQUV0VSxDQUFDLEVBQUN1UixDQUFDLENBQUMsRUFBQ29CLENBQUMsR0FBQ3JVLElBQUksQ0FBQ21VLEdBQUcsQ0FBQ2xCLENBQUMsRUFBQ3ZSLENBQUMsQ0FBQyxHQUFDc1IsQ0FBQyxFQUFDRSxDQUFDLEdBQUNqVSxDQUFDLENBQUM0RCxLQUFLLENBQUMsQ0FBQyxFQUFDd1IsQ0FBQyxDQUFDLEVBQUNBLENBQUMsR0FBQ3BWLENBQUMsQ0FBQzRELEtBQUssQ0FBQyxDQUFDd1IsQ0FBQyxDQUFDLEVBQUNyQixDQUFDLElBQUVDLENBQUMsS0FBR3ZSLENBQUMsS0FBR3NSLENBQUMsR0FBQy9ULENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQ2dVLENBQUMsR0FBQ2hVLENBQUMsQ0FBQzRELEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDd1IsQ0FBQyxDQUFDNEIsT0FBTyxDQUFDaEQsQ0FBQyxDQUFDLEVBQUNDLENBQUMsQ0FBQ2hSLElBQUksQ0FBQzhRLENBQUMsQ0FBQyxDQUFDLEVBQUNxQixDQUFDLENBQUM2QixNQUFNLENBQUNqWCxDQUFDLEVBQUNpVSxDQUFDLENBQUMsSUFBRWpVLENBQUMsQ0FBQTtBQUFBLEtBQUMsQ0FBQztJQUFDa1gsU0FBUyxJQUFFdFksT0FBQUEsQ0FBQUEsWUFBQUEsR0FBcUJrWSxZQUFZLEVBQUMsVUFBUzlDLENBQUMsRUFBQztNQUFDLElBQUc7UUFBQyxPQUFPQSxDQUFDLFlBQVltRCxPQUFPLElBQUVuRCxDQUFDLFlBQVlvRCxZQUFZLENBQUE7T0FBQyxDQUFBLE9BQU1wRCxDQUFDLEVBQUM7UUFBQyxPQUFNLENBQUMsQ0FBQyxDQUFBO09BQUE7QUFBQyxLQUFDLENBQUM7SUFBQ3FELGdDQUFnQyxJQUFFelksT0FBQUEsQ0FBQUEsU0FBQUEsR0FBa0JzWSxTQUFTLEVBQUMsVUFBU2xELENBQUMsRUFBQ2hVLENBQUMsRUFBQ3lDLENBQUMsRUFBQztNQUFDLEtBQUssQ0FBQyxLQUFHekMsQ0FBQyxLQUFHQSxDQUFDLEdBQUMsQ0FBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLEtBQUd5QyxDQUFDLEtBQUdBLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO01BQUMsSUFBSXlSLENBQUMsR0FBQyxDQUFDO1FBQUNnQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO1FBQUNqQyxDQUFDLEdBQUMsRUFBRSxDQUFBO0FBQUMsTUFBQSxPQUFNLElBQUdyVixPQUFPLENBQUNzWSxTQUFTLEVBQUVsRCxDQUFDLENBQUMsS0FBR0MsQ0FBQyxHQUFDcUQsS0FBSyxDQUFDQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUV2RCxDQUFDLEdBQUMsS0FBSyxDQUFDLEdBQUNBLENBQUMsQ0FBQzFCLFFBQVEsS0FBRyxFQUFFLENBQUMsQ0FBQ2tGLE1BQU0sQ0FBQyxVQUFTeEQsQ0FBQyxFQUFDdlIsQ0FBQyxFQUFDd1IsQ0FBQyxFQUFDO1FBQUMsSUFBSW1CLENBQUMsR0FBQyxDQUFDO1VBQUNuQixDQUFDLEdBQUNBLENBQUMsR0FBQyxDQUFDO0FBQUNGLFVBQUFBLENBQUMsR0FBQ0MsQ0FBQyxDQUFDQyxDQUFDLENBQUM7QUFBQ3hSLFVBQUFBLENBQUMsR0FBQ2dWLG9CQUFvQixDQUFDLElBQUksSUFBRWhWLENBQUMsR0FBQyxLQUFLLENBQUMsR0FBQ0EsQ0FBQyxDQUFDckUsVUFBVSxDQUFDLENBQUNpVyxLQUFLO1VBQUM1UixDQUFDLEdBQUMsS0FBSyxDQUFDLEtBQUdBLENBQUMsR0FBQyxDQUFDLEdBQUNBLENBQUMsQ0FBQTtBQUFDLFFBQUEsT0FBT3lULENBQUMsR0FBQyxDQUFDaEMsQ0FBQyxJQUFFelIsQ0FBQyxLQUFHekMsQ0FBQyxFQUFDK1QsQ0FBQyxLQUFHcUIsQ0FBQyxHQUFDLENBQUMsSUFBRW5CLENBQUMsR0FBQ0YsQ0FBQyxDQUFDTSxLQUFLLEdBQUNOLENBQUMsQ0FBQ00sS0FBSyxHQUFDTixDQUFDLENBQUNwSyxRQUFRLENBQUMsRUFBQ3FLLENBQUMsQ0FBQy9RLElBQUksQ0FBQztVQUFDMEcsUUFBUSxFQUFDeUwsQ0FBQztVQUFDZixLQUFLLEVBQUM1UixDQUFBQTtTQUFFLENBQUMsRUFBQ3VSLENBQUMsQ0FBQTtBQUFBLE9BQUMsRUFBQyxFQUFFLENBQUMsRUFBQ3ZSLENBQUMsS0FBR3dSLENBQUMsR0FBQ2lDLENBQUMsR0FBQyxJQUFHTyxTQUFTLENBQUN0QyxnQkFBZ0IsRUFBRUYsQ0FBQyxDQUFDLElBQUVELENBQUMsR0FBQ0UsQ0FBQyxHQUFDbFUsQ0FBQyxFQUFDLElBQUd5VyxTQUFTLENBQUNuQyxpQkFBaUIsRUFBRUwsQ0FBQyxFQUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQztRQUFDMEQsTUFBTSxFQUFDekQsQ0FBQztRQUFDMEQsT0FBTyxFQUFDekQsQ0FBQztRQUFDMEQsT0FBTyxFQUFDMUIsQ0FBQUE7T0FBRSxDQUFBO0FBQUEsS0FBQyxDQUFDO0FBQUMyQixJQUFBQSw4QkFBOEIsSUFBRWpaLE9BQXlDeVksQ0FBQUEsZ0NBQUFBLEdBQUFBLGdDQUFnQyxFQUFDLFVBQVNyRCxDQUFDLEVBQUNELENBQUMsRUFBQ3RSLENBQUMsRUFBQ3dSLENBQUMsRUFBQztNQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLEtBQUdBLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO01BQUMsSUFBSWpVLENBQUMsR0FBQyxDQUFDO1FBQUNrVSxDQUFDLEdBQUMsQ0FBQyxDQUFDO1FBQUNrQixDQUFDLEdBQUMsRUFBRTtRQUFDYyxDQUFDLEdBQUMsSUFBR3RYLE9BQU8sQ0FBQ2taLFlBQVksRUFBRS9ELENBQUMsRUFBQ3RSLENBQUMsQ0FBQyxDQUFBO0FBQUMsTUFBQSxPQUFPMlMsQ0FBQyxHQUFDcEIsQ0FBQyxDQUFDd0QsTUFBTSxDQUFDLFVBQVN4RCxDQUFDLEVBQUN2UixDQUFDLEVBQUN3UixDQUFDLEVBQUM7UUFBQyxJQUFJbUIsQ0FBQyxHQUFDLENBQUM7VUFBQ25CLENBQUMsR0FBQ0QsQ0FBQyxDQUFDQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUE7UUFBQyxPQUFPQyxDQUFDLEdBQUMsQ0FBQ2xVLENBQUMsSUFBRWtXLENBQUMsS0FBR25DLENBQUMsRUFBQ0UsQ0FBQyxLQUFHbUIsQ0FBQyxHQUFDYyxDQUFDLEdBQUNqQyxDQUFDLENBQUN0SyxRQUFRLElBQUUsQ0FBQyxDQUFDLEVBQUNxSyxDQUFDLENBQUMvUSxJQUFJLENBQUM7VUFBQ29SLEtBQUssRUFBQzZCLENBQUM7VUFBQ3ZNLFFBQVEsRUFBQ3lMLENBQUFBO1NBQUUsQ0FBQyxFQUFDcEIsQ0FBQyxDQUFBO09BQUMsRUFBQyxFQUFFLENBQUMsRUFBQztBQUFDMEQsUUFBQUEsTUFBTSxFQUFDdEMsQ0FBQyxHQUFDbkIsQ0FBQyxHQUFDbUIsQ0FBQyxHQUFDbEIsQ0FBQyxHQUFDLElBQUd1QyxTQUFTLENBQUN0QyxnQkFBZ0IsRUFBRWlCLENBQUMsQ0FBQyxJQUFFM1MsQ0FBQyxHQUFDekMsQ0FBQyxHQUFDK1QsQ0FBQyxFQUFDLElBQUcwQyxTQUFTLENBQUNuQyxpQkFBaUIsRUFBRWMsQ0FBQyxFQUFDM1MsQ0FBQyxDQUFDLENBQUM7UUFBQ2tWLE9BQU8sRUFBQzNYLENBQUM7UUFBQzRYLE9BQU8sRUFBQzFELENBQUFBO09BQUUsQ0FBQTtBQUFBLEtBQUMsQ0FBQztJQUFDNEQsWUFBWSxJQUFFbFosT0FBdUNpWixDQUFBQSw4QkFBQUEsR0FBQUEsOEJBQThCLEVBQUMsVUFBUzdELENBQUMsRUFBQ3ZSLENBQUMsRUFBQztNQUFDLE9BQU8sQ0FBQyxHQUFDQSxDQUFDLEdBQUN1UixDQUFDLEdBQUN2UixDQUFDLEdBQUN1UixDQUFDLENBQUE7QUFBQSxLQUFDLENBQUMsQ0FBQTtFQUFDLFNBQVN5RCxvQkFBb0JBLENBQUN6RCxDQUFDLEVBQUM7QUFBQyxJQUFBLE9BQU9BLENBQUMsSUFBRUEsQ0FBQyxDQUFDK0QscUJBQXFCLEdBQUM7TUFBQzFELEtBQUssRUFBQyxDQUFDTCxDQUFDLEdBQUNBLENBQUMsQ0FBQytELHFCQUFxQixFQUFFLEVBQUUxRCxLQUFLO01BQUMyRCxNQUFNLEVBQUNoRSxDQUFDLENBQUNnRSxNQUFBQTtBQUFNLEtBQUMsR0FBQztNQUFDM0QsS0FBSyxFQUFDLENBQUM7TUFBQzJELE1BQU0sRUFBQyxDQUFBO0tBQUUsQ0FBQTtHQUFBO0FBQUNwWixFQUFBQSxPQUFBQSxDQUFBQSxZQUFBQSxHQUFxQmtaLFlBQVksRUFBQ2xaLE9BQTZCNlksQ0FBQUEsb0JBQUFBLEdBQUFBLG9CQUFvQixDQUFBO0VBQUMsSUFBSVEscUJBQXFCLEdBQUMsVUFBU2pFLENBQUMsRUFBQ3ZSLENBQUMsRUFBQ3dSLENBQUMsRUFBQztBQUFDLE1BQUEsSUFBSXhSLENBQUMsR0FBQyxJQUFHN0QsT0FBTyxDQUFDc1osZ0JBQWdCLEVBQUV6VixDQUFDLEVBQUN3UixDQUFDLENBQUM7UUFBQ0EsQ0FBQyxHQUFDLElBQUdyVixPQUFPLENBQUN1WixvQkFBb0IsRUFBRW5FLENBQUMsRUFBQ3ZSLENBQUMsQ0FBQyxDQUFBO01BQUMsSUFBRyxJQUFHN0QsT0FBTyxDQUFDc1ksU0FBUyxFQUFFakQsQ0FBQyxDQUFDLEVBQUMsT0FBT0QsQ0FBQyxHQUFDbE4sTUFBTSxDQUFDc1IsZ0JBQWdCLENBQUNuRSxDQUFDLENBQUMsRUFBQ3hSLENBQUMsR0FBQzRWLFVBQVUsQ0FBQ3JFLENBQUMsQ0FBQ3NFLFNBQVMsQ0FBQyxFQUFDdEUsQ0FBQyxHQUFDcUUsVUFBVSxDQUFDckUsQ0FBQyxDQUFDdUUsWUFBWSxDQUFDLEVBQUN4WCxJQUFJLENBQUN5WCxJQUFJLENBQUN2RSxDQUFDLENBQUN3RSxZQUFZLEdBQUNoVyxDQUFDLEdBQUN1UixDQUFDLENBQUMsQ0FBQTtLQUFDO0lBQUNrRSxnQkFBZ0IsSUFBRXRaLE9BQThCcVosQ0FBQUEscUJBQUFBLEdBQUFBLHFCQUFxQixFQUFDLFVBQVNqRSxDQUFDLEVBQUN2UixDQUFDLEVBQUM7QUFBQyxNQUFBLElBQUl3UixDQUFDLEdBQUN4UixDQUFDLENBQUNrUCxXQUFXO1FBQUNsUCxDQUFDLEdBQUNBLENBQUMsQ0FBQzRTLFlBQVksQ0FBQTtNQUFDLE9BQU9yQixDQUFDLENBQUNyQixRQUFRLEdBQUNzQixDQUFDLEdBQUN4UixDQUFDLEdBQUMsSUFBRzdELE9BQU8sQ0FBQ2lZLGNBQWMsRUFBRTdDLENBQUMsQ0FBQyxHQUFDQyxDQUFDLENBQUE7QUFBQSxLQUFDLENBQUM7SUFBQ2tFLG9CQUFvQixJQUFFdlosT0FBeUJzWixDQUFBQSxnQkFBQUEsR0FBQUEsZ0JBQWdCLEVBQUMsVUFBU2xFLENBQUMsRUFBQ3ZSLENBQUMsRUFBQztNQUFDdVIsQ0FBQyxHQUFDQSxDQUFDLElBQUVBLENBQUMsQ0FBQzFCLFFBQVEsSUFBRSxFQUFFLENBQUE7QUFBQyxNQUFBLE9BQU8wQixDQUFDLENBQUN2UixDQUFDLENBQUMsSUFBRXVSLENBQUMsQ0FBQ3ZSLENBQUMsQ0FBQyxDQUFDckUsVUFBVSxJQUFFLElBQUksQ0FBQTtBQUFBLEtBQUMsQ0FBQyxDQUFBO0FBQUMsRUFBQSxTQUFTc2EsdUJBQXVCQSxDQUFDMUUsQ0FBQyxFQUFDdlIsQ0FBQyxFQUFDd1IsQ0FBQyxFQUFDO0FBQUMsSUFBQSxPQUFNLENBQUN4UixDQUFDLEdBQUMsS0FBSyxDQUFDLEtBQUdBLENBQUMsR0FBQyxFQUFFLEdBQUNBLENBQUMsRUFBRTRSLEtBQUssS0FBRyxDQUFDSixDQUFDLEdBQUMsS0FBSyxDQUFDLEtBQUdBLENBQUMsR0FBQyxFQUFFLEdBQUNBLENBQUMsRUFBRUksS0FBSyxDQUFBO0dBQUE7QUFBQyxFQUFBLFNBQVNzRSxPQUFPQSxDQUFDM0UsQ0FBQyxFQUFDdlIsQ0FBQyxFQUFDO0FBQUMsSUFBQSxJQUFJQSxDQUFDLEdBQUNBLENBQUMsSUFBRSxFQUFFO01BQUN3UixDQUFDLEdBQUN4UixDQUFDLENBQUNrSCxRQUFRO01BQUNzSyxDQUFDLEdBQUMsS0FBSyxDQUFDLEtBQUdBLENBQUMsR0FBQyxDQUFDLEdBQUNBLENBQUM7TUFBQ21CLENBQUMsR0FBQzNTLENBQUMsQ0FBQ21QLGlCQUFpQjtNQUFDd0QsQ0FBQyxHQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLEdBQUMsQ0FBQyxHQUFDQSxDQUFDO01BQUMzUyxDQUFDLEdBQUNBLENBQUMsQ0FBQ29QLHVCQUF1QjtNQUFDcFAsQ0FBQyxHQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLEdBQUMsTUFBTSxHQUFDQSxDQUFDLENBQUE7SUFBQyxPQUFPdVIsQ0FBQyxJQUFFLElBQUdwVixPQUFPLENBQUNzWSxTQUFTLEVBQUVsRCxDQUFDLENBQUMsS0FBR0EsQ0FBQyxDQUFDL1YsS0FBSyxDQUFDMmEsVUFBVSxHQUFDLFlBQVksQ0FBQzNCLE1BQU0sQ0FBQzdCLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQzZCLE1BQU0sQ0FBQ3hVLENBQUMsRUFBQyxNQUFNLENBQUMsRUFBQ3VSLENBQUMsQ0FBQy9WLEtBQUssQ0FBQzRhLFNBQVMsR0FBQyxjQUFjLENBQUM1QixNQUFNLENBQUNoRCxDQUFDLEVBQUMsV0FBVyxDQUFDLENBQUMsRUFBQ0QsQ0FBQyxDQUFBO0dBQUE7QUFBQ3BWLEVBQUFBLE9BQUFBLENBQUFBLG9CQUFBQSxHQUE2QnVaLG9CQUFvQixFQUFDdlosT0FBQUEsQ0FBQUEsdUJBQUFBLEdBQWdDOFosdUJBQXVCLEVBQUM5WixPQUFBQSxDQUFBQSxPQUFBQSxHQUFnQitaLE9BQU8sQ0FBQTtFQUFDLElBQUlHLHNCQUFzQixHQUFDLFVBQVM5RSxDQUFDLEVBQUN2UixDQUFDLEVBQUN3UixDQUFDLEVBQUM7QUFBQyxNQUFBLElBQUltQixDQUFDLEdBQUNwQixDQUFDLElBQUUsRUFBRTtRQUFDRCxDQUFDLEdBQUNxQixDQUFDLENBQUNuQyxXQUFXO1FBQUNqVCxDQUFDLEdBQUNvVixDQUFDLENBQUNsQyxZQUFZO1FBQUNnQixDQUFDLEdBQUNrQixDQUFDLENBQUNyRCxVQUFVO1FBQUNxRCxDQUFDLEdBQUNBLENBQUMsQ0FBQ3hELGlCQUFpQjtRQUFDc0MsQ0FBQyxHQUFDQSxDQUFDLEdBQUMsSUFBR3RWLE9BQU8sQ0FBQ3FaLHFCQUFxQixFQUFFaEUsQ0FBQyxFQUFDRCxDQUFDLEVBQUN2UixDQUFDLENBQUMsR0FBQyxLQUFLLENBQUMsQ0FBQTtNQUFDLE9BQU07UUFBQ3VWLE1BQU0sRUFBQzlELENBQUM7QUFBQzBFLFFBQUFBLFVBQVUsRUFBQzFFLENBQUMsR0FBQyxTQUFTLENBQUMrQyxNQUFNLENBQUM3QixDQUFDLEVBQUMsSUFBSSxDQUFDLEdBQUMsS0FBSyxDQUFDO1FBQUNuQyxXQUFXLEVBQUMsRUFBRSxDQUFDZ0UsTUFBTSxDQUFDbEQsQ0FBQyxFQUFDLElBQUksQ0FBQztRQUFDYixZQUFZLEVBQUMsRUFBRSxDQUFDK0QsTUFBTSxDQUFDalgsQ0FBQyxFQUFDLElBQUksQ0FBQTtPQUFFLENBQUE7S0FBQztJQUFDK1kscUJBQXFCLElBQUVuYSxPQUFBQSxDQUFBQSxzQkFBQUEsR0FBK0JrYSxzQkFBc0IsRUFBQyxVQUFTOUUsQ0FBQyxFQUFDO0FBQUMsTUFBQSxJQUFJQSxDQUFDLEdBQUNBLENBQUMsSUFBRSxFQUFFO1FBQUN2UixDQUFDLEdBQUN1UixDQUFDLENBQUNwQyxpQkFBaUI7UUFBQ29DLENBQUMsR0FBQ0EsQ0FBQyxDQUFDbkMsdUJBQXVCO1FBQUNtQyxDQUFDLEdBQUMsS0FBSyxDQUFDLEtBQUdBLENBQUMsR0FBQyxNQUFNLEdBQUNBLENBQUMsQ0FBQTtNQUFDLE9BQU0sWUFBWSxDQUFDaUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFHeFUsQ0FBQyxHQUFDLENBQUMsR0FBQ0EsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDd1UsTUFBTSxDQUFDakQsQ0FBQyxFQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQUEsS0FBQyxDQUFDO0lBQUNnRixvQkFBb0IsSUFBRXBhLE9BQThCbWEsQ0FBQUEscUJBQUFBLEdBQUFBLHFCQUFxQixFQUFDLFVBQVMvRSxDQUFDLEVBQUN2UixDQUFDLEVBQUM7TUFBQ3VSLENBQUMsR0FBQyxDQUFDQSxDQUFDLElBQUUsRUFBRSxFQUFFbUMsV0FBVyxFQUFDbkMsQ0FBQyxHQUFDLGNBQWMsQ0FBQ2lELE1BQU0sQ0FBQyxFQUFFLEtBQUssQ0FBQyxLQUFHakQsQ0FBQyxHQUFDLENBQUMsR0FBQ0EsQ0FBQyxDQUFDLEVBQUMsV0FBVyxDQUFDLENBQUE7TUFBQyxPQUFPRixRQUFRLENBQUNBLFFBQVEsQ0FBQyxFQUFFLEVBQUNyUixDQUFDLENBQUMsRUFBQztRQUFDb1csU0FBUyxFQUFDN0UsQ0FBQUE7QUFBQyxPQUFDLENBQUMsQ0FBQTtBQUFBLEtBQUMsQ0FBQztJQUFDaUYsd0JBQXdCLElBQUVyYSxPQUE2Qm9hLENBQUFBLG9CQUFBQSxHQUFBQSxvQkFBb0IsRUFBQyxVQUFTaEYsQ0FBQyxFQUFDdlIsQ0FBQyxFQUFDO0FBQUMsTUFBQSxJQUFJd1IsQ0FBQyxHQUFDeFIsQ0FBQyxDQUFDd1MsaUJBQWlCO1FBQUNHLENBQUMsR0FBQzNTLENBQUMsQ0FBQ3lXLHFCQUFxQjtRQUFDbkYsQ0FBQyxHQUFDdFIsQ0FBQyxDQUFDMFcsd0JBQXdCO1FBQUNuWixDQUFDLEdBQUN5QyxDQUFDLENBQUMyVywwQkFBMEI7UUFBQzNXLENBQUMsR0FBQ0EsQ0FBQyxDQUFDbVAsaUJBQWlCO1FBQUNxQyxDQUFDLEdBQUMsQ0FBQ0EsQ0FBQyxDQUFDRCxDQUFDLENBQUMsSUFBRSxFQUFFLEVBQUVLLEtBQUssQ0FBQTtBQUFDLE1BQUEsT0FBT3JVLENBQUMsSUFBRW9WLENBQUMsS0FBR3BCLENBQUMsR0FBQztRQUFDNkUsU0FBUyxFQUFDLGFBQWEsQ0FBQzVCLE1BQU0sQ0FBQ2xELENBQUMsRUFBQyxLQUFLLENBQUM7UUFBQ25DLGlCQUFpQixFQUFDLEVBQUUsQ0FBQ3FGLE1BQU0sQ0FBQ3hVLENBQUMsRUFBQyxJQUFJLENBQUM7UUFBQzRSLEtBQUssRUFBQyxFQUFFLENBQUM0QyxNQUFNLENBQUNoRCxDQUFDLEVBQUMsSUFBSSxDQUFBO0FBQUMsT0FBQyxHQUFDO1FBQUNJLEtBQUssRUFBQ0osQ0FBQUE7T0FBRSxDQUFBO0FBQUEsS0FBQyxDQUFDO0lBQUNvRixzQkFBc0IsSUFBRXphLE9BQWlDcWEsQ0FBQUEsd0JBQUFBLEdBQUFBLHdCQUF3QixFQUFDLFVBQVNqRixDQUFDLEVBQUN2UixDQUFDLEVBQUM7TUFBQyxJQUFJd1IsQ0FBQyxHQUFDRCxDQUFDO1FBQUNvQixDQUFDLEdBQUMzUyxDQUFDLENBQUNrUSxRQUFRO1FBQUNvQixDQUFDLEdBQUN0UixDQUFDLENBQUN1UyxXQUFXO1FBQUNoVixDQUFDLEdBQUN5QyxDQUFDLENBQUM0UyxZQUFZO1FBQUM1UyxDQUFDLEdBQUNBLENBQUMsQ0FBQ3dTLGlCQUFpQixDQUFBO01BQUMsT0FBTSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUd4UyxDQUFDLEdBQUMsRUFBRSxHQUFDQSxDQUFDLEVBQUV3UixDQUFDLEdBQUNtQixDQUFDLEdBQUNwQixDQUFDLEdBQUMsSUFBRzBDLE1BQU0sQ0FBQ25DLGFBQWEsRUFBRSxLQUFLLENBQUMsS0FBR3ZVLENBQUMsR0FBQyxDQUFDLEdBQUNBLENBQUMsRUFBQyxLQUFLLENBQUMsS0FBRytULENBQUMsR0FBQyxDQUFDLEdBQUNBLENBQUMsQ0FBQyxHQUFDRSxDQUFDLENBQUMsSUFBRSxFQUFFLEVBQUV0SyxRQUFRLElBQUUsQ0FBQyxDQUFBO0FBQUEsS0FBQyxDQUFDO0lBQUMyUCw2QkFBNkIsSUFBRTFhLE9BQStCeWEsQ0FBQUEsc0JBQUFBLEdBQUFBLHNCQUFzQixFQUFDLFVBQVNyRixDQUFDLEVBQUN2UixDQUFDLEVBQUM7TUFBQyxPQUFNLEVBQUVBLENBQUMsR0FBQzFCLElBQUksQ0FBQ3dZLEtBQUssQ0FBQ3ZGLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFBQSxLQUFDLENBQUMsQ0FBQTtFQUFDLFNBQVN3RixxQkFBcUJBLENBQUN4RixDQUFDLEVBQUM7QUFBQ0EsSUFBQUEsQ0FBQyxHQUFDeUYsa0JBQWtCLENBQUN6RixDQUFDLENBQUMsRUFBQ0EsQ0FBQyxHQUFDQSxDQUFDLElBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBRSxFQUFFLENBQUE7SUFBQyxPQUFPekYsTUFBTSxDQUFDeUYsQ0FBQyxDQUFDLENBQUE7R0FBQTtFQUFDLFNBQVN5RixrQkFBa0JBLENBQUN6RixDQUFDLEVBQUM7SUFBQyxPQUFPQSxDQUFDLElBQUUsSUFBR3BWLE9BQU8sQ0FBQ3NZLFNBQVMsRUFBRWxELENBQUMsQ0FBQyxJQUFFbE4sTUFBTSxDQUFDc1IsZ0JBQWdCLENBQUNwRSxDQUFDLENBQUMsQ0FBQzZFLFNBQVMsQ0FBQ2EsS0FBSyxDQUFDLGNBQWMsQ0FBQyxJQUFFLEVBQUUsQ0FBQTtHQUFBO0FBQUM5YSxFQUFBQSxPQUFBQSxDQUFBQSw2QkFBQUEsR0FBc0MwYSw2QkFBNkIsRUFBQzFhLE9BQUFBLENBQUFBLHFCQUFBQSxHQUE4QjRhLHFCQUFxQixFQUFDNWEsNkJBQTJCNmEsa0JBQWtCLENBQUE7Ozs7Ozs7Ozs7OztBQ0EzaE0vYSxFQUFBQSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFDLFlBQVksRUFBQztJQUFDQyxLQUFLLEVBQUMsQ0FBQyxDQUFBO0dBQUUsQ0FBQyxFQUFDRCxPQUE4QkEsQ0FBQUEscUJBQUFBLEdBQUFBLE9BQUFBLENBQUFBLGVBQUFBLEdBQXdCQSxtQ0FBaUNBLE9BQXlCQSxDQUFBQSxnQkFBQUEsR0FBQUEsT0FBQUEsQ0FBQUEsU0FBQUEsR0FBa0IsS0FBSyxDQUFDLENBQUE7RUFBQyxJQUFJK2EsVUFBVSxHQUFDdGEsZUFBcUIsRUFBQTtJQUFDcVgsTUFBTSxHQUFDclgsSUFBaUI7SUFBQ3VhLFNBQVMsR0FBQyxZQUFVO01BQUMsSUFBSTVGLENBQUMsQ0FBQTtNQUFDLElBQUc7QUFBQyxRQUFBLE9BQU8zTixPQUFPLENBQUMsSUFBSSxLQUFHMk4sQ0FBQyxHQUFDLElBQUksS0FBR2xOLE1BQU0sSUFBRSxLQUFLLENBQUMsS0FBR0EsTUFBTSxHQUFDLEtBQUssQ0FBQyxHQUFDQSxNQUFNLENBQUNoSixRQUFRLENBQUMsR0FBQyxLQUFLLENBQUMsR0FBQ2tXLENBQUMsQ0FBQzlWLGFBQWEsQ0FBQyxDQUFBO09BQUMsQ0FBQSxPQUFNOFYsQ0FBQyxFQUFDO1FBQUMsT0FBTSxDQUFDLENBQUMsQ0FBQTtPQUFBO0tBQUU7QUFBQzZGLElBQUFBLGdCQUFnQixJQUFFamIsT0FBa0JnYixDQUFBQSxTQUFBQSxHQUFBQSxTQUFTLEVBQUMsWUFBVTtNQUFDLEtBQUksSUFBSTVGLENBQUMsR0FBQyxFQUFFLEVBQUN2UixDQUFDLEdBQUMsQ0FBQyxFQUFDQSxDQUFDLEdBQUNwQyxTQUFTLENBQUNSLE1BQU0sRUFBQzRDLENBQUMsRUFBRSxFQUFDdVIsQ0FBQyxDQUFDdlIsQ0FBQyxDQUFDLEdBQUNwQyxTQUFTLENBQUNvQyxDQUFDLENBQUMsQ0FBQTtNQUFDLE9BQU91UixDQUFDLENBQUMvTCxNQUFNLENBQUM1QixPQUFPLENBQUMsQ0FBQ3lULElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUFBLEtBQUMsQ0FBQztJQUFDQyx3QkFBd0IsSUFBRW5iLE9BQUFBLENBQUFBLGdCQUFBQSxHQUF5QmliLGdCQUFnQixFQUFDLFVBQVM3RixDQUFDLEVBQUN2UixDQUFDLEVBQUMyUyxDQUFDLEVBQUM7QUFBQyxNQUFBLE9BQU8sS0FBSyxDQUFDLEtBQUczUyxDQUFDLEtBQUdBLENBQUMsR0FBQyxDQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsS0FBRzJTLENBQUMsS0FBR0EsQ0FBQyxHQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUVwQixDQUFDLEdBQUMsS0FBSyxDQUFDLEtBQUdBLENBQUMsSUFBRUEsQ0FBQyxDQUFDLElBQUVvQixDQUFDLElBQUUzUyxDQUFDLENBQUE7QUFBQSxLQUFDLENBQUM7SUFBQ3NVLGVBQWUsSUFBRW5ZLE9BQWlDbWIsQ0FBQUEsd0JBQUFBLEdBQUFBLHdCQUF3QixFQUFDLFVBQVMzRSxDQUFDLEVBQUNwQixDQUFDLEVBQUM7QUFBQyxNQUFBLElBQUloVSxDQUFDO1FBQUNrVyxDQUFDLEdBQUMsQ0FBQztRQUFDbkMsQ0FBQyxHQUFDQyxDQUFDLENBQUNiLFVBQVU7UUFBQzFRLENBQUMsR0FBQ3VSLENBQUMsQ0FBQ2hDLFNBQVM7UUFBQ2tDLENBQUMsR0FBQ0YsQ0FBQyxDQUFDckIsUUFBUTtRQUFDcUIsQ0FBQyxHQUFDQSxDQUFDLENBQUNwQixVQUFVLENBQUE7QUFBQyxNQUFBLE9BQU8sS0FBSyxDQUFDLEtBQUduUSxDQUFDLElBQUVBLENBQUMsR0FBQyxLQUFLLENBQUMsS0FBR3lSLENBQUMsSUFBRUEsQ0FBQyxHQUFDa0IsQ0FBQyxHQUFDYyxDQUFDLElBQUVuQyxDQUFDLElBQUUsQ0FBQ3RSLENBQUMsR0FBQy9ELE1BQU0sQ0FBQzhCLElBQUksQ0FBQ3VULENBQUMsQ0FBQyxFQUFFbFUsTUFBTSxLQUFHbVUsQ0FBQyxJQUFFLElBQUdwVixPQUFPLENBQUNnYixTQUFTLEdBQUcsQ0FBQyxLQUFHNVosQ0FBQyxHQUFDLEtBQUssQ0FBQyxLQUFHZ1UsQ0FBQyxHQUFDbE4sTUFBTSxDQUFDOEwsVUFBVSxHQUFDb0IsQ0FBQyxFQUFDdlIsQ0FBQyxDQUFDK0YsT0FBTyxDQUFDLFVBQVN3TCxDQUFDLEVBQUM7UUFBQyxJQUFJdlIsQ0FBQyxDQUFBO1FBQUM4TCxNQUFNLENBQUN5RixDQUFDLENBQUMsSUFBRWhVLENBQUMsS0FBR3lDLENBQUMsR0FBQyxDQUFDdVIsQ0FBQyxHQUFDRCxDQUFDLENBQUNDLENBQUMsQ0FBQyxFQUFFbkIsS0FBSyxFQUFDbUIsQ0FBQyxHQUFDQSxDQUFDLENBQUNnRyxRQUFRLEVBQUM5RCxDQUFDLEdBQUMsU0FBUyxNQUFJLEtBQUssQ0FBQyxLQUFHbEMsQ0FBQyxHQUFDLE1BQU0sR0FBQ0EsQ0FBQyxDQUFDLEdBQUN2UixDQUFDLEdBQUMxQixJQUFJLENBQUNtVSxHQUFHLENBQUN6UyxDQUFDLEVBQUMyUyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQUEsT0FBQyxDQUFDLENBQUMsRUFBQ2MsQ0FBQyxJQUFFLENBQUMsQ0FBQyxDQUFBO0FBQUEsS0FBQyxDQUFDO0lBQUMrRCxxQkFBcUIsSUFBRXJiLE9BQUFBLENBQUFBLGVBQUFBLEdBQXdCbVksZUFBZSxFQUFDLFVBQVMvQyxDQUFDLEVBQUN2UixDQUFDLEVBQUMyUyxDQUFDLEVBQUM7TUFBQyxLQUFLLENBQUMsS0FBR0EsQ0FBQyxLQUFHQSxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUFDLE1BQUEsSUFBSXBWLENBQUM7UUFBQ2tXLENBQUM7UUFBQ25DLENBQUMsR0FBQ0MsQ0FBQyxDQUFDcEMsaUJBQWlCO1FBQUNtQyxDQUFDLEdBQUMsS0FBSyxDQUFDLEtBQUdBLENBQUMsR0FBQyxDQUFDLEdBQUNBLENBQUM7UUFBQ0csQ0FBQyxHQUFDRixDQUFDLENBQUNyQixRQUFRO0FBQUN1QixRQUFBQSxDQUFDLEdBQUMsS0FBSyxDQUFDLEtBQUdBLENBQUMsSUFBRUEsQ0FBQztRQUFDRCxDQUFDLEdBQUNELENBQUMsQ0FBQy9CLFFBQVE7QUFBQ2dDLFFBQUFBLENBQUMsR0FBQyxLQUFLLENBQUMsS0FBR0EsQ0FBQyxJQUFFQSxDQUFDO1FBQUNpRyxDQUFDLEdBQUNsRyxDQUFDLENBQUNoQyxTQUFTO0FBQUNrSSxRQUFBQSxDQUFDLEdBQUMsS0FBSyxDQUFDLEtBQUdBLENBQUMsSUFBRUEsQ0FBQztRQUFDQyxDQUFDLEdBQUMsSUFBR1IsVUFBVSxDQUFDN0MsWUFBWSxFQUFFOUMsQ0FBQyxDQUFDO1FBQUNpQyxDQUFDLEdBQUMsSUFBRzBELFVBQVUsQ0FBQ1oscUJBQXFCLEdBQUc7UUFBQ3FCLENBQUMsR0FBQyxJQUFHVCxVQUFVLENBQUMvQyxhQUFhLEVBQUU1QyxDQUFDLENBQUM7UUFBQ3FHLENBQUMsR0FBQyxJQUFHVixVQUFVLENBQUM5QyxjQUFjLEVBQUU3QyxDQUFDLENBQUM7UUFBQ3NHLENBQUMsR0FBQyxJQUFHMWIsT0FBTyxDQUFDbVksZUFBZSxFQUFFcUQsQ0FBQyxFQUFDcEcsQ0FBQyxDQUFDO0FBQUN1RyxRQUFBQSxDQUFDLEdBQUMsSUFBRzdELE1BQU0sQ0FBQ2xDLGFBQWEsRUFBRVIsQ0FBQyxDQUFDckMsV0FBVyxFQUFDeUksQ0FBQyxDQUFDO1FBQUNHLENBQUMsR0FBQyxJQUFHN0QsTUFBTSxDQUFDakMsY0FBYyxFQUFFO1VBQUNDLFVBQVUsRUFBQzZGLENBQUM7VUFBQzVGLFVBQVUsRUFBQ3lGLENBQUM7VUFBQ3pILFFBQVEsRUFBQ3VCLENBQUFBO0FBQUMsU0FBQyxDQUFDO1FBQUNzRyxDQUFDLEdBQUMsSUFBR2IsVUFBVSxDQUFDbEMsb0JBQW9CLEVBQUVoVixDQUFDLENBQUMsQ0FBQzRSLEtBQUs7QUFBQ29HLFFBQUFBLENBQUMsSUFBRXZFLENBQUMsSUFBRXpULENBQUMsR0FBQyxDQUFDeVgsQ0FBQyxJQUFFbGEsQ0FBQyxHQUFDLENBQUN5QyxDQUFDLEdBQUMsSUFBR2tYLFVBQVUsQ0FBQ3RDLGdDQUFnQyxFQUFFNVUsQ0FBQyxFQUFDK1gsQ0FBQyxFQUFDdEcsQ0FBQyxDQUFDLEVBQUV3RCxNQUFNLEVBQUN4QixDQUFDLEdBQUN6VCxDQUFDLENBQUNrVixPQUFPLEVBQUNsVixDQUFDLEtBQUd6QyxDQUFDLEdBQUMsQ0FBQ3lDLENBQUMsR0FBQyxJQUFHa1gsVUFBVSxDQUFDOUIsOEJBQThCLEVBQUVzQyxDQUFDLEVBQUNLLENBQUMsRUFBQ0YsQ0FBQyxFQUFDcEcsQ0FBQyxDQUFDLEVBQUV3RCxNQUFNLEVBQUN4QixDQUFDLEdBQUN6VCxDQUFDLENBQUNrVixPQUFPLEVBQUNsVixDQUFDLENBQUMsRUFBRW1WLE9BQU8sRUFBQzFCLENBQUMsQ0FBQyxFQUFDLElBQUdRLE1BQU0sQ0FBQ3BCLGFBQWEsRUFBRSxDQUFDZ0YsQ0FBQyxFQUFDdGEsQ0FBQyxHQUFDQSxDQUFDLENBQUMsQ0FBQzJKLFFBQVEsQ0FBQztRQUFDK1EsQ0FBQyxHQUFDLElBQUdoRSxNQUFNLENBQUMzQixnQkFBZ0IsRUFBRTtVQUFDQyxXQUFXLEVBQUNxRixDQUFDO1VBQUNwRixpQkFBaUIsRUFBQ2pWLENBQUFBO1NBQUUsRUFBQ2dVLENBQUMsQ0FBQztRQUFDQSxDQUFDLEdBQUMsSUFBRzBDLE1BQU0sQ0FBQ3ZCLGdCQUFnQixFQUFFO1VBQUNSLFVBQVUsRUFBQ3lGLENBQUM7VUFBQ3BGLFdBQVcsRUFBQ3FGLENBQUM7VUFBQ2hGLFlBQVksRUFBQ2lGLENBQUM7VUFBQ3JGLGlCQUFpQixFQUFDalYsQ0FBQUE7U0FBRSxFQUFDZ1UsQ0FBQyxDQUFDO1FBQUMyRyxDQUFDLEdBQUMsSUFBR2pFLE1BQU0sQ0FBQ2pCLGtCQUFrQixFQUFFMkUsQ0FBQyxFQUFDcGEsQ0FBQyxDQUFDLENBQUE7TUFBQyxPQUFNO1FBQUMyUixXQUFXLEVBQUM0SSxDQUFDO1FBQUN2SSxTQUFTLEVBQUNrSSxDQUFDO1FBQUN0SSxpQkFBaUIsRUFBQ21DLENBQUM7UUFBQzZHLE1BQU0sRUFBQ1QsQ0FBQztRQUFDeEgsUUFBUSxFQUFDdUIsQ0FBQztRQUFDUyxVQUFVLEVBQUN5RixDQUFDO1FBQUMvRSxZQUFZLEVBQUNpRixDQUFDO1FBQUN0RixXQUFXLEVBQUNxRixDQUFDO1FBQUNsRSxXQUFXLEVBQUMsSUFBR3dELFVBQVUsQ0FBQ04sc0JBQXNCLEVBQUVrQixDQUFDLEVBQUM7VUFBQ2xGLFlBQVksRUFBQ2lGLENBQUM7VUFBQ3RGLFdBQVcsRUFBQ3FGLENBQUM7VUFBQ3BGLGlCQUFpQixFQUFDalYsQ0FBQztVQUFDZ1MsU0FBUyxFQUFDa0ksQ0FBQztVQUFDdkgsUUFBUSxFQUFDdUIsQ0FBQUE7QUFBQyxTQUFDLENBQUM7UUFBQ29DLFVBQVUsRUFBQ2tFLENBQUM7UUFBQ0ssaUJBQWlCLEVBQUMzRSxDQUFDO1FBQUM0RSxrQkFBa0IsRUFBQyxDQUFDO1FBQUNoRixxQkFBcUIsRUFBQ3JULENBQUM7QUFBQ3NZLFFBQUFBLGFBQWEsRUFBQzFVLE9BQU8sQ0FBQzROLENBQUMsQ0FBQztRQUFDK0csMEJBQTBCLEVBQUMsQ0FBQyxDQUFDO1FBQUMvRixpQkFBaUIsRUFBQ2pWLENBQUM7UUFBQzRZLFVBQVUsRUFBQzNDLENBQUM7UUFBQ2lELHFCQUFxQixFQUFDLElBQUk7UUFBQ0Msd0JBQXdCLEVBQUMsSUFBSTtRQUFDQywwQkFBMEIsRUFBQyxDQUFDLENBQUM7UUFBQzZCLGFBQWEsRUFBQ1AsQ0FBQztRQUFDUSxhQUFhLEVBQUNsSCxDQUFDO1FBQUMrQix1QkFBdUIsRUFBQzBFLENBQUM7UUFBQ1UsZUFBZSxFQUFDUixDQUFDO1FBQUNTLFNBQVMsRUFBQ2hHLENBQUMsSUFBRSxJQUFHeFcsT0FBTyxDQUFDZ2IsU0FBUyxHQUFBO09BQUksQ0FBQTtBQUFBLEtBQUMsQ0FBQyxDQUFBO0FBQUNoYixFQUFBQSxPQUFBQSxDQUFBQSxxQkFBQUEsR0FBOEJxYixxQkFBcUIsQ0FBQTs7Ozs7Ozs7O0FDQTF2RnZiLENBQUFBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLEVBQUMsWUFBWSxFQUFDO0dBQUNDLEtBQUssRUFBQyxDQUFDLENBQUE7RUFBRSxDQUFDLEVBQUNELE9BQXFCQSxDQUFBQSxZQUFBQSxHQUFBQSxPQUFBQSxDQUFBQSxZQUFBQSxHQUFxQkEsdUJBQXFCQSxPQUFrQyxDQUFBLHlCQUFBLEdBQUEsS0FBSyxDQUFDLENBQUE7Q0FBQyxJQUFJOFMsT0FBTyxHQUFDclMsS0FBbUI7R0FBQ21YLFFBQVEsR0FBQ25YLGFBQW1CLEVBQUE7R0FBQ3FYLE1BQU0sR0FBQ3JYLElBQWlCO0FBQUNnYyxHQUFBQSx5QkFBeUIsR0FBQyxVQUFTNVksQ0FBQyxFQUFDdVIsQ0FBQyxFQUFDO0tBQUMsS0FBSyxDQUFDLEtBQUd2UixDQUFDLEtBQUdBLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQTtBQUFDLEtBQUEsSUFBSXlSLENBQUMsR0FBQ0YsQ0FBQyxDQUFDa0YscUJBQXFCO09BQUNsWixDQUFDLEdBQUMsSUFBR3BCLE9BQU8sQ0FBQzBjLFlBQVksRUFBRTdZLENBQUMsRUFBQ3VSLENBQUMsQ0FBQyxHQUFDdEMsT0FBTyxDQUFDRCxTQUFTLENBQUNSLE1BQU0sR0FBQyxFQUFFO09BQUNtRSxDQUFDLEdBQUMsSUFBR3hXLE9BQU8sQ0FBQzJjLFlBQVksRUFBRTlZLENBQUMsRUFBQ3VSLENBQUMsQ0FBQyxHQUFDdEMsT0FBTyxDQUFDRCxTQUFTLENBQUNOLE1BQU0sR0FBQyxFQUFFO09BQUM2QyxDQUFDLEdBQUMsSUFBR3BWLE9BQU8sQ0FBQzRjLFlBQVksRUFBRS9ZLENBQUMsRUFBQ3VSLENBQUMsQ0FBQyxHQUFDdEMsT0FBTyxDQUFDRCxTQUFTLENBQUNELE1BQU0sR0FBQyxFQUFFO09BQUMvTyxDQUFDLEdBQUNBLENBQUMsS0FBR3lSLENBQUMsR0FBQ3hDLE9BQU8sQ0FBQ1YsVUFBVSxDQUFDbEIsUUFBUSxHQUFDLEVBQUUsQ0FBQTtLQUFDLE9BQU0sSUFBRzBHLFFBQVEsQ0FBQ3FELGdCQUFnQixFQUFFbkksT0FBTyxDQUFDVixVQUFVLENBQUNkLFVBQVUsRUFBQ2xRLENBQUMsRUFBQ29WLENBQUMsRUFBQ3BCLENBQUMsRUFBQ3ZSLENBQUMsQ0FBQyxDQUFBO0lBQUM7R0FBQzZZLFlBQVksSUFBRTFjLE9BQWtDeWMsQ0FBQUEseUJBQUFBLEdBQUFBLHlCQUF5QixFQUFDLFVBQVM1WSxDQUFDLEVBQUN1UixDQUFDLEVBQUM7S0FBQyxLQUFLLENBQUMsS0FBR3ZSLENBQUMsS0FBR0EsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFBO0FBQUMsS0FBQSxJQUFJeVIsQ0FBQyxHQUFDRixDQUFDLENBQUNyQyxXQUFXO09BQUMzUixDQUFDLEdBQUNnVSxDQUFDLENBQUNxQixZQUFZO09BQUNELENBQUMsR0FBQ3BCLENBQUMsQ0FBQ2dCLFdBQVc7T0FBQ2YsQ0FBQyxHQUFDRCxDQUFDLENBQUNyQixRQUFRO09BQUNxQixDQUFDLEdBQUNBLENBQUMsQ0FBQ2hDLFNBQVM7T0FBQytCLENBQUMsR0FBQyxJQUFHMkMsTUFBTSxDQUFDbkMsYUFBYSxFQUFFdlUsQ0FBQyxFQUFDb1YsQ0FBQyxDQUFDLENBQUE7QUFBQyxLQUFBLE9BQU9wQixDQUFDLElBQUVDLENBQUMsR0FBQ3hSLENBQUMsR0FBQ3NSLENBQUMsS0FBR0csQ0FBQyxHQUFDa0IsQ0FBQyxJQUFFcEIsQ0FBQyxHQUFDRSxDQUFDLEdBQUNILENBQUMsRUFBQ0UsQ0FBQyxHQUFDRCxDQUFDLElBQUV2UixDQUFDLElBQUVBLENBQUMsR0FBQ3VSLENBQUMsR0FBQ2hVLENBQUMsR0FBQ2tVLENBQUMsSUFBRXpSLENBQUMsSUFBRUEsQ0FBQyxHQUFDdVIsQ0FBQyxDQUFDLENBQUE7QUFBQSxJQUFDLENBQUM7R0FBQ3dILFlBQVksSUFBRTVjLE9BQXFCMGMsQ0FBQUEsWUFBQUEsR0FBQUEsWUFBWSxFQUFDLFVBQVM3WSxDQUFDLEVBQUN1UixDQUFDLEVBQUM7S0FBQyxLQUFLLENBQUMsS0FBR3ZSLENBQUMsS0FBR0EsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFBO0FBQUMsS0FBQSxJQUFJeVIsQ0FBQyxHQUFDRixDQUFDLENBQUNyQyxXQUFXO09BQUMzUixDQUFDLEdBQUNnVSxDQUFDLENBQUNxQixZQUFZO09BQUNELENBQUMsR0FBQ3BCLENBQUMsQ0FBQ2dCLFdBQVc7T0FBQ2YsQ0FBQyxHQUFDRCxDQUFDLENBQUNyQixRQUFRO09BQUNxQixDQUFDLEdBQUNBLENBQUMsQ0FBQ2hDLFNBQVM7T0FBQ2hTLENBQUMsR0FBQyxJQUFHMFcsTUFBTSxDQUFDbkMsYUFBYSxFQUFFdlUsQ0FBQyxFQUFDb1YsQ0FBQyxDQUFDLENBQUE7S0FBQyxPQUFPbkIsQ0FBQyxHQUFDRCxDQUFDLElBQUVDLENBQUMsR0FBQ3hSLENBQUMsR0FBQ3pDLENBQUMsS0FBR2tVLENBQUMsR0FBQ2tCLENBQUMsR0FBQzNTLENBQUMsS0FBR3lSLENBQUMsR0FBQ2xVLENBQUMsR0FBQ3lDLENBQUMsS0FBR3lSLENBQUMsQ0FBQTtBQUFBLElBQUMsQ0FBQztHQUFDcUgsWUFBWSxJQUFFM2MsT0FBcUI0YyxDQUFBQSxZQUFBQSxHQUFBQSxZQUFZLEVBQUMsVUFBUy9ZLENBQUMsRUFBQ3VSLENBQUMsRUFBQztLQUFDLEtBQUssQ0FBQyxLQUFHdlIsQ0FBQyxLQUFHQSxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUE7QUFBQyxLQUFBLElBQUl5UixDQUFDLEdBQUNGLENBQUMsQ0FBQ3FCLFlBQVk7T0FBQ3JWLENBQUMsR0FBQ2dVLENBQUMsQ0FBQ2dCLFdBQVc7T0FBQ0ksQ0FBQyxHQUFDcEIsQ0FBQyxDQUFDVyxVQUFVO09BQUNWLENBQUMsR0FBQ0QsQ0FBQyxDQUFDckIsUUFBUTtPQUFDcUIsQ0FBQyxHQUFDQSxDQUFDLENBQUNoQyxTQUFTLENBQUE7S0FBQyxPQUFNLENBQUMsQ0FBQ2lDLENBQUMsS0FBR0QsQ0FBQyxJQUFFQyxDQUFDLEdBQUN4UixDQUFDLEdBQUN5UixDQUFDLElBQUVrQixDQUFDLEdBQUMsQ0FBQyxHQUFDbEIsQ0FBQyxHQUFDelIsQ0FBQyxHQUFDQSxDQUFDLElBQUV1UixDQUFDLEdBQUMsSUFBRzBDLE1BQU0sQ0FBQ25DLGFBQWEsRUFBRUwsQ0FBQyxFQUFDbFUsQ0FBQyxDQUFDLENBQUMsSUFBRW9WLENBQUMsR0FBQyxDQUFDLEdBQUNwQixDQUFDLEdBQUN2UixDQUFDLENBQUMsQ0FBQTtBQUFBLElBQUMsQ0FBQyxDQUFBO0FBQUM3RCxDQUFBQSxPQUFBQSxDQUFBQSxZQUFBQSxHQUFxQjJjLFlBQVksQ0FBQTs7Ozs7OztBQ0E1M0MsQ0FBQSxTQUFTRSxRQUFRQSxDQUFDckcsQ0FBQyxFQUFDcFYsQ0FBQyxFQUFDO0dBQUMsS0FBSyxDQUFDLEtBQUdBLENBQUMsS0FBR0EsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFBO0dBQUMsU0FBU3FhLENBQUNBLEdBQUU7S0FBQ3BFLENBQUMsS0FBR3lGLFlBQVksQ0FBQ3pGLENBQUMsQ0FBQyxFQUFDQSxDQUFDLEdBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtJQUFBO0dBQUMsSUFBSUEsQ0FBQyxHQUFDLEtBQUssQ0FBQyxDQUFBO0dBQUMsT0FBTSxDQUFDLFlBQVU7QUFBQyxLQUFBLEtBQUksSUFBSXhULENBQUMsR0FBQyxJQUFJLEVBQUNzUixDQUFDLEdBQUMsRUFBRSxFQUFDQyxDQUFDLEdBQUMsQ0FBQyxFQUFDQSxDQUFDLEdBQUMzVCxTQUFTLENBQUNSLE1BQU0sRUFBQ21VLENBQUMsRUFBRSxFQUFDRCxDQUFDLENBQUNDLENBQUMsQ0FBQyxHQUFDM1QsU0FBUyxDQUFDMlQsQ0FBQyxDQUFDLENBQUE7S0FBQ3FHLENBQUMsRUFBRSxFQUFDcEUsQ0FBQyxHQUFDblAsTUFBTSxDQUFDNlUsVUFBVSxDQUFDLFlBQVU7T0FBQ3ZHLENBQUMsQ0FBQ2hOLEtBQUssQ0FBQzNGLENBQUMsRUFBQ3NSLENBQUMsQ0FBQyxFQUFDa0MsQ0FBQyxHQUFDLEtBQUssQ0FBQyxDQUFBO01BQUMsRUFBQ2pXLENBQUMsQ0FBQyxDQUFBO0lBQUMsRUFBQ3FhLENBQUMsQ0FBQyxDQUFBO0VBQUE7QUFBQzNiLENBQUFBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLEVBQUMsWUFBWSxFQUFDO0dBQUNDLEtBQUssRUFBQyxDQUFDLENBQUE7QUFBQyxFQUFDLENBQUMsRUFBQ0QsT0FBQUEsQ0FBQUEsUUFBQUEsR0FBaUIsS0FBSyxDQUFDLEVBQUNBLG1CQUFpQjZjLFFBQVEsQ0FBQTs7Ozs7OztBQ0E3VixDQUFBLFNBQVNHLEtBQUtBLEdBQUU7R0FBQyxLQUFJLElBQUluWixDQUFDLEdBQUMsRUFBRSxFQUFDc1IsQ0FBQyxHQUFDLENBQUMsRUFBQ0EsQ0FBQyxHQUFDMVQsU0FBUyxDQUFDUixNQUFNLEVBQUNrVSxDQUFDLEVBQUUsRUFBQ3RSLENBQUMsQ0FBQ3NSLENBQUMsQ0FBQyxHQUFDMVQsU0FBUyxDQUFDMFQsQ0FBQyxDQUFDLENBQUE7QUFBQyxHQUFzQzhILE9BQU8sQ0FBQ0QsS0FBSyxDQUFDeFQsS0FBSyxDQUFDeVQsT0FBTyxFQUFDcFosQ0FBQyxDQUFDLENBQUE7RUFBQTtBQUFDL0QsQ0FBQUEsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sRUFBQyxZQUFZLEVBQUM7R0FBQ0MsS0FBSyxFQUFDLENBQUMsQ0FBQTtBQUFDLEVBQUMsQ0FBQyxFQUFDRCxPQUFBQSxDQUFBQSxLQUFBQSxHQUFjLEtBQUssQ0FBQyxFQUFDQSxnQkFBY2dkLEtBQUssQ0FBQTs7Ozs7OztBQ0EvT2xkLENBQUFBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLEVBQUMsWUFBWSxFQUFDO0dBQUNDLEtBQUssRUFBQyxDQUFDLENBQUE7RUFBRSxDQUFDLEVBQUNELE9BQUFBLENBQUFBLGdCQUFBQSxHQUF5QkEsT0FBcUJBLENBQUFBLFlBQUFBLEdBQUFBLE9BQUFBLENBQUFBLDZCQUFBQSxHQUFzQ0EsMkNBQXlDQSxPQUFpQ0EsQ0FBQUEsd0JBQUFBLEdBQUFBLE9BQUFBLENBQUFBLG1CQUFBQSxHQUE0QixLQUFLLENBQUMsQ0FBQTtBQUFDLENBQUEsSUFBSWtkLG1CQUFtQixHQUFDLFVBQVNyWixDQUFDLEVBQUN1UixDQUFDLEVBQUM7QUFBQyxLQUFBLElBQUlBLENBQUMsR0FBQ0EsQ0FBQyxJQUFFLEVBQUU7T0FBQ2hVLENBQUMsR0FBQ2dVLENBQUMsQ0FBQ3JDLFdBQVc7T0FBQ29DLENBQUMsR0FBQ0MsQ0FBQyxDQUFDcUIsWUFBWTtPQUFDckIsQ0FBQyxHQUFDQSxDQUFDLENBQUNXLFVBQVU7T0FBQzNVLENBQUMsR0FBQ0EsQ0FBQyxHQUFDK1QsQ0FBQyxDQUFBO0FBQUMsS0FBQSxPQUFPLENBQUMsS0FBR0EsQ0FBQyxHQUFDLElBQUduVixPQUFPLENBQUNtZCxnQ0FBZ0MsRUFBRS9iLENBQUMsRUFBQytULENBQUMsRUFBQ0MsQ0FBQyxDQUFDLEdBQUMsSUFBR3BWLE9BQU8sQ0FBQ29kLDZCQUE2QixFQUFFaGMsQ0FBQyxFQUFDK1QsQ0FBQyxFQUFDQyxDQUFDLEVBQUN2UixDQUFDLENBQUMsQ0FBQTtJQUFDO0dBQUN3Wix3QkFBd0IsSUFBRXJkLE9BQTRCa2QsQ0FBQUEsbUJBQUFBLEdBQUFBLG1CQUFtQixFQUFDLFVBQVNyWixDQUFDLEVBQUN1UixDQUFDLEVBQUM7S0FBQyxJQUFJaFUsQ0FBQyxDQUFBO0tBQUMsT0FBTyxLQUFLLENBQUMsS0FBR2dVLENBQUMsS0FBR0EsQ0FBQyxHQUFDLENBQUMsQ0FBQyxFQUFDLENBQUN2UixDQUFDLEdBQUMsS0FBSyxDQUFDLEtBQUdBLENBQUMsR0FBQyxDQUFDLEdBQUNBLENBQUMsS0FBR3VSLENBQUMsSUFBRWhVLENBQUMsR0FBQ2UsSUFBSSxDQUFDd1ksS0FBSyxDQUFDOVcsQ0FBQyxHQUFDdVIsQ0FBQyxDQUFDLEVBQUN2UixDQUFDLEdBQUN1UixDQUFDLElBQUUsQ0FBQyxHQUFDaFUsQ0FBQyxHQUFDLENBQUMsR0FBQ0EsQ0FBQyxJQUFFLENBQUMsQ0FBQTtBQUFBLElBQUMsQ0FBQztHQUFDK2IsZ0NBQWdDLElBQUVuZCxPQUFBQSxDQUFBQSx3QkFBQUEsR0FBaUNxZCx3QkFBd0IsRUFBQyxVQUFTeFosQ0FBQyxFQUFDdVIsQ0FBQyxFQUFDaFUsQ0FBQyxFQUFDO0FBQUMsS0FBQSxPQUFPeUMsQ0FBQyxHQUFDdVIsQ0FBQyxHQUFDaFUsQ0FBQyxHQUFDZ1UsQ0FBQyxHQUFDaFUsQ0FBQyxHQUFDeUMsQ0FBQyxHQUFDLENBQUMsR0FBQ0EsQ0FBQyxHQUFDLENBQUMsQ0FBQTtBQUFBLElBQUMsQ0FBQztBQUFDdVosR0FBQUEsNkJBQTZCLElBQUVwZCxPQUF5Q21kLENBQUFBLGdDQUFBQSxHQUFBQSxnQ0FBZ0MsRUFBQyxVQUFTdFosQ0FBQyxFQUFDdVIsQ0FBQyxFQUFDaFUsQ0FBQyxFQUFDK1QsQ0FBQyxFQUFDO0FBQUMsS0FBQSxJQUFJbUcsQ0FBQyxHQUFDLElBQUd0YixPQUFPLENBQUNxZCx3QkFBd0IsRUFBRWpjLENBQUMsRUFBQ2dVLENBQUMsQ0FBQyxDQUFBO0tBQUMsT0FBT3ZSLENBQUMsS0FBR3pDLENBQUMsR0FBQ2dVLENBQUMsR0FBQyxDQUFDLEdBQUNELENBQUMsSUFBRXRSLENBQUMsR0FBQ3VSLENBQUMsSUFBRSxDQUFDLEtBQUd2UixDQUFDLEdBQUN5WCxDQUFDLEdBQUMsQ0FBQyxLQUFHelgsQ0FBQyxHQUFDekMsQ0FBQyxHQUFDZ1UsQ0FBQyxJQUFFLENBQUMsR0FBQ2tHLENBQUMsR0FBQ0EsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLEdBQUNsRyxDQUFDLEdBQUNqVCxJQUFJLENBQUN3WSxLQUFLLENBQUM5VyxDQUFDLEdBQUN1UixDQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFBO0FBQUEsSUFBQyxDQUFDO0dBQUNrSSxZQUFZLElBQUV0ZCxPQUFzQ29kLENBQUFBLDZCQUFBQSxHQUFBQSw2QkFBNkIsRUFBQyxVQUFTdlosQ0FBQyxFQUFDdVIsQ0FBQyxFQUFDO0tBQUMsS0FBSyxDQUFDLEtBQUdBLENBQUMsS0FBR0EsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFBO0FBQUN2UixLQUFBQSxDQUFDLEdBQUMsQ0FBQ0EsQ0FBQyxHQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLEdBQUMsQ0FBQyxHQUFDQSxDQUFDLElBQUUsQ0FBQyxDQUFBO0FBQUMsS0FBQSxPQUFPQSxDQUFDLEdBQUMsQ0FBQyxHQUFDQSxDQUFDLEdBQUN1UixDQUFDLEdBQUNBLENBQUMsR0FBQ3ZSLENBQUMsS0FBR0EsQ0FBQyxHQUFDLENBQUMsQ0FBQyxFQUFDO09BQUMwWixJQUFJLEVBQUMxWixDQUFDO09BQUNrUyxVQUFVLEVBQUNYLENBQUFBO01BQUUsQ0FBQTtBQUFBLElBQUMsQ0FBQztHQUFDb0ksZ0JBQWdCLElBQUV4ZCxPQUFBQSxDQUFBQSxZQUFBQSxHQUFxQnNkLFlBQVksRUFBQyxVQUFTelosQ0FBQyxFQUFDO0FBQUMsS0FBQSxJQUFJQSxDQUFDLEdBQUNBLENBQUMsSUFBRSxFQUFFO09BQUN1UixDQUFDLEdBQUN2UixDQUFDLENBQUM0UyxZQUFZO09BQUNyVixDQUFDLEdBQUN5QyxDQUFDLENBQUNrUCxXQUFXO09BQUNvQyxDQUFDLEdBQUN0UixDQUFDLENBQUNrUSxRQUFRO09BQUN1SCxDQUFDLEdBQUN6WCxDQUFDLENBQUNrUyxVQUFVLENBQUE7S0FBQyxPQUFPbFMsQ0FBQyxDQUFDcVQscUJBQXFCLEdBQUM7T0FBQ3VHLG1CQUFtQixFQUFDLENBQUMsQ0FBQztPQUFDQyxtQkFBbUIsRUFBQyxDQUFDLENBQUE7QUFBQyxNQUFDLEdBQUM7T0FBQ0QsbUJBQW1CLEVBQUMsQ0FBQyxDQUFDLEtBQUd0SSxDQUFDLElBQUUsQ0FBQyxLQUFHL1QsQ0FBQztPQUFDc2MsbUJBQW1CLEVBQUMsQ0FBQyxDQUFDLEtBQUd2SSxDQUFDLElBQUVtRyxDQUFDLEdBQUNsRyxDQUFDLElBQUVoVSxDQUFBQTtNQUFFLENBQUE7QUFBQSxJQUFDLENBQUMsQ0FBQTtBQUFDcEIsQ0FBQUEsT0FBQUEsQ0FBQUEsZ0JBQUFBLEdBQXlCd2QsZ0JBQWdCLENBQUE7Ozs7Ozs7QUNBNWdEMWQsQ0FBQUEsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sRUFBQyxZQUFZLEVBQUM7R0FBQ0MsS0FBSyxFQUFDLENBQUMsQ0FBQTtBQUFDLEVBQUMsQ0FBQyxFQUFDRCxPQUFvQ0EsQ0FBQUEsMkJBQUFBLEdBQUFBLE9BQUFBLENBQUFBLDRCQUFBQSxHQUFxQ0EsdUNBQXFDQSxPQUErQkEsQ0FBQUEsc0JBQUFBLEdBQUFBLE9BQUFBLENBQUFBLHVCQUFBQSxHQUFnQ0EsT0FBMkJBLENBQUFBLGtCQUFBQSxHQUFBQSxPQUFBQSxDQUFBQSxVQUFBQSxHQUFtQkEsT0FBNkJBLENBQUFBLG9CQUFBQSxHQUFBQSxPQUFBQSxDQUFBQSxpQkFBQUEsR0FBMEJBLE9BQThCLENBQUEscUJBQUEsR0FBQSxLQUFLLENBQUMsQ0FBQTtDQUFDLElBQUk4UyxPQUFPLEdBQUNyUyxLQUFtQixDQUFBO0FBQUMsQ0FBQSxTQUFTa2QscUJBQXFCQSxDQUFDdkksQ0FBQyxFQUFDRCxDQUFDLEVBQUM7R0FBQyxJQUFJQyxDQUFDLEdBQUMsQ0FBQ0EsQ0FBQyxJQUFFLEVBQUUsRUFBRXpCLGdCQUFnQjtBQUFDd0IsS0FBQUEsQ0FBQyxHQUFDQSxDQUFDLElBQUUsRUFBRTtLQUFDdFIsQ0FBQyxHQUFDc1IsQ0FBQyxDQUFDc0IsWUFBWTtLQUFDbkIsQ0FBQyxHQUFDSCxDQUFDLENBQUNZLFVBQVU7S0FBQ1osQ0FBQyxHQUFDQSxDQUFDLENBQUMvQixTQUFTLENBQUE7R0FBQyxJQUFHLElBQUdwVCxPQUFPLENBQUM0ZCxVQUFVLEVBQUV4SSxDQUFDLEVBQUN0QyxPQUFPLENBQUNoQyxnQkFBZ0IsQ0FBQ0QsVUFBVSxDQUFDLEVBQUMsT0FBTSxDQUFDc0UsQ0FBQyxJQUFFdFIsQ0FBQyxLQUFHeVIsQ0FBQyxDQUFBO0VBQUE7QUFBQyxDQUFBLFNBQVN1SSxpQkFBaUJBLENBQUN6SSxDQUFDLEVBQUNELENBQUMsRUFBQztHQUFDLE9BQU9DLENBQUMsQ0FBQ3ZCLG1CQUFtQixJQUFFOEoscUJBQXFCLENBQUN2SSxDQUFDLEVBQUNELENBQUMsQ0FBQyxDQUFBO0VBQUE7QUFBQyxDQUFBLFNBQVMySSxvQkFBb0JBLENBQUMxSSxDQUFDLEVBQUNELENBQUMsRUFBQztBQUFDLEdBQUEsT0FBT0MsQ0FBQyxDQUFDeEIsc0JBQXNCLElBQUUsQ0FBQ3dCLENBQUMsQ0FBQ3JCLFFBQVEsSUFBRTRKLHFCQUFxQixDQUFDdkksQ0FBQyxFQUFDRCxDQUFDLENBQUMsQ0FBQTtFQUFBO0FBQUNuVixDQUFBQSxPQUFBQSxDQUFBQSxxQkFBQUEsR0FBOEIyZCxxQkFBcUIsRUFBQzNkLE9BQUFBLENBQUFBLGlCQUFBQSxHQUEwQjZkLGlCQUFpQixFQUFDN2QsT0FBQUEsQ0FBQUEsb0JBQUFBLEdBQTZCOGQsb0JBQW9CLENBQUE7QUFBQyxDQUFBLElBQUlGLFVBQVUsR0FBQyxVQUFTeEksQ0FBQyxFQUFDRCxDQUFDLEVBQUM7QUFBQyxLQUFBLE9BQU8sS0FBSyxDQUFDLEtBQUdDLENBQUMsS0FBR0EsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxFQUFDLEtBQUssQ0FBQyxLQUFHRCxDQUFDLEtBQUdBLENBQUMsR0FBQyxFQUFFLENBQUMsRUFBQzFOLE9BQU8sQ0FBQzJOLENBQUMsSUFBRUEsQ0FBQyxDQUFDMkksUUFBUSxDQUFDNUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUFDO0dBQUM2SSxrQkFBa0IsSUFBRWhlLE9BQW1CNGQsQ0FBQUEsVUFBQUEsR0FBQUEsVUFBVSxFQUFDLFVBQVN4SSxDQUFDLEVBQUNELENBQUMsRUFBQztBQUFDLEtBQUEsT0FBT0MsQ0FBQyxJQUFFLElBQUdwVixPQUFPLENBQUM0ZCxVQUFVLEVBQUV6SSxDQUFDLEVBQUNyQyxPQUFPLENBQUNoQyxnQkFBZ0IsQ0FBQ0YsU0FBUyxDQUFDLENBQUE7QUFBQSxJQUFDLENBQUM7R0FBQ3FOLHVCQUF1QixJQUFFamUsT0FBQUEsQ0FBQUEsa0JBQUFBLEdBQTJCZ2Usa0JBQWtCLEVBQUMsVUFBUzVJLENBQUMsRUFBQ0QsQ0FBQyxFQUFDdFIsQ0FBQyxFQUFDO0tBQUMsT0FBTyxLQUFLLENBQUMsS0FBR3VSLENBQUMsS0FBR0EsQ0FBQyxHQUFDLENBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxLQUFHRCxDQUFDLEtBQUdBLENBQUMsR0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDdFIsQ0FBQyxHQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLElBQUVBLENBQUMsSUFBRXVSLENBQUMsR0FBQyxDQUFDLEtBQUd6RixNQUFNLENBQUN3RixDQUFDLENBQUMsSUFBRWhULElBQUksQ0FBQ3lYLElBQUksQ0FBQ3hFLENBQUMsR0FBQ0QsQ0FBQyxDQUFDLElBQUUsQ0FBQyxDQUFBO0FBQUEsSUFBQyxDQUFDO0dBQUMrSSxzQkFBc0IsSUFBRWxlLE9BQUFBLENBQUFBLHVCQUFBQSxHQUFnQ2llLHVCQUF1QixFQUFDLFVBQVM3SSxDQUFDLEVBQUNELENBQUMsRUFBQ3RSLENBQUMsRUFBQztLQUFDLE9BQU0sQ0FBQ3NSLENBQUMsSUFBRUMsQ0FBQyxLQUFHdlIsQ0FBQyxHQUFDLENBQUMsQ0FBQTtBQUFBLElBQUMsQ0FBQztBQUFDc2EsR0FBQUEsNEJBQTRCLElBQUVuZSxPQUErQmtlLENBQUFBLHNCQUFBQSxHQUFBQSxzQkFBc0IsRUFBQyxVQUFTOUksQ0FBQyxFQUFDRCxDQUFDLEVBQUN0UixDQUFDLEVBQUN5UixDQUFDLEVBQUM7S0FBQyxPQUFNLENBQUNILENBQUMsR0FBQ3RSLENBQUMsR0FBQ3lSLENBQUMsR0FBQ0YsQ0FBQyxHQUFDRSxDQUFDLEtBQUcsQ0FBQyxDQUFBO0FBQUEsSUFBQyxDQUFDO0dBQUM4SSw0QkFBNEIsSUFBRXBlLE9BQUFBLENBQUFBLDRCQUFBQSxHQUFxQ21lLDRCQUE0QixFQUFDLFVBQVMvSSxDQUFDLEVBQUM7S0FBQyxPQUFNLENBQUNBLENBQUMsR0FBQyxLQUFLLENBQUMsS0FBR0EsQ0FBQyxHQUFDLEVBQUUsR0FBQ0EsQ0FBQyxNQUFJdEMsT0FBTyxDQUFDbkMsZ0JBQWdCLENBQUNWLE1BQU0sSUFBRW1GLENBQUMsS0FBR3RDLE9BQU8sQ0FBQ25DLGdCQUFnQixDQUFDRCxHQUFHLENBQUE7QUFBQSxJQUFDLENBQUM7R0FBQzJOLDJCQUEyQixJQUFFcmUsT0FBQUEsQ0FBQUEsNEJBQUFBLEdBQXFDb2UsNEJBQTRCLEVBQUMsVUFBU2hKLENBQUMsRUFBQztLQUFDLE9BQU0sQ0FBQ0EsQ0FBQyxHQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLEdBQUMsRUFBRSxHQUFDQSxDQUFDLE1BQUl0QyxPQUFPLENBQUNuQyxnQkFBZ0IsQ0FBQ0YsT0FBTyxJQUFFMkUsQ0FBQyxLQUFHdEMsT0FBTyxDQUFDbkMsZ0JBQWdCLENBQUNELEdBQUcsQ0FBQTtBQUFBLElBQUMsQ0FBQyxDQUFBO0FBQUMxUSxDQUFBQSxPQUFBQSxDQUFBQSwyQkFBQUEsR0FBb0NxZSwyQkFBMkIsQ0FBQTs7Ozs7QUNBOWhFLENBQUEsSUFBSUMsZUFBZSxHQUFDeGUsTUFBTSxDQUFDeWUsTUFBTSxHQUFDLFVBQVMxYSxDQUFDLEVBQUN3UixDQUFDLEVBQUNELENBQUMsRUFBQ0QsQ0FBQyxFQUFDO0tBQUMsS0FBSyxDQUFDLEtBQUdBLENBQUMsS0FBR0EsQ0FBQyxHQUFDQyxDQUFDLENBQUMsQ0FBQTtLQUFDLElBQUkwRyxDQUFDLEdBQUNoYyxNQUFNLENBQUN5Six3QkFBd0IsQ0FBQzhMLENBQUMsRUFBQ0QsQ0FBQyxDQUFDLENBQUE7S0FBQzBHLENBQUMsS0FBRyxLQUFLLElBQUdBLENBQUMsR0FBQ3pHLENBQUMsQ0FBQzNJLFVBQVUsR0FBQyxDQUFDb1AsQ0FBQyxDQUFDbFgsUUFBUSxJQUFFLENBQUNrWCxDQUFDLENBQUNuWCxZQUFZLENBQUMsS0FBR21YLENBQUMsR0FBQztPQUFDcFgsVUFBVSxFQUFDLENBQUMsQ0FBQztPQUFDbUQsR0FBRyxFQUFDLFlBQVU7U0FBQyxPQUFPd04sQ0FBQyxDQUFDRCxDQUFDLENBQUMsQ0FBQTtRQUFBO01BQUUsQ0FBQyxFQUFDdFYsTUFBTSxDQUFDQyxjQUFjLENBQUM4RCxDQUFDLEVBQUNzUixDQUFDLEVBQUMyRyxDQUFDLENBQUMsQ0FBQTtJQUFDLEdBQUMsVUFBU2pZLENBQUMsRUFBQ3dSLENBQUMsRUFBQ0QsQ0FBQyxFQUFDRCxDQUFDLEVBQUM7QUFBQ3RSLEtBQUFBLENBQUMsQ0FBQ3NSLENBQUMsR0FBQyxLQUFLLENBQUMsS0FBR0EsQ0FBQyxHQUFDQyxDQUFDLEdBQUNELENBQUMsQ0FBQyxHQUFDRSxDQUFDLENBQUNELENBQUMsQ0FBQyxDQUFBO0lBQUM7QUFBQ29KLEdBQUFBLFlBQVksR0FBQyxVQUFTM2EsQ0FBQyxFQUFDd1IsQ0FBQyxFQUFDO0FBQUMsS0FBQSxLQUFJLElBQUlELENBQUMsSUFBSXZSLENBQUMsRUFBQyxTQUFTLEtBQUd1UixDQUFDLElBQUV0VixNQUFNLENBQUM4SSxTQUFTLENBQUN1RCxjQUFjLENBQUNDLElBQUksQ0FBQ2lKLENBQUMsRUFBQ0QsQ0FBQyxDQUFDLElBQUVrSixlQUFlLENBQUNqSixDQUFDLEVBQUN4UixDQUFDLEVBQUN1UixDQUFDLENBQUMsQ0FBQTtJQUFDLENBQUE7QUFBQ3RWLENBQUFBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLEVBQUMsWUFBWSxFQUFDO0dBQUNDLEtBQUssRUFBQyxDQUFDLENBQUE7QUFBQyxFQUFDLENBQUMsRUFBQ3VlLFlBQVksQ0FBQy9kLGFBQW1CLEVBQUEsRUFBQ1QsT0FBTyxDQUFDLEVBQUN3ZSxZQUFZLENBQUMvZCxlQUFBQSxFQUFxQixFQUFDVCxPQUFPLENBQUMsRUFBQ3dlLFlBQVksQ0FBQy9kLFVBQXVCLEVBQUNULE9BQU8sQ0FBQyxFQUFDd2UsWUFBWSxDQUFDL2QsTUFBbUIsRUFBQ1QsT0FBTyxDQUFDLEVBQUN3ZSxZQUFZLENBQUMvZCxJQUFpQixFQUFDVCxPQUFPLENBQUMsRUFBQ3dlLFlBQVksQ0FBQy9kLEtBQWtCLEVBQUNULE9BQU8sQ0FBQyxFQUFDd2UsWUFBWSxDQUFDL2QsTUFBbUIsRUFBQ1QsT0FBTyxDQUFDLEVBQUN3ZSxZQUFZLENBQUMvZCxRQUFxQixFQUFDVCxPQUFPLENBQUMsRUFBQ3dlLFlBQVksQ0FBQy9kLE9BQW9CLEVBQUNULE9BQU8sQ0FBQyxDQUFBOzs7OztBQ0F2MUIsQ0FBQSxJQUFJeWUsZUFBZSxHQUFDLFVBQVM1YSxDQUFDLEVBQUM7S0FBQyxPQUFPQSxDQUFDLElBQUVBLENBQUMsQ0FBQzZJLFVBQVUsR0FBQzdJLENBQUMsR0FBQztPQUFDNmEsT0FBTyxFQUFDN2EsQ0FBQUE7TUFBRSxDQUFBO0lBQUM7R0FBQzhhLE9BQU8sSUFBRTdlLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLEVBQUMsWUFBWSxFQUFDO0tBQUNDLEtBQUssRUFBQyxDQUFDLENBQUE7QUFBQyxJQUFDLENBQUMsRUFBQ0QsT0FBa0IsQ0FBQSxTQUFBLEdBQUEsS0FBSyxDQUFDLEVBQUN5ZSxlQUFlLENBQUNoZSxPQUFRLENBQUEsT0FBTyxDQUFDLENBQUMsQ0FBQztHQUFDcVMsT0FBTyxHQUFDclMsS0FBbUI7R0FBQ21lLE9BQU8sR0FBQ25lLEtBQW1CO0FBQUNvZSxHQUFBQSxTQUFTLEdBQUMsVUFBU2hiLENBQUMsRUFBQztBQUFDLEtBQUEsSUFBSXVSLENBQUMsR0FBQ3ZSLENBQUMsQ0FBQ2tQLFdBQVc7T0FBQ3VDLENBQUMsR0FBQ3pSLENBQUMsQ0FBQ2tTLFVBQVU7T0FBQ2xTLENBQUMsR0FBQ0EsQ0FBQyxDQUFDaWIsZUFBZTtBQUFDMUosT0FBQUEsQ0FBQyxHQUFDLElBQUd3SixPQUFPLENBQUN0QixZQUFZLEVBQUVsSSxDQUFDLEVBQUNFLENBQUMsQ0FBQyxDQUFDaUksSUFBSSxDQUFBO0FBQUMsS0FBQSxPQUFNLFVBQVUsSUFBRSxPQUFPMVosQ0FBQyxHQUFDOGEsT0FBTyxDQUFDRCxPQUFPLENBQUNwZixhQUFhLENBQUMsS0FBSyxFQUFDO0FBQUN5ZixPQUFBQSxTQUFTLEVBQUNqTSxPQUFPLENBQUNWLFVBQVUsQ0FBQ1IsVUFBQUE7TUFBVyxFQUFDL04sQ0FBQyxDQUFDO09BQUMwWixJQUFJLEVBQUNuSSxDQUFDO09BQUNXLFVBQVUsRUFBQ1QsQ0FBQUE7QUFBQyxNQUFDLENBQUMsQ0FBQyxJQUFFelIsQ0FBQyxHQUFDLElBQUcrYSxPQUFPLENBQUMzRCxnQkFBZ0IsRUFBRW5JLE9BQU8sQ0FBQ1YsVUFBVSxDQUFDUCxlQUFlLEVBQUNpQixPQUFPLENBQUNELFNBQVMsQ0FBQ0gsU0FBUyxDQUFDLEVBQUNpTSxPQUFPLENBQUNELE9BQU8sQ0FBQ3BmLGFBQWEsQ0FBQyxLQUFLLEVBQUM7QUFBQ3lmLE9BQUFBLFNBQVMsRUFBQ2pNLE9BQU8sQ0FBQ1YsVUFBVSxDQUFDUixVQUFBQTtNQUFXLEVBQUMrTSxPQUFPLENBQUNELE9BQU8sQ0FBQ3BmLGFBQWEsQ0FBQyxNQUFNLEVBQUM7QUFBQ3lmLE9BQUFBLFNBQVMsRUFBQ2pNLE9BQU8sQ0FBQ1YsVUFBVSxDQUFDUCxlQUFBQTtNQUFnQixFQUFDdUQsQ0FBQyxDQUFDLEVBQUN1SixPQUFPLENBQUNELE9BQU8sQ0FBQ3BmLGFBQWEsQ0FBQyxNQUFNLEVBQUM7T0FBQ3lmLFNBQVMsRUFBQ2xiLENBQUFBO01BQUUsRUFBQyxHQUFHLENBQUMsRUFBQzhhLE9BQU8sQ0FBQ0QsT0FBTyxDQUFDcGYsYUFBYSxDQUFDLE1BQU0sRUFBQztBQUFDeWYsT0FBQUEsU0FBUyxFQUFDak0sT0FBTyxDQUFDVixVQUFVLENBQUNQLGVBQUFBO0FBQWUsTUFBQyxFQUFDeUQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQUMsQ0FBQTtBQUFDdFYsQ0FBQUEsT0FBQUEsQ0FBQUEsU0FBQUEsR0FBa0I2ZSxTQUFTLENBQUE7Ozs7Ozs7QUNBajZCLENBQUEsSUFBSUosZUFBZSxHQUFDLFVBQVM1YSxDQUFDLEVBQUM7S0FBQyxPQUFPQSxDQUFDLElBQUVBLENBQUMsQ0FBQzZJLFVBQVUsR0FBQzdJLENBQUMsR0FBQztPQUFDNmEsT0FBTyxFQUFDN2EsQ0FBQUE7TUFBRSxDQUFBO0lBQUM7R0FBQzhhLE9BQU8sSUFBRTdlLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLEVBQUMsWUFBWSxFQUFDO0tBQUNDLEtBQUssRUFBQyxDQUFDLENBQUE7QUFBQyxJQUFDLENBQUMsRUFBQ0QsT0FBa0IsQ0FBQSxTQUFBLEdBQUEsS0FBSyxDQUFDLEVBQUN5ZSxlQUFlLENBQUNoZSxPQUFRLENBQUEsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUFDdWUsR0FBQUEsU0FBUyxHQUFDLFVBQVNuYixDQUFDLEVBQUM7QUFBQyxLQUFBLElBQUl1UixDQUFDLEdBQUN2UixDQUFDLENBQUMwWixJQUFJO09BQUNsSSxDQUFDLEdBQUN4UixDQUFDLENBQUNrYixTQUFTO09BQUNsYixDQUFDLEdBQUNBLENBQUMsQ0FBQ29iLE1BQU0sQ0FBQTtLQUFDLE9BQU9OLE9BQU8sQ0FBQ0QsT0FBTyxDQUFDcGYsYUFBYSxDQUFDLElBQUksRUFBQztPQUFDRCxLQUFLLEVBQUN3RSxDQUFDO09BQUNrYixTQUFTLEVBQUMxSixDQUFBQTtNQUFFLEVBQUNELENBQUMsQ0FBQyxDQUFBO0lBQUMsQ0FBQTtBQUFDcFYsQ0FBQUEsT0FBQUEsQ0FBQUEsU0FBQUEsR0FBa0JnZixTQUFTLENBQUE7Ozs7Ozs7QUNBN1YsQ0FBQSxJQUFJUCxlQUFlLEdBQUMsVUFBUzVhLENBQUMsRUFBQztLQUFDLE9BQU9BLENBQUMsSUFBRUEsQ0FBQyxDQUFDNkksVUFBVSxHQUFDN0ksQ0FBQyxHQUFDO09BQUM2YSxPQUFPLEVBQUM3YSxDQUFBQTtNQUFFLENBQUE7SUFBQztHQUFDOGEsT0FBTyxJQUFFN2UsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sRUFBQyxZQUFZLEVBQUM7S0FBQ0MsS0FBSyxFQUFDLENBQUMsQ0FBQTtBQUFDLElBQUMsQ0FBQyxFQUFDRCxPQUF1QixDQUFBLGNBQUEsR0FBQSxLQUFLLENBQUMsRUFBQ3llLGVBQWUsQ0FBQ2hlLE9BQVEsQ0FBQSxPQUFPLENBQUMsQ0FBQyxDQUFDO0dBQUNxUyxPQUFPLEdBQUNyUyxLQUFtQjtHQUFDbWUsT0FBTyxHQUFDbmUsS0FBbUI7QUFBQ3llLEdBQUFBLGNBQWMsR0FBQyxVQUFTcmIsQ0FBQyxFQUFDO0FBQUMsS0FBQSxJQUFJeVQsQ0FBQyxHQUFDelQsQ0FBQyxDQUFDd0MsS0FBSztPQUFDbVEsQ0FBQyxHQUFDM1MsQ0FBQyxDQUFDc2IsT0FBTztPQUFDOUosQ0FBQyxHQUFDeFIsQ0FBQyxDQUFDdWIsWUFBWTtPQUFDOUQsQ0FBQyxHQUFDelgsQ0FBQyxDQUFDd2IsWUFBWTtPQUFDakssQ0FBQyxHQUFDdlIsQ0FBQyxDQUFDOFAsZ0JBQWdCO09BQUM4SCxDQUFDLEdBQUM1WCxDQUFDLENBQUN5YixjQUFjO09BQUM5RCxDQUFDLEdBQUNsRSxDQUFDLENBQUN2QixVQUFVO09BQUN3SixDQUFDLEdBQUNqSSxDQUFDLENBQUNiLFlBQVk7T0FBQ1ksQ0FBQyxHQUFDQyxDQUFDLENBQUN2RCxRQUFRO09BQUNsUSxDQUFDLEdBQUN5VCxDQUFDLENBQUNsRSxTQUFTO09BQUNtSSxDQUFDLEdBQUNqRSxDQUFDLENBQUN2RSxXQUFXO09BQUNnSixDQUFDLEdBQUMsSUFBRzZDLE9BQU8sQ0FBQ3BCLGdCQUFnQixFQUFFbEcsQ0FBQyxDQUFDLENBQUNvRyxtQkFBbUI7T0FBQ2hDLENBQUMsR0FBQyxJQUFHa0QsT0FBTyxDQUFDWixrQkFBa0IsRUFBRW5hLENBQUMsRUFBQ3VSLENBQUMsQ0FBQztBQUFDb0ssT0FBQUEsQ0FBQyxHQUFDLElBQUdaLE9BQU8sQ0FBQ1gsdUJBQXVCLEVBQUV6QyxDQUFDLEVBQUMrRCxDQUFDLEVBQUM3RCxDQUFDLENBQUMsQ0FBQTtLQUFDLE9BQU9pRCxPQUFPLENBQUNELE9BQU8sQ0FBQ3BmLGFBQWEsQ0FBQyxJQUFJLEVBQUM7QUFBQ3lmLE9BQUFBLFNBQVMsRUFBQ2pNLE9BQU8sQ0FBQ1YsVUFBVSxDQUFDYixJQUFBQTtBQUFJLE1BQUMsRUFBQ21ILEtBQUssQ0FBQ0MsSUFBSSxDQUFDO09BQUMxWCxNQUFNLEVBQUN1YSxDQUFBQTtNQUFFLENBQUMsQ0FBQ2hHLEdBQUcsQ0FBQyxVQUFTM1IsQ0FBQyxFQUFDdVIsQ0FBQyxFQUFDO0FBQUMsT0FBQSxJQUFJaFUsQ0FBQyxFQUFDa1UsQ0FBQyxFQUFDSCxDQUFDLENBQUE7QUFBQyxPQUFBLElBQUdDLENBQUMsR0FBQ29LLENBQUMsRUFBQyxPQUFPbEssQ0FBQyxHQUFDLElBQUdzSixPQUFPLENBQUNWLHNCQUFzQixFQUFFOUksQ0FBQyxFQUFDM04sT0FBTyxDQUFDNFAsQ0FBQyxDQUFDLEVBQUNtSSxDQUFDLENBQUMsRUFBQ3BlLENBQUMsR0FBQyxJQUFHd2QsT0FBTyxDQUFDVCw0QkFBNEIsRUFBRS9JLENBQUMsRUFBQ0UsQ0FBQyxFQUFDa0csQ0FBQyxFQUFDK0QsQ0FBQyxDQUFDLEVBQUNqSyxDQUFDLEdBQUMsSUFBR3NKLE9BQU8sQ0FBQzFCLG1CQUFtQixFQUFFbkIsQ0FBQyxFQUFDekUsQ0FBQyxDQUFDLEVBQUNvRSxDQUFDLEtBQUcsQ0FBQ3BHLENBQUMsR0FBQ2lHLENBQUMsSUFBRSxDQUFDLEdBQUNqRyxDQUFDLEdBQUNrRyxDQUFDLEdBQUMsQ0FBQyxHQUFDQSxDQUFDLElBQUVELENBQUMsS0FBR2pHLENBQUMsR0FBQyxDQUFDLENBQUMsRUFBQ2xVLENBQUMsR0FBQ2dVLENBQUMsQ0FBQyxFQUFDRSxDQUFDLEdBQUNBLENBQUMsS0FBR0YsQ0FBQyxHQUFDdEMsT0FBTyxDQUFDRCxTQUFTLENBQUNSLE1BQU0sR0FBQyxFQUFFLEVBQUM4QyxDQUFDLEdBQUNzRyxDQUFDLEdBQUMzSSxPQUFPLENBQUNELFNBQVMsQ0FBQ0wsTUFBTSxHQUFDLEVBQUUsRUFBQzJDLENBQUMsR0FBQyxJQUFHeUosT0FBTyxDQUFDM0QsZ0JBQWdCLEVBQUVuSSxPQUFPLENBQUNWLFVBQVUsQ0FBQ1osU0FBUyxFQUFDOEQsQ0FBQyxFQUFDSCxDQUFDLENBQUMsRUFBQ3dKLE9BQU8sQ0FBQ0QsT0FBTyxDQUFDcGYsYUFBYSxDQUFDLElBQUksRUFBQztBQUFDcUMsU0FBQUEsR0FBRyxFQUFDLFdBQVcsQ0FBQzBXLE1BQU0sQ0FBQ2pELENBQUMsQ0FBQztTQUFDZ0ssWUFBWSxFQUFDL0osQ0FBQztTQUFDZ0ssWUFBWSxFQUFDL0QsQ0FBQztTQUFDNkQsT0FBTyxFQUFDLFlBQVU7V0FBQyxPQUFPM0ksQ0FBQyxDQUFDcFYsQ0FBQyxDQUFDLENBQUE7VUFBQztTQUFDMmQsU0FBUyxFQUFDNUosQ0FBQUE7QUFBQyxRQUFDLEVBQUNzRyxDQUFDLElBQUVBLENBQUMsQ0FBQztBQUFDZ0UsU0FBQUEsUUFBUSxFQUFDaFksT0FBTyxDQUFDNk4sQ0FBQyxDQUFDO1NBQUN2QyxXQUFXLEVBQUNxQyxDQUFBQTtRQUFFLENBQUMsQ0FBQyxDQUFBO01BQUMsQ0FBQyxDQUFDLENBQUE7SUFBQyxDQUFBO0FBQUNwVixDQUFBQSxPQUFBQSxDQUFBQSxjQUFBQSxHQUF1QmtmLGNBQWMsQ0FBQTs7Ozs7OztBQ0F0dkMsQ0FBQSxJQUFJVCxlQUFlLEdBQUMsVUFBUzVhLENBQUMsRUFBQztLQUFDLE9BQU9BLENBQUMsSUFBRUEsQ0FBQyxDQUFDNkksVUFBVSxHQUFDN0ksQ0FBQyxHQUFDO09BQUM2YSxPQUFPLEVBQUM3YSxDQUFBQTtNQUFFLENBQUE7SUFBQztHQUFDOGEsT0FBTyxJQUFFN2UsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sRUFBQyxZQUFZLEVBQUM7S0FBQ0MsS0FBSyxFQUFDLENBQUMsQ0FBQTtBQUFDLElBQUMsQ0FBQyxFQUFDRCxPQUF3QixDQUFBLGVBQUEsR0FBQSxLQUFLLENBQUMsRUFBQ3llLGVBQWUsQ0FBQ2hlLE9BQVEsQ0FBQSxPQUFPLENBQUMsQ0FBQyxDQUFDO0dBQUNxUyxPQUFPLEdBQUNyUyxLQUFtQjtHQUFDbWUsT0FBTyxHQUFDbmUsS0FBbUI7QUFBQ2lmLEdBQUFBLGVBQWUsR0FBQyxVQUFTN2IsQ0FBQyxFQUFDO0FBQUMsS0FBQSxJQUFJdVIsQ0FBQyxHQUFDdlIsQ0FBQyxDQUFDOGIsU0FBUztPQUFDckksQ0FBQyxHQUFDelQsQ0FBQyxDQUFDc2IsT0FBTztPQUFDdGIsQ0FBQyxHQUFDQSxDQUFDLENBQUMrYixxQkFBcUIsQ0FBQTtBQUFDLEtBQUEsT0FBTSxVQUFVLElBQUUsT0FBTy9iLENBQUMsR0FBQzhhLE9BQU8sQ0FBQ0QsT0FBTyxDQUFDcGYsYUFBYSxDQUFDLEtBQUssRUFBQztBQUFDeWYsT0FBQUEsU0FBUyxFQUFDak0sT0FBTyxDQUFDVixVQUFVLENBQUNYLFFBQVE7T0FBQzBOLE9BQU8sRUFBQzdILENBQUFBO01BQUUsRUFBQ3pULENBQUMsQ0FBQztPQUFDOGIsU0FBUyxFQUFDdkssQ0FBQUE7QUFBQyxNQUFDLENBQUMsQ0FBQyxJQUFFdlIsQ0FBQyxHQUFDdVIsQ0FBQyxHQUFDdEMsT0FBTyxDQUFDRCxTQUFTLENBQUNKLEtBQUssR0FBQyxFQUFFLEVBQUMyQyxDQUFDLEdBQUMsSUFBR3dKLE9BQU8sQ0FBQzNELGdCQUFnQixFQUFFbkksT0FBTyxDQUFDVixVQUFVLENBQUNWLGFBQWEsRUFBQzdOLENBQUMsQ0FBQyxFQUFDOGEsT0FBTyxDQUFDRCxPQUFPLENBQUNwZixhQUFhLENBQUMsS0FBSyxFQUFDO0FBQUN5ZixPQUFBQSxTQUFTLEVBQUNqTSxPQUFPLENBQUNWLFVBQVUsQ0FBQ1gsUUFBQUE7TUFBUyxFQUFDa04sT0FBTyxDQUFDRCxPQUFPLENBQUNwZixhQUFhLENBQUMsS0FBSyxFQUFDO0FBQUN5ZixPQUFBQSxTQUFTLEVBQUNqTSxPQUFPLENBQUNWLFVBQVUsQ0FBQ1QsZ0JBQUFBO01BQWlCLEVBQUNnTixPQUFPLENBQUNELE9BQU8sQ0FBQ3BmLGFBQWEsQ0FBQyxLQUFLLEVBQUM7T0FBQzZmLE9BQU8sRUFBQzdILENBQUM7T0FBQ3lILFNBQVMsRUFBQzNKLENBQUFBO01BQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQUMsQ0FBQTtBQUFDcFYsQ0FBQUEsT0FBQUEsQ0FBQUEsZUFBQUEsR0FBd0IwZixlQUFlLENBQUE7Ozs7Ozs7QUNBbDBCLENBQUEsSUFBSWpCLGVBQWUsR0FBQyxVQUFTNWEsQ0FBQyxFQUFDO0tBQUMsT0FBT0EsQ0FBQyxJQUFFQSxDQUFDLENBQUM2SSxVQUFVLEdBQUM3SSxDQUFDLEdBQUM7T0FBQzZhLE9BQU8sRUFBQzdhLENBQUFBO01BQUUsQ0FBQTtJQUFDO0dBQUM4YSxPQUFPLElBQUU3ZSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFDLFlBQVksRUFBQztLQUFDQyxLQUFLLEVBQUMsQ0FBQyxDQUFBO0FBQUMsSUFBQyxDQUFDLEVBQUNELE9BQXVCLENBQUEsY0FBQSxHQUFBLEtBQUssQ0FBQyxFQUFDeWUsZUFBZSxDQUFDaGUsT0FBUSxDQUFBLE9BQU8sQ0FBQyxDQUFDLENBQUM7R0FBQ3FTLE9BQU8sR0FBQ3JTLEtBQW1CO0dBQUNtZSxPQUFPLEdBQUNuZSxLQUFtQjtBQUFDb2YsR0FBQUEsY0FBYyxHQUFDLFVBQVNoYyxDQUFDLEVBQUM7QUFBQyxLQUFBLElBQUl1UixDQUFDO09BQUNFLENBQUMsR0FBQ3pSLENBQUMsQ0FBQ3VRLElBQUk7T0FBQ2tELENBQUMsR0FBQ3pULENBQUMsQ0FBQ2ljLFVBQVU7T0FBQ3pLLENBQUMsR0FBQ3hSLENBQUMsQ0FBQ3NiLE9BQU87T0FBQzNJLENBQUMsR0FBQzNTLENBQUMsQ0FBQ2tjLGdCQUFnQjtPQUFDbGMsQ0FBQyxHQUFDQSxDQUFDLENBQUNtYyxnQkFBZ0IsQ0FBQTtBQUFDLEtBQUEsT0FBTSxVQUFVLElBQUUsT0FBT3hKLENBQUMsR0FBQ21JLE9BQU8sQ0FBQ0QsT0FBTyxDQUFDcGYsYUFBYSxDQUFDLEtBQUssRUFBQztBQUFDeWYsT0FBQUEsU0FBUyxFQUFDak0sT0FBTyxDQUFDVixVQUFVLENBQUNOLFdBQVc7T0FBQ3FOLE9BQU8sRUFBQzlKLENBQUFBO01BQUUsRUFBQ21CLENBQUMsQ0FBQztPQUFDc0osVUFBVSxFQUFDeEksQ0FBQUE7QUFBQyxNQUFDLENBQUMsQ0FBQyxHQUFDLFVBQVUsSUFBRSxPQUFPelQsQ0FBQyxHQUFDOGEsT0FBTyxDQUFDRCxPQUFPLENBQUNwZixhQUFhLENBQUMsS0FBSyxFQUFDO0FBQUN5ZixPQUFBQSxTQUFTLEVBQUNqTSxPQUFPLENBQUNWLFVBQVUsQ0FBQ0gsV0FBVztPQUFDa04sT0FBTyxFQUFDOUosQ0FBQUE7TUFBRSxFQUFDeFIsQ0FBQyxDQUFDO09BQUNpYyxVQUFVLEVBQUN4SSxDQUFBQTtNQUFFLENBQUMsQ0FBQyxJQUFFelQsQ0FBQyxHQUFDLENBQUMyUyxDQUFDLEdBQUMsTUFBTSxLQUFHbEIsQ0FBQyxJQUFFLEdBQUcsR0FBQyxHQUFHLEVBQUNBLENBQUMsR0FBQ2tCLENBQUMsR0FBQzFELE9BQU8sQ0FBQ1YsVUFBVSxDQUFDTixXQUFXLEdBQUNnQixPQUFPLENBQUNWLFVBQVUsQ0FBQ0gsV0FBVyxFQUFDbUQsQ0FBQyxHQUFDb0IsQ0FBQyxHQUFDMUQsT0FBTyxDQUFDVixVQUFVLENBQUNMLG1CQUFtQixHQUFDZSxPQUFPLENBQUNWLFVBQVUsQ0FBQ0YsbUJBQW1CLEVBQUNzRSxDQUFDLEdBQUNBLENBQUMsR0FBQzFELE9BQU8sQ0FBQ1YsVUFBVSxDQUFDSixnQkFBZ0IsR0FBQ2MsT0FBTyxDQUFDVixVQUFVLENBQUNELGdCQUFnQixFQUFDbUYsQ0FBQyxHQUFDQSxDQUFDLEdBQUN4RSxPQUFPLENBQUNELFNBQVMsQ0FBQ1AsUUFBUSxHQUFDLEVBQUUsRUFBQ2tFLENBQUMsR0FBQyxJQUFHb0ksT0FBTyxDQUFDM0QsZ0JBQWdCLEVBQUV6RSxDQUFDLEVBQUNjLENBQUMsQ0FBQyxFQUFDcUgsT0FBTyxDQUFDRCxPQUFPLENBQUNwZixhQUFhLENBQUMsS0FBSyxFQUFDO09BQUN5ZixTQUFTLEVBQUN6SixDQUFBQTtNQUFFLEVBQUNxSixPQUFPLENBQUNELE9BQU8sQ0FBQ3BmLGFBQWEsQ0FBQyxLQUFLLEVBQUM7T0FBQ3lmLFNBQVMsRUFBQzNKLENBQUFBO01BQUUsRUFBQ3VKLE9BQU8sQ0FBQ0QsT0FBTyxDQUFDcGYsYUFBYSxDQUFDLEdBQUcsRUFBQztPQUFDeWYsU0FBUyxFQUFDdkksQ0FBQztBQUFDMkksT0FBQUEsT0FBTyxFQUFDLFVBQVN0YixDQUFDLEVBQUM7U0FBQyxPQUFPd1IsQ0FBQyxDQUFDeFIsQ0FBQyxDQUFDLENBQUE7UUFBQTtNQUFFLEVBQUM4YSxPQUFPLENBQUNELE9BQU8sQ0FBQ3BmLGFBQWEsQ0FBQyxNQUFNLEVBQUM7T0FBQyxXQUFXLEVBQUN1RSxDQUFBQTtBQUFDLE1BQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFBQyxDQUFBO0FBQUM3RCxDQUFBQSxPQUFBQSxDQUFBQSxjQUFBQSxHQUF1QjZmLGNBQWMsQ0FBQTs7Ozs7QUNBM3NDL2YsQ0FBQUEsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sRUFBQyxZQUFZLEVBQUM7R0FBQ0MsS0FBSyxFQUFDLENBQUMsQ0FBQTtFQUFFLENBQUMsRUFBQ0QsT0FBdUJBLENBQUFBLGNBQUFBLEdBQUFBLE9BQUFBLENBQUFBLGVBQUFBLEdBQXdCQSx5QkFBdUJBLE9BQWtCQSxDQUFBQSxTQUFBQSxHQUFBQSxPQUFBQSxDQUFBQSxTQUFBQSxHQUFrQixLQUFLLENBQUMsQ0FBQTtDQUFDLElBQUlpZ0IsV0FBVyxHQUFDeGYsU0FBc0I7R0FBQ3lmLFdBQVcsSUFBRXBnQixNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFDLFdBQVcsRUFBQztLQUFDMEUsVUFBVSxFQUFDLENBQUMsQ0FBQztLQUFDbUQsR0FBRyxFQUFDLFlBQVU7T0FBQyxPQUFPb1ksV0FBVyxDQUFDcEIsU0FBUyxDQUFBO01BQUE7SUFBRSxDQUFDLEVBQUNwZSxTQUFzQixDQUFDO0dBQUMwZixnQkFBZ0IsSUFBRXJnQixNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFDLFdBQVcsRUFBQztLQUFDMEUsVUFBVSxFQUFDLENBQUMsQ0FBQztLQUFDbUQsR0FBRyxFQUFDLFlBQVU7T0FBQyxPQUFPcVksV0FBVyxDQUFDbEIsU0FBUyxDQUFBO01BQUE7SUFBRSxDQUFDLEVBQUN2ZSxjQUEyQixDQUFDO0dBQUMyZixpQkFBaUIsSUFBRXRnQixNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFDLGdCQUFnQixFQUFDO0tBQUMwRSxVQUFVLEVBQUMsQ0FBQyxDQUFDO0tBQUNtRCxHQUFHLEVBQUMsWUFBVTtPQUFDLE9BQU9zWSxnQkFBZ0IsQ0FBQ2pCLGNBQWMsQ0FBQTtNQUFBO0lBQUUsQ0FBQyxFQUFDemUsZUFBNEIsQ0FBQztHQUFDNGYsZ0JBQWdCLElBQUV2Z0IsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQztLQUFDMEUsVUFBVSxFQUFDLENBQUMsQ0FBQztLQUFDbUQsR0FBRyxFQUFDLFlBQVU7T0FBQyxPQUFPdVksaUJBQWlCLENBQUNWLGVBQWUsQ0FBQTtNQUFBO0FBQUMsSUFBQyxDQUFDLEVBQUNqZixjQUEyQixDQUFDLENBQUE7QUFBQ1gsQ0FBQUEsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQztHQUFDMEUsVUFBVSxFQUFDLENBQUMsQ0FBQztHQUFDbUQsR0FBRyxFQUFDLFlBQVU7S0FBQyxPQUFPd1ksZ0JBQWdCLENBQUNSLGNBQWMsQ0FBQTtJQUFBO0FBQUMsRUFBQyxDQUFDLENBQUE7Ozs7O0NDQTE3QixJQUFJUyxTQUFTLEdBQUMsWUFBVTtBQUFDLEtBQUEsSUFBSTlKLENBQUMsR0FBQyxVQUFTcEIsQ0FBQyxFQUFDdlIsQ0FBQyxFQUFDO0FBQUMsT0FBQSxPQUFNLENBQUMyUyxDQUFDLEdBQUMxVyxNQUFNLENBQUN5Z0IsY0FBYyxLQUFHO1NBQUNDLFNBQVMsRUFBQyxFQUFBO0FBQUUsUUFBQyxZQUFXOUgsS0FBSyxHQUFDLFVBQVN0RCxDQUFDLEVBQUN2UixDQUFDLEVBQUM7U0FBQ3VSLENBQUMsQ0FBQ29MLFNBQVMsR0FBQzNjLENBQUMsQ0FBQTtBQUFBLFFBQUMsR0FBQyxVQUFTdVIsQ0FBQyxFQUFDdlIsQ0FBQyxFQUFDO1NBQUMsS0FBSSxJQUFJekMsQ0FBQyxJQUFJeUMsQ0FBQyxFQUFDL0QsTUFBTSxDQUFDOEksU0FBUyxDQUFDdUQsY0FBYyxDQUFDQyxJQUFJLENBQUN2SSxDQUFDLEVBQUN6QyxDQUFDLENBQUMsS0FBR2dVLENBQUMsQ0FBQ2hVLENBQUMsQ0FBQyxHQUFDeUMsQ0FBQyxDQUFDekMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUFBLFFBQUMsQ0FBQyxFQUFFZ1UsQ0FBQyxFQUFDdlIsQ0FBQyxDQUFDLENBQUE7TUFBQyxDQUFBO0FBQUMsS0FBQSxPQUFPLFVBQVN1UixDQUFDLEVBQUN2UixDQUFDLEVBQUM7T0FBQyxJQUFHLFVBQVUsSUFBRSxPQUFPQSxDQUFDLElBQUUsSUFBSSxLQUFHQSxDQUFDLEVBQUMsTUFBTSxJQUFJdUosU0FBUyxDQUFDLHNCQUFzQixHQUFDcVQsTUFBTSxDQUFDNWMsQ0FBQyxDQUFDLEdBQUMsK0JBQStCLENBQUMsQ0FBQTtPQUFDLFNBQVN6QyxDQUFDQSxHQUFFO1NBQUMsSUFBSSxDQUFDdUgsV0FBVyxHQUFDeU0sQ0FBQyxDQUFBO1FBQUE7QUFBQ29CLE9BQUFBLENBQUMsQ0FBQ3BCLENBQUMsRUFBQ3ZSLENBQUMsQ0FBQyxFQUFDdVIsQ0FBQyxDQUFDeE0sU0FBUyxHQUFDLElBQUksS0FBRy9FLENBQUMsR0FBQy9ELE1BQU0sQ0FBQ3llLE1BQU0sQ0FBQzFhLENBQUMsQ0FBQyxJQUFFekMsQ0FBQyxDQUFDd0gsU0FBUyxHQUFDL0UsQ0FBQyxDQUFDK0UsU0FBUyxFQUFDLElBQUl4SCxDQUFDLEVBQUMsQ0FBQSxDQUFBO01BQUMsQ0FBQTtBQUFBLElBQUMsRUFBRTtHQUFDOFQsUUFBUSxHQUFDLFlBQVU7S0FBQyxPQUFNLENBQUNBLFFBQVEsR0FBQ3BWLE1BQU0sQ0FBQzJPLE1BQU0sSUFBRSxVQUFTMkcsQ0FBQyxFQUFDO09BQUMsS0FBSSxJQUFJdlIsQ0FBQyxFQUFDekMsQ0FBQyxHQUFDLENBQUMsRUFBQ29WLENBQUMsR0FBQy9VLFNBQVMsQ0FBQ1IsTUFBTSxFQUFDRyxDQUFDLEdBQUNvVixDQUFDLEVBQUNwVixDQUFDLEVBQUUsRUFBQyxLQUFJLElBQUkrVCxDQUFDLElBQUl0UixDQUFDLEdBQUNwQyxTQUFTLENBQUNMLENBQUMsQ0FBQyxFQUFDdEIsTUFBTSxDQUFDOEksU0FBUyxDQUFDdUQsY0FBYyxDQUFDQyxJQUFJLENBQUN2SSxDQUFDLEVBQUNzUixDQUFDLENBQUMsS0FBR0MsQ0FBQyxDQUFDRCxDQUFDLENBQUMsR0FBQ3RSLENBQUMsQ0FBQ3NSLENBQUMsQ0FBQyxDQUFDLENBQUE7T0FBQyxPQUFPQyxDQUFDLENBQUE7QUFBQSxNQUFDLEVBQUU1TCxLQUFLLENBQUMsSUFBSSxFQUFDL0gsU0FBUyxDQUFDLENBQUE7SUFBQztBQUFDNmMsR0FBQUEsZUFBZSxHQUFDeGUsTUFBTSxDQUFDeWUsTUFBTSxHQUFDLFVBQVNuSixDQUFDLEVBQUN2UixDQUFDLEVBQUN6QyxDQUFDLEVBQUNvVixDQUFDLEVBQUM7S0FBQyxLQUFLLENBQUMsS0FBR0EsQ0FBQyxLQUFHQSxDQUFDLEdBQUNwVixDQUFDLENBQUMsQ0FBQTtLQUFDLElBQUkrVCxDQUFDLEdBQUNyVixNQUFNLENBQUN5Six3QkFBd0IsQ0FBQzFGLENBQUMsRUFBQ3pDLENBQUMsQ0FBQyxDQUFBO0tBQUMrVCxDQUFDLEtBQUcsS0FBSyxJQUFHQSxDQUFDLEdBQUN0UixDQUFDLENBQUM2SSxVQUFVLEdBQUMsQ0FBQ3lJLENBQUMsQ0FBQ3ZRLFFBQVEsSUFBRSxDQUFDdVEsQ0FBQyxDQUFDeFEsWUFBWSxDQUFDLEtBQUd3USxDQUFDLEdBQUM7T0FBQ3pRLFVBQVUsRUFBQyxDQUFDLENBQUM7T0FBQ21ELEdBQUcsRUFBQyxZQUFVO1NBQUMsT0FBT2hFLENBQUMsQ0FBQ3pDLENBQUMsQ0FBQyxDQUFBO1FBQUE7TUFBRSxDQUFDLEVBQUN0QixNQUFNLENBQUNDLGNBQWMsQ0FBQ3FWLENBQUMsRUFBQ29CLENBQUMsRUFBQ3JCLENBQUMsQ0FBQyxDQUFBO0lBQUMsR0FBQyxVQUFTQyxDQUFDLEVBQUN2UixDQUFDLEVBQUN6QyxDQUFDLEVBQUNvVixDQUFDLEVBQUM7QUFBQ3BCLEtBQUFBLENBQUMsQ0FBQ29CLENBQUMsR0FBQyxLQUFLLENBQUMsS0FBR0EsQ0FBQyxHQUFDcFYsQ0FBQyxHQUFDb1YsQ0FBQyxDQUFDLEdBQUMzUyxDQUFDLENBQUN6QyxDQUFDLENBQUMsQ0FBQTtJQUFDO0dBQUNzZixrQkFBa0IsR0FBQzVnQixNQUFNLENBQUN5ZSxNQUFNLEdBQUMsVUFBU25KLENBQUMsRUFBQ3ZSLENBQUMsRUFBQztBQUFDL0QsS0FBQUEsTUFBTSxDQUFDQyxjQUFjLENBQUNxVixDQUFDLEVBQUMsU0FBUyxFQUFDO09BQUMxUSxVQUFVLEVBQUMsQ0FBQyxDQUFDO09BQUN6RSxLQUFLLEVBQUM0RCxDQUFBQTtBQUFDLE1BQUMsQ0FBQyxDQUFBO0FBQUEsSUFBQyxHQUFDLFVBQVN1UixDQUFDLEVBQUN2UixDQUFDLEVBQUM7S0FBQ3VSLENBQUMsQ0FBQ3NKLE9BQU8sR0FBQzdhLENBQUMsQ0FBQTtJQUFDO0FBQUM4YyxHQUFBQSxZQUFZLEdBQUMsVUFBU3ZMLENBQUMsRUFBQztLQUFDLElBQUdBLENBQUMsSUFBRUEsQ0FBQyxDQUFDMUksVUFBVSxFQUFDLE9BQU8wSSxDQUFDLENBQUE7S0FBQyxJQUFJdlIsQ0FBQyxHQUFDLEVBQUUsQ0FBQTtBQUFDLEtBQUEsSUFBRyxJQUFJLElBQUV1UixDQUFDLEVBQUMsS0FBSSxJQUFJaFUsQ0FBQyxJQUFJZ1UsQ0FBQyxFQUFDLFNBQVMsS0FBR2hVLENBQUMsSUFBRXRCLE1BQU0sQ0FBQzhJLFNBQVMsQ0FBQ3VELGNBQWMsQ0FBQ0MsSUFBSSxDQUFDZ0osQ0FBQyxFQUFDaFUsQ0FBQyxDQUFDLElBQUVrZCxlQUFlLENBQUN6YSxDQUFDLEVBQUN1UixDQUFDLEVBQUNoVSxDQUFDLENBQUMsQ0FBQTtLQUFDLE9BQU9zZixrQkFBa0IsQ0FBQzdjLENBQUMsRUFBQ3VSLENBQUMsQ0FBQyxFQUFDdlIsQ0FBQyxDQUFBO0lBQUM7QUFBQzJhLEdBQUFBLFlBQVksR0FBQyxVQUFTcEosQ0FBQyxFQUFDdlIsQ0FBQyxFQUFDO0FBQUMsS0FBQSxLQUFJLElBQUl6QyxDQUFDLElBQUlnVSxDQUFDLEVBQUMsU0FBUyxLQUFHaFUsQ0FBQyxJQUFFdEIsTUFBTSxDQUFDOEksU0FBUyxDQUFDdUQsY0FBYyxDQUFDQyxJQUFJLENBQUN2SSxDQUFDLEVBQUN6QyxDQUFDLENBQUMsSUFBRWtkLGVBQWUsQ0FBQ3phLENBQUMsRUFBQ3VSLENBQUMsRUFBQ2hVLENBQUMsQ0FBQyxDQUFBO0lBQUM7R0FBQ3dmLFNBQVMsR0FBQyxVQUFTeEwsQ0FBQyxFQUFDa0MsQ0FBQyxFQUFDakMsQ0FBQyxFQUFDaUcsQ0FBQyxFQUFDO0tBQUMsT0FBTyxLQUFJakcsQ0FBQyxHQUFDQSxDQUFDLElBQUV3TCxPQUFPLEVBQUUsVUFBU3pmLENBQUMsRUFBQ3lDLENBQUMsRUFBQztPQUFDLFNBQVMyUyxDQUFDQSxDQUFDcEIsQ0FBQyxFQUFDO1NBQUMsSUFBRztXQUFDRSxDQUFDLENBQUNnRyxDQUFDLENBQUN3RixJQUFJLENBQUMxTCxDQUFDLENBQUMsQ0FBQyxDQUFBO1VBQUMsQ0FBQSxPQUFNQSxDQUFDLEVBQUM7V0FBQ3ZSLENBQUMsQ0FBQ3VSLENBQUMsQ0FBQyxDQUFBO1VBQUE7UUFBQztPQUFDLFNBQVNELENBQUNBLENBQUNDLENBQUMsRUFBQztTQUFDLElBQUc7V0FBQ0UsQ0FBQyxDQUFDZ0csQ0FBQyxDQUFDeUYsS0FBSyxDQUFDM0wsQ0FBQyxDQUFDLENBQUMsQ0FBQTtVQUFDLENBQUEsT0FBTUEsQ0FBQyxFQUFDO1dBQUN2UixDQUFDLENBQUN1UixDQUFDLENBQUMsQ0FBQTtVQUFBO1FBQUM7T0FBQyxTQUFTRSxDQUFDQSxDQUFDRixDQUFDLEVBQUM7U0FBQyxJQUFJdlIsQ0FBQyxDQUFBO1NBQUN1UixDQUFDLENBQUM0TCxJQUFJLEdBQUM1ZixDQUFDLENBQUNnVSxDQUFDLENBQUNuVixLQUFLLENBQUMsR0FBQyxDQUFDLENBQUM0RCxDQUFDLEdBQUN1UixDQUFDLENBQUNuVixLQUFLLGFBQVlvVixDQUFDLEdBQUN4UixDQUFDLEdBQUMsSUFBSXdSLENBQUMsQ0FBQyxVQUFTRCxDQUFDLEVBQUM7V0FBQ0EsQ0FBQyxDQUFDdlIsQ0FBQyxDQUFDLENBQUE7VUFBQyxDQUFDLEVBQUVvZCxJQUFJLENBQUN6SyxDQUFDLEVBQUNyQixDQUFDLENBQUMsQ0FBQTtRQUFBO0FBQUNHLE9BQUFBLENBQUMsQ0FBQyxDQUFDZ0csQ0FBQyxHQUFDQSxDQUFDLENBQUM5UixLQUFLLENBQUM0TCxDQUFDLEVBQUNrQyxDQUFDLElBQUUsRUFBRSxDQUFDLEVBQUV3SixJQUFJLEVBQUUsQ0FBQyxDQUFBO0FBQUEsTUFBQyxDQUFDLENBQUE7SUFBQztBQUFDSSxHQUFBQSxXQUFXLEdBQUMsVUFBUzFLLENBQUMsRUFBQ3JCLENBQUMsRUFBQztBQUFDLEtBQUEsSUFBSUcsQ0FBQztPQUFDZ0MsQ0FBQztPQUFDakMsQ0FBQztBQUFDaUcsT0FBQUEsQ0FBQyxHQUFDO1NBQUM2RixLQUFLLEVBQUMsQ0FBQztTQUFDQyxJQUFJLEVBQUMsWUFBVTtXQUFDLElBQUcsQ0FBQyxHQUFDL0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLE1BQU1BLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtXQUFDLE9BQU9BLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtVQUFDO1NBQUNnTSxJQUFJLEVBQUMsRUFBRTtTQUFDQyxHQUFHLEVBQUMsRUFBQTtRQUFHO0FBQUNsTSxPQUFBQSxDQUFDLEdBQUM7QUFBQzBMLFNBQUFBLElBQUksRUFBQ2pkLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFBQ2tkLFNBQUFBLEtBQUssRUFBQ2xkLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FBQzBkLE1BQU0sRUFBQzFkLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFBRSxDQUFBO0FBQUMsS0FBQSxPQUFNLFVBQVUsSUFBRSxPQUFPNEUsTUFBTSxLQUFHMk0sQ0FBQyxDQUFDM00sTUFBTSxDQUFDQyxRQUFRLENBQUMsR0FBQyxZQUFVO09BQUMsT0FBTyxJQUFJLENBQUE7TUFBQyxDQUFDLEVBQUMwTSxDQUFDLENBQUE7S0FBQyxTQUFTdlIsQ0FBQ0EsQ0FBQ3pDLENBQUMsRUFBQztPQUFDLE9BQU8sVUFBU2dVLENBQUMsRUFBQztTQUFDLElBQUl2UixDQUFDLEdBQUMsQ0FBQ3pDLENBQUMsRUFBQ2dVLENBQUMsQ0FBQyxDQUFBO1NBQUMsSUFBR0UsQ0FBQyxFQUFDLE1BQU0sSUFBSWxJLFNBQVMsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFBO1NBQUMsT0FBS2tPLENBQUMsR0FBRSxJQUFHO0FBQUMsV0FBQSxJQUFHaEcsQ0FBQyxHQUFDLENBQUMsRUFBQ2dDLENBQUMsS0FBR2pDLENBQUMsR0FBQyxDQUFDLEdBQUN4UixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUN5VCxDQUFDLENBQUNpSyxNQUFNLEdBQUMxZCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUN5VCxDQUFDLENBQUN5SixLQUFLLEtBQUcsQ0FBQzFMLENBQUMsR0FBQ2lDLENBQUMsQ0FBQ2lLLE1BQU0sS0FBR2xNLENBQUMsQ0FBQ2pKLElBQUksQ0FBQ2tMLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFDQSxDQUFDLENBQUN3SixJQUFJLENBQUMsSUFBRSxDQUFDLENBQUN6TCxDQUFDLEdBQUNBLENBQUMsQ0FBQ2pKLElBQUksQ0FBQ2tMLENBQUMsRUFBQ3pULENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFbWQsSUFBSSxFQUFDLE9BQU8zTCxDQUFDLENBQUE7V0FBQyxRQUFPaUMsQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDelQsQ0FBQyxHQUFDd1IsQ0FBQyxHQUFDLENBQUMsQ0FBQyxHQUFDeFIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDd1IsQ0FBQyxDQUFDcFYsS0FBSyxDQUFDLEdBQUM0RCxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQUUsS0FBSyxDQUFDLENBQUE7QUFBQyxhQUFBLEtBQUssQ0FBQztlQUFDd1IsQ0FBQyxHQUFDeFIsQ0FBQyxDQUFBO0FBQUMsZUFBQSxNQUFBO0FBQU0sYUFBQSxLQUFLLENBQUM7QUFBQyxlQUFBLE9BQU95WCxDQUFDLENBQUM2RixLQUFLLEVBQUUsRUFBQztBQUFDbGhCLGlCQUFBQSxLQUFLLEVBQUM0RCxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUFDbWQsSUFBSSxFQUFDLENBQUMsQ0FBQTtnQkFBRSxDQUFBO0FBQUMsYUFBQSxLQUFLLENBQUM7QUFBQzFGLGVBQUFBLENBQUMsQ0FBQzZGLEtBQUssRUFBRSxFQUFDN0osQ0FBQyxHQUFDelQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDQSxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUFDLGVBQUEsU0FBQTtBQUFTLGFBQUEsS0FBSyxDQUFDO0FBQUNBLGVBQUFBLENBQUMsR0FBQ3lYLENBQUMsQ0FBQ2dHLEdBQUcsQ0FBQ0UsR0FBRyxFQUFFLEVBQUNsRyxDQUFDLENBQUMrRixJQUFJLENBQUNHLEdBQUcsRUFBRSxDQUFBO0FBQUMsZUFBQSxTQUFBO2FBQVM7QUFBUSxlQUFBLElBQUcsRUFBRW5NLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQ0EsQ0FBQyxHQUFDaUcsQ0FBQyxDQUFDK0YsSUFBSSxFQUFFcGdCLE1BQU0sSUFBRW9VLENBQUMsQ0FBQ0EsQ0FBQyxDQUFDcFUsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUcsQ0FBQyxLQUFHNEMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFFLENBQUMsS0FBR0EsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUM7aUJBQUN5WCxDQUFDLEdBQUMsQ0FBQyxDQUFBO0FBQUMsaUJBQUEsU0FBQTtnQkFBUTtBQUFDLGVBQUEsSUFBRyxDQUFDLEtBQUd6WCxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUcsQ0FBQ3dSLENBQUMsSUFBRXhSLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQ3dSLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBRXhSLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQ3dSLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDaUcsQ0FBQyxDQUFDNkYsS0FBSyxHQUFDdGQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBRyxDQUFDLEtBQUdBLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBRXlYLENBQUMsQ0FBQzZGLEtBQUssR0FBQzlMLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQ2lHLENBQUMsQ0FBQzZGLEtBQUssR0FBQzlMLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQ0EsQ0FBQyxHQUFDeFIsQ0FBQyxDQUFDLEtBQUk7QUFBQyxpQkFBQSxJQUFHLEVBQUV3UixDQUFDLElBQUVpRyxDQUFDLENBQUM2RixLQUFLLEdBQUM5TCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQztBQUFDQSxtQkFBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFFaUcsQ0FBQyxDQUFDZ0csR0FBRyxDQUFDRSxHQUFHLEVBQUUsRUFBQ2xHLENBQUMsQ0FBQytGLElBQUksQ0FBQ0csR0FBRyxFQUFFLENBQUE7QUFBQyxtQkFBQSxTQUFBO2tCQUFRO0FBQUNsRyxpQkFBQUEsQ0FBQyxDQUFDNkYsS0FBSyxHQUFDOUwsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDaUcsQ0FBQyxDQUFDZ0csR0FBRyxDQUFDamQsSUFBSSxDQUFDUixDQUFDLENBQUMsQ0FBQTtnQkFBQTtZQUFDO1dBQUNBLENBQUMsR0FBQ3NSLENBQUMsQ0FBQy9JLElBQUksQ0FBQ29LLENBQUMsRUFBQzhFLENBQUMsQ0FBQyxDQUFBO1VBQUMsQ0FBQSxPQUFNbEcsQ0FBQyxFQUFDO1dBQUN2UixDQUFDLEdBQUMsQ0FBQyxDQUFDLEVBQUN1UixDQUFDLENBQUMsRUFBQ2tDLENBQUMsR0FBQyxDQUFDLENBQUE7QUFBQSxVQUFDLFNBQU87V0FBQ2hDLENBQUMsR0FBQ0QsQ0FBQyxHQUFDLENBQUMsQ0FBQTtVQUFBO1NBQUMsSUFBRyxDQUFDLEdBQUN4UixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsTUFBTUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1NBQUMsT0FBTTtBQUFDNUQsV0FBQUEsS0FBSyxFQUFDNEQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsS0FBSyxDQUFDO1dBQUNtZCxJQUFJLEVBQUMsQ0FBQyxDQUFBO1VBQUUsQ0FBQTtRQUFDLENBQUE7TUFBQTtJQUFFO0FBQUN2QyxHQUFBQSxlQUFlLEdBQUMsVUFBU3JKLENBQUMsRUFBQztLQUFDLE9BQU9BLENBQUMsSUFBRUEsQ0FBQyxDQUFDMUksVUFBVSxHQUFDMEksQ0FBQyxHQUFDO09BQUNzSixPQUFPLEVBQUN0SixDQUFBQTtNQUFFLENBQUE7SUFBQztHQUFDdUosT0FBTyxJQUFFN2UsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sRUFBQyxZQUFZLEVBQUM7S0FBQ0MsS0FBSyxFQUFDLENBQUMsQ0FBQTtJQUFFLENBQUMsRUFBQ3dlLGVBQWUsQ0FBQ2hlLFFBQVEsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUFDZ2hCLEdBQUFBLGVBQWUsR0FBQ2hELGVBQWUsQ0FBQ2hlLEdBQXdCLENBQUM7R0FBQ2loQixjQUFjLEdBQUNqaEIsWUFBeUI7QUFBQ2toQixHQUFBQSxLQUFLLEdBQUNoQixZQUFZLENBQUNsZ0IsS0FBa0IsQ0FBQztBQUFDd0wsR0FBQUEsS0FBSyxHQUFDMFUsWUFBWSxDQUFDbGdCLEtBQWtCLENBQUM7R0FBQ3FTLE9BQU8sR0FBQ3JTLEtBQWtCO0dBQUNtaEIsYUFBYSxJQUFFcEQsWUFBWSxDQUFDL2QsS0FBa0IsRUFBQ1QsT0FBTyxDQUFDLEVBQUMsVUFBUzZELENBQUMsRUFBQztLQUFDLFNBQVN1UixDQUFDQSxDQUFDQSxDQUFDLEVBQUM7T0FBQyxJQUFJRSxDQUFDLEdBQUN6UixDQUFDLENBQUN1SSxJQUFJLENBQUMsSUFBSSxFQUFDZ0osQ0FBQyxDQUFDLElBQUUsSUFBSSxDQUFBO0FBQUMsT0FBQSxPQUFPRSxDQUFDLENBQUN1TSxhQUFhLEdBQUMsSUFBSSxFQUFDdk0sQ0FBQyxDQUFDd00scUJBQXFCLEdBQUMsVUFBUzFNLENBQUMsRUFBQztTQUFDLFFBQU9BLENBQUMsQ0FBQzJNLElBQUk7QUFBRSxXQUFBLEtBQUksT0FBTzthQUFDLE9BQU96TSxDQUFDLENBQUNuTCxLQUFLLENBQUNrSixRQUFRLElBQUVpQyxDQUFDLENBQUMwTSxzQkFBc0IsRUFBRSxDQUFBO0FBQUMsV0FBQSxLQUFJLFdBQVc7QUFBQyxhQUFBLE9BQU8xTSxDQUFDLENBQUMyTSxTQUFTLENBQUM3TSxDQUFDLENBQUMsQ0FBQTtBQUFDLFdBQUEsS0FBSSxZQUFZO0FBQUMsYUFBQSxPQUFPRSxDQUFDLENBQUM0TSxTQUFTLENBQUM5TSxDQUFDLENBQUMsQ0FBQTtVQUFBO0FBQUMsUUFBQyxFQUFDRSxDQUFDLENBQUM2TSxxQkFBcUIsR0FBQyxVQUFTaE4sQ0FBQyxFQUFDO1NBQUMsT0FBT3lMLFNBQVMsQ0FBQ3RMLENBQUMsRUFBQyxLQUFLLENBQUMsRUFBQyxLQUFLLENBQUMsRUFBQyxZQUFVO0FBQUMsV0FBQSxJQUFJelIsQ0FBQyxFQUFDekMsQ0FBQyxFQUFDb1YsQ0FBQyxDQUFBO0FBQUMsV0FBQSxPQUFPMEssV0FBVyxDQUFDLElBQUksRUFBQyxVQUFTOUwsQ0FBQyxFQUFDO2FBQUMsUUFBT0EsQ0FBQyxDQUFDK0wsS0FBSztBQUFFLGVBQUEsS0FBSyxDQUFDO0FBQUMsaUJBQUEsT0FBTSxDQUFDL2YsQ0FBQyxHQUFDLElBQUksQ0FBQ2lGLEtBQUssRUFBQ21RLENBQUMsR0FBQ3BWLENBQUMsQ0FBQzJSLFdBQVcsRUFBQ2xQLENBQUMsR0FBQ3pDLENBQUMsQ0FBQzJVLFVBQVUsRUFBQzNVLENBQUMsR0FBQ0EsQ0FBQyxDQUFDb1osMEJBQTBCLEVBQUN2TyxLQUFLLENBQUNnSywyQkFBMkIsQ0FBQ08sQ0FBQyxFQUFDM1MsQ0FBQyxDQUFDLEtBQUcyUyxDQUFDLEdBQUN2SyxLQUFLLENBQUMrSiwyQkFBMkIsQ0FBQ1EsQ0FBQyxFQUFDM1MsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDdWUsMEJBQTBCLENBQUM1TCxDQUFDLENBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFBO0FBQUMsZUFBQSxLQUFLLENBQUM7aUJBQUMsT0FBT3BCLENBQUMsQ0FBQ2dNLElBQUksRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFBO0FBQUMsZUFBQSxLQUFLLENBQUM7aUJBQUMsT0FBT2hnQixDQUFDLEdBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDaWhCLFFBQVEsQ0FBQzttQkFBQy9ILHFCQUFxQixFQUFDLElBQUk7bUJBQUNDLHdCQUF3QixFQUFDLElBQUk7bUJBQUNDLDBCQUEwQixFQUFDLENBQUMsQ0FBQTtrQkFBRSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQTtBQUFDLGVBQUEsS0FBSyxDQUFDO2lCQUFDcEYsQ0FBQyxDQUFDZ00sSUFBSSxFQUFFLEVBQUNoTSxDQUFDLENBQUMrTCxLQUFLLEdBQUMsQ0FBQyxDQUFBO0FBQUMsZUFBQSxLQUFLLENBQUM7aUJBQUMsT0FBTyxJQUFJLENBQUNtQixtQkFBbUIsQ0FBQ25OLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7Y0FBQTtBQUFDLFlBQUMsQ0FBQyxDQUFBO0FBQUEsVUFBQyxDQUFDLENBQUE7QUFBQSxRQUFDLEVBQUNHLENBQUMsQ0FBQ2lOLGlCQUFpQixHQUFDLFlBQVU7U0FBQyxJQUFJbk4sQ0FBQyxHQUFDRSxDQUFDLENBQUNuTCxLQUFLLENBQUNzSixnQkFBZ0IsQ0FBQTtTQUFDeEgsS0FBSyxDQUFDb1MsMkJBQTJCLENBQUNqSixDQUFDLENBQUMsSUFBRUUsQ0FBQyxDQUFDalAsS0FBSyxDQUFDOFYsYUFBYSxLQUFHN0csQ0FBQyxDQUFDa04sU0FBUyxHQUFDLENBQUMsQ0FBQyxFQUFDbE4sQ0FBQyxDQUFDbU4sWUFBWSxFQUFFLENBQUMsQ0FBQTtBQUFBLFFBQUMsRUFBQ25OLENBQUMsQ0FBQ29OLGlCQUFpQixHQUFDLFlBQVU7QUFBQ3BOLFNBQUFBLENBQUMsQ0FBQ2pQLEtBQUssQ0FBQzhWLGFBQWEsS0FBRzdHLENBQUMsQ0FBQ2tOLFNBQVMsR0FBQyxDQUFDLENBQUMsRUFBQ2xOLENBQUMsQ0FBQ3FOLFdBQVcsRUFBRSxDQUFDLENBQUE7QUFBQSxRQUFDLEVBQUNyTixDQUFDLENBQUNtTixZQUFZLEdBQUMsWUFBVTtTQUFDbk4sQ0FBQyxDQUFDc04scUJBQXFCLEVBQUUsQ0FBQTtBQUFBLFFBQUMsRUFBQ3ROLENBQUMsQ0FBQzBNLHNCQUFzQixHQUFDLFlBQVU7U0FBQyxPQUFPcEIsU0FBUyxDQUFDdEwsQ0FBQyxFQUFDLEtBQUssQ0FBQyxFQUFDLEtBQUssQ0FBQyxFQUFDLFlBQVU7V0FBQyxJQUFJelIsQ0FBQyxDQUFBO0FBQUMsV0FBQSxPQUFPcWQsV0FBVyxDQUFDLElBQUksRUFBQyxVQUFTOUwsQ0FBQyxFQUFDO2FBQUMsUUFBT0EsQ0FBQyxDQUFDK0wsS0FBSztBQUFFLGVBQUEsS0FBSyxDQUFDO2lCQUFDLE9BQU90ZCxDQUFDLEdBQUMsSUFBSSxDQUFDd0MsS0FBSyxDQUFDOFYsYUFBYSxFQUFDLElBQUksQ0FBQzBHLGFBQWEsR0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUNSLFFBQVEsQ0FBQzttQkFBQ2xHLGFBQWEsRUFBQyxDQUFDdFksQ0FBQzttQkFBQ3VZLDBCQUEwQixFQUFDLENBQUMsQ0FBQTtrQkFBRSxDQUFDLENBQUMsQ0FBQTtBQUFDLGVBQUEsS0FBSyxDQUFDO2lCQUFDLE9BQU9oSCxDQUFDLENBQUNnTSxJQUFJLEVBQUUsRUFBQ3ZkLENBQUMsR0FBQyxJQUFJLENBQUM0ZSxZQUFZLEVBQUUsR0FBQyxJQUFJLENBQUNFLFdBQVcsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7Y0FBQTtBQUFDLFlBQUMsQ0FBQyxDQUFBO0FBQUEsVUFBQyxDQUFDLENBQUE7QUFBQSxRQUFDLEVBQUNyTixDQUFDLENBQUN3TixvQkFBb0IsR0FBQyxVQUFTMU4sQ0FBQyxFQUFDO0FBQUMsU0FBQSxPQUFPRSxDQUFDLENBQUN5TixXQUFXLEdBQUMzTixDQUFDLENBQUE7QUFBQSxRQUFDLEVBQUNFLENBQUMsQ0FBQzBOLHFCQUFxQixHQUFDLFVBQVM1TixDQUFDLEVBQUM7QUFBQyxTQUFBLE9BQU9FLENBQUMsQ0FBQzJOLGNBQWMsR0FBQzdOLENBQUMsQ0FBQTtRQUFDLEVBQUNFLENBQUMsQ0FBQzROLGdCQUFnQixHQUFDLFVBQVM5TixDQUFDLEVBQUN2UixDQUFDLEVBQUM7U0FBQyxJQUFJekMsQ0FBQyxHQUFDNkssS0FBSyxDQUFDb08sd0JBQXdCLENBQUN4VyxDQUFDLEVBQUN5UixDQUFDLENBQUNqUCxLQUFLLENBQUM7V0FBQ21RLENBQUMsR0FBQ3ZLLEtBQUssQ0FBQ3dRLHlCQUF5QixDQUFDNVksQ0FBQyxFQUFDeVIsQ0FBQyxDQUFDalAsS0FBSyxDQUFDLENBQUE7U0FBQyxPQUFPc1ksT0FBTyxDQUFDRCxPQUFPLENBQUNwZixhQUFhLENBQUNxaUIsS0FBSyxDQUFDM0MsU0FBUyxFQUFDO1dBQUNDLE1BQU0sRUFBQzdkLENBQUM7V0FBQzJkLFNBQVMsRUFBQ3ZJLENBQUM7QUFBQzdVLFdBQUFBLEdBQUcsRUFBQyxhQUFhLENBQUMwVyxNQUFNLENBQUN4VSxDQUFDLENBQUM7V0FBQzBaLElBQUksRUFBQ25JLENBQUFBO0FBQUMsVUFBQyxDQUFDLENBQUE7QUFBQSxRQUFDLEVBQUNFLENBQUMsQ0FBQzZOLGdCQUFnQixHQUFDLFlBQVU7QUFBQyxTQUFBLElBQUkvTixDQUFDLEdBQUNFLENBQUMsQ0FBQ25MLEtBQUssQ0FBQzJVLGVBQWU7V0FBQ2piLENBQUMsR0FBQ3lSLENBQUMsQ0FBQ2pQLEtBQUs7V0FBQ2pGLENBQUMsR0FBQ3lDLENBQUMsQ0FBQ2tQLFdBQVc7V0FBQ2xQLENBQUMsR0FBQ0EsQ0FBQyxDQUFDa1MsVUFBVSxDQUFBO1NBQUMsT0FBTzRJLE9BQU8sQ0FBQ0QsT0FBTyxDQUFDcGYsYUFBYSxDQUFDcWlCLEtBQUssQ0FBQzlDLFNBQVMsRUFBQztXQUFDOUksVUFBVSxFQUFDbFMsQ0FBQztXQUFDa1AsV0FBVyxFQUFDM1IsQ0FBQztXQUFDMGQsZUFBZSxFQUFDMUosQ0FBQUE7QUFBQyxVQUFDLENBQUMsQ0FBQTtRQUFDLEVBQUNFLENBQUMsQ0FBQ2pQLEtBQUssR0FBQzRGLEtBQUssQ0FBQ29QLHFCQUFxQixDQUFDakcsQ0FBQyxFQUFDLElBQUksQ0FBQyxFQUFDRSxDQUFDLENBQUNrTixTQUFTLEdBQUMsQ0FBQyxDQUFDLEVBQUNsTixDQUFDLENBQUM4TixtQkFBbUIsR0FBQyxDQUFDLENBQUMsRUFBQzlOLENBQUMsQ0FBQytOLHlCQUF5QixHQUFDLENBQUMsQ0FBQyxFQUFDL04sQ0FBQyxDQUFDZ08scUJBQXFCLEdBQUMsQ0FBQyxDQUFDLEVBQUNoTyxDQUFDLENBQUN1TixhQUFhLEdBQUMsQ0FBQyxDQUFDLEVBQUN2TixDQUFDLENBQUN5TixXQUFXLEdBQUMsSUFBSSxFQUFDek4sQ0FBQyxDQUFDaU8sdUJBQXVCLEdBQUMsRUFBRSxFQUFDak8sQ0FBQyxDQUFDMk4sY0FBYyxHQUFDLElBQUksRUFBQzNOLENBQUMsQ0FBQ2tPLHNCQUFzQixHQUFDLEtBQUssQ0FBQyxFQUFDbE8sQ0FBQyxDQUFDbU8sT0FBTyxHQUFDbk8sQ0FBQyxDQUFDbU8sT0FBTyxDQUFDN1YsSUFBSSxDQUFDMEgsQ0FBQyxDQUFDLEVBQUNBLENBQUMsQ0FBQzJNLFNBQVMsR0FBQzNNLENBQUMsQ0FBQzJNLFNBQVMsQ0FBQ3JVLElBQUksQ0FBQzBILENBQUMsQ0FBQyxFQUFDQSxDQUFDLENBQUM0TSxTQUFTLEdBQUM1TSxDQUFDLENBQUM0TSxTQUFTLENBQUN0VSxJQUFJLENBQUMwSCxDQUFDLENBQUMsRUFBQ0EsQ0FBQyxDQUFDb08sZ0JBQWdCLEdBQUNwTyxDQUFDLENBQUNvTyxnQkFBZ0IsQ0FBQzlWLElBQUksQ0FBQzBILENBQUMsQ0FBQyxFQUFDQSxDQUFDLENBQUNxTyxlQUFlLEdBQUNyTyxDQUFDLENBQUNxTyxlQUFlLENBQUMvVixJQUFJLENBQUMwSCxDQUFDLENBQUMsRUFBQ0EsQ0FBQyxDQUFDc08sZUFBZSxHQUFDdE8sQ0FBQyxDQUFDc08sZUFBZSxDQUFDaFcsSUFBSSxDQUFDMEgsQ0FBQyxDQUFDLEVBQUNBLENBQUMsQ0FBQ3VPLGFBQWEsR0FBQ3ZPLENBQUMsQ0FBQ3VPLGFBQWEsQ0FBQ2pXLElBQUksQ0FBQzBILENBQUMsQ0FBQyxFQUFDRixDQUFDLEdBQUNuSixLQUFLLENBQUM0USxRQUFRLENBQUN2SCxDQUFDLENBQUN1TyxhQUFhLEVBQUMsR0FBRyxDQUFDLEVBQUN2TyxDQUFDLENBQUN3TyxzQkFBc0IsR0FBQzFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQ0UsQ0FBQyxDQUFDeU8sc0JBQXNCLEdBQUMzTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUNFLENBQUMsQ0FBQTtNQUFBO0FBQUMsS0FBQSxPQUFPZ0wsU0FBUyxDQUFDbEwsQ0FBQyxFQUFDdlIsQ0FBQyxDQUFDLEVBQUN1UixDQUFDLENBQUN4TSxTQUFTLENBQUNvYixpQkFBaUIsR0FBQyxZQUFVO09BQUMsT0FBT3BELFNBQVMsQ0FBQyxJQUFJLEVBQUMsS0FBSyxDQUFDLEVBQUMsS0FBSyxDQUFDLEVBQUMsWUFBVTtBQUFDLFNBQUEsT0FBT00sV0FBVyxDQUFDLElBQUksRUFBQyxVQUFTOUwsQ0FBQyxFQUFDO1dBQUMsUUFBT0EsQ0FBQyxDQUFDK0wsS0FBSztBQUFFLGFBQUEsS0FBSyxDQUFDO2VBQUMsT0FBTSxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUM4QyxnQkFBZ0IsRUFBRSxDQUFDLENBQUE7QUFBQyxhQUFBLEtBQUssQ0FBQztBQUFDLGVBQUEsT0FBTzdPLENBQUMsQ0FBQ2dNLElBQUksRUFBRSxFQUFDLElBQUksQ0FBQzhDLGtCQUFrQixFQUFFLEVBQUMsSUFBSSxDQUFDQyxtQkFBbUIsRUFBRSxFQUFDLElBQUksQ0FBQ2hhLEtBQUssQ0FBQ2tKLFFBQVEsSUFBRSxJQUFJLENBQUNzUCxXQUFXLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQUE7QUFBQyxVQUFDLENBQUMsQ0FBQTtBQUFBLFFBQUMsQ0FBQyxDQUFBO01BQUMsRUFBQ3ZOLENBQUMsQ0FBQ3hNLFNBQVMsQ0FBQ3diLGtCQUFrQixHQUFDLFVBQVNoUCxDQUFDLEVBQUN2UixDQUFDLEVBQUM7QUFBQyxPQUFBLElBQUl6QyxDQUFDLEdBQUMsSUFBSSxDQUFDK0ksS0FBSztTQUFDcU0sQ0FBQyxHQUFDcFYsQ0FBQyxDQUFDMlIsV0FBVztTQUFDb0MsQ0FBQyxHQUFDL1QsQ0FBQyxDQUFDNFIsaUJBQWlCO1NBQUNzQyxDQUFDLEdBQUNsVSxDQUFDLENBQUNnUyxTQUFTO1NBQUNrRSxDQUFDLEdBQUNsVyxDQUFDLENBQUNzUyxRQUFRO1NBQUMyQixDQUFDLEdBQUNqVSxDQUFDLENBQUMyUyxRQUFRO1NBQUN1SCxDQUFDLEdBQUNsYSxDQUFDLENBQUM2UyxLQUFLO1NBQUN3SCxDQUFDLEdBQUNyYSxDQUFDLENBQUNpVCxXQUFXO1NBQUNnRCxDQUFDLEdBQUNqVyxDQUFDLENBQUNrVCxZQUFZO1NBQUNrSCxDQUFDLEdBQUNwYSxDQUFDLENBQUNtVCxVQUFVO1NBQUM4UCxDQUFDLEdBQUNqakIsQ0FBQyxDQUFDcVQsaUJBQWlCO1NBQUNxSCxDQUFDLEdBQUMxYSxDQUFDLENBQUMrUyxhQUFhO1NBQUNvTCxDQUFDLEdBQUNuZSxDQUFDLENBQUNvVCxVQUFVO1NBQUMrRyxDQUFDLEdBQUNuYSxDQUFDLENBQUN1VCxhQUFhO1NBQUN2VCxDQUFDLEdBQUNBLENBQUMsQ0FBQ3dULHNCQUFzQixDQUFBO09BQUMwQyxDQUFDLElBQUVsQyxDQUFDLENBQUMxQixRQUFRLEtBQUc0RCxDQUFDLElBQUVBLENBQUMsR0FBQ3pULENBQUMsQ0FBQ2tQLFdBQVcsRUFBQ2xQLENBQUMsR0FBQ3FSLFFBQVEsQ0FBQ0EsUUFBUSxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMvSyxLQUFLLENBQUMsRUFBQztTQUFDNEksV0FBVyxFQUFDdUUsQ0FBQUE7QUFBQyxRQUFDLENBQUMsRUFBQyxJQUFJLENBQUNnTixnQkFBZ0IsQ0FBQ3pnQixDQUFDLENBQUMsSUFBRXVSLENBQUMsQ0FBQ2hDLFNBQVMsS0FBR2tDLENBQUMsSUFBRUYsQ0FBQyxDQUFDckIsUUFBUSxLQUFHc0IsQ0FBQyxJQUFFRCxDQUFDLENBQUNuQixLQUFLLEtBQUdxSCxDQUFDLElBQUVsRyxDQUFDLENBQUNmLFdBQVcsS0FBR29ILENBQUMsSUFBRXJHLENBQUMsQ0FBQ2QsWUFBWSxLQUFHK0MsQ0FBQyxJQUFFakMsQ0FBQyxDQUFDYixVQUFVLEtBQUdpSCxDQUFDLElBQUVwRyxDQUFDLENBQUNYLGlCQUFpQixLQUFHNFAsQ0FBQyxHQUFDLElBQUksQ0FBQ0MsZ0JBQWdCLEVBQUUsSUFBRWxQLENBQUMsQ0FBQ3BDLGlCQUFpQixLQUFHbUMsQ0FBQyxJQUFFLElBQUksQ0FBQ2tOLFFBQVEsQ0FBQztTQUFDclAsaUJBQWlCLEVBQUNtQyxDQUFBQTtBQUFDLFFBQUMsQ0FBQyxFQUFDQyxDQUFDLENBQUNyQyxXQUFXLEtBQUd5RCxDQUFDLElBQUUsSUFBSSxDQUFDaU4sT0FBTyxDQUFDak4sQ0FBQyxFQUFDMUQsT0FBTyxDQUFDekMsU0FBUyxDQUFDRCxNQUFNLENBQUMsQ0FBQyxFQUFDZ0YsQ0FBQyxDQUFDWixVQUFVLEtBQUcrSyxDQUFDLElBQUVuSyxDQUFDLENBQUNqQixhQUFhLEtBQUcySCxDQUFDLElBQUUxRyxDQUFDLENBQUNULGFBQWEsS0FBRzRHLENBQUMsSUFBRW5HLENBQUMsQ0FBQ1Isc0JBQXNCLEtBQUd4VCxDQUFDLElBQUUsSUFBSSxDQUFDbWpCLGlCQUFpQixFQUFFLEVBQUMsSUFBSSxDQUFDcGEsS0FBSyxDQUFDK0osa0JBQWtCLEtBQUdrQixDQUFDLENBQUNsQixrQkFBa0IsSUFBRSxJQUFJLENBQUNzUSxxQkFBcUIsRUFBRSxDQUFBO0FBQUEsTUFBQyxFQUFDcFAsQ0FBQyxDQUFDeE0sU0FBUyxDQUFDNmIsb0JBQW9CLEdBQUMsWUFBVTtBQUFDLE9BQUEsSUFBSSxDQUFDVixzQkFBc0IsRUFBRSxFQUFDLElBQUksQ0FBQ1csd0JBQXdCLEVBQUUsRUFBQyxJQUFJLENBQUNDLHFCQUFxQixFQUFFLENBQUE7TUFBQyxFQUFDN2tCLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDcVYsQ0FBQyxDQUFDeE0sU0FBUyxFQUFDLGFBQWEsRUFBQztPQUFDZixHQUFHLEVBQUMsWUFBVTtBQUFDLFNBQUEsSUFBSXVOLENBQUMsR0FBQyxJQUFJLENBQUMvTyxLQUFLO1dBQUN4QyxDQUFDLEdBQUN1UixDQUFDLENBQUNxQixZQUFZO1dBQUNyQixDQUFDLEdBQUNBLENBQUMsQ0FBQ3JDLFdBQVc7V0FBQzNSLENBQUMsR0FBQzZLLEtBQUssQ0FBQ3VSLGdCQUFnQixDQUFDLElBQUksQ0FBQ25YLEtBQUssQ0FBQztXQUFDbVEsQ0FBQyxHQUFDcFYsQ0FBQyxDQUFDc2MsbUJBQW1CO1dBQUN0YyxDQUFDLEdBQUNBLENBQUMsQ0FBQ3FjLG1CQUFtQixDQUFBO1NBQUMsT0FBTTtXQUFDRixJQUFJLEVBQUNuSSxDQUFDO1dBQUN3UCxLQUFLLEVBQUMzWSxLQUFLLENBQUNpUixtQkFBbUIsQ0FBQzFHLENBQUMsRUFBQyxJQUFJLENBQUNuUSxLQUFLLENBQUM7V0FBQ29RLFlBQVksRUFBQzVTLENBQUM7V0FBQzZaLG1CQUFtQixFQUFDbEgsQ0FBQztXQUFDaUgsbUJBQW1CLEVBQUNyYyxDQUFDO0FBQUM3QixXQUFBQSxJQUFJLEVBQUN1VCxPQUFPLENBQUN6QyxTQUFTLENBQUNKLE1BQUFBO1VBQU8sQ0FBQTtRQUFDO09BQUN2TCxVQUFVLEVBQUMsQ0FBQyxDQUFDO09BQUNDLFlBQVksRUFBQyxDQUFDLENBQUE7TUFBRSxDQUFDLEVBQUM3RSxNQUFNLENBQUNDLGNBQWMsQ0FBQ3FWLENBQUMsQ0FBQ3hNLFNBQVMsRUFBQywyQkFBMkIsRUFBQztPQUFDZixHQUFHLEVBQUMsWUFBVTtBQUFDLFNBQUEsSUFBSXVOLENBQUMsR0FBQyxJQUFJLENBQUMvTyxLQUFLLENBQUNvUSxZQUFZO1dBQUM1UyxDQUFDLEdBQUMsSUFBSSxDQUFDc0csS0FBSztXQUFDL0ksQ0FBQyxHQUFDeUMsQ0FBQyxDQUFDcVAsYUFBYTtXQUFDc0QsQ0FBQyxHQUFDM1MsQ0FBQyxDQUFDd1EsV0FBVztXQUFDYyxDQUFDLEdBQUN0UixDQUFDLENBQUN5USxZQUFZO1dBQUN6USxDQUFDLEdBQUNBLENBQUMsQ0FBQ3VQLFNBQVMsQ0FBQTtTQUFDLE9BQU8sQ0FBQyxLQUFHZ0MsQ0FBQyxJQUFFaFUsQ0FBQyxLQUFHMFIsT0FBTyxDQUFDdEMsYUFBYSxDQUFDRixPQUFPLElBQUUsRUFBRWtHLENBQUMsSUFBRXJCLENBQUMsSUFBRXRSLENBQUMsQ0FBQyxDQUFBO1FBQUM7T0FBQ2EsVUFBVSxFQUFDLENBQUMsQ0FBQztPQUFDQyxZQUFZLEVBQUMsQ0FBQyxDQUFBO01BQUUsQ0FBQyxFQUFDN0UsTUFBTSxDQUFDQyxjQUFjLENBQUNxVixDQUFDLENBQUN4TSxTQUFTLEVBQUMsbUJBQW1CLEVBQUM7T0FBQ2YsR0FBRyxFQUFDLFlBQVU7QUFBQyxTQUFBLE9BQU8sS0FBSyxDQUFDLEtBQUcsSUFBSSxDQUFDMmIsc0JBQXNCLEdBQUMsSUFBSSxDQUFDQSxzQkFBc0IsR0FBQyxJQUFJLENBQUNuZCxLQUFLLENBQUNrUixXQUFXLENBQUE7UUFBQztPQUFDN1MsVUFBVSxFQUFDLENBQUMsQ0FBQztPQUFDQyxZQUFZLEVBQUMsQ0FBQyxDQUFBO0FBQUMsTUFBQyxDQUFDLEVBQUN5USxDQUFDLENBQUN4TSxTQUFTLENBQUM2YSxPQUFPLEdBQUMsVUFBU3JPLENBQUMsRUFBQ3ZSLENBQUMsRUFBQztBQUFDLE9BQUEsSUFBSXpDLENBQUMsRUFBQ29WLENBQUMsRUFBQ3JCLENBQUMsQ0FBQTtBQUFDLE9BQUEsS0FBSyxDQUFDLEtBQUdDLENBQUMsS0FBR0EsQ0FBQyxHQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ3FOLFlBQVksRUFBRSxFQUFDLElBQUksQ0FBQ29DLHlCQUF5QixJQUFFempCLENBQUMsR0FBQzZLLEtBQUssQ0FBQytKLDJCQUEyQixDQUFDWixDQUFDLEVBQUMsSUFBSSxDQUFDL08sS0FBSyxDQUFDMFAsVUFBVSxDQUFDLEVBQUNTLENBQUMsR0FBQ3ZLLEtBQUssQ0FBQ3dMLDJCQUEyQixDQUFDclcsQ0FBQyxFQUFDLElBQUksQ0FBQ2lGLEtBQUssQ0FBQyxFQUFDOE8sQ0FBQyxHQUFDbEosS0FBSyxDQUFDdUwsd0JBQXdCLENBQUMsSUFBSSxDQUFDblIsS0FBSyxDQUFDLEVBQUMsSUFBSSxDQUFDeWUsY0FBYyxDQUFDO1NBQUMvUixXQUFXLEVBQUMzUixDQUFDO1NBQUNrWixxQkFBcUIsRUFBQ25GLENBQUM7U0FBQ29GLHdCQUF3QixFQUFDL0QsQ0FBQztTQUFDdU8sU0FBUyxFQUFDbGhCLENBQUFBO0FBQUMsUUFBQyxDQUFDLElBQUUsSUFBSSxDQUFDaWhCLGNBQWMsQ0FBQztTQUFDL1IsV0FBVyxFQUFDcUMsQ0FBQztTQUFDMlAsU0FBUyxFQUFDbGhCLENBQUFBO0FBQUMsUUFBQyxDQUFDLENBQUE7TUFBQyxFQUFDdVIsQ0FBQyxDQUFDeE0sU0FBUyxDQUFDcVosU0FBUyxHQUFDLFVBQVM3TSxDQUFDLEVBQUM7QUFBQyxPQUFBLElBQUksQ0FBQ3FOLFlBQVksRUFBRSxFQUFDck4sQ0FBQyxJQUFFQSxDQUFDLENBQUM0UCxTQUFTLEtBQUcsSUFBSSxDQUFDbkMsYUFBYSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFBQyxPQUFBLElBQUloZixDQUFDO1NBQUN6QyxDQUFDO1NBQUNnVSxDQUFDLEdBQUMsSUFBSSxDQUFDL08sS0FBSyxDQUFDME0sV0FBVyxHQUFDLENBQUMsQ0FBQTtPQUFDLElBQUksQ0FBQzhSLHlCQUF5QixJQUFFaGhCLENBQUMsR0FBQyxDQUFDLElBQUksQ0FBQ3dDLEtBQUssQ0FBQ3FSLFVBQVUsRUFBQ3RXLENBQUMsR0FBQzZLLEtBQUssQ0FBQ3VMLHdCQUF3QixDQUFDLElBQUksQ0FBQ25SLEtBQUssQ0FBQyxFQUFDLElBQUksQ0FBQ3llLGNBQWMsQ0FBQztTQUFDL1IsV0FBVyxFQUFDcUMsQ0FBQztTQUFDa0YscUJBQXFCLEVBQUNsWixDQUFDO1NBQUNtWix3QkFBd0IsRUFBQzFXLENBQUFBO0FBQUMsUUFBQyxDQUFDLElBQUUsSUFBSSxDQUFDaWhCLGNBQWMsQ0FBQztTQUFDL1IsV0FBVyxFQUFDcUMsQ0FBQUE7QUFBQyxRQUFDLENBQUMsQ0FBQTtNQUFDLEVBQUNBLENBQUMsQ0FBQ3hNLFNBQVMsQ0FBQ3NaLFNBQVMsR0FBQyxVQUFTOU0sQ0FBQyxFQUFDO0FBQUMsT0FBQSxJQUFJLENBQUNxTixZQUFZLEVBQUUsRUFBQ3JOLENBQUMsSUFBRUEsQ0FBQyxDQUFDNFAsU0FBUyxLQUFHLElBQUksQ0FBQ25DLGFBQWEsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQUMsT0FBQSxJQUFJaGYsQ0FBQztTQUFDekMsQ0FBQztTQUFDZ1UsQ0FBQyxHQUFDLElBQUksQ0FBQy9PLEtBQUssQ0FBQzBNLFdBQVcsR0FBQyxDQUFDLENBQUE7T0FBQyxJQUFJLENBQUM4Uix5QkFBeUIsSUFBRWhoQixDQUFDLEdBQUMsSUFBSSxDQUFDd0MsS0FBSyxDQUFDcVIsVUFBVSxFQUFDdFcsQ0FBQyxHQUFDNkssS0FBSyxDQUFDdUwsd0JBQXdCLENBQUMsSUFBSSxDQUFDblIsS0FBSyxDQUFDLEVBQUMsSUFBSSxDQUFDeWUsY0FBYyxDQUFDO1NBQUMvUixXQUFXLEVBQUNxQyxDQUFDO1NBQUNrRixxQkFBcUIsRUFBQ2xaLENBQUM7U0FBQ21aLHdCQUF3QixFQUFDMVcsQ0FBQUE7QUFBQyxRQUFDLENBQUMsSUFBRSxJQUFJLENBQUNpaEIsY0FBYyxDQUFDO1NBQUMvUixXQUFXLEVBQUNxQyxDQUFBQTtBQUFDLFFBQUMsQ0FBQyxDQUFBO0FBQUEsTUFBQyxFQUFDQSxDQUFDLENBQUN4TSxTQUFTLENBQUNzYixrQkFBa0IsR0FBQyxZQUFVO09BQUNoYyxNQUFNLENBQUNDLGdCQUFnQixDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMyYixzQkFBc0IsQ0FBQyxFQUFDLElBQUksQ0FBQzNaLEtBQUssQ0FBQytKLGtCQUFrQixJQUFFaE0sTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDMloscUJBQXFCLENBQUMsQ0FBQTtBQUFBLE1BQUMsRUFBQzFNLENBQUMsQ0FBQ3hNLFNBQVMsQ0FBQytiLHFCQUFxQixHQUFDLFlBQVU7QUFBQyxPQUFBLElBQUksQ0FBQzlDLGFBQWEsSUFBRSxJQUFJLENBQUNBLGFBQWEsQ0FBQ25ULE9BQU8sRUFBRSxFQUFDeEcsTUFBTSxDQUFDRyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDeWIsc0JBQXNCLENBQUMsRUFBQzViLE1BQU0sQ0FBQ0csbUJBQW1CLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQ3laLHFCQUFxQixDQUFDLENBQUE7QUFBQSxNQUFDLEVBQUMxTSxDQUFDLENBQUN4TSxTQUFTLENBQUM0YixxQkFBcUIsR0FBQyxZQUFVO09BQUMsSUFBSSxDQUFDcmEsS0FBSyxDQUFDK0osa0JBQWtCLEdBQUNoTSxNQUFNLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMyWixxQkFBcUIsQ0FBQyxHQUFDNVosTUFBTSxDQUFDRyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDeVoscUJBQXFCLENBQUMsQ0FBQTtNQUFDLEVBQUMxTSxDQUFDLENBQUN4TSxTQUFTLENBQUNpYixhQUFhLEdBQUMsVUFBUzFPLENBQUMsRUFBQztPQUFDLE9BQU95TCxTQUFTLENBQUMsSUFBSSxFQUFDLEtBQUssQ0FBQyxFQUFDLEtBQUssQ0FBQyxFQUFDLFlBQVU7QUFBQyxTQUFBLElBQUkvYyxDQUFDLEVBQUN6QyxDQUFDLEVBQUNvVixDQUFDLENBQUE7QUFBQyxTQUFBLE9BQU8wSyxXQUFXLENBQUMsSUFBSSxFQUFDLFVBQVM5TCxDQUFDLEVBQUM7V0FBQyxRQUFPQSxDQUFDLENBQUMrTCxLQUFLO0FBQUUsYUFBQSxLQUFLLENBQUM7ZUFBQyxPQUFNLENBQUMvZixDQUFDLEdBQUMsSUFBSSxDQUFDK0ksS0FBSyxDQUFDNEssYUFBYSxFQUFDeUIsQ0FBQyxHQUFDdkssS0FBSyxDQUFDNE0sb0JBQW9CLENBQUMsSUFBSSxDQUFDa0ssV0FBVyxDQUFDLEVBQUMsQ0FBQzNoQixDQUFDLElBQUU2SyxLQUFLLENBQUM2Tix1QkFBdUIsRUFBRTNFLENBQUMsRUFBQyxJQUFJLENBQUNvTyx1QkFBdUIsRUFBQy9NLENBQUMsQ0FBQyxLQUFHLElBQUksQ0FBQ2tPLHdCQUF3QixFQUFFLEVBQUMsSUFBSSxDQUFDbkIsdUJBQXVCLEdBQUMvTSxDQUFDLEVBQUNwVixDQUFDLEdBQUMsSUFBSSxDQUFDaUYsS0FBSyxFQUFDbVEsQ0FBQyxHQUFDcFYsQ0FBQyxDQUFDMlUsVUFBVSxFQUFDbFMsQ0FBQyxHQUFDekMsQ0FBQyxDQUFDK2EsYUFBYSxFQUFDL2EsQ0FBQyxHQUFDNkssS0FBSyxDQUFDK0osMkJBQTJCLENBQUMsSUFBSSxDQUFDM1AsS0FBSyxDQUFDME0sV0FBVyxFQUFDeUQsQ0FBQyxDQUFDLEVBQUNBLENBQUMsR0FBQ3ZLLEtBQUssQ0FBQ29QLHFCQUFxQixDQUFDbkcsUUFBUSxDQUFDQSxRQUFRLENBQUMsRUFBRSxFQUFDLElBQUksQ0FBQy9LLEtBQUssQ0FBQyxFQUFDO2lCQUFDNEksV0FBVyxFQUFDM1IsQ0FBQUE7QUFBQyxnQkFBQyxDQUFDLEVBQUMsSUFBSSxDQUFDNmhCLGNBQWMsQ0FBQyxFQUFDN2hCLENBQUMsR0FBQzZLLEtBQUssQ0FBQ3dPLHNCQUFzQixDQUFDakUsQ0FBQyxDQUFDekQsV0FBVyxFQUFDeUQsQ0FBQyxDQUFDLEVBQUNBLENBQUMsR0FBQ3RCLFFBQVEsQ0FBQ0EsUUFBUSxDQUFDLEVBQUUsRUFBQ3NCLENBQUMsQ0FBQyxFQUFDO2lCQUFDZSxXQUFXLEVBQUNuVyxDQUFDO2lCQUFDK2EsYUFBYSxFQUFDdFksQ0FBQUE7Z0JBQUUsQ0FBQyxFQUFDb0ksS0FBSyxDQUFDOE4sT0FBTyxDQUFDLElBQUksQ0FBQ2tKLGNBQWMsRUFBQztpQkFBQ2xZLFFBQVEsRUFBQyxDQUFDM0osQ0FBQUE7QUFBQyxnQkFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDaWhCLFFBQVEsQ0FBQzdMLENBQUMsQ0FBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUE7QUFBQyxhQUFBLEtBQUssQ0FBQztlQUFDcEIsQ0FBQyxDQUFDZ00sSUFBSSxFQUFFLEVBQUMsSUFBSSxDQUFDNkQsY0FBYyxFQUFFLEVBQUMsSUFBSSxDQUFDN0IsbUJBQW1CLEdBQUMsQ0FBQyxDQUFDLEVBQUN2ZixDQUFDLElBQUUsSUFBSSxDQUFDOGUsV0FBVyxFQUFFLEVBQUN2TixDQUFDLENBQUMrTCxLQUFLLEdBQUMsQ0FBQyxDQUFBO0FBQUMsYUFBQSxLQUFLLENBQUM7ZUFBQyxPQUFNLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFBQTtBQUFDLFVBQUMsQ0FBQyxDQUFBO0FBQUEsUUFBQyxDQUFDLENBQUE7TUFBQyxFQUFDL0wsQ0FBQyxDQUFDeE0sU0FBUyxDQUFDOGEsZ0JBQWdCLEdBQUMsVUFBU3RPLENBQUMsRUFBQ3ZSLENBQUMsRUFBQztBQUFDLE9BQUEsSUFBSXpDLENBQUMsR0FBQ3lDLENBQUMsQ0FBQ2lELElBQUk7U0FBQzBQLENBQUMsR0FBQzNTLENBQUMsQ0FBQ2dELElBQUk7U0FBQ3NPLENBQUMsR0FBQ3RSLENBQUMsQ0FBQzhDLE1BQU07QUFBQzlDLFNBQUFBLENBQUMsR0FBQyxJQUFJLENBQUNzRyxLQUFLLENBQUNxSyxVQUFVO1NBQUNjLENBQUMsR0FBQyxJQUFJLENBQUNqUCxLQUFLO1NBQUNpUixDQUFDLEdBQUNoQyxDQUFDLENBQUNpSCxlQUFlO1NBQUNsSCxDQUFDLEdBQUNDLENBQUMsQ0FBQytHLGFBQWE7U0FBQ2YsQ0FBQyxHQUFDaEcsQ0FBQyxDQUFDZ0gsYUFBYTtTQUFDYixDQUFDLEdBQUNuRyxDQUFDLENBQUN2QixRQUFRO1NBQUN1QixDQUFDLEdBQUNBLENBQUMsQ0FBQ2tGLDBCQUEwQixDQUFBO09BQUMsSUFBRyxJQUFJLENBQUNxSSxhQUFhLEdBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRXZOLENBQUMsSUFBRSxDQUFDLElBQUksQ0FBQytOLHlCQUF5QixJQUFFcFgsS0FBSyxDQUFDMEwsMkJBQTJCLENBQUNuQixDQUFDLEVBQUNwVixDQUFDLEVBQUN5QyxDQUFDLENBQUMsQ0FBQyxFQUFDO0FBQUMsU0FBQSxJQUFJLENBQUN3Zix5QkFBeUIsS0FBRyxJQUFJLENBQUNxQix3QkFBd0IsRUFBRSxFQUFDLElBQUksQ0FBQ1EscUJBQXFCLEVBQUUsRUFBQyxJQUFJLENBQUM5QixtQkFBbUIsR0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUNDLHlCQUF5QixHQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQzhCLGtCQUFrQixFQUFFLENBQUMsQ0FBQTtTQUFDLElBQUk5TixDQUFDLEdBQUNwTCxLQUFLLENBQUN5Tyw2QkFBNkIsQ0FBQ3ZGLENBQUMsRUFBQyxJQUFJLENBQUNpUSxpQkFBaUIsQ0FBQyxDQUFBO1NBQUMsSUFBRyxDQUFDLENBQUMsS0FBRzNKLENBQUMsRUFBQyxPQUFPcEcsQ0FBQyxHQUFDZ0MsQ0FBQyxJQUFFQSxDQUFDLEdBQUMsQ0FBQ2lFLENBQUMsR0FBQyxLQUFLLENBQUMsR0FBQyxLQUFLclAsS0FBSyxDQUFDOE4sT0FBTyxDQUFDLElBQUksQ0FBQ2tKLGNBQWMsRUFBQztXQUFDbFksUUFBUSxFQUFDc00sQ0FBQUE7QUFBQyxVQUFDLENBQUMsQ0FBQTtTQUFDLElBQUdwTCxLQUFLLENBQUMwSyw4QkFBOEIsQ0FBQ1UsQ0FBQyxFQUFDaEMsQ0FBQyxFQUFDaUcsQ0FBQyxDQUFDLEVBQUMsSUFBRztXQUFDLENBQUMsU0FBU2xHLENBQUNBLEdBQUU7QUFBQ25KLGFBQUFBLEtBQUssQ0FBQzJLLGtCQUFrQixDQUFDekIsQ0FBQyxDQUFDLEdBQUNrQyxDQUFDLElBQUVDLENBQUMsR0FBQ0QsQ0FBQyxJQUFFLENBQUNDLENBQUMsQ0FBQTthQUFDckwsS0FBSyxDQUFDMEssOEJBQThCLENBQUNVLENBQUMsRUFBQ2hDLENBQUMsRUFBQ2lHLENBQUMsQ0FBQyxJQUFFbEcsQ0FBQyxFQUFFLENBQUE7QUFBQSxZQUFDLEVBQUUsQ0FBQTtVQUFDLENBQUEsT0FBTUEsQ0FBQyxFQUFDO0FBQUNuSixXQUFBQSxLQUFLLENBQUMrUSxLQUFLLENBQUM1SCxDQUFDLENBQUMsQ0FBQTtVQUFBO0FBQUNuSixTQUFBQSxLQUFLLENBQUM4TixPQUFPLENBQUMsSUFBSSxDQUFDa0osY0FBYyxFQUFDO1dBQUNsWSxRQUFRLEVBQUNzTSxDQUFBQTtBQUFDLFVBQUMsQ0FBQyxDQUFBO1FBQUE7TUFBRSxFQUFDakMsQ0FBQyxDQUFDeE0sU0FBUyxDQUFDK2EsZUFBZSxHQUFDLFVBQVN2TyxDQUFDLEVBQUN2UixDQUFDLEVBQUM7QUFBQyxPQUFBLElBQUl6QyxDQUFDO1NBQUNvVixDQUFDO1NBQUNyQixDQUFDO1NBQUN0UixDQUFDLEdBQUNBLENBQUMsQ0FBQzhDLE1BQU0sQ0FBQTtBQUFDLE9BQUEsSUFBSSxDQUFDMGUsdUJBQXVCLEVBQUUsRUFBQyxJQUFJLENBQUNoQyx5QkFBeUIsS0FBRyxJQUFJLENBQUNBLHlCQUF5QixHQUFDLENBQUMsQ0FBQyxFQUFDamlCLENBQUMsR0FBQyxJQUFJLENBQUNpRixLQUFLLENBQUMyTSxpQkFBaUIsRUFBQ3dELENBQUMsR0FBQyxJQUFJLENBQUNyTSxLQUFLLENBQUM4SSx1QkFBdUIsRUFBQ2tDLENBQUMsR0FBQ2xKLEtBQUssQ0FBQzJPLHFCQUFxQixDQUFDLElBQUksQ0FBQ3FJLGNBQWMsQ0FBQyxFQUFDcGYsQ0FBQyxHQUFDb0ksS0FBSyxDQUFDZ0wsd0JBQXdCLENBQUMsSUFBSSxDQUFDNVEsS0FBSyxFQUFDeEMsQ0FBQyxFQUFDc1IsQ0FBQyxDQUFDLEVBQUNsSixLQUFLLENBQUM4TixPQUFPLENBQUMsSUFBSSxDQUFDa0osY0FBYyxFQUFDO1NBQUNsWSxRQUFRLEVBQUNsSCxDQUFDO1NBQUNtUCxpQkFBaUIsRUFBQzVSLENBQUM7U0FBQzZSLHVCQUF1QixFQUFDdUQsQ0FBQUE7UUFBRSxDQUFDLEVBQUMsSUFBSSxDQUFDOE8scUJBQXFCLENBQUN6aEIsQ0FBQyxDQUFDLENBQUMsQ0FBQTtNQUFDLEVBQUN1UixDQUFDLENBQUN4TSxTQUFTLENBQUMwYyxxQkFBcUIsR0FBQyxVQUFTaFEsQ0FBQyxFQUFDO09BQUMsSUFBSUYsQ0FBQyxHQUFDLElBQUk7QUFBQ3ZSLFNBQUFBLENBQUMsR0FBQyxJQUFJLENBQUN3QyxLQUFLLENBQUMyTSxpQkFBaUIsQ0FBQTtPQUFDLElBQUksQ0FBQ3VTLGlCQUFpQixHQUFDcmQsTUFBTSxDQUFDNlUsVUFBVSxDQUFDLFlBQVU7U0FBQyxPQUFPNkQsU0FBUyxDQUFDeEwsQ0FBQyxFQUFDLEtBQUssQ0FBQyxFQUFDLEtBQUssQ0FBQyxFQUFDLFlBQVU7QUFBQyxXQUFBLElBQUl2UixDQUFDO2FBQUN6QyxDQUFDO2FBQUNvVixDQUFDO2FBQUNyQixDQUFDLEdBQUMsSUFBSSxDQUFBO0FBQUMsV0FBQSxPQUFPK0wsV0FBVyxDQUFDLElBQUksRUFBQyxVQUFTOUwsQ0FBQyxFQUFDO2FBQUMsUUFBT0EsQ0FBQyxDQUFDK0wsS0FBSztBQUFFLGVBQUEsS0FBSyxDQUFDO0FBQUMsaUJBQUEsT0FBT3RkLENBQUMsR0FBQ29JLEtBQUssQ0FBQ21MLHFCQUFxQixDQUFDOUIsQ0FBQyxFQUFDLElBQUksQ0FBQ2pQLEtBQUssQ0FBQyxFQUFDakYsQ0FBQyxHQUFDNkssS0FBSyxDQUFDd08sc0JBQXNCLENBQUM1VyxDQUFDLEVBQUMsSUFBSSxDQUFDd0MsS0FBSyxDQUFDLEVBQUM0RixLQUFLLENBQUM4TixPQUFPLENBQUMsSUFBSSxDQUFDa0osY0FBYyxFQUFDO21CQUFDbFksUUFBUSxFQUFDLENBQUMzSixDQUFBQTtBQUFDLGtCQUFDLENBQUMsRUFBQ29WLENBQUMsR0FBQ3ZLLEtBQUssQ0FBQ2tPLHFCQUFxQixFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDa0ksUUFBUSxDQUFDO21CQUFDdFAsV0FBVyxFQUFDbFAsQ0FBQzttQkFBQzBULFdBQVcsRUFBQ25XLENBQUM7bUJBQUM0WSxVQUFVLEVBQUN4RCxDQUFBQTtrQkFBRSxDQUFDLENBQUMsQ0FBQTtBQUFDLGVBQUEsS0FBSyxDQUFDO2lCQUFDLE9BQU9wQixDQUFDLENBQUNnTSxJQUFJLEVBQUUsRUFBQ29FLHFCQUFxQixDQUFDLFlBQVU7bUJBQUMsT0FBT3JRLENBQUMsQ0FBQ21OLG1CQUFtQixFQUFFLENBQUE7QUFBQSxrQkFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtjQUFBO0FBQUMsWUFBQyxDQUFDLENBQUE7QUFBQSxVQUFDLENBQUMsQ0FBQTtRQUFDLEVBQUN6ZSxDQUFDLENBQUMsQ0FBQTtNQUFDLEVBQUN1UixDQUFDLENBQUN4TSxTQUFTLENBQUNrYyxjQUFjLEdBQUMsVUFBUzFQLENBQUMsRUFBQztBQUFDLE9BQUEsSUFBSXZSLENBQUMsR0FBQ3VSLENBQUMsQ0FBQ3JDLFdBQVc7U0FBQ3VFLENBQUMsR0FBQyxLQUFLLENBQUMsS0FBR3pULENBQUMsR0FBQyxDQUFDLEdBQUNBLENBQUM7U0FBQ0EsQ0FBQyxHQUFDdVIsQ0FBQyxDQUFDa0YscUJBQXFCO1NBQUNqRixDQUFDLEdBQUMsS0FBSyxDQUFDLEtBQUd4UixDQUFDLEdBQUMsSUFBSSxHQUFDQSxDQUFDO1NBQUNBLENBQUMsR0FBQ3VSLENBQUMsQ0FBQ21GLHdCQUF3QjtTQUFDZSxDQUFDLEdBQUMsS0FBSyxDQUFDLEtBQUd6WCxDQUFDLEdBQUMsSUFBSSxHQUFDQSxDQUFDO1NBQUM0WCxDQUFDLEdBQUNyRyxDQUFDLENBQUMyUCxTQUFTLENBQUE7T0FBQyxPQUFPbkUsU0FBUyxDQUFDLElBQUksRUFBQyxLQUFLLENBQUMsRUFBQyxLQUFLLENBQUMsRUFBQyxZQUFVO0FBQUMsU0FBQSxJQUFJL2MsQ0FBQztXQUFDekMsQ0FBQztXQUFDb1YsQ0FBQztXQUFDckIsQ0FBQztXQUFDRyxDQUFDLEdBQUMsSUFBSSxDQUFBO0FBQUMsU0FBQSxPQUFPNEwsV0FBVyxDQUFDLElBQUksRUFBQyxVQUFTOUwsQ0FBQyxFQUFDO1dBQUMsUUFBT0EsQ0FBQyxDQUFDK0wsS0FBSztBQUFFLGFBQUEsS0FBSyxDQUFDO0FBQUMsZUFBQSxPQUFNLENBQUMvZixDQUFDLEdBQUMsSUFBSSxDQUFDK0ksS0FBSyxFQUFDcU0sQ0FBQyxHQUFDcFYsQ0FBQyxDQUFDMlMsUUFBUSxFQUFDM1MsQ0FBQyxHQUFDQSxDQUFDLENBQUM2Uix1QkFBdUIsRUFBQ3BQLENBQUMsR0FBQyxJQUFJLENBQUN3QyxLQUFLLEVBQUM4TyxDQUFDLEdBQUN0UixDQUFDLENBQUNrUyxVQUFVLEVBQUNsUyxDQUFDLEdBQUNBLENBQUMsQ0FBQ21QLGlCQUFpQixFQUFDLElBQUksQ0FBQ29RLG1CQUFtQixJQUFFLElBQUksQ0FBQy9jLEtBQUssQ0FBQzBNLFdBQVcsS0FBR3VFLENBQUMsSUFBRSxDQUFDZCxDQUFDLElBQUV2SyxLQUFLLENBQUNpSywwQkFBMEIsQ0FBQ29CLENBQUMsRUFBQ25DLENBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxDQUFDLElBQUUsSUFBSSxDQUFDaU8sbUJBQW1CLEdBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDc0Isd0JBQXdCLEVBQUUsRUFBQyxJQUFJLENBQUNTLGtCQUFrQixDQUFDMUosQ0FBQyxDQUFDLEVBQUNqRixDQUFDLEdBQUMsQ0FBQyxDQUFDLEVBQUNyQixDQUFDLEdBQUNsSixLQUFLLENBQUN3TyxzQkFBc0IsQ0FBQ25ELENBQUMsRUFBQyxJQUFJLENBQUNqUixLQUFLLENBQUMsRUFBQ2pGLENBQUMsR0FBQyxJQUFJLEtBQUdpVSxDQUFDLElBQUUsSUFBSSxLQUFHaUcsQ0FBQyxJQUFFOUUsQ0FBQyxHQUFDLENBQUMsQ0FBQyxFQUFDdkssS0FBSyxDQUFDa08scUJBQXFCLEVBQUUsSUFBRWxPLEtBQUssQ0FBQ2tPLHFCQUFxQixDQUFDO2lCQUFDbkgsaUJBQWlCLEVBQUNuUCxDQUFDO2lCQUFDb1AsdUJBQXVCLEVBQUM3UixDQUFBQTtnQkFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDaWhCLFFBQVEsQ0FBQztpQkFBQ3RQLFdBQVcsRUFBQ3VFLENBQUM7aUJBQUMwQyxVQUFVLEVBQUM1WSxDQUFDO2lCQUFDbVcsV0FBVyxFQUFDcEMsQ0FBQztpQkFBQ25DLGlCQUFpQixFQUFDblAsQ0FBQztpQkFBQ3lXLHFCQUFxQixFQUFDakYsQ0FBQztpQkFBQ2tGLHdCQUF3QixFQUFDZSxDQUFDO2lCQUFDZCwwQkFBMEIsRUFBQ2hFLENBQUFBO2dCQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFBQyxhQUFBLEtBQUssQ0FBQztBQUFDLGVBQUEsT0FBT3BCLENBQUMsQ0FBQ2dNLElBQUksRUFBRSxFQUFDLElBQUksQ0FBQ3FFLGlCQUFpQixHQUFDdmQsTUFBTSxDQUFDNlUsVUFBVSxDQUFDLFlBQVU7QUFBQyxpQkFBQSxPQUFPekgsQ0FBQyxDQUFDNk0scUJBQXFCLENBQUMxRyxDQUFDLENBQUMsQ0FBQTtBQUFBLGdCQUFDLEVBQUM1WCxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQUE7QUFBQyxVQUFDLENBQUMsQ0FBQTtBQUFBLFFBQUMsQ0FBQyxDQUFBO01BQUMsRUFBQ3VSLENBQUMsQ0FBQ3hNLFNBQVMsQ0FBQ3daLDBCQUEwQixHQUFDLFVBQVNqTixDQUFDLEVBQUM7T0FBQyxPQUFPeUwsU0FBUyxDQUFDLElBQUksRUFBQyxLQUFLLENBQUMsRUFBQyxLQUFLLENBQUMsRUFBQyxZQUFVO0FBQUMsU0FBQSxJQUFJL2MsQ0FBQyxFQUFDekMsQ0FBQyxFQUFDb1YsQ0FBQyxDQUFBO0FBQUMsU0FBQSxPQUFPMEssV0FBVyxDQUFDLElBQUksRUFBQyxVQUFTOUwsQ0FBQyxFQUFDO1dBQUMsUUFBT0EsQ0FBQyxDQUFDK0wsS0FBSztBQUFFLGFBQUEsS0FBSyxDQUFDO2VBQUMsT0FBT3RkLENBQUMsR0FBQyxJQUFJLENBQUN3QyxLQUFLLENBQUMyTSxpQkFBaUIsRUFBQzVSLENBQUMsR0FBQzZLLEtBQUssQ0FBQ3dPLHNCQUFzQixDQUFDdEYsQ0FBQyxFQUFDLElBQUksQ0FBQzlPLEtBQUssQ0FBQyxFQUFDbVEsQ0FBQyxHQUFDdkssS0FBSyxDQUFDa08scUJBQXFCLENBQUM7aUJBQUNuSCxpQkFBaUIsRUFBQyxDQUFBO2dCQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUNxUCxRQUFRLENBQUM7aUJBQUN0UCxXQUFXLEVBQUNvQyxDQUFDO2lCQUFDb0MsV0FBVyxFQUFDblcsQ0FBQztpQkFBQzRZLFVBQVUsRUFBQ3hELENBQUM7aUJBQUN4RCxpQkFBaUIsRUFBQ25QLENBQUM7aUJBQUN5VyxxQkFBcUIsRUFBQyxJQUFJO2lCQUFDQyx3QkFBd0IsRUFBQyxJQUFJO2lCQUFDQywwQkFBMEIsRUFBQyxDQUFDLENBQUE7Z0JBQUUsQ0FBQyxDQUFDLENBQUE7QUFBQyxhQUFBLEtBQUssQ0FBQztlQUFDLE9BQU9wRixDQUFDLENBQUNnTSxJQUFJLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQUE7QUFBQyxVQUFDLENBQUMsQ0FBQTtBQUFBLFFBQUMsQ0FBQyxDQUFBO0FBQUEsTUFBQyxFQUFDaE0sQ0FBQyxDQUFDeE0sU0FBUyxDQUFDcWMsY0FBYyxHQUFDLFlBQVU7T0FBQyxJQUFJLENBQUM5YSxLQUFLLENBQUMySyxTQUFTLElBQUUsSUFBSSxDQUFDM0ssS0FBSyxDQUFDMkssU0FBUyxDQUFDSSxRQUFRLENBQUNBLFFBQVEsQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDd1EsV0FBVyxDQUFDLEVBQUM7QUFBQ25tQixTQUFBQSxJQUFJLEVBQUN1VCxPQUFPLENBQUN6QyxTQUFTLENBQUNGLE1BQUFBO1FBQU8sQ0FBQyxDQUFDLENBQUE7TUFBQyxFQUFDaUYsQ0FBQyxDQUFDeE0sU0FBUyxDQUFDdWMsa0JBQWtCLEdBQUMsVUFBUy9QLENBQUMsRUFBQztPQUFDLElBQUksQ0FBQ2pMLEtBQUssQ0FBQzZLLGFBQWEsS0FBR0ksQ0FBQyxHQUFDQSxDQUFDLEdBQUNGLFFBQVEsQ0FBQ0EsUUFBUSxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUN3USxXQUFXLENBQUMsRUFBQztTQUFDbm1CLElBQUksRUFBQzZWLENBQUFBO0FBQUMsUUFBQyxDQUFDLEdBQUMsSUFBSSxDQUFDc1EsV0FBVyxFQUFDLElBQUksQ0FBQ3ZiLEtBQUssQ0FBQzZLLGFBQWEsQ0FBQ0ksQ0FBQyxDQUFDLENBQUMsQ0FBQTtNQUFDLEVBQUNBLENBQUMsQ0FBQ3hNLFNBQVMsQ0FBQzBaLG1CQUFtQixHQUFDLFVBQVNoTixDQUFDLEVBQUM7T0FBQyxPQUFPc0wsU0FBUyxDQUFDLElBQUksRUFBQyxLQUFLLENBQUMsRUFBQyxLQUFLLENBQUMsRUFBQyxZQUFVO1NBQUMsSUFBSS9jLENBQUMsRUFBQ3pDLENBQUMsRUFBQ29WLENBQUMsRUFBQ3JCLENBQUMsQ0FBQTtBQUFDLFNBQUEsT0FBTytMLFdBQVcsQ0FBQyxJQUFJLEVBQUMsVUFBUzlMLENBQUMsRUFBQztXQUFDLFFBQU9BLENBQUMsQ0FBQytMLEtBQUs7QUFBRSxhQUFBLEtBQUssQ0FBQztlQUFDLE9BQU0sQ0FBQy9mLENBQUMsR0FBQyxJQUFJLENBQUNpRixLQUFLLEVBQUN4QyxDQUFDLEdBQUN6QyxDQUFDLENBQUMrYSxhQUFhLEVBQUMvYSxDQUFDLEdBQUNBLENBQUMsQ0FBQ2diLDBCQUEwQixFQUFDNUYsQ0FBQyxHQUFDLElBQUksQ0FBQ3JNLEtBQUssRUFBQ2dMLENBQUMsR0FBQ3FCLENBQUMsQ0FBQy9DLGdCQUFnQixFQUFDK0MsQ0FBQyxHQUFDQSxDQUFDLENBQUN2QixjQUFjLEVBQUNoSixLQUFLLENBQUNtUyw0QkFBNEIsQ0FBQ2pKLENBQUMsQ0FBQyxJQUFFLElBQUksQ0FBQzBOLGFBQWEsSUFBRSxDQUFDemhCLENBQUMsSUFBRSxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUNpaEIsUUFBUSxDQUFDO2lCQUFDakcsMEJBQTBCLEVBQUMsQ0FBQyxDQUFDO2lCQUFDRCxhQUFhLEVBQUMsQ0FBQyxDQUFBO2dCQUFFLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFBO0FBQUMsYUFBQSxLQUFLLENBQUM7ZUFBQyxPQUFPL0csQ0FBQyxDQUFDZ00sSUFBSSxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUE7QUFBQyxhQUFBLEtBQUssQ0FBQztlQUFDdmQsQ0FBQyxJQUFFLElBQUksQ0FBQzhlLFdBQVcsRUFBRSxFQUFDdk4sQ0FBQyxDQUFDK0wsS0FBSyxHQUFDLENBQUMsQ0FBQTtBQUFDLGFBQUEsS0FBSyxDQUFDO2VBQUMsT0FBTyxJQUFJLENBQUNpQyxtQkFBbUIsR0FBQyxDQUFDLENBQUMsRUFBQzVNLENBQUMsS0FBR3JCLENBQUMsR0FBQ0csQ0FBQyxHQUFDSixRQUFRLENBQUNBLFFBQVEsQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDd1EsV0FBVyxDQUFDLEVBQUM7aUJBQUNubUIsSUFBSSxFQUFDK1YsQ0FBQUE7QUFBQyxnQkFBQyxDQUFDLEdBQUMsSUFBSSxDQUFDb1EsV0FBVyxFQUFDbFAsQ0FBQyxDQUFDckIsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQUE7QUFBQyxVQUFDLENBQUMsQ0FBQTtBQUFBLFFBQUMsQ0FBQyxDQUFBO01BQUMsRUFBQ0MsQ0FBQyxDQUFDeE0sU0FBUyxDQUFDZ2IsZUFBZSxHQUFDLFVBQVN4TyxDQUFDLEVBQUM7T0FBQyxJQUFJLENBQUN5TixhQUFhLEdBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDWSxPQUFPLENBQUNyTyxDQUFDLENBQUMsQ0FBQTtBQUFBLE1BQUMsRUFBQ0EsQ0FBQyxDQUFDeE0sU0FBUyxDQUFDK1osV0FBVyxHQUFDLFlBQVU7T0FBQyxJQUFJLENBQUNnRCxvQkFBb0IsRUFBRSxDQUFBO0FBQUEsTUFBQyxFQUFDdlEsQ0FBQyxDQUFDeE0sU0FBUyxDQUFDOGIsd0JBQXdCLEdBQUMsWUFBVTtBQUFDLE9BQUEsSUFBSSxDQUFDOUIscUJBQXFCLEVBQUUsRUFBQyxJQUFJLENBQUNnRCxxQkFBcUIsRUFBRSxFQUFDLElBQUksQ0FBQ0Msb0JBQW9CLEVBQUUsQ0FBQTtBQUFBLE1BQUMsRUFBQ3pRLENBQUMsQ0FBQ3hNLFNBQVMsQ0FBQ2dhLHFCQUFxQixHQUFDLFlBQVU7QUFBQzFhLE9BQUFBLE1BQU0sQ0FBQzRVLFlBQVksQ0FBQyxJQUFJLENBQUNnSixpQkFBaUIsQ0FBQyxFQUFDLElBQUksQ0FBQ0EsaUJBQWlCLEdBQUMsS0FBSyxDQUFDLENBQUE7QUFBQSxNQUFDLEVBQUMxUSxDQUFDLENBQUN4TSxTQUFTLENBQUNnZCxxQkFBcUIsR0FBQyxZQUFVO09BQUM5SSxZQUFZLENBQUMsSUFBSSxDQUFDMkksaUJBQWlCLENBQUMsRUFBQyxJQUFJLENBQUNBLGlCQUFpQixHQUFDLEtBQUssQ0FBQyxDQUFBO0FBQUEsTUFBQyxFQUFDclEsQ0FBQyxDQUFDeE0sU0FBUyxDQUFDaWQsb0JBQW9CLEdBQUMsWUFBVTtPQUFDL0ksWUFBWSxDQUFDLElBQUksQ0FBQ3lJLGlCQUFpQixDQUFDLEVBQUMsSUFBSSxDQUFDQSxpQkFBaUIsR0FBQyxLQUFLLENBQUMsQ0FBQTtBQUFBLE1BQUMsRUFBQ25RLENBQUMsQ0FBQ3hNLFNBQVMsQ0FBQ3ljLHVCQUF1QixHQUFDLFlBQVU7QUFBQyxPQUFBLElBQUksQ0FBQzdCLHNCQUFzQixHQUFDLEtBQUssQ0FBQyxDQUFBO0FBQUEsTUFBQyxFQUFDcE8sQ0FBQyxDQUFDeE0sU0FBUyxDQUFDc2MscUJBQXFCLEdBQUMsWUFBVTtPQUFDLElBQUk5UCxDQUFDLEdBQUNuSixLQUFLLENBQUMyTyxxQkFBcUIsQ0FBQyxJQUFJLENBQUNxSSxjQUFjLENBQUMsQ0FBQTtBQUFDLE9BQUEsSUFBSSxDQUFDTyxzQkFBc0IsR0FBQyxDQUFDcE8sQ0FBQyxDQUFBO0FBQUEsTUFBQyxFQUFDQSxDQUFDLENBQUN4TSxTQUFTLENBQUNxYixnQkFBZ0IsR0FBQyxZQUFVO09BQUMsT0FBT3JELFNBQVMsQ0FBQyxJQUFJLEVBQUMsS0FBSyxDQUFDLEVBQUMsS0FBSyxDQUFDLEVBQUMsWUFBVTtTQUFDLElBQUkvYyxDQUFDLENBQUE7QUFBQyxTQUFBLE9BQU9xZCxXQUFXLENBQUMsSUFBSSxFQUFDLFVBQVM5TCxDQUFDLEVBQUM7V0FBQyxRQUFPQSxDQUFDLENBQUMrTCxLQUFLO0FBQUUsYUFBQSxLQUFLLENBQUM7QUFBQyxlQUFBLE9BQU90ZCxDQUFDLEdBQUNvSSxLQUFLLENBQUNvUCxxQkFBcUIsQ0FBQyxJQUFJLENBQUNsUixLQUFLLEVBQUMsSUFBSSxDQUFDOFksY0FBYyxDQUFDLEVBQUMsSUFBSSxDQUFDTSx1QkFBdUIsR0FBQ3RYLEtBQUssQ0FBQzRNLG9CQUFvQixDQUFDLElBQUksQ0FBQ2tLLFdBQVcsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ1YsUUFBUSxDQUFDeGUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUFDLGFBQUEsS0FBSyxDQUFDO0FBQUMsZUFBQSxPQUFPdVIsQ0FBQyxDQUFDZ00sSUFBSSxFQUFFLEVBQUMsSUFBSSxDQUFDalgsS0FBSyxDQUFDMEssYUFBYSxJQUFFLElBQUksQ0FBQzFLLEtBQUssQ0FBQzBLLGFBQWEsQ0FBQ0ssUUFBUSxDQUFDQSxRQUFRLENBQUMsRUFBRSxFQUFDLElBQUksQ0FBQ3dRLFdBQVcsQ0FBQyxFQUFDO0FBQUNubUIsaUJBQUFBLElBQUksRUFBQ3VULE9BQU8sQ0FBQ3pDLFNBQVMsQ0FBQ0gsSUFBQUE7QUFBSSxnQkFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQUE7QUFBQyxVQUFDLENBQUMsQ0FBQTtBQUFBLFFBQUMsQ0FBQyxDQUFBO0FBQUEsTUFBQyxFQUFDa0YsQ0FBQyxDQUFDeE0sU0FBUyxDQUFDK2Msb0JBQW9CLEdBQUMsWUFBVTtPQUFDLElBQUl2USxDQUFDLEdBQUMsSUFBSTtTQUFDdlIsQ0FBQyxHQUFDLElBQUksQ0FBQ3NHLEtBQUs7U0FBQy9JLENBQUMsR0FBQ3lDLENBQUMsQ0FBQzBQLGlCQUFpQjtTQUFDMVAsQ0FBQyxHQUFDQSxDQUFDLENBQUMyUCxnQkFBZ0IsQ0FBQTtPQUFDLElBQUksQ0FBQ3NTLGlCQUFpQixHQUFDNWQsTUFBTSxDQUFDNlUsVUFBVSxDQUFDLFlBQVU7U0FBQzNILENBQUMsQ0FBQ29OLFNBQVMsS0FBR3BoQixDQUFDLEtBQUcwUixPQUFPLENBQUM3QixpQkFBaUIsQ0FBQ0YsR0FBRyxHQUFDcUUsQ0FBQyxDQUFDNk0sU0FBUyxFQUFFLEdBQUM3TSxDQUFDLENBQUM4TSxTQUFTLEVBQUUsQ0FBQyxDQUFBO1FBQUMsRUFBQ3JlLENBQUMsQ0FBQyxDQUFBO0FBQUEsTUFBQyxFQUFDdVIsQ0FBQyxDQUFDeE0sU0FBUyxDQUFDdWIsbUJBQW1CLEdBQUMsWUFBVTtPQUFDLElBQUksQ0FBQ3RDLGFBQWEsR0FBQyxJQUFJSixlQUFlLENBQUMvQyxPQUFPLENBQUM7U0FBQ3RVLE9BQU8sRUFBQyxJQUFJLENBQUMyWSxXQUFXO0FBQUMvZixTQUFBQSxLQUFLLEVBQUMsSUFBSSxDQUFDbUgsS0FBSyxDQUFDcUssVUFBVTtTQUFDaEYsU0FBUyxFQUFDLElBQUksQ0FBQ2tVLGdCQUFnQjtTQUFDN1QsUUFBUSxFQUFDLElBQUksQ0FBQzhULGVBQWU7U0FBQ3RaLGFBQWEsRUFBQyxDQUFDO0FBQUNDLFNBQUFBLG9CQUFvQixFQUFDLElBQUksQ0FBQ0gsS0FBSyxDQUFDZ0ssYUFBYTtBQUFDNUosU0FBQUEsb0JBQW9CLEVBQUMsSUFBSSxDQUFDSixLQUFLLENBQUN3SyxhQUFhO0FBQUNuSyxTQUFBQSw0QkFBNEIsRUFBQyxDQUFDLElBQUksQ0FBQ0wsS0FBSyxDQUFDeUssc0JBQXNCO1NBQUNuSywyQkFBMkIsRUFBQyxDQUFDLENBQUE7UUFBRSxDQUFDLEVBQUMsSUFBSSxDQUFDb1gsYUFBYSxDQUFDMVQsSUFBSSxFQUFFLENBQUE7TUFBQyxFQUFDaUgsQ0FBQyxDQUFDeE0sU0FBUyxDQUFDMGIsZ0JBQWdCLEdBQUMsVUFBU2xQLENBQUMsRUFBQztPQUFDLElBQUl2UixDQUFDLEdBQUMsSUFBSSxDQUFBO0FBQUMsT0FBQSxLQUFLLENBQUMsS0FBR3VSLENBQUMsS0FBR0EsQ0FBQyxHQUFDLElBQUksQ0FBQ2pMLEtBQUssQ0FBQyxFQUFDLElBQUksQ0FBQ3VhLHdCQUF3QixFQUFFLEVBQUMsSUFBSSxDQUFDdEIsbUJBQW1CLEdBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDL2MsS0FBSyxDQUFDOFYsYUFBYSxJQUFFLElBQUksQ0FBQ3dHLFdBQVcsRUFBRSxFQUFDLElBQUksQ0FBQ04sUUFBUSxDQUFDO0FBQUNyRyxTQUFBQSxNQUFNLEVBQUMvUCxLQUFLLENBQUNpTSxZQUFZLENBQUM5QyxDQUFDLENBQUE7QUFBQyxRQUFDLENBQUMsRUFBQ29RLHFCQUFxQixDQUFDLFlBQVU7QUFBQzNoQixTQUFBQSxDQUFDLENBQUN3ZSxRQUFRLENBQUNwVyxLQUFLLENBQUNvUCxxQkFBcUIsQ0FBQ2pHLENBQUMsRUFBQ3ZSLENBQUMsQ0FBQ29mLGNBQWMsQ0FBQyxDQUFDLENBQUE7QUFBQSxRQUFDLENBQUMsQ0FBQTtBQUFBLE1BQUMsRUFBQzdOLENBQUMsQ0FBQ3hNLFNBQVMsQ0FBQzJiLGlCQUFpQixHQUFDLFlBQVU7T0FBQyxJQUFJLENBQUMxQyxhQUFhLElBQUUsSUFBSSxDQUFDQSxhQUFhLENBQUN2VCxNQUFNLENBQUM7QUFBQ3RMLFNBQUFBLEtBQUssRUFBQyxJQUFJLENBQUNtSCxLQUFLLENBQUNxSyxVQUFVO0FBQUNsSyxTQUFBQSxvQkFBb0IsRUFBQyxJQUFJLENBQUNILEtBQUssQ0FBQ2dLLGFBQWE7QUFBQzVKLFNBQUFBLG9CQUFvQixFQUFDLElBQUksQ0FBQ0osS0FBSyxDQUFDd0ssYUFBYTtBQUFDbkssU0FBQUEsNEJBQTRCLEVBQUMsQ0FBQyxJQUFJLENBQUNMLEtBQUssQ0FBQ3lLLHNCQUFBQTtBQUFzQixRQUFDLENBQUMsQ0FBQTtBQUFBLE1BQUMsRUFBQ1EsQ0FBQyxDQUFDeE0sU0FBUyxDQUFDbWQscUJBQXFCLEdBQUMsWUFBVTtBQUFDLE9BQUEsSUFBSTNRLENBQUMsR0FBQyxJQUFJLENBQUNqTCxLQUFLO1NBQUN0RyxDQUFDLEdBQUN1UixDQUFDLENBQUNrSyxjQUFjO1NBQUNsSyxDQUFDLEdBQUNBLENBQUMsQ0FBQ3pCLGdCQUFnQixDQUFBO09BQUMsT0FBT2dMLE9BQU8sQ0FBQ0QsT0FBTyxDQUFDcGYsYUFBYSxDQUFDcWlCLEtBQUssQ0FBQ3pDLGNBQWMsRUFBQztTQUFDN1ksS0FBSyxFQUFDLElBQUksQ0FBQ0EsS0FBSztTQUFDOFksT0FBTyxFQUFDLElBQUksQ0FBQ3lFLGVBQWU7U0FBQ3RFLGNBQWMsRUFBQ3piLENBQUM7U0FBQzhQLGdCQUFnQixFQUFDeUIsQ0FBQUE7QUFBQyxRQUFDLENBQUMsQ0FBQTtBQUFBLE1BQUMsRUFBQ0EsQ0FBQyxDQUFDeE0sU0FBUyxDQUFDb2QsaUJBQWlCLEdBQUMsWUFBVTtBQUFDLE9BQUEsSUFBSTVRLENBQUMsR0FBQyxJQUFJLENBQUNqTCxLQUFLLENBQUM0VixnQkFBZ0I7U0FBQ2xjLENBQUMsR0FBQ29JLEtBQUssQ0FBQ3VSLGdCQUFnQixDQUFDLElBQUksQ0FBQ25YLEtBQUssQ0FBQyxDQUFDb1gsbUJBQW1CLENBQUE7T0FBQyxPQUFPa0IsT0FBTyxDQUFDRCxPQUFPLENBQUNwZixhQUFhLENBQUNxaUIsS0FBSyxDQUFDOUIsY0FBYyxFQUFDO1NBQUN6TCxJQUFJLEVBQUMsTUFBTTtTQUFDK0ssT0FBTyxFQUFDLElBQUksQ0FBQzhDLFNBQVM7U0FBQ25DLFVBQVUsRUFBQ2pjLENBQUM7U0FBQ2tjLGdCQUFnQixFQUFDM0ssQ0FBQUE7QUFBQyxRQUFDLENBQUMsQ0FBQTtBQUFBLE1BQUMsRUFBQ0EsQ0FBQyxDQUFDeE0sU0FBUyxDQUFDcWQsaUJBQWlCLEdBQUMsWUFBVTtBQUFDLE9BQUEsSUFBSTdRLENBQUMsR0FBQyxJQUFJLENBQUNqTCxLQUFLLENBQUM2VixnQkFBZ0I7U0FBQ25jLENBQUMsR0FBQ29JLEtBQUssQ0FBQ3VSLGdCQUFnQixDQUFDLElBQUksQ0FBQ25YLEtBQUssQ0FBQyxDQUFDcVgsbUJBQW1CLENBQUE7T0FBQyxPQUFPaUIsT0FBTyxDQUFDRCxPQUFPLENBQUNwZixhQUFhLENBQUNxaUIsS0FBSyxDQUFDOUIsY0FBYyxFQUFDO1NBQUN6TCxJQUFJLEVBQUMsTUFBTTtTQUFDK0ssT0FBTyxFQUFDLElBQUksQ0FBQytDLFNBQVM7U0FBQ3BDLFVBQVUsRUFBQ2pjLENBQUM7U0FBQ21jLGdCQUFnQixFQUFDNUssQ0FBQUE7QUFBQyxRQUFDLENBQUMsQ0FBQTtBQUFBLE1BQUMsRUFBQ0EsQ0FBQyxDQUFDeE0sU0FBUyxDQUFDc2Qsc0JBQXNCLEdBQUMsWUFBVTtBQUFDLE9BQUEsSUFBSTlRLENBQUMsR0FBQyxJQUFJLENBQUNqTCxLQUFLLENBQUN5VixxQkFBcUI7QUFBQy9iLFNBQUFBLENBQUMsR0FBQyxJQUFJLENBQUN3QyxLQUFLLENBQUM4VixhQUFhLENBQUE7T0FBQyxPQUFPd0MsT0FBTyxDQUFDRCxPQUFPLENBQUNwZixhQUFhLENBQUNxaUIsS0FBSyxDQUFDakMsZUFBZSxFQUFDO1NBQUNDLFNBQVMsRUFBQzliLENBQUM7U0FBQ3NiLE9BQU8sRUFBQyxJQUFJLENBQUM2QyxzQkFBc0I7U0FBQ3BDLHFCQUFxQixFQUFDeEssQ0FBQUE7QUFBQyxRQUFDLENBQUMsQ0FBQTtBQUFBLE1BQUMsRUFBQ0EsQ0FBQyxDQUFDeE0sU0FBUyxDQUFDdWQsTUFBTSxHQUFDLFlBQVU7QUFBQyxPQUFBLElBQUkvUSxDQUFDLEdBQUMsSUFBSSxDQUFDL08sS0FBSztTQUFDeEMsQ0FBQyxHQUFDdVIsQ0FBQyxDQUFDbUMsV0FBVztTQUFDblcsQ0FBQyxHQUFDZ1UsQ0FBQyxDQUFDNEcsTUFBTTtTQUFDeEYsQ0FBQyxHQUFDcEIsQ0FBQyxDQUFDNEUsVUFBVTtTQUFDNUUsQ0FBQyxHQUFDQSxDQUFDLENBQUNvSCxTQUFTO0FBQUNySCxTQUFBQSxDQUFDLEdBQUNsSixLQUFLLENBQUM0UixpQkFBaUIsQ0FBQyxJQUFJLENBQUMxVCxLQUFLLEVBQUMsSUFBSSxDQUFDOUQsS0FBSyxDQUFDO0FBQUNpUCxTQUFBQSxDQUFDLEdBQUNySixLQUFLLENBQUM2UixvQkFBb0IsQ0FBQyxJQUFJLENBQUMzVCxLQUFLLEVBQUMsSUFBSSxDQUFDOUQsS0FBSyxDQUFDO0FBQUNpUixTQUFBQSxDQUFDLEdBQUNyTCxLQUFLLENBQUNpTyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMvUCxLQUFLLEVBQUMsSUFBSSxDQUFDOUQsS0FBSyxFQUFDLElBQUksQ0FBQzRjLGNBQWMsQ0FBQztBQUFDcGYsU0FBQUEsQ0FBQyxHQUFDb0ksS0FBSyxDQUFDbU8sb0JBQW9CLENBQUM7V0FBQzdDLFdBQVcsRUFBQzFULENBQUFBO0FBQUMsVUFBQyxFQUFDO1dBQUNtVyxVQUFVLEVBQUN4RCxDQUFBQTtBQUFDLFVBQUMsQ0FBQztBQUFDQSxTQUFBQSxDQUFDLEdBQUMsSUFBSSxDQUFDck0sS0FBSyxDQUFDdUssYUFBYSxJQUFFVSxDQUFDLEdBQUMsRUFBRSxHQUFDdEMsT0FBTyxDQUFDRCxTQUFTLENBQUNGLEdBQUc7QUFBQ3lDLFNBQUFBLENBQUMsR0FBQ25KLEtBQUssQ0FBQ2dQLGdCQUFnQixDQUFDbkksT0FBTyxDQUFDVixVQUFVLENBQUNqQixJQUFJLEVBQUNxRixDQUFDLENBQUMsQ0FBQTtPQUFDLE9BQU9tSSxPQUFPLENBQUNELE9BQU8sQ0FBQ3BmLGFBQWEsQ0FBQyxLQUFLLEVBQUM7U0FBQ3lmLFNBQVMsRUFBQzNKLENBQUFBO1FBQUUsRUFBQ3VKLE9BQU8sQ0FBQ0QsT0FBTyxDQUFDcGYsYUFBYSxDQUFDLEtBQUssRUFBQztTQUFDTixHQUFHLEVBQUMsSUFBSSxDQUFDOGpCLG9CQUFBQTtRQUFxQixFQUFDbkUsT0FBTyxDQUFDRCxPQUFPLENBQUNwZixhQUFhLENBQUMsS0FBSyxFQUFDO1NBQUNELEtBQUssRUFBQ2lZLENBQUM7QUFBQ3lILFNBQUFBLFNBQVMsRUFBQ2pNLE9BQU8sQ0FBQ1YsVUFBVSxDQUFDaEIsT0FBTztTQUFDZ08sWUFBWSxFQUFDLElBQUksQ0FBQ21ELGlCQUFpQjtTQUFDbEQsWUFBWSxFQUFDLElBQUksQ0FBQ3FELGlCQUFBQTtRQUFrQixFQUFDL0QsT0FBTyxDQUFDRCxPQUFPLENBQUNwZixhQUFhLENBQUMsSUFBSSxFQUFDO1NBQUNELEtBQUssRUFBQ3dFLENBQUM7QUFBQ2tiLFNBQUFBLFNBQVMsRUFBQ2pNLE9BQU8sQ0FBQ1YsVUFBVSxDQUFDZixLQUFLO1NBQUNyUyxHQUFHLEVBQUMsSUFBSSxDQUFDZ2tCLHFCQUFBQTtBQUFxQixRQUFDLEVBQUM1aEIsQ0FBQyxDQUFDb1UsR0FBRyxDQUFDLElBQUksQ0FBQzBOLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMvTixDQUFDLEdBQUMsSUFBSSxHQUFDLElBQUksQ0FBQzRRLHFCQUFxQixFQUFFLEVBQUN6USxDQUFDLEdBQUMsSUFBSSxHQUFDLElBQUksQ0FBQzBRLGlCQUFpQixFQUFFLEVBQUMxUSxDQUFDLEdBQUMsSUFBSSxHQUFDLElBQUksQ0FBQzJRLGlCQUFpQixFQUFFLEVBQUMsSUFBSSxDQUFDOWIsS0FBSyxDQUFDMkosZ0JBQWdCLEdBQUMsSUFBSSxHQUFDLElBQUksQ0FBQ3FQLGdCQUFnQixFQUFFLEVBQUMsSUFBSSxDQUFDaFosS0FBSyxDQUFDbUosZ0JBQWdCLEdBQUMsSUFBSSxDQUFDNFMsc0JBQXNCLEVBQUUsR0FBQyxJQUFJLENBQUMsQ0FBQTtNQUFDLEVBQUM5USxDQUFDLENBQUNnUixZQUFZLEdBQUMxRSxjQUFjLENBQUMwRSxZQUFZLEVBQUNoUixDQUFDLENBQUE7SUFBQyxDQUFDdUosT0FBTyxDQUFDRCxPQUFPLENBQUMySCxhQUFhLENBQUMsQ0FBQyxDQUFBO0FBQUNybUIsQ0FBQUEsT0FBQUEsQ0FBQUEsT0FBQUEsR0FBZ0I0aEIsYUFBYSxDQUFBOzs7OztBQ0F2bW5CO0FBQ0E7QUFDQTtBQUNBLElBQUkwRSxlQUFlLENBQUE7QUFDbkIsTUFBTUMsS0FBSyxHQUFHLElBQUlDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtBQUNqQixTQUFTQyxHQUFHQSxHQUFHO0FBQzVCO0VBQ0EsSUFBSSxDQUFDSCxlQUFlLEVBQUU7QUFDcEI7QUFDQUEsSUFBQUEsZUFBZSxHQUFHLE9BQU9JLE1BQU0sS0FBSyxXQUFXLElBQUlBLE1BQU0sQ0FBQ0osZUFBZSxJQUFJSSxNQUFNLENBQUNKLGVBQWUsQ0FBQzFZLElBQUksQ0FBQzhZLE1BQU0sQ0FBQyxDQUFBO0lBRWhILElBQUksQ0FBQ0osZUFBZSxFQUFFO0FBQ3BCLE1BQUEsTUFBTSxJQUFJSyxLQUFLLENBQUMsMEdBQTBHLENBQUMsQ0FBQTtBQUM3SCxLQUFBO0FBQ0YsR0FBQTtFQUVBLE9BQU9MLGVBQWUsQ0FBQ0MsS0FBSyxDQUFDLENBQUE7QUFDL0I7O0FDakJBLFlBQWUscUhBQXFIOztBQ0VwSSxTQUFTSyxRQUFRQSxDQUFDQyxJQUFJLEVBQUU7RUFDdEIsT0FBTyxPQUFPQSxJQUFJLEtBQUssUUFBUSxJQUFJQyxLQUFLLENBQUNDLElBQUksQ0FBQ0YsSUFBSSxDQUFDLENBQUE7QUFDckQ7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUcsU0FBUyxHQUFHLEVBQUUsQ0FBQTtBQUVwQixLQUFLLElBQUk1bEIsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLEdBQUcsRUFBRSxFQUFFQSxDQUFDLEVBQUU7QUFDNUI0bEIsRUFBQUEsU0FBUyxDQUFDM2lCLElBQUksQ0FBQyxDQUFDakQsQ0FBQyxHQUFHLEtBQUssRUFBRVMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDbUQsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDbkQsQ0FBQTtBQUVPLFNBQVNpaUIsZUFBZUEsQ0FBQ0MsR0FBRyxFQUFFQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQy9DO0FBQ0E7QUFDQSxFQUFBLE9BQU8sQ0FBQ0gsU0FBUyxDQUFDRSxHQUFHLENBQUNDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHSCxTQUFTLENBQUNFLEdBQUcsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdILFNBQVMsQ0FBQ0UsR0FBRyxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR0gsU0FBUyxDQUFDRSxHQUFHLENBQUNDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBR0gsU0FBUyxDQUFDRSxHQUFHLENBQUNDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHSCxTQUFTLENBQUNFLEdBQUcsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHSCxTQUFTLENBQUNFLEdBQUcsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdILFNBQVMsQ0FBQ0UsR0FBRyxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUdILFNBQVMsQ0FBQ0UsR0FBRyxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR0gsU0FBUyxDQUFDRSxHQUFHLENBQUNDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBR0gsU0FBUyxDQUFDRSxHQUFHLENBQUNDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHSCxTQUFTLENBQUNFLEdBQUcsQ0FBQ0MsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUdILFNBQVMsQ0FBQ0UsR0FBRyxDQUFDQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBR0gsU0FBUyxDQUFDRSxHQUFHLENBQUNDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHSCxTQUFTLENBQUNFLEdBQUcsQ0FBQ0MsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUdILFNBQVMsQ0FBQ0UsR0FBRyxDQUFDQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRUMsV0FBVyxFQUFFLENBQUE7QUFDcGdCOztBQ2RBLFNBQVNDLEtBQUtBLENBQUNSLElBQUksRUFBRTtBQUNuQixFQUFBLElBQUksQ0FBQ0QsUUFBUSxDQUFDQyxJQUFJLENBQUMsRUFBRTtJQUNuQixNQUFNelosU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFBO0FBQ2pDLEdBQUE7QUFFQSxFQUFBLElBQUkyTyxDQUFDLENBQUE7RUFDTCxNQUFNbUwsR0FBRyxHQUFHLElBQUlWLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7RUFFL0JVLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDbkwsQ0FBQyxHQUFHdUwsUUFBUSxDQUFDVCxJQUFJLENBQUM3aEIsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUE7RUFDcERraUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHbkwsQ0FBQyxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUE7RUFDeEJtTCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUduTCxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQTtFQUN2Qm1MLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR25MLENBQUMsR0FBRyxJQUFJLENBQUM7O0VBRWxCbUwsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUNuTCxDQUFDLEdBQUd1TCxRQUFRLENBQUNULElBQUksQ0FBQzdoQixLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtFQUNwRGtpQixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUduTCxDQUFDLEdBQUcsSUFBSSxDQUFDOztFQUVsQm1MLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDbkwsQ0FBQyxHQUFHdUwsUUFBUSxDQUFDVCxJQUFJLENBQUM3aEIsS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUE7RUFDckRraUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHbkwsQ0FBQyxHQUFHLElBQUksQ0FBQzs7RUFFbEJtTCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQ25MLENBQUMsR0FBR3VMLFFBQVEsQ0FBQ1QsSUFBSSxDQUFDN2hCLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0VBQ3JEa2lCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR25MLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDbEI7O0VBRUFtTCxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQ25MLENBQUMsR0FBR3VMLFFBQVEsQ0FBQ1QsSUFBSSxDQUFDN2hCLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQTtFQUN2RWtpQixHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUduTCxDQUFDLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQTtFQUNoQ21MLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBR25MLENBQUMsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFBO0VBQ3pCbUwsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHbkwsQ0FBQyxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUE7RUFDekJtTCxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUduTCxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQTtBQUN4Qm1MLEVBQUFBLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBR25MLENBQUMsR0FBRyxJQUFJLENBQUE7QUFDbEIsRUFBQSxPQUFPbUwsR0FBRyxDQUFBO0FBQ1o7O0FDN0JBLFNBQVNLLGFBQWFBLENBQUNDLEdBQUcsRUFBRTtFQUMxQkEsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGtCQUFrQixDQUFDRixHQUFHLENBQUMsQ0FBQyxDQUFDOztFQUV4QyxNQUFNRyxLQUFLLEdBQUcsRUFBRSxDQUFBO0FBRWhCLEVBQUEsS0FBSyxJQUFJdm1CLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR29tQixHQUFHLENBQUN2bUIsTUFBTSxFQUFFLEVBQUVHLENBQUMsRUFBRTtJQUNuQ3VtQixLQUFLLENBQUN0akIsSUFBSSxDQUFDbWpCLEdBQUcsQ0FBQ0ksVUFBVSxDQUFDeG1CLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDL0IsR0FBQTtBQUVBLEVBQUEsT0FBT3VtQixLQUFLLENBQUE7QUFDZCxDQUFBO0FBRU8sTUFBTUUsR0FBRyxHQUFHLHNDQUFzQyxDQUFBO0FBQ2xELE1BQU1DLEdBQUcsR0FBRyxzQ0FBc0MsQ0FBQTtBQUMxQyxTQUFTQyxHQUFHQSxDQUFDM1QsSUFBSSxFQUFFNFQsT0FBTyxFQUFFQyxRQUFRLEVBQUU7RUFDbkQsU0FBU0MsWUFBWUEsQ0FBQ2pvQixLQUFLLEVBQUVrb0IsU0FBUyxFQUFFQyxHQUFHLEVBQUVqQixNQUFNLEVBQUU7QUFDbkQsSUFBQSxJQUFJa0IsVUFBVSxDQUFBO0FBRWQsSUFBQSxJQUFJLE9BQU9wb0IsS0FBSyxLQUFLLFFBQVEsRUFBRTtBQUM3QkEsTUFBQUEsS0FBSyxHQUFHc25CLGFBQWEsQ0FBQ3RuQixLQUFLLENBQUMsQ0FBQTtBQUM5QixLQUFBO0FBRUEsSUFBQSxJQUFJLE9BQU9rb0IsU0FBUyxLQUFLLFFBQVEsRUFBRTtBQUNqQ0EsTUFBQUEsU0FBUyxHQUFHZCxLQUFLLENBQUNjLFNBQVMsQ0FBQyxDQUFBO0FBQzlCLEtBQUE7SUFFQSxJQUFJLENBQUMsQ0FBQ0UsVUFBVSxHQUFHRixTQUFTLE1BQU0sSUFBSSxJQUFJRSxVQUFVLEtBQUssS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUdBLFVBQVUsQ0FBQ3BuQixNQUFNLE1BQU0sRUFBRSxFQUFFO01BQ3BHLE1BQU1tTSxTQUFTLENBQUMsa0VBQWtFLENBQUMsQ0FBQTtBQUNyRixLQUFDO0FBQ0Q7QUFDQTs7SUFHQSxJQUFJdWEsS0FBSyxHQUFHLElBQUluQixVQUFVLENBQUMsRUFBRSxHQUFHdm1CLEtBQUssQ0FBQ2dCLE1BQU0sQ0FBQyxDQUFBO0FBQzdDMG1CLElBQUFBLEtBQUssQ0FBQzNhLEdBQUcsQ0FBQ21iLFNBQVMsQ0FBQyxDQUFBO0lBQ3BCUixLQUFLLENBQUMzYSxHQUFHLENBQUMvTSxLQUFLLEVBQUVrb0IsU0FBUyxDQUFDbG5CLE1BQU0sQ0FBQyxDQUFBO0FBQ2xDMG1CLElBQUFBLEtBQUssR0FBR00sUUFBUSxDQUFDTixLQUFLLENBQUMsQ0FBQTtJQUN2QkEsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHSyxPQUFPLENBQUE7SUFDcENMLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBR0EsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUE7QUFFakMsSUFBQSxJQUFJUyxHQUFHLEVBQUU7TUFDUGpCLE1BQU0sR0FBR0EsTUFBTSxJQUFJLENBQUMsQ0FBQTtNQUVwQixLQUFLLElBQUkvbEIsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFQSxDQUFDLEVBQUU7UUFDM0JnbkIsR0FBRyxDQUFDakIsTUFBTSxHQUFHL2xCLENBQUMsQ0FBQyxHQUFHdW1CLEtBQUssQ0FBQ3ZtQixDQUFDLENBQUMsQ0FBQTtBQUM1QixPQUFBO0FBRUEsTUFBQSxPQUFPZ25CLEdBQUcsQ0FBQTtBQUNaLEtBQUE7SUFFQSxPQUFPbkIsZUFBZSxDQUFDVSxLQUFLLENBQUMsQ0FBQTtBQUMvQixHQUFDOztFQUdELElBQUk7QUFDRk8sSUFBQUEsWUFBWSxDQUFDOVQsSUFBSSxHQUFHQSxJQUFJLENBQUM7QUFDM0IsR0FBQyxDQUFDLE9BQU85TCxHQUFHLEVBQUUsRUFBRTs7RUFHaEI0ZixZQUFZLENBQUNMLEdBQUcsR0FBR0EsR0FBRyxDQUFBO0VBQ3RCSyxZQUFZLENBQUNKLEdBQUcsR0FBR0EsR0FBRyxDQUFBO0FBQ3RCLEVBQUEsT0FBT0ksWUFBWSxDQUFBO0FBQ3JCOztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBU0ksR0FBR0EsQ0FBQ1gsS0FBSyxFQUFFO0FBQ2xCLEVBQUEsSUFBSSxPQUFPQSxLQUFLLEtBQUssUUFBUSxFQUFFO0lBQzdCLE1BQU1ZLEdBQUcsR0FBR2QsUUFBUSxDQUFDQyxrQkFBa0IsQ0FBQ0MsS0FBSyxDQUFDLENBQUMsQ0FBQzs7QUFFaERBLElBQUFBLEtBQUssR0FBRyxJQUFJbkIsVUFBVSxDQUFDK0IsR0FBRyxDQUFDdG5CLE1BQU0sQ0FBQyxDQUFBO0FBRWxDLElBQUEsS0FBSyxJQUFJRyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdtbkIsR0FBRyxDQUFDdG5CLE1BQU0sRUFBRSxFQUFFRyxDQUFDLEVBQUU7TUFDbkN1bUIsS0FBSyxDQUFDdm1CLENBQUMsQ0FBQyxHQUFHbW5CLEdBQUcsQ0FBQ1gsVUFBVSxDQUFDeG1CLENBQUMsQ0FBQyxDQUFBO0FBQzlCLEtBQUE7QUFDRixHQUFBO0FBRUEsRUFBQSxPQUFPb25CLG9CQUFvQixDQUFDQyxVQUFVLENBQUNDLFlBQVksQ0FBQ2YsS0FBSyxDQUFDLEVBQUVBLEtBQUssQ0FBQzFtQixNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUNoRixDQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVN1bkIsb0JBQW9CQSxDQUFDRyxLQUFLLEVBQUU7RUFDbkMsTUFBTUMsTUFBTSxHQUFHLEVBQUUsQ0FBQTtBQUNqQixFQUFBLE1BQU1DLFFBQVEsR0FBR0YsS0FBSyxDQUFDMW5CLE1BQU0sR0FBRyxFQUFFLENBQUE7RUFDbEMsTUFBTTZuQixNQUFNLEdBQUcsa0JBQWtCLENBQUE7QUFFakMsRUFBQSxLQUFLLElBQUkxbkIsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHeW5CLFFBQVEsRUFBRXpuQixDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ3BDLElBQUEsTUFBTWEsQ0FBQyxHQUFHMG1CLEtBQUssQ0FBQ3ZuQixDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUtBLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFBO0lBQ3pDLE1BQU0ybkIsR0FBRyxHQUFHekIsUUFBUSxDQUFDd0IsTUFBTSxDQUFDRSxNQUFNLENBQUMvbUIsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRzZtQixNQUFNLENBQUNFLE1BQU0sQ0FBQy9tQixDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7QUFDakYybUIsSUFBQUEsTUFBTSxDQUFDdmtCLElBQUksQ0FBQzBrQixHQUFHLENBQUMsQ0FBQTtBQUNsQixHQUFBO0FBRUEsRUFBQSxPQUFPSCxNQUFNLENBQUE7QUFDZixDQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNLLGVBQWVBLENBQUNDLFlBQVksRUFBRTtFQUNyQyxPQUFPLENBQUNBLFlBQVksR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFBO0FBQ2hELENBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU1QsVUFBVUEsQ0FBQ3htQixDQUFDLEVBQUVrbkIsR0FBRyxFQUFFO0FBQzFCO0VBQ0FsbkIsQ0FBQyxDQUFDa25CLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUlBLEdBQUcsR0FBRyxFQUFFLENBQUE7RUFDL0JsbkIsQ0FBQyxDQUFDZ25CLGVBQWUsQ0FBQ0UsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUdBLEdBQUcsQ0FBQTtFQUNqQyxJQUFJN1IsQ0FBQyxHQUFHLFVBQVUsQ0FBQTtFQUNsQixJQUFJOFIsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFBO0VBQ2xCLElBQUk1TixDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUE7RUFDbkIsSUFBSW5FLENBQUMsR0FBRyxTQUFTLENBQUE7QUFFakIsRUFBQSxLQUFLLElBQUlqVyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdhLENBQUMsQ0FBQ2hCLE1BQU0sRUFBRUcsQ0FBQyxJQUFJLEVBQUUsRUFBRTtJQUNyQyxNQUFNaW9CLElBQUksR0FBRy9SLENBQUMsQ0FBQTtJQUNkLE1BQU1nUyxJQUFJLEdBQUdGLENBQUMsQ0FBQTtJQUNkLE1BQU1HLElBQUksR0FBRy9OLENBQUMsQ0FBQTtJQUNkLE1BQU1nTyxJQUFJLEdBQUduUyxDQUFDLENBQUE7SUFDZEMsQ0FBQyxHQUFHbVMsS0FBSyxDQUFDblMsQ0FBQyxFQUFFOFIsQ0FBQyxFQUFFNU4sQ0FBQyxFQUFFbkUsQ0FBQyxFQUFFcFYsQ0FBQyxDQUFDYixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUMxQ2lXLENBQUMsR0FBR29TLEtBQUssQ0FBQ3BTLENBQUMsRUFBRUMsQ0FBQyxFQUFFOFIsQ0FBQyxFQUFFNU4sQ0FBQyxFQUFFdlosQ0FBQyxDQUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDL0NvYSxDQUFDLEdBQUdpTyxLQUFLLENBQUNqTyxDQUFDLEVBQUVuRSxDQUFDLEVBQUVDLENBQUMsRUFBRThSLENBQUMsRUFBRW5uQixDQUFDLENBQUNiLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUE7SUFDOUNnb0IsQ0FBQyxHQUFHSyxLQUFLLENBQUNMLENBQUMsRUFBRTVOLENBQUMsRUFBRW5FLENBQUMsRUFBRUMsQ0FBQyxFQUFFclYsQ0FBQyxDQUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDaERrVyxDQUFDLEdBQUdtUyxLQUFLLENBQUNuUyxDQUFDLEVBQUU4UixDQUFDLEVBQUU1TixDQUFDLEVBQUVuRSxDQUFDLEVBQUVwVixDQUFDLENBQUNiLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUM5Q2lXLENBQUMsR0FBR29TLEtBQUssQ0FBQ3BTLENBQUMsRUFBRUMsQ0FBQyxFQUFFOFIsQ0FBQyxFQUFFNU4sQ0FBQyxFQUFFdlosQ0FBQyxDQUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFBO0lBQy9Db2EsQ0FBQyxHQUFHaU8sS0FBSyxDQUFDak8sQ0FBQyxFQUFFbkUsQ0FBQyxFQUFFQyxDQUFDLEVBQUU4UixDQUFDLEVBQUVubkIsQ0FBQyxDQUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDaERnb0IsQ0FBQyxHQUFHSyxLQUFLLENBQUNMLENBQUMsRUFBRTVOLENBQUMsRUFBRW5FLENBQUMsRUFBRUMsQ0FBQyxFQUFFclYsQ0FBQyxDQUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDOUNrVyxDQUFDLEdBQUdtUyxLQUFLLENBQUNuUyxDQUFDLEVBQUU4UixDQUFDLEVBQUU1TixDQUFDLEVBQUVuRSxDQUFDLEVBQUVwVixDQUFDLENBQUNiLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUE7SUFDOUNpVyxDQUFDLEdBQUdvUyxLQUFLLENBQUNwUyxDQUFDLEVBQUVDLENBQUMsRUFBRThSLENBQUMsRUFBRTVOLENBQUMsRUFBRXZaLENBQUMsQ0FBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ2hEb2EsQ0FBQyxHQUFHaU8sS0FBSyxDQUFDak8sQ0FBQyxFQUFFbkUsQ0FBQyxFQUFFQyxDQUFDLEVBQUU4UixDQUFDLEVBQUVubkIsQ0FBQyxDQUFDYixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDNUNnb0IsQ0FBQyxHQUFHSyxLQUFLLENBQUNMLENBQUMsRUFBRTVOLENBQUMsRUFBRW5FLENBQUMsRUFBRUMsQ0FBQyxFQUFFclYsQ0FBQyxDQUFDYixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDakRrVyxDQUFDLEdBQUdtUyxLQUFLLENBQUNuUyxDQUFDLEVBQUU4UixDQUFDLEVBQUU1TixDQUFDLEVBQUVuRSxDQUFDLEVBQUVwVixDQUFDLENBQUNiLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUE7SUFDL0NpVyxDQUFDLEdBQUdvUyxLQUFLLENBQUNwUyxDQUFDLEVBQUVDLENBQUMsRUFBRThSLENBQUMsRUFBRTVOLENBQUMsRUFBRXZaLENBQUMsQ0FBQ2IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQy9Db2EsQ0FBQyxHQUFHaU8sS0FBSyxDQUFDak8sQ0FBQyxFQUFFbkUsQ0FBQyxFQUFFQyxDQUFDLEVBQUU4UixDQUFDLEVBQUVubkIsQ0FBQyxDQUFDYixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDakRnb0IsQ0FBQyxHQUFHSyxLQUFLLENBQUNMLENBQUMsRUFBRTVOLENBQUMsRUFBRW5FLENBQUMsRUFBRUMsQ0FBQyxFQUFFclYsQ0FBQyxDQUFDYixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFBO0lBQ2hEa1csQ0FBQyxHQUFHb1MsS0FBSyxDQUFDcFMsQ0FBQyxFQUFFOFIsQ0FBQyxFQUFFNU4sQ0FBQyxFQUFFbkUsQ0FBQyxFQUFFcFYsQ0FBQyxDQUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDOUNpVyxDQUFDLEdBQUdxUyxLQUFLLENBQUNyUyxDQUFDLEVBQUVDLENBQUMsRUFBRThSLENBQUMsRUFBRTVOLENBQUMsRUFBRXZaLENBQUMsQ0FBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQy9Db2EsQ0FBQyxHQUFHa08sS0FBSyxDQUFDbE8sQ0FBQyxFQUFFbkUsQ0FBQyxFQUFFQyxDQUFDLEVBQUU4UixDQUFDLEVBQUVubkIsQ0FBQyxDQUFDYixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFBO0lBQy9DZ29CLENBQUMsR0FBR00sS0FBSyxDQUFDTixDQUFDLEVBQUU1TixDQUFDLEVBQUVuRSxDQUFDLEVBQUVDLENBQUMsRUFBRXJWLENBQUMsQ0FBQ2IsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDM0NrVyxDQUFDLEdBQUdvUyxLQUFLLENBQUNwUyxDQUFDLEVBQUU4UixDQUFDLEVBQUU1TixDQUFDLEVBQUVuRSxDQUFDLEVBQUVwVixDQUFDLENBQUNiLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUM5Q2lXLENBQUMsR0FBR3FTLEtBQUssQ0FBQ3JTLENBQUMsRUFBRUMsQ0FBQyxFQUFFOFIsQ0FBQyxFQUFFNU4sQ0FBQyxFQUFFdlosQ0FBQyxDQUFDYixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFBO0lBQzdDb2EsQ0FBQyxHQUFHa08sS0FBSyxDQUFDbE8sQ0FBQyxFQUFFbkUsQ0FBQyxFQUFFQyxDQUFDLEVBQUU4UixDQUFDLEVBQUVubkIsQ0FBQyxDQUFDYixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDaERnb0IsQ0FBQyxHQUFHTSxLQUFLLENBQUNOLENBQUMsRUFBRTVOLENBQUMsRUFBRW5FLENBQUMsRUFBRUMsQ0FBQyxFQUFFclYsQ0FBQyxDQUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDL0NrVyxDQUFDLEdBQUdvUyxLQUFLLENBQUNwUyxDQUFDLEVBQUU4UixDQUFDLEVBQUU1TixDQUFDLEVBQUVuRSxDQUFDLEVBQUVwVixDQUFDLENBQUNiLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUE7SUFDN0NpVyxDQUFDLEdBQUdxUyxLQUFLLENBQUNyUyxDQUFDLEVBQUVDLENBQUMsRUFBRThSLENBQUMsRUFBRTVOLENBQUMsRUFBRXZaLENBQUMsQ0FBQ2IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ2hEb2EsQ0FBQyxHQUFHa08sS0FBSyxDQUFDbE8sQ0FBQyxFQUFFbkUsQ0FBQyxFQUFFQyxDQUFDLEVBQUU4UixDQUFDLEVBQUVubkIsQ0FBQyxDQUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDL0Nnb0IsQ0FBQyxHQUFHTSxLQUFLLENBQUNOLENBQUMsRUFBRTVOLENBQUMsRUFBRW5FLENBQUMsRUFBRUMsQ0FBQyxFQUFFclYsQ0FBQyxDQUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFBO0lBQy9Da1csQ0FBQyxHQUFHb1MsS0FBSyxDQUFDcFMsQ0FBQyxFQUFFOFIsQ0FBQyxFQUFFNU4sQ0FBQyxFQUFFbkUsQ0FBQyxFQUFFcFYsQ0FBQyxDQUFDYixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDaERpVyxDQUFDLEdBQUdxUyxLQUFLLENBQUNyUyxDQUFDLEVBQUVDLENBQUMsRUFBRThSLENBQUMsRUFBRTVOLENBQUMsRUFBRXZaLENBQUMsQ0FBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQzdDb2EsQ0FBQyxHQUFHa08sS0FBSyxDQUFDbE8sQ0FBQyxFQUFFbkUsQ0FBQyxFQUFFQyxDQUFDLEVBQUU4UixDQUFDLEVBQUVubkIsQ0FBQyxDQUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFBO0lBQy9DZ29CLENBQUMsR0FBR00sS0FBSyxDQUFDTixDQUFDLEVBQUU1TixDQUFDLEVBQUVuRSxDQUFDLEVBQUVDLENBQUMsRUFBRXJWLENBQUMsQ0FBQ2IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ2pEa1csQ0FBQyxHQUFHcVMsS0FBSyxDQUFDclMsQ0FBQyxFQUFFOFIsQ0FBQyxFQUFFNU4sQ0FBQyxFQUFFbkUsQ0FBQyxFQUFFcFYsQ0FBQyxDQUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDM0NpVyxDQUFDLEdBQUdzUyxLQUFLLENBQUN0UyxDQUFDLEVBQUVDLENBQUMsRUFBRThSLENBQUMsRUFBRTVOLENBQUMsRUFBRXZaLENBQUMsQ0FBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ2hEb2EsQ0FBQyxHQUFHbU8sS0FBSyxDQUFDbk8sQ0FBQyxFQUFFbkUsQ0FBQyxFQUFFQyxDQUFDLEVBQUU4UixDQUFDLEVBQUVubkIsQ0FBQyxDQUFDYixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFBO0lBQ2hEZ29CLENBQUMsR0FBR08sS0FBSyxDQUFDUCxDQUFDLEVBQUU1TixDQUFDLEVBQUVuRSxDQUFDLEVBQUVDLENBQUMsRUFBRXJWLENBQUMsQ0FBQ2IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQy9Da1csQ0FBQyxHQUFHcVMsS0FBSyxDQUFDclMsQ0FBQyxFQUFFOFIsQ0FBQyxFQUFFNU4sQ0FBQyxFQUFFbkUsQ0FBQyxFQUFFcFYsQ0FBQyxDQUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDL0NpVyxDQUFDLEdBQUdzUyxLQUFLLENBQUN0UyxDQUFDLEVBQUVDLENBQUMsRUFBRThSLENBQUMsRUFBRTVOLENBQUMsRUFBRXZaLENBQUMsQ0FBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQTtJQUMvQ29hLENBQUMsR0FBR21PLEtBQUssQ0FBQ25PLENBQUMsRUFBRW5FLENBQUMsRUFBRUMsQ0FBQyxFQUFFOFIsQ0FBQyxFQUFFbm5CLENBQUMsQ0FBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQy9DZ29CLENBQUMsR0FBR08sS0FBSyxDQUFDUCxDQUFDLEVBQUU1TixDQUFDLEVBQUVuRSxDQUFDLEVBQUVDLENBQUMsRUFBRXJWLENBQUMsQ0FBQ2IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ2pEa1csQ0FBQyxHQUFHcVMsS0FBSyxDQUFDclMsQ0FBQyxFQUFFOFIsQ0FBQyxFQUFFNU4sQ0FBQyxFQUFFbkUsQ0FBQyxFQUFFcFYsQ0FBQyxDQUFDYixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFBO0lBQzlDaVcsQ0FBQyxHQUFHc1MsS0FBSyxDQUFDdFMsQ0FBQyxFQUFFQyxDQUFDLEVBQUU4UixDQUFDLEVBQUU1TixDQUFDLEVBQUV2WixDQUFDLENBQUNiLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQzNDb2EsQ0FBQyxHQUFHbU8sS0FBSyxDQUFDbk8sQ0FBQyxFQUFFbkUsQ0FBQyxFQUFFQyxDQUFDLEVBQUU4UixDQUFDLEVBQUVubkIsQ0FBQyxDQUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDL0Nnb0IsQ0FBQyxHQUFHTyxLQUFLLENBQUNQLENBQUMsRUFBRTVOLENBQUMsRUFBRW5FLENBQUMsRUFBRUMsQ0FBQyxFQUFFclYsQ0FBQyxDQUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFBO0lBQzdDa1csQ0FBQyxHQUFHcVMsS0FBSyxDQUFDclMsQ0FBQyxFQUFFOFIsQ0FBQyxFQUFFNU4sQ0FBQyxFQUFFbkUsQ0FBQyxFQUFFcFYsQ0FBQyxDQUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDOUNpVyxDQUFDLEdBQUdzUyxLQUFLLENBQUN0UyxDQUFDLEVBQUVDLENBQUMsRUFBRThSLENBQUMsRUFBRTVOLENBQUMsRUFBRXZaLENBQUMsQ0FBQ2IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ2hEb2EsQ0FBQyxHQUFHbU8sS0FBSyxDQUFDbk8sQ0FBQyxFQUFFbkUsQ0FBQyxFQUFFQyxDQUFDLEVBQUU4UixDQUFDLEVBQUVubkIsQ0FBQyxDQUFDYixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFBO0lBQy9DZ29CLENBQUMsR0FBR08sS0FBSyxDQUFDUCxDQUFDLEVBQUU1TixDQUFDLEVBQUVuRSxDQUFDLEVBQUVDLENBQUMsRUFBRXJWLENBQUMsQ0FBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQy9Da1csQ0FBQyxHQUFHc1MsS0FBSyxDQUFDdFMsQ0FBQyxFQUFFOFIsQ0FBQyxFQUFFNU4sQ0FBQyxFQUFFbkUsQ0FBQyxFQUFFcFYsQ0FBQyxDQUFDYixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUMxQ2lXLENBQUMsR0FBR3VTLEtBQUssQ0FBQ3ZTLENBQUMsRUFBRUMsQ0FBQyxFQUFFOFIsQ0FBQyxFQUFFNU4sQ0FBQyxFQUFFdlosQ0FBQyxDQUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFBO0lBQy9Db2EsQ0FBQyxHQUFHb08sS0FBSyxDQUFDcE8sQ0FBQyxFQUFFbkUsQ0FBQyxFQUFFQyxDQUFDLEVBQUU4UixDQUFDLEVBQUVubkIsQ0FBQyxDQUFDYixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDakRnb0IsQ0FBQyxHQUFHUSxLQUFLLENBQUNSLENBQUMsRUFBRTVOLENBQUMsRUFBRW5FLENBQUMsRUFBRUMsQ0FBQyxFQUFFclYsQ0FBQyxDQUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDOUNrVyxDQUFDLEdBQUdzUyxLQUFLLENBQUN0UyxDQUFDLEVBQUU4UixDQUFDLEVBQUU1TixDQUFDLEVBQUVuRSxDQUFDLEVBQUVwVixDQUFDLENBQUNiLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUE7SUFDL0NpVyxDQUFDLEdBQUd1UyxLQUFLLENBQUN2UyxDQUFDLEVBQUVDLENBQUMsRUFBRThSLENBQUMsRUFBRTVOLENBQUMsRUFBRXZaLENBQUMsQ0FBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ2hEb2EsQ0FBQyxHQUFHb08sS0FBSyxDQUFDcE8sQ0FBQyxFQUFFbkUsQ0FBQyxFQUFFQyxDQUFDLEVBQUU4UixDQUFDLEVBQUVubkIsQ0FBQyxDQUFDYixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDOUNnb0IsQ0FBQyxHQUFHUSxLQUFLLENBQUNSLENBQUMsRUFBRTVOLENBQUMsRUFBRW5FLENBQUMsRUFBRUMsQ0FBQyxFQUFFclYsQ0FBQyxDQUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDaERrVyxDQUFDLEdBQUdzUyxLQUFLLENBQUN0UyxDQUFDLEVBQUU4UixDQUFDLEVBQUU1TixDQUFDLEVBQUVuRSxDQUFDLEVBQUVwVixDQUFDLENBQUNiLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUE7SUFDOUNpVyxDQUFDLEdBQUd1UyxLQUFLLENBQUN2UyxDQUFDLEVBQUVDLENBQUMsRUFBRThSLENBQUMsRUFBRTVOLENBQUMsRUFBRXZaLENBQUMsQ0FBQ2IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQy9Db2EsQ0FBQyxHQUFHb08sS0FBSyxDQUFDcE8sQ0FBQyxFQUFFbkUsQ0FBQyxFQUFFQyxDQUFDLEVBQUU4UixDQUFDLEVBQUVubkIsQ0FBQyxDQUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDaERnb0IsQ0FBQyxHQUFHUSxLQUFLLENBQUNSLENBQUMsRUFBRTVOLENBQUMsRUFBRW5FLENBQUMsRUFBRUMsQ0FBQyxFQUFFclYsQ0FBQyxDQUFDYixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFBO0lBQ2hEa1csQ0FBQyxHQUFHc1MsS0FBSyxDQUFDdFMsQ0FBQyxFQUFFOFIsQ0FBQyxFQUFFNU4sQ0FBQyxFQUFFbkUsQ0FBQyxFQUFFcFYsQ0FBQyxDQUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDOUNpVyxDQUFDLEdBQUd1UyxLQUFLLENBQUN2UyxDQUFDLEVBQUVDLENBQUMsRUFBRThSLENBQUMsRUFBRTVOLENBQUMsRUFBRXZaLENBQUMsQ0FBQ2IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ2pEb2EsQ0FBQyxHQUFHb08sS0FBSyxDQUFDcE8sQ0FBQyxFQUFFbkUsQ0FBQyxFQUFFQyxDQUFDLEVBQUU4UixDQUFDLEVBQUVubkIsQ0FBQyxDQUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFBO0lBQzlDZ29CLENBQUMsR0FBR1EsS0FBSyxDQUFDUixDQUFDLEVBQUU1TixDQUFDLEVBQUVuRSxDQUFDLEVBQUVDLENBQUMsRUFBRXJWLENBQUMsQ0FBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0FBQy9Da1csSUFBQUEsQ0FBQyxHQUFHdVMsT0FBTyxDQUFDdlMsQ0FBQyxFQUFFK1IsSUFBSSxDQUFDLENBQUE7QUFDcEJELElBQUFBLENBQUMsR0FBR1MsT0FBTyxDQUFDVCxDQUFDLEVBQUVFLElBQUksQ0FBQyxDQUFBO0FBQ3BCOU4sSUFBQUEsQ0FBQyxHQUFHcU8sT0FBTyxDQUFDck8sQ0FBQyxFQUFFK04sSUFBSSxDQUFDLENBQUE7QUFDcEJsUyxJQUFBQSxDQUFDLEdBQUd3UyxPQUFPLENBQUN4UyxDQUFDLEVBQUVtUyxJQUFJLENBQUMsQ0FBQTtBQUN0QixHQUFBO0VBRUEsT0FBTyxDQUFDbFMsQ0FBQyxFQUFFOFIsQ0FBQyxFQUFFNU4sQ0FBQyxFQUFFbkUsQ0FBQyxDQUFDLENBQUE7QUFDckIsQ0FBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNxUixZQUFZQSxDQUFDQyxLQUFLLEVBQUU7QUFDM0IsRUFBQSxJQUFJQSxLQUFLLENBQUMxbkIsTUFBTSxLQUFLLENBQUMsRUFBRTtBQUN0QixJQUFBLE9BQU8sRUFBRSxDQUFBO0FBQ1gsR0FBQTtBQUVBLEVBQUEsTUFBTTZvQixPQUFPLEdBQUduQixLQUFLLENBQUMxbkIsTUFBTSxHQUFHLENBQUMsQ0FBQTtFQUNoQyxNQUFNMm5CLE1BQU0sR0FBRyxJQUFJbUIsV0FBVyxDQUFDZCxlQUFlLENBQUNhLE9BQU8sQ0FBQyxDQUFDLENBQUE7QUFFeEQsRUFBQSxLQUFLLElBQUkxb0IsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHMG9CLE9BQU8sRUFBRTFvQixDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ25Dd25CLElBQUFBLE1BQU0sQ0FBQ3huQixDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQ3VuQixLQUFLLENBQUN2bkIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBS0EsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtBQUNuRCxHQUFBO0FBRUEsRUFBQSxPQUFPd25CLE1BQU0sQ0FBQTtBQUNmLENBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTaUIsT0FBT0EsQ0FBQzVuQixDQUFDLEVBQUVDLENBQUMsRUFBRTtFQUNyQixNQUFNOG5CLEdBQUcsR0FBRyxDQUFDL25CLENBQUMsR0FBRyxNQUFNLEtBQUtDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQTtBQUN2QyxFQUFBLE1BQU0rbkIsR0FBRyxHQUFHLENBQUNob0IsQ0FBQyxJQUFJLEVBQUUsS0FBS0MsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJOG5CLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQTtBQUMvQyxFQUFBLE9BQU9DLEdBQUcsSUFBSSxFQUFFLEdBQUdELEdBQUcsR0FBRyxNQUFNLENBQUE7QUFDakMsQ0FBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTRSxhQUFhQSxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtFQUMvQixPQUFPRCxHQUFHLElBQUlDLEdBQUcsR0FBR0QsR0FBRyxLQUFLLEVBQUUsR0FBR0MsR0FBRyxDQUFBO0FBQ3RDLENBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0MsTUFBTUEsQ0FBQ0MsQ0FBQyxFQUFFaFQsQ0FBQyxFQUFFOFIsQ0FBQyxFQUFFbm5CLENBQUMsRUFBRXFULENBQUMsRUFBRUYsQ0FBQyxFQUFFO0VBQ2hDLE9BQU95VSxPQUFPLENBQUNLLGFBQWEsQ0FBQ0wsT0FBTyxDQUFDQSxPQUFPLENBQUN2UyxDQUFDLEVBQUVnVCxDQUFDLENBQUMsRUFBRVQsT0FBTyxDQUFDNW5CLENBQUMsRUFBRW1ULENBQUMsQ0FBQyxDQUFDLEVBQUVFLENBQUMsQ0FBQyxFQUFFOFQsQ0FBQyxDQUFDLENBQUE7QUFDNUUsQ0FBQTtBQUVBLFNBQVNLLEtBQUtBLENBQUNuUyxDQUFDLEVBQUU4UixDQUFDLEVBQUU1TixDQUFDLEVBQUVuRSxDQUFDLEVBQUVwVixDQUFDLEVBQUVxVCxDQUFDLEVBQUVGLENBQUMsRUFBRTtFQUNsQyxPQUFPaVYsTUFBTSxDQUFDakIsQ0FBQyxHQUFHNU4sQ0FBQyxHQUFHLENBQUM0TixDQUFDLEdBQUcvUixDQUFDLEVBQUVDLENBQUMsRUFBRThSLENBQUMsRUFBRW5uQixDQUFDLEVBQUVxVCxDQUFDLEVBQUVGLENBQUMsQ0FBQyxDQUFBO0FBQzlDLENBQUE7QUFFQSxTQUFTc1UsS0FBS0EsQ0FBQ3BTLENBQUMsRUFBRThSLENBQUMsRUFBRTVOLENBQUMsRUFBRW5FLENBQUMsRUFBRXBWLENBQUMsRUFBRXFULENBQUMsRUFBRUYsQ0FBQyxFQUFFO0VBQ2xDLE9BQU9pVixNQUFNLENBQUNqQixDQUFDLEdBQUcvUixDQUFDLEdBQUdtRSxDQUFDLEdBQUcsQ0FBQ25FLENBQUMsRUFBRUMsQ0FBQyxFQUFFOFIsQ0FBQyxFQUFFbm5CLENBQUMsRUFBRXFULENBQUMsRUFBRUYsQ0FBQyxDQUFDLENBQUE7QUFDOUMsQ0FBQTtBQUVBLFNBQVN1VSxLQUFLQSxDQUFDclMsQ0FBQyxFQUFFOFIsQ0FBQyxFQUFFNU4sQ0FBQyxFQUFFbkUsQ0FBQyxFQUFFcFYsQ0FBQyxFQUFFcVQsQ0FBQyxFQUFFRixDQUFDLEVBQUU7QUFDbEMsRUFBQSxPQUFPaVYsTUFBTSxDQUFDakIsQ0FBQyxHQUFHNU4sQ0FBQyxHQUFHbkUsQ0FBQyxFQUFFQyxDQUFDLEVBQUU4UixDQUFDLEVBQUVubkIsQ0FBQyxFQUFFcVQsQ0FBQyxFQUFFRixDQUFDLENBQUMsQ0FBQTtBQUN6QyxDQUFBO0FBRUEsU0FBU3dVLEtBQUtBLENBQUN0UyxDQUFDLEVBQUU4UixDQUFDLEVBQUU1TixDQUFDLEVBQUVuRSxDQUFDLEVBQUVwVixDQUFDLEVBQUVxVCxDQUFDLEVBQUVGLENBQUMsRUFBRTtBQUNsQyxFQUFBLE9BQU9pVixNQUFNLENBQUM3TyxDQUFDLElBQUk0TixDQUFDLEdBQUcsQ0FBQy9SLENBQUMsQ0FBQyxFQUFFQyxDQUFDLEVBQUU4UixDQUFDLEVBQUVubkIsQ0FBQyxFQUFFcVQsQ0FBQyxFQUFFRixDQUFDLENBQUMsQ0FBQTtBQUM1Qzs7QUNsTlcyUyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRU8sR0FBRzs7QUNGOUIsTUFBTWlDLFVBQVUsR0FBRyxPQUFPN0QsTUFBTSxLQUFLLFdBQVcsSUFBSUEsTUFBTSxDQUFDNkQsVUFBVSxJQUFJN0QsTUFBTSxDQUFDNkQsVUFBVSxDQUFDM2MsSUFBSSxDQUFDOFksTUFBTSxDQUFDLENBQUE7QUFDdkcsYUFBZTtBQUNiNkQsRUFBQUEsVUFBQUE7QUFDRixDQUFDOztBQ0NELFNBQVNDLEVBQUVBLENBQUNsa0IsT0FBTyxFQUFFOGhCLEdBQUcsRUFBRWpCLE1BQU0sRUFBRTtFQUNoQyxJQUFJc0QsTUFBTSxDQUFDRixVQUFVLElBQUksQ0FBQ25DLEdBQUcsSUFBSSxDQUFDOWhCLE9BQU8sRUFBRTtJQUN6QyxPQUFPbWtCLE1BQU0sQ0FBQ0YsVUFBVSxFQUFFLENBQUE7QUFDNUIsR0FBQTtBQUVBamtCLEVBQUFBLE9BQU8sR0FBR0EsT0FBTyxJQUFJLEVBQUUsQ0FBQTtBQUN2QixFQUFBLE1BQU1va0IsSUFBSSxHQUFHcGtCLE9BQU8sQ0FBQ3FrQixNQUFNLElBQUksQ0FBQ3JrQixPQUFPLENBQUNtZ0IsR0FBRyxJQUFJQSxHQUFHLEdBQUcsQ0FBQzs7RUFFdERpRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUdBLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFBO0FBQy9CQSxFQUFBQSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUdBLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDOztBQUVoQyxFQUFBLElBQUl0QyxHQUFHLEVBQUU7SUFDUGpCLE1BQU0sR0FBR0EsTUFBTSxJQUFJLENBQUMsQ0FBQTtJQUVwQixLQUFLLElBQUkvbEIsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFQSxDQUFDLEVBQUU7TUFDM0JnbkIsR0FBRyxDQUFDakIsTUFBTSxHQUFHL2xCLENBQUMsQ0FBQyxHQUFHc3BCLElBQUksQ0FBQ3RwQixDQUFDLENBQUMsQ0FBQTtBQUMzQixLQUFBO0FBRUEsSUFBQSxPQUFPZ25CLEdBQUcsQ0FBQTtBQUNaLEdBQUE7RUFFQSxPQUFPbkIsZUFBZSxDQUFDeUQsSUFBSSxDQUFDLENBQUE7QUFDOUI7O0FDMUJBO0FBQ0E7QUFDQSxTQUFTaFAsQ0FBQ0EsQ0FBQ3BHLENBQUMsRUFBRXJULENBQUMsRUFBRUMsQ0FBQyxFQUFFMG9CLENBQUMsRUFBRTtBQUNyQixFQUFBLFFBQVF0VixDQUFDO0FBQ1AsSUFBQSxLQUFLLENBQUM7QUFDSixNQUFBLE9BQU9yVCxDQUFDLEdBQUdDLENBQUMsR0FBRyxDQUFDRCxDQUFDLEdBQUcyb0IsQ0FBQyxDQUFBO0FBRXZCLElBQUEsS0FBSyxDQUFDO0FBQ0osTUFBQSxPQUFPM29CLENBQUMsR0FBR0MsQ0FBQyxHQUFHMG9CLENBQUMsQ0FBQTtBQUVsQixJQUFBLEtBQUssQ0FBQztNQUNKLE9BQU8zb0IsQ0FBQyxHQUFHQyxDQUFDLEdBQUdELENBQUMsR0FBRzJvQixDQUFDLEdBQUcxb0IsQ0FBQyxHQUFHMG9CLENBQUMsQ0FBQTtBQUU5QixJQUFBLEtBQUssQ0FBQztBQUNKLE1BQUEsT0FBTzNvQixDQUFDLEdBQUdDLENBQUMsR0FBRzBvQixDQUFDLENBQUE7QUFBQyxHQUFBO0FBRXZCLENBQUE7QUFFQSxTQUFTQyxJQUFJQSxDQUFDNW9CLENBQUMsRUFBRXVVLENBQUMsRUFBRTtFQUNsQixPQUFPdlUsQ0FBQyxJQUFJdVUsQ0FBQyxHQUFHdlUsQ0FBQyxLQUFLLEVBQUUsR0FBR3VVLENBQUMsQ0FBQTtBQUM5QixDQUFBO0FBRUEsU0FBU3NVLElBQUlBLENBQUNuRCxLQUFLLEVBQUU7RUFDbkIsTUFBTW9ELENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFBO0FBQzFELEVBQUEsTUFBTUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFBO0FBRXRFLEVBQUEsSUFBSSxPQUFPckQsS0FBSyxLQUFLLFFBQVEsRUFBRTtJQUM3QixNQUFNWSxHQUFHLEdBQUdkLFFBQVEsQ0FBQ0Msa0JBQWtCLENBQUNDLEtBQUssQ0FBQyxDQUFDLENBQUM7O0FBRWhEQSxJQUFBQSxLQUFLLEdBQUcsRUFBRSxDQUFBO0FBRVYsSUFBQSxLQUFLLElBQUl2bUIsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHbW5CLEdBQUcsQ0FBQ3RuQixNQUFNLEVBQUUsRUFBRUcsQ0FBQyxFQUFFO01BQ25DdW1CLEtBQUssQ0FBQ3RqQixJQUFJLENBQUNra0IsR0FBRyxDQUFDWCxVQUFVLENBQUN4bUIsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUMvQixLQUFBO0dBQ0QsTUFBTSxJQUFJLENBQUNzWCxLQUFLLENBQUN1UyxPQUFPLENBQUN0RCxLQUFLLENBQUMsRUFBRTtBQUNoQztJQUNBQSxLQUFLLEdBQUdqUCxLQUFLLENBQUM5UCxTQUFTLENBQUM1RCxLQUFLLENBQUNvSCxJQUFJLENBQUN1YixLQUFLLENBQUMsQ0FBQTtBQUMzQyxHQUFBO0FBRUFBLEVBQUFBLEtBQUssQ0FBQ3RqQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7RUFDaEIsTUFBTWlYLENBQUMsR0FBR3FNLEtBQUssQ0FBQzFtQixNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtFQUM5QixNQUFNaXFCLENBQUMsR0FBRy9vQixJQUFJLENBQUN5WCxJQUFJLENBQUMwQixDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUE7QUFDM0IsRUFBQSxNQUFNNlAsQ0FBQyxHQUFHLElBQUl6UyxLQUFLLENBQUN3UyxDQUFDLENBQUMsQ0FBQTtFQUV0QixLQUFLLElBQUk5cEIsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHOHBCLENBQUMsRUFBRSxFQUFFOXBCLENBQUMsRUFBRTtBQUMxQixJQUFBLE1BQU04bEIsR0FBRyxHQUFHLElBQUk2QyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUE7SUFFL0IsS0FBSyxJQUFJcUIsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFQSxDQUFDLEVBQUU7TUFDM0JsRSxHQUFHLENBQUNrRSxDQUFDLENBQUMsR0FBR3pELEtBQUssQ0FBQ3ZtQixDQUFDLEdBQUcsRUFBRSxHQUFHZ3FCLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUd6RCxLQUFLLENBQUN2bUIsQ0FBQyxHQUFHLEVBQUUsR0FBR2dxQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBR3pELEtBQUssQ0FBQ3ZtQixDQUFDLEdBQUcsRUFBRSxHQUFHZ3FCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHekQsS0FBSyxDQUFDdm1CLENBQUMsR0FBRyxFQUFFLEdBQUdncUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUNySSxLQUFBO0FBRUFELElBQUFBLENBQUMsQ0FBQy9wQixDQUFDLENBQUMsR0FBRzhsQixHQUFHLENBQUE7QUFDWixHQUFBO0VBRUFpRSxDQUFDLENBQUNELENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDdkQsS0FBSyxDQUFDMW1CLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHa0IsSUFBSSxDQUFDa3BCLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7RUFDdkRGLENBQUMsQ0FBQ0QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHL29CLElBQUksQ0FBQ3dZLEtBQUssQ0FBQ3dRLENBQUMsQ0FBQ0QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7QUFDdkNDLEVBQUFBLENBQUMsQ0FBQ0QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUN2RCxLQUFLLENBQUMxbUIsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFBO0VBRWxELEtBQUssSUFBSUcsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHOHBCLENBQUMsRUFBRSxFQUFFOXBCLENBQUMsRUFBRTtBQUMxQixJQUFBLE1BQU1rcUIsQ0FBQyxHQUFHLElBQUl2QixXQUFXLENBQUMsRUFBRSxDQUFDLENBQUE7SUFFN0IsS0FBSyxJQUFJM1UsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFQSxDQUFDLEVBQUU7TUFDM0JrVyxDQUFDLENBQUNsVyxDQUFDLENBQUMsR0FBRytWLENBQUMsQ0FBQy9wQixDQUFDLENBQUMsQ0FBQ2dVLENBQUMsQ0FBQyxDQUFBO0FBQ2hCLEtBQUE7SUFFQSxLQUFLLElBQUlBLENBQUMsR0FBRyxFQUFFLEVBQUVBLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRUEsQ0FBQyxFQUFFO0FBQzVCa1csTUFBQUEsQ0FBQyxDQUFDbFcsQ0FBQyxDQUFDLEdBQUd5VixJQUFJLENBQUNTLENBQUMsQ0FBQ2xXLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBR2tXLENBQUMsQ0FBQ2xXLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBR2tXLENBQUMsQ0FBQ2xXLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBR2tXLENBQUMsQ0FBQ2xXLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtBQUM3RCxLQUFBO0FBRUEsSUFBQSxJQUFJa0MsQ0FBQyxHQUFHMFQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ1osSUFBQSxJQUFJNUIsQ0FBQyxHQUFHNEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ1osSUFBQSxJQUFJeFAsQ0FBQyxHQUFHd1AsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ1osSUFBQSxJQUFJM1QsQ0FBQyxHQUFHMlQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ1osSUFBQSxJQUFJbm5CLENBQUMsR0FBR21uQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFFWixLQUFLLElBQUk1VixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUVBLENBQUMsRUFBRTtNQUMzQixNQUFNRSxDQUFDLEdBQUduVCxJQUFJLENBQUN3WSxLQUFLLENBQUN2RixDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUE7QUFDNUIsTUFBQSxNQUFNbVcsQ0FBQyxHQUFHVixJQUFJLENBQUN2VCxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUdvRSxDQUFDLENBQUNwRyxDQUFDLEVBQUU4VCxDQUFDLEVBQUU1TixDQUFDLEVBQUVuRSxDQUFDLENBQUMsR0FBR3hULENBQUMsR0FBR2tuQixDQUFDLENBQUN6VixDQUFDLENBQUMsR0FBR2dXLENBQUMsQ0FBQ2xXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUM1RHZSLE1BQUFBLENBQUMsR0FBR3dULENBQUMsQ0FBQTtBQUNMQSxNQUFBQSxDQUFDLEdBQUdtRSxDQUFDLENBQUE7TUFDTEEsQ0FBQyxHQUFHcVAsSUFBSSxDQUFDekIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUNyQkEsTUFBQUEsQ0FBQyxHQUFHOVIsQ0FBQyxDQUFBO0FBQ0xBLE1BQUFBLENBQUMsR0FBR2lVLENBQUMsQ0FBQTtBQUNQLEtBQUE7SUFFQVAsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcxVCxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3JCMFQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUc1QixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3JCNEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUd4UCxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3JCd1AsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUczVCxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3JCMlQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdubkIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUN2QixHQUFBO0FBRUEsRUFBQSxPQUFPLENBQUNtbkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxFQUFFQSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxFQUFFQSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxFQUFFQSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRUEs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
