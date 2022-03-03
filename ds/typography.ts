
import { Measures } from './measures';
const xxxLarge = {
           fontFamily: "Inter",
           fontStyle: "normal",
           fontWeight: 400,
           fontSize: {
                      measure: 24,
                      unit: "Pixels",
                      css: "24px"
                     },
           lineHeight: {
                          measure: 32,
                          unit: "Pixels",
                          css: "32px"
                         },
           letterSpacing: {
                             measure: -1.5,
                             unit: "Percent",
                             css: "-1.5%"
                            },
           textIndent: {
                        measure: 0,
                        unit: "Pixels",
                        css: "0px"
                       },
         };
const xxLarge = {
           fontFamily: "Inter",
           fontStyle: "normal",
           fontWeight: 400,
           fontSize: {
                      measure: 22,
                      unit: "Pixels",
                      css: "22px"
                     },
           lineHeight: {
                          measure: 32,
                          unit: "Pixels",
                          css: "32px"
                         },
           letterSpacing: {
                             measure: -1.37,
                             unit: "Percent",
                             css: "-1.37%"
                            },
           textIndent: {
                        measure: 0,
                        unit: "Pixels",
                        css: "0px"
                       },
         };
const xLarge = {
           fontFamily: "Inter",
           fontStyle: "normal",
           fontWeight: 500,
           fontSize: {
                      measure: 19,
                      unit: "Pixels",
                      css: "19px"
                     },
           lineHeight: {
                          measure: 24,
                          unit: "Pixels",
                          css: "24px"
                         },
           letterSpacing: {
                             measure: -1.19,
                             unit: "Percent",
                             css: "-1.19%"
                            },
           textIndent: {
                        measure: 0,
                        unit: "Pixels",
                        css: "0px"
                       },
         };
const large = {
           fontFamily: "Inter",
           fontStyle: "normal",
           fontWeight: 500,
           fontSize: {
                      measure: 17,
                      unit: "Pixels",
                      css: "17px"
                     },
           lineHeight: {
                          measure: 24,
                          unit: "Pixels",
                          css: "24px"
                         },
           letterSpacing: {
                             measure: -1.06,
                             unit: "Percent",
                             css: "-1.06%"
                            },
           textIndent: {
                        measure: 0,
                        unit: "Pixels",
                        css: "0px"
                       },
         };
const medium = {
           fontFamily: "Inter",
           fontStyle: "normal",
           fontWeight: 500,
           fontSize: {
                      measure: 15,
                      unit: "Pixels",
                      css: "15px"
                     },
           lineHeight: {
                          measure: 24,
                          unit: "Pixels",
                          css: "24px"
                         },
           letterSpacing: {
                             measure: -0.94,
                             unit: "Percent",
                             css: "-0.94%"
                            },
           textIndent: {
                        measure: 0,
                        unit: "Pixels",
                        css: "0px"
                       },
         };
const small = {
           fontFamily: "Inter",
           fontStyle: "normal",
           fontWeight: 400,
           fontSize: {
                      measure: 14,
                      unit: "Pixels",
                      css: "14px"
                     },
           lineHeight: {
                          measure: 16,
                          unit: "Pixels",
                          css: "16px"
                         },
           letterSpacing: {
                             measure: 0.88,
                             unit: "Percent",
                             css: "0.88%"
                            },
           textIndent: {
                        measure: 0,
                        unit: "Pixels",
                        css: "0px"
                       },
         };
const xSmall = {
           fontFamily: "Inter",
           fontStyle: "normal",
           fontWeight: 400,
           fontSize: {
                      measure: 12,
                      unit: "Pixels",
                      css: "12px"
                     },
           lineHeight: {
                          measure: 16,
                          unit: "Pixels",
                          css: "16px"
                         },
           letterSpacing: {
                             measure: -0.75,
                             unit: "Percent",
                             css: "-0.75%"
                            },
           textIndent: {
                        measure: 0,
                        unit: "Pixels",
                        css: "0px"
                       },
         };
const xxSmall = {
           fontFamily: "Inter",
           fontStyle: "normal",
           fontWeight: 400,
           fontSize: {
                      measure: 11,
                      unit: "Pixels",
                      css: "11px"
                     },
           lineHeight: {
                          measure: 16,
                          unit: "Pixels",
                          css: "16px"
                         },
           letterSpacing: {
                             measure: -0.68,
                             unit: "Percent",
                             css: "-0.68%"
                            },
           textIndent: {
                        measure: 0,
                        unit: "Pixels",
                        css: "0px"
                       },
         };
const xxxSmall = {
           fontFamily: "Inter",
           fontStyle: "normal",
           fontWeight: 500,
           fontSize: {
                      measure: 10,
                      unit: "Pixels",
                      css: "10px"
                     },
           lineHeight: {
                          measure: 16,
                          unit: "Pixels",
                          css: "16px"
                         },
           letterSpacing: {
                             measure: -0.56,
                             unit: "Percent",
                             css: "-0.56%"
                            },
           textIndent: {
                        measure: 0,
                        unit: "Pixels",
                        css: "0px"
                       },
         };
const xxxxSmall = {
           fontFamily: "Inter",
           fontStyle: "normal",
           fontWeight: 700,
           fontSize: {
                      measure: 8,
                      unit: "Pixels",
                      css: "8px"
                     },
           lineHeight: {
                          measure: 8,
                          unit: "Pixels",
                          css: "8px"
                         },
           letterSpacing: {
                             measure: -0.5,
                             unit: "Percent",
                             css: "-0.5%"
                            },
           textIndent: {
                        measure: 0,
                        unit: "Pixels",
                        css: "0px"
                       },
         };


export const Typographies = {
      xxxLarge,
      xxLarge,
  /** Default */
      xLarge,
      large,
  /** Used for Subheaders and Breadcrumb Navigation */
      medium,
      small,
  /** Used for body copy */
      xSmall,
  /** Used for date stamps etc. */
      xxSmall,
  /** Counters & Lozenges */
      xxxSmall,
  /** Only used for appended text elements such as [CR] and [EXT] */
      xxxxSmall,
}