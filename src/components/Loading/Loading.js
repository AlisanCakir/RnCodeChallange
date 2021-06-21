import React from 'react';
import {Modal, View} from 'react-native';
import {SkypeIndicator} from 'react-native-indicators';
import {color} from '../../theme'

export const Loading = ({visible, backgroundColor, indicatorColor = color.orange}) => {

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={visible}
      supportedOrientations={['portrait']}
      onRequestClose={() => {}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: backgroundColor,
        }}>
        <View
          style={{
            width: 70,
            height: 70,
            backgroundColor: color.white,
            borderRadius: 70,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <SkypeIndicator color={indicatorColor} />
        </View>
      </View>
    </Modal>
  );
};
