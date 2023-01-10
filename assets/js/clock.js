(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "08/15/",
      birthday = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

              if (Math.floor(distance / (day)) < 10) {
                document.getElementById("days").innerText = "0" + Math.floor(distance / (day));
              }
              else {
                document.getElementById("days").innerText = Math.floor(distance / (day));
              }
              if (Math.floor((distance % (day)) / (hour)) < 10) {
                document.getElementById("hours").innerText = "0" + Math.floor((distance % (day)) / (hour));
              }
              else {
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour));
              }
              if (Math.floor((distance % (hour)) / (minute)) < 10) {
                document.getElementById("minutes").innerText = "0" + Math.floor((distance % (hour)) / (minute));
              }
              else {
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute));
              }
              if (Math.floor((distance % (minute)) / second) < 10) {
                document.getElementById("seconds").innerText = "0" + Math.floor((distance % (minute)) / second);
              }
              else {
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
              }
          console.log(hour);
        //do something later when date is reached
        if (distance < 0) {
          document.getElementById("headline").innerText = "It's my birthday!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
        //seconds
      }, 0)
  }());
