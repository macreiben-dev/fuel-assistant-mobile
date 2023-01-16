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

const RelayComponent = () => {

return <View style={[
    styles.container,
    {
        // Try setting `flexDirection` to `"row"`.
        flexDirection: 'column',
    },
]}>

        <View style={[
            styles.container,
            {
                // Try setting `flexDirection` to `"row"`.
                flexDirection: 'column',
            }]}>
            <View><Text>Row 00 - Col00</Text></View>
            <View><Text>Row 00 - Col01</Text></View>
            <View><Text>Row 00 - Col02</Text></View>
        </View>
        {/* <View><Text>From relay component row 02</Text></View>
        <View><Text>From relay component row 03</Text></View> */}

    </View>

    
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
})


export default RelayComponent;