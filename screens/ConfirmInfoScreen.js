import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ConfirmInfoScreen({ route, navigation }) {
    const { businessName, productDescription, targetAudience } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Confirm Your Info</Text>
            <Text style={styles.label}>Business Name: {businessName}</Text>
            <Text style={styles.label}>Product: {productDescription}</Text>
            <Text style={styles.label}>Target Audience: {targetAudience}</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('PreviewPlan', {
                    businessName,
                    productDescription,
                    targetAudience
                })}
            >
                <Text style={styles.buttonText}>Looks Good</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, { backgroundColor: '#ccc' }]}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.buttonText}>Go Back to Edit</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { padding: 20, flex: 1, backgroundColor: '#fff' },
    title: { fontSize: 24, fontWeight: '600', marginBottom: 20 },
    label: { fontSize: 18, marginVertical: 8 },
    button: { backgroundColor: '#007AFF', padding: 16, borderRadius: 8, alignItems: 'center', marginTop: 20 },
    buttonText: { color: '#fff', fontWeight: 'bold' },
});
