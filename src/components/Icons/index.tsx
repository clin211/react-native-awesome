import React, {FC} from 'react';
import {Pressable, PressableProps, ViewStyle} from 'react-native';
import {SvgProps} from 'react-native-svg';
import useMakeStyle from '../../hooks/useMakeStyle';
import AccountWidget from '../../assets/images/icons/account.svg';
import AddCartWidget from '../../assets/images/icons/add-cart.svg';
import AddWidget from '../../assets/images/icons/add.svg';
import ArrowBackWidget from '../../assets/images/icons/arrow-back.svg';
import ArrowDownWidget from '../../assets/images/icons/arrow-down.svg';
import ArrowForwardWidget from '../../assets/images/icons/arrow-forward.svg';
import ArrowLeftWidget from '../../assets/images/icons/arrow-left.svg';
import ArrowRightWidget from '../../assets/images/icons/arrow-right.svg';
import ArrowUpWidget from '../../assets/images/icons/arrow-up.svg';
import CameraFillWidget from '../../assets/images/icons/camera-fill.svg';
import CameraWidget from '../../assets/images/icons/camera.svg';
import CardWidget from '../../assets/images/icons/card.svg';
import CheckCircleWidget from '../../assets/images/icons/check-circle.svg';
import CheckFillWidget from '../../assets/images/icons/check-fill.svg';
import CheckOutlineWidget from '../../assets/images/icons/check-outline.svg';
import CheckboxFillWidget from '../../assets/images/icons/checkbox-fill.svg';
import CheckboxWidget from '../../assets/images/icons/checkbox.svg';
import ClearWidget from '../../assets/images/icons/clear.svg';
import CodeWidget from '../../assets/images/icons/code.svg';
import ConnectWidget from '../../assets/images/icons/connect.svg';
import CopyWidget from '../../assets/images/icons/copy.svg';
import CountdownWidget from '../../assets/images/icons/countdown.svg';
import CouponWidget from '../../assets/images/icons/coupon.svg';
import CurrencyWidget from '../../assets/images/icons/currency.svg';
import DeleteAccountWidget from '../../assets/images/icons/delete-account.svg';
import DeleteFillWidget from '../../assets/images/icons/delete-fill.svg';
import DeleteForeverWidget from '../../assets/images/icons/delete-forever.svg';
import DeleteWidget from '../../assets/images/icons/delete.svg';
import DescriptionWidget from '../../assets/images/icons/description.svg';
import DisableWidget from '../../assets/images/icons/disable.svg';
import DoneWidget from '../../assets/images/icons/done.svg';
import EditWidget from '../../assets/images/icons/edit.svg';
import Edit2Widget from '../../assets/images/icons/edit2.svg';
import EmailWidget from '../../assets/images/icons/email.svg';
import ErrorWidget from '../../assets/images/icons/error.svg';
import FavoriteFillWidget from '../../assets/images/icons/favorite-fill.svg';
import FavoriteWidget from '../../assets/images/icons/favorite.svg';
import FlagFillWidget from '../../assets/images/icons/flag-fill.svg';
import FlagWidget from '../../assets/images/icons/flag.svg';
import ForbidWidget from '../../assets/images/icons/forbid.svg';
import Forbid2Widget from '../../assets/images/icons/forbid2.svg';
import GTranslateWidget from '../../assets/images/icons/g-translate.svg';
import GiftWidget from '../../assets/images/icons/gift.svg';
import GlobalWidget from '../../assets/images/icons/global.svg';
import HelpFillWidget from '../../assets/images/icons/help-fill.svg';
import HelpWidget from '../../assets/images/icons/help.svg';
import ImageFillWidget from '../../assets/images/icons/image-fill.svg';
import ImageWidget from '../../assets/images/icons/image.svg';
import InfoFillWidget from '../../assets/images/icons/info-fill.svg';
import InfoWidget from '../../assets/images/icons/info.svg';
import InstantWidget from '../../assets/images/icons/instant.svg';
import LinkWidget from '../../assets/images/icons/link.svg';
import ListWidget from '../../assets/images/icons/list.svg';
import LivechatWidget from '../../assets/images/icons/livechat.svg';
import LocalPayWidget from '../../assets/images/icons/local-pay.svg';
import LocationWidget from '../../assets/images/icons/location.svg';
import LogoutWidget from '../../assets/images/icons/logout.svg';
import MarkEmailWidget from '../../assets/images/icons/mark-email.svg';
import MinusWidget from '../../assets/images/icons/minus.svg';
import MoneyWidget from '../../assets/images/icons/money.svg';
import MoreHWidget from '../../assets/images/icons/more-h.svg';
import MoreVWidget from '../../assets/images/icons/more-v.svg';
import OfflineFillWidget from '../../assets/images/icons/offline-fill.svg';
import OpenWidget from '../../assets/images/icons/open.svg';
import OrderListWidget from '../../assets/images/icons/order-list.svg';
import PasswordFillWidget from '../../assets/images/icons/password-fill.svg';
import PasswordWidget from '../../assets/images/icons/password.svg';
import PhoneWidget from '../../assets/images/icons/phone.svg';
import QuestionWidget from '../../assets/images/icons/question.svg';
import ReadWidget from '../../assets/images/icons/read.svg';
import RefreshWidget from '../../assets/images/icons/refresh.svg';
import ReplyWidget from '../../assets/images/icons/reply.svg';
import SaveWidget from '../../assets/images/icons/save.svg';
import SearchWidget from '../../assets/images/icons/search.svg';
import SendWidget from '../../assets/images/icons/send.svg';
import SettingsFillWidget from '../../assets/images/icons/settings-fill.svg';
import SettingsWidget from '../../assets/images/icons/settings.svg';
import ShareWidget from '../../assets/images/icons/share.svg';
import StarBorderWidget from '../../assets/images/icons/star-border.svg';
import StarFillWidget from '../../assets/images/icons/star-fill.svg';
import StarWidget from '../../assets/images/icons/star.svg';
import TopupWidget from '../../assets/images/icons/topup.svg';
import TranslateWidget from '../../assets/images/icons/translate.svg';
import VerifiedWidget from '../../assets/images/icons/verified.svg';
import VisibilityOffWidget from '../../assets/images/icons/visibility-off.svg';
import VisibilityWidget from '../../assets/images/icons/visibility.svg';
import WaitWidget from '../../assets/images/icons/wait.svg';
import WarningFillWidget from '../../assets/images/icons/warning-fill.svg';

