import React from 'react';
import { Alert, Linking, ScrollView, View, useWindowDimensions, Text } from 'react-native';
import RenderHTMLNative, {
    CustomTagRendererRecord,
    HTMLContentModel,
    HTMLElementModel,
    ListStyleSpec,
    NodeWithChildren,
    RenderersProps,
} from 'react-native-render-html';
import { fontAll, fonts, useTheme } from '@/theme';
import CounterStyle from '@jsamr/counter-style';
import { findOne } from 'domutils';

const source = {
    html: `
<div><p style='text-align:center;'>Hello World!</p>
<p style='text-align:center;font-size: 1.6rem; font-family: Manrope; font-weight: 600;'>
  Lorem ipsum dolor sit amet, consectetur adipiscing
  elit, sed do eiusmod tempor incididunt ut labore et
  dolore magna aliqua. Ut enim ad minim veniam, quis
  nostrud exercitation ullamco laboris nisi ut aliquip
  ex ea commodo consequat.
</p><p>
  Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore
  eu fugiat nulla pariatur. Excepteur sint occaecat
  cupidatat non proident, sunt in culpa qui officia
  deserunt mollit anim id est laborum.
</p></div>
<a id="link" href="https://developer.mozilla.org/">
  This text can be clicked.
  <img src="https://images.unsplash.com/photo-1682687220777-2c60708d6889?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" />
  An the image too!
</a>


<ul style="list-style-type: lower-russian;">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
  <li>Six</li>
  <li>Seven</li>
  <li>Eight</li>
</ul>
<figure>
  <pre>  ___________________________
< I'm an expert in my field. >
  ---------------------------
       ^__^
      (oo)_______
       (__)       )/
           ||----w |
           ||     ||
  </pre>
  <figcaption>
    A cow saying, "I'm an expert in my field." The cow is illustrated using preformatted text characters.
  </figcaption>
</figure>`,
};

const template = {
    html: `
<body>
  <nav>
    <a href="/">home</a>
    <a href="/contact">contact</a>
  </nav>
  <article style="padding: 10px;">
    <header>
      <h1>Lorem Impsum Dolor Sit!</h1>
    </header>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco laboris nisi ut aliquip
      ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore
      eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.
    </p>
  </article>
  <footer>
    Lorem ipsum inc, 2021
  </footer>
</body>
`,
};

const example = `<p>Terms & Conditions:</p><p></p><ul><li>The coupon is valid for 10% OFF.</li><li>The maximum discount value is capped at 1,000 SEAGM Credits.</li><li>The coupon is valid 30 days from the redeemed date.</li><li>The coupon code is eligible for selected non-discounted games top-up and gift cards at SEAGM.</li><li>The coupon is <b>NOT </b>valid for products listed below:<ul><li>Binance Gift Card (Global)</li><li>TNG Reload Pin (MY)</li><li>Celcom XPax Airtime Reload (MY)</li><li>Digi Beyond Prepaid Reload (MY)</li><li>Google Play Gift Card (MY)</li><li>Maxis Hotlink Prepaid Reload (MY)</li><li>NJOI Prepaid Reload - Astro (MY)</li><li>Redone Reload Prepaid Reload (MY)</li><li>XOX Xinxun Prepaid Reload (MY)</li><li>1-2 Call (TH)</li><li>DTAC Happy Cash Card (TH)</li><li>Garena Shells (TH)</li><li>TrueMoney e-Pins (TH)</li><li>Mint Prepaid Card (EU)</li><li>Mint Prepaid Card (AU)</li><li>Mint Prepaid Card (Global)</li><li>American Express Gift Card (US)</li><li>KALEOZ Gift Card (US)</li><li>KALEOZ Gift Card (CN)</li><li>KALEOZ Gift Card (EU)</li><li>SEAGM Gift Card (CN)</li><li>SEAGM Gift Card (ID)</li><li><font>SEAGM Gift Card (VN)</font></li><li><font>SEAGM Gift Card (Global)</font></li><li><font>SEAGM Gift Card (SG)</font></li><li><font>SEAGM Gift Card (PH)</font></li><li><font>SEAGM Gift Card (MY)</font></li><li><font>Razer Gold Malaysia (MYR)</font></li><li><font>Steam Wallet Code (MYR)</font></li><li><font>Razer Gold Chile (CLP)</font></li><li><font>Razer Gold Australia (AUD)</font></li><li>Free Fire TH</li><li>Piggy GO Diamond</li><li>State of Survival Diamonds (Vietnamuff09</li><li>IDLE GOG Diamonds</li><li>Land of Empires Dragon Roar Coins</li><li>iQIYI (Singapore) VIP Standard Membership</li><li>The Walking Dead: Survivors Rubies</li><li>Dragon Raja (SEA) Coupon</li><li>Ragnarok X: Next Generation Diamonds</li><li>Revelation Mobile Jade Thailand</li><li>Revelation Mobile Jade Indonesia</li><li>Revelation Mobile Jade Philippines</li><li>Revelation Mobile Jade Malaysia</li><li>Mobile Legends Diamonds Singapore</li><li>Mobile Legends Diamonds Malaysia</li><li>Mobile Legends Diamonds Philippines</li><li>Mobile Legends Diamonds Saudi Arabia</li><li><font>BoomZ Origin Chicken Coin</font></li><li><font>Sky: Children of the Light Candles</font></li><li><font>Garena RoV: Mobile MOBA Coupons (Thailand)</font></li><li><font>Metal Slug: Awakening Ruby Thailand</font></li><li><font>Metal Slug: Awakening Ruby Indonesia</font></li><li><font>Metal Slug: Awakening Ruby Malaysia</font></li><li><font>Metal Slug: Awakening Ruby Philippines</font></li><li><font>Metal Slug: Awakening Ruby Singapore</font></li></ul></li><li>Unclaimable coupon is not exchangeable for STAR.  </li><li>All coupons are not exchangeable for cash.</li><li>Unless otherwise stated, the coupon is not valid in conjunction with other promotions or discounts.</li><li>SEAGM reserves the right to cancel or modify any order, or revoke the use of coupons for any reason, including the following circumstances:<ul><li>Suspicious or fraudulent purchasing activity or coupon use.</li><li aria-level="2"><p>Coupon abuse, including the use of multiple accounts or multiple checkouts associated with the same customer or group of customers.</p></li><li aria-level="2"><p>Coupon used in bad faith (including resold coupons or use of coupons by customers purchasing products for the purpose of reselling).</p></li></ul></li><li>SEAGM will not be liable and/or be required to offer replacement coupon for<ul><li>Discontinued or cancelled coupon.</li><li aria-level="2"><p>Improper use of, or inability to redeem a coupon.</p></li><li aria-level="2"><p>The inability to redeem a coupon due to technical issues.</p></li></ul></li><li>SEAGM reserves the right to change these terms and conditions or cancel any promotions at any time and without prior notice.</li><li>SEAGM shall not be liable for any losses or damages which occur during the code redemption / claim process.</li></ul>`;

