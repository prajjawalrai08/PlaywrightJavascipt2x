if ("hello") console.log("hello is truthy");
if (42) console.log("42 is truthy");
if ({}) console.log("{} is truthy");
if ([]) console.log("[] is truthy");

if ("") console.log("'' is falsy");
if (null) console.log("null is falsy");
if (undefined) console.log("undefined is falsy");
if (0) console.log("0 is falsy");
if (NaN) console.log("NaN is falsy");

let name = undefined;
if (name)
{
    console.log("HI");
} else {
    console.log("BYE");
}