// Part Two - Movies App!

// Build an application that uses jQuery to do the following:

// Contains a form with two inputs for a title and rating along with a button to submit the form.

// When the form is submitted, capture the values for each of the inputs and append them to the DOM along with a button to remove each title and rating from the DOM.
let counter = 0;
let movieList = [];

$('button').on('click', function (e) {
	e.preventDefault();
	let movieTitle = $('input').val();
	let movieRating = $('input').eq(1).val();
	// let titleText = `Movie Title: ${movieTitle}, Rating: ${movieRating}`;
	// $('div').append(
	// 	'<div class="review"><span>' +
	// 		titleText +
	// 		'</span>        <button class="delete">X</button></div>'
	// );
	let markup =
		'<tr class="count' +
		counter +
		'"><td class="count' +
		counter +
		'">' +
		movieTitle +
		'</td><td class="count' +
		counter +
		'">' +
		movieRating +
		'</td><td class="count' +
		counter +
		'" id= "delete"> X </td></tr>';
	tableBody = $('table tbody');
	tableBody.append(markup);
	$('input').val('');
	counter++;
	// $('.review').on('click', 'button', function (e) {
	// 	$(e.target).parent().remove();
	// });
});
// When the button to remove is clicked, remove each title and rating from the DOM.
$('tbody').on('click', '#delete', function (event) {
	let deleteClasas = $(event.target).attr('class');
	$('.' + deleteClasas + '').remove();
});

// Further Study
// Ensure that the rating of a movie can only be between 0 and 10.

// done

// Ensure that a title has at least 2 characters in it.

// done

// Allow users to sort alphabetically by the title of the movie or by the rating of the movie from lowest to highest

//
