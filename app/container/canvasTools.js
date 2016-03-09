import m from 'mithril';
import State from '../state';
import AppEvents from '../appEvents';
import ScreenSizes from '../screenSizes';

function controller (attrs) {
  this.currentScreenSize = m.prop(ScreenSizes.desktop);

  this.triggerScreenSizeChange = (newSize) => {
    this.currentScreenSize(newSize);
    State.triggerChange(AppEvents.CANVAS_SIZE_CHANGED, newSize);
  };
}

function view (ctrl) {
  return m('div.canvas-tools',
    m('div.views', [
    m('i', {class:'ion-laptop', onclick:ctrl.triggerScreenSizeChange.bind(ctrl, ScreenSizes.desktop)}),
    m('i', {class:'ion-ipad', onclick:ctrl.triggerScreenSizeChange.bind(ctrl, ScreenSizes.tablet)}),
    m('i', {class:'ion-android-phone-portrait', onclick:ctrl.triggerScreenSizeChange.bind(ctrl, ScreenSizes.smartphoneP)}),
    m('i', {class:'ion-android-phone-landscape', onclick:ctrl.triggerScreenSizeChange.bind(ctrl, ScreenSizes.smartphoneL)})
    ]));
}

let CanvasTools = {controller, view};

export default CanvasTools;
