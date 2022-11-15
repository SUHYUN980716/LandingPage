var width = $("#sec1").width();




 $(document).ready(function() {

 $('html, body, *').mousewheel(function(e, delta) {

this.scrollLeft -= (delta * width);

e.preventDefault();

 });

});
