
//
// StyleDictionaryColor.m
//

// Do not edit directly
// Generated on Thu, 27 Jan 2022 22:26:34 GMT


#import "StyleDictionaryColor.h"

@implementation StyleDictionaryColor

+ (UIColor *)color:(StyleDictionaryColorName)colorEnum{
  return [[self values] objectAtIndex:colorEnum];
}

+ (NSArray *)values {
  static NSArray* colorArray;
  static dispatch_once_t onceToken;

  dispatch_once(&onceToken, ^{
    colorArray = @[
#333333ff,
#ffffffff,
#4f4f4fff,
#828282ff,
#bdbdbdff,
#e0e0e0ff,
#f2f2f2ff,
#eb5757ff,
#f2994aff,
#f2c94cff,
#2f80edff,
#2d9cdbe6,
#56ccf2cc,
#219653ff,
#27ae60ff,
#6fcf97ff,
#56ccf254
    ];
  });

  return colorArray;
}

@end
