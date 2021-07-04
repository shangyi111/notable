Introduction:
I created this project with node.js, express, and mySQL. I use Postman for manual testing.

APIs:
	GET: doctor/getAll 
        - retrieve a list of doctors
	
	GET: appointment/get   
        - retrieve list of appointments for certain doctor and date
		params:
			doctorId,
			date, // string in the format of yyyy-mm-dd

	DELETE: appointment/delete/:appointmentId
        - delete certain appointment
	  params:
	    appointmentId

	POST: appointment/add 
        - add a new appointment if valid
	  params:
	    doctorId,
	    patientFirstName,
	    patientLastName,
	    date, // string in the format of yyyy-mm-dd
	    time, // string in the format of HH:MM:SS, where hour is from 0 to 23
	    kind, // kind would be integer, either 0 or 1 atm. 0 will be New Patient, 1 will be Follow-up




TABLES:
	Doctors: 
		- id: integer 
		- first_name: string
		- last_name: string
	Appointments:
		- id: integer
		- doctor_id : integer
		- patient_first_name: string
		- patient_last_name: string
		- date: Date
		- time: Time
		- kind: integer

Instruction:
 1. I follow the below website to set up mysql tables through MySQLWorkbench
    - https://dev.to/lisahjung/beginner-s-guide-to-using-mysql-database-in-a-node-js-app-49li?fbclid=IwAR3HU4xUmwt4usKIlzzUS_Dnh6hVLKVuAXRnyCrKp40t8oCTJWE6EQpAhig   
    - Please check the following screenshots of my MySQLWorkbench if interested:
        - ./screenshots/mysql/doctors.png
        - ./screenshots/mysql/appointments.png

 2. update the following password and database name in data.js to your own values.
 const con = mysql.createConnection({
   host:"localhost",
   user:"root",
   password:"****YOUR PASSWORD*******",
   database:"***YOUR DATABASE NAME***"
 })

 3. To start server, go to terminal, "npm start"

 4. I use Postman to test my apis.

 TESTING RESULT:
  - I screenshot some of my Postman testing result for each api, and attached them with my repo
  - doctor/getAll
    - ./screenshots/testing_results/doctor-getAll.png
  - appointment/get
    - ./screenshots/testing_results/appointment-get.png
  - appointment/delete
    - ./screenshots/testing_results/appointment-delete.png
  - appointment/add
    - success 
      ./screenshots/testing_results/appointment-add-success.png
    - fail
        - more than three appts for certain time and certain doctor 
          ./screenshots/testing_results/appointment-add-fail-case-1.png
        - invalid time interval
          ./screenshots/testing_results/appointment-add-fail-case-2.png



