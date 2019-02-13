

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

    // $(".contForm").click(function(e){

    // e.preventDefault()
    
    //     var someText = "Submmitted! I'll Reach Out Soon";
    //     var newDiv = $("<div class='wow'>").append(someText);
    //     console.log(someText)
            
    //         $(".subbbed").append(newDiv);
    //         console.log("subbed")
        
        
    //     });


    
});

$(".contForm").click(function(e){
   
    
 

    e.stopPropagation();
    
        var someText = "Submitted! I'll Reach Out Soon";
        var newDiv = $("<div class='wow'>").append(someText);
        console.log(someText)
            
            $(".subbbed").append(newDiv);
            console.log("subbed")
// alert('submitted!')
        
        });

// $(".contForm").click(function(){

//     $.ajax({
//         method: "GET",
//         url: "/contact/"
//       }).then(function(data){
//     console.log(data)

//       });

// });



// $(".contForm").click(function(){
    

//     var someText = "Submmitted! I'll Reach Out Soon";
//     var newDiv = $("<div class='wow'>").append(someText);
//     console.log(someText)
//     $(".subbbed").append(newDiv);
//     console.log("subbed")

// });










//*****IDKKKKK****/



