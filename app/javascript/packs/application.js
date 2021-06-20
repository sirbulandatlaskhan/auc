// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//= require owl.carousel

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import "stylesheets/application"

document.addEventListener("turbolinks:load", function() {
  $(".owl-carousel").owlCarousel({
    autoWidth: false,
    stagePadding: 50,
    navigation: true,
    nav:true,
    responsive: true,
    responsive:{
      0:{
        items:1,
        nav:true
      },
      600:{
        items:2,
        nav:true
      },
      1000:{
        items:3,
        nav:true,
        loop:false
      }
  }
  });
 });