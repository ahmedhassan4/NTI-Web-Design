jQuery('#contactForm').validate({
    rules:{
        name:"required",
        email:"required",
        subject:{
            required: true,
            minlength:10
        },
        message:{
            required: true,
            minlength:30}
    },messages:{
        name:"Please enter your name",
        email:{
            required:"please enter your email",
            email:"please enter valid email"
        }
        
    },
    submitHandler:function(form){
        form.submit();
    }
});