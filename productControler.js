
const Fs = require('fs/promises')


const productControler = async (req,res) => {
  // console.log((new Buffer.from('vaibhav')).toJSON());

  // const stream = fs.createReadStream('./test.json')

  // const streamData = stream.on('data',(chunkdata)=>{
  //   res.write(chunkdata)
  // })
  // console.log(streamData);

  // stream.on("end",()=>{
  //   res.end()
  // })

  // const data = fs.readFile('./test.json',(err, data)=>{
  //   console.log(data);
  //   res.write(data)
  //   res.end(data)
  // })
  // console.log(data);
  const json = await Fs.readFile('./test.json')  
  const package = JSON.parse(json)
  res.status(200).json({
    success : true,
    package
  })  
}

module.exports = productControler
