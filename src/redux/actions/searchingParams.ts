import { URLPayload } from '../../types/url'

export const searchParams = (value: URLPayload) => {
      return {
            type: "SEARCH_PARAMS",
            payload: value
      }
}