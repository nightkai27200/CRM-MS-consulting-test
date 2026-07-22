import type { LoginRequest, LoginResponse } from "../types/auth";

export const authService = {

    async login(data: LoginRequest): Promise<LoginResponse> {

        return {

            accessToken: "jwt-demo",

            refreshToken: "refresh-demo",

            user: {

                id: 1,

                firstname: "Mikael",

                lastname: "Sanchez",

                email: data.email,

                role: "ADMIN"

            }

        };

    }

};