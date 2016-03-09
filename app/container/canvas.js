import m from 'mithril';
import _ from 'lodash';

import AppEvents from '../appEvents';
import Observable from '../observable';
import utils from '../utils';
import Behaviors from '../behaviors';
import State from '../state';

let createCanvas =  (frame) => {
  let canvas = {
    controller : Observable.register([AppEvents.CANVAS_SIZE_CHANGED, AppEvents.ELEMENT_DROPPED], function (state) {
      let _this = this;
      frame.style.width = _.has(state, 'width') ? state.width + 'px' : '100%';
      console.log('controller ==>', state)

      m.startComputation();
      setTimeout(function(){
        _this.state = _.clone(state, true);
        m.endComputation();
      });

    }),
    view: (ctrl) => {
      console.log(ctrl.state)
      return m('html', [
        m('head', [
          m('title', 'Zurb Email'),
          m('meta', {"http-equiv":"Content-Type", "content":"text/html; charset=utf-8"}),
          m('meta', {"name":"viewport", "content":"width=device-width"}),
          m('link', {"rel":"stylesheet", "href":"https://cdnjs.cloudflare.com/ajax/libs/zurb-ink/1.0.5/ink.css"})
        ]),
        m('body',
        {config: (element, isInitialized, context) => {
          if(!isInitialized) {
            Behaviors.dragDropMixin(element, {onchange: (e) => {
              console.log(e.dataTransfer.getData('widget'));
              State.dropWidget(e.target, JSON.parse(e.dataTransfer.getData('widget')));

            }});
          }
        }},
          utils.jsonToMithril(_.has(ctrl, 'state.page') ? ctrl.state.page : undefined)
        )
      ]);
    }
  };
  console.log(frame, canvas);
  //Behaviors.dragDropMixin(frame.contentDocument.body, {onchange: () => {console.log("dropped")}})
  return canvas;
}

let controller = () => {};

function view (ctrl) {
  return m('div.canvas',
    m('iframe', {
      config: (element, isInitialized, context) => {
          if(isInitialized) return;
          m.mount(element.contentWindow.document, createCanvas(element, ctrl));
      }}
    )
  );
}

let Canvas = {controller, view};

export default Canvas;
