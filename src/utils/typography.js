import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '24px',
  baseLineHeight: 1.45,
  headerFontFamily: ['Roboto', 'sans-serif', 'Roboto Mono'],
  headerColor: '#2B2B2B',
  bodyFontFamily: ['Nunito', 'Roboto', 'sans-serif', 'Roboto Mono'],
  overrideStyles: () => ({
    p: {
      fontSize: '18px',
    },
    a: {
      fontSize: '18px',
    },
    ul: {
      fontSize: '18px',
    },
    ol: {
      fontSize: '18px',
    },
    section: {
      paddingTop: '1em',
    },
    div: {
      fontSize: '18px',
    },
    h1: {
      fontSize: '1.5rem',
    },
    h2: {
      fontSize: '1.3rem',
    },
    h3: {
      fontSize: '1.1rem',
    },
  }),
})

typography.injectStyles()

export default typography
