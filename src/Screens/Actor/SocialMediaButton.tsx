import * as React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface SocialMediaButtonProps {
  icon: string;
  externalLink: string;
}

const SocialMediaButton = ({icon, externalLink}: SocialMediaButtonProps) => {
  const onPress = () => Linking.canOpenURL(externalLink).then(() => {
    Linking.openURL(externalLink);
});
  return (
    <TouchableOpacity {...{onPress}} style={{marginRight: 16}}>
      <FontAwesome name={icon} size={24} color="black" />
    </TouchableOpacity>
  );
};

export default SocialMediaButton;
