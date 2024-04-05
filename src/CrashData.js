$.fn.CrashDataTable = function(e, t, a) {
    const o = {};
    var n = {};
    var l = {};
    var r = {};
    var s = {};
    var i = {};
    var d = {};
    var CbTables = {};
    var ConfBExcel = {};
    var ConfBPdf = {};
    var ConfBAddData = {};
    var ConfCopyData = {};
    var ICS = {};
    var c = e.TotalFormadd;
    var u = e.ConfigForm;
    var m = e.StartFixedCloumn;
    var ConfB = e.ConfigButton;
    var ConfRowspan = e.GroupRowSpan;
    var IC = e.InfiniteScroll;
    var ConfInfinite = e.InfiniteConfig;
    var WPT = e.WordBreakTable;

    if(WPT){
        var v = 'table#custom-table tbody td {word-break: break-word;vertical-align: top;}';
         AStyleTable(v);
    }
    if(IC){
    ICS = {
        serverSide:true,
        processing:true,
        scroller: {
            loadingIndicator: true
        },
        scrollY:200,
        deferRender:true,
        ajax : {
          url : ConfInfinite.DataAjax,
          type: 'get',
          dataSrc : function(data){
            // console.log(data);
            $("#query").html('').append(data.query);
             return data.aaData;
          },
          columns:ConfInfinite.ColoumnData
        }
    }
    }

    if(e.ButtonHeader){

        if (ConfB.Excel) {
            ConfBExcel = {
                text: "Export Excel",
                    className: "btn btn-outline-success",
                    action: function() {
                        ExportExcelTable(e.id, "Export Excel.xlsx")
                    }
            }
        }

        if(ConfB.Copy){
            ConfCopyData = {
                text: "Copy Data",
                    className: "btn btn-outline-info",
                    action: function() {
                        var urlField = document.getElementById(e.id)
                        var range = document.createRange()
                        range.selectNode(urlField)
                        window.getSelection().addRange(range)
                        document.execCommand('copy');
                        Swal.fire({
                            title: "Copy Data",
                            text: "Silahkan Paste Data",
                            icon: "success"
                        });

                    }
            }
        }

        if(ConfB.Pdf){
            ConfBPdf = {
                text: "Export PDF",
                className: "btn btn-outline-danger",
                action : function(){
                    var doc = new jsPDF()
                    doc.autoTable({
                        html: $('#'+e.id).get(0),
                        headStyles: {
                          halign: "center",
                          valign: "middle",
                        },
                        bodyStyles: {
                          halign: "center",
                        },
                        margin: {
                          top: 30
                        }
                      });
                    // doc.autoTable({ html: '#'+e.id })
                    doc.save('Export PDF.pdf')
                }
            }
        }

        if(ConfB.AddData){
            ConfBAddData = {
                text: "Add Data",
                className: "btn btn-outline-primary",
                action: function(e, t, a, n) {
                    console.log(e);
                    var l = "Add Data";
                    var r = "";
                    for (let e = 0; e < c; e++) {
                        placeholder = u.Placehorder[e];
                        idForm = u.id[e];
                        r = r + '<div class="col-lg-12">' + '<input class="form-control" placeholder="' + placeholder + '" id="' + idForm + e + '">' + "</div><br> "
                    }
                    new Modal(l, r, "Close", "Confirm", (() => {
                        const e = u.UrlLinkEnd;
                        const t = u.urlLoad;
                        const a = u.idDivCall;
                        for (let e = 0; e < c; e++) {
                            const t = u.id[e];
                            const a = u.Placehorder[e];
                            const n = document.getElementById(t + e).value;
                            o[t] = n
                        }
                        $.ajax({
                            type: "POST",
                            url: e,
                            data: o
                        }).success((function(e) {
                            Swal.fire({
                                title: "Berhasil!",
                                text: "Anda Berhasil Input Data",
                                icon: "success"
                            });
                            for (let e = 0; e < c; e++) {
                                const t = u.id[e];
                                const a = u.Placehorder[e];
                                const n = document.getElementById(t + e).value = "";
                                o[t] = n
                            }
                            DeleteModal();
                            LoadData(t, a)
                        }))
                    })).show()
                }
            }
        }

        CbTables = {
            dom: "Bfrtip",
            buttons: {
                dom: {
                    button: {
                        className: "btn"
                    }
                },
                buttons: [ConfBExcel,ConfBPdf,ConfCopyData,ConfBAddData ]
            }
        }
    }


    if (e.ResizeTable) {
        ResizeTable(e.id)
    }

    if (e.ShortTable) {
        l = {
            iDisplayLength: -1,
            aaSorting: [
                [e.ShortingRow, e.TypeShorting]
            ]
        }
    }

    if (e.RowGroup) {

        var ConfGroup = e.ConfigGroup;
       // console.log(e.ConfigGroup.GroupsColumn);
       if(ConfGroup.DropdownGroup){
        s = {
            columnDefs: [{
                visible: false,
                targets: ConfGroup.GroupsColumn
            }],
            order: [
                [ConfGroup.GroupsColumn, "asc"]
            ],
            rowGroup: {
                // Uses the 'row group' plugin
                dataSrc: ConfGroup.GroupsColumn,
                startRender: function(rows, group) {
                  var collapsed = !!collapsedGroups[group];

                  rows.nodes().each(function(r) {
                    // console.log(r);
                    r.style.display = '';
                    if (collapsed) {
                      r.style.display = 'none';
                      svgdata =  '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#ffff"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-square-rounded-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" /><path d="M15 12h-6" /><path d="M12 9v6" /></svg>';

                    }else{
                        svgdata =  '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#ffff"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-square-rounded-minus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 12h6" /><path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" /></svg>';
                    }
                  });

                  return $('<tr/>')
          .append('<td colspan="'+ConfGroup.GroupRowSpan+'" class="group bg-secondary text-white collapse-crash">'+svgdata+'  '
           + group + ' (' + rows.count() + ')</td>')
          .attr('data-name', group)
          .toggleClass('collapsed', collapsed);
                }
                }
        }

       }else{
        s = {
            columnDefs: [{
                visible: false,
                targets: ConfGroup.GroupsColumn
            }],
            order: [
                [ConfGroup.GroupsColumn, "asc"]
            ],
            drawCallback: function(t) {
                var a = this.api();
                var o = a.rows({
                    page: "current"
                }).nodes();
                var n = null;
                a.column(ConfGroup.GroupsColumn, {
                    page: "current"
                }).data().each((function(e, t) {
                    if (n !== e) {
                        $(o).eq(t).before('<tr class="group bg-secondary text-white" data-f-color="f9f9f9" data-fill-color="000000" ><td style="font-size: 15px;" colspan="'+ConfGroup.GroupRowSpan+'">' + e + "</td></tr>");
                        n = e
                    }
                }))
            }
        }
       }

    }

    if (e.FixedCloumn) {
        d = {
            fixedColumns: {
                start: m
            }
        }
    }

    if (e.button) {
        n = {
            dom: "Bfrtip",
            buttons: {
                dom: {
                    button: {
                        className: "btn"
                    }
                },
                buttons: [{
                    text: "Export Excel",
                    className: "btn btn-outline-success",
                    action: function() {
                        ExportExcelTable(e.id, "Export Excel.xlsx")
                    }
                }, {
                    text: "Export PDF",
                    className: "btn btn-outline-danger",
                    action : function(){
                        var doc = new jsPDF()
                        doc.autoTable({ html: '#'+e.id })
                        doc.save('CrashDataTable.pdf')
                    }
                }, {
                    text: "Add Data",
                    className: "btn btn-outline-primary",
                    action: function(e, t, a, n) {
                        console.log(e);
                        var l = "Add Data";
                        var r = "";
                        for (let e = 0; e < c; e++) {
                            placeholder = u.Placehorder[e];
                            idForm = u.id[e];
                            r = r + '<div class="col-lg-12">' + '<input class="form-control" placeholder="' + placeholder + '" id="' + idForm + e + '">' + "</div><br> "
                        }
                        new Modal(l, r, "Close", "Confirm", (() => {
                            const e = u.UrlLinkEnd;
                            const t = u.urlLoad;
                            const a = u.idDivCall;
                            for (let e = 0; e < c; e++) {
                                const t = u.id[e];
                                const a = u.Placehorder[e];
                                const n = document.getElementById(t + e).value;
                                o[t] = n
                            }
                            $.ajax({
                                type: "POST",
                                url: e,
                                data: o
                            }).success((function(e) {
                                Swal.fire({
                                    title: "Berhasil!",
                                    text: "Anda Berhasil Input Data",
                                    icon: "success"
                                });
                                for (let e = 0; e < c; e++) {
                                    const t = u.id[e];
                                    const a = u.Placehorder[e];
                                    const n = document.getElementById(t + e).value = "";
                                    o[t] = n
                                }
                                DeleteModal();
                                LoadData(t, a)
                            }))
                        })).show()
                    }
                }]
            },
            initComplete: function() {
                this.api().columns().every((function() {
                    let e = this;
                    let t = e.footer().textContent;
                    let a = document.createElement("input");
                    a.classList.add("form-footer");
                    a.style.width = "auto";
                    a.placeholder = t;
                    e.footer().replaceChildren(a);
                    a.addEventListener("keyup", (() => {
                        if (e.search() !== this.value) {
                            e.search(a.value).draw()
                        }
                    }))
                }))
            }
        }
    } else if (e.Excel) {
        n = {
            dom: "Bfrtip",
            buttons: {
                dom: {
                    button: {
                        className: "btn"
                    }
                },
                buttons: [{
                    text: "Export Excel",
                    className: "btn btn-outline-success",
                    action: function() {
                        ExportExcelTable(e.id, "Export Excel.xlsx")
                    }
                }]
            }
        }
    } else if (e.Pdf) {
        n = {
            dom: "Bfrtip",
            buttons: {
                dom: {
                    button: {
                        className: "btn"
                    }
                },
                buttons: [{
                    text: "Export PDF",
                    className: "btn btn-outline-danger",
                    action : function(){
                        var doc = new jsPDF()
                        doc.autoTable({ html: '#'+e.id })
                        doc.save('CrashDataTable.pdf')
                    }
                }]
            }
        }
    } else if (e.SearchFooter) {
        n = {
            initComplete: function() {
                this.api().columns().every((function() {
                    let e = this;
                    let t = e.footer().textContent;
                    let a = document.createElement("input");
                    a.classList.add("form-footer");
                    a.style.width = "auto";
                    a.placeholder = t;
                    e.footer().replaceChildren(a);
                    a.addEventListener("keyup", (() => {
                        if (e.search() !== this.value) {
                            e.search(a.value).draw()
                        }
                    }))
                }))
            }
        }
    } else if (e.ButtonAddData) {
        n = {
            dom: "Bfrtip",
            buttons: {
                dom: {
                    button: {
                        className: "btn"
                    }
                },
                buttons: [{
                    text: "Add Data",
                    className: "btn btn-outline-primary",
                    action: function(e, t, a, n) {
                        var l = "Add Data";
                        var r = "";
                        for (let e = 0; e < c; e++) {
                            placeholder = u.Placehorder[e];
                            idForm = u.id[e];
                            r = r + '<div class="col-lg-12">' + '<input class="form-control" placeholder="' + placeholder + '" id="' + idForm + e + '">' + "</div><br> "
                        }
                        new Modal(l, r, "Close", "Confirm", (() => {
                            const e = u.UrlEndPoint;
                            const t = u.urlLoad;
                            const a = u.idDivCall;
                            for (let e = 0; e < c; e++) {
                                const t = u.id[e];
                                const a = u.Placehorder[e];
                                const n = document.getElementById(t + e).value;
                                o[t] = n
                            }
                            $.ajax({
                                type: "POST",
                                url: e,
                                data: o
                            }).success((function(e) {
                                Swal.fire({
                                    title: "Berhasil!",
                                    text: "Anda Berhasil Input Data",
                                    icon: "success"
                                });
                                DeleteModal();
                                LoadData(t, a)
                            }))
                        })).show()
                    }
                }]
            }
        }
    }
    let f = {
        ...n,
        ...t,
        ...l,
        ...i,
        ...d,
        ...s,
        ...CbTables,
        ...ICS
    };
    return this.DataTable(f)
};


