var Home = function(){
  
  this.panel = div().addClass('home');
  this.text = div().text('Like this?').css('color','white');
  this.imageContainer = div().css('width','100%');
  this.image = image('images/image1.jpg').append(this.text).css('height','500px').css('width', '500px').css('margin','0 auto');
  this.row = row().css('width','70%').css('margin','0 auto');
  this.col1 = col('6');
  this.col2 = col('6');
  this.input1 = button('yes').click(function(){
    new Outcome('Here\'s more!','images/image2.jpg');
  });
  this.input2 = button('no').click(function(){
    new Outcome('Your gay','images/image3.jpg');
  });
  
  return this.panel.append(
    this.imageContainer.append(this.image), this.row.append(
      this.col1.append(this.input1),
      this.col2.append(this.input2)
    )
  );
}

var Outcome = function(text,url){
    this.panel = div();
    this.text = div().text(text).css('color', 'red');
    this.image = image(url).css('height','600px').css('width','400px');
    $('.home').replaceWith (this.panel.append(
        this.image.append(this.text)
      )
    )
}
