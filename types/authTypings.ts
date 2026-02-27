export interface Tokens {
    access_token: string;
    refresh_token: string;
    token_type: string;
};

export interface User {
    id: string;
    username?: string;
    phone_number?: string;
};

export interface AuthState {
    user: User | null;
    tokens: Tokens | null;
    loading: boolean;
    error: string | null;
    isAuthenticated: boolean; 
};

export interface LoginRequest {
    phone_number?: string;
    username?: string;
    password?: string;
}

export interface VerifyRequest {
    phone_number: string;
    code: string;
}

export interface RefreshRequest {
    refresh_token: string;
}