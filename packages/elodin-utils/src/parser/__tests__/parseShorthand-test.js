import parseShorthand from '../parseShorthand'

describe('Parsing shorthand values', () => {
  it('should return an object of longhand values using types', () => {
    expect(parseShorthand('padding', '2px')).toEqual({
      paddingTop: '2px',
      paddingRight: '2px',
      paddingBottom: '2px',
      paddingLeft: '2px',
    })

    expect(parseShorthand('padding', '2px 4px')).toEqual({
      paddingTop: '2px',
      paddingRight: '4px',
      paddingBottom: '2px',
      paddingLeft: '4px',
    })

    expect(parseShorthand('padding', '2px 4px 3px')).toEqual({
      paddingTop: '2px',
      paddingRight: '4px',
      paddingBottom: '3px',
      paddingLeft: '4px',
    })

    expect(parseShorthand('padding', '2px 4px 3px 1px')).toEqual({
      paddingTop: '2px',
      paddingRight: '4px',
      paddingBottom: '3px',
      paddingLeft: '1px',
    })

    expect(parseShorthand('border', '2px solid #FFF')).toEqual({
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: '#FFF',
    })

    expect(parseShorthand('border', '#FFF 2px solid')).toEqual({
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: '#FFF',
    })

    expect(parseShorthand('border', '#FFF solid 2px')).toEqual({
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: '#FFF',
    })

    expect(parseShorthand('border', 'blue solid')).toEqual({
      borderColor: 'blue',
      borderStyle: 'solid',
    })

    expect(parseShorthand('border', 'solid 2px')).toEqual({
      borderWidth: '2px',
      borderStyle: 'solid',
    })

    expect(parseShorthand('border', '2px solid')).toEqual({
      borderWidth: '2px',
      borderStyle: 'solid',
    })

    expect(
      parseShorthand('animation', '3s ease-in 1s 2 reverse both paused slidein')
    ).toEqual({
      animationDuration: '3s',
      animationTimingFunction: 'ease-in',
      animationDelay: '1s',
      animationIterationCount: '2',
      animationDirection: 'reverse',
      animationFillMode: 'both',
      animationPlayState: 'paused',
      animationName: 'slidein',
    })

    expect(
      parseShorthand('animation', 'slidein 2 3s 1s reverse ease-in both paused')
    ).toEqual({
      animationDuration: '3s',
      animationTimingFunction: 'ease-in',
      animationDelay: '1s',
      animationIterationCount: '2',
      animationDirection: 'reverse',
      animationFillMode: 'both',
      animationPlayState: 'paused',
      animationName: 'slidein',
    })

    expect(parseShorthand('animation', '3s linear 1s slidein')).toEqual({
      animationDuration: '3s',
      animationTimingFunction: 'linear',
      animationDelay: '1s',
      animationName: 'slidein',
    })

    expect(parseShorthand('transition', '300ms ease-in all')).toEqual({
      transitionProperty: 'all',
      transitionTimingFunction: 'ease-in',
      transitionDuration: '300ms',
    })

    expect(parseShorthand('transition', 'all 300ms ease-in 1s')).toEqual({
      transitionProperty: 'all',
      transitionTimingFunction: 'ease-in',
      transitionDuration: '300ms',
      transitionDelay: '1s',
    })
    /*
    expect(
      parseShorthand('font', 'italic small-caps normal 13px/150% Arial')
    ).toEqual({
      fontStyle: 'italic',
      fontVariant: 'small-caps',
      fontWeight: 'normal',
      fontSize: '13px',
      lineHeight: '150%',
      fontFamily: 'Arial',
    })

    expect(parseShorthand('font', 'Arial 13px')).toEqual({
      fontSize: '13px',
      fontFamily: 'Arial',
    })

    expect(
      parseShorthand(
        'font',
        '15px italic small-caps "Helvetica Neue", Arial, sans-serif'
      )
    ).toEqual({
      fontStyle: 'italic',
      fontVariant: 'small-caps',
      fontSize: '15px',
      fontFamily: '"Helvetica Neue", Arial, sans-serif',
    })*/
  })
})
