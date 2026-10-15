import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

/**
 * Cliente Supabase para uso no servidor (Server Components, Route Handlers,
 * Server Actions). Não armazene em variável global — crie um por requisição.
 */
export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
        } catch {
          // Chamado de um Server Component — pode ser ignorado.
        }
      },
    },
  })
}

/**
 * Cliente Supabase com a service_role key — ignora RLS.
 * Use APENAS no servidor (route handlers / server actions) para operações
 * administrativas, como ler/sincronizar reservas com o Google Workspace.
 * Requer a env var SUPABASE_SERVICE_ROLE_KEY.
 */
export function createServiceRoleClient() {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!serviceKey) {
    throw new Error("SUPABASE_SERVICE_ROLE_KEY não está configurada no projeto.")
  }

  return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, serviceKey, {
    cookies: {
      getAll() {
        return []
      },
      setAll() {
        // Sem cookies para o cliente service-role.
      },
    },
  })
}
