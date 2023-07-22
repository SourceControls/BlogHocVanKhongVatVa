import {IconChevronDown} from '@tabler/icons-react'
import {getConfig} from './service'

const inputStyle = {
    defaultProps: {
        inputWrapperOrder: ['label', 'input', 'description', 'error'],
    },
    styles: {
        input: {padding: '1.2rem 1rem'},
        label: {
            transform: 'translate(1rem, 50%)',
            zIndex: '1 !important',
            lineHeight: '1rem',
            position: 'relative',
            backgroundColor: 'var(--primary-color-0)',
            padding: '0 8px',
        },
        description: {
            transform: 'translate(1rem, 0)',
        },
    },
}

export function style() {
    const config = getConfig()
    return config
        ? {
              fontFamily: config.fontFamily,
              primaryColor: config.primaryColor,
              globalStyles: (theme) => {
                  //   '--primary-color-='theme.colors[config.primaryColor]
                  //   theme.backgroundColor = '--primary-color-0'
                  return {
                      ':root': {
                          '--primary-color-0': theme.colors[config.primaryColor][0],
                          '--primary-color-1': theme.colors[config.primaryColor][1],
                          '--primary-color-2': theme.colors[config.primaryColor][2],
                          '--primary-color-3': theme.colors[config.primaryColor][3],
                          '--primary-color-4': theme.colors[config.primaryColor][4],
                          '--primary-color-5': theme.colors[config.primaryColor][5],
                          '--primary-color-6': theme.colors[config.primaryColor][6],
                          '--primary-color-7': theme.colors[config.primaryColor][7],
                          '--primary-color-8': theme.colors[config.primaryColor][8],
                      },
                  }
              },

              components: {
                  Divider: {
                      styles: (theme) => ({
                          root: {
                              borderTopColor: 'var(--primary-color-5) !important',
                          },
                      }),
                  },
                  Text: {
                      variants: {
                          category: (theme) => ({
                              root: {
                                  backgroundColor: 'var(--primary-color-7)',
                              },
                          }),
                      },
                  },
                  Carousel: {
                      styles: (theme) => ({
                          indicator: {
                              backgroundColor: 'var(--primary-color-5) !important',
                          },
                      }),
                  },
                  ActionIcon: {
                      styles: (theme) => ({
                          root: {
                              color: 'var(--primary-color-7) !important',
                              '&:hover': {
                                  backgroundColor: 'var(--primary-color-2) !important',
                              },
                          },
                      }),
                      defaultProps: {
                          size: 'xl',
                      },
                  },

                  Input: {
                      styles: (theme) => ({
                          input: {
                              backgroundColor: 'var(--primary-color-0)',
                              borderRadius: theme.radius.xl,
                          },
                      }),
                  },

                  TextInput: inputStyle,
                  Textarea: inputStyle,
                  Select: inputStyle,
                  MultiSelect: inputStyle,
                  PasswordInput: inputStyle,
                  Tabs: {
                      styles: (theme) => ({
                          tab: {
                              '&:hover': {
                                  backgroundColor: 'var(--primary-color-2)',
                              },
                              '&[data-active="true"]': {
                                  backgroundColor: 'var(--primary-color-2)',
                              },
                          },
                      }),
                  },
                  Button: {
                      styles: (theme) => ({
                          root: {
                              borderRadius: theme.radius.xl,
                          },
                      }),
                      variants: {
                          filled: (theme) => ({
                              root: {
                                  color: 'var(--primary-color-0)',
                                  transition: '0.3s',
                                  '&:hover': {
                                      transform: 'translateY(-3px)',
                                      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                                  },
                                  '&:active': {
                                      transform: 'translateY(-1px)',
                                      boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
                                  },
                                  '&::after': {
                                      content: '""',
                                      display: 'inline-block',
                                      height: '100%',
                                      width: '100%',
                                      borderRadius: '100px',
                                      position: 'absolute',
                                      top: '0',
                                      left: '0',
                                      zIndex: -1,
                                      transition: 'all .4s',
                                      backgroundColor: 'var(--primary-color-6)',
                                  },
                                  '&:hover::after': {
                                      transform: 'scaleX(1.4) scaleY(1.6)',
                                      opacity: 0,
                                  },

                                  '@keyframes moveInBottom': {
                                      '0%': {opacity: 0, transform: 'translateY(30px)'},
                                      '100%': {opacity: 1, transform: 'translateY(0px)'},
                                  },
                              },
                          }),
                          outline: (theme) => ({
                              root: {
                                  color: 'var(--primary-color-6)',
                                  display: 'inline-block',
                                  transition: 'all 0.3s',
                                  position: 'relative',
                                  overflow: 'hidden',
                                  zIndex: 1,
                                  '&:after': {
                                      content: '""',
                                      position: 'absolute',
                                      bottom: '0',
                                      left: '0',
                                      width: '100%',
                                      height: '100%',
                                      backgroundColor: 'transparent',
                                      borderRadius: '10rem',
                                      zIndex: -2,
                                  },
                                  '&:before': {
                                      content: '""',
                                      position: 'absolute',
                                      bottom: '0',
                                      left: '0',
                                      width: '0%',
                                      height: '100%',
                                      backgroundColor: 'var(--primary-color-6)',
                                      transition: 'all 0.3s',
                                      borderRadius: '10rem',
                                      zIndex: -1,
                                  },
                                  '&:hover': {color: 'var(--primary-color-0)'},
                                  '&:hover:before': {width: '100%'},
                              },
                          }),
                      },
                  },

                  NavLink: {
                      styles: (theme) => ({
                          root: {
                              '&:hover': {
                                  backgroundColor: 'var(--primary-color-2)',
                              },

                              '&[data-active]': {
                                  backgroundColor: 'var(--primary-color-2)',
                                  color: 'var(--primary-color-9)',
                              },
                              '&[data-active]:hover': {
                                  backgroundColor: 'var(--primary-color-2)',
                                  color: 'var(--primary-color-9)',
                              },
                          },
                      }),
                  },
                  Modal: {
                      styles: (theme) => ({
                          content: {backgroundColor: 'var(--primary-color-0)'},
                          header: {backgroundColor: 'var(--primary-color-0)'},
                      }),
                  },
              },

              colors: {
                  brown: [
                      '#fff1e2',
                      '#f3d7bd',
                      '#ECC8AA',
                      '#dda16e',
                      '#d48746',
                      '#bb6d2d',
                      '#915422',
                      '#683c17',
                      '#40240b',
                      '#1a0a00',
                  ],
              },
          }
        : {}
}
