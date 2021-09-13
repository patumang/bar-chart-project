var rangeSlider = function(options, range, value){
  range.on('input', function(){
    if(value) {
      $(this).next(value).html(this.value);
    }
    if(options.modifier === "titleFontSize"){
      $("." + options.uniuqeChartId + "_chartHead").css("font-size", this.value + "px");
    }
    else if(options.modifier === "barSpacing"){
      if(options.singleStack === true){
        $("." + options.uniuqeChartId + "_chartAreaBar").css("width", this.value + "%");
      }
      else if(options.singleStack === false){
        $("." + options.uniuqeChartId + "_chartAreaBarColumn").css("width", this.value + "%");
      }
      $("." + options.uniuqeChartId + "_xAxisDataPointContainer").css("width", this.value + "%");
    }
  });
};

export default rangeSlider;
