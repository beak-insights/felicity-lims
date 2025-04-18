import { ENCRYPT_AUTH_KEY, STORAGE_AUTH_KEY } from '@/conf';
import { IUser } from '@/models/auth';
import { decrypter, decrypter2, encrypter } from '@/utils/helpers';

const authToStorage = async (data: any) => {
    const crypted = await encrypter(data, ENCRYPT_AUTH_KEY);
    localStorage.setItem(STORAGE_AUTH_KEY, crypted);
};

const authFromStorage = async (): Promise<{
    token?: string;
    tokenType?: string;
    user?: IUser;
}> => {
    return await decrypter(localStorage.getItem(STORAGE_AUTH_KEY), ENCRYPT_AUTH_KEY);
};

const authFromStorage2 = (): {
    token?: string;
    tokenType?: string;
    user?: IUser;
} => {
    return decrypter2(localStorage.getItem(STORAGE_AUTH_KEY), ENCRYPT_AUTH_KEY);
};

const authLogout = () => {
    localStorage.removeItem(STORAGE_AUTH_KEY);
};

const getAuthData = () => {
    let data: any = {};
    if (localStorage.getItem(STORAGE_AUTH_KEY)) {
        const auth = JSON.parse(localStorage.getItem(STORAGE_AUTH_KEY)!);
        data = { auth };
    }
    return data;
};

export { authToStorage, authFromStorage, authFromStorage2, authLogout, getAuthData };
