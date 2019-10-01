$(function () {
    //copy/pasted time countdown function
    // Set the date we're counting down to

    var countDownDate = new Date();
//add time ahead of the current time
    countDownDate.setHours(countDownDate.getHours() + 2);

// Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("demo").innerHTML = hours + "h " +
            minutes + "m"; // + seconds + "";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED " + countDownDa
        }
    }, 1000);

    //allow tabbing into the list of links that are controlled by keyboard arrow keys
    $('#overview').on('keydown', function (e) {
        if (e.which === 9 && !e.shiftKey) {
            $(this).next('ol').find('fieldset a:first').focus();
            e.preventDefault();
        }
    });

    $('a').on('keydown', function (e) {
        var $next;
        switch (e.which) {
            case 37: // left
            case 38: // up
                $next = $(this).parent('li').prev('li').children('a').focus();
                if (!$next.length) {
                    $(this).parents('ol').prev('ol').find('fieldset a:last').focus();
                }
                e.preventDefault();
                break;

            case 39: // right
            case 40: // down
                $next = $(this).parent('li').next('li').children('a').focus();
                if (!$next.length) {
                    $(this).parents('ol').next('ol').find('fieldset a:first').focus();
                }
                e.preventDefault();
                break;

            default:
                return; // exit this handler for other keys
        }

    });
});