import React from 'react';
import {TouchableOpacity} from "react-native-gesture-handler";
import RoundedIcon, {RoundedIconProps} from "./RoundedIcon";


interface RoundedIconButtonProps extends RoundedIconProps {
  onPress: () => void;
}

const RoundedIconButton = ({onPress, ...props}: RoundedIconButtonProps) => {
  return (
    <TouchableOpacity {...{onPress}} style={{borderRadius: props.size / 2, width: props.size, height: props.size}}>
      <RoundedIcon {...props} marginBottom={"m"}/>
    </TouchableOpacity>
  );
};

export default RoundedIconButton;