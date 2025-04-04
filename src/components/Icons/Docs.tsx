import { SVGProps } from "react"
const Docs = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={33}
    fill="none"
    {...props}
  >
    <path
      fill="#323232"
      d="M18.958 0H2.917C1.313 0 0 1.35 0 3v19.5c0 .825.656 1.5 1.458 1.5.802 0 1.459-.675 1.459-1.5v-18c0-.825.656-1.5 1.458-1.5h14.583c.802 0 1.459-.675 1.459-1.5S19.76 0 18.958 0Zm.86 6.885 7.044 7.245c.54.555.846 1.32.846 2.115V30c0 1.65-1.312 3-2.916 3H8.735c-1.604 0-2.902-1.35-2.902-3l.015-21c0-1.65 1.298-3 2.902-3h8.998c.773 0 1.517.315 2.07.885Zm-.86 9.615h6.563L17.5 8.25V15c0 .825.656 1.5 1.458 1.5Z"
    />
  </svg>
)
export default Docs
