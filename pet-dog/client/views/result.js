Template.result.onRendered(() => {
  let pswp = document.querySelectorAll('.pswp')[0];
  let items = [];
  Images.find().forEach((image) => {
    console.log(image);
    let maxWidth = 800;

    let width = image.width,
        height = image.height;

    if (width > maxWidth) {
      let ratio = maxWidth / width;
      width = maxWidth;
      height *= ratio;
    }

    items.push({
      src: image.data.url(),
      w: width,
      h: height
    });
  });

  console.log(items);

  let options = {
    index: 0
  };

  let gallery = new PhotoSwipe( pswp, PhotoSwipeUI_Default, items, options);
  gallery.init();
});

Template.result.helpers({
  images: function() {
    return Images.find();
  }
});

Template.result.events({
  'click #clearThings': function(event, template) {
    Meteor.call('clearImages');
  }
});
