## 🚀 CrashDataTable
Tools Modifikasi DataTable Untuk Handle Ribuan Data , CRUD , Styling ,Custom Export PDF Dan Excel 


## Load Data Content

```javascript
$( document ).ready(function() {
  LoadData('LoadTable.html','TableCrash');
});

```

## Add Data

Pada Saat Add Table Variabel End Point Ada Akan Menghasilkan

```json
  {
      AddName : "Value Name",
      AddCp : "Value CP",
      AddAlamat : "Value Alamat",
      AddKota : "Value Kota"
  }
```

## Edit table

```javascript
EditTable({
  id : "ID Table", //ID TABLE
  table : tablerrrr, // VARIABEL DATA TABLE
  row_id : 0, // ROW ID SEBAGAI PARAMETER EDIT
  convert_html : false, // JIKA DI DALAM TD BERISI HTML SEPERTI <P></P> MAKA GUNAKAN TRUE
  rageEx : "", //UNTUK MEREPLACE DENGAN REGEX
  url : 'end point link ', //END POINT LINK
  url_load : 'Url Load Setelah Edit', // LOAD LINK JIKA SUDAH SELESAI MENGEDIT
  id_div_callback : 'Div Load', // DIV LOAD
  id_body_table : 'Id Body Table' //ID BODY <TBODY>
});
```
Pada Saat Add Table Variabel End Point Ada Akan Menghasilkan

```json
  {
      parameters : "Nama Parameters Data Yang Anda Akan Edit",
      value : "Value Data Yang Anda Update",
      code : "Code Parameter 'Where' Pada Saat Edit"
  }
```


## Detail table

```javascript
ShowDetailTable({
    id : "table-dr", // ID TABLE
    table : tablerrrr, //VARIABEL TABLE
    header_detail : 'Detail Data', //HEADER MODAL
    custom_value : true, //CUSTOME VALUE
    value_html : '<h1>Detail</h1>' //ISI VALUE
})
```

gunakan Click Kanan Ke Row Yang di Pilih Untuk Melihat Detail

## Delete table

```javascript
DeleteData({
    id : "table-dr", //ID TABLE
    table : tablerrrr, //VARIABEL TABLE
    WhereId : 0, //WHERE ID TO DELETE DATABASE
    EndPointNameDB : "table_perusahaan", //NAME DATABASE
    UrlEndPoint : "", //URL ENDPOINT
    urlLoad : "", //URL LOAD
    DivCallback : "" //DIV LOAD
})
```

Pada Saat Add Table Variabel End Point Ada Akan Menghasilkan

```json
  {
      database : "Nama Database Anda",
      id : "Id yang akan anda Hapus"
  }
```



## Usage

- Example In `index.html`
- Load In `LoadTable.html`
