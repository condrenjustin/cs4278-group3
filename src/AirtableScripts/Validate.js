// Script for airtable to validate survey responses
let table = base.getTable('CRM-Prospects');
let result = await table.selectRecordsAsync();


for (let record of result.records) {
    let email = record.getCellValue("Email");
    let phone = record.getCellValue("Phone");

    if (email != null) {
        if (!email.includes("@") || !email.includes(".")) {
            // if the names match, return true
            table.deleteRecordAsync(record);
        }
    }
    if (phone != null) {
        if (phone.length < 10 || phone.length > 17) {
        // if the names match, return true
            table.deleteRecordAsync(record);
        }
    }
 }