/** This script is for airtable
 *  it counts all tests for an event
 *  won't work if you don't run it through the airtable
 */
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