const bindAll = (obj, ...fns) =>
  fns.forEach(fn => {
    fn => (
      (f = obj[fn]),
      (obj[fn] = function() {
        return f.apply(obj);
      })
    )
  })

var view = {
  label: 'docs',
  click: function() {
    console.log('clicked ' + this.label);
  }
};
bindAll(view, 'click');
jQuery(element).on('click', view.click); // Logs 'clicked docs' when clicked.