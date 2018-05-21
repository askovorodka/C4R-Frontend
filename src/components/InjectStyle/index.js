export const injectStyle = (style) => {
  const styleElement = document.createElement('style')
  document.head.appendChild(styleElement)
  let styleSheet = styleElement.sheet
  styleSheet.insertRule(style, styleSheet.cssRules.length)
}
