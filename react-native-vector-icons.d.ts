interface IconProps {
    name: string,
    size?: number,
    color?: string,
    solid?: boolean,
    style?: any,
    ref?: any,
    onPress?: () => void
}
declare module 'react-native-vector-icons/FontAwesome5' {
    const Icon: React.FC<IconProps>;
    export default Icon;
}
declare module 'react-native-vector-icons/Ionicons' {
    const Icon: React.FC<IconProps>;
    export default Icon;
}
declare module 'react-native-vector-icons/MaterialCommunityIcons' {
    const Icon: React.FC<IconProps>;
    export default Icon;
}
declare module 'react-native-vector-icons/AntDesign' {
    const Icon: React.FC<IconProps>;
    export default Icon;
}