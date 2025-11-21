import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";


export function FormateDateTime (rawDate : string): string {

const date = new Date(rawDate);
    return (
        format(date, "dd/MM/yyy 'às' HH/'h'mm ", {
            locale: ptBR
        })
    )
}

export function FormateRelativeDate (rawDate : string) : string {
    const date  = new Date (rawDate);

    return (
        formatDistanceToNow(date , {
            locale: ptBR,
            addSuffix: true
        })
      )

}


