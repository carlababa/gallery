

var breadcrumb = ["Home"];


function showTemplate(template, data){
	var html    = template(data);
	$('#content').html(html);
}

function showBreadcrumb(data) {
	var html    = breadTemplate(data);
	$('#breadcrumb').html(html);
}

var source = $("#albums-template").html();
albumsTemplate = Handlebars.compile(source);

var source = $("#photos-template").html();
photosTemplate = Handlebars.compile(source);

var source = $("#photo-template").html();
photoTemplate = Handlebars.compile(source);

var source = $("#breadcrumb-template").html();
breadTemplate = Handlebars.compile(source);



showTemplate(albumsTemplate, data);
showBreadcrumb(breadcrumb);


$(".album-thumbnail").click(function (){
	// a album was clicked
  var index = $(this).data('id');
  var album = data.albums[index];
  showTemplate(photosTemplate, album);
  document.getElementById("header").innerHTML = "<h1>" + album.name + "</h1>";
  breadcrumb.push(album.name);
  showBreadcrumb(breadcrumb);


	$(".photos-thumbnail").click(function (){
		// a photo was clicked
	  var index = $(this).data('id');
	  var photo = album.photos[index];
	  showTemplate(photoTemplate, photo);
	  breadcrumb.push(photo.name); 
	  showBreadcrumb(breadcrumb);
	});  

});


//when click return to first view
$("#albums-tab").click(function (){
    location.reload();
});
  

