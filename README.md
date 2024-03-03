# Crash Data Table



## 🚀 Semoga Memudahkan Kalian ^_^
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


## Usage/Examples

```javascript
var tablerrrr = TableCrash({
id: "table-dr", //ID TABLE
Excel: true, // BUTTON EXCEL
SearchFooter: true, //SEARCH FOOTER
ResizeTable:true, //RESIZE TABLE
ShortTable : true, //SHORT TABLE
ShortingRow : 0, //SELECT SHORT ROW
TypeShorting :"asc", //TYPE SHOR , DESC OR ASC
ButtonAddData : true, //BUTTON ADD DATA
TotalFormadd : 4, // TOTAL FORM
ConfigForm : {Placehorder : [//SETTING PLACEHOLDER
"Nama Perusahaan",
"Contact Person",
"Alamat",
"Kota"
],id : [ //SETTING ID
  "AddName",
  "AddCp",
  "AddAlamat",
  "AddKota"
],urlEndPoint : "", //URL END POINT ADD FORM
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



## Usage

- Example In `index.html`


## Features Soon

- Fixed Row
- Grouping Data