function AStyleTable(a){
    var css = document.createElement('style');
    css.type = 'text/css';
    if (css.styleSheet)
        css.styleSheet.cssText = a;
    else
        css.appendChild(document.createTextNode(a));
    document.getElementsByTagName("head")[0].appendChild(css);
}

function CreateDelete(e) {
    const t = document.getElementById(e);
    const a = t.querySelector("tbody");
    const o = t.querySelector("thead");
    const n = t.querySelector("tfoot");
    const l = a.querySelectorAll("tr");
    const r = o.querySelector("tr");
    const s = n.querySelector("tr");
    const i = document.createElement("th");
    const d = document.createElement("th");
    i.textContent = "Delete";
    d.textContent = "";
    r.appendChild(i);
    s.appendChild(d);
    l.forEach(((e, t) => {
        const a = document.createElement("td");
        a.innerHTML = '<svg class="icon-delete" id="hapus' + t + '" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="#fa0000"  class="icon icon-tabler icons-tabler-filled icon-tabler-square-rounded-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2l.324 .001l.318 .004l.616 .017l.299 .013l.579 .034l.553 .046c4.785 .464 6.732 2.411 7.196 7.196l.046 .553l.034 .579c.005 .098 .01 .198 .013 .299l.017 .616l.005 .642l-.005 .642l-.017 .616l-.013 .299l-.034 .579l-.046 .553c-.464 4.785 -2.411 6.732 -7.196 7.196l-.553 .046l-.579 .034c-.098 .005 -.198 .01 -.299 .013l-.616 .017l-.642 .005l-.642 -.005l-.616 -.017l-.299 -.013l-.579 -.034l-.553 -.046c-4.785 -.464 -6.732 -2.411 -7.196 -7.196l-.046 -.553l-.034 -.579a28.058 28.058 0 0 1 -.013 -.299l-.017 -.616c-.003 -.21 -.005 -.424 -.005 -.642l.001 -.324l.004 -.318l.017 -.616l.013 -.299l.034 -.579l.046 -.553c.464 -4.785 2.411 -6.732 7.196 -7.196l.553 -.046l.579 -.034c.098 -.005 .198 -.01 .299 -.013l.616 -.017c.21 -.003 .424 -.005 .642 -.005zm-1.489 7.14a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z" fill="#fa0000" stroke-width="0" /></svg>'
        // a.innerHTML = '<img class="icon-delete" style="width:30px;" id="hapus' + t + '" src="https://cdn-icons-png.flaticon.com/128/10336/10336279.png" />';
        e.appendChild(a)
    }))
}

