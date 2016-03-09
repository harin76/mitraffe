import m from 'mithril';
import CanvasWrapper  from './canvasWrapper';
import WidgetPalette from './widgetPalette';

function controller (attrs) {
  // TODO implement
}

function view (ctrl) {
  return m('div.container',
    m.component(WidgetPalette),
    m.component(CanvasWrapper)
  );
}

let Container = {controller, view};

export default Container;
