import $ from 'jquery';
import 'bootstrap';
import '../css/style.css';
import bb from '../images/bird.jpg';
import ss from '../images/squirrel.jpg';

$('#bird').attr("src",bb);
$('#squirrel').attr("src",ss);

$(document).ready(function () {
	// when a hanburger menu is clicked
	let $ul = $(".nav__list"),
		 $menu = $(".nav__menu");

	$($menu).click(function () {
		// toggle menu-click Class
		$ul.toggleClass("menu-click");
	}); // end click event handler
});
