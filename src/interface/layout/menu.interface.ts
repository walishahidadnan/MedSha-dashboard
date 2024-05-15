interface MenuItem {
  code: string;
  label: {
    zh_CN: string;
    en_US: string;
  };
  icon?: string;
  path: string;
  children?: MenuItem[];
}

export type MenuChild = Omit<MenuItem, 'children'>;

export type MenuList = MenuItem[];
