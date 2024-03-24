import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://txkhjyabohynwejxahrl.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4a2hqeWFib2h5bndlanhhaHJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEyNDE1NTcsImV4cCI6MjAyNjgxNzU1N30.nMWlGER04EpbQGOOZiGtkJ6mAPWgEyOtTOa_mOJxAjk"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})