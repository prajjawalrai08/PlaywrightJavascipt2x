console.log(score); // ReferenceError: Cannot access 'score' before initialization
let score = 100; // variable declaration and initialization


{
    // TDZ - Temporal Dead Zone
    //  TDZ for score starts here
    //console.log(score); // ReferenceError: Cannot access 'score' before initialization
    // score = 200; // ReferenceError: Cannot access 'score' before initialization
    // typeof score; // ReferenceError: Cannot access 'score' before initialization
    // TDZ for score ends here
    let score = 200; //Declaration and initialization of score variable
    console.log(score); // 200 (safe to access score variable after initialization)