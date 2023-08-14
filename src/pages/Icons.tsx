import {View, ScrollView, Text} from 'react-native';
import React from 'react';
import Account from '../assets/images/icons/account.svg';
import AddCart from '../assets/images/icons/add-cart.svg';
import Add from '../assets/images/icons/add.svg';
import ArrowBack from '../assets/images/icons/arrow-back.svg';
import ArrowDown from '../assets/images/icons/arrow-down.svg';
import ArrowForward from '../assets/images/icons/arrow-forward.svg';
import ArrowLeft from '../assets/images/icons/arrow-left.svg';
import ArrowRight from '../assets/images/icons/arrow-right.svg';
import ArrowUp from '../assets/images/icons/arrow-up.svg';
import CameraFill from '../assets/images/icons/camera-fill.svg';
import Camera from '../assets/images/icons/camera.svg';
import Card from '../assets/images/icons/card.svg';
import CheckCircle from '../assets/images/icons/check-circle.svg';
import CheckFill from '../assets/images/icons/check-fill.svg';
import CheckOutline from '../assets/images/icons/check-outline.svg';
import CheckboxFill from '../assets/images/icons/checkbox-fill.svg';
import Checkbox from '../assets/images/icons/checkbox.svg';
import Clear from '../assets/images/icons/clear.svg';
import Code from '../assets/images/icons/code.svg';
import Connect from '../assets/images/icons/connect.svg';
import Copy from '../assets/images/icons/copy.svg';
import Countdown from '../assets/images/icons/countdown.svg';
import Coupon from '../assets/images/icons/coupon.svg';
import Currency from '../assets/images/icons/currency.svg';
import DeleteAccount from '../assets/images/icons/delete-account.svg';
import DeleteFill from '../assets/images/icons/delete-fill.svg';
import DeleteForever from '../assets/images/icons/delete-forever.svg';
import Delete from '../assets/images/icons/delete.svg';
import Description from '../assets/images/icons/description.svg';
import Disable from '../assets/images/icons/disable.svg';
import Done from '../assets/images/icons/done.svg';
import Edit from '../assets/images/icons/edit.svg';
import Edit2 from '../assets/images/icons/edit2.svg';
import Email from '../assets/images/icons/email.svg';
import Error from '../assets/images/icons/error.svg';
import FavoriteFill from '../assets/images/icons/favorite-fill.svg';
import Favorite from '../assets/images/icons/favorite.svg';
import FlagFill from '../assets/images/icons/flag-fill.svg';
import Flag from '../assets/images/icons/flag.svg';
import Forbid from '../assets/images/icons/forbid.svg';
import Forbid2 from '../assets/images/icons/forbid2.svg';
import GTranslate from '../assets/images/icons/g-translate.svg';
import Gift from '../assets/images/icons/gift.svg';
import Global from '../assets/images/icons/global.svg';
import HelpFill from '../assets/images/icons/help-fill.svg';
import Help from '../assets/images/icons/help.svg';
import ImageFill from '../assets/images/icons/image-fill.svg';
import Image from '../assets/images/icons/image.svg';
import InfoFill from '../assets/images/icons/info-fill.svg';
import Info from '../assets/images/icons/info.svg';
import Instant from '../assets/images/icons/instant.svg';
import Link from '../assets/images/icons/link.svg';
import List from '../assets/images/icons/list.svg';
import Livechat from '../assets/images/icons/livechat.svg';
import LocalPay from '../assets/images/icons/local-pay.svg';
import Location from '../assets/images/icons/location.svg';
import Logout from '../assets/images/icons/logout.svg';
import MarkEmail from '../assets/images/icons/mark-email.svg';
import Minus from '../assets/images/icons/minus.svg';
import Money from '../assets/images/icons/money.svg';
import MoreH from '../assets/images/icons/more-h.svg';
import MoreV from '../assets/images/icons/more-v.svg';
import OfflineFill from '../assets/images/icons/offline-fill.svg';
import Open from '../assets/images/icons/open.svg';
import OrderList from '../assets/images/icons/order-list.svg';
import PasswordFill from '../assets/images/icons/password-fill.svg';
import Password from '../assets/images/icons/password.svg';
import Phone from '../assets/images/icons/phone.svg';
import Question from '../assets/images/icons/question.svg';
import Read from '../assets/images/icons/read.svg';
import Refresh from '../assets/images/icons/refresh.svg';
import Reply from '../assets/images/icons/reply.svg';
import Save from '../assets/images/icons/save.svg';
import Search from '../assets/images/icons/search.svg';
import Send from '../assets/images/icons/send.svg';
import SettingsFill from '../assets/images/icons/settings-fill.svg';
import Settings from '../assets/images/icons/settings.svg';
import Share from '../assets/images/icons/share.svg';
import StarBorder from '../assets/images/icons/star-border.svg';
import StarFill from '../assets/images/icons/star-fill.svg';
import Star from '../assets/images/icons/star.svg';
import Topup from '../assets/images/icons/topup.svg';
import Translate from '../assets/images/icons/translate.svg';
import Verified from '../assets/images/icons/verified.svg';
import VisibilityOff from '../assets/images/icons/visibility-off.svg';
import Visibility from '../assets/images/icons/visibility.svg';
import Wait from '../assets/images/icons/wait.svg';
import WarningFill from '../assets/images/icons/warning-fill.svg';
import useStyles from '../assets/styles/pages/icons';

