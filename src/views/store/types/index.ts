export interface IStore {
  banner_img: string | null;
  category: string;
  country: string;
  currency: string;
  description: string | null;
  domain: string;
  id: string;
  logo_img: string | null;
  name: string;
  team_description: string | null;
  team_img: string | null;
  telephone: string;
  whatsapp: string;
  tenant_id: string;
  social: IStoreSocial;
}

export interface IStoreSocial {
  id: string;
  store_id: string;
  facebook: string;
  instagram: string;
  tiktok: string;
  pinterest: string;
  twitter: string;
  youtube: string;
}
