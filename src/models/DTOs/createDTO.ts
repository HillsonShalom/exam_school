export interface loginDTO {
    username : string;
    password : string;
}

export interface registerDTO extends loginDTO {
    email    : string;
    classroom: string;
}

export interface specRegisterDTO extends registerDTO {
    role    : 'teacher' | 'admin';
    rolepass: string;
}

