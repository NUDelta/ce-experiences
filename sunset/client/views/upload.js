Template.upload.events({
  'submit form': function(event, template) {
    event.preventDefault();

    let picture = event.target.photo.files[0];
    Images.insert(picture, (err, pictureObj) => {
      if (err) {
        console.log(error);
      } else {
        alert('we got it!');
      }
    });

  }
});
