export function createFetchResponse(data: unknown) {
  return { 
    text: ()=> Promise.resolve(JSON.stringify(data)),
    json: () => Promise.resolve(data),
    ok: true,
    headers: {
      get:()=>undefined
    }
  }
}
