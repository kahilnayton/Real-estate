import React from "react"

function SvgProjectorScreen(props) {
  return (
    <svg viewBox="0 0 442 442" {...props}>
      <path d="M432 280h-10V30c0-5.522-4.478-10-10-10H231V10c0-5.522-4.478-10-10-10s-10 4.478-10 10v10H30c-5.522 0-10 4.478-10 10v250H10c-5.522 0-10 4.478-10 10s4.478 10 10 10h201v46.012l-75.037 79.106c-3.801 4.007-3.634 10.336.373 14.137 4.006 3.803 10.337 3.634 14.137-.373L211 375.073V432c0 5.522 4.478 10 10 10s10-4.478 10-10v-56.927l60.527 63.809a9.97 9.97 0 007.257 3.118c2.471 0 4.946-.91 6.88-2.745 4.007-3.801 4.174-10.13.373-14.137L231 346.012V300h201c5.522 0 10-4.478 10-10s-4.477-10-10-10zM40 40h362v240H40V40z" />
    </svg>
  )
}

export default SvgProjectorScreen