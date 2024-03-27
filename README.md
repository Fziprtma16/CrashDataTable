## 🚀 CrashDataTable
CRUD dengan DataTable Lebih Cepat


## Data Table

![Data Table Screenshot](https://healthsys.my.id/crash/demo%20datatable.png)

## Detail Table
![Data Table Screenshot](https://healthsys.my.id/crash/detail%20table.png)

## Edit Table
![Data Table Screenshot](https://healthsys.my.id/crash/edit%20table.png)

## Delete Table
![Data Table Screenshot](https://healthsys.my.id/crash/delete%20datatable.png)

## Add Table
![Data Table Screenshot](https://healthsys.my.id/crash/add%20table.png)

## Start Load HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Demo Crash Data Table</title>
</head>
<link rel="stylesheet" href="dist/datatable.css">
<link rel="stylesheet" href="dist/jqueryui.css">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<link rel="stylesheet" href="dist/fixedcolumn.css">
<body>
    <div class="container" id="TableCrash">

    </div>

</body>
<script src="src/jquery.js"></script>
<script src="src/jqueryui.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
<script src="src/datatable.js"></script>
<script src="src/loadingoverlay.js"></script>
<script src="src/swalert.js"></script>
<script src="CrashDataTable1.0.0.js"></script>
</html>
```

## Start Table

```html
 <div class="table-responsive">
        <table id="table-dr" class="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Kode Id</th>
              <th>Name</th>
              <th>Contact Person</th>
              <th>Alamat</th>
              <th>Kota</th>
            </tr>
          </thead>
          <tbody id="IdBody">
              <tr>
                <td alias="KODERK">0001A</td>
                <td alias="Company">PT JAYA ABADI</td>
                <td alias="ContactPerson">FAUZI</td>
                <td alias="Address">JALAN KEMAN AJA</td>
                <td alias="City">JAKARTA</td>
              </tr>
              <tr>
                <td alias="KODERK">0002A</td>
                <td alias="Company">PT JAYA </td>
                <td alias="ContactPerson">FAUZI</td>
                <td alias="Address">JALAN KEMAN AJA</td>
                <td alias="City">JAKARTA</td>
              </tr>
              <tr>
                <td alias="KODERK">0003A</td>
                <td alias="Company">PT  ABADI</td>
                <td alias="ContactPerson">FAUZI</td>
                <td alias="Address">JALAN KEMAN AJA</td>
                <td alias="City">JAKARTA</td>
              </tr>
              <tr>
                <td alias="KODERK">0004A</td>
                <td alias="Company">PT JAYA ABADI HORAS</td>
                <td alias="ContactPerson">FAUZI</td>
                <td alias="Address">JALAN KEMAN AJA</td>
                <td alias="City">JAKARTA</td>
              </tr>
          </tbody>
          <tfoot>
            <th>Kode Id</th>
            <th>Name</th>
            <th>Contact Person</th>
            <th>Alamat</th>
            <th>Kota</th>
          </tfoot>
        </table>
      </div>  
```
Gunakan Attributte "ALIAS" sesuai isi row di database anda

## Load Data Content

```javascript
$( document ).ready(function() {
  LoadData('LoadTable.html','TableCrash');
});

```

## Usage/Examples

```javascript
var tablerrrr = $('#table-dt').CrashDataTable({
id: "table-dr", //ID TABLE
button : true, //BUTTON TRUE , EXCEL , PDF DAN ADD DATA
RowGroup : true, //Rows Group
GroupsColumn : 1, //Target Kolom
SearchFooter: true, //SEARCH FOOTER
ResizeTable:true, //RESIZE TABLE
ShortTable : true, //SHORT TABLE
ShortingRow : 0, //SELECT SHORT ROW
TypeShorting :"asc", //TYPE SHOR , DESC OR ASC
TotalFormadd : 4, // TOTAL FORM,
FixedCloumn : true, //FIXED COLUMN
StartFixedCloumn :2, //START FIXED COLUMN
ConfigForm : { //JIKA SETTING BUTTON TRUE
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

## Parameters

| Parameters             | Type                                                                |
| ----------------- | ------------------------------------------------------------------ |
| id | String |
| Button | bolean |
| SearchFooter | bolean |
| ResizeTable | bolean |
| ShortTable | bolean |
| ShortingRow | int |
| TypeShorting | string |
| TotalFormadd | int |
| ConfigForm | json |
| FixedCloumn | bolean |
| StartFixedCloumn | int |
| RowGroup | bolean |
| default DataTabale Parameters | default DataTabale Parameters |







## Usage

- Example In `index.html`
- Load In `LoadTable.html`
