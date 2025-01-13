try {
    let theme = localStorage.getItem("theme");
    if (theme && theme === "auto" || theme === "light" || theme == "dark") {
        document.querySelector("body").classList = [`theme-${theme}`];
    } else {
        console.error("Invalid theme in localStorage. Defaulting to auto theme.")
        document.querySelector("body").classList = ["theme-auto"];
    }
} catch (e) {
    console.error("Unable to load theme from localStorage. Defaulting to auto theme.")
    document.querySelector("body").classList = ["theme-auto"];
}
