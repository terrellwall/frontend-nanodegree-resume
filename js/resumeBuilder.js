//var awesomeThoughts;
//awesomeThoughts="I am Terrell and I am AWESOME!";
//var funThoughts;
//funThoughts=awesomeThoughts.replace("AWESOME", "FUN");
//$("main").append(funThoughts);
var name 	= "Terrell Wall";
var role 	= "Web Developer";
var email 	= "twall@lonelon.com";
var phone 	= "(678) 522-2411";
var url 	= "images/terrell.jpg";
var skills 	= ["Web Development", "Application Deployment", "Object-Oriented Programming"];
var message = "Results-oriented, enthusiastic and ambitious problem solver, who learns quickly, and produces quality work.";

var bio = {
	name: name,
	role: role,
	contacts: {
		email: email,
		phone: phone,
		location: "Duluth, GA, US"
	},
	picture: url,
	message: message,
	skills: skills
};

var work = { 
	"jobs": [
 		{
   			"name": "Verizon Wireless",
   			"location": "Alpharetta, GA, US",
   			"years": "August 2012 - February 2015",
   			"occupation": "Application Developer",
   			"description": "Implement applications on a Java based platform that processes and formats consumer mobile data usage data for customer billing."
  		},
  		{
   			"name": "S1 Corporation",
   			"location": "Norcross, GA, US",
   			"years": "November 2010 - June 2011",
   			"occupation": "Project Manager",
   			"description" : "Manage, implement and deploy banking voice response systems for small to medium scale financial institutions."
  		},
  		{
   			"name": "S1 Corporation",
   			"location": "Norcross, GA, US",
   			"years": "September 2009 - November 2010",
   			"occupation": "Software Developer",
   			"description" : "Implement Java based application that interfaces point of sales devices with transaction approval entities."
  		}

 	]
};

var education = {
	"schools": [
		{
			"name": "Grambling State University",
			"location": "Grambling, LA, US",
			"degrees": "Bachelor of Science",
			"dates": "1990 - 1995",
			"majors" : ["Computer Science"]
		},
		{
			"name": "Davidson High School",
			"location": "St. Joseph, LA, US",
			"degrees": "High School Diploma",
			"dates": "",
			"majors": []
		}
	],
	"onlinecourses": [ 
		{
			title: "Javascript Basics",
			school: "Udacity",
			dates: "2015",
			url: "https://www.udacity.com/course/javascript-basics--ud804"
		}
	]
};

var projects = {
	"projects" : [
		{
			"name" : "Intro Project: HTML5 Hello World",
			"description" : "You will get acquainted with your text editor, creating and editing simple HTML and CSS files to create your very first webpage!",
			"dates" : "March 1, 2015 - March 15, 2015",
			"image" : "images/helloworld.gif"
		},
		{
   			"name" : "Project 1: Build a Portfolio Site",
   			"description" : "You will be provided with a design mockup as a PDF-file and must replicate that design in HTML and CSS. You will develop a responsive website that will display images, descriptions and links to each of the portfolio projects you will complete throughout the course of the Front-End Web Developer Nanodegree.",
   			"dates" : "March 16, 2015 - April 13, 2015",
   			"image" : "images/portfolio.png"
  		},
  		{
  			"name" : "Project 2: Online Resume",
   			"description" : "You'll demonstrate your mastery of the language's syntax through a series of challenges. Each multipart problem mimics a real-life challenge that front-end developers face. You'll be required to write clean code and to apply your knowledge of variables, objects, JSON, functions and control flow to successfully solve the challenges.",
   			"dates" : "April 14, 2015 - May 11, 2015",
   			"image" : "images/resume.png"
  		}
 	]
};


var formattedName = HTMLheaderName.replace ("%data%", bio.name);
$("#header").append(formattedName);
var formattedRole = HTMLheaderRole.replace ("%data%", bio.role);
$("#header").append(formattedRole);
var formattedPhone = HTMLmobile.replace("%data%", bio.contacts.phone);
$("#header").append(formattedPhone);
var formattedEmail = HTMLemail.replace ("%data%", bio.contacts.email);
$("#header").append(formattedEmail);
var formattedPicture = HTMLbioPic.replace("%data%", bio.picture);
$("#header").append(formattedPicture);
var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.message);
$("#header").append(formattedMessage);

if (bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);
	for (skill in bio.skills) {

		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
  		$("#skills").append(formattedSkill);
	}
}

function displayWork() {

	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
   		var formattedHTML = HTMLworkEmployer.replace("%data%", work.jobs[job].name);
   		$(".work-entry:last").append(formattedHTML);
 		formattedHTML = HTMLworkTitle.replace("%data%", work.jobs[job].occupation);
 		$(".work-entry:last").append(formattedHTML);
 		formattedHTML = HTMLworkLocation.replace("%data%", work.jobs[job].location);
   		$(".work-entry:last").append(formattedHTML);
 		formattedHTML = HTMLworkDates.replace("%data%", work.jobs[job].years);
   		$(".work-entry:last").append(formattedHTML);
 		formattedHTML = HTMLworkDescription.replace("%data%", work.jobs[job].description);
   		$(".work-entry:last").append(formattedHTML);
   	}
}

projects.display = function() {

	for (var project in projects.projects ){
    
    	$("#projects").append(HTMLprojectStart);
    	var formattedHTML = HTMLprojectTitle.replace("%data%", projects.projects[project].name);
    	$(".project-entry:last").append(formattedHTML);
  		formattedHTML = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
  		$(".project-entry:last").append(formattedHTML);
  		var formattedHTML = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    	$(".project-entry:last").append(formattedHTML);
  		formattedHTML = HTMLprojectImage.replace("%data%", projects.projects[project].image);
    	$(".project-entry:last").append(formattedHTML);
   	}
}

education.display = function() {

	for (var educations in education.schools ){

	    $("#education").append(HTMLschoolStart);
	    var formattedHTML = HTMLschoolName.replace("%data%", education.schools[educations].name);
	    $(".education-entry:last").append(formattedHTML);
	    var formattedHTML = HTMLschoolDegree.replace("%data%", education.schools[educations].degrees);
	    $(".education-entry:last").append(formattedHTML);
	    var formattedHTML = HTMLschoolLocation.replace("%data%", education.schools[educations].location);
	    $(".education-entry:last").append(formattedHTML);
	    var formattedHTML = HTMLschoolMajor.replace("%data%", education.schools[educations].majors);
	    $(".education-entry:last").append(formattedHTML);
	}

	$("#education").append(HTMLonlineClasses);
	
	for (var o in education.onlinecourses ){
		
		$("#education").append(HTMLonlineStart);
	    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlinecourses[o].title);
	    $(".onlinecourse-entry:last").append(formattedTitle);
	    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlinecourses[o].school);
	    $(".onlinecourse-entry:last").append(formattedOnlineSchool);
	    var formattedDates = HTMLonlineDates.replace("%data%", education.onlinecourses[o].dates);
	    $(".onlinecourse-entry:last").append(formattedDates);
	    var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlinecourses[o].url);
	    $(".onlinecourse-entry:last").append(formattedOnlineURL);
	}
}

displayWork();

projects.display();

education.display();


function inName(input) {
	var names = input.trim().split(" ");
	console.log(names);
	var firstname = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
	var space = " ";
	var lastname = names[1].toUpperCase();
	var fullname = firstname + " " + lastname;
	return firstname+" "+lastname;
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);



















































































 
 
 
  




 



