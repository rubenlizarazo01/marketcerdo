$ ('.col-80').click (function (e) {
   var img = e.target.src;
   var modal = '<div class="modal"id="modal"><img src="'+ img +'"class="modal--img"><div class="modal--boton"id="modal--boton">X</div></div>'
   $ ("body").append (modal) 
   $ ('#modal--boton').click (function () {
      $('#modal').remove(); 
   })
});

$ (document).keyup (function (e) {
    if (e.which==27) {
      $('#modal').remove();    
    }
})