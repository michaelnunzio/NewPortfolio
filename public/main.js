

// carousel start
// $(document).ready(function(){
//     $(".carousel").carousel({fullWidth:true}).css('height',  $(window).height());
// })
//carousel end

$( document ).ready(function() {
    console.log( "Loaded!" );
    $("#test p").addClass("load");
    $("header").addClass("load");
    $(".cardUno").addClass("load");
    $(".gittt").addClass("load");
    $('.sidenav').sidenav()

    $(".contForm").click(function(){

   
        var someText = "Submmitted! I'll Reach Out Soon";
        var newDiv = $("<div class='wow'>").append(someText);
        console.log(someText)
            
            $(".subbbed").append(newDiv);
            console.log("subbed")
            
            setTimeout(function() {
                document.location.reload(true);
        }, 10000);
        
        });


    
});



// $(".contForm").click(function(){
    

//     var someText = "Submmitted! I'll Reach Out Soon";
//     var newDiv = $("<div class='wow'>").append(someText);
//     console.log(someText)
//     $(".subbbed").append(newDiv);
//     console.log("subbed")

// });










//*****IDKKKKK****/



