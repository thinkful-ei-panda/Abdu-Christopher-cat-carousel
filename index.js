 function PicturesOnClicks() {
  $( '.thumbnail' ).click(event => {
    event.preventDefault();
    console.log("check1")
    // src attribute for small image should be applied to large image when clicked
    const imgSrc = $(event.currentTarget).find('img').attr('src');
    $('.hero img').attr( 'src', imgSrc);
    console.log("check2")
    // alt attribute for small image should be applied to large image when clicked
    const imgAlt = $(event.currentTarget).find('img').attr('alt');
    $('.hero img').attr( 'alt', imgAlt);
    console.log("check3")
  });
  console.log("finalcheck")
}

$(PicturesOnClicks);