Template.result.helpers({
  images: function() {
    console.log(Images.find().fetch());
    return Images.find();
  }
});
