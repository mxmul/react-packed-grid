/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */
declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}

interface SvgrComponent
  extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

declare module '*.svg' {
  const svgUrl: string
  const svgComponent: SvgrComponent
  export default svgUrl
  export { svgComponent as ReactComponent }
}

declare module 'rect-scaler' {
  type Layout = {
    rows: number
    cols: number
    width: number
    height: number
    area: number
  }
  function largestSquare(
    containerWidth: number,
    containerHeight: number,
    numRects: number
  ): Layout
  function largestRect(
    containerWidth: number,
    containerHeight: number,
    numRects: number,
    rectWidth: number,
    rectHeight: number
  ): Layout
  export { largestSquare, largestRect }
}
