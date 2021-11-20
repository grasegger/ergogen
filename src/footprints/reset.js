module.exports = {
    nets: {
        from: undefined,
        to: undefined
    },
    body: p => {

        return `
        (module kbd:SW_SPST_B3U-1000P (layer F.Cu) (tedit 5A02FC95) (tstamp 608AA06D)
            ${p.at /* parametric position */}
        (descr "Ultra-small-sized Tactile Switch with High Contact Reliability, Top-actuated Model, without Ground Terminal, without Boss")
        (attr smd)
        (fp_text reference ${p.ref} (at 0 2.55) (layer F.SilkS) hide
          (effects (font (size 1 1) (thickness 0.15)))
        )

        (fp_text value SW_Push (at 0 -2.55) (layer F.Fab)
          (effects (font (size 1 1) (thickness 0.15)))
        )

        (fp_line (start -2.4 1.65) (end 2.4 1.65) (layer F.CrtYd) (width 0.05))
        (fp_line (start 2.4 1.65) (end 2.4 -1.65) (layer F.CrtYd) (width 0.05))
        (fp_line (start 2.4 -1.65) (end -2.4 -1.65) (layer F.CrtYd) (width 0.05))
        (fp_line (start -2.4 -1.65) (end -2.4 1.65) (layer F.CrtYd) (width 0.05))

        (fp_line (start -2.4 1.65) (end 2.4 1.65) (layer B.CrtYd) (width 0.05))
        (fp_line (start 2.4 1.65) (end 2.4 -1.65) (layer B.CrtYd) (width 0.05))
        (fp_line (start 2.4 -1.65) (end -2.4 -1.65) (layer B.CrtYd) (width 0.05))
        (fp_line (start -2.4 -1.65) (end -2.4 1.65) (layer B.CrtYd) (width 0.05))

        (fp_line (start -1.65 1.1) (end -1.65 1.4) (layer F.SilkS) (width 0.12))
        (fp_line (start -1.65 1.4) (end 1.65 1.4) (layer F.SilkS) (width 0.12))
        (fp_line (start 1.65 1.4) (end 1.65 1.1) (layer F.SilkS) (width 0.12))
        (fp_line (start -1.65 -1.1) (end -1.65 -1.4) (layer F.SilkS) (width 0.12))
        (fp_line (start -1.65 -1.4) (end 1.65 -1.4) (layer F.SilkS) (width 0.12))
        (fp_line (start 1.65 -1.4) (end 1.65 -1.1) (layer F.SilkS) (width 0.12))

        (fp_line (start -1.5 -1.25) (end 1.5 -1.25) (layer F.Fab) (width 0.1))
        (fp_line (start 1.5 -1.25) (end 1.5 1.25) (layer F.Fab) (width 0.1))
        (fp_line (start 1.5 1.25) (end -1.5 1.25) (layer F.Fab) (width 0.1))
        (fp_line (start -1.5 1.25) (end -1.5 -1.25) (layer F.Fab) (width 0.1))
        (fp_circle (center 0 0) (end 0.75 0) (layer F.Fab) (width 0.1))
        (pad 1 smd rect (at -1.7 0 ${p.rot}) (size 0.9 1.7) (layers F.Cu F.Paste F.Mask) ${p.net.from.str})
        (pad 2 smd rect (at 1.7 0 ${p.rot}) (size 0.9 1.7) (layers F.Cu F.Paste F.Mask) ${p.net.to.str})

     )
        
        `
    }
}