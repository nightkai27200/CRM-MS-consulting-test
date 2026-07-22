import type { ReactNode } from "react";
import type { UserRole } from "../types/roles";

export interface MenuItem {

    title: string;

    path: string;

    icon: ReactNode;

    roles: UserRole[];

}