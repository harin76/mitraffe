
const activate = (e) => {
  e.preventDefault();
  console.log('activating');
}

const deactivate = (e) => {
  console.log('de-activating');
}

const getUpdateFn = (options) => {
  const opts = Object.assign({},options);
  return (e) => {
    e.preventDefault();
    if(typeof opts.onchange === 'function') {
      opts.onchange(e);
    }
  };
}

const dragDropMixin = (element, options ) => {
  element.addEventListener('dragover', activate);
  element.addEventListener('dragleave', deactivate);
  element.addEventListener('dragend', deactivate);
  element.addEventListener('drop', deactivate);
  element.addEventListener('drop', getUpdateFn(options));
}

const Behaviors = {
  dragDropMixin
};

export default Behaviors;