function CreateInfo(e) {
    const t = document.getElementById(e);
    const a = t.querySelector("tbody");
    const o = t.querySelector("thead");
    const n = t.querySelector("tfoot");
    const l = a.querySelectorAll("tr");
    const r = o.querySelector("tr");
    const s = n.querySelector("tr");
    const i = document.createElement("th");
    const d = document.createElement("th");
    i.textContent = "Detail";
    d.textContent = "";
    r.appendChild(i);
    s.appendChild(d);
    l.forEach(((e, t) => {
        const a = document.createElement("td");
        a.innerHTML = '<svg class="icon-info" id="info' + t + '" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="#11ff00"  class="icon icon-tabler icons-tabler-filled icon-tabler-info-square-rounded"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2l.642 .005l.616 .017l.299 .013l.579 .034l.553 .046c4.687 .455 6.65 2.333 7.166 6.906l.03 .29l.046 .553l.041 .727l.006 .15l.017 .617l.005 .642l-.005 .642l-.017 .616l-.013 .299l-.034 .579l-.046 .553c-.455 4.687 -2.333 6.65 -6.906 7.166l-.29 .03l-.553 .046l-.727 .041l-.15 .006l-.617 .017l-.642 .005l-.642 -.005l-.616 -.017l-.299 -.013l-.579 -.034l-.553 -.046c-4.687 -.455 -6.65 -2.333 -7.166 -6.906l-.03 -.29l-.046 -.553l-.041 -.727l-.006 -.15l-.017 -.617l-.004 -.318v-.648l.004 -.318l.017 -.616l.013 -.299l.034 -.579l.046 -.553c.455 -4.687 2.333 -6.65 6.906 -7.166l.29 -.03l.553 -.046l.727 -.041l.15 -.006l.617 -.017c.21 -.003 .424 -.005 .642 -.005zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" /></svg>';
        // a.innerHTML = '<img class="icon-delete" style="width:30px;" id="hapus' + t + '" src="https://cdn-icons-png.flaticon.com/128/10336/10336279.png" />';
        e.appendChild(a)
    }))
}

