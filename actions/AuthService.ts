'use server';

import axios from "axios";
import { setSession, destroySession } from "@/lib/session";
import { redirect } from "next/navigation";

export const login = async(formData: FormData) => {
    try{
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
            formData
        );
        // Store user data (e.g., token) in a secure HTTP‑only cookie for the session
        // const result = NextResponse.json(response.data);
        // Assuming the API returns a token field; adjust as needed
       await setSession(response.data.data.token);
    }catch (error){
        console.log(error);
        throw new Error('Failed to create account.');
    }
}

export const register = async(formData: FormData) => {
    try{
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
            formData
        );
       await setSession(response.data.data.token);
        return { success: true, data: response.data };
    }catch (error: any){
        return {
            success: false,
            errors: parseValidationErrors(error.response.data.errors)
        }
    }
}

export const logout = async () => {
    await destroySession();
    redirect('/login');
}

const parseValidationErrors = (errors: any) => {
  if (!errors) return [];

  if (typeof errors === "string") {
    return errors
      .split(";")
      .map(msg => msg.trim())
      .filter(Boolean);
  }

  if (typeof errors === "object") {
    return Object.values(errors).flat();
  }

  return [];
};
