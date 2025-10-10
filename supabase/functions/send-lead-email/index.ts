import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface LeadFormData {
  projectType: string;
  stage: string;
  goal: string;
  budget: string;
  timeline: string;
  assets: string[];
  description: string;
  name: string;
  email: string;
  phone: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: LeadFormData = await req.json();
    
    console.log("Received lead form submission:", { name: formData.name, email: formData.email });

    // Create formatted email content
    const emailHtml = `
      <h2>New Project Lead Submission</h2>
      <h3>Project Details:</h3>
      <ul>
        <li><strong>Type:</strong> ${formData.projectType}</li>
        <li><strong>Stage:</strong> ${formData.stage}</li>
        <li><strong>Goal:</strong> ${formData.goal}</li>
        <li><strong>Budget:</strong> ${formData.budget}</li>
        <li><strong>Timeline:</strong> ${formData.timeline}</li>
        <li><strong>Existing Assets:</strong> ${formData.assets.length > 0 ? formData.assets.join(", ") : "None"}</li>
      </ul>
      <h3>Description:</h3>
      <p>${formData.description}</p>
      <h3>Contact Information:</h3>
      <ul>
        <li><strong>Name:</strong> ${formData.name}</li>
        <li><strong>Email:</strong> ${formData.email}</li>
        <li><strong>Phone:</strong> ${formData.phone}</li>
      </ul>
    `;

    const emailResponse = await resend.emails.send({
      from: "TshidiTech <onboarding@resend.dev>",
      to: ["admin@tshiditech.co.za"],
      replyTo: formData.email,
      subject: `New Project Lead: ${formData.projectType} - ${formData.name}`,
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-lead-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
