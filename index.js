class Noticia{
    constructor(titulo, data_da_publicacao, resumo,texto ){
    this.titulo = titulo
    this.data_da_publicacao = data_da_publicacao
    this.resumo = resumo
    this.texto = texto
}
mostrarNoticia(){
    return this.titulo +"\n"+ this.data_da_publicacao +"\n"+ this.resumo +"\n"+ this.texto
 }
}
let noticia = new Noticia("Garoto Morre",
"23/03/1960",
"Prefeito ''mais louco do Brasil - barracão véio assombrado'' também irá responder denúncia de possível assédio moral ocorrido nas dependências da unidade de saúde",
"O Ministério Público Estadual (MPE), por meio da 2ª Promotoria de Justiça de Ivinhema, tornou pública a instauração do Inquérito Civil n. 06.2022.00000264- 7, para apurar a falta ou insuficiência de medicamentos para a realização de cirurgias e internações no âmbito do Hospital Municipal de Ivinhema",                        
"O procedimento é assinado pelo promotor Allan Thiago Barbosa Arakaki e tem o MPE como parte requerente, onde, na mesma publicação em diário oficial, foi tornada pública a instauração do Inquérito Civil n. 06.2022.00000276- 9, que visa apurar “denúncia de possível assédio moral, ocorrido em 17/03/2022”, nas dependências do mesmo hospital."
)

console.log(noticia.mostrarNoticia())

