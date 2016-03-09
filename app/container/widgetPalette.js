import m from 'mithril';
import WidgetGroups from '../widgetGroups';


let generateWidgets = function (groupName) {
  let widgets = [];
  WidgetGroups[groupName].forEach(function(widget){
    widgets.push(
      m('img.widget', {
        src:'http://placehold.it/75x75/?text=' + widget.name || '-',
        draggable: true,
        ondragstart : (e) => { e.dataTransfer.setData("widget", JSON.stringify(widget))}
      })
    );
  });
  return m('div.widgets', widgets);
}

let generatePalette = function () {
  let palette = [];
  Object.keys(WidgetGroups).forEach(function(groupName){
    palette.push(
      m('div.widget-group',
      [
        m('div.title', m('h1', groupName.toUpperCase())),
        generateWidgets(groupName)
      ]
    ));
  });
  return palette;
};

function controller (attrs) {
  // TODO implement
}

function view (ctrl) {
  return m('div.widget-palette',
  [
    m('h1', 'Widgets'),
    generatePalette()
  ]);
}

let WidgetPalette = {controller, view};

export default WidgetPalette;
