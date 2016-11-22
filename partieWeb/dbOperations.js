
module.exports = {

  
	
  // name is a member of myModule due to the export above
  	
		
		
  getRecords: function(req, res) { 


		
		
        var pg = require('pg');        
   
        var conString = process.env.DATABASE_URL || "postgres://postgres:bestkhoya@localhost:5432/postgres";
        var client = new pg.Client(conString);
        client.connect();
        var query = client.query("select * from tasks where id_user = $1", [secId]);
        query.on("row", function (row, result) { 
            result.addRow(row); 
        });
		
        query.on("end", function (result) {          
            client.end();
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write(JSON.stringify(result.rows, null, "") + "\n");
            res.end();  
        });
		
  },
  
  getRecords1: function(req, res) {    
        var pg = require('pg');        
   
        var conString = process.env.DATABASE_URL || "postgres://postgres:bestkhoya@localhost:5432/postgres";
        var client = new pg.Client(conString);
        client.connect();
        var query = client.query("select * from tasks where affected=true and id_user = $1", [secId]);
        query.on("row", function (row, result) { 
            result.addRow(row); 
        });
        query.on("end", function (result) {          
            client.end();
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write(JSON.stringify(result.rows, null, "") + "\n");
            res.end();  
        });
  },
  
  
  getAllSendTasks: function(req, res) {    
        var pg = require('pg');        
   
        var conString = process.env.DATABASE_URL || "postgres://postgres:bestkhoya@localhost:5432/postgres";
        var client = new pg.Client(conString);
        client.connect();
        var query = client.query("select * from notifications_manager where id_user = $1", [secId]);
        query.on("row", function (row, result) { 
            result.addRow(row); 
        });
        query.on("end", function (result) {          
            client.end();
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write(JSON.stringify(result.rows, null, "") + "\n");
            res.end();  
        });
  },
  
  getNotif: function(req, res) {    
        var pg = require('pg');        
   
        var conString = process.env.DATABASE_URL || "postgres://postgres:bestkhoya@localhost:5432/postgres";
        var client = new pg.Client(conString);
        client.connect();
        var query = client.query("select * from notifications where id_user = $1 ORDER BY vue ASC", [secId]);
        query.on("row", function (row, result) { 
            result.addRow(row); 
        });
        query.on("end", function (result) {          
            client.end();
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write(JSON.stringify(result.rows, null, "") + "\n");
            res.end();  
        });
  },
  
  getAgent: function(req, res) {    
        var pg = require('pg');        
   
        var conString = process.env.DATABASE_URL || "postgres://postgres:bestkhoya@localhost:5432/postgres";
        var client = new pg.Client(conString);
        client.connect();
        var query = client.query("select * from agent where id_user = $1", [secId]);
        query.on("row", function (row, result) { 
            result.addRow(row); 
        });
        query.on("end", function (result) {          
            client.end();
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write(JSON.stringify(result.rows, null, "    ") + "\n");
            res.end();  
        });
  },
  
  getManager: function(req, res) {    
        var pg = require('pg');        
   
        var conString = process.env.DATABASE_URL || "postgres://postgres:bestkhoya@localhost:5432/postgres";
        var client = new pg.Client(conString);
        client.connect();
        var query = client.query("select * from manager where id_user = $1", [secId]);
        query.on("row", function (row, result) { 
            result.addRow(row); 
        });
        query.on("end", function (result) {          
            client.end();
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write(JSON.stringify(result.rows, null, "    ") + "\n");
            res.end();  
        });
  },
  
  getEquipe: function(req, res) {    
        var pg = require('pg');        
   
        var conString = process.env.DATABASE_URL || "postgres://postgres:bestkhoya@localhost:5432/postgres";
        var client = new pg.Client(conString);
        client.connect();
        var query = client.query("select * from equipes where id_user = $1", [secId]);
        query.on("row", function (row, result) { 
            result.addRow(row); 
        });
        query.on("end", function (result) {          
            client.end();
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write(JSON.stringify(result.rows, null, "    ") + "\n");
            res.end();  
        });
  },
  
  delOne: function(req, res) {    
        var pg = require('pg');        
   
        var conString = process.env.DATABASE_URL || "postgres://postgres:bestkhoya@localhost:5432/postgres";
        var client = new pg.Client(conString);
        client.connect();
        var query = client.query("delete from notifications_manager where id_user = $1", [secId]);
        query.on("row", function (row, result) { 
            result.addRow(row); 
        });
        query.on("end", function (result) {          
            client.end();
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write(JSON.stringify(result.rows, null, "    ") + "\n");
            res.end();  
        });
  },
  
  
  delTwo: function(req, res) {    
        var pg = require('pg');        
   
        var conString = process.env.DATABASE_URL || "postgres://postgres:bestkhoya@localhost:5432/postgres";
        var client = new pg.Client(conString);
        client.connect();
        var query = client.query("delete from notifications where id_user = $1", [secId]);
        query.on("row", function (row, result) { 
            result.addRow(row); 
        });
        query.on("end", function (result) {          
            client.end();
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write(JSON.stringify(result.rows, null, "    ") + "\n");
            res.end();  
        });
  },
  
  
   delThree: function(req, res) {    
        var pg = require('pg');        
   
        var conString = process.env.DATABASE_URL || "postgres://postgres:bestkhoya@localhost:5432/postgres";
        var client = new pg.Client(conString);
        client.connect();
        var query = client.query("delete from tasks where id_user = $1", [secId]);
        query.on("row", function (row, result) { 
            result.addRow(row); 
        });
        query.on("end", function (result) {          
            client.end();
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write(JSON.stringify(result.rows, null, "    ") + "\n");
            res.end();  
        });
  },
  
  
  delFour: function(req, res) {    
        var pg = require('pg');        
   
        var conString = process.env.DATABASE_URL || "postgres://postgres:bestkhoya@localhost:5432/postgres";
        var client = new pg.Client(conString);
        client.connect();
        var query = client.query("delete from agent where id_user = $1", [secId]);
        query.on("row", function (row, result) { 
            result.addRow(row); 
        });
        query.on("end", function (result) {          
            client.end();
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write(JSON.stringify(result.rows, null, "    ") + "\n");
            res.end();  
        });
  },
  
  delFive: function(req, res) {    
        var pg = require('pg');        
   
        var conString = process.env.DATABASE_URL || "postgres://postgres:bestkhoya@localhost:5432/postgres";
        var client = new pg.Client(conString);
        client.connect();
        var query = client.query("delete from equipes where id_user = $1", [secId]);
        query.on("row", function (row, result) { 
            result.addRow(row); 
        });
        query.on("end", function (result) {          
            client.end();
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write(JSON.stringify(result.rows, null, "    ") + "\n");
            res.end();  
        });
  },
  
    addRecord : function(req, res){
        var pg = require('pg');          
        var conString = process.env.DATABASE_URL ||  "postgres://postgres:bestkhoya@localhost:5432/postgres";
        var client = new pg.Client(conString);
        client.connect();
        var query = client.query("insert into tasks (id_user,name_task,desc_task,delai_task_max,delai_task_min,laptitude,longitude) values ($1,'"+req.query.name_task+"','"+req.query.desc_task+"','"+
                                    req.query.delai_task+"','"+req.query.delai_task_min+"','"+req.query.latitude+"','"+req.query.longitude+"')", [secId]);   
        query.on("end", function (result) {          
            client.end(); 
            res.write('Success');
            res.end();  
        });
    }, 

	addManager : function(req, res){
        var pg = require('pg');          
        var conString = process.env.DATABASE_URL ||  "postgres://postgres:bestkhoya@localhost:5432/postgres";
        var client = new pg.Client(conString);
        client.connect();
        var query = client.query("insert into manager (id_user,name_manager,age_manager,ville_manager,email_manager,phone_manager,pass_manager) "+ 
                                "values ($1,'"+req.query.name_manager+"','"+req.query.age_manager+"','"+
                                    req.query.ville_manager+"','"+req.query.email_manager+"','"+req.query.phone_manager+"','"+req.query.pass_manager+"')", [secId]);       
        query.on("end", function (result) {          
            client.end(); 
            res.write('Success');
            res.end();  
        });
    },
	
	addAgent : function(req, res){
        var pg = require('pg');          
        var conString = process.env.DATABASE_URL ||  "postgres://postgres:bestkhoya@localhost:5432/postgres";
        var client = new pg.Client(conString);
        client.connect();
        var query = client.query("insert into agent (id_user,name_agent,age_agent,ville_agent,pass_agent,email_agent,phone_agent,laptitude,longitude) "+ 
                                "values ($1,'"+req.query.name_agent+"','"+req.query.age_agent+"','"+
                                    req.query.ville_agent+"','"+req.query.pass_agent+"','"+req.query.email_agent+"','"+req.query.phone_agent+"',null,null)", [secId]);   
        query.on("end", function (result) {          
            client.end(); 
            res.write('Success');
            res.end();  
        });
    },
	
	
	addEquipe : function(req, res){
        var pg = require('pg');          
        var conString = process.env.DATABASE_URL ||  "postgres://postgres:bestkhoya@localhost:5432/postgres";
        var client = new pg.Client(conString);
        client.connect();
        var query = client.query("insert into equipes (id_user,name,descr,pass) "+ 
                                "values ($1,'"+req.query.name_equipe+"','"+req.query.desc_equipe+"','"+req.query.pass_equipe+"')", [secId]);   
        query.on("end", function (result) {          
            client.end(); 
            res.write('Success');
            res.end();  
        });
    },
	
     delRecord : function(req, res){
        var pg = require('pg');           
        var conString = process.env.DATABASE_URL ||  "postgres://postgres:bestkhoya@localhost:5432/postgres";
        var client = new pg.Client(conString);
        client.connect();         
        var query = client.query( 'Delete from tasks Where id_user = $1 and id_task ='+req.query.id_task, [secId]);   
        query.on("end", function (result) {          
            client.end(); 
            res.write('Success');
            res.end();  
        });
    }, 
	
	delAgent : function(req, res){
        var pg = require('pg');           
        var conString = process.env.DATABASE_URL ||  "postgres://postgres:bestkhoya@localhost:5432/postgres";
        var client = new pg.Client(conString);
        client.connect();         
        var query = client.query( 'Delete from agent Where id_user = $1 and id_agent ='+req.query.id_agent, [secId]);   
        query.on("end", function (result) {          
            client.end(); 
            res.write('Success');
            res.end();  
        });
    },
	
	updateRecord : function(req, res){
        var pg = require('pg');           
        var conString = process.env.DATABASE_URL ||  "postgres://postgres:bestkhoya@localhost:5432/postgres";
        var client = new pg.Client(conString);
        client.connect();         
        client.query( "Delete from tasks agent Where id_user = $1 and id_task = "+req.query.id_task, [secId]);
	   
	   
	   var m = client.query( "insert into tasks (id_user,name_task,desc_task,delai_task_max,delai_task_min,affected,laptitude,longitude) "+ 
                                "values ($1,'"+req.query.name_task+"','"+req.query.desc_task+"','"+
                                    req.query.delai_task_max+"','"+req.query.delai_task_min+"','"+req.query.affected+"','"+req.query.laptitude+"','"+req.query.longitude+"')", [secId]);
	   
	   
        m.on("end", function (result) {          
            client.end(); 
            res.write('Success');
            res.end();  
        });
		
    },
	
	updatte : function(req, res){
        var pg = require('pg');           
        var conString = process.env.DATABASE_URL ||  "postgres://postgres:bestkhoya@localhost:5432/postgres";
        var client = new pg.Client(conString);
        client.connect();         
        client.query( "Delete from notifications Where id_user = $1 and id_notification = "+req.query.id_notification, [secId]);
									
		var m = client.query( "insert into notifications (id_user,id_notification,datte,heure,id_from,details,vue) "+ 
                                "values ($1,'"+req.query.id_notification+"','"+ req.query.datte +"','"+ req.query.heure +"','"+req.query.id_from+"','"+
                                    req.query.details+"',true)", [secId]);
		
		
        m.on("end", function (result) {          
            client.end(); 
            res.write('Success');
            res.end();  
        });
		
    },

	delette : function(req, res){
        var pg = require('pg');           
        var conString = process.env.DATABASE_URL ||  "postgres://postgres:bestkhoya@localhost:5432/postgres";
        var client = new pg.Client(conString);
        client.connect();         
        var query = client.query( "Delete from notifications Where id_user=$1 and id_notification = "+req.query.id_notification, [secId]);
		
        query.on("end", function (result) {          
            client.end(); 
            res.write('Success');
            res.end();  
        });
		
    },
	
	
	dell : function(req, res){
        var pg = require('pg');           
        var conString = process.env.DATABASE_URL ||  "postgres://postgres:bestkhoya@localhost:5432/postgres";
        var client = new pg.Client(conString);
        client.connect();         
        var query = client.query( "Delete from notifications Where id_user=$1 and vue = true", [secId]);
		
        query.on("end", function (result) {          
            client.end(); 
            res.write('Success');
            res.end();  
        });
		
    },

		updateAgent : function(req, res){
        var pg = require('pg');           
        var conString = process.env.DATABASE_URL ||  "postgres://postgres:bestkhoya@localhost:5432/postgres";
        var client = new pg.Client(conString);
        client.connect();         
        client.query( "Delete from agent Where id_user=$1 and id_agent = "+req.query.id_agent, [secId]);
									
		var m = client.query( "insert into agent (id_user,name_agent,age_agent,ville_agent,email_agent,phone_agent) "+ 
                                "values ($1,'"+req.query.name_agent+"','"+req.query.age_agent+"','"+
                                    req.query.ville_agent+"','"+req.query.email_agent+"','"+req.query.phone_agent+"')", [secId]);
		
        m.on("end", function (result) {          
            client.end(); 
            res.write('Success');
            res.end();  
        });
		
    },
	
	assignTask : function(req, res){
        var pg = require('pg');           
        var conString = process.env.DATABASE_URL ||  "postgres://postgres:bestkhoya@localhost:5432/postgres";
        var client = new pg.Client(conString);
        client.connect();         
        var query = client.query("insert into send_task (id_user,id_task,id_agent) "+ 
                                "values ($1,'"+req.query.id_task+"','"+
                                    req.query.id_agent+"')", [secId]);
		
        query.on("end", function (result) {          
            client.end(); 
            res.write('Success');
            res.end();  
        });
		
    },
	
	assignTask2 : function(req, res){
        var pg = require('pg');           
        var conString = process.env.DATABASE_URL ||  "postgres://postgres:bestkhoya@localhost:5432/postgres";
        var client = new pg.Client(conString);
        client.connect();         
        var query = client.query("insert into send_task (id_user,id_task,id_equipe) "+ 
                                "values ($1,'"+req.query.id_task+"','"+
                                    req.query.id_equipe+"')", [secId]);
		
        query.on("end", function (result) {          
            client.end(); 
            res.write('Success');
            res.end();  
        });
		
    },
	
	
	sendNotifTask : function(req, res){
        var pg = require('pg');           
        var conString = process.env.DATABASE_URL ||  "postgres://postgres:bestkhoya@localhost:5432/postgres";
        var client = new pg.Client(conString);
        client.connect();         
        var query = client.query("insert into notifications_manager (id_user,to_id_agent,details,datte,heure) "+ 
                                "values ($1,'"+req.query.id1+"','"+req.query.details+"',current_date,current_time)", [secId]);
		
        query.on("end", function (result) {          
            client.end(); 
            res.write('Success');
            res.end();  
        });
		
    },
	
	
	sendNotifTask1 : function(req, res){
        var pg = require('pg');           
        var conString = process.env.DATABASE_URL ||  "postgres://postgres:bestkhoya@localhost:5432/postgres";
        var client = new pg.Client(conString);
        client.connect();         
        var query = client.query("insert into notifications_manager (id_user,to_id_equipe,details,datte,heure) "+ 
                                "values ($1,'"+req.query.id1+"','"+req.query.details+"',current_date,current_time)", [secId]);  
		
        query.on("end", function (result) {          
            client.end(); 
            res.write('Success');
            res.end();  
        });
		
    },
	
	
	updateManager : function(req, res){
        var pg = require('pg');           
        var conString = process.env.DATABASE_URL ||  "postgres://postgres:bestkhoya@localhost:5432/postgres";
        var client = new pg.Client(conString);
        client.connect();         
        client.query( "Delete from manager Where id_user=$1 and id_manager = "+req.query.id_manager, [secId]);
									
		var m=client.query( "insert into manager (id_user,name_manager,age_manager,ville_manager,email_manager,phone_manager) "+ 
                                "values ($1,'"+req.query.name_manager+"','"+req.query.age_manager+"','"+
                                    req.query.ville_manager+"','"+req.query.email_manager+"','"+req.query.phone_manager+"')", [secId]);
		
        m.on("end", function (result) {          
            client.end(); 
            res.write('Success');
            res.end();  
        });
		
    },
	
	updateEquipe : function(req, res){
        var pg = require('pg');           
        var conString = process.env.DATABASE_URL ||  "postgres://postgres:bestkhoya@localhost:5432/postgres";
        var client = new pg.Client(conString);
        client.connect();         
        client.query( "Delete from equipes Where id_user = $1 and id = "+req.query.id_equipe, [secId]);
								
		var m = client.query( "Delete from equipes Where id_user = $1 and id = '"+req.query.id_equipe+"';insert into equipes (id_user,name,descr) "+ 
                                "values ($1,'"+req.query.name_equipe+"','"+req.query.desc_equipe+"')", [secId]);
		
        m.on("end", function (result) {          
            client.end(); 
            res.write('Success');
            res.end();  
        });
		
    },
	
	delManager : function(req, res){
        var pg = require('pg');           
        var conString = process.env.DATABASE_URL ||  "postgres://postgres:bestkhoya@localhost:5432/postgres";
        var client = new pg.Client(conString);
        client.connect();         
        var query = client.query( 'Delete from manager Where id_user = $1 and id_manager ='+req.query.id_manager, [secId]);   
        query.on("end", function (result) {          
            client.end(); 
            res.write('Success');
            res.end();  
        });
    },
	
	
	delEquipe : function(req, res){
        var pg = require('pg');           
        var conString = process.env.DATABASE_URL ||  "postgres://postgres:bestkhoya@localhost:5432/postgres";
        var client = new pg.Client(conString);
        client.connect();         
        var query = client.query( 'Delete from equipes Where id_user = $1 and id ='+req.query.id, [secId]);   
        query.on("end", function (result) {          
            client.end(); 
            res.write('Success');
            res.end();  
        });
    },
	
        
        
};