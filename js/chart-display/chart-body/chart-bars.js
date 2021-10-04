import colorPalette from '../../color-palette.js';
import calculateWidthOfBarChartComponents from '../../bar-area-width.js';

export default function createChartBars(options, element) {
  let heightOfCurrentBar;

  let barChartComponentsWidth = calculateWidthOfBarChartComponents(
    options.noOfColumns, $("." + options.uniuqeChartId + "_chartAreaContainer")
  );

  if(options.singleStack) {
    for(let i = 0; i < options.noOfColumns; i++) {
      heightOfCurrentBar = (options.rawDataValues[i] * 100) / (options.yAxisRangeGap * options.noOfRows);
      element.append(
        '<div class="' + options.uniuqeChartId + '_chartAreaBar ' + options.uniuqeChartId + '_chartAreaBar-' + (i + 1) + '"><span>' + options.rawDataValues[i] + '<span></div>'
      );
      $("." + options.uniuqeChartId + "_chartAreaBar-" + (i + 1)).css({
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

    $("." + options.uniuqeChartId + "_chartFooter").append(
      '<div class="' + options.uniuqeChartId + '_stackAlias"></div>'
    );
    $("." + options.uniuqeChartId + "_stackAlias").css({
      "display": "flex",
      "flex-wrap": "wrap",
      "justify-content": "center",
      "margin": "5px 0"
    });

    for(let i = 0; i < options.rawDataStackKeys.length; i++) {
      $("." + options.uniuqeChartId + "_stackAlias").append(
        '<div class="' + options.uniuqeChartId + '_stackAliasItem" id="' + options.uniuqeChartId + '_stackAliasItem-' + ( i + 1) + '"></div>'
      );
      $("." + options.uniuqeChartId + "_stackAliasItem").css({
        "display": "flex",
        "justify-content": "center",
        "align-items": "center",
        "padding": "0 5px"
      });
      $("#" + options.uniuqeChartId + "_stackAliasItem-" + ( i + 1)).append(
        '<div class="' + options.uniuqeChartId + '_stackAliasItemColor" id="' + options.uniuqeChartId + '_stackAliasItemColor-' + ( i + 1) + '"></div>'
      );
      $("#" + options.uniuqeChartId + "_stackAliasItemColor-" + ( i + 1)).css({
        "height": "15px",
        "width": "15px",
        "margin-right": "5px",
        "background-color": colorPalette[i]["dark"]
      });
      $("#" + options.uniuqeChartId + "_stackAliasItem-" + ( i + 1)).append(
        '<div class="' + options.uniuqeChartId + '_stackAliasItemText" id="' + options.uniuqeChartId + '_stackAliasItemText-"' + ( i + 1) + '>' + options.rawDataStackKeys[i] + '</div>'
      );
    }

    for(let i = 0; i < options.noOfColumns; i++) {
      element.append(
        '<div class="' + options.uniuqeChartId + '_chartAreaBarColumn ' + options.uniuqeChartId + '_chartAreaBarColumn-' + (i + 1) + '"></div>'
      );
      $("." + options.uniuqeChartId + "_chartAreaBarColumn-" + (i + 1)).css({
        "height": "100%",
        "width": barChartComponentsWidth.widthOfEachBarInPerc + "%",
        "display": "flex",
        "flex-direction": "column-reverse",
        "justify-content": "flex-start"
      });
      for(let j = 0; j < options.rawDataStackValues[i].length; j++) {
        heightOfCurrentBar = (options.rawDataStackValues[i][j] * 100) / (options.yAxisRangeGap * options.noOfRows);
        $("." + options.uniuqeChartId + "_chartAreaBarColumn-" + (i + 1)).append(
          '<div class="' + options.uniuqeChartId + '_chartAreaBar ' + options.uniuqeChartId + '_chartAreaBar-' + (j + 1) + ' ' + options.uniuqeChartId + '_chartAreaBar-' + (i + 1) + '-' + (j + 1) + '"><span>' + options.rawDataStackValues[i][j] + '<span></div>'
        );

        $("." + options.uniuqeChartId + "_chartAreaBar-" + (i + 1) + "-" + (j + 1)).css({
          "height": heightOfCurrentBar + "%",
          "width": "100%",
          "display": "flex",
          "justify-content": "center"
        });

        $("." + options.uniuqeChartId + "_chartAreaBar-" + (j + 1)).css({
          "background-color": colorPalette[j+4]["dark"],
          "color": colorPalette[j+4]["fontColor"]
        });
      }
    }
  }
}
