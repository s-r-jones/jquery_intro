$(document).ready(function()
{
    var fontSize = 1.0;
    //switch enhanced text to even better text
    $(".enhanced").click(function()
    {                    
        $(this).addClass("evenMoreEnhanced");
        $(this).removeClass("enhanced");
    });
    //randomize the <strong> color
   $("strong").hover(function()
    {
        var red =   Math.floor(256 * Math.random());
        var green = Math.floor(256 * Math.random());
        var blue =  Math.floor(256 * Math.random());
        var color = "rgb(" + red + ", "+ green +", "+ blue +")";
        
    //apply the random color
    $(this).css("color", color);    
    
    });
   
    
    $("#eagle").click(function()
    {                  
        fontSize = 1.10 * fontSize;
        $(this).css("font-size", fontSize + "em");
    });
    
    //validate form data
    $("#familyForm").validate(
    {
       errorClass: "invalidInput",
       rules:
       {
            name:
            {
                required:true
            },
            age:
            {
                min: 0,
                required:true  
            },
            amount:
            {
                min: 1000,
                required:true
            },
            email:
            {
                email:true,
                required:true
            }
       },
       
       messages:
       {
            name: "Please enter your name",
            age:
            {
                min: "Please enter a positive number",
                required: "Please enter your age"
            },
            amount:
            {
                min: "Please enter an amount greater than $1000",
                required: "Please enter an amount"
            },
            email: "Please enter a valid email address"
       },
       
       submitHandler: function(form)
       {
            $(form).ajaxSubmit(
            {
                
              type: "POST",
              url:  "jqueryIntro.txt",
              data: $(form).serialize(),
              success: function(ajaxOutput)
              {
                    $("#outputArea").html(ajaxOutput);
              }
            });
       }
       
    });
    
});