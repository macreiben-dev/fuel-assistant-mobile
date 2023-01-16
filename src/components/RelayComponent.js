import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { DataTable } from 'react-native-paper';

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
                <View><Text style={styles.textLabel}>Laptime&nbsp;:</Text></View>
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
                        placeholder='ss'></TextInput>
                </View>
                {/* ---------------------------------------------------- */}
            </View>
            {/* ======================================================== */}
            {/* ======================================================== */}
            {/* ======================================================== */}
            <View style={styles.rowView}>
                <View>
                    <Text style={styles.textLabel}>Consumption Liter/Lap&nbsp;:</Text>
                </View>
                {/* ---------------------------------------------------- */}
                <View>
                    <TextInput 
                        keyboardType='numeric'
                        maxLength={4}
                        style={styles.textInputLaptimesMinute}
                        placeholder='0.00'></TextInput>
                </View>
                {/* ---------------------------------------------------- */}
                <View>
                    <Text style={styles.textLabel}>Fuel tank (Liter)&nbsp;:</Text>                    
                </View>
                {/* ---------------------------------------------------- */}
                <View>
                    <TextInput 
                        keyboardType='numeric'
                        maxLength={2}
                        style={styles.textInputLaptimesMinute}
                        placeholder='0'></TextInput>
                </View>
                {/* ---------------------------------------------------- */}
            </View>
            <View style={styles.rowView}>
                <View>
                    <Text style={styles.textLabel}>Total time (min)&nbsp;:</Text>
                </View>
                {/* ---------------------------------------------------- */}
                <View>
                    <TextInput 
                        keyboardType='numeric'
                        maxLength={4}
                        style={styles.textInputLaptimesMinute}
                        placeholder='0'
                        value='55'></TextInput>
                </View>
                {/* ---------------------------------------------------- */}
            </View>
            {/* ======================================================== */}
            {/* ======================================================== */}
            {/* ======================================================== */}
            <View style={styles.rowView}>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>&nbsp;</DataTable.Title>
                        <DataTable.Title numeric>Stint (min)</DataTable.Title>
                        <DataTable.Title numeric>Lap Prev</DataTable.Title>
                        <DataTable.Title numeric>Consumption</DataTable.Title>
                    </DataTable.Header>
                    <DataTable.Row>
                        <DataTable.Title>Total Time</DataTable.Title>
                        <DataTable.Cell numeric>55</DataTable.Cell>
                        <DataTable.Cell numeric>26.83</DataTable.Cell>
                        <DataTable.Cell numeric>74.32</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Title>50% </DataTable.Title>
                        <DataTable.Cell numeric>28</DataTable.Cell>
                        <DataTable.Cell numeric>13.41</DataTable.Cell>
                        <DataTable.Cell numeric>37.16</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Title>60% </DataTable.Title>
                        <DataTable.Cell numeric>33</DataTable.Cell>
                        <DataTable.Cell numeric>16.10</DataTable.Cell>
                        <DataTable.Cell numeric>44.59</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Title>80% </DataTable.Title>
                        <DataTable.Cell numeric>44</DataTable.Cell>
                        <DataTable.Cell numeric>21.46</DataTable.Cell>
                        <DataTable.Cell numeric>59.45</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Title>90% </DataTable.Title>
                        <DataTable.Cell numeric>49.5</DataTable.Cell>
                        <DataTable.Cell numeric>24.15</DataTable.Cell>
                        <DataTable.Cell numeric>66.89</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Title>95% </DataTable.Title>
                        <DataTable.Cell numeric>52.25</DataTable.Cell>
                        <DataTable.Cell numeric>25.49</DataTable.Cell>
                        <DataTable.Cell numeric>70.60</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Title>100% </DataTable.Title>
                        <DataTable.Cell numeric>55</DataTable.Cell>
                        <DataTable.Cell numeric>26.83</DataTable.Cell>
                        <DataTable.Cell numeric>74.32</DataTable.Cell>
                    </DataTable.Row>
                </DataTable>
            </View>
        </View>
    )
}

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
        justifyContent: 'flex-start'
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

export default RelayComponent;