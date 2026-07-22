import type { UserRole } from "./roles";

export interface User {

    id: number;

    firstname: string;

    lastname: string;

    email: string;

    role: UserRole;

}

export interface LoginRequest {

    email: string;

    password: string;

}

export interface LoginResponse {

    accessToken: string;

    refreshToken: string;

    user: User;

}