function ResizeTable(e) {
    $("#" + e + " th").css("cursor", "col-resize");
    var t = false;
    var a = undefined;
    var o, n;
    $("#" + e + " th").mousedown((function(e) {
        a = $(this);
        t = true;
        o = e.pageX;
        n = $(this).width();
        $(a).addClass("resizing");
        console.log(a)
    }));
    $(document).mousemove((function(e) {
        if (t) {
            $(a).width(n + (e.pageX - o))
        }
    }));
    $(document).mouseup((function() {
        if (t) {
            $(a).removeClass("resizing");
            t = false
        }
    }))
}

function Modal(e, t, a = "Close", o = "", n = (() => {})) {
    var l = _buildModal(e, t, a, o, n);
    document.body.append(l);
    this.bsModal = bootstrap.Modal.getOrCreateInstance(l);
    this.show = function() {
        this.bsModal.show()
    }
}

function DeleteModal() {
    $(".modal").remove();
    $(".modal-custom").remove();
    $(".modal-backdrop").remove();
    $(".modal-dialog").remove();
    $("body").removeClass("modal-open");
    $("body").removeAttr("style")
}

function _buildModal(e, t, a, o, n) {
    var l = document.createElement("div");
    l.setAttribute("class", "modal fade modal-custom");
    l.setAttribute("tabindex", "-1");
    l.setAttribute("aria-labelledby", "modalLabel");
    l.setAttribute("aria-hidden", "true");
    var r = document.createElement("div");
    r.setAttribute("class", "modal-dialog");
    var s = document.createElement("div");
    s.setAttribute("class", "modal-content");
    var i = _buildModalHeader(e);
    s.append(i);
    var d = document.createElement("div");
    d.setAttribute("class", "modal-body");
    d.innerHTML = t;
    s.append(d);
    var c = _buildModalFooter(a, o, n);
    s.append(c);
    r.append(s);
    l.append(r);
    return l
}

