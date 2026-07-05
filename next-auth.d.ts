import { UserRole } from "@prisma/client";
import { type DefaultSession } from "next-auth";

export type ExtendedUser= DefaultSession["user"] & {
    role: UserRole
}

declare module 'next-auth'{
    interface Session{
        user: ExtendedUser
    }
}

import type { JWT as DefaultJWT } from 'next-auth/jwt';

declare module 'next-auth/jwt'{
    interface JWT extends DefaultJWT{
        role: UserRole
    }
}
