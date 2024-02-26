function TableCrash(Params){
  var configParam = {};
  if (Params.ResizeTable) {
    ResizeTable(Params.id);
  }
  if(Params.Excel && Params.SearchFooter){
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
    extend : 'excel',
    text:'Export Excel',
    className : 'btn btn-outline-success',
    excelStyles:{
      template : 'blue_medium'
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
    extend : 'excel',
    text:'Export Excel',
    className : 'btn btn-outline-success',
    excelStyles:{
      template : 'blue_medium'
    }
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
}
return   $("#"+Params.id).DataTable(configParam);

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

function _buildModal(title, text, noBtnName, yesBtnName, yesBtnFunc) {
    var modal = document.createElement('div')
    modal.setAttribute('class', 'modal fade')
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
                updateField(Kode,_id,urlEdit,newData, (err) => {
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

const updateField = (kodeprod,id,url,data,callback) =>{
  console.log(data);
  if (data.parameters == "") {
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
