import colorPalette from '../../color-palette.js';
import calculateWidthOfBarChartComponents from '../../bar-area-width.js';

export default function createChartBars(data, element) {
  let heightOfCurrentBar;

  let barChartComponentsWidth = calculateWidthOfBarChartComponents(
    data.noOfColumns, $(".chartAreaContainer")
  );

  if(data.singleStack) {
    for(let i = 0; i < data.noOfColumns; i++) {
      heightOfCurrentBar = (data.rawDataValues[i] * 100) / (data.yAxisRangeGap * data.noOfRows);
      element.append(
        '<div class="chartAreaBar chartAreaBar-' + (i + 1) + '"><span>' + data.rawDataValues[i] + '<span></div>'
      );
      $(".chartAreaBar-" + (i + 1)).css({
        "height": heightOfCurrentBar + "%",
        "width": barChartComponentsWidth.widthOfEachBarInPerc + "%",
        "background-color": colorPalette[0]["dark"],
        "color": colorPalette[0]["fontColor"],
        "display": "flex",
        "justify-content": "center"
      });
    }
  }
  else {

    $(".chartFooter").append(
      '<div class="stackAlias"></div>'
    );
    $('.stackAlias').css({
      "display": "flex",
      "flex-wrap": "wrap",
      "justify-content": "center",
      "margin": "5px 0"
    });

    for(let i = 0; i < data.rawDataStackKeys.length; i++) {
      $('.stackAlias').append(
        '<div class="stackAliasItem" id="stackAliasItem-' + ( i + 1) + '"></div>'
      );
      $('.stackAliasItem').css({
        "display": "flex",
        "justify-content": "center",
        "align-items": "center",
        "padding": "0 5px"
      });
      $('#stackAliasItem-' + ( i + 1)).append(
        '<div class="stackAliasItemColor" id="stackAliasItemColor-' + ( i + 1) + '"></div>'
      );
      $('#stackAliasItemColor-' + ( i + 1)).css({
        "height": "15px",
        "width": "15px",
        "margin-right": "5px",
        "background-color": colorPalette[i]["dark"]
      });
      $('#stackAliasItem-' + ( i + 1)).append(
        '<div class="stackAliasItemText" id="stackAliasItemText-"' + ( i + 1) + '>' + data.rawDataStackKeys[i] + '</div>'
      );
    }

    for(let i = 0; i < data.noOfColumns; i++) {
      element.append(
        '<div class="chartAreaBarColumn chartAreaBarColumn-' + (i + 1) + '"></div>'
      );
      $(".chartAreaBarColumn-" + (i + 1)).css({
        "height": "100%",
        "width": barChartComponentsWidth.widthOfEachBarInPerc + "%",
        "display": "flex",
        "flex-direction": "column-reverse",
        "justify-content": "flex-start"
      });
      for(let j = 0; j < data.rawDataStackValues[i].length; j++) {
        heightOfCurrentBar = (data.rawDataStackValues[i][j] * 100) / (data.yAxisRangeGap * data.noOfRows);
        $(".chartAreaBarColumn-" + (i + 1)).append(
          '<div class="chartAreaBar chartAreaBar-' + (j + 1) + ' chartAreaBar-' + (i + 1) + '-' + (j + 1) + '"><span>' + data.rawDataStackValues[i][j] + '<span></div>'
        );

        $(".chartAreaBar-" + (i + 1) + "-" + (j + 1)).css({
          "height": heightOfCurrentBar + "%",
          "width": "100%",
          "display": "flex",
          "justify-content": "center"
        });

        $(".chartAreaBar-" + (j + 1)).css({
          "background-color": colorPalette[j]["dark"],
          "color": colorPalette[j]["fontColor"]
        });
      }
    }
  }
}
