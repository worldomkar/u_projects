var bio = {
    "name": "Omkar Patekar",
    "role": "Software Engineer",
    "contacts": {
        "mobile": "+61 470 288 377",
        "email": "omkar.patekar@gmail.com",
        "linkedin": "https://www.linkedin.com/in/omkarp",
        "github": "https://github.com/worldomkar/SquidListManagerWCF",
        "twitter": "@dummyhandle",
        "location": "Sydney, Australia"
    },
    "welcomeMessage": "Full Stack Software Engineer | C# .NET | Angular | React | Object Oriented Programming | Agile | Continuous Delivery",
    "skills": [
        "Full Stack Developer", "Rapid Learner", "Amicable team player"
    ],
    "bioPic": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAArBAAAAJDNiZjkxMzUwLTEyNTktNGY5Ny1hNDllLWM0ZDRhMTdkYzQ3ZQ.jpg",
    "display": function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        $("#topContacts").append(formattedLocation);
        $("#topContacts").append(formattedEmail);
        $("#topContacts").append(formattedMobile);
        $("#topContacts").append(formattedGithub);

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#header").append(formattedWelcomeMsg);
        $("#header").append(formattedPic);

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
        }

        for (var i = 0; i < bio.skills.length; ++i) {
            var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
            $("#skills").append(formattedSkill);
        }

        $("#footerContacts").append(formattedLocation);
        $("#footerContacts").append(formattedEmail);
        $("#footerContacts").append(formattedMobile);
        $("#footerContacts").append(formattedGithub);
    }
};

var education = {
    "schools": [{
            "name": "Birla Institute of Computer Technology",
            "location": "Pilani, RJ",
            "degree": "Masters",
            "majors": ["CS"],
            "dates": "2008-2011",
            "url": "http://www.bits-pilani.ac.in/"
        },
        {
            "name": "North Maharashtra University",
            "location": "Jalgaon, MH",
            "degree": "Bachelors",
            "majors": ["CS"],
            "dates": "2001-2004",
            "url": "http://www.nmu.ac.in/"
        }
    ],
    "onlineCourses": [{
        "title": "Front End Nanodegree",
        "school": "Udacity",
        "dates": "2017",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }],
    "display": function() {
        for (var i = 0; i < education.schools.length; ++i) {
            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name) +
                HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[i].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[i].majors);
            $("#education").append(HTMLschoolStart);
            $("#education div.education-entry:last-of-type").append(formattedSchoolName);
            $("#education div.education-entry:last-of-type").append(formattedSchoolDates);
            $("#education div.education-entry:last-of-type").append(formattedSchoolLocation);
            $("#education div.education-entry:last-of-type").append(formattedSchoolMajor);
        }

        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
        }

        for (i = 0; i < education.onlineCourses.length; ++i) {
            var formattedCourseName = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title) +
                HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
            var formattedCourseDates = HTMLonlineDates.replace('%data%', education.schools[i].dates);
            var formattedCourseUrl = HTMLonlineURL.replace('%data%', education.onlineCourses[i].url);
            $("#education").append(HTMLschoolStart);
            $("#education div.education-entry:last-of-type").append(formattedCourseName);
            $("#education div.education-entry:last-of-type").append(formattedCourseDates);
            $("#education div.education-entry:last-of-type").append(formattedCourseUrl);
        }
    }
};

var work = {
    "jobs": [{
            "employer": "Persistent",
            "title": "Software Engineer",
            "location": "Pune, India",
            "dates": "2015 - 2017",
            "description": "Established Lead Software Engineer in Technologies: C#, C++, JavaScript/ES6, Windows, Linux, bash scripts, SOAP, MySQL, Certificates, SVN, ClearCase, GIT"
        },
        {
            "employer": "IGATE (Capgemini/Patni)",
            "title": "Software Engineer",
            "location": "Pune, India",
            "dates": "2010 - 2015",
            "description": "Successful Software Engineer in Technologies: C# .NET, HTML, CSS, JavaScript/ES5, C++, C, Windows, Linux, Bash, SFPs, iSCSI, snapshot, DR"
        },
        {
            "employer": "IBM",
            "title": "Software Developer",
            "location": "Pune, India",
            "dates": "2007 - 2010",
            "description": "Software Developer, expert in C++, C, Core Java, Java Script"
        }
    ],
    "display": function() {
        for (var i = 0; i < work.jobs.length; ++i) {
            var formattedWork = HTMLworkEmployer.replace("%data%", work.jobs[i].employer) +
                HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            $("#workExperience").append(HTMLworkStart);
            $("#workExperience div.work-entry:last-of-type").append(formattedWork);
            $("#workExperience div.work-entry:last-of-type").append(formattedWorkDates);
            $("#workExperience div.work-entry:last-of-type").append(formattedWorkLocation);
            $("#workExperience div.work-entry:last-of-type").append(formattedWorkDescription);
        }
    }
};

var projects = {
    "projects": [{
        "title": "Stomatobot website",
        "dates": "2017",
        "description": "Latest HTML5 website",
        "images": ["https://stomatobot.com/freetrial/images/STB_logo.png"]
    }],
    "display": function() {
        if (projects.projects.length > 0) {
            $("#projects").append(HTMLprojectStart);
        }

        for (var i = 0; i < projects.projects.length; ++i) {
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            $("#projects div.project-entry").append(formattedProjectTitle);
            $("#projects div.project-entry").append(formattedProjectDates);
            $("#projects div.project-entry").append(formattedProjectDescription);
            for (var j = 0; j < projects.projects[i].images.length; ++j) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
                $("#projects div.project-entry").append(formattedProjectImage);
            }
        }
    }
};

function displayResume() {
    bio.display();
    work.display();
    education.display();
    projects.display();
    $("#mapDiv").append(googleMap);
}

displayResume();
