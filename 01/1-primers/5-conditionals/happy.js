// given the variable `activity` set the value of `happy` to `true` if `activity` is `dancing`, `false` otherwise
// Given a string variable `activity`, set the `happy` variable to:
// `true` if the activity is 'dancing' or 'swimming'
// `false` otherwise.
// Check that your solution works for any `activity` value for the following:
// let activity = 'digging holes'
// let activity = 'dancing'
var activity = "dancing";
// let activity = 'swimming';
// let activity = 'digging holes';
// let activity = 'running 10 miles in the rain';
var happy;
// YOUR CODE HERE
if (activity === 'dancing' || activity === 'swimming') {
    happy = true;
}
else {
    happy = false;
}
console.log(happy);
