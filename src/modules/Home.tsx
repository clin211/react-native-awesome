import {
  Image,
  LayoutAnimation,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {family} from '../theme';
import AddAccount from '../components/AddAccount';
import {load} from '../utils/storage';
import {ACCOUNT_LIST} from '../utils/constant';
import {
  AccountGroup,
  AccountList,
  AccountType,
  Icons,
  SectionState,
} from '../types/account';

const icons: Icons & {arrow: string} = {
  games: require('../assets/images/icon_game.png'),
  platform: require('../assets/images/icon_platform.png'),
  'bank cards': require('../assets/images/icon_bank.png'),
  others: require('../assets/images/icon_other.png'),
  arrow: require('../assets/images/icon_arrow.png'),
};

const Home = () => {
  const [sectionState, setSectionState] = useState<SectionState>();
  const [list, setList] = useState<AccountList[]>([]);
  const addAccountRef = useRef(null);

  const renderTitle = useMemo(() => {
    return (
      <View style={styles['title-box']}>
        <Text style={styles['title-text']}>Account Manage</Text>
      </View>
    );
  }, []);

  const handleOnPressArrow = (type: AccountType) => {
    const newSectionState = {...sectionState};
    newSectionState[type] = !newSectionState[type];
    LayoutAnimation.easeInEaseOut();
    setSectionState(newSectionState as any);
  };
  const loadData = async () => {
    const result = await load(ACCOUNT_LIST);
    if (result) {
      const lists: Record<string, AccountList[]> = {};
      const accounts = JSON.parse(result) as AccountGroup[];
      for (const account of accounts) {
        if (!lists[account.type]) {
          lists[account.type] = [];
        }
        lists[account.type].push(account as any);
      }

      const content = Object.entries(lists).map(([type, data]) => ({
        type,
        data,
      }));

      setList(content as any);
      const sections = {};
      content.map(item => ((sections as any)[item.type] = true));
      setSectionState(sections as SectionState);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <View style={styles.container}>
      {renderTitle}

      <SectionList
        style={styles.list}
        sections={list}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => `${item.id}~${index}`}
        renderSectionHeader={({section}) => {
          const isHide = !sectionState?.[section.type];
          return (
            <View
              style={[
                styles['item-header'],
                styles['item-box'],
                isHide && styles['last-item'],
              ]}>
              <View style={styles['row-items-center']}>
                <Image
                  style={styles['item-cover']}
                  source={icons[section.type] as any}
                />
                <Text style={styles.title}>{section.type}</Text>
              </View>
              <TouchableOpacity
                style={styles.arrow}
                onPress={() => handleOnPressArrow(section.type)}>
                <Image
                  source={icons.arrow as any}
                  style={[
                    styles['item-cover'],
                    {transform: [{rotate: isHide ? '-90deg' : '0deg'}]},
                  ]}
                />
              </TouchableOpacity>
            </View>
          );
        }}
        renderItem={({section, item, index}) => {
          if (!sectionState?.[section.type]) {
            return null;
          }
          const isLast = index + 1 === section.data.length;
          return (
            <View
              key={index}
              style={[styles['item-row'], isLast && styles['last-item']]}>
              <Text style={styles['item-name']}>{item.name}</Text>
              <View style={styles['item-info']}>
                <Text style={styles['item-text']}>account: {item.account}</Text>
                <Text style={styles['item-text']}>
                  password: {item.password}
                </Text>
              </View>
            </View>
          );
        }}
      />

      <TouchableOpacity
        style={styles.new}
        activeOpacity={0.5}
        onPress={() => {
          // @ts-ignore
          addAccountRef.current.show();
        }}>
        <Text style={styles['new-text']}>new</Text>
      </TouchableOpacity>

      <AddAccount ref={addAccountRef} onSave={loadData} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  'title-box': {
    height: 44,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  'title-text': {
    color: '#333',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'bold',
    fontFamily: family.Bold,
  },
  new: {
    position: 'absolute',
    right: 10,
    bottom: 30,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  'new-text': {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: family.BoldItalic,
    fontWeight: '700',
    color: '#fff',
  },
  list: {
    marginHorizontal: 24,
    marginBottom: 24,
  },
  'item-header': {
    marginTop: 16,
    borderStartStartRadius: 12,
    borderStartEndRadius: 12,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopStartRadius: 12,
    borderTopEndRadius: 12,
  },
  'item-box': {
    width: '100%',
    height: 48,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  'last-item': {
    borderBottomEndRadius: 12,
    borderBottomStartRadius: 12,
  },
  'item-separator': {
    marginHorizontal: 24,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  'row-items-center': {
    flexDirection: 'row',
    alignItems: 'center',
  },
  'item-cover': {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '700',
    color: 'rgba(0,0,0,0.8)',
    textTransform: 'capitalize',
    marginStart: 8,
  },
  arrow: {
    height: '100%',
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginEnd: -16,
  },
  'item-row': {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(0,0,0,0.1)',
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  'item-name': {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.6)',
  },
  'item-info': {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  'item-text': {
    fontSize: 12,
    lineHeight: 12,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.4)',
  },
});
