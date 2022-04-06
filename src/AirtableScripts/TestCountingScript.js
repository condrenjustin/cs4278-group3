/**
 * Group 3
 * Homework 3
 * Grant Bowlds (grant.f.bowlds@vanderbilt.edu) 
 * Donny Carr (donovan.e.carr@vanderbilt.edu) 
 * Justin Condren (justin.l.condren@vanderbilt.edu)
 * Skyler Grandel (skyler.h.grandel@vanderbilt.edu)
 */

// This script is for counting tests given for statistics purposes
let table_1 = base.getTable('Master List');
let tests = base.getTable("Attendees");
let notCounted = tests.getView("Not Counted attendees");
let table = table_1.getView("Grant's Test Counting");
let result = await table.selectRecordsAsync();
let attendee = await notCounted.selectRecordsAsync();
let runningTotal;
let runningTotalwRes;
let meetsConditions;

for (let record of result.records) {
    runningTotal = record.getCellValue("Rapid Antigen Tests Given");
    runningTotalwRes = record.getCellValue("Tests w/ a Reservation");
    meetsConditions = attendee.records.filter((potentialEvent) => {
        if (potentialEvent.getCellValue("Event Lookup") === record.getCellValue("Event Key")) {
            // if the names match, return true
            return true;
        }
        return false;
    });
    for (let record1 of meetsConditions) {
        runningTotal += record1.getCellValue('Number of attendees needing test');
        if (record1.getCellValue("Pre-registered Test") == 1) {
            runningTotalwRes += record1.getCellValue('Number of attendees needing test');
        }
        await tests.updateRecordAsync(record1, {
        'Counted': true
    });
    }
    let recordId = record.id
    await table_1.updateRecordAsync(recordId, {
        'Rapid Antigen Tests Given': runningTotal,
        'Tests w/ a Reservation': runningTotalwRes
    });
 }