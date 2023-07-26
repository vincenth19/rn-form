import { useState } from 'react';
import { SafeAreaView } from 'react-native';

import { STextInput } from '@/components/StyledTextInput';
import { Text } from '@/components/Themed';
import Colors from '@/constants/Colors';

const SimpleForm = () => {
  const [text, onChangeText] = useState('Useless Text');

  return (
    <SafeAreaView>
      <Text>Hello Simple Form</Text>
      <STextInput placeholder="hello" />
    </SafeAreaView>
  );
};

export default SimpleForm;
