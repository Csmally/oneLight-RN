type Route = {
  path: string;
  component: React.FC<any>;
  title: string;
  headerShown?: boolean;
  headerTransparent?: boolean;
  headerStyle?: {
    backgroundColor: string;
  };
  presentation?:
    | 'card'
    | 'modal'
    | 'transparentModal'
    | 'containedModal'
    | 'containedTransparentModal'
    | 'fullScreenModal'
    | 'formSheet'
    | undefined;
  animation?:
    | 'default'
    | 'fade'
    | 'fade_from_bottom'
    | 'flip'
    | 'simple_push'
    | 'slide_from_bottom'
    | 'slide_from_right'
    | 'slide_from_left'
    | 'none';
};

// 信息 常见：首页一条发布信息
type NewsItem = {
  id: string;
  publisherName: string;
  avatar: string;
  imgs?: string[];
  description: string;
  publishTime: number | string;
  tags?: number[];
};

interface ResponseType {
  success: boolean;
  code: number;
  data: any;
  message: string;
}

type ToastType = {
  show: (message: string) => void;
};
declare var Toast: ToastType;
