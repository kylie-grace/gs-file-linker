function importApplicantNames() {
  // Folder ID and Spreadsheet details
  var folderId = 'FOLDER_ID'; // Replace with your Folder ID
  var sheetId = 'SHEET_ID'; // Replace with your Sheeet ID
  var sheetName = 'Sheet1';  // Replace with your Sheet Name
  var column = 'A'; // Starting column for applicant names - Replace with your starting column
  
  // Get the folder and files
  var folder = DriveApp.getFolderById(folderId);
  var files = folder.getFiles();
  
  // Array to hold filenames and URLs
  var fileInfoArray = [];
  
  // Loop through the files in the folder
  while (files.hasNext()) {
    var file = files.next();
    var fileName = file.getName();
    var fileUrl = file.getUrl();
    
    // Remove the file extension
    var fileNameWithoutExtension = fileName.replace(/\.[^/.]+$/, "");
    
    // Add filename and URL to the array
    fileInfoArray.push([fileNameWithoutExtension, '=HYPERLINK("' + fileUrl + '", "' + fileNameWithoutExtension + '")']);
  }
  
  // Sort the array alphabetically by the first element (the file name)
  fileInfoArray.sort(function(a, b) {
    return a[0].localeCompare(b[0]);
  });
  
  // Get the sheet
  var sheet = SpreadsheetApp.openById(sheetId).getSheetByName(sheetName);
  
  // Clear the column before inserting new data
  sheet.getRange(column + '2:' + column).clearContent();
  
  // Insert the sorted filenames into the sheet with hyperlinks
  for (var i = 0; i < fileInfoArray.length; i++) {
    sheet.getRange(column + (i + 2)).setValue(fileInfoArray[i][1]);
  }
}

