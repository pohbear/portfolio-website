$(document).ready(function () {
    // nav and loading into pages
    $(".body-content").hide().toggleClass("hidden").delay(300).fadeIn(300);
    $(".my-nav").click(function (e) {
      /* 
      need to store the current element being clicked here
      because within setTimeout(), $(this) doesn't point to the element
      but window because that's what is used to call the function setTimeout
      */
      var nav = $(this);
      var goto = nav.attr("href");
      console.log(nav);
      console.log(goto);
      e.preventDefault();
      $(".body-content").fadeOut(300);
      setTimeout(function () {
          window.location.href = goto;
        // if (nav.hasClass("nav-portfolio")) {
        //   window.location.href = "portfolio.html";
        // } else if (nav.hasClass("nav-about")) {
        //   window.location.href = "about.html";
        // } else if (nav.hasClass("nav-contact")) {
        //   window.location.href = "contact.html";
        // } else if (nav.hasClass("nav-home")) {
        //   window.location.href = "index.html";
        // } else {
        //     window.location.href = goto;
        // }
      }, 600);
    });

    // circle cursor
    var cursor = $(".cursor");

    $(window).mousemove(function(e) {
        cursor.css({
            top: e.clientY - cursor.height() / 2,
            left: e.clientX - cursor.width() / 2
        });
    });

    $(window)
        .mouseleave(function() {
            cursor.css({
                opacity: "0"
            });
        })
        .mouseenter(function() {
            cursor.css({
                opacity: "1"
            });
        });

    $("a")
        .mouseenter(function() {
            cursor.css({
                transform: "scale(2)"
            });
        })
        .mouseleave(function() {
            cursor.css({
                transform: "scale(1)"
            });
        });

    $(window)
        .mousedown(function() {
            cursor.css({
                transform: "scale(0.5)"
            });
        })
        .mouseup(function() {
            cursor.css({
                transform: "scale(1)"
            });
        });

    // portfolio
    // filter
    var filtered = false;
    $(".portfolio-filter").click(function() {
        if($(this).hasClass("selected")) {
            $(".portfolio-filter").removeClass("selected");
            filtered = false;
        } else {
            $(".portfolio-filter").removeClass("selected");
            $(this).addClass("selected");
            filtered = true;
        }

        if(filtered) {
            var filter = $(this).html();
            if(filter === "Development Works") {
                $(".cat2-content").hide(500);
                $(".cat1-content").show(500);
            } else if (filter === "Design Works") {
                $(".cat1-content").hide(500);
                $(".cat2-content").show(500);
            } else {
                $(".filter-content").html("Error!");
            }
        } else {
            $(".cat1-content").show(500);
            $(".cat2-content").show(500);
        }
    });

    // show item
    $(".portfolio-show").click(function () {
        var pf_id = this.id;
        console.log(pf_id);
        $("#portfolio-info-details").fadeOut(300);
        var content = "";
        switch(pf_id) {
            case "c1-penumbra":
                content = '<div id="portfolio-info-basic" class="flex-row flex-between">' + 
                '<div class="portfolio-info-block-main">' +  
                '<p id="portfolio-info-title" class="text-xlarge">Penumbra</p>' + 
                '<p id="portfolio-info-brief" class="text-medium text-light">VR Escape Room</p>' + 
                '<div class="spacer-large"></div>' + 
                '<p id="portfolio-info-software" class="text-large">Software: Unity</p>' + 
                '<div class="spacer-large"></div>' + 
                '<p id="portfolio-info-language" class="text-large">Language: C#</p>' + 
                '<div class="spacer-large"></div>' + 
                '<p id="portfolio-info-date" class="text-large">Completion Date: Feb 2022</p></div>' + 
                '<div class="portfolio-info-block-logo responsive-hide">' +  
                '<img id="portfolio-info-main-image" src="images/penumbra/penumbra_title_logo.png" alt="Penumbra Title and Logo"/></div>' + 
                '</div>' + 
                '<div class="spacer-large"></div>' + 
                '<div id="portfolio-info-writeup" class="flex-column flex-between responsive">' + 
                '<p class="text-large">Introduction</p>' + 
                '<p class="text-medium">Penumbra is a single player Virtual Reality escape room game that incorporates puzzles and problem-solving. ' + 
                'It was created in Unity. This was my first exposure to the Unity development platform, and game development as a whole.</p>' + 
                '<div class="spacer-large"></div>' + 
                '<p class="text-large">Design</p>' + 
                '<p class="text-medium">When I was trying to come up with ideas and themes for an escape room, I tried to think what would interest me. ' + 
                'From there, I picked elements that I felt would fit well with a VR escape room. I ended up with three major points to revolve my escape room around: </p>' + 
                '<div class="spacer"></div>' + 
                '<ul class="text-medium"><li>A setting that has elements of mystery or story-driven plot points in hopes of invoking a sense of curiousity or a need to progress within the players</li>' + 
                '<li>Try to avoid direct hand-holding to make the experience more immersive. The players should feel like they are trying to escape, instead of following steps or instructions</li>' + 
                '<li>Variety in terms of the puzzles to keep the escape room entertaining. I felt it would be boring if the puzzles all had the same mechanics or follow a certain sequence</li></ul>' + 
                '<div class="spacer"></div>' + 
                '<p class="text-medium">I decided on "Dystopian 18th Century Steampunk England" as the design theme for my escape room.</p> ' + 
                '<div class="spacer"></div>' + 
                '<p class="text-medium">My initial idea was for it to be a one-room design, where the puzzles would be located in different parts of the room.</p>' + 
                '<div class="spacer"></div>' + 
                '<img class="portfolio-info-image" src="images/penumbra/penumbra_interior_concept_1.png"/>' + 
                '<p class="text-small text-light text-center">Initial concept sketch of the room interior</p>' + 
                '<div class="spacer"></div>' + 
                '<p class="text-medium">After the initial concept, I felt that having all the puzzles in a single room might make it feel a little overwhelming and constrained. ' + 
                'I settled with a three room building design, with each room containing their own puzzle.</p>' + 
                '<div class="spacer"></div>' + 
                '<img class="portfolio-info-image" src="images/penumbra/penumbra_interior_concept_2.png"/>' + 
                '<p class="text-small text-light text-center">Updated three room building design concept</p>' + 
                '<div class="spacer"></div>' + 
                '<p class="text-medium">From there, I moved on to coming up with the actual puzzles for each room. I knew that I wanted to have a puzzle in each room, and an overarching puzzle that utilizes the clues or answers from the three room puzzles.</p>' + 
                '<div class="spacer"></div>' + 
                '<div class="flex-row flex-between">' +
                '<div class="portfolio-info-block">' + 
                '<img class="portfolio-info-image" src="images/penumbra/penumbra_puzzle_concept_1.png"/>' + 
                '<p class="text-small text-light text-center">Puzzle Concepts (Part 1)</p></div>' + 
                '<div class="portfolio-info-block">' + 
                '<img class="portfolio-info-image" src="images/penumbra/penumbra_puzzle_concept_2.png"/>' + 
                '<p class="text-small text-light text-center">Puzzle Concepts (Part 2)</p></div></div>' + 
                '<div class="spacer"></div>' + 
                '<p class="text-medium">With the ideation done and dusted, this is the final design for Penumbra.</p>' + 
                '<div class="spacer"></div>' + 
                '<div class="flex-row flex-between">' +
                '<div class="portfolio-info-block">' + 
                '<img class="portfolio-info-image" src="images/penumbra/penumbra_room_1.PNG"/>' + 
                '<p class="text-small text-light text-center">Penumbra: Room 1</p></div>' + 
                '<div class="portfolio-info-block">' + 
                '<img class="portfolio-info-image" src="images/penumbra/penumbra_room_2.PNG"/>' + 
                '<p class="text-small text-light text-center">Penumbra: Room 2</p></div></div>' + 
                '<div class="spacer"></div>' + 
                '<div class="flex-row flex-between">' +
                '<div class="portfolio-info-block">' + 
                '<img class="portfolio-info-image" src="images/penumbra/penumbra_room_3.PNG"/>' + 
                '<p class="text-small text-light text-center">Penumbra: Room 3</p></div>' + 
                '<div class="portfolio-info-block">' + 
                '<img class="portfolio-info-image" src="images/penumbra/penumbra_room_4.PNG"/>' + 
                '<p class="text-small text-light text-center">Penumbra: Corridor</p></div></div>' + 
                '<div class="spacer-large"></div>' + 
                '<p class="text-large">Gameplay Loop</p>' + 
                '<p class="text-medium">Penumbra consists of four key areas, each of them with their own focus and puzzle: </p>' + 
                '<div class="spacer"></div>' + 
                '<ul class="text-medium"><li>Room 1: Contains the main table and the first puzzle</li>' + 
                '<li>Room 2: Contains the second puzzle</li>' + 
                '<li>Room 3: Contains the third puzzle</li>' + 
                '<li>Corridor: Contains the main door and serves as the connector between rooms</li></ul>' + 
                '<div class="spacer"></div>' + 
                '<p class="text-medium">The objective is for the player to solve four puzzles in total to escape the area. ' + 
                'The puzzles that were implemented were designed to not only be varied in terms of mechanics, but also in a way that elements could be randomized, which allows for different answers (and thus possibly replayability) on each playthrough. ' +
                'This was achieved through scripting in Unity. Scripting also allowed me to make the game less linear, ' + 
                'which meant that the player had a sense of freedom in choosing which puzzle they wanted to complete first.</p>' + 
                '<div class="spacer"></div>' + 
                '<div class="flex-row flex-between">' +
                '<div class="portfolio-info-block-small">' +
                '<img class="portfolio-info-image" src="images/penumbra/penumbra_flow_puzzle_1.png"/>' + 
                '<p class="text-small text-light text-center">Puzzle 1 Flowchart</p></div>' + 
                '<div class="portfolio-info-block-small">' +
                '<img class="portfolio-info-image" src="images/penumbra/penumbra_flow_puzzle_2.png"/>' + 
                '<p class="text-small text-light text-center">Puzzle 2 Flowchart</p></div>' + 
                '<div class="portfolio-info-block-small">' +
                '<img class="portfolio-info-image" src="images/penumbra/penumbra_flow_puzzle_3.png"/>' + 
                '<p class="text-small text-light text-center">Puzzle 3 Flowchart</p></div>' + 
                '<div class="portfolio-info-block-small">' +
                '<img class="portfolio-info-image" src="images/penumbra/penumbra_flow_maindoor.png"/>' + 
                '<p class="text-small text-light text-center">Puzzle 4 (Main Door) Flowchart</p></div></div>' + 
                '<div class="spacer-large"></div>' + 
                '<p class="text-large">Gameplay Footage</p>' + 
                '<div class="spacer-large"></div>' + 
                '<video width="960" height="540" controls><source src="images/penumbra/penumbra_gameplay_compressed_default.mp4" type="video/mp4" playinline/></video>' + 
                '<div class="spacer-large"></div>' + 
                '<p class="text-large">Final Thoughts</p>' + 
                '<p class="text-medium">Through this project, a few key takeaways for me would be: </p>' + 
                '<div class="spacer"></div>' + 
                '<ul class="text-medium"><li>Game Design: The ideation process behind designing a game from scratch, and the documentation that is done during the process</li>' + 
                '<li>Platform: Learning how to use the Unity platform to create a 3D game using features like ProBuilder, ProGrids and Shader Graph to name a few</li>' + 
                '<li>Scripting: Despite not having detailed much of this in the writeup, ' + 
                'learning how to script for a Unity VR Game with C# was definitely a major part of the entire process as it was a new language with new features and functions</li>' + 
                '<li>Self-learning: Learning how to create and use my own Animations, debugging and error-checking in Unity</li></ul>' + 
                '<div class="spacer"></div>' + 
                '<p class="text-medium">I definitely learned that creating a game from scratch is not as easy as people make it out to be. ' + 
                'There were many obstacles along the way, but I am glad I was able to learn from them. ' + 
                'If the opportunity ever arises, I would definitely like to try my hand at creating another game on my own.</p>' + 
                '</div>'
                break;
            case "c1-reptrack":
                content = '<div id="portfolio-info-basic" class="flex-row flex-between">' +
                '<div class="portfolio-info-block-main">' +  
                '<p id="portfolio-info-title" class="text-xlarge">RepTrack</p>' + 
                '<p id="portfolio-info-brief" class="text-medium text-light">AI Fitness Tracking App</p>' + 
                '<div class="spacer-large"></div>' + 
                '<p id="portfolio-info-software" class="text-large">Software: Android Studio</p>' + 
                '<div class="spacer-large"></div>' + 
                '<p id="portfolio-info-language" class="text-large">Language: Java, php, SQL</p>' + 
                '<div class="spacer-large"></div>' + 
                '<p id="portfolio-info-date" class="text-large">Completion Date: Feb 2022</p></div>' + 
                '<div class="portfolio-info-block-logo responsive-hide">' +  
                '<img id="portfolio-info-main-image" src="images/reptrack/reptrack_title_logo.png" alt="RepTrack Title and Logo"/></div>' + 
                '</div>' + 
                '<div class="spacer-large"></div>' + 
                '<div id="portfolio-info-writeup"  class="flex-column flex-between responsive">' + 
                '<p class="text-large">Introduction</p>' + 
                '<p class="text-medium">RepTrack is a fitness tracking app that utilizes AI and Computer Vision to scan gym equipment and teach users how to use them. ' + 
                'It was created by my team as our submission for a Special Projects module. </p>' + 
                '<div class="spacer-large"></div>' + 
                '<p class="text-large">Ideation</p>' + 
                '<div class="flex-row flex-between">' + 
                '<div class="portfolio-info-block-large">' + 
                '<p class="text-medium">The idea stemmed from both personal experiences and anecdotes from my friends. ' +  
                'When I first started going to the gym, everything seemed daunting and I was very lost. ' + 
                'There were cases where other gym-goers had to let me know that I had bad form, and I would injure myself if I kept going at it. ' + 
                'The catalyst for this whole idea was a conversation I had with my friend a week before, where he had an injury scare from working out.</p>' + 
                '<div class="spacer"></div>' + 
                '<p class="text-medium">We did some research and found many apps that taught users how to use different equipment for various exercises, ' +  
                'but all of them required the user to have basic knowledge on gym equipment and muscle groups. ' + 
                'We realised that none of them were completely beginner friendly, and we wanted to fill in that gap. ' + 
                'As part of our modules, we recently learned some (very) basic Artificial Intelligence and Machine Learning theory. ' + 
                'We decided on the idea of allowing an individual to use the camera on their smart phone, scan a piece of gym equipment, ' + 
                'and our computer vision model would help to detect the equipment, and provide the necessary information for a beginner to start working out.</p></div>' + 
                '<div class="portfolio-info-block-small">' + 
                '<img class="portfolio-info-image" src="images/reptrack/reptrack_ideation_convo.png"/>' + 
                '<p class="text-small text-light text-center">Gotta take care of the family jewels</p></div></div>' + 
                '<div class="spacer-large"></div>' + 
                '<p class="text-large">Development</p>' + 
                '<p class="text-medium">We did our development on Android Studio, as we used it before in a mobile app development module. ' + 
                'While it was familiar to us, we wanted to learn something new too, so each of us had a focus domain when it came to the app creation. More on that in a little bit.</p>' + 
                '<div class="spacer"></div>' + 
                '<p class="text-medium">For our computer vision model, we used Teachable Machine from Google to create it. ' + 
                'We each picked a piece of gym equipment, and then sourced for at least 50 images to train our model with. ' + 
                'The result was a simple model that could detect 3 different pieces of gym equipment: A lat pulldown machine, a leg press, or a treadmill. ' + 
                'We exported the model as a Tensorflow Lite file, and added it into our Android app.</p>' + 
                '<div class="spacer"></div>' + 
                '<p class="text-medium">My main contributions to the app would be Fragments, handling the back-end functions, and the Tracker feature. ' + 
                '<div class="spacer"></div>' + 
                '<p class="text-medium">For Fragments, I had to learn on my own how it works, and how to implement it. ' + 
                'I chose to implement Fragments as I felt that it made the entire navigation process a lot more intuitive, ' + 
                'and I wanted to learn something new to challenge myself. ' + 
                'Learning and implementing Fragments was very challenging, because we were already using Activities for our template. ' + 
                'I also had to teach my fellow teammates how to use it, and implement their features as a Fragment. ' + 
                'However, it paid off at the end and we were able to utilize Fragments within our app.</p>' + 
                '<div class="spacer"></div>' + 
                '<p class="text-medium">The backend was implemented using SQLite, which we could use for CRUD. ' + 
                'With the limited time we had, we chose to use SQLite because we had learned about it before. ' + 
                'The learning point for the backend was trying to host it online instead of locally. ' + 
                'Sadly due to time constraints, we learned it but were not able to properly implement it.</p>' + 
                '<div class="spacer"></div>' + 
                '<p class="text-medium">Last but not least was the tracker feature, which was used to store and track the users exercise history. ' + 
                'Utilizing nested Fragments, the tracker was built with CustomListViews with CustomAdapters so I could customise the layout and output for each list item. ' + 
                'The user would have a target set for each exercise and the output for each entry would reflect whether they met their target. ' + 
                'The challenge faced here was that I wanted to use ContextMenus and Dialogs to allow the user to edit and delete their workout entries, ' + 
                'but I was not able to find out how to properly implement it. My workaround was to include buttons instead of ContextMenu.</p> ' + 
                '<div class="spacer"></div>' + 
                '<div class="flex-row flex-between">' + 
                '<div class="portfolio-info-block-small">' + 
                '<img class="portfolio-info-image" src="images/reptrack/reptrack_scanner.gif"/>' + 
                '<p class="text-small text-light text-center">Scanning with camera in RepTrack</p></div>' + 
                '<div class="portfolio-info-block-small">' + 
                '<img class="portfolio-info-image" src="images/reptrack/reptrack_fragment.gif"/>' + 
                '<p class="text-small text-light text-center">Fragments within RepTrack</p></div>' + 
                '<div class="portfolio-info-block-small">' + 
                '<img class="portfolio-info-image" src="images/reptrack/reptrack_tracker.gif"/>' + 
                '<p class="text-small text-light text-center">Tracker with nested fragments</p></div></div>' + 
                '<div class="spacer-large"></div>' + 
                '<p class="text-large">Final Thoughts</p>' + 
                '<p class="text-medium">Through this project, I gained the experience of working in a team on a mostly self-managed project. ' + 
                'It showed me how important the planning phase of a project is, as we had many struggles and changes between due to the lack of proper planning. ' + 
                'Another key takeaway would be communication. When working on a project with others, it is easy to make mistakes like ' + 
                'overwriting code or clashing names. We had to come up with standard sequence of actions when interacting with the code and GitHub, ' + 
                'and also standardised naming conventions based on the various features.</p>' + 
                '</div>' + 
                '</div>'
                break;
            // case "c1-clicksociety":
            //     content = '<div id="portfolio-info-basic" class="flex-row flex-between">' + 
            //     '<div class="portfolio-info-block-main">' +  
            //     '<p id="portfolio-info-title" class="text-xlarge">Click Society</p>' + 
            //     '<p id="portfolio-info-brief" class="text-medium text-light">E-Commerce Website</p>' + 
            //     '<div class="spacer-large"></div>' + 
            //     '<p id="portfolio-info-software" class="text-large">Software: Wordpress</p>' + 
            //     '<div class="spacer-large"></div>' + 
            //     '<p id="portfolio-info-language" class="text-large">Framework: WooCommerce</p>' + 
            //     '<div class="spacer-large"></div>' + 
            //     '<p id="portfolio-info-date" class="text-large">Completion Date: Feb 2022</p></div>' + 
            //     '<div class="portfolio-info-block-logo flex-row flex-center text-center">' +  
            //     '<img id="portfolio-info-main-image" src="images/clicksociety/clicksociety_title_logo.png" alt="The Click Society Title and Logo"/></div>' + 
            //     '</div>' + 
            //     '<div class="spacer-large"></div>' + 
            //     '<div id="portfolio-info-writeup" class="flex-column flex-between responsive">' + 
            //     '<p class="text-large">Introduction</p>' + 
            //     '<p class="text-medium">The Click Society is a e-commerce website that was created as a submission for a Front-End Web Development module.</p>' + 
            //     '<div class="spacer-large"></div>' + 
            //     '<p class="text-large">Development</p>' + 
            //     '<p class="text-medium">The Click Society was developed with WordPress and WooCommerce for the main content, ' + 
            //     'with ContactForm7 and Flamingo to support contact form submissions.</p>' + 
            //     '<div class="spacer"></div>' + 
            //     '<p class="text-medium">The design is focused on black and white to be minimalistic and sleek, ' + 
            //     'so that the focus can be put on the products on the platform.</p>' + 
            //     '</div>'
            //     break;
            case "c1-quizzy":
                content = '<div id="portfolio-info-basic" class="flex-row flex-between">' + 
                '<div class="portfolio-info-block-main">' +  
                '<p id="portfolio-info-title" class="text-xlarge">Quizzy</p>' + 
                '<p id="portfolio-info-brief" class="text-medium text-light">Quiz Website</p>' + 
                '<div class="spacer-large"></div>' + 
                '<p id="portfolio-info-software" class="text-large">Software: VS Code</p>' + 
                '<div class="spacer-large"></div>' + 
                '<p id="portfolio-info-language" class="text-large">Language: HTML, CSS, JavaScript</p>' + 
                '<div class="spacer-large"></div>' + 
                '<p id="portfolio-info-date" class="text-large">Completion Date: Jan 2022</p>' + 
                '<div class="spacer-large"></div>' + 
                '<p id="portfolio-info-website" class="text-large"><a href="https://rpkennethpoh.github.io/quizzy/" target="_blank">Website Link</a></p></div>' + 
                '<div class="portfolio-info-block-logo responsive-hide">' +  
                '<img id="portfolio-info-main-image" src="images/quizzy/quizzy_title_logo.png" alt="Quizzy Title and Logo"/></div>' + 
                '</div>' + 
                '<div class="spacer-large"></div>' + 
                '<div id="portfolio-info-writeup" class="flex-column flex-between responsive">' + 
                '<p class="text-large">Introduction</p>' + 
                '<p class="text-medium">Quizzy is a online quiz website for children to test their knowledge on vehicle parts and anatomies.</p> ' + 
                '<div class="spacer-large"></div>' + 
                '<p class="text-large">Design</p>' + 
                '<p class="text-medium">Since this website was built for children, I tried to use a variety of colours to increase the appeal. ' + 
                'Overall, I wanted to go for pastel colours to keep the pages mild. ' + 
                'For the main colours, I went with a monochromatic blue to evoke a sense of calm and avoid it from being too jarring. ' + 
                'For the logo, I went with a complementary between purple and green. ' + 
                'Both the design and colour inspiration for this was honestly in the spur of the moment, ' + 
                'as I was thinking about the Batman villains Riddler and Joker. ' + 
                'I thought it was appropriate since the website was about quizzes, so I just went with it.</p> ' + 
                '<div class="spacer"></div>' + 
                '<p class="text-medium">The fonts used are Mochiy Pop P One and Poppins. ' +
                'Mochiy Pop P One is a decorative and cute font to fit the demographic, while Poppins would help the page maintain it\'s clean aesthetic.</p> ' +  
                '<div class="spacer"></div>' + 
                '<p class="text-medium">The vehicles and backgrounds for the buttons were drawn in Illustrator. ' + 
                'The idea was for them to provide more context by reflecting the environment of each vehicle.</p>' + 
                '<div class="spacer"></div>' + 
                '<img class="portfolio-info-image" src="images/quizzy/quizzy_screencap.png"/>' + 
                '<p class="text-small text-light text-center">Screencap of Quizzy\'s welcome page</p>' + 
                '<div class="spacer-large"></div>' + 
                '<p class="text-large">Development</p>' + 
                '<p class="text-medium">This website was built using HTML, CSS and JavaScript. ' + 
                'The libraries used in this project were anime.js for animations, fullpage.js and Bootstrap for the layout, ' + 
                'and jQuerys quiz.js for the actual quiz.</p> ' + 
                '<div class="spacer"></div>' + 
                '<p class="text-medium">The main challenge I faced was trying to limit the access to different quizzes based on progression. ' + 
                'The idea was for the player to complete Quiz 1 before they could access Quiz 2, and so on. ' + 
                'I had the general idea of using boolean variables to set flags once a user completes a quiz level, ' + 
                'but I had some trouble trying to implement it. After some time, I managed to get it to work.</p> ' + 
                '<div class="spacer-large"></div>' + 
                '<p class="text-large">Final Thoughts</p>' + 
                '<p class="text-medium">Through this project, I experienced building a website using multiple JavaScript libraries together. ' + 
                'The website is not complete, and it only has functionality for one quiz. ' + 
                'I tried to create the second quiz using the jQuery quiz.js, but it only allows for one quiz to be created at any time. ' + 
                'My idea of a workaround would probably be to create the quizzes manually instead of relying on quiz.js. ' + 
                'Figuring that out would probably allow me to complete the whole website. I\'ll try to experiment around during my free time.</p>' + 
                '<div class="spacer"></div>' + 
                '<p class="text-medium">In case you missed it, ' + 
                'you can <a href="https://rpkennethpoh.github.io/quizzy/" target="_blank">click here</a> ' + 
                'to visit the Quizzy website!</p> ' + 
                '</div>'
                break;
            case "c2-portfolioapp":
                content = '<div id="portfolio-info-basic" class="flex-row flex-between">' + 
                '<div class="portfolio-info-block-main">' +  
                '<p id="portfolio-info-title" class="text-xlarge">My Portfolio App</p>' + 
                '<p id="portfolio-info-brief" class="text-medium text-light">Portfolio App Design</p>' + 
                '<div class="spacer-large"></div>' + 
                '<p id="portfolio-info-software" class="text-large">Software: Adobe Illustrator, Adobe XD</p>' + 
                '<div class="spacer-large"></div>' + 
                '<p id="portfolio-info-date" class="text-large">Completion Date: Aug 2021</p>' + 
                '<div class="spacer-large"></div>' + 
                '<p id="portfolio-info-website" class="text-large"><a href="https://xd.adobe.com/view/adacb5c8-3be7-4cb2-829c-77151805ef65-f8ff/" target="_blank">XD Link</a></p></div>' + 
                '<div class="portfolio-info-block-logo responsive-hide">' +  
                '<img id="portfolio-info-main-image" src="images/portfolioapp/portfolioapp_title_logo.png" alt="Portfolio App Title and Logo"/></div>' + 
                '</div>' + 
                '<div class="spacer-large"></div>' + 
                '<div id="portfolio-info-writeup" class="flex-column flex-between responsive">' + 
                '<p class="text-large">Introduction</p>' + 
                '<p class="text-medium">My Portfolio App is an Adobe XD Prototype of a mobile portfolio app ' + 
                'created to promote myself and showcase my projects.</p> ' + 
                '<div class="spacer-large"></div>' + 
                '<p class="text-large">Design</p>' + 
                '<div class="spacer"></div>' + 
                '<p class="text-medium text-bold">Logo</p> ' + 
                '<p class="text-medium">I went through a few different variations and iterations when trying to design a personal logo. ' + 
                'I wanted something that could represent me well, but still look professional. ' + 
                'I tried to center my ideas around the moniker of "Pohbear", which was my nickname since secondary school. ' + 
                'Out of the different variations, I decided to go with the bear made with geometric shapes since I thought it fit my needs the best.</p>' + 
                '<div class="spacer"></div>' + 
                '<img class="portfolio-info-image" src="images/portfolioapp/portfolioapp_logo_design.png"/>' + 
                '<p class="text-small text-light text-center">Pohbear logo design variations</p>' + 
                '<div class="spacer"></div>' + 
                '<p class="text-medium text-bold">App</p> ' + 
                '<p class="text-medium">The overall aesthetic that I was trying to achieve was clean, ' + 
                'but I wanted to include some flair to grab people\'s attention. ' + 
                'I decided that the clean aesthetic would be dependent on the overall layout design, ' + 
                'while the flair from the animations and transitions would complement it.</p>' +
                '<div class="spacer"></div>' + 
                '<p class="text-medium">Since this app was meant to be representative of me, ' + 
                'I went with an analogous colour scheme of blues and greens, which are my favourite colours. ' + 
                'I also wanted to make sure my logo could be seen, ' + 
                'but I did not want it to take up space especially when there is so little of it on a mobile screen. ' + 
                'My workaround was to include it in the background, with the opacity turned down so it does not distract the user.</p>' +
                '<div class="spacer"></div>' + 
                '<img class="portfolio-info-image" src="images/portfolioapp/portfolioapp_colours.png"/>' + 
                '<p class="text-small text-light text-center">Colour scheme for the app</p>' + 
                '<div class="spacer"></div>' + 
                '<p class="text-medium">The fonts used were Segoe UI and Lato. I prefer using sans-serif fonts, ' + 
                'because I feel they help a page look friendly, but still maintains a sense of cleanliness or professionalism.' + 
                '<div class="spacer"></div>' + 
                '<p class="text-medium">I would say that the main design features of this portfolio app are the navigation and the about page. ' + 
                'For the navigation, I wanted it to be more unique since transitioning between pages would be one of the key interactions done by a user. ' + 
                'I decided to go with a rotating circular design as opposed to generic buttons or tabs at the bottom of the page. ' + 
                'I also didn\'t want the text at the navigation area to just fade in and out, ' + 
                'so I designed it to look like the text was rearranging itself instead.' + 
                'As for the about page, I wanted to properly represent the duality of doing both design and development, ' + 
                'so I implemented two buttons beside my name in the page, and the contents would change based on the button pressed.</p>' + 
                '<div class="spacer-large"></div>' + 
                '<p class="text-large">Final Thoughts</p>' + 
                '<p class="text-medium">This was definitely a learning experience for me, especially since I tried to apply some unconventional ' +  
                'design choices like changing the navigation and trying to showcase the sense of duality. ' + 
                'The prototyping for those were tough and despite not being amazing or perfect, I am content with the way it turned out. ' + 
                'Also, while creating this app, it dawned on me as to how bad I am at managing my layers and artboards. ' + 
                'I should probably work on improving that haha. </p> ' + 
                '<div class="spacer"></div>' + 
                '<p class="text-medium">In case you missed it, ' + 
                'you can <a href="https://xd.adobe.com/view/adacb5c8-3be7-4cb2-829c-77151805ef65-f8ff/" target="_blank">click here</a> ' + 
                'to visit view the XD Prototype!</p> ' + 
                '</div>'
                break;
            case "c1-cagapp":
                content = '<div id="portfolio-info-basic" class="flex-row flex-between">' + 
                '<div class="portfolio-info-block-main">' +  
                '<p id="portfolio-info-title" class="text-xlarge">CAG Tracker</p>' + 
                '<p id="portfolio-info-brief" class="text-medium text-light">Android Mobile App</p>' + 
                '<div class="spacer-large"></div>' + 
                '<p id="portfolio-info-software" class="text-large">Software: Android Studio</p>' + 
                '<div class="spacer-large"></div>' + 
                '<p id="portfolio-info-language" class="text-large">Language: Java</p>' + 
                '<div class="spacer-large"></div>' + 
                '<p id="portfolio-info-date" class="text-large">Completion Date: Aug 2021</p></div>' + 
                '<div class="portfolio-info-block-logo responsive-hide">' +  
                '<img id="portfolio-info-main-image" src="images/cagcalc/cagcalc_logo.png" alt="CAG App Title and Logo"/></div>' + 
                '</div>' + 
                '<div class="spacer-large"></div>' + 
                '<div id="portfolio-info-writeup" class="flex-column flex-between responsive">' + 
                '<p class="text-large">Introduction</p>' + 
                '<p class="text-medium">CAG Tracker is an Android application created to help students from Republic Polytechnic ' + 
                'calculate and track their Continuous Assessment Grade (CAG) scores.</p> ' + 
                '<div class="spacer-large"></div>' + 
                '<p class="text-large">Design</p>' + 
                '<p class="text-medium">This app was created mostly with function in mind, as opposed to form. ' + 
                'The basic design considerations implemented were the colours of Republic Polytechnic, which are green and black. ' + 
                'I also tried to make sure the text and buttons were large enough to see and interact with.</p> ' + 
                '<div class="spacer-large"></div>' + 
                '<p class="text-large">Development</p>' + 
                '<p class="text-medium">The app was created in Android Studio. ' + 
                'The features/techniques implemented are Activities, ArrayLists with CustomAdapters, ContextMenus, Dialogs, and SQLite' + 
                'The general gist of this application is it allows users to store modules and their corresponding CAGs locally through SQLite. ' + 
                'This way, the application can run offline and they are able to reference their grades whenever they want to. ' + 
                'They can then manage their grades and modules through basic CRUD functions.</p>' +
                '<div class="spacer"></div>' + 
                '<p class="text-medium">Each part of the app exists within its own Activity, ' + 
                'so there is an Activity for the main page, modules, CAGs, and calculations.</p>' + 
                '<div class="spacer"></div>' + 
                '<p class="text-medium">The module Activity and the CAG Activity are very similar. ' + 
                'They fetch the entries from each corresponding table in the database, and displays it as a ListView. ' + 
                'The user can add entries by pressing a button, which will bring up a Dialog. ' + 
                'For existing entries, they can edit or delete them with a long press on each entry, which will bring up a ContextMenu.</p>' + 
                '<div class="spacer"></div>' + 
                '<p class="text-medium">In the calculation Activity, the user will pick the module they want to calculate for, ' + 
                'enter the scores they got for their CAG, and the app will used the percentages defined by the module to calculate their score. ' + 
                'The score is presented through a Dialog, and the user can choose to "Save" or "Cancel" their calculation. </p>' + 
                '<div class="spacer"></div>' + 
                '<div class="flex-row flex-between">' + 
                '<div class="portfolio-info-block-small">' + 
                '<img class="portfolio-info-image" src="images/cagcalc/cagcalc_add_module.gif"/>' + 
                '<p class="text-small text-light text-center">Adding a module</p></div>' + 
                '<div class="portfolio-info-block-small">' + 
                '<img class="portfolio-info-image" src="images/cagcalc/cagcalc_calculate.gif"/>' + 
                '<p class="text-small text-light text-center">Calculating and viewing CAG entries</p></div>' + 
                '<div class="portfolio-info-block-small">' + 
                '<img class="portfolio-info-image" src="images/cagcalc/cagcalc_remove_cag.gif"/>' + 
                '<p class="text-small text-light text-center">Removing CAG entry</p></div></div>' + 
                '<div class="spacer-large"></div>' + 
                '<p class="text-large">Final Thoughts</p>' + 
                '<p class="text-medium">This was an app that I built for practical use, as opposed to just building for the sake of it. ' +  
                'I created the app right after learning about Dialogs, ' + 
                'and this helped me to understand how useful Dialogs are in streamlining and providing feedback during a process. ' + 
                'Creating this app also showed me how important planning was. Initially, I built it without much planning, ' + 
                'thinking that it would not be that difficult. I struggled when it came to setting up the database and the functions, ' + 
                'and I ended up having to add and edit a fair amount of code, which lengthened the process.</p> ' + 
                '</div>'
                break;
            case "c2-mindsapp":
                content = '<div id="portfolio-info-basic" class="flex-row flex-between">' + 
                '<div class="portfolio-info-block-main">' +  
                '<p id="portfolio-info-title" class="text-xlarge">Minds App</p>' + 
                '<p id="portfolio-info-brief" class="text-medium text-light">Inclusive App Design</p>' + 
                '<div class="spacer-large"></div>' + 
                '<p id="portfolio-info-software" class="text-large">Software: Adobe XD</p>' + 
                '<div class="spacer-large"></div>' + 
                '<p id="portfolio-info-date" class="text-large">Completion Date: Jul 2021</p>' + 
                '<div class="spacer-large"></div>' + 
                '<p id="portfolio-info-website" class="text-large"><a href="https://xd.adobe.com/view/f75cd724-5958-44b3-903f-a57e5509e60e-a20f/" target="_blank">XD Link</a></p></div>' + 
                '<div class="portfolio-info-block-logo responsive-hide">' +  
                '<img id="portfolio-info-main-image" src="images/mindsapp/mindsapp_title_logo.png" alt="Minds App Title and Logo"/></div>' + 
                '</div>' + 
                '<div class="spacer-large"></div>' + 
                '<div id="portfolio-info-writeup" class="flex-column flex-between responsive">' + 
                '<p class="text-large">Introduction</p>' + 
                '<p class="text-medium">This XD Prototype was created as an app designed to cater towards children with special needs ' + 
                'or learning disabilities. The app is suppose to help these children learn more about their emotions ' + 
                'through the use of helpful keywords, visual cues, and colours. Doing so will allow them to express themselves more accurately, ' + 
                'and also understand other people better.</p> ' + 
                '<div class="spacer-large"></div>' + 
                '<p class="text-large">Design</p>' + 
                '<div class="spacer"></div>' + 
                '<div class="flex-row flex-between">' + 
                '<div class="portfolio-info-block-large">' + 
                '<p class="text-medium text-bold">Logo/Mascot</p> ' + 
                '<p class="text-medium">When I was trying to come up with a mascot or logo to represent the application, ' + 
                'I had to try to put myself in the shoes of a child with a learning disability. I wanted to design something simple, ' + 
                'because having too much could result in a sensory overload. I also wanted to make it something that looked appealing and approachable. ' + 
                'I was inspired by my interests at the time, a virtual Youtuber named Tsunomaki Watame. ' + 
                'Her character design was based on sheeps, and she has a rather soothing voice and personality. ' + 
                'I quite liked the idea of using a sheep, since they are usually seen as calm and affectionate. ' + 
                'The mascot (both the art and the name) were heavily inspired by her. </p></div> ' + 
                '<div class="portfolio-info-block-small">' +
                '<img class="portfolio-info-image" src="images/mindsapp/mindsapp_logo.png"/>' + 
                '<p class="text-small text-light text-center">Say hi to Wata the sheep</p></div>' + 
                '</div>' + 
                '<div class="spacer"></div>' + 
                '<p class="text-medium text-bold">App</p> ' + 
                '<p class="text-medium">Designing the app with children with learning disabilities in mind, ' + 
                'I wanted to make sure the elements within the app were all clear and distinct. ' + 
                'To achieve this, I went with a grid-like positioning for the layout to ensure there was structure to it. ' + 
                'For the colours, I wanted to try to impart various meanings to them. </p>' + 
                '<ul class="text-medium"><li>The background is light blue to evoke an overall sense of calm</li> ' + 
                '<li>The buttons on the main page are different colours to distinguish between three different activities</li> ' + 
                '<li>The buttons on the "Learn" page are reflective of each emotion they can learn about</li> ' + 
                '<li>The buttons on the "Practice" page are varying shades of green, to reflect the difficulty and mirror the green "Practice" button on the main page</li></ul> ' + 
                '<div class="spacer"></div>' + 
                '<p class="text-medium">Whenever Wata is giving some advice or instruction, I tried to draw attention to it by ' + 
                'dimming the background, and making sure Wata and the text were in the center. ' + 
                'I also tried to make sure the instructions were simple and clear so that children could better understand it. </p>' +
                '<div class="spacer"></div>' + 
                '<p class="text-medium">The app was designed to include kinesthetic, auditory, and haptic feedback/functions to further improve the learning experience.</p>' + 
                '<ul class="text-medium"><li>Kinesthetics functions are achieved with the phone\'s camera and user proximity. ' + 
                'The children can take a photo an individual, and a computer vision model trained to read facial features and expressions ' + 
                'will try to determine which expressions/feelings are present, and present it to the user.</li>' +
                '<li>Auditory feedback is achieved using alerts and notifications, and error tones. ' + 
                'The audio would have to be mild to ensure there is no sensory overload, but clear enough to provide proper feedback. ' + 
                'A short ding that fades can indicate a right answer, while two short tones can indicate a wrong answer.</li>' +
                '<li>Haptic feedback is achieved through the use of vibrations. Whenever the user interacts with an interactable, ' + 
                'the phone will vibrate slightly to indicate that an action is being carried out.</li></ul> ' + 
                '<div class="spacer-large"></div>' + 
                '<p class="text-large">Final Thoughts</p>' + 
                '<p class="text-medium">Designing an app catered towards individuals with disabilities requires extreme effort and caution. ' +  
                'There were many points where I thought to include something into the app, ' + 
                'only to realise that was based on my own assumptions of what I would like in an app, instead of what would be useful for my target audience. ' + 
                'Through creating this app, I learned about various disabilities and how I can design products with inclusivity in mind.</p> ' + 
                '<div class="spacer"></div>' + 
                '<p class="text-medium">In case you missed it, ' + 
                'you can <a href="https://xd.adobe.com/view/f75cd724-5958-44b3-903f-a57e5509e60e-a20f/" target="_blank">click here</a> ' + 
                'to visit view the XD Prototype!</p> ' + 
                '</div>'
                break;
            case "c2-veritas":
                content = '<div id="portfolio-info-basic" class="flex-row flex-between">' + 
                '<div class="portfolio-info-block-main">' +  
                '<p id="portfolio-info-title" class="text-xlarge">Veritas</p>' + 
                '<p id="portfolio-info-brief" class="text-medium text-light">E-Commerce Website Design</p>' + 
                '<div class="spacer-large"></div>' + 
                '<p id="portfolio-info-software" class="text-large">Software: Adobe XD</p>' + 
                '<div class="spacer-large"></div>' + 
                '<p id="portfolio-info-date" class="text-large">Completion Date: Jun 2021</p>' + 
                '<div class="spacer-large"></div>' + 
                '<p id="portfolio-info-website" class="text-large"><a href="https://xd.adobe.com/view/9f7e7fd5-ce96-438a-a0b2-c0d878a2a76d-ca2d/" target="_blank">XD Link</a></p></div>' + 
                '<div class="portfolio-info-block-logo responsive-hide">' +  
                '<img id="portfolio-info-main-image" src="images/veritas/veritas_title_logo.png" alt="Veritas Title and Logo"/></div>' + 
                '</div>' + 
                '<div class="spacer-large"></div>' + 
                '<div id="portfolio-info-writeup" class="flex-column flex-between responsive">' + 
                '<p class="text-large">Introduction</p>' + 
                '<p class="text-medium">This XD Prototype is for Veritas, an imaginary company that sells Virtual Reality equipment. ' + 
                'This was created as a submission for class, and is one of my first design prototypes.</p>' + 
                '<div class="spacer-large"></div>' + 
                '<p class="text-large">Design</p>' + 
                '<div class="spacer"></div>' + 
                '<p class="text-medium text-bold">Logo</p> ' + 
                '<p class="text-medium">I designed my logo around the business, which is to sell VR equipment. ' + 
                'The logo is a combination of an eye and a camera shutter. ' + 
                'This represents the combination of human vision and technology to provide a realistic experience. ' + 
                'The light blue iris is suppose to signify the user \'opening their eyes\', and being ushered into a new world.</p> ' + 
                '<div class="spacer"></div>' + 
                '<p class="text-medium text-bold">Name</p> ' + 
                '<p class="text-medium">The name Veritas is Latin for truth or reality. The company\'s vision is "The leaders of virtual reality", ' + 
                'and the tagline is "Capturing reality", which ties in to the Veritas logo.</p>' +
                '<div class="spacer"></div>' + 
                '<p class="text-medium text-bold">Colour</p> ' + 
                '<p class="text-medium">The website and logo use a monochromatic blue colour scheme, from a pastel blue to black. ' +
                'The lighter blue hues are suppose to impart a sense of calm and serenity, while being associated with technology. ' + 
                'The darker blues and black are used to symbolise sophistication and simplicity.</p>' +
                '<div class="spacer"></div>' + 
                '<img class="portfolio-info-image" src="images/veritas/veritas_colour_scheme.png"/>' + 
                '<p class="text-small text-light text-center">Veritas design colour scheme</p>' + 
                '<div class="spacer"></div>' + 
                '<p class="text-medium text-bold">Layout</p> ' + 
                '<p class="text-medium">Since the overall design theme is meant to be sophisticated and simple, ' +
                'the website layout is based on a grid. Each key element, product, or block is properly segmented to ensure clarity.' + 
                'The darker blues and black are used to symbolise sophistication and simplicity.</p>' +
                '<div class="spacer-large"></div>' + 
                '<p class="text-large">Final Thoughts</p>' + 
                '<p class="text-medium">Considering how this was my first experience designing a website with XD and creating a prototype, ' + 
                'I am glad with the results. Although there is no "Wow Factor" to it, I feel like I did a decent job trying to deliver ' + 
                'a design that is simple and sophisticated.</p> ' + 
                '<div class="spacer"></div>' + 
                '<p class="text-medium">In case you missed it, ' + 
                'you can <a href="https://xd.adobe.com/view/9f7e7fd5-ce96-438a-a0b2-c0d878a2a76d-ca2d/" target="_blank">click here</a> ' + 
                'to visit view the XD Prototype!</p> ' + 
                '</div>'
                break;
        }
        setTimeout(function () {
            $("#portfolio-info-details").html(content);
        }, 300);
        $("#portfolio-info-details").fadeIn(300);
        var goto = document.getElementById("portfolio-info-details");
        goto.scrollIntoView();
    });
});