const Icons = () => {
  const styles = useStyles();
  return (
    <ScrollView>
      <View style={styles.content}>
        <View style={styles.item}>
          <Account />
          <Text style={styles.name}>account</Text>
        </View>
        <View style={styles.item}>
          <AddCart />
          <Text style={styles.name}>add-cart</Text>
        </View>
        <View style={styles.item}>
          <Add />
          <Text style={styles.name}>add</Text>
        </View>
        <View style={styles.item}>
          <ArrowBack />
          <Text style={styles.name}>arrow-back</Text>
        </View>
        <View style={styles.item}>
          <ArrowDown />
          <Text style={styles.name}>arrow-down</Text>
        </View>
        <View style={styles.item}>
          <ArrowForward />
          <Text style={styles.name}>arrow-forward</Text>
        </View>
        <View style={styles.item}>
          <ArrowLeft />
          <Text style={styles.name}>arrow-left</Text>
        </View>
        <View style={styles.item}>
          <ArrowRight />
          <Text style={styles.name}>arrow-right</Text>
        </View>
        <View style={styles.item}>
          <ArrowUp />
          <Text style={styles.name}>arrow-up</Text>
        </View>
        <View style={styles.item}>
          <CameraFill />
          <Text style={styles.name}>camera-fill</Text>
        </View>
        <View style={styles.item}>
          <Camera />
          <Text style={styles.name}>camera</Text>
        </View>
        <View style={styles.item}>
          <Card />
          <Text style={styles.name}>card</Text>
        </View>
        <View style={styles.item}>
          <CheckCircle />
          <Text style={styles.name}>check-circle</Text>
        </View>
        <View style={styles.item}>
          <CheckFill />
          <Text style={styles.name}>check-fill</Text>
        </View>
        <View style={styles.item}>
          <CheckOutline />
          <Text style={styles.name}>check-outline</Text>
        </View>
        <View style={styles.item}>
          <CheckboxFill />
          <Text style={styles.name}>checkbox-fill</Text>
        </View>
        <View style={styles.item}>
          <Checkbox />
          <Text style={styles.name}>checkbox</Text>
        </View>
        <View style={styles.item}>
          <Clear />
          <Text style={styles.name}>clear</Text>
        </View>
        <View style={styles.item}>
          <Code />
          <Text style={styles.name}>code</Text>
        </View>
        <View style={styles.item}>
          <Connect />
          <Text style={styles.name}>connect</Text>
        </View>
        <View style={styles.item}>
          <Copy />
          <Text style={styles.name}>copy</Text>
        </View>
        <View style={styles.item}>
          <Countdown />
          <Text style={styles.name}>countdown</Text>
        </View>
        <View style={styles.item}>
          <Coupon />
          <Text style={styles.name}>coupon</Text>
        </View>
        <View style={styles.item}>
          <Currency />
          <Text style={styles.name}>currency</Text>
        </View>
        <View style={styles.item}>
          <DeleteAccount />
          <Text style={styles.name}>delete-account</Text>
        </View>
        <View style={styles.item}>
          <DeleteFill />
          <Text style={styles.name}>delete-fill</Text>
        </View>
        <View style={styles.item}>
          <DeleteForever />
          <Text style={styles.name}>delete-forever</Text>
        </View>
        <View style={styles.item}>
          <Delete />
          <Text style={styles.name}>delete</Text>
        </View>
        <View style={styles.item}>
          <Description />
          <Text style={styles.name}>description</Text>
        </View>
        <View style={styles.item}>
          <Disable />
          <Text style={styles.name}>disable</Text>
        </View>
        <View style={styles.item}>
          <Done />
          <Text style={styles.name}>done</Text>
        </View>
        <View style={styles.item}>
          <Edit />
          <Text style={styles.name}>edit</Text>
        </View>
        <View style={styles.item}>
          <Edit2 />
          <Text style={styles.name}>edit2</Text>
        </View>
        <View style={styles.item}>
          <Email />
          <Text style={styles.name}>email</Text>
        </View>
        <View style={styles.item}>
          <Error />
          <Text style={styles.name}>error</Text>
        </View>
        <View style={styles.item}>
          <FavoriteFill />
          <Text style={styles.name}>favorite-fill</Text>
        </View>
        <View style={styles.item}>
          <Favorite />
          <Text style={styles.name}>favorite</Text>
        </View>
        <View style={styles.item}>
          <FlagFill />
          <Text style={styles.name}>flag-fill</Text>
        </View>
        <View style={styles.item}>
          <Flag />
          <Text style={styles.name}>flag</Text>
        </View>
        <View style={styles.item}>
          <Forbid />
          <Text style={styles.name}>forbid</Text>
        </View>
        <View style={styles.item}>
          <Forbid2 />
          <Text style={styles.name}>forbid2</Text>
        </View>
        <View style={styles.item}>
          <GTranslate />
          <Text style={styles.name}>g-translate</Text>
        </View>
        <View style={styles.item}>
          <Gift />
          <Text style={styles.name}>gift</Text>
        </View>
        <View style={styles.item}>
          <Global />
          <Text style={styles.name}>global</Text>
        </View>
        <View style={styles.item}>
          <HelpFill />
          <Text style={styles.name}>help-fill</Text>
        </View>
        <View style={styles.item}>
          <Help />
          <Text style={styles.name}>help</Text>
        </View>
        <View style={styles.item}>
          <ImageFill />
          <Text style={styles.name}>image-fill</Text>
        </View>
        <View style={styles.item}>
          <Image />
          <Text style={styles.name}>image</Text>
        </View>
        <View style={styles.item}>
          <InfoFill />
          <Text style={styles.name}>info-fill</Text>
        </View>
        <View style={styles.item}>
          <Info />
          <Text style={styles.name}>info</Text>
        </View>
        <View style={styles.item}>
          <Instant />
          <Text style={styles.name}>instant</Text>
        </View>
        <View style={styles.item}>
          <Link />
          <Text style={styles.name}>link</Text>
        </View>
        <View style={styles.item}>
          <List />
          <Text style={styles.name}>list</Text>
        </View>
        <View style={styles.item}>
          <Livechat />
          <Text style={styles.name}>livechat</Text>
        </View>
        <View style={styles.item}>
          <LocalPay />
          <Text style={styles.name}>local-pay</Text>
        </View>
        <View style={styles.item}>
          <Location />
          <Text style={styles.name}>location</Text>
        </View>
        <View style={styles.item}>
          <Logout />
          <Text style={styles.name}>logout</Text>
        </View>
        <View style={styles.item}>
          <MarkEmail />
          <Text style={styles.name}>mark-email</Text>
        </View>
        <View style={styles.item}>
          <Minus />
          <Text style={styles.name}>minus</Text>
        </View>
        <View style={styles.item}>
          <Money />
          <Text style={styles.name}>money</Text>
        </View>
        <View style={styles.item}>
          <MoreH />
          <Text style={styles.name}>more-h</Text>
        </View>
        <View style={styles.item}>
          <MoreV />
          <Text style={styles.name}>more-v</Text>
        </View>
        <View style={styles.item}>
          <OfflineFill />
          <Text style={styles.name}>offline-fill</Text>
        </View>
        <View style={styles.item}>
          <Open />
          <Text style={styles.name}>open</Text>
        </View>
        <View style={styles.item}>
          <OrderList />
          <Text style={styles.name}>order-list</Text>
        </View>
        <View style={styles.item}>
          <PasswordFill />
          <Text style={styles.name}>password-fill</Text>
        </View>
        <View style={styles.item}>
          <Password />
          <Text style={styles.name}>password</Text>
        </View>
        <View style={styles.item}>
          <Phone />
          <Text style={styles.name}>phone</Text>
        </View>
        <View style={styles.item}>
          <Question />
          <Text style={styles.name}>question</Text>
        </View>
        <View style={styles.item}>
          <Read />
          <Text style={styles.name}>read</Text>
        </View>
        <View style={styles.item}>
          <Refresh />
          <Text style={styles.name}>refresh</Text>
        </View>
        <View style={styles.item}>
          <Reply />
          <Text style={styles.name}>reply</Text>
        </View>
        <View style={styles.item}>
          <Save />
          <Text style={styles.name}>save</Text>
        </View>
        <View style={styles.item}>
          <Search />
          <Text style={styles.name}>search</Text>
        </View>
        <View style={styles.item}>
          <Send />
          <Text style={styles.name}>send</Text>
        </View>
        <View style={styles.item}>
          <SettingsFill />
          <Text style={styles.name}>settings-fill</Text>
        </View>
        <View style={styles.item}>
          <Settings />
          <Text style={styles.name}>settings</Text>
        </View>
        <View style={styles.item}>
          <Share />
          <Text style={styles.name}>share</Text>
        </View>
        <View style={styles.item}>
          <StarBorder />
          <Text style={styles.name}>star-border</Text>
        </View>
        <View style={styles.item}>
          <StarFill />
          <Text style={styles.name}>star-fill</Text>
        </View>
        <View style={styles.item}>
          <Star />
          <Text style={styles.name}>star</Text>
        </View>
        <View style={styles.item}>
          <Topup />
          <Text style={styles.name}>topup</Text>
        </View>
        <View style={styles.item}>
          <Translate />
          <Text style={styles.name}>translate</Text>
        </View>
        <View style={styles.item}>
          <Verified />
          <Text style={styles.name}>verified</Text>
        </View>
        <View style={styles.item}>
          <VisibilityOff />
          <Text style={styles.name}>visibility-off</Text>
        </View>
        <View style={styles.item}>
          <Visibility />
          <Text style={styles.name}>visibility</Text>
        </View>
        <View style={styles.item}>
          <Wait />
          <Text style={styles.name}>wait</Text>
        </View>
        <View style={styles.item}>
          <WarningFill />
          <Text style={styles.name}>warning-fill</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Icons;
