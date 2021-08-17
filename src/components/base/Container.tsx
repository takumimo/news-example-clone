import React from "react";
import { View, StyleSheet } from "react-native";

interface ContainerProps {
    children: any;
}

export default Container = ({ children }: ContainerProps) => {
    return <View style={styles.layout}>{children}</View>
}

const styles = StyleSheet.create({
    layout: {
        flex:  1
    }
})