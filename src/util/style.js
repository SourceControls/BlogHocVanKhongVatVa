function style(config) {
    return config
        ? {
              globalStyles: (theme) => ({
                  figure: {
                      boxSizing: 'border-box',
                      padding: 0,
                      margin: 0,
                  },
                  'a, a:visited': {
                      color: 'inherit',
                      textDecoration: 'none',
                  },
                  'a:hover': {
                      color: theme.colors[config.primaryColor][7] + ' !important',
                  },
              }),
              fontFamily: config.fontFamily,
              primaryColor: config.primaryColor,
              fontSizes: {
                  md: config.baseFontSize,
              },
              components: {
                  Divider: {
                      styles: (theme) => ({
                          root: {
                              borderTopColor: theme.colors[config.primaryColor][5] + ' !important',
                          },
                      }),
                  },
                  Text: {
                      variants: {
                          category: (theme) => ({
                              root: {
                                  backgroundColor: theme.colors[config.primaryColor][7],
                              },
                          }),
                      },
                  },
                  Carousel: {
                      styles: (theme) => ({
                          indicator: {
                              backgroundColor: theme.colors[config.primaryColor][5] + ' !important',
                          },
                      }),
                  },
                  ActionIcon: {
                      styles: (theme) => ({
                          root: {
                              color: theme.colors[config.primaryColor][5] + ' !important',
                              '&:hover': {
                                  backgroundColor: theme.colors[config.primaryColor][0] + ' !important',
                              },
                          },
                      }),
                  },
                  Image: {
                      styles: {
                          root: {
                              borderRadius: config.imageRadius,
                              overflow: 'hidden',
                          },
                      },
                  },
              },
          }
        : {}
}
export default style
