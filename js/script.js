var i = 1;
$(document).ready(function(){
	$(document).bind("mouseup", function() {
    var t = '';
  	if(window.getSelection){
  		t = window.getSelection();
  	} else if(document.getSelection){
  		t = document.getSelection();
  	} else if(document.selection){
  		t = document.selection.createRange().text;
  	}

		if(t!=''){
      var colors = ['#fdcbde','#f4f4a6','#b4edf3'];
      if ( i > (colors.length-1) ) { i = 0; }
      $('<style>'+
      '::-moz-selection{background:' + colors[i] + '}'+
      '::-webkit-selection{background:' + colors[i] + '}'+
      '::selection{background:' + colors[i] + '}'+
      '</style>').appendTo('head');
      i++;
		}
  });
});
