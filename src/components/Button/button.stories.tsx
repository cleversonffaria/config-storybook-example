import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { Button } from "./button";

const ButtonMeta: ComponentMeta<typeof Button> = {
  title: "Button",
  component: Button,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    text: "Hello world",
  },
};

export default ButtonMeta;

type ButtonStory = ComponentStory<typeof Button>;

export const Basic: ButtonStory = (args) => <Button {...args} />;
