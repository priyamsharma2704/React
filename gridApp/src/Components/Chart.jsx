import JqxChart from "jqwidgets-scripts/jqwidgets-react-tsx/jqxchart";
function Chart() {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const source = {
    datafields: [{ name: "Date" }, { name: "S&P 500" }, { name: "NASDAQ" }],
    datatype: "csv",
    url: "./nasdaq_vs_sp500.txt",
  };

  const state = {
    description: "NASDAQ Composite compared to S&P 500",
    padding: { left: 10, top: 5, right: 10, bottom: 5 },
    seriesGroups: [
      {
        series: [
          { dataField: "S&P 500", displayText: "S&P 500" },
          { dataField: "NASDAQ", displayText: "NASDAQ" },
        ],
        type: "line",
      },
    ],
    source: new jqx.dataAdapter(source, {
      async: false,
      autoBind: true,
      loadError: (xhr, status, error) => {
        alert('Error loading "' + source.url + '" : ' + error);
      },
    }),
    title: "U.S. Stock Market Index Performance",
    titlePadding: { left: 50, top: 0, right: 0, bottom: 10 },
    valueAxis: {
      tickMarks: { color: "#BCBCBC" },
      title: { text: "Daily Closing Price<br>" },
      visible: true,
    },
    xAxis: {
      baseUnit: "month",
      dataField: "Date",
      formatFunction: (value) => {
        return (
          //value.getDate() +
          //"-" +
          months[value.getMonth()] //+
          //"-" +
          //value.getFullYear()
        );
      },
      gridLines: {
        color: "#BCBCBC",
        interval: 3,
        visible: true,
      },
      labels: {
        angle: -45,
        offset: { x: 0, y: -25 },
        rotationPoint: "topright",
      },
      maxValue: "01-01-2015",
      minValue: "01-01-2014",
      tickMarks: {
        color: "#BCBCBC",
        interval: 1,
        visible: true,
      },
      type: "date",
      unitInterval: 1,
      valuesOnTicks: true,
    },
  };
  return (
    <>
      this is chart
      <JqxChart
        style={{ width: "850px", height: "500px" }}
        title={state.title}
        description={state.description}
        showLegend={true}
        enableAnimations={true}
        padding={state.padding}
        titlePadding={state.titlePadding}
        source={state.source}
        xAxis={state.xAxis}
        valueAxis={state.valueAxis}
        seriesGroups={state.seriesGroups}
        colorScheme={"scheme04"}
      />
    </>
  );
}

export default Chart;
