if (document.querySelector("#root > div > div.q-box > div:nth-child(2) > div") != undefined) {
    const signInBox = document.querySelector("#root > div > div.q-box > div:nth-child(2) > div");
    signInBox.remove(); // remove sign-in box

    const background = document.querySelector("#root > div > div.q-box > div:nth-child(1)");
    background.style.filter = "" // remove background blur

    const body = document.querySelector("body");
    body.style.overflow = "" // remove scroll lock

    console.log("Removed block!")
}
