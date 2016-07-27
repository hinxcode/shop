if (Meteor.isClient) {
  Template.carousel.rendered = function () {
    console.log('c done');
    // $(".carousel").carousel({
    //   interval: 2000,
    //
    // });
  };
}
