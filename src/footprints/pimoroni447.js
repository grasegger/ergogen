module.exports = {
    params: {
        side: 'F'
    },
    nets: {
      GND: undefined,
      VCC: undefined,
  },
    body: p =>  {
      let out =
    `
      (module pimoroni_trackball (layer F.Cu) (tedit 5D20B36F)
        ${p.at /* parametric position */}

        (fp_text reference "${p.ref}" (at 0 0) (layer B.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer B.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
     
        (fp_line (start -5 -7.5) (end -5 -12.5) (layer "F.SilkS") (width 0.12))
        (fp_line (start -5 7.5) (end -5 12.5) (layer "F.SilkS") (width 0.12))
        (fp_line (start -5 -12.5) (end 11 -12.5) (layer "F.SilkS") (width 0.12) )
        (fp_line (start -5 12.5) (end 11 12.5) (layer "F.SilkS") (width 0.12) )
        (fp_line (start -11 7.5) (end -5 7.5) (layer "F.SilkS") (width 0.12) )
        (fp_line (start -11 -7.5) (end -11 7.5) (layer "F.SilkS") (width 0.12) )
        (fp_line (start -11 -7.5) (end -5 -7.5) (layer "F.SilkS") (width 0.12) )
        (fp_line (start 11 12.5) (end 11 -12.5) (layer "F.SilkS") (width 0.12) )
        (pad "" thru_hole rect (at -9.5 -5) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.net.VCC.str} )
        (pad "" thru_hole oval (at -9.5 -2.46) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.net.A.str} )
        (pad "" thru_hole oval (at -9.5 0.08) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.net.B.str})
        (pad "" thru_hole oval (at -9.5 2.62) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.net.C.str})
        (pad "" thru_hole oval (at -9.5 5.16) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask)  ${p.net.GND.str}  ) 
      )
    `
    return out
    }
}