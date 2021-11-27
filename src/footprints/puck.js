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

            (fp_text reference "${p.ref}" (at 0 0) (layer B.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
            (fp_text value "" (at 0 0) (layer B.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
         

  (pad 1 thru_hole circle (at 0 -19.05) (size 4.4 4.4) (drill 2.2) (layers *.Cu *.Mask))
  (pad 1 thru_hole circle (at 0 19.05) (size 4.4 4.4) (drill 2.2) (layers *.Cu *.Mask))
  (pad 1 thru_hole circle (at -19.05 0) (size 4.4 4.4) (drill 2.2) (layers *.Cu *.Mask))
  (pad 1 thru_hole circle (at 19.05 0) (size 4.4 4.4) (drill 2.2) (layers *.Cu *.Mask))
        )
    
    `
}