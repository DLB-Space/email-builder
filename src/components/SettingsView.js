import LoadHeaderImage from "./tools/cover-settings/LoadHeaderImage";
import { PreheaderSettings } from "./tools/preheader-settings/PreheaderSettings";
import { UtmSettings } from "./tools/utm-settings/utmSettings";

const SettingsView = () => {
  return (
    <div>
      <LoadHeaderImage />
      <PreheaderSettings />
      <UtmSettings />
    </div>
  );
};

export default SettingsView;
