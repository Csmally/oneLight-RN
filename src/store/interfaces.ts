type HomeQuickSearchBarItem = {
  title: string;
  img: string;
  keyWord: string;
  id: string;
};
interface AppGlobalConfigsType {
  launchScreenImgs: string[];
  homeQuickSearchBar: HomeQuickSearchBarItem[];
}

export type { AppGlobalConfigsType };