interface CommonProps extends PressableProps {
  onPress?: () => void;
  style?: ViewStyle;
  svgProps?: SvgProps;
}
export const Account: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <AccountWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const AddCart: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <AddCartWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Add: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <AddWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const ArrowBack: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <ArrowBackWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const ArrowDown: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <ArrowDownWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const ArrowForward: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <ArrowForwardWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const ArrowLeft: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <ArrowLeftWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const ArrowRight: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <ArrowRightWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const ArrowUp: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <ArrowUpWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const CameraFill: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <CameraFillWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Camera: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <CameraWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Card: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <CardWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const CheckCircle: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <CheckCircleWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const CheckFill: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <CheckFillWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const CheckOutline: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <CheckOutlineWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const CheckboxFill: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <CheckboxFillWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Checkbox: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <CheckboxWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Clear: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <ClearWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Code: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <CodeWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Connect: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <ConnectWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Copy: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <CopyWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Countdown: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <CountdownWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Coupon: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <CouponWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Currency: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <CurrencyWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const DeleteAccount: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <DeleteAccountWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const DeleteFill: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <DeleteFillWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const DeleteForever: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <DeleteForeverWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Delete: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <DeleteWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Description: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <DescriptionWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Disable: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <DisableWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Done: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <DoneWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Edit: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <EditWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Edit2: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <Edit2Widget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Email: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <EmailWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Error: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <ErrorWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const FavoriteFill: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <FavoriteFillWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Favorite: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <FavoriteWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const FlagFill: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <FlagFillWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Flag: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <FlagWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Forbid: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <ForbidWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Forbid2: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <Forbid2Widget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const GTranslate: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <GTranslateWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Gift: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <GiftWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Global: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <GlobalWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const HelpFill: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <HelpFillWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Help: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <HelpWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const ImageFill: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <ImageFillWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Image: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <ImageWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const InfoFill: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <InfoFillWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Info: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <InfoWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Instant: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <InstantWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Link: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <LinkWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const List: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <ListWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Livechat: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <LivechatWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const LocalPay: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <LocalPayWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Location: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <LocationWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Logout: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <LogoutWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const MarkEmail: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <MarkEmailWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Minus: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <MinusWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Money: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <MoneyWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const MoreH: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <MoreHWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const MoreV: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <MoreVWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const OfflineFill: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <OfflineFillWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Open: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <OpenWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const OrderList: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <OrderListWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const PasswordFill: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <PasswordFillWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Password: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <PasswordWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Phone: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <PhoneWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Question: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <QuestionWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Read: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <ReadWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Refresh: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <RefreshWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Reply: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <ReplyWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Save: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <SaveWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Search: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <SearchWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Send: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <SendWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const SettingsFill: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <SettingsFillWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Settings: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <SettingsWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Share: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <ShareWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const StarBorder: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <StarBorderWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const StarFill: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <StarFillWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Star: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <StarWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Topup: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <TopupWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Translate: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <TranslateWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Verified: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <VerifiedWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const VisibilityOff: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <VisibilityOffWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Visibility: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <VisibilityWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const Wait: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <WaitWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};

export const WarningFill: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress}>
      <WarningFillWidget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};
