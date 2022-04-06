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
let notDone = table.getView("Grant's email drafting");
let result = await notDone.selectRecordsAsync();
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
    let location1 = record.getCellValue("Location");
    if (!location1 == null) {
     for (let location of result2.records){
        if (location1[0].id == (location.id)) {
                let location2  = location.getCellValue("Full State Name");
                let count = record.getCellValue("Test Count");
                let venues = location.getCellValue("looku");
                table.updateRecordAsync(record, {"Email Body": "Hey " + record.getCellValue("First Name") + ",\nGrant Bowlds with KOACORE reaching out. We're a managed services firm supporting the Return to Live via on-site testing, vax validation, and COVID-safety consultation for venues, festivals, and artist camps. \nOur testing programs in " + location2 + " have tested over " + count + " fans across all genres and events, generating over $" + count*40 + "in shared revenue. We've already serviced " + venues + " and several other venues with either fan or staff safety, and would love to connect on how we can help you and your team. \nIn short, we handle all things COVID safety so you don't have to. Do you have a few minutes over the next few days to connect and discuss? Let me know what works and we'll get something on the books. \nLooking forward to connecting, \nGrant "});
            }
    }
    } else{
        table.updateRecordAsync(record, {"Email Body": "Hey " + record.getCellValue("First Name") + ",\nGrant Bowlds with KOACORE reaching out. We're a managed services firm supporting the Return to Live via on-site testing, vax validation, and COVID-safety consultation for venues, festivals, and artist camps. \nOur testing programs have tested thousands of fans across all genres and events generating unbelievable shared profits for our partners. We've already serviced venues like Citi Field, House of Blues, and hundreds of others with either fan or staff safety, and would love to connect on how we can help you and your team. \nIn short, we handle all things COVID safety so you don't have to. Do you have a few minutes over the next few days to connect and discuss? Let me know what works and we'll get something on the books. \nLooking forward to connecting, \nGrant "});
    }
    }
 }