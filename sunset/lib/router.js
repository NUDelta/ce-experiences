Router.configure({
  layoutTemplate: 'standardLayout',
});

Router.route('/', { name: 'home' });
Router.route('/upload', { name: 'upload' });
Router.route('/result', {
  name: 'result',
  layoutTemplate: 'spreadLayout'
});
