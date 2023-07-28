import { describe, test, expect, vi, type MockedFunction } from 'vitest'
import { createFetchResponse } from './utils/fetch'
import { LocalSupabase } from '@/lib/services/supabase'
import { createClient } from '@supabase/supabase-js'

const globalFetch = vi.fn()

global.fetch = globalFetch

const supabaseClient = createClient('https://pablito.com', 'frr43fr2rfvfv24rf24rgg324rf42')
const supbaseLocalClient = new LocalSupabase(supabaseClient);


describe('supabase service', ()=>{
  test('test petition', async ()=>{
    const response  = [{
      id: 123,
      title: 'adasdsad'
    }];

    (fetch as typeof globalFetch)
      .mockResolvedValue(createFetchResponse(response))

    const responseSupa = await supbaseLocalClient.fetchTestData();

    expect(responseSupa).toStrictEqual(response);
  })
})
