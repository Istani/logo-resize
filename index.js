var Jimp = require('jimp');

async function main(input_file, output_path = 'tmp/') {
  var size = [16, 64, 256];
  console.log(size, size.length, size[0]);

  for (var i = 0; i < size.length; i++) {
    //console.log("Generate ",size[i],i);

    var image = await Jimp.read(input_file);
    var output_file = output_path + 'logo_' + size[i] + 'x' + size[i] + '.png';
    console.log(output_file);
    await image.resize(size[i], size[i]);
    await image.quality(100);
    await image.write(output_file);

    if (size[i] == 16) {
      await create_icon(output_file, output_path);
    }
  }
}

async function create_icon(input_file, output_path = 'tmp/') {
  //console.log(input_file);
  const fs = require('fs');
  const pngToIco = require('png-to-ico');
  pngToIco([input_file])
    .then((buf) => {
      fs.writeFileSync(output_path + 'favicon.ico', buf);
    })
    .catch(console.error);
}

main('../website/public/img/ym.png', '../website/public/img/');
