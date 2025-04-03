import { SVGProps } from "react"

const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M28.5 16.5H11.745l7.32-7.32a1.512 1.512 0 0 0 0-2.13 1.494 1.494 0 0 0-2.115 0l-9.885 9.885a1.494 1.494 0 0 0 0 2.115l9.885 9.885a1.496 1.496 0 0 0 2.115-2.115l-7.32-7.32H28.5c.825 0 1.5-.675 1.5-1.5s-.675-1.5-1.5-1.5Z"
    />
  </svg>
)
export default ArrowRight
