'use server';

import { getSession } from "@/lib/session";
import axios from "axios";

export const getUser = async () => {
    // /user/signedIn
    const token = await getSession();
    console.log(token);

    if(!token){
        throw new Error('User not authenticated');
    }

    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/signedIn`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    console.log(res.data);
    return res.data;
}