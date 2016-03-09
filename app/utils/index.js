import m from 'mithril';
import Behaviors from '../behaviors';
import uuid from 'uuid';
import _ from 'lodash';

let jsonToMithril = (element) => {
  if (typeof element === 'undefined') return [];

  let children = [];
  if(element.children && element.children.length > 0) {
    element.children.forEach((c) => {
      children.push(jsonToMithril(c));
    });
  }

  return m(element.tagName, element.properties, children.length > 0 ? children : element.text);
}

let generateIds = (element) => {
  if(typeof element === 'undefined') return;
  var el = _.clone(element);
  el.children = [];
  if(element.children && element.children.length > 0) {
    element.children.forEach((c) =>{
      el.children.push(generateIds(c));
    });
  }
  console.log(el.properties);
  el.properties = Object.assign({}, el.properties, {"data-wg-id":uuid.v4()});
  return el;
}

let utils = {
  jsonToMithril,
  generateIds
};

export default utils;
