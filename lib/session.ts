'use server';
import { cookies } from "next/headers"

const encrypt = (value: string) => Buffer.from(value).toString('base64');
const decrypt = (value: string) => Buffer.from(value, 'base64').toString('utf-8');

export const setSession = async (token: string) => {
    console.log(token);
    const encryptedToken = encrypt(token);
    (await cookies()).set("session", encryptedToken, {
        httpOnly: true,
        path: '/',
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 1, // 1 day
    })
}

export const getSession = async (): Promise<string | null> => {
    const cookieStore = await cookies()
    const session = cookieStore.get("session")?.value
    if (!session) return null
    return decrypt(session)
}

export const destroySession = async () => {
    (await cookies()).delete("session")
}