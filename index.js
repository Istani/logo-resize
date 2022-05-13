var Jimp = require('jimp');
const {
  collapseTextChangeRangesAcrossMultipleVersions,
} = require('typescript');

async function main(input_file, output_path = 'tmp/') {
  var size = [16, 64, 256];
  console.log(size, size.length, size[0]);

  for (var i = 0; i < size.length; i++) {
    //console.log("Generate ",size[i],i);

    var image = await Jimp.read(input_file);
    var output_file = output_path + 'logo_' + size[i] + 'x' + size[i] + '.png';
    console.log(output_file);
    image.resize(size[i], size[i]);
    image.quality(100);
    image.write(output_file);
    //console.log("1");
  }
  //console.log("2");
}

main('../website/public/img/ym.png', '../website/public/img/');
