const img = document.createElement('img');
// img.src =
//   'https://static.frontendmasters.com/assets/teachers/sentance/thumb@2x.jpg';

imgSource = [
  'https://ca.slack-edge.com/T062GSUQ0BA-U067FP4B0NA-63cf8ba0a30e-512',
  'https://ca.slack-edge.com/T062GSUQ0BA-U068E9GNURK-d3885bbf885f-512',
  'https://ca.slack-edge.com/T062GSUQ0BA-U068B3TBY2V-29a05f4cd834-512',
  'https://ca.slack-edge.com/T062GSUQ0BA-U067QECJRPY-8c1ce73a6bc1-512',
  'https://ca.slack-edge.com/T062GSUQ0BA-U068HG1EMUJ-c7cde449e81d-512',
  'https://ca.slack-edge.com/T062GSUQ0BA-U06A80X9B6C-0974aad77fc7-512',
  'https://ca.slack-edge.com/T062GSUQ0BA-U068YEJJQMD-1d0201f58f6d-512',
  'https://ca.slack-edge.com/T062GSUQ0BA-U067FGDU1AA-f68e287473a7-512',
  'https://ca.slack-edge.com/T062GSUQ0BA-U067FH6744E-cb3ca1fcf577-512',
];

// console.log((Math.random() * imgSource.length));
// console.log((Math.random() * imgSource.length));
// console.log((Math.random() * imgSource.length));

const contents = document.getElementById('contents');

//const contents = document.querySelectorAll('contents');

//console.log(contents);

function changeImage() {
  let change = document
    .querySelectorAll('img', 'picture')
    .forEach(function (item) {
      //   item.src =
      //     'https://static.frontendmasters.com/assets/teachers/sentance/thumb@2x.jpg';
      //   item.srcset =
      //     'https://static.frontendmasters.com/assets/teachers/sentance/thumb@2x.jpg';

      item.src = imgSource[Math.floor(Math.random() * imgSource.length)];
      item.srcset = imgSource[Math.floor(Math.random() * imgSource.length)];
    });
}
changeImage();
setInterval(changeImage, 10000);

//contents.parentNode.appendChild(img);
//contents.parentNode.removeChild(contents);
