$(document).ready(function() {
	
});


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
	$("#title").html('<i class="fa fa-file-text-o"></i> John&#39;s Story');
});

$("#mystory-hide").click(function() {
	$("#mystory").toggle();
	$("#title").html('<i class="fa fa-file-text-o"></i> John&#39;s Recent Posts');
});

$("#connections").click(function() {
	$("#connection-modal").modal();
});

$('#login-click').click(function (e) {
  e.preventDefault();
  $("#login").tab('show');
});

$('#join-click').click(function (e) {
  e.preventDefault();
  $("#join").tab('show');
});

$('.bfh-select-us').bfhcountries({country:'US', flags:true});


$('#bday').datepicker({
    startView: 2,
    autoclose: true
	});

$("#image-upload").click(function() {
	$("#image-modal").modal();
});

