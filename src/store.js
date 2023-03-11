import { configureStore } from '@reduxjs/toolkit';
import headerImage from './components/tools/cover-settings/headerImageSlice';
import preheaderSettings from './components/tools/preheader-settings/preheaderSlice';
import utmSettings from './components/tools/utm-settings/utmSlice';

export const store = configureStore({
  reducer: {
    headerImage,
    preheaderSettings,
    utmSettings,
  },
})