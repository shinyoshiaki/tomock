export interface PlatformApp {
  platform: string;
  id: string;
  country?: string;
  language?: string;
  icon_url: string;
  name: string;
  developer_name: string;
  categories?: Array<PlatformAppCategory>;
  other_apps?: Array<PlatformAppOtherApp>;
  store_apps?: Array<PlatformAppStoreApp>;
}

export interface PlatformAppCategory {
  id: string;
  name: string;
}

export interface PlatformAppOtherApp {
  id: string;
  platform: string;
  store: string;
}

export interface PlatformAppStoreApp {
  id: string;
  store: string;
}
