var tablegroup = $("#table-group").CrashDataTable({
    id: "table-group", //ID TABLE
    ButtonHeader : true,
    ConfigButton : {
      Excel : true,
      Pdf:true,
      Copy : true
    },
    RowGroup : true, //Rows Group
    ConfigGroup : {
      DropdownGroup : false,
      GroupsColumn : 1,
      GroupRowSpan : 6
    },
    ResizeTable:true, //RESIZE TABLE
    ShortTable : true, //SHORT TABLE
    ShortingRow : 0, //SELECT SHORT ROW
    TypeShorting :"asc", //TYPE SHOR , DESC OR ASC
  
  })