function _buildModalHeader(e) {
    var t = document.createElement("div");
    t.setAttribute("class", "modal-header");
    t.setAttribute("style", "border-bottom: none;");
    var a = document.createElement("h5");
    a.setAttribute("class", "modal-title");
    a.setAttribute("id", "modalLabel");
    a.innerText = e;
    var o = document.createElement("button");
    o.setAttribute("class", "btn-close");
    o.setAttribute("data-bs-dismiss", "modal");
    o.setAttribute("aria-label", "Close");
    t.append(a);
    t.append(o);
    return t
}

function _buildModalFooter(e, t, a) {
    var o = document.createElement("div");
    o.setAttribute("class", "modal-footer");
    o.setAttribute("style", "border-top: none;");
    var n = document.createElement("button");
    n.setAttribute("type", "button");
    n.setAttribute("class", "btn btn-secondary");
    n.setAttribute("data-bs-dismiss", "modal");
    n.innerText = e;
    o.append(n);
    if (t && a) {
        var l = document.createElement("button");
        l.setAttribute("type", "button");
        l.setAttribute("class", "btn btn-primary");
        l.innerText = t;
        l.addEventListener("click", a);
        o.append(l)
    }
    return o
}

function ShowDetailTable(e) {
    table = e.table;
    idTable = e.id;
    headerModal = e.header_detail;
    customDetail = e.custom_value;
    valueDetail = e.value_html;

      CreateInfo(idTable);
   $("#" + idTable + " tbody").on("click", "tr svg.icon-info", (function() {
        // $("#" + idTable + " tbody").on("contextmenu", "tr", (function(e) {
        // e.preventDefault();
        // if ($(this).hasClass("selected")) {
        //     $(this).removeClass("selected")
        // } else {
        //     table.$("tr.selected").removeClass("selected");
        // $(this).addClass("selected-datacrash");

            var t = table.rows(this.closest("tr")).data();
            var a = "";
            var d = t.cell(this);
            console.log(d);
            // alert( 'Column title clicked on: '+$(title).html() );
            if (t.length >= 1) {
                for (var o = 0; o < t.length; o++) {
                   //[1].sTitle
                    var title = d.context[0].aoColumns;
                    for (let index = 0; index < title.length; index++) {
                        const HeaderTitle = title[index].sTitle;
                        console.log(HeaderTitle)

                        a = a + "<details><summary>"+HeaderTitle+"</summary>  <p>"+t[o][index]+"</p></details>";
                        // a = a + ""+HeaderTitle+"<h3>" + t[o][index] + "</h3>";
                    }


                }
            } else {
                alert("Please select member data.")
            }
            if (customDetail) {
                new Modal(headerModal, valueDetail, "Close", "Confirm", (() => false)).show()
            } else {
                new Modal(headerModal, a, "Close", "Confirm", (() => false)).show()
            }
        // }
    }))
}

