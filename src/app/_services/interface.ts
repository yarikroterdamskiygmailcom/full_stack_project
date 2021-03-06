


export interface Profile {
    id:            number;
    user_id:       number;
    nickname:      string;
    name:          string;
    surname:       string;
    last_name:     string;
    country:       string;
    city:          string;
    marital_status:string;
    number:        string;
    photo:         string;
    age:           number;
    gender:        number;
    email:         string;
    confirm_email: number;
    created_at:    string;
    updated_at:    string;
}
export interface User {
    nickname:      string;
    email:         string;
    password:      string;
}
export interface AuthLogin {
    token?:  string;
    user_id: number;
}

export interface SocializeRegister {
    token?:  string;
    profile: Profile;
}

