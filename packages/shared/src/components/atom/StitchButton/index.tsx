import { Button as AntButton } from "antd";
import { StitchesVariants, styled } from "@stitches/react";
import { ButtonType } from "antd/lib/button";

export const ButtonContent = styled(AntButton, {
  variants: {
    customType: {
      primary: {
        color: "white",
        backgroundColor: "#333",
        padding: "0.4rem 0.6rem",
      },
      secondary: {
        color: "black",
        backgroundColor: "#eee",
        padding: "0.4rem 0.6rem",
      },
    },
  },
});
export const ButtonWrapper = styled("div", {
  variants: {
    formType: {
      rounded: {
        borderRadius: "4px",
      },
      dotted: {
        border: "1px dotted #eee",
      },
    },
  },
});

type Props = StitchesVariants<typeof ButtonContent & typeof ButtonWrapper> & {
  type?: ButtonType;
  onClick?: React.MouseEventHandler<HTMLElement>;
};

export const Button: React.FC<Props> = (props) => {
  return (
    <ButtonWrapper formType={props.formType}>
      <ButtonContent
        type={props.type}
        customType={props.customType}
        onClick={props.onClick}
      >
        {props.children}
      </ButtonContent>
    </ButtonWrapper>
  );
};
