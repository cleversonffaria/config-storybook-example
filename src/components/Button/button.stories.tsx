import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { Button } from "./button";

const MyButtonMeta: ComponentMeta<typeof Button> = {
  title: "MyButton",
  component: Button,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    text: "Hello world",
  },
};

export default MyButtonMeta;

type MyButtonStory = ComponentStory<typeof Button>;

export const Basic: MyButtonStory = (args) => <Button {...args} />;
