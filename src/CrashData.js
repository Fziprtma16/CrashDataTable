$.fn.CrashDataTable = function(e, t, a) {
    const o = {};
    var n = {};
    var l = {};
    var r = {};
    var s = {};
    var i = {};
    var d = {};
    var c = e.TotalFormadd;
    var u = e.ConfigForm;
    var m = e.StartFixedCloumn;
    console.log(u);
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
        s = {
            columnDefs: [{
                visible: false,
                targets: e.GroupsColumn
            }],
            order: [
                [e.GroupsColumn, "asc"]
            ],
            drawCallback: function(t) {
                var a = this.api();
                var o = a.rows({
                    page: "current"
                }).nodes();
                var n = null;
                a.column(e.GroupsColumn, {
                    page: "current"
                }).data().each((function(e, t) {
                    if (n !== e) {
                        $(o).eq(t).before('<tr class="group bg-success text-dark" data-f-color="f9f9f9" data-fill-color="000000" ><td colspan="6">' + e + "</td></tr>");
                        n = e
                    }
                }))
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
                    extend: "pdf",
                    text: "Export PDF",
                    className: "btn btn-outline-danger"
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
                    a.classList.add("form-control-sm");
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
                    extend: "pdf",
                    text: "Export PDF",
                    className: "btn btn-outline-danger"
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
                    a.classList.add("form-control-sm");
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
        ...s
    };
    return this.DataTable(f)
};

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
    i.textContent = "Action";
    d.textContent = "Action";
    r.appendChild(i);
    s.appendChild(d);
    l.forEach(((e, t) => {
        const a = document.createElement("td");
        a.innerHTML = '<img class="icon-delete" style="width:30px;" id="hapus' + t + '" src="https://cdn-icons-png.flaticon.com/128/10336/10336279.png" />';
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
    $("#" + idTable + " tbody").on("contextmenu", "tr", (function(e) {
        e.preventDefault();
        if ($(this).hasClass("selected")) {
            $(this).removeClass("selected")
        } else {
            table.$("tr.selected").removeClass("selected");
            $(this).addClass("selected");
            var t = table.rows(".selected").data();
            var a = "";
            if (t.length >= 1) {
                for (var o = 0; o < t.length; o++) {
                    a = a + "<h3>" + t[o][1] + "</h3><h3>" + t[o][2] + "</h3>"
                }
            } else {
                alert("Please select member data.")
            }
            if (customDetail) {
                new Modal(headerModal, valueDetail, "Close", "Confirm", (() => false)).show()
            } else {
                new Modal(headerModal, a, "Close", "Confirm", (() => false)).show()
            }
        }
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
            d.data('<input type="text" class="form-control-sm" id="input' + m + '" value="' + b + '"/>');
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
                            title: e,
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
            title: err,
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
            $.LoadingOverlay("hide")
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
    $("#" + e.id + " tbody").on("click", "tr img.icon-delete", (function() {
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
