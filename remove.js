if (document.querySelector("#root > div > div.q-box > div:nth-child(2) > div") != undefined) { // if the page contains login prompt
    document.querySelector("#root > div > div.q-box > div:nth-child(2) > div").remove(); // remove sign-in box

    document.querySelector("#root > div > div.q-box > div:nth-child(1)").style.filter = ""; // remove background blur
    document.querySelector("body").style.overflow = ""; // remove scroll lock

    console.log("Removed block!")
}
