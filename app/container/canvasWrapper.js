import m from 'mithril';
import CanvasTools from './canvasTools';
import Canvas from './canvas';

function controller (attrs) {
  // TODO implement
}

function view (ctrl) {
  return m('div.canvas-wrapper', [
    m.component(CanvasTools),
    m.component(Canvas)
  ]);
}

let CanvasWrapper = {controller, view};

export default CanvasWrapper;
