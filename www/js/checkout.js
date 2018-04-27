// var _scannerIsRunning = false;
//
// width2 = screen.width;
// height2 = screen.height;
//
// function startScanner() {
//   Quagga.init({
//     inputStream: {
//       name: "Live",
//       type: "LiveStream",
//       target: document.querySelector('#scanner-container'),
//       constraints: {
//         width: width2,
//         height: height2,
//         facingMode: "environment"
//       },
//     },
//     decoder: {
//       readers: [
//         "ean_reader"
//       ],
//       debug: {
//         showCanvas: true,
//         showPatches: true,
//         showFoundPatches: true,
//         showSkeleton: true,
//         showLabels: true,
//         showPatchLabels: true,
//         showRemainingPatchLabels: true,
//         boxFromPatches: {
//           showTransformed: true,
//           showTransformedBox: true,
//           showBB: true
//         }
//       }
//     },
//
//   }, function(err) {
//     if (err) {
//       console.log(err);
//       return
//     }
//
//     console.log("Initialization finished. Ready to start");
//     Quagga.start();
//
//     // Set flag to is running
//     _scannerIsRunning = true;
//   });
//
//   Quagga.onProcessed(function(result) {
//     var drawingCtx = Quagga.canvas.ctx.overlay,
//       drawingCanvas = Quagga.canvas.dom.overlay;
//
//     if (result) {
//       if (result.boxes) {
//         drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
//         result.boxes.filter(function(box) {
//           return box !== result.box;
//         }).forEach(function(box) {
//           Quagga.ImageDebug.drawPath(box, {
//             x: 0,
//             y: 1
//           }, drawingCtx, {
//             color: "green",
//             lineWidth: 2
//           });
//         });
//       }
//
//       if (result.box) {
//         Quagga.ImageDebug.drawPath(result.box, {
//           x: 0,
//           y: 1
//         }, drawingCtx, {
//           color: "#00F",
//           lineWidth: 2
//         });
//       }
//
//       if (result.codeResult && result.codeResult.code) {
//         Quagga.ImageDebug.drawPath(result.line, {
//           x: 'x',
//           y: 'y'
//         }, drawingCtx, {
//           color: 'red',
//           lineWidth: 3
//         });
//       }
//     }
//   });
//
//
//   Quagga.onDetected(function(result) {
//     console.log("Barcode detected and processed : [" + result.codeResult.code + "]", result);
//   });
// }
//
// // document.getElementById("scanButton").addEventListener("click", function() {
// //   if (_scannerIsRunning) {
// //     Quagga.stop();
// //     document.getElementById('scanButton').value = "Scan";
// //   } else {
// //     document.getElementById('scanButton').value = "Stop";
// //     var Quagga = require('quagga');
// //
// //     Quagga.decodeSingle({
// //         src: "image-abc-123.jpg",
// //         numOfWorkers: 0,  // Needs to be 0 when used within node
// //         inputStream: {
// //             size: 800  // restrict input-size to be 800px in width (long-side)
// //         },
// //         decoder: {
// //             readers: ["code_128_reader"] // List of active readers
// //         },
// //     }, function(result) {
// //         if(result.codeResult) {
// //             console.log("result", result.codeResult.code);
// //         } else {
// //             console.log("not detected");
// //         }
// //     });
// //   }
// // }, false);
