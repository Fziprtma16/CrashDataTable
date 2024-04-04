var tablecustom = $("#custom-table").CrashDataTable({
    id: "custom-table", //ID TABLE
    ButtonHeader : true,
    ConfigButton : {
      Excel : true,
      Pdf:true,
      AddData : true,
      Copy : true
    },
    WordBreakTable : true
  },{ autoWidth: false,
    columns : [
        { width : '50px' },
        { width : '50px' },
        { width : '50px' },
        { width : '50px' },        
        { width : '50px' },
        { width : '50px' }        
    ] });