(function () {
    var dashboardController = angular.module('dashboard');

    dashboardController.controller('DashboardController', DashboardController);

    function DashboardController($scope) {
        //Properties
        $scope.skillDataSource =
            {
                "chart": {
                    caption: "Comparison of Skills across firm",
                    Axisnam: "Skills",
                    AxisNam: "Proficiency",
                    numberPrefix: "",
                    plotFilAlpha: "80",
                    paletteColors: "#0075c2,#1aaf5d",
                    baseFontColor: "#333333",
                    baseFont: "Helvetica Neue,Arial",
                    captionFontSize: "14",
                    subcaptionFontSize: "14",
                    subcaptionFontBold: "0",
                    showBorder: "0",
                    bgColor: "#ffffff",
                    showShadow: "0",
                    canvasBgColor: "#ffffff",
                    canvasBorderAlpha: "0",
                    divlineAlpha: "100",
                    divlineColor: "#999999",
                    divlineThickness: "1",
                    divLineDashed: "1",
                    divLineDashLen: "1",
                    usePlotGradientColor: "0",
                    showplotborder: "0",
                    valueFontColor: "#ffffff",
                    placeValuesInside: "1",
                    showHoverEffect: "1",
                    rotateValues: "1",
                    showXAxisLine: "1",
                    xAxisLineThickness: "1",
                    xAxisLineColor: "#999999",
                    showAlternateHGridColor: "0",
                    legendBgAlpha: "0",
                    legendBorderAlpha: "0",
                    legendShadow: "0",
                    legendItemFontSize: "10",
                    legendItemFontColor: "#666666"
                },
                categories: [
                    {
                        category: [
                            {
                                label: "Java"
                            },
                            {
                                label: "AngularJS"
                            },
                            {
                                label: "Oracle"
                            },
                            {
                                label: "GIT"
                            },
                            {
                                label: "Spring"
                            }
                        ]
                    }
                ],
                dataset: [
                    {
                        seriesname: "My Skills",
                        data: [
                            {
                                value: "3"
                            },
                            {
                                value: "2"
                            },
                            {
                                value: "3"
                            },
                            {
                                value: "1"
                            },
                            {
                                value: "3"
                            }
                        ]
                    },
                    {
                        seriesname: "Firm Avergage",
                        data: [
                            {
                                value: "2"
                            },
                            {
                                value: "2"
                            },
                            {
                                value: "1"
                            },
                            {
                                value: "2"
                            },
                            {
                                value: "3"
                            }
                        ]
                    }
                ]
            };


        $scope.commitDataSource =
           {
               "chart": {
                   caption: "Comparison of commits across firm",
                   Axisnam: "Months",
                   AxisNam: "Commits",
                   numberPrefix: "",
                   plotFilAlpha: "80",
                   paletteColors: "#0075c2,#1aaf5d",
                   baseFontColor: "#333333",
                   baseFont: "Helvetica Neue,Arial",
                   captionFontSize: "14",
                   subcaptionFontSize: "14",
                   subcaptionFontBold: "0",
                   showBorder: "0",
                   bgColor: "#ffffff",
                   showShadow: "0",
                   canvasBgColor: "#ffffff",
                   canvasBorderAlpha: "0",
                   divlineAlpha: "100",
                   divlineColor: "#999999",
                   divlineThickness: "1",
                   divLineDashed: "1",
                   divLineDashLen: "1",
                   usePlotGradientColor: "0",
                   showplotborder: "0",
                   valueFontColor: "#ffffff",
                   placeValuesInside: "1",
                   showHoverEffect: "1",
                   rotateValues: "1",
                   showXAxisLine: "1",
                   xAxisLineThickness: "1",
                   xAxisLineColor: "#999999",
                   showAlternateHGridColor: "0",
                   legendBgAlpha: "0",
                   legendBorderAlpha: "0",
                   legendShadow: "0",
                   legendItemFontSize: "10",
                   legendItemFontColor: "#666666"
               },
               categories: [
                   {
                       category: [
                           {
                               label: "Jan"
                           },
                           {
                               label: "Feb"
                           },
                           {
                               label: "March"
                           },
                           {
                               label: "April"
                           }
                       ]
                   }
               ],
               dataset: [
                   {
                       seriesname: "My Commits",
                       data: [
                           {
                               value: "212"
                           },
                           {
                               value: "300"
                           },
                           {
                               value: "102"
                           },
                           {
                               value: "400"
                           }
                       ]
                   },
                   {
                       seriesname: "Firm Avergage",
                       data: [
                           {
                               value: "120"
                           },
                           {
                               value: "180"
                           },
                           {
                               value: "200"
                           },
                           {
                               value: "250"
                           }
                       ]
                   }
               ]
           };
       
   
        //Methods

        //Method Implementations

    }
})();