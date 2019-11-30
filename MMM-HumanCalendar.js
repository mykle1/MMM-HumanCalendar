/* Magic Mirror
 * Module: MMM-HumanCalendar
 *
 *
 * By Mykle1 - MIT Licensed
 *
 */
Module.register("MMM-HumanCalendar", {

    defaults: {
        size: "",
        dayView: "1", // 1 or 3 day view
    },

    getStyles: function() {
        return ["MMM-HumanCalendar.css"];
    },

    getDom: function() {

        var iframe = document.createElement("IFRAME");
        iframe.classList.add("iframe");
        iframe.style = "border:none"
        iframe.scrolling = "no";
        iframe.marginwidth = "0";
        iframe.marginheight = "0";

        // 3 day size options
        if (this.config.size === "large" && this.config.dayView === "3") {
            iframe.height = "275px";
            iframe.width = "275px";
            type = "text/javascript";
            iframe.src = "https://api.humancalendar.com/iframe.php?t=3x3&s=275";

        } else if (this.config.size === "medium" && this.config.dayView === "3") {
            iframe.height = "215px";
            iframe.width = "215px";
            type = "text/javascript";
            iframe.src = "https://api.humancalendar.com/iframe.php?t=3x3&s=215";

        } else if (this.config.size === "small" && this.config.dayView === "3") {
            iframe.height = "150px";
            iframe.width = "150px";
            type = "text/javascript";
            iframe.src = "https://api.humancalendar.com/iframe.php?t=3x3&s=150";
        }

        // 1 day size options
        if (this.config.size === "large" && this.config.dayView === "1") {
            iframe.height = "275px";
            iframe.width = "275px";
            type = "text/javascript";
            iframe.src = "https://api.humancalendar.com/iframe.php?t=2x2&s=275";

        } else if (this.config.size === "medium" && this.config.dayView === "1") {
            iframe.height = "215px";
            iframe.width = "215px";
            type = "text/javascript";
            iframe.src = "https://api.humancalendar.com/iframe.php?t=2x2&s=215";

        } else if (this.config.size === "small" && this.config.dayView === "1") {
            iframe.height = "150px";
            iframe.width = "150px";
            type = "text/javascript";
            iframe.src = "https://api.humancalendar.com/iframe.php?t=2x2&s=150";
        }

        return iframe;
    },

    /////  Add this function to the modules you want to control with voice //////

    notificationReceived: function(notification, payload) {
        if (notification === 'HIDE_HUMANS') {
            this.hide(1000);
        } else if (notification === 'SHOW_HUMANS') {
            this.show(1000);
        }

    },

});
