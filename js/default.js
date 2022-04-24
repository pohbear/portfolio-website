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
                '<div class="portfolio-info-block-logo flex-row flex-center text-center">' +  
                '<img id="portfolio-info-main-image" src="images/penumbra/penumbra_title_logo.png" alt="Penumbra Title and Logo"/></div>' + 
                '</div>' + 
                '<div class="spacer-large"></div>' + 
                '<div id="portfolio-info-writeup" class="flex-column">' + 
                '<p class="text-large">Introduction</p>' + 
                '<p class="text-medium">Penumbra is a single player Virtual Reality escape room game that incorporates puzzles and problem-solving. ' + 
                'It was created in Unity. This was my first exposure to the Unity development platform, and game development as a whole.</p>' + 
                '<div class="spacer-large"></div>' + 
                '<p class="text-large">Ideation</p>' + 
                '<p class="text-medium">When I was trying to come up with ideas and themes for an escape room, I tried to think what would interest me. ' + 
                'From there, I picked elements that I felt would fit well with a VR escape room. I ended up with three major points to revolve my escape room around: </p>' + 
                '<div class="spacer"></div>' + 
                '<ul class="text-medium"><li>A setting that has elements of mystery or story-driven plot points in hopes of invoking a sense of curiousity or a need to progress within the players</li>' + 
                '<li>Try to avoid direct hand-holding to make the experience more immersive. The players should feel like they are trying to escape, instead of following steps or instructions</li>' + 
                '<li>Variety in terms of the puzzles to keep the escape room entertaining. I felt it would be boring if the puzzles all had the same mechanics or follow a certain sequence</li></ul>' + 
                '<div class="spacer"></div>' + 
                '<p class="text-medium">For references, I looked to games that I have played which had puzzle-solving and was story-driven. A few of the titles were Portal, We Were Here, and The Room. ' + 
                'I also tried to incorporate elements from escape rooms that I have been to before.</p>' + 
                '<div class="spacer"></div>' + 
                '<p class="text-medium">With all that, my final idea was an escape room game set to take place in a dystopian 18th Century England with steampunk elements. ' + 
                'The setting is that the player was born within the less fortunate underbelly of society. Tired of living in the shadows, they join an organization with the goal of undermining the corrupt. ' + 
                'The player is then tasked to break into the base of a trader known to work with pirates. However, they find themself locked within the base and must escape before anyone finds out.</p>' + 
                '<div class="spacer"></div>' + 
                '<p class="text-medium">From there, I moved on to the design ideation. My initial idea was for it to be a one-room design, where the puzzles would be located in different parts of the room.</p>' + 
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
                '<video width="960" height="540" controls><source src="images/penumbra/penumbra_gameplay_compress.mp4" type="video/mp4"/></video>' + 
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
                '<div class="portfolio-info-block-logo">' +  
                '<img id="portfolio-info-main-image" src="images/reptrack/reptrack_title_logo.png" alt="RepTrack Title and Logo"/></div>' + 
                '</div>' + 
                '<div class="spacer-large"></div>' + 
                '<div id="portfolio-info-writeup" class="flex-column">' + 
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
                '<p class="text-medium">From there, we were wondering "Is there any way we can help others in a similar scenario?" ' +  
                'We did some research and found many apps that taught users how to use different equipment for various exercises, ' + 
                'but all of them required the user to have basic knowledge on gym equipment and muscle groups. ' + 
                'We realised that none of them were completely beginner friendly, and we wanted to fill in that gap. ' + 
                'As part of our modules, we recently happened to learn about Artificial Intelligence and Machine Learning, with Computer Vision being a part of it. ' + 
                'From there, we were thinking whether we could implement some form of AI to fill the gap, and how we could go about doing it.</p></div>' + 
                '<div class="portfolio-info-block-small">' + 
                '<img class="portfolio-info-image" src="images/reptrack/reptrack_ideation_convo.png"/>' + 
                '<p class="text-small text-light text-center">Gotta take care of the family jewels</p></div></div>' + 
                '</div>'
                break;
            case "c1-clicksociety":
                content = '<div id="portfolio-info-basic" class="flex-row flex-between">' + 
                '<div class="portfolio-info-block-main">' +  
                '<p id="portfolio-info-title" class="text-xlarge">Click Society</p>' + 
                '<p id="portfolio-info-brief" class="text-medium text-light">E-Commerce Website</p>' + 
                '<div class="spacer-large"></div>' + 
                '<p id="portfolio-info-software" class="text-large">Software: Wordpress</p>' + 
                '<div class="spacer-large"></div>' + 
                '<p id="portfolio-info-language" class="text-large">Framework: WooCommerce</p>' + 
                '<div class="spacer-large"></div>' + 
                '<p id="portfolio-info-date" class="text-large">Completion Date: Feb 2022</p></div>' + 
                '<div class="portfolio-info-block-logo">' +  
                '<img id="portfolio-info-main-image" src="images/clicksociety/clicksociety_title_logo.png" alt="The Click Society Title and Logo"/></div>' + 
                '<p class="text-large text-light text-center">To be updated.</p>' + 
                '</div>'
                break;
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
                '<p id="portfolio-info-date" class="text-large">Completion Date: Jan 2022</p></div>' + 
                '<div class="portfolio-info-block-logo">' +  
                '<img id="portfolio-info-main-image" src="images/quizzy/quizzy_title_logo.png" alt="Quizzy Title and Logo"/></div>' + 
                '<p class="text-large text-light text-center">To be updated.</p>' + 
                '</div>'
                break;
            case "c2-portfolioapp":
                content = '<div id="portfolio-info-basic" class="flex-row flex-between">' + 
                '<div class="portfolio-info-block-main">' +  
                '<p id="portfolio-info-title" class="text-xlarge">My Portfolio App</p>' + 
                '<p id="portfolio-info-brief" class="text-medium text-light">Portfolio App Design</p>' + 
                '<div class="spacer-large"></div>' + 
                '<p id="portfolio-info-software" class="text-large">Software: Adobe XD</p>' + 
                '<div class="spacer-large"></div>' + 
                '<p id="portfolio-info-date" class="text-large">Completion Date: Aug 2021</p></div>' + 
                '<div class="portfolio-info-block-logo">' +  
                '<img id="portfolio-info-main-image" src="images/portfolioapp/portfolioapp_title_logo.png" alt="Portfolio App Title and Logo"/></div>' + 
                '<p class="text-large text-light text-center">To be updated.</p>' + 
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
                '<div class="portfolio-info-block-logo">' +  
                '<img id="portfolio-info-main-image" src="images/cagapp/cagapp_title_logo.png" alt="CAG App Title and Logo"/></div>' + 
                '<p class="text-large text-light text-center">To be updated.</p>' + 
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
                '<p id="portfolio-info-date" class="text-large">Completion Date: Jul 2021</p></div>' + 
                '<div class="portfolio-info-block-logo">' +  
                '<img id="portfolio-info-main-image" src="images/mindsapp/mindsapp_title_logo.png" alt="The Click Society Title and Logo"/></div>' + 
                '<p class="text-large text-light text-center">To be updated.</p>' + 
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
                '<p id="portfolio-info-date" class="text-large">Completion Date: Jun 2021</p></div>' + 
                '<div class="portfolio-info-block-logo">' +  
                '<img id="portfolio-info-main-image" src="images/veritas/veritas_title_logo.png" alt="Veritas Title and Logo"/></div>' + 
                '<p class="text-large text-light text-center">To be updated.</p>' + 
                '</div>'
                break;
            case "c2-pohbear":
                content = '<div id="portfolio-info-basic" class="flex-row flex-between">' + 
                '<div class="portfolio-info-block-main">' +  
                '<p id="portfolio-info-title" class="text-xlarge">Pohbear Logo</p>' + 
                '<p id="portfolio-info-brief" class="text-medium text-light">Personal Logo Design</p>' + 
                '<div class="spacer-large"></div>' + 
                '<p id="portfolio-info-software" class="text-large">Software: Adobe Illustrator</p>' + 
                '<div class="spacer-large"></div>' + 
                '<p id="portfolio-info-date" class="text-large">Completion Date: Aug 2021</p></div>' + 
                '<div class="portfolio-info-block-logo">' +  
                '<img id="portfolio-info-main-image" src="images/pohbear/pohbear_title_logo.png" alt="Pohbear Title and Logo"/></div>' + 
                '<p class="text-large text-light text-center">To be updated.</p>' + 
                '</div>'
                break;
        }
        $("#portfolio-info-details").html(content);
        var goto = document.getElementById("portfolio-info-details");
        goto.scrollIntoView();
    });
});