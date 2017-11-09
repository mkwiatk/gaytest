var div = function (){
  return $('<div>');
}
var input = function (placeholder){
  return $('<input>').attr('placeholder',placeholder);
}

var image = function (url){
  return div().css('background-image',"url("+url+")").css('background-size','cover')
  .css('background-position','50% 25%').css('margin','0 auto');
}
var button = function(name){
  return div().text(name).css('height','20px').css('cursor','pointer').css('outline','1px solid black');
}
var col = function (colNum){
  return div().addClass('col-xs-'+colNum);
}
var row = function (row){
  return div().addClass('row')
}