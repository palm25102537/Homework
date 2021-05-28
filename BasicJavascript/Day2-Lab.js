//Lab-01
// function draw(n){
// let star=""
// for(i = 1; i <= n; i++){
// star = star + "*";
//  } console.log(star);
//  }
//  let n = 3
//   draw(n);

// Lab-02
//  function draw(n){
// let star=""
//   for(i = 1; i <= n; i++){
//  for(j = 1; j <= n; j++){
//   star = star + "*";
//    } star = star + "\n";
//  }  
//  console.log(star)
//  }
//  let x = 3
//  draw(n)

// Lab-03
// function draw(n){
// let star =""
// for (i = 1 ; i <= n; i++){
// for(j = 1; j <= n; j++){
//   star = star + j;
// } star = star + "\n";
// } console.log(star);
// }
// draw(3)

//Lab-04
// function draw(n){
// let star =""
//   for (i = 1 ; i <= n; i++){
//   for(j = 1; j <= n; j++){
//  star = star + i;
//  } star = star+ "\n";
//    } console.log(star);
//  }
//  draw(3)

//Lab-05
// function draw(n){
// let star =""
//   for (i = n ; i-1 >= 0; i--){
//   for(j = n; j-1 >= 0; j--){
//  star = star + i;
//  } star = star + "\n";
//    } console.log(star);
//  }
//  draw(2)

//Lab-06
//  function draw(n){
// let star =""
//    for (i = 1 ; i <= n; i++){
//   for(j = 1; j <= n; j++){
//  star = star + ((n*i) -  (n-j))
//   } star = star + "\n";
//    } console.log(star);
//  }
//  draw(2)

//Lap-07
//  function draw(n){
// let star =""
//    for (i = n ; i-1 >= 0; i--){
//   for(j = n; j-1 >= 0; j--){
//  star = star + ((n*i) - (n-j))
//   } star = star + "\n";
//    } console.log(star);
//  }

//Lab-08
// function draw(n){
// let star =""
//    for (i = n ; i < (n*2); i++){
//   for(j = n; j < n+1; j++){
//   j=i
//   } star = star + "\n";
//    } console.log(star);
//  }
//  draw(4)

//Lab-09
//  function draw(n){
// let star =""
//    for (i = n ; i < (n*2); i++){
//   for(j = n; j < n+1; j++){
//   j=i
//  star = star + ((i+j+2) - (2*n))
//   } star = star + "\n";
//    } console.log(star);
//  }
//  draw(4)

// Lab-10
// function draw(n){
//     let star =""

// for(i = 1; i <= n ;i++){
//     for(j = 1; j <= n; j++){
//         star = star + i*j ;
//     } star = star  + "\n";

// }console.log(star);
// }
// draw(4)

// Lab-11
// function draw(n){
//         let star =""
//         let a = "*"
//         let b = "-"

//     for(i = 1; i <= n ;i++){ 
//         for(j = 1; j <= n; j++){
//         if(i !== j){
//             star = star + a
//         } else {
//             star = star + b
//         }

//         } star = star  + "\n";

//     }console.log(star);
//     }
//     draw(4)

//Lab-12
// function draw(n){
//             let star =""
//             let a = "*"
//             let b = "-"

//         for(i = 1; i <= n ;i++){ 
//             for(j = 1; j <= n; j++){
//             if(i+j == n+1){
//                 star = star + b

//             } else {
//                 star = star + a
//             }

//             } star = star  + "\n";

//         }console.log(star);
//         }
//         draw(4)

//Lab-13
// function draw(n){
//                 let star =""
//                 let a = "*"
//                 let b = "-"

//             for(i = 1; i <= n ;i++){ 
//                 for(j = 1; j <= n; j++){
//                 if(j > i){
//                     star = star + b

//                 } else {
//                     star = star + a
//                 }

//                 } star = star  + "\n";

//             }console.log(star);
//             }
//             draw(4)
// Lab-14
// function draw(n){
//                     let star =""
//                     let a = "*"
//                     let b = "-"

//                 for(i = 1; i <= n ;i++){ 
//                     for(j = 1; j <= n; j++){
//                     if(i + j >= n+2){
//                         star = star + b

//                     } else {
//                         star = star + a
//                     }

//                     } star = star  + "\n";

//                 }console.log(star);
//                 }
//                 draw(2)
// Lab-15
// function draw(n){
//      let star =""
//      let a = "*"
//      let b = "-"
//     for(i = 1; i < n ;i++){ 
//     for(j = 1; j <= n; j++){
//         if(j > i){
//             star = star + b
//         } else {
//                 star = star + a
//         }
//             } star = star  + "\n";

//         }

//         for(i = 1; i <= n ;i++){ 
//         for(j = 1; j <= n; j++){
//             if(i + j >= n+2){
//                 star = star + b

//                 } else {
//             star = star + a
//                 }

// } star = star  + "\n";

// }console.log(star);
// }


