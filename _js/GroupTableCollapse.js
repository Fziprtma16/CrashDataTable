var collapsedGroups = {};
var tablecolappse = $("#table-group-colappse").CrashDataTable({
  id: "table-group-colappse", //ID TABLE
  ButtonHeader : true,
  ConfigButton : {
    Excel : true,
    Pdf:true,
    Copy : true
  },
  RowGroup : true, //Rows Group
  ConfigGroup : {
    DropdownGroup : true,
    GroupsColumn : 2,
    GroupRowSpan : 6,
  },
  ResizeTable:true, //RESIZE TABLE
  ShortTable : true, //SHORT TABLE
  ShortingRow : 0, //SELECT SHORT ROW
  TypeShorting :"asc", //TYPE SHOR , DESC OR ASC

});
$('#table-group-colappse tbody').on('click', 'tr.group-start', function() {
          var name = $(this).data('name');
          collapsedGroups[name] = !collapsedGroups[name];
          console.log(collapsedGroups);
          tablecolappse.draw(false);
        });