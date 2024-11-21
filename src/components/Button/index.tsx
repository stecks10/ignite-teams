import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  type?: "PRIMARY" | "SECONDARY";
};

export function Button({ title, type = "PRIMARY", ...rest }: ButtonProps) {
  return (
    <Container {...rest} key={type} type={type}>
      <Title>{title}</Title>
    </Container>
  );
}
