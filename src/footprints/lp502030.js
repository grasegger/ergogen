module.exports = {
    params: {
        side: 'F'
    },
    body: p => `
        (module "LP502030" (layer "${p.param.side}.Cu")

            ${p.at /* parametric position */}
            ${'' /* footprint reference */}

            (fp_text reference "${p.ref}" (at 0 0) (layer B.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
            
            (fp_text value "LP502030" 
              (at 0 1 unlocked) 
              (layer "${p.param.side}.Fab")
              (effects 
                (font 
                  (size 1 1) 
                  (thickness 0.15)
                )
              )
            )

            (fp_text user "big fat battery (502030)" 
              (at 0 -5.588 unlocked)
              (layer "${p.param.side}.SilkS")
              (effects 
                (font 
                  (size 1 1)
                  (thickness 0.15)
                )
              )
            )

            (fp_text user "4,3 mm height" 
              (at 0 6.096 unlocked)
              (layer "${p.param.side}.SilkS")
              (effects 
                (font 
                  (size 1 1) 
                  (thickness 0.15)
                )
              )
            )

            (fp_line 
              (start 18 12.75)
              (end 18 -12.75)
              (layer ${p.param.side}.SilkS)
              (width 0.12)
            )
            (fp_line 
              (start 18 -12.75)
              (end -18 -12.75)
              (layer ${p.param.side}.SilkS)
              (width 0.12)
            )
            (fp_line 
              (start -18 -12.75)
              (end -18 12.75)
              (layer ${p.param.side}.SilkS)
              (width 0.12)
            )
            (fp_line 
              (start -18 12.75)
              (end 18 12.75)
              (layer ${p.param.side}.SilkS)
              (width 0.12)
            )
        )
    `
}