import { motion, useReducedMotion } from 'framer-motion'
import { brand } from '../lib/content'

// Circular craft seal: rotating wide-tracked caption ring around the monogram.
// inspo: small circular stamp/monogram over photography (haveitfranksway #64)
export function Seal({ text, size = 132 }: { text: string; size?: number }) {
  const reduce = useReducedMotion()
  const ring = `${text} · `.repeat(2)
  return (
    <div className="relative grid place-items-center" style={{ width: size, height: size }}>
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 38, repeat: Infinity, ease: 'linear' }}
      >
        <defs>
          <path id="seal-ring" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <text className="fill-cream-50/90 font-sans" style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', fontWeight: 600 }}>
          <textPath href="#seal-ring" startOffset="0">
            {ring}
          </textPath>
        </text>
      </motion.svg>
      <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-[4px] bg-terracotta">
        <img src={brand.monogram} alt="" className="h-full w-full object-cover" />
      </span>
    </div>
  )
}
