"use strict";

// 2021-12-03 17:37:53


document.addEventListener('DOMContentLoaded', function() {
    //alert("Document loaded");
    var form = document.querySelector('form');
    var pageTitle = document.getElementById("title");



    //TO-DO (add anything you think we need to do)
    //-- css needed for background to fill on homepage for <aside>/sidebar and be absolute
    //-- inline font images
    //-- need to change inputs to without class in css?
    //-- we need to check the password entered before going to new user, to make sure password has the needed characters, format etc
    //-- users cant click other buttons until they sign in
    //-- need 'new issue button' on home/dashboard



    //-->Home/Dashboard Link
    document.getElementsByClassName("dashboard")[0].addEventListener("click", function(event){
        event.preventDefault();
        //alert("Dashboard button listener works");
        var pageTitle = document.getElementById("title");
        //var textField = document.getElementsByClassName('title')[0].value; //placeholder

        var xmlhttp = new XMLHttpRequest();
        var pageTitle = document.getElementById("title");
        pageTitle.innerHTML = "<h1>Issues</h1>";

        xmlhttp.onreadystatechange = function() {
                if (true ) {
                    if (true ){
                        pageTitle.innerHTML = "<h1>Issues</h1>";
                        document.getElementById("to-change").innerHTML = xmlhttp.responseText;

                    }

                }
                else{
                    document.getElementById("title").innerHTML = " ";
                }
        };
        xmlhttp.open("GET", "bugTracker.php?a=" + pageTitle.innerText, true); //change to the field to go to php
        xmlhttp.send();


    });

    //-->Add User Link
    document.getElementsByClassName("add-user")[0].addEventListener("click", function(event){
        event.preventDefault();
        //alert("Add user button listener works");
        var xmlhttp = new XMLHttpRequest();
        var pageTitle = document.getElementById("title");
        pageTitle.innerHTML = "<h1>New User</h1>";
        //var textField = document.getElementsByClassName('title')[0].value; //placeholder


        xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200 ) {
                    //if (true ){
                        pageTitle.innerHTML = "<h1>New User</h1>";
                        document.getElementById("to-change").innerHTML = xmlhttp.responseText;

                    //}

                }
                else{
                    document.getElementById("title").innerHTML = " ";
                }
        };
        xmlhttp.open("GET", "bugTracker.php?a=" + pageTitle.innerText, true); //change to the field to go to php
        xmlhttp.send();


    });



    //-->New Issue Link
    document.getElementsByClassName("new-issue")[0].addEventListener("click", function(event){
        event.preventDefault();
        //alert("New issue button listener works");
        var xmlhttp = new XMLHttpRequest();

        var pageTitle = document.getElementById("title");
        pageTitle.innerHTML = "<h1>New Issue</h1>";
        //var textField = document.getElementsByClassName('title')[0].value; //placeholder


        xmlhttp.onreadystatechange = function() {
            pageTitle.innerHTML = "<h1>New Issue</h1>";
               if (this.readyState == 4 && this.status == 200 ) {
                    //if (true ){
                        //pageTitle.innerHTML = "<h1>New Issue</h1>";
                        document.getElementById("to-change").innerHTML = xmlhttp.responseText;

                    //}

                }
                else{
                    document.getElementById("title").innerHTML = " ";
                }
                //pageTitle.innerHTML = "<h1>New Issue</h1>";
                //document.getElementById("to-change").innerHTML = this.responseText;
        };
        xmlhttp.open("GET", "bugTracker.php?a=" + pageTitle.innerText, true); //change to the field to go to php
        xmlhttp.send();

    });

    //-->Logout Link
    document.getElementsByClassName("log-out")[0].addEventListener("click", function(event){
        event.preventDefault();
        //alert("Logout button listener works");
        var pageTitle = document.getElementById("title");
        //var textField = document.getElementsByClassName('title')[0].value; //placeholder

        var xmlhttp = new XMLHttpRequest();
        pageTitle.innerHTML = "<h1>Sign In</h1>";

        xmlhttp.onreadystatechange = function() {
                pageTitle.innerHTML = "<h1>Sign In</h1>";
                if (this.readyState == 4 && this.status == 200  ) {
                    //if (true ){
                        document.getElementById("to-change").innerHTML = xmlhttp.responseText;

                    //}

                }
                else{
                    document.getElementById("title").innerHTML = " ";
                }
        };
        xmlhttp.open("GET", "bugTracker.php?a=" + pageTitle.innerText, true); //change to the field to go to php
        xmlhttp.send();
    });


    //-->Change Filters

    
    var filterBtn = document.getElementById("filter-button");
    var allbtn = document.getElementById("all-button");
    var openbtn = document.getElementById("open-button");
    var myticketsbtn = document.getElementById("my-tickets-button");

    $('#all-button, #open-button, #my-tickets-button').on('click', function(event){
        event.preventDefault();
        var filterQuery = "";

        if (this.innerHTML == "ALL"){
            //alert("All button works");
            filterQuery = "ALL";
            //alert(filterQuery)

            allbtn.classList.add("selected-filter");
            openbtn.classList.remove("selected-filter");
            myticketsbtn.classList.remove("selected-filter");
        }
        if (this.innerHTML == "OPEN"){
            //alert("Open button works");
            filterQuery = "OPEN";
            //alert(filterQuery)

            allbtn.classList.remove("selected-filter");
            openbtn.classList.add("selected-filter");
            myticketsbtn.classList.remove("selected-filter");
        }
        if (this.innerHTML == "MY TICKETS"){
            //alert("My tickets button works");
            filterQuery = "MY-TICKETS";
            //alert(filterQuery)

            allbtn.classList.remove("selected-filter");
            openbtn.classList.remove("selected-filter");
            myticketsbtn.classList.add("selected-filter");
        }
        
        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200  ) {
                    
                        document.getElementById("to-change").innerHTML = xmlhttp.responseText;

                }
                else{
                    document.getElementById("title").innerHTML = " ";
                }
        };
        xmlhttp.open("GET", "bugTracker.php?a=" + filterQuery, true); //change to the field to go to php
        xmlhttp.send();        

    });


});