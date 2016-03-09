let channels = {};

let register = function (subscriptions, controller){
    return function self() {
      let ctrl = new controller;
      let reload = controller.bind(ctrl);
      on(subscriptions, reload);
      ctrl.onunload = function () {
        off(reload);
      }
      return ctrl;
    };
}

let on = function(subscriptions, callback) {
  subscriptions.forEach(function(subscription){
    if(!channels[subscription]) channels[subscription] = [];
    channels[subscription].push(callback);
  });
}

let off = function(callback) {
  for(let channel in channels) {
    let index = channels[channel].indexOf(callback);
    if(index > -1) channels[channel].splice(index, 1);
  }
}

let trigger = function(channel, args) {
  console.log("Triggered: " + channel);
  channels[channel].map((callback) => {
    callback(args);
  });
}

let Observable = {register, on, off, trigger};

export default Observable;
