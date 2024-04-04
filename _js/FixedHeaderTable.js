
var tablefixedheader = $("#table-fixedheader").CrashDataTable({
    id: "table-fixedheader", //ID TABLE
    ButtonHeader : true,
    ConfigButton : {
      Excel : true,
      Pdf:true,
      Copy : true
    },
  
  },{
    fixedHeader: true,
      paging: false,
      })
  