import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, ScrollView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const OPENAI_API_KEY = Constants.expoConfig.extra.openaiApiKey;

export default function PreviewPlanScreen({ route }) {
    const { businessName, productDescription, targetAudience } = route.params;

    const [loading, setLoading] = useState(true);
    const [aiPlan, setAiPlan] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAIPlan = async () => {
            try {
                console.log("OPENAI_API_KEY:", OPENAI_API_KEY);

                const prompt = `
You're an expert in short-form marketing. Create a short video marketing plan for the following:

Business Name: ${businessName}
Product/Service: ${productDescription}
Target Audience: ${targetAudience}

Give:
- 3 viral video ideas
- Hook/script suggestions
- Shot types and styles
- Suggested hashtags
`;

                console.log("Sending prompt to OpenAI:", prompt);

                const response = await fetch('https://api.openai.com/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${OPENAI_API_KEY}`,
                    },
                    body: JSON.stringify({
                        model: 'gpt-3.5-turbo',
                        messages: [{ role: 'user', content: prompt }],
                        max_tokens: 500,
                    }),
                });

                console.log("OpenAI response status:", response.status);

                const data = await response.json();
                console.log("OpenAI response body:", data);

                if (data.choices && data.choices.length > 0) {
                    setAiPlan(data.choices[0].message.content);
                } else if (data.error) {
                    setError(`OpenAI Error: ${data.error.message}`);
                } else {
                    setError('No response from AI');
                }

            } catch (err) {
                console.error("Error during fetch:", err);
                setError('Failed to fetch video plan');
            } finally {
                setLoading(false);
            }
        };

        fetchAIPlan();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Your AI Video Plan</Text>
            {loading ? (
                <ActivityIndicator size="large" color="#007AFF" />
            ) : error ? (
                <Text style={styles.error}>{error}</Text>
            ) : (
                <ScrollView>
                    <Text style={styles.planText}>{aiPlan}</Text>
                </ScrollView>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { padding: 20, flex: 1, backgroundColor: '#fff' },
    heading: { fontSize: 24, fontWeight: '600', marginBottom: 20 },
    planText: { fontSize: 16, lineHeight: 24, color: '#333' },
    error: { color: 'red', fontSize: 16 }
});
