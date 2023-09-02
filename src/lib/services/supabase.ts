import { SupabaseClient } from '@supabase/supabase-js';

export class LocalSupabase {
  constructor(private client: SupabaseClient) {}
  async fetchContactInfo() {
    const { data } = await this.client
      .from('contact_info')
      .select('*')
      .throwOnError();

    return data;
  }
  async fetchHorary() {
    const { data } = await this.client
      .from('horary')
      .select('*')
      .throwOnError();

    return data;
  }

  async fetchMembers() {
    const { data } = await this.client.from('staff').select('*').throwOnError();

    return data;
  }

  async fetchTestimonial() {
    const { data } = await this.client
      .from('testimonial')
      .select('*')
      .throwOnError();

    return data;
  }
}
