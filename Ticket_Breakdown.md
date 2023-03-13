# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
Assumption:
(1) Tables which are mentioned here are all the separate so considering it as a relational database like MS SQL and following details are based on this assumption.

(2) I am considering that currently we are mapping shifts with agents with repective facility in followig table. Considering table name as a "Agent_Shifts"
• Id
• Facility_Id (Primary key of Facility table)
• Shift_Id (Primary key of Shift table)
• Agent_Id (Primary key of Agent table)
• Metadata (String, Metadata of any task for the agent of that shift)
• Status (Boolean)
• Created_Date (Datetime)
• Created_By (Primary key of User table)
• Updated_Date (Datetime)
• Updated_By (Primary key of User table)


Please find out the following tickets which I can break down based on my undertanding.

(1) Create new table with name Custom_Agents
Description: Create new database table in which need to do mapping of each facility's custom agent id against agent id. So following columns should be in table.
• Custom_Agent_Id (Autogenerate and unique or primary key) (unique string GUID) - Required
• Facility_Id (Primary key of Facility table) - Required
• Agent_Id (Primary key of Agent table) - Required
• Status (Boolean) - Required
• Created_Date (Datetime)
• Created_By (Primary key of User table)
• Updated_Date (Datetime)
• Updated_By (Primary key of User table)

Acceptance Criteria: Required columns and Datatype should be validated, Set respective number of limits of each column
Time/Effort Estimates: 30 minutes (Maximum)

(2) Change code to save data in database
Description: Need to change code to save data in database due to addition of new table. Here need to modify code in a way when assign any agent for any shift of Facility then instead of taking agent id, take new Custom_Agent_Id and map it with the shifts into the table "Agent_Shifts". 

Acceptance Criteria: Check valid and required data with respective restriction of table before try to save data into database. Pull proper custom agent id with respective facilit id and then save it into the database.
Time/Effort Estimates: 16 Hours (Maximum)

(3) Modify function getShiftsByFacility 
Description: In this function need to modify a code in a way to get all shifts for respective Facility but along with the agent details. To get agent details we need to do inner join of Agent_Shifts,Custom_Agents, and Agents table to retrive information.

Acceptance Criteria: All shifts should match with respective agent details along with metadata.
Time/Effort Estimates: 12 Hours (Maximum)