import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Container } from "./styles";

export function Groups() {
  return (
    <Container>
      <Header showBackButton />
      <Highlight title="Turmas " subtitle="Jogue com sua turma" />
    </Container>
  );
}
