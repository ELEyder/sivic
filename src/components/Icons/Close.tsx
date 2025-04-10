import { SVGProps } from "react"

const Close = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="m11.64 10.314 3.71-3.71a.938.938 0 1 0-1.325-1.329l-3.71 3.711-3.712-3.71a.94.94 0 1 0-1.328 1.327l3.711 3.711-3.71 3.711a.939.939 0 1 0 1.327 1.328l3.711-3.71 3.711 3.71a.94.94 0 0 0 1.328-1.328l-3.713-3.71Z"
    />
  </svg>
)
export default Close;
