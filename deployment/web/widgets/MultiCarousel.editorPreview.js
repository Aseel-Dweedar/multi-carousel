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

var css_248z$2 = ".alice-carousel .animated {\n  animation-fill-mode: both;\n}\n\n.alice-carousel .animated-out {\n  z-index: 1;\n}\n\n.alice-carousel .fadeOut {\n  animation-name: fadeOut;\n}\n\n@keyframes fadeOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    visibility: hidden;\n  }\n}\n\n.alice-carousel {\n  position: relative;\n  width: 100%;\n  margin: auto;\n  direction: ltr;\n}\n\n.alice-carousel__wrapper {\n  position: relative;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  box-sizing: border-box;\n  width: 100%;\n  height: auto;\n}\n\n.alice-carousel__stage {\n  position: relative;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  white-space: nowrap;\n  transform-style: flat;\n  -webkit-transform-style: flat;\n  backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n}\n\n.alice-carousel__stage-item {\n  position: relative;\n  display: inline-block;\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  vertical-align: top;\n  white-space: normal;\n  line-height: 0;\n}\n\n.alice-carousel__stage-item * {\n  line-height: initial;\n}\n\n.alice-carousel__stage-item.__hidden {\n  opacity: 0;\n  overflow: hidden;\n}\n\n.alice-carousel__prev-btn,\n.alice-carousel__next-btn {\n  display: inline-block;\n  box-sizing: border-box;\n  width: 50%;\n  padding: 10px 5px;\n}\n\n.alice-carousel__prev-btn [data-area]::after,\n.alice-carousel__next-btn [data-area]::after {\n  position: relative;\n  content: attr(data-area);\n  text-transform: capitalize;\n}\n\n.alice-carousel__prev-btn {\n  text-align: right;\n}\n\n.alice-carousel__prev-btn-item,\n.alice-carousel__next-btn-item {\n  display: inline-block;\n  cursor: pointer;\n  padding: 5px;\n  margin: 0;\n  color: #465798;\n}\n\n.alice-carousel__prev-btn-item:hover,\n.alice-carousel__next-btn-item:hover {\n  color: darkred;\n}\n\n.alice-carousel__prev-btn-item.__inactive,\n.alice-carousel__next-btn-item.__inactive {\n  opacity: 0.4;\n  pointer-events: none;\n}\n\n.alice-carousel__play-btn {\n  position: absolute;\n  top: 30px;\n  left: 20px;\n  display: inline-block;\n}\n\n.alice-carousel__play-btn:hover {\n  cursor: pointer;\n}\n\n.alice-carousel__play-btn-wrapper {\n  position: relative;\n  width: 32px;\n  height: 32px;\n  padding: 10px;\n  border-radius: 50%;\n  background-color: #fff;\n}\n\n.alice-carousel__play-btn-item {\n  position: absolute;\n  width: 32px;\n  height: 32px;\n  cursor: pointer;\n  border: 0;\n  outline: none;\n  background: transparent;\n}\n\n.alice-carousel__play-btn-item::before, .alice-carousel__play-btn-item::after {\n  position: absolute;\n  pointer-events: none;\n  display: block;\n  width: 0;\n  height: 0;\n  content: \"\";\n  transition: all 0.4s linear;\n  border-width: 8px 0 8px 15px;\n  border-style: solid;\n  border-color: transparent;\n  border-left-color: #465798;\n}\n\n.alice-carousel__play-btn-item::before {\n  left: 5px;\n  height: 14px;\n}\n\n.alice-carousel__play-btn-item::after {\n  top: 7px;\n  left: 18px;\n}\n\n.alice-carousel__play-btn-item.__pause::before, .alice-carousel__play-btn-item.__pause::after {\n  height: 30px;\n  border-width: 0 0 0 10px;\n}\n\n.alice-carousel__play-btn-item.__pause::after {\n  top: 0;\n  left: 18px;\n}\n\n.alice-carousel__dots {\n  margin: 30px 3px 5px;\n  padding: 0;\n  list-style: none;\n  text-align: center;\n}\n\n.alice-carousel__dots > li {\n  display: inline-block;\n}\n\n.alice-carousel__dots-item:not(.__custom) {\n  width: 8px;\n  height: 8px;\n  cursor: pointer;\n  border-radius: 50%;\n  background-color: #e0e4fb;\n}\n\n.alice-carousel__dots-item:not(.__custom):not(:last-child) {\n  margin-right: 20px;\n}\n\n.alice-carousel__dots-item:not(.__custom):hover, .alice-carousel__dots-item:not(.__custom).__active {\n  background-color: #6e7ebc;\n}\n\n.alice-carousel__slide-info {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  display: inline-block;\n  padding: 5px 10px;\n  color: #465798;\n  border-radius: 5px;\n  background-color: rgba(224, 228, 251, 0.6);\n}\n\n.alice-carousel__slide-info-item {\n  vertical-align: middle;\n  line-height: 0;\n}\n\n.multi-carousel__container .alice-carousel__prev-btn,\n.multi-carousel__container .alice-carousel__next-btn {\n    position: absolute !important;\n    top: 0;\n    height: calc(100% - 30px) !important;\n    padding: 0px !important;\n}\n\n.multi-carousel__no-dots .alice-carousel__prev-btn,\n.multi-carousel__no-dots .alice-carousel__next-btn {\n    height: 100% !important;\n}\n\n.multi-carousel__container .alice-carousel__prev-btn-item span::after,\n.multi-carousel__container .alice-carousel__next-btn-item span::after {\n    font-family: monospace;\n}\n\n.multi-carousel__container .alice-carousel__dots {\n    margin: 10px !important;\n}\n\n.multi-carousel__item {\n    margin-right: 10px;\n    border: 1px solid #efecec;\n    background-color: #fff;\n    border-radius: 4px;\n    overflow: hidden;\n}\n\n.multi-carousel__active {\n    border:2px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvYWxpY2UtY2Fyb3VzZWwuY3NzIiwiTXVsdGlDYXJvdXNlbC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtJQUNWLGtCQUFrQjtFQUNwQjtBQUNGOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7RUFDVCxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQiw2QkFBNkI7RUFDN0IsMkJBQTJCO0VBQzNCLG1DQUFtQztBQUNyQzs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFlBQVk7RUFDWixTQUFTO0VBQ1QsY0FBYztBQUNoQjs7QUFDQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUNBOztFQUVFLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsU0FBUztFQUNULGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxRQUFRO0VBQ1IsU0FBUztFQUNULFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsMEJBQTBCO0FBQzVCOztBQUNBO0VBQ0UsU0FBUztFQUNULFlBQVk7QUFDZDs7QUFDQTtFQUNFLFFBQVE7RUFDUixVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osd0JBQXdCO0FBQzFCOztBQUNBO0VBQ0UsTUFBTTtFQUNOLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsMENBQTBDO0FBQzVDOztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FDck1BOztJQUVJLDZCQUE2QjtJQUM3QixNQUFNO0lBQ04sb0NBQW9DO0lBQ3BDLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSx1QkFBdUI7QUFDM0I7O0FBRUE7O0lBRUksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJNdWx0aUNhcm91c2VsLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGljZS1jYXJvdXNlbCAuYW5pbWF0ZWQge1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuXG4uYWxpY2UtY2Fyb3VzZWwgLmFuaW1hdGVkLW91dCB7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5hbGljZS1jYXJvdXNlbCAuZmFkZU91dCB7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0O1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVPdXQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxufVxuLmFsaWNlLWNhcm91c2VsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXJlY3Rpb246IGx0cjtcbn1cblxuLmFsaWNlLWNhcm91c2VsX193cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmFsaWNlLWNhcm91c2VsX19zdGFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0cmFuc2Zvcm0tc3R5bGU6IGZsYXQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBmbGF0O1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLmFsaWNlLWNhcm91c2VsX19zdGFnZS1pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDA7XG59XG4uYWxpY2UtY2Fyb3VzZWxfX3N0YWdlLWl0ZW0gKiB7XG4gIGxpbmUtaGVpZ2h0OiBpbml0aWFsO1xufVxuLmFsaWNlLWNhcm91c2VsX19zdGFnZS1pdGVtLl9faGlkZGVuIHtcbiAgb3BhY2l0eTogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmFsaWNlLWNhcm91c2VsX19wcmV2LWJ0bixcbi5hbGljZS1jYXJvdXNlbF9fbmV4dC1idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xufVxuLmFsaWNlLWNhcm91c2VsX19wcmV2LWJ0biBbZGF0YS1hcmVhXTo6YWZ0ZXIsXG4uYWxpY2UtY2Fyb3VzZWxfX25leHQtYnRuIFtkYXRhLWFyZWFdOjphZnRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29udGVudDogYXR0cihkYXRhLWFyZWEpO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmFsaWNlLWNhcm91c2VsX19wcmV2LWJ0biB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uYWxpY2UtY2Fyb3VzZWxfX3ByZXYtYnRuLWl0ZW0sXG4uYWxpY2UtY2Fyb3VzZWxfX25leHQtYnRuLWl0ZW0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjNDY1Nzk4O1xufVxuLmFsaWNlLWNhcm91c2VsX19wcmV2LWJ0bi1pdGVtOmhvdmVyLFxuLmFsaWNlLWNhcm91c2VsX19uZXh0LWJ0bi1pdGVtOmhvdmVyIHtcbiAgY29sb3I6IGRhcmtyZWQ7XG59XG4uYWxpY2UtY2Fyb3VzZWxfX3ByZXYtYnRuLWl0ZW0uX19pbmFjdGl2ZSxcbi5hbGljZS1jYXJvdXNlbF9fbmV4dC1idG4taXRlbS5fX2luYWN0aXZlIHtcbiAgb3BhY2l0eTogMC40O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmFsaWNlLWNhcm91c2VsX19wbGF5LWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMHB4O1xuICBsZWZ0OiAyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uYWxpY2UtY2Fyb3VzZWxfX3BsYXktYnRuOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFsaWNlLWNhcm91c2VsX19wbGF5LWJ0bi13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5hbGljZS1jYXJvdXNlbF9fcGxheS1idG4taXRlbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmFsaWNlLWNhcm91c2VsX19wbGF5LWJ0bi1pdGVtOjpiZWZvcmUsIC5hbGljZS1jYXJvdXNlbF9fcGxheS1idG4taXRlbTo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgY29udGVudDogXCJcIjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgbGluZWFyO1xuICBib3JkZXItd2lkdGg6IDhweCAwIDhweCAxNXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdC1jb2xvcjogIzQ2NTc5ODtcbn1cbi5hbGljZS1jYXJvdXNlbF9fcGxheS1idG4taXRlbTo6YmVmb3JlIHtcbiAgbGVmdDogNXB4O1xuICBoZWlnaHQ6IDE0cHg7XG59XG4uYWxpY2UtY2Fyb3VzZWxfX3BsYXktYnRuLWl0ZW06OmFmdGVyIHtcbiAgdG9wOiA3cHg7XG4gIGxlZnQ6IDE4cHg7XG59XG4uYWxpY2UtY2Fyb3VzZWxfX3BsYXktYnRuLWl0ZW0uX19wYXVzZTo6YmVmb3JlLCAuYWxpY2UtY2Fyb3VzZWxfX3BsYXktYnRuLWl0ZW0uX19wYXVzZTo6YWZ0ZXIge1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci13aWR0aDogMCAwIDAgMTBweDtcbn1cbi5hbGljZS1jYXJvdXNlbF9fcGxheS1idG4taXRlbS5fX3BhdXNlOjphZnRlciB7XG4gIHRvcDogMDtcbiAgbGVmdDogMThweDtcbn1cblxuLmFsaWNlLWNhcm91c2VsX19kb3RzIHtcbiAgbWFyZ2luOiAzMHB4IDNweCA1cHg7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hbGljZS1jYXJvdXNlbF9fZG90cyA+IGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmFsaWNlLWNhcm91c2VsX19kb3RzLWl0ZW06bm90KC5fX2N1c3RvbSkge1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGU0ZmI7XG59XG4uYWxpY2UtY2Fyb3VzZWxfX2RvdHMtaXRlbTpub3QoLl9fY3VzdG9tKTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLmFsaWNlLWNhcm91c2VsX19kb3RzLWl0ZW06bm90KC5fX2N1c3RvbSk6aG92ZXIsIC5hbGljZS1jYXJvdXNlbF9fZG90cy1pdGVtOm5vdCguX19jdXN0b20pLl9fYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZlN2ViYztcbn1cblxuLmFsaWNlLWNhcm91c2VsX19zbGlkZS1pbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBjb2xvcjogIzQ2NTc5ODtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNCwgMjI4LCAyNTEsIDAuNik7XG59XG4uYWxpY2UtY2Fyb3VzZWxfX3NsaWRlLWluZm8taXRlbSB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGxpbmUtaGVpZ2h0OiAwO1xufSIsIkBpbXBvcnQgXCJyZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvYWxpY2UtY2Fyb3VzZWwuY3NzXCI7XG5cbi5tdWx0aS1jYXJvdXNlbF9fY29udGFpbmVyIC5hbGljZS1jYXJvdXNlbF9fcHJldi1idG4sXG4ubXVsdGktY2Fyb3VzZWxfX2NvbnRhaW5lciAuYWxpY2UtY2Fyb3VzZWxfX25leHQtYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgICB0b3A6IDA7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMHB4KSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubXVsdGktY2Fyb3VzZWxfX25vLWRvdHMgLmFsaWNlLWNhcm91c2VsX19wcmV2LWJ0bixcbi5tdWx0aS1jYXJvdXNlbF9fbm8tZG90cyAuYWxpY2UtY2Fyb3VzZWxfX25leHQtYnRuIHtcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLm11bHRpLWNhcm91c2VsX19jb250YWluZXIgLmFsaWNlLWNhcm91c2VsX19wcmV2LWJ0bi1pdGVtIHNwYW46OmFmdGVyLFxuLm11bHRpLWNhcm91c2VsX19jb250YWluZXIgLmFsaWNlLWNhcm91c2VsX19uZXh0LWJ0bi1pdGVtIHNwYW46OmFmdGVyIHtcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xufVxuXG4ubXVsdGktY2Fyb3VzZWxfX2NvbnRhaW5lciAuYWxpY2UtY2Fyb3VzZWxfX2RvdHMge1xuICAgIG1hcmdpbjogMTBweCAhaW1wb3J0YW50O1xufVxuXG4ubXVsdGktY2Fyb3VzZWxfX2l0ZW0ge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWZlY2VjO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tdWx0aS1jYXJvdXNlbF9fYWN0aXZlIHtcbiAgICBib3JkZXI6MnB4IHNvbGlkIHJlZDtcbn0iXX0= */";
var stylesheet=".alice-carousel .animated {\n  animation-fill-mode: both;\n}\n\n.alice-carousel .animated-out {\n  z-index: 1;\n}\n\n.alice-carousel .fadeOut {\n  animation-name: fadeOut;\n}\n\n@keyframes fadeOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    visibility: hidden;\n  }\n}\n\n.alice-carousel {\n  position: relative;\n  width: 100%;\n  margin: auto;\n  direction: ltr;\n}\n\n.alice-carousel__wrapper {\n  position: relative;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  box-sizing: border-box;\n  width: 100%;\n  height: auto;\n}\n\n.alice-carousel__stage {\n  position: relative;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  white-space: nowrap;\n  transform-style: flat;\n  -webkit-transform-style: flat;\n  backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n}\n\n.alice-carousel__stage-item {\n  position: relative;\n  display: inline-block;\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  vertical-align: top;\n  white-space: normal;\n  line-height: 0;\n}\n\n.alice-carousel__stage-item * {\n  line-height: initial;\n}\n\n.alice-carousel__stage-item.__hidden {\n  opacity: 0;\n  overflow: hidden;\n}\n\n.alice-carousel__prev-btn,\n.alice-carousel__next-btn {\n  display: inline-block;\n  box-sizing: border-box;\n  width: 50%;\n  padding: 10px 5px;\n}\n\n.alice-carousel__prev-btn [data-area]::after,\n.alice-carousel__next-btn [data-area]::after {\n  position: relative;\n  content: attr(data-area);\n  text-transform: capitalize;\n}\n\n.alice-carousel__prev-btn {\n  text-align: right;\n}\n\n.alice-carousel__prev-btn-item,\n.alice-carousel__next-btn-item {\n  display: inline-block;\n  cursor: pointer;\n  padding: 5px;\n  margin: 0;\n  color: #465798;\n}\n\n.alice-carousel__prev-btn-item:hover,\n.alice-carousel__next-btn-item:hover {\n  color: darkred;\n}\n\n.alice-carousel__prev-btn-item.__inactive,\n.alice-carousel__next-btn-item.__inactive {\n  opacity: 0.4;\n  pointer-events: none;\n}\n\n.alice-carousel__play-btn {\n  position: absolute;\n  top: 30px;\n  left: 20px;\n  display: inline-block;\n}\n\n.alice-carousel__play-btn:hover {\n  cursor: pointer;\n}\n\n.alice-carousel__play-btn-wrapper {\n  position: relative;\n  width: 32px;\n  height: 32px;\n  padding: 10px;\n  border-radius: 50%;\n  background-color: #fff;\n}\n\n.alice-carousel__play-btn-item {\n  position: absolute;\n  width: 32px;\n  height: 32px;\n  cursor: pointer;\n  border: 0;\n  outline: none;\n  background: transparent;\n}\n\n.alice-carousel__play-btn-item::before, .alice-carousel__play-btn-item::after {\n  position: absolute;\n  pointer-events: none;\n  display: block;\n  width: 0;\n  height: 0;\n  content: \"\";\n  transition: all 0.4s linear;\n  border-width: 8px 0 8px 15px;\n  border-style: solid;\n  border-color: transparent;\n  border-left-color: #465798;\n}\n\n.alice-carousel__play-btn-item::before {\n  left: 5px;\n  height: 14px;\n}\n\n.alice-carousel__play-btn-item::after {\n  top: 7px;\n  left: 18px;\n}\n\n.alice-carousel__play-btn-item.__pause::before, .alice-carousel__play-btn-item.__pause::after {\n  height: 30px;\n  border-width: 0 0 0 10px;\n}\n\n.alice-carousel__play-btn-item.__pause::after {\n  top: 0;\n  left: 18px;\n}\n\n.alice-carousel__dots {\n  margin: 30px 3px 5px;\n  padding: 0;\n  list-style: none;\n  text-align: center;\n}\n\n.alice-carousel__dots > li {\n  display: inline-block;\n}\n\n.alice-carousel__dots-item:not(.__custom) {\n  width: 8px;\n  height: 8px;\n  cursor: pointer;\n  border-radius: 50%;\n  background-color: #e0e4fb;\n}\n\n.alice-carousel__dots-item:not(.__custom):not(:last-child) {\n  margin-right: 20px;\n}\n\n.alice-carousel__dots-item:not(.__custom):hover, .alice-carousel__dots-item:not(.__custom).__active {\n  background-color: #6e7ebc;\n}\n\n.alice-carousel__slide-info {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  display: inline-block;\n  padding: 5px 10px;\n  color: #465798;\n  border-radius: 5px;\n  background-color: rgba(224, 228, 251, 0.6);\n}\n\n.alice-carousel__slide-info-item {\n  vertical-align: middle;\n  line-height: 0;\n}\n\n.multi-carousel__container .alice-carousel__prev-btn,\n.multi-carousel__container .alice-carousel__next-btn {\n    position: absolute !important;\n    top: 0;\n    height: calc(100% - 30px) !important;\n    padding: 0px !important;\n}\n\n.multi-carousel__no-dots .alice-carousel__prev-btn,\n.multi-carousel__no-dots .alice-carousel__next-btn {\n    height: 100% !important;\n}\n\n.multi-carousel__container .alice-carousel__prev-btn-item span::after,\n.multi-carousel__container .alice-carousel__next-btn-item span::after {\n    font-family: monospace;\n}\n\n.multi-carousel__container .alice-carousel__dots {\n    margin: 10px !important;\n}\n\n.multi-carousel__item {\n    margin-right: 10px;\n    border: 1px solid #efecec;\n    background-color: #fff;\n    border-radius: 4px;\n    overflow: hidden;\n}\n\n.multi-carousel__active {\n    border:2px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvYWxpY2UtY2Fyb3VzZWwuY3NzIiwiTXVsdGlDYXJvdXNlbC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtJQUNWLGtCQUFrQjtFQUNwQjtBQUNGOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7RUFDVCxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQiw2QkFBNkI7RUFDN0IsMkJBQTJCO0VBQzNCLG1DQUFtQztBQUNyQzs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFlBQVk7RUFDWixTQUFTO0VBQ1QsY0FBYztBQUNoQjs7QUFDQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUNBOztFQUVFLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsU0FBUztFQUNULGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxRQUFRO0VBQ1IsU0FBUztFQUNULFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsMEJBQTBCO0FBQzVCOztBQUNBO0VBQ0UsU0FBUztFQUNULFlBQVk7QUFDZDs7QUFDQTtFQUNFLFFBQVE7RUFDUixVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osd0JBQXdCO0FBQzFCOztBQUNBO0VBQ0UsTUFBTTtFQUNOLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsMENBQTBDO0FBQzVDOztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FDck1BOztJQUVJLDZCQUE2QjtJQUM3QixNQUFNO0lBQ04sb0NBQW9DO0lBQ3BDLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSx1QkFBdUI7QUFDM0I7O0FBRUE7O0lBRUksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJNdWx0aUNhcm91c2VsLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGljZS1jYXJvdXNlbCAuYW5pbWF0ZWQge1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuXG4uYWxpY2UtY2Fyb3VzZWwgLmFuaW1hdGVkLW91dCB7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5hbGljZS1jYXJvdXNlbCAuZmFkZU91dCB7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0O1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVPdXQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxufVxuLmFsaWNlLWNhcm91c2VsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXJlY3Rpb246IGx0cjtcbn1cblxuLmFsaWNlLWNhcm91c2VsX193cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmFsaWNlLWNhcm91c2VsX19zdGFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0cmFuc2Zvcm0tc3R5bGU6IGZsYXQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBmbGF0O1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLmFsaWNlLWNhcm91c2VsX19zdGFnZS1pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDA7XG59XG4uYWxpY2UtY2Fyb3VzZWxfX3N0YWdlLWl0ZW0gKiB7XG4gIGxpbmUtaGVpZ2h0OiBpbml0aWFsO1xufVxuLmFsaWNlLWNhcm91c2VsX19zdGFnZS1pdGVtLl9faGlkZGVuIHtcbiAgb3BhY2l0eTogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmFsaWNlLWNhcm91c2VsX19wcmV2LWJ0bixcbi5hbGljZS1jYXJvdXNlbF9fbmV4dC1idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xufVxuLmFsaWNlLWNhcm91c2VsX19wcmV2LWJ0biBbZGF0YS1hcmVhXTo6YWZ0ZXIsXG4uYWxpY2UtY2Fyb3VzZWxfX25leHQtYnRuIFtkYXRhLWFyZWFdOjphZnRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29udGVudDogYXR0cihkYXRhLWFyZWEpO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmFsaWNlLWNhcm91c2VsX19wcmV2LWJ0biB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uYWxpY2UtY2Fyb3VzZWxfX3ByZXYtYnRuLWl0ZW0sXG4uYWxpY2UtY2Fyb3VzZWxfX25leHQtYnRuLWl0ZW0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjNDY1Nzk4O1xufVxuLmFsaWNlLWNhcm91c2VsX19wcmV2LWJ0bi1pdGVtOmhvdmVyLFxuLmFsaWNlLWNhcm91c2VsX19uZXh0LWJ0bi1pdGVtOmhvdmVyIHtcbiAgY29sb3I6IGRhcmtyZWQ7XG59XG4uYWxpY2UtY2Fyb3VzZWxfX3ByZXYtYnRuLWl0ZW0uX19pbmFjdGl2ZSxcbi5hbGljZS1jYXJvdXNlbF9fbmV4dC1idG4taXRlbS5fX2luYWN0aXZlIHtcbiAgb3BhY2l0eTogMC40O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmFsaWNlLWNhcm91c2VsX19wbGF5LWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMHB4O1xuICBsZWZ0OiAyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uYWxpY2UtY2Fyb3VzZWxfX3BsYXktYnRuOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFsaWNlLWNhcm91c2VsX19wbGF5LWJ0bi13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5hbGljZS1jYXJvdXNlbF9fcGxheS1idG4taXRlbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmFsaWNlLWNhcm91c2VsX19wbGF5LWJ0bi1pdGVtOjpiZWZvcmUsIC5hbGljZS1jYXJvdXNlbF9fcGxheS1idG4taXRlbTo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgY29udGVudDogXCJcIjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgbGluZWFyO1xuICBib3JkZXItd2lkdGg6IDhweCAwIDhweCAxNXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdC1jb2xvcjogIzQ2NTc5ODtcbn1cbi5hbGljZS1jYXJvdXNlbF9fcGxheS1idG4taXRlbTo6YmVmb3JlIHtcbiAgbGVmdDogNXB4O1xuICBoZWlnaHQ6IDE0cHg7XG59XG4uYWxpY2UtY2Fyb3VzZWxfX3BsYXktYnRuLWl0ZW06OmFmdGVyIHtcbiAgdG9wOiA3cHg7XG4gIGxlZnQ6IDE4cHg7XG59XG4uYWxpY2UtY2Fyb3VzZWxfX3BsYXktYnRuLWl0ZW0uX19wYXVzZTo6YmVmb3JlLCAuYWxpY2UtY2Fyb3VzZWxfX3BsYXktYnRuLWl0ZW0uX19wYXVzZTo6YWZ0ZXIge1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci13aWR0aDogMCAwIDAgMTBweDtcbn1cbi5hbGljZS1jYXJvdXNlbF9fcGxheS1idG4taXRlbS5fX3BhdXNlOjphZnRlciB7XG4gIHRvcDogMDtcbiAgbGVmdDogMThweDtcbn1cblxuLmFsaWNlLWNhcm91c2VsX19kb3RzIHtcbiAgbWFyZ2luOiAzMHB4IDNweCA1cHg7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hbGljZS1jYXJvdXNlbF9fZG90cyA+IGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmFsaWNlLWNhcm91c2VsX19kb3RzLWl0ZW06bm90KC5fX2N1c3RvbSkge1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGU0ZmI7XG59XG4uYWxpY2UtY2Fyb3VzZWxfX2RvdHMtaXRlbTpub3QoLl9fY3VzdG9tKTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLmFsaWNlLWNhcm91c2VsX19kb3RzLWl0ZW06bm90KC5fX2N1c3RvbSk6aG92ZXIsIC5hbGljZS1jYXJvdXNlbF9fZG90cy1pdGVtOm5vdCguX19jdXN0b20pLl9fYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZlN2ViYztcbn1cblxuLmFsaWNlLWNhcm91c2VsX19zbGlkZS1pbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBjb2xvcjogIzQ2NTc5ODtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNCwgMjI4LCAyNTEsIDAuNik7XG59XG4uYWxpY2UtY2Fyb3VzZWxfX3NsaWRlLWluZm8taXRlbSB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGxpbmUtaGVpZ2h0OiAwO1xufSIsIkBpbXBvcnQgXCJyZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvYWxpY2UtY2Fyb3VzZWwuY3NzXCI7XG5cbi5tdWx0aS1jYXJvdXNlbF9fY29udGFpbmVyIC5hbGljZS1jYXJvdXNlbF9fcHJldi1idG4sXG4ubXVsdGktY2Fyb3VzZWxfX2NvbnRhaW5lciAuYWxpY2UtY2Fyb3VzZWxfX25leHQtYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgICB0b3A6IDA7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMHB4KSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubXVsdGktY2Fyb3VzZWxfX25vLWRvdHMgLmFsaWNlLWNhcm91c2VsX19wcmV2LWJ0bixcbi5tdWx0aS1jYXJvdXNlbF9fbm8tZG90cyAuYWxpY2UtY2Fyb3VzZWxfX25leHQtYnRuIHtcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLm11bHRpLWNhcm91c2VsX19jb250YWluZXIgLmFsaWNlLWNhcm91c2VsX19wcmV2LWJ0bi1pdGVtIHNwYW46OmFmdGVyLFxuLm11bHRpLWNhcm91c2VsX19jb250YWluZXIgLmFsaWNlLWNhcm91c2VsX19uZXh0LWJ0bi1pdGVtIHNwYW46OmFmdGVyIHtcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xufVxuXG4ubXVsdGktY2Fyb3VzZWxfX2NvbnRhaW5lciAuYWxpY2UtY2Fyb3VzZWxfX2RvdHMge1xuICAgIG1hcmdpbjogMTBweCAhaW1wb3J0YW50O1xufVxuXG4ubXVsdGktY2Fyb3VzZWxfX2l0ZW0ge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWZlY2VjO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tdWx0aS1jYXJvdXNlbF9fYWN0aXZlIHtcbiAgICBib3JkZXI6MnB4IHNvbGlkIHJlZDtcbn0iXX0= */";
styleInject(css_248z$2);

var MultiCarousel = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': css_248z$2,
	stylesheet: stylesheet
});

var require$$0 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(MultiCarousel);

var css_248z$1 = ".normal-carousel__container .alice-carousel__wrapper {\n  clip-path: inset(0px 10px 0px 0px) !important;\n}\n.normal-carousel__container .alice-carousel__prev-btn,\n.normal-carousel__container .alice-carousel__next-btn {\n  width: unset !important;\n}\n.normal-carousel__container .alice-carousel__prev-btn .alice-carousel__next-btn-wrapper,\n.normal-carousel__container .alice-carousel__prev-btn .alice-carousel__prev-btn-wrapper,\n.normal-carousel__container .alice-carousel__next-btn .alice-carousel__next-btn-wrapper,\n.normal-carousel__container .alice-carousel__next-btn .alice-carousel__prev-btn-wrapper {\n  height: 100% !important;\n  padding: 0;\n  width: 20px;\n}\n.normal-carousel__container .alice-carousel__prev-btn .alice-carousel__next-btn-wrapper .alice-carousel__prev-btn-item,\n.normal-carousel__container .alice-carousel__prev-btn .alice-carousel__next-btn-wrapper .alice-carousel__next-btn-item,\n.normal-carousel__container .alice-carousel__prev-btn .alice-carousel__prev-btn-wrapper .alice-carousel__prev-btn-item,\n.normal-carousel__container .alice-carousel__prev-btn .alice-carousel__prev-btn-wrapper .alice-carousel__next-btn-item,\n.normal-carousel__container .alice-carousel__next-btn .alice-carousel__next-btn-wrapper .alice-carousel__prev-btn-item,\n.normal-carousel__container .alice-carousel__next-btn .alice-carousel__next-btn-wrapper .alice-carousel__next-btn-item,\n.normal-carousel__container .alice-carousel__next-btn .alice-carousel__prev-btn-wrapper .alice-carousel__prev-btn-item,\n.normal-carousel__container .alice-carousel__next-btn .alice-carousel__prev-btn-wrapper .alice-carousel__next-btn-item {\n  font-size: 20px;\n  color: #fff !important;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  padding: 0px !important;\n}\n.normal-carousel__container .alice-carousel__prev-btn {\n  left: 0;\n  border-radius: 5px 0 0 5px;\n  background: linear-gradient(90deg, rgba(149, 149, 149, 0.2) 10%, rgba(255, 255, 255, 0) 100%);\n}\n.normal-carousel__container .alice-carousel__prev-btn:hover {\n  background: linear-gradient(90deg, rgba(149, 149, 149, 0.2) 40%, rgba(255, 255, 255, 0) 100%);\n}\n.normal-carousel__container .alice-carousel__next-btn {\n  right: 0;\n  margin: 0 10px;\n  border-radius: 0 5px 5px 0;\n  background: linear-gradient(270deg, rgba(149, 149, 149, 0.2) 10%, rgba(255, 255, 255, 0) 100%);\n}\n.normal-carousel__container .alice-carousel__next-btn:hover {\n  background: linear-gradient(270deg, rgba(149, 149, 149, 0.2) 40%, rgba(255, 255, 255, 0) 100%);\n}\n/*# sourceMappingURL=inline */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vQzovVXNlcnMvYWR3ZWlkYXIvRG9jdW1lbnRzL01lbmRpeC9DYXJvdXNlbC1tYWluL2N1c3RvbS13aWRnZXRzL211bHRpLWNhcm91c2VsL3NyYy91aS9Ob3JtYWxDYXJvdXNlbC5zY3NzIiwiTm9ybWFsQ2Fyb3VzZWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLDZDQUFBO0FDQVI7QURHSTs7RUFFSSx1QkFBQTtBQ0RSO0FER1E7Ozs7RUFFSSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDQ1o7QURDWTs7Ozs7Ozs7RUFFSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUNPaEI7QURGSTtFQUNJLE9BQUE7RUFDQSwwQkFBQTtFQUNBLDZGQUFBO0FDSVI7QURGUTtFQUNJLDZGQUFBO0FDSVo7QURBSTtFQUNJLFFBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSw4RkFBQTtBQ0VSO0FEQVE7RUFDSSw4RkFBQTtBQ0VaO0FBRUEsNkJBQTZCIiwiZmlsZSI6Ik5vcm1hbENhcm91c2VsLnNjc3MifQ== */";
styleInject(css_248z$1);

var css_248z = ".active-click-carousel__with-btn {\n  margin: 0 50px 0 60px;\n}\n\n.active-click-carousel__container .alice-carousel__prev-btn,\n.active-click-carousel__container .alice-carousel__next-btn {\n  width: 50px !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.active-click-carousel__container .alice-carousel__prev-btn .alice-carousel__prev-btn-wrapper,\n.active-click-carousel__container .alice-carousel__prev-btn .alice-carousel__next-btn-wrapper,\n.active-click-carousel__container .alice-carousel__next-btn .alice-carousel__prev-btn-wrapper,\n.active-click-carousel__container .alice-carousel__next-btn .alice-carousel__next-btn-wrapper {\n  width: 100%;\n  border: 1px solid #efecec;\n  cursor: pointer;\n  border-radius: 5px;\n  background-color: #fff;\n}\n\n.active-click-carousel__container .alice-carousel__prev-btn .alice-carousel__prev-btn-wrapper .alice-carousel__prev-btn-item,\n.active-click-carousel__container .alice-carousel__prev-btn .alice-carousel__prev-btn-wrapper .alice-carousel__next-btn-item,\n.active-click-carousel__container .alice-carousel__prev-btn .alice-carousel__next-btn-wrapper .alice-carousel__prev-btn-item,\n.active-click-carousel__container .alice-carousel__prev-btn .alice-carousel__next-btn-wrapper .alice-carousel__next-btn-item,\n.active-click-carousel__container .alice-carousel__next-btn .alice-carousel__prev-btn-wrapper .alice-carousel__prev-btn-item,\n.active-click-carousel__container .alice-carousel__next-btn .alice-carousel__prev-btn-wrapper .alice-carousel__next-btn-item,\n.active-click-carousel__container .alice-carousel__next-btn .alice-carousel__next-btn-wrapper .alice-carousel__prev-btn-item,\n.active-click-carousel__container .alice-carousel__next-btn .alice-carousel__next-btn-wrapper .alice-carousel__next-btn-item {\n  font-size: 20px;\n  padding: 0 5px !important;\n  width: 100% !important;\n  text-align: center;\n}\n\n.active-click-carousel__container .alice-carousel__prev-btn {\n  left: -60px;\n}\n\n.active-click-carousel__container .alice-carousel__next-btn {\n  right: -50px;\n}\n\n.active-click-carousel__container .active-click-carousel__item {\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=inline */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vQzovVXNlcnMvYWR3ZWlkYXIvRG9jdW1lbnRzL01lbmRpeC9DYXJvdXNlbC1tYWluL2N1c3RvbS13aWRnZXRzL211bHRpLWNhcm91c2VsL3NyYy91aS9BY3RpdmVDbGlja0Nhcm91c2VsLnNjc3MiLCJBY3RpdmVDbGlja0Nhcm91c2VsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQ0NKOztBREdJOztFQUVJLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNBUjs7QURFUTs7OztFQUVJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDRVo7O0FEQVk7Ozs7Ozs7O0VBRUksZUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ1FoQjs7QURISTtFQUNJLFdBQUE7QUNLUjs7QURGSTtFQUNJLFlBQUE7QUNJUjs7QURESTtFQUNJLGVBQUE7QUNHUjs7QUFFQSw2QkFBNkIiLCJmaWxlIjoiQWN0aXZlQ2xpY2tDYXJvdXNlbC5zY3NzIn0= */";
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
  no_dots: "multi-carousel__no-dots",
  error: "multi-carousel__error"
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
      node?.classList?.remove(commonClasses.active);
    } else {
      node?.classList?.add(commonClasses.active);
    }
  };

  /*
      in case of "infinite" carousel the node will be node list "Array"
      because the carousel create a copy of all the items
      that why we need change the active class on both nodes - the carousel render both -
      and with no "infinite" the node list will be length of "1"
  */
  const changeActiveClass = (node, action) => {
    if (node?.length) {
      node.forEach(item => {
        addOrRemoveClassName(item, action);
      });
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
    set the active item after the carousel has already been initialized or resized
    NOTE: the carousel moves to the beginning when the carousel resized
  */
  const onInitializedOrResized = () => {
    if (props.carouselType === "active") {
      let firstCarouselItem = document.querySelector(`.${uniqueClass}`)?.querySelector(".idx-0");
      if (!firstCarouselItem?.classList?.contains(commonClasses.active)) {
        firstCarouselItem?.click();
      }
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
        className: `${commonClasses.item} idx-${i} ${props.carouselType === "active" ? activeClickClasses.active_click_item : normalCarouselClasses.normal_item}`
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
    onInitialized: onInitializedOrResized,
    onResized: onInitializedOrResized
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVsdGlDYXJvdXNlbC5lZGl0b3JQcmV2aWV3LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtaW5qZWN0L2Rpc3Qvc3R5bGUtaW5qZWN0LmVzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3R5cGVzL2luZGV4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL2NhbGN1bGF0ZURpcmVjdGlvbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXN3aXBlL2xpYi91dGlscy9jb21tb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvY2FsY3VsYXRlRGlyZWN0aW9uRGVsdGEuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvY2FsY3VsYXRlRHVyYXRpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvY2FsY3VsYXRlTW92aW5nUG9zaXRpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvdXBkYXRlVHJhY2UuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvY2FsY3VsYXRlVHJhY2VEaXJlY3Rpb25zLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL3Jlc29sdmVEaXJlY3Rpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvY2FsY3VsYXRlVmVsb2NpdHkuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvY2FsY3VsYXRlUG9zaXRpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvY2hlY2tJc01vcmVUaGFuU2luZ2xlVG91Y2hlcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXN3aXBlL2xpYi91dGlscy9jcmVhdGVPcHRpb25zLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL2NoZWNrSXNQYXNzaXZlU3VwcG9ydGVkLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL2NoZWNrSXNUb3VjaEV2ZW50c1N1cHBvcnRlZC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXN3aXBlL2xpYi91dGlscy9nZXRJbml0aWFsU3RhdGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvZ2V0SW5pdGlhbFByb3BzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtc3dpcGUvbGliL3V0aWxzL2dldE9wdGlvbnMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1zd2lwZS9saWIvdXRpbHMvcm90YXRlQnlBbmdsZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXN3aXBlL2xpYi91dGlscy9pbmRleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXN3aXBlL2xpYi9pbmRleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdHlwZXMvaW5kZXguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL2RlZmF1bHRQcm9wcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdXRpbHMvbWFwcGVycy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdXRpbHMvbWF0aC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdXRpbHMvZWxlbWVudHMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL3V0aWxzL2NvbW1vbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdXRpbHMvY2xhc3NuYW1lcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdXRpbHMvdGltZXJzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWFsaWNlLWNhcm91c2VsL2xpYi91dGlscy9kZWJ1Zy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdXRpbHMvcmVuZGVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWFsaWNlLWNhcm91c2VsL2xpYi91dGlscy9jb250cm9scy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdXRpbHMvaW5kZXguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL3ZpZXdzL1NsaWRlSW5mby5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdmlld3MvU3RhZ2VJdGVtLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWFsaWNlLWNhcm91c2VsL2xpYi92aWV3cy9Eb3RzTmF2aWdhdGlvbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdmlld3MvUGxheVBhdXNlQnV0dG9uLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWFsaWNlLWNhcm91c2VsL2xpYi92aWV3cy9QcmV2TmV4dEJ1dHRvbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvdmlld3MvaW5kZXguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYWxpY2UtY2Fyb3VzZWwvbGliL3JlYWN0LWFsaWNlLWNhcm91c2VsLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9wYXJzZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjM1LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9tZDUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3YzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zaGExLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NS5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2hlbHBlci5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL05vcm1hbENhcm91c2VsLmpzeCIsIi4uLy4uLy4uL3NyYy9NdWx0aUNhcm91c2VsLmVkaXRvclByZXZpZXcuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHN0eWxlSW5qZWN0KGNzcywgcmVmKSB7XG4gIGlmICggcmVmID09PSB2b2lkIDAgKSByZWYgPSB7fTtcbiAgdmFyIGluc2VydEF0ID0gcmVmLmluc2VydEF0O1xuXG4gIGlmICghY3NzIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuOyB9XG5cbiAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuXG4gIGlmIChpbnNlcnRBdCA9PT0gJ3RvcCcpIHtcbiAgICBpZiAoaGVhZC5maXJzdENoaWxkKSB7XG4gICAgICBoZWFkLmluc2VydEJlZm9yZShzdHlsZSwgaGVhZC5maXJzdENoaWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVJbmplY3Q7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuVHJhY2VEaXJlY3Rpb25LZXkgPSBleHBvcnRzLkRpcmVjdGlvbiA9IGV4cG9ydHMuQXhpcyA9IHZvaWQgMDtcbnZhciBUcmFjZURpcmVjdGlvbktleTtcbmV4cG9ydHMuVHJhY2VEaXJlY3Rpb25LZXkgPSBUcmFjZURpcmVjdGlvbktleTtcblxuKGZ1bmN0aW9uIChUcmFjZURpcmVjdGlvbktleSkge1xuICBUcmFjZURpcmVjdGlvbktleVtcIk5FR0FUSVZFXCJdID0gXCJORUdBVElWRVwiO1xuICBUcmFjZURpcmVjdGlvbktleVtcIlBPU0lUSVZFXCJdID0gXCJQT1NJVElWRVwiO1xuICBUcmFjZURpcmVjdGlvbktleVtcIk5PTkVcIl0gPSBcIk5PTkVcIjtcbn0pKFRyYWNlRGlyZWN0aW9uS2V5IHx8IChleHBvcnRzLlRyYWNlRGlyZWN0aW9uS2V5ID0gVHJhY2VEaXJlY3Rpb25LZXkgPSB7fSkpO1xuXG52YXIgRGlyZWN0aW9uO1xuZXhwb3J0cy5EaXJlY3Rpb24gPSBEaXJlY3Rpb247XG5cbihmdW5jdGlvbiAoRGlyZWN0aW9uKSB7XG4gIERpcmVjdGlvbltcIlRPUFwiXSA9IFwiVE9QXCI7XG4gIERpcmVjdGlvbltcIkxFRlRcIl0gPSBcIkxFRlRcIjtcbiAgRGlyZWN0aW9uW1wiUklHSFRcIl0gPSBcIlJJR0hUXCI7XG4gIERpcmVjdGlvbltcIkJPVFRPTVwiXSA9IFwiQk9UVE9NXCI7XG4gIERpcmVjdGlvbltcIk5PTkVcIl0gPSBcIk5PTkVcIjtcbn0pKERpcmVjdGlvbiB8fCAoZXhwb3J0cy5EaXJlY3Rpb24gPSBEaXJlY3Rpb24gPSB7fSkpO1xuXG52YXIgQXhpcztcbmV4cG9ydHMuQXhpcyA9IEF4aXM7XG5cbihmdW5jdGlvbiAoQXhpcykge1xuICBBeGlzW1wiWFwiXSA9IFwieFwiO1xuICBBeGlzW1wiWVwiXSA9IFwieVwiO1xufSkoQXhpcyB8fCAoZXhwb3J0cy5BeGlzID0gQXhpcyA9IHt9KSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNhbGN1bGF0ZURpcmVjdGlvbiA9IGNhbGN1bGF0ZURpcmVjdGlvbjtcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi90eXBlc1wiKTtcblxuZnVuY3Rpb24gY2FsY3VsYXRlRGlyZWN0aW9uKHRyYWNlKSB7XG4gIHZhciBkaXJlY3Rpb247XG4gIHZhciBuZWdhdGl2ZSA9IF90eXBlcy5UcmFjZURpcmVjdGlvbktleS5ORUdBVElWRTtcbiAgdmFyIHBvc2l0aXZlID0gX3R5cGVzLlRyYWNlRGlyZWN0aW9uS2V5LlBPU0lUSVZFO1xuICB2YXIgY3VycmVudCA9IHRyYWNlW3RyYWNlLmxlbmd0aCAtIDFdO1xuICB2YXIgcHJldmlvdXMgPSB0cmFjZVt0cmFjZS5sZW5ndGggLSAyXSB8fCAwO1xuXG4gIGlmICh0cmFjZS5ldmVyeShmdW5jdGlvbiAoaSkge1xuICAgIHJldHVybiBpID09PSAwO1xuICB9KSkge1xuICAgIHJldHVybiBfdHlwZXMuVHJhY2VEaXJlY3Rpb25LZXkuTk9ORTtcbiAgfVxuXG4gIGRpcmVjdGlvbiA9IGN1cnJlbnQgPiBwcmV2aW91cyA/IHBvc2l0aXZlIDogbmVnYXRpdmU7XG5cbiAgaWYgKGN1cnJlbnQgPT09IDApIHtcbiAgICBkaXJlY3Rpb24gPSBwcmV2aW91cyA8IDAgPyBwb3NpdGl2ZSA6IG5lZ2F0aXZlO1xuICB9XG5cbiAgcmV0dXJuIGRpcmVjdGlvbjtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVzb2x2ZUF4aXNEaXJlY3Rpb24gPSBleHBvcnRzLmdldERpcmVjdGlvblZhbHVlID0gZXhwb3J0cy5nZXREaXJlY3Rpb25LZXkgPSBleHBvcnRzLmdldERpZmZlcmVuY2UgPSB2b2lkIDA7XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vdHlwZXNcIik7XG5cbnZhciBnZXREaXJlY3Rpb25LZXkgPSBmdW5jdGlvbiBnZXREaXJlY3Rpb25LZXkoKSB7XG4gIHZhciBvYmplY3QgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICB2YXIga2V5ID0gT2JqZWN0LmtleXMob2JqZWN0KS50b1N0cmluZygpO1xuXG4gIHN3aXRjaCAoa2V5KSB7XG4gICAgY2FzZSBfdHlwZXMuVHJhY2VEaXJlY3Rpb25LZXkuUE9TSVRJVkU6XG4gICAgICByZXR1cm4gX3R5cGVzLlRyYWNlRGlyZWN0aW9uS2V5LlBPU0lUSVZFO1xuXG4gICAgY2FzZSBfdHlwZXMuVHJhY2VEaXJlY3Rpb25LZXkuTkVHQVRJVkU6XG4gICAgICByZXR1cm4gX3R5cGVzLlRyYWNlRGlyZWN0aW9uS2V5Lk5FR0FUSVZFO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBfdHlwZXMuVHJhY2VEaXJlY3Rpb25LZXkuTk9ORTtcbiAgfVxufTtcblxuZXhwb3J0cy5nZXREaXJlY3Rpb25LZXkgPSBnZXREaXJlY3Rpb25LZXk7XG5cbnZhciBnZXREaXJlY3Rpb25WYWx1ZSA9IGZ1bmN0aW9uIGdldERpcmVjdGlvblZhbHVlKCkge1xuICB2YXIgdmFsdWVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBbXTtcbiAgcmV0dXJuIHZhbHVlc1t2YWx1ZXMubGVuZ3RoIC0gMV0gfHwgMDtcbn07XG5cbmV4cG9ydHMuZ2V0RGlyZWN0aW9uVmFsdWUgPSBnZXREaXJlY3Rpb25WYWx1ZTtcblxudmFyIGdldERpZmZlcmVuY2UgPSBmdW5jdGlvbiBnZXREaWZmZXJlbmNlKCkge1xuICB2YXIgeCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgdmFyIHkgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gIHJldHVybiBNYXRoLmFicyh4IC0geSk7XG59O1xuXG5leHBvcnRzLmdldERpZmZlcmVuY2UgPSBnZXREaWZmZXJlbmNlO1xuXG52YXIgcmVzb2x2ZUF4aXNEaXJlY3Rpb24gPSBmdW5jdGlvbiByZXNvbHZlQXhpc0RpcmVjdGlvbihheGlzLCBrZXkpIHtcbiAgdmFyIG5lZ2F0aXZlID0gX3R5cGVzLkRpcmVjdGlvbi5MRUZUO1xuICB2YXIgcG9zaXRpdmUgPSBfdHlwZXMuRGlyZWN0aW9uLlJJR0hUO1xuICB2YXIgZGlyZWN0aW9uID0gX3R5cGVzLkRpcmVjdGlvbi5OT05FO1xuXG4gIGlmIChheGlzID09PSBfdHlwZXMuQXhpcy5ZKSB7XG4gICAgbmVnYXRpdmUgPSBfdHlwZXMuRGlyZWN0aW9uLkJPVFRPTTtcbiAgICBwb3NpdGl2ZSA9IF90eXBlcy5EaXJlY3Rpb24uVE9QO1xuICB9XG5cbiAgaWYgKGtleSA9PT0gX3R5cGVzLlRyYWNlRGlyZWN0aW9uS2V5Lk5FR0FUSVZFKSB7XG4gICAgZGlyZWN0aW9uID0gbmVnYXRpdmU7XG4gIH1cblxuICBpZiAoa2V5ID09PSBfdHlwZXMuVHJhY2VEaXJlY3Rpb25LZXkuUE9TSVRJVkUpIHtcbiAgICBkaXJlY3Rpb24gPSBwb3NpdGl2ZTtcbiAgfVxuXG4gIHJldHVybiBkaXJlY3Rpb247XG59O1xuXG5leHBvcnRzLnJlc29sdmVBeGlzRGlyZWN0aW9uID0gcmVzb2x2ZUF4aXNEaXJlY3Rpb247IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNhbGN1bGF0ZURpcmVjdGlvbkRlbHRhID0gY2FsY3VsYXRlRGlyZWN0aW9uRGVsdGE7XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vdHlwZXNcIik7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVEaXJlY3Rpb25EZWx0YSh0cmFjZURpcmVjdGlvbnMpIHtcbiAgdmFyIGRlbHRhID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICB2YXIgbGVuZ3RoID0gdHJhY2VEaXJlY3Rpb25zLmxlbmd0aDtcbiAgdmFyIGkgPSBsZW5ndGggLSAxO1xuICB2YXIgZGlyZWN0aW9uID0gX3R5cGVzLlRyYWNlRGlyZWN0aW9uS2V5Lk5PTkU7XG5cbiAgZm9yICg7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIGN1cnJlbnQgPSB0cmFjZURpcmVjdGlvbnNbaV07XG4gICAgdmFyIGN1cnJlbnRLZXkgPSAoMCwgX2NvbW1vbi5nZXREaXJlY3Rpb25LZXkpKGN1cnJlbnQpO1xuICAgIHZhciBjdXJyZW50VmFsdWUgPSAoMCwgX2NvbW1vbi5nZXREaXJlY3Rpb25WYWx1ZSkoY3VycmVudFtjdXJyZW50S2V5XSk7XG4gICAgdmFyIHByZXYgPSB0cmFjZURpcmVjdGlvbnNbaSAtIDFdIHx8IHt9O1xuICAgIHZhciBwcmV2S2V5ID0gKDAsIF9jb21tb24uZ2V0RGlyZWN0aW9uS2V5KShwcmV2KTtcbiAgICB2YXIgcHJldlZhbHVlID0gKDAsIF9jb21tb24uZ2V0RGlyZWN0aW9uVmFsdWUpKHByZXZbcHJldktleV0pO1xuICAgIHZhciBkaWZmZXJlbmNlID0gKDAsIF9jb21tb24uZ2V0RGlmZmVyZW5jZSkoY3VycmVudFZhbHVlLCBwcmV2VmFsdWUpO1xuXG4gICAgaWYgKGRpZmZlcmVuY2UgPj0gZGVsdGEpIHtcbiAgICAgIGRpcmVjdGlvbiA9IGN1cnJlbnRLZXk7XG4gICAgICBicmVhaztcbiAgICB9IGVsc2Uge1xuICAgICAgZGlyZWN0aW9uID0gcHJldktleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlyZWN0aW9uO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jYWxjdWxhdGVEdXJhdGlvbiA9IGNhbGN1bGF0ZUR1cmF0aW9uO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVEdXJhdGlvbigpIHtcbiAgdmFyIHByZXZUaW1lID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICB2YXIgbmV4dFRpbWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gIHJldHVybiBwcmV2VGltZSA/IG5leHRUaW1lIC0gcHJldlRpbWUgOiAwO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jYWxjdWxhdGVNb3ZpbmdQb3NpdGlvbiA9IGNhbGN1bGF0ZU1vdmluZ1Bvc2l0aW9uO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVNb3ZpbmdQb3NpdGlvbihlKSB7XG4gIGlmICgnY2hhbmdlZFRvdWNoZXMnIGluIGUpIHtcbiAgICB2YXIgdG91Y2hlcyA9IGUuY2hhbmdlZFRvdWNoZXMgJiYgZS5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICByZXR1cm4ge1xuICAgICAgeDogdG91Y2hlcyAmJiB0b3VjaGVzLmNsaWVudFgsXG4gICAgICB5OiB0b3VjaGVzICYmIHRvdWNoZXMuY2xpZW50WVxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IGUuY2xpZW50WCxcbiAgICB5OiBlLmNsaWVudFlcbiAgfTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudXBkYXRlVHJhY2UgPSB1cGRhdGVUcmFjZTtcblxuZnVuY3Rpb24gdXBkYXRlVHJhY2UodHJhY2UsIHZhbHVlKSB7XG4gIHZhciBsYXN0ID0gdHJhY2VbdHJhY2UubGVuZ3RoIC0gMV07XG5cbiAgaWYgKGxhc3QgIT09IHZhbHVlKSB7XG4gICAgdHJhY2UucHVzaCh2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gdHJhY2U7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNhbGN1bGF0ZVRyYWNlRGlyZWN0aW9ucyA9IGNhbGN1bGF0ZVRyYWNlRGlyZWN0aW9ucztcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi90eXBlc1wiKTtcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gY2FsY3VsYXRlVHJhY2VEaXJlY3Rpb25zKCkge1xuICB2YXIgdHJhY2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFtdO1xuICB2YXIgdGlja3MgPSBbXTtcbiAgdmFyIHBvc2l0aXZlID0gX3R5cGVzLlRyYWNlRGlyZWN0aW9uS2V5LlBPU0lUSVZFO1xuICB2YXIgbmVnYXRpdmUgPSBfdHlwZXMuVHJhY2VEaXJlY3Rpb25LZXkuTkVHQVRJVkU7XG4gIHZhciBpID0gMDtcbiAgdmFyIHRpY2sgPSBbXTtcbiAgdmFyIGRpcmVjdGlvbiA9IF90eXBlcy5UcmFjZURpcmVjdGlvbktleS5OT05FO1xuXG4gIGZvciAoOyBpIDwgdHJhY2UubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgY3VycmVudCA9IHRyYWNlW2ldO1xuICAgIHZhciBwcmV2ID0gdHJhY2VbaSAtIDFdO1xuXG4gICAgaWYgKHRpY2subGVuZ3RoKSB7XG4gICAgICB2YXIgY3VycmVudERpcmVjdGlvbiA9IGN1cnJlbnQgPiBwcmV2ID8gcG9zaXRpdmUgOiBuZWdhdGl2ZTtcblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gX3R5cGVzLlRyYWNlRGlyZWN0aW9uS2V5Lk5PTkUpIHtcbiAgICAgICAgZGlyZWN0aW9uID0gY3VycmVudERpcmVjdGlvbjtcbiAgICAgIH1cblxuICAgICAgaWYgKGN1cnJlbnREaXJlY3Rpb24gPT09IGRpcmVjdGlvbikge1xuICAgICAgICB0aWNrLnB1c2goY3VycmVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aWNrcy5wdXNoKF9kZWZpbmVQcm9wZXJ0eSh7fSwgZGlyZWN0aW9uLCB0aWNrLnNsaWNlKCkpKTtcbiAgICAgICAgdGljayA9IFtdO1xuICAgICAgICB0aWNrLnB1c2goY3VycmVudCk7XG4gICAgICAgIGRpcmVjdGlvbiA9IGN1cnJlbnREaXJlY3Rpb247XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjdXJyZW50ICE9PSAwKSB7XG4gICAgICAgIGRpcmVjdGlvbiA9IGN1cnJlbnQgPiAwID8gcG9zaXRpdmUgOiBuZWdhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgdGljay5wdXNoKGN1cnJlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aWNrLmxlbmd0aCkge1xuICAgIHRpY2tzLnB1c2goX2RlZmluZVByb3BlcnR5KHt9LCBkaXJlY3Rpb24sIHRpY2spKTtcbiAgfVxuXG4gIHJldHVybiB0aWNrcztcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVzb2x2ZURpcmVjdGlvbiA9IHJlc29sdmVEaXJlY3Rpb247XG5cbnZhciBfY2FsY3VsYXRlRGlyZWN0aW9uID0gcmVxdWlyZShcIi4vY2FsY3VsYXRlRGlyZWN0aW9uXCIpO1xuXG52YXIgX2NhbGN1bGF0ZVRyYWNlRGlyZWN0aW9ucyA9IHJlcXVpcmUoXCIuL2NhbGN1bGF0ZVRyYWNlRGlyZWN0aW9uc1wiKTtcblxudmFyIF9jYWxjdWxhdGVEaXJlY3Rpb25EZWx0YSA9IHJlcXVpcmUoXCIuL2NhbGN1bGF0ZURpcmVjdGlvbkRlbHRhXCIpO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi90eXBlc1wiKTtcblxuZnVuY3Rpb24gcmVzb2x2ZURpcmVjdGlvbih0cmFjZSkge1xuICB2YXIgYXhpcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogX3R5cGVzLkF4aXMuWDtcbiAgdmFyIGRpcmVjdGlvbkRlbHRhID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAwO1xuXG4gIGlmIChkaXJlY3Rpb25EZWx0YSkge1xuICAgIHZhciBkaXJlY3Rpb25zID0gKDAsIF9jYWxjdWxhdGVUcmFjZURpcmVjdGlvbnMuY2FsY3VsYXRlVHJhY2VEaXJlY3Rpb25zKSh0cmFjZSk7XG5cbiAgICB2YXIgX2RpcmVjdGlvbiA9ICgwLCBfY2FsY3VsYXRlRGlyZWN0aW9uRGVsdGEuY2FsY3VsYXRlRGlyZWN0aW9uRGVsdGEpKGRpcmVjdGlvbnMsIGRpcmVjdGlvbkRlbHRhKTtcblxuICAgIHJldHVybiAoMCwgX2NvbW1vbi5yZXNvbHZlQXhpc0RpcmVjdGlvbikoYXhpcywgX2RpcmVjdGlvbik7XG4gIH1cblxuICB2YXIgZGlyZWN0aW9uID0gKDAsIF9jYWxjdWxhdGVEaXJlY3Rpb24uY2FsY3VsYXRlRGlyZWN0aW9uKSh0cmFjZSk7XG4gIHJldHVybiAoMCwgX2NvbW1vbi5yZXNvbHZlQXhpc0RpcmVjdGlvbikoYXhpcywgZGlyZWN0aW9uKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY2FsY3VsYXRlVmVsb2NpdHkgPSBjYWxjdWxhdGVWZWxvY2l0eTtcblxuZnVuY3Rpb24gY2FsY3VsYXRlVmVsb2NpdHkoeCwgeSwgdGltZSkge1xuICB2YXIgbWFnbml0dWRlID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xuICByZXR1cm4gbWFnbml0dWRlIC8gKHRpbWUgfHwgMSk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNhbGN1bGF0ZVBvc2l0aW9uID0gY2FsY3VsYXRlUG9zaXRpb247XG5cbnZhciBfdXBkYXRlVHJhY2UgPSByZXF1aXJlKFwiLi91cGRhdGVUcmFjZVwiKTtcblxudmFyIF9yZXNvbHZlRGlyZWN0aW9uID0gcmVxdWlyZShcIi4vcmVzb2x2ZURpcmVjdGlvblwiKTtcblxudmFyIF9jYWxjdWxhdGVEdXJhdGlvbiA9IHJlcXVpcmUoXCIuL2NhbGN1bGF0ZUR1cmF0aW9uXCIpO1xuXG52YXIgX2NhbGN1bGF0ZVZlbG9jaXR5ID0gcmVxdWlyZShcIi4vY2FsY3VsYXRlVmVsb2NpdHlcIik7XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vdHlwZXNcIik7XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZVBvc2l0aW9uKHN0YXRlLCBvcHRpb25zKSB7XG4gIHZhciBzdGFydCA9IHN0YXRlLnN0YXJ0LFxuICAgICAgeCA9IHN0YXRlLngsXG4gICAgICB5ID0gc3RhdGUueSxcbiAgICAgIHRyYWNlWCA9IHN0YXRlLnRyYWNlWCxcbiAgICAgIHRyYWNlWSA9IHN0YXRlLnRyYWNlWTtcbiAgdmFyIHJvdGF0ZVBvc2l0aW9uID0gb3B0aW9ucy5yb3RhdGVQb3NpdGlvbixcbiAgICAgIGRpcmVjdGlvbkRlbHRhID0gb3B0aW9ucy5kaXJlY3Rpb25EZWx0YTtcbiAgdmFyIGRlbHRhWCA9IHJvdGF0ZVBvc2l0aW9uLnggLSB4O1xuICB2YXIgZGVsdGFZID0geSAtIHJvdGF0ZVBvc2l0aW9uLnk7XG4gIHZhciBhYnNYID0gTWF0aC5hYnMoZGVsdGFYKTtcbiAgdmFyIGFic1kgPSBNYXRoLmFicyhkZWx0YVkpO1xuICAoMCwgX3VwZGF0ZVRyYWNlLnVwZGF0ZVRyYWNlKSh0cmFjZVgsIGRlbHRhWCk7XG4gICgwLCBfdXBkYXRlVHJhY2UudXBkYXRlVHJhY2UpKHRyYWNlWSwgZGVsdGFZKTtcbiAgdmFyIGRpcmVjdGlvblggPSAoMCwgX3Jlc29sdmVEaXJlY3Rpb24ucmVzb2x2ZURpcmVjdGlvbikodHJhY2VYLCBfdHlwZXMuQXhpcy5YLCBkaXJlY3Rpb25EZWx0YSk7XG4gIHZhciBkaXJlY3Rpb25ZID0gKDAsIF9yZXNvbHZlRGlyZWN0aW9uLnJlc29sdmVEaXJlY3Rpb24pKHRyYWNlWSwgX3R5cGVzLkF4aXMuWSwgZGlyZWN0aW9uRGVsdGEpO1xuICB2YXIgZHVyYXRpb24gPSAoMCwgX2NhbGN1bGF0ZUR1cmF0aW9uLmNhbGN1bGF0ZUR1cmF0aW9uKShzdGFydCwgRGF0ZS5ub3coKSk7XG4gIHZhciB2ZWxvY2l0eSA9ICgwLCBfY2FsY3VsYXRlVmVsb2NpdHkuY2FsY3VsYXRlVmVsb2NpdHkpKGFic1gsIGFic1ksIGR1cmF0aW9uKTtcbiAgcmV0dXJuIHtcbiAgICBhYnNYOiBhYnNYLFxuICAgIGFic1k6IGFic1ksXG4gICAgZGVsdGFYOiBkZWx0YVgsXG4gICAgZGVsdGFZOiBkZWx0YVksXG4gICAgZGlyZWN0aW9uWDogZGlyZWN0aW9uWCxcbiAgICBkaXJlY3Rpb25ZOiBkaXJlY3Rpb25ZLFxuICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICBwb3NpdGlvblg6IHJvdGF0ZVBvc2l0aW9uLngsXG4gICAgcG9zaXRpb25ZOiByb3RhdGVQb3NpdGlvbi55LFxuICAgIHZlbG9jaXR5OiB2ZWxvY2l0eVxuICB9O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jaGVja0lzTW9yZVRoYW5TaW5nbGVUb3VjaGVzID0gdm9pZCAwO1xuXG52YXIgY2hlY2tJc01vcmVUaGFuU2luZ2xlVG91Y2hlcyA9IGZ1bmN0aW9uIGNoZWNrSXNNb3JlVGhhblNpbmdsZVRvdWNoZXMoZSkge1xuICByZXR1cm4gQm9vbGVhbihlLnRvdWNoZXMgJiYgZS50b3VjaGVzLmxlbmd0aCA+IDEpO1xufTtcblxuZXhwb3J0cy5jaGVja0lzTW9yZVRoYW5TaW5nbGVUb3VjaGVzID0gY2hlY2tJc01vcmVUaGFuU2luZ2xlVG91Y2hlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY3JlYXRlT3B0aW9ucyA9IGNyZWF0ZU9wdGlvbnM7XG5cbmZ1bmN0aW9uIGNyZWF0ZU9wdGlvbnMoKSB7XG4gIHZhciBwcm94eSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm94eSwgJ3Bhc3NpdmUnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB0aGlzLmlzUGFzc2l2ZVN1cHBvcnRlZCA9IHRydWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIGVudW1lcmFibGU6IHRydWVcbiAgfSk7XG4gIHJldHVybiBwcm94eTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY2hlY2tJc1Bhc3NpdmVTdXBwb3J0ZWQgPSBjaGVja0lzUGFzc2l2ZVN1cHBvcnRlZDtcbmV4cG9ydHMubm9vcCA9IHZvaWQgMDtcblxudmFyIF9jcmVhdGVPcHRpb25zID0gcmVxdWlyZShcIi4vY3JlYXRlT3B0aW9uc1wiKTtcblxuZnVuY3Rpb24gY2hlY2tJc1Bhc3NpdmVTdXBwb3J0ZWQoaXNQYXNzaXZlU3VwcG9ydGVkKSB7XG4gIGlmICh0eXBlb2YgaXNQYXNzaXZlU3VwcG9ydGVkID09PSAnYm9vbGVhbicpIHtcbiAgICByZXR1cm4gaXNQYXNzaXZlU3VwcG9ydGVkO1xuICB9XG5cbiAgdmFyIHByb3h5ID0ge1xuICAgIGlzUGFzc2l2ZVN1cHBvcnRlZDogaXNQYXNzaXZlU3VwcG9ydGVkXG4gIH07XG5cbiAgdHJ5IHtcbiAgICB2YXIgb3B0aW9ucyA9ICgwLCBfY3JlYXRlT3B0aW9ucy5jcmVhdGVPcHRpb25zKShwcm94eSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NoZWNrSXNQYXNzaXZlU3VwcG9ydGVkJywgbm9vcCwgb3B0aW9ucyk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoZWNrSXNQYXNzaXZlU3VwcG9ydGVkJywgbm9vcCwgb3B0aW9ucyk7XG4gIH0gY2F0Y2ggKGVycikge31cblxuICByZXR1cm4gcHJveHkuaXNQYXNzaXZlU3VwcG9ydGVkO1xufVxuXG52YXIgbm9vcCA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcblxuZXhwb3J0cy5ub29wID0gbm9vcDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY2hlY2tJc1RvdWNoRXZlbnRzU3VwcG9ydGVkID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSwgX3R5cGVvZihvYmopOyB9XG5cbnZhciBjaGVja0lzVG91Y2hFdmVudHNTdXBwb3J0ZWQgPSBmdW5jdGlvbiBjaGVja0lzVG91Y2hFdmVudHNTdXBwb3J0ZWQoKSB7XG4gIHJldHVybiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKHdpbmRvdykpID09PSAnb2JqZWN0JyAmJiAoJ29udG91Y2hzdGFydCcgaW4gd2luZG93IHx8IEJvb2xlYW4od2luZG93Lm5hdmlnYXRvci5tYXhUb3VjaFBvaW50cykpO1xufTtcblxuZXhwb3J0cy5jaGVja0lzVG91Y2hFdmVudHNTdXBwb3J0ZWQgPSBjaGVja0lzVG91Y2hFdmVudHNTdXBwb3J0ZWQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldEluaXRpYWxTdGF0ZSA9IHZvaWQgMDtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307IGkgJSAyID8gb3duS2V5cyhPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIGdldEluaXRpYWxTdGF0ZSA9IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICByZXR1cm4gX29iamVjdFNwcmVhZCh7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIHN0YXJ0OiAwLFxuICAgIGlzU3dpcGluZzogZmFsc2UsXG4gICAgdHJhY2VYOiBbXSxcbiAgICB0cmFjZVk6IFtdXG4gIH0sIG9wdGlvbnMpO1xufTtcblxuZXhwb3J0cy5nZXRJbml0aWFsU3RhdGUgPSBnZXRJbml0aWFsU3RhdGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldEluaXRpYWxQcm9wcyA9IHZvaWQgMDtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307IGkgJSAyID8gb3duS2V5cyhPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIGdldEluaXRpYWxQcm9wcyA9IGZ1bmN0aW9uIGdldEluaXRpYWxQcm9wcygpIHtcbiAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe1xuICAgIGVsZW1lbnQ6IG51bGwsXG4gICAgdGFyZ2V0OiBudWxsLFxuICAgIGRlbHRhOiAxMCxcbiAgICBkaXJlY3Rpb25EZWx0YTogMCxcbiAgICByb3RhdGlvbkFuZ2xlOiAwLFxuICAgIG1vdXNlVHJhY2tpbmdFbmFibGVkOiBmYWxzZSxcbiAgICB0b3VjaFRyYWNraW5nRW5hYmxlZDogdHJ1ZSxcbiAgICBwcmV2ZW50RGVmYXVsdFRvdWNobW92ZUV2ZW50OiBmYWxzZSxcbiAgICBwcmV2ZW50VHJhY2tpbmdPbk1vdXNlbGVhdmU6IGZhbHNlXG4gIH0sIHByb3BzKTtcbn07XG5cbmV4cG9ydHMuZ2V0SW5pdGlhbFByb3BzID0gZ2V0SW5pdGlhbFByb3BzOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXRPcHRpb25zID0gZ2V0T3B0aW9ucztcblxuZnVuY3Rpb24gZ2V0T3B0aW9ucygpIHtcbiAgdmFyIGlzUGFzc2l2ZVN1cHBvcnRlZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZmFsc2U7XG5cbiAgaWYgKGlzUGFzc2l2ZVN1cHBvcnRlZCkge1xuICAgIHJldHVybiB7XG4gICAgICBwYXNzaXZlOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge307XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJvdGF0ZUJ5QW5nbGUgPSByb3RhdGVCeUFuZ2xlO1xuXG5mdW5jdGlvbiByb3RhdGVCeUFuZ2xlKHBvc2l0aW9uKSB7XG4gIHZhciBhbmdsZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcblxuICBpZiAoYW5nbGUgPT09IDApIHtcbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cblxuICB2YXIgeCA9IHBvc2l0aW9uLngsXG4gICAgICB5ID0gcG9zaXRpb24ueTtcbiAgdmFyIGFuZ2xlSW5SYWRpYW5zID0gTWF0aC5QSSAvIDE4MCAqIGFuZ2xlO1xuICB2YXIgcm90YXRlZFggPSB4ICogTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpICsgeSAqIE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcbiAgdmFyIHJvdGF0ZWRZID0geSAqIE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKSAtIHggKiBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG4gIHJldHVybiB7XG4gICAgeDogcm90YXRlZFgsXG4gICAgeTogcm90YXRlZFlcbiAgfTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jYWxjdWxhdGVEaXJlY3Rpb24gPSByZXF1aXJlKFwiLi9jYWxjdWxhdGVEaXJlY3Rpb25cIik7XG5cbk9iamVjdC5rZXlzKF9jYWxjdWxhdGVEaXJlY3Rpb24pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9jYWxjdWxhdGVEaXJlY3Rpb25ba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfY2FsY3VsYXRlRGlyZWN0aW9uW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX2NhbGN1bGF0ZURpcmVjdGlvbkRlbHRhID0gcmVxdWlyZShcIi4vY2FsY3VsYXRlRGlyZWN0aW9uRGVsdGFcIik7XG5cbk9iamVjdC5rZXlzKF9jYWxjdWxhdGVEaXJlY3Rpb25EZWx0YSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX2NhbGN1bGF0ZURpcmVjdGlvbkRlbHRhW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2NhbGN1bGF0ZURpcmVjdGlvbkRlbHRhW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX2NhbGN1bGF0ZUR1cmF0aW9uID0gcmVxdWlyZShcIi4vY2FsY3VsYXRlRHVyYXRpb25cIik7XG5cbk9iamVjdC5rZXlzKF9jYWxjdWxhdGVEdXJhdGlvbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX2NhbGN1bGF0ZUR1cmF0aW9uW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2NhbGN1bGF0ZUR1cmF0aW9uW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX2NhbGN1bGF0ZU1vdmluZ1Bvc2l0aW9uID0gcmVxdWlyZShcIi4vY2FsY3VsYXRlTW92aW5nUG9zaXRpb25cIik7XG5cbk9iamVjdC5rZXlzKF9jYWxjdWxhdGVNb3ZpbmdQb3NpdGlvbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX2NhbGN1bGF0ZU1vdmluZ1Bvc2l0aW9uW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2NhbGN1bGF0ZU1vdmluZ1Bvc2l0aW9uW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX2NhbGN1bGF0ZVBvc2l0aW9uID0gcmVxdWlyZShcIi4vY2FsY3VsYXRlUG9zaXRpb25cIik7XG5cbk9iamVjdC5rZXlzKF9jYWxjdWxhdGVQb3NpdGlvbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX2NhbGN1bGF0ZVBvc2l0aW9uW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2NhbGN1bGF0ZVBvc2l0aW9uW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX2NhbGN1bGF0ZVRyYWNlRGlyZWN0aW9ucyA9IHJlcXVpcmUoXCIuL2NhbGN1bGF0ZVRyYWNlRGlyZWN0aW9uc1wiKTtcblxuT2JqZWN0LmtleXMoX2NhbGN1bGF0ZVRyYWNlRGlyZWN0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX2NhbGN1bGF0ZVRyYWNlRGlyZWN0aW9uc1trZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9jYWxjdWxhdGVUcmFjZURpcmVjdGlvbnNba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfY2FsY3VsYXRlVmVsb2NpdHkgPSByZXF1aXJlKFwiLi9jYWxjdWxhdGVWZWxvY2l0eVwiKTtcblxuT2JqZWN0LmtleXMoX2NhbGN1bGF0ZVZlbG9jaXR5KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfY2FsY3VsYXRlVmVsb2NpdHlba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfY2FsY3VsYXRlVmVsb2NpdHlba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfY2hlY2tJc01vcmVUaGFuU2luZ2xlVG91Y2hlcyA9IHJlcXVpcmUoXCIuL2NoZWNrSXNNb3JlVGhhblNpbmdsZVRvdWNoZXNcIik7XG5cbk9iamVjdC5rZXlzKF9jaGVja0lzTW9yZVRoYW5TaW5nbGVUb3VjaGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfY2hlY2tJc01vcmVUaGFuU2luZ2xlVG91Y2hlc1trZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9jaGVja0lzTW9yZVRoYW5TaW5nbGVUb3VjaGVzW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX2NoZWNrSXNQYXNzaXZlU3VwcG9ydGVkID0gcmVxdWlyZShcIi4vY2hlY2tJc1Bhc3NpdmVTdXBwb3J0ZWRcIik7XG5cbk9iamVjdC5rZXlzKF9jaGVja0lzUGFzc2l2ZVN1cHBvcnRlZCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX2NoZWNrSXNQYXNzaXZlU3VwcG9ydGVkW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2NoZWNrSXNQYXNzaXZlU3VwcG9ydGVkW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX2NoZWNrSXNUb3VjaEV2ZW50c1N1cHBvcnRlZCA9IHJlcXVpcmUoXCIuL2NoZWNrSXNUb3VjaEV2ZW50c1N1cHBvcnRlZFwiKTtcblxuT2JqZWN0LmtleXMoX2NoZWNrSXNUb3VjaEV2ZW50c1N1cHBvcnRlZCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX2NoZWNrSXNUb3VjaEV2ZW50c1N1cHBvcnRlZFtrZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9jaGVja0lzVG91Y2hFdmVudHNTdXBwb3J0ZWRba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG5PYmplY3Qua2V5cyhfY29tbW9uKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfY29tbW9uW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2NvbW1vbltrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF9jcmVhdGVPcHRpb25zID0gcmVxdWlyZShcIi4vY3JlYXRlT3B0aW9uc1wiKTtcblxuT2JqZWN0LmtleXMoX2NyZWF0ZU9wdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9jcmVhdGVPcHRpb25zW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2NyZWF0ZU9wdGlvbnNba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfZ2V0SW5pdGlhbFN0YXRlID0gcmVxdWlyZShcIi4vZ2V0SW5pdGlhbFN0YXRlXCIpO1xuXG5PYmplY3Qua2V5cyhfZ2V0SW5pdGlhbFN0YXRlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfZ2V0SW5pdGlhbFN0YXRlW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2dldEluaXRpYWxTdGF0ZVtrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF9nZXRJbml0aWFsUHJvcHMgPSByZXF1aXJlKFwiLi9nZXRJbml0aWFsUHJvcHNcIik7XG5cbk9iamVjdC5rZXlzKF9nZXRJbml0aWFsUHJvcHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9nZXRJbml0aWFsUHJvcHNba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfZ2V0SW5pdGlhbFByb3BzW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX2dldE9wdGlvbnMgPSByZXF1aXJlKFwiLi9nZXRPcHRpb25zXCIpO1xuXG5PYmplY3Qua2V5cyhfZ2V0T3B0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX2dldE9wdGlvbnNba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfZ2V0T3B0aW9uc1trZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF9yZXNvbHZlRGlyZWN0aW9uID0gcmVxdWlyZShcIi4vcmVzb2x2ZURpcmVjdGlvblwiKTtcblxuT2JqZWN0LmtleXMoX3Jlc29sdmVEaXJlY3Rpb24pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9yZXNvbHZlRGlyZWN0aW9uW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX3Jlc29sdmVEaXJlY3Rpb25ba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfcm90YXRlQnlBbmdsZSA9IHJlcXVpcmUoXCIuL3JvdGF0ZUJ5QW5nbGVcIik7XG5cbk9iamVjdC5rZXlzKF9yb3RhdGVCeUFuZ2xlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfcm90YXRlQnlBbmdsZVtrZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9yb3RhdGVCeUFuZ2xlW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX3VwZGF0ZVRyYWNlID0gcmVxdWlyZShcIi4vdXBkYXRlVHJhY2VcIik7XG5cbk9iamVjdC5rZXlzKF91cGRhdGVUcmFjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX3VwZGF0ZVRyYWNlW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX3VwZGF0ZVRyYWNlW2tleV07XG4gICAgfVxuICB9KTtcbn0pOyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSwgX3R5cGVvZihvYmopOyB9XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgX2V4cG9ydE5hbWVzID0ge307XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIFV0aWxzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vdXRpbHNcIikpO1xuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XG5cbk9iamVjdC5rZXlzKF90eXBlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfZXhwb3J0TmFtZXMsIGtleSkpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX3R5cGVzW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX3R5cGVzW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGVCYWJlbEludGVyb3AgPSBuZXcgV2Vha01hcCgpOyB2YXIgY2FjaGVOb2RlSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7IHJldHVybiAoX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKSB7IHJldHVybiBub2RlSW50ZXJvcCA/IGNhY2hlTm9kZUludGVyb3AgOiBjYWNoZUJhYmVsSW50ZXJvcDsgfSkobm9kZUludGVyb3ApOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaiwgbm9kZUludGVyb3ApIHsgaWYgKCFub2RlSW50ZXJvcCAmJiBvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKGtleSAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIFZhbmlsbGFTd2lwZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFZhbmlsbGFTd2lwZShwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBWYW5pbGxhU3dpcGUpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwic3RhdGVcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInByb3BzXCIsIHZvaWQgMCk7XG5cbiAgICB0aGlzLnN0YXRlID0gVXRpbHMuZ2V0SW5pdGlhbFN0YXRlKCk7XG4gICAgdGhpcy5wcm9wcyA9IFV0aWxzLmdldEluaXRpYWxQcm9wcyhwcm9wcyk7XG4gICAgdGhpcy5oYW5kbGVTd2lwZVN0YXJ0ID0gdGhpcy5oYW5kbGVTd2lwZVN0YXJ0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTd2lwZU1vdmUgPSB0aGlzLmhhbmRsZVN3aXBlTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU3dpcGVFbmQgPSB0aGlzLmhhbmRsZVN3aXBlRW5kLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVNb3VzZURvd24gPSB0aGlzLmhhbmRsZU1vdXNlRG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlTW91c2VNb3ZlID0gdGhpcy5oYW5kbGVNb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZU1vdXNlVXAgPSB0aGlzLmhhbmRsZU1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZU1vdXNlTGVhdmUgPSB0aGlzLmhhbmRsZU1vdXNlTGVhdmUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhWYW5pbGxhU3dpcGUsIFt7XG4gICAga2V5OiBcImluaXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgIHRoaXMuc2V0dXBUb3VjaExpc3RlbmVycygpO1xuICAgICAgdGhpcy5zZXR1cE1vdXNlTGlzdGVuZXJzKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGUocHJvcHMpIHtcbiAgICAgIHZhciBwcmV2UHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIG5leHRQcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHByZXZQcm9wcywgcHJvcHMpO1xuXG4gICAgICBpZiAocHJldlByb3BzLmVsZW1lbnQgIT09IG5leHRQcm9wcy5lbGVtZW50IHx8IHByZXZQcm9wcy50YXJnZXQgIT09IG5leHRQcm9wcy50YXJnZXQpIHtcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMucHJvcHMgPSBuZXh0UHJvcHM7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMucHJvcHMgPSBuZXh0UHJvcHM7XG5cbiAgICAgIGlmIChwcmV2UHJvcHMubW91c2VUcmFja2luZ0VuYWJsZWQgIT09IG5leHRQcm9wcy5tb3VzZVRyYWNraW5nRW5hYmxlZCB8fCBwcmV2UHJvcHMucHJldmVudFRyYWNraW5nT25Nb3VzZWxlYXZlICE9PSBuZXh0UHJvcHMucHJldmVudFRyYWNraW5nT25Nb3VzZWxlYXZlKSB7XG4gICAgICAgIHRoaXMuY2xlYW51cE1vdXNlTGlzdGVuZXJzKCk7XG4gICAgICAgIG5leHRQcm9wcy5tb3VzZVRyYWNraW5nRW5hYmxlZCA/IHRoaXMuc2V0dXBNb3VzZUxpc3RlbmVycygpIDogdGhpcy5jbGVhbnVwTW91c2VMaXN0ZW5lcnMoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByZXZQcm9wcy50b3VjaFRyYWNraW5nRW5hYmxlZCAhPT0gbmV4dFByb3BzLnRvdWNoVHJhY2tpbmdFbmFibGVkKSB7XG4gICAgICAgIHRoaXMuY2xlYW51cFRvdWNoTGlzdGVuZXJzKCk7XG4gICAgICAgIG5leHRQcm9wcy50b3VjaFRyYWNraW5nRW5hYmxlZCA/IHRoaXMuc2V0dXBUb3VjaExpc3RlbmVycygpIDogdGhpcy5jbGVhbnVwVG91Y2hMaXN0ZW5lcnMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGVzdHJveVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgdGhpcy5jbGVhbnVwTW91c2VMaXN0ZW5lcnMoKTtcbiAgICAgIHRoaXMuY2xlYW51cFRvdWNoTGlzdGVuZXJzKCk7XG4gICAgICB0aGlzLnN0YXRlID0gVXRpbHMuZ2V0SW5pdGlhbFN0YXRlKCk7XG4gICAgICB0aGlzLnByb3BzID0gVXRpbHMuZ2V0SW5pdGlhbFByb3BzKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldHVwVG91Y2hMaXN0ZW5lcnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0dXBUb3VjaExpc3RlbmVycygpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZWxlbWVudCA9IF90aGlzJHByb3BzLmVsZW1lbnQsXG4gICAgICAgICAgdGFyZ2V0ID0gX3RoaXMkcHJvcHMudGFyZ2V0LFxuICAgICAgICAgIHRvdWNoVHJhY2tpbmdFbmFibGVkID0gX3RoaXMkcHJvcHMudG91Y2hUcmFja2luZ0VuYWJsZWQ7XG5cbiAgICAgIGlmIChlbGVtZW50ICYmIHRvdWNoVHJhY2tpbmdFbmFibGVkKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRhcmdldCB8fCBlbGVtZW50O1xuICAgICAgICB2YXIgaXNQYXNzaXZlU3VwcG9ydGVkID0gVXRpbHMuY2hlY2tJc1Bhc3NpdmVTdXBwb3J0ZWQoKTtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBVdGlscy5nZXRPcHRpb25zKGlzUGFzc2l2ZVN1cHBvcnRlZCk7XG4gICAgICAgIGxpc3RlbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLmhhbmRsZVN3aXBlU3RhcnQsIG9wdGlvbnMpO1xuICAgICAgICBsaXN0ZW5lci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmhhbmRsZVN3aXBlTW92ZSwgb3B0aW9ucyk7XG4gICAgICAgIGxpc3RlbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5oYW5kbGVTd2lwZUVuZCwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNsZWFudXBUb3VjaExpc3RlbmVyc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbGVhbnVwVG91Y2hMaXN0ZW5lcnMoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBlbGVtZW50ID0gX3RoaXMkcHJvcHMyLmVsZW1lbnQsXG4gICAgICAgICAgdGFyZ2V0ID0gX3RoaXMkcHJvcHMyLnRhcmdldDtcbiAgICAgIHZhciBsaXN0ZW5lciA9IHRhcmdldCB8fCBlbGVtZW50O1xuXG4gICAgICBpZiAobGlzdGVuZXIpIHtcbiAgICAgICAgbGlzdGVuZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuaGFuZGxlU3dpcGVTdGFydCk7XG4gICAgICAgIGxpc3RlbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuaGFuZGxlU3dpcGVNb3ZlKTtcbiAgICAgICAgbGlzdGVuZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLmhhbmRsZVN3aXBlRW5kKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0dXBNb3VzZUxpc3RlbmVyc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXR1cE1vdXNlTGlzdGVuZXJzKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZWxlbWVudCA9IF90aGlzJHByb3BzMy5lbGVtZW50LFxuICAgICAgICAgIG1vdXNlVHJhY2tpbmdFbmFibGVkID0gX3RoaXMkcHJvcHMzLm1vdXNlVHJhY2tpbmdFbmFibGVkLFxuICAgICAgICAgIHByZXZlbnRUcmFja2luZ09uTW91c2VsZWF2ZSA9IF90aGlzJHByb3BzMy5wcmV2ZW50VHJhY2tpbmdPbk1vdXNlbGVhdmU7XG5cbiAgICAgIGlmIChtb3VzZVRyYWNraW5nRW5hYmxlZCAmJiBlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVNb3VzZURvd24pO1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuaGFuZGxlTW91c2VNb3ZlKTtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5oYW5kbGVNb3VzZVVwKTtcblxuICAgICAgICBpZiAocHJldmVudFRyYWNraW5nT25Nb3VzZWxlYXZlKSB7XG4gICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5oYW5kbGVNb3VzZUxlYXZlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjbGVhbnVwTW91c2VMaXN0ZW5lcnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xlYW51cE1vdXNlTGlzdGVuZXJzKCkge1xuICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLnByb3BzLmVsZW1lbnQ7XG5cbiAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVNb3VzZURvd24pO1xuICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuaGFuZGxlTW91c2VNb3ZlKTtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5oYW5kbGVNb3VzZVVwKTtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5oYW5kbGVNb3VzZUxlYXZlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0RXZlbnREYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEV2ZW50RGF0YShlKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge1xuICAgICAgICBkaXJlY3Rpb25EZWx0YTogMFxuICAgICAgfTtcbiAgICAgIHZhciByb3RhdGlvbkFuZ2xlID0gdGhpcy5wcm9wcy5yb3RhdGlvbkFuZ2xlO1xuICAgICAgdmFyIGRpcmVjdGlvbkRlbHRhID0gb3B0aW9ucy5kaXJlY3Rpb25EZWx0YTtcbiAgICAgIHZhciBtb3ZpbmdQb3NpdGlvbiA9IFV0aWxzLmNhbGN1bGF0ZU1vdmluZ1Bvc2l0aW9uKGUpO1xuICAgICAgdmFyIHJvdGF0ZVBvc2l0aW9uID0gVXRpbHMucm90YXRlQnlBbmdsZShtb3ZpbmdQb3NpdGlvbiwgcm90YXRpb25BbmdsZSk7XG4gICAgICByZXR1cm4gVXRpbHMuY2FsY3VsYXRlUG9zaXRpb24odGhpcy5zdGF0ZSwge1xuICAgICAgICByb3RhdGVQb3NpdGlvbjogcm90YXRlUG9zaXRpb24sXG4gICAgICAgIGRpcmVjdGlvbkRlbHRhOiBkaXJlY3Rpb25EZWx0YVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhhbmRsZVN3aXBlU3RhcnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlU3dpcGVTdGFydChlKSB7XG4gICAgICBpZiAoVXRpbHMuY2hlY2tJc01vcmVUaGFuU2luZ2xlVG91Y2hlcyhlKSkgcmV0dXJuO1xuICAgICAgdmFyIHJvdGF0aW9uQW5nbGUgPSB0aGlzLnByb3BzLnJvdGF0aW9uQW5nbGU7XG4gICAgICB2YXIgbW92aW5nUG9zaXRpb24gPSBVdGlscy5jYWxjdWxhdGVNb3ZpbmdQb3NpdGlvbihlKTtcblxuICAgICAgdmFyIF9VdGlscyRyb3RhdGVCeUFuZ2xlID0gVXRpbHMucm90YXRlQnlBbmdsZShtb3ZpbmdQb3NpdGlvbiwgcm90YXRpb25BbmdsZSksXG4gICAgICAgICAgeCA9IF9VdGlscyRyb3RhdGVCeUFuZ2xlLngsXG4gICAgICAgICAgeSA9IF9VdGlscyRyb3RhdGVCeUFuZ2xlLnk7XG5cbiAgICAgIHRoaXMuc3RhdGUgPSBVdGlscy5nZXRJbml0aWFsU3RhdGUoe1xuICAgICAgICBpc1N3aXBpbmc6IGZhbHNlLFxuICAgICAgICBzdGFydDogRGF0ZS5ub3coKSxcbiAgICAgICAgeDogeCxcbiAgICAgICAgeTogeVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhhbmRsZVN3aXBlTW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVTd2lwZU1vdmUoZSkge1xuICAgICAgdmFyIF90aGlzJHN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICB4ID0gX3RoaXMkc3RhdGUueCxcbiAgICAgICAgICB5ID0gX3RoaXMkc3RhdGUueSxcbiAgICAgICAgICBpc1N3aXBpbmcgPSBfdGhpcyRzdGF0ZS5pc1N3aXBpbmc7XG4gICAgICBpZiAoIXggfHwgIXkgfHwgVXRpbHMuY2hlY2tJc01vcmVUaGFuU2luZ2xlVG91Y2hlcyhlKSkgcmV0dXJuO1xuICAgICAgdmFyIGRpcmVjdGlvbkRlbHRhID0gdGhpcy5wcm9wcy5kaXJlY3Rpb25EZWx0YSB8fCAwO1xuXG4gICAgICB2YXIgX3RoaXMkZ2V0RXZlbnREYXRhID0gdGhpcy5nZXRFdmVudERhdGEoZSwge1xuICAgICAgICBkaXJlY3Rpb25EZWx0YTogZGlyZWN0aW9uRGVsdGFcbiAgICAgIH0pLFxuICAgICAgICAgIGFic1ggPSBfdGhpcyRnZXRFdmVudERhdGEuYWJzWCxcbiAgICAgICAgICBhYnNZID0gX3RoaXMkZ2V0RXZlbnREYXRhLmFic1ksXG4gICAgICAgICAgZGVsdGFYID0gX3RoaXMkZ2V0RXZlbnREYXRhLmRlbHRhWCxcbiAgICAgICAgICBkZWx0YVkgPSBfdGhpcyRnZXRFdmVudERhdGEuZGVsdGFZLFxuICAgICAgICAgIGRpcmVjdGlvblggPSBfdGhpcyRnZXRFdmVudERhdGEuZGlyZWN0aW9uWCxcbiAgICAgICAgICBkaXJlY3Rpb25ZID0gX3RoaXMkZ2V0RXZlbnREYXRhLmRpcmVjdGlvblksXG4gICAgICAgICAgZHVyYXRpb24gPSBfdGhpcyRnZXRFdmVudERhdGEuZHVyYXRpb24sXG4gICAgICAgICAgdmVsb2NpdHkgPSBfdGhpcyRnZXRFdmVudERhdGEudmVsb2NpdHk7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wczQgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGRlbHRhID0gX3RoaXMkcHJvcHM0LmRlbHRhLFxuICAgICAgICAgIHByZXZlbnREZWZhdWx0VG91Y2htb3ZlRXZlbnQgPSBfdGhpcyRwcm9wczQucHJldmVudERlZmF1bHRUb3VjaG1vdmVFdmVudCxcbiAgICAgICAgICBvblN3aXBlU3RhcnQgPSBfdGhpcyRwcm9wczQub25Td2lwZVN0YXJ0LFxuICAgICAgICAgIG9uU3dpcGluZyA9IF90aGlzJHByb3BzNC5vblN3aXBpbmc7XG4gICAgICBpZiAoZS5jYW5jZWxhYmxlICYmIHByZXZlbnREZWZhdWx0VG91Y2htb3ZlRXZlbnQpIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChhYnNYIDwgTnVtYmVyKGRlbHRhKSAmJiBhYnNZIDwgTnVtYmVyKGRlbHRhKSAmJiAhaXNTd2lwaW5nKSByZXR1cm47XG5cbiAgICAgIGlmIChvblN3aXBlU3RhcnQgJiYgIWlzU3dpcGluZykge1xuICAgICAgICBvblN3aXBlU3RhcnQoZSwge1xuICAgICAgICAgIGRlbHRhWDogZGVsdGFYLFxuICAgICAgICAgIGRlbHRhWTogZGVsdGFZLFxuICAgICAgICAgIGFic1g6IGFic1gsXG4gICAgICAgICAgYWJzWTogYWJzWSxcbiAgICAgICAgICBkaXJlY3Rpb25YOiBkaXJlY3Rpb25YLFxuICAgICAgICAgIGRpcmVjdGlvblk6IGRpcmVjdGlvblksXG4gICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgIHZlbG9jaXR5OiB2ZWxvY2l0eVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zdGF0ZS5pc1N3aXBpbmcgPSB0cnVlO1xuXG4gICAgICBpZiAob25Td2lwaW5nKSB7XG4gICAgICAgIG9uU3dpcGluZyhlLCB7XG4gICAgICAgICAgZGVsdGFYOiBkZWx0YVgsXG4gICAgICAgICAgZGVsdGFZOiBkZWx0YVksXG4gICAgICAgICAgYWJzWDogYWJzWCxcbiAgICAgICAgICBhYnNZOiBhYnNZLFxuICAgICAgICAgIGRpcmVjdGlvblg6IGRpcmVjdGlvblgsXG4gICAgICAgICAgZGlyZWN0aW9uWTogZGlyZWN0aW9uWSxcbiAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgdmVsb2NpdHk6IHZlbG9jaXR5XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYW5kbGVTd2lwZUVuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVTd2lwZUVuZChlKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM1ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBvblN3aXBlZCA9IF90aGlzJHByb3BzNS5vblN3aXBlZCxcbiAgICAgICAgICBvblRhcCA9IF90aGlzJHByb3BzNS5vblRhcDtcblxuICAgICAgaWYgKHRoaXMuc3RhdGUuaXNTd2lwaW5nKSB7XG4gICAgICAgIHZhciBkaXJlY3Rpb25EZWx0YSA9IHRoaXMucHJvcHMuZGlyZWN0aW9uRGVsdGEgfHwgMDtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gdGhpcy5nZXRFdmVudERhdGEoZSwge1xuICAgICAgICAgIGRpcmVjdGlvbkRlbHRhOiBkaXJlY3Rpb25EZWx0YVxuICAgICAgICB9KTtcbiAgICAgICAgb25Td2lwZWQgJiYgb25Td2lwZWQoZSwgcG9zaXRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIF9wb3NpdGlvbiA9IHRoaXMuZ2V0RXZlbnREYXRhKGUpO1xuXG4gICAgICAgIG9uVGFwICYmIG9uVGFwKGUsIF9wb3NpdGlvbik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3RhdGUgPSBVdGlscy5nZXRJbml0aWFsU3RhdGUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlTW91c2VEb3duXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bihlKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gdGhpcy5wcm9wcy50YXJnZXQ7XG5cbiAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gZS50YXJnZXQpIHtcbiAgICAgICAgICB0aGlzLmhhbmRsZVN3aXBlU3RhcnQoZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGFuZGxlU3dpcGVTdGFydChlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlTW91c2VNb3ZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZShlKSB7XG4gICAgICB0aGlzLmhhbmRsZVN3aXBlTW92ZShlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlTW91c2VVcFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVNb3VzZVVwKGUpIHtcbiAgICAgIHZhciBpc1N3aXBpbmcgPSB0aGlzLnN0YXRlLmlzU3dpcGluZztcbiAgICAgIHZhciB0YXJnZXQgPSB0aGlzLnByb3BzLnRhcmdldDtcblxuICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICBpZiAodGFyZ2V0ID09PSBlLnRhcmdldCB8fCBpc1N3aXBpbmcpIHtcbiAgICAgICAgICB0aGlzLmhhbmRsZVN3aXBlRW5kKGUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmhhbmRsZVN3aXBlRW5kKGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYW5kbGVNb3VzZUxlYXZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlTGVhdmUoZSkge1xuICAgICAgdmFyIGlzU3dpcGluZyA9IHRoaXMuc3RhdGUuaXNTd2lwaW5nO1xuXG4gICAgICBpZiAoaXNTd2lwaW5nKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlU3dpcGVFbmQoZSk7XG4gICAgICB9XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiaXNUb3VjaEV2ZW50c1N1cHBvcnRlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc1RvdWNoRXZlbnRzU3VwcG9ydGVkKCkge1xuICAgICAgcmV0dXJuIFV0aWxzLmNoZWNrSXNUb3VjaEV2ZW50c1N1cHBvcnRlZCgpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBWYW5pbGxhU3dpcGU7XG59KCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gVmFuaWxsYVN3aXBlOyIsIlwidXNlIHN0cmljdFwiO3ZhciBFdmVudFR5cGUsQW5pbWF0aW9uVHlwZSxBdXRvUGxheVN0cmF0ZWd5LENvbnRyb2xzU3RyYXRlZ3ksQXV0b3BsYXlEaXJlY3Rpb24sQ2xhc3NuYW1lcyxNb2RpZmllcnM7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZXhwb3J0cy5Nb2RpZmllcnM9ZXhwb3J0cy5DbGFzc25hbWVzPWV4cG9ydHMuQXV0b3BsYXlEaXJlY3Rpb249ZXhwb3J0cy5Db250cm9sc1N0cmF0ZWd5PWV4cG9ydHMuQXV0b1BsYXlTdHJhdGVneT1leHBvcnRzLkFuaW1hdGlvblR5cGU9ZXhwb3J0cy5FdmVudFR5cGU9dm9pZCAwLGZ1bmN0aW9uKGUpe2UuQUNUSU9OPVwiYWN0aW9uXCIsZS5JTklUPVwiaW5pdFwiLGUuUkVTSVpFPVwicmVzaXplXCIsZS5VUERBVEU9XCJ1cGRhdGVcIn0oRXZlbnRUeXBlPWV4cG9ydHMuRXZlbnRUeXBlfHwoZXhwb3J0cy5FdmVudFR5cGU9e30pKSxmdW5jdGlvbihlKXtlLkZBREVPVVQ9XCJmYWRlb3V0XCIsZS5TTElERT1cInNsaWRlXCJ9KEFuaW1hdGlvblR5cGU9ZXhwb3J0cy5BbmltYXRpb25UeXBlfHwoZXhwb3J0cy5BbmltYXRpb25UeXBlPXt9KSksZnVuY3Rpb24oZSl7ZS5ERUZBVUxUPVwiZGVmYXVsdFwiLGUuQUxMPVwiYWxsXCIsZS5BQ1RJT049XCJhY3Rpb25cIixlLk5PTkU9XCJub25lXCJ9KEF1dG9QbGF5U3RyYXRlZ3k9ZXhwb3J0cy5BdXRvUGxheVN0cmF0ZWd5fHwoZXhwb3J0cy5BdXRvUGxheVN0cmF0ZWd5PXt9KSksZnVuY3Rpb24oZSl7ZS5ERUZBVUxUPVwiZGVmYXVsdFwiLGUuQUxURVJOQVRFPVwiYWx0ZXJuYXRlXCIsZS5SRVNQT05TSVZFPVwicmVzcG9uc2l2ZVwifShDb250cm9sc1N0cmF0ZWd5PWV4cG9ydHMuQ29udHJvbHNTdHJhdGVneXx8KGV4cG9ydHMuQ29udHJvbHNTdHJhdGVneT17fSkpLGZ1bmN0aW9uKGUpe2UuUlRMPVwicnRsXCIsZS5MVFI9XCJsdHJcIn0oQXV0b3BsYXlEaXJlY3Rpb249ZXhwb3J0cy5BdXRvcGxheURpcmVjdGlvbnx8KGV4cG9ydHMuQXV0b3BsYXlEaXJlY3Rpb249e30pKSxmdW5jdGlvbihlKXtlLkFOSU1BVEVEPVwiYW5pbWF0ZWQgYW5pbWF0ZWQtb3V0IGZhZGVPdXRcIixlLlJPT1Q9XCJhbGljZS1jYXJvdXNlbFwiLGUuV1JBUFBFUj1cImFsaWNlLWNhcm91c2VsX193cmFwcGVyXCIsZS5TVEFHRT1cImFsaWNlLWNhcm91c2VsX19zdGFnZVwiLGUuU1RBR0VfSVRFTT1cImFsaWNlLWNhcm91c2VsX19zdGFnZS1pdGVtXCIsZS5ET1RTPVwiYWxpY2UtY2Fyb3VzZWxfX2RvdHNcIixlLkRPVFNfSVRFTT1cImFsaWNlLWNhcm91c2VsX19kb3RzLWl0ZW1cIixlLlBMQVlfQlROPVwiYWxpY2UtY2Fyb3VzZWxfX3BsYXktYnRuXCIsZS5QTEFZX0JUTl9JVEVNPVwiYWxpY2UtY2Fyb3VzZWxfX3BsYXktYnRuLWl0ZW1cIixlLlBMQVlfQlROX1dSQVBQRVI9XCJhbGljZS1jYXJvdXNlbF9fcGxheS1idG4td3JhcHBlclwiLGUuU0xJREVfSU5GTz1cImFsaWNlLWNhcm91c2VsX19zbGlkZS1pbmZvXCIsZS5TTElERV9JTkZPX0lURU09XCJhbGljZS1jYXJvdXNlbF9fc2xpZGUtaW5mby1pdGVtXCIsZS5CVVRUT05fUFJFVj1cImFsaWNlLWNhcm91c2VsX19wcmV2LWJ0blwiLGUuQlVUVE9OX1BSRVZfV1JBUFBFUj1cImFsaWNlLWNhcm91c2VsX19wcmV2LWJ0bi13cmFwcGVyXCIsZS5CVVRUT05fUFJFVl9JVEVNPVwiYWxpY2UtY2Fyb3VzZWxfX3ByZXYtYnRuLWl0ZW1cIixlLkJVVFRPTl9ORVhUPVwiYWxpY2UtY2Fyb3VzZWxfX25leHQtYnRuXCIsZS5CVVRUT05fTkVYVF9XUkFQUEVSPVwiYWxpY2UtY2Fyb3VzZWxfX25leHQtYnRuLXdyYXBwZXJcIixlLkJVVFRPTl9ORVhUX0lURU09XCJhbGljZS1jYXJvdXNlbF9fbmV4dC1idG4taXRlbVwifShDbGFzc25hbWVzPWV4cG9ydHMuQ2xhc3NuYW1lc3x8KGV4cG9ydHMuQ2xhc3NuYW1lcz17fSkpLGZ1bmN0aW9uKGUpe2UuQUNUSVZFPVwiX19hY3RpdmVcIixlLklOQUNUSVZFPVwiX19pbmFjdGl2ZVwiLGUuQ0xPTkVEPVwiX19jbG9uZWRcIixlLkNVU1RPTT1cIl9fY3VzdG9tXCIsZS5QQVVTRT1cIl9fcGF1c2VcIixlLlNFUEFSQVRPUj1cIl9fc2VwYXJhdG9yXCIsZS5TU1I9XCJfX3NzclwiLGUuVEFSR0VUPVwiX190YXJnZXRcIn0oTW9kaWZpZXJzPWV4cG9ydHMuTW9kaWZpZXJzfHwoZXhwb3J0cy5Nb2RpZmllcnM9e30pKTsiLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLmRlZmF1bHRQcm9wcz12b2lkIDA7dmFyIHR5cGVzXzE9cmVxdWlyZShcIi4vdHlwZXNcIik7ZXhwb3J0cy5kZWZhdWx0UHJvcHM9e2FjdGl2ZUluZGV4OjAsYW5pbWF0aW9uRHVyYXRpb246NDAwLGFuaW1hdGlvbkVhc2luZ0Z1bmN0aW9uOlwiZWFzZVwiLGFuaW1hdGlvblR5cGU6dHlwZXNfMS5BbmltYXRpb25UeXBlLlNMSURFLGF1dG9IZWlnaHQ6ITEsYXV0b1dpZHRoOiExLGF1dG9QbGF5OiExLGF1dG9QbGF5Q29udHJvbHM6ITEsYXV0b1BsYXlEaXJlY3Rpb246dHlwZXNfMS5BdXRvcGxheURpcmVjdGlvbi5MVFIsYXV0b1BsYXlJbnRlcnZhbDo0MDAsYXV0b1BsYXlTdHJhdGVneTp0eXBlc18xLkF1dG9QbGF5U3RyYXRlZ3kuREVGQVVMVCxjaGlsZHJlbjp2b2lkIDAsY29udHJvbHNTdHJhdGVneTp0eXBlc18xLkNvbnRyb2xzU3RyYXRlZ3kuREVGQVVMVCxkaXNhYmxlQnV0dG9uc0NvbnRyb2xzOiExLGRpc2FibGVEb3RzQ29udHJvbHM6ITEsZGlzYWJsZVNsaWRlSW5mbzohMCxpbmZpbml0ZTohMSxpbm5lcldpZHRoOnZvaWQgMCxpdGVtczp2b2lkIDAsa2V5Ym9hcmROYXZpZ2F0aW9uOiExLG1vdXNlVHJhY2tpbmc6ITEsbmFtZTpcIlwiLHBhZGRpbmdMZWZ0OjAscGFkZGluZ1JpZ2h0OjAscmVzcG9uc2l2ZTp2b2lkIDAsc3dpcGVEZWx0YToyMCxzd2lwZUV4dHJhUGFkZGluZzoyMDAsc3NyU2lsZW50TW9kZTohMCx0b3VjaFRyYWNraW5nOiEwLHRvdWNoTW92ZURlZmF1bHRFdmVudHM6ITAsb25Jbml0aWFsaXplZDpmdW5jdGlvbigpe30sb25SZXNpemVkOmZ1bmN0aW9uKCl7fSxvblJlc2l6ZUV2ZW50OnZvaWQgMCxvblNsaWRlQ2hhbmdlOmZ1bmN0aW9uKCl7fSxvblNsaWRlQ2hhbmdlZDpmdW5jdGlvbigpe319OyIsIlwidXNlIHN0cmljdFwiO3ZhciBfX2Fzc2lnbj1mdW5jdGlvbigpe3JldHVybihfX2Fzc2lnbj1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihvKXtmb3IodmFyIHQscj0xLGk9YXJndW1lbnRzLmxlbmd0aDtyPGk7cisrKWZvcih2YXIgcyBpbiB0PWFyZ3VtZW50c1tyXSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxzKSYmKG9bc109dFtzXSk7cmV0dXJuIG99KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LG1hcFBhcnRpYWxDb29yZHM9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGV4cG9ydHMubWFwUG9zaXRpb25Db29yZHM9ZXhwb3J0cy5tYXBQYXJ0aWFsQ29vcmRzPXZvaWQgMCxmdW5jdGlvbihvKXtyZXR1cm4gby5tYXAoZnVuY3Rpb24obyl7cmV0dXJue3dpZHRoOm8ud2lkdGgscG9zaXRpb246MH19KX0pLG1hcFBvc2l0aW9uQ29vcmRzPShleHBvcnRzLm1hcFBhcnRpYWxDb29yZHM9bWFwUGFydGlhbENvb3JkcyxmdW5jdGlvbihvLHQpe3JldHVybiB2b2lkIDA9PT10JiYodD0wKSxvLm1hcChmdW5jdGlvbihvKXtyZXR1cm4gby5wb3NpdGlvbj50P19fYXNzaWduKF9fYXNzaWduKHt9LG8pLHtwb3NpdGlvbjp0fSk6b30pfSk7ZXhwb3J0cy5tYXBQb3NpdGlvbkNvb3Jkcz1tYXBQb3NpdGlvbkNvb3JkczsiLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLmlzVmVydGljYWxUb3VjaG1vdmVEZXRlY3RlZD1leHBvcnRzLmdldEZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbj1leHBvcnRzLmdldEZhZGVvdXRBbmltYXRpb25JbmRleD1leHBvcnRzLmdldFN3aXBlVG91Y2hlbmRJbmRleD1leHBvcnRzLmdldFN3aXBlVG91Y2hlbmRQb3NpdGlvbj1leHBvcnRzLmdldFN3aXBlVHJhbnNmb3JtYXRpb25DdXJzb3I9ZXhwb3J0cy5nZXRUcmFuc2Zvcm1hdGlvbkl0ZW1JbmRleD1leHBvcnRzLmdldFN3aXBlU2hpZnRWYWx1ZT1leHBvcnRzLmdldEl0ZW1Db29yZHM9ZXhwb3J0cy5nZXRJc0xlZnREaXJlY3Rpb249ZXhwb3J0cy5zaG91bGRSZWNhbGN1bGF0ZVN3aXBlUG9zaXRpb249ZXhwb3J0cy5nZXRTd2lwZUxpbWl0TWF4PWV4cG9ydHMuZ2V0U3dpcGVMaW1pdE1pbj1leHBvcnRzLnNob3VsZENhbmNlbFNsaWRlQW5pbWF0aW9uPWV4cG9ydHMuc2hvdWxkUmVjYWxjdWxhdGVTbGlkZUluZGV4PWV4cG9ydHMuZ2V0VXBkYXRlU2xpZGVQb3NpdGlvbkluZGV4PWV4cG9ydHMuZ2V0QWN0aXZlSW5kZXg9ZXhwb3J0cy5nZXRTdGFydEluZGV4PWV4cG9ydHMuZ2V0U2hpZnRJbmRleD12b2lkIDA7dmFyIGdldFNoaWZ0SW5kZXg9ZnVuY3Rpb24oZSx0KXtyZXR1cm4oZT12b2lkIDA9PT1lPzA6ZSkrKHQ9dm9pZCAwPT09dD8wOnQpfSxnZXRTdGFydEluZGV4PShleHBvcnRzLmdldFNoaWZ0SW5kZXg9Z2V0U2hpZnRJbmRleCxmdW5jdGlvbihlLHQpe2lmKHZvaWQgMD09PWUmJihlPTApLHQ9dm9pZCAwPT09dD8wOnQpe2lmKHQ8PWUpcmV0dXJuIHQtMTtpZigwPGUpcmV0dXJuIGV9cmV0dXJuIDB9KSxnZXRBY3RpdmVJbmRleD0oZXhwb3J0cy5nZXRTdGFydEluZGV4PWdldFN0YXJ0SW5kZXgsZnVuY3Rpb24oZSl7dmFyIHQ9ZS5zdGFydEluZGV4LHQ9dm9pZCAwPT09dD8wOnQsaT1lLml0ZW1zQ291bnQsZT1lLmluZmluaXRlO3JldHVybiB2b2lkIDAhPT1lJiZlP3Q6KDAsZXhwb3J0cy5nZXRTdGFydEluZGV4KSh0LHZvaWQgMD09PWk/MDppKX0pLGdldFVwZGF0ZVNsaWRlUG9zaXRpb25JbmRleD0oZXhwb3J0cy5nZXRBY3RpdmVJbmRleD1nZXRBY3RpdmVJbmRleCxmdW5jdGlvbihlLHQpe3JldHVybiBlPDA/dC0xOnQ8PWU/MDplfSksc2hvdWxkUmVjYWxjdWxhdGVTbGlkZUluZGV4PShleHBvcnRzLmdldFVwZGF0ZVNsaWRlUG9zaXRpb25JbmRleD1nZXRVcGRhdGVTbGlkZVBvc2l0aW9uSW5kZXgsZnVuY3Rpb24oZSx0KXtyZXR1cm4gZTwwfHx0PD1lfSksc2hvdWxkQ2FuY2VsU2xpZGVBbmltYXRpb249KGV4cG9ydHMuc2hvdWxkUmVjYWxjdWxhdGVTbGlkZUluZGV4PXNob3VsZFJlY2FsY3VsYXRlU2xpZGVJbmRleCxmdW5jdGlvbihlLHQpe3JldHVybiBlPDB8fHQ8PWV9KSxnZXRTd2lwZUxpbWl0TWluPShleHBvcnRzLnNob3VsZENhbmNlbFNsaWRlQW5pbWF0aW9uPXNob3VsZENhbmNlbFNsaWRlQW5pbWF0aW9uLGZ1bmN0aW9uKGUsdCl7dmFyIGk9ZS5pdGVtc09mZnNldCxlPWUudHJhbnNmb3JtYXRpb25TZXQsZT12b2lkIDA9PT1lP1tdOmUsbz10LmluZmluaXRlLHQ9dC5zd2lwZUV4dHJhUGFkZGluZztyZXR1cm4gbz8oZVt2b2lkIDA9PT1pPzA6aV18fHt9KS5wb3NpdGlvbjoobz0oZVswXXx8e30pLndpZHRoLE1hdGgubWluKHZvaWQgMD09PXQ/MDp0LHZvaWQgMD09PW8/MDpvKSl9KSxnZXRTd2lwZUxpbWl0TWF4PShleHBvcnRzLmdldFN3aXBlTGltaXRNaW49Z2V0U3dpcGVMaW1pdE1pbixmdW5jdGlvbihlLHQpe3ZhciBpPXQuaW5maW5pdGUsdD10LnN3aXBlRXh0cmFQYWRkaW5nLHQ9dm9pZCAwPT09dD8wOnQsbz1lLml0ZW1zQ291bnQsbj1lLml0ZW1zT2Zmc2V0LHI9ZS5pdGVtc0luU2xpZGUscj12b2lkIDA9PT1yPzE6cixlPWUudHJhbnNmb3JtYXRpb25TZXQsZT12b2lkIDA9PT1lP1tdOmU7cmV0dXJuIGk/KGVbKHZvaWQgMD09PW8/MTpvKSsoMCxleHBvcnRzLmdldFNoaWZ0SW5kZXgpKHIsdm9pZCAwPT09bj8wOm4pXXx8e30pLnBvc2l0aW9ufHwwOigwLGV4cG9ydHMuZ2V0SXRlbUNvb3JkcykoLXIsZSkucG9zaXRpb24rdH0pLHNob3VsZFJlY2FsY3VsYXRlU3dpcGVQb3NpdGlvbj0oZXhwb3J0cy5nZXRTd2lwZUxpbWl0TWF4PWdldFN3aXBlTGltaXRNYXgsZnVuY3Rpb24oZSx0LGkpe3JldHVybi10PD1lfHxNYXRoLmFicyhlKT49aX0pLGdldElzTGVmdERpcmVjdGlvbj0oZXhwb3J0cy5zaG91bGRSZWNhbGN1bGF0ZVN3aXBlUG9zaXRpb249c2hvdWxkUmVjYWxjdWxhdGVTd2lwZVBvc2l0aW9uLGZ1bmN0aW9uKGUpe3JldHVybihlPXZvaWQgMD09PWU/MDplKTwwfSksZ2V0SXRlbUNvb3Jkcz0oZXhwb3J0cy5nZXRJc0xlZnREaXJlY3Rpb249Z2V0SXNMZWZ0RGlyZWN0aW9uLGZ1bmN0aW9uKGUsdCl7cmV0dXJuKHQ9dm9pZCAwPT09dD9bXTp0KS5zbGljZShlPXZvaWQgMD09PWU/MDplKVswXXx8e3Bvc2l0aW9uOjAsd2lkdGg6MH19KSxnZXRTd2lwZVNoaWZ0VmFsdWU9KGV4cG9ydHMuZ2V0SXRlbUNvb3Jkcz1nZXRJdGVtQ29vcmRzLGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHZvaWQgMD09PWUmJihlPTApLHZvaWQgMD09PXQmJih0PVtdKSwoMCxleHBvcnRzLmdldEl0ZW1Db29yZHMpKGUsdCkucG9zaXRpb259KSxnZXRUcmFuc2Zvcm1hdGlvbkl0ZW1JbmRleD0oZXhwb3J0cy5nZXRTd2lwZVNoaWZ0VmFsdWU9Z2V0U3dpcGVTaGlmdFZhbHVlLGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHZvaWQgMD09PXQmJih0PTApLChlPXZvaWQgMD09PWU/W106ZSkuZmluZEluZGV4KGZ1bmN0aW9uKGUpe3JldHVybiBlLnBvc2l0aW9uPj1NYXRoLmFicyh0KX0pfSksZ2V0U3dpcGVUcmFuc2Zvcm1hdGlvbkN1cnNvcj0oZXhwb3J0cy5nZXRUcmFuc2Zvcm1hdGlvbkl0ZW1JbmRleD1nZXRUcmFuc2Zvcm1hdGlvbkl0ZW1JbmRleCxmdW5jdGlvbihlLHQsaSl7dm9pZCAwPT09ZSYmKGU9W10pLHZvaWQgMD09PXQmJih0PTApLHZvaWQgMD09PWkmJihpPTApO2U9KDAsZXhwb3J0cy5nZXRUcmFuc2Zvcm1hdGlvbkl0ZW1JbmRleCkoZSx0KTtyZXR1cm4oMCxleHBvcnRzLmdldElzTGVmdERpcmVjdGlvbikoaSk/ZTplLTF9KSxnZXRTd2lwZVRvdWNoZW5kUG9zaXRpb249KGV4cG9ydHMuZ2V0U3dpcGVUcmFuc2Zvcm1hdGlvbkN1cnNvcj1nZXRTd2lwZVRyYW5zZm9ybWF0aW9uQ3Vyc29yLGZ1bmN0aW9uKGUsdCxpKXt2b2lkIDA9PT1pJiYoaT0wKTt2YXIgbz1lLmluZmluaXRlLG49ZS5hdXRvV2lkdGgscj1lLmlzU3RhZ2VDb250ZW50UGFydGlhbCxzPWUuc3dpcGVBbGxvd2VkUG9zaXRpb25NYXgsZT1lLnRyYW5zZm9ybWF0aW9uU2V0LGk9KDAsZXhwb3J0cy5nZXRTd2lwZVRyYW5zZm9ybWF0aW9uQ3Vyc29yKShlLGksdCksdD0oMCxleHBvcnRzLmdldEl0ZW1Db29yZHMpKGksZSkucG9zaXRpb247aWYoIW8pe2lmKG4mJnIpcmV0dXJuIDA7aWYoczx0KXJldHVybi1zfXJldHVybi10fSksZ2V0U3dpcGVUb3VjaGVuZEluZGV4PShleHBvcnRzLmdldFN3aXBlVG91Y2hlbmRQb3NpdGlvbj1nZXRTd2lwZVRvdWNoZW5kUG9zaXRpb24sZnVuY3Rpb24oZSx0KXt2YXIgaT10LnRyYW5zZm9ybWF0aW9uU2V0LG89dC5pdGVtc0luU2xpZGUsbj10Lml0ZW1zT2Zmc2V0LHI9dC5pdGVtc0NvdW50LHM9dC5pbmZpbml0ZSxkPXQuaXNTdGFnZUNvbnRlbnRQYXJ0aWFsLGE9dC5hY3RpdmVJbmRleCx0PXQudHJhbnNsYXRlM2Q7cmV0dXJuIHN8fCFkJiZ0IT09TWF0aC5hYnMoZSk/KGQ9KDAsZXhwb3J0cy5nZXRUcmFuc2Zvcm1hdGlvbkl0ZW1JbmRleCkoaSxlKSxzP2Q8KHQ9KDAsZXhwb3J0cy5nZXRTaGlmdEluZGV4KShvLG4pKT9yLW8tbitkOnQrcjw9ZD9kLSh0K3IpOmQtdDpkKTphfSksZ2V0RmFkZW91dEFuaW1hdGlvbkluZGV4PShleHBvcnRzLmdldFN3aXBlVG91Y2hlbmRJbmRleD1nZXRTd2lwZVRvdWNoZW5kSW5kZXgsZnVuY3Rpb24oZSl7dmFyIHQ9ZS5pbmZpbml0ZSxpPWUuYWN0aXZlSW5kZXgsZT1lLml0ZW1zSW5TbGlkZTtyZXR1cm4gdD9pK2U6aX0pLGdldEZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbj0oZXhwb3J0cy5nZXRGYWRlb3V0QW5pbWF0aW9uSW5kZXg9Z2V0RmFkZW91dEFuaW1hdGlvbkluZGV4LGZ1bmN0aW9uKGUsdCl7dmFyIGk9dC5hY3RpdmVJbmRleCx0PXQuc3RhZ2VXaWR0aDtyZXR1cm4gZTxpPyhpLWUpKi10fHwwOihlLWkpKnR8fDB9KSxpc1ZlcnRpY2FsVG91Y2htb3ZlRGV0ZWN0ZWQ9KGV4cG9ydHMuZ2V0RmFkZW91dEFuaW1hdGlvblBvc2l0aW9uPWdldEZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbixmdW5jdGlvbihlLHQsaSl7cmV0dXJuIGU8KGk9dm9pZCAwPT09aT8wOmkpfHxlPC4xKnR9KTtleHBvcnRzLmlzVmVydGljYWxUb3VjaG1vdmVEZXRlY3RlZD1pc1ZlcnRpY2FsVG91Y2htb3ZlRGV0ZWN0ZWQ7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9fYXNzaWduPWZ1bmN0aW9uKCl7cmV0dXJuKF9fYXNzaWduPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHQpe2Zvcih2YXIgZSxyPTEsbj1hcmd1bWVudHMubGVuZ3RoO3I8bjtyKyspZm9yKHZhciBvIGluIGU9YXJndW1lbnRzW3JdKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLG8pJiYodFtvXT1lW29dKTtyZXR1cm4gdH0pLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sY29tbW9uXzE9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGV4cG9ydHMuZ2V0VHJhbnNmb3JtTWF0cml4PWV4cG9ydHMuZ2V0VHJhbnNsYXRlWFByb3BlcnR5PWV4cG9ydHMuZ2V0VG91Y2htb3ZlVHJhbnNsYXRlUG9zaXRpb249ZXhwb3J0cy5nZXRUcmFuc2xhdGUzZFByb3BlcnR5PWV4cG9ydHMuZ2V0UmVuZGVyU3RhZ2VJdGVtU3R5bGVzPWV4cG9ydHMuZ2V0UmVuZGVyU3RhZ2VTdHlsZXM9ZXhwb3J0cy5nZXRUcmFuc2l0aW9uUHJvcGVydHk9ZXhwb3J0cy5nZXRSZW5kZXJXcmFwcGVyU3R5bGVzPWV4cG9ydHMuYW5pbWF0ZT1leHBvcnRzLnNob3VsZEhhbmRsZVJlc2l6ZUV2ZW50PWV4cG9ydHMuZ2V0RWxlbWVudEZpcnN0Q2hpbGQ9ZXhwb3J0cy5nZXRFbGVtZW50Q3Vyc29yPWV4cG9ydHMuZ2V0QXV0b2hlaWdodFByb3BlcnR5PWV4cG9ydHMuZ2V0RWxlbWVudERpbWVuc2lvbnM9ZXhwb3J0cy5nZXRJdGVtV2lkdGg9ZXhwb3J0cy5jcmVhdGVEZWZhdWx0VHJhbnNmb3JtYXRpb25TZXQ9ZXhwb3J0cy5jcmVhdGVBdXRvd2lkdGhUcmFuc2Zvcm1hdGlvblNldD1leHBvcnRzLmlzRWxlbWVudD1leHBvcnRzLmNyZWF0ZUNsb25lcz1leHBvcnRzLmdldEl0ZW1zT2Zmc2V0PWV4cG9ydHMuZ2V0SXRlbXNDb3VudD1leHBvcnRzLmdldFNsaWRlcz12b2lkIDAscmVxdWlyZShcIi4vY29tbW9uXCIpKSxtYXBwZXJzXzE9cmVxdWlyZShcIi4vbWFwcGVyc1wiKSxtYXRoXzE9cmVxdWlyZShcIi4vbWF0aFwiKSxnZXRTbGlkZXM9ZnVuY3Rpb24odCl7dmFyIGU9dC5jaGlsZHJlbix0PXQuaXRlbXM7cmV0dXJuIGU/ZS5sZW5ndGg/ZTpbZV06dm9pZCAwPT09dD9bXTp0fSxnZXRJdGVtc0NvdW50PShleHBvcnRzLmdldFNsaWRlcz1nZXRTbGlkZXMsZnVuY3Rpb24odCl7cmV0dXJuKDAsZXhwb3J0cy5nZXRTbGlkZXMpKHQpLmxlbmd0aH0pLGdldEl0ZW1zT2Zmc2V0PShleHBvcnRzLmdldEl0ZW1zQ291bnQ9Z2V0SXRlbXNDb3VudCxmdW5jdGlvbih0KXt2YXIgZT10LmluZmluaXRlLHI9dC5wYWRkaW5nUmlnaHQsdD10LnBhZGRpbmdMZWZ0O3JldHVybiBlJiYodHx8cik/MTowfSksY3JlYXRlQ2xvbmVzPShleHBvcnRzLmdldEl0ZW1zT2Zmc2V0PWdldEl0ZW1zT2Zmc2V0LGZ1bmN0aW9uKHQpe3ZhciBlLHIsbixvLGk9KDAsZXhwb3J0cy5nZXRTbGlkZXMpKHQpO3JldHVybiB0LmluZmluaXRlPyhlPSgwLGV4cG9ydHMuZ2V0SXRlbXNDb3VudCkodCksbz0oMCxleHBvcnRzLmdldEl0ZW1zT2Zmc2V0KSh0KSx0PSgwLGNvbW1vbl8xLmdldEl0ZW1zSW5TbGlkZSkoZSx0KSxuPU1hdGgubWluKHQsZSkrbyxyPWkuc2xpY2UoMCxuKSxuPWkuc2xpY2UoLW4pLG8mJnQ9PT1lJiYobz1pWzBdLHQ9aS5zbGljZSgtMSlbMF0sbi51bnNoaWZ0KHQpLHIucHVzaChvKSksbi5jb25jYXQoaSxyKSk6aX0pLGlzRWxlbWVudD0oZXhwb3J0cy5jcmVhdGVDbG9uZXM9Y3JlYXRlQ2xvbmVzLGZ1bmN0aW9uKHQpe3RyeXtyZXR1cm4gdCBpbnN0YW5jZW9mIEVsZW1lbnR8fHQgaW5zdGFuY2VvZiBIVE1MRG9jdW1lbnR9Y2F0Y2godCl7cmV0dXJuITF9fSksY3JlYXRlQXV0b3dpZHRoVHJhbnNmb3JtYXRpb25TZXQ9KGV4cG9ydHMuaXNFbGVtZW50PWlzRWxlbWVudCxmdW5jdGlvbih0LGksZSl7dm9pZCAwPT09aSYmKGk9MCksdm9pZCAwPT09ZSYmKGU9ITEpO3ZhciBzPTAsYT0hMCxyPVtdO3JldHVybigwLGV4cG9ydHMuaXNFbGVtZW50KSh0KSYmKHI9QXJyYXkuZnJvbSgobnVsbD09dD92b2lkIDA6dC5jaGlsZHJlbil8fFtdKS5yZWR1Y2UoZnVuY3Rpb24odCxlLHIpe3ZhciBuPTAscj1yLTEsbz10W3JdLGU9Z2V0RWxlbWVudERpbWVuc2lvbnMobnVsbD09ZT92b2lkIDA6ZS5maXJzdENoaWxkKS53aWR0aCxlPXZvaWQgMD09PWU/MDplO3JldHVybiBhPShzKz1lKTw9aSxvJiYobj0wPT1yP28ud2lkdGg6by53aWR0aCtvLnBvc2l0aW9uKSx0LnB1c2goe3Bvc2l0aW9uOm4sd2lkdGg6ZX0pLHR9LFtdKSxlfHwocj1hPygwLG1hcHBlcnNfMS5tYXBQYXJ0aWFsQ29vcmRzKShyKToodD1zLWksKDAsbWFwcGVyc18xLm1hcFBvc2l0aW9uQ29vcmRzKShyLHQpKSkpLHtjb29yZHM6cixjb250ZW50OnMscGFydGlhbDphfX0pLGNyZWF0ZURlZmF1bHRUcmFuc2Zvcm1hdGlvblNldD0oZXhwb3J0cy5jcmVhdGVBdXRvd2lkdGhUcmFuc2Zvcm1hdGlvblNldD1jcmVhdGVBdXRvd2lkdGhUcmFuc2Zvcm1hdGlvblNldCxmdW5jdGlvbih0LG8sZSxyKXt2b2lkIDA9PT1yJiYocj0hMSk7dmFyIGk9MCxzPSEwLG49W10sYT0oMCxleHBvcnRzLmdldEl0ZW1XaWR0aCkobyxlKTtyZXR1cm4gbj10LnJlZHVjZShmdW5jdGlvbih0LGUscil7dmFyIG49MCxyPXRbci0xXTtyZXR1cm4gcz0oaSs9YSk8PW8sciYmKG49YStyLnBvc2l0aW9ufHwwKSx0LnB1c2goe3dpZHRoOmEscG9zaXRpb246bn0pLHR9LFtdKSx7Y29vcmRzOm49cj9uOnM/KDAsbWFwcGVyc18xLm1hcFBhcnRpYWxDb29yZHMpKG4pOihlPWktbywoMCxtYXBwZXJzXzEubWFwUG9zaXRpb25Db29yZHMpKG4sZSkpLGNvbnRlbnQ6aSxwYXJ0aWFsOnN9fSksZ2V0SXRlbVdpZHRoPShleHBvcnRzLmNyZWF0ZURlZmF1bHRUcmFuc2Zvcm1hdGlvblNldD1jcmVhdGVEZWZhdWx0VHJhbnNmb3JtYXRpb25TZXQsZnVuY3Rpb24odCxlKXtyZXR1cm4gMDxlP3QvZTp0fSk7ZnVuY3Rpb24gZ2V0RWxlbWVudERpbWVuc2lvbnModCl7cmV0dXJuIHQmJnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0P3t3aWR0aDoodD10LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKS53aWR0aCxoZWlnaHQ6dC5oZWlnaHR9Ont3aWR0aDowLGhlaWdodDowfX1leHBvcnRzLmdldEl0ZW1XaWR0aD1nZXRJdGVtV2lkdGgsZXhwb3J0cy5nZXRFbGVtZW50RGltZW5zaW9ucz1nZXRFbGVtZW50RGltZW5zaW9uczt2YXIgZ2V0QXV0b2hlaWdodFByb3BlcnR5PWZ1bmN0aW9uKHQsZSxyKXt2YXIgZT0oMCxleHBvcnRzLmdldEVsZW1lbnRDdXJzb3IpKGUscikscj0oMCxleHBvcnRzLmdldEVsZW1lbnRGaXJzdENoaWxkKSh0LGUpO2lmKCgwLGV4cG9ydHMuaXNFbGVtZW50KShyKSlyZXR1cm4gdD13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShyKSxlPXBhcnNlRmxvYXQodC5tYXJnaW5Ub3ApLHQ9cGFyc2VGbG9hdCh0Lm1hcmdpbkJvdHRvbSksTWF0aC5jZWlsKHIub2Zmc2V0SGVpZ2h0K2UrdCl9LGdldEVsZW1lbnRDdXJzb3I9KGV4cG9ydHMuZ2V0QXV0b2hlaWdodFByb3BlcnR5PWdldEF1dG9oZWlnaHRQcm9wZXJ0eSxmdW5jdGlvbih0LGUpe3ZhciByPWUuYWN0aXZlSW5kZXgsZT1lLml0ZW1zSW5TbGlkZTtyZXR1cm4gdC5pbmZpbml0ZT9yK2UrKDAsZXhwb3J0cy5nZXRJdGVtc09mZnNldCkodCk6cn0pLGdldEVsZW1lbnRGaXJzdENoaWxkPShleHBvcnRzLmdldEVsZW1lbnRDdXJzb3I9Z2V0RWxlbWVudEN1cnNvcixmdW5jdGlvbih0LGUpe3Q9dCYmdC5jaGlsZHJlbnx8W107cmV0dXJuIHRbZV0mJnRbZV0uZmlyc3RDaGlsZHx8bnVsbH0pO2Z1bmN0aW9uIHNob3VsZEhhbmRsZVJlc2l6ZUV2ZW50KHQsZSxyKXtyZXR1cm4oZT12b2lkIDA9PT1lP3t9OmUpLndpZHRoIT09KHI9dm9pZCAwPT09cj97fTpyKS53aWR0aH1mdW5jdGlvbiBhbmltYXRlKHQsZSl7dmFyIGU9ZXx8e30scj1lLnBvc2l0aW9uLHI9dm9pZCAwPT09cj8wOnIsbj1lLmFuaW1hdGlvbkR1cmF0aW9uLG49dm9pZCAwPT09bj8wOm4sZT1lLmFuaW1hdGlvbkVhc2luZ0Z1bmN0aW9uLGU9dm9pZCAwPT09ZT9cImVhc2VcIjplO3JldHVybiB0JiYoMCxleHBvcnRzLmlzRWxlbWVudCkodCkmJih0LnN0eWxlLnRyYW5zaXRpb249XCJ0cmFuc2Zvcm0gXCIuY29uY2F0KG4sXCJtcyBcIikuY29uY2F0KGUsXCIgMG1zXCIpLHQuc3R5bGUudHJhbnNmb3JtPVwidHJhbnNsYXRlM2QoXCIuY29uY2F0KHIsXCJweCwgMCwgMClcIikpLHR9ZXhwb3J0cy5nZXRFbGVtZW50Rmlyc3RDaGlsZD1nZXRFbGVtZW50Rmlyc3RDaGlsZCxleHBvcnRzLnNob3VsZEhhbmRsZVJlc2l6ZUV2ZW50PXNob3VsZEhhbmRsZVJlc2l6ZUV2ZW50LGV4cG9ydHMuYW5pbWF0ZT1hbmltYXRlO3ZhciBnZXRSZW5kZXJXcmFwcGVyU3R5bGVzPWZ1bmN0aW9uKHQsZSxyKXt2YXIgbj10fHx7fSxvPW4ucGFkZGluZ0xlZnQsaT1uLnBhZGRpbmdSaWdodCxzPW4uYXV0b0hlaWdodCxuPW4uYW5pbWF0aW9uRHVyYXRpb24scz1zPygwLGV4cG9ydHMuZ2V0QXV0b2hlaWdodFByb3BlcnR5KShyLHQsZSk6dm9pZCAwO3JldHVybntoZWlnaHQ6cyx0cmFuc2l0aW9uOnM/XCJoZWlnaHQgXCIuY29uY2F0KG4sXCJtc1wiKTp2b2lkIDAscGFkZGluZ0xlZnQ6XCJcIi5jb25jYXQobyxcInB4XCIpLHBhZGRpbmdSaWdodDpcIlwiLmNvbmNhdChpLFwicHhcIil9fSxnZXRUcmFuc2l0aW9uUHJvcGVydHk9KGV4cG9ydHMuZ2V0UmVuZGVyV3JhcHBlclN0eWxlcz1nZXRSZW5kZXJXcmFwcGVyU3R5bGVzLGZ1bmN0aW9uKHQpe3ZhciB0PXR8fHt9LGU9dC5hbmltYXRpb25EdXJhdGlvbix0PXQuYW5pbWF0aW9uRWFzaW5nRnVuY3Rpb24sdD12b2lkIDA9PT10P1wiZWFzZVwiOnQ7cmV0dXJuXCJ0cmFuc2Zvcm0gXCIuY29uY2F0KHZvaWQgMD09PWU/MDplLFwibXMgXCIpLmNvbmNhdCh0LFwiIDBtc1wiKX0pLGdldFJlbmRlclN0YWdlU3R5bGVzPShleHBvcnRzLmdldFRyYW5zaXRpb25Qcm9wZXJ0eT1nZXRUcmFuc2l0aW9uUHJvcGVydHksZnVuY3Rpb24odCxlKXt0PSh0fHx7fSkudHJhbnNsYXRlM2QsdD1cInRyYW5zbGF0ZTNkKFwiLmNvbmNhdCgtKHZvaWQgMD09PXQ/MDp0KSxcInB4LCAwLCAwKVwiKTtyZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sZSkse3RyYW5zZm9ybTp0fSl9KSxnZXRSZW5kZXJTdGFnZUl0ZW1TdHlsZXM9KGV4cG9ydHMuZ2V0UmVuZGVyU3RhZ2VTdHlsZXM9Z2V0UmVuZGVyU3RhZ2VTdHlsZXMsZnVuY3Rpb24odCxlKXt2YXIgcj1lLnRyYW5zZm9ybWF0aW9uU2V0LG49ZS5mYWRlb3V0QW5pbWF0aW9uSW5kZXgsbz1lLmZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbixpPWUuZmFkZW91dEFuaW1hdGlvblByb2Nlc3NpbmcsZT1lLmFuaW1hdGlvbkR1cmF0aW9uLHI9KHJbdF18fHt9KS53aWR0aDtyZXR1cm4gaSYmbj09PXQ/e3RyYW5zZm9ybTpcInRyYW5zbGF0ZVgoXCIuY29uY2F0KG8sXCJweClcIiksYW5pbWF0aW9uRHVyYXRpb246XCJcIi5jb25jYXQoZSxcIm1zXCIpLHdpZHRoOlwiXCIuY29uY2F0KHIsXCJweFwiKX06e3dpZHRoOnJ9fSksZ2V0VHJhbnNsYXRlM2RQcm9wZXJ0eT0oZXhwb3J0cy5nZXRSZW5kZXJTdGFnZUl0ZW1TdHlsZXM9Z2V0UmVuZGVyU3RhZ2VJdGVtU3R5bGVzLGZ1bmN0aW9uKHQsZSl7dmFyIHI9dCxuPWUuaW5maW5pdGUsbz1lLml0ZW1zT2Zmc2V0LGk9ZS5pdGVtc0luU2xpZGUsZT1lLnRyYW5zZm9ybWF0aW9uU2V0O3JldHVybigodm9pZCAwPT09ZT9bXTplKVtyPW4/dCsoMCxtYXRoXzEuZ2V0U2hpZnRJbmRleCkodm9pZCAwPT09aT8wOmksdm9pZCAwPT09bz8wOm8pOnJdfHx7fSkucG9zaXRpb258fDB9KSxnZXRUb3VjaG1vdmVUcmFuc2xhdGVQb3NpdGlvbj0oZXhwb3J0cy5nZXRUcmFuc2xhdGUzZFByb3BlcnR5PWdldFRyYW5zbGF0ZTNkUHJvcGVydHksZnVuY3Rpb24odCxlKXtyZXR1cm4tKGUtTWF0aC5mbG9vcih0KSl9KTtmdW5jdGlvbiBnZXRUcmFuc2xhdGVYUHJvcGVydHkodCl7dD1nZXRUcmFuc2Zvcm1NYXRyaXgodCksdD10JiZ0WzRdfHxcIlwiO3JldHVybiBOdW1iZXIodCl9ZnVuY3Rpb24gZ2V0VHJhbnNmb3JtTWF0cml4KHQpe3JldHVybiB0JiYoMCxleHBvcnRzLmlzRWxlbWVudCkodCkmJndpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHQpLnRyYW5zZm9ybS5tYXRjaCgvKC0/WzAtOS5dKykvZyl8fFtdfWV4cG9ydHMuZ2V0VG91Y2htb3ZlVHJhbnNsYXRlUG9zaXRpb249Z2V0VG91Y2htb3ZlVHJhbnNsYXRlUG9zaXRpb24sZXhwb3J0cy5nZXRUcmFuc2xhdGVYUHJvcGVydHk9Z2V0VHJhbnNsYXRlWFByb3BlcnR5LGV4cG9ydHMuZ2V0VHJhbnNmb3JtTWF0cml4PWdldFRyYW5zZm9ybU1hdHJpeDsiLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLmNhbGN1bGF0ZUluaXRpYWxTdGF0ZT1leHBvcnRzLmdldEl0ZW1zSW5TbGlkZT1leHBvcnRzLmdldElzU3RhZ2VDb250ZW50UGFydGlhbD1leHBvcnRzLmNvbmNhdENsYXNzbmFtZXM9ZXhwb3J0cy5jYW5Vc2VET009dm9pZCAwO3ZhciBlbGVtZW50c18xPXJlcXVpcmUoXCIuL2VsZW1lbnRzXCIpLG1hdGhfMT1yZXF1aXJlKFwiLi9tYXRoXCIpLGNhblVzZURPTT1mdW5jdGlvbigpe3ZhciB0O3RyeXtyZXR1cm4gQm9vbGVhbihudWxsPT0odD1udWxsPT09d2luZG93fHx2b2lkIDA9PT13aW5kb3c/dm9pZCAwOndpbmRvdy5kb2N1bWVudCk/dm9pZCAwOnQuY3JlYXRlRWxlbWVudCl9Y2F0Y2godCl7cmV0dXJuITF9fSxjb25jYXRDbGFzc25hbWVzPShleHBvcnRzLmNhblVzZURPTT1jYW5Vc2VET00sZnVuY3Rpb24oKXtmb3IodmFyIHQ9W10sZT0wO2U8YXJndW1lbnRzLmxlbmd0aDtlKyspdFtlXT1hcmd1bWVudHNbZV07cmV0dXJuIHQuZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpfSksZ2V0SXNTdGFnZUNvbnRlbnRQYXJ0aWFsPShleHBvcnRzLmNvbmNhdENsYXNzbmFtZXM9Y29uY2F0Q2xhc3NuYW1lcyxmdW5jdGlvbih0LGUsbil7cmV0dXJuIHZvaWQgMD09PWUmJihlPTApLHZvaWQgMD09PW4mJihuPTApLCEodD12b2lkIDAhPT10JiZ0KSYmbjw9ZX0pLGdldEl0ZW1zSW5TbGlkZT0oZXhwb3J0cy5nZXRJc1N0YWdlQ29udGVudFBhcnRpYWw9Z2V0SXNTdGFnZUNvbnRlbnRQYXJ0aWFsLGZ1bmN0aW9uKG4sdCl7dmFyIGksYT0xLG89dC5yZXNwb25zaXZlLGU9dC5hdXRvV2lkdGgscz10LmluZmluaXRlLHQ9dC5pbm5lcldpZHRoO3JldHVybiB2b2lkIDAhPT1lJiZlP3ZvaWQgMCE9PXMmJnM/bjphOihvJiYoZT1PYmplY3Qua2V5cyhvKSkubGVuZ3RoJiYodHx8KDAsZXhwb3J0cy5jYW5Vc2VET00pKCkpJiYoaT12b2lkIDA9PT10P3dpbmRvdy5pbm5lcldpZHRoOnQsZS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3ZhciBlO051bWJlcih0KTw9aSYmKGU9KHQ9b1t0XSkuaXRlbXMsdD10Lml0ZW1zRml0LGE9XCJjb250YWluXCI9PT0odm9pZCAwPT09dD9cImZpbGxcIjp0KT9lOk1hdGgubWluKGUsbikpfSkpLGF8fDEpfSksY2FsY3VsYXRlSW5pdGlhbFN0YXRlPShleHBvcnRzLmdldEl0ZW1zSW5TbGlkZT1nZXRJdGVtc0luU2xpZGUsZnVuY3Rpb24odCxlLG4pe3ZvaWQgMD09PW4mJihuPSExKTt2YXIgaSxhLG89dC5hbmltYXRpb25EdXJhdGlvbixvPXZvaWQgMD09PW8/MDpvLHM9dC5pbmZpbml0ZSxzPXZvaWQgMCE9PXMmJnMscj10LmF1dG9QbGF5LHI9dm9pZCAwIT09ciYmcixsPXQuYXV0b1dpZHRoLGw9dm9pZCAwIT09bCYmbCxtPSgwLGVsZW1lbnRzXzEuY3JlYXRlQ2xvbmVzKSh0KSxkPSgwLGVsZW1lbnRzXzEuZ2V0VHJhbnNpdGlvblByb3BlcnR5KSgpLGM9KDAsZWxlbWVudHNfMS5nZXRJdGVtc0NvdW50KSh0KSx1PSgwLGVsZW1lbnRzXzEuZ2V0SXRlbXNPZmZzZXQpKHQpLGY9KDAsZXhwb3J0cy5nZXRJdGVtc0luU2xpZGUpKGMsdCksZz0oMCxtYXRoXzEuZ2V0U3RhcnRJbmRleCkodC5hY3RpdmVJbmRleCxjKSxnPSgwLG1hdGhfMS5nZXRBY3RpdmVJbmRleCkoe3N0YXJ0SW5kZXg6ZyxpdGVtc0NvdW50OmMsaW5maW5pdGU6c30pLEk9KDAsZWxlbWVudHNfMS5nZXRFbGVtZW50RGltZW5zaW9ucykoZSkud2lkdGgsUz0oYT0oZT0obD8oaT0oZT0oMCxlbGVtZW50c18xLmNyZWF0ZUF1dG93aWR0aFRyYW5zZm9ybWF0aW9uU2V0KShlLEkscykpLmNvb3JkcyxhPWUuY29udGVudCxlKTooaT0oZT0oMCxlbGVtZW50c18xLmNyZWF0ZURlZmF1bHRUcmFuc2Zvcm1hdGlvblNldCkobSxJLGYscykpLmNvb3JkcyxhPWUuY29udGVudCxlKSkucGFydGlhbCxhKSwoMCxtYXRoXzEuZ2V0SXRlbUNvb3JkcykoLWYsaT1pKS5wb3NpdGlvbikscD0oMCxtYXRoXzEuZ2V0U3dpcGVMaW1pdE1pbikoe2l0ZW1zT2Zmc2V0OnUsdHJhbnNmb3JtYXRpb25TZXQ6aX0sdCksdD0oMCxtYXRoXzEuZ2V0U3dpcGVMaW1pdE1heCkoe2l0ZW1zQ291bnQ6YyxpdGVtc09mZnNldDp1LGl0ZW1zSW5TbGlkZTpmLHRyYW5zZm9ybWF0aW9uU2V0Oml9LHQpLHY9KDAsbWF0aF8xLmdldFN3aXBlU2hpZnRWYWx1ZSkoYyxpKTtyZXR1cm57YWN0aXZlSW5kZXg6ZyxhdXRvV2lkdGg6bCxhbmltYXRpb25EdXJhdGlvbjpvLGNsb25lczptLGluZmluaXRlOnMsaXRlbXNDb3VudDpjLGl0ZW1zSW5TbGlkZTpmLGl0ZW1zT2Zmc2V0OnUsdHJhbnNsYXRlM2Q6KDAsZWxlbWVudHNfMS5nZXRUcmFuc2xhdGUzZFByb3BlcnR5KShnLHtpdGVtc0luU2xpZGU6ZixpdGVtc09mZnNldDp1LHRyYW5zZm9ybWF0aW9uU2V0OmksYXV0b1dpZHRoOmwsaW5maW5pdGU6c30pLHN0YWdlV2lkdGg6SSxzdGFnZUNvbnRlbnRXaWR0aDphLGluaXRpYWxTdGFnZUhlaWdodDowLGlzU3RhZ2VDb250ZW50UGFydGlhbDplLGlzQXV0b1BsYXlpbmc6Qm9vbGVhbihyKSxpc0F1dG9QbGF5Q2FuY2VsZWRPbkFjdGlvbjohMSx0cmFuc2Zvcm1hdGlvblNldDppLHRyYW5zaXRpb246ZCxmYWRlb3V0QW5pbWF0aW9uSW5kZXg6bnVsbCxmYWRlb3V0QW5pbWF0aW9uUG9zaXRpb246bnVsbCxmYWRlb3V0QW5pbWF0aW9uUHJvY2Vzc2luZzohMSxzd2lwZUxpbWl0TWluOnAsc3dpcGVMaW1pdE1heDp0LHN3aXBlQWxsb3dlZFBvc2l0aW9uTWF4OlMsc3dpcGVTaGlmdFZhbHVlOnYsY2FuVXNlRG9tOm58fCgwLGV4cG9ydHMuY2FuVXNlRE9NKSgpfX0pO2V4cG9ydHMuY2FsY3VsYXRlSW5pdGlhbFN0YXRlPWNhbGN1bGF0ZUluaXRpYWxTdGF0ZTsiLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLmlzQ2xvbmVkSXRlbT1leHBvcnRzLmlzVGFyZ2V0SXRlbT1leHBvcnRzLmlzQWN0aXZlSXRlbT1leHBvcnRzLmdldFJlbmRlclN0YWdlSXRlbUNsYXNzZXM9dm9pZCAwO3ZhciB0eXBlc18xPXJlcXVpcmUoXCIuLi90eXBlc1wiKSxjb21tb25fMT1yZXF1aXJlKFwiLi9jb21tb25cIiksbWF0aF8xPXJlcXVpcmUoXCIuL21hdGhcIiksZ2V0UmVuZGVyU3RhZ2VJdGVtQ2xhc3Nlcz1mdW5jdGlvbihlLHQpe3ZvaWQgMD09PWUmJihlPTApO3ZhciBzPXQuZmFkZW91dEFuaW1hdGlvbkluZGV4LGk9KDAsZXhwb3J0cy5pc0FjdGl2ZUl0ZW0pKGUsdCk/dHlwZXNfMS5Nb2RpZmllcnMuQUNUSVZFOlwiXCIsbj0oMCxleHBvcnRzLmlzQ2xvbmVkSXRlbSkoZSx0KT90eXBlc18xLk1vZGlmaWVycy5DTE9ORUQ6XCJcIix0PSgwLGV4cG9ydHMuaXNUYXJnZXRJdGVtKShlLHQpP3R5cGVzXzEuTW9kaWZpZXJzLlRBUkdFVDpcIlwiLGU9ZT09PXM/dHlwZXNfMS5DbGFzc25hbWVzLkFOSU1BVEVEOlwiXCI7cmV0dXJuKDAsY29tbW9uXzEuY29uY2F0Q2xhc3NuYW1lcykodHlwZXNfMS5DbGFzc25hbWVzLlNUQUdFX0lURU0saSxuLHQsZSl9LGlzQWN0aXZlSXRlbT0oZXhwb3J0cy5nZXRSZW5kZXJTdGFnZUl0ZW1DbGFzc2VzPWdldFJlbmRlclN0YWdlSXRlbUNsYXNzZXMsZnVuY3Rpb24oZSx0KXt2b2lkIDA9PT1lJiYoZT0wKTt2YXIgcz10LmFjdGl2ZUluZGV4LGk9dC5pdGVtc0luU2xpZGUsbj10Lml0ZW1zT2Zmc2V0LHI9dC5pbmZpbml0ZSx0PXQuYXV0b1dpZHRoLG89KDAsbWF0aF8xLmdldFNoaWZ0SW5kZXgpKGksbik7cmV0dXJuIHQmJnI/ZS1vPT09cytuOih0PXMrbyxyP3Q8PWUmJmU8dCtpOnM8PWUmJmU8dCl9KSxpc1RhcmdldEl0ZW09KGV4cG9ydHMuaXNBY3RpdmVJdGVtPWlzQWN0aXZlSXRlbSxmdW5jdGlvbihlLHQpe3ZvaWQgMD09PWUmJihlPTApO3ZhciBzPXQuYWN0aXZlSW5kZXgsaT10Lml0ZW1zSW5TbGlkZSxuPXQuaXRlbXNPZmZzZXQscj10LmluZmluaXRlLHQ9dC5hdXRvV2lkdGgsaT0oMCxtYXRoXzEuZ2V0U2hpZnRJbmRleCkoaSxuKTtyZXR1cm4gcj90JiZyP2UtaT09PXMrbjplPT09cytpOmU9PT1zfSksaXNDbG9uZWRJdGVtPShleHBvcnRzLmlzVGFyZ2V0SXRlbT1pc1RhcmdldEl0ZW0sZnVuY3Rpb24oZSx0KXt2b2lkIDA9PT1lJiYoZT0wKTt2YXIgcz10Lml0ZW1zSW5TbGlkZSxpPXQuaXRlbXNPZmZzZXQsbj10Lml0ZW1zQ291bnQscj10LmluZmluaXRlLHQ9dC5hdXRvV2lkdGg7cmV0dXJuISFyJiYodCYmcj9lPHN8fG4tMStzPGU6ZTwodD0oMCxtYXRoXzEuZ2V0U2hpZnRJbmRleCkocyxpKSl8fG4tMSt0PGUpfSk7ZXhwb3J0cy5pc0Nsb25lZEl0ZW09aXNDbG9uZWRJdGVtOyIsIlwidXNlIHN0cmljdFwiO2Z1bmN0aW9uIGRlYm91bmNlKG4saSl7dm9pZCAwPT09aSYmKGk9MCk7ZnVuY3Rpb24gdSgpe2QmJihjbGVhclRpbWVvdXQoZCksZD12b2lkIDApfXZhciBkPXZvaWQgMDtyZXR1cm5bZnVuY3Rpb24oKXtmb3IodmFyIGU9dGhpcyxvPVtdLHQ9MDt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKW9bdF09YXJndW1lbnRzW3RdO3UoKSxkPXdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bi5hcHBseShlLG8pLGQ9dm9pZCAwfSxpKX0sdV19T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZXhwb3J0cy5kZWJvdW5jZT12b2lkIDAsZXhwb3J0cy5kZWJvdW5jZT1kZWJvdW5jZTsiLCJcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBkZWJ1Zygpe2Zvcih2YXIgZT1bXSxvPTA7bzxhcmd1bWVudHMubGVuZ3RoO28rKyllW29dPWFyZ3VtZW50c1tvXTtcImRldmVsb3BtZW50XCI9PT1wcm9jZXNzLmVudi5OT0RFX0VOViYmY29uc29sZS5kZWJ1Zy5hcHBseShjb25zb2xlLGUpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGV4cG9ydHMuZGVidWc9dm9pZCAwLGV4cG9ydHMuZGVidWc9ZGVidWc7IiwiXCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZXhwb3J0cy5nZXRTbGlkZUl0ZW1JbmZvPWV4cG9ydHMuZ2V0U2xpZGVJbmZvPWV4cG9ydHMuZ2V0U2xpZGVJbmRleEZvck11bHRpcGxlSXRlbXM9ZXhwb3J0cy5nZXRTbGlkZUluZGV4Rm9yTm9uTXVsdGlwbGVJdGVtcz1leHBvcnRzLmdldEFjdGl2ZVNsaWRlRG90c0xlbmd0aD1leHBvcnRzLmdldEFjdGl2ZVNsaWRlSW5kZXg9dm9pZCAwO3ZhciBnZXRBY3RpdmVTbGlkZUluZGV4PWZ1bmN0aW9uKGUsdCl7dmFyIHQ9dHx8e30saT10LmFjdGl2ZUluZGV4LG89dC5pdGVtc0luU2xpZGUsdD10Lml0ZW1zQ291bnQsaT1pK287cmV0dXJuIDE9PT1vPygwLGV4cG9ydHMuZ2V0U2xpZGVJbmRleEZvck5vbk11bHRpcGxlSXRlbXMpKGksbyx0KTooMCxleHBvcnRzLmdldFNsaWRlSW5kZXhGb3JNdWx0aXBsZUl0ZW1zKShpLG8sdCxlKX0sZ2V0QWN0aXZlU2xpZGVEb3RzTGVuZ3RoPShleHBvcnRzLmdldEFjdGl2ZVNsaWRlSW5kZXg9Z2V0QWN0aXZlU2xpZGVJbmRleCxmdW5jdGlvbihlLHQpe3ZhciBpO3JldHVybiB2b2lkIDA9PT10JiYodD0xKSwoZT12b2lkIDA9PT1lPzA6ZSkmJnQ/KGk9TWF0aC5mbG9vcihlL3QpLGUldD09MD9pLTE6aSk6MH0pLGdldFNsaWRlSW5kZXhGb3JOb25NdWx0aXBsZUl0ZW1zPShleHBvcnRzLmdldEFjdGl2ZVNsaWRlRG90c0xlbmd0aD1nZXRBY3RpdmVTbGlkZURvdHNMZW5ndGgsZnVuY3Rpb24oZSx0LGkpe3JldHVybiBlPHQ/aS10Omk8ZT8wOmUtMX0pLGdldFNsaWRlSW5kZXhGb3JNdWx0aXBsZUl0ZW1zPShleHBvcnRzLmdldFNsaWRlSW5kZXhGb3JOb25NdWx0aXBsZUl0ZW1zPWdldFNsaWRlSW5kZXhGb3JOb25NdWx0aXBsZUl0ZW1zLGZ1bmN0aW9uKGUsdCxpLG8pe3ZhciBsPSgwLGV4cG9ydHMuZ2V0QWN0aXZlU2xpZGVEb3RzTGVuZ3RoKShpLHQpO3JldHVybiBlPT09aSt0PzA6b3x8ZTx0JiYwIT09ZT9sOjA9PT1lP2kldD09MD9sOmwtMTowPHQ/TWF0aC5mbG9vcihlL3QpLTE6MH0pLGdldFNsaWRlSW5mbz0oZXhwb3J0cy5nZXRTbGlkZUluZGV4Rm9yTXVsdGlwbGVJdGVtcz1nZXRTbGlkZUluZGV4Rm9yTXVsdGlwbGVJdGVtcyxmdW5jdGlvbihlLHQpe3ZvaWQgMD09PXQmJih0PTApO2U9KGU9dm9pZCAwPT09ZT8wOmUpKzE7cmV0dXJuIGU8MT9lPXQ6dDxlJiYoZT0xKSx7aXRlbTplLGl0ZW1zQ291bnQ6dH19KSxnZXRTbGlkZUl0ZW1JbmZvPShleHBvcnRzLmdldFNsaWRlSW5mbz1nZXRTbGlkZUluZm8sZnVuY3Rpb24oZSl7dmFyIGU9ZXx8e30sdD1lLml0ZW1zSW5TbGlkZSxpPWUuYWN0aXZlSW5kZXgsbz1lLmluZmluaXRlLGw9ZS5pdGVtc0NvdW50O3JldHVybiBlLmlzU3RhZ2VDb250ZW50UGFydGlhbD97aXNQcmV2U2xpZGVEaXNhYmxlZDohMCxpc05leHRTbGlkZURpc2FibGVkOiEwfTp7aXNQcmV2U2xpZGVEaXNhYmxlZDohMT09PW8mJjA9PT1pLGlzTmV4dFNsaWRlRGlzYWJsZWQ6ITE9PT1vJiZsLXQ8PWl9fSk7ZXhwb3J0cy5nZXRTbGlkZUl0ZW1JbmZvPWdldFNsaWRlSXRlbUluZm87IiwiXCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZXhwb3J0cy5zaG91bGRDYW5jZWxBdXRvUGxheU9uSG92ZXI9ZXhwb3J0cy5zaG91bGRDYW5jZWxBdXRvUGxheU9uQWN0aW9uPWV4cG9ydHMuZ2V0SXRlbUluZGV4Rm9yRG90TmF2aWdhdGlvbj1leHBvcnRzLmNoZWNrSXNUaGVMYXN0RG90SW5kZXg9ZXhwb3J0cy5nZXREb3RzTmF2aWdhdGlvbkxlbmd0aD1leHBvcnRzLmhhc0RvdEZvckVhY2hTbGlkZT1leHBvcnRzLmlzU3RyYXRlZ3k9ZXhwb3J0cy5zaG91bGREaXNhYmxlQnV0dG9ucz1leHBvcnRzLnNob3VsZERpc2FibGVEb3RzPWV4cG9ydHMuc2hvdWxkRGlzYWJsZUNvbnRyb2xzPXZvaWQgMDt2YXIgdHlwZXNfMT1yZXF1aXJlKFwiLi4vdHlwZXNcIik7ZnVuY3Rpb24gc2hvdWxkRGlzYWJsZUNvbnRyb2xzKHQsbyl7dmFyIHQ9KHR8fHt9KS5jb250cm9sc1N0cmF0ZWd5LG89b3x8e30sZT1vLml0ZW1zSW5TbGlkZSxzPW8uaXRlbXNDb3VudCxvPW8uYXV0b1dpZHRoO2lmKCgwLGV4cG9ydHMuaXNTdHJhdGVneSkodCx0eXBlc18xLkNvbnRyb2xzU3RyYXRlZ3kuUkVTUE9OU0lWRSkpcmV0dXJuIW8mJmU9PT1zfWZ1bmN0aW9uIHNob3VsZERpc2FibGVEb3RzKHQsbyl7cmV0dXJuIHQuZGlzYWJsZURvdHNDb250cm9sc3x8c2hvdWxkRGlzYWJsZUNvbnRyb2xzKHQsbyl9ZnVuY3Rpb24gc2hvdWxkRGlzYWJsZUJ1dHRvbnModCxvKXtyZXR1cm4gdC5kaXNhYmxlQnV0dG9uc0NvbnRyb2xzfHwhdC5pbmZpbml0ZSYmc2hvdWxkRGlzYWJsZUNvbnRyb2xzKHQsbyl9ZXhwb3J0cy5zaG91bGREaXNhYmxlQ29udHJvbHM9c2hvdWxkRGlzYWJsZUNvbnRyb2xzLGV4cG9ydHMuc2hvdWxkRGlzYWJsZURvdHM9c2hvdWxkRGlzYWJsZURvdHMsZXhwb3J0cy5zaG91bGREaXNhYmxlQnV0dG9ucz1zaG91bGREaXNhYmxlQnV0dG9uczt2YXIgaXNTdHJhdGVneT1mdW5jdGlvbih0LG8pe3JldHVybiB2b2lkIDA9PT10JiYodD1cIlwiKSx2b2lkIDA9PT1vJiYobz1cIlwiKSxCb29sZWFuKHQmJnQuaW5jbHVkZXMobykpfSxoYXNEb3RGb3JFYWNoU2xpZGU9KGV4cG9ydHMuaXNTdHJhdGVneT1pc1N0cmF0ZWd5LGZ1bmN0aW9uKHQsbyl7cmV0dXJuIHR8fCgwLGV4cG9ydHMuaXNTdHJhdGVneSkobyx0eXBlc18xLkNvbnRyb2xzU3RyYXRlZ3kuQUxURVJOQVRFKX0pLGdldERvdHNOYXZpZ2F0aW9uTGVuZ3RoPShleHBvcnRzLmhhc0RvdEZvckVhY2hTbGlkZT1oYXNEb3RGb3JFYWNoU2xpZGUsZnVuY3Rpb24odCxvLGUpe3JldHVybiB2b2lkIDA9PT10JiYodD0wKSx2b2lkIDA9PT1vJiYobz0xKSwoZT12b2lkIDAhPT1lJiZlKT90OjAhPT1OdW1iZXIobykmJk1hdGguY2VpbCh0L28pfHwwfSksY2hlY2tJc1RoZUxhc3REb3RJbmRleD0oZXhwb3J0cy5nZXREb3RzTmF2aWdhdGlvbkxlbmd0aD1nZXREb3RzTmF2aWdhdGlvbkxlbmd0aCxmdW5jdGlvbih0LG8sZSl7cmV0dXJuIW8mJnQ9PT1lLTF9KSxnZXRJdGVtSW5kZXhGb3JEb3ROYXZpZ2F0aW9uPShleHBvcnRzLmNoZWNrSXNUaGVMYXN0RG90SW5kZXg9Y2hlY2tJc1RoZUxhc3REb3RJbmRleCxmdW5jdGlvbih0LG8sZSxzKXtyZXR1cm4obz9lLXM6dCpzKXx8MH0pLHNob3VsZENhbmNlbEF1dG9QbGF5T25BY3Rpb249KGV4cG9ydHMuZ2V0SXRlbUluZGV4Rm9yRG90TmF2aWdhdGlvbj1nZXRJdGVtSW5kZXhGb3JEb3ROYXZpZ2F0aW9uLGZ1bmN0aW9uKHQpe3JldHVybih0PXZvaWQgMD09PXQ/XCJcIjp0KT09PXR5cGVzXzEuQXV0b1BsYXlTdHJhdGVneS5BQ1RJT058fHQ9PT10eXBlc18xLkF1dG9QbGF5U3RyYXRlZ3kuQUxMfSksc2hvdWxkQ2FuY2VsQXV0b1BsYXlPbkhvdmVyPShleHBvcnRzLnNob3VsZENhbmNlbEF1dG9QbGF5T25BY3Rpb249c2hvdWxkQ2FuY2VsQXV0b1BsYXlPbkFjdGlvbixmdW5jdGlvbih0KXtyZXR1cm4odD12b2lkIDA9PT10P1wiXCI6dCk9PT10eXBlc18xLkF1dG9QbGF5U3RyYXRlZ3kuREVGQVVMVHx8dD09PXR5cGVzXzEuQXV0b1BsYXlTdHJhdGVneS5BTEx9KTtleHBvcnRzLnNob3VsZENhbmNlbEF1dG9QbGF5T25Ib3Zlcj1zaG91bGRDYW5jZWxBdXRvUGxheU9uSG92ZXI7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9fY3JlYXRlQmluZGluZz1PYmplY3QuY3JlYXRlP2Z1bmN0aW9uKGUscix0LG8pe3ZvaWQgMD09PW8mJihvPXQpO3ZhciBwPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iocix0KTtwJiYoXCJnZXRcImluIHA/ci5fX2VzTW9kdWxlOiFwLndyaXRhYmxlJiYhcC5jb25maWd1cmFibGUpfHwocD17ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gclt0XX19KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxvLHApfTpmdW5jdGlvbihlLHIsdCxvKXtlW289dm9pZCAwPT09bz90Om9dPXJbdF19LF9fZXhwb3J0U3Rhcj1mdW5jdGlvbihlLHIpe2Zvcih2YXIgdCBpbiBlKVwiZGVmYXVsdFwiPT09dHx8T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHIsdCl8fF9fY3JlYXRlQmluZGluZyhyLGUsdCl9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLF9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9jb21tb25cIiksZXhwb3J0cyksX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2VsZW1lbnRzXCIpLGV4cG9ydHMpLF9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9jbGFzc25hbWVzXCIpLGV4cG9ydHMpLF9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi90aW1lcnNcIiksZXhwb3J0cyksX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL21hdGhcIiksZXhwb3J0cyksX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2RlYnVnXCIpLGV4cG9ydHMpLF9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9yZW5kZXJcIiksZXhwb3J0cyksX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2NvbnRyb2xzXCIpLGV4cG9ydHMpLF9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9tYXBwZXJzXCIpLGV4cG9ydHMpOyIsIlwidXNlIHN0cmljdFwiO3ZhciBfX2ltcG9ydERlZmF1bHQ9ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fSxyZWFjdF8xPShPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLlNsaWRlSW5mbz12b2lkIDAsX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSkpLHR5cGVzXzE9cmVxdWlyZShcIi4uL3R5cGVzXCIpLHV0aWxzXzE9cmVxdWlyZShcIi4uL3V0aWxzXCIpLFNsaWRlSW5mbz1mdW5jdGlvbihlKXt2YXIgdD1lLmFjdGl2ZUluZGV4LHM9ZS5pdGVtc0NvdW50LGU9ZS5yZW5kZXJTbGlkZUluZm8sdD0oMCx1dGlsc18xLmdldFNsaWRlSW5mbykodCxzKS5pdGVtO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGU/cmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOnR5cGVzXzEuQ2xhc3NuYW1lcy5TTElERV9JTkZPfSxlKHtpdGVtOnQsaXRlbXNDb3VudDpzfSkpOihlPSgwLHV0aWxzXzEuY29uY2F0Q2xhc3NuYW1lcykodHlwZXNfMS5DbGFzc25hbWVzLlNMSURFX0lORk9fSVRFTSx0eXBlc18xLk1vZGlmaWVycy5TRVBBUkFUT1IpLHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTp0eXBlc18xLkNsYXNzbmFtZXMuU0xJREVfSU5GT30scmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIse2NsYXNzTmFtZTp0eXBlc18xLkNsYXNzbmFtZXMuU0xJREVfSU5GT19JVEVNfSx0KSxyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNwYW5cIix7Y2xhc3NOYW1lOmV9LFwiL1wiKSxyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNwYW5cIix7Y2xhc3NOYW1lOnR5cGVzXzEuQ2xhc3NuYW1lcy5TTElERV9JTkZPX0lURU19LHMpKSl9O2V4cG9ydHMuU2xpZGVJbmZvPVNsaWRlSW5mbzsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX19pbXBvcnREZWZhdWx0PWZ1bmN0aW9uKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX0scmVhY3RfMT0oT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZXhwb3J0cy5TdGFnZUl0ZW09dm9pZCAwLF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpKSxTdGFnZUl0ZW09ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5pdGVtLHI9ZS5jbGFzc05hbWUsZT1lLnN0eWxlcztyZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLHtzdHlsZTplLGNsYXNzTmFtZTpyfSx0KX07ZXhwb3J0cy5TdGFnZUl0ZW09U3RhZ2VJdGVtOyIsIlwidXNlIHN0cmljdFwiO3ZhciBfX2ltcG9ydERlZmF1bHQ9ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fSxyZWFjdF8xPShPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLkRvdHNOYXZpZ2F0aW9uPXZvaWQgMCxfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKSksdHlwZXNfMT1yZXF1aXJlKFwiLi4vdHlwZXNcIiksdXRpbHNfMT1yZXF1aXJlKFwiLi4vdXRpbHNcIiksRG90c05hdmlnYXRpb249ZnVuY3Rpb24oZSl7dmFyIGE9ZS5zdGF0ZSxuPWUub25DbGljayxyPWUub25Nb3VzZUVudGVyLGw9ZS5vbk1vdXNlTGVhdmUsdD1lLmNvbnRyb2xzU3RyYXRlZ3ksdT1lLnJlbmRlckRvdHNJdGVtLGM9YS5pdGVtc0NvdW50LF89YS5pdGVtc0luU2xpZGUsZD1hLmluZmluaXRlLGU9YS5hdXRvV2lkdGgsbT1hLmFjdGl2ZUluZGV4LHY9KDAsdXRpbHNfMS5nZXRTbGlkZUl0ZW1JbmZvKShhKS5pc05leHRTbGlkZURpc2FibGVkLGY9KDAsdXRpbHNfMS5oYXNEb3RGb3JFYWNoU2xpZGUpKGUsdCksRD0oMCx1dGlsc18xLmdldERvdHNOYXZpZ2F0aW9uTGVuZ3RoKShjLF8sZik7cmV0dXJuIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwidWxcIix7Y2xhc3NOYW1lOnR5cGVzXzEuQ2xhc3NuYW1lcy5ET1RTfSxBcnJheS5mcm9tKHtsZW5ndGg6Y30pLm1hcChmdW5jdGlvbihlLHQpe3ZhciBpLHMsbztpZih0PEQpcmV0dXJuIHM9KDAsdXRpbHNfMS5jaGVja0lzVGhlTGFzdERvdEluZGV4KSh0LEJvb2xlYW4oZCksRCksaT0oMCx1dGlsc18xLmdldEl0ZW1JbmRleEZvckRvdE5hdmlnYXRpb24pKHQscyxjLF8pLHM9KDAsdXRpbHNfMS5nZXRBY3RpdmVTbGlkZUluZGV4KSh2LGEpLGYmJigocz1tKTwwP3M9Yy0xOmM8PW0mJihzPTApLGk9dCkscz1zPT09dD90eXBlc18xLk1vZGlmaWVycy5BQ1RJVkU6XCJcIixvPXU/dHlwZXNfMS5Nb2RpZmllcnMuQ1VTVE9NOlwiXCIsbz0oMCx1dGlsc18xLmNvbmNhdENsYXNzbmFtZXMpKHR5cGVzXzEuQ2xhc3NuYW1lcy5ET1RTX0lURU0scyxvKSxyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpXCIse2tleTpcImRvdC1pdGVtLVwiLmNvbmNhdCh0KSxvbk1vdXNlRW50ZXI6cixvbk1vdXNlTGVhdmU6bCxvbkNsaWNrOmZ1bmN0aW9uKCl7cmV0dXJuIG4oaSl9LGNsYXNzTmFtZTpvfSx1JiZ1KHtpc0FjdGl2ZTpCb29sZWFuKHMpLGFjdGl2ZUluZGV4OnR9KSl9KSl9O2V4cG9ydHMuRG90c05hdmlnYXRpb249RG90c05hdmlnYXRpb247IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9faW1wb3J0RGVmYXVsdD1mdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19LHJlYWN0XzE9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGV4cG9ydHMuUGxheVBhdXNlQnV0dG9uPXZvaWQgMCxfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKSksdHlwZXNfMT1yZXF1aXJlKFwiLi4vdHlwZXNcIiksdXRpbHNfMT1yZXF1aXJlKFwiLi4vdXRpbHNcIiksUGxheVBhdXNlQnV0dG9uPWZ1bmN0aW9uKGUpe3ZhciB0PWUuaXNQbGF5aW5nLGE9ZS5vbkNsaWNrLGU9ZS5yZW5kZXJQbGF5UGF1c2VCdXR0b247cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgZT9yZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6dHlwZXNfMS5DbGFzc25hbWVzLlBMQVlfQlROLG9uQ2xpY2s6YX0sZSh7aXNQbGF5aW5nOnR9KSk6KGU9dD90eXBlc18xLk1vZGlmaWVycy5QQVVTRTpcIlwiLHQ9KDAsdXRpbHNfMS5jb25jYXRDbGFzc25hbWVzKSh0eXBlc18xLkNsYXNzbmFtZXMuUExBWV9CVE5fSVRFTSxlKSxyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6dHlwZXNfMS5DbGFzc25hbWVzLlBMQVlfQlROfSxyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6dHlwZXNfMS5DbGFzc25hbWVzLlBMQVlfQlROX1dSQVBQRVJ9LHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse29uQ2xpY2s6YSxjbGFzc05hbWU6dH0pKSkpfTtleHBvcnRzLlBsYXlQYXVzZUJ1dHRvbj1QbGF5UGF1c2VCdXR0b247IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9faW1wb3J0RGVmYXVsdD1mdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19LHJlYWN0XzE9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGV4cG9ydHMuUHJldk5leHRCdXR0b249dm9pZCAwLF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpKSx0eXBlc18xPXJlcXVpcmUoXCIuLi90eXBlc1wiKSx1dGlsc18xPXJlcXVpcmUoXCIuLi91dGlsc1wiKSxQcmV2TmV4dEJ1dHRvbj1mdW5jdGlvbihlKXt2YXIgdCxzPWUubmFtZSxhPWUuaXNEaXNhYmxlZCxyPWUub25DbGljayxuPWUucmVuZGVyUHJldkJ1dHRvbixlPWUucmVuZGVyTmV4dEJ1dHRvbjtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuP3JlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTp0eXBlc18xLkNsYXNzbmFtZXMuQlVUVE9OX1BSRVYsb25DbGljazpyfSxuKHtpc0Rpc2FibGVkOmF9KSk6XCJmdW5jdGlvblwiPT10eXBlb2YgZT9yZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6dHlwZXNfMS5DbGFzc25hbWVzLkJVVFRPTl9ORVhULG9uQ2xpY2s6cn0sZSh7aXNEaXNhYmxlZDphfSkpOihlPShuPVwicHJldlwiPT09cyk/XCI8XCI6XCI+XCIscz1uP3R5cGVzXzEuQ2xhc3NuYW1lcy5CVVRUT05fUFJFVjp0eXBlc18xLkNsYXNzbmFtZXMuQlVUVE9OX05FWFQsdD1uP3R5cGVzXzEuQ2xhc3NuYW1lcy5CVVRUT05fUFJFVl9XUkFQUEVSOnR5cGVzXzEuQ2xhc3NuYW1lcy5CVVRUT05fTkVYVF9XUkFQUEVSLG49bj90eXBlc18xLkNsYXNzbmFtZXMuQlVUVE9OX1BSRVZfSVRFTTp0eXBlc18xLkNsYXNzbmFtZXMuQlVUVE9OX05FWFRfSVRFTSxhPWE/dHlwZXNfMS5Nb2RpZmllcnMuSU5BQ1RJVkU6XCJcIixuPSgwLHV0aWxzXzEuY29uY2F0Q2xhc3NuYW1lcykobixhKSxyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6c30scmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOnR9LHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicFwiLHtjbGFzc05hbWU6bixvbkNsaWNrOmZ1bmN0aW9uKGUpe3JldHVybiByKGUpfX0scmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIse1wiZGF0YS1hcmVhXCI6ZX0pKSkpKX07ZXhwb3J0cy5QcmV2TmV4dEJ1dHRvbj1QcmV2TmV4dEJ1dHRvbjsiLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLlByZXZOZXh0QnV0dG9uPWV4cG9ydHMuUGxheVBhdXNlQnV0dG9uPWV4cG9ydHMuRG90c05hdmlnYXRpb249ZXhwb3J0cy5TdGFnZUl0ZW09ZXhwb3J0cy5TbGlkZUluZm89dm9pZCAwO3ZhciBTbGlkZUluZm9fMT1yZXF1aXJlKFwiLi9TbGlkZUluZm9cIiksU3RhZ2VJdGVtXzE9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiU2xpZGVJbmZvXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIFNsaWRlSW5mb18xLlNsaWRlSW5mb319KSxyZXF1aXJlKFwiLi9TdGFnZUl0ZW1cIikpLERvdHNOYXZpZ2F0aW9uXzE9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiU3RhZ2VJdGVtXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIFN0YWdlSXRlbV8xLlN0YWdlSXRlbX19KSxyZXF1aXJlKFwiLi9Eb3RzTmF2aWdhdGlvblwiKSksUGxheVBhdXNlQnV0dG9uXzE9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiRG90c05hdmlnYXRpb25cIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gRG90c05hdmlnYXRpb25fMS5Eb3RzTmF2aWdhdGlvbn19KSxyZXF1aXJlKFwiLi9QbGF5UGF1c2VCdXR0b25cIikpLFByZXZOZXh0QnV0dG9uXzE9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiUGxheVBhdXNlQnV0dG9uXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIFBsYXlQYXVzZUJ1dHRvbl8xLlBsYXlQYXVzZUJ1dHRvbn19KSxyZXF1aXJlKFwiLi9QcmV2TmV4dEJ1dHRvblwiKSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJQcmV2TmV4dEJ1dHRvblwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBQcmV2TmV4dEJ1dHRvbl8xLlByZXZOZXh0QnV0dG9ufX0pOyIsIlwidXNlIHN0cmljdFwiO3ZhciBfX2V4dGVuZHM9ZnVuY3Rpb24oKXt2YXIgbj1mdW5jdGlvbih0LGUpe3JldHVybihuPU9iamVjdC5zZXRQcm90b3R5cGVPZnx8KHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheT9mdW5jdGlvbih0LGUpe3QuX19wcm90b19fPWV9OmZ1bmN0aW9uKHQsZSl7Zm9yKHZhciBpIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsaSkmJih0W2ldPWVbaV0pfSkpKHQsZSl9O3JldHVybiBmdW5jdGlvbih0LGUpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUmJm51bGwhPT1lKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiK1N0cmluZyhlKStcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO2Z1bmN0aW9uIGkoKXt0aGlzLmNvbnN0cnVjdG9yPXR9bih0LGUpLHQucHJvdG90eXBlPW51bGw9PT1lP09iamVjdC5jcmVhdGUoZSk6KGkucHJvdG90eXBlPWUucHJvdG90eXBlLG5ldyBpKX19KCksX19hc3NpZ249ZnVuY3Rpb24oKXtyZXR1cm4oX19hc3NpZ249T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24odCl7Zm9yKHZhciBlLGk9MSxuPWFyZ3VtZW50cy5sZW5ndGg7aTxuO2krKylmb3IodmFyIG8gaW4gZT1hcmd1bWVudHNbaV0pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsbykmJih0W29dPWVbb10pO3JldHVybiB0fSkuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxfX2NyZWF0ZUJpbmRpbmc9T2JqZWN0LmNyZWF0ZT9mdW5jdGlvbih0LGUsaSxuKXt2b2lkIDA9PT1uJiYobj1pKTt2YXIgbz1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsaSk7byYmKFwiZ2V0XCJpbiBvP2UuX19lc01vZHVsZTohby53cml0YWJsZSYmIW8uY29uZmlndXJhYmxlKXx8KG89e2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGVbaV19fSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsbixvKX06ZnVuY3Rpb24odCxlLGksbil7dFtuPXZvaWQgMD09PW4/aTpuXT1lW2ldfSxfX3NldE1vZHVsZURlZmF1bHQ9T2JqZWN0LmNyZWF0ZT9mdW5jdGlvbih0LGUpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOmV9KX06ZnVuY3Rpb24odCxlKXt0LmRlZmF1bHQ9ZX0sX19pbXBvcnRTdGFyPWZ1bmN0aW9uKHQpe2lmKHQmJnQuX19lc01vZHVsZSlyZXR1cm4gdDt2YXIgZT17fTtpZihudWxsIT10KWZvcih2YXIgaSBpbiB0KVwiZGVmYXVsdFwiIT09aSYmT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsaSkmJl9fY3JlYXRlQmluZGluZyhlLHQsaSk7cmV0dXJuIF9fc2V0TW9kdWxlRGVmYXVsdChlLHQpLGV9LF9fZXhwb3J0U3Rhcj1mdW5jdGlvbih0LGUpe2Zvcih2YXIgaSBpbiB0KVwiZGVmYXVsdFwiPT09aXx8T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsaSl8fF9fY3JlYXRlQmluZGluZyhlLHQsaSl9LF9fYXdhaXRlcj1mdW5jdGlvbih0LGEscixsKXtyZXR1cm4gbmV3KHI9cnx8UHJvbWlzZSkoZnVuY3Rpb24oaSxlKXtmdW5jdGlvbiBuKHQpe3RyeXtzKGwubmV4dCh0KSl9Y2F0Y2godCl7ZSh0KX19ZnVuY3Rpb24gbyh0KXt0cnl7cyhsLnRocm93KHQpKX1jYXRjaCh0KXtlKHQpfX1mdW5jdGlvbiBzKHQpe3ZhciBlO3QuZG9uZT9pKHQudmFsdWUpOigoZT10LnZhbHVlKWluc3RhbmNlb2Ygcj9lOm5ldyByKGZ1bmN0aW9uKHQpe3QoZSl9KSkudGhlbihuLG8pfXMoKGw9bC5hcHBseSh0LGF8fFtdKSkubmV4dCgpKX0pfSxfX2dlbmVyYXRvcj1mdW5jdGlvbihuLG8pe3ZhciBzLGEscixsPXtsYWJlbDowLHNlbnQ6ZnVuY3Rpb24oKXtpZigxJnJbMF0pdGhyb3cgclsxXTtyZXR1cm4gclsxXX0sdHJ5czpbXSxvcHM6W119LHQ9e25leHQ6ZSgwKSx0aHJvdzplKDEpLHJldHVybjplKDIpfTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJih0W1N5bWJvbC5pdGVyYXRvcl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30pLHQ7ZnVuY3Rpb24gZShpKXtyZXR1cm4gZnVuY3Rpb24odCl7dmFyIGU9W2ksdF07aWYocyl0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtmb3IoO2w7KXRyeXtpZihzPTEsYSYmKHI9MiZlWzBdP2EucmV0dXJuOmVbMF0/YS50aHJvd3x8KChyPWEucmV0dXJuKSYmci5jYWxsKGEpLDApOmEubmV4dCkmJiEocj1yLmNhbGwoYSxlWzFdKSkuZG9uZSlyZXR1cm4gcjtzd2l0Y2goYT0wLChlPXI/WzImZVswXSxyLnZhbHVlXTplKVswXSl7Y2FzZSAwOmNhc2UgMTpyPWU7YnJlYWs7Y2FzZSA0OnJldHVybiBsLmxhYmVsKysse3ZhbHVlOmVbMV0sZG9uZTohMX07Y2FzZSA1OmwubGFiZWwrKyxhPWVbMV0sZT1bMF07Y29udGludWU7Y2FzZSA3OmU9bC5vcHMucG9wKCksbC50cnlzLnBvcCgpO2NvbnRpbnVlO2RlZmF1bHQ6aWYoIShyPTA8KHI9bC50cnlzKS5sZW5ndGgmJnJbci5sZW5ndGgtMV0pJiYoNj09PWVbMF18fDI9PT1lWzBdKSl7bD0wO2NvbnRpbnVlfWlmKDM9PT1lWzBdJiYoIXJ8fGVbMV0+clswXSYmZVsxXTxyWzNdKSlsLmxhYmVsPWVbMV07ZWxzZSBpZig2PT09ZVswXSYmbC5sYWJlbDxyWzFdKWwubGFiZWw9clsxXSxyPWU7ZWxzZXtpZighKHImJmwubGFiZWw8clsyXSkpe3JbMl0mJmwub3BzLnBvcCgpLGwudHJ5cy5wb3AoKTtjb250aW51ZX1sLmxhYmVsPXJbMl0sbC5vcHMucHVzaChlKX19ZT1vLmNhbGwobixsKX1jYXRjaCh0KXtlPVs2LHRdLGE9MH1maW5hbGx5e3M9cj0wfWlmKDUmZVswXSl0aHJvdyBlWzFdO3JldHVybnt2YWx1ZTplWzBdP2VbMV06dm9pZCAwLGRvbmU6ITB9fX19LF9faW1wb3J0RGVmYXVsdD1mdW5jdGlvbih0KXtyZXR1cm4gdCYmdC5fX2VzTW9kdWxlP3Q6e2RlZmF1bHQ6dH19LHJlYWN0XzE9KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpKSx2YW5pbGxhX3N3aXBlXzE9X19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJ2YW5pbGxhLXN3aXBlXCIpKSxkZWZhdWx0UHJvcHNfMT1yZXF1aXJlKFwiLi9kZWZhdWx0UHJvcHNcIiksVmlld3M9X19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL3ZpZXdzXCIpKSxVdGlscz1fX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vdXRpbHNcIikpLHR5cGVzXzE9cmVxdWlyZShcIi4vdHlwZXNcIiksQWxpY2VDYXJvdXNlbD0oX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3R5cGVzXCIpLGV4cG9ydHMpLGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQodCl7dmFyIHM9ZS5jYWxsKHRoaXMsdCl8fHRoaXM7cmV0dXJuIHMuc3dpcGVMaXN0ZW5lcj1udWxsLHMuX2hhbmRsZUtleWJvYXJkRXZlbnRzPWZ1bmN0aW9uKHQpe3N3aXRjaCh0LmNvZGUpe2Nhc2VcIlNwYWNlXCI6cmV0dXJuIHMucHJvcHMuYXV0b1BsYXkmJnMuX2hhbmRsZVBsYXlQYXVzZVRvZ2dsZSgpO2Nhc2VcIkFycm93TGVmdFwiOnJldHVybiBzLnNsaWRlUHJldih0KTtjYXNlXCJBcnJvd1JpZ2h0XCI6cmV0dXJuIHMuc2xpZGVOZXh0KHQpfX0scy5faGFuZGxlQmVmb3JlU2xpZGVFbmQ9ZnVuY3Rpb24obyl7cmV0dXJuIF9fYXdhaXRlcihzLHZvaWQgMCx2b2lkIDAsZnVuY3Rpb24oKXt2YXIgZSxpLG47cmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsZnVuY3Rpb24odCl7c3dpdGNoKHQubGFiZWwpe2Nhc2UgMDpyZXR1cm4oaT10aGlzLnN0YXRlLG49aS5hY3RpdmVJbmRleCxlPWkuaXRlbXNDb3VudCxpPWkuZmFkZW91dEFuaW1hdGlvblByb2Nlc3NpbmcsVXRpbHMuc2hvdWxkUmVjYWxjdWxhdGVTbGlkZUluZGV4KG4sZSkpPyhuPVV0aWxzLmdldFVwZGF0ZVNsaWRlUG9zaXRpb25JbmRleChuLGUpLFs0LHRoaXMuX2hhbmRsZVVwZGF0ZVNsaWRlUG9zaXRpb24obildKTpbMywyXTtjYXNlIDE6cmV0dXJuIHQuc2VudCgpLFszLDRdO2Nhc2UgMjpyZXR1cm4gaT9bNCx0aGlzLnNldFN0YXRlKHtmYWRlb3V0QW5pbWF0aW9uSW5kZXg6bnVsbCxmYWRlb3V0QW5pbWF0aW9uUG9zaXRpb246bnVsbCxmYWRlb3V0QW5pbWF0aW9uUHJvY2Vzc2luZzohMX0pXTpbMyw0XTtjYXNlIDM6dC5zZW50KCksdC5sYWJlbD00O2Nhc2UgNDpyZXR1cm4gdGhpcy5faGFuZGxlU2xpZGVDaGFuZ2VkKG8pLFsyXX19KX0pfSxzLl9oYW5kbGVNb3VzZUVudGVyPWZ1bmN0aW9uKCl7dmFyIHQ9cy5wcm9wcy5hdXRvUGxheVN0cmF0ZWd5O1V0aWxzLnNob3VsZENhbmNlbEF1dG9QbGF5T25Ib3Zlcih0KSYmcy5zdGF0ZS5pc0F1dG9QbGF5aW5nJiYocy5pc0hvdmVyZWQ9ITAscy5faGFuZGxlUGF1c2UoKSl9LHMuX2hhbmRsZU1vdXNlTGVhdmU9ZnVuY3Rpb24oKXtzLnN0YXRlLmlzQXV0b1BsYXlpbmcmJihzLmlzSG92ZXJlZD0hMSxzLl9oYW5kbGVQbGF5KCkpfSxzLl9oYW5kbGVQYXVzZT1mdW5jdGlvbigpe3MuX2NsZWFyQXV0b1BsYXlUaW1lb3V0KCl9LHMuX2hhbmRsZVBsYXlQYXVzZVRvZ2dsZT1mdW5jdGlvbigpe3JldHVybiBfX2F3YWl0ZXIocyx2b2lkIDAsdm9pZCAwLGZ1bmN0aW9uKCl7dmFyIGU7cmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsZnVuY3Rpb24odCl7c3dpdGNoKHQubGFiZWwpe2Nhc2UgMDpyZXR1cm4gZT10aGlzLnN0YXRlLmlzQXV0b1BsYXlpbmcsdGhpcy5oYXNVc2VyQWN0aW9uPSEwLFs0LHRoaXMuc2V0U3RhdGUoe2lzQXV0b1BsYXlpbmc6IWUsaXNBdXRvUGxheUNhbmNlbGVkT25BY3Rpb246ITB9KV07Y2FzZSAxOnJldHVybiB0LnNlbnQoKSxlP3RoaXMuX2hhbmRsZVBhdXNlKCk6dGhpcy5faGFuZGxlUGxheSgpLFsyXX19KX0pfSxzLl9zZXRSb290Q29tcG9uZW50UmVmPWZ1bmN0aW9uKHQpe3JldHVybiBzLnJvb3RFbGVtZW50PXR9LHMuX3NldFN0YWdlQ29tcG9uZW50UmVmPWZ1bmN0aW9uKHQpe3JldHVybiBzLnN0YWdlQ29tcG9uZW50PXR9LHMuX3JlbmRlclN0YWdlSXRlbT1mdW5jdGlvbih0LGUpe3ZhciBpPVV0aWxzLmdldFJlbmRlclN0YWdlSXRlbVN0eWxlcyhlLHMuc3RhdGUpLG49VXRpbHMuZ2V0UmVuZGVyU3RhZ2VJdGVtQ2xhc3NlcyhlLHMuc3RhdGUpO3JldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChWaWV3cy5TdGFnZUl0ZW0se3N0eWxlczppLGNsYXNzTmFtZTpuLGtleTpcInN0YWdlLWl0ZW0tXCIuY29uY2F0KGUpLGl0ZW06dH0pfSxzLl9yZW5kZXJTbGlkZUluZm89ZnVuY3Rpb24oKXt2YXIgdD1zLnByb3BzLnJlbmRlclNsaWRlSW5mbyxlPXMuc3RhdGUsaT1lLmFjdGl2ZUluZGV4LGU9ZS5pdGVtc0NvdW50O3JldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChWaWV3cy5TbGlkZUluZm8se2l0ZW1zQ291bnQ6ZSxhY3RpdmVJbmRleDppLHJlbmRlclNsaWRlSW5mbzp0fSl9LHMuc3RhdGU9VXRpbHMuY2FsY3VsYXRlSW5pdGlhbFN0YXRlKHQsbnVsbCkscy5pc0hvdmVyZWQ9ITEscy5pc0FuaW1hdGlvbkRpc2FibGVkPSExLHMuaXNUb3VjaE1vdmVQcm9jZXNzU3RhcnRlZD0hMSxzLmNhbmNlbFRvdWNoQW5pbWF0aW9ucz0hMSxzLmhhc1VzZXJBY3Rpb249ITEscy5yb290RWxlbWVudD1udWxsLHMucm9vdENvbXBvbmVudERpbWVuc2lvbnM9e30scy5zdGFnZUNvbXBvbmVudD1udWxsLHMuc3RhcnRUb3VjaG1vdmVQb3NpdGlvbj12b2lkIDAscy5zbGlkZVRvPXMuc2xpZGVUby5iaW5kKHMpLHMuc2xpZGVQcmV2PXMuc2xpZGVQcmV2LmJpbmQocykscy5zbGlkZU5leHQ9cy5zbGlkZU5leHQuYmluZChzKSxzLl9oYW5kbGVUb3VjaG1vdmU9cy5faGFuZGxlVG91Y2htb3ZlLmJpbmQocykscy5faGFuZGxlVG91Y2hlbmQ9cy5faGFuZGxlVG91Y2hlbmQuYmluZChzKSxzLl9oYW5kbGVEb3RDbGljaz1zLl9oYW5kbGVEb3RDbGljay5iaW5kKHMpLHMuX2hhbmRsZVJlc2l6ZT1zLl9oYW5kbGVSZXNpemUuYmluZChzKSx0PVV0aWxzLmRlYm91bmNlKHMuX2hhbmRsZVJlc2l6ZSwxMDApLHMuX2hhbmRsZVJlc2l6ZURlYm91bmNlZD10WzBdLHMuX2NhbmNlbFJlc2l6ZURlYm91bmNlZD10WzFdLHN9cmV0dXJuIF9fZXh0ZW5kcyh0LGUpLHQucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50PWZ1bmN0aW9uKCl7cmV0dXJuIF9fYXdhaXRlcih0aGlzLHZvaWQgMCx2b2lkIDAsZnVuY3Rpb24oKXtyZXR1cm4gX19nZW5lcmF0b3IodGhpcyxmdW5jdGlvbih0KXtzd2l0Y2godC5sYWJlbCl7Y2FzZSAwOnJldHVybls0LHRoaXMuX3NldEluaXRpYWxTdGF0ZSgpXTtjYXNlIDE6cmV0dXJuIHQuc2VudCgpLHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCksdGhpcy5fc2V0dXBTd2lwZUhhbmRsZXJzKCksdGhpcy5wcm9wcy5hdXRvUGxheSYmdGhpcy5faGFuZGxlUGxheSgpLFsyXX19KX0pfSx0LnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGU9ZnVuY3Rpb24odCxlKXt2YXIgaT10aGlzLnByb3BzLG49aS5hY3RpdmVJbmRleCxvPWkuYW5pbWF0aW9uRHVyYXRpb24scz1pLmF1dG9XaWR0aCxhPWkuY2hpbGRyZW4scj1pLmluZmluaXRlLGw9aS5pdGVtcyx1PWkucGFkZGluZ0xlZnQsZD1pLnBhZGRpbmdSaWdodCxjPWkucmVzcG9uc2l2ZSxoPWkuc3dpcGVFeHRyYVBhZGRpbmcscD1pLm1vdXNlVHJhY2tpbmcsXz1pLnN3aXBlRGVsdGEsbT1pLnRvdWNoVHJhY2tpbmcsaT1pLnRvdWNoTW92ZURlZmF1bHRFdmVudHM7YSYmdC5jaGlsZHJlbiE9PWE/KGE9ZS5hY3RpdmVJbmRleCxlPV9fYXNzaWduKF9fYXNzaWduKHt9LHRoaXMucHJvcHMpLHthY3RpdmVJbmRleDphfSksdGhpcy5fdXBkYXRlQ29tcG9uZW50KGUpKTp0LmF1dG9XaWR0aCE9PXN8fHQuaW5maW5pdGUhPT1yfHx0Lml0ZW1zIT09bHx8dC5wYWRkaW5nTGVmdCE9PXV8fHQucGFkZGluZ1JpZ2h0IT09ZHx8dC5yZXNwb25zaXZlIT09Y3x8dC5zd2lwZUV4dHJhUGFkZGluZyE9PWg/dGhpcy5fdXBkYXRlQ29tcG9uZW50KCk6KHQuYW5pbWF0aW9uRHVyYXRpb24hPT1vJiZ0aGlzLnNldFN0YXRlKHthbmltYXRpb25EdXJhdGlvbjpvfSksdC5hY3RpdmVJbmRleCE9PW4mJnRoaXMuc2xpZGVUbyhuLHR5cGVzXzEuRXZlbnRUeXBlLlVQREFURSkpLHQuc3dpcGVEZWx0YT09PV8mJnQubW91c2VUcmFja2luZz09PXAmJnQudG91Y2hUcmFja2luZz09PW0mJnQudG91Y2hNb3ZlRGVmYXVsdEV2ZW50cz09PWl8fHRoaXMuX3VwZGF0ZVN3aXBlUHJvcHMoKSx0aGlzLnByb3BzLmtleWJvYXJkTmF2aWdhdGlvbiE9PXQua2V5Ym9hcmROYXZpZ2F0aW9uJiZ0aGlzLl91cGRhdGVFdmVudExpc3RlbmVycygpfSx0LnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3RoaXMuX2NhbmNlbFJlc2l6ZURlYm91bmNlZCgpLHRoaXMuX2NhbmNlbFRpbWVvdXRBbmltYXRpb25zKCksdGhpcy5fcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKX0sT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwiZXZlbnRPYmplY3RcIix7Z2V0OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5zdGF0ZSxlPXQuaXRlbXNJblNsaWRlLHQ9dC5hY3RpdmVJbmRleCxpPVV0aWxzLmdldFNsaWRlSXRlbUluZm8odGhpcy5zdGF0ZSksbj1pLmlzTmV4dFNsaWRlRGlzYWJsZWQsaT1pLmlzUHJldlNsaWRlRGlzYWJsZWQ7cmV0dXJue2l0ZW06dCxzbGlkZTpVdGlscy5nZXRBY3RpdmVTbGlkZUluZGV4KG4sdGhpcy5zdGF0ZSksaXRlbXNJblNsaWRlOmUsaXNOZXh0U2xpZGVEaXNhYmxlZDpuLGlzUHJldlNsaWRlRGlzYWJsZWQ6aSx0eXBlOnR5cGVzXzEuRXZlbnRUeXBlLkFDVElPTn19LGVudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwiaXNGYWRlb3V0QW5pbWF0aW9uQWxsb3dlZFwiLHtnZXQ6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnN0YXRlLml0ZW1zSW5TbGlkZSxlPXRoaXMucHJvcHMsaT1lLmFuaW1hdGlvblR5cGUsbj1lLnBhZGRpbmdMZWZ0LG89ZS5wYWRkaW5nUmlnaHQsZT1lLmF1dG9XaWR0aDtyZXR1cm4gMT09PXQmJmk9PT10eXBlc18xLkFuaW1hdGlvblR5cGUuRkFERU9VVCYmIShufHxvfHxlKX0sZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJ0b3VjaG1vdmVQb3NpdGlvblwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdm9pZCAwIT09dGhpcy5zdGFydFRvdWNobW92ZVBvc2l0aW9uP3RoaXMuc3RhcnRUb3VjaG1vdmVQb3NpdGlvbjp0aGlzLnN0YXRlLnRyYW5zbGF0ZTNkfSxlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMH0pLHQucHJvdG90eXBlLnNsaWRlVG89ZnVuY3Rpb24odCxlKXt2YXIgaSxuLG87dm9pZCAwPT09dCYmKHQ9MCksdGhpcy5faGFuZGxlUGF1c2UoKSx0aGlzLmlzRmFkZW91dEFuaW1hdGlvbkFsbG93ZWQ/KGk9VXRpbHMuZ2V0VXBkYXRlU2xpZGVQb3NpdGlvbkluZGV4KHQsdGhpcy5zdGF0ZS5pdGVtc0NvdW50KSxuPVV0aWxzLmdldEZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbihpLHRoaXMuc3RhdGUpLG89VXRpbHMuZ2V0RmFkZW91dEFuaW1hdGlvbkluZGV4KHRoaXMuc3RhdGUpLHRoaXMuX2hhbmRsZVNsaWRlVG8oe2FjdGl2ZUluZGV4OmksZmFkZW91dEFuaW1hdGlvbkluZGV4Om8sZmFkZW91dEFuaW1hdGlvblBvc2l0aW9uOm4sZXZlbnRUeXBlOmV9KSk6dGhpcy5faGFuZGxlU2xpZGVUbyh7YWN0aXZlSW5kZXg6dCxldmVudFR5cGU6ZX0pfSx0LnByb3RvdHlwZS5zbGlkZVByZXY9ZnVuY3Rpb24odCl7dGhpcy5faGFuZGxlUGF1c2UoKSx0JiZ0LmlzVHJ1c3RlZCYmKHRoaXMuaGFzVXNlckFjdGlvbj0hMCk7dmFyIGUsaSx0PXRoaXMuc3RhdGUuYWN0aXZlSW5kZXgtMTt0aGlzLmlzRmFkZW91dEFuaW1hdGlvbkFsbG93ZWQ/KGU9LXRoaXMuc3RhdGUuc3RhZ2VXaWR0aCxpPVV0aWxzLmdldEZhZGVvdXRBbmltYXRpb25JbmRleCh0aGlzLnN0YXRlKSx0aGlzLl9oYW5kbGVTbGlkZVRvKHthY3RpdmVJbmRleDp0LGZhZGVvdXRBbmltYXRpb25JbmRleDppLGZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbjplfSkpOnRoaXMuX2hhbmRsZVNsaWRlVG8oe2FjdGl2ZUluZGV4OnR9KX0sdC5wcm90b3R5cGUuc2xpZGVOZXh0PWZ1bmN0aW9uKHQpe3RoaXMuX2hhbmRsZVBhdXNlKCksdCYmdC5pc1RydXN0ZWQmJih0aGlzLmhhc1VzZXJBY3Rpb249ITApO3ZhciBlLGksdD10aGlzLnN0YXRlLmFjdGl2ZUluZGV4KzE7dGhpcy5pc0ZhZGVvdXRBbmltYXRpb25BbGxvd2VkPyhlPXRoaXMuc3RhdGUuc3RhZ2VXaWR0aCxpPVV0aWxzLmdldEZhZGVvdXRBbmltYXRpb25JbmRleCh0aGlzLnN0YXRlKSx0aGlzLl9oYW5kbGVTbGlkZVRvKHthY3RpdmVJbmRleDp0LGZhZGVvdXRBbmltYXRpb25JbmRleDppLGZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbjplfSkpOnRoaXMuX2hhbmRsZVNsaWRlVG8oe2FjdGl2ZUluZGV4OnR9KX0sdC5wcm90b3R5cGUuX2FkZEV2ZW50TGlzdGVuZXJzPWZ1bmN0aW9uKCl7d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzLl9oYW5kbGVSZXNpemVEZWJvdW5jZWQpLHRoaXMucHJvcHMua2V5Ym9hcmROYXZpZ2F0aW9uJiZ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsdGhpcy5faGFuZGxlS2V5Ym9hcmRFdmVudHMpfSx0LnByb3RvdHlwZS5fcmVtb3ZlRXZlbnRMaXN0ZW5lcnM9ZnVuY3Rpb24oKXt0aGlzLnN3aXBlTGlzdGVuZXImJnRoaXMuc3dpcGVMaXN0ZW5lci5kZXN0cm95KCksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzLl9oYW5kbGVSZXNpemVEZWJvdW5jZWQpLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIix0aGlzLl9oYW5kbGVLZXlib2FyZEV2ZW50cyl9LHQucHJvdG90eXBlLl91cGRhdGVFdmVudExpc3RlbmVycz1mdW5jdGlvbigpe3RoaXMucHJvcHMua2V5Ym9hcmROYXZpZ2F0aW9uP3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIix0aGlzLl9oYW5kbGVLZXlib2FyZEV2ZW50cyk6d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLHRoaXMuX2hhbmRsZUtleWJvYXJkRXZlbnRzKX0sdC5wcm90b3R5cGUuX2hhbmRsZVJlc2l6ZT1mdW5jdGlvbihvKXtyZXR1cm4gX19hd2FpdGVyKHRoaXMsdm9pZCAwLHZvaWQgMCxmdW5jdGlvbigpe3ZhciBlLGksbjtyZXR1cm4gX19nZW5lcmF0b3IodGhpcyxmdW5jdGlvbih0KXtzd2l0Y2godC5sYWJlbCl7Y2FzZSAwOnJldHVybihpPXRoaXMucHJvcHMub25SZXNpemVFdmVudCxuPVV0aWxzLmdldEVsZW1lbnREaW1lbnNpb25zKHRoaXMucm9vdEVsZW1lbnQpLChpfHxVdGlscy5zaG91bGRIYW5kbGVSZXNpemVFdmVudCkobyx0aGlzLnJvb3RDb21wb25lbnREaW1lbnNpb25zLG4pKT8odGhpcy5fY2FuY2VsVGltZW91dEFuaW1hdGlvbnMoKSx0aGlzLnJvb3RDb21wb25lbnREaW1lbnNpb25zPW4saT10aGlzLnN0YXRlLG49aS5pdGVtc0NvdW50LGU9aS5pc0F1dG9QbGF5aW5nLGk9VXRpbHMuZ2V0VXBkYXRlU2xpZGVQb3NpdGlvbkluZGV4KHRoaXMuc3RhdGUuYWN0aXZlSW5kZXgsbiksbj1VdGlscy5jYWxjdWxhdGVJbml0aWFsU3RhdGUoX19hc3NpZ24oX19hc3NpZ24oe30sdGhpcy5wcm9wcykse2FjdGl2ZUluZGV4Oml9KSx0aGlzLnN0YWdlQ29tcG9uZW50KSxpPVV0aWxzLmdldFRyYW5zbGF0ZTNkUHJvcGVydHkobi5hY3RpdmVJbmRleCxuKSxuPV9fYXNzaWduKF9fYXNzaWduKHt9LG4pLHt0cmFuc2xhdGUzZDppLGlzQXV0b1BsYXlpbmc6ZX0pLFV0aWxzLmFuaW1hdGUodGhpcy5zdGFnZUNvbXBvbmVudCx7cG9zaXRpb246LWl9KSxbNCx0aGlzLnNldFN0YXRlKG4pXSk6WzMsMl07Y2FzZSAxOnQuc2VudCgpLHRoaXMuX2hhbmRsZVJlc2l6ZWQoKSx0aGlzLmlzQW5pbWF0aW9uRGlzYWJsZWQ9ITEsZSYmdGhpcy5faGFuZGxlUGxheSgpLHQubGFiZWw9MjtjYXNlIDI6cmV0dXJuWzJdfX0pfSl9LHQucHJvdG90eXBlLl9oYW5kbGVUb3VjaG1vdmU9ZnVuY3Rpb24odCxlKXt2YXIgaT1lLmFic1ksbj1lLmFic1gsbz1lLmRlbHRhWCxlPXRoaXMucHJvcHMuc3dpcGVEZWx0YSxzPXRoaXMuc3RhdGUsYT1zLnN3aXBlU2hpZnRWYWx1ZSxyPXMuc3dpcGVMaW1pdE1pbixsPXMuc3dpcGVMaW1pdE1heCx1PXMuaW5maW5pdGUscz1zLmZhZGVvdXRBbmltYXRpb25Qcm9jZXNzaW5nO2lmKHRoaXMuaGFzVXNlckFjdGlvbj0hMCwhKHN8fCF0aGlzLmlzVG91Y2hNb3ZlUHJvY2Vzc1N0YXJ0ZWQmJlV0aWxzLmlzVmVydGljYWxUb3VjaG1vdmVEZXRlY3RlZChuLGksZSkpKXt0aGlzLmlzVG91Y2hNb3ZlUHJvY2Vzc1N0YXJ0ZWR8fCh0aGlzLl9jYW5jZWxUaW1lb3V0QW5pbWF0aW9ucygpLHRoaXMuX3NldFRvdWNobW92ZVBvc2l0aW9uKCksdGhpcy5pc0FuaW1hdGlvbkRpc2FibGVkPSEwLHRoaXMuaXNUb3VjaE1vdmVQcm9jZXNzU3RhcnRlZD0hMCx0aGlzLl9oYW5kbGVTbGlkZUNoYW5nZSgpKTt2YXIgZD1VdGlscy5nZXRUb3VjaG1vdmVUcmFuc2xhdGVQb3NpdGlvbihvLHRoaXMudG91Y2htb3ZlUG9zaXRpb24pO2lmKCExPT09dSlyZXR1cm4gcjxkfHxkPC1sP3ZvaWQgMDp2b2lkIFV0aWxzLmFuaW1hdGUodGhpcy5zdGFnZUNvbXBvbmVudCx7cG9zaXRpb246ZH0pO2lmKFV0aWxzLnNob3VsZFJlY2FsY3VsYXRlU3dpcGVQb3NpdGlvbihkLHIsbCkpdHJ5eyFmdW5jdGlvbiB0KCl7VXRpbHMuZ2V0SXNMZWZ0RGlyZWN0aW9uKG8pP2QrPWE6ZCs9LWE7VXRpbHMuc2hvdWxkUmVjYWxjdWxhdGVTd2lwZVBvc2l0aW9uKGQscixsKSYmdCgpfSgpfWNhdGNoKHQpe1V0aWxzLmRlYnVnKHQpfVV0aWxzLmFuaW1hdGUodGhpcy5zdGFnZUNvbXBvbmVudCx7cG9zaXRpb246ZH0pfX0sdC5wcm90b3R5cGUuX2hhbmRsZVRvdWNoZW5kPWZ1bmN0aW9uKHQsZSl7dmFyIGksbixvLGU9ZS5kZWx0YVg7dGhpcy5fY2xlYXJUb3VjaG1vdmVQb3NpdGlvbigpLHRoaXMuaXNUb3VjaE1vdmVQcm9jZXNzU3RhcnRlZCYmKHRoaXMuaXNUb3VjaE1vdmVQcm9jZXNzU3RhcnRlZD0hMSxpPXRoaXMuc3RhdGUuYW5pbWF0aW9uRHVyYXRpb24sbj10aGlzLnByb3BzLmFuaW1hdGlvbkVhc2luZ0Z1bmN0aW9uLG89VXRpbHMuZ2V0VHJhbnNsYXRlWFByb3BlcnR5KHRoaXMuc3RhZ2VDb21wb25lbnQpLGU9VXRpbHMuZ2V0U3dpcGVUb3VjaGVuZFBvc2l0aW9uKHRoaXMuc3RhdGUsZSxvKSxVdGlscy5hbmltYXRlKHRoaXMuc3RhZ2VDb21wb25lbnQse3Bvc2l0aW9uOmUsYW5pbWF0aW9uRHVyYXRpb246aSxhbmltYXRpb25FYXNpbmdGdW5jdGlvbjpufSksdGhpcy5faGFuZGxlQmVmb3JlVG91Y2hFbmQoZSkpfSx0LnByb3RvdHlwZS5faGFuZGxlQmVmb3JlVG91Y2hFbmQ9ZnVuY3Rpb24ocyl7dmFyIHQ9dGhpcyxlPXRoaXMuc3RhdGUuYW5pbWF0aW9uRHVyYXRpb247dGhpcy50b3VjaEVuZFRpbWVvdXRJZD13aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe3JldHVybiBfX2F3YWl0ZXIodCx2b2lkIDAsdm9pZCAwLGZ1bmN0aW9uKCl7dmFyIGUsaSxuLG89dGhpcztyZXR1cm4gX19nZW5lcmF0b3IodGhpcyxmdW5jdGlvbih0KXtzd2l0Y2godC5sYWJlbCl7Y2FzZSAwOnJldHVybiBlPVV0aWxzLmdldFN3aXBlVG91Y2hlbmRJbmRleChzLHRoaXMuc3RhdGUpLGk9VXRpbHMuZ2V0VHJhbnNsYXRlM2RQcm9wZXJ0eShlLHRoaXMuc3RhdGUpLFV0aWxzLmFuaW1hdGUodGhpcy5zdGFnZUNvbXBvbmVudCx7cG9zaXRpb246LWl9KSxuPVV0aWxzLmdldFRyYW5zaXRpb25Qcm9wZXJ0eSgpLFs0LHRoaXMuc2V0U3RhdGUoe2FjdGl2ZUluZGV4OmUsdHJhbnNsYXRlM2Q6aSx0cmFuc2l0aW9uOm59KV07Y2FzZSAxOnJldHVybiB0LnNlbnQoKSxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtyZXR1cm4gby5faGFuZGxlU2xpZGVDaGFuZ2VkKCl9KSxbMl19fSl9KX0sZSl9LHQucHJvdG90eXBlLl9oYW5kbGVTbGlkZVRvPWZ1bmN0aW9uKHQpe3ZhciBlPXQuYWN0aXZlSW5kZXgsYT12b2lkIDA9PT1lPzA6ZSxlPXQuZmFkZW91dEFuaW1hdGlvbkluZGV4LHI9dm9pZCAwPT09ZT9udWxsOmUsZT10LmZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbixsPXZvaWQgMD09PWU/bnVsbDplLHU9dC5ldmVudFR5cGU7cmV0dXJuIF9fYXdhaXRlcih0aGlzLHZvaWQgMCx2b2lkIDAsZnVuY3Rpb24oKXt2YXIgZSxpLG4sbyxzPXRoaXM7cmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsZnVuY3Rpb24odCl7c3dpdGNoKHQubGFiZWwpe2Nhc2UgMDpyZXR1cm4oaT10aGlzLnByb3BzLG49aS5pbmZpbml0ZSxpPWkuYW5pbWF0aW9uRWFzaW5nRnVuY3Rpb24sZT10aGlzLnN0YXRlLG89ZS5pdGVtc0NvdW50LGU9ZS5hbmltYXRpb25EdXJhdGlvbix0aGlzLmlzQW5pbWF0aW9uRGlzYWJsZWR8fHRoaXMuc3RhdGUuYWN0aXZlSW5kZXg9PT1hfHwhbiYmVXRpbHMuc2hvdWxkQ2FuY2VsU2xpZGVBbmltYXRpb24oYSxvKSk/WzJdOih0aGlzLmlzQW5pbWF0aW9uRGlzYWJsZWQ9ITAsdGhpcy5fY2FuY2VsVGltZW91dEFuaW1hdGlvbnMoKSx0aGlzLl9oYW5kbGVTbGlkZUNoYW5nZSh1KSxuPSExLG89VXRpbHMuZ2V0VHJhbnNsYXRlM2RQcm9wZXJ0eShhLHRoaXMuc3RhdGUpLGk9bnVsbCE9PXImJm51bGwhPT1sPyhuPSEwLFV0aWxzLmdldFRyYW5zaXRpb25Qcm9wZXJ0eSgpKTpVdGlscy5nZXRUcmFuc2l0aW9uUHJvcGVydHkoe2FuaW1hdGlvbkR1cmF0aW9uOmUsYW5pbWF0aW9uRWFzaW5nRnVuY3Rpb246aX0pLFs0LHRoaXMuc2V0U3RhdGUoe2FjdGl2ZUluZGV4OmEsdHJhbnNpdGlvbjppLHRyYW5zbGF0ZTNkOm8sYW5pbWF0aW9uRHVyYXRpb246ZSxmYWRlb3V0QW5pbWF0aW9uSW5kZXg6cixmYWRlb3V0QW5pbWF0aW9uUG9zaXRpb246bCxmYWRlb3V0QW5pbWF0aW9uUHJvY2Vzc2luZzpufSldKTtjYXNlIDE6cmV0dXJuIHQuc2VudCgpLHRoaXMuc2xpZGVFbmRUaW1lb3V0SWQ9d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtyZXR1cm4gcy5faGFuZGxlQmVmb3JlU2xpZGVFbmQodSl9LGUpLFsyXX19KX0pfSx0LnByb3RvdHlwZS5faGFuZGxlVXBkYXRlU2xpZGVQb3NpdGlvbj1mdW5jdGlvbihvKXtyZXR1cm4gX19hd2FpdGVyKHRoaXMsdm9pZCAwLHZvaWQgMCxmdW5jdGlvbigpe3ZhciBlLGksbjtyZXR1cm4gX19nZW5lcmF0b3IodGhpcyxmdW5jdGlvbih0KXtzd2l0Y2godC5sYWJlbCl7Y2FzZSAwOnJldHVybiBlPXRoaXMuc3RhdGUuYW5pbWF0aW9uRHVyYXRpb24saT1VdGlscy5nZXRUcmFuc2xhdGUzZFByb3BlcnR5KG8sdGhpcy5zdGF0ZSksbj1VdGlscy5nZXRUcmFuc2l0aW9uUHJvcGVydHkoe2FuaW1hdGlvbkR1cmF0aW9uOjB9KSxbNCx0aGlzLnNldFN0YXRlKHthY3RpdmVJbmRleDpvLHRyYW5zbGF0ZTNkOmksdHJhbnNpdGlvbjpuLGFuaW1hdGlvbkR1cmF0aW9uOmUsZmFkZW91dEFuaW1hdGlvbkluZGV4Om51bGwsZmFkZW91dEFuaW1hdGlvblBvc2l0aW9uOm51bGwsZmFkZW91dEFuaW1hdGlvblByb2Nlc3Npbmc6ITF9KV07Y2FzZSAxOnJldHVybiB0LnNlbnQoKSxbMl19fSl9KX0sdC5wcm90b3R5cGUuX2hhbmRsZVJlc2l6ZWQ9ZnVuY3Rpb24oKXt0aGlzLnByb3BzLm9uUmVzaXplZCYmdGhpcy5wcm9wcy5vblJlc2l6ZWQoX19hc3NpZ24oX19hc3NpZ24oe30sdGhpcy5ldmVudE9iamVjdCkse3R5cGU6dHlwZXNfMS5FdmVudFR5cGUuUkVTSVpFfSkpfSx0LnByb3RvdHlwZS5faGFuZGxlU2xpZGVDaGFuZ2U9ZnVuY3Rpb24odCl7dGhpcy5wcm9wcy5vblNsaWRlQ2hhbmdlJiYodD10P19fYXNzaWduKF9fYXNzaWduKHt9LHRoaXMuZXZlbnRPYmplY3QpLHt0eXBlOnR9KTp0aGlzLmV2ZW50T2JqZWN0LHRoaXMucHJvcHMub25TbGlkZUNoYW5nZSh0KSl9LHQucHJvdG90eXBlLl9oYW5kbGVTbGlkZUNoYW5nZWQ9ZnVuY3Rpb24ocyl7cmV0dXJuIF9fYXdhaXRlcih0aGlzLHZvaWQgMCx2b2lkIDAsZnVuY3Rpb24oKXt2YXIgZSxpLG4sbztyZXR1cm4gX19nZW5lcmF0b3IodGhpcyxmdW5jdGlvbih0KXtzd2l0Y2godC5sYWJlbCl7Y2FzZSAwOnJldHVybihpPXRoaXMuc3RhdGUsZT1pLmlzQXV0b1BsYXlpbmcsaT1pLmlzQXV0b1BsYXlDYW5jZWxlZE9uQWN0aW9uLG49dGhpcy5wcm9wcyxvPW4uYXV0b1BsYXlTdHJhdGVneSxuPW4ub25TbGlkZUNoYW5nZWQsVXRpbHMuc2hvdWxkQ2FuY2VsQXV0b1BsYXlPbkFjdGlvbihvKSYmdGhpcy5oYXNVc2VyQWN0aW9uJiYhaSk/WzQsdGhpcy5zZXRTdGF0ZSh7aXNBdXRvUGxheUNhbmNlbGVkT25BY3Rpb246ITAsaXNBdXRvUGxheWluZzohMX0pXTpbMywyXTtjYXNlIDE6cmV0dXJuIHQuc2VudCgpLFszLDNdO2Nhc2UgMjplJiZ0aGlzLl9oYW5kbGVQbGF5KCksdC5sYWJlbD0zO2Nhc2UgMzpyZXR1cm4gdGhpcy5pc0FuaW1hdGlvbkRpc2FibGVkPSExLG4mJihvPXM/X19hc3NpZ24oX19hc3NpZ24oe30sdGhpcy5ldmVudE9iamVjdCkse3R5cGU6c30pOnRoaXMuZXZlbnRPYmplY3QsbihvKSksWzJdfX0pfSl9LHQucHJvdG90eXBlLl9oYW5kbGVEb3RDbGljaz1mdW5jdGlvbih0KXt0aGlzLmhhc1VzZXJBY3Rpb249ITAsdGhpcy5zbGlkZVRvKHQpfSx0LnByb3RvdHlwZS5faGFuZGxlUGxheT1mdW5jdGlvbigpe3RoaXMuX3NldEF1dG9QbGF5SW50ZXJ2YWwoKX0sdC5wcm90b3R5cGUuX2NhbmNlbFRpbWVvdXRBbmltYXRpb25zPWZ1bmN0aW9uKCl7dGhpcy5fY2xlYXJBdXRvUGxheVRpbWVvdXQoKSx0aGlzLl9jbGVhclNsaWRlRW5kVGltZW91dCgpLHRoaXMuY2xlYXJUb3VjaGVuZFRpbWVvdXQoKX0sdC5wcm90b3R5cGUuX2NsZWFyQXV0b1BsYXlUaW1lb3V0PWZ1bmN0aW9uKCl7d2luZG93LmNsZWFyVGltZW91dCh0aGlzLmF1dG9QbGF5VGltZW91dElkKSx0aGlzLmF1dG9QbGF5VGltZW91dElkPXZvaWQgMH0sdC5wcm90b3R5cGUuX2NsZWFyU2xpZGVFbmRUaW1lb3V0PWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHRoaXMuc2xpZGVFbmRUaW1lb3V0SWQpLHRoaXMuc2xpZGVFbmRUaW1lb3V0SWQ9dm9pZCAwfSx0LnByb3RvdHlwZS5jbGVhclRvdWNoZW5kVGltZW91dD1mdW5jdGlvbigpe2NsZWFyVGltZW91dCh0aGlzLnRvdWNoRW5kVGltZW91dElkKSx0aGlzLnRvdWNoRW5kVGltZW91dElkPXZvaWQgMH0sdC5wcm90b3R5cGUuX2NsZWFyVG91Y2htb3ZlUG9zaXRpb249ZnVuY3Rpb24oKXt0aGlzLnN0YXJ0VG91Y2htb3ZlUG9zaXRpb249dm9pZCAwfSx0LnByb3RvdHlwZS5fc2V0VG91Y2htb3ZlUG9zaXRpb249ZnVuY3Rpb24oKXt2YXIgdD1VdGlscy5nZXRUcmFuc2xhdGVYUHJvcGVydHkodGhpcy5zdGFnZUNvbXBvbmVudCk7dGhpcy5zdGFydFRvdWNobW92ZVBvc2l0aW9uPS10fSx0LnByb3RvdHlwZS5fc2V0SW5pdGlhbFN0YXRlPWZ1bmN0aW9uKCl7cmV0dXJuIF9fYXdhaXRlcih0aGlzLHZvaWQgMCx2b2lkIDAsZnVuY3Rpb24oKXt2YXIgZTtyZXR1cm4gX19nZW5lcmF0b3IodGhpcyxmdW5jdGlvbih0KXtzd2l0Y2godC5sYWJlbCl7Y2FzZSAwOnJldHVybiBlPVV0aWxzLmNhbGN1bGF0ZUluaXRpYWxTdGF0ZSh0aGlzLnByb3BzLHRoaXMuc3RhZ2VDb21wb25lbnQpLHRoaXMucm9vdENvbXBvbmVudERpbWVuc2lvbnM9VXRpbHMuZ2V0RWxlbWVudERpbWVuc2lvbnModGhpcy5yb290RWxlbWVudCksWzQsdGhpcy5zZXRTdGF0ZShlKV07Y2FzZSAxOnJldHVybiB0LnNlbnQoKSx0aGlzLnByb3BzLm9uSW5pdGlhbGl6ZWQmJnRoaXMucHJvcHMub25Jbml0aWFsaXplZChfX2Fzc2lnbihfX2Fzc2lnbih7fSx0aGlzLmV2ZW50T2JqZWN0KSx7dHlwZTp0eXBlc18xLkV2ZW50VHlwZS5JTklUfSkpLFsyXX19KX0pfSx0LnByb3RvdHlwZS5fc2V0QXV0b1BsYXlJbnRlcnZhbD1mdW5jdGlvbigpe3ZhciB0PXRoaXMsZT10aGlzLnByb3BzLGk9ZS5hdXRvUGxheURpcmVjdGlvbixlPWUuYXV0b1BsYXlJbnRlcnZhbDt0aGlzLmF1dG9QbGF5VGltZW91dElkPXdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dC5pc0hvdmVyZWR8fChpPT09dHlwZXNfMS5BdXRvcGxheURpcmVjdGlvbi5SVEw/dC5zbGlkZVByZXYoKTp0LnNsaWRlTmV4dCgpKX0sZSl9LHQucHJvdG90eXBlLl9zZXR1cFN3aXBlSGFuZGxlcnM9ZnVuY3Rpb24oKXt0aGlzLnN3aXBlTGlzdGVuZXI9bmV3IHZhbmlsbGFfc3dpcGVfMS5kZWZhdWx0KHtlbGVtZW50OnRoaXMucm9vdEVsZW1lbnQsZGVsdGE6dGhpcy5wcm9wcy5zd2lwZURlbHRhLG9uU3dpcGluZzp0aGlzLl9oYW5kbGVUb3VjaG1vdmUsb25Td2lwZWQ6dGhpcy5faGFuZGxlVG91Y2hlbmQscm90YXRpb25BbmdsZTo1LG1vdXNlVHJhY2tpbmdFbmFibGVkOnRoaXMucHJvcHMubW91c2VUcmFja2luZyx0b3VjaFRyYWNraW5nRW5hYmxlZDp0aGlzLnByb3BzLnRvdWNoVHJhY2tpbmcscHJldmVudERlZmF1bHRUb3VjaG1vdmVFdmVudDohdGhpcy5wcm9wcy50b3VjaE1vdmVEZWZhdWx0RXZlbnRzLHByZXZlbnRUcmFja2luZ09uTW91c2VsZWF2ZTohMH0pLHRoaXMuc3dpcGVMaXN0ZW5lci5pbml0KCl9LHQucHJvdG90eXBlLl91cGRhdGVDb21wb25lbnQ9ZnVuY3Rpb24odCl7dmFyIGU9dGhpczt2b2lkIDA9PT10JiYodD10aGlzLnByb3BzKSx0aGlzLl9jYW5jZWxUaW1lb3V0QW5pbWF0aW9ucygpLHRoaXMuaXNBbmltYXRpb25EaXNhYmxlZD0hMSx0aGlzLnN0YXRlLmlzQXV0b1BsYXlpbmcmJnRoaXMuX2hhbmRsZVBsYXkoKSx0aGlzLnNldFN0YXRlKHtjbG9uZXM6VXRpbHMuY3JlYXRlQ2xvbmVzKHQpfSkscmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7ZS5zZXRTdGF0ZShVdGlscy5jYWxjdWxhdGVJbml0aWFsU3RhdGUodCxlLnN0YWdlQ29tcG9uZW50KSl9KX0sdC5wcm90b3R5cGUuX3VwZGF0ZVN3aXBlUHJvcHM9ZnVuY3Rpb24oKXt0aGlzLnN3aXBlTGlzdGVuZXImJnRoaXMuc3dpcGVMaXN0ZW5lci51cGRhdGUoe2RlbHRhOnRoaXMucHJvcHMuc3dpcGVEZWx0YSxtb3VzZVRyYWNraW5nRW5hYmxlZDp0aGlzLnByb3BzLm1vdXNlVHJhY2tpbmcsdG91Y2hUcmFja2luZ0VuYWJsZWQ6dGhpcy5wcm9wcy50b3VjaFRyYWNraW5nLHByZXZlbnREZWZhdWx0VG91Y2htb3ZlRXZlbnQ6IXRoaXMucHJvcHMudG91Y2hNb3ZlRGVmYXVsdEV2ZW50c30pfSx0LnByb3RvdHlwZS5fcmVuZGVyRG90c05hdmlnYXRpb249ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnByb3BzLGU9dC5yZW5kZXJEb3RzSXRlbSx0PXQuY29udHJvbHNTdHJhdGVneTtyZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVmlld3MuRG90c05hdmlnYXRpb24se3N0YXRlOnRoaXMuc3RhdGUsb25DbGljazp0aGlzLl9oYW5kbGVEb3RDbGljayxyZW5kZXJEb3RzSXRlbTplLGNvbnRyb2xzU3RyYXRlZ3k6dH0pfSx0LnByb3RvdHlwZS5fcmVuZGVyUHJldkJ1dHRvbj1mdW5jdGlvbigpe3ZhciB0PXRoaXMucHJvcHMucmVuZGVyUHJldkJ1dHRvbixlPVV0aWxzLmdldFNsaWRlSXRlbUluZm8odGhpcy5zdGF0ZSkuaXNQcmV2U2xpZGVEaXNhYmxlZDtyZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVmlld3MuUHJldk5leHRCdXR0b24se25hbWU6XCJwcmV2XCIsb25DbGljazp0aGlzLnNsaWRlUHJldixpc0Rpc2FibGVkOmUscmVuZGVyUHJldkJ1dHRvbjp0fSl9LHQucHJvdG90eXBlLl9yZW5kZXJOZXh0QnV0dG9uPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5wcm9wcy5yZW5kZXJOZXh0QnV0dG9uLGU9VXRpbHMuZ2V0U2xpZGVJdGVtSW5mbyh0aGlzLnN0YXRlKS5pc05leHRTbGlkZURpc2FibGVkO3JldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChWaWV3cy5QcmV2TmV4dEJ1dHRvbix7bmFtZTpcIm5leHRcIixvbkNsaWNrOnRoaXMuc2xpZGVOZXh0LGlzRGlzYWJsZWQ6ZSxyZW5kZXJOZXh0QnV0dG9uOnR9KX0sdC5wcm90b3R5cGUuX3JlbmRlclBsYXlQYXVzZUJ1dHRvbj1mdW5jdGlvbigpe3ZhciB0PXRoaXMucHJvcHMucmVuZGVyUGxheVBhdXNlQnV0dG9uLGU9dGhpcy5zdGF0ZS5pc0F1dG9QbGF5aW5nO3JldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChWaWV3cy5QbGF5UGF1c2VCdXR0b24se2lzUGxheWluZzplLG9uQ2xpY2s6dGhpcy5faGFuZGxlUGxheVBhdXNlVG9nZ2xlLHJlbmRlclBsYXlQYXVzZUJ1dHRvbjp0fSl9LHQucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbigpe3ZhciB0PXRoaXMuc3RhdGUsZT10LnRyYW5zbGF0ZTNkLGk9dC5jbG9uZXMsbj10LnRyYW5zaXRpb24sdD10LmNhblVzZURvbSxvPVV0aWxzLnNob3VsZERpc2FibGVEb3RzKHRoaXMucHJvcHMsdGhpcy5zdGF0ZSkscz1VdGlscy5zaG91bGREaXNhYmxlQnV0dG9ucyh0aGlzLnByb3BzLHRoaXMuc3RhdGUpLGE9VXRpbHMuZ2V0UmVuZGVyV3JhcHBlclN0eWxlcyh0aGlzLnByb3BzLHRoaXMuc3RhdGUsdGhpcy5zdGFnZUNvbXBvbmVudCksZT1VdGlscy5nZXRSZW5kZXJTdGFnZVN0eWxlcyh7dHJhbnNsYXRlM2Q6ZX0se3RyYW5zaXRpb246bn0pLG49dGhpcy5wcm9wcy5zc3JTaWxlbnRNb2RlfHx0P1wiXCI6dHlwZXNfMS5Nb2RpZmllcnMuU1NSLHQ9VXRpbHMuY29uY2F0Q2xhc3NuYW1lcyh0eXBlc18xLkNsYXNzbmFtZXMuUk9PVCxuKTtyZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOnR9LHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3JlZjp0aGlzLl9zZXRSb290Q29tcG9uZW50UmVmfSxyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTphLGNsYXNzTmFtZTp0eXBlc18xLkNsYXNzbmFtZXMuV1JBUFBFUixvbk1vdXNlRW50ZXI6dGhpcy5faGFuZGxlTW91c2VFbnRlcixvbk1vdXNlTGVhdmU6dGhpcy5faGFuZGxlTW91c2VMZWF2ZX0scmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLHtzdHlsZTplLGNsYXNzTmFtZTp0eXBlc18xLkNsYXNzbmFtZXMuU1RBR0UscmVmOnRoaXMuX3NldFN0YWdlQ29tcG9uZW50UmVmfSxpLm1hcCh0aGlzLl9yZW5kZXJTdGFnZUl0ZW0pKSkpLG8/bnVsbDp0aGlzLl9yZW5kZXJEb3RzTmF2aWdhdGlvbigpLHM/bnVsbDp0aGlzLl9yZW5kZXJQcmV2QnV0dG9uKCkscz9udWxsOnRoaXMuX3JlbmRlck5leHRCdXR0b24oKSx0aGlzLnByb3BzLmRpc2FibGVTbGlkZUluZm8/bnVsbDp0aGlzLl9yZW5kZXJTbGlkZUluZm8oKSx0aGlzLnByb3BzLmF1dG9QbGF5Q29udHJvbHM/dGhpcy5fcmVuZGVyUGxheVBhdXNlQnV0dG9uKCk6bnVsbCl9LHQuZGVmYXVsdFByb3BzPWRlZmF1bHRQcm9wc18xLmRlZmF1bHRQcm9wcyx0fShyZWFjdF8xLmRlZmF1bHQuUHVyZUNvbXBvbmVudCkpO2V4cG9ydHMuZGVmYXVsdD1BbGljZUNhcm91c2VsOyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxubGV0IGdldFJhbmRvbVZhbHVlcztcbmNvbnN0IHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pOyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG5jb25zdCBieXRlVG9IZXggPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG5cbmZ1bmN0aW9uIHBhcnNlKHV1aWQpIHtcbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignSW52YWxpZCBVVUlEJyk7XG4gIH1cblxuICBsZXQgdjtcbiAgY29uc3QgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMTYpOyAvLyBQYXJzZSAjIyMjIyMjIy0uLi4uLS4uLi4tLi4uLi0uLi4uLi4uLi4uLi5cblxuICBhcnJbMF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMCwgOCksIDE2KSkgPj4+IDI0O1xuICBhcnJbMV0gPSB2ID4+PiAxNiAmIDB4ZmY7XG4gIGFyclsyXSA9IHYgPj4+IDggJiAweGZmO1xuICBhcnJbM10gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tIyMjIy0uLi4uLS4uLi4tLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzRdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDksIDEzKSwgMTYpKSA+Pj4gODtcbiAgYXJyWzVdID0gdiAmIDB4ZmY7IC8vIFBhcnNlIC4uLi4uLi4uLS4uLi4tIyMjIy0uLi4uLS4uLi4uLi4uLi4uLlxuXG4gIGFycls2XSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgxNCwgMTgpLCAxNikpID4+PiA4O1xuICBhcnJbN10gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tLi4uLi0uLi4uLSMjIyMtLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzhdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDE5LCAyMyksIDE2KSkgPj4+IDg7XG4gIGFycls5XSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0uLi4uLS4uLi4tLi4uLi0jIyMjIyMjIyMjIyNcbiAgLy8gKFVzZSBcIi9cIiB0byBhdm9pZCAzMi1iaXQgdHJ1bmNhdGlvbiB3aGVuIGJpdC1zaGlmdGluZyBoaWdoLW9yZGVyIGJ5dGVzKVxuXG4gIGFyclsxMF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMjQsIDM2KSwgMTYpKSAvIDB4MTAwMDAwMDAwMDAgJiAweGZmO1xuICBhcnJbMTFdID0gdiAvIDB4MTAwMDAwMDAwICYgMHhmZjtcbiAgYXJyWzEyXSA9IHYgPj4+IDI0ICYgMHhmZjtcbiAgYXJyWzEzXSA9IHYgPj4+IDE2ICYgMHhmZjtcbiAgYXJyWzE0XSA9IHYgPj4+IDggJiAweGZmO1xuICBhcnJbMTVdID0gdiAmIDB4ZmY7XG4gIHJldHVybiBhcnI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhcnNlOyIsImltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcbmltcG9ydCBwYXJzZSBmcm9tICcuL3BhcnNlLmpzJztcblxuZnVuY3Rpb24gc3RyaW5nVG9CeXRlcyhzdHIpIHtcbiAgc3RyID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikpOyAvLyBVVEY4IGVzY2FwZVxuXG4gIGNvbnN0IGJ5dGVzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBieXRlcy5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpKTtcbiAgfVxuXG4gIHJldHVybiBieXRlcztcbn1cblxuZXhwb3J0IGNvbnN0IEROUyA9ICc2YmE3YjgxMC05ZGFkLTExZDEtODBiNC0wMGMwNGZkNDMwYzgnO1xuZXhwb3J0IGNvbnN0IFVSTCA9ICc2YmE3YjgxMS05ZGFkLTExZDEtODBiNC0wMGMwNGZkNDMwYzgnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdjM1KG5hbWUsIHZlcnNpb24sIGhhc2hmdW5jKSB7XG4gIGZ1bmN0aW9uIGdlbmVyYXRlVVVJRCh2YWx1ZSwgbmFtZXNwYWNlLCBidWYsIG9mZnNldCkge1xuICAgIHZhciBfbmFtZXNwYWNlO1xuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlID0gc3RyaW5nVG9CeXRlcyh2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBuYW1lc3BhY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICBuYW1lc3BhY2UgPSBwYXJzZShuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIGlmICgoKF9uYW1lc3BhY2UgPSBuYW1lc3BhY2UpID09PSBudWxsIHx8IF9uYW1lc3BhY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9uYW1lc3BhY2UubGVuZ3RoKSAhPT0gMTYpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcignTmFtZXNwYWNlIG11c3QgYmUgYXJyYXktbGlrZSAoMTYgaXRlcmFibGUgaW50ZWdlciB2YWx1ZXMsIDAtMjU1KScpO1xuICAgIH0gLy8gQ29tcHV0ZSBoYXNoIG9mIG5hbWVzcGFjZSBhbmQgdmFsdWUsIFBlciA0LjNcbiAgICAvLyBGdXR1cmU6IFVzZSBzcHJlYWQgc3ludGF4IHdoZW4gc3VwcG9ydGVkIG9uIGFsbCBwbGF0Zm9ybXMsIGUuZy4gYGJ5dGVzID1cbiAgICAvLyBoYXNoZnVuYyhbLi4ubmFtZXNwYWNlLCAuLi4gdmFsdWVdKWBcblxuXG4gICAgbGV0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoMTYgKyB2YWx1ZS5sZW5ndGgpO1xuICAgIGJ5dGVzLnNldChuYW1lc3BhY2UpO1xuICAgIGJ5dGVzLnNldCh2YWx1ZSwgbmFtZXNwYWNlLmxlbmd0aCk7XG4gICAgYnl0ZXMgPSBoYXNoZnVuYyhieXRlcyk7XG4gICAgYnl0ZXNbNl0gPSBieXRlc1s2XSAmIDB4MGYgfCB2ZXJzaW9uO1xuICAgIGJ5dGVzWzhdID0gYnl0ZXNbOF0gJiAweDNmIHwgMHg4MDtcblxuICAgIGlmIChidWYpIHtcbiAgICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgICAgYnVmW29mZnNldCArIGldID0gYnl0ZXNbaV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBidWY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShieXRlcyk7XG4gIH0gLy8gRnVuY3Rpb24jbmFtZSBpcyBub3Qgc2V0dGFibGUgb24gc29tZSBwbGF0Zm9ybXMgKCMyNzApXG5cblxuICB0cnkge1xuICAgIGdlbmVyYXRlVVVJRC5uYW1lID0gbmFtZTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XG4gIH0gY2F0Y2ggKGVycikge30gLy8gRm9yIENvbW1vbkpTIGRlZmF1bHQgZXhwb3J0IHN1cHBvcnRcblxuXG4gIGdlbmVyYXRlVVVJRC5ETlMgPSBETlM7XG4gIGdlbmVyYXRlVVVJRC5VUkwgPSBVUkw7XG4gIHJldHVybiBnZW5lcmF0ZVVVSUQ7XG59IiwiLypcbiAqIEJyb3dzZXItY29tcGF0aWJsZSBKYXZhU2NyaXB0IE1ENVxuICpcbiAqIE1vZGlmaWNhdGlvbiBvZiBKYXZhU2NyaXB0IE1ENVxuICogaHR0cHM6Ly9naXRodWIuY29tL2JsdWVpbXAvSmF2YVNjcmlwdC1NRDVcbiAqXG4gKiBDb3B5cmlnaHQgMjAxMSwgU2ViYXN0aWFuIFRzY2hhblxuICogaHR0cHM6Ly9ibHVlaW1wLm5ldFxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKlxuICogQmFzZWQgb25cbiAqIEEgSmF2YVNjcmlwdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgUlNBIERhdGEgU2VjdXJpdHksIEluYy4gTUQ1IE1lc3NhZ2VcbiAqIERpZ2VzdCBBbGdvcml0aG0sIGFzIGRlZmluZWQgaW4gUkZDIDEzMjEuXG4gKiBWZXJzaW9uIDIuMiBDb3B5cmlnaHQgKEMpIFBhdWwgSm9obnN0b24gMTk5OSAtIDIwMDlcbiAqIE90aGVyIGNvbnRyaWJ1dG9yczogR3JlZyBIb2x0LCBBbmRyZXcgS2VwZXJ0LCBZZG5hciwgTG9zdGluZXRcbiAqIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSBCU0QgTGljZW5zZVxuICogU2VlIGh0dHA6Ly9wYWpob21lLm9yZy51ay9jcnlwdC9tZDUgZm9yIG1vcmUgaW5mby5cbiAqL1xuZnVuY3Rpb24gbWQ1KGJ5dGVzKSB7XG4gIGlmICh0eXBlb2YgYnl0ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgbXNnID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGJ5dGVzKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgICBieXRlcyA9IG5ldyBVaW50OEFycmF5KG1zZy5sZW5ndGgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyArK2kpIHtcbiAgICAgIGJ5dGVzW2ldID0gbXNnLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1kNVRvSGV4RW5jb2RlZEFycmF5KHdvcmRzVG9NZDUoYnl0ZXNUb1dvcmRzKGJ5dGVzKSwgYnl0ZXMubGVuZ3RoICogOCkpO1xufVxuLypcbiAqIENvbnZlcnQgYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3JkcyB0byBhbiBhcnJheSBvZiBieXRlc1xuICovXG5cblxuZnVuY3Rpb24gbWQ1VG9IZXhFbmNvZGVkQXJyYXkoaW5wdXQpIHtcbiAgY29uc3Qgb3V0cHV0ID0gW107XG4gIGNvbnN0IGxlbmd0aDMyID0gaW5wdXQubGVuZ3RoICogMzI7XG4gIGNvbnN0IGhleFRhYiA9ICcwMTIzNDU2Nzg5YWJjZGVmJztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDMyOyBpICs9IDgpIHtcbiAgICBjb25zdCB4ID0gaW5wdXRbaSA+PiA1XSA+Pj4gaSAlIDMyICYgMHhmZjtcbiAgICBjb25zdCBoZXggPSBwYXJzZUludChoZXhUYWIuY2hhckF0KHggPj4+IDQgJiAweDBmKSArIGhleFRhYi5jaGFyQXQoeCAmIDB4MGYpLCAxNik7XG4gICAgb3V0cHV0LnB1c2goaGV4KTtcbiAgfVxuXG4gIHJldHVybiBvdXRwdXQ7XG59XG4vKipcbiAqIENhbGN1bGF0ZSBvdXRwdXQgbGVuZ3RoIHdpdGggcGFkZGluZyBhbmQgYml0IGxlbmd0aFxuICovXG5cblxuZnVuY3Rpb24gZ2V0T3V0cHV0TGVuZ3RoKGlucHV0TGVuZ3RoOCkge1xuICByZXR1cm4gKGlucHV0TGVuZ3RoOCArIDY0ID4+PiA5IDw8IDQpICsgMTQgKyAxO1xufVxuLypcbiAqIENhbGN1bGF0ZSB0aGUgTUQ1IG9mIGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHMsIGFuZCBhIGJpdCBsZW5ndGguXG4gKi9cblxuXG5mdW5jdGlvbiB3b3Jkc1RvTWQ1KHgsIGxlbikge1xuICAvKiBhcHBlbmQgcGFkZGluZyAqL1xuICB4W2xlbiA+PiA1XSB8PSAweDgwIDw8IGxlbiAlIDMyO1xuICB4W2dldE91dHB1dExlbmd0aChsZW4pIC0gMV0gPSBsZW47XG4gIGxldCBhID0gMTczMjU4NDE5MztcbiAgbGV0IGIgPSAtMjcxNzMzODc5O1xuICBsZXQgYyA9IC0xNzMyNTg0MTk0O1xuICBsZXQgZCA9IDI3MTczMzg3ODtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHgubGVuZ3RoOyBpICs9IDE2KSB7XG4gICAgY29uc3Qgb2xkYSA9IGE7XG4gICAgY29uc3Qgb2xkYiA9IGI7XG4gICAgY29uc3Qgb2xkYyA9IGM7XG4gICAgY29uc3Qgb2xkZCA9IGQ7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaV0sIDcsIC02ODA4NzY5MzYpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyAxXSwgMTIsIC0zODk1NjQ1ODYpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAyXSwgMTcsIDYwNjEwNTgxOSk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDNdLCAyMiwgLTEwNDQ1MjUzMzApO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyA0XSwgNywgLTE3NjQxODg5Nyk7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDVdLCAxMiwgMTIwMDA4MDQyNik7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDZdLCAxNywgLTE0NzMyMzEzNDEpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyA3XSwgMjIsIC00NTcwNTk4Myk7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDhdLCA3LCAxNzcwMDM1NDE2KTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgOV0sIDEyLCAtMTk1ODQxNDQxNyk7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDEwXSwgMTcsIC00MjA2Myk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDExXSwgMjIsIC0xOTkwNDA0MTYyKTtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgMTJdLCA3LCAxODA0NjAzNjgyKTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgMTNdLCAxMiwgLTQwMzQxMTAxKTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMTRdLCAxNywgLTE1MDIwMDIyOTApO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAxNV0sIDIyLCAxMjM2NTM1MzI5KTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgMV0sIDUsIC0xNjU3OTY1MTApO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyA2XSwgOSwgLTEwNjk1MDE2MzIpO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAxMV0sIDE0LCA2NDM3MTc3MTMpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2ldLCAyMCwgLTM3Mzg5NzMwMik7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDVdLCA1LCAtNzAxNTU4NjkxKTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMTBdLCA5LCAzODAxNjA4Myk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDE1XSwgMTQsIC02NjA0NzgzMzUpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyA0XSwgMjAsIC00MDU1Mzc4NDgpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyA5XSwgNSwgNTY4NDQ2NDM4KTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMTRdLCA5LCAtMTAxOTgwMzY5MCk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDNdLCAxNCwgLTE4NzM2Mzk2MSk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDhdLCAyMCwgMTE2MzUzMTUwMSk7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDEzXSwgNSwgLTE0NDQ2ODE0NjcpO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAyXSwgOSwgLTUxNDAzNzg0KTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgN10sIDE0LCAxNzM1MzI4NDczKTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgMTJdLCAyMCwgLTE5MjY2MDc3MzQpO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyA1XSwgNCwgLTM3ODU1OCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDhdLCAxMSwgLTIwMjI1NzQ0NjMpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAxMV0sIDE2LCAxODM5MDMwNTYyKTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMTRdLCAyMywgLTM1MzA5NTU2KTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgMV0sIDQsIC0xNTMwOTkyMDYwKTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgNF0sIDExLCAxMjcyODkzMzUzKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgN10sIDE2LCAtMTU1NDk3NjMyKTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMTBdLCAyMywgLTEwOTQ3MzA2NDApO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyAxM10sIDQsIDY4MTI3OTE3NCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaV0sIDExLCAtMzU4NTM3MjIyKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgM10sIDE2LCAtNzIyNTIxOTc5KTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgNl0sIDIzLCA3NjAyOTE4OSk7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDldLCA0LCAtNjQwMzY0NDg3KTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgMTJdLCAxMSwgLTQyMTgxNTgzNSk7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDE1XSwgMTYsIDUzMDc0MjUyMCk7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDJdLCAyMywgLTk5NTMzODY1MSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaV0sIDYsIC0xOTg2MzA4NDQpO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyA3XSwgMTAsIDExMjY4OTE0MTUpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAxNF0sIDE1LCAtMTQxNjM1NDkwNSk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDVdLCAyMSwgLTU3NDM0MDU1KTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgMTJdLCA2LCAxNzAwNDg1NTcxKTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgM10sIDEwLCAtMTg5NDk4NjYwNik7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDEwXSwgMTUsIC0xMDUxNTIzKTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgMV0sIDIxLCAtMjA1NDkyMjc5OSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDhdLCA2LCAxODczMzEzMzU5KTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgMTVdLCAxMCwgLTMwNjExNzQ0KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgNl0sIDE1LCAtMTU2MDE5ODM4MCk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDEzXSwgMjEsIDEzMDkxNTE2NDkpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyA0XSwgNiwgLTE0NTUyMzA3MCk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDExXSwgMTAsIC0xMTIwMjEwMzc5KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMl0sIDE1LCA3MTg3ODcyNTkpO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyA5XSwgMjEsIC0zNDM0ODU1NTEpO1xuICAgIGEgPSBzYWZlQWRkKGEsIG9sZGEpO1xuICAgIGIgPSBzYWZlQWRkKGIsIG9sZGIpO1xuICAgIGMgPSBzYWZlQWRkKGMsIG9sZGMpO1xuICAgIGQgPSBzYWZlQWRkKGQsIG9sZGQpO1xuICB9XG5cbiAgcmV0dXJuIFthLCBiLCBjLCBkXTtcbn1cbi8qXG4gKiBDb252ZXJ0IGFuIGFycmF5IGJ5dGVzIHRvIGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHNcbiAqIENoYXJhY3RlcnMgPjI1NSBoYXZlIHRoZWlyIGhpZ2gtYnl0ZSBzaWxlbnRseSBpZ25vcmVkLlxuICovXG5cblxuZnVuY3Rpb24gYnl0ZXNUb1dvcmRzKGlucHV0KSB7XG4gIGlmIChpbnB1dC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBjb25zdCBsZW5ndGg4ID0gaW5wdXQubGVuZ3RoICogODtcbiAgY29uc3Qgb3V0cHV0ID0gbmV3IFVpbnQzMkFycmF5KGdldE91dHB1dExlbmd0aChsZW5ndGg4KSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg4OyBpICs9IDgpIHtcbiAgICBvdXRwdXRbaSA+PiA1XSB8PSAoaW5wdXRbaSAvIDhdICYgMHhmZikgPDwgaSAlIDMyO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cbi8qXG4gKiBBZGQgaW50ZWdlcnMsIHdyYXBwaW5nIGF0IDJeMzIuIFRoaXMgdXNlcyAxNi1iaXQgb3BlcmF0aW9ucyBpbnRlcm5hbGx5XG4gKiB0byB3b3JrIGFyb3VuZCBidWdzIGluIHNvbWUgSlMgaW50ZXJwcmV0ZXJzLlxuICovXG5cblxuZnVuY3Rpb24gc2FmZUFkZCh4LCB5KSB7XG4gIGNvbnN0IGxzdyA9ICh4ICYgMHhmZmZmKSArICh5ICYgMHhmZmZmKTtcbiAgY29uc3QgbXN3ID0gKHggPj4gMTYpICsgKHkgPj4gMTYpICsgKGxzdyA+PiAxNik7XG4gIHJldHVybiBtc3cgPDwgMTYgfCBsc3cgJiAweGZmZmY7XG59XG4vKlxuICogQml0d2lzZSByb3RhdGUgYSAzMi1iaXQgbnVtYmVyIHRvIHRoZSBsZWZ0LlxuICovXG5cblxuZnVuY3Rpb24gYml0Um90YXRlTGVmdChudW0sIGNudCkge1xuICByZXR1cm4gbnVtIDw8IGNudCB8IG51bSA+Pj4gMzIgLSBjbnQ7XG59XG4vKlxuICogVGhlc2UgZnVuY3Rpb25zIGltcGxlbWVudCB0aGUgZm91ciBiYXNpYyBvcGVyYXRpb25zIHRoZSBhbGdvcml0aG0gdXNlcy5cbiAqL1xuXG5cbmZ1bmN0aW9uIG1kNWNtbihxLCBhLCBiLCB4LCBzLCB0KSB7XG4gIHJldHVybiBzYWZlQWRkKGJpdFJvdGF0ZUxlZnQoc2FmZUFkZChzYWZlQWRkKGEsIHEpLCBzYWZlQWRkKHgsIHQpKSwgcyksIGIpO1xufVxuXG5mdW5jdGlvbiBtZDVmZihhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiAmIGMgfCB+YiAmIGQsIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBtZDVnZyhhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiAmIGQgfCBjICYgfmQsIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBtZDVoaChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiBeIGMgXiBkLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZnVuY3Rpb24gbWQ1aWkoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGMgXiAoYiB8IH5kKSwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1kNTsiLCJpbXBvcnQgdjM1IGZyb20gJy4vdjM1LmpzJztcbmltcG9ydCBtZDUgZnJvbSAnLi9tZDUuanMnO1xuY29uc3QgdjMgPSB2MzUoJ3YzJywgMHgzMCwgbWQ1KTtcbmV4cG9ydCBkZWZhdWx0IHYzOyIsImNvbnN0IHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG5leHBvcnQgZGVmYXVsdCB7XG4gIHJhbmRvbVVVSURcbn07IiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgaWYgKG5hdGl2ZS5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmF0aXZlLnJhbmRvbVVVSUQoKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiLy8gQWRhcHRlZCBmcm9tIENocmlzIFZlbmVzcycgU0hBMSBjb2RlIGF0XG4vLyBodHRwOi8vd3d3Lm1vdmFibGUtdHlwZS5jby51ay9zY3JpcHRzL3NoYTEuaHRtbFxuZnVuY3Rpb24gZihzLCB4LCB5LCB6KSB7XG4gIHN3aXRjaCAocykge1xuICAgIGNhc2UgMDpcbiAgICAgIHJldHVybiB4ICYgeSBeIH54ICYgejtcblxuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiB4IF4geSBeIHo7XG5cbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4geCAmIHkgXiB4ICYgeiBeIHkgJiB6O1xuXG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIHggXiB5IF4gejtcbiAgfVxufVxuXG5mdW5jdGlvbiBST1RMKHgsIG4pIHtcbiAgcmV0dXJuIHggPDwgbiB8IHggPj4+IDMyIC0gbjtcbn1cblxuZnVuY3Rpb24gc2hhMShieXRlcykge1xuICBjb25zdCBLID0gWzB4NWE4Mjc5OTksIDB4NmVkOWViYTEsIDB4OGYxYmJjZGMsIDB4Y2E2MmMxZDZdO1xuICBjb25zdCBIID0gWzB4Njc0NTIzMDEsIDB4ZWZjZGFiODksIDB4OThiYWRjZmUsIDB4MTAzMjU0NzYsIDB4YzNkMmUxZjBdO1xuXG4gIGlmICh0eXBlb2YgYnl0ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgbXNnID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGJ5dGVzKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgICBieXRlcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyArK2kpIHtcbiAgICAgIGJ5dGVzLnB1c2gobXNnLmNoYXJDb2RlQXQoaSkpO1xuICAgIH1cbiAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheShieXRlcykpIHtcbiAgICAvLyBDb252ZXJ0IEFycmF5LWxpa2UgdG8gQXJyYXlcbiAgICBieXRlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGJ5dGVzKTtcbiAgfVxuXG4gIGJ5dGVzLnB1c2goMHg4MCk7XG4gIGNvbnN0IGwgPSBieXRlcy5sZW5ndGggLyA0ICsgMjtcbiAgY29uc3QgTiA9IE1hdGguY2VpbChsIC8gMTYpO1xuICBjb25zdCBNID0gbmV3IEFycmF5KE4pO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgTjsgKytpKSB7XG4gICAgY29uc3QgYXJyID0gbmV3IFVpbnQzMkFycmF5KDE2KTtcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTY7ICsraikge1xuICAgICAgYXJyW2pdID0gYnl0ZXNbaSAqIDY0ICsgaiAqIDRdIDw8IDI0IHwgYnl0ZXNbaSAqIDY0ICsgaiAqIDQgKyAxXSA8PCAxNiB8IGJ5dGVzW2kgKiA2NCArIGogKiA0ICsgMl0gPDwgOCB8IGJ5dGVzW2kgKiA2NCArIGogKiA0ICsgM107XG4gICAgfVxuXG4gICAgTVtpXSA9IGFycjtcbiAgfVxuXG4gIE1bTiAtIDFdWzE0XSA9IChieXRlcy5sZW5ndGggLSAxKSAqIDggLyBNYXRoLnBvdygyLCAzMik7XG4gIE1bTiAtIDFdWzE0XSA9IE1hdGguZmxvb3IoTVtOIC0gMV1bMTRdKTtcbiAgTVtOIC0gMV1bMTVdID0gKGJ5dGVzLmxlbmd0aCAtIDEpICogOCAmIDB4ZmZmZmZmZmY7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBOOyArK2kpIHtcbiAgICBjb25zdCBXID0gbmV3IFVpbnQzMkFycmF5KDgwKTtcblxuICAgIGZvciAobGV0IHQgPSAwOyB0IDwgMTY7ICsrdCkge1xuICAgICAgV1t0XSA9IE1baV1bdF07XG4gICAgfVxuXG4gICAgZm9yIChsZXQgdCA9IDE2OyB0IDwgODA7ICsrdCkge1xuICAgICAgV1t0XSA9IFJPVEwoV1t0IC0gM10gXiBXW3QgLSA4XSBeIFdbdCAtIDE0XSBeIFdbdCAtIDE2XSwgMSk7XG4gICAgfVxuXG4gICAgbGV0IGEgPSBIWzBdO1xuICAgIGxldCBiID0gSFsxXTtcbiAgICBsZXQgYyA9IEhbMl07XG4gICAgbGV0IGQgPSBIWzNdO1xuICAgIGxldCBlID0gSFs0XTtcblxuICAgIGZvciAobGV0IHQgPSAwOyB0IDwgODA7ICsrdCkge1xuICAgICAgY29uc3QgcyA9IE1hdGguZmxvb3IodCAvIDIwKTtcbiAgICAgIGNvbnN0IFQgPSBST1RMKGEsIDUpICsgZihzLCBiLCBjLCBkKSArIGUgKyBLW3NdICsgV1t0XSA+Pj4gMDtcbiAgICAgIGUgPSBkO1xuICAgICAgZCA9IGM7XG4gICAgICBjID0gUk9UTChiLCAzMCkgPj4+IDA7XG4gICAgICBiID0gYTtcbiAgICAgIGEgPSBUO1xuICAgIH1cblxuICAgIEhbMF0gPSBIWzBdICsgYSA+Pj4gMDtcbiAgICBIWzFdID0gSFsxXSArIGIgPj4+IDA7XG4gICAgSFsyXSA9IEhbMl0gKyBjID4+PiAwO1xuICAgIEhbM10gPSBIWzNdICsgZCA+Pj4gMDtcbiAgICBIWzRdID0gSFs0XSArIGUgPj4+IDA7XG4gIH1cblxuICByZXR1cm4gW0hbMF0gPj4gMjQgJiAweGZmLCBIWzBdID4+IDE2ICYgMHhmZiwgSFswXSA+PiA4ICYgMHhmZiwgSFswXSAmIDB4ZmYsIEhbMV0gPj4gMjQgJiAweGZmLCBIWzFdID4+IDE2ICYgMHhmZiwgSFsxXSA+PiA4ICYgMHhmZiwgSFsxXSAmIDB4ZmYsIEhbMl0gPj4gMjQgJiAweGZmLCBIWzJdID4+IDE2ICYgMHhmZiwgSFsyXSA+PiA4ICYgMHhmZiwgSFsyXSAmIDB4ZmYsIEhbM10gPj4gMjQgJiAweGZmLCBIWzNdID4+IDE2ICYgMHhmZiwgSFszXSA+PiA4ICYgMHhmZiwgSFszXSAmIDB4ZmYsIEhbNF0gPj4gMjQgJiAweGZmLCBIWzRdID4+IDE2ICYgMHhmZiwgSFs0XSA+PiA4ICYgMHhmZiwgSFs0XSAmIDB4ZmZdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzaGExOyIsImltcG9ydCB2MzUgZnJvbSAnLi92MzUuanMnO1xuaW1wb3J0IHNoYTEgZnJvbSAnLi9zaGExLmpzJztcbmNvbnN0IHY1ID0gdjM1KCd2NScsIDB4NTAsIHNoYTEpO1xuZXhwb3J0IGRlZmF1bHQgdjU7IiwiLypcbiBkZWZhdWx0IHVuZGVmaW5lZCAtIFRoZSBrZXkgaXMgdGhlIGJyZWFrcG9pbnRcbiAoZGVmYXVsdCBpcyB0aGUgcmVzdWx0IG9mOiAoKSA9PiB3aW5kb3cuaW5uZXJXaWR0aCBvciBpbm5lcldpZHRoIHByb3BlcnR5IGlmIHRoZSBsYXN0IHByZXNlbnRlZCkuXG4qL1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRSZXNwb25zaXZlID0ge1xuICAgIDA6IHtcbiAgICAgICAgaXRlbXM6IDFcbiAgICB9LFxuICAgIDYyMDoge1xuICAgICAgICBpdGVtczogMlxuICAgIH0sXG4gICAgMTAyNDoge1xuICAgICAgICBpdGVtczogM1xuICAgIH0sXG4gICAgMTIwMDoge1xuICAgICAgICBpdGVtczogNFxuICAgIH0sXG4gICAgMTcwMDoge1xuICAgICAgICBpdGVtczogNVxuICAgIH0sXG4gICAgMjI1MDoge1xuICAgICAgICBpdGVtczogNlxuICAgIH1cbn07XG5cbi8qXG4gcmVidWlsdCByZXNwb25zaXZlIG9iamVjdCBkZXBlbmRpbmcgb24gdGhlIGNvbnRhaW5lciB3aWR0aFxuIHVzaW5nIHRoZSByYXRpbyBvZiB0aGUgd2lkdGggb2YgdGhlIGJveCB0byB0aGUgd2lkdGggb2YgdGhlIHdpbmRvd1xuKi9cbmV4cG9ydCBjb25zdCBnZXROZXdSZXNwb25zaXZlVmFsdWVzID0gcmF0ZSA9PiB7XG4gICAgbGV0IG5ld1Jlc3BvbnNpdmUgPSB7fTtcbiAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKGRlZmF1bHRSZXNwb25zaXZlKTtcblxuICAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBsZXQgbmV3VmFsdWUgPSBNYXRoLnJvdW5kKGRlZmF1bHRSZXNwb25zaXZlW2tleV0uaXRlbXMgLyByYXRlKTtcbiAgICAgICAgbmV3UmVzcG9uc2l2ZVtrZXldID0geyBpdGVtczogTWF0aC5tYXgobmV3VmFsdWUsIDEpIH07XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3UmVzcG9uc2l2ZTtcbn07XG5cbi8qXG4gICAgQ29uc3RhbnRzXG4qL1xuZXhwb3J0IGNvbnN0IHN0YXR1c0xpc3QgPSB7XG4gICAgcmVzZXQ6IFwicmVzZXRcIixcbiAgICBnb0xhc3Q6IFwiZ29MYXN0XCIsXG4gICAgbmV4dDogXCJuZXh0XCIsXG4gICAgcHJldjogXCJwcmV2XCJcbn07XG5cbmV4cG9ydCBjb25zdCBjbGFzc2VzQWN0aW9uID0ge1xuICAgIGFkZDogXCJhZGRcIixcbiAgICByZW1vdmU6IFwicmVtb3ZlXCJcbn07XG5cbmV4cG9ydCBjb25zdCBjb21tb25DbGFzc2VzID0ge1xuICAgIG11bHRpX2NvbnRhaW5lcjogXCJtdWx0aS1jYXJvdXNlbF9fY29udGFpbmVyXCIsXG4gICAgbXVsdGlfZW1wdHlfY29udGFpbmVyOiBcIm11bHRpLWNhcm91c2VsX19lbXB0eS1jb250YWluZXJcIixcbiAgICBpdGVtOiBcIm11bHRpLWNhcm91c2VsX19pdGVtXCIsXG4gICAgYWN0aXZlOiBcIm11bHRpLWNhcm91c2VsX19hY3RpdmVcIixcbiAgICBub19kb3RzOiBcIm11bHRpLWNhcm91c2VsX19uby1kb3RzXCIsXG4gICAgZXJyb3I6IFwibXVsdGktY2Fyb3VzZWxfX2Vycm9yXCJcbn07XG5cbmV4cG9ydCBjb25zdCBub3JtYWxDYXJvdXNlbENsYXNzZXMgPSB7XG4gICAgbm9ybWFsX2NvbnRhaW5lcjogXCJub3JtYWwtY2Fyb3VzZWxfX2NvbnRhaW5lclwiLFxuICAgIG5vcm1hbF9pdGVtOiBcIm5vcm1hbC1jYXJvdXNlbF9faXRlbVwiXG59O1xuXG5leHBvcnQgY29uc3QgYWN0aXZlQ2xpY2tDbGFzc2VzID0ge1xuICAgIGFjdGl2ZV9jbGlja19jb250YWluZXI6IFwiYWN0aXZlLWNsaWNrLWNhcm91c2VsX19jb250YWluZXJcIixcbiAgICBhY3RpdmVfY2xpY2tfaXRlbTogXCJhY3RpdmUtY2xpY2stY2Fyb3VzZWxfX2l0ZW1cIixcbiAgICBhY3RpdmVfY2xpY2tfd2l0aF9idG46IFwiYWN0aXZlLWNsaWNrLWNhcm91c2VsX193aXRoLWJ0blwiXG59O1xuXG5leHBvcnQgY29uc3QgYWN0aXZlU2xpZGVDbGFzc2VzID0ge1xuICAgIGFjdGl2ZV9zbGlkZV9jb250YWluZXI6IFwiYWN0aXZlLXNsaWRlLWNhcm91c2VsX19jb250YWluZXJcIixcbiAgICBhY3RpdmVfc2xpZGVfd3JhcHBlcjogXCJhY3RpdmUtc2xpZGUtY2Fyb3VzZWxfX3dyYXBwZXJcIixcbiAgICBmaXJzdF9pdGVtOiBcImFjdGl2ZS1zbGlkZS1jYXJvdXNlbF9fZmlyc3QtaXRlbVwiLFxuICAgIGxhc3RfaXRlbTogXCJhY3RpdmUtc2xpZGUtY2Fyb3VzZWxfX2xhc3QtaXRlbVwiLFxuICAgIHByZXZfYnRuOiBcImFjdGl2ZS1zbGlkZS1jYXJvdXNlbF9fcHJldi1idG5cIixcbiAgICBuZXh0X2J0bjogXCJhY3RpdmUtc2xpZGUtY2Fyb3VzZWxfX25leHQtYnRuXCJcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4uL3VpL05vcm1hbENhcm91c2VsLnNjc3NcIjtcbmltcG9ydCBcIi4uL3VpL0FjdGl2ZUNsaWNrQ2Fyb3VzZWwuc2Nzc1wiO1xuaW1wb3J0IEFsaWNlQ2Fyb3VzZWwgZnJvbSBcInJlYWN0LWFsaWNlLWNhcm91c2VsXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IHtcbiAgICBkZWZhdWx0UmVzcG9uc2l2ZSxcbiAgICBnZXROZXdSZXNwb25zaXZlVmFsdWVzLFxuICAgIGNvbW1vbkNsYXNzZXMsXG4gICAgbm9ybWFsQ2Fyb3VzZWxDbGFzc2VzLFxuICAgIGFjdGl2ZUNsaWNrQ2xhc3NlcyxcbiAgICBjbGFzc2VzQWN0aW9uXG59IGZyb20gXCIuL2hlbHBlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3JtYWxDYXJvdXNlbChwcm9wcykge1xuICAgIGNvbnN0IGNhcm91c2VsUGFyZW50ID0gdXNlUmVmKCk7XG4gICAgY29uc3QgW2Nhcm91c2VsX2l0ZW1zLCBzZXRfY2Fyb3VzZWxfaXRlbXNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtyZXNwb25zaXZlLCBzZXRSZXNwb25zaXZlXSA9IHVzZVN0YXRlKHsgLi4uZGVmYXVsdFJlc3BvbnNpdmUgfSk7XG4gICAgY29uc3QgW3VuaXF1ZUNsYXNzLCBzZXRVbmlxdWVDbGFzc10gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIC8qXG4gICAgICAgIHRoaXMgbWV0aG9kIGJ1aWx0IHRvIGhhbmRsZSBpZiB0aGUgY2Fyb3VzZWwgaGFzIGJlZW4gcmVuZGVyZWQgaW5zaWRlIGEgY29udGFpbmVyXG4gICAgICAgIHRoYXQgaXMgbm90IGNvdmVyaW5nIHRoZSB3aW5kb3cncyBmdWxsIHdpZHRoXG4gICAgKi9cbiAgICBjb25zdCBzZXROZXdSZXNwb25zaXZlID0gKCkgPT4ge1xuICAgICAgICBsZXQgcmF0ZSA9IHdpbmRvdy5pbm5lcldpZHRoIC8gY2Fyb3VzZWxQYXJlbnQuY3VycmVudC5jbGllbnRXaWR0aDtcbiAgICAgICAgaWYgKHJhdGUgPiAxLjM1KSB7XG4gICAgICAgICAgICBsZXQgbmV3UmVzcG9uc2l2ZSA9IGdldE5ld1Jlc3BvbnNpdmVWYWx1ZXMocmF0ZSk7XG4gICAgICAgICAgICBzZXRSZXNwb25zaXZlKHsgLi4ubmV3UmVzcG9uc2l2ZSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFJlc3BvbnNpdmUoeyAuLi5kZWZhdWx0UmVzcG9uc2l2ZSB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBhZGRPclJlbW92ZUNsYXNzTmFtZSA9IChub2RlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gY2xhc3Nlc0FjdGlvbi5yZW1vdmUpIHtcbiAgICAgICAgICAgIG5vZGU/LmNsYXNzTGlzdD8ucmVtb3ZlKGNvbW1vbkNsYXNzZXMuYWN0aXZlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vZGU/LmNsYXNzTGlzdD8uYWRkKGNvbW1vbkNsYXNzZXMuYWN0aXZlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBpbiBjYXNlIG9mIFwiaW5maW5pdGVcIiBjYXJvdXNlbCB0aGUgbm9kZSB3aWxsIGJlIG5vZGUgbGlzdCBcIkFycmF5XCJcbiAgICAgICAgYmVjYXVzZSB0aGUgY2Fyb3VzZWwgY3JlYXRlIGEgY29weSBvZiBhbGwgdGhlIGl0ZW1zXG4gICAgICAgIHRoYXQgd2h5IHdlIG5lZWQgY2hhbmdlIHRoZSBhY3RpdmUgY2xhc3Mgb24gYm90aCBub2RlcyAtIHRoZSBjYXJvdXNlbCByZW5kZXIgYm90aCAtXG4gICAgICAgIGFuZCB3aXRoIG5vIFwiaW5maW5pdGVcIiB0aGUgbm9kZSBsaXN0IHdpbGwgYmUgbGVuZ3RoIG9mIFwiMVwiXG4gICAgKi9cbiAgICBjb25zdCBjaGFuZ2VBY3RpdmVDbGFzcyA9IChub2RlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgaWYgKG5vZGU/Lmxlbmd0aCkge1xuICAgICAgICAgICAgbm9kZS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGFkZE9yUmVtb3ZlQ2xhc3NOYW1lKGl0ZW0sIGFjdGlvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBpZHgtXCJcIiBpcyB0aGUgY29tbW9uIHVuaXF1ZSBjbGFzcyBiZXR3ZWVuIG9yaWdpbmFsIGl0ZW0gYW5kIHRoZSBjbG9uZWQgb25lXG4gICAgKi9cbiAgICBjb25zdCBnZXRJZHhDbGFzc05hbWUgPSBlID0+IHtcbiAgICAgICAgbGV0IGNsaWNrZWRJdGVtID0gZS50YXJnZXQ7XG5cbiAgICAgICAgLy8gaW4gY2FzZSBvZiBjbGlja2luZyBlbGVtZW50IGluc2lkZSB0aGUgaXRlbSB3ZSBuZWVkIHRoZSBtYWluIGRpdiB3aXRoIFwiaWR4LVwiIGNsYXNzIG5hbWVcbiAgICAgICAgd2hpbGUgKGNsaWNrZWRJdGVtKSB7XG4gICAgICAgICAgICBpZiAoY2xpY2tlZEl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKGNvbW1vbkNsYXNzZXMuaXRlbSkpIGJyZWFrO1xuICAgICAgICAgICAgY2xpY2tlZEl0ZW0gPSBjbGlja2VkSXRlbS5wYXJlbnROb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNsYXNzTmFtZXMgPSBjbGlja2VkSXRlbS5jbGFzc05hbWUuc3BsaXQoXCIgXCIpO1xuICAgICAgICByZXR1cm4gY2xhc3NOYW1lcz8uZmlsdGVyKGl0ZW0gPT4gaXRlbS5pbmNsdWRlcyhcImlkeFwiKSk/LlswXTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb25DYXJkQ2xpY2tlZCA9IChlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgaWYgKGFjdGlvbj8uY2FuRXhlY3V0ZSkgYWN0aW9uLmV4ZWN1dGUoKTtcblxuICAgICAgICAvLyByZW1vdmUgYWN0aXZlIGNsYXNzIGZyb20gb3JpZ2luYWwgYW5kIGNsb25lZCBpdGVtXG4gICAgICAgIGxldCBhY3RpdmVOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dW5pcXVlQ2xhc3N9YCk/LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2NvbW1vbkNsYXNzZXMuYWN0aXZlfWApO1xuICAgICAgICBjaGFuZ2VBY3RpdmVDbGFzcyhhY3RpdmVOb2RlLCBjbGFzc2VzQWN0aW9uLnJlbW92ZSk7XG5cbiAgICAgICAgbGV0IGlkeENsYXNzID0gZ2V0SWR4Q2xhc3NOYW1lKGUpO1xuXG4gICAgICAgIC8vIGFkZCBhY3RpdmUgY2xhc3MgZm9yIGJvdGggb3JpZ2luYWwgYW5kIGNsb25lZCBpdGVtXG4gICAgICAgIGxldCBpdGVtVG9TZXRBY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt1bmlxdWVDbGFzc31gKT8ucXVlcnlTZWxlY3RvckFsbChgLiR7aWR4Q2xhc3N9YCk7XG4gICAgICAgIGNoYW5nZUFjdGl2ZUNsYXNzKGl0ZW1Ub1NldEFjdGl2ZSwgY2xhc3Nlc0FjdGlvbi5hZGQpO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgc2V0IHRoZSBhY3RpdmUgaXRlbSBhZnRlciB0aGUgY2Fyb3VzZWwgaGFzIGFscmVhZHkgYmVlbiBpbml0aWFsaXplZCBvciByZXNpemVkXG4gICAgICBOT1RFOiB0aGUgY2Fyb3VzZWwgbW92ZXMgdG8gdGhlIGJlZ2lubmluZyB3aGVuIHRoZSBjYXJvdXNlbCByZXNpemVkXG4gICAgKi9cbiAgICBjb25zdCBvbkluaXRpYWxpemVkT3JSZXNpemVkID0gKCkgPT4ge1xuICAgICAgICBpZiAocHJvcHMuY2Fyb3VzZWxUeXBlID09PSBcImFjdGl2ZVwiKSB7XG4gICAgICAgICAgICBsZXQgZmlyc3RDYXJvdXNlbEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt1bmlxdWVDbGFzc31gKT8ucXVlcnlTZWxlY3RvcihcIi5pZHgtMFwiKTtcbiAgICAgICAgICAgIGlmICghZmlyc3RDYXJvdXNlbEl0ZW0/LmNsYXNzTGlzdD8uY29udGFpbnMoY29tbW9uQ2xhc3Nlcy5hY3RpdmUpKSB7XG4gICAgICAgICAgICAgICAgZmlyc3RDYXJvdXNlbEl0ZW0/LmNsaWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gc2V0IGEgdW5pcXVlIGNsYXNzIGluIGNhc2Ugb2YgdXNpbmcgdHdvIGRpZmZlcmVudCBjYXJvdXNlbCBpbnN0YW5jZXMgaW4gdGhlIHNhbWUgZG9jdW1lbnRcbiAgICAgICAgc2V0VW5pcXVlQ2xhc3MoXCJhLVwiICsgdXVpZHY0KCkpO1xuXG4gICAgICAgIGlmICghY2Fyb3VzZWxQYXJlbnQuY3VycmVudCkgcmV0dXJuO1xuXG4gICAgICAgIC8vIGhhbmRsZSByZXNpemUgd2luZG93IG9yIGNhcm91c2VsIGNvbnRhaW5lclxuICAgICAgICBjb25zdCByZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoKSA9PiB7XG4gICAgICAgICAgICBzZXROZXdSZXNwb25zaXZlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJlc2l6ZU9ic2VydmVyLm9ic2VydmUoY2Fyb3VzZWxQYXJlbnQuY3VycmVudCk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHJlc2l6ZU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9LCBbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAocHJvcHMuZGF0YT8uc3RhdHVzID09PSBcImF2YWlsYWJsZVwiICYmICFjYXJvdXNlbF9pdGVtcz8ubGVuZ3RoKSB7XG4gICAgICAgICAgICBzZXRfY2Fyb3VzZWxfaXRlbXMoXG4gICAgICAgICAgICAgICAgcHJvcHMuZGF0YS5pdGVtcy5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2Fyb3VzZWxUeXBlID09PSBcImFjdGl2ZVwiID8gZSA9PiBvbkNhcmRDbGlja2VkKGUsIHByb3BzLmFjdGlvbj8uZ2V0KGl0ZW0pKSA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtjb21tb25DbGFzc2VzLml0ZW19IGlkeC0ke2l9ICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2Fyb3VzZWxUeXBlID09PSBcImFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYWN0aXZlQ2xpY2tDbGFzc2VzLmFjdGl2ZV9jbGlja19pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbm9ybWFsQ2Fyb3VzZWxDbGFzc2VzLm5vcm1hbF9pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNvbnRlbnQuZ2V0KGl0ZW0pfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0sIFtwcm9wcy5kYXRhXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgICAgICAgICBjb21tb25DbGFzc2VzLm11bHRpX2NvbnRhaW5lcixcbiAgICAgICAgICAgICAgICB1bmlxdWVDbGFzcyxcbiAgICAgICAgICAgICAgICBwcm9wcy5jYXJvdXNlbFR5cGUgPT09IFwiYWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgPyBhY3RpdmVDbGlja0NsYXNzZXMuYWN0aXZlX2NsaWNrX2NvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICA6IG5vcm1hbENhcm91c2VsQ2xhc3Nlcy5ub3JtYWxfY29udGFpbmVyLFxuICAgICAgICAgICAgICAgIHByb3BzLmRpc2FibGVEb3RzQ29udHJvbHMgPyBjb21tb25DbGFzc2VzLm5vX2RvdHMgOiBcIlwiLFxuICAgICAgICAgICAgICAgICFwcm9wcy5kaXNhYmxlQnV0dG9uc0NvbnRyb2xzICYmIHByb3BzLmNhcm91c2VsVHlwZSA9PT0gXCJhY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICA/IGFjdGl2ZUNsaWNrQ2xhc3Nlcy5hY3RpdmVfY2xpY2tfd2l0aF9idG5cbiAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICBdLmpvaW4oXCIgXCIpfVxuICAgICAgICAgICAgcmVmPXtjYXJvdXNlbFBhcmVudH1cbiAgICAgICAgPlxuICAgICAgICAgICAge2Nhcm91c2VsX2l0ZW1zPy5sZW5ndGggPyAoXG4gICAgICAgICAgICAgICAgPEFsaWNlQ2Fyb3VzZWxcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2Nhcm91c2VsX2l0ZW1zfVxuICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlPXtyZXNwb25zaXZlfVxuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZT17cHJvcHMuaW5maW5pdGV9XG4gICAgICAgICAgICAgICAgICAgIGF1dG9QbGF5PXtwcm9wcy5hdXRvUGxheX1cbiAgICAgICAgICAgICAgICAgICAgYXV0b1BsYXlEaXJlY3Rpb249e3Byb3BzLmF1dG9QbGF5RGlyZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICBhdXRvUGxheUNvbnRyb2xzPXtwcm9wcy5hdXRvUGxheUNvbnRyb2xzfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlQnV0dG9uc0NvbnRyb2xzPXtwcm9wcy5kaXNhYmxlQnV0dG9uc0NvbnRyb2xzfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlRG90c0NvbnRyb2xzPXtwcm9wcy5kaXNhYmxlRG90c0NvbnRyb2xzfVxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbj17cHJvcHMuYW5pbWF0aW9uRHVyYXRpb259XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvblR5cGU9e3Byb3BzLmFuaW1hdGlvblR5cGV9XG4gICAgICAgICAgICAgICAgICAgIGtleWJvYXJkTmF2aWdhdGlvbj17cHJvcHMua2V5Ym9hcmROYXZpZ2F0aW9ufVxuICAgICAgICAgICAgICAgICAgICBtb3VzZVRyYWNraW5nPXtwcm9wcy5tb3VzZVRyYWNraW5nfVxuICAgICAgICAgICAgICAgICAgICB0b3VjaFRyYWNraW5nPXtwcm9wcy50b3VjaFRyYWNraW5nfVxuICAgICAgICAgICAgICAgICAgICBvbkluaXRpYWxpemVkPXtvbkluaXRpYWxpemVkT3JSZXNpemVkfVxuICAgICAgICAgICAgICAgICAgICBvblJlc2l6ZWQ9e29uSW5pdGlhbGl6ZWRPclJlc2l6ZWR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbW1vbkNsYXNzZXMubXVsdGlfZW1wdHlfY29udGFpbmVyfT48L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTm9ybWFsQ2Fyb3VzZWwgZnJvbSBcIi4vY29tcG9uZW50cy9Ob3JtYWxDYXJvdXNlbFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJldmlldygpIHtcbiAgICByZXR1cm4gPE5vcm1hbENhcm91c2VsIC8+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJldmlld0NzcygpIHtcbiAgICByZXR1cm4gcmVxdWlyZShcIi4vdWkvTXVsdGlDYXJvdXNlbC5jc3NcIik7XG59XG4iXSwibmFtZXMiOlsic3R5bGVJbmplY3QiLCJjc3MiLCJyZWYiLCJpbnNlcnRBdCIsImRvY3VtZW50IiwiaGVhZCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic3R5bGUiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImZpcnN0Q2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJhcHBlbmRDaGlsZCIsInN0eWxlU2hlZXQiLCJjc3NUZXh0IiwiY3JlYXRlVGV4dE5vZGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsInR5cGVzIiwiVHJhY2VEaXJlY3Rpb25LZXkiLCJEaXJlY3Rpb24iLCJBeGlzIiwiY2FsY3VsYXRlRGlyZWN0aW9uXzEiLCJjYWxjdWxhdGVEaXJlY3Rpb24iLCJfdHlwZXMiLCJyZXF1aXJlIiwidHJhY2UiLCJkaXJlY3Rpb24iLCJuZWdhdGl2ZSIsIk5FR0FUSVZFIiwicG9zaXRpdmUiLCJQT1NJVElWRSIsImN1cnJlbnQiLCJsZW5ndGgiLCJwcmV2aW91cyIsImV2ZXJ5IiwiaSIsIk5PTkUiLCJjb21tb24iLCJnZXREaXJlY3Rpb25LZXkiLCJvYmplY3QiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJrZXkiLCJrZXlzIiwidG9TdHJpbmciLCJnZXREaXJlY3Rpb25WYWx1ZSIsInZhbHVlcyIsImdldERpZmZlcmVuY2UiLCJ4IiwieSIsIk1hdGgiLCJhYnMiLCJyZXNvbHZlQXhpc0RpcmVjdGlvbiIsImF4aXMiLCJMRUZUIiwiUklHSFQiLCJZIiwiQk9UVE9NIiwiVE9QIiwiY2FsY3VsYXRlRGlyZWN0aW9uRGVsdGFfMSIsImNhbGN1bGF0ZURpcmVjdGlvbkRlbHRhIiwiX2NvbW1vbiIsInRyYWNlRGlyZWN0aW9ucyIsImRlbHRhIiwiY3VycmVudEtleSIsImN1cnJlbnRWYWx1ZSIsInByZXYiLCJwcmV2S2V5IiwicHJldlZhbHVlIiwiZGlmZmVyZW5jZSIsImNhbGN1bGF0ZUR1cmF0aW9uXzEiLCJjYWxjdWxhdGVEdXJhdGlvbiIsInByZXZUaW1lIiwibmV4dFRpbWUiLCJjYWxjdWxhdGVNb3ZpbmdQb3NpdGlvbl8xIiwiY2FsY3VsYXRlTW92aW5nUG9zaXRpb24iLCJlIiwidG91Y2hlcyIsImNoYW5nZWRUb3VjaGVzIiwiY2xpZW50WCIsImNsaWVudFkiLCJ1cGRhdGVUcmFjZV8xIiwidXBkYXRlVHJhY2UiLCJsYXN0IiwicHVzaCIsImNhbGN1bGF0ZVRyYWNlRGlyZWN0aW9uc18xIiwiY2FsY3VsYXRlVHJhY2VEaXJlY3Rpb25zIiwiX2RlZmluZVByb3BlcnR5Iiwib2JqIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwidGlja3MiLCJ0aWNrIiwiY3VycmVudERpcmVjdGlvbiIsInNsaWNlIiwicmVzb2x2ZURpcmVjdGlvbl8xIiwicmVzb2x2ZURpcmVjdGlvbiIsIl9jYWxjdWxhdGVEaXJlY3Rpb24iLCJfY2FsY3VsYXRlVHJhY2VEaXJlY3Rpb25zIiwiX2NhbGN1bGF0ZURpcmVjdGlvbkRlbHRhIiwiWCIsImRpcmVjdGlvbkRlbHRhIiwiZGlyZWN0aW9ucyIsIl9kaXJlY3Rpb24iLCJjYWxjdWxhdGVWZWxvY2l0eV8xIiwiY2FsY3VsYXRlVmVsb2NpdHkiLCJ0aW1lIiwibWFnbml0dWRlIiwic3FydCIsImNhbGN1bGF0ZVBvc2l0aW9uXzEiLCJjYWxjdWxhdGVQb3NpdGlvbiIsIl91cGRhdGVUcmFjZSIsIl9yZXNvbHZlRGlyZWN0aW9uIiwiX2NhbGN1bGF0ZUR1cmF0aW9uIiwiX2NhbGN1bGF0ZVZlbG9jaXR5Iiwic3RhdGUiLCJvcHRpb25zIiwic3RhcnQiLCJ0cmFjZVgiLCJ0cmFjZVkiLCJyb3RhdGVQb3NpdGlvbiIsImRlbHRhWCIsImRlbHRhWSIsImFic1giLCJhYnNZIiwiZGlyZWN0aW9uWCIsImRpcmVjdGlvblkiLCJkdXJhdGlvbiIsIkRhdGUiLCJub3ciLCJ2ZWxvY2l0eSIsInBvc2l0aW9uWCIsInBvc2l0aW9uWSIsImNoZWNrSXNNb3JlVGhhblNpbmdsZVRvdWNoZXNfMSIsImNoZWNrSXNNb3JlVGhhblNpbmdsZVRvdWNoZXMiLCJCb29sZWFuIiwiY3JlYXRlT3B0aW9uc18xIiwiY3JlYXRlT3B0aW9ucyIsInByb3h5IiwiZ2V0IiwiaXNQYXNzaXZlU3VwcG9ydGVkIiwiY2hlY2tJc1Bhc3NpdmVTdXBwb3J0ZWRfMSIsImNoZWNrSXNQYXNzaXZlU3VwcG9ydGVkIiwiX2NyZWF0ZU9wdGlvbnMiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwibm9vcCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlcnIiLCJjaGVja0lzVG91Y2hFdmVudHNTdXBwb3J0ZWRfMSIsIl90eXBlb2YiLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiY2hlY2tJc1RvdWNoRXZlbnRzU3VwcG9ydGVkIiwibmF2aWdhdG9yIiwibWF4VG91Y2hQb2ludHMiLCJnZXRJbml0aWFsU3RhdGVfMSIsIm93bktleXMiLCJlbnVtZXJhYmxlT25seSIsImdldE93blByb3BlcnR5U3ltYm9scyIsInN5bWJvbHMiLCJmaWx0ZXIiLCJzeW0iLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJhcHBseSIsIl9vYmplY3RTcHJlYWQiLCJ0YXJnZXQiLCJzb3VyY2UiLCJmb3JFYWNoIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJnZXRJbml0aWFsU3RhdGUiLCJpc1N3aXBpbmciLCJnZXRJbml0aWFsUHJvcHNfMSIsImdldEluaXRpYWxQcm9wcyIsInByb3BzIiwiZWxlbWVudCIsInJvdGF0aW9uQW5nbGUiLCJtb3VzZVRyYWNraW5nRW5hYmxlZCIsInRvdWNoVHJhY2tpbmdFbmFibGVkIiwicHJldmVudERlZmF1bHRUb3VjaG1vdmVFdmVudCIsInByZXZlbnRUcmFja2luZ09uTW91c2VsZWF2ZSIsImdldE9wdGlvbnNfMSIsImdldE9wdGlvbnMiLCJwYXNzaXZlIiwicm90YXRlQnlBbmdsZV8xIiwicm90YXRlQnlBbmdsZSIsInBvc2l0aW9uIiwiYW5nbGUiLCJhbmdsZUluUmFkaWFucyIsIlBJIiwicm90YXRlZFgiLCJjb3MiLCJzaW4iLCJyb3RhdGVkWSIsIl9jYWxjdWxhdGVNb3ZpbmdQb3NpdGlvbiIsIl9jYWxjdWxhdGVQb3NpdGlvbiIsIl9jaGVja0lzTW9yZVRoYW5TaW5nbGVUb3VjaGVzIiwiX2NoZWNrSXNQYXNzaXZlU3VwcG9ydGVkIiwiX2NoZWNrSXNUb3VjaEV2ZW50c1N1cHBvcnRlZCIsIl9nZXRJbml0aWFsU3RhdGUiLCJfZ2V0SW5pdGlhbFByb3BzIiwiX2dldE9wdGlvbnMiLCJfcm90YXRlQnlBbmdsZSIsIl9leHBvcnROYW1lcyIsIlV0aWxzIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJub2RlSW50ZXJvcCIsIldlYWtNYXAiLCJjYWNoZUJhYmVsSW50ZXJvcCIsImNhY2hlTm9kZUludGVyb3AiLCJfX2VzTW9kdWxlIiwiY2FjaGUiLCJoYXMiLCJuZXdPYmoiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3IiLCJkZXNjIiwic2V0IiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiZGVzY3JpcHRvciIsIl9jcmVhdGVDbGFzcyIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsIlZhbmlsbGFTd2lwZSIsImhhbmRsZVN3aXBlU3RhcnQiLCJiaW5kIiwiaGFuZGxlU3dpcGVNb3ZlIiwiaGFuZGxlU3dpcGVFbmQiLCJoYW5kbGVNb3VzZURvd24iLCJoYW5kbGVNb3VzZU1vdmUiLCJoYW5kbGVNb3VzZVVwIiwiaGFuZGxlTW91c2VMZWF2ZSIsImluaXQiLCJzZXR1cFRvdWNoTGlzdGVuZXJzIiwic2V0dXBNb3VzZUxpc3RlbmVycyIsInVwZGF0ZSIsInByZXZQcm9wcyIsIm5leHRQcm9wcyIsImFzc2lnbiIsImRlc3Ryb3kiLCJjbGVhbnVwTW91c2VMaXN0ZW5lcnMiLCJjbGVhbnVwVG91Y2hMaXN0ZW5lcnMiLCJfdGhpcyRwcm9wcyIsImxpc3RlbmVyIiwiX3RoaXMkcHJvcHMyIiwiX3RoaXMkcHJvcHMzIiwiZ2V0RXZlbnREYXRhIiwibW92aW5nUG9zaXRpb24iLCJfVXRpbHMkcm90YXRlQnlBbmdsZSIsIl90aGlzJHN0YXRlIiwiX3RoaXMkZ2V0RXZlbnREYXRhIiwiX3RoaXMkcHJvcHM0Iiwib25Td2lwZVN0YXJ0Iiwib25Td2lwaW5nIiwiY2FuY2VsYWJsZSIsInByZXZlbnREZWZhdWx0IiwiTnVtYmVyIiwiX3RoaXMkcHJvcHM1Iiwib25Td2lwZWQiLCJvblRhcCIsIl9wb3NpdGlvbiIsImlzVG91Y2hFdmVudHNTdXBwb3J0ZWQiLCJBQ1RJT04iLCJJTklUIiwiUkVTSVpFIiwiVVBEQVRFIiwiRXZlbnRUeXBlIiwiRkFERU9VVCIsIlNMSURFIiwiQW5pbWF0aW9uVHlwZSIsIkRFRkFVTFQiLCJBTEwiLCJBdXRvUGxheVN0cmF0ZWd5IiwiQUxURVJOQVRFIiwiUkVTUE9OU0lWRSIsIkNvbnRyb2xzU3RyYXRlZ3kiLCJSVEwiLCJMVFIiLCJBdXRvcGxheURpcmVjdGlvbiIsIkFOSU1BVEVEIiwiUk9PVCIsIldSQVBQRVIiLCJTVEFHRSIsIlNUQUdFX0lURU0iLCJET1RTIiwiRE9UU19JVEVNIiwiUExBWV9CVE4iLCJQTEFZX0JUTl9JVEVNIiwiUExBWV9CVE5fV1JBUFBFUiIsIlNMSURFX0lORk8iLCJTTElERV9JTkZPX0lURU0iLCJCVVRUT05fUFJFViIsIkJVVFRPTl9QUkVWX1dSQVBQRVIiLCJCVVRUT05fUFJFVl9JVEVNIiwiQlVUVE9OX05FWFQiLCJCVVRUT05fTkVYVF9XUkFQUEVSIiwiQlVUVE9OX05FWFRfSVRFTSIsIkNsYXNzbmFtZXMiLCJBQ1RJVkUiLCJJTkFDVElWRSIsIkNMT05FRCIsIkNVU1RPTSIsIlBBVVNFIiwiU0VQQVJBVE9SIiwiU1NSIiwiVEFSR0VUIiwiTW9kaWZpZXJzIiwidHlwZXNfMSIsImFjdGl2ZUluZGV4IiwiYW5pbWF0aW9uRHVyYXRpb24iLCJhbmltYXRpb25FYXNpbmdGdW5jdGlvbiIsImFuaW1hdGlvblR5cGUiLCJhdXRvSGVpZ2h0IiwiYXV0b1dpZHRoIiwiYXV0b1BsYXkiLCJhdXRvUGxheUNvbnRyb2xzIiwiYXV0b1BsYXlEaXJlY3Rpb24iLCJhdXRvUGxheUludGVydmFsIiwiYXV0b1BsYXlTdHJhdGVneSIsImNoaWxkcmVuIiwiY29udHJvbHNTdHJhdGVneSIsImRpc2FibGVCdXR0b25zQ29udHJvbHMiLCJkaXNhYmxlRG90c0NvbnRyb2xzIiwiZGlzYWJsZVNsaWRlSW5mbyIsImluZmluaXRlIiwiaW5uZXJXaWR0aCIsIml0ZW1zIiwia2V5Ym9hcmROYXZpZ2F0aW9uIiwibW91c2VUcmFja2luZyIsIm5hbWUiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsInJlc3BvbnNpdmUiLCJzd2lwZURlbHRhIiwic3dpcGVFeHRyYVBhZGRpbmciLCJzc3JTaWxlbnRNb2RlIiwidG91Y2hUcmFja2luZyIsInRvdWNoTW92ZURlZmF1bHRFdmVudHMiLCJvbkluaXRpYWxpemVkIiwib25SZXNpemVkIiwib25SZXNpemVFdmVudCIsIm9uU2xpZGVDaGFuZ2UiLCJvblNsaWRlQ2hhbmdlZCIsIl9fYXNzaWduIiwibyIsInQiLCJyIiwicyIsIm1hcFBhcnRpYWxDb29yZHMiLCJtYXAiLCJ3aWR0aCIsIm1hcFBvc2l0aW9uQ29vcmRzIiwiZ2V0U2hpZnRJbmRleCIsImdldFN0YXJ0SW5kZXgiLCJnZXRBY3RpdmVJbmRleCIsInN0YXJ0SW5kZXgiLCJpdGVtc0NvdW50IiwiZ2V0VXBkYXRlU2xpZGVQb3NpdGlvbkluZGV4Iiwic2hvdWxkUmVjYWxjdWxhdGVTbGlkZUluZGV4Iiwic2hvdWxkQ2FuY2VsU2xpZGVBbmltYXRpb24iLCJnZXRTd2lwZUxpbWl0TWluIiwiaXRlbXNPZmZzZXQiLCJ0cmFuc2Zvcm1hdGlvblNldCIsIm1pbiIsImdldFN3aXBlTGltaXRNYXgiLCJuIiwiaXRlbXNJblNsaWRlIiwiZ2V0SXRlbUNvb3JkcyIsInNob3VsZFJlY2FsY3VsYXRlU3dpcGVQb3NpdGlvbiIsImdldElzTGVmdERpcmVjdGlvbiIsImdldFN3aXBlU2hpZnRWYWx1ZSIsImdldFRyYW5zZm9ybWF0aW9uSXRlbUluZGV4IiwiZmluZEluZGV4IiwiZ2V0U3dpcGVUcmFuc2Zvcm1hdGlvbkN1cnNvciIsImdldFN3aXBlVG91Y2hlbmRQb3NpdGlvbiIsImlzU3RhZ2VDb250ZW50UGFydGlhbCIsInN3aXBlQWxsb3dlZFBvc2l0aW9uTWF4IiwiZ2V0U3dpcGVUb3VjaGVuZEluZGV4IiwiZCIsImEiLCJ0cmFuc2xhdGUzZCIsImdldEZhZGVvdXRBbmltYXRpb25JbmRleCIsImdldEZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbiIsInN0YWdlV2lkdGgiLCJpc1ZlcnRpY2FsVG91Y2htb3ZlRGV0ZWN0ZWQiLCJjb21tb25fMSIsIm1hcHBlcnNfMSIsIm1hdGhfMSIsImdldFNsaWRlcyIsImdldEl0ZW1zQ291bnQiLCJnZXRJdGVtc09mZnNldCIsImNyZWF0ZUNsb25lcyIsImdldEl0ZW1zSW5TbGlkZSIsInVuc2hpZnQiLCJjb25jYXQiLCJpc0VsZW1lbnQiLCJFbGVtZW50IiwiSFRNTERvY3VtZW50IiwiY3JlYXRlQXV0b3dpZHRoVHJhbnNmb3JtYXRpb25TZXQiLCJBcnJheSIsImZyb20iLCJyZWR1Y2UiLCJnZXRFbGVtZW50RGltZW5zaW9ucyIsImNvb3JkcyIsImNvbnRlbnQiLCJwYXJ0aWFsIiwiY3JlYXRlRGVmYXVsdFRyYW5zZm9ybWF0aW9uU2V0IiwiZ2V0SXRlbVdpZHRoIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0IiwiZ2V0QXV0b2hlaWdodFByb3BlcnR5IiwiZ2V0RWxlbWVudEN1cnNvciIsImdldEVsZW1lbnRGaXJzdENoaWxkIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInBhcnNlRmxvYXQiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJjZWlsIiwib2Zmc2V0SGVpZ2h0Iiwic2hvdWxkSGFuZGxlUmVzaXplRXZlbnQiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsInRyYW5zZm9ybSIsImdldFJlbmRlcldyYXBwZXJTdHlsZXMiLCJnZXRUcmFuc2l0aW9uUHJvcGVydHkiLCJnZXRSZW5kZXJTdGFnZVN0eWxlcyIsImdldFJlbmRlclN0YWdlSXRlbVN0eWxlcyIsImZhZGVvdXRBbmltYXRpb25JbmRleCIsImZhZGVvdXRBbmltYXRpb25Qb3NpdGlvbiIsImZhZGVvdXRBbmltYXRpb25Qcm9jZXNzaW5nIiwiZ2V0VHJhbnNsYXRlM2RQcm9wZXJ0eSIsImdldFRvdWNobW92ZVRyYW5zbGF0ZVBvc2l0aW9uIiwiZmxvb3IiLCJnZXRUcmFuc2xhdGVYUHJvcGVydHkiLCJnZXRUcmFuc2Zvcm1NYXRyaXgiLCJtYXRjaCIsImVsZW1lbnRzXzEiLCJjYW5Vc2VET00iLCJjb25jYXRDbGFzc25hbWVzIiwiam9pbiIsImdldElzU3RhZ2VDb250ZW50UGFydGlhbCIsIml0ZW1zRml0IiwiY2FsY3VsYXRlSW5pdGlhbFN0YXRlIiwibCIsIm0iLCJjIiwidSIsImYiLCJnIiwiSSIsIlMiLCJwIiwidiIsImNsb25lcyIsInN0YWdlQ29udGVudFdpZHRoIiwiaW5pdGlhbFN0YWdlSGVpZ2h0IiwiaXNBdXRvUGxheWluZyIsImlzQXV0b1BsYXlDYW5jZWxlZE9uQWN0aW9uIiwic3dpcGVMaW1pdE1pbiIsInN3aXBlTGltaXRNYXgiLCJzd2lwZVNoaWZ0VmFsdWUiLCJjYW5Vc2VEb20iLCJnZXRSZW5kZXJTdGFnZUl0ZW1DbGFzc2VzIiwiaXNBY3RpdmVJdGVtIiwiaXNDbG9uZWRJdGVtIiwiaXNUYXJnZXRJdGVtIiwiZGVib3VuY2UiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZGVidWciLCJjb25zb2xlIiwiZ2V0QWN0aXZlU2xpZGVJbmRleCIsImdldFNsaWRlSW5kZXhGb3JOb25NdWx0aXBsZUl0ZW1zIiwiZ2V0U2xpZGVJbmRleEZvck11bHRpcGxlSXRlbXMiLCJnZXRBY3RpdmVTbGlkZURvdHNMZW5ndGgiLCJnZXRTbGlkZUluZm8iLCJpdGVtIiwiZ2V0U2xpZGVJdGVtSW5mbyIsImlzUHJldlNsaWRlRGlzYWJsZWQiLCJpc05leHRTbGlkZURpc2FibGVkIiwic2hvdWxkRGlzYWJsZUNvbnRyb2xzIiwiaXNTdHJhdGVneSIsInNob3VsZERpc2FibGVEb3RzIiwic2hvdWxkRGlzYWJsZUJ1dHRvbnMiLCJpbmNsdWRlcyIsImhhc0RvdEZvckVhY2hTbGlkZSIsImdldERvdHNOYXZpZ2F0aW9uTGVuZ3RoIiwiY2hlY2tJc1RoZUxhc3REb3RJbmRleCIsImdldEl0ZW1JbmRleEZvckRvdE5hdmlnYXRpb24iLCJzaG91bGRDYW5jZWxBdXRvUGxheU9uQWN0aW9uIiwic2hvdWxkQ2FuY2VsQXV0b1BsYXlPbkhvdmVyIiwiX19jcmVhdGVCaW5kaW5nIiwiY3JlYXRlIiwiX19leHBvcnRTdGFyIiwiX19pbXBvcnREZWZhdWx0IiwiZGVmYXVsdCIsInJlYWN0XzEiLCJ1dGlsc18xIiwiU2xpZGVJbmZvIiwicmVuZGVyU2xpZGVJbmZvIiwiY2xhc3NOYW1lIiwiU3RhZ2VJdGVtIiwic3R5bGVzIiwiRG90c05hdmlnYXRpb24iLCJvbkNsaWNrIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwicmVuZGVyRG90c0l0ZW0iLCJfIiwiRCIsImlzQWN0aXZlIiwiUGxheVBhdXNlQnV0dG9uIiwiaXNQbGF5aW5nIiwicmVuZGVyUGxheVBhdXNlQnV0dG9uIiwiUHJldk5leHRCdXR0b24iLCJpc0Rpc2FibGVkIiwicmVuZGVyUHJldkJ1dHRvbiIsInJlbmRlck5leHRCdXR0b24iLCJTbGlkZUluZm9fMSIsIlN0YWdlSXRlbV8xIiwiRG90c05hdmlnYXRpb25fMSIsIlBsYXlQYXVzZUJ1dHRvbl8xIiwiUHJldk5leHRCdXR0b25fMSIsIl9fZXh0ZW5kcyIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiU3RyaW5nIiwiX19zZXRNb2R1bGVEZWZhdWx0IiwiX19pbXBvcnRTdGFyIiwiX19hd2FpdGVyIiwiUHJvbWlzZSIsIm5leHQiLCJ0aHJvdyIsImRvbmUiLCJ0aGVuIiwiX19nZW5lcmF0b3IiLCJsYWJlbCIsInNlbnQiLCJ0cnlzIiwib3BzIiwicmV0dXJuIiwicG9wIiwidmFuaWxsYV9zd2lwZV8xIiwiZGVmYXVsdFByb3BzXzEiLCJWaWV3cyIsIkFsaWNlQ2Fyb3VzZWwiLCJzd2lwZUxpc3RlbmVyIiwiX2hhbmRsZUtleWJvYXJkRXZlbnRzIiwiY29kZSIsIl9oYW5kbGVQbGF5UGF1c2VUb2dnbGUiLCJzbGlkZVByZXYiLCJzbGlkZU5leHQiLCJfaGFuZGxlQmVmb3JlU2xpZGVFbmQiLCJfaGFuZGxlVXBkYXRlU2xpZGVQb3NpdGlvbiIsInNldFN0YXRlIiwiX2hhbmRsZVNsaWRlQ2hhbmdlZCIsIl9oYW5kbGVNb3VzZUVudGVyIiwiaXNIb3ZlcmVkIiwiX2hhbmRsZVBhdXNlIiwiX2hhbmRsZU1vdXNlTGVhdmUiLCJfaGFuZGxlUGxheSIsIl9jbGVhckF1dG9QbGF5VGltZW91dCIsImhhc1VzZXJBY3Rpb24iLCJfc2V0Um9vdENvbXBvbmVudFJlZiIsInJvb3RFbGVtZW50IiwiX3NldFN0YWdlQ29tcG9uZW50UmVmIiwic3RhZ2VDb21wb25lbnQiLCJfcmVuZGVyU3RhZ2VJdGVtIiwiX3JlbmRlclNsaWRlSW5mbyIsImlzQW5pbWF0aW9uRGlzYWJsZWQiLCJpc1RvdWNoTW92ZVByb2Nlc3NTdGFydGVkIiwiY2FuY2VsVG91Y2hBbmltYXRpb25zIiwicm9vdENvbXBvbmVudERpbWVuc2lvbnMiLCJzdGFydFRvdWNobW92ZVBvc2l0aW9uIiwic2xpZGVUbyIsIl9oYW5kbGVUb3VjaG1vdmUiLCJfaGFuZGxlVG91Y2hlbmQiLCJfaGFuZGxlRG90Q2xpY2siLCJfaGFuZGxlUmVzaXplIiwiX2hhbmRsZVJlc2l6ZURlYm91bmNlZCIsIl9jYW5jZWxSZXNpemVEZWJvdW5jZWQiLCJjb21wb25lbnREaWRNb3VudCIsIl9zZXRJbml0aWFsU3RhdGUiLCJfYWRkRXZlbnRMaXN0ZW5lcnMiLCJfc2V0dXBTd2lwZUhhbmRsZXJzIiwiY29tcG9uZW50RGlkVXBkYXRlIiwiaCIsIl91cGRhdGVDb21wb25lbnQiLCJfdXBkYXRlU3dpcGVQcm9wcyIsIl91cGRhdGVFdmVudExpc3RlbmVycyIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiX2NhbmNlbFRpbWVvdXRBbmltYXRpb25zIiwiX3JlbW92ZUV2ZW50TGlzdGVuZXJzIiwic2xpZGUiLCJpc0ZhZGVvdXRBbmltYXRpb25BbGxvd2VkIiwiX2hhbmRsZVNsaWRlVG8iLCJldmVudFR5cGUiLCJpc1RydXN0ZWQiLCJfaGFuZGxlUmVzaXplZCIsIl9zZXRUb3VjaG1vdmVQb3NpdGlvbiIsIl9oYW5kbGVTbGlkZUNoYW5nZSIsInRvdWNobW92ZVBvc2l0aW9uIiwiX2NsZWFyVG91Y2htb3ZlUG9zaXRpb24iLCJfaGFuZGxlQmVmb3JlVG91Y2hFbmQiLCJ0b3VjaEVuZFRpbWVvdXRJZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNsaWRlRW5kVGltZW91dElkIiwiZXZlbnRPYmplY3QiLCJfc2V0QXV0b1BsYXlJbnRlcnZhbCIsIl9jbGVhclNsaWRlRW5kVGltZW91dCIsImNsZWFyVG91Y2hlbmRUaW1lb3V0IiwiYXV0b1BsYXlUaW1lb3V0SWQiLCJfcmVuZGVyRG90c05hdmlnYXRpb24iLCJfcmVuZGVyUHJldkJ1dHRvbiIsIl9yZW5kZXJOZXh0QnV0dG9uIiwiX3JlbmRlclBsYXlQYXVzZUJ1dHRvbiIsInJlbmRlciIsImRlZmF1bHRQcm9wcyIsIlB1cmVDb21wb25lbnQiLCJnZXRSYW5kb21WYWx1ZXMiLCJybmRzOCIsIlVpbnQ4QXJyYXkiLCJybmciLCJjcnlwdG8iLCJFcnJvciIsInZhbGlkYXRlIiwidXVpZCIsIlJFR0VYIiwidGVzdCIsImJ5dGVUb0hleCIsInVuc2FmZVN0cmluZ2lmeSIsImFyciIsIm9mZnNldCIsInRvTG93ZXJDYXNlIiwicGFyc2UiLCJwYXJzZUludCIsInN0cmluZ1RvQnl0ZXMiLCJzdHIiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsImJ5dGVzIiwiY2hhckNvZGVBdCIsIkROUyIsIlVSTCIsInYzNSIsInZlcnNpb24iLCJoYXNoZnVuYyIsImdlbmVyYXRlVVVJRCIsIm5hbWVzcGFjZSIsImJ1ZiIsIl9uYW1lc3BhY2UiLCJtZDUiLCJtc2ciLCJtZDVUb0hleEVuY29kZWRBcnJheSIsIndvcmRzVG9NZDUiLCJieXRlc1RvV29yZHMiLCJpbnB1dCIsIm91dHB1dCIsImxlbmd0aDMyIiwiaGV4VGFiIiwiaGV4IiwiY2hhckF0IiwiZ2V0T3V0cHV0TGVuZ3RoIiwiaW5wdXRMZW5ndGg4IiwibGVuIiwiYiIsIm9sZGEiLCJvbGRiIiwib2xkYyIsIm9sZGQiLCJtZDVmZiIsIm1kNWdnIiwibWQ1aGgiLCJtZDVpaSIsInNhZmVBZGQiLCJsZW5ndGg4IiwiVWludDMyQXJyYXkiLCJsc3ciLCJtc3ciLCJiaXRSb3RhdGVMZWZ0IiwibnVtIiwiY250IiwibWQ1Y21uIiwicSIsInJhbmRvbVVVSUQiLCJ2NCIsIm5hdGl2ZSIsInJuZHMiLCJyYW5kb20iLCJ6IiwiUk9UTCIsInNoYTEiLCJLIiwiSCIsImlzQXJyYXkiLCJOIiwiTSIsImoiLCJwb3ciLCJXIiwiVCIsImRlZmF1bHRSZXNwb25zaXZlIiwiZ2V0TmV3UmVzcG9uc2l2ZVZhbHVlcyIsInJhdGUiLCJuZXdSZXNwb25zaXZlIiwibmV3VmFsdWUiLCJyb3VuZCIsIm1heCIsImNsYXNzZXNBY3Rpb24iLCJhZGQiLCJyZW1vdmUiLCJjb21tb25DbGFzc2VzIiwibXVsdGlfY29udGFpbmVyIiwibXVsdGlfZW1wdHlfY29udGFpbmVyIiwiYWN0aXZlIiwibm9fZG90cyIsImVycm9yIiwibm9ybWFsQ2Fyb3VzZWxDbGFzc2VzIiwibm9ybWFsX2NvbnRhaW5lciIsIm5vcm1hbF9pdGVtIiwiYWN0aXZlQ2xpY2tDbGFzc2VzIiwiYWN0aXZlX2NsaWNrX2NvbnRhaW5lciIsImFjdGl2ZV9jbGlja19pdGVtIiwiYWN0aXZlX2NsaWNrX3dpdGhfYnRuIiwiTm9ybWFsQ2Fyb3VzZWwiLCJjYXJvdXNlbFBhcmVudCIsInVzZVJlZiIsImNhcm91c2VsX2l0ZW1zIiwic2V0X2Nhcm91c2VsX2l0ZW1zIiwidXNlU3RhdGUiLCJzZXRSZXNwb25zaXZlIiwidW5pcXVlQ2xhc3MiLCJzZXRVbmlxdWVDbGFzcyIsInNldE5ld1Jlc3BvbnNpdmUiLCJjbGllbnRXaWR0aCIsImFkZE9yUmVtb3ZlQ2xhc3NOYW1lIiwibm9kZSIsImFjdGlvbiIsImNsYXNzTGlzdCIsImNoYW5nZUFjdGl2ZUNsYXNzIiwiZ2V0SWR4Q2xhc3NOYW1lIiwiY2xpY2tlZEl0ZW0iLCJjb250YWlucyIsInBhcmVudE5vZGUiLCJjbGFzc05hbWVzIiwic3BsaXQiLCJvbkNhcmRDbGlja2VkIiwiY2FuRXhlY3V0ZSIsImV4ZWN1dGUiLCJhY3RpdmVOb2RlIiwicXVlcnlTZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpZHhDbGFzcyIsIml0ZW1Ub1NldEFjdGl2ZSIsIm9uSW5pdGlhbGl6ZWRPclJlc2l6ZWQiLCJjYXJvdXNlbFR5cGUiLCJmaXJzdENhcm91c2VsSXRlbSIsImNsaWNrIiwidXNlRWZmZWN0IiwidXVpZHY0IiwicmVzaXplT2JzZXJ2ZXIiLCJSZXNpemVPYnNlcnZlciIsIm9ic2VydmUiLCJkaXNjb25uZWN0IiwiZGF0YSIsInN0YXR1cyIsInByZXZpZXciLCJnZXRQcmV2aWV3Q3NzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLFdBQVdBLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0VBQzdCLElBQUtBLEdBQUcsS0FBSyxLQUFLLENBQUMsRUFBR0EsR0FBRyxHQUFHLEVBQUUsQ0FBQTtBQUM5QixFQUFBLElBQUlDLFFBQVEsR0FBR0QsR0FBRyxDQUFDQyxRQUFRLENBQUE7QUFFM0IsRUFBQSxJQUFJLENBQUNGLEdBQUcsSUFBSSxPQUFPRyxRQUFRLEtBQUssV0FBVyxFQUFFO0FBQUUsSUFBQSxPQUFBO0FBQVEsR0FBQTtBQUV2RCxFQUFBLElBQUlDLElBQUksR0FBR0QsUUFBUSxDQUFDQyxJQUFJLElBQUlELFFBQVEsQ0FBQ0Usb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDcEUsRUFBQSxJQUFJQyxLQUFLLEdBQUdILFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0VBQzNDRCxLQUFLLENBQUNFLElBQUksR0FBRyxVQUFVLENBQUE7RUFFdkIsSUFBSU4sUUFBUSxLQUFLLEtBQUssRUFBRTtJQUN0QixJQUFJRSxJQUFJLENBQUNLLFVBQVUsRUFBRTtNQUNuQkwsSUFBSSxDQUFDTSxZQUFZLENBQUNKLEtBQUssRUFBRUYsSUFBSSxDQUFDSyxVQUFVLENBQUMsQ0FBQTtBQUMzQyxLQUFDLE1BQU07QUFDTEwsTUFBQUEsSUFBSSxDQUFDTyxXQUFXLENBQUNMLEtBQUssQ0FBQyxDQUFBO0FBQ3pCLEtBQUE7QUFDRixHQUFDLE1BQU07QUFDTEYsSUFBQUEsSUFBSSxDQUFDTyxXQUFXLENBQUNMLEtBQUssQ0FBQyxDQUFBO0FBQ3pCLEdBQUE7RUFFQSxJQUFJQSxLQUFLLENBQUNNLFVBQVUsRUFBRTtBQUNwQk4sSUFBQUEsS0FBSyxDQUFDTSxVQUFVLENBQUNDLE9BQU8sR0FBR2IsR0FBRyxDQUFBO0FBQ2hDLEdBQUMsTUFBTTtJQUNMTSxLQUFLLENBQUNLLFdBQVcsQ0FBQ1IsUUFBUSxDQUFDVyxjQUFjLENBQUNkLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFDakQsR0FBQTtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkFlLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLEVBQUUsWUFBWSxFQUFFO0FBQzNDQyxFQUFBQSxLQUFLLEVBQUUsSUFBQTtBQUNULENBQUMsQ0FBQyxDQUFBO0FBQ0ZELE9BQUFBLENBQUFBLGlCQUF5QixHQUFvQkUsT0FBQSxDQUFBLFNBQUEsZUFBZSxHQUFHLEtBQUssRUFBQztBQUNyRSxJQUFJQyxpQkFBaUIsQ0FBQTtBQUNJRCxPQUFBLENBQUEsaUJBQUEsR0FBR0MsaUJBQWlCLENBQUE7QUFFN0MsQ0FBQyxVQUFVQSxpQkFBaUIsRUFBRTtBQUM1QkEsRUFBQUEsaUJBQWlCLENBQUMsVUFBVSxDQUFDLEdBQUcsVUFBVSxDQUFBO0FBQzFDQSxFQUFBQSxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsR0FBRyxVQUFVLENBQUE7QUFDMUNBLEVBQUFBLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQTtBQUNwQyxDQUFDLEVBQUVBLGlCQUFpQixLQUE4QkQsT0FBQSxDQUFBLGlCQUFBLEdBQUdDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUE7QUFFN0UsSUFBSUMsU0FBUyxDQUFBO0FBQ0lGLE9BQUEsQ0FBQSxTQUFBLEdBQUdFLFVBQVM7QUFFN0IsQ0FBQyxVQUFVQSxTQUFTLEVBQUU7QUFDcEJBLEVBQUFBLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUE7QUFDeEJBLEVBQUFBLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUE7QUFDMUJBLEVBQUFBLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxPQUFPLENBQUE7QUFDNUJBLEVBQUFBLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxRQUFRLENBQUE7QUFDOUJBLEVBQUFBLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUE7QUFDNUIsQ0FBQyxFQUFFQSxTQUFTLEtBQXNCRixPQUFBLENBQUEsU0FBQSxHQUFHRSxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQTtBQUVyRCxJQUFJQyxJQUFJLENBQUE7QUFDSUgsT0FBQSxDQUFBLElBQUEsR0FBR0csS0FBSTtBQUVuQixDQUFDLFVBQVVBLElBQUksRUFBRTtBQUNmQSxFQUFBQSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2ZBLEVBQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDakIsQ0FBQyxFQUFFQSxJQUFJLEtBQUtMLE9BQUFBLENBQUFBLElBQVksR0FBR0ssSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDOztBQzlCdENQLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxvQkFBTyxFQUFFLFlBQVksRUFBRTtBQUMzQ0MsRUFBQUEsS0FBSyxFQUFFLElBQUE7QUFDVCxDQUFDLENBQUMsQ0FBQTtBQUN3Qkssb0JBQUEsQ0FBQSxrQkFBQSxHQUFHQyxtQkFBa0I7QUFFL0MsSUFBSUMsUUFBTSxHQUFHQyxPQUFtQixDQUFBO0FBRWhDLFNBQVNGLGtCQUFrQkEsQ0FBQ0csS0FBSyxFQUFFO0FBQ2pDLEVBQUEsSUFBSUMsU0FBUyxDQUFBO0FBQ2IsRUFBQSxJQUFJQyxRQUFRLEdBQUdKLFFBQU0sQ0FBQ0wsaUJBQWlCLENBQUNVLFFBQVEsQ0FBQTtBQUNoRCxFQUFBLElBQUlDLFFBQVEsR0FBR04sUUFBTSxDQUFDTCxpQkFBaUIsQ0FBQ1ksUUFBUSxDQUFBO0VBQ2hELElBQUlDLE9BQU8sR0FBR04sS0FBSyxDQUFDQSxLQUFLLENBQUNPLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQTtFQUNyQyxJQUFJQyxRQUFRLEdBQUdSLEtBQUssQ0FBQ0EsS0FBSyxDQUFDTyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBRTNDLEVBQUEsSUFBSVAsS0FBSyxDQUFDUyxLQUFLLENBQUMsVUFBVUMsQ0FBQyxFQUFFO0lBQzNCLE9BQU9BLENBQUMsS0FBSyxDQUFDLENBQUE7QUFDaEIsR0FBQyxDQUFDLEVBQUU7QUFDRixJQUFBLE9BQU9aLFFBQU0sQ0FBQ0wsaUJBQWlCLENBQUNrQixJQUFJLENBQUE7QUFDdEMsR0FBQTtBQUVBVixFQUFBQSxTQUFTLEdBQUdLLE9BQU8sR0FBR0UsUUFBUSxHQUFHSixRQUFRLEdBQUdGLFFBQVEsQ0FBQTtFQUVwRCxJQUFJSSxPQUFPLEtBQUssQ0FBQyxFQUFFO0FBQ2pCTCxJQUFBQSxTQUFTLEdBQUdPLFFBQVEsR0FBRyxDQUFDLEdBQUdKLFFBQVEsR0FBR0YsUUFBUSxDQUFBO0FBQ2hELEdBQUE7QUFFQSxFQUFBLE9BQU9ELFNBQVMsQ0FBQTtBQUNsQjs7Ozs7O0FDM0JBYixNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsUUFBTyxFQUFFLFlBQVksRUFBRTtBQUMzQ0MsRUFBQUEsS0FBSyxFQUFFLElBQUE7QUFDVCxDQUFDLENBQUMsQ0FBQTtBQUMwQnFCLFFBQUEsQ0FBQSxvQkFBQSw2QkFBNEIsR0FBR3RCLFFBQUFBLENBQUFBLGVBQXVCLEdBQXdCc0IsUUFBQSxDQUFBLGFBQUEsR0FBRyxLQUFLLEVBQUM7QUFFbkgsSUFBSWQsUUFBTSxHQUFHQyxPQUFtQixDQUFBO0FBRWhDLElBQUljLGVBQWUsR0FBRyxTQUFTQSxlQUFlQSxHQUFHO0VBQy9DLElBQUlDLE1BQU0sR0FBR0MsU0FBUyxDQUFDUixNQUFNLEdBQUcsQ0FBQyxJQUFJUSxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUtDLFNBQVMsR0FBR0QsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtFQUNuRixJQUFJRSxHQUFHLEdBQUc3QixNQUFNLENBQUM4QixJQUFJLENBQUNKLE1BQU0sQ0FBQyxDQUFDSyxRQUFRLEVBQUUsQ0FBQTtBQUV4QyxFQUFBLFFBQVFGLEdBQUc7QUFDVCxJQUFBLEtBQUtuQixRQUFNLENBQUNMLGlCQUFpQixDQUFDWSxRQUFRO0FBQ3BDLE1BQUEsT0FBT1AsUUFBTSxDQUFDTCxpQkFBaUIsQ0FBQ1ksUUFBUSxDQUFBO0FBRTFDLElBQUEsS0FBS1AsUUFBTSxDQUFDTCxpQkFBaUIsQ0FBQ1UsUUFBUTtBQUNwQyxNQUFBLE9BQU9MLFFBQU0sQ0FBQ0wsaUJBQWlCLENBQUNVLFFBQVEsQ0FBQTtBQUUxQyxJQUFBO0FBQ0UsTUFBQSxPQUFPTCxRQUFNLENBQUNMLGlCQUFpQixDQUFDa0IsSUFBSSxDQUFBO0FBQUMsR0FBQTtBQUUzQyxDQUFDLENBQUE7QUFFc0JDLFFBQUEsQ0FBQSxlQUFBLEdBQUdDLGdCQUFlO0FBRXpDLElBQUlPLGlCQUFpQixHQUFHLFNBQVNBLGlCQUFpQkEsR0FBRztFQUNuRCxJQUFJQyxNQUFNLEdBQUdOLFNBQVMsQ0FBQ1IsTUFBTSxHQUFHLENBQUMsSUFBSVEsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLQyxTQUFTLEdBQUdELFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUE7RUFDbkYsT0FBT00sTUFBTSxDQUFDQSxNQUFNLENBQUNkLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDdkMsQ0FBQyxDQUFBO0FBRXdCSyxRQUFBLENBQUEsaUJBQUEsR0FBR1Esa0JBQWlCO0FBRTdDLElBQUlFLGFBQWEsR0FBRyxTQUFTQSxhQUFhQSxHQUFHO0VBQzNDLElBQUlDLENBQUMsR0FBR1IsU0FBUyxDQUFDUixNQUFNLEdBQUcsQ0FBQyxJQUFJUSxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUtDLFNBQVMsR0FBR0QsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtFQUM3RSxJQUFJUyxDQUFDLEdBQUdULFNBQVMsQ0FBQ1IsTUFBTSxHQUFHLENBQUMsSUFBSVEsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLQyxTQUFTLEdBQUdELFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDN0UsRUFBQSxPQUFPVSxJQUFJLENBQUNDLEdBQUcsQ0FBQ0gsQ0FBQyxHQUFHQyxDQUFDLENBQUMsQ0FBQTtBQUN4QixDQUFDLENBQUE7QUFFb0JaLFFBQUEsQ0FBQSxhQUFBLEdBQUdVLGNBQWE7QUFFckMsSUFBSUssb0JBQW9CLEdBQUcsU0FBU0Esb0JBQW9CQSxDQUFDQyxJQUFJLEVBQUVYLEdBQUcsRUFBRTtBQUNsRSxFQUFBLElBQUlmLFFBQVEsR0FBR0osUUFBTSxDQUFDSixTQUFTLENBQUNtQyxJQUFJLENBQUE7QUFDcEMsRUFBQSxJQUFJekIsUUFBUSxHQUFHTixRQUFNLENBQUNKLFNBQVMsQ0FBQ29DLEtBQUssQ0FBQTtBQUNyQyxFQUFBLElBQUk3QixTQUFTLEdBQUdILFFBQU0sQ0FBQ0osU0FBUyxDQUFDaUIsSUFBSSxDQUFBO0FBRXJDLEVBQUEsSUFBSWlCLElBQUksS0FBSzlCLFFBQU0sQ0FBQ0gsSUFBSSxDQUFDb0MsQ0FBQyxFQUFFO0FBQzFCN0IsSUFBQUEsUUFBUSxHQUFHSixRQUFNLENBQUNKLFNBQVMsQ0FBQ3NDLE1BQU0sQ0FBQTtBQUNsQzVCLElBQUFBLFFBQVEsR0FBR04sUUFBTSxDQUFDSixTQUFTLENBQUN1QyxHQUFHLENBQUE7QUFDakMsR0FBQTtBQUVBLEVBQUEsSUFBSWhCLEdBQUcsS0FBS25CLFFBQU0sQ0FBQ0wsaUJBQWlCLENBQUNVLFFBQVEsRUFBRTtBQUM3Q0YsSUFBQUEsU0FBUyxHQUFHQyxRQUFRLENBQUE7QUFDdEIsR0FBQTtBQUVBLEVBQUEsSUFBSWUsR0FBRyxLQUFLbkIsUUFBTSxDQUFDTCxpQkFBaUIsQ0FBQ1ksUUFBUSxFQUFFO0FBQzdDSixJQUFBQSxTQUFTLEdBQUdHLFFBQVEsQ0FBQTtBQUN0QixHQUFBO0FBRUEsRUFBQSxPQUFPSCxTQUFTLENBQUE7QUFDbEIsQ0FBQyxDQUFBO0FBRURYLFFBQUFBLENBQUFBLG9CQUE0QixHQUFHcUMsb0JBQW9COztBQzdEbkR2QyxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MseUJBQU8sRUFBRSxZQUFZLEVBQUU7QUFDM0NDLEVBQUFBLEtBQUssRUFBRSxJQUFBO0FBQ1QsQ0FBQyxDQUFDLENBQUE7QUFDNkIyQyx5QkFBQSxDQUFBLHVCQUFBLEdBQUdDLHdCQUF1QjtBQUV6RCxJQUFJckMsUUFBTSxHQUFHQyxPQUFtQixDQUFBO0FBRWhDLElBQUlxQyxTQUFPLEdBQUdyQyxRQUFtQixDQUFBO0FBRWpDLFNBQVNvQyx1QkFBdUJBLENBQUNFLGVBQWUsRUFBRTtFQUNoRCxJQUFJQyxLQUFLLEdBQUd2QixTQUFTLENBQUNSLE1BQU0sR0FBRyxDQUFDLElBQUlRLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBS0MsU0FBUyxHQUFHRCxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQ2pGLEVBQUEsSUFBSVIsTUFBTSxHQUFHOEIsZUFBZSxDQUFDOUIsTUFBTSxDQUFBO0FBQ25DLEVBQUEsSUFBSUcsQ0FBQyxHQUFHSCxNQUFNLEdBQUcsQ0FBQyxDQUFBO0FBQ2xCLEVBQUEsSUFBSU4sU0FBUyxHQUFHSCxRQUFNLENBQUNMLGlCQUFpQixDQUFDa0IsSUFBSSxDQUFBO0FBRTdDLEVBQUEsT0FBT0QsQ0FBQyxJQUFJLENBQUMsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7QUFDbEIsSUFBQSxJQUFJSixPQUFPLEdBQUcrQixlQUFlLENBQUMzQixDQUFDLENBQUMsQ0FBQTtJQUNoQyxJQUFJNkIsVUFBVSxHQUFHLElBQUlILFNBQU8sQ0FBQ3ZCLGVBQWUsRUFBRVAsT0FBTyxDQUFDLENBQUE7QUFDdEQsSUFBQSxJQUFJa0MsWUFBWSxHQUFHLElBQUlKLFNBQU8sQ0FBQ2hCLGlCQUFpQixFQUFFZCxPQUFPLENBQUNpQyxVQUFVLENBQUMsQ0FBQyxDQUFBO0lBQ3RFLElBQUlFLElBQUksR0FBR0osZUFBZSxDQUFDM0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUN2QyxJQUFJZ0MsT0FBTyxHQUFHLElBQUlOLFNBQU8sQ0FBQ3ZCLGVBQWUsRUFBRTRCLElBQUksQ0FBQyxDQUFBO0FBQ2hELElBQUEsSUFBSUUsU0FBUyxHQUFHLElBQUlQLFNBQU8sQ0FBQ2hCLGlCQUFpQixFQUFFcUIsSUFBSSxDQUFDQyxPQUFPLENBQUMsQ0FBQyxDQUFBO0FBQzdELElBQUEsSUFBSUUsVUFBVSxHQUFHLElBQUlSLFNBQU8sQ0FBQ2QsYUFBYSxFQUFFa0IsWUFBWSxFQUFFRyxTQUFTLENBQUMsQ0FBQTtJQUVwRSxJQUFJQyxVQUFVLElBQUlOLEtBQUssRUFBRTtBQUN2QnJDLE1BQUFBLFNBQVMsR0FBR3NDLFVBQVUsQ0FBQTtBQUN0QixNQUFBLE1BQUE7QUFDRixLQUFDLE1BQU07QUFDTHRDLE1BQUFBLFNBQVMsR0FBR3lDLE9BQU8sQ0FBQTtBQUNyQixLQUFBO0FBQ0YsR0FBQTtBQUVBLEVBQUEsT0FBT3pDLFNBQVMsQ0FBQTtBQUNsQjs7OztBQ2pDQWIsTUFBTSxDQUFDQyxjQUFjLENBQUNDLG1CQUFPLEVBQUUsWUFBWSxFQUFFO0FBQzNDQyxFQUFBQSxLQUFLLEVBQUUsSUFBQTtBQUNULENBQUMsQ0FBQyxDQUFBO0FBQ3VCc0QsbUJBQUEsQ0FBQSxpQkFBQSxHQUFHQyxrQkFBaUI7QUFFN0MsU0FBU0EsaUJBQWlCQSxHQUFHO0VBQzNCLElBQUlDLFFBQVEsR0FBR2hDLFNBQVMsQ0FBQ1IsTUFBTSxHQUFHLENBQUMsSUFBSVEsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLQyxTQUFTLEdBQUdELFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7RUFDcEYsSUFBSWlDLFFBQVEsR0FBR2pDLFNBQVMsQ0FBQ1IsTUFBTSxHQUFHLENBQUMsSUFBSVEsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLQyxTQUFTLEdBQUdELFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDcEYsRUFBQSxPQUFPZ0MsUUFBUSxHQUFHQyxRQUFRLEdBQUdELFFBQVEsR0FBRyxDQUFDLENBQUE7QUFDM0M7Ozs7QUNUQTNELE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyx5QkFBTyxFQUFFLFlBQVksRUFBRTtBQUMzQ0MsRUFBQUEsS0FBSyxFQUFFLElBQUE7QUFDVCxDQUFDLENBQUMsQ0FBQTtBQUM2QjBELHlCQUFBLENBQUEsdUJBQUEsR0FBR0Msd0JBQXVCO0FBRXpELFNBQVNBLHVCQUF1QkEsQ0FBQ0MsQ0FBQyxFQUFFO0VBQ2xDLElBQUksZ0JBQWdCLElBQUlBLENBQUMsRUFBRTtJQUN6QixJQUFJQyxPQUFPLEdBQUdELENBQUMsQ0FBQ0UsY0FBYyxJQUFJRixDQUFDLENBQUNFLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNyRCxPQUFPO0FBQ0w5QixNQUFBQSxDQUFDLEVBQUU2QixPQUFPLElBQUlBLE9BQU8sQ0FBQ0UsT0FBTztBQUM3QjlCLE1BQUFBLENBQUMsRUFBRTRCLE9BQU8sSUFBSUEsT0FBTyxDQUFDRyxPQUFBQTtLQUN2QixDQUFBO0FBQ0gsR0FBQTtFQUVBLE9BQU87SUFDTGhDLENBQUMsRUFBRTRCLENBQUMsQ0FBQ0csT0FBTztJQUNaOUIsQ0FBQyxFQUFFMkIsQ0FBQyxDQUFDSSxPQUFBQTtHQUNOLENBQUE7QUFDSDs7Ozs7O0FDbEJBbkUsTUFBTSxDQUFDQyxjQUFjLENBQUNDLGFBQU8sRUFBRSxZQUFZLEVBQUU7QUFDM0NDLEVBQUFBLEtBQUssRUFBRSxJQUFBO0FBQ1QsQ0FBQyxDQUFDLENBQUE7QUFDaUJpRSxhQUFBLENBQUEsV0FBQSxHQUFHQyxZQUFXO0FBRWpDLFNBQVNBLFdBQVdBLENBQUN6RCxLQUFLLEVBQUVULEtBQUssRUFBRTtFQUNqQyxJQUFJbUUsSUFBSSxHQUFHMUQsS0FBSyxDQUFDQSxLQUFLLENBQUNPLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQTtFQUVsQyxJQUFJbUQsSUFBSSxLQUFLbkUsS0FBSyxFQUFFO0FBQ2xCUyxJQUFBQSxLQUFLLENBQUMyRCxJQUFJLENBQUNwRSxLQUFLLENBQUMsQ0FBQTtBQUNuQixHQUFBO0FBRUEsRUFBQSxPQUFPUyxLQUFLLENBQUE7QUFDZDs7Ozs7O0FDYkFaLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQywwQkFBTyxFQUFFLFlBQVksRUFBRTtBQUMzQ0MsRUFBQUEsS0FBSyxFQUFFLElBQUE7QUFDVCxDQUFDLENBQUMsQ0FBQTtBQUM4QnFFLDBCQUFBLENBQUEsd0JBQUEsR0FBR0MseUJBQXdCO0FBRTNELElBQUkvRCxRQUFNLEdBQUdDLE9BQW1CLENBQUE7QUFFaEMsU0FBUytELGlCQUFlQSxDQUFDQyxHQUFHLEVBQUU5QyxHQUFHLEVBQUUxQixLQUFLLEVBQUU7RUFBRSxJQUFJMEIsR0FBRyxJQUFJOEMsR0FBRyxFQUFFO0FBQUUzRSxJQUFBQSxNQUFNLENBQUNDLGNBQWMsQ0FBQzBFLEdBQUcsRUFBRTlDLEdBQUcsRUFBRTtBQUFFMUIsTUFBQUEsS0FBSyxFQUFFQSxLQUFLO0FBQUV5RSxNQUFBQSxVQUFVLEVBQUUsSUFBSTtBQUFFQyxNQUFBQSxZQUFZLEVBQUUsSUFBSTtBQUFFQyxNQUFBQSxRQUFRLEVBQUUsSUFBQTtBQUFLLEtBQUMsQ0FBQyxDQUFBO0FBQUUsR0FBQyxNQUFNO0FBQUVILElBQUFBLEdBQUcsQ0FBQzlDLEdBQUcsQ0FBQyxHQUFHMUIsS0FBSyxDQUFBO0FBQUUsR0FBQTtBQUFFLEVBQUEsT0FBT3dFLEdBQUcsQ0FBQTtBQUFFLENBQUE7QUFFaE4sU0FBU0Ysd0JBQXdCQSxHQUFHO0VBQ2xDLElBQUk3RCxLQUFLLEdBQUdlLFNBQVMsQ0FBQ1IsTUFBTSxHQUFHLENBQUMsSUFBSVEsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLQyxTQUFTLEdBQUdELFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUE7RUFDbEYsSUFBSW9ELEtBQUssR0FBRyxFQUFFLENBQUE7QUFDZCxFQUFBLElBQUkvRCxRQUFRLEdBQUdOLFFBQU0sQ0FBQ0wsaUJBQWlCLENBQUNZLFFBQVEsQ0FBQTtBQUNoRCxFQUFBLElBQUlILFFBQVEsR0FBR0osUUFBTSxDQUFDTCxpQkFBaUIsQ0FBQ1UsUUFBUSxDQUFBO0VBQ2hELElBQUlPLENBQUMsR0FBRyxDQUFDLENBQUE7RUFDVCxJQUFJMEQsSUFBSSxHQUFHLEVBQUUsQ0FBQTtBQUNiLEVBQUEsSUFBSW5FLFNBQVMsR0FBR0gsUUFBTSxDQUFDTCxpQkFBaUIsQ0FBQ2tCLElBQUksQ0FBQTtFQUU3QyxPQUFPRCxDQUFDLEdBQUdWLEtBQUssQ0FBQ08sTUFBTSxFQUFFRyxDQUFDLEVBQUUsRUFBRTtBQUM1QixJQUFBLElBQUlKLE9BQU8sR0FBR04sS0FBSyxDQUFDVSxDQUFDLENBQUMsQ0FBQTtBQUN0QixJQUFBLElBQUkrQixJQUFJLEdBQUd6QyxLQUFLLENBQUNVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtJQUV2QixJQUFJMEQsSUFBSSxDQUFDN0QsTUFBTSxFQUFFO01BQ2YsSUFBSThELGdCQUFnQixHQUFHL0QsT0FBTyxHQUFHbUMsSUFBSSxHQUFHckMsUUFBUSxHQUFHRixRQUFRLENBQUE7QUFFM0QsTUFBQSxJQUFJRCxTQUFTLEtBQUtILFFBQU0sQ0FBQ0wsaUJBQWlCLENBQUNrQixJQUFJLEVBQUU7QUFDL0NWLFFBQUFBLFNBQVMsR0FBR29FLGdCQUFnQixDQUFBO0FBQzlCLE9BQUE7TUFFQSxJQUFJQSxnQkFBZ0IsS0FBS3BFLFNBQVMsRUFBRTtBQUNsQ21FLFFBQUFBLElBQUksQ0FBQ1QsSUFBSSxDQUFDckQsT0FBTyxDQUFDLENBQUE7QUFDcEIsT0FBQyxNQUFNO0FBQ0w2RCxRQUFBQSxLQUFLLENBQUNSLElBQUksQ0FBQ0csaUJBQWUsQ0FBQyxFQUFFLEVBQUU3RCxTQUFTLEVBQUVtRSxJQUFJLENBQUNFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtBQUN4REYsUUFBQUEsSUFBSSxHQUFHLEVBQUUsQ0FBQTtBQUNUQSxRQUFBQSxJQUFJLENBQUNULElBQUksQ0FBQ3JELE9BQU8sQ0FBQyxDQUFBO0FBQ2xCTCxRQUFBQSxTQUFTLEdBQUdvRSxnQkFBZ0IsQ0FBQTtBQUM5QixPQUFBO0FBQ0YsS0FBQyxNQUFNO01BQ0wsSUFBSS9ELE9BQU8sS0FBSyxDQUFDLEVBQUU7QUFDakJMLFFBQUFBLFNBQVMsR0FBR0ssT0FBTyxHQUFHLENBQUMsR0FBR0YsUUFBUSxHQUFHRixRQUFRLENBQUE7QUFDL0MsT0FBQTtBQUVBa0UsTUFBQUEsSUFBSSxDQUFDVCxJQUFJLENBQUNyRCxPQUFPLENBQUMsQ0FBQTtBQUNwQixLQUFBO0FBQ0YsR0FBQTtFQUVBLElBQUk4RCxJQUFJLENBQUM3RCxNQUFNLEVBQUU7QUFDZjRELElBQUFBLEtBQUssQ0FBQ1IsSUFBSSxDQUFDRyxpQkFBZSxDQUFDLEVBQUUsRUFBRTdELFNBQVMsRUFBRW1FLElBQUksQ0FBQyxDQUFDLENBQUE7QUFDbEQsR0FBQTtBQUVBLEVBQUEsT0FBT0QsS0FBSyxDQUFBO0FBQ2Q7O0FDbkRBL0UsTUFBTSxDQUFDQyxjQUFjLENBQUNDLGtCQUFPLEVBQUUsWUFBWSxFQUFFO0FBQzNDQyxFQUFBQSxLQUFLLEVBQUUsSUFBQTtBQUNULENBQUMsQ0FBQyxDQUFBO0FBQ3NCZ0Ysa0JBQUEsQ0FBQSxnQkFBQSxHQUFHQyxpQkFBZ0I7QUFFM0MsSUFBSUMsbUJBQW1CLEdBQUcxRSxvQkFBK0IsQ0FBQTtBQUV6RCxJQUFJMkUseUJBQXlCLEdBQUczRSwwQkFBcUMsQ0FBQTtBQUVyRSxJQUFJNEUsd0JBQXdCLEdBQUc1RSx5QkFBb0MsQ0FBQTtBQUVuRSxJQUFJcUMsT0FBTyxHQUFHckMsUUFBbUIsQ0FBQTtBQUVqQyxJQUFJRCxRQUFNLEdBQUdDLE9BQW1CLENBQUE7QUFFaEMsU0FBU3lFLGdCQUFnQkEsQ0FBQ3hFLEtBQUssRUFBRTtFQUMvQixJQUFJNEIsSUFBSSxHQUFHYixTQUFTLENBQUNSLE1BQU0sR0FBRyxDQUFDLElBQUlRLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBS0MsU0FBUyxHQUFHRCxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUdqQixRQUFNLENBQUNILElBQUksQ0FBQ2lGLENBQUMsQ0FBQTtFQUM1RixJQUFJQyxjQUFjLEdBQUc5RCxTQUFTLENBQUNSLE1BQU0sR0FBRyxDQUFDLElBQUlRLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBS0MsU0FBUyxHQUFHRCxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBRTFGLEVBQUEsSUFBSThELGNBQWMsRUFBRTtJQUNsQixJQUFJQyxVQUFVLEdBQUcsSUFBSUoseUJBQXlCLENBQUNiLHdCQUF3QixFQUFFN0QsS0FBSyxDQUFDLENBQUE7QUFFL0UsSUFBQSxJQUFJK0UsVUFBVSxHQUFHLElBQUlKLHdCQUF3QixDQUFDeEMsdUJBQXVCLEVBQUUyQyxVQUFVLEVBQUVELGNBQWMsQ0FBQyxDQUFBO0lBRWxHLE9BQU8sSUFBSXpDLE9BQU8sQ0FBQ1Qsb0JBQW9CLEVBQUVDLElBQUksRUFBRW1ELFVBQVUsQ0FBQyxDQUFBO0FBQzVELEdBQUE7RUFFQSxJQUFJOUUsU0FBUyxHQUFHLElBQUl3RSxtQkFBbUIsQ0FBQzVFLGtCQUFrQixFQUFFRyxLQUFLLENBQUMsQ0FBQTtFQUNsRSxPQUFPLElBQUlvQyxPQUFPLENBQUNULG9CQUFvQixFQUFFQyxJQUFJLEVBQUUzQixTQUFTLENBQUMsQ0FBQTtBQUMzRDs7OztBQzdCQWIsTUFBTSxDQUFDQyxjQUFjLENBQUNDLG1CQUFPLEVBQUUsWUFBWSxFQUFFO0FBQzNDQyxFQUFBQSxLQUFLLEVBQUUsSUFBQTtBQUNULENBQUMsQ0FBQyxDQUFBO0FBQ3VCeUYsbUJBQUEsQ0FBQSxpQkFBQSxHQUFHQyxrQkFBaUI7QUFFN0MsU0FBU0EsaUJBQWlCQSxDQUFDMUQsQ0FBQyxFQUFFQyxDQUFDLEVBQUUwRCxJQUFJLEVBQUU7QUFDckMsRUFBQSxJQUFJQyxTQUFTLEdBQUcxRCxJQUFJLENBQUMyRCxJQUFJLENBQUM3RCxDQUFDLEdBQUdBLENBQUMsR0FBR0MsQ0FBQyxHQUFHQSxDQUFDLENBQUMsQ0FBQTtBQUN4QyxFQUFBLE9BQU8yRCxTQUFTLElBQUlELElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQTtBQUNoQzs7QUNSQTlGLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxtQkFBTyxFQUFFLFlBQVksRUFBRTtBQUMzQ0MsRUFBQUEsS0FBSyxFQUFFLElBQUE7QUFDVCxDQUFDLENBQUMsQ0FBQTtBQUN1QjhGLG1CQUFBLENBQUEsaUJBQUEsR0FBR0Msa0JBQWlCO0FBRTdDLElBQUlDLFlBQVksR0FBR3hGLGFBQXdCLENBQUE7QUFFM0MsSUFBSXlGLGlCQUFpQixHQUFHekYsa0JBQTZCLENBQUE7QUFFckQsSUFBSTBGLGtCQUFrQixHQUFHMUYsbUJBQThCLENBQUE7QUFFdkQsSUFBSTJGLGtCQUFrQixHQUFHM0YsbUJBQThCLENBQUE7QUFFdkQsSUFBSUQsTUFBTSxHQUFHQyxPQUFtQixDQUFBO0FBRWhDLFNBQVN1RixpQkFBaUJBLENBQUNLLEtBQUssRUFBRUMsT0FBTyxFQUFFO0FBQ3pDLEVBQUEsSUFBSUMsS0FBSyxHQUFHRixLQUFLLENBQUNFLEtBQUs7SUFDbkJ0RSxDQUFDLEdBQUdvRSxLQUFLLENBQUNwRSxDQUFDO0lBQ1hDLENBQUMsR0FBR21FLEtBQUssQ0FBQ25FLENBQUM7SUFDWHNFLE1BQU0sR0FBR0gsS0FBSyxDQUFDRyxNQUFNO0lBQ3JCQyxNQUFNLEdBQUdKLEtBQUssQ0FBQ0ksTUFBTSxDQUFBO0FBQ3pCLEVBQUEsSUFBSUMsY0FBYyxHQUFHSixPQUFPLENBQUNJLGNBQWM7SUFDdkNuQixjQUFjLEdBQUdlLE9BQU8sQ0FBQ2YsY0FBYyxDQUFBO0FBQzNDLEVBQUEsSUFBSW9CLE1BQU0sR0FBR0QsY0FBYyxDQUFDekUsQ0FBQyxHQUFHQSxDQUFDLENBQUE7QUFDakMsRUFBQSxJQUFJMkUsTUFBTSxHQUFHMUUsQ0FBQyxHQUFHd0UsY0FBYyxDQUFDeEUsQ0FBQyxDQUFBO0FBQ2pDLEVBQUEsSUFBSTJFLElBQUksR0FBRzFFLElBQUksQ0FBQ0MsR0FBRyxDQUFDdUUsTUFBTSxDQUFDLENBQUE7QUFDM0IsRUFBQSxJQUFJRyxJQUFJLEdBQUczRSxJQUFJLENBQUNDLEdBQUcsQ0FBQ3dFLE1BQU0sQ0FBQyxDQUFBO0VBQzNCLElBQUlYLFlBQVksQ0FBQzlCLFdBQVcsRUFBRXFDLE1BQU0sRUFBRUcsTUFBTSxDQUFDLENBQUE7RUFDN0MsSUFBSVYsWUFBWSxDQUFDOUIsV0FBVyxFQUFFc0MsTUFBTSxFQUFFRyxNQUFNLENBQUMsQ0FBQTtBQUM3QyxFQUFBLElBQUlHLFVBQVUsR0FBRyxJQUFJYixpQkFBaUIsQ0FBQ2hCLGdCQUFnQixFQUFFc0IsTUFBTSxFQUFFaEcsTUFBTSxDQUFDSCxJQUFJLENBQUNpRixDQUFDLEVBQUVDLGNBQWMsQ0FBQyxDQUFBO0FBQy9GLEVBQUEsSUFBSXlCLFVBQVUsR0FBRyxJQUFJZCxpQkFBaUIsQ0FBQ2hCLGdCQUFnQixFQUFFdUIsTUFBTSxFQUFFakcsTUFBTSxDQUFDSCxJQUFJLENBQUNvQyxDQUFDLEVBQUU4QyxjQUFjLENBQUMsQ0FBQTtBQUMvRixFQUFBLElBQUkwQixRQUFRLEdBQUcsSUFBSWQsa0JBQWtCLENBQUMzQyxpQkFBaUIsRUFBRStDLEtBQUssRUFBRVcsSUFBSSxDQUFDQyxHQUFHLEVBQUUsQ0FBQyxDQUFBO0FBQzNFLEVBQUEsSUFBSUMsUUFBUSxHQUFHLElBQUloQixrQkFBa0IsQ0FBQ1QsaUJBQWlCLEVBQUVrQixJQUFJLEVBQUVDLElBQUksRUFBRUcsUUFBUSxDQUFDLENBQUE7RUFDOUUsT0FBTztBQUNMSixJQUFBQSxJQUFJLEVBQUVBLElBQUk7QUFDVkMsSUFBQUEsSUFBSSxFQUFFQSxJQUFJO0FBQ1ZILElBQUFBLE1BQU0sRUFBRUEsTUFBTTtBQUNkQyxJQUFBQSxNQUFNLEVBQUVBLE1BQU07QUFDZEcsSUFBQUEsVUFBVSxFQUFFQSxVQUFVO0FBQ3RCQyxJQUFBQSxVQUFVLEVBQUVBLFVBQVU7QUFDdEJDLElBQUFBLFFBQVEsRUFBRUEsUUFBUTtJQUNsQkksU0FBUyxFQUFFWCxjQUFjLENBQUN6RSxDQUFDO0lBQzNCcUYsU0FBUyxFQUFFWixjQUFjLENBQUN4RSxDQUFDO0FBQzNCa0YsSUFBQUEsUUFBUSxFQUFFQSxRQUFBQTtHQUNYLENBQUE7QUFDSDs7OztBQzdDQXRILE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyw4QkFBTyxFQUFFLFlBQVksRUFBRTtBQUMzQ0MsRUFBQUEsS0FBSyxFQUFFLElBQUE7QUFDVCxDQUFDLENBQUMsQ0FBQTtBQUNrQ3NILDhCQUFBLENBQUEsNEJBQUEsR0FBRyxLQUFLLEVBQUM7QUFFN0MsSUFBSUMsNEJBQTRCLEdBQUcsU0FBU0EsNEJBQTRCQSxDQUFDM0QsQ0FBQyxFQUFFO0FBQzFFLEVBQUEsT0FBTzRELE9BQU8sQ0FBQzVELENBQUMsQ0FBQ0MsT0FBTyxJQUFJRCxDQUFDLENBQUNDLE9BQU8sQ0FBQzdDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUNuRCxDQUFDLENBQUE7QUFFRGpCLDhCQUFBQSxDQUFBQSw0QkFBb0MsR0FBR3dILDRCQUE0Qjs7Ozs7O0FDVG5FMUgsTUFBTSxDQUFDQyxjQUFjLENBQUNDLGVBQU8sRUFBRSxZQUFZLEVBQUU7QUFDM0NDLEVBQUFBLEtBQUssRUFBRSxJQUFBO0FBQ1QsQ0FBQyxDQUFDLENBQUE7QUFDbUJ5SCxlQUFBLENBQUEsYUFBQSxHQUFHQyxjQUFhO0FBRXJDLFNBQVNBLGFBQWFBLEdBQUc7RUFDdkIsSUFBSUMsS0FBSyxHQUFHbkcsU0FBUyxDQUFDUixNQUFNLEdBQUcsQ0FBQyxJQUFJUSxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUtDLFNBQVMsR0FBR0QsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtBQUNsRjNCLEVBQUFBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDNkgsS0FBSyxFQUFFLFNBQVMsRUFBRTtBQUN0Q0MsSUFBQUEsR0FBRyxFQUFFLFNBQVNBLEdBQUdBLEdBQUc7TUFDbEIsSUFBSSxDQUFDQyxrQkFBa0IsR0FBRyxJQUFJLENBQUE7QUFDOUIsTUFBQSxPQUFPLElBQUksQ0FBQTtLQUNaO0FBQ0RwRCxJQUFBQSxVQUFVLEVBQUUsSUFBQTtBQUNkLEdBQUMsQ0FBQyxDQUFBO0FBQ0YsRUFBQSxPQUFPa0QsS0FBSyxDQUFBO0FBQ2Q7O0FDZkE5SCxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MseUJBQU8sRUFBRSxZQUFZLEVBQUU7QUFDM0NDLEVBQUFBLEtBQUssRUFBRSxJQUFBO0FBQ1QsQ0FBQyxDQUFDLENBQUE7QUFDNkI4SCx5QkFBQSxDQUFBLHVCQUFBLEdBQUdDLHdCQUF1QjtBQUM3Q0QseUJBQUEsQ0FBQSxJQUFBLEdBQUcsS0FBSyxFQUFDO0FBRXJCLElBQUlFLGNBQWMsR0FBR3hILGVBQTBCLENBQUE7QUFFL0MsU0FBU3VILHVCQUF1QkEsQ0FBQ0Ysa0JBQWtCLEVBQUU7QUFDbkQsRUFBQSxJQUFJLE9BQU9BLGtCQUFrQixLQUFLLFNBQVMsRUFBRTtBQUMzQyxJQUFBLE9BQU9BLGtCQUFrQixDQUFBO0FBQzNCLEdBQUE7QUFFQSxFQUFBLElBQUlGLEtBQUssR0FBRztBQUNWRSxJQUFBQSxrQkFBa0IsRUFBRUEsa0JBQUFBO0dBQ3JCLENBQUE7RUFFRCxJQUFJO0lBQ0YsSUFBSXhCLE9BQU8sR0FBRyxDQUFDLENBQUMsRUFBRTJCLGNBQWMsQ0FBQ04sYUFBYSxFQUFFQyxLQUFLLENBQUMsQ0FBQTtJQUN0RE0sTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyx5QkFBeUIsRUFBRUMsSUFBSSxFQUFFOUIsT0FBTyxDQUFDLENBQUE7SUFDakU0QixNQUFNLENBQUNHLG1CQUFtQixDQUFDLHlCQUF5QixFQUFFRCxJQUFJLEVBQUU5QixPQUFPLENBQUMsQ0FBQTtBQUN0RSxHQUFDLENBQUMsT0FBT2dDLEdBQUcsRUFBRSxFQUFDO0VBRWYsT0FBT1YsS0FBSyxDQUFDRSxrQkFBa0IsQ0FBQTtBQUNqQyxDQUFBO0FBRUEsSUFBSU0sSUFBSSxHQUFHLFNBQVNBLElBQUlBLEdBQUcsRUFBRSxDQUFBO0FBRTdCcEkseUJBQUFBLENBQUFBLElBQVksR0FBR29JLElBQUk7Ozs7QUM1Qm5CdEksTUFBTSxDQUFDQyxjQUFjLENBQUNDLDZCQUFPLEVBQUUsWUFBWSxFQUFFO0FBQzNDQyxFQUFBQSxLQUFLLEVBQUUsSUFBQTtBQUNULENBQUMsQ0FBQyxDQUFBO0FBQ2lDc0ksNkJBQUEsQ0FBQSwyQkFBQSxHQUFHLEtBQUssRUFBQztBQUU1QyxTQUFTQyxPQUFPQSxDQUFDL0QsR0FBRyxFQUFFO0VBQUUseUJBQXlCLENBQUE7O0FBQUUsRUFBQSxPQUFPK0QsT0FBTyxHQUFHLFVBQVUsSUFBSSxPQUFPQyxNQUFNLElBQUksUUFBUSxJQUFJLE9BQU9BLE1BQU0sQ0FBQ0MsUUFBUSxHQUFHLFVBQVVqRSxHQUFHLEVBQUU7QUFBRSxJQUFBLE9BQU8sT0FBT0EsR0FBRyxDQUFBO0dBQUcsR0FBRyxVQUFVQSxHQUFHLEVBQUU7SUFBRSxPQUFPQSxHQUFHLElBQUksVUFBVSxJQUFJLE9BQU9nRSxNQUFNLElBQUloRSxHQUFHLENBQUNrRSxXQUFXLEtBQUtGLE1BQU0sSUFBSWhFLEdBQUcsS0FBS2dFLE1BQU0sQ0FBQ0csU0FBUyxHQUFHLFFBQVEsR0FBRyxPQUFPbkUsR0FBRyxDQUFBO0FBQUUsR0FBQyxFQUFFK0QsT0FBTyxDQUFDL0QsR0FBRyxDQUFDLENBQUE7QUFBRSxDQUFBO0FBRS9VLElBQUlvRSwyQkFBMkIsR0FBRyxTQUFTQSwyQkFBMkJBLEdBQUc7RUFDdkUsT0FBTyxDQUFDLE9BQU9YLE1BQU0sS0FBSyxXQUFXLEdBQUcsV0FBVyxHQUFHTSxPQUFPLENBQUNOLE1BQU0sQ0FBQyxNQUFNLFFBQVEsS0FBSyxjQUFjLElBQUlBLE1BQU0sSUFBSVQsT0FBTyxDQUFDUyxNQUFNLENBQUNZLFNBQVMsQ0FBQ0MsY0FBYyxDQUFDLENBQUMsQ0FBQTtBQUMvSixDQUFDLENBQUE7QUFFRC9JLDZCQUFBQSxDQUFBQSwyQkFBbUMsR0FBRzZJLDJCQUEyQjs7OztBQ1hqRS9JLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxpQkFBTyxFQUFFLFlBQVksRUFBRTtBQUMzQ0MsRUFBQUEsS0FBSyxFQUFFLElBQUE7QUFDVCxDQUFDLENBQUMsQ0FBQTtBQUNxQitJLGlCQUFBLENBQUEsZUFBQSxHQUFHLEtBQUssRUFBQztBQUVoQyxTQUFTQyxTQUFPQSxDQUFDekgsTUFBTSxFQUFFMEgsY0FBYyxFQUFFO0FBQUUsRUFBQSxJQUFJdEgsSUFBSSxHQUFHOUIsTUFBTSxDQUFDOEIsSUFBSSxDQUFDSixNQUFNLENBQUMsQ0FBQTtFQUFFLElBQUkxQixNQUFNLENBQUNxSixxQkFBcUIsRUFBRTtBQUFFLElBQUEsSUFBSUMsT0FBTyxHQUFHdEosTUFBTSxDQUFDcUoscUJBQXFCLENBQUMzSCxNQUFNLENBQUMsQ0FBQTtJQUFFMEgsY0FBYyxLQUFLRSxPQUFPLEdBQUdBLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLFVBQVVDLEdBQUcsRUFBRTtNQUFFLE9BQU94SixNQUFNLENBQUN5Six3QkFBd0IsQ0FBQy9ILE1BQU0sRUFBRThILEdBQUcsQ0FBQyxDQUFDNUUsVUFBVSxDQUFBO0FBQUUsS0FBQyxDQUFDLENBQUMsRUFBRTlDLElBQUksQ0FBQ3lDLElBQUksQ0FBQ21GLEtBQUssQ0FBQzVILElBQUksRUFBRXdILE9BQU8sQ0FBQyxDQUFBO0FBQUUsR0FBQTtBQUFFLEVBQUEsT0FBT3hILElBQUksQ0FBQTtBQUFFLENBQUE7QUFFcFYsU0FBUzZILGVBQWFBLENBQUNDLE1BQU0sRUFBRTtBQUFFLEVBQUEsS0FBSyxJQUFJdEksQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHSyxTQUFTLENBQUNSLE1BQU0sRUFBRUcsQ0FBQyxFQUFFLEVBQUU7QUFBRSxJQUFBLElBQUl1SSxNQUFNLEdBQUcsSUFBSSxJQUFJbEksU0FBUyxDQUFDTCxDQUFDLENBQUMsR0FBR0ssU0FBUyxDQUFDTCxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUE7QUFBRUEsSUFBQUEsQ0FBQyxHQUFHLENBQUMsR0FBRzZILFNBQU8sQ0FBQ25KLE1BQU0sQ0FBQzZKLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFVakksR0FBRyxFQUFFO01BQUU2QyxpQkFBZSxDQUFDa0YsTUFBTSxFQUFFL0gsR0FBRyxFQUFFZ0ksTUFBTSxDQUFDaEksR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUFFLEtBQUMsQ0FBQyxHQUFHN0IsTUFBTSxDQUFDK0oseUJBQXlCLEdBQUcvSixNQUFNLENBQUNnSyxnQkFBZ0IsQ0FBQ0osTUFBTSxFQUFFNUosTUFBTSxDQUFDK0oseUJBQXlCLENBQUNGLE1BQU0sQ0FBQyxDQUFDLEdBQUdWLFNBQU8sQ0FBQ25KLE1BQU0sQ0FBQzZKLE1BQU0sQ0FBQyxDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFVakksR0FBRyxFQUFFO0FBQUU3QixNQUFBQSxNQUFNLENBQUNDLGNBQWMsQ0FBQzJKLE1BQU0sRUFBRS9ILEdBQUcsRUFBRTdCLE1BQU0sQ0FBQ3lKLHdCQUF3QixDQUFDSSxNQUFNLEVBQUVoSSxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBQUUsS0FBQyxDQUFDLENBQUE7QUFBRSxHQUFBO0FBQUUsRUFBQSxPQUFPK0gsTUFBTSxDQUFBO0FBQUUsQ0FBQTtBQUV6ZixTQUFTbEYsaUJBQWVBLENBQUNDLEdBQUcsRUFBRTlDLEdBQUcsRUFBRTFCLEtBQUssRUFBRTtFQUFFLElBQUkwQixHQUFHLElBQUk4QyxHQUFHLEVBQUU7QUFBRTNFLElBQUFBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDMEUsR0FBRyxFQUFFOUMsR0FBRyxFQUFFO0FBQUUxQixNQUFBQSxLQUFLLEVBQUVBLEtBQUs7QUFBRXlFLE1BQUFBLFVBQVUsRUFBRSxJQUFJO0FBQUVDLE1BQUFBLFlBQVksRUFBRSxJQUFJO0FBQUVDLE1BQUFBLFFBQVEsRUFBRSxJQUFBO0FBQUssS0FBQyxDQUFDLENBQUE7QUFBRSxHQUFDLE1BQU07QUFBRUgsSUFBQUEsR0FBRyxDQUFDOUMsR0FBRyxDQUFDLEdBQUcxQixLQUFLLENBQUE7QUFBRSxHQUFBO0FBQUUsRUFBQSxPQUFPd0UsR0FBRyxDQUFBO0FBQUUsQ0FBQTtBQUVoTixJQUFJc0YsZUFBZSxHQUFHLFNBQVNBLGVBQWVBLEdBQUc7RUFDL0MsSUFBSXpELE9BQU8sR0FBRzdFLFNBQVMsQ0FBQ1IsTUFBTSxHQUFHLENBQUMsSUFBSVEsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLQyxTQUFTLEdBQUdELFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUE7QUFDcEYsRUFBQSxPQUFPZ0ksZUFBYSxDQUFDO0FBQ25CeEgsSUFBQUEsQ0FBQyxFQUFFLENBQUM7QUFDSkMsSUFBQUEsQ0FBQyxFQUFFLENBQUM7QUFDSnFFLElBQUFBLEtBQUssRUFBRSxDQUFDO0FBQ1J5RCxJQUFBQSxTQUFTLEVBQUUsS0FBSztBQUNoQnhELElBQUFBLE1BQU0sRUFBRSxFQUFFO0FBQ1ZDLElBQUFBLE1BQU0sRUFBRSxFQUFBO0dBQ1QsRUFBRUgsT0FBTyxDQUFDLENBQUE7QUFDYixDQUFDLENBQUE7QUFFRHRHLGlCQUFBQSxDQUFBQSxlQUF1QixHQUFHK0osZUFBZTs7OztBQ3ZCekNqSyxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsaUJBQU8sRUFBRSxZQUFZLEVBQUU7QUFDM0NDLEVBQUFBLEtBQUssRUFBRSxJQUFBO0FBQ1QsQ0FBQyxDQUFDLENBQUE7QUFDcUJnSyxpQkFBQSxDQUFBLGVBQUEsR0FBRyxLQUFLLEVBQUM7QUFFaEMsU0FBU2hCLE9BQU9BLENBQUN6SCxNQUFNLEVBQUUwSCxjQUFjLEVBQUU7QUFBRSxFQUFBLElBQUl0SCxJQUFJLEdBQUc5QixNQUFNLENBQUM4QixJQUFJLENBQUNKLE1BQU0sQ0FBQyxDQUFBO0VBQUUsSUFBSTFCLE1BQU0sQ0FBQ3FKLHFCQUFxQixFQUFFO0FBQUUsSUFBQSxJQUFJQyxPQUFPLEdBQUd0SixNQUFNLENBQUNxSixxQkFBcUIsQ0FBQzNILE1BQU0sQ0FBQyxDQUFBO0lBQUUwSCxjQUFjLEtBQUtFLE9BQU8sR0FBR0EsT0FBTyxDQUFDQyxNQUFNLENBQUMsVUFBVUMsR0FBRyxFQUFFO01BQUUsT0FBT3hKLE1BQU0sQ0FBQ3lKLHdCQUF3QixDQUFDL0gsTUFBTSxFQUFFOEgsR0FBRyxDQUFDLENBQUM1RSxVQUFVLENBQUE7QUFBRSxLQUFDLENBQUMsQ0FBQyxFQUFFOUMsSUFBSSxDQUFDeUMsSUFBSSxDQUFDbUYsS0FBSyxDQUFDNUgsSUFBSSxFQUFFd0gsT0FBTyxDQUFDLENBQUE7QUFBRSxHQUFBO0FBQUUsRUFBQSxPQUFPeEgsSUFBSSxDQUFBO0FBQUUsQ0FBQTtBQUVwVixTQUFTNkgsYUFBYUEsQ0FBQ0MsTUFBTSxFQUFFO0FBQUUsRUFBQSxLQUFLLElBQUl0SSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdLLFNBQVMsQ0FBQ1IsTUFBTSxFQUFFRyxDQUFDLEVBQUUsRUFBRTtBQUFFLElBQUEsSUFBSXVJLE1BQU0sR0FBRyxJQUFJLElBQUlsSSxTQUFTLENBQUNMLENBQUMsQ0FBQyxHQUFHSyxTQUFTLENBQUNMLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtBQUFFQSxJQUFBQSxDQUFDLEdBQUcsQ0FBQyxHQUFHNkgsT0FBTyxDQUFDbkosTUFBTSxDQUFDNkosTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLFVBQVVqSSxHQUFHLEVBQUU7TUFBRTZDLGVBQWUsQ0FBQ2tGLE1BQU0sRUFBRS9ILEdBQUcsRUFBRWdJLE1BQU0sQ0FBQ2hJLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFBRSxLQUFDLENBQUMsR0FBRzdCLE1BQU0sQ0FBQytKLHlCQUF5QixHQUFHL0osTUFBTSxDQUFDZ0ssZ0JBQWdCLENBQUNKLE1BQU0sRUFBRTVKLE1BQU0sQ0FBQytKLHlCQUF5QixDQUFDRixNQUFNLENBQUMsQ0FBQyxHQUFHVixPQUFPLENBQUNuSixNQUFNLENBQUM2SixNQUFNLENBQUMsQ0FBQyxDQUFDQyxPQUFPLENBQUMsVUFBVWpJLEdBQUcsRUFBRTtBQUFFN0IsTUFBQUEsTUFBTSxDQUFDQyxjQUFjLENBQUMySixNQUFNLEVBQUUvSCxHQUFHLEVBQUU3QixNQUFNLENBQUN5Six3QkFBd0IsQ0FBQ0ksTUFBTSxFQUFFaEksR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUFFLEtBQUMsQ0FBQyxDQUFBO0FBQUUsR0FBQTtBQUFFLEVBQUEsT0FBTytILE1BQU0sQ0FBQTtBQUFFLENBQUE7QUFFemYsU0FBU2xGLGVBQWVBLENBQUNDLEdBQUcsRUFBRTlDLEdBQUcsRUFBRTFCLEtBQUssRUFBRTtFQUFFLElBQUkwQixHQUFHLElBQUk4QyxHQUFHLEVBQUU7QUFBRTNFLElBQUFBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDMEUsR0FBRyxFQUFFOUMsR0FBRyxFQUFFO0FBQUUxQixNQUFBQSxLQUFLLEVBQUVBLEtBQUs7QUFBRXlFLE1BQUFBLFVBQVUsRUFBRSxJQUFJO0FBQUVDLE1BQUFBLFlBQVksRUFBRSxJQUFJO0FBQUVDLE1BQUFBLFFBQVEsRUFBRSxJQUFBO0FBQUssS0FBQyxDQUFDLENBQUE7QUFBRSxHQUFDLE1BQU07QUFBRUgsSUFBQUEsR0FBRyxDQUFDOUMsR0FBRyxDQUFDLEdBQUcxQixLQUFLLENBQUE7QUFBRSxHQUFBO0FBQUUsRUFBQSxPQUFPd0UsR0FBRyxDQUFBO0FBQUUsQ0FBQTtBQUVoTixJQUFJeUYsZUFBZSxHQUFHLFNBQVNBLGVBQWVBLEdBQUc7RUFDL0MsSUFBSUMsS0FBSyxHQUFHMUksU0FBUyxDQUFDUixNQUFNLEdBQUcsQ0FBQyxJQUFJUSxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUtDLFNBQVMsR0FBR0QsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtBQUNsRixFQUFBLE9BQU9nSSxhQUFhLENBQUM7QUFDbkJXLElBQUFBLE9BQU8sRUFBRSxJQUFJO0FBQ2JWLElBQUFBLE1BQU0sRUFBRSxJQUFJO0FBQ1oxRyxJQUFBQSxLQUFLLEVBQUUsRUFBRTtBQUNUdUMsSUFBQUEsY0FBYyxFQUFFLENBQUM7QUFDakI4RSxJQUFBQSxhQUFhLEVBQUUsQ0FBQztBQUNoQkMsSUFBQUEsb0JBQW9CLEVBQUUsS0FBSztBQUMzQkMsSUFBQUEsb0JBQW9CLEVBQUUsSUFBSTtBQUMxQkMsSUFBQUEsNEJBQTRCLEVBQUUsS0FBSztBQUNuQ0MsSUFBQUEsMkJBQTJCLEVBQUUsS0FBQTtHQUM5QixFQUFFTixLQUFLLENBQUMsQ0FBQTtBQUNYLENBQUMsQ0FBQTtBQUVEbkssaUJBQUFBLENBQUFBLGVBQXVCLEdBQUdrSyxlQUFlOzs7O0FDMUJ6Q3BLLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxZQUFPLEVBQUUsWUFBWSxFQUFFO0FBQzNDQyxFQUFBQSxLQUFLLEVBQUUsSUFBQTtBQUNULENBQUMsQ0FBQyxDQUFBO0FBQ2dCeUssWUFBQSxDQUFBLFVBQUEsR0FBR0MsV0FBVTtBQUUvQixTQUFTQSxVQUFVQSxHQUFHO0VBQ3BCLElBQUk3QyxrQkFBa0IsR0FBR3JHLFNBQVMsQ0FBQ1IsTUFBTSxHQUFHLENBQUMsSUFBSVEsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLQyxTQUFTLEdBQUdELFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUE7QUFFbEcsRUFBQSxJQUFJcUcsa0JBQWtCLEVBQUU7SUFDdEIsT0FBTztBQUNMOEMsTUFBQUEsT0FBTyxFQUFFLEtBQUE7S0FDVixDQUFBO0FBQ0gsR0FBQTtBQUVBLEVBQUEsT0FBTyxFQUFFLENBQUE7QUFDWDs7OztBQ2ZBOUssTUFBTSxDQUFDQyxjQUFjLENBQUNDLGVBQU8sRUFBRSxZQUFZLEVBQUU7QUFDM0NDLEVBQUFBLEtBQUssRUFBRSxJQUFBO0FBQ1QsQ0FBQyxDQUFDLENBQUE7QUFDbUI0SyxlQUFBLENBQUEsYUFBQSxHQUFHQyxjQUFhO0FBRXJDLFNBQVNBLGFBQWFBLENBQUNDLFFBQVEsRUFBRTtFQUMvQixJQUFJQyxLQUFLLEdBQUd2SixTQUFTLENBQUNSLE1BQU0sR0FBRyxDQUFDLElBQUlRLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBS0MsU0FBUyxHQUFHRCxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0VBRWpGLElBQUl1SixLQUFLLEtBQUssQ0FBQyxFQUFFO0FBQ2YsSUFBQSxPQUFPRCxRQUFRLENBQUE7QUFDakIsR0FBQTtBQUVBLEVBQUEsSUFBSTlJLENBQUMsR0FBRzhJLFFBQVEsQ0FBQzlJLENBQUM7SUFDZEMsQ0FBQyxHQUFHNkksUUFBUSxDQUFDN0ksQ0FBQyxDQUFBO0VBQ2xCLElBQUkrSSxjQUFjLEdBQUc5SSxJQUFJLENBQUMrSSxFQUFFLEdBQUcsR0FBRyxHQUFHRixLQUFLLENBQUE7QUFDMUMsRUFBQSxJQUFJRyxRQUFRLEdBQUdsSixDQUFDLEdBQUdFLElBQUksQ0FBQ2lKLEdBQUcsQ0FBQ0gsY0FBYyxDQUFDLEdBQUcvSSxDQUFDLEdBQUdDLElBQUksQ0FBQ2tKLEdBQUcsQ0FBQ0osY0FBYyxDQUFDLENBQUE7QUFDMUUsRUFBQSxJQUFJSyxRQUFRLEdBQUdwSixDQUFDLEdBQUdDLElBQUksQ0FBQ2lKLEdBQUcsQ0FBQ0gsY0FBYyxDQUFDLEdBQUdoSixDQUFDLEdBQUdFLElBQUksQ0FBQ2tKLEdBQUcsQ0FBQ0osY0FBYyxDQUFDLENBQUE7RUFDMUUsT0FBTztBQUNMaEosSUFBQUEsQ0FBQyxFQUFFa0osUUFBUTtBQUNYakosSUFBQUEsQ0FBQyxFQUFFb0osUUFBQUE7R0FDSixDQUFBO0FBQ0g7Ozs7QUNyQkF4TCxDQUFBQSxNQUFNLENBQUNDLGNBQWMsQ0FBVSxPQUFBLEVBQUEsWUFBWSxFQUFFO0dBQzNDRSxLQUFLLEVBQUUsSUFBQTtBQUNULEVBQUMsQ0FBQyxDQUFBO0NBRUYsSUFBSWtGLG1CQUFtQixHQUFHMUUsb0JBQStCLENBQUE7Q0FFekRYLE1BQU0sQ0FBQzhCLElBQUksQ0FBQ3VELG1CQUFtQixDQUFDLENBQUN5RSxPQUFPLENBQUMsVUFBVWpJLEdBQUcsRUFBRTtHQUN0RCxJQUFJQSxHQUFHLEtBQUssU0FBUyxJQUFJQSxHQUFHLEtBQUssWUFBWSxFQUFFLE9BQUE7QUFDL0MsR0FBQSxJQUFJQSxHQUFHLElBQUkzQixPQUFPLElBQUlBLE9BQU8sQ0FBQzJCLEdBQUcsQ0FBQyxLQUFLd0QsbUJBQW1CLENBQUN4RCxHQUFHLENBQUMsRUFBRSxPQUFBO0FBQ2pFN0IsR0FBQUEsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sRUFBRTJCLEdBQUcsRUFBRTtLQUNsQytDLFVBQVUsRUFBRSxJQUFJO0FBQ2hCbUQsS0FBQUEsR0FBRyxFQUFFLFNBQVNBLEdBQUdBLEdBQUc7T0FDbEIsT0FBTzFDLG1CQUFtQixDQUFDeEQsR0FBRyxDQUFDLENBQUE7TUFDakM7QUFDRixJQUFDLENBQUMsQ0FBQTtBQUNKLEVBQUMsQ0FBQyxDQUFBO0NBRUYsSUFBSTBELHdCQUF3QixHQUFHNUUseUJBQW9DLENBQUE7Q0FFbkVYLE1BQU0sQ0FBQzhCLElBQUksQ0FBQ3lELHdCQUF3QixDQUFDLENBQUN1RSxPQUFPLENBQUMsVUFBVWpJLEdBQUcsRUFBRTtHQUMzRCxJQUFJQSxHQUFHLEtBQUssU0FBUyxJQUFJQSxHQUFHLEtBQUssWUFBWSxFQUFFLE9BQUE7QUFDL0MsR0FBQSxJQUFJQSxHQUFHLElBQUkzQixPQUFPLElBQUlBLE9BQU8sQ0FBQzJCLEdBQUcsQ0FBQyxLQUFLMEQsd0JBQXdCLENBQUMxRCxHQUFHLENBQUMsRUFBRSxPQUFBO0FBQ3RFN0IsR0FBQUEsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sRUFBRTJCLEdBQUcsRUFBRTtLQUNsQytDLFVBQVUsRUFBRSxJQUFJO0FBQ2hCbUQsS0FBQUEsR0FBRyxFQUFFLFNBQVNBLEdBQUdBLEdBQUc7T0FDbEIsT0FBT3hDLHdCQUF3QixDQUFDMUQsR0FBRyxDQUFDLENBQUE7TUFDdEM7QUFDRixJQUFDLENBQUMsQ0FBQTtBQUNKLEVBQUMsQ0FBQyxDQUFBO0NBRUYsSUFBSXdFLGtCQUFrQixHQUFHMUYsbUJBQThCLENBQUE7Q0FFdkRYLE1BQU0sQ0FBQzhCLElBQUksQ0FBQ3VFLGtCQUFrQixDQUFDLENBQUN5RCxPQUFPLENBQUMsVUFBVWpJLEdBQUcsRUFBRTtHQUNyRCxJQUFJQSxHQUFHLEtBQUssU0FBUyxJQUFJQSxHQUFHLEtBQUssWUFBWSxFQUFFLE9BQUE7QUFDL0MsR0FBQSxJQUFJQSxHQUFHLElBQUkzQixPQUFPLElBQUlBLE9BQU8sQ0FBQzJCLEdBQUcsQ0FBQyxLQUFLd0Usa0JBQWtCLENBQUN4RSxHQUFHLENBQUMsRUFBRSxPQUFBO0FBQ2hFN0IsR0FBQUEsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sRUFBRTJCLEdBQUcsRUFBRTtLQUNsQytDLFVBQVUsRUFBRSxJQUFJO0FBQ2hCbUQsS0FBQUEsR0FBRyxFQUFFLFNBQVNBLEdBQUdBLEdBQUc7T0FDbEIsT0FBTzFCLGtCQUFrQixDQUFDeEUsR0FBRyxDQUFDLENBQUE7TUFDaEM7QUFDRixJQUFDLENBQUMsQ0FBQTtBQUNKLEVBQUMsQ0FBQyxDQUFBO0NBRUYsSUFBSTRKLHdCQUF3QixHQUFHOUsseUJBQW9DLENBQUE7Q0FFbkVYLE1BQU0sQ0FBQzhCLElBQUksQ0FBQzJKLHdCQUF3QixDQUFDLENBQUMzQixPQUFPLENBQUMsVUFBVWpJLEdBQUcsRUFBRTtHQUMzRCxJQUFJQSxHQUFHLEtBQUssU0FBUyxJQUFJQSxHQUFHLEtBQUssWUFBWSxFQUFFLE9BQUE7QUFDL0MsR0FBQSxJQUFJQSxHQUFHLElBQUkzQixPQUFPLElBQUlBLE9BQU8sQ0FBQzJCLEdBQUcsQ0FBQyxLQUFLNEosd0JBQXdCLENBQUM1SixHQUFHLENBQUMsRUFBRSxPQUFBO0FBQ3RFN0IsR0FBQUEsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sRUFBRTJCLEdBQUcsRUFBRTtLQUNsQytDLFVBQVUsRUFBRSxJQUFJO0FBQ2hCbUQsS0FBQUEsR0FBRyxFQUFFLFNBQVNBLEdBQUdBLEdBQUc7T0FDbEIsT0FBTzBELHdCQUF3QixDQUFDNUosR0FBRyxDQUFDLENBQUE7TUFDdEM7QUFDRixJQUFDLENBQUMsQ0FBQTtBQUNKLEVBQUMsQ0FBQyxDQUFBO0NBRUYsSUFBSTZKLGtCQUFrQixHQUFHL0ssbUJBQThCLENBQUE7Q0FFdkRYLE1BQU0sQ0FBQzhCLElBQUksQ0FBQzRKLGtCQUFrQixDQUFDLENBQUM1QixPQUFPLENBQUMsVUFBVWpJLEdBQUcsRUFBRTtHQUNyRCxJQUFJQSxHQUFHLEtBQUssU0FBUyxJQUFJQSxHQUFHLEtBQUssWUFBWSxFQUFFLE9BQUE7QUFDL0MsR0FBQSxJQUFJQSxHQUFHLElBQUkzQixPQUFPLElBQUlBLE9BQU8sQ0FBQzJCLEdBQUcsQ0FBQyxLQUFLNkosa0JBQWtCLENBQUM3SixHQUFHLENBQUMsRUFBRSxPQUFBO0FBQ2hFN0IsR0FBQUEsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sRUFBRTJCLEdBQUcsRUFBRTtLQUNsQytDLFVBQVUsRUFBRSxJQUFJO0FBQ2hCbUQsS0FBQUEsR0FBRyxFQUFFLFNBQVNBLEdBQUdBLEdBQUc7T0FDbEIsT0FBTzJELGtCQUFrQixDQUFDN0osR0FBRyxDQUFDLENBQUE7TUFDaEM7QUFDRixJQUFDLENBQUMsQ0FBQTtBQUNKLEVBQUMsQ0FBQyxDQUFBO0NBRUYsSUFBSXlELHlCQUF5QixHQUFHM0UsMEJBQXFDLENBQUE7Q0FFckVYLE1BQU0sQ0FBQzhCLElBQUksQ0FBQ3dELHlCQUF5QixDQUFDLENBQUN3RSxPQUFPLENBQUMsVUFBVWpJLEdBQUcsRUFBRTtHQUM1RCxJQUFJQSxHQUFHLEtBQUssU0FBUyxJQUFJQSxHQUFHLEtBQUssWUFBWSxFQUFFLE9BQUE7QUFDL0MsR0FBQSxJQUFJQSxHQUFHLElBQUkzQixPQUFPLElBQUlBLE9BQU8sQ0FBQzJCLEdBQUcsQ0FBQyxLQUFLeUQseUJBQXlCLENBQUN6RCxHQUFHLENBQUMsRUFBRSxPQUFBO0FBQ3ZFN0IsR0FBQUEsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sRUFBRTJCLEdBQUcsRUFBRTtLQUNsQytDLFVBQVUsRUFBRSxJQUFJO0FBQ2hCbUQsS0FBQUEsR0FBRyxFQUFFLFNBQVNBLEdBQUdBLEdBQUc7T0FDbEIsT0FBT3pDLHlCQUF5QixDQUFDekQsR0FBRyxDQUFDLENBQUE7TUFDdkM7QUFDRixJQUFDLENBQUMsQ0FBQTtBQUNKLEVBQUMsQ0FBQyxDQUFBO0NBRUYsSUFBSXlFLGtCQUFrQixHQUFHM0YsbUJBQThCLENBQUE7Q0FFdkRYLE1BQU0sQ0FBQzhCLElBQUksQ0FBQ3dFLGtCQUFrQixDQUFDLENBQUN3RCxPQUFPLENBQUMsVUFBVWpJLEdBQUcsRUFBRTtHQUNyRCxJQUFJQSxHQUFHLEtBQUssU0FBUyxJQUFJQSxHQUFHLEtBQUssWUFBWSxFQUFFLE9BQUE7QUFDL0MsR0FBQSxJQUFJQSxHQUFHLElBQUkzQixPQUFPLElBQUlBLE9BQU8sQ0FBQzJCLEdBQUcsQ0FBQyxLQUFLeUUsa0JBQWtCLENBQUN6RSxHQUFHLENBQUMsRUFBRSxPQUFBO0FBQ2hFN0IsR0FBQUEsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sRUFBRTJCLEdBQUcsRUFBRTtLQUNsQytDLFVBQVUsRUFBRSxJQUFJO0FBQ2hCbUQsS0FBQUEsR0FBRyxFQUFFLFNBQVNBLEdBQUdBLEdBQUc7T0FDbEIsT0FBT3pCLGtCQUFrQixDQUFDekUsR0FBRyxDQUFDLENBQUE7TUFDaEM7QUFDRixJQUFDLENBQUMsQ0FBQTtBQUNKLEVBQUMsQ0FBQyxDQUFBO0NBRUYsSUFBSThKLDZCQUE2QixHQUFHaEwsOEJBQXlDLENBQUE7Q0FFN0VYLE1BQU0sQ0FBQzhCLElBQUksQ0FBQzZKLDZCQUE2QixDQUFDLENBQUM3QixPQUFPLENBQUMsVUFBVWpJLEdBQUcsRUFBRTtHQUNoRSxJQUFJQSxHQUFHLEtBQUssU0FBUyxJQUFJQSxHQUFHLEtBQUssWUFBWSxFQUFFLE9BQUE7QUFDL0MsR0FBQSxJQUFJQSxHQUFHLElBQUkzQixPQUFPLElBQUlBLE9BQU8sQ0FBQzJCLEdBQUcsQ0FBQyxLQUFLOEosNkJBQTZCLENBQUM5SixHQUFHLENBQUMsRUFBRSxPQUFBO0FBQzNFN0IsR0FBQUEsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sRUFBRTJCLEdBQUcsRUFBRTtLQUNsQytDLFVBQVUsRUFBRSxJQUFJO0FBQ2hCbUQsS0FBQUEsR0FBRyxFQUFFLFNBQVNBLEdBQUdBLEdBQUc7T0FDbEIsT0FBTzRELDZCQUE2QixDQUFDOUosR0FBRyxDQUFDLENBQUE7TUFDM0M7QUFDRixJQUFDLENBQUMsQ0FBQTtBQUNKLEVBQUMsQ0FBQyxDQUFBO0NBRUYsSUFBSStKLHdCQUF3QixHQUFHakwseUJBQW9DLENBQUE7Q0FFbkVYLE1BQU0sQ0FBQzhCLElBQUksQ0FBQzhKLHdCQUF3QixDQUFDLENBQUM5QixPQUFPLENBQUMsVUFBVWpJLEdBQUcsRUFBRTtHQUMzRCxJQUFJQSxHQUFHLEtBQUssU0FBUyxJQUFJQSxHQUFHLEtBQUssWUFBWSxFQUFFLE9BQUE7QUFDL0MsR0FBQSxJQUFJQSxHQUFHLElBQUkzQixPQUFPLElBQUlBLE9BQU8sQ0FBQzJCLEdBQUcsQ0FBQyxLQUFLK0osd0JBQXdCLENBQUMvSixHQUFHLENBQUMsRUFBRSxPQUFBO0FBQ3RFN0IsR0FBQUEsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sRUFBRTJCLEdBQUcsRUFBRTtLQUNsQytDLFVBQVUsRUFBRSxJQUFJO0FBQ2hCbUQsS0FBQUEsR0FBRyxFQUFFLFNBQVNBLEdBQUdBLEdBQUc7T0FDbEIsT0FBTzZELHdCQUF3QixDQUFDL0osR0FBRyxDQUFDLENBQUE7TUFDdEM7QUFDRixJQUFDLENBQUMsQ0FBQTtBQUNKLEVBQUMsQ0FBQyxDQUFBO0NBRUYsSUFBSWdLLDRCQUE0QixHQUFHbEwsNkJBQXdDLENBQUE7Q0FFM0VYLE1BQU0sQ0FBQzhCLElBQUksQ0FBQytKLDRCQUE0QixDQUFDLENBQUMvQixPQUFPLENBQUMsVUFBVWpJLEdBQUcsRUFBRTtHQUMvRCxJQUFJQSxHQUFHLEtBQUssU0FBUyxJQUFJQSxHQUFHLEtBQUssWUFBWSxFQUFFLE9BQUE7QUFDL0MsR0FBQSxJQUFJQSxHQUFHLElBQUkzQixPQUFPLElBQUlBLE9BQU8sQ0FBQzJCLEdBQUcsQ0FBQyxLQUFLZ0ssNEJBQTRCLENBQUNoSyxHQUFHLENBQUMsRUFBRSxPQUFBO0FBQzFFN0IsR0FBQUEsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sRUFBRTJCLEdBQUcsRUFBRTtLQUNsQytDLFVBQVUsRUFBRSxJQUFJO0FBQ2hCbUQsS0FBQUEsR0FBRyxFQUFFLFNBQVNBLEdBQUdBLEdBQUc7T0FDbEIsT0FBTzhELDRCQUE0QixDQUFDaEssR0FBRyxDQUFDLENBQUE7TUFDMUM7QUFDRixJQUFDLENBQUMsQ0FBQTtBQUNKLEVBQUMsQ0FBQyxDQUFBO0NBRUYsSUFBSW1CLE9BQU8sR0FBR3JDLFFBQW1CLENBQUE7Q0FFakNYLE1BQU0sQ0FBQzhCLElBQUksQ0FBQ2tCLE9BQU8sQ0FBQyxDQUFDOEcsT0FBTyxDQUFDLFVBQVVqSSxHQUFHLEVBQUU7R0FDMUMsSUFBSUEsR0FBRyxLQUFLLFNBQVMsSUFBSUEsR0FBRyxLQUFLLFlBQVksRUFBRSxPQUFBO0FBQy9DLEdBQUEsSUFBSUEsR0FBRyxJQUFJM0IsT0FBTyxJQUFJQSxPQUFPLENBQUMyQixHQUFHLENBQUMsS0FBS21CLE9BQU8sQ0FBQ25CLEdBQUcsQ0FBQyxFQUFFLE9BQUE7QUFDckQ3QixHQUFBQSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFFMkIsR0FBRyxFQUFFO0tBQ2xDK0MsVUFBVSxFQUFFLElBQUk7QUFDaEJtRCxLQUFBQSxHQUFHLEVBQUUsU0FBU0EsR0FBR0EsR0FBRztPQUNsQixPQUFPL0UsT0FBTyxDQUFDbkIsR0FBRyxDQUFDLENBQUE7TUFDckI7QUFDRixJQUFDLENBQUMsQ0FBQTtBQUNKLEVBQUMsQ0FBQyxDQUFBO0NBRUYsSUFBSXNHLGNBQWMsR0FBR3hILGVBQTBCLENBQUE7Q0FFL0NYLE1BQU0sQ0FBQzhCLElBQUksQ0FBQ3FHLGNBQWMsQ0FBQyxDQUFDMkIsT0FBTyxDQUFDLFVBQVVqSSxHQUFHLEVBQUU7R0FDakQsSUFBSUEsR0FBRyxLQUFLLFNBQVMsSUFBSUEsR0FBRyxLQUFLLFlBQVksRUFBRSxPQUFBO0FBQy9DLEdBQUEsSUFBSUEsR0FBRyxJQUFJM0IsT0FBTyxJQUFJQSxPQUFPLENBQUMyQixHQUFHLENBQUMsS0FBS3NHLGNBQWMsQ0FBQ3RHLEdBQUcsQ0FBQyxFQUFFLE9BQUE7QUFDNUQ3QixHQUFBQSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFFMkIsR0FBRyxFQUFFO0tBQ2xDK0MsVUFBVSxFQUFFLElBQUk7QUFDaEJtRCxLQUFBQSxHQUFHLEVBQUUsU0FBU0EsR0FBR0EsR0FBRztPQUNsQixPQUFPSSxjQUFjLENBQUN0RyxHQUFHLENBQUMsQ0FBQTtNQUM1QjtBQUNGLElBQUMsQ0FBQyxDQUFBO0FBQ0osRUFBQyxDQUFDLENBQUE7Q0FFRixJQUFJaUssZ0JBQWdCLEdBQUduTCxpQkFBNEIsQ0FBQTtDQUVuRFgsTUFBTSxDQUFDOEIsSUFBSSxDQUFDZ0ssZ0JBQWdCLENBQUMsQ0FBQ2hDLE9BQU8sQ0FBQyxVQUFVakksR0FBRyxFQUFFO0dBQ25ELElBQUlBLEdBQUcsS0FBSyxTQUFTLElBQUlBLEdBQUcsS0FBSyxZQUFZLEVBQUUsT0FBQTtBQUMvQyxHQUFBLElBQUlBLEdBQUcsSUFBSTNCLE9BQU8sSUFBSUEsT0FBTyxDQUFDMkIsR0FBRyxDQUFDLEtBQUtpSyxnQkFBZ0IsQ0FBQ2pLLEdBQUcsQ0FBQyxFQUFFLE9BQUE7QUFDOUQ3QixHQUFBQSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFFMkIsR0FBRyxFQUFFO0tBQ2xDK0MsVUFBVSxFQUFFLElBQUk7QUFDaEJtRCxLQUFBQSxHQUFHLEVBQUUsU0FBU0EsR0FBR0EsR0FBRztPQUNsQixPQUFPK0QsZ0JBQWdCLENBQUNqSyxHQUFHLENBQUMsQ0FBQTtNQUM5QjtBQUNGLElBQUMsQ0FBQyxDQUFBO0FBQ0osRUFBQyxDQUFDLENBQUE7Q0FFRixJQUFJa0ssZ0JBQWdCLEdBQUdwTCxpQkFBNEIsQ0FBQTtDQUVuRFgsTUFBTSxDQUFDOEIsSUFBSSxDQUFDaUssZ0JBQWdCLENBQUMsQ0FBQ2pDLE9BQU8sQ0FBQyxVQUFVakksR0FBRyxFQUFFO0dBQ25ELElBQUlBLEdBQUcsS0FBSyxTQUFTLElBQUlBLEdBQUcsS0FBSyxZQUFZLEVBQUUsT0FBQTtBQUMvQyxHQUFBLElBQUlBLEdBQUcsSUFBSTNCLE9BQU8sSUFBSUEsT0FBTyxDQUFDMkIsR0FBRyxDQUFDLEtBQUtrSyxnQkFBZ0IsQ0FBQ2xLLEdBQUcsQ0FBQyxFQUFFLE9BQUE7QUFDOUQ3QixHQUFBQSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFFMkIsR0FBRyxFQUFFO0tBQ2xDK0MsVUFBVSxFQUFFLElBQUk7QUFDaEJtRCxLQUFBQSxHQUFHLEVBQUUsU0FBU0EsR0FBR0EsR0FBRztPQUNsQixPQUFPZ0UsZ0JBQWdCLENBQUNsSyxHQUFHLENBQUMsQ0FBQTtNQUM5QjtBQUNGLElBQUMsQ0FBQyxDQUFBO0FBQ0osRUFBQyxDQUFDLENBQUE7Q0FFRixJQUFJbUssV0FBVyxHQUFHckwsWUFBdUIsQ0FBQTtDQUV6Q1gsTUFBTSxDQUFDOEIsSUFBSSxDQUFDa0ssV0FBVyxDQUFDLENBQUNsQyxPQUFPLENBQUMsVUFBVWpJLEdBQUcsRUFBRTtHQUM5QyxJQUFJQSxHQUFHLEtBQUssU0FBUyxJQUFJQSxHQUFHLEtBQUssWUFBWSxFQUFFLE9BQUE7QUFDL0MsR0FBQSxJQUFJQSxHQUFHLElBQUkzQixPQUFPLElBQUlBLE9BQU8sQ0FBQzJCLEdBQUcsQ0FBQyxLQUFLbUssV0FBVyxDQUFDbkssR0FBRyxDQUFDLEVBQUUsT0FBQTtBQUN6RDdCLEdBQUFBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLEVBQUUyQixHQUFHLEVBQUU7S0FDbEMrQyxVQUFVLEVBQUUsSUFBSTtBQUNoQm1ELEtBQUFBLEdBQUcsRUFBRSxTQUFTQSxHQUFHQSxHQUFHO09BQ2xCLE9BQU9pRSxXQUFXLENBQUNuSyxHQUFHLENBQUMsQ0FBQTtNQUN6QjtBQUNGLElBQUMsQ0FBQyxDQUFBO0FBQ0osRUFBQyxDQUFDLENBQUE7Q0FFRixJQUFJdUUsaUJBQWlCLEdBQUd6RixrQkFBNkIsQ0FBQTtDQUVyRFgsTUFBTSxDQUFDOEIsSUFBSSxDQUFDc0UsaUJBQWlCLENBQUMsQ0FBQzBELE9BQU8sQ0FBQyxVQUFVakksR0FBRyxFQUFFO0dBQ3BELElBQUlBLEdBQUcsS0FBSyxTQUFTLElBQUlBLEdBQUcsS0FBSyxZQUFZLEVBQUUsT0FBQTtBQUMvQyxHQUFBLElBQUlBLEdBQUcsSUFBSTNCLE9BQU8sSUFBSUEsT0FBTyxDQUFDMkIsR0FBRyxDQUFDLEtBQUt1RSxpQkFBaUIsQ0FBQ3ZFLEdBQUcsQ0FBQyxFQUFFLE9BQUE7QUFDL0Q3QixHQUFBQSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFFMkIsR0FBRyxFQUFFO0tBQ2xDK0MsVUFBVSxFQUFFLElBQUk7QUFDaEJtRCxLQUFBQSxHQUFHLEVBQUUsU0FBU0EsR0FBR0EsR0FBRztPQUNsQixPQUFPM0IsaUJBQWlCLENBQUN2RSxHQUFHLENBQUMsQ0FBQTtNQUMvQjtBQUNGLElBQUMsQ0FBQyxDQUFBO0FBQ0osRUFBQyxDQUFDLENBQUE7Q0FFRixJQUFJb0ssY0FBYyxHQUFHdEwsZUFBMEIsQ0FBQTtDQUUvQ1gsTUFBTSxDQUFDOEIsSUFBSSxDQUFDbUssY0FBYyxDQUFDLENBQUNuQyxPQUFPLENBQUMsVUFBVWpJLEdBQUcsRUFBRTtHQUNqRCxJQUFJQSxHQUFHLEtBQUssU0FBUyxJQUFJQSxHQUFHLEtBQUssWUFBWSxFQUFFLE9BQUE7QUFDL0MsR0FBQSxJQUFJQSxHQUFHLElBQUkzQixPQUFPLElBQUlBLE9BQU8sQ0FBQzJCLEdBQUcsQ0FBQyxLQUFLb0ssY0FBYyxDQUFDcEssR0FBRyxDQUFDLEVBQUUsT0FBQTtBQUM1RDdCLEdBQUFBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLEVBQUUyQixHQUFHLEVBQUU7S0FDbEMrQyxVQUFVLEVBQUUsSUFBSTtBQUNoQm1ELEtBQUFBLEdBQUcsRUFBRSxTQUFTQSxHQUFHQSxHQUFHO09BQ2xCLE9BQU9rRSxjQUFjLENBQUNwSyxHQUFHLENBQUMsQ0FBQTtNQUM1QjtBQUNGLElBQUMsQ0FBQyxDQUFBO0FBQ0osRUFBQyxDQUFDLENBQUE7Q0FFRixJQUFJc0UsWUFBWSxHQUFHeEYsYUFBd0IsQ0FBQTtDQUUzQ1gsTUFBTSxDQUFDOEIsSUFBSSxDQUFDcUUsWUFBWSxDQUFDLENBQUMyRCxPQUFPLENBQUMsVUFBVWpJLEdBQUcsRUFBRTtHQUMvQyxJQUFJQSxHQUFHLEtBQUssU0FBUyxJQUFJQSxHQUFHLEtBQUssWUFBWSxFQUFFLE9BQUE7QUFDL0MsR0FBQSxJQUFJQSxHQUFHLElBQUkzQixPQUFPLElBQUlBLE9BQU8sQ0FBQzJCLEdBQUcsQ0FBQyxLQUFLc0UsWUFBWSxDQUFDdEUsR0FBRyxDQUFDLEVBQUUsT0FBQTtBQUMxRDdCLEdBQUFBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLEVBQUUyQixHQUFHLEVBQUU7S0FDbEMrQyxVQUFVLEVBQUUsSUFBSTtBQUNoQm1ELEtBQUFBLEdBQUcsRUFBRSxTQUFTQSxHQUFHQSxHQUFHO09BQ2xCLE9BQU81QixZQUFZLENBQUN0RSxHQUFHLENBQUMsQ0FBQTtNQUMxQjtBQUNGLElBQUMsQ0FBQyxDQUFBO0FBQ0osRUFBQyxDQUFDLENBQUE7Ozs7O0NDNU9GLFNBQVM2RyxPQUFPQSxDQUFDL0QsR0FBRyxFQUFFO0dBQUUseUJBQXlCLENBQUE7O0FBQUUsR0FBQSxPQUFPK0QsT0FBTyxHQUFHLFVBQVUsSUFBSSxPQUFPQyxNQUFNLElBQUksUUFBUSxJQUFJLE9BQU9BLE1BQU0sQ0FBQ0MsUUFBUSxHQUFHLFVBQVVqRSxHQUFHLEVBQUU7S0FBRSxPQUFPLE9BQU9BLEdBQUcsQ0FBQTtJQUFHLEdBQUcsVUFBVUEsR0FBRyxFQUFFO0tBQUUsT0FBT0EsR0FBRyxJQUFJLFVBQVUsSUFBSSxPQUFPZ0UsTUFBTSxJQUFJaEUsR0FBRyxDQUFDa0UsV0FBVyxLQUFLRixNQUFNLElBQUloRSxHQUFHLEtBQUtnRSxNQUFNLENBQUNHLFNBQVMsR0FBRyxRQUFRLEdBQUcsT0FBT25FLEdBQUcsQ0FBQTtBQUFFLElBQUMsRUFBRStELE9BQU8sQ0FBQy9ELEdBQUcsQ0FBQyxDQUFBO0VBQUU7QUFFL1UzRSxDQUFBQSxNQUFNLENBQUNDLGNBQWMsQ0FBVSxPQUFBLEVBQUEsWUFBWSxFQUFFO0dBQzNDRSxLQUFLLEVBQUUsSUFBQTtBQUNULEVBQUMsQ0FBQyxDQUFBO0NBQ0YsSUFBSStMLFlBQVksR0FBRyxFQUFFLENBQUE7QUFDckJoTSxDQUFBQSxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUE7QUFFM0IsQ0FBQSxJQUFJaU0sS0FBSyxHQUFHQyx1QkFBdUIsQ0FBQ3pMLE9BQWtCLENBQUMsQ0FBQTtDQUV2RCxJQUFJRCxNQUFNLEdBQUdDLE9BQWtCLENBQUE7Q0FFL0JYLE1BQU0sQ0FBQzhCLElBQUksQ0FBQ3BCLE1BQU0sQ0FBQyxDQUFDb0osT0FBTyxDQUFDLFVBQVVqSSxHQUFHLEVBQUU7R0FDekMsSUFBSUEsR0FBRyxLQUFLLFNBQVMsSUFBSUEsR0FBRyxLQUFLLFlBQVksRUFBRSxPQUFBO0FBQy9DLEdBQUEsSUFBSTdCLE1BQU0sQ0FBQzhJLFNBQVMsQ0FBQ3VELGNBQWMsQ0FBQ0MsSUFBSSxDQUFDSixZQUFZLEVBQUVySyxHQUFHLENBQUMsRUFBRSxPQUFBO0FBQzdELEdBQUEsSUFBSUEsR0FBRyxJQUFJM0IsT0FBTyxJQUFJQSxPQUFPLENBQUMyQixHQUFHLENBQUMsS0FBS25CLE1BQU0sQ0FBQ21CLEdBQUcsQ0FBQyxFQUFFLE9BQUE7QUFDcEQ3QixHQUFBQSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFFMkIsR0FBRyxFQUFFO0tBQ2xDK0MsVUFBVSxFQUFFLElBQUk7QUFDaEJtRCxLQUFBQSxHQUFHLEVBQUUsU0FBU0EsR0FBR0EsR0FBRztPQUNsQixPQUFPckgsTUFBTSxDQUFDbUIsR0FBRyxDQUFDLENBQUE7TUFDcEI7QUFDRixJQUFDLENBQUMsQ0FBQTtBQUNKLEVBQUMsQ0FBQyxDQUFBO0NBRUYsU0FBUzBLLHdCQUF3QkEsQ0FBQ0MsV0FBVyxFQUFFO0dBQUUsSUFBSSxPQUFPQyxPQUFPLEtBQUssVUFBVSxFQUFFLE9BQU8sSUFBSSxDQUFBO0FBQUUsR0FBQSxJQUFJQyxpQkFBaUIsR0FBRyxJQUFJRCxPQUFPLEVBQUUsQ0FBQTtBQUFFLEdBQUEsSUFBSUUsZ0JBQWdCLEdBQUcsSUFBSUYsT0FBTyxFQUFFLENBQUE7R0FBRSxPQUFPLENBQUNGLHdCQUF3QixHQUFHLFNBQVNBLHdCQUF3QkEsQ0FBQ0MsV0FBVyxFQUFFO0FBQUUsS0FBQSxPQUFPQSxXQUFXLEdBQUdHLGdCQUFnQixHQUFHRCxpQkFBaUIsQ0FBQTtJQUFHLEVBQUVGLFdBQVcsQ0FBQyxDQUFBO0VBQUU7QUFFOVUsQ0FBQSxTQUFTSix1QkFBdUJBLENBQUN6SCxHQUFHLEVBQUU2SCxXQUFXLEVBQUU7R0FBRSxJQUFJLENBQUNBLFdBQVcsSUFBSTdILEdBQUcsSUFBSUEsR0FBRyxDQUFDaUksVUFBVSxFQUFFO0tBQUUsT0FBT2pJLEdBQUcsQ0FBQTtJQUFFO0FBQUUsR0FBQSxJQUFJQSxHQUFHLEtBQUssSUFBSSxJQUFJK0QsT0FBTyxDQUFDL0QsR0FBRyxDQUFDLEtBQUssUUFBUSxJQUFJLE9BQU9BLEdBQUcsS0FBSyxVQUFVLEVBQUU7S0FBRSxPQUFPO09BQUUsU0FBUyxFQUFFQSxHQUFBQTtNQUFLLENBQUE7SUFBRTtBQUFFLEdBQUEsSUFBSWtJLEtBQUssR0FBR04sd0JBQXdCLENBQUNDLFdBQVcsQ0FBQyxDQUFBO0dBQUUsSUFBSUssS0FBSyxJQUFJQSxLQUFLLENBQUNDLEdBQUcsQ0FBQ25JLEdBQUcsQ0FBQyxFQUFFO0FBQUUsS0FBQSxPQUFPa0ksS0FBSyxDQUFDOUUsR0FBRyxDQUFDcEQsR0FBRyxDQUFDLENBQUE7SUFBRTtHQUFFLElBQUlvSSxNQUFNLEdBQUcsRUFBRSxDQUFBO0dBQUUsSUFBSUMscUJBQXFCLEdBQUdoTixNQUFNLENBQUNDLGNBQWMsSUFBSUQsTUFBTSxDQUFDeUosd0JBQXdCLENBQUE7QUFBRSxHQUFBLEtBQUssSUFBSTVILEdBQUcsSUFBSThDLEdBQUcsRUFBRTtBQUFFLEtBQUEsSUFBSTlDLEdBQUcsS0FBSyxTQUFTLElBQUk3QixNQUFNLENBQUM4SSxTQUFTLENBQUN1RCxjQUFjLENBQUNDLElBQUksQ0FBQzNILEdBQUcsRUFBRTlDLEdBQUcsQ0FBQyxFQUFFO0FBQUUsT0FBQSxJQUFJb0wsSUFBSSxHQUFHRCxxQkFBcUIsR0FBR2hOLE1BQU0sQ0FBQ3lKLHdCQUF3QixDQUFDOUUsR0FBRyxFQUFFOUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFBO09BQUUsSUFBSW9MLElBQUksS0FBS0EsSUFBSSxDQUFDbEYsR0FBRyxJQUFJa0YsSUFBSSxDQUFDQyxHQUFHLENBQUMsRUFBRTtTQUFFbE4sTUFBTSxDQUFDQyxjQUFjLENBQUM4TSxNQUFNLEVBQUVsTCxHQUFHLEVBQUVvTCxJQUFJLENBQUMsQ0FBQTtBQUFFLFFBQUMsTUFBTTtTQUFFRixNQUFNLENBQUNsTCxHQUFHLENBQUMsR0FBRzhDLEdBQUcsQ0FBQzlDLEdBQUcsQ0FBQyxDQUFBO1FBQUU7TUFBRTtJQUFFO0FBQUVrTCxHQUFBQSxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUdwSSxHQUFHLENBQUE7R0FBRSxJQUFJa0ksS0FBSyxFQUFFO0tBQUVBLEtBQUssQ0FBQ0ssR0FBRyxDQUFDdkksR0FBRyxFQUFFb0ksTUFBTSxDQUFDLENBQUE7SUFBRTtHQUFFLE9BQU9BLE1BQU0sQ0FBQTtFQUFFO0FBRTF5QixDQUFBLFNBQVNJLGVBQWVBLENBQUNDLFFBQVEsRUFBRUMsV0FBVyxFQUFFO0FBQUUsR0FBQSxJQUFJLEVBQUVELFFBQVEsWUFBWUMsV0FBVyxDQUFDLEVBQUU7QUFBRSxLQUFBLE1BQU0sSUFBSUMsU0FBUyxDQUFDLG1DQUFtQyxDQUFDLENBQUE7SUFBRTtFQUFFO0FBRXhKLENBQUEsU0FBU0MsaUJBQWlCQSxDQUFDM0QsTUFBTSxFQUFFUyxLQUFLLEVBQUU7QUFBRSxHQUFBLEtBQUssSUFBSS9JLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRytJLEtBQUssQ0FBQ2xKLE1BQU0sRUFBRUcsQ0FBQyxFQUFFLEVBQUU7QUFBRSxLQUFBLElBQUlrTSxVQUFVLEdBQUduRCxLQUFLLENBQUMvSSxDQUFDLENBQUMsQ0FBQTtLQUFFa00sVUFBVSxDQUFDNUksVUFBVSxHQUFHNEksVUFBVSxDQUFDNUksVUFBVSxJQUFJLEtBQUssQ0FBQTtLQUFFNEksVUFBVSxDQUFDM0ksWUFBWSxHQUFHLElBQUksQ0FBQTtLQUFFLElBQUksT0FBTyxJQUFJMkksVUFBVSxFQUFFQSxVQUFVLENBQUMxSSxRQUFRLEdBQUcsSUFBSSxDQUFBO0tBQUU5RSxNQUFNLENBQUNDLGNBQWMsQ0FBQzJKLE1BQU0sRUFBRTRELFVBQVUsQ0FBQzNMLEdBQUcsRUFBRTJMLFVBQVUsQ0FBQyxDQUFBO0lBQUU7RUFBRTtBQUU1VCxDQUFBLFNBQVNDLFlBQVlBLENBQUNKLFdBQVcsRUFBRUssVUFBVSxFQUFFQyxXQUFXLEVBQUU7R0FBRSxJQUFJRCxVQUFVLEVBQUVILGlCQUFpQixDQUFDRixXQUFXLENBQUN2RSxTQUFTLEVBQUU0RSxVQUFVLENBQUMsQ0FBQTtHQUFFLElBQUlDLFdBQVcsRUFBRUosaUJBQWlCLENBQUNGLFdBQVcsRUFBRU0sV0FBVyxDQUFDLENBQUE7QUFBRTNOLEdBQUFBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDb04sV0FBVyxFQUFFLFdBQVcsRUFBRTtLQUFFdkksUUFBUSxFQUFFLEtBQUE7QUFBTSxJQUFDLENBQUMsQ0FBQTtHQUFFLE9BQU91SSxXQUFXLENBQUE7RUFBRTtBQUU1UixDQUFBLFNBQVMzSSxlQUFlQSxDQUFDQyxHQUFHLEVBQUU5QyxHQUFHLEVBQUUxQixLQUFLLEVBQUU7R0FBRSxJQUFJMEIsR0FBRyxJQUFJOEMsR0FBRyxFQUFFO0FBQUUzRSxLQUFBQSxNQUFNLENBQUNDLGNBQWMsQ0FBQzBFLEdBQUcsRUFBRTlDLEdBQUcsRUFBRTtPQUFFMUIsS0FBSyxFQUFFQSxLQUFLO09BQUV5RSxVQUFVLEVBQUUsSUFBSTtPQUFFQyxZQUFZLEVBQUUsSUFBSTtPQUFFQyxRQUFRLEVBQUUsSUFBQTtBQUFLLE1BQUMsQ0FBQyxDQUFBO0FBQUUsSUFBQyxNQUFNO0FBQUVILEtBQUFBLEdBQUcsQ0FBQzlDLEdBQUcsQ0FBQyxHQUFHMUIsS0FBSyxDQUFBO0lBQUU7R0FBRSxPQUFPd0UsR0FBRyxDQUFBO0VBQUU7Q0FFaE4sSUFBSWlKLFlBQVksZ0JBQWdCLFlBQVk7R0FDMUMsU0FBU0EsWUFBWUEsQ0FBQ3ZELEtBQUssRUFBRTtBQUMzQjhDLEtBQUFBLGVBQWUsQ0FBQyxJQUFJLEVBQUVTLFlBQVksQ0FBQyxDQUFBO0tBRW5DbEosZUFBZSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQTtLQUV0Q0EsZUFBZSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQTtLQUV0QyxJQUFJLENBQUM2QixLQUFLLEdBQUc0RixLQUFLLENBQUNsQyxlQUFlLEVBQUUsQ0FBQTtLQUNwQyxJQUFJLENBQUNJLEtBQUssR0FBRzhCLEtBQUssQ0FBQy9CLGVBQWUsQ0FBQ0MsS0FBSyxDQUFDLENBQUE7S0FDekMsSUFBSSxDQUFDd0QsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDQSxnQkFBZ0IsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0tBQ3hELElBQUksQ0FBQ0MsZUFBZSxHQUFHLElBQUksQ0FBQ0EsZUFBZSxDQUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7S0FDdEQsSUFBSSxDQUFDRSxjQUFjLEdBQUcsSUFBSSxDQUFDQSxjQUFjLENBQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtLQUNwRCxJQUFJLENBQUNHLGVBQWUsR0FBRyxJQUFJLENBQUNBLGVBQWUsQ0FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0tBQ3RELElBQUksQ0FBQ0ksZUFBZSxHQUFHLElBQUksQ0FBQ0EsZUFBZSxDQUFDSixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7S0FDdEQsSUFBSSxDQUFDSyxhQUFhLEdBQUcsSUFBSSxDQUFDQSxhQUFhLENBQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtLQUNsRCxJQUFJLENBQUNNLGdCQUFnQixHQUFHLElBQUksQ0FBQ0EsZ0JBQWdCLENBQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUMxRDtHQUVBTCxZQUFZLENBQUNHLFlBQVksRUFBRSxDQUFDO0tBQzFCL0wsR0FBRyxFQUFFLE1BQU07QUFDWDFCLEtBQUFBLEtBQUssRUFBRSxTQUFTa08sSUFBSUEsR0FBRztPQUNyQixJQUFJLENBQUNDLG1CQUFtQixFQUFFLENBQUE7T0FDMUIsSUFBSSxDQUFDQyxtQkFBbUIsRUFBRSxDQUFBO01BQzVCO0FBQ0YsSUFBQyxFQUFFO0tBQ0QxTSxHQUFHLEVBQUUsUUFBUTtBQUNiMUIsS0FBQUEsS0FBSyxFQUFFLFNBQVNxTyxNQUFNQSxDQUFDbkUsS0FBSyxFQUFFO0FBQzVCLE9BQUEsSUFBSW9FLFNBQVMsR0FBRyxJQUFJLENBQUNwRSxLQUFLLENBQUE7QUFDMUIsT0FBQSxJQUFJcUUsU0FBUyxHQUFHMU8sTUFBTSxDQUFDMk8sTUFBTSxDQUFDLEVBQUUsRUFBRUYsU0FBUyxFQUFFcEUsS0FBSyxDQUFDLENBQUE7QUFFbkQsT0FBQSxJQUFJb0UsU0FBUyxDQUFDbkUsT0FBTyxLQUFLb0UsU0FBUyxDQUFDcEUsT0FBTyxJQUFJbUUsU0FBUyxDQUFDN0UsTUFBTSxLQUFLOEUsU0FBUyxDQUFDOUUsTUFBTSxFQUFFO1NBQ3BGLElBQUksQ0FBQ2dGLE9BQU8sRUFBRSxDQUFBO1NBQ2QsSUFBSSxDQUFDdkUsS0FBSyxHQUFHcUUsU0FBUyxDQUFBO1NBQ3RCLElBQUksQ0FBQ0wsSUFBSSxFQUFFLENBQUE7QUFDWCxTQUFBLE9BQUE7UUFDRjtPQUVBLElBQUksQ0FBQ2hFLEtBQUssR0FBR3FFLFNBQVMsQ0FBQTtBQUV0QixPQUFBLElBQUlELFNBQVMsQ0FBQ2pFLG9CQUFvQixLQUFLa0UsU0FBUyxDQUFDbEUsb0JBQW9CLElBQUlpRSxTQUFTLENBQUM5RCwyQkFBMkIsS0FBSytELFNBQVMsQ0FBQy9ELDJCQUEyQixFQUFFO1NBQ3hKLElBQUksQ0FBQ2tFLHFCQUFxQixFQUFFLENBQUE7U0FDNUJILFNBQVMsQ0FBQ2xFLG9CQUFvQixHQUFHLElBQUksQ0FBQytELG1CQUFtQixFQUFFLEdBQUcsSUFBSSxDQUFDTSxxQkFBcUIsRUFBRSxDQUFBO1FBQzVGO09BRUEsSUFBSUosU0FBUyxDQUFDaEUsb0JBQW9CLEtBQUtpRSxTQUFTLENBQUNqRSxvQkFBb0IsRUFBRTtTQUNyRSxJQUFJLENBQUNxRSxxQkFBcUIsRUFBRSxDQUFBO1NBQzVCSixTQUFTLENBQUNqRSxvQkFBb0IsR0FBRyxJQUFJLENBQUM2RCxtQkFBbUIsRUFBRSxHQUFHLElBQUksQ0FBQ1EscUJBQXFCLEVBQUUsQ0FBQTtRQUM1RjtNQUNGO0FBQ0YsSUFBQyxFQUFFO0tBQ0RqTixHQUFHLEVBQUUsU0FBUztBQUNkMUIsS0FBQUEsS0FBSyxFQUFFLFNBQVN5TyxPQUFPQSxHQUFHO09BQ3hCLElBQUksQ0FBQ0MscUJBQXFCLEVBQUUsQ0FBQTtPQUM1QixJQUFJLENBQUNDLHFCQUFxQixFQUFFLENBQUE7T0FDNUIsSUFBSSxDQUFDdkksS0FBSyxHQUFHNEYsS0FBSyxDQUFDbEMsZUFBZSxFQUFFLENBQUE7T0FDcEMsSUFBSSxDQUFDSSxLQUFLLEdBQUc4QixLQUFLLENBQUMvQixlQUFlLEVBQUUsQ0FBQTtNQUN0QztBQUNGLElBQUMsRUFBRTtLQUNEdkksR0FBRyxFQUFFLHFCQUFxQjtBQUMxQjFCLEtBQUFBLEtBQUssRUFBRSxTQUFTbU8sbUJBQW1CQSxHQUFHO0FBQ3BDLE9BQUEsSUFBSVMsV0FBVyxHQUFHLElBQUksQ0FBQzFFLEtBQUs7U0FDeEJDLE9BQU8sR0FBR3lFLFdBQVcsQ0FBQ3pFLE9BQU87U0FDN0JWLE1BQU0sR0FBR21GLFdBQVcsQ0FBQ25GLE1BQU07U0FDM0JhLG9CQUFvQixHQUFHc0UsV0FBVyxDQUFDdEUsb0JBQW9CLENBQUE7T0FFM0QsSUFBSUgsT0FBTyxJQUFJRyxvQkFBb0IsRUFBRTtBQUNuQyxTQUFBLElBQUl1RSxRQUFRLEdBQUdwRixNQUFNLElBQUlVLE9BQU8sQ0FBQTtBQUNoQyxTQUFBLElBQUl0QyxrQkFBa0IsR0FBR21FLEtBQUssQ0FBQ2pFLHVCQUF1QixFQUFFLENBQUE7U0FDeEQsSUFBSTFCLE9BQU8sR0FBRzJGLEtBQUssQ0FBQ3RCLFVBQVUsQ0FBQzdDLGtCQUFrQixDQUFDLENBQUE7U0FDbERnSCxRQUFRLENBQUMzRyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDd0YsZ0JBQWdCLEVBQUVySCxPQUFPLENBQUMsQ0FBQTtTQUN2RXdJLFFBQVEsQ0FBQzNHLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMwRixlQUFlLEVBQUV2SCxPQUFPLENBQUMsQ0FBQTtTQUNyRXdJLFFBQVEsQ0FBQzNHLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMyRixjQUFjLEVBQUV4SCxPQUFPLENBQUMsQ0FBQTtRQUNyRTtNQUNGO0FBQ0YsSUFBQyxFQUFFO0tBQ0QzRSxHQUFHLEVBQUUsdUJBQXVCO0FBQzVCMUIsS0FBQUEsS0FBSyxFQUFFLFNBQVMyTyxxQkFBcUJBLEdBQUc7QUFDdEMsT0FBQSxJQUFJRyxZQUFZLEdBQUcsSUFBSSxDQUFDNUUsS0FBSztTQUN6QkMsT0FBTyxHQUFHMkUsWUFBWSxDQUFDM0UsT0FBTztTQUM5QlYsTUFBTSxHQUFHcUYsWUFBWSxDQUFDckYsTUFBTSxDQUFBO0FBQ2hDLE9BQUEsSUFBSW9GLFFBQVEsR0FBR3BGLE1BQU0sSUFBSVUsT0FBTyxDQUFBO09BRWhDLElBQUkwRSxRQUFRLEVBQUU7U0FDWkEsUUFBUSxDQUFDekcsbUJBQW1CLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQ3NGLGdCQUFnQixDQUFDLENBQUE7U0FDakVtQixRQUFRLENBQUN6RyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDd0YsZUFBZSxDQUFDLENBQUE7U0FDL0RpQixRQUFRLENBQUN6RyxtQkFBbUIsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDeUYsY0FBYyxDQUFDLENBQUE7UUFDL0Q7TUFDRjtBQUNGLElBQUMsRUFBRTtLQUNEbk0sR0FBRyxFQUFFLHFCQUFxQjtBQUMxQjFCLEtBQUFBLEtBQUssRUFBRSxTQUFTb08sbUJBQW1CQSxHQUFHO0FBQ3BDLE9BQUEsSUFBSVcsWUFBWSxHQUFHLElBQUksQ0FBQzdFLEtBQUs7U0FDekJDLE9BQU8sR0FBRzRFLFlBQVksQ0FBQzVFLE9BQU87U0FDOUJFLG9CQUFvQixHQUFHMEUsWUFBWSxDQUFDMUUsb0JBQW9CO1NBQ3hERywyQkFBMkIsR0FBR3VFLFlBQVksQ0FBQ3ZFLDJCQUEyQixDQUFBO09BRTFFLElBQUlILG9CQUFvQixJQUFJRixPQUFPLEVBQUU7U0FDbkNBLE9BQU8sQ0FBQ2pDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUM0RixlQUFlLENBQUMsQ0FBQTtTQUMzRDNELE9BQU8sQ0FBQ2pDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUM2RixlQUFlLENBQUMsQ0FBQTtTQUMzRDVELE9BQU8sQ0FBQ2pDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUM4RixhQUFhLENBQUMsQ0FBQTtTQUV2RCxJQUFJeEQsMkJBQTJCLEVBQUU7V0FDL0JMLE9BQU8sQ0FBQ2pDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMrRixnQkFBZ0IsQ0FBQyxDQUFBO1VBQy9EO1FBQ0Y7TUFDRjtBQUNGLElBQUMsRUFBRTtLQUNEdk0sR0FBRyxFQUFFLHVCQUF1QjtBQUM1QjFCLEtBQUFBLEtBQUssRUFBRSxTQUFTME8scUJBQXFCQSxHQUFHO09BQ3RDLElBQUl2RSxPQUFPLEdBQUcsSUFBSSxDQUFDRCxLQUFLLENBQUNDLE9BQU8sQ0FBQTtPQUVoQyxJQUFJQSxPQUFPLEVBQUU7U0FDWEEsT0FBTyxDQUFDL0IsbUJBQW1CLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQzBGLGVBQWUsQ0FBQyxDQUFBO1NBQzlEM0QsT0FBTyxDQUFDL0IsbUJBQW1CLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQzJGLGVBQWUsQ0FBQyxDQUFBO1NBQzlENUQsT0FBTyxDQUFDL0IsbUJBQW1CLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQzRGLGFBQWEsQ0FBQyxDQUFBO1NBQzFEN0QsT0FBTyxDQUFDL0IsbUJBQW1CLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQzZGLGdCQUFnQixDQUFDLENBQUE7UUFDbEU7TUFDRjtBQUNGLElBQUMsRUFBRTtLQUNEdk0sR0FBRyxFQUFFLGNBQWM7QUFDbkIxQixLQUFBQSxLQUFLLEVBQUUsU0FBU2dQLFlBQVlBLENBQUNwTCxDQUFDLEVBQUU7T0FDOUIsSUFBSXlDLE9BQU8sR0FBRzdFLFNBQVMsQ0FBQ1IsTUFBTSxHQUFHLENBQUMsSUFBSVEsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLQyxTQUFTLEdBQUdELFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRztTQUNoRjhELGNBQWMsRUFBRSxDQUFBO1FBQ2pCLENBQUE7T0FDRCxJQUFJOEUsYUFBYSxHQUFHLElBQUksQ0FBQ0YsS0FBSyxDQUFDRSxhQUFhLENBQUE7QUFDNUMsT0FBQSxJQUFJOUUsY0FBYyxHQUFHZSxPQUFPLENBQUNmLGNBQWMsQ0FBQTtPQUMzQyxJQUFJMkosY0FBYyxHQUFHakQsS0FBSyxDQUFDckksdUJBQXVCLENBQUNDLENBQUMsQ0FBQyxDQUFBO09BQ3JELElBQUk2QyxjQUFjLEdBQUd1RixLQUFLLENBQUNuQixhQUFhLENBQUNvRSxjQUFjLEVBQUU3RSxhQUFhLENBQUMsQ0FBQTtPQUN2RSxPQUFPNEIsS0FBSyxDQUFDakcsaUJBQWlCLENBQUMsSUFBSSxDQUFDSyxLQUFLLEVBQUU7U0FDekNLLGNBQWMsRUFBRUEsY0FBYztTQUM5Qm5CLGNBQWMsRUFBRUEsY0FBQUE7QUFDbEIsUUFBQyxDQUFDLENBQUE7TUFDSjtBQUNGLElBQUMsRUFBRTtLQUNENUQsR0FBRyxFQUFFLGtCQUFrQjtBQUN2QjFCLEtBQUFBLEtBQUssRUFBRSxTQUFTME4sZ0JBQWdCQSxDQUFDOUosQ0FBQyxFQUFFO09BQ2xDLElBQUlvSSxLQUFLLENBQUN6RSw0QkFBNEIsQ0FBQzNELENBQUMsQ0FBQyxFQUFFLE9BQUE7T0FDM0MsSUFBSXdHLGFBQWEsR0FBRyxJQUFJLENBQUNGLEtBQUssQ0FBQ0UsYUFBYSxDQUFBO09BQzVDLElBQUk2RSxjQUFjLEdBQUdqRCxLQUFLLENBQUNySSx1QkFBdUIsQ0FBQ0MsQ0FBQyxDQUFDLENBQUE7T0FFckQsSUFBSXNMLG9CQUFvQixHQUFHbEQsS0FBSyxDQUFDbkIsYUFBYSxDQUFDb0UsY0FBYyxFQUFFN0UsYUFBYSxDQUFDO1NBQ3pFcEksQ0FBQyxHQUFHa04sb0JBQW9CLENBQUNsTixDQUFDO1NBQzFCQyxDQUFDLEdBQUdpTixvQkFBb0IsQ0FBQ2pOLENBQUMsQ0FBQTtBQUU5QixPQUFBLElBQUksQ0FBQ21FLEtBQUssR0FBRzRGLEtBQUssQ0FBQ2xDLGVBQWUsQ0FBQztTQUNqQ0MsU0FBUyxFQUFFLEtBQUs7QUFDaEJ6RCxTQUFBQSxLQUFLLEVBQUVXLElBQUksQ0FBQ0MsR0FBRyxFQUFFO1NBQ2pCbEYsQ0FBQyxFQUFFQSxDQUFDO1NBQ0pDLENBQUMsRUFBRUEsQ0FBQUE7QUFDTCxRQUFDLENBQUMsQ0FBQTtNQUNKO0FBQ0YsSUFBQyxFQUFFO0tBQ0RQLEdBQUcsRUFBRSxpQkFBaUI7QUFDdEIxQixLQUFBQSxLQUFLLEVBQUUsU0FBUzROLGVBQWVBLENBQUNoSyxDQUFDLEVBQUU7QUFDakMsT0FBQSxJQUFJdUwsV0FBVyxHQUFHLElBQUksQ0FBQy9JLEtBQUs7U0FDeEJwRSxDQUFDLEdBQUdtTixXQUFXLENBQUNuTixDQUFDO1NBQ2pCQyxDQUFDLEdBQUdrTixXQUFXLENBQUNsTixDQUFDO1NBQ2pCOEgsU0FBUyxHQUFHb0YsV0FBVyxDQUFDcEYsU0FBUyxDQUFBO0FBQ3JDLE9BQUEsSUFBSSxDQUFDL0gsQ0FBQyxJQUFJLENBQUNDLENBQUMsSUFBSStKLEtBQUssQ0FBQ3pFLDRCQUE0QixDQUFDM0QsQ0FBQyxDQUFDLEVBQUUsT0FBQTtPQUN2RCxJQUFJMEIsY0FBYyxHQUFHLElBQUksQ0FBQzRFLEtBQUssQ0FBQzVFLGNBQWMsSUFBSSxDQUFDLENBQUE7T0FFbkQsSUFBSThKLGtCQUFrQixHQUFHLElBQUksQ0FBQ0osWUFBWSxDQUFDcEwsQ0FBQyxFQUFFO1dBQzVDMEIsY0FBYyxFQUFFQSxjQUFBQTtBQUNsQixVQUFDLENBQUM7U0FDRXNCLElBQUksR0FBR3dJLGtCQUFrQixDQUFDeEksSUFBSTtTQUM5QkMsSUFBSSxHQUFHdUksa0JBQWtCLENBQUN2SSxJQUFJO1NBQzlCSCxNQUFNLEdBQUcwSSxrQkFBa0IsQ0FBQzFJLE1BQU07U0FDbENDLE1BQU0sR0FBR3lJLGtCQUFrQixDQUFDekksTUFBTTtTQUNsQ0csVUFBVSxHQUFHc0ksa0JBQWtCLENBQUN0SSxVQUFVO1NBQzFDQyxVQUFVLEdBQUdxSSxrQkFBa0IsQ0FBQ3JJLFVBQVU7U0FDMUNDLFFBQVEsR0FBR29JLGtCQUFrQixDQUFDcEksUUFBUTtTQUN0Q0csUUFBUSxHQUFHaUksa0JBQWtCLENBQUNqSSxRQUFRLENBQUE7QUFFMUMsT0FBQSxJQUFJa0ksWUFBWSxHQUFHLElBQUksQ0FBQ25GLEtBQUs7U0FDekJuSCxLQUFLLEdBQUdzTSxZQUFZLENBQUN0TSxLQUFLO1NBQzFCd0gsNEJBQTRCLEdBQUc4RSxZQUFZLENBQUM5RSw0QkFBNEI7U0FDeEUrRSxZQUFZLEdBQUdELFlBQVksQ0FBQ0MsWUFBWTtTQUN4Q0MsU0FBUyxHQUFHRixZQUFZLENBQUNFLFNBQVMsQ0FBQTtPQUN0QyxJQUFJM0wsQ0FBQyxDQUFDNEwsVUFBVSxJQUFJakYsNEJBQTRCLEVBQUUzRyxDQUFDLENBQUM2TCxjQUFjLEVBQUUsQ0FBQTtBQUNwRSxPQUFBLElBQUk3SSxJQUFJLEdBQUc4SSxNQUFNLENBQUMzTSxLQUFLLENBQUMsSUFBSThELElBQUksR0FBRzZJLE1BQU0sQ0FBQzNNLEtBQUssQ0FBQyxJQUFJLENBQUNnSCxTQUFTLEVBQUUsT0FBQTtBQUVoRSxPQUFBLElBQUl1RixZQUFZLElBQUksQ0FBQ3ZGLFNBQVMsRUFBRTtTQUM5QnVGLFlBQVksQ0FBQzFMLENBQUMsRUFBRTtXQUNkOEMsTUFBTSxFQUFFQSxNQUFNO1dBQ2RDLE1BQU0sRUFBRUEsTUFBTTtXQUNkQyxJQUFJLEVBQUVBLElBQUk7V0FDVkMsSUFBSSxFQUFFQSxJQUFJO1dBQ1ZDLFVBQVUsRUFBRUEsVUFBVTtXQUN0QkMsVUFBVSxFQUFFQSxVQUFVO1dBQ3RCQyxRQUFRLEVBQUVBLFFBQVE7V0FDbEJHLFFBQVEsRUFBRUEsUUFBQUE7QUFDWixVQUFDLENBQUMsQ0FBQTtRQUNKO0FBRUEsT0FBQSxJQUFJLENBQUNmLEtBQUssQ0FBQzJELFNBQVMsR0FBRyxJQUFJLENBQUE7T0FFM0IsSUFBSXdGLFNBQVMsRUFBRTtTQUNiQSxTQUFTLENBQUMzTCxDQUFDLEVBQUU7V0FDWDhDLE1BQU0sRUFBRUEsTUFBTTtXQUNkQyxNQUFNLEVBQUVBLE1BQU07V0FDZEMsSUFBSSxFQUFFQSxJQUFJO1dBQ1ZDLElBQUksRUFBRUEsSUFBSTtXQUNWQyxVQUFVLEVBQUVBLFVBQVU7V0FDdEJDLFVBQVUsRUFBRUEsVUFBVTtXQUN0QkMsUUFBUSxFQUFFQSxRQUFRO1dBQ2xCRyxRQUFRLEVBQUVBLFFBQUFBO0FBQ1osVUFBQyxDQUFDLENBQUE7UUFDSjtNQUNGO0FBQ0YsSUFBQyxFQUFFO0tBQ0R6RixHQUFHLEVBQUUsZ0JBQWdCO0FBQ3JCMUIsS0FBQUEsS0FBSyxFQUFFLFNBQVM2TixjQUFjQSxDQUFDakssQ0FBQyxFQUFFO0FBQ2hDLE9BQUEsSUFBSStMLFlBQVksR0FBRyxJQUFJLENBQUN6RixLQUFLO1NBQ3pCMEYsUUFBUSxHQUFHRCxZQUFZLENBQUNDLFFBQVE7U0FDaENDLEtBQUssR0FBR0YsWUFBWSxDQUFDRSxLQUFLLENBQUE7QUFFOUIsT0FBQSxJQUFJLElBQUksQ0FBQ3pKLEtBQUssQ0FBQzJELFNBQVMsRUFBRTtTQUN4QixJQUFJekUsY0FBYyxHQUFHLElBQUksQ0FBQzRFLEtBQUssQ0FBQzVFLGNBQWMsSUFBSSxDQUFDLENBQUE7U0FDbkQsSUFBSXdGLFFBQVEsR0FBRyxJQUFJLENBQUNrRSxZQUFZLENBQUNwTCxDQUFDLEVBQUU7V0FDbEMwQixjQUFjLEVBQUVBLGNBQUFBO0FBQ2xCLFVBQUMsQ0FBQyxDQUFBO1NBQ0ZzSyxRQUFRLElBQUlBLFFBQVEsQ0FBQ2hNLENBQUMsRUFBRWtILFFBQVEsQ0FBQyxDQUFBO0FBQ25DLFFBQUMsTUFBTTtTQUNMLElBQUlnRixTQUFTLEdBQUcsSUFBSSxDQUFDZCxZQUFZLENBQUNwTCxDQUFDLENBQUMsQ0FBQTtTQUVwQ2lNLEtBQUssSUFBSUEsS0FBSyxDQUFDak0sQ0FBQyxFQUFFa00sU0FBUyxDQUFDLENBQUE7UUFDOUI7T0FFQSxJQUFJLENBQUMxSixLQUFLLEdBQUc0RixLQUFLLENBQUNsQyxlQUFlLEVBQUUsQ0FBQTtNQUN0QztBQUNGLElBQUMsRUFBRTtLQUNEcEksR0FBRyxFQUFFLGlCQUFpQjtBQUN0QjFCLEtBQUFBLEtBQUssRUFBRSxTQUFTOE4sZUFBZUEsQ0FBQ2xLLENBQUMsRUFBRTtPQUNqQyxJQUFJNkYsTUFBTSxHQUFHLElBQUksQ0FBQ1MsS0FBSyxDQUFDVCxNQUFNLENBQUE7T0FFOUIsSUFBSUEsTUFBTSxFQUFFO0FBQ1YsU0FBQSxJQUFJQSxNQUFNLEtBQUs3RixDQUFDLENBQUM2RixNQUFNLEVBQUU7QUFDdkIsV0FBQSxJQUFJLENBQUNpRSxnQkFBZ0IsQ0FBQzlKLENBQUMsQ0FBQyxDQUFBO1VBQzFCO0FBQ0YsUUFBQyxNQUFNO0FBQ0wsU0FBQSxJQUFJLENBQUM4SixnQkFBZ0IsQ0FBQzlKLENBQUMsQ0FBQyxDQUFBO1FBQzFCO01BQ0Y7QUFDRixJQUFDLEVBQUU7S0FDRGxDLEdBQUcsRUFBRSxpQkFBaUI7QUFDdEIxQixLQUFBQSxLQUFLLEVBQUUsU0FBUytOLGVBQWVBLENBQUNuSyxDQUFDLEVBQUU7QUFDakMsT0FBQSxJQUFJLENBQUNnSyxlQUFlLENBQUNoSyxDQUFDLENBQUMsQ0FBQTtNQUN6QjtBQUNGLElBQUMsRUFBRTtLQUNEbEMsR0FBRyxFQUFFLGVBQWU7QUFDcEIxQixLQUFBQSxLQUFLLEVBQUUsU0FBU2dPLGFBQWFBLENBQUNwSyxDQUFDLEVBQUU7T0FDL0IsSUFBSW1HLFNBQVMsR0FBRyxJQUFJLENBQUMzRCxLQUFLLENBQUMyRCxTQUFTLENBQUE7T0FDcEMsSUFBSU4sTUFBTSxHQUFHLElBQUksQ0FBQ1MsS0FBSyxDQUFDVCxNQUFNLENBQUE7T0FFOUIsSUFBSUEsTUFBTSxFQUFFO1NBQ1YsSUFBSUEsTUFBTSxLQUFLN0YsQ0FBQyxDQUFDNkYsTUFBTSxJQUFJTSxTQUFTLEVBQUU7QUFDcEMsV0FBQSxJQUFJLENBQUM4RCxjQUFjLENBQUNqSyxDQUFDLENBQUMsQ0FBQTtVQUN4QjtBQUNGLFFBQUMsTUFBTTtBQUNMLFNBQUEsSUFBSSxDQUFDaUssY0FBYyxDQUFDakssQ0FBQyxDQUFDLENBQUE7UUFDeEI7TUFDRjtBQUNGLElBQUMsRUFBRTtLQUNEbEMsR0FBRyxFQUFFLGtCQUFrQjtBQUN2QjFCLEtBQUFBLEtBQUssRUFBRSxTQUFTaU8sZ0JBQWdCQSxDQUFDckssQ0FBQyxFQUFFO09BQ2xDLElBQUltRyxTQUFTLEdBQUcsSUFBSSxDQUFDM0QsS0FBSyxDQUFDMkQsU0FBUyxDQUFBO09BRXBDLElBQUlBLFNBQVMsRUFBRTtBQUNiLFNBQUEsSUFBSSxDQUFDOEQsY0FBYyxDQUFDakssQ0FBQyxDQUFDLENBQUE7UUFDeEI7TUFDRjtJQUNELENBQUMsRUFBRSxDQUFDO0tBQ0hsQyxHQUFHLEVBQUUsd0JBQXdCO0FBQzdCMUIsS0FBQUEsS0FBSyxFQUFFLFNBQVMrUCxzQkFBc0JBLEdBQUc7T0FDdkMsT0FBTy9ELEtBQUssQ0FBQ3BELDJCQUEyQixFQUFFLENBQUE7TUFDNUM7SUFDRCxDQUFDLENBQUMsQ0FBQTtHQUVILE9BQU82RSxZQUFZLENBQUE7QUFDckIsRUFBQyxFQUFFLENBQUE7QUFFSDFOLENBQUFBLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRzBOLFlBQVksQ0FBQTs7Ozs7Ozs7QUNoVWlGNU4sQ0FBQUEsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sRUFBQyxZQUFZLEVBQUM7R0FBQ0MsS0FBSyxFQUFDLENBQUMsQ0FBQTtBQUFDLEVBQUMsQ0FBQyxFQUFDRCxPQUFrQkEsQ0FBQUEsU0FBQUEsR0FBQUEsT0FBQUEsQ0FBQUEsVUFBQUEsR0FBbUJBLDRCQUEwQkEsT0FBeUJBLENBQUFBLGdCQUFBQSxHQUFBQSxPQUFBQSxDQUFBQSxnQkFBQUEsR0FBeUJBLE9BQXNCQSxDQUFBQSxhQUFBQSxHQUFBQSxPQUFBQSxDQUFBQSxTQUFBQSxHQUFrQixLQUFLLENBQUMsRUFBQyxVQUFTNkQsQ0FBQyxFQUFDO0dBQUNBLENBQUMsQ0FBQ29NLE1BQU0sR0FBQyxRQUFRLEVBQUNwTSxDQUFDLENBQUNxTSxJQUFJLEdBQUMsTUFBTSxFQUFDck0sQ0FBQyxDQUFDc00sTUFBTSxHQUFDLFFBQVEsRUFBQ3RNLENBQUMsQ0FBQ3VNLE1BQU0sR0FBQyxRQUFRLENBQUE7QUFBQSxFQUFDLENBQVdwUSxPQUFPLENBQUNxUSxTQUFTLEtBQUdyUSxPQUFrQixDQUFBLFNBQUEsR0FBQSxFQUFFLENBQUMsQ0FBQyxFQUFDLFVBQVM2RCxDQUFDLEVBQUM7R0FBQ0EsQ0FBQyxDQUFDeU0sT0FBTyxHQUFDLFNBQVMsRUFBQ3pNLENBQUMsQ0FBQzBNLEtBQUssR0FBQyxPQUFPLENBQUE7QUFBQSxFQUFDLENBQWV2USxPQUFPLENBQUN3USxhQUFhLEtBQUd4USxPQUFzQixDQUFBLGFBQUEsR0FBQSxFQUFFLENBQUMsQ0FBQyxFQUFDLFVBQVM2RCxDQUFDLEVBQUM7R0FBQ0EsQ0FBQyxDQUFDNE0sT0FBTyxHQUFDLFNBQVMsRUFBQzVNLENBQUMsQ0FBQzZNLEdBQUcsR0FBQyxLQUFLLEVBQUM3TSxDQUFDLENBQUNvTSxNQUFNLEdBQUMsUUFBUSxFQUFDcE0sQ0FBQyxDQUFDeEMsSUFBSSxHQUFDLE1BQU0sQ0FBQTtBQUFBLEVBQUMsQ0FBa0JyQixPQUFPLENBQUMyUSxnQkFBZ0IsS0FBRzNRLE9BQXlCLENBQUEsZ0JBQUEsR0FBQSxFQUFFLENBQUMsQ0FBQyxFQUFDLFVBQVM2RCxDQUFDLEVBQUM7QUFBQ0EsR0FBQUEsQ0FBQyxDQUFDNE0sT0FBTyxHQUFDLFNBQVMsRUFBQzVNLENBQUMsQ0FBQytNLFNBQVMsR0FBQyxXQUFXLEVBQUMvTSxDQUFDLENBQUNnTixVQUFVLEdBQUMsWUFBWSxDQUFBO0FBQUEsRUFBQyxDQUFrQjdRLE9BQU8sQ0FBQzhRLGdCQUFnQixLQUFHOVEsT0FBeUIsQ0FBQSxnQkFBQSxHQUFBLEVBQUUsQ0FBQyxDQUFDLEVBQUMsVUFBUzZELENBQUMsRUFBQztHQUFDQSxDQUFDLENBQUNrTixHQUFHLEdBQUMsS0FBSyxFQUFDbE4sQ0FBQyxDQUFDbU4sR0FBRyxHQUFDLEtBQUssQ0FBQTtBQUFBLEVBQUMsQ0FBbUJoUixPQUFPLENBQUNpUixpQkFBaUIsS0FBR2pSLE9BQTBCLENBQUEsaUJBQUEsR0FBQSxFQUFFLENBQUMsQ0FBQyxFQUFDLFVBQVM2RCxDQUFDLEVBQUM7R0FBQ0EsQ0FBQyxDQUFDcU4sUUFBUSxHQUFDLCtCQUErQixFQUFDck4sQ0FBQyxDQUFDc04sSUFBSSxHQUFDLGdCQUFnQixFQUFDdE4sQ0FBQyxDQUFDdU4sT0FBTyxHQUFDLHlCQUF5QixFQUFDdk4sQ0FBQyxDQUFDd04sS0FBSyxHQUFDLHVCQUF1QixFQUFDeE4sQ0FBQyxDQUFDeU4sVUFBVSxHQUFDLDRCQUE0QixFQUFDek4sQ0FBQyxDQUFDME4sSUFBSSxHQUFDLHNCQUFzQixFQUFDMU4sQ0FBQyxDQUFDMk4sU0FBUyxHQUFDLDJCQUEyQixFQUFDM04sQ0FBQyxDQUFDNE4sUUFBUSxHQUFDLDBCQUEwQixFQUFDNU4sQ0FBQyxDQUFDNk4sYUFBYSxHQUFDLCtCQUErQixFQUFDN04sQ0FBQyxDQUFDOE4sZ0JBQWdCLEdBQUMsa0NBQWtDLEVBQUM5TixDQUFDLENBQUMrTixVQUFVLEdBQUMsNEJBQTRCLEVBQUMvTixDQUFDLENBQUNnTyxlQUFlLEdBQUMsaUNBQWlDLEVBQUNoTyxDQUFDLENBQUNpTyxXQUFXLEdBQUMsMEJBQTBCLEVBQUNqTyxDQUFDLENBQUNrTyxtQkFBbUIsR0FBQyxrQ0FBa0MsRUFBQ2xPLENBQUMsQ0FBQ21PLGdCQUFnQixHQUFDLCtCQUErQixFQUFDbk8sQ0FBQyxDQUFDb08sV0FBVyxHQUFDLDBCQUEwQixFQUFDcE8sQ0FBQyxDQUFDcU8sbUJBQW1CLEdBQUMsa0NBQWtDLEVBQUNyTyxDQUFDLENBQUNzTyxnQkFBZ0IsR0FBQywrQkFBK0IsQ0FBQTtBQUFBLEVBQUMsQ0FBWW5TLE9BQU8sQ0FBQ29TLFVBQVUsS0FBR3BTLE9BQW1CLENBQUEsVUFBQSxHQUFBLEVBQUUsQ0FBQyxDQUFDLEVBQUMsVUFBUzZELENBQUMsRUFBQztHQUFDQSxDQUFDLENBQUN3TyxNQUFNLEdBQUMsVUFBVSxFQUFDeE8sQ0FBQyxDQUFDeU8sUUFBUSxHQUFDLFlBQVksRUFBQ3pPLENBQUMsQ0FBQzBPLE1BQU0sR0FBQyxVQUFVLEVBQUMxTyxDQUFDLENBQUMyTyxNQUFNLEdBQUMsVUFBVSxFQUFDM08sQ0FBQyxDQUFDNE8sS0FBSyxHQUFDLFNBQVMsRUFBQzVPLENBQUMsQ0FBQzZPLFNBQVMsR0FBQyxhQUFhLEVBQUM3TyxDQUFDLENBQUM4TyxHQUFHLEdBQUMsT0FBTyxFQUFDOU8sQ0FBQyxDQUFDK08sTUFBTSxHQUFDLFVBQVUsQ0FBQTtFQUFDLENBQVc1UyxPQUFPLENBQUM2UyxTQUFTLEtBQUc3UyxPQUFBQSxDQUFBQSxTQUFBQSxHQUFrQixFQUFFLENBQUMsQ0FBQyxDQUFBOzs7OztBQ0E3Z0VGLENBQUFBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLEVBQUMsWUFBWSxFQUFDO0dBQUNDLEtBQUssRUFBQyxDQUFDLENBQUE7QUFBQyxFQUFDLENBQUMsRUFBQ0QsT0FBcUIsQ0FBQSxZQUFBLEdBQUEsS0FBSyxDQUFDLENBQUE7Q0FBQyxJQUFJOFMsT0FBTyxHQUFDclMsS0FBa0IsQ0FBQTtDQUFDVCxPQUFxQixDQUFBLFlBQUEsR0FBQTtHQUFDK1MsV0FBVyxFQUFDLENBQUM7R0FBQ0MsaUJBQWlCLEVBQUMsR0FBRztHQUFDQyx1QkFBdUIsRUFBQyxNQUFNO0FBQUNDLEdBQUFBLGFBQWEsRUFBQ0osT0FBTyxDQUFDdEMsYUFBYSxDQUFDRCxLQUFLO0dBQUM0QyxVQUFVLEVBQUMsQ0FBQyxDQUFDO0dBQUNDLFNBQVMsRUFBQyxDQUFDLENBQUM7R0FBQ0MsUUFBUSxFQUFDLENBQUMsQ0FBQztHQUFDQyxnQkFBZ0IsRUFBQyxDQUFDLENBQUM7QUFBQ0MsR0FBQUEsaUJBQWlCLEVBQUNULE9BQU8sQ0FBQzdCLGlCQUFpQixDQUFDRCxHQUFHO0dBQUN3QyxnQkFBZ0IsRUFBQyxHQUFHO0FBQUNDLEdBQUFBLGdCQUFnQixFQUFDWCxPQUFPLENBQUNuQyxnQkFBZ0IsQ0FBQ0YsT0FBTztHQUFDaUQsUUFBUSxFQUFDLEtBQUssQ0FBQztBQUFDQyxHQUFBQSxnQkFBZ0IsRUFBQ2IsT0FBTyxDQUFDaEMsZ0JBQWdCLENBQUNMLE9BQU87R0FBQ21ELHNCQUFzQixFQUFDLENBQUMsQ0FBQztHQUFDQyxtQkFBbUIsRUFBQyxDQUFDLENBQUM7R0FBQ0MsZ0JBQWdCLEVBQUMsQ0FBQyxDQUFDO0dBQUNDLFFBQVEsRUFBQyxDQUFDLENBQUM7R0FBQ0MsVUFBVSxFQUFDLEtBQUssQ0FBQztHQUFDQyxLQUFLLEVBQUMsS0FBSyxDQUFDO0dBQUNDLGtCQUFrQixFQUFDLENBQUMsQ0FBQztHQUFDQyxhQUFhLEVBQUMsQ0FBQyxDQUFDO0dBQUNDLElBQUksRUFBQyxFQUFFO0dBQUNDLFdBQVcsRUFBQyxDQUFDO0dBQUNDLFlBQVksRUFBQyxDQUFDO0dBQUNDLFVBQVUsRUFBQyxLQUFLLENBQUM7R0FBQ0MsVUFBVSxFQUFDLEVBQUU7R0FBQ0MsaUJBQWlCLEVBQUMsR0FBRztHQUFDQyxhQUFhLEVBQUMsQ0FBQyxDQUFDO0dBQUNDLGFBQWEsRUFBQyxDQUFDLENBQUM7R0FBQ0Msc0JBQXNCLEVBQUMsQ0FBQyxDQUFDO0dBQUNDLGFBQWEsRUFBQyxZQUFVLEVBQUU7R0FBQ0MsU0FBUyxFQUFDLFlBQVUsRUFBRTtHQUFDQyxhQUFhLEVBQUMsS0FBSyxDQUFDO0dBQUNDLGFBQWEsRUFBQyxZQUFVLEVBQUU7R0FBQ0MsY0FBYyxFQUFDLFlBQVUsRUFBQztFQUFFLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0NDQXI1QixJQUFJQyxRQUFRLEdBQUMsWUFBVTtLQUFDLE9BQU0sQ0FBQ0EsUUFBUSxHQUFDcFYsTUFBTSxDQUFDMk8sTUFBTSxJQUFFLFVBQVMwRyxDQUFDLEVBQUM7T0FBQyxLQUFJLElBQUlDLENBQUMsRUFBQ0MsQ0FBQyxHQUFDLENBQUMsRUFBQ2pVLENBQUMsR0FBQ0ssU0FBUyxDQUFDUixNQUFNLEVBQUNvVSxDQUFDLEdBQUNqVSxDQUFDLEVBQUNpVSxDQUFDLEVBQUUsRUFBQyxLQUFJLElBQUlDLENBQUMsSUFBSUYsQ0FBQyxHQUFDM1QsU0FBUyxDQUFDNFQsQ0FBQyxDQUFDLEVBQUN2VixNQUFNLENBQUM4SSxTQUFTLENBQUN1RCxjQUFjLENBQUNDLElBQUksQ0FBQ2dKLENBQUMsRUFBQ0UsQ0FBQyxDQUFDLEtBQUdILENBQUMsQ0FBQ0csQ0FBQyxDQUFDLEdBQUNGLENBQUMsQ0FBQ0UsQ0FBQyxDQUFDLENBQUMsQ0FBQTtPQUFDLE9BQU9ILENBQUMsQ0FBQTtBQUFBLE1BQUMsRUFBRTNMLEtBQUssQ0FBQyxJQUFJLEVBQUMvSCxTQUFTLENBQUMsQ0FBQTtJQUFDO0dBQUM4VCxnQkFBZ0IsSUFBRXpWLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLEVBQUMsWUFBWSxFQUFDO0tBQUNDLEtBQUssRUFBQyxDQUFDLENBQUE7SUFBRSxDQUFDLEVBQUNELE9BQTBCQSxDQUFBQSxpQkFBQUEsR0FBQUEsT0FBQUEsQ0FBQUEsZ0JBQUFBLEdBQXlCLEtBQUssQ0FBQyxFQUFDLFVBQVNtVixDQUFDLEVBQUM7QUFBQyxLQUFBLE9BQU9BLENBQUMsQ0FBQ0ssR0FBRyxDQUFDLFVBQVNMLENBQUMsRUFBQztPQUFDLE9BQU07U0FBQ00sS0FBSyxFQUFDTixDQUFDLENBQUNNLEtBQUs7U0FBQzFLLFFBQVEsRUFBQyxDQUFBO1FBQUUsQ0FBQTtBQUFBLE1BQUMsQ0FBQyxDQUFBO0FBQUEsSUFBQyxDQUFDO0dBQUMySyxpQkFBaUIsSUFBRTFWLE9BQXlCdVYsQ0FBQUEsZ0JBQUFBLEdBQUFBLGdCQUFnQixFQUFDLFVBQVNKLENBQUMsRUFBQ0MsQ0FBQyxFQUFDO0FBQUMsS0FBQSxPQUFPLEtBQUssQ0FBQyxLQUFHQSxDQUFDLEtBQUdBLENBQUMsR0FBQyxDQUFDLENBQUMsRUFBQ0QsQ0FBQyxDQUFDSyxHQUFHLENBQUMsVUFBU0wsQ0FBQyxFQUFDO0FBQUMsT0FBQSxPQUFPQSxDQUFDLENBQUNwSyxRQUFRLEdBQUNxSyxDQUFDLEdBQUNGLFFBQVEsQ0FBQ0EsUUFBUSxDQUFDLEVBQUUsRUFBQ0MsQ0FBQyxDQUFDLEVBQUM7U0FBQ3BLLFFBQVEsRUFBQ3FLLENBQUFBO1FBQUUsQ0FBQyxHQUFDRCxDQUFDLENBQUE7QUFBQSxNQUFDLENBQUMsQ0FBQTtBQUFBLElBQUMsQ0FBQyxDQUFBO0FBQUNuVixDQUFBQSxPQUFBQSxDQUFBQSxpQkFBQUEsR0FBMEIwVixpQkFBaUIsQ0FBQTs7Ozs7OztBQ0Evb0I1VixDQUFBQSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFDLFlBQVksRUFBQztHQUFDQyxLQUFLLEVBQUMsQ0FBQyxDQUFBO0VBQUUsQ0FBQyxFQUFDRCxPQUFvQ0EsQ0FBQUEsMkJBQUFBLEdBQUFBLE9BQUFBLENBQUFBLDJCQUFBQSxHQUFvQ0EsbUNBQWlDQSxPQUE4QkEsQ0FBQUEscUJBQUFBLEdBQUFBLE9BQUFBLENBQUFBLHdCQUFBQSxHQUFpQ0EsT0FBcUNBLENBQUFBLDRCQUFBQSxHQUFBQSxPQUFBQSxDQUFBQSwwQkFBQUEsR0FBbUNBLE9BQTJCQSxDQUFBQSxrQkFBQUEsR0FBQUEsT0FBQUEsQ0FBQUEsYUFBQUEsR0FBc0JBLDZCQUEyQkEsT0FBdUNBLENBQUFBLDhCQUFBQSxHQUFBQSxPQUFBQSxDQUFBQSxnQkFBQUEsR0FBeUJBLE9BQXlCQSxDQUFBQSxnQkFBQUEsR0FBQUEsT0FBQUEsQ0FBQUEsMEJBQUFBLEdBQW1DQSxPQUFvQ0EsQ0FBQUEsMkJBQUFBLEdBQUFBLE9BQUFBLENBQUFBLDJCQUFBQSxHQUFvQ0EseUJBQXVCQSxPQUFzQkEsQ0FBQUEsYUFBQUEsR0FBQUEsT0FBQUEsQ0FBQUEsYUFBQUEsR0FBc0IsS0FBSyxDQUFDLENBQUE7QUFBQyxDQUFBLElBQUkyVixhQUFhLEdBQUMsVUFBUzlSLENBQUMsRUFBQ3VSLENBQUMsRUFBQztLQUFDLE9BQU0sQ0FBQ3ZSLENBQUMsR0FBQyxLQUFLLENBQUMsS0FBR0EsQ0FBQyxHQUFDLENBQUMsR0FBQ0EsQ0FBQyxLQUFHdVIsQ0FBQyxHQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLEdBQUMsQ0FBQyxHQUFDQSxDQUFDLENBQUMsQ0FBQTtJQUFDO0dBQUNRLGFBQWEsSUFBRTVWLE9BQXNCMlYsQ0FBQUEsYUFBQUEsR0FBQUEsYUFBYSxFQUFDLFVBQVM5UixDQUFDLEVBQUN1UixDQUFDLEVBQUM7S0FBQyxJQUFHLEtBQUssQ0FBQyxLQUFHdlIsQ0FBQyxLQUFHQSxDQUFDLEdBQUMsQ0FBQyxDQUFDLEVBQUN1UixDQUFDLEdBQUMsS0FBSyxDQUFDLEtBQUdBLENBQUMsR0FBQyxDQUFDLEdBQUNBLENBQUMsRUFBQztPQUFDLElBQUdBLENBQUMsSUFBRXZSLENBQUMsRUFBQyxPQUFPdVIsQ0FBQyxHQUFDLENBQUMsQ0FBQTtBQUFDLE9BQUEsSUFBRyxDQUFDLEdBQUN2UixDQUFDLEVBQUMsT0FBT0EsQ0FBQyxDQUFBO01BQUE7S0FBQyxPQUFPLENBQUMsQ0FBQTtBQUFBLElBQUMsQ0FBQztHQUFDZ1MsY0FBYyxJQUFFN1YsT0FBQUEsQ0FBQUEsYUFBQUEsR0FBc0I0VixhQUFhLEVBQUMsVUFBUy9SLENBQUMsRUFBQztBQUFDLEtBQUEsSUFBSXVSLENBQUMsR0FBQ3ZSLENBQUMsQ0FBQ2lTLFVBQVU7T0FBQ1YsQ0FBQyxHQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLEdBQUMsQ0FBQyxHQUFDQSxDQUFDO09BQUNoVSxDQUFDLEdBQUN5QyxDQUFDLENBQUNrUyxVQUFVO09BQUNsUyxDQUFDLEdBQUNBLENBQUMsQ0FBQ2tRLFFBQVEsQ0FBQTtLQUFDLE9BQU8sS0FBSyxDQUFDLEtBQUdsUSxDQUFDLElBQUVBLENBQUMsR0FBQ3VSLENBQUMsR0FBQyxJQUFHcFYsT0FBTyxDQUFDNFYsYUFBYSxFQUFFUixDQUFDLEVBQUMsS0FBSyxDQUFDLEtBQUdoVSxDQUFDLEdBQUMsQ0FBQyxHQUFDQSxDQUFDLENBQUMsQ0FBQTtBQUFBLElBQUMsQ0FBQztHQUFDNFUsMkJBQTJCLElBQUVoVyxPQUF1QjZWLENBQUFBLGNBQUFBLEdBQUFBLGNBQWMsRUFBQyxVQUFTaFMsQ0FBQyxFQUFDdVIsQ0FBQyxFQUFDO0FBQUMsS0FBQSxPQUFPdlIsQ0FBQyxHQUFDLENBQUMsR0FBQ3VSLENBQUMsR0FBQyxDQUFDLEdBQUNBLENBQUMsSUFBRXZSLENBQUMsR0FBQyxDQUFDLEdBQUNBLENBQUMsQ0FBQTtBQUFBLElBQUMsQ0FBQztHQUFDb1MsMkJBQTJCLElBQUVqVyxPQUFvQ2dXLENBQUFBLDJCQUFBQSxHQUFBQSwyQkFBMkIsRUFBQyxVQUFTblMsQ0FBQyxFQUFDdVIsQ0FBQyxFQUFDO0tBQUMsT0FBT3ZSLENBQUMsR0FBQyxDQUFDLElBQUV1UixDQUFDLElBQUV2UixDQUFDLENBQUE7QUFBQSxJQUFDLENBQUM7R0FBQ3FTLDBCQUEwQixJQUFFbFcsT0FBb0NpVyxDQUFBQSwyQkFBQUEsR0FBQUEsMkJBQTJCLEVBQUMsVUFBU3BTLENBQUMsRUFBQ3VSLENBQUMsRUFBQztLQUFDLE9BQU92UixDQUFDLEdBQUMsQ0FBQyxJQUFFdVIsQ0FBQyxJQUFFdlIsQ0FBQyxDQUFBO0FBQUEsSUFBQyxDQUFDO0dBQUNzUyxnQkFBZ0IsSUFBRW5XLE9BQW1Da1csQ0FBQUEsMEJBQUFBLEdBQUFBLDBCQUEwQixFQUFDLFVBQVNyUyxDQUFDLEVBQUN1UixDQUFDLEVBQUM7QUFBQyxLQUFBLElBQUloVSxDQUFDLEdBQUN5QyxDQUFDLENBQUN1UyxXQUFXO09BQUN2UyxDQUFDLEdBQUNBLENBQUMsQ0FBQ3dTLGlCQUFpQjtPQUFDeFMsQ0FBQyxHQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLEdBQUMsRUFBRSxHQUFDQSxDQUFDO09BQUNzUixDQUFDLEdBQUNDLENBQUMsQ0FBQ3JCLFFBQVE7T0FBQ3FCLENBQUMsR0FBQ0EsQ0FBQyxDQUFDWCxpQkFBaUIsQ0FBQTtLQUFDLE9BQU9VLENBQUMsR0FBQyxDQUFDdFIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFHekMsQ0FBQyxHQUFDLENBQUMsR0FBQ0EsQ0FBQyxDQUFDLElBQUUsRUFBRSxFQUFFMkosUUFBUSxJQUFFb0ssQ0FBQyxHQUFDLENBQUN0UixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUUsRUFBRSxFQUFFNFIsS0FBSyxFQUFDdFQsSUFBSSxDQUFDbVUsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFHbEIsQ0FBQyxHQUFDLENBQUMsR0FBQ0EsQ0FBQyxFQUFDLEtBQUssQ0FBQyxLQUFHRCxDQUFDLEdBQUMsQ0FBQyxHQUFDQSxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQUEsSUFBQyxDQUFDO0dBQUNvQixnQkFBZ0IsSUFBRXZXLE9BQXlCbVcsQ0FBQUEsZ0JBQUFBLEdBQUFBLGdCQUFnQixFQUFDLFVBQVN0UyxDQUFDLEVBQUN1UixDQUFDLEVBQUM7QUFBQyxLQUFBLElBQUloVSxDQUFDLEdBQUNnVSxDQUFDLENBQUNyQixRQUFRO09BQUNxQixDQUFDLEdBQUNBLENBQUMsQ0FBQ1gsaUJBQWlCO09BQUNXLENBQUMsR0FBQyxLQUFLLENBQUMsS0FBR0EsQ0FBQyxHQUFDLENBQUMsR0FBQ0EsQ0FBQztPQUFDRCxDQUFDLEdBQUN0UixDQUFDLENBQUNrUyxVQUFVO09BQUNTLENBQUMsR0FBQzNTLENBQUMsQ0FBQ3VTLFdBQVc7T0FBQ2YsQ0FBQyxHQUFDeFIsQ0FBQyxDQUFDNFMsWUFBWTtPQUFDcEIsQ0FBQyxHQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLEdBQUMsQ0FBQyxHQUFDQSxDQUFDO09BQUN4UixDQUFDLEdBQUNBLENBQUMsQ0FBQ3dTLGlCQUFpQjtPQUFDeFMsQ0FBQyxHQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLEdBQUMsRUFBRSxHQUFDQSxDQUFDLENBQUE7S0FBQyxPQUFPekMsQ0FBQyxHQUFDLENBQUN5QyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBR3NSLENBQUMsR0FBQyxDQUFDLEdBQUNBLENBQUMsSUFBRSxJQUFHblYsT0FBTyxDQUFDMlYsYUFBYSxFQUFFTixDQUFDLEVBQUMsS0FBSyxDQUFDLEtBQUdtQixDQUFDLEdBQUMsQ0FBQyxHQUFDQSxDQUFDLENBQUMsQ0FBQyxJQUFFLEVBQUUsRUFBRXpMLFFBQVEsSUFBRSxDQUFDLEdBQUMsSUFBRy9LLE9BQU8sQ0FBQzBXLGFBQWEsRUFBRSxDQUFDckIsQ0FBQyxFQUFDeFIsQ0FBQyxDQUFDLENBQUNrSCxRQUFRLEdBQUNxSyxDQUFDLENBQUE7QUFBQSxJQUFDLENBQUM7R0FBQ3VCLDhCQUE4QixJQUFFM1csT0FBQUEsQ0FBQUEsZ0JBQUFBLEdBQXlCdVcsZ0JBQWdCLEVBQUMsVUFBUzFTLENBQUMsRUFBQ3VSLENBQUMsRUFBQ2hVLENBQUMsRUFBQztBQUFDLEtBQUEsT0FBTSxDQUFDZ1UsQ0FBQyxJQUFFdlIsQ0FBQyxJQUFFMUIsSUFBSSxDQUFDQyxHQUFHLENBQUN5QixDQUFDLENBQUMsSUFBRXpDLENBQUMsQ0FBQTtBQUFBLElBQUMsQ0FBQztHQUFDd1Ysa0JBQWtCLElBQUU1VyxPQUFBQSxDQUFBQSw4QkFBQUEsR0FBdUMyVyw4QkFBOEIsRUFBQyxVQUFTOVMsQ0FBQyxFQUFDO0FBQUMsS0FBQSxPQUFNLENBQUNBLENBQUMsR0FBQyxLQUFLLENBQUMsS0FBR0EsQ0FBQyxHQUFDLENBQUMsR0FBQ0EsQ0FBQyxJQUFFLENBQUMsQ0FBQTtBQUFBLElBQUMsQ0FBQztHQUFDNlMsYUFBYSxJQUFFMVcsT0FBMkI0VyxDQUFBQSxrQkFBQUEsR0FBQUEsa0JBQWtCLEVBQUMsVUFBUy9TLENBQUMsRUFBQ3VSLENBQUMsRUFBQztBQUFDLEtBQUEsT0FBTSxDQUFDQSxDQUFDLEdBQUMsS0FBSyxDQUFDLEtBQUdBLENBQUMsR0FBQyxFQUFFLEdBQUNBLENBQUMsRUFBRXBRLEtBQUssQ0FBQ25CLENBQUMsR0FBQyxLQUFLLENBQUMsS0FBR0EsQ0FBQyxHQUFDLENBQUMsR0FBQ0EsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUU7T0FBQ2tILFFBQVEsRUFBQyxDQUFDO09BQUMwSyxLQUFLLEVBQUMsQ0FBQTtNQUFFLENBQUE7QUFBQSxJQUFDLENBQUM7R0FBQ29CLGtCQUFrQixJQUFFN1csT0FBc0IwVyxDQUFBQSxhQUFBQSxHQUFBQSxhQUFhLEVBQUMsVUFBUzdTLENBQUMsRUFBQ3VSLENBQUMsRUFBQztBQUFDLEtBQUEsT0FBTyxLQUFLLENBQUMsS0FBR3ZSLENBQUMsS0FBR0EsQ0FBQyxHQUFDLENBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxLQUFHdVIsQ0FBQyxLQUFHQSxDQUFDLEdBQUMsRUFBRSxDQUFDLEVBQUMsSUFBR3BWLE9BQU8sQ0FBQzBXLGFBQWEsRUFBRTdTLENBQUMsRUFBQ3VSLENBQUMsQ0FBQyxDQUFDckssUUFBUSxDQUFBO0FBQUEsSUFBQyxDQUFDO0dBQUMrTCwwQkFBMEIsSUFBRTlXLE9BQTJCNlcsQ0FBQUEsa0JBQUFBLEdBQUFBLGtCQUFrQixFQUFDLFVBQVNoVCxDQUFDLEVBQUN1UixDQUFDLEVBQUM7S0FBQyxPQUFPLEtBQUssQ0FBQyxLQUFHQSxDQUFDLEtBQUdBLENBQUMsR0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDdlIsQ0FBQyxHQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLEdBQUMsRUFBRSxHQUFDQSxDQUFDLEVBQUVrVCxTQUFTLENBQUMsVUFBU2xULENBQUMsRUFBQztPQUFDLE9BQU9BLENBQUMsQ0FBQ2tILFFBQVEsSUFBRTVJLElBQUksQ0FBQ0MsR0FBRyxDQUFDZ1QsQ0FBQyxDQUFDLENBQUE7QUFBQSxNQUFDLENBQUMsQ0FBQTtBQUFBLElBQUMsQ0FBQztHQUFDNEIsNEJBQTRCLElBQUVoWCxPQUFBQSxDQUFBQSwwQkFBQUEsR0FBbUM4VywwQkFBMEIsRUFBQyxVQUFTalQsQ0FBQyxFQUFDdVIsQ0FBQyxFQUFDaFUsQ0FBQyxFQUFDO0tBQUMsS0FBSyxDQUFDLEtBQUd5QyxDQUFDLEtBQUdBLENBQUMsR0FBQyxFQUFFLENBQUMsRUFBQyxLQUFLLENBQUMsS0FBR3VSLENBQUMsS0FBR0EsQ0FBQyxHQUFDLENBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxLQUFHaFUsQ0FBQyxLQUFHQSxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUE7S0FBQ3lDLENBQUMsR0FBQyxJQUFHN0QsT0FBTyxDQUFDOFcsMEJBQTBCLEVBQUVqVCxDQUFDLEVBQUN1UixDQUFDLENBQUMsQ0FBQTtBQUFDLEtBQUEsT0FBTSxJQUFHcFYsT0FBTyxDQUFDNFcsa0JBQWtCLEVBQUV4VixDQUFDLENBQUMsR0FBQ3lDLENBQUMsR0FBQ0EsQ0FBQyxHQUFDLENBQUMsQ0FBQTtBQUFBLElBQUMsQ0FBQztHQUFDb1Qsd0JBQXdCLElBQUVqWCxPQUFBQSxDQUFBQSw0QkFBQUEsR0FBcUNnWCw0QkFBNEIsRUFBQyxVQUFTblQsQ0FBQyxFQUFDdVIsQ0FBQyxFQUFDaFUsQ0FBQyxFQUFDO0tBQUMsS0FBSyxDQUFDLEtBQUdBLENBQUMsS0FBR0EsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFBO0FBQUMsS0FBQSxJQUFJK1QsQ0FBQyxHQUFDdFIsQ0FBQyxDQUFDa1EsUUFBUTtPQUFDeUMsQ0FBQyxHQUFDM1MsQ0FBQyxDQUFDdVAsU0FBUztPQUFDaUMsQ0FBQyxHQUFDeFIsQ0FBQyxDQUFDcVQscUJBQXFCO09BQUM1QixDQUFDLEdBQUN6UixDQUFDLENBQUNzVCx1QkFBdUI7T0FBQ3RULENBQUMsR0FBQ0EsQ0FBQyxDQUFDd1MsaUJBQWlCO0FBQUNqVixPQUFBQSxDQUFDLEdBQUMsSUFBR3BCLE9BQU8sQ0FBQ2dYLDRCQUE0QixFQUFFblQsQ0FBQyxFQUFDekMsQ0FBQyxFQUFDZ1UsQ0FBQyxDQUFDO0FBQUNBLE9BQUFBLENBQUMsR0FBQyxJQUFHcFYsT0FBTyxDQUFDMFcsYUFBYSxFQUFFdFYsQ0FBQyxFQUFDeUMsQ0FBQyxDQUFDLENBQUNrSCxRQUFRLENBQUE7S0FBQyxJQUFHLENBQUNvSyxDQUFDLEVBQUM7QUFBQyxPQUFBLElBQUdxQixDQUFDLElBQUVuQixDQUFDLEVBQUMsT0FBTyxDQUFDLENBQUE7T0FBQyxJQUFHQyxDQUFDLEdBQUNGLENBQUMsRUFBQyxPQUFNLENBQUNFLENBQUMsQ0FBQTtNQUFBO0tBQUMsT0FBTSxDQUFDRixDQUFDLENBQUE7QUFBQSxJQUFDLENBQUM7R0FBQ2dDLHFCQUFxQixJQUFFcFgsT0FBaUNpWCxDQUFBQSx3QkFBQUEsR0FBQUEsd0JBQXdCLEVBQUMsVUFBU3BULENBQUMsRUFBQ3VSLENBQUMsRUFBQztBQUFDLEtBQUEsSUFBSWhVLENBQUMsR0FBQ2dVLENBQUMsQ0FBQ2lCLGlCQUFpQjtPQUFDbEIsQ0FBQyxHQUFDQyxDQUFDLENBQUNxQixZQUFZO09BQUNELENBQUMsR0FBQ3BCLENBQUMsQ0FBQ2dCLFdBQVc7T0FBQ2YsQ0FBQyxHQUFDRCxDQUFDLENBQUNXLFVBQVU7T0FBQ1QsQ0FBQyxHQUFDRixDQUFDLENBQUNyQixRQUFRO09BQUNzRCxDQUFDLEdBQUNqQyxDQUFDLENBQUM4QixxQkFBcUI7T0FBQ0ksQ0FBQyxHQUFDbEMsQ0FBQyxDQUFDckMsV0FBVztPQUFDcUMsQ0FBQyxHQUFDQSxDQUFDLENBQUNtQyxXQUFXLENBQUE7QUFBQyxLQUFBLE9BQU9qQyxDQUFDLElBQUUsQ0FBQytCLENBQUMsSUFBRWpDLENBQUMsS0FBR2pULElBQUksQ0FBQ0MsR0FBRyxDQUFDeUIsQ0FBQyxDQUFDLElBQUV3VCxDQUFDLEdBQUMsSUFBR3JYLE9BQU8sQ0FBQzhXLDBCQUEwQixFQUFFMVYsQ0FBQyxFQUFDeUMsQ0FBQyxDQUFDLEVBQUN5UixDQUFDLEdBQUMrQixDQUFDLElBQUVqQyxDQUFDLEdBQUMsSUFBR3BWLE9BQU8sQ0FBQzJWLGFBQWEsRUFBRVIsQ0FBQyxFQUFDcUIsQ0FBQyxDQUFDLENBQUMsR0FBQ25CLENBQUMsR0FBQ0YsQ0FBQyxHQUFDcUIsQ0FBQyxHQUFDYSxDQUFDLEdBQUNqQyxDQUFDLEdBQUNDLENBQUMsSUFBRWdDLENBQUMsR0FBQ0EsQ0FBQyxJQUFFakMsQ0FBQyxHQUFDQyxDQUFDLENBQUMsR0FBQ2dDLENBQUMsR0FBQ2pDLENBQUMsR0FBQ2lDLENBQUMsSUFBRUMsQ0FBQyxDQUFBO0FBQUEsSUFBQyxDQUFDO0dBQUNFLHdCQUF3QixJQUFFeFgsT0FBQUEsQ0FBQUEscUJBQUFBLEdBQThCb1gscUJBQXFCLEVBQUMsVUFBU3ZULENBQUMsRUFBQztBQUFDLEtBQUEsSUFBSXVSLENBQUMsR0FBQ3ZSLENBQUMsQ0FBQ2tRLFFBQVE7T0FBQzNTLENBQUMsR0FBQ3lDLENBQUMsQ0FBQ2tQLFdBQVc7T0FBQ2xQLENBQUMsR0FBQ0EsQ0FBQyxDQUFDNFMsWUFBWSxDQUFBO0tBQUMsT0FBT3JCLENBQUMsR0FBQ2hVLENBQUMsR0FBQ3lDLENBQUMsR0FBQ3pDLENBQUMsQ0FBQTtBQUFBLElBQUMsQ0FBQztHQUFDcVcsMkJBQTJCLElBQUV6WCxPQUFpQ3dYLENBQUFBLHdCQUFBQSxHQUFBQSx3QkFBd0IsRUFBQyxVQUFTM1QsQ0FBQyxFQUFDdVIsQ0FBQyxFQUFDO0FBQUMsS0FBQSxJQUFJaFUsQ0FBQyxHQUFDZ1UsQ0FBQyxDQUFDckMsV0FBVztPQUFDcUMsQ0FBQyxHQUFDQSxDQUFDLENBQUNzQyxVQUFVLENBQUE7S0FBQyxPQUFPN1QsQ0FBQyxHQUFDekMsQ0FBQyxHQUFDLENBQUNBLENBQUMsR0FBQ3lDLENBQUMsSUFBRSxDQUFDdVIsQ0FBQyxJQUFFLENBQUMsR0FBQyxDQUFDdlIsQ0FBQyxHQUFDekMsQ0FBQyxJQUFFZ1UsQ0FBQyxJQUFFLENBQUMsQ0FBQTtBQUFBLElBQUMsQ0FBQztHQUFDdUMsMkJBQTJCLElBQUUzWCxPQUFBQSxDQUFBQSwyQkFBQUEsR0FBb0N5WCwyQkFBMkIsRUFBQyxVQUFTNVQsQ0FBQyxFQUFDdVIsQ0FBQyxFQUFDaFUsQ0FBQyxFQUFDO0tBQUMsT0FBT3lDLENBQUMsSUFBRXpDLENBQUMsR0FBQyxLQUFLLENBQUMsS0FBR0EsQ0FBQyxHQUFDLENBQUMsR0FBQ0EsQ0FBQyxDQUFDLElBQUV5QyxDQUFDLEdBQUMsRUFBRSxHQUFDdVIsQ0FBQyxDQUFBO0FBQUEsSUFBQyxDQUFDLENBQUE7QUFBQ3BWLENBQUFBLE9BQUFBLENBQUFBLDJCQUFBQSxHQUFvQzJYLDJCQUEyQixDQUFBOzs7Ozs7Ozs7O0VDQS95SSxJQUFJekMsUUFBUSxHQUFDLFlBQVU7TUFBQyxPQUFNLENBQUNBLFFBQVEsR0FBQ3BWLE1BQU0sQ0FBQzJPLE1BQU0sSUFBRSxVQUFTMkcsQ0FBQyxFQUFDO1FBQUMsS0FBSSxJQUFJdlIsQ0FBQyxFQUFDd1IsQ0FBQyxHQUFDLENBQUMsRUFBQ21CLENBQUMsR0FBQy9VLFNBQVMsQ0FBQ1IsTUFBTSxFQUFDb1UsQ0FBQyxHQUFDbUIsQ0FBQyxFQUFDbkIsQ0FBQyxFQUFFLEVBQUMsS0FBSSxJQUFJRixDQUFDLElBQUl0UixDQUFDLEdBQUNwQyxTQUFTLENBQUM0VCxDQUFDLENBQUMsRUFBQ3ZWLE1BQU0sQ0FBQzhJLFNBQVMsQ0FBQ3VELGNBQWMsQ0FBQ0MsSUFBSSxDQUFDdkksQ0FBQyxFQUFDc1IsQ0FBQyxDQUFDLEtBQUdDLENBQUMsQ0FBQ0QsQ0FBQyxDQUFDLEdBQUN0UixDQUFDLENBQUNzUixDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQUMsT0FBT0MsQ0FBQyxDQUFBO0FBQUEsT0FBQyxFQUFFNUwsS0FBSyxDQUFDLElBQUksRUFBQy9ILFNBQVMsQ0FBQyxDQUFBO0tBQUM7SUFBQ21XLFFBQVEsSUFBRTlYLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLEVBQUMsWUFBWSxFQUFDO01BQUNDLEtBQUssRUFBQyxDQUFDLENBQUE7S0FBRSxDQUFDLEVBQUNELE9BQTJCQSxDQUFBQSxrQkFBQUEsR0FBQUEsT0FBQUEsQ0FBQUEscUJBQUFBLEdBQThCQSxPQUFzQ0EsQ0FBQUEsNkJBQUFBLEdBQUFBLE9BQUFBLENBQUFBLHNCQUFBQSxHQUErQkEsT0FBaUNBLENBQUFBLHdCQUFBQSxHQUFBQSxPQUFBQSxDQUFBQSxvQkFBQUEsR0FBNkJBLE9BQThCQSxDQUFBQSxxQkFBQUEsR0FBQUEsT0FBQUEsQ0FBQUEsc0JBQUFBLEdBQStCQSxPQUFnQkEsQ0FBQUEsT0FBQUEsR0FBQUEsT0FBQUEsQ0FBQUEsdUJBQUFBLEdBQWdDQSxPQUE2QkEsQ0FBQUEsb0JBQUFBLEdBQUFBLE9BQUFBLENBQUFBLGdCQUFBQSxHQUF5QkEsT0FBOEJBLENBQUFBLHFCQUFBQSxHQUFBQSxPQUFBQSxDQUFBQSxvQkFBQUEsR0FBNkJBLE9BQXFCQSxDQUFBQSxZQUFBQSxHQUFBQSxPQUFBQSxDQUFBQSw4QkFBQUEsR0FBdUNBLE9BQXlDQSxDQUFBQSxnQ0FBQUEsR0FBQUEsT0FBQUEsQ0FBQUEsU0FBQUEsR0FBa0JBLE9BQXFCQSxDQUFBQSxZQUFBQSxHQUFBQSxPQUFBQSxDQUFBQSxjQUFBQSxHQUF1QkEsT0FBc0JBLENBQUFBLGFBQUFBLEdBQUFBLE9BQUFBLENBQUFBLFNBQUFBLEdBQWtCLEtBQUssQ0FBQyxFQUFDUyxhQUFBQSxFQUFtQixDQUFDO0lBQUNvWCxTQUFTLEdBQUNwWCxPQUFvQjtJQUFDcVgsTUFBTSxHQUFDclgsSUFBaUI7QUFBQ3NYLElBQUFBLFNBQVMsR0FBQyxVQUFTM0MsQ0FBQyxFQUFDO0FBQUMsTUFBQSxJQUFJdlIsQ0FBQyxHQUFDdVIsQ0FBQyxDQUFDMUIsUUFBUTtRQUFDMEIsQ0FBQyxHQUFDQSxDQUFDLENBQUNuQixLQUFLLENBQUE7TUFBQyxPQUFPcFEsQ0FBQyxHQUFDQSxDQUFDLENBQUM1QyxNQUFNLEdBQUM0QyxDQUFDLEdBQUMsQ0FBQ0EsQ0FBQyxDQUFDLEdBQUMsS0FBSyxDQUFDLEtBQUd1UixDQUFDLEdBQUMsRUFBRSxHQUFDQSxDQUFDLENBQUE7S0FBQztJQUFDNEMsYUFBYSxJQUFFaFksT0FBQUEsQ0FBQUEsU0FBQUEsR0FBa0IrWCxTQUFTLEVBQUMsVUFBUzNDLENBQUMsRUFBQztNQUFDLE9BQU0sSUFBR3BWLE9BQU8sQ0FBQytYLFNBQVMsRUFBRTNDLENBQUMsQ0FBQyxDQUFDblUsTUFBTSxDQUFBO0FBQUEsS0FBQyxDQUFDO0lBQUNnWCxjQUFjLElBQUVqWSxPQUFBQSxDQUFBQSxhQUFBQSxHQUFzQmdZLGFBQWEsRUFBQyxVQUFTNUMsQ0FBQyxFQUFDO0FBQUMsTUFBQSxJQUFJdlIsQ0FBQyxHQUFDdVIsQ0FBQyxDQUFDckIsUUFBUTtRQUFDc0IsQ0FBQyxHQUFDRCxDQUFDLENBQUNkLFlBQVk7UUFBQ2MsQ0FBQyxHQUFDQSxDQUFDLENBQUNmLFdBQVcsQ0FBQTtNQUFDLE9BQU94USxDQUFDLEtBQUd1UixDQUFDLElBQUVDLENBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUE7QUFBQSxLQUFDLENBQUM7SUFBQzZDLFlBQVksSUFBRWxZLE9BQUFBLENBQUFBLGNBQUFBLEdBQXVCaVksY0FBYyxFQUFDLFVBQVM3QyxDQUFDLEVBQUM7QUFBQyxNQUFBLElBQUl2UixDQUFDO1FBQUN3UixDQUFDO1FBQUNtQixDQUFDO1FBQUNyQixDQUFDO1FBQUMvVCxDQUFDLEdBQUMsSUFBR3BCLE9BQU8sQ0FBQytYLFNBQVMsRUFBRTNDLENBQUMsQ0FBQyxDQUFBO0FBQUMsTUFBQSxPQUFPQSxDQUFDLENBQUNyQixRQUFRLElBQUVsUSxDQUFDLEdBQUMsSUFBRzdELE9BQU8sQ0FBQ2dZLGFBQWEsRUFBRTVDLENBQUMsQ0FBQyxFQUFDRCxDQUFDLEdBQUMsSUFBR25WLE9BQU8sQ0FBQ2lZLGNBQWMsRUFBRTdDLENBQUMsQ0FBQyxFQUFDQSxDQUFDLEdBQUMsSUFBR3dDLFFBQVEsQ0FBQ08sZUFBZSxFQUFFdFUsQ0FBQyxFQUFDdVIsQ0FBQyxDQUFDLEVBQUNvQixDQUFDLEdBQUNyVSxJQUFJLENBQUNtVSxHQUFHLENBQUNsQixDQUFDLEVBQUN2UixDQUFDLENBQUMsR0FBQ3NSLENBQUMsRUFBQ0UsQ0FBQyxHQUFDalUsQ0FBQyxDQUFDNEQsS0FBSyxDQUFDLENBQUMsRUFBQ3dSLENBQUMsQ0FBQyxFQUFDQSxDQUFDLEdBQUNwVixDQUFDLENBQUM0RCxLQUFLLENBQUMsQ0FBQ3dSLENBQUMsQ0FBQyxFQUFDckIsQ0FBQyxJQUFFQyxDQUFDLEtBQUd2UixDQUFDLEtBQUdzUixDQUFDLEdBQUMvVCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUNnVSxDQUFDLEdBQUNoVSxDQUFDLENBQUM0RCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQ3dSLENBQUMsQ0FBQzRCLE9BQU8sQ0FBQ2hELENBQUMsQ0FBQyxFQUFDQyxDQUFDLENBQUNoUixJQUFJLENBQUM4USxDQUFDLENBQUMsQ0FBQyxFQUFDcUIsQ0FBQyxDQUFDNkIsTUFBTSxDQUFDalgsQ0FBQyxFQUFDaVUsQ0FBQyxDQUFDLElBQUVqVSxDQUFDLENBQUE7QUFBQSxLQUFDLENBQUM7SUFBQ2tYLFNBQVMsSUFBRXRZLE9BQUFBLENBQUFBLFlBQUFBLEdBQXFCa1ksWUFBWSxFQUFDLFVBQVM5QyxDQUFDLEVBQUM7TUFBQyxJQUFHO1FBQUMsT0FBT0EsQ0FBQyxZQUFZbUQsT0FBTyxJQUFFbkQsQ0FBQyxZQUFZb0QsWUFBWSxDQUFBO09BQUMsQ0FBQSxPQUFNcEQsQ0FBQyxFQUFDO1FBQUMsT0FBTSxDQUFDLENBQUMsQ0FBQTtPQUFBO0FBQUMsS0FBQyxDQUFDO0lBQUNxRCxnQ0FBZ0MsSUFBRXpZLE9BQUFBLENBQUFBLFNBQUFBLEdBQWtCc1ksU0FBUyxFQUFDLFVBQVNsRCxDQUFDLEVBQUNoVSxDQUFDLEVBQUN5QyxDQUFDLEVBQUM7TUFBQyxLQUFLLENBQUMsS0FBR3pDLENBQUMsS0FBR0EsQ0FBQyxHQUFDLENBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxLQUFHeUMsQ0FBQyxLQUFHQSxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtNQUFDLElBQUl5UixDQUFDLEdBQUMsQ0FBQztRQUFDZ0MsQ0FBQyxHQUFDLENBQUMsQ0FBQztRQUFDakMsQ0FBQyxHQUFDLEVBQUUsQ0FBQTtBQUFDLE1BQUEsT0FBTSxJQUFHclYsT0FBTyxDQUFDc1ksU0FBUyxFQUFFbEQsQ0FBQyxDQUFDLEtBQUdDLENBQUMsR0FBQ3FELEtBQUssQ0FBQ0MsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFFdkQsQ0FBQyxHQUFDLEtBQUssQ0FBQyxHQUFDQSxDQUFDLENBQUMxQixRQUFRLEtBQUcsRUFBRSxDQUFDLENBQUNrRixNQUFNLENBQUMsVUFBU3hELENBQUMsRUFBQ3ZSLENBQUMsRUFBQ3dSLENBQUMsRUFBQztRQUFDLElBQUltQixDQUFDLEdBQUMsQ0FBQztVQUFDbkIsQ0FBQyxHQUFDQSxDQUFDLEdBQUMsQ0FBQztBQUFDRixVQUFBQSxDQUFDLEdBQUNDLENBQUMsQ0FBQ0MsQ0FBQyxDQUFDO0FBQUN4UixVQUFBQSxDQUFDLEdBQUNnVixvQkFBb0IsQ0FBQyxJQUFJLElBQUVoVixDQUFDLEdBQUMsS0FBSyxDQUFDLEdBQUNBLENBQUMsQ0FBQ3JFLFVBQVUsQ0FBQyxDQUFDaVcsS0FBSztVQUFDNVIsQ0FBQyxHQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLEdBQUMsQ0FBQyxHQUFDQSxDQUFDLENBQUE7QUFBQyxRQUFBLE9BQU95VCxDQUFDLEdBQUMsQ0FBQ2hDLENBQUMsSUFBRXpSLENBQUMsS0FBR3pDLENBQUMsRUFBQytULENBQUMsS0FBR3FCLENBQUMsR0FBQyxDQUFDLElBQUVuQixDQUFDLEdBQUNGLENBQUMsQ0FBQ00sS0FBSyxHQUFDTixDQUFDLENBQUNNLEtBQUssR0FBQ04sQ0FBQyxDQUFDcEssUUFBUSxDQUFDLEVBQUNxSyxDQUFDLENBQUMvUSxJQUFJLENBQUM7VUFBQzBHLFFBQVEsRUFBQ3lMLENBQUM7VUFBQ2YsS0FBSyxFQUFDNVIsQ0FBQUE7U0FBRSxDQUFDLEVBQUN1UixDQUFDLENBQUE7QUFBQSxPQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUN2UixDQUFDLEtBQUd3UixDQUFDLEdBQUNpQyxDQUFDLEdBQUMsSUFBR08sU0FBUyxDQUFDdEMsZ0JBQWdCLEVBQUVGLENBQUMsQ0FBQyxJQUFFRCxDQUFDLEdBQUNFLENBQUMsR0FBQ2xVLENBQUMsRUFBQyxJQUFHeVcsU0FBUyxDQUFDbkMsaUJBQWlCLEVBQUVMLENBQUMsRUFBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUM7UUFBQzBELE1BQU0sRUFBQ3pELENBQUM7UUFBQzBELE9BQU8sRUFBQ3pELENBQUM7UUFBQzBELE9BQU8sRUFBQzFCLENBQUFBO09BQUUsQ0FBQTtBQUFBLEtBQUMsQ0FBQztBQUFDMkIsSUFBQUEsOEJBQThCLElBQUVqWixPQUF5Q3lZLENBQUFBLGdDQUFBQSxHQUFBQSxnQ0FBZ0MsRUFBQyxVQUFTckQsQ0FBQyxFQUFDRCxDQUFDLEVBQUN0UixDQUFDLEVBQUN3UixDQUFDLEVBQUM7TUFBQyxLQUFLLENBQUMsS0FBR0EsQ0FBQyxLQUFHQSxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtNQUFDLElBQUlqVSxDQUFDLEdBQUMsQ0FBQztRQUFDa1UsQ0FBQyxHQUFDLENBQUMsQ0FBQztRQUFDa0IsQ0FBQyxHQUFDLEVBQUU7UUFBQ2MsQ0FBQyxHQUFDLElBQUd0WCxPQUFPLENBQUNrWixZQUFZLEVBQUUvRCxDQUFDLEVBQUN0UixDQUFDLENBQUMsQ0FBQTtBQUFDLE1BQUEsT0FBTzJTLENBQUMsR0FBQ3BCLENBQUMsQ0FBQ3dELE1BQU0sQ0FBQyxVQUFTeEQsQ0FBQyxFQUFDdlIsQ0FBQyxFQUFDd1IsQ0FBQyxFQUFDO1FBQUMsSUFBSW1CLENBQUMsR0FBQyxDQUFDO1VBQUNuQixDQUFDLEdBQUNELENBQUMsQ0FBQ0MsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFBO1FBQUMsT0FBT0MsQ0FBQyxHQUFDLENBQUNsVSxDQUFDLElBQUVrVyxDQUFDLEtBQUduQyxDQUFDLEVBQUNFLENBQUMsS0FBR21CLENBQUMsR0FBQ2MsQ0FBQyxHQUFDakMsQ0FBQyxDQUFDdEssUUFBUSxJQUFFLENBQUMsQ0FBQyxFQUFDcUssQ0FBQyxDQUFDL1EsSUFBSSxDQUFDO1VBQUNvUixLQUFLLEVBQUM2QixDQUFDO1VBQUN2TSxRQUFRLEVBQUN5TCxDQUFBQTtTQUFFLENBQUMsRUFBQ3BCLENBQUMsQ0FBQTtPQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUM7QUFBQzBELFFBQUFBLE1BQU0sRUFBQ3RDLENBQUMsR0FBQ25CLENBQUMsR0FBQ21CLENBQUMsR0FBQ2xCLENBQUMsR0FBQyxJQUFHdUMsU0FBUyxDQUFDdEMsZ0JBQWdCLEVBQUVpQixDQUFDLENBQUMsSUFBRTNTLENBQUMsR0FBQ3pDLENBQUMsR0FBQytULENBQUMsRUFBQyxJQUFHMEMsU0FBUyxDQUFDbkMsaUJBQWlCLEVBQUVjLENBQUMsRUFBQzNTLENBQUMsQ0FBQyxDQUFDO1FBQUNrVixPQUFPLEVBQUMzWCxDQUFDO1FBQUM0WCxPQUFPLEVBQUMxRCxDQUFBQTtPQUFFLENBQUE7QUFBQSxLQUFDLENBQUM7SUFBQzRELFlBQVksSUFBRWxaLE9BQXVDaVosQ0FBQUEsOEJBQUFBLEdBQUFBLDhCQUE4QixFQUFDLFVBQVM3RCxDQUFDLEVBQUN2UixDQUFDLEVBQUM7TUFBQyxPQUFPLENBQUMsR0FBQ0EsQ0FBQyxHQUFDdVIsQ0FBQyxHQUFDdlIsQ0FBQyxHQUFDdVIsQ0FBQyxDQUFBO0FBQUEsS0FBQyxDQUFDLENBQUE7RUFBQyxTQUFTeUQsb0JBQW9CQSxDQUFDekQsQ0FBQyxFQUFDO0FBQUMsSUFBQSxPQUFPQSxDQUFDLElBQUVBLENBQUMsQ0FBQytELHFCQUFxQixHQUFDO01BQUMxRCxLQUFLLEVBQUMsQ0FBQ0wsQ0FBQyxHQUFDQSxDQUFDLENBQUMrRCxxQkFBcUIsRUFBRSxFQUFFMUQsS0FBSztNQUFDMkQsTUFBTSxFQUFDaEUsQ0FBQyxDQUFDZ0UsTUFBQUE7QUFBTSxLQUFDLEdBQUM7TUFBQzNELEtBQUssRUFBQyxDQUFDO01BQUMyRCxNQUFNLEVBQUMsQ0FBQTtLQUFFLENBQUE7R0FBQTtBQUFDcFosRUFBQUEsT0FBQUEsQ0FBQUEsWUFBQUEsR0FBcUJrWixZQUFZLEVBQUNsWixPQUE2QjZZLENBQUFBLG9CQUFBQSxHQUFBQSxvQkFBb0IsQ0FBQTtFQUFDLElBQUlRLHFCQUFxQixHQUFDLFVBQVNqRSxDQUFDLEVBQUN2UixDQUFDLEVBQUN3UixDQUFDLEVBQUM7QUFBQyxNQUFBLElBQUl4UixDQUFDLEdBQUMsSUFBRzdELE9BQU8sQ0FBQ3NaLGdCQUFnQixFQUFFelYsQ0FBQyxFQUFDd1IsQ0FBQyxDQUFDO1FBQUNBLENBQUMsR0FBQyxJQUFHclYsT0FBTyxDQUFDdVosb0JBQW9CLEVBQUVuRSxDQUFDLEVBQUN2UixDQUFDLENBQUMsQ0FBQTtNQUFDLElBQUcsSUFBRzdELE9BQU8sQ0FBQ3NZLFNBQVMsRUFBRWpELENBQUMsQ0FBQyxFQUFDLE9BQU9ELENBQUMsR0FBQ2xOLE1BQU0sQ0FBQ3NSLGdCQUFnQixDQUFDbkUsQ0FBQyxDQUFDLEVBQUN4UixDQUFDLEdBQUM0VixVQUFVLENBQUNyRSxDQUFDLENBQUNzRSxTQUFTLENBQUMsRUFBQ3RFLENBQUMsR0FBQ3FFLFVBQVUsQ0FBQ3JFLENBQUMsQ0FBQ3VFLFlBQVksQ0FBQyxFQUFDeFgsSUFBSSxDQUFDeVgsSUFBSSxDQUFDdkUsQ0FBQyxDQUFDd0UsWUFBWSxHQUFDaFcsQ0FBQyxHQUFDdVIsQ0FBQyxDQUFDLENBQUE7S0FBQztJQUFDa0UsZ0JBQWdCLElBQUV0WixPQUE4QnFaLENBQUFBLHFCQUFBQSxHQUFBQSxxQkFBcUIsRUFBQyxVQUFTakUsQ0FBQyxFQUFDdlIsQ0FBQyxFQUFDO0FBQUMsTUFBQSxJQUFJd1IsQ0FBQyxHQUFDeFIsQ0FBQyxDQUFDa1AsV0FBVztRQUFDbFAsQ0FBQyxHQUFDQSxDQUFDLENBQUM0UyxZQUFZLENBQUE7TUFBQyxPQUFPckIsQ0FBQyxDQUFDckIsUUFBUSxHQUFDc0IsQ0FBQyxHQUFDeFIsQ0FBQyxHQUFDLElBQUc3RCxPQUFPLENBQUNpWSxjQUFjLEVBQUU3QyxDQUFDLENBQUMsR0FBQ0MsQ0FBQyxDQUFBO0FBQUEsS0FBQyxDQUFDO0lBQUNrRSxvQkFBb0IsSUFBRXZaLE9BQXlCc1osQ0FBQUEsZ0JBQUFBLEdBQUFBLGdCQUFnQixFQUFDLFVBQVNsRSxDQUFDLEVBQUN2UixDQUFDLEVBQUM7TUFBQ3VSLENBQUMsR0FBQ0EsQ0FBQyxJQUFFQSxDQUFDLENBQUMxQixRQUFRLElBQUUsRUFBRSxDQUFBO0FBQUMsTUFBQSxPQUFPMEIsQ0FBQyxDQUFDdlIsQ0FBQyxDQUFDLElBQUV1UixDQUFDLENBQUN2UixDQUFDLENBQUMsQ0FBQ3JFLFVBQVUsSUFBRSxJQUFJLENBQUE7QUFBQSxLQUFDLENBQUMsQ0FBQTtBQUFDLEVBQUEsU0FBU3NhLHVCQUF1QkEsQ0FBQzFFLENBQUMsRUFBQ3ZSLENBQUMsRUFBQ3dSLENBQUMsRUFBQztBQUFDLElBQUEsT0FBTSxDQUFDeFIsQ0FBQyxHQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLEdBQUMsRUFBRSxHQUFDQSxDQUFDLEVBQUU0UixLQUFLLEtBQUcsQ0FBQ0osQ0FBQyxHQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLEdBQUMsRUFBRSxHQUFDQSxDQUFDLEVBQUVJLEtBQUssQ0FBQTtHQUFBO0FBQUMsRUFBQSxTQUFTc0UsT0FBT0EsQ0FBQzNFLENBQUMsRUFBQ3ZSLENBQUMsRUFBQztBQUFDLElBQUEsSUFBSUEsQ0FBQyxHQUFDQSxDQUFDLElBQUUsRUFBRTtNQUFDd1IsQ0FBQyxHQUFDeFIsQ0FBQyxDQUFDa0gsUUFBUTtNQUFDc0ssQ0FBQyxHQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLEdBQUMsQ0FBQyxHQUFDQSxDQUFDO01BQUNtQixDQUFDLEdBQUMzUyxDQUFDLENBQUNtUCxpQkFBaUI7TUFBQ3dELENBQUMsR0FBQyxLQUFLLENBQUMsS0FBR0EsQ0FBQyxHQUFDLENBQUMsR0FBQ0EsQ0FBQztNQUFDM1MsQ0FBQyxHQUFDQSxDQUFDLENBQUNvUCx1QkFBdUI7TUFBQ3BQLENBQUMsR0FBQyxLQUFLLENBQUMsS0FBR0EsQ0FBQyxHQUFDLE1BQU0sR0FBQ0EsQ0FBQyxDQUFBO0lBQUMsT0FBT3VSLENBQUMsSUFBRSxJQUFHcFYsT0FBTyxDQUFDc1ksU0FBUyxFQUFFbEQsQ0FBQyxDQUFDLEtBQUdBLENBQUMsQ0FBQy9WLEtBQUssQ0FBQzJhLFVBQVUsR0FBQyxZQUFZLENBQUMzQixNQUFNLENBQUM3QixDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUM2QixNQUFNLENBQUN4VSxDQUFDLEVBQUMsTUFBTSxDQUFDLEVBQUN1UixDQUFDLENBQUMvVixLQUFLLENBQUM0YSxTQUFTLEdBQUMsY0FBYyxDQUFDNUIsTUFBTSxDQUFDaEQsQ0FBQyxFQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUNELENBQUMsQ0FBQTtHQUFBO0FBQUNwVixFQUFBQSxPQUFBQSxDQUFBQSxvQkFBQUEsR0FBNkJ1WixvQkFBb0IsRUFBQ3ZaLE9BQUFBLENBQUFBLHVCQUFBQSxHQUFnQzhaLHVCQUF1QixFQUFDOVosT0FBQUEsQ0FBQUEsT0FBQUEsR0FBZ0IrWixPQUFPLENBQUE7RUFBQyxJQUFJRyxzQkFBc0IsR0FBQyxVQUFTOUUsQ0FBQyxFQUFDdlIsQ0FBQyxFQUFDd1IsQ0FBQyxFQUFDO0FBQUMsTUFBQSxJQUFJbUIsQ0FBQyxHQUFDcEIsQ0FBQyxJQUFFLEVBQUU7UUFBQ0QsQ0FBQyxHQUFDcUIsQ0FBQyxDQUFDbkMsV0FBVztRQUFDalQsQ0FBQyxHQUFDb1YsQ0FBQyxDQUFDbEMsWUFBWTtRQUFDZ0IsQ0FBQyxHQUFDa0IsQ0FBQyxDQUFDckQsVUFBVTtRQUFDcUQsQ0FBQyxHQUFDQSxDQUFDLENBQUN4RCxpQkFBaUI7UUFBQ3NDLENBQUMsR0FBQ0EsQ0FBQyxHQUFDLElBQUd0VixPQUFPLENBQUNxWixxQkFBcUIsRUFBRWhFLENBQUMsRUFBQ0QsQ0FBQyxFQUFDdlIsQ0FBQyxDQUFDLEdBQUMsS0FBSyxDQUFDLENBQUE7TUFBQyxPQUFNO1FBQUN1VixNQUFNLEVBQUM5RCxDQUFDO0FBQUMwRSxRQUFBQSxVQUFVLEVBQUMxRSxDQUFDLEdBQUMsU0FBUyxDQUFDK0MsTUFBTSxDQUFDN0IsQ0FBQyxFQUFDLElBQUksQ0FBQyxHQUFDLEtBQUssQ0FBQztRQUFDbkMsV0FBVyxFQUFDLEVBQUUsQ0FBQ2dFLE1BQU0sQ0FBQ2xELENBQUMsRUFBQyxJQUFJLENBQUM7UUFBQ2IsWUFBWSxFQUFDLEVBQUUsQ0FBQytELE1BQU0sQ0FBQ2pYLENBQUMsRUFBQyxJQUFJLENBQUE7T0FBRSxDQUFBO0tBQUM7SUFBQytZLHFCQUFxQixJQUFFbmEsT0FBQUEsQ0FBQUEsc0JBQUFBLEdBQStCa2Esc0JBQXNCLEVBQUMsVUFBUzlFLENBQUMsRUFBQztBQUFDLE1BQUEsSUFBSUEsQ0FBQyxHQUFDQSxDQUFDLElBQUUsRUFBRTtRQUFDdlIsQ0FBQyxHQUFDdVIsQ0FBQyxDQUFDcEMsaUJBQWlCO1FBQUNvQyxDQUFDLEdBQUNBLENBQUMsQ0FBQ25DLHVCQUF1QjtRQUFDbUMsQ0FBQyxHQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLEdBQUMsTUFBTSxHQUFDQSxDQUFDLENBQUE7TUFBQyxPQUFNLFlBQVksQ0FBQ2lELE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBR3hVLENBQUMsR0FBQyxDQUFDLEdBQUNBLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQ3dVLE1BQU0sQ0FBQ2pELENBQUMsRUFBQyxNQUFNLENBQUMsQ0FBQTtBQUFBLEtBQUMsQ0FBQztJQUFDZ0Ysb0JBQW9CLElBQUVwYSxPQUE4Qm1hLENBQUFBLHFCQUFBQSxHQUFBQSxxQkFBcUIsRUFBQyxVQUFTL0UsQ0FBQyxFQUFDdlIsQ0FBQyxFQUFDO01BQUN1UixDQUFDLEdBQUMsQ0FBQ0EsQ0FBQyxJQUFFLEVBQUUsRUFBRW1DLFdBQVcsRUFBQ25DLENBQUMsR0FBQyxjQUFjLENBQUNpRCxNQUFNLENBQUMsRUFBRSxLQUFLLENBQUMsS0FBR2pELENBQUMsR0FBQyxDQUFDLEdBQUNBLENBQUMsQ0FBQyxFQUFDLFdBQVcsQ0FBQyxDQUFBO01BQUMsT0FBT0YsUUFBUSxDQUFDQSxRQUFRLENBQUMsRUFBRSxFQUFDclIsQ0FBQyxDQUFDLEVBQUM7UUFBQ29XLFNBQVMsRUFBQzdFLENBQUFBO0FBQUMsT0FBQyxDQUFDLENBQUE7QUFBQSxLQUFDLENBQUM7SUFBQ2lGLHdCQUF3QixJQUFFcmEsT0FBNkJvYSxDQUFBQSxvQkFBQUEsR0FBQUEsb0JBQW9CLEVBQUMsVUFBU2hGLENBQUMsRUFBQ3ZSLENBQUMsRUFBQztBQUFDLE1BQUEsSUFBSXdSLENBQUMsR0FBQ3hSLENBQUMsQ0FBQ3dTLGlCQUFpQjtRQUFDRyxDQUFDLEdBQUMzUyxDQUFDLENBQUN5VyxxQkFBcUI7UUFBQ25GLENBQUMsR0FBQ3RSLENBQUMsQ0FBQzBXLHdCQUF3QjtRQUFDblosQ0FBQyxHQUFDeUMsQ0FBQyxDQUFDMlcsMEJBQTBCO1FBQUMzVyxDQUFDLEdBQUNBLENBQUMsQ0FBQ21QLGlCQUFpQjtRQUFDcUMsQ0FBQyxHQUFDLENBQUNBLENBQUMsQ0FBQ0QsQ0FBQyxDQUFDLElBQUUsRUFBRSxFQUFFSyxLQUFLLENBQUE7QUFBQyxNQUFBLE9BQU9yVSxDQUFDLElBQUVvVixDQUFDLEtBQUdwQixDQUFDLEdBQUM7UUFBQzZFLFNBQVMsRUFBQyxhQUFhLENBQUM1QixNQUFNLENBQUNsRCxDQUFDLEVBQUMsS0FBSyxDQUFDO1FBQUNuQyxpQkFBaUIsRUFBQyxFQUFFLENBQUNxRixNQUFNLENBQUN4VSxDQUFDLEVBQUMsSUFBSSxDQUFDO1FBQUM0UixLQUFLLEVBQUMsRUFBRSxDQUFDNEMsTUFBTSxDQUFDaEQsQ0FBQyxFQUFDLElBQUksQ0FBQTtBQUFDLE9BQUMsR0FBQztRQUFDSSxLQUFLLEVBQUNKLENBQUFBO09BQUUsQ0FBQTtBQUFBLEtBQUMsQ0FBQztJQUFDb0Ysc0JBQXNCLElBQUV6YSxPQUFpQ3FhLENBQUFBLHdCQUFBQSxHQUFBQSx3QkFBd0IsRUFBQyxVQUFTakYsQ0FBQyxFQUFDdlIsQ0FBQyxFQUFDO01BQUMsSUFBSXdSLENBQUMsR0FBQ0QsQ0FBQztRQUFDb0IsQ0FBQyxHQUFDM1MsQ0FBQyxDQUFDa1EsUUFBUTtRQUFDb0IsQ0FBQyxHQUFDdFIsQ0FBQyxDQUFDdVMsV0FBVztRQUFDaFYsQ0FBQyxHQUFDeUMsQ0FBQyxDQUFDNFMsWUFBWTtRQUFDNVMsQ0FBQyxHQUFDQSxDQUFDLENBQUN3UyxpQkFBaUIsQ0FBQTtNQUFDLE9BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFHeFMsQ0FBQyxHQUFDLEVBQUUsR0FBQ0EsQ0FBQyxFQUFFd1IsQ0FBQyxHQUFDbUIsQ0FBQyxHQUFDcEIsQ0FBQyxHQUFDLElBQUcwQyxNQUFNLENBQUNuQyxhQUFhLEVBQUUsS0FBSyxDQUFDLEtBQUd2VSxDQUFDLEdBQUMsQ0FBQyxHQUFDQSxDQUFDLEVBQUMsS0FBSyxDQUFDLEtBQUcrVCxDQUFDLEdBQUMsQ0FBQyxHQUFDQSxDQUFDLENBQUMsR0FBQ0UsQ0FBQyxDQUFDLElBQUUsRUFBRSxFQUFFdEssUUFBUSxJQUFFLENBQUMsQ0FBQTtBQUFBLEtBQUMsQ0FBQztJQUFDMlAsNkJBQTZCLElBQUUxYSxPQUErQnlhLENBQUFBLHNCQUFBQSxHQUFBQSxzQkFBc0IsRUFBQyxVQUFTckYsQ0FBQyxFQUFDdlIsQ0FBQyxFQUFDO01BQUMsT0FBTSxFQUFFQSxDQUFDLEdBQUMxQixJQUFJLENBQUN3WSxLQUFLLENBQUN2RixDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQUEsS0FBQyxDQUFDLENBQUE7RUFBQyxTQUFTd0YscUJBQXFCQSxDQUFDeEYsQ0FBQyxFQUFDO0FBQUNBLElBQUFBLENBQUMsR0FBQ3lGLGtCQUFrQixDQUFDekYsQ0FBQyxDQUFDLEVBQUNBLENBQUMsR0FBQ0EsQ0FBQyxJQUFFQSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUUsRUFBRSxDQUFBO0lBQUMsT0FBT3pGLE1BQU0sQ0FBQ3lGLENBQUMsQ0FBQyxDQUFBO0dBQUE7RUFBQyxTQUFTeUYsa0JBQWtCQSxDQUFDekYsQ0FBQyxFQUFDO0lBQUMsT0FBT0EsQ0FBQyxJQUFFLElBQUdwVixPQUFPLENBQUNzWSxTQUFTLEVBQUVsRCxDQUFDLENBQUMsSUFBRWxOLE1BQU0sQ0FBQ3NSLGdCQUFnQixDQUFDcEUsQ0FBQyxDQUFDLENBQUM2RSxTQUFTLENBQUNhLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBRSxFQUFFLENBQUE7R0FBQTtBQUFDOWEsRUFBQUEsT0FBQUEsQ0FBQUEsNkJBQUFBLEdBQXNDMGEsNkJBQTZCLEVBQUMxYSxPQUFBQSxDQUFBQSxxQkFBQUEsR0FBOEI0YSxxQkFBcUIsRUFBQzVhLDZCQUEyQjZhLGtCQUFrQixDQUFBOzs7Ozs7Ozs7Ozs7QUNBM2hNL2EsRUFBQUEsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sRUFBQyxZQUFZLEVBQUM7SUFBQ0MsS0FBSyxFQUFDLENBQUMsQ0FBQTtHQUFFLENBQUMsRUFBQ0QsT0FBOEJBLENBQUFBLHFCQUFBQSxHQUFBQSxPQUFBQSxDQUFBQSxlQUFBQSxHQUF3QkEsbUNBQWlDQSxPQUF5QkEsQ0FBQUEsZ0JBQUFBLEdBQUFBLE9BQUFBLENBQUFBLFNBQUFBLEdBQWtCLEtBQUssQ0FBQyxDQUFBO0VBQUMsSUFBSSthLFVBQVUsR0FBQ3RhLGVBQXFCLEVBQUE7SUFBQ3FYLE1BQU0sR0FBQ3JYLElBQWlCO0lBQUN1YSxTQUFTLEdBQUMsWUFBVTtNQUFDLElBQUk1RixDQUFDLENBQUE7TUFBQyxJQUFHO0FBQUMsUUFBQSxPQUFPM04sT0FBTyxDQUFDLElBQUksS0FBRzJOLENBQUMsR0FBQyxJQUFJLEtBQUdsTixNQUFNLElBQUUsS0FBSyxDQUFDLEtBQUdBLE1BQU0sR0FBQyxLQUFLLENBQUMsR0FBQ0EsTUFBTSxDQUFDaEosUUFBUSxDQUFDLEdBQUMsS0FBSyxDQUFDLEdBQUNrVyxDQUFDLENBQUM5VixhQUFhLENBQUMsQ0FBQTtPQUFDLENBQUEsT0FBTThWLENBQUMsRUFBQztRQUFDLE9BQU0sQ0FBQyxDQUFDLENBQUE7T0FBQTtLQUFFO0FBQUM2RixJQUFBQSxnQkFBZ0IsSUFBRWpiLE9BQWtCZ2IsQ0FBQUEsU0FBQUEsR0FBQUEsU0FBUyxFQUFDLFlBQVU7TUFBQyxLQUFJLElBQUk1RixDQUFDLEdBQUMsRUFBRSxFQUFDdlIsQ0FBQyxHQUFDLENBQUMsRUFBQ0EsQ0FBQyxHQUFDcEMsU0FBUyxDQUFDUixNQUFNLEVBQUM0QyxDQUFDLEVBQUUsRUFBQ3VSLENBQUMsQ0FBQ3ZSLENBQUMsQ0FBQyxHQUFDcEMsU0FBUyxDQUFDb0MsQ0FBQyxDQUFDLENBQUE7TUFBQyxPQUFPdVIsQ0FBQyxDQUFDL0wsTUFBTSxDQUFDNUIsT0FBTyxDQUFDLENBQUN5VCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7QUFBQSxLQUFDLENBQUM7SUFBQ0Msd0JBQXdCLElBQUVuYixPQUFBQSxDQUFBQSxnQkFBQUEsR0FBeUJpYixnQkFBZ0IsRUFBQyxVQUFTN0YsQ0FBQyxFQUFDdlIsQ0FBQyxFQUFDMlMsQ0FBQyxFQUFDO0FBQUMsTUFBQSxPQUFPLEtBQUssQ0FBQyxLQUFHM1MsQ0FBQyxLQUFHQSxDQUFDLEdBQUMsQ0FBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLEtBQUcyUyxDQUFDLEtBQUdBLENBQUMsR0FBQyxDQUFDLENBQUMsRUFBQyxFQUFFcEIsQ0FBQyxHQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLElBQUVBLENBQUMsQ0FBQyxJQUFFb0IsQ0FBQyxJQUFFM1MsQ0FBQyxDQUFBO0FBQUEsS0FBQyxDQUFDO0lBQUNzVSxlQUFlLElBQUVuWSxPQUFpQ21iLENBQUFBLHdCQUFBQSxHQUFBQSx3QkFBd0IsRUFBQyxVQUFTM0UsQ0FBQyxFQUFDcEIsQ0FBQyxFQUFDO0FBQUMsTUFBQSxJQUFJaFUsQ0FBQztRQUFDa1csQ0FBQyxHQUFDLENBQUM7UUFBQ25DLENBQUMsR0FBQ0MsQ0FBQyxDQUFDYixVQUFVO1FBQUMxUSxDQUFDLEdBQUN1UixDQUFDLENBQUNoQyxTQUFTO1FBQUNrQyxDQUFDLEdBQUNGLENBQUMsQ0FBQ3JCLFFBQVE7UUFBQ3FCLENBQUMsR0FBQ0EsQ0FBQyxDQUFDcEIsVUFBVSxDQUFBO0FBQUMsTUFBQSxPQUFPLEtBQUssQ0FBQyxLQUFHblEsQ0FBQyxJQUFFQSxDQUFDLEdBQUMsS0FBSyxDQUFDLEtBQUd5UixDQUFDLElBQUVBLENBQUMsR0FBQ2tCLENBQUMsR0FBQ2MsQ0FBQyxJQUFFbkMsQ0FBQyxJQUFFLENBQUN0UixDQUFDLEdBQUMvRCxNQUFNLENBQUM4QixJQUFJLENBQUN1VCxDQUFDLENBQUMsRUFBRWxVLE1BQU0sS0FBR21VLENBQUMsSUFBRSxJQUFHcFYsT0FBTyxDQUFDZ2IsU0FBUyxHQUFHLENBQUMsS0FBRzVaLENBQUMsR0FBQyxLQUFLLENBQUMsS0FBR2dVLENBQUMsR0FBQ2xOLE1BQU0sQ0FBQzhMLFVBQVUsR0FBQ29CLENBQUMsRUFBQ3ZSLENBQUMsQ0FBQytGLE9BQU8sQ0FBQyxVQUFTd0wsQ0FBQyxFQUFDO1FBQUMsSUFBSXZSLENBQUMsQ0FBQTtRQUFDOEwsTUFBTSxDQUFDeUYsQ0FBQyxDQUFDLElBQUVoVSxDQUFDLEtBQUd5QyxDQUFDLEdBQUMsQ0FBQ3VSLENBQUMsR0FBQ0QsQ0FBQyxDQUFDQyxDQUFDLENBQUMsRUFBRW5CLEtBQUssRUFBQ21CLENBQUMsR0FBQ0EsQ0FBQyxDQUFDZ0csUUFBUSxFQUFDOUQsQ0FBQyxHQUFDLFNBQVMsTUFBSSxLQUFLLENBQUMsS0FBR2xDLENBQUMsR0FBQyxNQUFNLEdBQUNBLENBQUMsQ0FBQyxHQUFDdlIsQ0FBQyxHQUFDMUIsSUFBSSxDQUFDbVUsR0FBRyxDQUFDelMsQ0FBQyxFQUFDMlMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUFBLE9BQUMsQ0FBQyxDQUFDLEVBQUNjLENBQUMsSUFBRSxDQUFDLENBQUMsQ0FBQTtBQUFBLEtBQUMsQ0FBQztJQUFDK0QscUJBQXFCLElBQUVyYixPQUFBQSxDQUFBQSxlQUFBQSxHQUF3Qm1ZLGVBQWUsRUFBQyxVQUFTL0MsQ0FBQyxFQUFDdlIsQ0FBQyxFQUFDMlMsQ0FBQyxFQUFDO01BQUMsS0FBSyxDQUFDLEtBQUdBLENBQUMsS0FBR0EsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFBQyxNQUFBLElBQUlwVixDQUFDO1FBQUNrVyxDQUFDO1FBQUNuQyxDQUFDLEdBQUNDLENBQUMsQ0FBQ3BDLGlCQUFpQjtRQUFDbUMsQ0FBQyxHQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLEdBQUMsQ0FBQyxHQUFDQSxDQUFDO1FBQUNHLENBQUMsR0FBQ0YsQ0FBQyxDQUFDckIsUUFBUTtBQUFDdUIsUUFBQUEsQ0FBQyxHQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLElBQUVBLENBQUM7UUFBQ0QsQ0FBQyxHQUFDRCxDQUFDLENBQUMvQixRQUFRO0FBQUNnQyxRQUFBQSxDQUFDLEdBQUMsS0FBSyxDQUFDLEtBQUdBLENBQUMsSUFBRUEsQ0FBQztRQUFDaUcsQ0FBQyxHQUFDbEcsQ0FBQyxDQUFDaEMsU0FBUztBQUFDa0ksUUFBQUEsQ0FBQyxHQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLElBQUVBLENBQUM7UUFBQ0MsQ0FBQyxHQUFDLElBQUdSLFVBQVUsQ0FBQzdDLFlBQVksRUFBRTlDLENBQUMsQ0FBQztRQUFDaUMsQ0FBQyxHQUFDLElBQUcwRCxVQUFVLENBQUNaLHFCQUFxQixHQUFHO1FBQUNxQixDQUFDLEdBQUMsSUFBR1QsVUFBVSxDQUFDL0MsYUFBYSxFQUFFNUMsQ0FBQyxDQUFDO1FBQUNxRyxDQUFDLEdBQUMsSUFBR1YsVUFBVSxDQUFDOUMsY0FBYyxFQUFFN0MsQ0FBQyxDQUFDO1FBQUNzRyxDQUFDLEdBQUMsSUFBRzFiLE9BQU8sQ0FBQ21ZLGVBQWUsRUFBRXFELENBQUMsRUFBQ3BHLENBQUMsQ0FBQztBQUFDdUcsUUFBQUEsQ0FBQyxHQUFDLElBQUc3RCxNQUFNLENBQUNsQyxhQUFhLEVBQUVSLENBQUMsQ0FBQ3JDLFdBQVcsRUFBQ3lJLENBQUMsQ0FBQztRQUFDRyxDQUFDLEdBQUMsSUFBRzdELE1BQU0sQ0FBQ2pDLGNBQWMsRUFBRTtVQUFDQyxVQUFVLEVBQUM2RixDQUFDO1VBQUM1RixVQUFVLEVBQUN5RixDQUFDO1VBQUN6SCxRQUFRLEVBQUN1QixDQUFBQTtBQUFDLFNBQUMsQ0FBQztRQUFDc0csQ0FBQyxHQUFDLElBQUdiLFVBQVUsQ0FBQ2xDLG9CQUFvQixFQUFFaFYsQ0FBQyxDQUFDLENBQUM0UixLQUFLO0FBQUNvRyxRQUFBQSxDQUFDLElBQUV2RSxDQUFDLElBQUV6VCxDQUFDLEdBQUMsQ0FBQ3lYLENBQUMsSUFBRWxhLENBQUMsR0FBQyxDQUFDeUMsQ0FBQyxHQUFDLElBQUdrWCxVQUFVLENBQUN0QyxnQ0FBZ0MsRUFBRTVVLENBQUMsRUFBQytYLENBQUMsRUFBQ3RHLENBQUMsQ0FBQyxFQUFFd0QsTUFBTSxFQUFDeEIsQ0FBQyxHQUFDelQsQ0FBQyxDQUFDa1YsT0FBTyxFQUFDbFYsQ0FBQyxLQUFHekMsQ0FBQyxHQUFDLENBQUN5QyxDQUFDLEdBQUMsSUFBR2tYLFVBQVUsQ0FBQzlCLDhCQUE4QixFQUFFc0MsQ0FBQyxFQUFDSyxDQUFDLEVBQUNGLENBQUMsRUFBQ3BHLENBQUMsQ0FBQyxFQUFFd0QsTUFBTSxFQUFDeEIsQ0FBQyxHQUFDelQsQ0FBQyxDQUFDa1YsT0FBTyxFQUFDbFYsQ0FBQyxDQUFDLEVBQUVtVixPQUFPLEVBQUMxQixDQUFDLENBQUMsRUFBQyxJQUFHUSxNQUFNLENBQUNwQixhQUFhLEVBQUUsQ0FBQ2dGLENBQUMsRUFBQ3RhLENBQUMsR0FBQ0EsQ0FBQyxDQUFDLENBQUMySixRQUFRLENBQUM7UUFBQytRLENBQUMsR0FBQyxJQUFHaEUsTUFBTSxDQUFDM0IsZ0JBQWdCLEVBQUU7VUFBQ0MsV0FBVyxFQUFDcUYsQ0FBQztVQUFDcEYsaUJBQWlCLEVBQUNqVixDQUFBQTtTQUFFLEVBQUNnVSxDQUFDLENBQUM7UUFBQ0EsQ0FBQyxHQUFDLElBQUcwQyxNQUFNLENBQUN2QixnQkFBZ0IsRUFBRTtVQUFDUixVQUFVLEVBQUN5RixDQUFDO1VBQUNwRixXQUFXLEVBQUNxRixDQUFDO1VBQUNoRixZQUFZLEVBQUNpRixDQUFDO1VBQUNyRixpQkFBaUIsRUFBQ2pWLENBQUFBO1NBQUUsRUFBQ2dVLENBQUMsQ0FBQztRQUFDMkcsQ0FBQyxHQUFDLElBQUdqRSxNQUFNLENBQUNqQixrQkFBa0IsRUFBRTJFLENBQUMsRUFBQ3BhLENBQUMsQ0FBQyxDQUFBO01BQUMsT0FBTTtRQUFDMlIsV0FBVyxFQUFDNEksQ0FBQztRQUFDdkksU0FBUyxFQUFDa0ksQ0FBQztRQUFDdEksaUJBQWlCLEVBQUNtQyxDQUFDO1FBQUM2RyxNQUFNLEVBQUNULENBQUM7UUFBQ3hILFFBQVEsRUFBQ3VCLENBQUM7UUFBQ1MsVUFBVSxFQUFDeUYsQ0FBQztRQUFDL0UsWUFBWSxFQUFDaUYsQ0FBQztRQUFDdEYsV0FBVyxFQUFDcUYsQ0FBQztRQUFDbEUsV0FBVyxFQUFDLElBQUd3RCxVQUFVLENBQUNOLHNCQUFzQixFQUFFa0IsQ0FBQyxFQUFDO1VBQUNsRixZQUFZLEVBQUNpRixDQUFDO1VBQUN0RixXQUFXLEVBQUNxRixDQUFDO1VBQUNwRixpQkFBaUIsRUFBQ2pWLENBQUM7VUFBQ2dTLFNBQVMsRUFBQ2tJLENBQUM7VUFBQ3ZILFFBQVEsRUFBQ3VCLENBQUFBO0FBQUMsU0FBQyxDQUFDO1FBQUNvQyxVQUFVLEVBQUNrRSxDQUFDO1FBQUNLLGlCQUFpQixFQUFDM0UsQ0FBQztRQUFDNEUsa0JBQWtCLEVBQUMsQ0FBQztRQUFDaEYscUJBQXFCLEVBQUNyVCxDQUFDO0FBQUNzWSxRQUFBQSxhQUFhLEVBQUMxVSxPQUFPLENBQUM0TixDQUFDLENBQUM7UUFBQytHLDBCQUEwQixFQUFDLENBQUMsQ0FBQztRQUFDL0YsaUJBQWlCLEVBQUNqVixDQUFDO1FBQUM0WSxVQUFVLEVBQUMzQyxDQUFDO1FBQUNpRCxxQkFBcUIsRUFBQyxJQUFJO1FBQUNDLHdCQUF3QixFQUFDLElBQUk7UUFBQ0MsMEJBQTBCLEVBQUMsQ0FBQyxDQUFDO1FBQUM2QixhQUFhLEVBQUNQLENBQUM7UUFBQ1EsYUFBYSxFQUFDbEgsQ0FBQztRQUFDK0IsdUJBQXVCLEVBQUMwRSxDQUFDO1FBQUNVLGVBQWUsRUFBQ1IsQ0FBQztRQUFDUyxTQUFTLEVBQUNoRyxDQUFDLElBQUUsSUFBR3hXLE9BQU8sQ0FBQ2diLFNBQVMsR0FBQTtPQUFJLENBQUE7QUFBQSxLQUFDLENBQUMsQ0FBQTtBQUFDaGIsRUFBQUEsT0FBQUEsQ0FBQUEscUJBQUFBLEdBQThCcWIscUJBQXFCLENBQUE7Ozs7Ozs7OztBQ0ExdkZ2YixDQUFBQSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFDLFlBQVksRUFBQztHQUFDQyxLQUFLLEVBQUMsQ0FBQyxDQUFBO0VBQUUsQ0FBQyxFQUFDRCxPQUFxQkEsQ0FBQUEsWUFBQUEsR0FBQUEsT0FBQUEsQ0FBQUEsWUFBQUEsR0FBcUJBLHVCQUFxQkEsT0FBa0MsQ0FBQSx5QkFBQSxHQUFBLEtBQUssQ0FBQyxDQUFBO0NBQUMsSUFBSThTLE9BQU8sR0FBQ3JTLEtBQW1CO0dBQUNtWCxRQUFRLEdBQUNuWCxhQUFtQixFQUFBO0dBQUNxWCxNQUFNLEdBQUNyWCxJQUFpQjtBQUFDZ2MsR0FBQUEseUJBQXlCLEdBQUMsVUFBUzVZLENBQUMsRUFBQ3VSLENBQUMsRUFBQztLQUFDLEtBQUssQ0FBQyxLQUFHdlIsQ0FBQyxLQUFHQSxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUE7QUFBQyxLQUFBLElBQUl5UixDQUFDLEdBQUNGLENBQUMsQ0FBQ2tGLHFCQUFxQjtPQUFDbFosQ0FBQyxHQUFDLElBQUdwQixPQUFPLENBQUMwYyxZQUFZLEVBQUU3WSxDQUFDLEVBQUN1UixDQUFDLENBQUMsR0FBQ3RDLE9BQU8sQ0FBQ0QsU0FBUyxDQUFDUixNQUFNLEdBQUMsRUFBRTtPQUFDbUUsQ0FBQyxHQUFDLElBQUd4VyxPQUFPLENBQUMyYyxZQUFZLEVBQUU5WSxDQUFDLEVBQUN1UixDQUFDLENBQUMsR0FBQ3RDLE9BQU8sQ0FBQ0QsU0FBUyxDQUFDTixNQUFNLEdBQUMsRUFBRTtPQUFDNkMsQ0FBQyxHQUFDLElBQUdwVixPQUFPLENBQUM0YyxZQUFZLEVBQUUvWSxDQUFDLEVBQUN1UixDQUFDLENBQUMsR0FBQ3RDLE9BQU8sQ0FBQ0QsU0FBUyxDQUFDRCxNQUFNLEdBQUMsRUFBRTtPQUFDL08sQ0FBQyxHQUFDQSxDQUFDLEtBQUd5UixDQUFDLEdBQUN4QyxPQUFPLENBQUNWLFVBQVUsQ0FBQ2xCLFFBQVEsR0FBQyxFQUFFLENBQUE7S0FBQyxPQUFNLElBQUcwRyxRQUFRLENBQUNxRCxnQkFBZ0IsRUFBRW5JLE9BQU8sQ0FBQ1YsVUFBVSxDQUFDZCxVQUFVLEVBQUNsUSxDQUFDLEVBQUNvVixDQUFDLEVBQUNwQixDQUFDLEVBQUN2UixDQUFDLENBQUMsQ0FBQTtJQUFDO0dBQUM2WSxZQUFZLElBQUUxYyxPQUFrQ3ljLENBQUFBLHlCQUFBQSxHQUFBQSx5QkFBeUIsRUFBQyxVQUFTNVksQ0FBQyxFQUFDdVIsQ0FBQyxFQUFDO0tBQUMsS0FBSyxDQUFDLEtBQUd2UixDQUFDLEtBQUdBLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQTtBQUFDLEtBQUEsSUFBSXlSLENBQUMsR0FBQ0YsQ0FBQyxDQUFDckMsV0FBVztPQUFDM1IsQ0FBQyxHQUFDZ1UsQ0FBQyxDQUFDcUIsWUFBWTtPQUFDRCxDQUFDLEdBQUNwQixDQUFDLENBQUNnQixXQUFXO09BQUNmLENBQUMsR0FBQ0QsQ0FBQyxDQUFDckIsUUFBUTtPQUFDcUIsQ0FBQyxHQUFDQSxDQUFDLENBQUNoQyxTQUFTO09BQUMrQixDQUFDLEdBQUMsSUFBRzJDLE1BQU0sQ0FBQ25DLGFBQWEsRUFBRXZVLENBQUMsRUFBQ29WLENBQUMsQ0FBQyxDQUFBO0FBQUMsS0FBQSxPQUFPcEIsQ0FBQyxJQUFFQyxDQUFDLEdBQUN4UixDQUFDLEdBQUNzUixDQUFDLEtBQUdHLENBQUMsR0FBQ2tCLENBQUMsSUFBRXBCLENBQUMsR0FBQ0UsQ0FBQyxHQUFDSCxDQUFDLEVBQUNFLENBQUMsR0FBQ0QsQ0FBQyxJQUFFdlIsQ0FBQyxJQUFFQSxDQUFDLEdBQUN1UixDQUFDLEdBQUNoVSxDQUFDLEdBQUNrVSxDQUFDLElBQUV6UixDQUFDLElBQUVBLENBQUMsR0FBQ3VSLENBQUMsQ0FBQyxDQUFBO0FBQUEsSUFBQyxDQUFDO0dBQUN3SCxZQUFZLElBQUU1YyxPQUFxQjBjLENBQUFBLFlBQUFBLEdBQUFBLFlBQVksRUFBQyxVQUFTN1ksQ0FBQyxFQUFDdVIsQ0FBQyxFQUFDO0tBQUMsS0FBSyxDQUFDLEtBQUd2UixDQUFDLEtBQUdBLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQTtBQUFDLEtBQUEsSUFBSXlSLENBQUMsR0FBQ0YsQ0FBQyxDQUFDckMsV0FBVztPQUFDM1IsQ0FBQyxHQUFDZ1UsQ0FBQyxDQUFDcUIsWUFBWTtPQUFDRCxDQUFDLEdBQUNwQixDQUFDLENBQUNnQixXQUFXO09BQUNmLENBQUMsR0FBQ0QsQ0FBQyxDQUFDckIsUUFBUTtPQUFDcUIsQ0FBQyxHQUFDQSxDQUFDLENBQUNoQyxTQUFTO09BQUNoUyxDQUFDLEdBQUMsSUFBRzBXLE1BQU0sQ0FBQ25DLGFBQWEsRUFBRXZVLENBQUMsRUFBQ29WLENBQUMsQ0FBQyxDQUFBO0tBQUMsT0FBT25CLENBQUMsR0FBQ0QsQ0FBQyxJQUFFQyxDQUFDLEdBQUN4UixDQUFDLEdBQUN6QyxDQUFDLEtBQUdrVSxDQUFDLEdBQUNrQixDQUFDLEdBQUMzUyxDQUFDLEtBQUd5UixDQUFDLEdBQUNsVSxDQUFDLEdBQUN5QyxDQUFDLEtBQUd5UixDQUFDLENBQUE7QUFBQSxJQUFDLENBQUM7R0FBQ3FILFlBQVksSUFBRTNjLE9BQXFCNGMsQ0FBQUEsWUFBQUEsR0FBQUEsWUFBWSxFQUFDLFVBQVMvWSxDQUFDLEVBQUN1UixDQUFDLEVBQUM7S0FBQyxLQUFLLENBQUMsS0FBR3ZSLENBQUMsS0FBR0EsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFBO0FBQUMsS0FBQSxJQUFJeVIsQ0FBQyxHQUFDRixDQUFDLENBQUNxQixZQUFZO09BQUNyVixDQUFDLEdBQUNnVSxDQUFDLENBQUNnQixXQUFXO09BQUNJLENBQUMsR0FBQ3BCLENBQUMsQ0FBQ1csVUFBVTtPQUFDVixDQUFDLEdBQUNELENBQUMsQ0FBQ3JCLFFBQVE7T0FBQ3FCLENBQUMsR0FBQ0EsQ0FBQyxDQUFDaEMsU0FBUyxDQUFBO0tBQUMsT0FBTSxDQUFDLENBQUNpQyxDQUFDLEtBQUdELENBQUMsSUFBRUMsQ0FBQyxHQUFDeFIsQ0FBQyxHQUFDeVIsQ0FBQyxJQUFFa0IsQ0FBQyxHQUFDLENBQUMsR0FBQ2xCLENBQUMsR0FBQ3pSLENBQUMsR0FBQ0EsQ0FBQyxJQUFFdVIsQ0FBQyxHQUFDLElBQUcwQyxNQUFNLENBQUNuQyxhQUFhLEVBQUVMLENBQUMsRUFBQ2xVLENBQUMsQ0FBQyxDQUFDLElBQUVvVixDQUFDLEdBQUMsQ0FBQyxHQUFDcEIsQ0FBQyxHQUFDdlIsQ0FBQyxDQUFDLENBQUE7QUFBQSxJQUFDLENBQUMsQ0FBQTtBQUFDN0QsQ0FBQUEsT0FBQUEsQ0FBQUEsWUFBQUEsR0FBcUIyYyxZQUFZLENBQUE7Ozs7Ozs7QUNBNTNDLENBQUEsU0FBU0UsUUFBUUEsQ0FBQ3JHLENBQUMsRUFBQ3BWLENBQUMsRUFBQztHQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLEtBQUdBLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQTtHQUFDLFNBQVNxYSxDQUFDQSxHQUFFO0tBQUNwRSxDQUFDLEtBQUd5RixZQUFZLENBQUN6RixDQUFDLENBQUMsRUFBQ0EsQ0FBQyxHQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7SUFBQTtHQUFDLElBQUlBLENBQUMsR0FBQyxLQUFLLENBQUMsQ0FBQTtHQUFDLE9BQU0sQ0FBQyxZQUFVO0FBQUMsS0FBQSxLQUFJLElBQUl4VCxDQUFDLEdBQUMsSUFBSSxFQUFDc1IsQ0FBQyxHQUFDLEVBQUUsRUFBQ0MsQ0FBQyxHQUFDLENBQUMsRUFBQ0EsQ0FBQyxHQUFDM1QsU0FBUyxDQUFDUixNQUFNLEVBQUNtVSxDQUFDLEVBQUUsRUFBQ0QsQ0FBQyxDQUFDQyxDQUFDLENBQUMsR0FBQzNULFNBQVMsQ0FBQzJULENBQUMsQ0FBQyxDQUFBO0tBQUNxRyxDQUFDLEVBQUUsRUFBQ3BFLENBQUMsR0FBQ25QLE1BQU0sQ0FBQzZVLFVBQVUsQ0FBQyxZQUFVO09BQUN2RyxDQUFDLENBQUNoTixLQUFLLENBQUMzRixDQUFDLEVBQUNzUixDQUFDLENBQUMsRUFBQ2tDLENBQUMsR0FBQyxLQUFLLENBQUMsQ0FBQTtNQUFDLEVBQUNqVyxDQUFDLENBQUMsQ0FBQTtJQUFDLEVBQUNxYSxDQUFDLENBQUMsQ0FBQTtFQUFBO0FBQUMzYixDQUFBQSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFDLFlBQVksRUFBQztHQUFDQyxLQUFLLEVBQUMsQ0FBQyxDQUFBO0FBQUMsRUFBQyxDQUFDLEVBQUNELE9BQUFBLENBQUFBLFFBQUFBLEdBQWlCLEtBQUssQ0FBQyxFQUFDQSxtQkFBaUI2YyxRQUFRLENBQUE7Ozs7Ozs7QUNBN1YsQ0FBQSxTQUFTRyxLQUFLQSxHQUFFO0dBQUMsS0FBSSxJQUFJblosQ0FBQyxHQUFDLEVBQUUsRUFBQ3NSLENBQUMsR0FBQyxDQUFDLEVBQUNBLENBQUMsR0FBQzFULFNBQVMsQ0FBQ1IsTUFBTSxFQUFDa1UsQ0FBQyxFQUFFLEVBQUN0UixDQUFDLENBQUNzUixDQUFDLENBQUMsR0FBQzFULFNBQVMsQ0FBQzBULENBQUMsQ0FBQyxDQUFBO0FBQUMsR0FBc0M4SCxPQUFPLENBQUNELEtBQUssQ0FBQ3hULEtBQUssQ0FBQ3lULE9BQU8sRUFBQ3BaLENBQUMsQ0FBQyxDQUFBO0VBQUE7QUFBQy9ELENBQUFBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLEVBQUMsWUFBWSxFQUFDO0dBQUNDLEtBQUssRUFBQyxDQUFDLENBQUE7QUFBQyxFQUFDLENBQUMsRUFBQ0QsT0FBQUEsQ0FBQUEsS0FBQUEsR0FBYyxLQUFLLENBQUMsRUFBQ0EsZ0JBQWNnZCxLQUFLLENBQUE7Ozs7Ozs7QUNBL09sZCxDQUFBQSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFDLFlBQVksRUFBQztHQUFDQyxLQUFLLEVBQUMsQ0FBQyxDQUFBO0VBQUUsQ0FBQyxFQUFDRCxPQUFBQSxDQUFBQSxnQkFBQUEsR0FBeUJBLE9BQXFCQSxDQUFBQSxZQUFBQSxHQUFBQSxPQUFBQSxDQUFBQSw2QkFBQUEsR0FBc0NBLDJDQUF5Q0EsT0FBaUNBLENBQUFBLHdCQUFBQSxHQUFBQSxPQUFBQSxDQUFBQSxtQkFBQUEsR0FBNEIsS0FBSyxDQUFDLENBQUE7QUFBQyxDQUFBLElBQUlrZCxtQkFBbUIsR0FBQyxVQUFTclosQ0FBQyxFQUFDdVIsQ0FBQyxFQUFDO0FBQUMsS0FBQSxJQUFJQSxDQUFDLEdBQUNBLENBQUMsSUFBRSxFQUFFO09BQUNoVSxDQUFDLEdBQUNnVSxDQUFDLENBQUNyQyxXQUFXO09BQUNvQyxDQUFDLEdBQUNDLENBQUMsQ0FBQ3FCLFlBQVk7T0FBQ3JCLENBQUMsR0FBQ0EsQ0FBQyxDQUFDVyxVQUFVO09BQUMzVSxDQUFDLEdBQUNBLENBQUMsR0FBQytULENBQUMsQ0FBQTtBQUFDLEtBQUEsT0FBTyxDQUFDLEtBQUdBLENBQUMsR0FBQyxJQUFHblYsT0FBTyxDQUFDbWQsZ0NBQWdDLEVBQUUvYixDQUFDLEVBQUMrVCxDQUFDLEVBQUNDLENBQUMsQ0FBQyxHQUFDLElBQUdwVixPQUFPLENBQUNvZCw2QkFBNkIsRUFBRWhjLENBQUMsRUFBQytULENBQUMsRUFBQ0MsQ0FBQyxFQUFDdlIsQ0FBQyxDQUFDLENBQUE7SUFBQztHQUFDd1osd0JBQXdCLElBQUVyZCxPQUE0QmtkLENBQUFBLG1CQUFBQSxHQUFBQSxtQkFBbUIsRUFBQyxVQUFTclosQ0FBQyxFQUFDdVIsQ0FBQyxFQUFDO0tBQUMsSUFBSWhVLENBQUMsQ0FBQTtLQUFDLE9BQU8sS0FBSyxDQUFDLEtBQUdnVSxDQUFDLEtBQUdBLENBQUMsR0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDdlIsQ0FBQyxHQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLEdBQUMsQ0FBQyxHQUFDQSxDQUFDLEtBQUd1UixDQUFDLElBQUVoVSxDQUFDLEdBQUNlLElBQUksQ0FBQ3dZLEtBQUssQ0FBQzlXLENBQUMsR0FBQ3VSLENBQUMsQ0FBQyxFQUFDdlIsQ0FBQyxHQUFDdVIsQ0FBQyxJQUFFLENBQUMsR0FBQ2hVLENBQUMsR0FBQyxDQUFDLEdBQUNBLENBQUMsSUFBRSxDQUFDLENBQUE7QUFBQSxJQUFDLENBQUM7R0FBQytiLGdDQUFnQyxJQUFFbmQsT0FBQUEsQ0FBQUEsd0JBQUFBLEdBQWlDcWQsd0JBQXdCLEVBQUMsVUFBU3haLENBQUMsRUFBQ3VSLENBQUMsRUFBQ2hVLENBQUMsRUFBQztBQUFDLEtBQUEsT0FBT3lDLENBQUMsR0FBQ3VSLENBQUMsR0FBQ2hVLENBQUMsR0FBQ2dVLENBQUMsR0FBQ2hVLENBQUMsR0FBQ3lDLENBQUMsR0FBQyxDQUFDLEdBQUNBLENBQUMsR0FBQyxDQUFDLENBQUE7QUFBQSxJQUFDLENBQUM7QUFBQ3VaLEdBQUFBLDZCQUE2QixJQUFFcGQsT0FBeUNtZCxDQUFBQSxnQ0FBQUEsR0FBQUEsZ0NBQWdDLEVBQUMsVUFBU3RaLENBQUMsRUFBQ3VSLENBQUMsRUFBQ2hVLENBQUMsRUFBQytULENBQUMsRUFBQztBQUFDLEtBQUEsSUFBSW1HLENBQUMsR0FBQyxJQUFHdGIsT0FBTyxDQUFDcWQsd0JBQXdCLEVBQUVqYyxDQUFDLEVBQUNnVSxDQUFDLENBQUMsQ0FBQTtLQUFDLE9BQU92UixDQUFDLEtBQUd6QyxDQUFDLEdBQUNnVSxDQUFDLEdBQUMsQ0FBQyxHQUFDRCxDQUFDLElBQUV0UixDQUFDLEdBQUN1UixDQUFDLElBQUUsQ0FBQyxLQUFHdlIsQ0FBQyxHQUFDeVgsQ0FBQyxHQUFDLENBQUMsS0FBR3pYLENBQUMsR0FBQ3pDLENBQUMsR0FBQ2dVLENBQUMsSUFBRSxDQUFDLEdBQUNrRyxDQUFDLEdBQUNBLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDbEcsQ0FBQyxHQUFDalQsSUFBSSxDQUFDd1ksS0FBSyxDQUFDOVcsQ0FBQyxHQUFDdVIsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQTtBQUFBLElBQUMsQ0FBQztHQUFDa0ksWUFBWSxJQUFFdGQsT0FBc0NvZCxDQUFBQSw2QkFBQUEsR0FBQUEsNkJBQTZCLEVBQUMsVUFBU3ZaLENBQUMsRUFBQ3VSLENBQUMsRUFBQztLQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLEtBQUdBLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQTtBQUFDdlIsS0FBQUEsQ0FBQyxHQUFDLENBQUNBLENBQUMsR0FBQyxLQUFLLENBQUMsS0FBR0EsQ0FBQyxHQUFDLENBQUMsR0FBQ0EsQ0FBQyxJQUFFLENBQUMsQ0FBQTtBQUFDLEtBQUEsT0FBT0EsQ0FBQyxHQUFDLENBQUMsR0FBQ0EsQ0FBQyxHQUFDdVIsQ0FBQyxHQUFDQSxDQUFDLEdBQUN2UixDQUFDLEtBQUdBLENBQUMsR0FBQyxDQUFDLENBQUMsRUFBQztPQUFDMFosSUFBSSxFQUFDMVosQ0FBQztPQUFDa1MsVUFBVSxFQUFDWCxDQUFBQTtNQUFFLENBQUE7QUFBQSxJQUFDLENBQUM7R0FBQ29JLGdCQUFnQixJQUFFeGQsT0FBQUEsQ0FBQUEsWUFBQUEsR0FBcUJzZCxZQUFZLEVBQUMsVUFBU3paLENBQUMsRUFBQztBQUFDLEtBQUEsSUFBSUEsQ0FBQyxHQUFDQSxDQUFDLElBQUUsRUFBRTtPQUFDdVIsQ0FBQyxHQUFDdlIsQ0FBQyxDQUFDNFMsWUFBWTtPQUFDclYsQ0FBQyxHQUFDeUMsQ0FBQyxDQUFDa1AsV0FBVztPQUFDb0MsQ0FBQyxHQUFDdFIsQ0FBQyxDQUFDa1EsUUFBUTtPQUFDdUgsQ0FBQyxHQUFDelgsQ0FBQyxDQUFDa1MsVUFBVSxDQUFBO0tBQUMsT0FBT2xTLENBQUMsQ0FBQ3FULHFCQUFxQixHQUFDO09BQUN1RyxtQkFBbUIsRUFBQyxDQUFDLENBQUM7T0FBQ0MsbUJBQW1CLEVBQUMsQ0FBQyxDQUFBO0FBQUMsTUFBQyxHQUFDO09BQUNELG1CQUFtQixFQUFDLENBQUMsQ0FBQyxLQUFHdEksQ0FBQyxJQUFFLENBQUMsS0FBRy9ULENBQUM7T0FBQ3NjLG1CQUFtQixFQUFDLENBQUMsQ0FBQyxLQUFHdkksQ0FBQyxJQUFFbUcsQ0FBQyxHQUFDbEcsQ0FBQyxJQUFFaFUsQ0FBQUE7TUFBRSxDQUFBO0FBQUEsSUFBQyxDQUFDLENBQUE7QUFBQ3BCLENBQUFBLE9BQUFBLENBQUFBLGdCQUFBQSxHQUF5QndkLGdCQUFnQixDQUFBOzs7Ozs7O0FDQTVnRDFkLENBQUFBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLEVBQUMsWUFBWSxFQUFDO0dBQUNDLEtBQUssRUFBQyxDQUFDLENBQUE7QUFBQyxFQUFDLENBQUMsRUFBQ0QsT0FBb0NBLENBQUFBLDJCQUFBQSxHQUFBQSxPQUFBQSxDQUFBQSw0QkFBQUEsR0FBcUNBLHVDQUFxQ0EsT0FBK0JBLENBQUFBLHNCQUFBQSxHQUFBQSxPQUFBQSxDQUFBQSx1QkFBQUEsR0FBZ0NBLE9BQTJCQSxDQUFBQSxrQkFBQUEsR0FBQUEsT0FBQUEsQ0FBQUEsVUFBQUEsR0FBbUJBLE9BQTZCQSxDQUFBQSxvQkFBQUEsR0FBQUEsT0FBQUEsQ0FBQUEsaUJBQUFBLEdBQTBCQSxPQUE4QixDQUFBLHFCQUFBLEdBQUEsS0FBSyxDQUFDLENBQUE7Q0FBQyxJQUFJOFMsT0FBTyxHQUFDclMsS0FBbUIsQ0FBQTtBQUFDLENBQUEsU0FBU2tkLHFCQUFxQkEsQ0FBQ3ZJLENBQUMsRUFBQ0QsQ0FBQyxFQUFDO0dBQUMsSUFBSUMsQ0FBQyxHQUFDLENBQUNBLENBQUMsSUFBRSxFQUFFLEVBQUV6QixnQkFBZ0I7QUFBQ3dCLEtBQUFBLENBQUMsR0FBQ0EsQ0FBQyxJQUFFLEVBQUU7S0FBQ3RSLENBQUMsR0FBQ3NSLENBQUMsQ0FBQ3NCLFlBQVk7S0FBQ25CLENBQUMsR0FBQ0gsQ0FBQyxDQUFDWSxVQUFVO0tBQUNaLENBQUMsR0FBQ0EsQ0FBQyxDQUFDL0IsU0FBUyxDQUFBO0dBQUMsSUFBRyxJQUFHcFQsT0FBTyxDQUFDNGQsVUFBVSxFQUFFeEksQ0FBQyxFQUFDdEMsT0FBTyxDQUFDaEMsZ0JBQWdCLENBQUNELFVBQVUsQ0FBQyxFQUFDLE9BQU0sQ0FBQ3NFLENBQUMsSUFBRXRSLENBQUMsS0FBR3lSLENBQUMsQ0FBQTtFQUFBO0FBQUMsQ0FBQSxTQUFTdUksaUJBQWlCQSxDQUFDekksQ0FBQyxFQUFDRCxDQUFDLEVBQUM7R0FBQyxPQUFPQyxDQUFDLENBQUN2QixtQkFBbUIsSUFBRThKLHFCQUFxQixDQUFDdkksQ0FBQyxFQUFDRCxDQUFDLENBQUMsQ0FBQTtFQUFBO0FBQUMsQ0FBQSxTQUFTMkksb0JBQW9CQSxDQUFDMUksQ0FBQyxFQUFDRCxDQUFDLEVBQUM7QUFBQyxHQUFBLE9BQU9DLENBQUMsQ0FBQ3hCLHNCQUFzQixJQUFFLENBQUN3QixDQUFDLENBQUNyQixRQUFRLElBQUU0SixxQkFBcUIsQ0FBQ3ZJLENBQUMsRUFBQ0QsQ0FBQyxDQUFDLENBQUE7RUFBQTtBQUFDblYsQ0FBQUEsT0FBQUEsQ0FBQUEscUJBQUFBLEdBQThCMmQscUJBQXFCLEVBQUMzZCxPQUFBQSxDQUFBQSxpQkFBQUEsR0FBMEI2ZCxpQkFBaUIsRUFBQzdkLE9BQUFBLENBQUFBLG9CQUFBQSxHQUE2QjhkLG9CQUFvQixDQUFBO0FBQUMsQ0FBQSxJQUFJRixVQUFVLEdBQUMsVUFBU3hJLENBQUMsRUFBQ0QsQ0FBQyxFQUFDO0FBQUMsS0FBQSxPQUFPLEtBQUssQ0FBQyxLQUFHQyxDQUFDLEtBQUdBLENBQUMsR0FBQyxFQUFFLENBQUMsRUFBQyxLQUFLLENBQUMsS0FBR0QsQ0FBQyxLQUFHQSxDQUFDLEdBQUMsRUFBRSxDQUFDLEVBQUMxTixPQUFPLENBQUMyTixDQUFDLElBQUVBLENBQUMsQ0FBQzJJLFFBQVEsQ0FBQzVJLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFBQztHQUFDNkksa0JBQWtCLElBQUVoZSxPQUFtQjRkLENBQUFBLFVBQUFBLEdBQUFBLFVBQVUsRUFBQyxVQUFTeEksQ0FBQyxFQUFDRCxDQUFDLEVBQUM7QUFBQyxLQUFBLE9BQU9DLENBQUMsSUFBRSxJQUFHcFYsT0FBTyxDQUFDNGQsVUFBVSxFQUFFekksQ0FBQyxFQUFDckMsT0FBTyxDQUFDaEMsZ0JBQWdCLENBQUNGLFNBQVMsQ0FBQyxDQUFBO0FBQUEsSUFBQyxDQUFDO0dBQUNxTix1QkFBdUIsSUFBRWplLE9BQUFBLENBQUFBLGtCQUFBQSxHQUEyQmdlLGtCQUFrQixFQUFDLFVBQVM1SSxDQUFDLEVBQUNELENBQUMsRUFBQ3RSLENBQUMsRUFBQztLQUFDLE9BQU8sS0FBSyxDQUFDLEtBQUd1UixDQUFDLEtBQUdBLENBQUMsR0FBQyxDQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsS0FBR0QsQ0FBQyxLQUFHQSxDQUFDLEdBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQ3RSLENBQUMsR0FBQyxLQUFLLENBQUMsS0FBR0EsQ0FBQyxJQUFFQSxDQUFDLElBQUV1UixDQUFDLEdBQUMsQ0FBQyxLQUFHekYsTUFBTSxDQUFDd0YsQ0FBQyxDQUFDLElBQUVoVCxJQUFJLENBQUN5WCxJQUFJLENBQUN4RSxDQUFDLEdBQUNELENBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQTtBQUFBLElBQUMsQ0FBQztHQUFDK0ksc0JBQXNCLElBQUVsZSxPQUFBQSxDQUFBQSx1QkFBQUEsR0FBZ0NpZSx1QkFBdUIsRUFBQyxVQUFTN0ksQ0FBQyxFQUFDRCxDQUFDLEVBQUN0UixDQUFDLEVBQUM7S0FBQyxPQUFNLENBQUNzUixDQUFDLElBQUVDLENBQUMsS0FBR3ZSLENBQUMsR0FBQyxDQUFDLENBQUE7QUFBQSxJQUFDLENBQUM7QUFBQ3NhLEdBQUFBLDRCQUE0QixJQUFFbmUsT0FBK0JrZSxDQUFBQSxzQkFBQUEsR0FBQUEsc0JBQXNCLEVBQUMsVUFBUzlJLENBQUMsRUFBQ0QsQ0FBQyxFQUFDdFIsQ0FBQyxFQUFDeVIsQ0FBQyxFQUFDO0tBQUMsT0FBTSxDQUFDSCxDQUFDLEdBQUN0UixDQUFDLEdBQUN5UixDQUFDLEdBQUNGLENBQUMsR0FBQ0UsQ0FBQyxLQUFHLENBQUMsQ0FBQTtBQUFBLElBQUMsQ0FBQztHQUFDOEksNEJBQTRCLElBQUVwZSxPQUFBQSxDQUFBQSw0QkFBQUEsR0FBcUNtZSw0QkFBNEIsRUFBQyxVQUFTL0ksQ0FBQyxFQUFDO0tBQUMsT0FBTSxDQUFDQSxDQUFDLEdBQUMsS0FBSyxDQUFDLEtBQUdBLENBQUMsR0FBQyxFQUFFLEdBQUNBLENBQUMsTUFBSXRDLE9BQU8sQ0FBQ25DLGdCQUFnQixDQUFDVixNQUFNLElBQUVtRixDQUFDLEtBQUd0QyxPQUFPLENBQUNuQyxnQkFBZ0IsQ0FBQ0QsR0FBRyxDQUFBO0FBQUEsSUFBQyxDQUFDO0dBQUMyTiwyQkFBMkIsSUFBRXJlLE9BQUFBLENBQUFBLDRCQUFBQSxHQUFxQ29lLDRCQUE0QixFQUFDLFVBQVNoSixDQUFDLEVBQUM7S0FBQyxPQUFNLENBQUNBLENBQUMsR0FBQyxLQUFLLENBQUMsS0FBR0EsQ0FBQyxHQUFDLEVBQUUsR0FBQ0EsQ0FBQyxNQUFJdEMsT0FBTyxDQUFDbkMsZ0JBQWdCLENBQUNGLE9BQU8sSUFBRTJFLENBQUMsS0FBR3RDLE9BQU8sQ0FBQ25DLGdCQUFnQixDQUFDRCxHQUFHLENBQUE7QUFBQSxJQUFDLENBQUMsQ0FBQTtBQUFDMVEsQ0FBQUEsT0FBQUEsQ0FBQUEsMkJBQUFBLEdBQW9DcWUsMkJBQTJCLENBQUE7Ozs7O0FDQTloRSxDQUFBLElBQUlDLGVBQWUsR0FBQ3hlLE1BQU0sQ0FBQ3llLE1BQU0sR0FBQyxVQUFTMWEsQ0FBQyxFQUFDd1IsQ0FBQyxFQUFDRCxDQUFDLEVBQUNELENBQUMsRUFBQztLQUFDLEtBQUssQ0FBQyxLQUFHQSxDQUFDLEtBQUdBLENBQUMsR0FBQ0MsQ0FBQyxDQUFDLENBQUE7S0FBQyxJQUFJMEcsQ0FBQyxHQUFDaGMsTUFBTSxDQUFDeUosd0JBQXdCLENBQUM4TCxDQUFDLEVBQUNELENBQUMsQ0FBQyxDQUFBO0tBQUMwRyxDQUFDLEtBQUcsS0FBSyxJQUFHQSxDQUFDLEdBQUN6RyxDQUFDLENBQUMzSSxVQUFVLEdBQUMsQ0FBQ29QLENBQUMsQ0FBQ2xYLFFBQVEsSUFBRSxDQUFDa1gsQ0FBQyxDQUFDblgsWUFBWSxDQUFDLEtBQUdtWCxDQUFDLEdBQUM7T0FBQ3BYLFVBQVUsRUFBQyxDQUFDLENBQUM7T0FBQ21ELEdBQUcsRUFBQyxZQUFVO1NBQUMsT0FBT3dOLENBQUMsQ0FBQ0QsQ0FBQyxDQUFDLENBQUE7UUFBQTtNQUFFLENBQUMsRUFBQ3RWLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDOEQsQ0FBQyxFQUFDc1IsQ0FBQyxFQUFDMkcsQ0FBQyxDQUFDLENBQUE7SUFBQyxHQUFDLFVBQVNqWSxDQUFDLEVBQUN3UixDQUFDLEVBQUNELENBQUMsRUFBQ0QsQ0FBQyxFQUFDO0FBQUN0UixLQUFBQSxDQUFDLENBQUNzUixDQUFDLEdBQUMsS0FBSyxDQUFDLEtBQUdBLENBQUMsR0FBQ0MsQ0FBQyxHQUFDRCxDQUFDLENBQUMsR0FBQ0UsQ0FBQyxDQUFDRCxDQUFDLENBQUMsQ0FBQTtJQUFDO0FBQUNvSixHQUFBQSxZQUFZLEdBQUMsVUFBUzNhLENBQUMsRUFBQ3dSLENBQUMsRUFBQztBQUFDLEtBQUEsS0FBSSxJQUFJRCxDQUFDLElBQUl2UixDQUFDLEVBQUMsU0FBUyxLQUFHdVIsQ0FBQyxJQUFFdFYsTUFBTSxDQUFDOEksU0FBUyxDQUFDdUQsY0FBYyxDQUFDQyxJQUFJLENBQUNpSixDQUFDLEVBQUNELENBQUMsQ0FBQyxJQUFFa0osZUFBZSxDQUFDakosQ0FBQyxFQUFDeFIsQ0FBQyxFQUFDdVIsQ0FBQyxDQUFDLENBQUE7SUFBQyxDQUFBO0FBQUN0VixDQUFBQSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFDLFlBQVksRUFBQztHQUFDQyxLQUFLLEVBQUMsQ0FBQyxDQUFBO0FBQUMsRUFBQyxDQUFDLEVBQUN1ZSxZQUFZLENBQUMvZCxhQUFtQixFQUFBLEVBQUNULE9BQU8sQ0FBQyxFQUFDd2UsWUFBWSxDQUFDL2QsZUFBQUEsRUFBcUIsRUFBQ1QsT0FBTyxDQUFDLEVBQUN3ZSxZQUFZLENBQUMvZCxVQUF1QixFQUFDVCxPQUFPLENBQUMsRUFBQ3dlLFlBQVksQ0FBQy9kLE1BQW1CLEVBQUNULE9BQU8sQ0FBQyxFQUFDd2UsWUFBWSxDQUFDL2QsSUFBaUIsRUFBQ1QsT0FBTyxDQUFDLEVBQUN3ZSxZQUFZLENBQUMvZCxLQUFrQixFQUFDVCxPQUFPLENBQUMsRUFBQ3dlLFlBQVksQ0FBQy9kLE1BQW1CLEVBQUNULE9BQU8sQ0FBQyxFQUFDd2UsWUFBWSxDQUFDL2QsUUFBcUIsRUFBQ1QsT0FBTyxDQUFDLEVBQUN3ZSxZQUFZLENBQUMvZCxPQUFvQixFQUFDVCxPQUFPLENBQUMsQ0FBQTs7Ozs7QUNBdjFCLENBQUEsSUFBSXllLGVBQWUsR0FBQyxVQUFTNWEsQ0FBQyxFQUFDO0tBQUMsT0FBT0EsQ0FBQyxJQUFFQSxDQUFDLENBQUM2SSxVQUFVLEdBQUM3SSxDQUFDLEdBQUM7T0FBQzZhLE9BQU8sRUFBQzdhLENBQUFBO01BQUUsQ0FBQTtJQUFDO0dBQUM4YSxPQUFPLElBQUU3ZSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFDLFlBQVksRUFBQztLQUFDQyxLQUFLLEVBQUMsQ0FBQyxDQUFBO0FBQUMsSUFBQyxDQUFDLEVBQUNELE9BQWtCLENBQUEsU0FBQSxHQUFBLEtBQUssQ0FBQyxFQUFDeWUsZUFBZSxDQUFDaGUsT0FBUSxDQUFBLE9BQU8sQ0FBQyxDQUFDLENBQUM7R0FBQ3FTLE9BQU8sR0FBQ3JTLEtBQW1CO0dBQUNtZSxPQUFPLEdBQUNuZSxLQUFtQjtBQUFDb2UsR0FBQUEsU0FBUyxHQUFDLFVBQVNoYixDQUFDLEVBQUM7QUFBQyxLQUFBLElBQUl1UixDQUFDLEdBQUN2UixDQUFDLENBQUNrUCxXQUFXO09BQUN1QyxDQUFDLEdBQUN6UixDQUFDLENBQUNrUyxVQUFVO09BQUNsUyxDQUFDLEdBQUNBLENBQUMsQ0FBQ2liLGVBQWU7QUFBQzFKLE9BQUFBLENBQUMsR0FBQyxJQUFHd0osT0FBTyxDQUFDdEIsWUFBWSxFQUFFbEksQ0FBQyxFQUFDRSxDQUFDLENBQUMsQ0FBQ2lJLElBQUksQ0FBQTtBQUFDLEtBQUEsT0FBTSxVQUFVLElBQUUsT0FBTzFaLENBQUMsR0FBQzhhLE9BQU8sQ0FBQ0QsT0FBTyxDQUFDcGYsYUFBYSxDQUFDLEtBQUssRUFBQztBQUFDeWYsT0FBQUEsU0FBUyxFQUFDak0sT0FBTyxDQUFDVixVQUFVLENBQUNSLFVBQUFBO01BQVcsRUFBQy9OLENBQUMsQ0FBQztPQUFDMFosSUFBSSxFQUFDbkksQ0FBQztPQUFDVyxVQUFVLEVBQUNULENBQUFBO0FBQUMsTUFBQyxDQUFDLENBQUMsSUFBRXpSLENBQUMsR0FBQyxJQUFHK2EsT0FBTyxDQUFDM0QsZ0JBQWdCLEVBQUVuSSxPQUFPLENBQUNWLFVBQVUsQ0FBQ1AsZUFBZSxFQUFDaUIsT0FBTyxDQUFDRCxTQUFTLENBQUNILFNBQVMsQ0FBQyxFQUFDaU0sT0FBTyxDQUFDRCxPQUFPLENBQUNwZixhQUFhLENBQUMsS0FBSyxFQUFDO0FBQUN5ZixPQUFBQSxTQUFTLEVBQUNqTSxPQUFPLENBQUNWLFVBQVUsQ0FBQ1IsVUFBQUE7TUFBVyxFQUFDK00sT0FBTyxDQUFDRCxPQUFPLENBQUNwZixhQUFhLENBQUMsTUFBTSxFQUFDO0FBQUN5ZixPQUFBQSxTQUFTLEVBQUNqTSxPQUFPLENBQUNWLFVBQVUsQ0FBQ1AsZUFBQUE7TUFBZ0IsRUFBQ3VELENBQUMsQ0FBQyxFQUFDdUosT0FBTyxDQUFDRCxPQUFPLENBQUNwZixhQUFhLENBQUMsTUFBTSxFQUFDO09BQUN5ZixTQUFTLEVBQUNsYixDQUFBQTtNQUFFLEVBQUMsR0FBRyxDQUFDLEVBQUM4YSxPQUFPLENBQUNELE9BQU8sQ0FBQ3BmLGFBQWEsQ0FBQyxNQUFNLEVBQUM7QUFBQ3lmLE9BQUFBLFNBQVMsRUFBQ2pNLE9BQU8sQ0FBQ1YsVUFBVSxDQUFDUCxlQUFBQTtBQUFlLE1BQUMsRUFBQ3lELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUFDLENBQUE7QUFBQ3RWLENBQUFBLE9BQUFBLENBQUFBLFNBQUFBLEdBQWtCNmUsU0FBUyxDQUFBOzs7Ozs7O0FDQWo2QixDQUFBLElBQUlKLGVBQWUsR0FBQyxVQUFTNWEsQ0FBQyxFQUFDO0tBQUMsT0FBT0EsQ0FBQyxJQUFFQSxDQUFDLENBQUM2SSxVQUFVLEdBQUM3SSxDQUFDLEdBQUM7T0FBQzZhLE9BQU8sRUFBQzdhLENBQUFBO01BQUUsQ0FBQTtJQUFDO0dBQUM4YSxPQUFPLElBQUU3ZSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFDLFlBQVksRUFBQztLQUFDQyxLQUFLLEVBQUMsQ0FBQyxDQUFBO0FBQUMsSUFBQyxDQUFDLEVBQUNELE9BQWtCLENBQUEsU0FBQSxHQUFBLEtBQUssQ0FBQyxFQUFDeWUsZUFBZSxDQUFDaGUsT0FBUSxDQUFBLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFBQ3VlLEdBQUFBLFNBQVMsR0FBQyxVQUFTbmIsQ0FBQyxFQUFDO0FBQUMsS0FBQSxJQUFJdVIsQ0FBQyxHQUFDdlIsQ0FBQyxDQUFDMFosSUFBSTtPQUFDbEksQ0FBQyxHQUFDeFIsQ0FBQyxDQUFDa2IsU0FBUztPQUFDbGIsQ0FBQyxHQUFDQSxDQUFDLENBQUNvYixNQUFNLENBQUE7S0FBQyxPQUFPTixPQUFPLENBQUNELE9BQU8sQ0FBQ3BmLGFBQWEsQ0FBQyxJQUFJLEVBQUM7T0FBQ0QsS0FBSyxFQUFDd0UsQ0FBQztPQUFDa2IsU0FBUyxFQUFDMUosQ0FBQUE7TUFBRSxFQUFDRCxDQUFDLENBQUMsQ0FBQTtJQUFDLENBQUE7QUFBQ3BWLENBQUFBLE9BQUFBLENBQUFBLFNBQUFBLEdBQWtCZ2YsU0FBUyxDQUFBOzs7Ozs7O0FDQTdWLENBQUEsSUFBSVAsZUFBZSxHQUFDLFVBQVM1YSxDQUFDLEVBQUM7S0FBQyxPQUFPQSxDQUFDLElBQUVBLENBQUMsQ0FBQzZJLFVBQVUsR0FBQzdJLENBQUMsR0FBQztPQUFDNmEsT0FBTyxFQUFDN2EsQ0FBQUE7TUFBRSxDQUFBO0lBQUM7R0FBQzhhLE9BQU8sSUFBRTdlLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLEVBQUMsWUFBWSxFQUFDO0tBQUNDLEtBQUssRUFBQyxDQUFDLENBQUE7QUFBQyxJQUFDLENBQUMsRUFBQ0QsT0FBdUIsQ0FBQSxjQUFBLEdBQUEsS0FBSyxDQUFDLEVBQUN5ZSxlQUFlLENBQUNoZSxPQUFRLENBQUEsT0FBTyxDQUFDLENBQUMsQ0FBQztHQUFDcVMsT0FBTyxHQUFDclMsS0FBbUI7R0FBQ21lLE9BQU8sR0FBQ25lLEtBQW1CO0FBQUN5ZSxHQUFBQSxjQUFjLEdBQUMsVUFBU3JiLENBQUMsRUFBQztBQUFDLEtBQUEsSUFBSXlULENBQUMsR0FBQ3pULENBQUMsQ0FBQ3dDLEtBQUs7T0FBQ21RLENBQUMsR0FBQzNTLENBQUMsQ0FBQ3NiLE9BQU87T0FBQzlKLENBQUMsR0FBQ3hSLENBQUMsQ0FBQ3ViLFlBQVk7T0FBQzlELENBQUMsR0FBQ3pYLENBQUMsQ0FBQ3diLFlBQVk7T0FBQ2pLLENBQUMsR0FBQ3ZSLENBQUMsQ0FBQzhQLGdCQUFnQjtPQUFDOEgsQ0FBQyxHQUFDNVgsQ0FBQyxDQUFDeWIsY0FBYztPQUFDOUQsQ0FBQyxHQUFDbEUsQ0FBQyxDQUFDdkIsVUFBVTtPQUFDd0osQ0FBQyxHQUFDakksQ0FBQyxDQUFDYixZQUFZO09BQUNZLENBQUMsR0FBQ0MsQ0FBQyxDQUFDdkQsUUFBUTtPQUFDbFEsQ0FBQyxHQUFDeVQsQ0FBQyxDQUFDbEUsU0FBUztPQUFDbUksQ0FBQyxHQUFDakUsQ0FBQyxDQUFDdkUsV0FBVztPQUFDZ0osQ0FBQyxHQUFDLElBQUc2QyxPQUFPLENBQUNwQixnQkFBZ0IsRUFBRWxHLENBQUMsQ0FBQyxDQUFDb0csbUJBQW1CO09BQUNoQyxDQUFDLEdBQUMsSUFBR2tELE9BQU8sQ0FBQ1osa0JBQWtCLEVBQUVuYSxDQUFDLEVBQUN1UixDQUFDLENBQUM7QUFBQ29LLE9BQUFBLENBQUMsR0FBQyxJQUFHWixPQUFPLENBQUNYLHVCQUF1QixFQUFFekMsQ0FBQyxFQUFDK0QsQ0FBQyxFQUFDN0QsQ0FBQyxDQUFDLENBQUE7S0FBQyxPQUFPaUQsT0FBTyxDQUFDRCxPQUFPLENBQUNwZixhQUFhLENBQUMsSUFBSSxFQUFDO0FBQUN5ZixPQUFBQSxTQUFTLEVBQUNqTSxPQUFPLENBQUNWLFVBQVUsQ0FBQ2IsSUFBQUE7QUFBSSxNQUFDLEVBQUNtSCxLQUFLLENBQUNDLElBQUksQ0FBQztPQUFDMVgsTUFBTSxFQUFDdWEsQ0FBQUE7TUFBRSxDQUFDLENBQUNoRyxHQUFHLENBQUMsVUFBUzNSLENBQUMsRUFBQ3VSLENBQUMsRUFBQztBQUFDLE9BQUEsSUFBSWhVLENBQUMsRUFBQ2tVLENBQUMsRUFBQ0gsQ0FBQyxDQUFBO0FBQUMsT0FBQSxJQUFHQyxDQUFDLEdBQUNvSyxDQUFDLEVBQUMsT0FBT2xLLENBQUMsR0FBQyxJQUFHc0osT0FBTyxDQUFDVixzQkFBc0IsRUFBRTlJLENBQUMsRUFBQzNOLE9BQU8sQ0FBQzRQLENBQUMsQ0FBQyxFQUFDbUksQ0FBQyxDQUFDLEVBQUNwZSxDQUFDLEdBQUMsSUFBR3dkLE9BQU8sQ0FBQ1QsNEJBQTRCLEVBQUUvSSxDQUFDLEVBQUNFLENBQUMsRUFBQ2tHLENBQUMsRUFBQytELENBQUMsQ0FBQyxFQUFDakssQ0FBQyxHQUFDLElBQUdzSixPQUFPLENBQUMxQixtQkFBbUIsRUFBRW5CLENBQUMsRUFBQ3pFLENBQUMsQ0FBQyxFQUFDb0UsQ0FBQyxLQUFHLENBQUNwRyxDQUFDLEdBQUNpRyxDQUFDLElBQUUsQ0FBQyxHQUFDakcsQ0FBQyxHQUFDa0csQ0FBQyxHQUFDLENBQUMsR0FBQ0EsQ0FBQyxJQUFFRCxDQUFDLEtBQUdqRyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEVBQUNsVSxDQUFDLEdBQUNnVSxDQUFDLENBQUMsRUFBQ0UsQ0FBQyxHQUFDQSxDQUFDLEtBQUdGLENBQUMsR0FBQ3RDLE9BQU8sQ0FBQ0QsU0FBUyxDQUFDUixNQUFNLEdBQUMsRUFBRSxFQUFDOEMsQ0FBQyxHQUFDc0csQ0FBQyxHQUFDM0ksT0FBTyxDQUFDRCxTQUFTLENBQUNMLE1BQU0sR0FBQyxFQUFFLEVBQUMyQyxDQUFDLEdBQUMsSUFBR3lKLE9BQU8sQ0FBQzNELGdCQUFnQixFQUFFbkksT0FBTyxDQUFDVixVQUFVLENBQUNaLFNBQVMsRUFBQzhELENBQUMsRUFBQ0gsQ0FBQyxDQUFDLEVBQUN3SixPQUFPLENBQUNELE9BQU8sQ0FBQ3BmLGFBQWEsQ0FBQyxJQUFJLEVBQUM7QUFBQ3FDLFNBQUFBLEdBQUcsRUFBQyxXQUFXLENBQUMwVyxNQUFNLENBQUNqRCxDQUFDLENBQUM7U0FBQ2dLLFlBQVksRUFBQy9KLENBQUM7U0FBQ2dLLFlBQVksRUFBQy9ELENBQUM7U0FBQzZELE9BQU8sRUFBQyxZQUFVO1dBQUMsT0FBTzNJLENBQUMsQ0FBQ3BWLENBQUMsQ0FBQyxDQUFBO1VBQUM7U0FBQzJkLFNBQVMsRUFBQzVKLENBQUFBO0FBQUMsUUFBQyxFQUFDc0csQ0FBQyxJQUFFQSxDQUFDLENBQUM7QUFBQ2dFLFNBQUFBLFFBQVEsRUFBQ2hZLE9BQU8sQ0FBQzZOLENBQUMsQ0FBQztTQUFDdkMsV0FBVyxFQUFDcUMsQ0FBQUE7UUFBRSxDQUFDLENBQUMsQ0FBQTtNQUFDLENBQUMsQ0FBQyxDQUFBO0lBQUMsQ0FBQTtBQUFDcFYsQ0FBQUEsT0FBQUEsQ0FBQUEsY0FBQUEsR0FBdUJrZixjQUFjLENBQUE7Ozs7Ozs7QUNBdHZDLENBQUEsSUFBSVQsZUFBZSxHQUFDLFVBQVM1YSxDQUFDLEVBQUM7S0FBQyxPQUFPQSxDQUFDLElBQUVBLENBQUMsQ0FBQzZJLFVBQVUsR0FBQzdJLENBQUMsR0FBQztPQUFDNmEsT0FBTyxFQUFDN2EsQ0FBQUE7TUFBRSxDQUFBO0lBQUM7R0FBQzhhLE9BQU8sSUFBRTdlLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLEVBQUMsWUFBWSxFQUFDO0tBQUNDLEtBQUssRUFBQyxDQUFDLENBQUE7QUFBQyxJQUFDLENBQUMsRUFBQ0QsT0FBd0IsQ0FBQSxlQUFBLEdBQUEsS0FBSyxDQUFDLEVBQUN5ZSxlQUFlLENBQUNoZSxPQUFRLENBQUEsT0FBTyxDQUFDLENBQUMsQ0FBQztHQUFDcVMsT0FBTyxHQUFDclMsS0FBbUI7R0FBQ21lLE9BQU8sR0FBQ25lLEtBQW1CO0FBQUNpZixHQUFBQSxlQUFlLEdBQUMsVUFBUzdiLENBQUMsRUFBQztBQUFDLEtBQUEsSUFBSXVSLENBQUMsR0FBQ3ZSLENBQUMsQ0FBQzhiLFNBQVM7T0FBQ3JJLENBQUMsR0FBQ3pULENBQUMsQ0FBQ3NiLE9BQU87T0FBQ3RiLENBQUMsR0FBQ0EsQ0FBQyxDQUFDK2IscUJBQXFCLENBQUE7QUFBQyxLQUFBLE9BQU0sVUFBVSxJQUFFLE9BQU8vYixDQUFDLEdBQUM4YSxPQUFPLENBQUNELE9BQU8sQ0FBQ3BmLGFBQWEsQ0FBQyxLQUFLLEVBQUM7QUFBQ3lmLE9BQUFBLFNBQVMsRUFBQ2pNLE9BQU8sQ0FBQ1YsVUFBVSxDQUFDWCxRQUFRO09BQUMwTixPQUFPLEVBQUM3SCxDQUFBQTtNQUFFLEVBQUN6VCxDQUFDLENBQUM7T0FBQzhiLFNBQVMsRUFBQ3ZLLENBQUFBO0FBQUMsTUFBQyxDQUFDLENBQUMsSUFBRXZSLENBQUMsR0FBQ3VSLENBQUMsR0FBQ3RDLE9BQU8sQ0FBQ0QsU0FBUyxDQUFDSixLQUFLLEdBQUMsRUFBRSxFQUFDMkMsQ0FBQyxHQUFDLElBQUd3SixPQUFPLENBQUMzRCxnQkFBZ0IsRUFBRW5JLE9BQU8sQ0FBQ1YsVUFBVSxDQUFDVixhQUFhLEVBQUM3TixDQUFDLENBQUMsRUFBQzhhLE9BQU8sQ0FBQ0QsT0FBTyxDQUFDcGYsYUFBYSxDQUFDLEtBQUssRUFBQztBQUFDeWYsT0FBQUEsU0FBUyxFQUFDak0sT0FBTyxDQUFDVixVQUFVLENBQUNYLFFBQUFBO01BQVMsRUFBQ2tOLE9BQU8sQ0FBQ0QsT0FBTyxDQUFDcGYsYUFBYSxDQUFDLEtBQUssRUFBQztBQUFDeWYsT0FBQUEsU0FBUyxFQUFDak0sT0FBTyxDQUFDVixVQUFVLENBQUNULGdCQUFBQTtNQUFpQixFQUFDZ04sT0FBTyxDQUFDRCxPQUFPLENBQUNwZixhQUFhLENBQUMsS0FBSyxFQUFDO09BQUM2ZixPQUFPLEVBQUM3SCxDQUFDO09BQUN5SCxTQUFTLEVBQUMzSixDQUFBQTtNQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUFDLENBQUE7QUFBQ3BWLENBQUFBLE9BQUFBLENBQUFBLGVBQUFBLEdBQXdCMGYsZUFBZSxDQUFBOzs7Ozs7O0FDQWwwQixDQUFBLElBQUlqQixlQUFlLEdBQUMsVUFBUzVhLENBQUMsRUFBQztLQUFDLE9BQU9BLENBQUMsSUFBRUEsQ0FBQyxDQUFDNkksVUFBVSxHQUFDN0ksQ0FBQyxHQUFDO09BQUM2YSxPQUFPLEVBQUM3YSxDQUFBQTtNQUFFLENBQUE7SUFBQztHQUFDOGEsT0FBTyxJQUFFN2UsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sRUFBQyxZQUFZLEVBQUM7S0FBQ0MsS0FBSyxFQUFDLENBQUMsQ0FBQTtBQUFDLElBQUMsQ0FBQyxFQUFDRCxPQUF1QixDQUFBLGNBQUEsR0FBQSxLQUFLLENBQUMsRUFBQ3llLGVBQWUsQ0FBQ2hlLE9BQVEsQ0FBQSxPQUFPLENBQUMsQ0FBQyxDQUFDO0dBQUNxUyxPQUFPLEdBQUNyUyxLQUFtQjtHQUFDbWUsT0FBTyxHQUFDbmUsS0FBbUI7QUFBQ29mLEdBQUFBLGNBQWMsR0FBQyxVQUFTaGMsQ0FBQyxFQUFDO0FBQUMsS0FBQSxJQUFJdVIsQ0FBQztPQUFDRSxDQUFDLEdBQUN6UixDQUFDLENBQUN1USxJQUFJO09BQUNrRCxDQUFDLEdBQUN6VCxDQUFDLENBQUNpYyxVQUFVO09BQUN6SyxDQUFDLEdBQUN4UixDQUFDLENBQUNzYixPQUFPO09BQUMzSSxDQUFDLEdBQUMzUyxDQUFDLENBQUNrYyxnQkFBZ0I7T0FBQ2xjLENBQUMsR0FBQ0EsQ0FBQyxDQUFDbWMsZ0JBQWdCLENBQUE7QUFBQyxLQUFBLE9BQU0sVUFBVSxJQUFFLE9BQU94SixDQUFDLEdBQUNtSSxPQUFPLENBQUNELE9BQU8sQ0FBQ3BmLGFBQWEsQ0FBQyxLQUFLLEVBQUM7QUFBQ3lmLE9BQUFBLFNBQVMsRUFBQ2pNLE9BQU8sQ0FBQ1YsVUFBVSxDQUFDTixXQUFXO09BQUNxTixPQUFPLEVBQUM5SixDQUFBQTtNQUFFLEVBQUNtQixDQUFDLENBQUM7T0FBQ3NKLFVBQVUsRUFBQ3hJLENBQUFBO0FBQUMsTUFBQyxDQUFDLENBQUMsR0FBQyxVQUFVLElBQUUsT0FBT3pULENBQUMsR0FBQzhhLE9BQU8sQ0FBQ0QsT0FBTyxDQUFDcGYsYUFBYSxDQUFDLEtBQUssRUFBQztBQUFDeWYsT0FBQUEsU0FBUyxFQUFDak0sT0FBTyxDQUFDVixVQUFVLENBQUNILFdBQVc7T0FBQ2tOLE9BQU8sRUFBQzlKLENBQUFBO01BQUUsRUFBQ3hSLENBQUMsQ0FBQztPQUFDaWMsVUFBVSxFQUFDeEksQ0FBQUE7TUFBRSxDQUFDLENBQUMsSUFBRXpULENBQUMsR0FBQyxDQUFDMlMsQ0FBQyxHQUFDLE1BQU0sS0FBR2xCLENBQUMsSUFBRSxHQUFHLEdBQUMsR0FBRyxFQUFDQSxDQUFDLEdBQUNrQixDQUFDLEdBQUMxRCxPQUFPLENBQUNWLFVBQVUsQ0FBQ04sV0FBVyxHQUFDZ0IsT0FBTyxDQUFDVixVQUFVLENBQUNILFdBQVcsRUFBQ21ELENBQUMsR0FBQ29CLENBQUMsR0FBQzFELE9BQU8sQ0FBQ1YsVUFBVSxDQUFDTCxtQkFBbUIsR0FBQ2UsT0FBTyxDQUFDVixVQUFVLENBQUNGLG1CQUFtQixFQUFDc0UsQ0FBQyxHQUFDQSxDQUFDLEdBQUMxRCxPQUFPLENBQUNWLFVBQVUsQ0FBQ0osZ0JBQWdCLEdBQUNjLE9BQU8sQ0FBQ1YsVUFBVSxDQUFDRCxnQkFBZ0IsRUFBQ21GLENBQUMsR0FBQ0EsQ0FBQyxHQUFDeEUsT0FBTyxDQUFDRCxTQUFTLENBQUNQLFFBQVEsR0FBQyxFQUFFLEVBQUNrRSxDQUFDLEdBQUMsSUFBR29JLE9BQU8sQ0FBQzNELGdCQUFnQixFQUFFekUsQ0FBQyxFQUFDYyxDQUFDLENBQUMsRUFBQ3FILE9BQU8sQ0FBQ0QsT0FBTyxDQUFDcGYsYUFBYSxDQUFDLEtBQUssRUFBQztPQUFDeWYsU0FBUyxFQUFDekosQ0FBQUE7TUFBRSxFQUFDcUosT0FBTyxDQUFDRCxPQUFPLENBQUNwZixhQUFhLENBQUMsS0FBSyxFQUFDO09BQUN5ZixTQUFTLEVBQUMzSixDQUFBQTtNQUFFLEVBQUN1SixPQUFPLENBQUNELE9BQU8sQ0FBQ3BmLGFBQWEsQ0FBQyxHQUFHLEVBQUM7T0FBQ3lmLFNBQVMsRUFBQ3ZJLENBQUM7QUFBQzJJLE9BQUFBLE9BQU8sRUFBQyxVQUFTdGIsQ0FBQyxFQUFDO1NBQUMsT0FBT3dSLENBQUMsQ0FBQ3hSLENBQUMsQ0FBQyxDQUFBO1FBQUE7TUFBRSxFQUFDOGEsT0FBTyxDQUFDRCxPQUFPLENBQUNwZixhQUFhLENBQUMsTUFBTSxFQUFDO09BQUMsV0FBVyxFQUFDdUUsQ0FBQUE7QUFBQyxNQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQUMsQ0FBQTtBQUFDN0QsQ0FBQUEsT0FBQUEsQ0FBQUEsY0FBQUEsR0FBdUI2ZixjQUFjLENBQUE7Ozs7O0FDQTNzQy9mLENBQUFBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLEVBQUMsWUFBWSxFQUFDO0dBQUNDLEtBQUssRUFBQyxDQUFDLENBQUE7RUFBRSxDQUFDLEVBQUNELE9BQXVCQSxDQUFBQSxjQUFBQSxHQUFBQSxPQUFBQSxDQUFBQSxlQUFBQSxHQUF3QkEseUJBQXVCQSxPQUFrQkEsQ0FBQUEsU0FBQUEsR0FBQUEsT0FBQUEsQ0FBQUEsU0FBQUEsR0FBa0IsS0FBSyxDQUFDLENBQUE7Q0FBQyxJQUFJaWdCLFdBQVcsR0FBQ3hmLFNBQXNCO0dBQUN5ZixXQUFXLElBQUVwZ0IsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sRUFBQyxXQUFXLEVBQUM7S0FBQzBFLFVBQVUsRUFBQyxDQUFDLENBQUM7S0FBQ21ELEdBQUcsRUFBQyxZQUFVO09BQUMsT0FBT29ZLFdBQVcsQ0FBQ3BCLFNBQVMsQ0FBQTtNQUFBO0lBQUUsQ0FBQyxFQUFDcGUsU0FBc0IsQ0FBQztHQUFDMGYsZ0JBQWdCLElBQUVyZ0IsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sRUFBQyxXQUFXLEVBQUM7S0FBQzBFLFVBQVUsRUFBQyxDQUFDLENBQUM7S0FBQ21ELEdBQUcsRUFBQyxZQUFVO09BQUMsT0FBT3FZLFdBQVcsQ0FBQ2xCLFNBQVMsQ0FBQTtNQUFBO0lBQUUsQ0FBQyxFQUFDdmUsY0FBMkIsQ0FBQztHQUFDMmYsaUJBQWlCLElBQUV0Z0IsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQztLQUFDMEUsVUFBVSxFQUFDLENBQUMsQ0FBQztLQUFDbUQsR0FBRyxFQUFDLFlBQVU7T0FBQyxPQUFPc1ksZ0JBQWdCLENBQUNqQixjQUFjLENBQUE7TUFBQTtJQUFFLENBQUMsRUFBQ3plLGVBQTRCLENBQUM7R0FBQzRmLGdCQUFnQixJQUFFdmdCLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLEVBQUMsaUJBQWlCLEVBQUM7S0FBQzBFLFVBQVUsRUFBQyxDQUFDLENBQUM7S0FBQ21ELEdBQUcsRUFBQyxZQUFVO09BQUMsT0FBT3VZLGlCQUFpQixDQUFDVixlQUFlLENBQUE7TUFBQTtBQUFDLElBQUMsQ0FBQyxFQUFDamYsY0FBMkIsQ0FBQyxDQUFBO0FBQUNYLENBQUFBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUM7R0FBQzBFLFVBQVUsRUFBQyxDQUFDLENBQUM7R0FBQ21ELEdBQUcsRUFBQyxZQUFVO0tBQUMsT0FBT3dZLGdCQUFnQixDQUFDUixjQUFjLENBQUE7SUFBQTtBQUFDLEVBQUMsQ0FBQyxDQUFBOzs7OztDQ0ExN0IsSUFBSVMsU0FBUyxHQUFDLFlBQVU7QUFBQyxLQUFBLElBQUk5SixDQUFDLEdBQUMsVUFBU3BCLENBQUMsRUFBQ3ZSLENBQUMsRUFBQztBQUFDLE9BQUEsT0FBTSxDQUFDMlMsQ0FBQyxHQUFDMVcsTUFBTSxDQUFDeWdCLGNBQWMsS0FBRztTQUFDQyxTQUFTLEVBQUMsRUFBQTtBQUFFLFFBQUMsWUFBVzlILEtBQUssR0FBQyxVQUFTdEQsQ0FBQyxFQUFDdlIsQ0FBQyxFQUFDO1NBQUN1UixDQUFDLENBQUNvTCxTQUFTLEdBQUMzYyxDQUFDLENBQUE7QUFBQSxRQUFDLEdBQUMsVUFBU3VSLENBQUMsRUFBQ3ZSLENBQUMsRUFBQztTQUFDLEtBQUksSUFBSXpDLENBQUMsSUFBSXlDLENBQUMsRUFBQy9ELE1BQU0sQ0FBQzhJLFNBQVMsQ0FBQ3VELGNBQWMsQ0FBQ0MsSUFBSSxDQUFDdkksQ0FBQyxFQUFDekMsQ0FBQyxDQUFDLEtBQUdnVSxDQUFDLENBQUNoVSxDQUFDLENBQUMsR0FBQ3lDLENBQUMsQ0FBQ3pDLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFBQSxRQUFDLENBQUMsRUFBRWdVLENBQUMsRUFBQ3ZSLENBQUMsQ0FBQyxDQUFBO01BQUMsQ0FBQTtBQUFDLEtBQUEsT0FBTyxVQUFTdVIsQ0FBQyxFQUFDdlIsQ0FBQyxFQUFDO09BQUMsSUFBRyxVQUFVLElBQUUsT0FBT0EsQ0FBQyxJQUFFLElBQUksS0FBR0EsQ0FBQyxFQUFDLE1BQU0sSUFBSXVKLFNBQVMsQ0FBQyxzQkFBc0IsR0FBQ3FULE1BQU0sQ0FBQzVjLENBQUMsQ0FBQyxHQUFDLCtCQUErQixDQUFDLENBQUE7T0FBQyxTQUFTekMsQ0FBQ0EsR0FBRTtTQUFDLElBQUksQ0FBQ3VILFdBQVcsR0FBQ3lNLENBQUMsQ0FBQTtRQUFBO0FBQUNvQixPQUFBQSxDQUFDLENBQUNwQixDQUFDLEVBQUN2UixDQUFDLENBQUMsRUFBQ3VSLENBQUMsQ0FBQ3hNLFNBQVMsR0FBQyxJQUFJLEtBQUcvRSxDQUFDLEdBQUMvRCxNQUFNLENBQUN5ZSxNQUFNLENBQUMxYSxDQUFDLENBQUMsSUFBRXpDLENBQUMsQ0FBQ3dILFNBQVMsR0FBQy9FLENBQUMsQ0FBQytFLFNBQVMsRUFBQyxJQUFJeEgsQ0FBQyxFQUFDLENBQUEsQ0FBQTtNQUFDLENBQUE7QUFBQSxJQUFDLEVBQUU7R0FBQzhULFFBQVEsR0FBQyxZQUFVO0tBQUMsT0FBTSxDQUFDQSxRQUFRLEdBQUNwVixNQUFNLENBQUMyTyxNQUFNLElBQUUsVUFBUzJHLENBQUMsRUFBQztPQUFDLEtBQUksSUFBSXZSLENBQUMsRUFBQ3pDLENBQUMsR0FBQyxDQUFDLEVBQUNvVixDQUFDLEdBQUMvVSxTQUFTLENBQUNSLE1BQU0sRUFBQ0csQ0FBQyxHQUFDb1YsQ0FBQyxFQUFDcFYsQ0FBQyxFQUFFLEVBQUMsS0FBSSxJQUFJK1QsQ0FBQyxJQUFJdFIsQ0FBQyxHQUFDcEMsU0FBUyxDQUFDTCxDQUFDLENBQUMsRUFBQ3RCLE1BQU0sQ0FBQzhJLFNBQVMsQ0FBQ3VELGNBQWMsQ0FBQ0MsSUFBSSxDQUFDdkksQ0FBQyxFQUFDc1IsQ0FBQyxDQUFDLEtBQUdDLENBQUMsQ0FBQ0QsQ0FBQyxDQUFDLEdBQUN0UixDQUFDLENBQUNzUixDQUFDLENBQUMsQ0FBQyxDQUFBO09BQUMsT0FBT0MsQ0FBQyxDQUFBO0FBQUEsTUFBQyxFQUFFNUwsS0FBSyxDQUFDLElBQUksRUFBQy9ILFNBQVMsQ0FBQyxDQUFBO0lBQUM7QUFBQzZjLEdBQUFBLGVBQWUsR0FBQ3hlLE1BQU0sQ0FBQ3llLE1BQU0sR0FBQyxVQUFTbkosQ0FBQyxFQUFDdlIsQ0FBQyxFQUFDekMsQ0FBQyxFQUFDb1YsQ0FBQyxFQUFDO0tBQUMsS0FBSyxDQUFDLEtBQUdBLENBQUMsS0FBR0EsQ0FBQyxHQUFDcFYsQ0FBQyxDQUFDLENBQUE7S0FBQyxJQUFJK1QsQ0FBQyxHQUFDclYsTUFBTSxDQUFDeUosd0JBQXdCLENBQUMxRixDQUFDLEVBQUN6QyxDQUFDLENBQUMsQ0FBQTtLQUFDK1QsQ0FBQyxLQUFHLEtBQUssSUFBR0EsQ0FBQyxHQUFDdFIsQ0FBQyxDQUFDNkksVUFBVSxHQUFDLENBQUN5SSxDQUFDLENBQUN2USxRQUFRLElBQUUsQ0FBQ3VRLENBQUMsQ0FBQ3hRLFlBQVksQ0FBQyxLQUFHd1EsQ0FBQyxHQUFDO09BQUN6USxVQUFVLEVBQUMsQ0FBQyxDQUFDO09BQUNtRCxHQUFHLEVBQUMsWUFBVTtTQUFDLE9BQU9oRSxDQUFDLENBQUN6QyxDQUFDLENBQUMsQ0FBQTtRQUFBO01BQUUsQ0FBQyxFQUFDdEIsTUFBTSxDQUFDQyxjQUFjLENBQUNxVixDQUFDLEVBQUNvQixDQUFDLEVBQUNyQixDQUFDLENBQUMsQ0FBQTtJQUFDLEdBQUMsVUFBU0MsQ0FBQyxFQUFDdlIsQ0FBQyxFQUFDekMsQ0FBQyxFQUFDb1YsQ0FBQyxFQUFDO0FBQUNwQixLQUFBQSxDQUFDLENBQUNvQixDQUFDLEdBQUMsS0FBSyxDQUFDLEtBQUdBLENBQUMsR0FBQ3BWLENBQUMsR0FBQ29WLENBQUMsQ0FBQyxHQUFDM1MsQ0FBQyxDQUFDekMsQ0FBQyxDQUFDLENBQUE7SUFBQztHQUFDc2Ysa0JBQWtCLEdBQUM1Z0IsTUFBTSxDQUFDeWUsTUFBTSxHQUFDLFVBQVNuSixDQUFDLEVBQUN2UixDQUFDLEVBQUM7QUFBQy9ELEtBQUFBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDcVYsQ0FBQyxFQUFDLFNBQVMsRUFBQztPQUFDMVEsVUFBVSxFQUFDLENBQUMsQ0FBQztPQUFDekUsS0FBSyxFQUFDNEQsQ0FBQUE7QUFBQyxNQUFDLENBQUMsQ0FBQTtBQUFBLElBQUMsR0FBQyxVQUFTdVIsQ0FBQyxFQUFDdlIsQ0FBQyxFQUFDO0tBQUN1UixDQUFDLENBQUNzSixPQUFPLEdBQUM3YSxDQUFDLENBQUE7SUFBQztBQUFDOGMsR0FBQUEsWUFBWSxHQUFDLFVBQVN2TCxDQUFDLEVBQUM7S0FBQyxJQUFHQSxDQUFDLElBQUVBLENBQUMsQ0FBQzFJLFVBQVUsRUFBQyxPQUFPMEksQ0FBQyxDQUFBO0tBQUMsSUFBSXZSLENBQUMsR0FBQyxFQUFFLENBQUE7QUFBQyxLQUFBLElBQUcsSUFBSSxJQUFFdVIsQ0FBQyxFQUFDLEtBQUksSUFBSWhVLENBQUMsSUFBSWdVLENBQUMsRUFBQyxTQUFTLEtBQUdoVSxDQUFDLElBQUV0QixNQUFNLENBQUM4SSxTQUFTLENBQUN1RCxjQUFjLENBQUNDLElBQUksQ0FBQ2dKLENBQUMsRUFBQ2hVLENBQUMsQ0FBQyxJQUFFa2QsZUFBZSxDQUFDemEsQ0FBQyxFQUFDdVIsQ0FBQyxFQUFDaFUsQ0FBQyxDQUFDLENBQUE7S0FBQyxPQUFPc2Ysa0JBQWtCLENBQUM3YyxDQUFDLEVBQUN1UixDQUFDLENBQUMsRUFBQ3ZSLENBQUMsQ0FBQTtJQUFDO0FBQUMyYSxHQUFBQSxZQUFZLEdBQUMsVUFBU3BKLENBQUMsRUFBQ3ZSLENBQUMsRUFBQztBQUFDLEtBQUEsS0FBSSxJQUFJekMsQ0FBQyxJQUFJZ1UsQ0FBQyxFQUFDLFNBQVMsS0FBR2hVLENBQUMsSUFBRXRCLE1BQU0sQ0FBQzhJLFNBQVMsQ0FBQ3VELGNBQWMsQ0FBQ0MsSUFBSSxDQUFDdkksQ0FBQyxFQUFDekMsQ0FBQyxDQUFDLElBQUVrZCxlQUFlLENBQUN6YSxDQUFDLEVBQUN1UixDQUFDLEVBQUNoVSxDQUFDLENBQUMsQ0FBQTtJQUFDO0dBQUN3ZixTQUFTLEdBQUMsVUFBU3hMLENBQUMsRUFBQ2tDLENBQUMsRUFBQ2pDLENBQUMsRUFBQ2lHLENBQUMsRUFBQztLQUFDLE9BQU8sS0FBSWpHLENBQUMsR0FBQ0EsQ0FBQyxJQUFFd0wsT0FBTyxFQUFFLFVBQVN6ZixDQUFDLEVBQUN5QyxDQUFDLEVBQUM7T0FBQyxTQUFTMlMsQ0FBQ0EsQ0FBQ3BCLENBQUMsRUFBQztTQUFDLElBQUc7V0FBQ0UsQ0FBQyxDQUFDZ0csQ0FBQyxDQUFDd0YsSUFBSSxDQUFDMUwsQ0FBQyxDQUFDLENBQUMsQ0FBQTtVQUFDLENBQUEsT0FBTUEsQ0FBQyxFQUFDO1dBQUN2UixDQUFDLENBQUN1UixDQUFDLENBQUMsQ0FBQTtVQUFBO1FBQUM7T0FBQyxTQUFTRCxDQUFDQSxDQUFDQyxDQUFDLEVBQUM7U0FBQyxJQUFHO1dBQUNFLENBQUMsQ0FBQ2dHLENBQUMsQ0FBQ3lGLEtBQUssQ0FBQzNMLENBQUMsQ0FBQyxDQUFDLENBQUE7VUFBQyxDQUFBLE9BQU1BLENBQUMsRUFBQztXQUFDdlIsQ0FBQyxDQUFDdVIsQ0FBQyxDQUFDLENBQUE7VUFBQTtRQUFDO09BQUMsU0FBU0UsQ0FBQ0EsQ0FBQ0YsQ0FBQyxFQUFDO1NBQUMsSUFBSXZSLENBQUMsQ0FBQTtTQUFDdVIsQ0FBQyxDQUFDNEwsSUFBSSxHQUFDNWYsQ0FBQyxDQUFDZ1UsQ0FBQyxDQUFDblYsS0FBSyxDQUFDLEdBQUMsQ0FBQyxDQUFDNEQsQ0FBQyxHQUFDdVIsQ0FBQyxDQUFDblYsS0FBSyxhQUFZb1YsQ0FBQyxHQUFDeFIsQ0FBQyxHQUFDLElBQUl3UixDQUFDLENBQUMsVUFBU0QsQ0FBQyxFQUFDO1dBQUNBLENBQUMsQ0FBQ3ZSLENBQUMsQ0FBQyxDQUFBO1VBQUMsQ0FBQyxFQUFFb2QsSUFBSSxDQUFDekssQ0FBQyxFQUFDckIsQ0FBQyxDQUFDLENBQUE7UUFBQTtBQUFDRyxPQUFBQSxDQUFDLENBQUMsQ0FBQ2dHLENBQUMsR0FBQ0EsQ0FBQyxDQUFDOVIsS0FBSyxDQUFDNEwsQ0FBQyxFQUFDa0MsQ0FBQyxJQUFFLEVBQUUsQ0FBQyxFQUFFd0osSUFBSSxFQUFFLENBQUMsQ0FBQTtBQUFBLE1BQUMsQ0FBQyxDQUFBO0lBQUM7QUFBQ0ksR0FBQUEsV0FBVyxHQUFDLFVBQVMxSyxDQUFDLEVBQUNyQixDQUFDLEVBQUM7QUFBQyxLQUFBLElBQUlHLENBQUM7T0FBQ2dDLENBQUM7T0FBQ2pDLENBQUM7QUFBQ2lHLE9BQUFBLENBQUMsR0FBQztTQUFDNkYsS0FBSyxFQUFDLENBQUM7U0FBQ0MsSUFBSSxFQUFDLFlBQVU7V0FBQyxJQUFHLENBQUMsR0FBQy9MLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxNQUFNQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7V0FBQyxPQUFPQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7VUFBQztTQUFDZ00sSUFBSSxFQUFDLEVBQUU7U0FBQ0MsR0FBRyxFQUFDLEVBQUE7UUFBRztBQUFDbE0sT0FBQUEsQ0FBQyxHQUFDO0FBQUMwTCxTQUFBQSxJQUFJLEVBQUNqZCxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQUNrZCxTQUFBQSxLQUFLLEVBQUNsZCxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQUMwZCxNQUFNLEVBQUMxZCxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQUUsQ0FBQTtBQUFDLEtBQUEsT0FBTSxVQUFVLElBQUUsT0FBTzRFLE1BQU0sS0FBRzJNLENBQUMsQ0FBQzNNLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDLEdBQUMsWUFBVTtPQUFDLE9BQU8sSUFBSSxDQUFBO01BQUMsQ0FBQyxFQUFDME0sQ0FBQyxDQUFBO0tBQUMsU0FBU3ZSLENBQUNBLENBQUN6QyxDQUFDLEVBQUM7T0FBQyxPQUFPLFVBQVNnVSxDQUFDLEVBQUM7U0FBQyxJQUFJdlIsQ0FBQyxHQUFDLENBQUN6QyxDQUFDLEVBQUNnVSxDQUFDLENBQUMsQ0FBQTtTQUFDLElBQUdFLENBQUMsRUFBQyxNQUFNLElBQUlsSSxTQUFTLENBQUMsaUNBQWlDLENBQUMsQ0FBQTtTQUFDLE9BQUtrTyxDQUFDLEdBQUUsSUFBRztBQUFDLFdBQUEsSUFBR2hHLENBQUMsR0FBQyxDQUFDLEVBQUNnQyxDQUFDLEtBQUdqQyxDQUFDLEdBQUMsQ0FBQyxHQUFDeFIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDeVQsQ0FBQyxDQUFDaUssTUFBTSxHQUFDMWQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDeVQsQ0FBQyxDQUFDeUosS0FBSyxLQUFHLENBQUMxTCxDQUFDLEdBQUNpQyxDQUFDLENBQUNpSyxNQUFNLEtBQUdsTSxDQUFDLENBQUNqSixJQUFJLENBQUNrTCxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBQ0EsQ0FBQyxDQUFDd0osSUFBSSxDQUFDLElBQUUsQ0FBQyxDQUFDekwsQ0FBQyxHQUFDQSxDQUFDLENBQUNqSixJQUFJLENBQUNrTCxDQUFDLEVBQUN6VCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRW1kLElBQUksRUFBQyxPQUFPM0wsQ0FBQyxDQUFBO1dBQUMsUUFBT2lDLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQ3pULENBQUMsR0FBQ3dSLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBQ3hSLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQ3dSLENBQUMsQ0FBQ3BWLEtBQUssQ0FBQyxHQUFDNEQsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUFFLEtBQUssQ0FBQyxDQUFBO0FBQUMsYUFBQSxLQUFLLENBQUM7ZUFBQ3dSLENBQUMsR0FBQ3hSLENBQUMsQ0FBQTtBQUFDLGVBQUEsTUFBQTtBQUFNLGFBQUEsS0FBSyxDQUFDO0FBQUMsZUFBQSxPQUFPeVgsQ0FBQyxDQUFDNkYsS0FBSyxFQUFFLEVBQUM7QUFBQ2xoQixpQkFBQUEsS0FBSyxFQUFDNEQsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFBQ21kLElBQUksRUFBQyxDQUFDLENBQUE7Z0JBQUUsQ0FBQTtBQUFDLGFBQUEsS0FBSyxDQUFDO0FBQUMxRixlQUFBQSxDQUFDLENBQUM2RixLQUFLLEVBQUUsRUFBQzdKLENBQUMsR0FBQ3pULENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQ0EsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFBQyxlQUFBLFNBQUE7QUFBUyxhQUFBLEtBQUssQ0FBQztBQUFDQSxlQUFBQSxDQUFDLEdBQUN5WCxDQUFDLENBQUNnRyxHQUFHLENBQUNFLEdBQUcsRUFBRSxFQUFDbEcsQ0FBQyxDQUFDK0YsSUFBSSxDQUFDRyxHQUFHLEVBQUUsQ0FBQTtBQUFDLGVBQUEsU0FBQTthQUFTO0FBQVEsZUFBQSxJQUFHLEVBQUVuTSxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUNBLENBQUMsR0FBQ2lHLENBQUMsQ0FBQytGLElBQUksRUFBRXBnQixNQUFNLElBQUVvVSxDQUFDLENBQUNBLENBQUMsQ0FBQ3BVLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFHLENBQUMsS0FBRzRDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBRSxDQUFDLEtBQUdBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDO2lCQUFDeVgsQ0FBQyxHQUFDLENBQUMsQ0FBQTtBQUFDLGlCQUFBLFNBQUE7Z0JBQVE7QUFBQyxlQUFBLElBQUcsQ0FBQyxLQUFHelgsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFHLENBQUN3UixDQUFDLElBQUV4UixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUN3UixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUV4UixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUN3UixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQ2lHLENBQUMsQ0FBQzZGLEtBQUssR0FBQ3RkLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUcsQ0FBQyxLQUFHQSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUV5WCxDQUFDLENBQUM2RixLQUFLLEdBQUM5TCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUNpRyxDQUFDLENBQUM2RixLQUFLLEdBQUM5TCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUNBLENBQUMsR0FBQ3hSLENBQUMsQ0FBQyxLQUFJO0FBQUMsaUJBQUEsSUFBRyxFQUFFd1IsQ0FBQyxJQUFFaUcsQ0FBQyxDQUFDNkYsS0FBSyxHQUFDOUwsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUM7QUFBQ0EsbUJBQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBRWlHLENBQUMsQ0FBQ2dHLEdBQUcsQ0FBQ0UsR0FBRyxFQUFFLEVBQUNsRyxDQUFDLENBQUMrRixJQUFJLENBQUNHLEdBQUcsRUFBRSxDQUFBO0FBQUMsbUJBQUEsU0FBQTtrQkFBUTtBQUFDbEcsaUJBQUFBLENBQUMsQ0FBQzZGLEtBQUssR0FBQzlMLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQ2lHLENBQUMsQ0FBQ2dHLEdBQUcsQ0FBQ2pkLElBQUksQ0FBQ1IsQ0FBQyxDQUFDLENBQUE7Z0JBQUE7WUFBQztXQUFDQSxDQUFDLEdBQUNzUixDQUFDLENBQUMvSSxJQUFJLENBQUNvSyxDQUFDLEVBQUM4RSxDQUFDLENBQUMsQ0FBQTtVQUFDLENBQUEsT0FBTWxHLENBQUMsRUFBQztXQUFDdlIsQ0FBQyxHQUFDLENBQUMsQ0FBQyxFQUFDdVIsQ0FBQyxDQUFDLEVBQUNrQyxDQUFDLEdBQUMsQ0FBQyxDQUFBO0FBQUEsVUFBQyxTQUFPO1dBQUNoQyxDQUFDLEdBQUNELENBQUMsR0FBQyxDQUFDLENBQUE7VUFBQTtTQUFDLElBQUcsQ0FBQyxHQUFDeFIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLE1BQU1BLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUFDLE9BQU07QUFBQzVELFdBQUFBLEtBQUssRUFBQzRELENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQ0EsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLEtBQUssQ0FBQztXQUFDbWQsSUFBSSxFQUFDLENBQUMsQ0FBQTtVQUFFLENBQUE7UUFBQyxDQUFBO01BQUE7SUFBRTtBQUFDdkMsR0FBQUEsZUFBZSxHQUFDLFVBQVNySixDQUFDLEVBQUM7S0FBQyxPQUFPQSxDQUFDLElBQUVBLENBQUMsQ0FBQzFJLFVBQVUsR0FBQzBJLENBQUMsR0FBQztPQUFDc0osT0FBTyxFQUFDdEosQ0FBQUE7TUFBRSxDQUFBO0lBQUM7R0FBQ3VKLE9BQU8sSUFBRTdlLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLEVBQUMsWUFBWSxFQUFDO0tBQUNDLEtBQUssRUFBQyxDQUFDLENBQUE7SUFBRSxDQUFDLEVBQUN3ZSxlQUFlLENBQUNoZSxRQUFRLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFBQ2doQixHQUFBQSxlQUFlLEdBQUNoRCxlQUFlLENBQUNoZSxHQUF3QixDQUFDO0dBQUNpaEIsY0FBYyxHQUFDamhCLFlBQXlCO0FBQUNraEIsR0FBQUEsS0FBSyxHQUFDaEIsWUFBWSxDQUFDbGdCLEtBQWtCLENBQUM7QUFBQ3dMLEdBQUFBLEtBQUssR0FBQzBVLFlBQVksQ0FBQ2xnQixLQUFrQixDQUFDO0dBQUNxUyxPQUFPLEdBQUNyUyxLQUFrQjtHQUFDbWhCLGFBQWEsSUFBRXBELFlBQVksQ0FBQy9kLEtBQWtCLEVBQUNULE9BQU8sQ0FBQyxFQUFDLFVBQVM2RCxDQUFDLEVBQUM7S0FBQyxTQUFTdVIsQ0FBQ0EsQ0FBQ0EsQ0FBQyxFQUFDO09BQUMsSUFBSUUsQ0FBQyxHQUFDelIsQ0FBQyxDQUFDdUksSUFBSSxDQUFDLElBQUksRUFBQ2dKLENBQUMsQ0FBQyxJQUFFLElBQUksQ0FBQTtBQUFDLE9BQUEsT0FBT0UsQ0FBQyxDQUFDdU0sYUFBYSxHQUFDLElBQUksRUFBQ3ZNLENBQUMsQ0FBQ3dNLHFCQUFxQixHQUFDLFVBQVMxTSxDQUFDLEVBQUM7U0FBQyxRQUFPQSxDQUFDLENBQUMyTSxJQUFJO0FBQUUsV0FBQSxLQUFJLE9BQU87YUFBQyxPQUFPek0sQ0FBQyxDQUFDbkwsS0FBSyxDQUFDa0osUUFBUSxJQUFFaUMsQ0FBQyxDQUFDME0sc0JBQXNCLEVBQUUsQ0FBQTtBQUFDLFdBQUEsS0FBSSxXQUFXO0FBQUMsYUFBQSxPQUFPMU0sQ0FBQyxDQUFDMk0sU0FBUyxDQUFDN00sQ0FBQyxDQUFDLENBQUE7QUFBQyxXQUFBLEtBQUksWUFBWTtBQUFDLGFBQUEsT0FBT0UsQ0FBQyxDQUFDNE0sU0FBUyxDQUFDOU0sQ0FBQyxDQUFDLENBQUE7VUFBQTtBQUFDLFFBQUMsRUFBQ0UsQ0FBQyxDQUFDNk0scUJBQXFCLEdBQUMsVUFBU2hOLENBQUMsRUFBQztTQUFDLE9BQU95TCxTQUFTLENBQUN0TCxDQUFDLEVBQUMsS0FBSyxDQUFDLEVBQUMsS0FBSyxDQUFDLEVBQUMsWUFBVTtBQUFDLFdBQUEsSUFBSXpSLENBQUMsRUFBQ3pDLENBQUMsRUFBQ29WLENBQUMsQ0FBQTtBQUFDLFdBQUEsT0FBTzBLLFdBQVcsQ0FBQyxJQUFJLEVBQUMsVUFBUzlMLENBQUMsRUFBQzthQUFDLFFBQU9BLENBQUMsQ0FBQytMLEtBQUs7QUFBRSxlQUFBLEtBQUssQ0FBQztBQUFDLGlCQUFBLE9BQU0sQ0FBQy9mLENBQUMsR0FBQyxJQUFJLENBQUNpRixLQUFLLEVBQUNtUSxDQUFDLEdBQUNwVixDQUFDLENBQUMyUixXQUFXLEVBQUNsUCxDQUFDLEdBQUN6QyxDQUFDLENBQUMyVSxVQUFVLEVBQUMzVSxDQUFDLEdBQUNBLENBQUMsQ0FBQ29aLDBCQUEwQixFQUFDdk8sS0FBSyxDQUFDZ0ssMkJBQTJCLENBQUNPLENBQUMsRUFBQzNTLENBQUMsQ0FBQyxLQUFHMlMsQ0FBQyxHQUFDdkssS0FBSyxDQUFDK0osMkJBQTJCLENBQUNRLENBQUMsRUFBQzNTLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ3VlLDBCQUEwQixDQUFDNUwsQ0FBQyxDQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQTtBQUFDLGVBQUEsS0FBSyxDQUFDO2lCQUFDLE9BQU9wQixDQUFDLENBQUNnTSxJQUFJLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQTtBQUFDLGVBQUEsS0FBSyxDQUFDO2lCQUFDLE9BQU9oZ0IsQ0FBQyxHQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ2loQixRQUFRLENBQUM7bUJBQUMvSCxxQkFBcUIsRUFBQyxJQUFJO21CQUFDQyx3QkFBd0IsRUFBQyxJQUFJO21CQUFDQywwQkFBMEIsRUFBQyxDQUFDLENBQUE7a0JBQUUsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUE7QUFBQyxlQUFBLEtBQUssQ0FBQztpQkFBQ3BGLENBQUMsQ0FBQ2dNLElBQUksRUFBRSxFQUFDaE0sQ0FBQyxDQUFDK0wsS0FBSyxHQUFDLENBQUMsQ0FBQTtBQUFDLGVBQUEsS0FBSyxDQUFDO2lCQUFDLE9BQU8sSUFBSSxDQUFDbUIsbUJBQW1CLENBQUNuTixDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO2NBQUE7QUFBQyxZQUFDLENBQUMsQ0FBQTtBQUFBLFVBQUMsQ0FBQyxDQUFBO0FBQUEsUUFBQyxFQUFDRyxDQUFDLENBQUNpTixpQkFBaUIsR0FBQyxZQUFVO1NBQUMsSUFBSW5OLENBQUMsR0FBQ0UsQ0FBQyxDQUFDbkwsS0FBSyxDQUFDc0osZ0JBQWdCLENBQUE7U0FBQ3hILEtBQUssQ0FBQ29TLDJCQUEyQixDQUFDakosQ0FBQyxDQUFDLElBQUVFLENBQUMsQ0FBQ2pQLEtBQUssQ0FBQzhWLGFBQWEsS0FBRzdHLENBQUMsQ0FBQ2tOLFNBQVMsR0FBQyxDQUFDLENBQUMsRUFBQ2xOLENBQUMsQ0FBQ21OLFlBQVksRUFBRSxDQUFDLENBQUE7QUFBQSxRQUFDLEVBQUNuTixDQUFDLENBQUNvTixpQkFBaUIsR0FBQyxZQUFVO0FBQUNwTixTQUFBQSxDQUFDLENBQUNqUCxLQUFLLENBQUM4VixhQUFhLEtBQUc3RyxDQUFDLENBQUNrTixTQUFTLEdBQUMsQ0FBQyxDQUFDLEVBQUNsTixDQUFDLENBQUNxTixXQUFXLEVBQUUsQ0FBQyxDQUFBO0FBQUEsUUFBQyxFQUFDck4sQ0FBQyxDQUFDbU4sWUFBWSxHQUFDLFlBQVU7U0FBQ25OLENBQUMsQ0FBQ3NOLHFCQUFxQixFQUFFLENBQUE7QUFBQSxRQUFDLEVBQUN0TixDQUFDLENBQUMwTSxzQkFBc0IsR0FBQyxZQUFVO1NBQUMsT0FBT3BCLFNBQVMsQ0FBQ3RMLENBQUMsRUFBQyxLQUFLLENBQUMsRUFBQyxLQUFLLENBQUMsRUFBQyxZQUFVO1dBQUMsSUFBSXpSLENBQUMsQ0FBQTtBQUFDLFdBQUEsT0FBT3FkLFdBQVcsQ0FBQyxJQUFJLEVBQUMsVUFBUzlMLENBQUMsRUFBQzthQUFDLFFBQU9BLENBQUMsQ0FBQytMLEtBQUs7QUFBRSxlQUFBLEtBQUssQ0FBQztpQkFBQyxPQUFPdGQsQ0FBQyxHQUFDLElBQUksQ0FBQ3dDLEtBQUssQ0FBQzhWLGFBQWEsRUFBQyxJQUFJLENBQUMwRyxhQUFhLEdBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDUixRQUFRLENBQUM7bUJBQUNsRyxhQUFhLEVBQUMsQ0FBQ3RZLENBQUM7bUJBQUN1WSwwQkFBMEIsRUFBQyxDQUFDLENBQUE7a0JBQUUsQ0FBQyxDQUFDLENBQUE7QUFBQyxlQUFBLEtBQUssQ0FBQztpQkFBQyxPQUFPaEgsQ0FBQyxDQUFDZ00sSUFBSSxFQUFFLEVBQUN2ZCxDQUFDLEdBQUMsSUFBSSxDQUFDNGUsWUFBWSxFQUFFLEdBQUMsSUFBSSxDQUFDRSxXQUFXLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO2NBQUE7QUFBQyxZQUFDLENBQUMsQ0FBQTtBQUFBLFVBQUMsQ0FBQyxDQUFBO0FBQUEsUUFBQyxFQUFDck4sQ0FBQyxDQUFDd04sb0JBQW9CLEdBQUMsVUFBUzFOLENBQUMsRUFBQztBQUFDLFNBQUEsT0FBT0UsQ0FBQyxDQUFDeU4sV0FBVyxHQUFDM04sQ0FBQyxDQUFBO0FBQUEsUUFBQyxFQUFDRSxDQUFDLENBQUMwTixxQkFBcUIsR0FBQyxVQUFTNU4sQ0FBQyxFQUFDO0FBQUMsU0FBQSxPQUFPRSxDQUFDLENBQUMyTixjQUFjLEdBQUM3TixDQUFDLENBQUE7UUFBQyxFQUFDRSxDQUFDLENBQUM0TixnQkFBZ0IsR0FBQyxVQUFTOU4sQ0FBQyxFQUFDdlIsQ0FBQyxFQUFDO1NBQUMsSUFBSXpDLENBQUMsR0FBQzZLLEtBQUssQ0FBQ29PLHdCQUF3QixDQUFDeFcsQ0FBQyxFQUFDeVIsQ0FBQyxDQUFDalAsS0FBSyxDQUFDO1dBQUNtUSxDQUFDLEdBQUN2SyxLQUFLLENBQUN3USx5QkFBeUIsQ0FBQzVZLENBQUMsRUFBQ3lSLENBQUMsQ0FBQ2pQLEtBQUssQ0FBQyxDQUFBO1NBQUMsT0FBT3NZLE9BQU8sQ0FBQ0QsT0FBTyxDQUFDcGYsYUFBYSxDQUFDcWlCLEtBQUssQ0FBQzNDLFNBQVMsRUFBQztXQUFDQyxNQUFNLEVBQUM3ZCxDQUFDO1dBQUMyZCxTQUFTLEVBQUN2SSxDQUFDO0FBQUM3VSxXQUFBQSxHQUFHLEVBQUMsYUFBYSxDQUFDMFcsTUFBTSxDQUFDeFUsQ0FBQyxDQUFDO1dBQUMwWixJQUFJLEVBQUNuSSxDQUFBQTtBQUFDLFVBQUMsQ0FBQyxDQUFBO0FBQUEsUUFBQyxFQUFDRSxDQUFDLENBQUM2TixnQkFBZ0IsR0FBQyxZQUFVO0FBQUMsU0FBQSxJQUFJL04sQ0FBQyxHQUFDRSxDQUFDLENBQUNuTCxLQUFLLENBQUMyVSxlQUFlO1dBQUNqYixDQUFDLEdBQUN5UixDQUFDLENBQUNqUCxLQUFLO1dBQUNqRixDQUFDLEdBQUN5QyxDQUFDLENBQUNrUCxXQUFXO1dBQUNsUCxDQUFDLEdBQUNBLENBQUMsQ0FBQ2tTLFVBQVUsQ0FBQTtTQUFDLE9BQU80SSxPQUFPLENBQUNELE9BQU8sQ0FBQ3BmLGFBQWEsQ0FBQ3FpQixLQUFLLENBQUM5QyxTQUFTLEVBQUM7V0FBQzlJLFVBQVUsRUFBQ2xTLENBQUM7V0FBQ2tQLFdBQVcsRUFBQzNSLENBQUM7V0FBQzBkLGVBQWUsRUFBQzFKLENBQUFBO0FBQUMsVUFBQyxDQUFDLENBQUE7UUFBQyxFQUFDRSxDQUFDLENBQUNqUCxLQUFLLEdBQUM0RixLQUFLLENBQUNvUCxxQkFBcUIsQ0FBQ2pHLENBQUMsRUFBQyxJQUFJLENBQUMsRUFBQ0UsQ0FBQyxDQUFDa04sU0FBUyxHQUFDLENBQUMsQ0FBQyxFQUFDbE4sQ0FBQyxDQUFDOE4sbUJBQW1CLEdBQUMsQ0FBQyxDQUFDLEVBQUM5TixDQUFDLENBQUMrTix5QkFBeUIsR0FBQyxDQUFDLENBQUMsRUFBQy9OLENBQUMsQ0FBQ2dPLHFCQUFxQixHQUFDLENBQUMsQ0FBQyxFQUFDaE8sQ0FBQyxDQUFDdU4sYUFBYSxHQUFDLENBQUMsQ0FBQyxFQUFDdk4sQ0FBQyxDQUFDeU4sV0FBVyxHQUFDLElBQUksRUFBQ3pOLENBQUMsQ0FBQ2lPLHVCQUF1QixHQUFDLEVBQUUsRUFBQ2pPLENBQUMsQ0FBQzJOLGNBQWMsR0FBQyxJQUFJLEVBQUMzTixDQUFDLENBQUNrTyxzQkFBc0IsR0FBQyxLQUFLLENBQUMsRUFBQ2xPLENBQUMsQ0FBQ21PLE9BQU8sR0FBQ25PLENBQUMsQ0FBQ21PLE9BQU8sQ0FBQzdWLElBQUksQ0FBQzBILENBQUMsQ0FBQyxFQUFDQSxDQUFDLENBQUMyTSxTQUFTLEdBQUMzTSxDQUFDLENBQUMyTSxTQUFTLENBQUNyVSxJQUFJLENBQUMwSCxDQUFDLENBQUMsRUFBQ0EsQ0FBQyxDQUFDNE0sU0FBUyxHQUFDNU0sQ0FBQyxDQUFDNE0sU0FBUyxDQUFDdFUsSUFBSSxDQUFDMEgsQ0FBQyxDQUFDLEVBQUNBLENBQUMsQ0FBQ29PLGdCQUFnQixHQUFDcE8sQ0FBQyxDQUFDb08sZ0JBQWdCLENBQUM5VixJQUFJLENBQUMwSCxDQUFDLENBQUMsRUFBQ0EsQ0FBQyxDQUFDcU8sZUFBZSxHQUFDck8sQ0FBQyxDQUFDcU8sZUFBZSxDQUFDL1YsSUFBSSxDQUFDMEgsQ0FBQyxDQUFDLEVBQUNBLENBQUMsQ0FBQ3NPLGVBQWUsR0FBQ3RPLENBQUMsQ0FBQ3NPLGVBQWUsQ0FBQ2hXLElBQUksQ0FBQzBILENBQUMsQ0FBQyxFQUFDQSxDQUFDLENBQUN1TyxhQUFhLEdBQUN2TyxDQUFDLENBQUN1TyxhQUFhLENBQUNqVyxJQUFJLENBQUMwSCxDQUFDLENBQUMsRUFBQ0YsQ0FBQyxHQUFDbkosS0FBSyxDQUFDNFEsUUFBUSxDQUFDdkgsQ0FBQyxDQUFDdU8sYUFBYSxFQUFDLEdBQUcsQ0FBQyxFQUFDdk8sQ0FBQyxDQUFDd08sc0JBQXNCLEdBQUMxTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUNFLENBQUMsQ0FBQ3lPLHNCQUFzQixHQUFDM08sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDRSxDQUFDLENBQUE7TUFBQTtBQUFDLEtBQUEsT0FBT2dMLFNBQVMsQ0FBQ2xMLENBQUMsRUFBQ3ZSLENBQUMsQ0FBQyxFQUFDdVIsQ0FBQyxDQUFDeE0sU0FBUyxDQUFDb2IsaUJBQWlCLEdBQUMsWUFBVTtPQUFDLE9BQU9wRCxTQUFTLENBQUMsSUFBSSxFQUFDLEtBQUssQ0FBQyxFQUFDLEtBQUssQ0FBQyxFQUFDLFlBQVU7QUFBQyxTQUFBLE9BQU9NLFdBQVcsQ0FBQyxJQUFJLEVBQUMsVUFBUzlMLENBQUMsRUFBQztXQUFDLFFBQU9BLENBQUMsQ0FBQytMLEtBQUs7QUFBRSxhQUFBLEtBQUssQ0FBQztlQUFDLE9BQU0sQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDOEMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFBO0FBQUMsYUFBQSxLQUFLLENBQUM7QUFBQyxlQUFBLE9BQU83TyxDQUFDLENBQUNnTSxJQUFJLEVBQUUsRUFBQyxJQUFJLENBQUM4QyxrQkFBa0IsRUFBRSxFQUFDLElBQUksQ0FBQ0MsbUJBQW1CLEVBQUUsRUFBQyxJQUFJLENBQUNoYSxLQUFLLENBQUNrSixRQUFRLElBQUUsSUFBSSxDQUFDc1AsV0FBVyxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUFBO0FBQUMsVUFBQyxDQUFDLENBQUE7QUFBQSxRQUFDLENBQUMsQ0FBQTtNQUFDLEVBQUN2TixDQUFDLENBQUN4TSxTQUFTLENBQUN3YixrQkFBa0IsR0FBQyxVQUFTaFAsQ0FBQyxFQUFDdlIsQ0FBQyxFQUFDO0FBQUMsT0FBQSxJQUFJekMsQ0FBQyxHQUFDLElBQUksQ0FBQytJLEtBQUs7U0FBQ3FNLENBQUMsR0FBQ3BWLENBQUMsQ0FBQzJSLFdBQVc7U0FBQ29DLENBQUMsR0FBQy9ULENBQUMsQ0FBQzRSLGlCQUFpQjtTQUFDc0MsQ0FBQyxHQUFDbFUsQ0FBQyxDQUFDZ1MsU0FBUztTQUFDa0UsQ0FBQyxHQUFDbFcsQ0FBQyxDQUFDc1MsUUFBUTtTQUFDMkIsQ0FBQyxHQUFDalUsQ0FBQyxDQUFDMlMsUUFBUTtTQUFDdUgsQ0FBQyxHQUFDbGEsQ0FBQyxDQUFDNlMsS0FBSztTQUFDd0gsQ0FBQyxHQUFDcmEsQ0FBQyxDQUFDaVQsV0FBVztTQUFDZ0QsQ0FBQyxHQUFDalcsQ0FBQyxDQUFDa1QsWUFBWTtTQUFDa0gsQ0FBQyxHQUFDcGEsQ0FBQyxDQUFDbVQsVUFBVTtTQUFDOFAsQ0FBQyxHQUFDampCLENBQUMsQ0FBQ3FULGlCQUFpQjtTQUFDcUgsQ0FBQyxHQUFDMWEsQ0FBQyxDQUFDK1MsYUFBYTtTQUFDb0wsQ0FBQyxHQUFDbmUsQ0FBQyxDQUFDb1QsVUFBVTtTQUFDK0csQ0FBQyxHQUFDbmEsQ0FBQyxDQUFDdVQsYUFBYTtTQUFDdlQsQ0FBQyxHQUFDQSxDQUFDLENBQUN3VCxzQkFBc0IsQ0FBQTtPQUFDMEMsQ0FBQyxJQUFFbEMsQ0FBQyxDQUFDMUIsUUFBUSxLQUFHNEQsQ0FBQyxJQUFFQSxDQUFDLEdBQUN6VCxDQUFDLENBQUNrUCxXQUFXLEVBQUNsUCxDQUFDLEdBQUNxUixRQUFRLENBQUNBLFFBQVEsQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDL0ssS0FBSyxDQUFDLEVBQUM7U0FBQzRJLFdBQVcsRUFBQ3VFLENBQUFBO0FBQUMsUUFBQyxDQUFDLEVBQUMsSUFBSSxDQUFDZ04sZ0JBQWdCLENBQUN6Z0IsQ0FBQyxDQUFDLElBQUV1UixDQUFDLENBQUNoQyxTQUFTLEtBQUdrQyxDQUFDLElBQUVGLENBQUMsQ0FBQ3JCLFFBQVEsS0FBR3NCLENBQUMsSUFBRUQsQ0FBQyxDQUFDbkIsS0FBSyxLQUFHcUgsQ0FBQyxJQUFFbEcsQ0FBQyxDQUFDZixXQUFXLEtBQUdvSCxDQUFDLElBQUVyRyxDQUFDLENBQUNkLFlBQVksS0FBRytDLENBQUMsSUFBRWpDLENBQUMsQ0FBQ2IsVUFBVSxLQUFHaUgsQ0FBQyxJQUFFcEcsQ0FBQyxDQUFDWCxpQkFBaUIsS0FBRzRQLENBQUMsR0FBQyxJQUFJLENBQUNDLGdCQUFnQixFQUFFLElBQUVsUCxDQUFDLENBQUNwQyxpQkFBaUIsS0FBR21DLENBQUMsSUFBRSxJQUFJLENBQUNrTixRQUFRLENBQUM7U0FBQ3JQLGlCQUFpQixFQUFDbUMsQ0FBQUE7QUFBQyxRQUFDLENBQUMsRUFBQ0MsQ0FBQyxDQUFDckMsV0FBVyxLQUFHeUQsQ0FBQyxJQUFFLElBQUksQ0FBQ2lOLE9BQU8sQ0FBQ2pOLENBQUMsRUFBQzFELE9BQU8sQ0FBQ3pDLFNBQVMsQ0FBQ0QsTUFBTSxDQUFDLENBQUMsRUFBQ2dGLENBQUMsQ0FBQ1osVUFBVSxLQUFHK0ssQ0FBQyxJQUFFbkssQ0FBQyxDQUFDakIsYUFBYSxLQUFHMkgsQ0FBQyxJQUFFMUcsQ0FBQyxDQUFDVCxhQUFhLEtBQUc0RyxDQUFDLElBQUVuRyxDQUFDLENBQUNSLHNCQUFzQixLQUFHeFQsQ0FBQyxJQUFFLElBQUksQ0FBQ21qQixpQkFBaUIsRUFBRSxFQUFDLElBQUksQ0FBQ3BhLEtBQUssQ0FBQytKLGtCQUFrQixLQUFHa0IsQ0FBQyxDQUFDbEIsa0JBQWtCLElBQUUsSUFBSSxDQUFDc1EscUJBQXFCLEVBQUUsQ0FBQTtBQUFBLE1BQUMsRUFBQ3BQLENBQUMsQ0FBQ3hNLFNBQVMsQ0FBQzZiLG9CQUFvQixHQUFDLFlBQVU7QUFBQyxPQUFBLElBQUksQ0FBQ1Ysc0JBQXNCLEVBQUUsRUFBQyxJQUFJLENBQUNXLHdCQUF3QixFQUFFLEVBQUMsSUFBSSxDQUFDQyxxQkFBcUIsRUFBRSxDQUFBO01BQUMsRUFBQzdrQixNQUFNLENBQUNDLGNBQWMsQ0FBQ3FWLENBQUMsQ0FBQ3hNLFNBQVMsRUFBQyxhQUFhLEVBQUM7T0FBQ2YsR0FBRyxFQUFDLFlBQVU7QUFBQyxTQUFBLElBQUl1TixDQUFDLEdBQUMsSUFBSSxDQUFDL08sS0FBSztXQUFDeEMsQ0FBQyxHQUFDdVIsQ0FBQyxDQUFDcUIsWUFBWTtXQUFDckIsQ0FBQyxHQUFDQSxDQUFDLENBQUNyQyxXQUFXO1dBQUMzUixDQUFDLEdBQUM2SyxLQUFLLENBQUN1UixnQkFBZ0IsQ0FBQyxJQUFJLENBQUNuWCxLQUFLLENBQUM7V0FBQ21RLENBQUMsR0FBQ3BWLENBQUMsQ0FBQ3NjLG1CQUFtQjtXQUFDdGMsQ0FBQyxHQUFDQSxDQUFDLENBQUNxYyxtQkFBbUIsQ0FBQTtTQUFDLE9BQU07V0FBQ0YsSUFBSSxFQUFDbkksQ0FBQztXQUFDd1AsS0FBSyxFQUFDM1ksS0FBSyxDQUFDaVIsbUJBQW1CLENBQUMxRyxDQUFDLEVBQUMsSUFBSSxDQUFDblEsS0FBSyxDQUFDO1dBQUNvUSxZQUFZLEVBQUM1UyxDQUFDO1dBQUM2WixtQkFBbUIsRUFBQ2xILENBQUM7V0FBQ2lILG1CQUFtQixFQUFDcmMsQ0FBQztBQUFDN0IsV0FBQUEsSUFBSSxFQUFDdVQsT0FBTyxDQUFDekMsU0FBUyxDQUFDSixNQUFBQTtVQUFPLENBQUE7UUFBQztPQUFDdkwsVUFBVSxFQUFDLENBQUMsQ0FBQztPQUFDQyxZQUFZLEVBQUMsQ0FBQyxDQUFBO01BQUUsQ0FBQyxFQUFDN0UsTUFBTSxDQUFDQyxjQUFjLENBQUNxVixDQUFDLENBQUN4TSxTQUFTLEVBQUMsMkJBQTJCLEVBQUM7T0FBQ2YsR0FBRyxFQUFDLFlBQVU7QUFBQyxTQUFBLElBQUl1TixDQUFDLEdBQUMsSUFBSSxDQUFDL08sS0FBSyxDQUFDb1EsWUFBWTtXQUFDNVMsQ0FBQyxHQUFDLElBQUksQ0FBQ3NHLEtBQUs7V0FBQy9JLENBQUMsR0FBQ3lDLENBQUMsQ0FBQ3FQLGFBQWE7V0FBQ3NELENBQUMsR0FBQzNTLENBQUMsQ0FBQ3dRLFdBQVc7V0FBQ2MsQ0FBQyxHQUFDdFIsQ0FBQyxDQUFDeVEsWUFBWTtXQUFDelEsQ0FBQyxHQUFDQSxDQUFDLENBQUN1UCxTQUFTLENBQUE7U0FBQyxPQUFPLENBQUMsS0FBR2dDLENBQUMsSUFBRWhVLENBQUMsS0FBRzBSLE9BQU8sQ0FBQ3RDLGFBQWEsQ0FBQ0YsT0FBTyxJQUFFLEVBQUVrRyxDQUFDLElBQUVyQixDQUFDLElBQUV0UixDQUFDLENBQUMsQ0FBQTtRQUFDO09BQUNhLFVBQVUsRUFBQyxDQUFDLENBQUM7T0FBQ0MsWUFBWSxFQUFDLENBQUMsQ0FBQTtNQUFFLENBQUMsRUFBQzdFLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDcVYsQ0FBQyxDQUFDeE0sU0FBUyxFQUFDLG1CQUFtQixFQUFDO09BQUNmLEdBQUcsRUFBQyxZQUFVO0FBQUMsU0FBQSxPQUFPLEtBQUssQ0FBQyxLQUFHLElBQUksQ0FBQzJiLHNCQUFzQixHQUFDLElBQUksQ0FBQ0Esc0JBQXNCLEdBQUMsSUFBSSxDQUFDbmQsS0FBSyxDQUFDa1IsV0FBVyxDQUFBO1FBQUM7T0FBQzdTLFVBQVUsRUFBQyxDQUFDLENBQUM7T0FBQ0MsWUFBWSxFQUFDLENBQUMsQ0FBQTtBQUFDLE1BQUMsQ0FBQyxFQUFDeVEsQ0FBQyxDQUFDeE0sU0FBUyxDQUFDNmEsT0FBTyxHQUFDLFVBQVNyTyxDQUFDLEVBQUN2UixDQUFDLEVBQUM7QUFBQyxPQUFBLElBQUl6QyxDQUFDLEVBQUNvVixDQUFDLEVBQUNyQixDQUFDLENBQUE7QUFBQyxPQUFBLEtBQUssQ0FBQyxLQUFHQyxDQUFDLEtBQUdBLENBQUMsR0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUNxTixZQUFZLEVBQUUsRUFBQyxJQUFJLENBQUNvQyx5QkFBeUIsSUFBRXpqQixDQUFDLEdBQUM2SyxLQUFLLENBQUMrSiwyQkFBMkIsQ0FBQ1osQ0FBQyxFQUFDLElBQUksQ0FBQy9PLEtBQUssQ0FBQzBQLFVBQVUsQ0FBQyxFQUFDUyxDQUFDLEdBQUN2SyxLQUFLLENBQUN3TCwyQkFBMkIsQ0FBQ3JXLENBQUMsRUFBQyxJQUFJLENBQUNpRixLQUFLLENBQUMsRUFBQzhPLENBQUMsR0FBQ2xKLEtBQUssQ0FBQ3VMLHdCQUF3QixDQUFDLElBQUksQ0FBQ25SLEtBQUssQ0FBQyxFQUFDLElBQUksQ0FBQ3llLGNBQWMsQ0FBQztTQUFDL1IsV0FBVyxFQUFDM1IsQ0FBQztTQUFDa1oscUJBQXFCLEVBQUNuRixDQUFDO1NBQUNvRix3QkFBd0IsRUFBQy9ELENBQUM7U0FBQ3VPLFNBQVMsRUFBQ2xoQixDQUFBQTtBQUFDLFFBQUMsQ0FBQyxJQUFFLElBQUksQ0FBQ2loQixjQUFjLENBQUM7U0FBQy9SLFdBQVcsRUFBQ3FDLENBQUM7U0FBQzJQLFNBQVMsRUFBQ2xoQixDQUFBQTtBQUFDLFFBQUMsQ0FBQyxDQUFBO01BQUMsRUFBQ3VSLENBQUMsQ0FBQ3hNLFNBQVMsQ0FBQ3FaLFNBQVMsR0FBQyxVQUFTN00sQ0FBQyxFQUFDO0FBQUMsT0FBQSxJQUFJLENBQUNxTixZQUFZLEVBQUUsRUFBQ3JOLENBQUMsSUFBRUEsQ0FBQyxDQUFDNFAsU0FBUyxLQUFHLElBQUksQ0FBQ25DLGFBQWEsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQUMsT0FBQSxJQUFJaGYsQ0FBQztTQUFDekMsQ0FBQztTQUFDZ1UsQ0FBQyxHQUFDLElBQUksQ0FBQy9PLEtBQUssQ0FBQzBNLFdBQVcsR0FBQyxDQUFDLENBQUE7T0FBQyxJQUFJLENBQUM4Uix5QkFBeUIsSUFBRWhoQixDQUFDLEdBQUMsQ0FBQyxJQUFJLENBQUN3QyxLQUFLLENBQUNxUixVQUFVLEVBQUN0VyxDQUFDLEdBQUM2SyxLQUFLLENBQUN1TCx3QkFBd0IsQ0FBQyxJQUFJLENBQUNuUixLQUFLLENBQUMsRUFBQyxJQUFJLENBQUN5ZSxjQUFjLENBQUM7U0FBQy9SLFdBQVcsRUFBQ3FDLENBQUM7U0FBQ2tGLHFCQUFxQixFQUFDbFosQ0FBQztTQUFDbVosd0JBQXdCLEVBQUMxVyxDQUFBQTtBQUFDLFFBQUMsQ0FBQyxJQUFFLElBQUksQ0FBQ2loQixjQUFjLENBQUM7U0FBQy9SLFdBQVcsRUFBQ3FDLENBQUFBO0FBQUMsUUFBQyxDQUFDLENBQUE7TUFBQyxFQUFDQSxDQUFDLENBQUN4TSxTQUFTLENBQUNzWixTQUFTLEdBQUMsVUFBUzlNLENBQUMsRUFBQztBQUFDLE9BQUEsSUFBSSxDQUFDcU4sWUFBWSxFQUFFLEVBQUNyTixDQUFDLElBQUVBLENBQUMsQ0FBQzRQLFNBQVMsS0FBRyxJQUFJLENBQUNuQyxhQUFhLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUFDLE9BQUEsSUFBSWhmLENBQUM7U0FBQ3pDLENBQUM7U0FBQ2dVLENBQUMsR0FBQyxJQUFJLENBQUMvTyxLQUFLLENBQUMwTSxXQUFXLEdBQUMsQ0FBQyxDQUFBO09BQUMsSUFBSSxDQUFDOFIseUJBQXlCLElBQUVoaEIsQ0FBQyxHQUFDLElBQUksQ0FBQ3dDLEtBQUssQ0FBQ3FSLFVBQVUsRUFBQ3RXLENBQUMsR0FBQzZLLEtBQUssQ0FBQ3VMLHdCQUF3QixDQUFDLElBQUksQ0FBQ25SLEtBQUssQ0FBQyxFQUFDLElBQUksQ0FBQ3llLGNBQWMsQ0FBQztTQUFDL1IsV0FBVyxFQUFDcUMsQ0FBQztTQUFDa0YscUJBQXFCLEVBQUNsWixDQUFDO1NBQUNtWix3QkFBd0IsRUFBQzFXLENBQUFBO0FBQUMsUUFBQyxDQUFDLElBQUUsSUFBSSxDQUFDaWhCLGNBQWMsQ0FBQztTQUFDL1IsV0FBVyxFQUFDcUMsQ0FBQUE7QUFBQyxRQUFDLENBQUMsQ0FBQTtBQUFBLE1BQUMsRUFBQ0EsQ0FBQyxDQUFDeE0sU0FBUyxDQUFDc2Isa0JBQWtCLEdBQUMsWUFBVTtPQUFDaGMsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDMmIsc0JBQXNCLENBQUMsRUFBQyxJQUFJLENBQUMzWixLQUFLLENBQUMrSixrQkFBa0IsSUFBRWhNLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQzJaLHFCQUFxQixDQUFDLENBQUE7QUFBQSxNQUFDLEVBQUMxTSxDQUFDLENBQUN4TSxTQUFTLENBQUMrYixxQkFBcUIsR0FBQyxZQUFVO0FBQUMsT0FBQSxJQUFJLENBQUM5QyxhQUFhLElBQUUsSUFBSSxDQUFDQSxhQUFhLENBQUNuVCxPQUFPLEVBQUUsRUFBQ3hHLE1BQU0sQ0FBQ0csbUJBQW1CLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQ3liLHNCQUFzQixDQUFDLEVBQUM1YixNQUFNLENBQUNHLG1CQUFtQixDQUFDLE9BQU8sRUFBQyxJQUFJLENBQUN5WixxQkFBcUIsQ0FBQyxDQUFBO0FBQUEsTUFBQyxFQUFDMU0sQ0FBQyxDQUFDeE0sU0FBUyxDQUFDNGIscUJBQXFCLEdBQUMsWUFBVTtPQUFDLElBQUksQ0FBQ3JhLEtBQUssQ0FBQytKLGtCQUFrQixHQUFDaE0sTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDMloscUJBQXFCLENBQUMsR0FBQzVaLE1BQU0sQ0FBQ0csbUJBQW1CLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQ3laLHFCQUFxQixDQUFDLENBQUE7TUFBQyxFQUFDMU0sQ0FBQyxDQUFDeE0sU0FBUyxDQUFDaWIsYUFBYSxHQUFDLFVBQVMxTyxDQUFDLEVBQUM7T0FBQyxPQUFPeUwsU0FBUyxDQUFDLElBQUksRUFBQyxLQUFLLENBQUMsRUFBQyxLQUFLLENBQUMsRUFBQyxZQUFVO0FBQUMsU0FBQSxJQUFJL2MsQ0FBQyxFQUFDekMsQ0FBQyxFQUFDb1YsQ0FBQyxDQUFBO0FBQUMsU0FBQSxPQUFPMEssV0FBVyxDQUFDLElBQUksRUFBQyxVQUFTOUwsQ0FBQyxFQUFDO1dBQUMsUUFBT0EsQ0FBQyxDQUFDK0wsS0FBSztBQUFFLGFBQUEsS0FBSyxDQUFDO2VBQUMsT0FBTSxDQUFDL2YsQ0FBQyxHQUFDLElBQUksQ0FBQytJLEtBQUssQ0FBQzRLLGFBQWEsRUFBQ3lCLENBQUMsR0FBQ3ZLLEtBQUssQ0FBQzRNLG9CQUFvQixDQUFDLElBQUksQ0FBQ2tLLFdBQVcsQ0FBQyxFQUFDLENBQUMzaEIsQ0FBQyxJQUFFNkssS0FBSyxDQUFDNk4sdUJBQXVCLEVBQUUzRSxDQUFDLEVBQUMsSUFBSSxDQUFDb08sdUJBQXVCLEVBQUMvTSxDQUFDLENBQUMsS0FBRyxJQUFJLENBQUNrTyx3QkFBd0IsRUFBRSxFQUFDLElBQUksQ0FBQ25CLHVCQUF1QixHQUFDL00sQ0FBQyxFQUFDcFYsQ0FBQyxHQUFDLElBQUksQ0FBQ2lGLEtBQUssRUFBQ21RLENBQUMsR0FBQ3BWLENBQUMsQ0FBQzJVLFVBQVUsRUFBQ2xTLENBQUMsR0FBQ3pDLENBQUMsQ0FBQythLGFBQWEsRUFBQy9hLENBQUMsR0FBQzZLLEtBQUssQ0FBQytKLDJCQUEyQixDQUFDLElBQUksQ0FBQzNQLEtBQUssQ0FBQzBNLFdBQVcsRUFBQ3lELENBQUMsQ0FBQyxFQUFDQSxDQUFDLEdBQUN2SyxLQUFLLENBQUNvUCxxQkFBcUIsQ0FBQ25HLFFBQVEsQ0FBQ0EsUUFBUSxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMvSyxLQUFLLENBQUMsRUFBQztpQkFBQzRJLFdBQVcsRUFBQzNSLENBQUFBO0FBQUMsZ0JBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQzZoQixjQUFjLENBQUMsRUFBQzdoQixDQUFDLEdBQUM2SyxLQUFLLENBQUN3TyxzQkFBc0IsQ0FBQ2pFLENBQUMsQ0FBQ3pELFdBQVcsRUFBQ3lELENBQUMsQ0FBQyxFQUFDQSxDQUFDLEdBQUN0QixRQUFRLENBQUNBLFFBQVEsQ0FBQyxFQUFFLEVBQUNzQixDQUFDLENBQUMsRUFBQztpQkFBQ2UsV0FBVyxFQUFDblcsQ0FBQztpQkFBQythLGFBQWEsRUFBQ3RZLENBQUFBO2dCQUFFLENBQUMsRUFBQ29JLEtBQUssQ0FBQzhOLE9BQU8sQ0FBQyxJQUFJLENBQUNrSixjQUFjLEVBQUM7aUJBQUNsWSxRQUFRLEVBQUMsQ0FBQzNKLENBQUFBO0FBQUMsZ0JBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ2loQixRQUFRLENBQUM3TCxDQUFDLENBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFBO0FBQUMsYUFBQSxLQUFLLENBQUM7ZUFBQ3BCLENBQUMsQ0FBQ2dNLElBQUksRUFBRSxFQUFDLElBQUksQ0FBQzZELGNBQWMsRUFBRSxFQUFDLElBQUksQ0FBQzdCLG1CQUFtQixHQUFDLENBQUMsQ0FBQyxFQUFDdmYsQ0FBQyxJQUFFLElBQUksQ0FBQzhlLFdBQVcsRUFBRSxFQUFDdk4sQ0FBQyxDQUFDK0wsS0FBSyxHQUFDLENBQUMsQ0FBQTtBQUFDLGFBQUEsS0FBSyxDQUFDO2VBQUMsT0FBTSxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQUE7QUFBQyxVQUFDLENBQUMsQ0FBQTtBQUFBLFFBQUMsQ0FBQyxDQUFBO01BQUMsRUFBQy9MLENBQUMsQ0FBQ3hNLFNBQVMsQ0FBQzhhLGdCQUFnQixHQUFDLFVBQVN0TyxDQUFDLEVBQUN2UixDQUFDLEVBQUM7QUFBQyxPQUFBLElBQUl6QyxDQUFDLEdBQUN5QyxDQUFDLENBQUNpRCxJQUFJO1NBQUMwUCxDQUFDLEdBQUMzUyxDQUFDLENBQUNnRCxJQUFJO1NBQUNzTyxDQUFDLEdBQUN0UixDQUFDLENBQUM4QyxNQUFNO0FBQUM5QyxTQUFBQSxDQUFDLEdBQUMsSUFBSSxDQUFDc0csS0FBSyxDQUFDcUssVUFBVTtTQUFDYyxDQUFDLEdBQUMsSUFBSSxDQUFDalAsS0FBSztTQUFDaVIsQ0FBQyxHQUFDaEMsQ0FBQyxDQUFDaUgsZUFBZTtTQUFDbEgsQ0FBQyxHQUFDQyxDQUFDLENBQUMrRyxhQUFhO1NBQUNmLENBQUMsR0FBQ2hHLENBQUMsQ0FBQ2dILGFBQWE7U0FBQ2IsQ0FBQyxHQUFDbkcsQ0FBQyxDQUFDdkIsUUFBUTtTQUFDdUIsQ0FBQyxHQUFDQSxDQUFDLENBQUNrRiwwQkFBMEIsQ0FBQTtPQUFDLElBQUcsSUFBSSxDQUFDcUksYUFBYSxHQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUV2TixDQUFDLElBQUUsQ0FBQyxJQUFJLENBQUMrTix5QkFBeUIsSUFBRXBYLEtBQUssQ0FBQzBMLDJCQUEyQixDQUFDbkIsQ0FBQyxFQUFDcFYsQ0FBQyxFQUFDeUMsQ0FBQyxDQUFDLENBQUMsRUFBQztBQUFDLFNBQUEsSUFBSSxDQUFDd2YseUJBQXlCLEtBQUcsSUFBSSxDQUFDcUIsd0JBQXdCLEVBQUUsRUFBQyxJQUFJLENBQUNRLHFCQUFxQixFQUFFLEVBQUMsSUFBSSxDQUFDOUIsbUJBQW1CLEdBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDQyx5QkFBeUIsR0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUM4QixrQkFBa0IsRUFBRSxDQUFDLENBQUE7U0FBQyxJQUFJOU4sQ0FBQyxHQUFDcEwsS0FBSyxDQUFDeU8sNkJBQTZCLENBQUN2RixDQUFDLEVBQUMsSUFBSSxDQUFDaVEsaUJBQWlCLENBQUMsQ0FBQTtTQUFDLElBQUcsQ0FBQyxDQUFDLEtBQUczSixDQUFDLEVBQUMsT0FBT3BHLENBQUMsR0FBQ2dDLENBQUMsSUFBRUEsQ0FBQyxHQUFDLENBQUNpRSxDQUFDLEdBQUMsS0FBSyxDQUFDLEdBQUMsS0FBS3JQLEtBQUssQ0FBQzhOLE9BQU8sQ0FBQyxJQUFJLENBQUNrSixjQUFjLEVBQUM7V0FBQ2xZLFFBQVEsRUFBQ3NNLENBQUFBO0FBQUMsVUFBQyxDQUFDLENBQUE7U0FBQyxJQUFHcEwsS0FBSyxDQUFDMEssOEJBQThCLENBQUNVLENBQUMsRUFBQ2hDLENBQUMsRUFBQ2lHLENBQUMsQ0FBQyxFQUFDLElBQUc7V0FBQyxDQUFDLFNBQVNsRyxDQUFDQSxHQUFFO0FBQUNuSixhQUFBQSxLQUFLLENBQUMySyxrQkFBa0IsQ0FBQ3pCLENBQUMsQ0FBQyxHQUFDa0MsQ0FBQyxJQUFFQyxDQUFDLEdBQUNELENBQUMsSUFBRSxDQUFDQyxDQUFDLENBQUE7YUFBQ3JMLEtBQUssQ0FBQzBLLDhCQUE4QixDQUFDVSxDQUFDLEVBQUNoQyxDQUFDLEVBQUNpRyxDQUFDLENBQUMsSUFBRWxHLENBQUMsRUFBRSxDQUFBO0FBQUEsWUFBQyxFQUFFLENBQUE7VUFBQyxDQUFBLE9BQU1BLENBQUMsRUFBQztBQUFDbkosV0FBQUEsS0FBSyxDQUFDK1EsS0FBSyxDQUFDNUgsQ0FBQyxDQUFDLENBQUE7VUFBQTtBQUFDbkosU0FBQUEsS0FBSyxDQUFDOE4sT0FBTyxDQUFDLElBQUksQ0FBQ2tKLGNBQWMsRUFBQztXQUFDbFksUUFBUSxFQUFDc00sQ0FBQUE7QUFBQyxVQUFDLENBQUMsQ0FBQTtRQUFBO01BQUUsRUFBQ2pDLENBQUMsQ0FBQ3hNLFNBQVMsQ0FBQythLGVBQWUsR0FBQyxVQUFTdk8sQ0FBQyxFQUFDdlIsQ0FBQyxFQUFDO0FBQUMsT0FBQSxJQUFJekMsQ0FBQztTQUFDb1YsQ0FBQztTQUFDckIsQ0FBQztTQUFDdFIsQ0FBQyxHQUFDQSxDQUFDLENBQUM4QyxNQUFNLENBQUE7QUFBQyxPQUFBLElBQUksQ0FBQzBlLHVCQUF1QixFQUFFLEVBQUMsSUFBSSxDQUFDaEMseUJBQXlCLEtBQUcsSUFBSSxDQUFDQSx5QkFBeUIsR0FBQyxDQUFDLENBQUMsRUFBQ2ppQixDQUFDLEdBQUMsSUFBSSxDQUFDaUYsS0FBSyxDQUFDMk0saUJBQWlCLEVBQUN3RCxDQUFDLEdBQUMsSUFBSSxDQUFDck0sS0FBSyxDQUFDOEksdUJBQXVCLEVBQUNrQyxDQUFDLEdBQUNsSixLQUFLLENBQUMyTyxxQkFBcUIsQ0FBQyxJQUFJLENBQUNxSSxjQUFjLENBQUMsRUFBQ3BmLENBQUMsR0FBQ29JLEtBQUssQ0FBQ2dMLHdCQUF3QixDQUFDLElBQUksQ0FBQzVRLEtBQUssRUFBQ3hDLENBQUMsRUFBQ3NSLENBQUMsQ0FBQyxFQUFDbEosS0FBSyxDQUFDOE4sT0FBTyxDQUFDLElBQUksQ0FBQ2tKLGNBQWMsRUFBQztTQUFDbFksUUFBUSxFQUFDbEgsQ0FBQztTQUFDbVAsaUJBQWlCLEVBQUM1UixDQUFDO1NBQUM2Uix1QkFBdUIsRUFBQ3VELENBQUFBO1FBQUUsQ0FBQyxFQUFDLElBQUksQ0FBQzhPLHFCQUFxQixDQUFDemhCLENBQUMsQ0FBQyxDQUFDLENBQUE7TUFBQyxFQUFDdVIsQ0FBQyxDQUFDeE0sU0FBUyxDQUFDMGMscUJBQXFCLEdBQUMsVUFBU2hRLENBQUMsRUFBQztPQUFDLElBQUlGLENBQUMsR0FBQyxJQUFJO0FBQUN2UixTQUFBQSxDQUFDLEdBQUMsSUFBSSxDQUFDd0MsS0FBSyxDQUFDMk0saUJBQWlCLENBQUE7T0FBQyxJQUFJLENBQUN1UyxpQkFBaUIsR0FBQ3JkLE1BQU0sQ0FBQzZVLFVBQVUsQ0FBQyxZQUFVO1NBQUMsT0FBTzZELFNBQVMsQ0FBQ3hMLENBQUMsRUFBQyxLQUFLLENBQUMsRUFBQyxLQUFLLENBQUMsRUFBQyxZQUFVO0FBQUMsV0FBQSxJQUFJdlIsQ0FBQzthQUFDekMsQ0FBQzthQUFDb1YsQ0FBQzthQUFDckIsQ0FBQyxHQUFDLElBQUksQ0FBQTtBQUFDLFdBQUEsT0FBTytMLFdBQVcsQ0FBQyxJQUFJLEVBQUMsVUFBUzlMLENBQUMsRUFBQzthQUFDLFFBQU9BLENBQUMsQ0FBQytMLEtBQUs7QUFBRSxlQUFBLEtBQUssQ0FBQztBQUFDLGlCQUFBLE9BQU90ZCxDQUFDLEdBQUNvSSxLQUFLLENBQUNtTCxxQkFBcUIsQ0FBQzlCLENBQUMsRUFBQyxJQUFJLENBQUNqUCxLQUFLLENBQUMsRUFBQ2pGLENBQUMsR0FBQzZLLEtBQUssQ0FBQ3dPLHNCQUFzQixDQUFDNVcsQ0FBQyxFQUFDLElBQUksQ0FBQ3dDLEtBQUssQ0FBQyxFQUFDNEYsS0FBSyxDQUFDOE4sT0FBTyxDQUFDLElBQUksQ0FBQ2tKLGNBQWMsRUFBQzttQkFBQ2xZLFFBQVEsRUFBQyxDQUFDM0osQ0FBQUE7QUFBQyxrQkFBQyxDQUFDLEVBQUNvVixDQUFDLEdBQUN2SyxLQUFLLENBQUNrTyxxQkFBcUIsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ2tJLFFBQVEsQ0FBQzttQkFBQ3RQLFdBQVcsRUFBQ2xQLENBQUM7bUJBQUMwVCxXQUFXLEVBQUNuVyxDQUFDO21CQUFDNFksVUFBVSxFQUFDeEQsQ0FBQUE7a0JBQUUsQ0FBQyxDQUFDLENBQUE7QUFBQyxlQUFBLEtBQUssQ0FBQztpQkFBQyxPQUFPcEIsQ0FBQyxDQUFDZ00sSUFBSSxFQUFFLEVBQUNvRSxxQkFBcUIsQ0FBQyxZQUFVO21CQUFDLE9BQU9yUSxDQUFDLENBQUNtTixtQkFBbUIsRUFBRSxDQUFBO0FBQUEsa0JBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7Y0FBQTtBQUFDLFlBQUMsQ0FBQyxDQUFBO0FBQUEsVUFBQyxDQUFDLENBQUE7UUFBQyxFQUFDemUsQ0FBQyxDQUFDLENBQUE7TUFBQyxFQUFDdVIsQ0FBQyxDQUFDeE0sU0FBUyxDQUFDa2MsY0FBYyxHQUFDLFVBQVMxUCxDQUFDLEVBQUM7QUFBQyxPQUFBLElBQUl2UixDQUFDLEdBQUN1UixDQUFDLENBQUNyQyxXQUFXO1NBQUN1RSxDQUFDLEdBQUMsS0FBSyxDQUFDLEtBQUd6VCxDQUFDLEdBQUMsQ0FBQyxHQUFDQSxDQUFDO1NBQUNBLENBQUMsR0FBQ3VSLENBQUMsQ0FBQ2tGLHFCQUFxQjtTQUFDakYsQ0FBQyxHQUFDLEtBQUssQ0FBQyxLQUFHeFIsQ0FBQyxHQUFDLElBQUksR0FBQ0EsQ0FBQztTQUFDQSxDQUFDLEdBQUN1UixDQUFDLENBQUNtRix3QkFBd0I7U0FBQ2UsQ0FBQyxHQUFDLEtBQUssQ0FBQyxLQUFHelgsQ0FBQyxHQUFDLElBQUksR0FBQ0EsQ0FBQztTQUFDNFgsQ0FBQyxHQUFDckcsQ0FBQyxDQUFDMlAsU0FBUyxDQUFBO09BQUMsT0FBT25FLFNBQVMsQ0FBQyxJQUFJLEVBQUMsS0FBSyxDQUFDLEVBQUMsS0FBSyxDQUFDLEVBQUMsWUFBVTtBQUFDLFNBQUEsSUFBSS9jLENBQUM7V0FBQ3pDLENBQUM7V0FBQ29WLENBQUM7V0FBQ3JCLENBQUM7V0FBQ0csQ0FBQyxHQUFDLElBQUksQ0FBQTtBQUFDLFNBQUEsT0FBTzRMLFdBQVcsQ0FBQyxJQUFJLEVBQUMsVUFBUzlMLENBQUMsRUFBQztXQUFDLFFBQU9BLENBQUMsQ0FBQytMLEtBQUs7QUFBRSxhQUFBLEtBQUssQ0FBQztBQUFDLGVBQUEsT0FBTSxDQUFDL2YsQ0FBQyxHQUFDLElBQUksQ0FBQytJLEtBQUssRUFBQ3FNLENBQUMsR0FBQ3BWLENBQUMsQ0FBQzJTLFFBQVEsRUFBQzNTLENBQUMsR0FBQ0EsQ0FBQyxDQUFDNlIsdUJBQXVCLEVBQUNwUCxDQUFDLEdBQUMsSUFBSSxDQUFDd0MsS0FBSyxFQUFDOE8sQ0FBQyxHQUFDdFIsQ0FBQyxDQUFDa1MsVUFBVSxFQUFDbFMsQ0FBQyxHQUFDQSxDQUFDLENBQUNtUCxpQkFBaUIsRUFBQyxJQUFJLENBQUNvUSxtQkFBbUIsSUFBRSxJQUFJLENBQUMvYyxLQUFLLENBQUMwTSxXQUFXLEtBQUd1RSxDQUFDLElBQUUsQ0FBQ2QsQ0FBQyxJQUFFdkssS0FBSyxDQUFDaUssMEJBQTBCLENBQUNvQixDQUFDLEVBQUNuQyxDQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFFLElBQUksQ0FBQ2lPLG1CQUFtQixHQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ3NCLHdCQUF3QixFQUFFLEVBQUMsSUFBSSxDQUFDUyxrQkFBa0IsQ0FBQzFKLENBQUMsQ0FBQyxFQUFDakYsQ0FBQyxHQUFDLENBQUMsQ0FBQyxFQUFDckIsQ0FBQyxHQUFDbEosS0FBSyxDQUFDd08sc0JBQXNCLENBQUNuRCxDQUFDLEVBQUMsSUFBSSxDQUFDalIsS0FBSyxDQUFDLEVBQUNqRixDQUFDLEdBQUMsSUFBSSxLQUFHaVUsQ0FBQyxJQUFFLElBQUksS0FBR2lHLENBQUMsSUFBRTlFLENBQUMsR0FBQyxDQUFDLENBQUMsRUFBQ3ZLLEtBQUssQ0FBQ2tPLHFCQUFxQixFQUFFLElBQUVsTyxLQUFLLENBQUNrTyxxQkFBcUIsQ0FBQztpQkFBQ25ILGlCQUFpQixFQUFDblAsQ0FBQztpQkFBQ29QLHVCQUF1QixFQUFDN1IsQ0FBQUE7Z0JBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ2loQixRQUFRLENBQUM7aUJBQUN0UCxXQUFXLEVBQUN1RSxDQUFDO2lCQUFDMEMsVUFBVSxFQUFDNVksQ0FBQztpQkFBQ21XLFdBQVcsRUFBQ3BDLENBQUM7aUJBQUNuQyxpQkFBaUIsRUFBQ25QLENBQUM7aUJBQUN5VyxxQkFBcUIsRUFBQ2pGLENBQUM7aUJBQUNrRix3QkFBd0IsRUFBQ2UsQ0FBQztpQkFBQ2QsMEJBQTBCLEVBQUNoRSxDQUFBQTtnQkFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQUMsYUFBQSxLQUFLLENBQUM7QUFBQyxlQUFBLE9BQU9wQixDQUFDLENBQUNnTSxJQUFJLEVBQUUsRUFBQyxJQUFJLENBQUNxRSxpQkFBaUIsR0FBQ3ZkLE1BQU0sQ0FBQzZVLFVBQVUsQ0FBQyxZQUFVO0FBQUMsaUJBQUEsT0FBT3pILENBQUMsQ0FBQzZNLHFCQUFxQixDQUFDMUcsQ0FBQyxDQUFDLENBQUE7QUFBQSxnQkFBQyxFQUFDNVgsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUFBO0FBQUMsVUFBQyxDQUFDLENBQUE7QUFBQSxRQUFDLENBQUMsQ0FBQTtNQUFDLEVBQUN1UixDQUFDLENBQUN4TSxTQUFTLENBQUN3WiwwQkFBMEIsR0FBQyxVQUFTak4sQ0FBQyxFQUFDO09BQUMsT0FBT3lMLFNBQVMsQ0FBQyxJQUFJLEVBQUMsS0FBSyxDQUFDLEVBQUMsS0FBSyxDQUFDLEVBQUMsWUFBVTtBQUFDLFNBQUEsSUFBSS9jLENBQUMsRUFBQ3pDLENBQUMsRUFBQ29WLENBQUMsQ0FBQTtBQUFDLFNBQUEsT0FBTzBLLFdBQVcsQ0FBQyxJQUFJLEVBQUMsVUFBUzlMLENBQUMsRUFBQztXQUFDLFFBQU9BLENBQUMsQ0FBQytMLEtBQUs7QUFBRSxhQUFBLEtBQUssQ0FBQztlQUFDLE9BQU90ZCxDQUFDLEdBQUMsSUFBSSxDQUFDd0MsS0FBSyxDQUFDMk0saUJBQWlCLEVBQUM1UixDQUFDLEdBQUM2SyxLQUFLLENBQUN3TyxzQkFBc0IsQ0FBQ3RGLENBQUMsRUFBQyxJQUFJLENBQUM5TyxLQUFLLENBQUMsRUFBQ21RLENBQUMsR0FBQ3ZLLEtBQUssQ0FBQ2tPLHFCQUFxQixDQUFDO2lCQUFDbkgsaUJBQWlCLEVBQUMsQ0FBQTtnQkFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDcVAsUUFBUSxDQUFDO2lCQUFDdFAsV0FBVyxFQUFDb0MsQ0FBQztpQkFBQ29DLFdBQVcsRUFBQ25XLENBQUM7aUJBQUM0WSxVQUFVLEVBQUN4RCxDQUFDO2lCQUFDeEQsaUJBQWlCLEVBQUNuUCxDQUFDO2lCQUFDeVcscUJBQXFCLEVBQUMsSUFBSTtpQkFBQ0Msd0JBQXdCLEVBQUMsSUFBSTtpQkFBQ0MsMEJBQTBCLEVBQUMsQ0FBQyxDQUFBO2dCQUFFLENBQUMsQ0FBQyxDQUFBO0FBQUMsYUFBQSxLQUFLLENBQUM7ZUFBQyxPQUFPcEYsQ0FBQyxDQUFDZ00sSUFBSSxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUFBO0FBQUMsVUFBQyxDQUFDLENBQUE7QUFBQSxRQUFDLENBQUMsQ0FBQTtBQUFBLE1BQUMsRUFBQ2hNLENBQUMsQ0FBQ3hNLFNBQVMsQ0FBQ3FjLGNBQWMsR0FBQyxZQUFVO09BQUMsSUFBSSxDQUFDOWEsS0FBSyxDQUFDMkssU0FBUyxJQUFFLElBQUksQ0FBQzNLLEtBQUssQ0FBQzJLLFNBQVMsQ0FBQ0ksUUFBUSxDQUFDQSxRQUFRLENBQUMsRUFBRSxFQUFDLElBQUksQ0FBQ3dRLFdBQVcsQ0FBQyxFQUFDO0FBQUNubUIsU0FBQUEsSUFBSSxFQUFDdVQsT0FBTyxDQUFDekMsU0FBUyxDQUFDRixNQUFBQTtRQUFPLENBQUMsQ0FBQyxDQUFBO01BQUMsRUFBQ2lGLENBQUMsQ0FBQ3hNLFNBQVMsQ0FBQ3VjLGtCQUFrQixHQUFDLFVBQVMvUCxDQUFDLEVBQUM7T0FBQyxJQUFJLENBQUNqTCxLQUFLLENBQUM2SyxhQUFhLEtBQUdJLENBQUMsR0FBQ0EsQ0FBQyxHQUFDRixRQUFRLENBQUNBLFFBQVEsQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDd1EsV0FBVyxDQUFDLEVBQUM7U0FBQ25tQixJQUFJLEVBQUM2VixDQUFBQTtBQUFDLFFBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQ3NRLFdBQVcsRUFBQyxJQUFJLENBQUN2YixLQUFLLENBQUM2SyxhQUFhLENBQUNJLENBQUMsQ0FBQyxDQUFDLENBQUE7TUFBQyxFQUFDQSxDQUFDLENBQUN4TSxTQUFTLENBQUMwWixtQkFBbUIsR0FBQyxVQUFTaE4sQ0FBQyxFQUFDO09BQUMsT0FBT3NMLFNBQVMsQ0FBQyxJQUFJLEVBQUMsS0FBSyxDQUFDLEVBQUMsS0FBSyxDQUFDLEVBQUMsWUFBVTtTQUFDLElBQUkvYyxDQUFDLEVBQUN6QyxDQUFDLEVBQUNvVixDQUFDLEVBQUNyQixDQUFDLENBQUE7QUFBQyxTQUFBLE9BQU8rTCxXQUFXLENBQUMsSUFBSSxFQUFDLFVBQVM5TCxDQUFDLEVBQUM7V0FBQyxRQUFPQSxDQUFDLENBQUMrTCxLQUFLO0FBQUUsYUFBQSxLQUFLLENBQUM7ZUFBQyxPQUFNLENBQUMvZixDQUFDLEdBQUMsSUFBSSxDQUFDaUYsS0FBSyxFQUFDeEMsQ0FBQyxHQUFDekMsQ0FBQyxDQUFDK2EsYUFBYSxFQUFDL2EsQ0FBQyxHQUFDQSxDQUFDLENBQUNnYiwwQkFBMEIsRUFBQzVGLENBQUMsR0FBQyxJQUFJLENBQUNyTSxLQUFLLEVBQUNnTCxDQUFDLEdBQUNxQixDQUFDLENBQUMvQyxnQkFBZ0IsRUFBQytDLENBQUMsR0FBQ0EsQ0FBQyxDQUFDdkIsY0FBYyxFQUFDaEosS0FBSyxDQUFDbVMsNEJBQTRCLENBQUNqSixDQUFDLENBQUMsSUFBRSxJQUFJLENBQUMwTixhQUFhLElBQUUsQ0FBQ3poQixDQUFDLElBQUUsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDaWhCLFFBQVEsQ0FBQztpQkFBQ2pHLDBCQUEwQixFQUFDLENBQUMsQ0FBQztpQkFBQ0QsYUFBYSxFQUFDLENBQUMsQ0FBQTtnQkFBRSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQTtBQUFDLGFBQUEsS0FBSyxDQUFDO2VBQUMsT0FBTy9HLENBQUMsQ0FBQ2dNLElBQUksRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFBO0FBQUMsYUFBQSxLQUFLLENBQUM7ZUFBQ3ZkLENBQUMsSUFBRSxJQUFJLENBQUM4ZSxXQUFXLEVBQUUsRUFBQ3ZOLENBQUMsQ0FBQytMLEtBQUssR0FBQyxDQUFDLENBQUE7QUFBQyxhQUFBLEtBQUssQ0FBQztlQUFDLE9BQU8sSUFBSSxDQUFDaUMsbUJBQW1CLEdBQUMsQ0FBQyxDQUFDLEVBQUM1TSxDQUFDLEtBQUdyQixDQUFDLEdBQUNHLENBQUMsR0FBQ0osUUFBUSxDQUFDQSxRQUFRLENBQUMsRUFBRSxFQUFDLElBQUksQ0FBQ3dRLFdBQVcsQ0FBQyxFQUFDO2lCQUFDbm1CLElBQUksRUFBQytWLENBQUFBO0FBQUMsZ0JBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQ29RLFdBQVcsRUFBQ2xQLENBQUMsQ0FBQ3JCLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUFBO0FBQUMsVUFBQyxDQUFDLENBQUE7QUFBQSxRQUFDLENBQUMsQ0FBQTtNQUFDLEVBQUNDLENBQUMsQ0FBQ3hNLFNBQVMsQ0FBQ2diLGVBQWUsR0FBQyxVQUFTeE8sQ0FBQyxFQUFDO09BQUMsSUFBSSxDQUFDeU4sYUFBYSxHQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQ1ksT0FBTyxDQUFDck8sQ0FBQyxDQUFDLENBQUE7QUFBQSxNQUFDLEVBQUNBLENBQUMsQ0FBQ3hNLFNBQVMsQ0FBQytaLFdBQVcsR0FBQyxZQUFVO09BQUMsSUFBSSxDQUFDZ0Qsb0JBQW9CLEVBQUUsQ0FBQTtBQUFBLE1BQUMsRUFBQ3ZRLENBQUMsQ0FBQ3hNLFNBQVMsQ0FBQzhiLHdCQUF3QixHQUFDLFlBQVU7QUFBQyxPQUFBLElBQUksQ0FBQzlCLHFCQUFxQixFQUFFLEVBQUMsSUFBSSxDQUFDZ0QscUJBQXFCLEVBQUUsRUFBQyxJQUFJLENBQUNDLG9CQUFvQixFQUFFLENBQUE7QUFBQSxNQUFDLEVBQUN6USxDQUFDLENBQUN4TSxTQUFTLENBQUNnYSxxQkFBcUIsR0FBQyxZQUFVO0FBQUMxYSxPQUFBQSxNQUFNLENBQUM0VSxZQUFZLENBQUMsSUFBSSxDQUFDZ0osaUJBQWlCLENBQUMsRUFBQyxJQUFJLENBQUNBLGlCQUFpQixHQUFDLEtBQUssQ0FBQyxDQUFBO0FBQUEsTUFBQyxFQUFDMVEsQ0FBQyxDQUFDeE0sU0FBUyxDQUFDZ2QscUJBQXFCLEdBQUMsWUFBVTtPQUFDOUksWUFBWSxDQUFDLElBQUksQ0FBQzJJLGlCQUFpQixDQUFDLEVBQUMsSUFBSSxDQUFDQSxpQkFBaUIsR0FBQyxLQUFLLENBQUMsQ0FBQTtBQUFBLE1BQUMsRUFBQ3JRLENBQUMsQ0FBQ3hNLFNBQVMsQ0FBQ2lkLG9CQUFvQixHQUFDLFlBQVU7T0FBQy9JLFlBQVksQ0FBQyxJQUFJLENBQUN5SSxpQkFBaUIsQ0FBQyxFQUFDLElBQUksQ0FBQ0EsaUJBQWlCLEdBQUMsS0FBSyxDQUFDLENBQUE7QUFBQSxNQUFDLEVBQUNuUSxDQUFDLENBQUN4TSxTQUFTLENBQUN5Yyx1QkFBdUIsR0FBQyxZQUFVO0FBQUMsT0FBQSxJQUFJLENBQUM3QixzQkFBc0IsR0FBQyxLQUFLLENBQUMsQ0FBQTtBQUFBLE1BQUMsRUFBQ3BPLENBQUMsQ0FBQ3hNLFNBQVMsQ0FBQ3NjLHFCQUFxQixHQUFDLFlBQVU7T0FBQyxJQUFJOVAsQ0FBQyxHQUFDbkosS0FBSyxDQUFDMk8scUJBQXFCLENBQUMsSUFBSSxDQUFDcUksY0FBYyxDQUFDLENBQUE7QUFBQyxPQUFBLElBQUksQ0FBQ08sc0JBQXNCLEdBQUMsQ0FBQ3BPLENBQUMsQ0FBQTtBQUFBLE1BQUMsRUFBQ0EsQ0FBQyxDQUFDeE0sU0FBUyxDQUFDcWIsZ0JBQWdCLEdBQUMsWUFBVTtPQUFDLE9BQU9yRCxTQUFTLENBQUMsSUFBSSxFQUFDLEtBQUssQ0FBQyxFQUFDLEtBQUssQ0FBQyxFQUFDLFlBQVU7U0FBQyxJQUFJL2MsQ0FBQyxDQUFBO0FBQUMsU0FBQSxPQUFPcWQsV0FBVyxDQUFDLElBQUksRUFBQyxVQUFTOUwsQ0FBQyxFQUFDO1dBQUMsUUFBT0EsQ0FBQyxDQUFDK0wsS0FBSztBQUFFLGFBQUEsS0FBSyxDQUFDO0FBQUMsZUFBQSxPQUFPdGQsQ0FBQyxHQUFDb0ksS0FBSyxDQUFDb1AscUJBQXFCLENBQUMsSUFBSSxDQUFDbFIsS0FBSyxFQUFDLElBQUksQ0FBQzhZLGNBQWMsQ0FBQyxFQUFDLElBQUksQ0FBQ00sdUJBQXVCLEdBQUN0WCxLQUFLLENBQUM0TSxvQkFBb0IsQ0FBQyxJQUFJLENBQUNrSyxXQUFXLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUNWLFFBQVEsQ0FBQ3hlLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFBQyxhQUFBLEtBQUssQ0FBQztBQUFDLGVBQUEsT0FBT3VSLENBQUMsQ0FBQ2dNLElBQUksRUFBRSxFQUFDLElBQUksQ0FBQ2pYLEtBQUssQ0FBQzBLLGFBQWEsSUFBRSxJQUFJLENBQUMxSyxLQUFLLENBQUMwSyxhQUFhLENBQUNLLFFBQVEsQ0FBQ0EsUUFBUSxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUN3USxXQUFXLENBQUMsRUFBQztBQUFDbm1CLGlCQUFBQSxJQUFJLEVBQUN1VCxPQUFPLENBQUN6QyxTQUFTLENBQUNILElBQUFBO0FBQUksZ0JBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUFBO0FBQUMsVUFBQyxDQUFDLENBQUE7QUFBQSxRQUFDLENBQUMsQ0FBQTtBQUFBLE1BQUMsRUFBQ2tGLENBQUMsQ0FBQ3hNLFNBQVMsQ0FBQytjLG9CQUFvQixHQUFDLFlBQVU7T0FBQyxJQUFJdlEsQ0FBQyxHQUFDLElBQUk7U0FBQ3ZSLENBQUMsR0FBQyxJQUFJLENBQUNzRyxLQUFLO1NBQUMvSSxDQUFDLEdBQUN5QyxDQUFDLENBQUMwUCxpQkFBaUI7U0FBQzFQLENBQUMsR0FBQ0EsQ0FBQyxDQUFDMlAsZ0JBQWdCLENBQUE7T0FBQyxJQUFJLENBQUNzUyxpQkFBaUIsR0FBQzVkLE1BQU0sQ0FBQzZVLFVBQVUsQ0FBQyxZQUFVO1NBQUMzSCxDQUFDLENBQUNvTixTQUFTLEtBQUdwaEIsQ0FBQyxLQUFHMFIsT0FBTyxDQUFDN0IsaUJBQWlCLENBQUNGLEdBQUcsR0FBQ3FFLENBQUMsQ0FBQzZNLFNBQVMsRUFBRSxHQUFDN00sQ0FBQyxDQUFDOE0sU0FBUyxFQUFFLENBQUMsQ0FBQTtRQUFDLEVBQUNyZSxDQUFDLENBQUMsQ0FBQTtBQUFBLE1BQUMsRUFBQ3VSLENBQUMsQ0FBQ3hNLFNBQVMsQ0FBQ3ViLG1CQUFtQixHQUFDLFlBQVU7T0FBQyxJQUFJLENBQUN0QyxhQUFhLEdBQUMsSUFBSUosZUFBZSxDQUFDL0MsT0FBTyxDQUFDO1NBQUN0VSxPQUFPLEVBQUMsSUFBSSxDQUFDMlksV0FBVztBQUFDL2YsU0FBQUEsS0FBSyxFQUFDLElBQUksQ0FBQ21ILEtBQUssQ0FBQ3FLLFVBQVU7U0FBQ2hGLFNBQVMsRUFBQyxJQUFJLENBQUNrVSxnQkFBZ0I7U0FBQzdULFFBQVEsRUFBQyxJQUFJLENBQUM4VCxlQUFlO1NBQUN0WixhQUFhLEVBQUMsQ0FBQztBQUFDQyxTQUFBQSxvQkFBb0IsRUFBQyxJQUFJLENBQUNILEtBQUssQ0FBQ2dLLGFBQWE7QUFBQzVKLFNBQUFBLG9CQUFvQixFQUFDLElBQUksQ0FBQ0osS0FBSyxDQUFDd0ssYUFBYTtBQUFDbkssU0FBQUEsNEJBQTRCLEVBQUMsQ0FBQyxJQUFJLENBQUNMLEtBQUssQ0FBQ3lLLHNCQUFzQjtTQUFDbkssMkJBQTJCLEVBQUMsQ0FBQyxDQUFBO1FBQUUsQ0FBQyxFQUFDLElBQUksQ0FBQ29YLGFBQWEsQ0FBQzFULElBQUksRUFBRSxDQUFBO01BQUMsRUFBQ2lILENBQUMsQ0FBQ3hNLFNBQVMsQ0FBQzBiLGdCQUFnQixHQUFDLFVBQVNsUCxDQUFDLEVBQUM7T0FBQyxJQUFJdlIsQ0FBQyxHQUFDLElBQUksQ0FBQTtBQUFDLE9BQUEsS0FBSyxDQUFDLEtBQUd1UixDQUFDLEtBQUdBLENBQUMsR0FBQyxJQUFJLENBQUNqTCxLQUFLLENBQUMsRUFBQyxJQUFJLENBQUN1YSx3QkFBd0IsRUFBRSxFQUFDLElBQUksQ0FBQ3RCLG1CQUFtQixHQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQy9jLEtBQUssQ0FBQzhWLGFBQWEsSUFBRSxJQUFJLENBQUN3RyxXQUFXLEVBQUUsRUFBQyxJQUFJLENBQUNOLFFBQVEsQ0FBQztBQUFDckcsU0FBQUEsTUFBTSxFQUFDL1AsS0FBSyxDQUFDaU0sWUFBWSxDQUFDOUMsQ0FBQyxDQUFBO0FBQUMsUUFBQyxDQUFDLEVBQUNvUSxxQkFBcUIsQ0FBQyxZQUFVO0FBQUMzaEIsU0FBQUEsQ0FBQyxDQUFDd2UsUUFBUSxDQUFDcFcsS0FBSyxDQUFDb1AscUJBQXFCLENBQUNqRyxDQUFDLEVBQUN2UixDQUFDLENBQUNvZixjQUFjLENBQUMsQ0FBQyxDQUFBO0FBQUEsUUFBQyxDQUFDLENBQUE7QUFBQSxNQUFDLEVBQUM3TixDQUFDLENBQUN4TSxTQUFTLENBQUMyYixpQkFBaUIsR0FBQyxZQUFVO09BQUMsSUFBSSxDQUFDMUMsYUFBYSxJQUFFLElBQUksQ0FBQ0EsYUFBYSxDQUFDdlQsTUFBTSxDQUFDO0FBQUN0TCxTQUFBQSxLQUFLLEVBQUMsSUFBSSxDQUFDbUgsS0FBSyxDQUFDcUssVUFBVTtBQUFDbEssU0FBQUEsb0JBQW9CLEVBQUMsSUFBSSxDQUFDSCxLQUFLLENBQUNnSyxhQUFhO0FBQUM1SixTQUFBQSxvQkFBb0IsRUFBQyxJQUFJLENBQUNKLEtBQUssQ0FBQ3dLLGFBQWE7QUFBQ25LLFNBQUFBLDRCQUE0QixFQUFDLENBQUMsSUFBSSxDQUFDTCxLQUFLLENBQUN5SyxzQkFBQUE7QUFBc0IsUUFBQyxDQUFDLENBQUE7QUFBQSxNQUFDLEVBQUNRLENBQUMsQ0FBQ3hNLFNBQVMsQ0FBQ21kLHFCQUFxQixHQUFDLFlBQVU7QUFBQyxPQUFBLElBQUkzUSxDQUFDLEdBQUMsSUFBSSxDQUFDakwsS0FBSztTQUFDdEcsQ0FBQyxHQUFDdVIsQ0FBQyxDQUFDa0ssY0FBYztTQUFDbEssQ0FBQyxHQUFDQSxDQUFDLENBQUN6QixnQkFBZ0IsQ0FBQTtPQUFDLE9BQU9nTCxPQUFPLENBQUNELE9BQU8sQ0FBQ3BmLGFBQWEsQ0FBQ3FpQixLQUFLLENBQUN6QyxjQUFjLEVBQUM7U0FBQzdZLEtBQUssRUFBQyxJQUFJLENBQUNBLEtBQUs7U0FBQzhZLE9BQU8sRUFBQyxJQUFJLENBQUN5RSxlQUFlO1NBQUN0RSxjQUFjLEVBQUN6YixDQUFDO1NBQUM4UCxnQkFBZ0IsRUFBQ3lCLENBQUFBO0FBQUMsUUFBQyxDQUFDLENBQUE7QUFBQSxNQUFDLEVBQUNBLENBQUMsQ0FBQ3hNLFNBQVMsQ0FBQ29kLGlCQUFpQixHQUFDLFlBQVU7QUFBQyxPQUFBLElBQUk1USxDQUFDLEdBQUMsSUFBSSxDQUFDakwsS0FBSyxDQUFDNFYsZ0JBQWdCO1NBQUNsYyxDQUFDLEdBQUNvSSxLQUFLLENBQUN1UixnQkFBZ0IsQ0FBQyxJQUFJLENBQUNuWCxLQUFLLENBQUMsQ0FBQ29YLG1CQUFtQixDQUFBO09BQUMsT0FBT2tCLE9BQU8sQ0FBQ0QsT0FBTyxDQUFDcGYsYUFBYSxDQUFDcWlCLEtBQUssQ0FBQzlCLGNBQWMsRUFBQztTQUFDekwsSUFBSSxFQUFDLE1BQU07U0FBQytLLE9BQU8sRUFBQyxJQUFJLENBQUM4QyxTQUFTO1NBQUNuQyxVQUFVLEVBQUNqYyxDQUFDO1NBQUNrYyxnQkFBZ0IsRUFBQzNLLENBQUFBO0FBQUMsUUFBQyxDQUFDLENBQUE7QUFBQSxNQUFDLEVBQUNBLENBQUMsQ0FBQ3hNLFNBQVMsQ0FBQ3FkLGlCQUFpQixHQUFDLFlBQVU7QUFBQyxPQUFBLElBQUk3USxDQUFDLEdBQUMsSUFBSSxDQUFDakwsS0FBSyxDQUFDNlYsZ0JBQWdCO1NBQUNuYyxDQUFDLEdBQUNvSSxLQUFLLENBQUN1UixnQkFBZ0IsQ0FBQyxJQUFJLENBQUNuWCxLQUFLLENBQUMsQ0FBQ3FYLG1CQUFtQixDQUFBO09BQUMsT0FBT2lCLE9BQU8sQ0FBQ0QsT0FBTyxDQUFDcGYsYUFBYSxDQUFDcWlCLEtBQUssQ0FBQzlCLGNBQWMsRUFBQztTQUFDekwsSUFBSSxFQUFDLE1BQU07U0FBQytLLE9BQU8sRUFBQyxJQUFJLENBQUMrQyxTQUFTO1NBQUNwQyxVQUFVLEVBQUNqYyxDQUFDO1NBQUNtYyxnQkFBZ0IsRUFBQzVLLENBQUFBO0FBQUMsUUFBQyxDQUFDLENBQUE7QUFBQSxNQUFDLEVBQUNBLENBQUMsQ0FBQ3hNLFNBQVMsQ0FBQ3NkLHNCQUFzQixHQUFDLFlBQVU7QUFBQyxPQUFBLElBQUk5USxDQUFDLEdBQUMsSUFBSSxDQUFDakwsS0FBSyxDQUFDeVYscUJBQXFCO0FBQUMvYixTQUFBQSxDQUFDLEdBQUMsSUFBSSxDQUFDd0MsS0FBSyxDQUFDOFYsYUFBYSxDQUFBO09BQUMsT0FBT3dDLE9BQU8sQ0FBQ0QsT0FBTyxDQUFDcGYsYUFBYSxDQUFDcWlCLEtBQUssQ0FBQ2pDLGVBQWUsRUFBQztTQUFDQyxTQUFTLEVBQUM5YixDQUFDO1NBQUNzYixPQUFPLEVBQUMsSUFBSSxDQUFDNkMsc0JBQXNCO1NBQUNwQyxxQkFBcUIsRUFBQ3hLLENBQUFBO0FBQUMsUUFBQyxDQUFDLENBQUE7QUFBQSxNQUFDLEVBQUNBLENBQUMsQ0FBQ3hNLFNBQVMsQ0FBQ3VkLE1BQU0sR0FBQyxZQUFVO0FBQUMsT0FBQSxJQUFJL1EsQ0FBQyxHQUFDLElBQUksQ0FBQy9PLEtBQUs7U0FBQ3hDLENBQUMsR0FBQ3VSLENBQUMsQ0FBQ21DLFdBQVc7U0FBQ25XLENBQUMsR0FBQ2dVLENBQUMsQ0FBQzRHLE1BQU07U0FBQ3hGLENBQUMsR0FBQ3BCLENBQUMsQ0FBQzRFLFVBQVU7U0FBQzVFLENBQUMsR0FBQ0EsQ0FBQyxDQUFDb0gsU0FBUztBQUFDckgsU0FBQUEsQ0FBQyxHQUFDbEosS0FBSyxDQUFDNFIsaUJBQWlCLENBQUMsSUFBSSxDQUFDMVQsS0FBSyxFQUFDLElBQUksQ0FBQzlELEtBQUssQ0FBQztBQUFDaVAsU0FBQUEsQ0FBQyxHQUFDckosS0FBSyxDQUFDNlIsb0JBQW9CLENBQUMsSUFBSSxDQUFDM1QsS0FBSyxFQUFDLElBQUksQ0FBQzlELEtBQUssQ0FBQztBQUFDaVIsU0FBQUEsQ0FBQyxHQUFDckwsS0FBSyxDQUFDaU8sc0JBQXNCLENBQUMsSUFBSSxDQUFDL1AsS0FBSyxFQUFDLElBQUksQ0FBQzlELEtBQUssRUFBQyxJQUFJLENBQUM0YyxjQUFjLENBQUM7QUFBQ3BmLFNBQUFBLENBQUMsR0FBQ29JLEtBQUssQ0FBQ21PLG9CQUFvQixDQUFDO1dBQUM3QyxXQUFXLEVBQUMxVCxDQUFBQTtBQUFDLFVBQUMsRUFBQztXQUFDbVcsVUFBVSxFQUFDeEQsQ0FBQUE7QUFBQyxVQUFDLENBQUM7QUFBQ0EsU0FBQUEsQ0FBQyxHQUFDLElBQUksQ0FBQ3JNLEtBQUssQ0FBQ3VLLGFBQWEsSUFBRVUsQ0FBQyxHQUFDLEVBQUUsR0FBQ3RDLE9BQU8sQ0FBQ0QsU0FBUyxDQUFDRixHQUFHO0FBQUN5QyxTQUFBQSxDQUFDLEdBQUNuSixLQUFLLENBQUNnUCxnQkFBZ0IsQ0FBQ25JLE9BQU8sQ0FBQ1YsVUFBVSxDQUFDakIsSUFBSSxFQUFDcUYsQ0FBQyxDQUFDLENBQUE7T0FBQyxPQUFPbUksT0FBTyxDQUFDRCxPQUFPLENBQUNwZixhQUFhLENBQUMsS0FBSyxFQUFDO1NBQUN5ZixTQUFTLEVBQUMzSixDQUFBQTtRQUFFLEVBQUN1SixPQUFPLENBQUNELE9BQU8sQ0FBQ3BmLGFBQWEsQ0FBQyxLQUFLLEVBQUM7U0FBQ04sR0FBRyxFQUFDLElBQUksQ0FBQzhqQixvQkFBQUE7UUFBcUIsRUFBQ25FLE9BQU8sQ0FBQ0QsT0FBTyxDQUFDcGYsYUFBYSxDQUFDLEtBQUssRUFBQztTQUFDRCxLQUFLLEVBQUNpWSxDQUFDO0FBQUN5SCxTQUFBQSxTQUFTLEVBQUNqTSxPQUFPLENBQUNWLFVBQVUsQ0FBQ2hCLE9BQU87U0FBQ2dPLFlBQVksRUFBQyxJQUFJLENBQUNtRCxpQkFBaUI7U0FBQ2xELFlBQVksRUFBQyxJQUFJLENBQUNxRCxpQkFBQUE7UUFBa0IsRUFBQy9ELE9BQU8sQ0FBQ0QsT0FBTyxDQUFDcGYsYUFBYSxDQUFDLElBQUksRUFBQztTQUFDRCxLQUFLLEVBQUN3RSxDQUFDO0FBQUNrYixTQUFBQSxTQUFTLEVBQUNqTSxPQUFPLENBQUNWLFVBQVUsQ0FBQ2YsS0FBSztTQUFDclMsR0FBRyxFQUFDLElBQUksQ0FBQ2drQixxQkFBQUE7QUFBcUIsUUFBQyxFQUFDNWhCLENBQUMsQ0FBQ29VLEdBQUcsQ0FBQyxJQUFJLENBQUMwTixnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDL04sQ0FBQyxHQUFDLElBQUksR0FBQyxJQUFJLENBQUM0USxxQkFBcUIsRUFBRSxFQUFDelEsQ0FBQyxHQUFDLElBQUksR0FBQyxJQUFJLENBQUMwUSxpQkFBaUIsRUFBRSxFQUFDMVEsQ0FBQyxHQUFDLElBQUksR0FBQyxJQUFJLENBQUMyUSxpQkFBaUIsRUFBRSxFQUFDLElBQUksQ0FBQzliLEtBQUssQ0FBQzJKLGdCQUFnQixHQUFDLElBQUksR0FBQyxJQUFJLENBQUNxUCxnQkFBZ0IsRUFBRSxFQUFDLElBQUksQ0FBQ2haLEtBQUssQ0FBQ21KLGdCQUFnQixHQUFDLElBQUksQ0FBQzRTLHNCQUFzQixFQUFFLEdBQUMsSUFBSSxDQUFDLENBQUE7TUFBQyxFQUFDOVEsQ0FBQyxDQUFDZ1IsWUFBWSxHQUFDMUUsY0FBYyxDQUFDMEUsWUFBWSxFQUFDaFIsQ0FBQyxDQUFBO0lBQUMsQ0FBQ3VKLE9BQU8sQ0FBQ0QsT0FBTyxDQUFDMkgsYUFBYSxDQUFDLENBQUMsQ0FBQTtBQUFDcm1CLENBQUFBLE9BQUFBLENBQUFBLE9BQUFBLEdBQWdCNGhCLGFBQWEsQ0FBQTs7Ozs7QUNBdm1uQjtBQUNBO0FBQ0E7QUFDQSxJQUFJMEUsZUFBZSxDQUFBO0FBQ25CLE1BQU1DLEtBQUssR0FBRyxJQUFJQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUE7QUFDakIsU0FBU0MsR0FBR0EsR0FBRztBQUM1QjtFQUNBLElBQUksQ0FBQ0gsZUFBZSxFQUFFO0FBQ3BCO0FBQ0FBLElBQUFBLGVBQWUsR0FBRyxPQUFPSSxNQUFNLEtBQUssV0FBVyxJQUFJQSxNQUFNLENBQUNKLGVBQWUsSUFBSUksTUFBTSxDQUFDSixlQUFlLENBQUMxWSxJQUFJLENBQUM4WSxNQUFNLENBQUMsQ0FBQTtJQUVoSCxJQUFJLENBQUNKLGVBQWUsRUFBRTtBQUNwQixNQUFBLE1BQU0sSUFBSUssS0FBSyxDQUFDLDBHQUEwRyxDQUFDLENBQUE7QUFDN0gsS0FBQTtBQUNGLEdBQUE7RUFFQSxPQUFPTCxlQUFlLENBQUNDLEtBQUssQ0FBQyxDQUFBO0FBQy9COztBQ2pCQSxZQUFlLHFIQUFxSDs7QUNFcEksU0FBU0ssUUFBUUEsQ0FBQ0MsSUFBSSxFQUFFO0VBQ3RCLE9BQU8sT0FBT0EsSUFBSSxLQUFLLFFBQVEsSUFBSUMsS0FBSyxDQUFDQyxJQUFJLENBQUNGLElBQUksQ0FBQyxDQUFBO0FBQ3JEOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1HLFNBQVMsR0FBRyxFQUFFLENBQUE7QUFFcEIsS0FBSyxJQUFJNWxCLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxHQUFHLEVBQUUsRUFBRUEsQ0FBQyxFQUFFO0FBQzVCNGxCLEVBQUFBLFNBQVMsQ0FBQzNpQixJQUFJLENBQUMsQ0FBQ2pELENBQUMsR0FBRyxLQUFLLEVBQUVTLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQ21ELEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ25ELENBQUE7QUFFTyxTQUFTaWlCLGVBQWVBLENBQUNDLEdBQUcsRUFBRUMsTUFBTSxHQUFHLENBQUMsRUFBRTtBQUMvQztBQUNBO0FBQ0EsRUFBQSxPQUFPLENBQUNILFNBQVMsQ0FBQ0UsR0FBRyxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR0gsU0FBUyxDQUFDRSxHQUFHLENBQUNDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHSCxTQUFTLENBQUNFLEdBQUcsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdILFNBQVMsQ0FBQ0UsR0FBRyxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUdILFNBQVMsQ0FBQ0UsR0FBRyxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR0gsU0FBUyxDQUFDRSxHQUFHLENBQUNDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBR0gsU0FBUyxDQUFDRSxHQUFHLENBQUNDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHSCxTQUFTLENBQUNFLEdBQUcsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHSCxTQUFTLENBQUNFLEdBQUcsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdILFNBQVMsQ0FBQ0UsR0FBRyxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFH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SUFBSSxFQUFFLEdBQUcsSUFBSSxFQUFFQSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxFQUFFQSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxFQUFFQSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxFQUFFQSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksRUFBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQTtBQUNsVzs7QUMzRldqRCxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRStDLElBQUk7O0FDRi9CO0FBQ0E7QUFDQTtBQUNBO0FBQ08sTUFBTVUsaUJBQWlCLEdBQUc7QUFDN0IsRUFBQSxDQUFDLEVBQUU7QUFDQ3ZYLElBQUFBLEtBQUssRUFBRSxDQUFBO0dBQ1Y7QUFDRCxFQUFBLEdBQUcsRUFBRTtBQUNEQSxJQUFBQSxLQUFLLEVBQUUsQ0FBQTtHQUNWO0FBQ0QsRUFBQSxJQUFJLEVB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
