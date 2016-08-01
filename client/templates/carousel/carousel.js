if (Meteor.isClient) {
  Template.carousel.rendered = function () {
    $(".carousel").carousel({
      interval: 2000
    });
  };
}
