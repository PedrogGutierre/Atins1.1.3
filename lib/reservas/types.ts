// Tipos compartilhados para o fluxo de reservas do CasaMarua.

export type ReservaStatus = "pendente" | "confirmada" | "cancelada"

// Dados que o formulário do site envia.
export interface ReservaInput {
  nome: string
  telefone: string
  email?: string
  pessoas: number
  dataInicio: string // YYYY-MM-DD
  dataFim: string // YYYY-MM-DD
  mensagem?: string
}

// Registro completo como salvo no Supabase (snake_case da tabela).
export interface ReservaRow {
  id: string
  nome: string
  telefone: string
  email: string | null
  pessoas: number
  data_inicio: string
  data_fim: string
  mensagem: string | null
  status: ReservaStatus
  google_sheet_synced: boolean
  google_calendar_event_id: string | null
  google_email_sent: boolean
  created_at: string
}