function EditTable(e) {
    var t = e.id;
    var a = e.table;
    var o = e.row_id;
    var n = e.convert_html;
    var l = e.rageEx;
    var r = e.url;
    var s = e.url_load;
    var i = e.id_div_callback;
    $("#" + t + " tbody").on("dblclick", "td", (function() {
        var t = $(this).attr("alias");
        var d = a.cell(this);
        var c = d["0"][0].column;
        var u = d["0"][0].row;
        var m = d.context[0].aoData[u]._aData[o];
        var f = d.context[0].aoColumns[c].sTitle;
        var b = d.data();
        if (n) {
            var p = m.replace(l, "")
        } else {
            var p = m
        }
        console.log(p);
        console.log(t);
        var v = b.toString();
        var h = document.getElementById(e.id_body_table);
        var x = h.getElementsByTagName("input");
        if (x.length > 0) {
            Swal.fire({
                title: "Silahkan Selesaikan Edit Table Terlebih Dahulu",
                text: "",
                type: "error"
            }).then((function(e) {
                if (true) {
                    $("input").focus()
                }
            }));
            return false
        }
        if (v.search("<input") === -1) {
            d.data('<input type="text" class="form-edit" id="input' + m + '" value="' + b + '"/>');
            var y = document.getElementById(`input${m}`);
            y.addEventListener("keyup", (function(e) {
                if (e.key === "Enter") {
                    e.preventDefault();
                    var a = {};
                    a["value"] = y.value;
                    a["parameters"] = t;
                    a["code"] = p;
                    updateField__(p, m, r, a, t, (e => {
                        if (e) Swal.fire({
                            title: 'Error',
                            text: "",
                            type: "error"
                        }).then((function(e) {
                            if (true) {
                                return false
                            }
                        }));
                        else {
                            Swal.fire({
                                title: "Berhasil Update",
                                text: "",
                                type: "error"
                            }).then((function(e) {
                                if (true) {
                                    LoadData(s, i)
                                }
                            }))
                        }
                    }))
                }
            }))
        }
    }))
}
const updateField__ = (e, t, a, o, n, l) => {
    console.log(o);
    if (n == "") {
        Swal.fire({
            title: 'Error',
            text: "",
            type: "Tidak Dapat Mengedit Data !"
        }).then((function(e) {
            if (true) {
                return false
            }
        }))
    }
    $.ajax({
        type: "POST",
        url: a,
        data: o
    }).success((function(e) {
        l(null)
    })).error((function(e) {
        l(e)
    }))
};

