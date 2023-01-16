import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

/**
 * 
    style={[
        styles.container,
        {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: 'column',
        },
    ]}
 */


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    rowView: {
        flexDirection: 'row',
        rowGap: 5,
        columnGap: 5
    }
})
    
const RelayComponent = () => {
    return (
        <View  style={[
            { 
                flexDirection: 'column',
                rowGap: 5,
                columnGap: 5
            }
        ]}>
            <View style={styles.rowView}>
                <View><Text>##Row 00 - Col00##</Text></View>
                <View><Text>##Row 00 - Col01##</Text></View>
                <View><Text>##Row 00 - Col02##</Text></View>
            </View>

            <View style={styles.rowView}>
                <View><Text>##Row 01 - Col00##</Text></View>
                <View><Text>##Row 01 - Col01##</Text></View>
                <View><Text>##Row 01 - Col02##</Text></View>
            </View>
        </View>
    )
}
export default RelayComponent;