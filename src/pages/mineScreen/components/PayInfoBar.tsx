import { commonStyles } from "@/common/styles";
import { StyleSheet, View, Text } from "react-native";

function PayInfoBar() {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.num}>119</Text>
                <Text style={styles.desc}>积分</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.num}>10</Text>
                <Text style={styles.desc}>优惠券</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.num}>298</Text>
                <Text style={styles.desc}>余额</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: commonStyles.pageBorderGap
    },
    item: {
        flex: 1,
        alignItems: 'center',
    },
    num: {
        fontSize: 21,
        fontWeight: '900',
        marginBottom: 5
    },
    desc: {
        color: commonStyles.black_333
    }
});

export default PayInfoBar;