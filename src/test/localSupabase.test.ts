import createFetchMock, { FetchMock } from 'vitest-fetch-mock';

import { describe, test, expect, vi } from 'vitest'

import { LocalSupabase } from '@/lib/services/supabase'
import { createClient } from '@supabase/supabase-js'


const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

const SUPABASE_URL = 'https://pablito.com'
const SUPBASE_KEY = 'frr43fr2rfvfv24rf24rgg324rf42'
const supabaseClient = createClient(SUPABASE_URL, SUPBASE_KEY)
const supabaseLocalClient = new LocalSupabase(supabaseClient);


describe('supabase service', ()=>{
  test('test petition', async ()=>{
    const response  = [{
      id: 123,
      title: 'adasdsad'
    }];

    const fetchMock = (fetch as FetchMock)
      .mockResponse(JSON.stringify(response))

    const responseSupa = await supabaseLocalClient.fetchTestData();
    
    const [request] = fetchMock.requests()

    expect(request.url).toContain(SUPABASE_URL)
    expect(request.headers.get('apiKey')).toBe(SUPBASE_KEY)
    expect(responseSupa).toStrictEqual(response);
  })
})
