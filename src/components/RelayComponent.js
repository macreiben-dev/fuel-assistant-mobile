import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    rowView: {
        flexDirection: 'row',
        rowGap: 5,
        columnGap: 5,
        minHeight: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textLabel: {
        fontWeight: 'bold'
    },
    textInputLaptimesMinute: {
        width: 40,
        borderWidth: 1,
        padding: 5
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
                <View><Text style={styles.textLabel}>Laptime</Text></View>
                {/* ---------------------------------------------------- */}
                <View>
                    <TextInput 
                        keyboardType='numeric'
                        maxLength={2}
                        style={styles.textInputLaptimesMinute}
                        placeholder='mm' ></TextInput>
                </View>
                {/* ---------------------------------------------------- */}
                <View><Text>:</Text></View>
                {/* ---------------------------------------------------- */}
                <View>
                    <TextInput 
                        keyboardType='numeric'
                        maxLength={2}
                        style={styles.textInputLaptimesMinute}
                        placeholder='ss' ></TextInput>
                </View>
                {/* ---------------------------------------------------- */}
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