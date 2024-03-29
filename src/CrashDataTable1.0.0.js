$.fn.CrashDataTable =  function(Params,settingData,AddData){
    // console.log(settingData);
    const formValues = {};
    var configParam = {};
    var shortData = {};
    var ExportDataPDF = {};
    var RowsGroup = {};
    var AddButton = {};
    var FixedCloumn = {};
    var TotalForm = Params.TotalFormadd;
    var ConfigAddForm = Params.ConfigForm;
    var StartFixed = Params.StartFixedCloumn;
    console.log(ConfigAddForm);

    if (Params.ResizeTable) {
      ResizeTable(Params.id);
    }
    if (Params.ShortTable) {
      shortData = {
        "iDisplayLength": -1,
        "aaSorting": [[ Params.ShortingRow,  Params.TypeShorting ]]
      }
    }


    if (Params.RowGroup) {
      RowsGroup = {
        columnDefs: [{ visible: false, targets: Params.GroupsColumn }],
           order: [[Params.GroupsColumn, 'asc']],drawCallback: function (settings) {
               var api = this.api();
               var rows = api.rows({ page: 'current' }).nodes();
               var last = null;

               api.column(Params.GroupsColumn, { page: 'current' })
                   .data()
                   .each(function (group, i) {
                       if (last !== group) {
                           $(rows)
                               .eq(i)
                               .before(
                                   '<tr class="group bg-success text-dark" data-f-color="f9f9f9" data-fill-color="000000" ><td colspan="6">' +
                                       group +
                                       '</td></tr>'
                               );

                           last = group;
                       }
                   });
           }
      }
    }

    if(Params.FixedCloumn){
      FixedCloumn={
        fixedColumns: {
          start: StartFixed
      }
      }
    }
    if(Params.button){
      configParam = {
      dom: 'Bfrtip',
      buttons : {

        dom : {
          button:{
            className:'btn'
          }
        }
      ,
    buttons: [
    {

      text:'Export Excel',
      className : 'btn btn-outline-success',
    action:function(){
  ExportExcelTable(Params.id,'Export Excel.xlsx');

    }
    },
    {
      extend : 'pdf',
      text:'Export PDF',
      className : 'btn btn-outline-danger',
    },
      {
        text:'Add Data',
        className : 'btn btn-outline-primary',
        action: function ( e, dt, node, config ) {
          console.log(e);
          var headerModal = 'Add Data';
          var valueDetail = '';
          for (let i = 0; i < TotalForm; i++) {
            placeholder = ConfigAddForm.Placehorder[i];
            idForm = ConfigAddForm.id[i];
            valueDetail = valueDetail +  '<div class="col-lg-12">' +
            '<input class="form-control" placeholder="'+placeholder+'" id="'+idForm+i+'">' +
            '</div><br> ';

          }



          (new Modal(
            headerModal,            // title
            valueDetail, // text
            'Close',              // noBtnName
            'Confirm',            // yesBtnName
            ()=>{
              const urlBackEnd  = ConfigAddForm.UrlLinkEnd;
              const urlLoad = ConfigAddForm.urlLoad;
              const idDiv = ConfigAddForm.idDivCall;
              for (let x = 0; x < TotalForm; x++) {
                const idForm = ConfigAddForm.id[x];
                const placeholder = ConfigAddForm.Placehorder[x];
                const inputValue = document.getElementById(idForm+x).value;
                formValues[idForm] = inputValue;
              }
                    // console.log(formValues);
              $.ajax({
                type: 'POST',
                url: urlBackEnd,
                data: formValues,
              }).success(function(success) {
                Swal.fire({
                  title: "Berhasil!",
                  text: "Anda Berhasil Input Data",
                  icon: "success"
                });
                for (let i = 0; i < TotalForm; i++) {
                  const idForm = ConfigAddForm.id[i];
                  const placeholder = ConfigAddForm.Placehorder[i];
                  const inputValue = document.getElementById(idForm+i).value = '';
                  formValues[idForm] = inputValue;
                }
                DeleteModal();
                  LoadData(urlLoad,idDiv);
              })
              // console.log(formValues);

            },  // yesBtnFunction
            )).show()
      }
      }

  ],

    },


    initComplete: function () {
        this.api()
        .columns()
        .every(function () {
            let column = this;
            let title = column.footer().textContent;

            // Create input element
            let input = document.createElement('input');
            input.classList.add('form-control-sm');
            input.style.width = 'auto';
            input.placeholder = title;
            column.footer().replaceChildren(input);

            // Event listener for user input
            input.addEventListener('keyup', () => {
                if (column.search() !== this.value) {
                    column.search(input.value).draw();
                }
            });
        });
    }
    };
  }else if (Params.Excel) {
      configParam = {
      dom: 'Bfrtip',
      buttons : {

        dom : {
          button:{
            className:'btn'
          }
        }
      ,
    buttons: [
    {

      text:'Export Excel',
      className : 'btn btn-outline-success',
      action : function () {
        ExportExcelTable(Params.id,'Export Excel.xlsx');
      }
    }
      ]
    }
  };
  }else if(Params.Pdf){
    configParam = {
    dom: 'Bfrtip',
    buttons : {

      dom : {
        button:{
          className:'btn'
        }
      }
    ,
  buttons: [
  {
    extend : 'pdf',
    text:'Export PDF',
    className : 'btn btn-outline-danger',

  }
    ]
  }
  };
  }else if (Params.SearchFooter) {
      configParam = {initComplete: function () {
          this.api()
          .columns()
          .every(function () {
              let column = this;
              let title = column.footer().textContent;

              // Create input element
              let input = document.createElement('input');
              input.classList.add('form-control-sm');
              input.style.width = 'auto';
              input.placeholder = title;
              column.footer().replaceChildren(input);

              // Event listener for user input
              input.addEventListener('keyup', () => {
                  if (column.search() !== this.value) {
                      column.search(input.value).draw();
                  }
              });
          });
      }
    }
  }else if(Params.ButtonAddData){
    configParam = {
      dom: 'Bfrtip',
      buttons : {

        dom : {
          button:{
            className:'btn'
          }
        }
      ,
    buttons: [
      {
        text:'Add Data',
        className : 'btn btn-outline-primary',
        action: function ( e, dt, node, config ) {
          var headerModal = 'Add Data';
          var valueDetail = '';
          for (let i = 0; i < TotalForm; i++) {
            placeholder = ConfigAddForm.Placehorder[i];
            idForm = ConfigAddForm.id[i];
            valueDetail = valueDetail +  '<div class="col-lg-12">' +
            '<input class="form-control" placeholder="'+placeholder+'" id="'+idForm+i+'">' +
            '</div><br> ';

          }

          (new Modal(
            headerModal,            // title
            valueDetail, // text
            'Close',              // noBtnName
            'Confirm',            // yesBtnName
            ()=>{

              const urlEnd  = ConfigAddForm.UrlEndPoint;
              const urlLoad = ConfigAddForm.urlLoad;
              const idDiv = ConfigAddForm.idDivCall;
              for (let i = 0; i < TotalForm; i++) {
                const idForm = ConfigAddForm.id[i];
                const placeholder = ConfigAddForm.Placehorder[i];
                const inputValue = document.getElementById(idForm+i).value;
                formValues[idForm] = inputValue;
              }
              $.ajax({
                type: 'POST',
                url: urlEnd,
                data: formValues,
              }).success(function(success) {
                Swal.fire({
                  title: "Berhasil!",
                  text: "Anda Berhasil Input Data",
                  icon: "success"
                });
                DeleteModal();
                  LoadData(urlLoad,idDiv);
              })
              // console.log(formValues);

            },  // yesBtnFunction
            )).show()
      }
      }
      ]
    }
  };
  }
  let combined = { ...configParam, ...settingData, ...shortData, ...AddButton, ...FixedCloumn, ...RowsGroup };
  //console.log(combined);
  return   this.DataTable(combined);

  }

  function CreateDelete(Data){
  const table = document.getElementById(Data);
    // Mendapatkan elemen tbody dari tabel
  const tbody = table.querySelector('tbody');
  const thead = table.querySelector('thead');
  const tfoot = table.querySelector('tfoot');
  // Mendapatkan semua baris dalam elemen tbody
  const rows = tbody.querySelectorAll('tr');
  const headerRow = thead.querySelector('tr');
  const footerRow = tfoot.querySelector('tr');
  const newHeaderCell1 = document.createElement('th');
  const newFooterCell1 = document.createElement('th');
    newHeaderCell1.textContent = 'Action';
    newFooterCell1.textContent = 'Action';
    headerRow.appendChild(newHeaderCell1);
    footerRow.appendChild(newFooterCell1);
  // Iterasi melalui setiap baris dan menambahkan elemen td
  rows.forEach((row,index) => {
  const newCell = document.createElement('td');
  newCell.innerHTML = '<img class="icon-delete" style="width:30px;" id="hapus'+index+'" src="https://cdn-icons-png.flaticon.com/128/10336/10336279.png" />';
  row.appendChild(newCell);
  });

  }


  function ResizeTable(Id) {
      $("#"+Id+" th").css('cursor','col-resize');
      var pressed = false;
      var start = undefined;
      var startX, startWidth;

      $("#"+Id+" th").mousedown(function(e) {

          start = $(this);
          pressed = true;
          startX = e.pageX;
          startWidth = $(this).width();
          $(start).addClass("resizing");
                console.log(start);

      });

      $(document).mousemove(function(e) {
          if(pressed) {
              $(start).width(startWidth+(e.pageX-startX));
          }
      });

      $(document).mouseup(function() {
          if(pressed) {
              $(start).removeClass("resizing");
              pressed = false;
          }
      });
  }


  function Modal(title, text, noBtnName='Close', yesBtnName='', yesBtnAction=()=>{}) {
      var wrap = _buildModal(title, text, noBtnName, yesBtnName, yesBtnAction)
      document.body.append(wrap)
      this.bsModal = bootstrap.Modal.getOrCreateInstance(wrap);
      this.show = function() {
          this.bsModal.show();
      }
  }

  function DeleteModal(){
    $( '.modal' ).remove();
    $(".modal-custom").remove();
    $( '.modal-backdrop' ).remove();
    $('.modal-dialog').remove();
    $('body').removeClass( "modal-open" );
    $('body').removeAttr( 'style' );
  }

  function _buildModal(title, text, noBtnName, yesBtnName, yesBtnFunc) {
      var modal = document.createElement('div')
      modal.setAttribute('class', 'modal fade modal-custom')
      modal.setAttribute('tabindex', '-1')
      modal.setAttribute('aria-labelledby', 'modalLabel')
      modal.setAttribute('aria-hidden', 'true')
      var modDialog = document.createElement('div')
      modDialog.setAttribute('class', 'modal-dialog')
      var modContent = document.createElement('div')
      modContent.setAttribute('class', 'modal-content')
      var header = _buildModalHeader(title)
      modContent.append(header)
      var body = document.createElement('div')
      body.setAttribute('class', 'modal-body')
      body.innerHTML  = text
      modContent.append(body)
      var footer = _buildModalFooter(noBtnName, yesBtnName, yesBtnFunc)
      modContent.append(footer)
      modDialog.append(modContent)
      modal.append(modDialog)
      return modal
  }

  function _buildModalHeader(text) {
      var header = document.createElement('div');
      header.setAttribute('class', 'modal-header');
      header.setAttribute('style', 'border-bottom: none;');

      var title = document.createElement('h5');
      title.setAttribute('class', 'modal-title');
      title.setAttribute('id', 'modalLabel');
      title.innerText = text

      var closeBtn = document.createElement('button');
      closeBtn.setAttribute('class', 'btn-close');
      closeBtn.setAttribute('data-bs-dismiss', 'modal');
      closeBtn.setAttribute('aria-label', 'Close');

      header.append(title)
      header.append(closeBtn)
      return header
  }

  function _buildModalFooter(noBtnName, yesBtnName, yesBtnFunc) {
      var footer = document.createElement('div')
      footer.setAttribute('class', 'modal-footer')
      footer.setAttribute('style', 'border-top: none;')

      var noBtn = document.createElement('button')
      noBtn.setAttribute('type', 'button')
      noBtn.setAttribute('class', 'btn btn-secondary')
      noBtn.setAttribute('data-bs-dismiss', 'modal')
      noBtn.innerText = noBtnName
      footer.append(noBtn)

      if (yesBtnName && yesBtnFunc){
          var yesBtn = document.createElement('button')
          yesBtn.setAttribute('type', 'button')
          yesBtn.setAttribute('class', 'btn btn-primary')
          yesBtn.innerText = yesBtnName
          yesBtn.addEventListener('click', yesBtnFunc)
          footer.append(yesBtn)
      }
      return footer
  }



  function ShowDetailTable(Params){
    table = Params.table;
    idTable = Params.id;
    headerModal = Params.header_detail;
    customDetail = Params.custom_value;
    valueDetail = Params.value_html;
    $('#'+idTable+' tbody').on('contextmenu', 'tr', function(e) {
      e.preventDefault();
      if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
      } else {

        table.$('tr.selected').removeClass('selected');
        $(this).addClass('selected');

        var DataRow = table.rows('.selected').data();
        var ValueModal = "";
        if (DataRow.length >= 1) {
          for (var i = 0; i < DataRow.length; i++) {
            //alert("Name: " + oData[i][0] + " : " + oData[i][1] + " : " + oData[i][2]);
            //  loaddiv("lab/pendaftaran/isidata_verifikasi.php?value=" + oData[i][1]);
              ValueModal = ValueModal + "<h3>"+DataRow[i][1]+"</h3><h3>"+DataRow[i][2]+"</h3>";

          }
        } else {
          alert("Please select member data.");
        }

        if (customDetail) {
          (new Modal(
              headerModal,            // title
              valueDetail, // text
              'Close',              // noBtnName
              'Confirm',            // yesBtnName
              ()=>{return false;},  // yesBtnFunction
              )).show()
        }else{
          (new Modal(
              headerModal,            // title
              ValueModal  , // text
              'Close',              // noBtnName
              'Confirm',            // yesBtnName
              ()=>{return false;},  // yesBtnFunction
              )).show()
        }

      }

    });

  }







  function EditTable(Params){
    var idTable = Params.id;
    var table = Params.table;
    var rowId = Params.row_id;
    var convertHtml = Params.convert_html;
    var codeRageEx = Params.rageEx;
    var urlEdit = Params.url;
    var urlLoad = Params.url_load;
    var idDiv = Params.id_div_callback;
    $("#"+idTable+" tbody").on('dblclick', 'td', function () {
      var parameters = $(this).attr("alias");
      var myCell = table.cell(this);
      var column = myCell["0"][0].column;
      var cell = myCell["0"][0].row;
      var _id = myCell.context[0].aoData[cell]._aData[rowId];
      var field = myCell.context[0].aoColumns[column].sTitle;
      var data = myCell.data();
      if (convertHtml) {
        var Kode = _id.replace(codeRageEx, '');
      }else{
        var Kode = _id;
      }
      console.log(Kode);
      console.log(parameters);
      var searchData = data.toString();

      var tbl = document.getElementById(Params.id_body_table);
      var frm = tbl.getElementsByTagName('input');
      if (frm.length > 0) {
        Swal.fire({
            title: "Silahkan Selesaikan Edit Table Terlebih Dahulu",
            text: "",
            type: 'error',
          }).then(function(result) {
            if (true) {
                $('input').focus();
            }
          });

          return false;
      }
      if (searchData.search('<input') === -1) {
        myCell.data('<input type="text" class="form-control-sm" id="input' + _id + '" value="' + data + '"/>');
        var input = document.getElementById(`input${_id}`);

          input.addEventListener("keyup", function (event) {

              if (event.key === "Enter") {
                event.preventDefault();
                var newData = {};
                newData["value"] = input.value;
                newData["parameters"] = parameters;
                newData["code"] = Kode;
                  updateField__(Kode,_id,urlEdit,newData,parameters, (err) => {
                    if (err)   Swal.fire({
                        title: err,
                        text: "",
                        type: 'error',
                      }).then(function(result) {
                        if (true) {
                          return false;
                        }
                      });
                      else {
                        Swal.fire({
                          title: "Berhasil Update",
                          text: "",
                          type: 'error',
                        }).then(function(result) {
                          if (true) {
                          LoadData(urlLoad,idDiv);
                          }
                        })
                      }
                  });
              }
          });
      }
    });
  }

  const updateField__ = (kodeprod,id,url,data,parameters,callback) =>{
    console.log(data);
    if (parameters == "") {
      Swal.fire({
          title: err,
          text: "",
          type: 'Tidak Dapat Mengedit Data !',
        }).then(function(result) {
          if (true) {
            return false;
          }
        });
    }
    $.ajax({
      type: 'POST',
      url: url,
      data: data,
    }).success(function(dataisi1) {
      callback(null);
    }).error(function(err){
      callback(err);
    });
  }


  function LoadData(Url,idDiv){
    $.LoadingOverlay("show");
    $('#'+idDiv).empty();
    $("#"+idDiv).load(Url,function(response,status,xhr){
      if (status == "error") {
        $.LoadingOverlay("hide");
        var msg = "Sorry but there was an error: ";
        Swal.fire({
          title: msg + xhr.status + " " + xhr.statusText,
          text: "",
          type: 'error',
        }).then(function(result) {
          if (true) {
            return false;
          }
        })
      }else{
        $.LoadingOverlay("hide");
      }
    });
  }


  function DeleteData(Data){
    console.log(Data);
    var id = Data.id;
    var rowId = Data.WhereId;
    var table = Data.table;
    var url = Data.UrlEndPoint;
    var database = Data.EndPointNameDB;
    var urlLoad = Data.urlLoad;
    var DivCall = Data.DivCallback;
    CreateDelete(id);
  $('#'+Data.id+' tbody').on('click', 'tr img.icon-delete', function () {

    const row = this.closest('tr');
    const cellData = row.cells[rowId].textContent;
    console.log(cellData);

    Swal.fire({
      title: "Are you sure?",
      text: "Anda Akan Menghapus Data Ini !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        data = {
          database : database,
          id : cellData
        }
        $.ajax({
          type: 'POST',
          url: url,
          data: data,
        }).success(function(success) {
          Data.table
        .row($(this).parents('tr'))
        .remove()
        .draw();
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
          LoadData(urlLoad,DivCall);
        }).error(function(err){
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been Not deleted.",
            icon: "error"
          });
        });

      }
    });

  });
  }

  function ExportExcelTable(tableId,NamaFile){
    const table = document.getElementById(tableId);
   const rows = table.getElementsByTagName('tr');
   for (let i = 0; i < rows.length; i++) {
      const rowData = [];
      const cells = rows[i].getElementsByTagName('td');
      if (i % 2 !== 0) {
      for (let j = 0; j < cells.length; j++) {
            cells[j].setAttribute('data-fill-color', 'e2fbff');
      }
    }else{
      for (let j = 0; j < cells.length; j++) {
          cells[j].setAttribute('data-fill-color', 'f2f2f2');
      }
    }

    }
    TableToExcel.convert(document.getElementById(tableId), {
  name: NamaFile,
  sheet: {
    name: "Sheet 1"
  }
  });
  }
