const TOKEN_KEY = "access_token";
const REFRESH_KEY = "refresh_token";

export const tokenService = {

    getToken() {
        return localStorage.getItem(TOKEN_KEY);
    },

    getRefreshToken() {
        return localStorage.getItem(REFRESH_KEY);
    },

    setTokens(access: string, refresh: string) {

        localStorage.setItem(TOKEN_KEY, access);

        localStorage.setItem(REFRESH_KEY, refresh);

    },

    clear() {

        localStorage.removeItem(TOKEN_KEY);

        localStorage.removeItem(REFRESH_KEY);

    }

};