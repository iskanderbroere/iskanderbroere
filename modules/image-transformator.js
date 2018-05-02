const path = require("path")
const glob = require("glob")
const sharp = require("sharp")
const fs = require("fs")
const mkdirp = require("mkdirp")
const rimraf = require("rimraf")

module.exports = function module(moduleOptions) {
  const hook = () => {
    generateImages(this, moduleOptions)
  }
  this.nuxt.hook("ready", hook)
}

const generateImages = async ({ options }) => {
  const rootDir = path.resolve(options.rootDir)
  const destinationFolder = rootDir + "/assets/transformedImages/"
  const files = glob.sync(`${rootDir}/assets/images/*`)
  await rimraf(destinationFolder, () => {})
  if (files.length > 0) {
    await mkdirp(destinationFolder)
    files.forEach(async file => {
      const filename = file
        .split("/")
        .pop()
        .split("#")[0]
        .split("?")[0]
        .replace(/\.[^/.]+$/, "")
      const pipeline = sharp(file)
      const webpStream = fs.createWriteStream(
        `${destinationFolder + filename}.webp`
      )
      const pjpegStream = fs.createWriteStream(
        `${destinationFolder + filename}-prog.jpg`
      )
      const lowqJpegStream = fs.createWriteStream(
        `${destinationFolder + filename}-low.jpg`
      )
      await pipeline
        .clone()
        .webp()
        .pipe(webpStream)
      await pipeline
        .clone()
        .jpeg({
          progressive: true
        })
        .pipe(pjpegStream)
      await pipeline
        .clone()
        .resize(500, 500)
        .max()
        .withoutEnlargement()
        .jpeg({
          quality: 15
        })
        .pipe(lowqJpegStream)
    })
  }
}
