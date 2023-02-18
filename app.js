// When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”

$(document).ready(function () {
	console.log('Let’s get ready to party with jQuery!');
});

// Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).

$('img').addClass('image-center');

// Remove the last paragraph in the article.

$('p').last().remove();

// Set the font size of the title to be a random pixel size from 0 to 100.
$('h1').css('font-size', Math.floor(Math.random() * 100));

// Add an item to the list; it can say whatever you want.

$('ol').append('<li>New item that I added is right here :) </a></li>');

// Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.

$('aside')
	.empty()
	.append('<p>the list is silly. i am sorry it was ever here!!!</p>');

// When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.

$('input').on('click keyup', function () {
	let red = $('input').eq(0).val();
	let blue = $('input').eq(1).val();
	let green = $('input').eq(2).val();
	let newColor = `rgb(${red},${green},${blue})`;
	$('body').css('background-color', newColor);
});

// Add an event listener so that when you click on the image, it is removed from the DOM.

$('img').on('click', function () {
	$(this).remove();
});
