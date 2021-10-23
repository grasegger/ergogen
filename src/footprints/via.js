// Via
// Nets
//		net: the net this via should be connected to

module.exports = {
    nets: {
      net: undefined
    },
    body: p =>  {
      console.log(p.at.replace(' 0)', ')'))
      console.log(p.at)
      console.log(p.net)
    return `
      (via ${p.at.replace(' 0)', ')')} (size 0.8) (drill 0.4) (layers F.Cu B.Cu) (net ${p.net.net.index}))
    `
    }
}