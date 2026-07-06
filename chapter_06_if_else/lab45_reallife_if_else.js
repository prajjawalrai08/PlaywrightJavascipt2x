let isLoggedIn = true;
let userRole = "admin";

if (isLoggedIn) {
    if (userRole === "admin") {
        console.log("Welcome, Admin!"); }
        else if (userRole === "editor") {
        console.log("Welcome, Editor!");
    }else if (userRole === "viewer") {
        console.log("Welcome, Viewer!");
    } else {
        console.log("Welcome, Guest!");
    }

}

else {
    console.log("Please log in to continue.");
}