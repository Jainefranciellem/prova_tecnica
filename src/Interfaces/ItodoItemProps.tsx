import Itodo from "./Itodo";

// interface para definir os tipos de propriedades que o componente TodoItem pode receber
export default interface TodoItemProps {
  todo: Itodo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}
