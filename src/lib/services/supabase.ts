import { SupabaseClient } from "@supabase/supabase-js";

export class LocalSupabase{
  constructor(private client: SupabaseClient){}

  // TODO: erease example
  async fetchTestData(){
    const { data } = await this
      .client
      .from('test_data')
      .select('*')
      .throwOnError();

    return data;
  }
}

