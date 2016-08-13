;(function ($){
    $(function() {
      var prefixText = "Jan 1, 2016 - ";
      var monthNames = [
        "Jan", "Feb", "Mar",
        "Apr", "May", "Jun", "Jul",
        "Aug", "Sept", "Oct",
        "Nov", "Dec"
      ];

      var normalizeTime = function (time) {
        time = parseInt(time);
        if (time < 10) time = '0' + time;
        return time;
      }

      var timer = function () {
        var date = new Date();
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
        var hours = normalizeTime(date.getHours());
        var minutes = normalizeTime(date.getMinutes());
        var seconds = normalizeTime(date.getSeconds());

        var timerText = prefixText + monthNames[monthIndex] + ' ' +
        day + ', ' + year + ' ' + hours + ':' + minutes + ':' + seconds;

        $('#todays-date').text(timerText);
      }

      setInterval(timer, 1000)
    });
})(jQuery);
