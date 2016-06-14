$(document).ready(function(){
  
  var seek;
  
  $('#get').click(function(){
    seek = $('#seek').val();
    getPictures();
  });
  $('#seek').keydown(function(e){
       if(e.keyCode == 13) {
         seek = $(this).val();
         getPictures();
       }
  });
  function getPictures(){
    
    var flickrURL = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=" + seek + "&jsoncallback=?"
    $.ajax (
      {
      dataType: 'json', 
      method: 'GET',
      url: flickrURL,
      success: makePhotos
    }
   )
 };
 
  function makePhotos(data) {
    console.log(data);
    $('#pictures').html("");
    for(var i=0; i<data.items.length; i++){
      var photo = data.items[i];
      var html = "<div class='size'><div class='holder'> <a href='" + photo.link +"' target='_blank'><img src='" + photo.media.m + "' alt='"+ photo.title +"' > <h4>" + photo.title +"</h4></a> <article>"+ photo.tags +"</aricle</div>  </div>";
      $('#photos').append(html);
    }
  }

})