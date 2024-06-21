export interface IMenuOptions {
  name: string;
  href: string;
  enabled?: boolean;
}

export interface ISocialNetworkOptions extends IMenuOptions {
  icon: string;
}
