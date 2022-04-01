/** This script is for airtable
 *  it counts all tests for a state
 *  won't work if you don't run it through the airtable
 */
 let table_1 = base.getTable('Lookups (DO NOT TOUCH)');
 let tests = base.getTable("Master List");
 let notCounted = tests.getView("State Rollup View");
 let table = table_1.getView("Lookup - States");

 let result = await table.selectRecordsAsync();
 let tests_final = await notCounted.selectRecordsAsync();
 let runningTotal;
 let meetsConditions;
 let linkedRecordId;
 let state;

 for (let record of result.records) {
     runningTotal = record.getCellValue("Test Count");
     meetsConditions = tests_final.records.filter((potentialEvent) => {
        state = potentialEvent.getCellValue("State");
        linkedRecordId =  state[0].id;
         if (linkedRecordId === record.id) {
            console.log(linkedRecordId);
            console.log(record.id)
             // if the names match, return true
             return true;
         }
         return false;
     });

     for (let record1 of meetsConditions) {
         runningTotal += record1.getCellValue('Rapid Antigen Tests Given');
     }
     let recordId = record.id
     await table_1.updateRecordAsync(recordId, {
         'Test Count': runningTotal,
     });
  }