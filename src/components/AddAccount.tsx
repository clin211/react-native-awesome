import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useState,
} from 'react';
import Close from './Close';
import {family} from '../theme';

const AddAccount: ForwardRefRenderFunction<{}, any> = (props, ref) => {
  const [visible, setVisible] = useState(false);
  const [tab, setTab] = useState(0);
  const [name, setName] = useState('');
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  useImperativeHandle(ref, () => {
    return {
      show,
      hide,
    };
  });

  const renderTitle = () => {
    const styles = StyleSheet.create({
      layout: {
        width: '100%',
        height: 40,
        position: 'relative',
        justifyContent: 'center',
      },
      title: {
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '600',
        fontFamily: family.SemiBold,
        textTransform: 'capitalize',
      },
      close: {
        position: 'absolute',
        top: 8,
        right: 8,
      },
    });
    return (
      <View style={styles.layout}>
        <Text style={styles.title}>add account</Text>
        <View style={styles.close}>
          <Close size={20} color="#333" onPress={hide} />
        </View>
      </View>
    );
  };

  const renderType = () => {
    const styles = StyleSheet.create({
      layout: {
        width: '100%',
        height: 32,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
      },
      tab: {
        flex: 1,
        height: '100%',
        borderWidth: 1,
        borderColor: '#c0c0c0',
        justifyContent: 'center',
        alignItems: 'center',
      },
      left: {
        borderTopStartRadius: 8,
        borderBottomStartRadius: 8,
      },
      right: {
        borderTopEndRadius: 8,
        borderBottomEndRadius: 8,
      },
      text: {
        fontSize: 12,
        lineHeight: 12,
        fontFamily: family.Regular,
        color: '#000',
      },
      'active-bgc': {
        backgroundColor: '#3050ff',
        borderWidth: 0,
      },
      'active-color': {
        color: 'white',
      },
    });

    const types = ['games', 'platform', 'bank cards', 'others'];
    return (
      <View style={styles.layout}>
        {types.map((item, index) => {
          const isFirst = index === 0;
          const isLast = index + 1 === types.length;
          const active = index === tab;
          return (
            <TouchableOpacity
              key={`${item}~${index}`}
              style={[
                styles.tab,
                isFirst && styles.left,
                isLast && styles.right,
                active && styles['active-bgc'],
              ]}
              onPress={() => setTab(index)}>
              <Text style={[styles.text, active && styles['active-color']]}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const renderName = () => {
    const styles = StyleSheet.create({
      input: {
        width: '100%',
        height: 40,
        backgroundColor: '#f0f0f0',
        marginTop: 8,
        borderRadius: 20,
        paddingHorizontal: 16,
        fontSize: 12,
        fontFamily: family.SemiBold,
        color: '#333',
      },
    });
    return (
      <TextInput
        value={name}
        maxLength={20}
        style={styles.input}
        onChangeText={setName}
      />
    );
  };
  const renderAccount = () => {
    const styles = StyleSheet.create({
      input: {
        width: '100%',
        height: 40,
        backgroundColor: '#f0f0f0',
        marginTop: 8,
        borderRadius: 20,
        paddingHorizontal: 16,
        fontSize: 12,
        fontFamily: family.SemiBold,
        color: '#333',
      },
    });
    return (
      <TextInput
        value={account}
        maxLength={20}
        style={styles.input}
        onChangeText={setAccount}
      />
    );
  };
  const renderPassword = () => {
    const styles = StyleSheet.create({
      input: {
        width: '100%',
        height: 40,
        backgroundColor: '#f0f0f0',
        marginTop: 8,
        borderRadius: 20,
        paddingHorizontal: 16,
        fontSize: 12,
        fontFamily: family.SemiBold,
        color: '#333',
      },
    });
    return (
      <TextInput
        value={password}
        maxLength={20}
        style={styles.input}
        onChangeText={setPassword}
      />
    );
  };
  const renderButton = () => {
    const styles = StyleSheet.create({
      content: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      saveBox: {
        width: '100%',
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3050ff',
        marginTop: 16,
      },
      'save-text': {
        fontSize: 12,
        lineHeight: 16,
        fontFamily: family.Bold,
        color: 'white',
        textTransform: 'uppercase',
      },
    });
    return (
      <View style={styles.content}>
        <TouchableOpacity style={styles.saveBox}>
          <Text style={styles['save-text']}>save</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Modal
      visible={visible}
      onRequestClose={hide}
      transparent
      statusBarTranslucent
      animationType="fade">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.root}>
        <View style={styles.content}>
          {renderTitle()}
          <Text style={styles['sub-title']}>account type</Text>
          {renderType()}
          <Text style={styles['sub-title']}>account name</Text>
          {renderName()}
          <Text style={styles['sub-title']}>account account</Text>
          {renderAccount()}
          <Text style={styles['sub-title']}>account password</Text>
          {renderPassword()}
          {renderButton()}
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default forwardRef(AddAccount);

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#00000060',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: '80%',
    padding: 16,
    borderRadius: 16,
    backgroundColor: 'white',
  },
  'sub-title': {
    marginTop: 8,
    fontSize: 12,
    lineHeight: 16,
    fontFamily: family.SemiBold,
    color: '#666',
    textTransform: 'capitalize',
  },
});
