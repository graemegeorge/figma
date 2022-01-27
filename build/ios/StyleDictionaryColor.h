
//
// StyleDictionaryColor.h
//

// Do not edit directly
// Generated on Thu, 27 Jan 2022 22:26:34 GMT


#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
ColorsBlack,
ColorsWhite,
ColorsGray1,
ColorsGray2,
ColorsGray3,
ColorsGray4,
ColorsGray5,
ColorsRed,
ColorsOrange,
ColorsYellow,
ColorsBlue1,
ColorsBlue2,
ColorsBlue3,
ColorsGreen1,
ColorsGreen2,
ColorsGreen3,
ColorsBlue4
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
