import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'cap',
  webDir: 'www/browser',
  plugins: {
    Keyboard: {
      resize: "none",
    },
  },
};

export default config;
