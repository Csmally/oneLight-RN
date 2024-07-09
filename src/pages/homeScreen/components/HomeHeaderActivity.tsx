import { useContext } from "react";
import { HomeScreenContext } from "../utils/context";
import { View } from "react-native";

type HomeHeaderActivityProps = {
    isAll: boolean
}

function HomeHeaderActivity({ isAll }: HomeHeaderActivityProps) {
    const { initTopbarHeight } = useContext(HomeScreenContext);
    return (
        <View style={{ height: isAll ? initTopbarHeight : initTopbarHeight - 90 }} />
    );
}

export default HomeHeaderActivity;