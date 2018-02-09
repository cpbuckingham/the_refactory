##deloitte_innowake_code_mining

  npm run nibble
  npm test

  Dropdb the_refactory-dev
  Createdb code_mining-dev
  Knex migrate:latest
  Knex seed:run
  Psql code_mining-dev

  Dropdb code_mining-test
  Createdb code_mining-test
  Knex migrate:latest --env test
  Knex seed:run --env test
  Psql code_mining-test

  ALTER SEQUENCE users_id_seq RESTART WITH 1000;
  ALTER SEQUENCE projects_id_seq RESTART WITH 1000;
  ALTER SEQUENCE clients_id_seq RESTART WITH 1000;

  heroku run knex migrate:latest
  heroku run knex seed:run
  heroku pg:psql --app ****VERSION_NOT_DEPLOYED****

#SEMOSS Guide

    Download the appropriate SEMOSS version for your operating system at
    http://semoss.org/download/ and unzip the contents.

    Mac users: run the .sh file on terminal by changing to the directory
    where SEMOSS is and run the command "./startSEMOSS.sh".

    Windows users: run the .bat file on terminal by changing to the directory
    where SEMOSS is and run the command "startSEMOSS".

    This will open SEMOSS in Google Chrome at
    http://localhost:5355/SemossWeb/#!/playbook.

    Inside the webpage, click the "Upload Data" button on the top right of the
    page to upload data. Make sure that the "Create a New Database" is put
    "call_chain_demo" as the New Database Name. Hit the Browse Files button to
    upload the Call_Chain_By_Level.csv and hit Next. Then hit Upload and then Load.

    Click the "New Insight" button to create a new insight. Under "Select
    Database" click "call_chain_demo". Hover over "CALL_CHAIN_BY_LEVEL_DEMOCSV"
    and click the "Blend" button that appears. Click the "Add All" then the
    "Blend Data" buttons. After, go to the "Visualization Menu" (depicted with
    the pie chart) and click the Graph option. Under Chart Options, drag
    Level0-Level14 to Start and drag Level1-Level15 to End.

    To save your insight, press the "Toggle Menu" button (denoted by three
    horizontal bars). Click on the "Save Visualization" option and put
    "call_chain_demo" under the "Enter an Insight Title" section. Click "Save"
    then "Save As New".

    You should now be able to see your new visualization at
    http://localhost:5355/SemossWeb/#!/insight?type=single&engine=call_chain_demo&id=2&panel=0
