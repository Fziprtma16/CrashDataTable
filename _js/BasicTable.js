var tablerrrr = $("#table-dr").CrashDataTable({
    id: "table-dr", //ID TABLE
    ButtonHeader : true,
    ConfigButton : {
      Excel : true,
      Pdf:true,
      AddData : true,
      Copy : true
    },
    SearchFooter: true, //SEARCH FOOTER
    ResizeTable:true, //RESIZE TABLE
    ShortTable : true, //SHORT TABLE
    ShortingRow : 0, //SELECT SHORT ROW
    TypeShorting :"asc", //TYPE SHOR , DESC OR ASC
    TotalFormadd : 4, // TOTAL FORM
    ConfigForm : {
    Placehorder : [//SETTING PLACEHOLDER
    "Nama Perusahaan",
    "Contact Person",
    "Alamat",
    "Kota"
      ],id : [ //SETTING ID
        "AddName",
        "AddCp",
        "AddAlamat",
        "AddKota"
      ],UrlLinkEnd : "", //URL END POINT ADD FORM
      urlLoad:"", //URL LOAD PAGE ADD FORM
      idDivCall : ""} //URL LOAD DIV ADD FORM
  },{searching:true});


  EditTable({
    id : "table-dr", //ID TABLE
    table : tablerrrr, // VARIABEL DATA TABLE
    row_id : 0, // ROW ID SEBAGAI PARAMETER EDIT
    convert_html : false, // JIKA DI DALAM TD BERISI HTML SEPERTI <P></P> MAKA GUNAKAN TRUE
    rageEx : "", //UNTUK MEREPLACE DENGAN REGEX
    url : 'end point link ', //END POINT LINK
    url_load : 'Url Load Setelah Edit', // LOAD LINK JIKA SUDAH SELESAI MENGEDIT
    id_div_callback : 'Div Load', // DIV LOAD
    id_body_table : 'IdBody' //ID BODY <TBODY>
  });


  ShowDetailTable({
    id : "table-dr", // ID TABLE
    table : tablerrrr, //VARIABEL TABLE
    header_detail : 'Detail Data', //HEADER MODAL
    // custom_value : true, //CUSTOME VALUE
    // value_html : '<h1>Detail</h1>' //ISI VALUE
})

DeleteData({
    id : "table-dr",
    table : tablerrrr,
    WhereId : 0,
    EndPointNameDB : "table_perusahaan",
    UrlEndPoint : "",
    urlLoad : "",
    DivCallback : ""
})