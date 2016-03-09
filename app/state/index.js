import Observable  from '../observable';
import AppEvents from '../appEvents';
import utils from '../utils';
import uuid from 'uuid';
import _ from 'lodash';


let _state = {
  page: {
    tagName: 'table',
    properties: {className: 'body'},
    children: [
      {
        tagName: 'table',
        properties: {className: 'container'},
        children: [
          {tagName: 'tr', children:[
            {tagName:'td', properties: {class:'center', align:'center', valign:'top'}, children:[
              /*{
                tagName:'img',
                properties: { class: 'center', src: 'http://placehold.it/500x300?text=TitleImage'}
              }*/
            ]}]
          }
        ]
      }
    ]
  }
};

const triggerChange = (event, stateChanges) => {
  // Apply the state changes and return the new state through observable
  _state = Object.assign({}, _state, stateChanges);
  Observable.trigger(event, _state);
};

const findParent  = (node, childId) => {
    if(!node || !_.isArray(node.children)) return;

    node.children.forEach(function(child){
      if(_.has(child, 'properties') && child.properties.id === childId) {
        return node;
      }
      findParent(child, childId);
    });
}

const replace = (target, widget) => {
    let newPage = _.clone(_state.page, true);
    let parent = findParent(newPage, target.id);
    if(parent) parent.children.push(widget);
    return newPage;
};

const dropWidget = (target, widget) => {
    let newWidget = utils.generateIds(widget.template);
    //Object.assign({}, widget.template, {properties: {id:uuid.v4()}});
    const isPlaceHolder = target.getAttribute("placeholder");
    if(isPlaceHolder) {
      _state.page = replace(target, newWidget);
    } else {
      _state.page.children[0].children[0].children.push(newWidget);
    }
    Observable.trigger(AppEvents.ELEMENT_DROPPED, _state);
};

let state = {triggerChange, dropWidget}
export default state;
