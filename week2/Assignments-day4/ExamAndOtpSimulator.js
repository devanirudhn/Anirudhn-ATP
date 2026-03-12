// 1.Exam portal simulator:
// -----------------------------
// When a student submits an exam:

//         Immediately show: “Exam submitted successfully”
//         After 2 seconds → show: “Evaluating answers…”
//         After 4 seconds → show: “Result: Pass”

console.log("Exam submitted Successfully");
setTimeout(() => {
    console.log("Evaluating Answers");
    
}, 2000);
setTimeout(() => {
    console.log("Results:Pass");
    
}, 4000);


// 2.OTP Countdown Simulator (Console App)
// ------------------------------------
        
//         Simulate OTP sending flow in Node.js:
        
//         Show “OTP Sent Successfully”
        
//         Start 10-second countdown
        
//         Allow resend only after 

console.log("otp sent successfully");
let seconds =10;
 let intervalId=setInterval(() => {
    seconds--;
    console.log(`otp can be send in ${seconds} sec`);
    if(seconds=== 0)
    {
        console.log("resend otp");
        clearInterval(intervalId)
    }
    
}, 1000);
