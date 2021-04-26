const Jimp = require('jimp')

Jimp.read('https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80', (err, image) => {
  if (err) throw err;
  image
    .resize(Jimp.AUTO, 256) // resize
    .quality(60) // set JPEG quality
    .greyscale() // set greyscale
    .write('thumbnail.jpg'); // save
})
