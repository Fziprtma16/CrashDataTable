var tablechart = $("#table-chart").CrashDataTable({
    id: "table-chart", //ID TABLE
    ButtonHeader : true,
    ConfigButton : {
      Excel : true,
      Pdf:true,
      AddData : true,
      Copy : true
    },
    ResizeTable:true, //RESIZE TABLE 
  },{searching:true});



GenerateChartCrash({
  IdDiv : "container",
  IdTable : tablechart,
  TitleChart : "Data Crash",
  DataChart : {
    data :0,
    value :1,
    typechart : "bar",
    namedata : "Pendapatan"
  }
})