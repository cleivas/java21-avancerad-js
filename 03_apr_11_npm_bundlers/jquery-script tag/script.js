//vanilla js
const h1Vanilla = document.querySelector('h1');

//jQuery
const h1JQuery = $('h1');

console.log( h1Vanilla );
console.log( h1JQuery );

// const p = $('p');
// console.log(p)
// p.text('Det här är en paragraf skapad med jQuery');
// $('body').append(p);
// p.appendTo( $('body'));

$('<p> Test </p>').appendTo($('body'));
h1JQuery.css('color', 'hotpink');

h1JQuery.click(()=>{
    console.log('klickat');
})