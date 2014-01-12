$("#mystory").hide();


$("#comment").click(function() {
	$(".user-comment-list").toggle();
});

$("#hide-comment").click(function() {
	$(".user-comment-list").toggle();
});

$("#contact").click(function() {
	$("#contact-modal").modal();
});

$("#my-connections").click(function() {
	$("#my-connections").modal();
});

$("#mystory-show").click(function() {
	$("#mystory").toggle();
	$("#myfeed").toggle();
});

$("#mystory-hide").click(function() {
	$("#mystory").toggle();
});

$("#connections").click(function() {
	$("#connection-modal").modal();
});