// function exportToExcel(tableID, filename = "") {
//   let downloadurl;
//   let dataFileType = "application/vnd.ms-excel";
//   let tableSelect = document.getElementById(tableID);
//   let tableHTMLData = tableSelect.outerHTML.replace(/ /g, "%20");

//   // Specify file name
//   filename = filename ? filename + ".xls" : "export_excel_data.xls";

//   // Create download link element
//   downloadurl = document.createElement("a");

//   document.body.appendChild(downloadurl);

//   if (navigator.msSaveOrOpenBlob) {
//     var blob = new Blob(["\ufeff", tableHTMLData], {
//       type: dataFileType
//     });
//     navigator.msSaveOrOpenBlob(blob, filename);
//   } else {
//     // Create a link to the file
//     downloadurl.href = "data:" + dataFileType + ", " + tableHTMLData;

//     // Setting the file name
//     downloadurl.download = filename;

//     //triggering the function
//     downloadurl.click();
//   }
// }

function Export() {
  html2canvas(document.getElementById("tblexportData"), {
    onrendered: function(canvas) {
      var data = canvas.toDataURL();
      var docDefinition = {
        content: [
          {
            image: data,
            width: 500
          }
        ]
      };
      pdfMake.createPdf(docDefinition).download("Trip_Info.pdf");
    }
  });
}

// <button onclick="exportToExcel('tblexportData')" >Export Table Data To Excel File</button>
