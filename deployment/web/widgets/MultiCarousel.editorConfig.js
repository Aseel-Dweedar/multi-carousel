'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

/**
 * @typedef Property
 * @type {object}
 * @property {string} key
 * @property {string} caption
 * @property {string} description
 * @property {string[]} objectHeaders
 * @property {ObjectProperties[]} objects
 * @property {Properties[]} properties
 */

/**
 * @typedef ObjectProperties
 * @type {object}
 * @property {PropertyGroup[]} properties
 * @property {string[]} captions
 */

/**
 * @typedef PropertyGroup
 * @type {object}
 * @property {string} caption
 * @property {PropertyGroup[]} propertyGroups
 * @property {Property[]} properties
 */

/**
 * @typedef Properties
 * @type {PropertyGroup}
 */

/**
 * @typedef Problem
 * @type {object}
 * @property {string} property
 * @property {("error" | "warning" | "deprecation")} severity
 * @property {string} message
 * @property {string} studioMessage
 * @property {string} url
 * @property {string} studioUrl
 */

/**
 * @param {object} values
 * @param {Properties} defaultProperties
 * @param {("web"|"desktop")} target
 * @returns {Properties}
 */

function getProperties(values, defaultProperties, target) {
  if (!values.autoPlay) {
    hidePropertiesIn(defaultProperties, values, ["autoPlayControls", "autoPlayDirection"]);
  }
  if (values.carouselType === "normal") {
    hidePropertiesIn(defaultProperties, values, ["action"]);
  }
  if (values.dataType === "dynamic") {
    hidePropertiesIn(defaultProperties, values, ["staticItems"]);
  }
  if (values.dataType === "static") {
    hidePropertiesIn(defaultProperties, values, ["carouselType", "data", "action", "content"]);
  }
  if (values.carouselType === "slide") {
    hidePropertiesIn(defaultProperties, values, ["infinite", "autoPlay", "disableButtonsControls", "disableDotsControls", "autoPlayControls", "autoPlayDirection", "animationDuration", "keyboardNavigation", "mouseTracking", "touchTracking", "buttonsStyle", "itemsBehavior"]);
  }
  return defaultProperties;
}
function hidePropertiesIn(propertyGroups, _value, keys) {
  keys.forEach(function (key) {
    return modifyProperty(function (_, index, container) {
      return container.splice(index, 1);
    }, propertyGroups, key, undefined, undefined);
  });
}
function modifyProperty(modify, propertyGroups, key, nestedPropIndex, nestedPropKey) {
  propertyGroups.forEach(function (propGroup) {
    var _propGroup$properties;
    if (propGroup.propertyGroups) {
      modifyProperty(modify, propGroup.propertyGroups, key, nestedPropIndex, nestedPropKey);
    }
    (_propGroup$properties = propGroup.properties) === null || _propGroup$properties === void 0 ? void 0 : _propGroup$properties.forEach(function (prop, index, array) {
      if (prop.key === key) {
        if (nestedPropIndex === undefined || nestedPropKey === undefined) {
          modify(prop, index, array);
        } else if (prop.objects) {
          modifyProperty(modify, prop.objects[nestedPropIndex].properties, nestedPropKey);
        } else if (prop.properties) {
          modifyProperty(modify, prop.properties[nestedPropIndex], nestedPropKey);
        }
      }
    });
  });
}
exports.getProperties = getProperties;
