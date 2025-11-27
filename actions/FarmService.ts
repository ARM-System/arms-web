'use server';

import { getSession } from "@/lib/session";
import axios from "axios";

export const getFarmData = async (userID: string) => {
    try{
        const token =  await getSession;
        if(!token){
            throw new Error('User not authenticated');
        }
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/${userID}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    }catch (error){
        console.log(error);
    }   
    
} 