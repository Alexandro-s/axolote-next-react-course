import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export function FormateRelativeDate(rawDate: string): string {
  const date = new Date(rawDate);

  const formatted = format(date, "dd MMMM", { locale: ptBR });
  const [dia, mes] = formatted.split(" ");

  return `${dia} ${mes.slice(0, 3)}`;
}
