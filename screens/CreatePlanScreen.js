import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function CreatePlanScreen({ navigation }) {
    const [businessName, setBusinessName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [targetAudience, setTargetAudience] = useState('');

    const handleNext = () => {
        navigation.navigate('ConfirmInfo', {
            businessName,
            productDescription,
            targetAudience
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Tell us about your business</Text>

            <TextInput
                style={styles.input}
                placeholder="Business name"
                value={businessName}
                onChangeText={setBusinessName}
            />
            <TextInput
                style={styles.input}
                placeholder="What do you sell?"
                value={productDescription}
                onChangeText={setProductDescription}
            />
            <TextInput
                style={styles.input}
                placeholder="Who is your ideal customer?"
                value={targetAudience}
                onChangeText={setTargetAudience}
            />

            <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}>Generate Video Plan</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { padding: 20, flex: 1, backgroundColor: '#fff' },
    heading: { fontSize: 24, fontWeight: '600', marginBottom: 20, textAlign: 'center' },
    input: { height: 50, borderColor: '#ccc', borderWidth: 1, paddingHorizontal: 12, borderRadius: 8, marginBottom: 16 },
    button: { backgroundColor: '#007AFF', padding: 16, borderRadius: 8, alignItems: 'center', marginTop: 10 },
    buttonText: { color: '#fff', fontWeight: 'bold' },
});
