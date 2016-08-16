const heapdump = require('heapdump')

const heapdumpPromise = function () {
  const args = Array.prototype.slice.call(arguments)

  return new Promise((resolve, reject) => {
    args.push((error, path) => {
      if (error) {
        return reject(error)
      }

      resolve(path)
    })

    heapdump.writeSnapshot.apply(heapdump, args)
  })
}

module.exports = heapdumpPromise
