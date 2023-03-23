import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { Input } from "./input.component";

const InputMeta: ComponentMeta<typeof Input> = {
  title: "Input",
  component: Input,
};

export default InputMeta;

type MyInputStory = ComponentStory<typeof Input>;

export const Basic: MyInputStory = () => <Input />;
