export type ScreenParams = {
    Main: MainTabScreenParams;
    Modal: undefined;
    Fonts: undefined;
    FontDetail: { font: string };
    Floating: undefined;
    ScrollableTab: undefined;
    ScrollableTabNew: undefined;
    VerticalScrollable: undefined;
    SpecialDeals: undefined;
    Animal: undefined;
    Notification: undefined;
    InternalWebview: undefined;
    Article: undefined;
    RenderHtml: undefined;
    CustomRender: undefined;
    PrerenderHtml: undefined;
    ScrollablePagerView: undefined;
};

export type MainTabScreenParams = {
    Home: undefined;
    Notice: undefined;
    List: undefined;
    Cart: CartParams;
    User: undefined;
};
