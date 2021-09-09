var rangeSlider = function(modifier, range, value){
  range.on('input', function(){
    if(value) {
      $(this).next(value).html(this.value);
    }
    if(modifier === "titleFontSize"){
      $(".chartHead").css("font-size", this.value + "px");
    }
    else if(modifier === "barSpacing"){
      $('.chartAreaBar').css("width", this.value + "%");
      $('.xAxisDataPointContainer').css("width", this.value + "%");
    }
  });
};

export default rangeSlider;
