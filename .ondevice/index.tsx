import { configure, getStorybookUI } from "@storybook/react-native";
import "./doctools";
import "./storybook.requires";

// enables knobs for all stories
// addDecorator(withKnobs);

// import stories
// configure(() => {
//   require("../src/components/Button/button.stories.tsx");
// }, module);

const StorybookUIRoot = getStorybookUI({
  // initialSelection: { kind: 'TextInput', name: 'Basic' },
  shouldPersistSelection: true,
  // isUIHidden: true,
  // isSplitPanelVisible: true,

  // onDeviceUI: false,
  enableWebsockets: true,
  // theme: {
  //   storyList: {
  //     search: {
  //       borderColor: 'red',
  //       borderWidth: 3,
  //     },
  //   },
  //   tabs: {
  //     activeBackgroundColor: 'yellow',
  //   },
  // },
});

export default StorybookUIRoot;
