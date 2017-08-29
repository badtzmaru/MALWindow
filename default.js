(function() {

    const remote = require('electron').remote;

    function init() {
        document.getElementById("back-btn").addEventListener("click", function(e) {
            document.getElementById("main-view").goBack();
        });
        document.getElementById("min-btn").addEventListener("click", function(e) {
            const window = remote.getCurrentWindow();
            window.minimize();
        });

        document.getElementById("max-btn").addEventListener("click", function(e) {
            const window = remote.getCurrentWindow();
            if (!window.isMaximized()) {
                window.maximize();
            } else {
                window.unmaximize();
            }
        });

        document.getElementById("close-btn").addEventListener("click", function(e) {
            const window = remote.getCurrentWindow();
            window.close();
        });

        document.getElementById("list-btn").addEventListener("click", function(e) {
            document.getElementById("main-view").executeJavaScript("document.getElementsByClassName('header-menu-unit header-list js-header-menu-unit')[0].click(); document.getElementsByClassName('header-menu-dropdown header-list-dropdown arrow_box')[0].firstChild.firstChild.firstChild.click()")
        });

        document.getElementById("profile-btn").addEventListener("click", function(e) {
            document.getElementById("main-view").executeJavaScript("document.getElementsByClassName('header-profile-link')[0].click(); document.getElementsByClassName('header-menu-dropdown header-profile-dropdown arrow_box')[0].firstChild.firstChild.firstChild.click()")
        });


        document.getElementById("main-view").executeJavaScript("document.getElementsByClassName('header-menu-unit header-list js-header-menu-unit')[0].click(); document.getElementsByClassName('header-menu-dropdown header-list-dropdown arrow_box')[0].firstChild.firstChild.firstChild.click()")

    }

    document.onreadystatechange = function() {
        if (document.readyState == "complete") {
            init();
        }
    };

    /* add css on webview load */
    document.getElementById("main-view").addEventListener("did-stop-loading", function() { // runs on navigation complete
        //document.getElementById("main-view").executeJavaScript("document.getElementsByClassName('collectionNav g-tabs g-tabs-large')[0].style.display = 'none'");
    });

})();