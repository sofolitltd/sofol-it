export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-02-15'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}

// skog1lF8En5PShOtSLED9AvMkrLSEbdX6sK8Nc5EqATCVJV02QeqdaIGIyAqARWlHT15XeEdUmpnmN03a5paCYMpa7dBt2FBwuOaEWX25chbnPaQ4IlZB3caJuWqAbdoHOZ0P2t7ZtMSnxwONGH57ftHM6xzTCFzjQWLxEPdOk8PumP4Tr2c