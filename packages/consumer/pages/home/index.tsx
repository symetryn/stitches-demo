import React from "react";
import { StitchButton } from "@project/shared";
import { Button } from "antd";
import { styled } from "../../stitches.config";

const Form = styled("form", {
  backgroundColor: "#eee",
  borderRadius: "4px",
  width: "30rem",
  height: "30rem",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  variants: {
    radius: {
      small: {
        borderRadius: "4px",
      },
      medium: {
        borderRadius: "20%",
      },
      large: {
        borderRadius: "100%",
      },
    },
  },
});

const Home = () => {
  return (
    <Form radius="medium">
      <StitchButton
        type="dashed"
        customType="primary"
        onClick={() => {
          // eslint-disable-next-line no-console
          console.log("yay");
        }}
      >
        Test
      </StitchButton>
      <StitchButton customType="primary" type="primary">
        Test
      </StitchButton>
      <Button type="primary" htmlType="submit">
        Test
      </Button>
    </Form>
  );
};

export default Home;
