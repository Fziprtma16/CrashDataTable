
#  Hi, I'm Fauzi! 👋
# Crash Data Table



Ini sebenar nya adalah Plugin DataTable yang sudah saya tambahkan beberapa tools untuk membantu kalian
beberapa fitur yang saya sediakan





## Data Table

![Data Table Screenshot](https://healthsys.my.id/crash/demo%20datatable.png)

## Detail Table
![Data Table Screenshot](https://healthsys.my.id/crash/detail%20table.png)

## Edit Table
![Data Table Screenshot](https://healthsys.my.id/crash/edit%20table.png)



## Start Table

```html 
<div class="table-responsive">
   <table id="table-dr" class="table table-bordered">
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
  ShortingRow : 1, //SELECT SHORT ROW
  TypeShorting :"asc" //TYPE SHOR , DESC OR ASC
},{searching:false});
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



## Usage

- Silahkan Masukan CSS yang tersedia di folder "DIST"

- Dan Masukan Script Di Folder "SRC"


## Optimizations

What optimizations did you make in your code? E.g. refactors, performance improvements, accessibility


## Features Soon

- Add Data
- Fixed Row
- Grouping Data
- Delete Data

