Template.upload.events({
  'submit form': function(event, template) {
    event.preventDefault();

    let picture = event.target.photo.files[0];
    let img = new Image();
    img.src = URL.createObjectURL(picture);
    picture.width = img.width;
    picture.height = img.height;

    Images.insert(picture, (err, pictureObj) => {
      if (err) {
        console.log(error);
      } else {
        alert('we got it!');
      }
    });
  },
});
