var tablefixed = $("#table-fixed").CrashDataTable({
    id: "table-fixed", //ID TABLE
    ButtonHeader : true,
    ConfigButton : {
      Excel : true,
      Pdf:true,
    },
    ResizeTable:true, //RESIZE TABLE
    ShortTable : true, //SHORT TABLE
    ShortingRow : 0, //SELECT SHORT ROW
    TypeShorting :"asc", //TYPE SHOR , DESC OR ASC
    FixedCloumn : true, //FIXED COLUMN
  StartFixedCloumn :2, //START FIXED COLUMN
  
  },{ paging: false,
      scrollCollapse: true,
      scrollX: true,
      scrollY: 400});
  
    var tablefixed2 = $("#table-fixed2").CrashDataTable({
    id: "table-fixed2", //ID TABLE
    ButtonHeader : true,
    ConfigButton : {
      Excel : true,
      Pdf:true,
      Copy : true
    },
    ResizeTable:true, //RESIZE TABLE
    ShortTable : true, //SHORT TABLE
    ShortingRow : 0, //SELECT SHORT ROW
    TypeShorting :"asc", //TYPE SHOR , DESC OR ASC
    FixedCloumn : true, //FIXED COLUMN
  StartFixedCloumn :2, //START FIXED COLUMN
  
  },{ paging: false,
      scrollCollapse: true,
      scrollX: true,
      scrollY: 400});

      EditTable({
        id : "table-fixed", //ID TABLE
        table : tablefixed, // VARIABEL DATA TABLE
        row_id : 0, // ROW ID SEBAGAI PARAMETER EDIT
        convert_html : false, // JIKA DI DALAM TD BERISI HTML SEPERTI <P></P> MAKA GUNAKAN TRUE
        rageEx : "", //UNTUK MEREPLACE DENGAN REGEX
        url : 'end point link ', //END POINT LINK
        url_load : 'Url Load Setelah Edit', // LOAD LINK JIKA SUDAH SELESAI MENGEDIT
        id_div_callback : 'Div Load', // DIV LOAD
        id_body_table : 'IdBody' //ID BODY <TBODY>
      });