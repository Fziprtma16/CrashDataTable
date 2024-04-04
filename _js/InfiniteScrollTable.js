var tableinfinite = $("#infinite-table").CrashDataTable({
    id: "infinite-table", //ID TABLE
    ButtonHeader : true,
    ConfigButton : {
      Excel : true,
      Pdf:true,
      AddData : true,
      Copy : true
    },
    ResizeTable:true, //RESIZE TABLE 
    InfiniteScroll : true,
    InfiniteConfig : {
      DataAjax : "../_data/data.php",
      ColoumnData : [
      {data:"id"},
      {data:"username"},
      {data:"email"},
      {data:"age"},
      {data:"gender"}
      ]
    }
  },{});