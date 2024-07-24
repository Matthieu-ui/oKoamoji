// src/pages/api/donger/[id].ts
import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const GET: APIRoute = async ({ params }) => {
  try {
    const { data, error } = await supabase
      .from("Dongers")
      .select("flavor")
      .eq("id", params.id);

    if (error) {
      throw error;
    }

    if (!data || data.length === 0) {
      return new Response(null, { status: 404 });
    }

    return new Response(JSON.stringify(data[0]), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching data from Supabase:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