// draw(4)
// Lab-16
// function draw(n){
//          let star =""
//          let b = "-"
//         for(i = 1; i < n ;i++){ 
//         for(j = 1; j <= n; j++){
//             if(i < j){
//                 star = star + b
//             } else {
//                     star = star + i
//             }
//                 } star = star  + "\n";

//             }

//             for(i = 1; i <= n ;i++){ 
//             for(j = 1; j <= n; j++){
//                 if(i+j <= n+1){
//                     star = star + ((n+1)-i)

//                     } else {
//                 star = star + b
//                     }

//     } star = star  + "\n";

//     }console.log(star);
//     }


//     draw(4)
// Lab-17
// function draw(n){
//                         let star =""
//                         let a = "*"
//                         let b = "-"

//                     for(i = 1; i <= n ;i++){ 

//                         for(j = 1; j <= n; j++){
//                             if(j + i< n+1){
//                                 star = star + b

//                             } else {
//                                 star = star + a
//                                 }

//                         } star = star  + "\n";

//                     }console.log(star);
//                     }
//                     draw(2)

// Lab-18
// function draw(n){
//                         let star =""
//                         let a = "*"
//                         let b = "-"

//                     for(i = 1; i <= n ;i++){ 

//                         for(j = 1; j <= n; j++){
//                             if(j < i){
//                                 star = star + b

//                             } else {
//                                 star = star + a
//                                 }

//                         } star = star  + "\n";

//                     }console.log(star);
// }
//                     draw(4)
// //
// Lab-19
// function draw(n){
//                             let star =""
//                             let a = "*"
//                             let b = "-"

//                         for(i = 1; i < n ;i++){ 

//                             for(j = 1; j <= n; j++){
//                                 if(j + i< n+1){
//                                     star = star + b

//                                 } else {
//                                     star = star + a
//                                     }

//                             } star = star  + "\n";

//                         }
//                             for(i = 1; i <= n ;i++){ 

//                                 for(j = 1; j <= n; j++){
//                                     if(j < i){
//                                         star = star + b

//                                             } else {
//                                                 star = star + a
//                                                 }

//                                     } star = star  + "\n";

//                                     }console.log(star);
// }
// draw(4)
// lAB-20
// function draw(n) {
//     let star = ""
//     let b = "-"
//     let a = 0
//     for (i = 1; i < n; i++) {
//         for (j = 1; j <= n; j++) {
//             if (i + j < n + 1) {
//                 star = star + b
//             } else {
//                 a++
//                 star = star + a
//             }
//         } star = star + "\n";

//     }
//     console.log(a)
//     for (i = 1; i <= n; i++) {
//         for (j = 1; j <= n; j++) {
//             if (i <= j) {
//                 a++
//                 star = star + a
//             } else {
//                 star = star + b
//             }

//         } star = star + "\n";

//     } console.log(star);
// }


// draw(4)
// Lab-21
// function draw(n) {
//     let star = ""
//     let a = "*"
//     let b = "-"

//     for (i = 1; i <= n; i++) {
//         for (j = 1; j <= n + n - 1; j++) {
//             if (j + i > n && j + i < n + i * 2) {
//                 star = star + a


//             } else {
//                 star = star + b
//             }

//         } star = star + "\n";

//     } console.log(star)

// }

// draw(3)
// Lab-22
// function draw(n) {
//   let star = ""
//   let a = "*"
//   let b = "-"

//   for (i = 1; i <= n; i++) {
//     for (j = 1; j <= n + n - 1; j++) {
//       if (i <= j && i + j <= n * 2) {
//         star = star + a


//       } else {
//         star = star + b
//       }

//     } star = star + "\n";

//   } console.log(star)

// }

// draw(3)
//
//Lab-23
// function draw(n) {
//   let star = ""
//   let a = "*"
//   let b = "-"

//   for (i = 1; i <= n; i++) {
//     for (j = 1; j <= n + n - 1; j++) {
//       if (j + i > n && j + i < n + i * 2) {
//         star = star + a


//       } else {
//         star = star + b
//       }

//     } star = star + "\n";

//   }
//   for (i = 1; i <= n; i++) {
//     for (j = 1; j <= n + n - 1; j++) {
//       if (i <= j && i + j <= n * 2) {
//         star = star + a


//       } else {
//         star = star + b
//       }

//     } star = star + "\n";

//   } console.log(star)

// }
// draw(3)
//Lab-24
// function draw(n) {
//   let star = ""
//   let b = "-"
//   let a = 0
//   for (i = 1; i < n; i++) {
//     for (j = 1; j <= n + n - 1; j++) {
//       if (j + i > n && j + i < n + i * 2) {
//         ++a
//         star = star + a
//       } else {

//         star = star + b
//       }
//     } star = star + "\n";

//   }

//   for (i = 1; i <= n; i++) {
//     for (j = 1; j <= n + n - 1; j++) {
//       if (i <= j && i + j <= n * 2) {
//         a++
//         star = star + a
//       } else {
//         star = star + b
//       }

//     } star = star + "\n";

//   } console.log(star);
// }
// draw(3)