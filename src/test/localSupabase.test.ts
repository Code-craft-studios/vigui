import createFetchMock from 'vitest-fetch-mock';

import { describe, test, expect, vi, afterEach } from 'vitest';

import { LocalSupabase } from '@/lib/services/supabase';
import { createClient } from '@supabase/supabase-js';

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

const SUPABASE_URL = 'https://pablito.com';
const SUPABASE_KEY = 'frr43fr2rfvfv24rf24rgg324rf42';
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);
const supabaseLocalClient = new LocalSupabase(supabaseClient);

afterEach(() => {
  fetchMocker.mockClear();
});

describe('supabase service', () => {
  test('test petition', async () => {
    const response = [
      {
        id: 123,
        title: 'adasdsad',
      },
    ];

    fetchMocker.mockResponse(JSON.stringify(response));

    // TODO: refactor test
    const responseSupa = await supabaseLocalClient.fetchContactInfo();

    const [request] = fetchMock.requests();

    expect(request.url).toContain(SUPABASE_URL);
    expect(request.headers.get('apiKey')).toBe(SUPABASE_KEY);
    expect(responseSupa).toStrictEqual(response);
  });
});
