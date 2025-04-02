import { SVGProps } from "react"
const Check = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={77}
    height={78}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M32.35 54.099 17.5 39.245l4.949-4.949 9.901 9.898 19.797-19.8 4.952 4.953-24.748 24.752Z"
    />
    <path
      fill="#000"
      fillRule="evenodd"
      d="M0 39C0 17.738 17.238.5 38.5.5 59.763.5 77 17.738 77 39c0 21.263-17.237 38.5-38.5 38.5C17.238 77.5 0 60.263 0 39Zm38.5 31.5a31.5 31.5 0 1 1 0-63 31.5 31.5 0 0 1 0 63Z"
      clipRule="evenodd"
    />
  </svg>
)
export default Check;