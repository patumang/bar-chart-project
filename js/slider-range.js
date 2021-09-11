var rangeSlider = function(data, range, value){
  range.on('input', function(){
    if(value) {
      $(this).next(value).html(this.value);
    }
    if(data.modifier === "titleFontSize"){
      $(".chartHead").css("font-size", this.value + "px");
    }
    else if(data.modifier === "barSpacing"){
      if(data.singleStack === true){
        $('.chartAreaBar').css("width", this.value + "%");
      }
      else if(data.singleStack === false){
        $('.chartAreaBarColumn').css("width", this.value + "%");
      }
      $('.xAxisDataPointContainer').css("width", this.value + "%");
    }
  });
};

export default rangeSlider;
