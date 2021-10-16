module.exports = {
    nets: {
        din: undefined,
        dout: undefined,
        VCC: 'VCC',
        GND: 'GND'
    },
    params: {
        class: 'LED',
        side: 'F'
    },
    body: p => `
    
        (module "Tenting Puck" (layer F.Cu) (tedit 5F09F7E8)
            ${p.at /* parametric position */}
            ${'' /* footprint reference */}

  (pad 1 thru_hole circle (at 0 -19.05) (size 4.4 4.4) (drill 2.2) (layers *.Cu *.Mask))
  (pad 1 thru_hole circle (at -19.05 0) (size 4.4 4.4) (drill 2.2) (layers *.Cu *.Mask)) 
  (pad 2 thru_hole circle (at -17.05 -2 0) (size 6 6) (drill 5) (layers *.Cu *.Mask))
  (pad 2 thru_hole circle (at 2 -21.05 0) (size 6 6) (drill 5) (layers *.Cu *.Mask)
        )
    
    `
}