function selectDomRoot(node: NodeWithChildren) {
    return findOne(e => e.name === 'article', node.children, true);
}

// const customHTMLElementModels = {
//     a: HTMLElementModel.fromCustomModel({
//         tagName: 'a',
//         contentModel: HTMLContentModel.block,
//     }),
// };

const RenderHtml = () => {
    const theme = useTheme();
    const { width } = useWindowDimensions();
    const tagsStyles = {
        article: {
            marginHorizontal: 10,
        },
        a: {
            fontSize: 14,
            lineHeight: 18,
            color: theme.colors.primary,
        },
        li: {
            color: theme.colors.textColor1,
        },
    };

    // const renderers: CustomTagRendererRecord = {
    //     h1: ({ TDefaultRenderer, ...props }: any) => {
    //         const onPress = () => Alert.alert('pressed!');
    //         return <TDefaultRenderer {...props} onPress={onPress} />;
    //     },
    // };

    const markerTextStyle = {
        fontSize: 14,
        marginEnd: 10,
        color: theme.colors.textColor1,
    };
    const renderersProps: Partial<RenderersProps> = {
        a: {
            onPress: (_, href: string) => {
                Linking.canOpenURL(href).then(supported => {
                    if (supported) {
                        Linking.openURL(href);
                    }
                });
            },
        },
        img: {
            enableExperimentalPercentWidth: true,
        },
        ul: {
            markerTextStyle,
            enableDynamicMarkerBoxWidth: false,
            enableRemoveTopMarginIfNested: false,
            enableRemoveBottomMarginIfNested: false,
            getFallbackListStyleTypeFromNestLevel(nestLevel) {
                return 'disc';
            },
        },
        ol: {
            markerTextStyle,
            enableDynamicMarkerBoxWidth: false,
            enableRemoveBottomMarginIfNested: false,
            enableRemoveTopMarginIfNested: false,
            getFallbackListStyleTypeFromNestLevel: () => 'disc',
        },
    };

    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 16,
                backgroundColor: theme.colors.background,
            }}
        >
            <View
                style={{
                    backgroundColor: theme.colors.background,
                    padding: 16,
                    borderRadius: 12,
                    margin: 12,
                }}
            >
                <RenderHTMLNative
                    source={{ html: example }}
                    contentWidth={width}
                    tagsStyles={tagsStyles}
                    // renderers={renderers}
                    systemFonts={fontAll}
                    renderersProps={renderersProps}
                    enableExperimentalMarginCollapsing={true}
                    // customListStyleSpecs={customListStyleSpecs}
                    // customHTMLElementModels={customHTMLElementModels}
                    defaultTextProps={{
                        style: {
                            fontFamily: fonts.Manrope.SemiBold,
                        },
                        selectable: true,
                    }}
                />
            </View>

            <RenderHTMLNative
                contentWidth={width}
                source={template}
                selectDomRoot={selectDomRoot}
            />

            <RenderHTMLNative
                contentWidth={width}
                source={template}
                renderersProps={renderersProps}
                defaultTextProps={{
                    style: {
                        fontSize: 16,
                        lineHeight: 18,
                        fontFamily: fonts.Manrope.SemiBold,
                        color: theme.colors.primary,
                    },
                }}
            />
            {/*<RenderHTMLNative
                source={list}
                contentWidth={width}
                customListStyleSpecs={customListStyleSpecs}
            />
            <RenderHTMLNative
                contentWidth={width}
                source={{
                    html: `<ol style="list-style-type: disc; color: blue; font-weight: bold;">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
  <li>Six</li>
  <li>Seven</li>
  <li>Eight</li>
</ol>`,
                }}
            />
            <RenderHtmlWidgets
                html={source.html}
                textStyle={{
                    fontSize: 16,
                    lineHeight: 18,
                    fontFamily: fonts.Manrope.SemiBold,
                    color: theme.colors.primary,
                    borderWidth: 1,
                    borderColor: 'skyblue',
                }}
                contentStyle={{ borderWidth: 1, borderColor: theme.colors.primary }}
            /> */}
        </ScrollView>
    );
};

export default RenderHtml;
