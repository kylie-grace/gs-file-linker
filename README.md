
# gs-file-linker

### Google Apps Script Subdirectory File Linker

Our workspace uses Google and as part of our hiring process, I have Google Sheet for tracking/comments/feedback and a sub-folder of job applicants in the same root folder. In order to streamline resume review, I wanted to write a script that would generate an alphabetized list of applicants in the first column of my Google Sheet which is linked to each individual's resume & cover letter for review. 

To use this script with your own sheet, you will need the following details:

-   **Folder ID**: The ID of the Google Drive folder containing the job applicant files. You can find this in the URL of the folder. For example, if the URL is `https://drive.google.com/drive/folders/rf2x3c4r8i3we`, the folder ID is `rf2x3c4r8i3we`.
    
-   **Google Sheet ID**: The ID of the Google Sheet where you want to import the filenames. This is also found in the URL of the sheet. For example, if the URL is `https://docs.google.com/spreadsheets/d/rf2x3c4r8i3we/edit`, the sheet ID is `rf2x3c4r8i3we`.
    
-   **Sheet Name**: The name of the sheet/tab within the Google Sheet where you want to insert the filenames. Google Sheets use `Sheet1` as default.
    
-   **Column**: The specific column in which you want to start adding the filenames. For me this is Column A, so confirm if that’s correct in your case.

### How to Use This Script:

1.  **Download the script**: 
    -   Download `importApplicantNames.gs` and open in a text editor.

2.  **Edit the script**:    
	-   Replace the placeholders in the code for Folder ID, Google Sheet ID, Sheet Name, and Column before you copy/paste in the next step.

3.  **Open Google Sheets**: 
	- Go to the Google Sheet you want to use.
    
4.  **Open the Script Editor**:
    
    -   Click on `Extensions` > `Apps Script`.
5.  **Add the Script**:
    
    -   Delete any code in the script editor and replace it with your edited version of the script provided above.
    
7.  **Save and Run**:
    
    -   Save the script with a name like `ImportApplicantNames`.
    -   Run the `importApplicantNames` function by clicking the play (▶️) button.
8.  **Authorize the Script**:
    
    -   The first time you run the script, it will ask for authorization. Review the permissions and click "Allow."
9.  **Check Your Sheet**:
    
    -   After the script runs, Column A in `Sheet1` will be populated with the filenames in alphabetical order, without the extensions, and linked to the corresponding files in your Google Drive folder.

*Note:* This script assumes the filenames are in the format `'LastName, FirstName.extension'`.
