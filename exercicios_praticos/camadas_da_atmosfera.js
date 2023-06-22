let altitude = 30

if (altitude <= 20) {
  console.log("TROPOSFERA");

} else if (altitude <= 50) {
  console.log("ESTRATOSFERA");

} else if (altitude <= 80) {
  console.log("MESOSFERA");

} else if (altitude <= 450) {
  console.log("TERMOSFERA");
  
} else if (altitude <= 900) {
  console.log("EXOSFERA");
}

// para a plataforma
// if (altitude <= 20) {
//     return "TROPOSFERA";
//   } else if (altitude <= 50) {
//     return "ESTRATOSFERA";
//   } else if (altitude <= 80) {
//     return "MESOSFERA";
//   } else if (altitude <= 450) {
//     return "TERMOSFERA";
//   } else if (altitude <= 900) {
//     return "EXOSFERA";
//   }
  