function LoadData(e, t) {
    $.LoadingOverlay("show");
    $("#" + t).empty();
    $("#" + t).load(e, (function(e, t, a) {
        if (t == "error") {
            $.LoadingOverlay("hide");
            var o = "Sorry but there was an error: ";
            Swal.fire({
                title: o + a.status + " " + a.statusText,
                text: "",
                type: "error"
            }).then((function(e) {
                if (true) {
                    return false
                }
            }))
        } else {
            $.LoadingOverlay("hide");
        }
    }))
}

function DeleteData(e) {
    console.log(e);
    var t = e.id;
    var a = e.WhereId;
    var o = e.table;
    var n = e.UrlEndPoint;
    var l = e.EndPointNameDB;
    var r = e.urlLoad;
    var s = e.DivCallback;
    CreateDelete(t);
    $("#" + e.id + " tbody").on("click", "tr svg.icon-delete", (function() {
        const t = this.closest("tr");
        const o = t.cells[a].textContent;
        console.log(o);
        Swal.fire({
            title: "Are you sure?",
            text: "Anda Akan Menghapus Data Ini !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((t => {
            if (t.isConfirmed) {
                data = {
                    database: l,
                    id: o
                };
                $.ajax({
                    type: "POST",
                    url: n,
                    data: data
                }).success((function(t) {
                    e.table.row($(this).parents("tr")).remove().draw();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    LoadData(r, s)
                })).error((function(e) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been Not deleted.",
                        icon: "error"
                    })
                }))
            }
        }))
    }))
}

function ExportExcelTable(e, t) {
    const a = document.getElementById(e);
    const o = a.getElementsByTagName("tr");
    for (let e = 0; e < o.length; e++) {
        const t = [];
        const a = o[e].getElementsByTagName("td");
        if (e % 2 !== 0) {
            for (let e = 0; e < a.length; e++) {
                a[e].setAttribute("data-fill-color", "e2fbff")
            }
        } else {
            for (let e = 0; e < a.length; e++) {
                a[e].setAttribute("data-fill-color", "f2f2f2")
            }
        }
    }
    TableToExcel.convert(document.getElementById(e), {
        name: t,
        sheet: {
            name: "Sheet 1"
        }
    })
}


function GenerateChartCrash(u){
    var x = u.DataChart;
    console.log(x.typechart);
    var chart = Highcharts.chart(u.IdDiv, {
		data: {
		},
		chart: {
			type: x.typechart
		},
		title: {
			text: u.TitleChart
		},
		xAxis: {
			type: 'category'
		},
      series: [
        {
          name: x.namedata
        }
      ]
	});

    u.IdTable.on('draw', function () {
        DrawChartCrash(u.IdTable, chart,x);
      });

      DrawChartCrash(u.IdTable, chart,x);
}

function DrawChartCrash(table, chart,param) {
    // Get the data from the table, converting strings to numbers
    var data = table
      .rows({search: 'applied'})
      .data()
      .map(function (d) {
        const b = typeof d[param.value];
        const p = typeof d[param.data];

        console.log(p);
        if (b == "string" && p == "string" ) {
            var k = d[param.data];
            var v  = d[param.value].replace(',', '')*1;
            var r = [k,v];
        }else if(b == "number" && p == "number"){
            var k = d[param.data]*1;
            var v  = d[param.value].replace(',', '')*1;
            var r = [k,v];
        }
        console.log(k);
        // return [d[param.data], d[param.value].replace(',', '')*1];
        return r;
      })
      .toArray();

      console.log(data);
    chart.series[0].setData(data);
  }
