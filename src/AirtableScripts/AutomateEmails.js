/**
 * Group 3
 * Homework 3
 * Grant Bowlds (grant.f.bowlds@vanderbilt.edu) 
 * Donny Carr (donovan.e.carr@vanderbilt.edu) 
 * Justin Condren (justin.l.condren@vanderbilt.edu)
 * Skyler Grandel (skyler.h.grandel@vanderbilt.edu)
 */

// JavaScript source code - Email Automation for customers that want to receive emails from KOACORE.
let table = base.getTable('CRM-Prospects'); //get the KOACORE clients data table, provides pertinent information about each one of KOACORE's customers
let result = await table.selectRecordsAsync();
let lookuptable = base.getTable('Lookups (DO NOT TOUCH)')
let result2 = await lookuptable.selectRecordsAsync();

for (let record of result.records) {
    let email = record.getCellValue("Email");
    let available = record.getCellValue("Send Email?")
    if (email != null) {
        if (!email.includes("@") || !email.includes(".")) {
            // if the names match, return true
            table.deleteRecordAsync(record);
        }
     for (let location of result2.records){
        let location2  = location.getCellValue("Full State Name")
        if (location2 == "Texas" && available == true && email == "cs4278@koacore.com"){
                table.updateRecordAsync(record, {"Email Body": "Hi Garrett, \nGrant Bowlds with KOACORE reaching out. We're a managed services firm supporting the Return to Live via on-site testing, vax validation, and COVID-safety consultation for venues, festivals, and artist camps. \nOur fan testing programs in Austin typically see right around 4% of the drop count across all genres and events. We've already serviced Emo's, Toyota Music Factory, and several other Texas venues with either fan or staff safety, and would love to connect on how we can help you and the team at Moody Amphitheater. \nIn short, we handle all things COVID safety so you don't have to. Do you have a few minutes over the next few days to connect and discuss? Let me know what works and we'll get something on the books. \nLooking forward to connecting, \nGrant "});
                await table.updateRecordAsync(record, {"Send Email?": false});
                await table.updateRecordAsync(record, {"Send Email?": true});
        }

     }
    }
 }