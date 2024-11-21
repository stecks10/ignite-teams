import { ButtonIcon } from "@components/ButtonIcon";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Container, Form } from "./styles";

export function Players() {
  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Nome da turma"
        subtitle="Adicione a galera e se divirta"
      />

      <Form>
        <Input placeholder="Nome do Participante" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>
    </Container>
  );
}
