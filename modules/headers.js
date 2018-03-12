const debug = require("debug")("nuxt:netlify-http2-server-push")
const path = require("path")
const glob = require("glob-all")
const fs = require("fs")

module.exports = function module(moduleOptions) {
  if (this.options.dev) {
    return
  }
  const hook = () => {
    debug("Generating the _headers file")
    generateHeaderFile(this, moduleOptions)
  }
  this.nuxt.hook("generate:distCopied", hook)
}

const generateHeaderFile = ({ options }) => {
  const generateDir = path.resolve(options.generate.dir)
  const files = glob.sync([`${generateDir}/**/*.js`, `${generateDir}/**/*.css`])
  // append to _headers file
  let _headers = "\n/*\n"
  files.forEach(file => {
    if (/workbox/.test(file) || /sw/.test(file)) {
      return
    } else if (/.\.css$/.test(file)) {
      _headers += `  Link: <${file.replace(
        generateDir,
        ""
      )}>; rel=preload; as=style\n`
      return
    } else {
      _headers += `  Link: <${file.replace(
        generateDir,
        ""
      )}>; rel=preload; as=script\n`
    }
  })
  fs.appendFileSync(`${generateDir}/_headers`, _headers)
  debug("_headers file generated")
}
