import './global.css';

import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { enableDiagnostics } from 'uniwind/diagnostics';

if (__DEV__) {
  enableDiagnostics({ reportUpdates: true });
}

export default function App() {
  const [controlMode, setControlMode] = useState(false);

  return (
    <View className="flex-1 bg-surface px-6 pt-safe pb-safe">
      <View className="gap-4 py-8">
        <Text accessibilityRole="header" className="text-2xl text-foreground">
          Uniwind TextInput theme repro
        </Text>
        <Text className="text-base text-foreground">
          1. Leave this input mounted. Typing is optional.{ '\n' }
          2. Open Android Quick Settings and toggle Dark theme.{ '\n' }
          3. Return to the app without reloading it.
        </Text>
        <Text className="text-base text-foreground">
          {controlMode
            ? "Control: inline fontWeight: '400' (string)."
            : 'Repro: font-normal (numeric weight from Tailwind).'}
        </Text>
        <TextInput
          key={controlMode ? 'control' : 'repro'}
          accessibilityLabel="Theme change test input"
          className={controlMode
            ? 'rounded border border-foreground px-3 py-2 text-base text-foreground'
            : 'rounded border border-foreground px-3 py-2 text-base font-normal text-foreground'}
          style={controlMode ? { fontWeight: '400' } : undefined}
          defaultValue="Toggle the Android system theme"
          autoCorrect={false}
        />
        <Button
          title={controlMode ? 'Switch to font-normal repro' : 'Switch to string-weight control'}
          onPress={() => setControlMode((current) => !current)}
        />
        <Text className="text-base text-foreground">
          Switching modes intentionally remounts the input. Theme changes do not
          change its key or subscribe this component to the theme.
        </Text>
      </View>
    </View>
  );
}
